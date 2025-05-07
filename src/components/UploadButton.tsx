"use client";

import { Upload } from "lucide-react";
import { useState } from "react";
import UploadDialog from "./UploadDialog";

export default function UploadButton() {
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);

  return (
    <>
      <button onClick={() => setUploadDialogOpen(true)} title="Upload file">
        <Upload size={24} />
      </button>
      <UploadDialog open={uploadDialogOpen} onClose={() => setUploadDialogOpen(false)} />
    </>
  );
}