export interface GalleryPhoto {
  /** Path under public/ for the full-size image. */
  src: string;
  /** Optional WebP twin, same dimensions. */
  webp?: string;
  alt: string;
  width: number;
  height: number;
}

export const gallery: GalleryPhoto[] = [];
