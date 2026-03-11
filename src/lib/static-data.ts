// ============================================================
// STATIC DATA — File Pusat Data Website FH UNPAL
// Data diambil dari database produksi (SQL dump 23 Feb 2026).
// Edit file ini untuk mengubah konten website.
// ============================================================

// ════════════════════════════════════════════════════════════
// TYPES
// ════════════════════════════════════════════════════════════

export interface SiteConfig {
    name: string;
    university: string;
    shortName: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    socialMedia: {
        instagram: string;
        facebook: string;
        youtube: string;
    };
    mapUrl: string;
}

export interface Announcement {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    category: string;
    imageUrl: string | null;
}

export interface Lecturer {
    id: number;
    name: string;
    nidn: string;
    position: string;
    specialization: string;
    education: string;
    email: string | null;
    imageUrl: string | null;
}

export interface Staff {
    id: number;
    name: string;
    position: string;
    imageUrl: string | null;
}

export interface Organization {
    id: number;
    name: string;
    description: string | null;
    imageUrl: string | null;
}

export interface GalleryItem {
    id: string;
    title: string;
    description: string | null;
    filePath: string;
    thumbnailPath: string | null;
    mediaType: string;
    categoryName: string | null;
    createdAt: Date | null;
}

export interface HeroSlide {
    id: number;
    imageUrl: string;
    title: string | null;
    subtitle: string | null;
    buttonText: string | null;
    buttonLink: string | null;
    order: number;
    isActive: boolean;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    image: string | null;
    rating: number;
}

export interface Partner {
    id: number;
    name: string;
    logo: string | null;
    url: string | null;
    order: number;
}

export interface ContactInfo {
    name: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
    phone: string;
    fax: string;
    email: string;
    website: string;
    operatingHours: string;
    mapUrl: string;
}

export interface ProfileData {
    sejarah: string;
    visi: string;
    misi: string[];
    akreditasi: {
        grade: string;
        sk: string;
        validUntil: string;
        description: string;
    };
    tujuan: string;
    motto: string;
    dekanName: string;
    sambutan: string;
    dekanImage: string;
    stats: {
        students: string;
        studyPrograms: string;
        partners: string;
        yearsStanding: string;
        successfulAlumni: string;
    };
}

export interface PmbTrack {
    id: string;
    title: string;
    description: string;
}

export interface PmbClass {
    id: string;
    title: string;
    type: string;
    description: string;
    schedule: string;
    duration: string;
    icon: string;
}

export interface PmbFeeCategory {
    title: string;
    total: string;
    items: { label: string; amount: string }[];
}

export interface PmbTeamMember {
    name: string;
    role: string;
    phone: string;
    email: string;
    image: string;
}

export interface PmbData {
    tracks: PmbTrack[];
    classes: PmbClass[];
    fees: {
        murni: PmbFeeCategory[];
        transisi: PmbFeeCategory[];
    };
    requirements: {
        murni: string[];
        transisi: string[];
    };
    team: PmbTeamMember[];
}

export interface Journal {
    id: number;
    title: string;
    imageUrl: string;
    link: string;
}

// ════════════════════════════════════════════════════════════
// 1. SITE CONFIG (Konfigurasi Situs)
// ════════════════════════════════════════════════════════════

