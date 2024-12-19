import React from 'react';
import GalleryGrid from '../components/gallery-grid';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">갤러리</h1>
      <GalleryGrid />
    </div>
  );
}