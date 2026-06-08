import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import ProjectGallery from '@/components/ProjectGallery';


// Fitur Next.js untuk SEO dinamis
export function generateMetadata({ params }: { params: { slug: string } }) {
    const project = projectsData.find((p) => p.slug === params.slug);
    if (!project) return { title: 'Proyek Tidak Ditemukan' };

    return {
        title: `${project.title} | Portofolio Karya Babatan`,
        description: project.description,
    };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    // 1. Cari proyek berdasarkan slug dari URL
    const project = projectsData.find((p) => p.slug === params.slug);

    // 2. Jika tidak ada di data, tampilkan 404
    if (!project) notFound();

    return (
        <main className='-mt-20'>

            {/* Hero Section Halaman Detail */}
            <section className="relative h-[60vh] min-h-[500px] w-full bg-zinc-900">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-transparent flex items-end">
                    <div className="max-w-screen-2xl mx-auto px-8 w-full pb-16">
                        <span className="bg-primary text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-sm mb-4 inline-block">
                            {project.categoryLabel}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black font-headline text-white mb-4">
                            {project.title}
                        </h1>
                        <div className="flex items-center gap-2 text-zinc-200">
                            <span className="material-symbols-outlined text-sm">location_on</span>
                            <span className="font-label text-sm uppercase tracking-wider">{project.location}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section Halaman Detail */}
            <section className="">
                <ProjectGallery gallery={project.gallery} />
            </section>

            {/* Konten Detail */}
            <section className="py-20 px-8 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                {/* Kolom Info Kiri */}
                <div className="md:col-span-1 space-y-8">
                    <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-surface-variant/50">
                        <h3 className="font-headline font-bold text-xl mb-6 border-b border-surface-variant pb-4">Info Proyek</h3>

                        <div className="space-y-6">
                            <div>
                                <p className="text-on-surface-variant text-xs uppercase tracking-widest font-label mb-1">Tahun</p>
                                <p className="font-semibold">{project.year}</p>
                            </div>
                            <div>
                                <p className="text-on-surface-variant text-xs uppercase tracking-widest font-label mb-1">Klien</p>
                                <p className="font-semibold">{project.client}</p>
                            </div>
                            <div>
                                <p className="text-on-surface-variant text-xs uppercase tracking-widest font-label mb-1">Kategori</p>
                                <p className="font-semibold">{project.category}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kolom Deskripsi Kanan */}
                <div className="md:col-span-2 space-y-12">
                    <div>
                        <h2 className="font-headline font-black text-3xl mb-6">Tentang Proyek</h2>
                        <p className="text-on-surface-variant leading-relaxed text-lg">
                            {project.description}
                        </p>
                    </div>

                    {project.scope && project.scope.length > 0 && (
                        <div>
                            <h3 className="font-headline font-bold text-2xl mb-6">Lingkup Pekerjaan</h3>
                            <ul className="space-y-3">
                                {project.scope.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">check_circle</span>
                                        <span className="text-on-surface-variant">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>



            {/* Navigasi Kembali */}
            <section className="pb-20 flex justify-center">
                <Link href="/portofolio" className="group flex items-center gap-3 font-headline font-bold text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
                    Kembali ke Portofolio
                </Link>
            </section>
        </main>
    );
}
