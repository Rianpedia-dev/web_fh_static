import PageHeader from "@/components/layout/page-header";
import { MotionDiv } from "@/components/motion-wrapper";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { journals } from "@/lib/static-data";

export default function JurnalPage() {
    return (
        <main className="min-h-screen bg-background pb-20">
            <PageHeader
                category="Publikasi"
                title="Jurnal"
                titleHighlight="Ilmiah"
                description="Kumpulan jurnal ilmiah yang diterbitkan dan dikelola oleh Fakultas Hukum Universitas Palembang."
            />

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {journals.map((journal, index) => (
                        <MotionDiv
                            key={journal.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-card border border-brand-red/20 rounded-[2.5rem] overflow-hidden flex flex-col h-full transition-all duration-500 hover:border-brand-red/50 hover:shadow-[0_30px_60px_rgba(185,28,28,0.15)]"
                        >
                            {/* Image Container with "Frame" effect */}
                            <div className="relative aspect-[3/4] p-6 bg-muted/30 overflow-hidden">
                                <div className="relative w-full h-full shadow-2xl rounded-lg overflow-hidden transition-transform duration-700 group-hover:scale-105">
                                    {journal.imageUrl ? (
                                        <Image
                                            src={journal.imageUrl}
                                            alt={journal.title}
                                            fill
                                            className="object-contain bg-white"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-muted flex items-center justify-center">
                                            <span className="text-muted-foreground/20 font-bold text-4xl uppercase tracking-tighter">Journal</span>
                                        </div>
                                    )}
                                </div>

                                {/* Visit Button Floating Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-brand-navy/40 backdrop-blur-[2px]" />
                                    <a
                                        href={journal.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative flex items-center justify-center w-16 h-16 bg-brand-red text-white rounded-full shadow-2xl hover:scale-110 transition-transform z-10"
                                    >
                                        <ArrowUpRight className="w-8 h-8" />
                                    </a>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-transparent to-brand-navy/5">
                                <div className="mb-6 text-left">
                                    <span className="text-[10px] font-bold text-brand-red tracking-[0.2em] uppercase mb-2 block">Official Journal</span>
                                    <h3 className="text-lg md:text-xl font-extrabold text-foreground leading-tight group-hover:text-brand-red transition-colors duration-300">
                                        {journal.title}
                                    </h3>
                                </div>

                                <div className="mt-auto">
                                    <a
                                        href={journal.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-foreground text-background font-bold px-8 py-4 rounded-2xl hover:bg-brand-red hover:text-white transition-all duration-500 w-full justify-center group/btn shadow-lg"
                                    >
                                        <span className="text-sm">Explore Publication</span>
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                    </a>
                                </div>
                            </div>

                            {/* Decorative Side Accent */}
                            <div className="absolute top-0 left-0 w-1 h-0 bg-brand-red transition-all duration-700 group-hover:h-full opacity-50" />
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </main>
    );
}