export const siteConfig: SiteConfig = {
    name: "Fakultas Hukum",
    university: "Universitas Palembang",
    shortName: "FH UNPAL",
    description: "\"Menjunjung tinggi keadilan, menegakkan hukum, dan membentuk sarjana hukum yang profesional, berintegritas, serta bermanfaat bagi masyarakat.\"",
    address: "Jl. Dharmapala No.31.A, Bukit Baru, Kec. Ilir Bar. I, Kota Palembang, Sumatera Selatan 30139",
    phone: "(0711) 440650",
    email: "unpalfakultashukum@gmail.com",
    socialMedia: {
        instagram: "https://www.instagram.com/hukum_unpal",
        facebook: "https://facebook.com/fakultas_hukum_unpal",
        youtube: "https://www.youtube.com/@FakultasHukumUnpal",
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2395.807860595995!2d104.72401192738623!3d-2.9929630753803074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b758b7562ac19%3A0xf5f8dbb0c9de98df!2sUniversitas%20Palembang!5e0!3m2!1sid!2sid!4v1771689222289!5m2!1sid!2sid",
};

// ════════════════════════════════════════════════════════════
// 2. PROFIL FAKULTAS
// ════════════════════════════════════════════════════════════

export const profileData: ProfileData = {
    sejarah: "Fakultas Hukum merupakan salah satu fakultas yang berdiri sejak awal berdirinya Universitas Palembang. Kehadiran Fakultas Hukum dilatarbelakangi oleh kebutuhan masyarakat Sumatera Selatan akan pendidikan tinggi di bidang hukum yang mampu mencetak sarjana hukum yang profesional,berintegritas, serta berwawasan kebangsaan. Secara kelembagaan, Universitas Palembang memperoleh izin pendirian berdasarkan Surat Keputusan Nomor 79/Kop.II/N.IV/82 tanggal 8 April 1982 yang ditandatangani oleh Koordinator Perguruan Tinggi Swasta Wilayah II. SK tersebut menjadi dasar hukum berdirinya Universitas Palembang sebagai perguruan tinggi swasta yang sah dan diakui. Selanjutnya, Fakultas Hukum resmi memperoleh izin pembukaan Program Studi berdasarkan Surat Keputusan Nomor 06/I/0/1985 tanggal 2 Desember 1985 yang ditandatangani oleh Sekretaris Jenderal Departemen Pendidikan dan Kebudayaan Republik Indonesia. Dengan terbitnya SK tersebut, Fakultas Hukum secara resmi menyelenggarakan pendidikan tinggi di bidang ilmu hukum.",
    visi: "Menjadi program studi ilmu hukum yang menghasilkan sarjana hukum profesional di bidang praktisi hukum yang mampu bersaing di masyarakat.",
    misi: [
        "Menyelenggarakan pendidikan akademik untuk melaksanakan dan mengembangkan ilmu pengetahuan di bidang hukum",
        "Menyelenggarakan dan mengembangkan kegiatan penelitian serta menghasilkan karya ilmiah di bidang ilmu hukum yang relevan dengan kebutuhan masyarakat.",
        "Menyelenggarakan pengabdian kepada masyarakat melalui penyuluhan hukum dan konsultasi hukum",
        "Mengembangkan sumber daya manusia yang inovatif, profesional yang memiliki budi pekerti yang luhur sesuai dengan kebutuhan pasar tenaga kerja",
    ],
    akreditasi: {
        grade: "B",
        sk: "492/SK/BAN-PT/Ak.Ppj/S/II/2023",
        validUntil: "2028-02-01",
        description: "Terakreditasi B oleh Badan Akreditasi Nasional Perguruan Tinggi.",
    },
    tujuan: "Menghasilkan lulusan ilmu hukum yang memiliki kemampuan akademik,profesional, dan berdaya saing serta mampu menerapkan teori dan praktik hukum di bidang pemerintahan maupun swasta. Lulusan juga diharapkan memiliki sikap dan perilaku yang baik serta mampu mengabdikan ilmunya untuk pengembangan ilmu hukum, profesi hukum, dan kesejahteraan masyarakat. Selain itu, menghasilkan penelitian hukum yang berkualitas dengan melibatkan mahasiswa guna mendukung penegakan hukum dan memberikan manfaat bagi masyarakat melalui kegiatan pengabdian.",
    motto: "\"Mencetak generasi ahli hukum yang berintegritas, kritis, dan siap menegakkan keadilan bagi masyarakat.\"",
    dekanName: "Dr. Ardiana Hidayah, S.H., M.H.",
    sambutan: "Puji dan syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa atas rahmat dan karunia-Nya, sehinggaFakultas Hukum Universitas Palembang terus berkembang dan berkontribusi dalam mencetak sumber daya manusia yang unggul di bidang hukum.\n\nFakultas Hukum Universitas Palembang hadir sebagai bagian dari komitmen institusi dalam menyelenggarakan pendidikan tinggi yang berkualitas, profesional, dan berintegritas. Sejak berdiri,Fakultas Hukum berupaya membangun tradisi akademik yang kuat melalui pelaksanaan Tri Dharma Perguruan Tinggi, yaitu pendidikan dan pengajaran, penelitian, serta pengabdian kepada masyarakat. \n\nKami berkomitmen untuk menghasilkan lulusan yang tidak hanya memiliki kompetensi akademik yang mumpuni, tetapi juga memiliki karakter, etika profesi, serta kepekaan sosial yang tinggi. Di tengah dinamika perkembangan hukum nasional dan global, Fakultas Hukum terus melakukan pembaruan kurikulum, peningkatan kualitas sumber daya dosen, serta penguatan kerja sama dengan berbagai lembaga pemerintah maupun swasta. \n\nKami menyadari bahwa tantangan dunia hukum ke depan semakin kompleks. Oleh karena itu, kami mendorong seluruh civitas akademika untuk senantiasa adaptif, inovatif, dan menjunjung tinggi nilai-nilai keadilan serta supremasi hukum. \n\nAkhir kata, kami mengucapkan terima kasih kepada seluruh pihak yang telah memberikan dukungan dan kepercayaan kepada Fakultas Hukum Universitas Palembang. Semoga ke depan, Fakultas Hukum semakin maju dan mampu memberikan kontribusi nyata bagi masyarakat, bangsa, dan negara.",
    dekanImage: "/uploads/profile/1771685156842-WhatsApp-Image-2026-02-20-at-10.46.29.jpeg",
    stats: {
        students: "1000",
        studyPrograms: "1",
        partners: "29",
        yearsStanding: "1985",
        successfulAlumni: "6000",
    },
};

// ════════════════════════════════════════════════════════════
// 3. CONTACT INFO (Info Kontak)
// ════════════════════════════════════════════════════════════

export const contactInfo: ContactInfo = {
    name: "Fakultas Hukum Universitas Palembang",
    address: "Jl. Dharmapala No.31.A, Bukit Baru, Kec. Ilir Bar. I,",
    city: "Kota Palembang",
    province: "Sumatera Selatan",
    postalCode: "30139",
    phone: "(0711) 441735",
    fax: "(0711) 441436",
    email: "unpalfakultashukum@gmail.com",
    website: "https://fhunpal.id",
    operatingHours: "Senin - Jumat: 08:00 - 16:00, Sabtu: 08:00 - 12:00",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2395.807860595995!2d104.72401192738623!3d-2.9929630753803074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b758b7562ac19%3A0xf5f8dbb0c9de98df!2sUniversitas%20Palembang!5e0!3m2!1sid!2sid!4v1771689222289!5m2!1sid!2sid",
};

// ════════════════════════════════════════════════════════════
// 4. BERITA & PENGUMUMAN
// ════════════════════════════════════════════════════════════

export const announcements: Announcement[] = [
    {
        id: 2,
        title: "Pembukaan Pendaftaran Mahasiswa Baru Gelombang 1",
        excerpt: "PMB FH UNPAL tahun akademik 2026/2027 telah resmi dibuka. Daftar sekarang untuk masa depan gemilang.",
        content: "Rincian prosedur pendaftaran, persyaratan, dan jadwal seleksi PMB gelombang pertama...",
        date: "20 Feb 2026",
        category: "PMB",
        imageUrl: "/uploads/news/pmb.png",
    },
    {
        id: 5,
        title: "Kerjasama .",
        excerpt: "Penadatanganan Perjanjian Kerjasama antara Pengadilan Negeri Palembang Kelas 1 A Khusus dengan Fakultas Hukum Universitas Palembangn Jika Anda masih melihat pesan tersebut di konsol pengembang (terutama saat menggunakan extension mode gelap), Anda bisa mencoba membukanya di Incognito Mode atau menonaktifkan extension untuk memastikan semuanya berjalan normal. Secara fungsional, error ini biasanya tidak merusak aplikasi, namun perbaikan di atas akan meminimalisirnya.",
        content: "Penadatanganan Perjanjian Kerjasama antara Pengadilan Negeri Palembang Kelas 1 A Khusus dengan Fakultas Hukum Universitas Palembangn Jika Anda masih melihat pesan tersebut di konsol pengembang (terutama saat menggunakan extension mode gelap), Anda bisa mencoba membukanya di Incognito Mode atau menonaktifkan extension untuk memastikan semuanya berjalan normal. Secara fungsional, error ini biasanya tidak merusak aplikasi, namun perbaikan di atas akan meminimalisirnya.",
        date: "22 feb 2026",
        category: "Berita",
        imageUrl: "/uploads/news/1771751838430-Screenshot-2026-02-22-161517.png",
    },
    {
        id: 4,
        title: "Webinar Nasional Hukum Asuransi",
        excerpt: "",
        content: "",
        date: "25 Feb 2026",
        category: "Akademik",
        imageUrl: "/uploads/news/Screenshot 2026-02-26 054835.png",
    },
];

// ════════════════════════════════════════════════════════════
// 5. DOSEN
// ════════════════════════════════════════════════════════════

export const lecturers: Lecturer[] = [
    {
        id: 1,
        name: "Dr. Ardiana Hidayah, S.H., M.H.",
        nidn: "0217098302",
        position: "Dekan",
        specialization: "Hukum Perdata/Hukum Bisnis",
        education: "S3 Ilmu Hukum- Universitas Sriwijaya",
        email: "ardianahidayah@unpal.ac.id",
        imageUrl: "/uploads/dosen/Dr. Ardiana Hidayah, S.H., M.H.jpg",
    },
    {
        id: 2,
        name: "Farrah Rizky Amelia, S.H., M.H.",
        nidn: "0226098503",
        position: "Wakil Dekan I",
        specialization: "Hukum Perdata/Hukum Bisnis",
        education: "S2 Ilmu Hukum- Universitas Sriwijaya",
        email: "kikymirza@unpal.ac.id",
        imageUrl: "/uploads/dosen/Farrah Rizky Amelia, S.H., M.H..jpg",
    },
    {
        id: 3,
        name: "Akhmad Dani, S.H., M.H.",
        nidn: "0206016102",
        position: "Wakil Dekan II",
        specialization: "Hukum Tata Negara",
        education: "S2 Ilmu Hukum- Universitas Sriwijaya",
        email: "akhmaddani@unpal.ac.id",
        imageUrl: "/uploads/dosen/H. Akhmad Dani, S.H., M.H..jpg",
    },
    {
        id: 4,
        name: "Amanda Lanisya, S.H., M.H.",
        nidn: "9937768669",
        position: "Wakil Dekan III",
        specialization: "Hukum Perdata/Hukum Bisnis",
        education: "S2 Ilmu Hukum- Universitas Sriwijaya",
        email: "amandamukti92@gmail.com",
        imageUrl: "/uploads/dosen/Amanda Lanisya,S.H., M.H..jpg",
    },
    {
        id: 5,
        name: "Fitriah, S.H., M.H.",
        nidn: "0224117101",
        position: "Ketua Program Kekhususan Hukum Keperdataan",
        specialization: "Hukum Perdata/Hukum Bisnis",
        education: "S2 Ilmu Hukum- Universitas Sriwijaya",
        email: "fitriah@unpal.ac.id",
        imageUrl: "/uploads/dosen/Fitriah, S.H., M.H..jpg",
    },
    {
        id: 6,
        name: "Hijawati, S.H., M.H.",
        nidn: "0205096601",
        position: "Sekretaris Program Kekhususan Hukum Keperdataan",
        specialization: "Hukum Perdata/Hukum Bisnis",
        education: "S2 Ilmu Hukum- Universitas Sriwijaya",
        email: "hijawati@unpal.ac.id",
        imageUrl: "/uploads/dosen/Hijawati, S.H., M.H..jpg",
    },
    {
        id: 7,
        name: "Evi Purnamawati, S.H., M.H.",
        nidn: "0213037201",
        position: "Ketua Program Kekhususan Hukum Kenegaraan",
        specialization: "Hukum Tata Negara",
        education: "S2 Ilmu Hukum- Universitas Lampung",
        email: "evipurnamawati@unpal.ac.id",
        imageUrl: "/uploads/dosen/Evi Purnamawati, S.H., M.H..jpg",
    },
    {
        id: 8,
        name: "Khairani Hasibuan, S.H., M.H.",
        nidn: "0202018902",
        position: "Sekretaris Program Kekhususan Hukum Kenegaraan",
        specialization: "Hukum Tata Negara",
        education: "S2 Ilmu Hukum- Universitas Sriwijaya",
        email: "khairani.hsb1989@gmail.com",
        imageUrl: "/uploads/dosen/Khairani Hasibuan, S.H., M.H..jpg",
    },
    {
        id: 9,
        name: "Hendra, S.H., M.H.",
        nidn: "0230087201",
        position: "Ketua Program Kekhususan Hukum Pidana",
        specialization: "Hukum Pidana",
        education: "S2 Ilmu Hukum- Universitas Sriwijaya",
        email: "hendra@unpal.ac.id",
        imageUrl: "/uploads/dosen/Hendra, S H., M.H..jpg",
    },
    {
        id: 10,
        name: "Hary Suharto, S.H., M.H.",
        nidn: "0561763664130243",
        position: "Sekretaris Program Kekhususan Hukum Pidana",
        specialization: "Hukum Pidana",
        education: "S2 Ilmu Hukum- Universitas Sriwijaya",
        email: "harisuharto.hdw@gmail.com",
        imageUrl: "/uploads/dosen/Hary Suharto, S.H., M.H..jpg",
    },
];

// ════════════════════════════════════════════════════════════
// 6. STAFF
// ════════════════════════════════════════════════════════════

export const staffMembers: Staff[] = [
    { id: 1, name: "", position: "Kepala Tata Usaha", imageUrl: "/uploads/staff/yunus.jpg" },
    { id: 2, name: "", position: "Admin Akademik", imageUrl: "/uploads/staff/siska.jpg" },
];

// ════════════════════════════════════════════════════════════
// 7. ORGANISASI MAHASISWA
// ════════════════════════════════════════════════════════════

export const organizations: Organization[] = [
    { id: 1, name: "BEM FH UNPAL", description: "Badan Eksekutif Mahasiswa Fakultas Hukum.", imageUrl: "/uploads/org/bem.png" },
    { id: 2, name: "DPM FH UNPAL", description: "Dewan Perwakilan Mahasiswa.", imageUrl: "/uploads/org/dpm.png" },
];

// ════════════════════════════════════════════════════════════
// 8. HERO SLIDES
// ════════════════════════════════════════════════════════════

export const heroSlides: HeroSlide[] = [
    {
        id: 1,
        imageUrl: "/uploads/hero/1.jpeg",
        title: null,
        subtitle: null,
        buttonText: null,
        buttonLink: null,
        order: 1,
        isActive: true,
    },
    {
        id: 2,
        imageUrl: "/uploads/hero/2.png",
        title: null,
        subtitle: null,
        buttonText: null,
        buttonLink: null,
        order: 2,
        isActive: true,
    },
    {
        id: 3,
        imageUrl: "/uploads/hero/3.png",
        title: null,
        subtitle: null,
        buttonText: null,
        buttonLink: null,
        order: 3,
        isActive: true,
    },
];

// ════════════════════════════════════════════════════════════
// 9. TESTIMONIAL
// ════════════════════════════════════════════════════════════

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Meylanisiam Rahmawaty, S.H.",
        role: "Alumni 2024 - PNS",
        content: "Dosen yang hebat dan kekeluargaan, terima kasih atas kesempatannya dapat kuliah di Fakultas Hukum Universitas Palembang",
        image: "/uploads/testimonial/Meylanisiam Rahmawaty, S.H..jpg",
        rating: 5,
    },
    {
        id: 2,
        name: "Afifuddin, S.H.,M.H.",
        role: "Alumni 2011 - Advokat",
        content: "Para Dosen memberikan bimbingan, pemahaman hukum dan motivasi yang positif bagi saya dalam mengabdi dan berkarya untuk masyarakat",
        image: "/uploads/testimonial/Afifuddin, S.H.,M.H..jpg",
        rating: 5,
    },
    {
        id: 3,
        name: "Gunadi, S.H.",
        role: "Alumni 2024 - Kepala Desa",
        content: "Fakultas Hukum Universitas Palembang sebagai kampus yang memberikan pengalaman hidup saya, bersama orang-orang hebat menjadi rekan dan sahabat, memberikan banyak pelajaran berharga.",
        image: "/uploads/testimonial/Gunadi, S.H..jpg",
        rating: 5,
    },
    {
        id: 4,
        name: "M. Firdaus, S.H, M.H.",
        role: "Alumni 2015 - Politisi/Legislatif",
        content: "Kesan yang baik dan penuh pembelajaran, baik secara akademik dan pengembangan diri. Lingkungan kampus yang kondusif, dosen-dosen yang kompeten dibidang hukum.",
        image: "/uploads/testimonial/M. Firdaus, S.H, M.H..jpg",
        rating: 5,
    },
    {
        id: 6,
        name: "Indah Kumala Dewi, S.H., M.H.",
        role: "Alumni 2009 - Jaksa",
        content: "Sangat baik dan bangga menjadi lulusan Fakultas Hukum Universitas Palembang",
        image: "/uploads/testimonial/Indah Kumala Dewi, S.H., M.H..jpg",
        rating: 5,
    },
    {
        id: 7,
        name: "M. Haris Fadhilah, S.H., M.Kn",
        role: "Alumni 2017- Notaris/Akademisi",
        content: "Kampus yang mengajarkan ilmu hukum dan pengalaman berharga sebagai bekal saya dalam berkarir.",
        image: "/uploads/testimonial/M. Haris Fadhilah, S.H., M.Kn.jpg",
        rating: 5,
    },
    {
        id: 8,
        name: "Armein Ramdhani, S.H., M.H.",
        role: "Alumni 2011 - Jaksa",
        content: "Bahagia pernah menjadi bagian dan lulusan dari Fakultas Hukum Universitas Palembang",
        image: "/uploads/testimonial/Armein Ramdhani, S.H., M.H..jpg",
        rating: 5,
    },
];

