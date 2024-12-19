'use client'

import { CldImage } from 'next-cloudinary';
import { useState, useEffect } from 'react';
import GalleryUploader from './gallery-uploader';

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  resource_type: string;
  created_at: string;
  width: number;
  height: number;
}

export default function GalleryGrid() {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminToken, setAdminToken] = useState('');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const fetchImages = async () => {
    try {
      const res = await fetch('/api/gallery', {
        cache: 'no-store',
        next: { revalidate: 0 }
      });
      const data = await res.json();
      if (Array.isArray(data)) {
        setImages(data as CloudinaryImage[]);
      }
    } catch (error) {
      console.error('Failed to fetch images:', error);
      setImages([]);
    }
  };

  const deleteSelectedImages = async () => {
    try {
      for (const publicId of selectedImages) {
        const res = await fetch('/api/gallery/delete', {
          method: 'DELETE',
          body: JSON.stringify({ publicId, adminToken }),
        });
        if (!res.ok) {
          alert('삭제 권한이 없습니다.');
          return;
        }
      }
      
      // 모든 이미지 삭제 후 한 번만 재검증 및 새로고침
      await fetch(`/api/gallery/revalidate?token=${process.env.NEXT_PUBLIC_REVALIDATION_TOKEN}`, {
        method: 'POST'
      });
      await fetchImages();
      window.location.reload();
      setSelectedImages([]);
    } catch (error) {
      console.error('Failed to delete images:', error);
    }
  };

  const toggleImageSelection = (publicId: string) => {
    setSelectedImages(prev => 
      prev.includes(publicId) 
        ? prev.filter(id => id !== publicId)
        : [...prev, publicId]
    );
  };

  const verifyAdminToken = async (token: string) => {
    try {
      const res = await fetch('/api/gallery/verify', {
        method: 'POST',
        body: JSON.stringify({ token })
      });
      setIsAdmin(res.ok);
    } catch (error) {
      console.error('Admin verification failed:', error);
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <div className="mb-4">
        <input
          type="password"
          placeholder="관리자 토큰 입력"
          value={adminToken}
          onChange={async (e) => {
            const newToken = e.target.value;
            setAdminToken(newToken);
            if (newToken.length > 0) {
              await verifyAdminToken(newToken);
            } else {
              setIsAdmin(false);
            }
          }}
          className="p-2 border rounded w-64"
        />
        {isAdmin && <span className="ml-2 text-green-500">✓ 관리자 확인됨</span>}
      </div>
      <GalleryUploader onUploadSuccess={fetchImages} />
      {isAdmin && selectedImages.length > 0 && (
        <button
          onClick={deleteSelectedImages}
          className="mb-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          선택한 이미지 삭제 ({selectedImages.length}개)
        </button>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.public_id} className="relative aspect-square group">
            <CldImage
              src={image.public_id}
              alt="Gallery image"
              fill
              className="object-cover rounded-lg"
            />
            {isAdmin && (
              <div className="absolute top-2 right-2 flex gap-2">
                <input
                  type="checkbox"
                  checked={selectedImages.includes(image.public_id)}
                  onChange={() => toggleImageSelection(image.public_id)}
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}