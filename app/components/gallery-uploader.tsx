'use client'

import { CldUploadWidget, CloudinaryUploadWidgetResults } from 'next-cloudinary';

interface GalleryUploaderProps {
  onUploadSuccess: () => void;
}

export default function GalleryUploader({ onUploadSuccess }: GalleryUploaderProps) {
  return (
    <div className="mb-8">
      <CldUploadWidget
        options={{
          cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
          uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
          folder: 'gallery',
          sources: ['local', 'url', 'camera'],
          multiple: true
        }}
        onSuccess={(results: CloudinaryUploadWidgetResults) => {
          console.log('Upload results:', results);
          if (results.info && typeof results.info === 'object') {
            console.log('Upload successful:', results.info);
            fetch(`/api/gallery/revalidate?token=${process.env.NEXT_PUBLIC_REVALIDATION_TOKEN}`, {
              method: 'POST'
            }).then(() => {
              onUploadSuccess();
              window.location.reload();
            });
          }
        }}
        onError={(error) => {
          console.error('Upload error:', error);
        }}
      >
        {({ open }) => (
          <button
            onClick={() => open()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            사진 업로드
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
}