// ════════════════════════════════════════════════════════════
// 10. PARTNERS (Mitra)
// ════════════════════════════════════════════════════════════

export const partners: Partner[] = [
    { id: 1, name: "FH METRO", logo: "/uploads/partner/1771754907176-fhhmt.png", url: "#", order: 1 },
    { id: 2, name: "Pengadilan Negeri Palembang", logo: "/uploads/partner/1771754859835-pengadilan-negri-palembang.png", url: "#", order: 2 },
    { id: 4, name: "Universitas Malahayati", logo: "/uploads/partner/1771754945579-UM.png", url: "#", order: 3 },
    { id: 5, name: "Badan Arbitrase Nasional Indonesia", logo: "/uploads/partner/1771754989853-Badan-Arbitrase-Nasional-Indonesia.jpg", url: "#", order: 4 },
];

// ════════════════════════════════════════════════════════════
// 11. GALERI
// ════════════════════════════════════════════════════════════

export const galleryItems: GalleryItem[] = [
    {
        id: "3",
        title: "Benchmarking",
        description: "Benchmarking antara Fakultas Hukum Universitas Palembang dan Fakultas Hukum Universitas Muhamadiyah Metro Lampung.",
        filePath: "/uploads/galeri/1771748463511-Screenshot-2026-02-22-151459.png",
        thumbnailPath: null,
        mediaType: "image",
        categoryName: null,
        createdAt: null,
    },
    {
        id: "4",
        title: "Perkuliahan",
        description: "Perkuliahan bersama mahasiswa di Fakultas Hukum Universitas Palembang. Terus semangat belajar para calon pemimpin di masa depan.",
        filePath: "/uploads/galeri/1771748532460-Screenshot-2026-02-22-151856.png",
        thumbnailPath: null,
        mediaType: "image",
        categoryName: null,
        createdAt: null,
    },
    {
        id: "5",
        title: "Seminar Nasional Persaingan Usaha",
        description: "Seminar Nasional Persaingan Usaha",
        filePath: "/uploads/galeri/1771748638487-Screenshot-2026-02-22-152252.png",
        thumbnailPath: null,
        mediaType: "image",
        categoryName: null,
        createdAt: null,
    },
    {
        id: "6",
        title: "\"Marhaban ya Ramadhan 1447 Hijriah/Tahun 2026 Masehi.",
        description: "Civitas Akademika Fakultas Hukum Universitas Palembang mengucapkan:\n Selamat menunaikan ibadah puasa, semoga Allah memberi kekuatan dan kesehatan agar ibadah berjalan lancar hingga akhir.\"",
        filePath: "/uploads/galeri/1771748752461-Screenshot-2026-02-22-152447.png",
        thumbnailPath: null,
        mediaType: "image",
        categoryName: null,
        createdAt: null,
    },
    {
        id: "7",
        title: "Fakultas Hukum Universitas Palembang",
        description: null,
        filePath: "https://www.youtube.com/watch?v=iIuu7Q9xEy0",
        thumbnailPath: null,
        mediaType: "video",
        categoryName: null,
        createdAt: null,
    },
];

