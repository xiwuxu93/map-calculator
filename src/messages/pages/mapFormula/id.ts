import type { MapFormulaContent } from './types';

const rows = [
  {
    bp: 'Denyut Jantung Normal',
    map: 'Diastol × 0.66',
    notes: 'Pada 60-80 bpm, diastol adalah ~2/3 dari siklus. Rumus standar bekerja dengan sempurna.',
  },
  {
    bp: 'Takikardia (120 bpm)',
    map: 'Diastol × 0.50',
    notes: 'Diastol memendek secara dramatis. Rumus standar meremehkan MAP yang sebenarnya.',
  },
  {
    bp: 'Bradikardia (40 bpm)',
    map: 'Diastol × 0.75',
    notes: 'Diastol memanjang. Rumus standar mungkin melebih-lebihkan MAP yang sebenarnya.',
  },
] as const;

const mapFormulaId: MapFormulaContent = {
  metadata: {
    title:
      'Fisiologi di Balik Rumus MAP: Mengapa Kita Menggandakan Diastolik?',
    description:
      'Mengapa MAP = (SBP + 2DBP)/3? Penjelasan fisiologis mendalam tentang waktu siklus jantung, kepatuhan arteri, dan mengapa rumus gagal pada takikardia.',
    keywords: [
      'fisiologi rumus map',
      'mengapa diastolik ganda untuk map',
      'fisika tekanan arteri rata-rata',
      'waktu siklus jantung map',
      'integrasi kurva tekanan arteri',
      'keterbatasan rumus map',
    ],
    openGraphTitle:
      'Fisika MAP: Mengapa Rumus Standar Bekerja (Dan Kapan Gagal)',
    openGraphDescription:
      'Penyelaman mendalam ke dalam hemodinamik di balik (SBP + 2DBP)/3. Pelajari tentang area di bawah kurva, peluruhan diastolik, dan keterbatasan denyut jantung.',
    heroTitle: 'Fisiologi di Balik Rumus MAP',
    heroDescription:
      'Persamaan MAP standar bukan hanya aritmatika sembarangan—ini adalah integrasi yang disederhanakan dari gelombang nadi tekanan arteri. Pahami fisika di balik angka-angka tersebut.',
  },
  schema: {
    article: {
      headline:
        'Fisiologi di Balik Rumus Tekanan Arteri Rata-rata (MAP)',
      description:
        'Penjelasan hemodinamik rinci tentang derivasi rumus MAP, yang berasal dari area di bawah kurva tekanan arteri.',
    },
    faq: [
      {
        question: 'Mengapa tekanan diastolik diberi bobot x2 dalam rumus MAP?',
        answer:
          'Pada denyut jantung istirahat normal (60-80 bpm), jantung menghabiskan sekitar dua pertiga dari siklus jantung dalam diastol (relaksasi) dan sepertiga dalam sistol (ejeksi). Oleh karena itu, tekanan rata-rata secara matematis diberi bobot lebih dekat ke nilai diastolik.',
      },
      {
        question: 'Apakah rumus MAP standar akurat untuk denyut jantung cepat?',
        answer:
          'Tidak. Seiring meningkatnya denyut jantung (takikardia), fase diastolik memendek secara tidak proporsional. Rasio sistol-ke-diastol 1:2 menghilang, membuat rumus standar menjadi kurang akurat. Dalam kasus ini, metode "Area Di Bawah Kurva" (digunakan oleh jalur arteri) diperlukan.',
      },
      {
        question: 'Apa definisi "Area Di Bawah Kurva" dari MAP?',
        answer:
          'MAP sejati adalah rata-rata geometris dari tekanan arteri, dihitung dengan mengintegrasikan kurva tekanan dari waktu ke waktu dan membaginya dengan durasi siklus jantung. Rumus (SBP + 2DBP)/3 hanyalah perkiraan samping tempat tidur dari integral ini.',
      },
    ],
    breadcrumbs: {
      home: 'Beranda',
      page: 'Fisiologi Rumus',
    },
  },
  hero: {
    label: 'Teori Hemodinamik',
    readingTimeLabel: 'Waktu Baca',
    skillLevelLabel: 'Tingkat',
    lastUpdatedLabel: 'Terakhir Diperbarui',
    readingTime: '6 menit',
    skillLevel: 'Lanjutan / Mahasiswa Kedokteran',
    lastUpdated: 'Januari 2025',
  },
  sections: {
    overview: {
      heading: 'Aproksimasi Integrasi',
      intro:
        'Tekanan Arteri Rata-rata Sejati bukanlah rata-rata aritmatika sederhana. Ini adalah integral dari gelombang tekanan arteri selama satu siklus jantung—secara harfiah "Area Di Bawah Kurva" (AUC).',
      formulaLabel: 'Jalan Pintas Samping Tempat Tidur',
      standardFormula: 'MAP ≈ DBP + 1/3(Tekanan Nadi)',
      keyPoint:
        'Rumus ini adalah "estimasi integral." Ini mengasumsikan bentuk spesifik dari gelombang tekanan yang hanya ada pada denyut jantung normal.',
    },
    physiology: {
      heading: 'Mengapa "Dibagi 3"? Aturan Sepertiga',
      intro:
        'Angka ajaib "3" dalam penyebut berasal dari waktu katup jantung.',
      systoleVsDiastoleHeading: 'Asimetri Detak Jantung',
      systoleVsDiastoleBody:
        'Aliran darah bersifat pulsatil, tetapi perfusi organ bersifat kontinu. Aorta bertindak sebagai "Windkessel" (reservoir elastis), menyimpan energi selama sistol dan mundur selama diastol untuk mempertahankan aliran. Karena mundur membutuhkan waktu lebih lama daripada ejeksi, arteri menghabiskan lebih banyak waktu untuk mengalir (diastol) daripada mengisi (sistol).',
      simpleAverageHeading: 'Realitas Geometris',
      simpleAverageIntro:
        'Jika gelombang tekanan arteri adalah gelombang persegi yang sempurna (menghabiskan waktu yang sama pada SBP dan DBP), rata-rata sederhana akan berhasil. Kenyataannya tidak demikian.',
      simpleAverageFormulaWrong:
        'Gelombang tekanan naik tajam (upstroke sistolik) dan turun perlahan (peluruhan diastolik). Sebagian besar "area waktu" berada di bawah bagian diastolik dari kurva.',
      weightedFormulaHeading: 'Memvisualisasikan Pembobotan',
      weightedFormulaBody:
        'Bayangkan siklus jantung sebagai 3 unit waktu. Sistol menempati 1 unit. Diastol menempati 2 unit. Jadi, tekanan rata-rata adalah (1×SBP + 2×DBP) ÷ 3.',
    },
    examples: {
      heading: 'Ketika Rumus Gagal: Dampak Denyut Jantung',
      intro:
        'Kesalahan paling umum dalam praktik klinis adalah mempercayai rumus ini secara membabi buta pada pasien dengan denyut jantung ekstrem.',
      tableHeaders: {
        bloodPressure: 'Kondisi',
        map: 'Bobot Diastolik',
        notes: 'Dampak Fisiologis',
      },
      rows,
      sbpDbpNote:
        'Pada takikardia parah (>110 bpm), durasi sistol dan diastol menjadi hampir sama. Rumus idealnya harus bergeser ke (SBP + DBP) ÷ 2, tetapi monitor jarang menyesuaikan ini, yang menyebabkan kesalahan perhitungan.',
    },
    practice: {
      heading: 'Implikasi Klinis',
      intro:
        'Memahami keterbatasan rumus mengubah cara Anda menafsirkan data di samping tempat tidur.',
      stepsHeading: 'Poin Kunci untuk Klinisi',
      steps: [
        'Rumus standar adalah ESTIMASI, bukan pengukuran.',
        'Pada Takikardia: Rumus meremehkan perfusi yang sebenarnya (karena diastol lebih pendek dari asumsi rumus).',
        'Pada Bradikardia: Rumus bekerja dengan baik, atau sedikit melebih-lebihkan.',
        'Jalur Arteri: Mereka tidak menggunakan rumus ini. Mereka mengambil sampel tekanan 100+ kali per detik untuk menghitung integral yang sebenarnya. Inilah sebabnya mengapa MAP jalur arteri sering berbeda dari MAP manset.',
        'Tekanan Nadi Lebar: Pada pasien lanjut usia dengan arteri kaku, efek "Windkessel" hilang. Tekanan turun lebih cepat, yang berarti rumus standar mungkin melebih-lebihkan perfusi organ mereka yang sebenarnya.',
      ],
      tipsHeading: '',
      tips: [],
    },
    verification: {
      heading: 'Ringkasan',
      intro:
        'Gunakan rumus (SBP + 2DBP)/3 untuk pasien stabil dengan denyut jantung normal. Untuk pasien tidak stabil, takikardia, atau arteri kaku, percayai tren lebih dari angka absolut, atau pasang jalur arteri untuk pengukuran langsung.',
      bullets: [],
    },
    faq: {
      heading: 'FAQ Lanjutan',
      items: [
        {
          question: 'Apakah kekakuan arteri (penuaan) mempengaruhi rumus?',
          answer:
            'Ya. Arteri yang kaku mundur lebih cepat, menyebabkan tekanan turun lebih cepat selama diastol. Ini berarti "area di bawah kurva" lebih kecil dari yang diprediksi rumus. Rumus standar sering MELEBIH-LEBIHKAN perfusi pada pasien lanjut usia.',
        },
        {
          question: 'Mengapa MAP jalur arteri dan manset tidak setuju?',
          answer:
            'Manset menggunakan amplitudo osilasi untuk memperkirakan MAP secara langsung (seringkali parameter manset yang paling akurat), sedangkan rumus menghitungnya dari SBP/DBP. Jalur arteri mengukur integral yang sebenarnya. Ketidaksepakatan diharapkan, terutama pada fisiologi non-standar.',
        },
      ],
    },
  },
  cta: {
    calculatorLabel: 'Kembali ke Kalkulator',
    calculatorHref: '/',
    howToLabel: 'Lihat Langkah Perhitungan',
    howToHref: '/how-to-calculate-map-blood-pressure',
  },
};

export default mapFormulaId;
