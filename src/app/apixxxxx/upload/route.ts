import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import { PDFLoader } from "langchain/document_loaders/fs/pdf"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
import { Document } from 'langchain/document'
//import { AstraDB } from "@datastax/astra-db-ts"
import { getVectorStore } from "@/lib/astradb";
// Initialize AstraDB client
//const astraClient = new AstraDB(process.env.ASTRA_DB_APPLICATION_TOKEN, process.env.ASTRA_DB_ENDPOINT)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const buffer = await file.arrayBuffer()
    const blob = new Blob([new Uint8Array(buffer)], { type: 'application/pdf' })

    // Process and split the PDF
    const documents = await processPDF(blob)

    // Get the vector store
    const vectorStore = await getVectorStore()

    // Save the documents to AstraDB
    await vectorStore.addDocuments(documents)

    // Add this log:
    console.log('Processed documents:', JSON.stringify(documents, null, 2));

    return NextResponse.json({ message: 'File processed and saved successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error in upload API:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

async function processPDF(blob: Blob): Promise<Document[]> {
  console.log('Starting PDF processing');

  const loader = new PDFLoader(blob)
  const docs = await loader.load()
  console.log('PDF loaded, number of documents:', docs.length);

  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  })

  const splitDocs = await textSplitter.splitDocuments(docs)
  console.log('Documents split, number of split documents:', splitDocs.length);

  return splitDocs.map((doc, index) => {
    console.log(`Processing document ${index + 1}/${splitDocs.length}`);
    
    const sanitizedMetadata = sanitizeMetadata({
      ...doc.metadata,
      source: 'uploaded_pdf',
    })

    console.log('Sanitized metadata:', JSON.stringify(sanitizedMetadata, null, 2));

    return new Document({
      pageContent: doc.pageContent,
      metadata: sanitizedMetadata,
    })
  })
}

function sanitizeMetadata(metadata: Record<string, any>): Record<string, any> {
  console.log('Sanitizing metadata');
  const sanitized: Record<string, any> = {}
  for (const [key, value] of Object.entries(metadata)) {
    const sanitizedKey = key.replace(/[^a-zA-Z0-9_-]/g, '_')
    console.log(`Sanitized key: '${key}' -> '${sanitizedKey}'`);
    
    if (typeof value === 'object' && value !== null) {
      // Recursively sanitize nested objects
      sanitized[sanitizedKey] = sanitizeMetadata(value);
    } else {
      sanitized[sanitizedKey] = value;
    }
  }
  return sanitized
}