// ════════════════════════════════════════════════════════════
// 12. PMB (Penerimaan Mahasiswa Baru)
// ════════════════════════════════════════════════════════════

export const pmbData: PmbData = {
    tracks: [
        { id: "murni", title: "Lulusan Baru (Murni)", description: "Jalur bagi lulusan SMA/SMK/MA sederajat." },
        { id: "transisi", title: "Pindahan / Lanjutan (Transisi)", description: "Jalur bagi mahasiswa pindahan atau lulusan D3 ke S1." },
    ],
    classes: [
        { id: "1", title: "Kelas A Pagi", type: "REGULER", description: "Kuliah setiap hari kerja.", schedule: "Senin-Kamis", duration: "08:00 - 12:00", icon: "sun" },
        { id: "2", title: "Kelas A Sore", type: "KARYAWAN", description: "Bagi yang bekerja di siang hari.", schedule: "Senin-Kamis", duration: "17:00 - 21:00", icon: "briefcase" },
        { id: "3", title: "Kelas B Jum'at-Sabtu", type: "KARYAWAN", description: "Kuliah di akhir pekan.", schedule: "Juma'at-Sabtu", duration: "08:00 - 17:00", icon: "briefcase" },
    ],
    fees: {
        murni: [
            {
                title: "Kelas A (Pagi dan Sore)",
                total: "4.300.000",
                items: [
                    { label: "Biaya Kuliah", amount: "3.500.000" },
                    { label: "Orientasi Mahasiswa", amount: "800.000" },
                ],
            },
            {
                title: "Kelas B (Jum'at-Sabtu)",
                total: "4.800.000",
                items: [
                    { label: "Biaya Kuliah", amount: "4.000.000" },
                    { label: "Orientasi Mahasiswa", amount: "800.000" },
                ],
            },
        ],
        transisi: [
            {
                title: "Kelas A (Pagi dan Sore)",
                total: "6.300.000",
                items: [
                    { label: "Biaya Kuliah", amount: "4.500.000" },
                    { label: "Biaya Konversi", amount: "1.000.000" },
                    { label: "Orientasi Mahasiswa", amount: "800.000" },
                ],
            },
            {
                title: "Kelas B (Jum'at-Sabtu)",
                total: "6.800.000",
                items: [
                    { label: "Biaya Kuliah", amount: "5.000.000" },
                    { label: "Biaya Konversi", amount: "1.000.000" },
                    { label: "Orientasi Mahasiswa", amount: "800.000" },
                ],
            },
        ],
    },
    requirements: {
        murni: [
            "Mengisi Formulir Pendaftaran",
            "Berijazah SLTA atau Sederajat",
            "Fotocopy Ijazah yang dilegalisir 3 (tiga) lembar",
            "Fotocopy Nilai Ujian Nasional 3 (tiga) lembar",
            "Fotocopy Nilai Raport semester terakhir 3 (tiga) lembar",
            "Fotocopy KTP/WNA Pasport sebanyak 3 (tiga) lembar",
            "Fotocopy Kartu Keluarga (KK) sebanyak 3 (tiga) lembar",
            "Pas Photo Hitam Putih 3×4 cm sebanyak 4 lembar",
            "Pas Photo Berwarna 3×4 cm sebanyak 4 lembar",
            "Biaya Pendaftaran Rp.250.000,-",
        ],
        transisi: [
            "Mengisi Formulir Pendaftaran",
            "Berijazah Program Diploma",
            "Fotocopy Ijazah dan Transkrip Nilai yang dilegalisir masing-masing 3 lembar",
            "Pindahan/Transisi menyerahkan Surat Keterangan Pindah dari Perguruan Tinggi Asal dan Fotocopy Transkrip Nilai yang dilegalisir masing-masing 3 lembar",
            "Ijazah SLTA atau Sederajat untuk mahasiswa Pindahan sebanyak 3 (tiga) lembar",
            "Fotocopy KTP/WNA Pasport sebanyak 3 (tiga) lembar",
            "Fotocopy Kartu Keluarga (KK) sebanyak 3 (tiga) lembar",
            "Pas Photo Hitam Putih 3×4 cm sebanyak 4 lembar",
            "Pas Photo Berwarna 3×4 cm sebanyak 4 lembar",
            "Biaya Pendaftaran Rp.250.000,-",
            "Biaya Konversi Rp.1.000.000,-",
        ],
    },
    team: [
        { name: "Dr. Ardiana Hidayah, S.H., M.H.", role: "Dekan Fakultas Hukum", phone: "08127872614", email: "unpalfakultashukum@gmail.com", image: "/uploads/tim-pmb/1.jpg" },
        { name: "Farrah Rizky Amelia, S.H., M.H.", role: "Wakil Dekan 1", phone: "081928041267", email: "kikymirza@unpal.ac.id", image: "/uploads/tim-pmb/2.jpg" },
        { name: "H.Akhmad Dani, S.H., M.H.", role: "Wakil Dekan 2", phone: "087897165861", email: "akhmaddani@unpal.ac.id", image: "/uploads/tim-pmb/3.jpg" },
    ],
};

