import { galleryItems } from '@/lib/static-data';
import GalleryGrid from './GalleryGrid';
import PageHeader from '@/components/layout/page-header';

export default function GaleriPage() {
    return (
        <div className="min-h-screen bg-background overflow-hidden relative">

            <PageHeader
                category="GALERI"
                title="Galeri"
                titleHighlight="Fakultas Hukum"
                description="Dokumentasi kegiatan akademik, kemahasiswaan, dan seremonial di lingkungan Fakultas Hukum Universitas Palembang."
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Gallery Grid (Client Component) */}
                <GalleryGrid mediaItems={galleryItems} />
            </div>
        </div>
    );
}
