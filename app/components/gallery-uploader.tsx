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
          multiple: true,
          showAdvancedOptions: true,
          showCompletedButton: true,
          singleUploadAutoClose: false,
          maxFiles: 10,
          clientAllowedFormats: ['image'],
          maxFileSize: 10000000,
          preBatch: (cb: (data: unknown) => void, data: unknown) => {
            return cb(data as unknown);
          },
          showSkipCropButton: false,
          showPoweredBy: false,
          styles: {
            palette: {
              window: "#FFFFFF",
              windowBorder: "#90A0B3",
              tabIcon: "#0078FF",
              menuIcons: "#5A616A",
              textDark: "#000000",
              textLight: "#FFFFFF",
              link: "#0078FF",
              action: "#FF620C",
              inactiveTabIcon: "#0E2F5A",
              error: "#F44235",
              inProgress: "#0078FF",
              complete: "#20B832",
              sourceBg: "#E4EBF1"
            },
            fonts: {
              default: null,
              "'Fira Sans', sans-serif": {
                url: "https://fonts.googleapis.com/css?family=Fira+Sans",
                active: true
              }
            }
          }
        }}
        onSuccess={(results: CloudinaryUploadWidgetResults) => {
          console.log('Upload results:', results);
          if (results.info && typeof results.info === 'object') {
            console.log('Upload successful:', results.info);
            fetch(`/api/gallery/revalidate?token=${process.env.NEXT_PUBLIC_REVALIDATION_TOKEN}`, {
              method: 'POST'
            }).then(() => {
              onUploadSuccess();
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