// ════════════════════════════════════════════════════════════
// 13. SOCIAL MEDIA
// ════════════════════════════════════════════════════════════

export const socialMediaLinks = [
    { platform: "Instagram", url: "https://instagram.com/fh_unpal", username: "@fh_unpal", icon: "instagram", order: 1 },
    { platform: "Facebook", url: "https://facebook.com/fhunpal", username: "FH UNPAL", icon: "facebook", order: 2 },
];

// ════════════════════════════════════════════════════════════
// 14. AKSES KAMPUS
// ════════════════════════════════════════════════════════════

export const campusAccess = [
    { id: 1, name: "Trans Musi", description: "Gunakan Koridor rute Bukit Besar dan turun di Dharmapala.", icon: "bus", order: 1 },
    { id: 2, name: "Ojek Online", description: "Cari 'Universitas Palembang' di aplikasi.", icon: "bike", order: 2 },
];

// ════════════════════════════════════════════════════════════
// 15. STATISTIK PENGUNJUNG (Statis)
// ════════════════════════════════════════════════════════════

export const visitorCount = 627;

// ════════════════════════════════════════════════════════════
// 16. JURNAL
// ════════════════════════════════════════════════════════════

export const journals: Journal[] = [
    {
        id: 1,
        title: "Editorial Office : Unpal Legal Insight (ULI)",
        imageUrl: "/uploads/jurnal/jurnal1.jpeg",
        link: "https://ejournal.fhunpal.id/index.php/uli",
    },
    {
        id: 2,
        title: "Editorial Office : Dedikasi Unpal",
        imageUrl: "/uploads/jurnal/jurnal2.jpeg",
        link: "https://ejournal.fhunpal.id/index.php/DU",
    },
];

// ════════════════════════════════════════════════════════════
// HELPER FUNCTIONS (Meniru interface lama agar transisi mudah)
// ════════════════════════════════════════════════════════════

export function getUniversityProfile() {
    return {
        name: siteConfig.name,
        shortName: siteConfig.shortName,
        vision: profileData.visi,
        mission: profileData.misi.join("\n"),
        objectives: profileData.tujuan,
        values: "Integritas, Inovasi, Kolaborasi, Unggul",
        history: profileData.sejarah,
        logo: "/images/logo_univ.png",
        motto: profileData.motto,
        establishedYear: 1985,
        accreditation: profileData.akreditasi.grade,
    };
}

export function getCampusStatistics() {
    return {
        totalStudents: parseInt(profileData.stats.students) || 0,
        totalStudyPrograms: parseInt(profileData.stats.studyPrograms) || 0,
        accreditation: profileData.akreditasi.grade,
        internationalPartners: parseInt(profileData.stats.partners) || 0,
    };
}
