interface GalleryItem {
    id: string;
    title: string;
    lat: number;
    lon: number;
    thumbnail: string;
    data: string;
    width: number;
    height: number;
    size: number;
    date_added: number;
}

interface GalleryAlbum {
    id: string;
    title: string;
}

interface GalleryPermissionRequestResult {
    success: any;
    message: string;
}

interface GalleryAPI {
    getAlbums: (cb?: (items: Array<GalleryAlbum>) => void, err?: (data: any) => void) => void
    getMedia: (album: GalleryAlbum, cb?: (items: Array<GalleryItem>) => void, err?: (data: any) => void) => void;
    getMediaThumbnail: (media: GalleryItem, cb?: (item: GalleryItem) => void, err?: (data: any) => void) => void;
    getHQImageData: (media: GalleryItem, cb?: (item: any) => void, err?: (data: any) => void) => void;
    checkPermission: (cb?: (result: GalleryPermissionRequestResult) => void, err?: (data: any) => void) => void;
}

declare const galleryAPI: GalleryAPI;