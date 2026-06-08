export interface Project {
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
  year: string;
  client: string;
  scope: string[];
  highlights: string[];
  gallery: { src: string; caption?: string }[];
}

export const projectsData: Project[] = [
  {
    slug: 'gedung-sma-lab-um',
    title: 'Gedung SMA LAB UM',
    category: 'Gedung',
    categoryLabel: 'Architectural Project',
    location: 'Kota Malang, Jawa Timur',
    image: '/images/smalab-um.jpeg',
    description: 'Pemeliharaan fasad gedung SMA Laboratorium Universitas Negeri Malang merupakan proyek krusial untuk mempertahankan estetika dan keamanan bangunan. Proyek ini melibatkan pembersihan menyeluruh, perbaikan retak struktural ringan, dan pelapisan ulang menggunakan material tahan cuaca premium untuk memastikan ketahanan jangka panjang bangunan terhadap iklim tropis.',
    year: '2022-2023',
    client: 'Universitas Negeri Malang (UM)',
    scope: [
      'Pembersihan fasad eksterior',
      'Pemasangan paving',
      'Pembuatan Lapangan Olahraga Rooftop'
    ],
    highlights: [
      'Diselesaikan 2 minggu lebih awal dari jadwal',
      'Penggunaan material ramah lingkungan',
      'Tidak mengganggu kegiatan belajar mengajar selama pengerjaan'
    ],
    gallery: [
      { src: '/images/smalab-um.jpeg' },
      { src: '/images/proyek/um1.jpg' },
      { src: '/images/proyek/um2.jpg' },
      { src: '/images/proyek/um3.jpg' },
      { src: '/images/proyek/um4.jpg' },
      { src: '/images/proyek/um5.jpg', caption: 'Pemasangan paving halaman depan SMA LAB UM' },
      { src: '/images/proyek/um6.jpg', caption: 'Pemasangan paving halaman depan SMA LAB UM' },
      { src: '/images/proyek/lapanganumsma.jpg', caption: 'Pembuatan Lapangan Olahraga Rooftop' },
    ]
  },
  {
    slug: 'sd-lab-um-blitar',
    title: 'SD LAB UM Blitar',
    category: 'Gedung',
    categoryLabel: 'Educational Facility',
    location: 'Kota Blitar, Jawa Timur',
    image: '/images/sdlab-um-blitar.jpeg',
    description: 'Pembangunan ruang kelas lantai 3 SD LAB UM Kota Blitar.',
    year: '2022',
    client: 'Universitas Negeri Malang',
    scope: ['Konstruksi struktur atas', 'Pekerjaan arsitektur', 'Instalasi MEP'],
    highlights: ['Standar keamanan sekolah tinggi', 'Desain ventilasi optimal'],
    gallery: [
      { src: '/images/proyek/sdlab1.jpg' },
      { src: '/images/proyek/sdlab2.jpg' },
      { src: '/images/proyek/sdlab3.jpg' },
    ]
  },
  {
    slug: 'pocari-sweet-pasuruan',
    title: 'Pocari Sweet Kejayaan Pasuruan',
    category: 'Infrastruktur',
    categoryLabel: 'Industrial Facility',
    location: 'Pasuruan, Jawa Timur',
    image: '/images/pocarisweet-pasuruan.jpeg',
    description: 'Proyek infrastruktur dan pemeliharaan untuk fasilitas pabrik Pocari Sweet di Kejayaan, Pasuruan.',
    year: '2023-2024',
    client: 'PT. Amerta Indah Otsuka',
    scope: ['Land Clearing Parkir Mobil', 'Sumur resapan', 'Galian Program Penghijauan', 'Perbaikan Pintu Utama Kantor', 'Relayout Kanopi Kantin & Teras Kantin'],
    highlights: ['Standar kebersihan pabrik makanan & minuman', 'Ketepatan waktu dan presisi'],
    gallery: [
      { src: '/images/proyek/amerta1.jpg', caption: 'LAND CLEARING PARKIR MOBIL PT.AMERTA INDAH OTSUKA 2023' },
      { src: '/images/proyek/amerta2.jpg', caption: 'Sumur resapan 2023 2023' },
      { src: '/images/proyek/amerta3.jpg', caption: 'Galian Program Penghijauan 2023' },
      { src: '/images/proyek/amerta4.jpg', caption: 'Perbaikan Pintu Utama Kantor 2023' },
      { src: '/images/proyek/amerta5.png', caption: 'Relayout Kanopi Kantin & Teras Kantin 2024' },
    ]
  },
  {
    slug: 'gedung-c-fak-hukum-ub',
    title: 'Gedung C Fakultas Hukum UB',
    category: 'Gedung',
    categoryLabel: 'Institutional Building',
    location: 'Universitas Brawijaya, Kota Malang, Jawa Timur',
    image: '/images/gedung-c-fak-hukum-ub.jpeg',
    description: 'Renovasi dinding eksterior Gedung C Fakultas Hukum Universitas Brawijaya.',
    year: '2024',
    client: 'Universitas Brawijaya',
    scope: ['Renovasi eksterior', 'Perbaikan struktur luar'],
    highlights: ['Estetika bangunan universitas modern'],
    gallery: [
      { src: '/images/proyek/hukum1.png' },
    ]
  },
  {
    slug: 'drainase-gondanglegi-balekambang',
    title: 'Saluran Drainase Ruas Jalan Gondanglegi-Balekambang',
    category: 'Jalan',
    categoryLabel: 'Civil Engineering',
    location: 'Kab.Malang, Jawa Timur',
    image: '/images/drainase-balekambang.jpeg',
    description: 'Pengerjaan sistem drainase untuk mendukung infrastruktur jalan lintas selatan.',
    year: '2023',
    client: 'Pemerintah Kabupaten Malang',
    scope: ['Pekerjaan tanah', 'Pemasangan gorong-gorong', 'Pengecoran'],
    highlights: ['Manajemen tata air optimal', 'Durabilitas tinggi terhadap cuaca ekstrim'],
    gallery: [
      { src: '/images/drainase-balekambang.jpeg' },
    ]
  },
  {
    slug: 'dapur-gedung-um-b-29',
    title: 'Dapur Gedung B-29 Universitas Negeri Malang',
    category: 'Gedung',
    categoryLabel: 'Office Development',
    location: 'Malang, Jawa Timur',
    image: '/images/proyek/dapurum1.jpg',
    description: 'Pembuatan dapur gedung B-29 Universitas Negeri Malang',
    year: '2024',
    client: 'Universitas Negeri Malang',
    scope: ['Rancang Bangun Dapur'],
    highlights: ['Desain futuristik'],
    gallery: [
      { src: '/images/proyek/dapurum1.jpg' },
      { src: '/images/proyek/dapurum2.jpg' },
      { src: '/images/proyek/dapurum3.jpg' },

    ]
  },
  {
    slug: 'proyek-7',
    title: 'Pembangunan Selasar Fakultas Kedokteran Universitas Brawijaya',
    category: 'Gedung',
    categoryLabel: 'Office Development',
    location: 'Kota Malang, Jawa Timur',
    image: '/images/logocv.png',
    description: 'Pembangunan Selasar Fakultas Kedokteran Tahap I.',
    year: '2022',
    client: 'Universitas Brawijaya',
    scope: ['Pembangunan Selasar'],
    highlights: ['Desain futuristik'],
    gallery: [
      { src: '/images/proyek/kedokteran1.jpg' },
      { src: '/images/proyek/kedokteran2.jpg' },
      { src: '/images/proyek/kedokteran3.jpg' },
      { src: '/images/proyek/kedokteran4.jpg' },

    ]
  },
  {
    slug: 'proyek-8',
    title: 'Pembangunan Gazebo & Selasar Fakultas Kedokteran Universitas Brawijaya',
    category: 'Gedung',
    categoryLabel: 'Office Development',
    location: 'Kota Malang, Jawa Timur',
    image: '/images/logocv.png',
    description: 'Pembangunan Selasar & Gazebo Fakultas Kedokteran Universitas Brawijaya',
    year: '2023',
    client: 'Universitas Brawijaya',
    scope: ['Pembangunan Selasar & Gazebo'],
    highlights: ['Desain futuristik'],
    gallery: [
      { src: '/images/proyek/ub-gazebo1.jpg' },
      { src: '/images/proyek/ub-gazebo2.jpg' },
    ]
  },
  {
    slug: 'proyek-9',
    title: 'Universitas Brawijaya Fakultas Ilmu Budaya',
    category: 'Interior',
    categoryLabel: 'Office Development',
    location: 'Kota Malang, Jawa Timur',
    image: '/images/logocv.png',
    description: 'Perbaikan Ruang Resepsionis, pembuatan Ruang Galeri dan Ruang LBEKRAF Fakultas Ilmu Budaya Universitas Brawijaya',
    year: '2023',
    client: 'Universitas Brawijaya',
    scope: ['Pembuatan Interior', 'Perbaikan Interior'],
    highlights: ['Desain futuristik'],
    gallery: [
      { src: '/images/proyek/galerifib1.png' },
      { src: '/images/proyek/galerifib2.jpg' },
      { src: '/images/proyek/ruang-fib1.jpg' },
      { src: '/images/proyek/ruang-fib2.jpg' },
      { src: '/images/proyek/fib-resepsionis1.jpg' },
      { src: '/images/proyek/fib-resepsionis2.jpg' },
      { src: '/images/proyek/fib-resepsionis3.jpg' },
    ]
  },
];
