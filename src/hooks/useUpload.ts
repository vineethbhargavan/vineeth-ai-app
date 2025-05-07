import { useState } from "react";

export function useUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      console.log("File uploaded:", result);

      // Reset state after successful upload
      setFile(null);
      setUploadProgress(100);
    } catch (err) {
      setError("An error occurred while uploading the file.");
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  return { file, setFile, uploadProgress, isUploading, handleUpload, error };
}