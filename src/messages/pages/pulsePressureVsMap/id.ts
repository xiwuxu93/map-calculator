const PulsePressureVsMapId = {
  meta: {
    title: "Tekanan Nadi vs. MAP: Tanda Vital Mana yang Lebih Penting? (Panduan 2025)",
    description:
      "MAP mengukur perfusi; Tekanan Nadi mengukur kekakuan dan volume sekuncup. Pelajari kapan harus melacak masing-masing, mengapa tekanan nadi lebar itu penting, dan cara menafsirkan nilai yang tidak sesuai.",
    keywords: [
      "tekanan nadi vs map",
      "perbedaan map dan tekanan nadi",
      "penyebab tekanan nadi lebar",
      "arti tekanan nadi sempit",
      "tekanan arteri rata-rata vs tekanan nadi",
      "panduan hemodinamik klinis",
    ],
    openGraphTitle: "Tekanan Nadi vs. MAP: Perbandingan Klinis",
    openGraphDescription:
      "Berhenti membingungkan kedua tanda vital ini. MAP untuk aliran; Tekanan Nadi untuk volume sekuncup. Inilah cara menggunakan keduanya.",
    heroTitle: "Tekanan Nadi vs. MAP: Tanda Vital Mana yang Lebih Penting?",
    heroDescription:
      "Keduanya dihitung dari tekanan sistolik dan diastolik, tetapi menceritakan kisah fisiologis yang sangat berbeda. Pelajari kapan harus mempercayai MAP, kapan harus memperhatikan Tekanan Nadi, dan apa yang harus dilakukan jika keduanya tidak setuju.",
    authorLabel: "Berdasarkan Pedoman Klinis",
    lastUpdated: "Januari 2025",
  },
  schema: {
    article: {
      headline: "Tekanan Nadi vs. MAP: Tanda Vital Mana yang Lebih Penting?",
      description:
        "Perbandingan komprehensif Tekanan Arteri Rata-rata (MAP) dan Tekanan Nadi (PP) untuk dokter, mencakup fisiologi, perhitungan, dan interpretasi klinis.",
      author: "Tim Editorial mapcalculator.org",
      datePublished: "2025-01-08",
    },
    faq: [
      {
        question: "Apa perbedaan utama antara MAP dan Tekanan Nadi?",
        answer:
          "MAP (Mean Arterial Pressure) mewakili tekanan aliran stabil yang mengirimkan darah ke organ. Tekanan Nadi (SBP - DBP) mencerminkan 'kekuatan' setiap detak, yang menunjukkan volume sekuncup dan kekakuan arteri.",
      },
      {
        question: "Mengapa tekanan nadi lebar berbahaya?",
        answer:
          "Tekanan nadi lebar (>60 mmHg) sering menunjukkan kekakuan arteri (penuaan) atau regurgitasi aorta. Ini adalah prediktor independen kematian kardiovaskular bahkan jika MAP normal.",
      },
      {
        question: "Bisakah Anda memiliki MAP normal tetapi Tekanan Nadi rendah?",
        answer:
          "Ya. Misalnya, BP 100/85 memberikan MAP 90 mmHg (normal), tetapi Tekanan Nadi hanya 15 mmHg (sangat sempit). Ini menunjukkan vasokonstriksi parah, tamponade, atau syok kardiogenik meskipun MAP 'normal'.",
      },
    ],
  },
  sections: {
    intro: {
      title: "Kisah Dua Tekanan",
      content:
        "Di lingkungan klinis bertekanan tinggi, kita sering terobsesi dengan Mean Arterial Pressure (MAP) karena merupakan target utama untuk perfusi organ. Jika MAP turun < 65 mmHg, ginjal gagal. Tetapi Tekanan Nadi (PP)—perbedaan sederhana antara nilai sistolik dan diastolik—sering diabaikan, meskipun menjadi penanda yang lebih baik untuk kekakuan arteri dan efisiensi volume sekuncup.",
    },
    comparison: {
      title: "Head-to-Head: MAP vs. PP",
      mapTitle: "Tekanan Arteri Rata-rata (MAP)",
      mapFormula: "(SBP + 2×DBP) ÷ 3",
      mapRole: "Metrik 'Perfusi'",
      mapDescription:
        "Pikirkan MAP sebagai tekanan pendorong terus menerus yang mendorong darah melalui kapiler. Organ seperti otak dan ginjal tidak 'merasakan' denyut nadi sebanyak mereka merasakan tekanan rata-rata yang stabil ini.",
      ppTitle: "Tekanan Nadi (PP)",
      ppFormula: "SBP - DBP",
      ppRole: "Metrik 'Pulsatilitas'",
      ppDescription:
        "Pikirkan PP sebagai gelombang kejut dari setiap detak jantung. Ini memberi tahu Anda tentang kondisi pipa (kekakuan) dan volume pompa (volume sekuncup).",
    },
    clinicalScenarios: {
      title: "Ketika Mereka Tidak Setuju: Skenario Klinis",
      intro: "Pasien paling berbahaya seringkali adalah mereka dengan MAP 'Normal' tetapi Tekanan Nadi abnormal.",
      scenario1Title: "1. Tekanan Nadi Sempit (Jepitan)",
      scenario1Vitals: "BP 110/95 (MAP 100, PP 15)",
      scenario1Analysis:
        "MAP 100 terlihat bagus. Tetapi Tekanan Nadi sangat kecil (15 mmHg). Pasien ini mengalami vasokonstriksi hebat. Mereka mungkin hipovolemik atau dalam syok kardiogenik awal, kompensasi dengan resistensi vaskular sistemik (SVR) tinggi. Jika Anda hanya melihat MAP, Anda melewatkan tabrakan yang akan datang.",
      scenario2Title: "2. Tekanan Nadi Lebar (Pipa Kaku)",
      scenario2Vitals: "BP 160/60 (MAP 93, PP 100)",
      scenario2Analysis:
        "MAP normal. Tetapi Tekanan Nadi sangat besar (100 mmHg). Ini adalah 'Hipertensi Sistolik Terisolasi' klasik yang terlihat pada pasien lanjut usia dengan arteri kaku. Ini memberi tekanan besar pada ventrikel kiri dan meningkatkan risiko stroke, bahkan jika perfusi (MAP) memadai.",
      scenario3Title: "3. Pergeseran Sepsis",
      scenario3Vitals: "BP 90/40 (MAP 57, PP 50)",
      scenario3Analysis:
        "Di sini, keduanya mengkhawatirkan. Tekanan nadi yang agak lebar relatif terhadap diastolik rendah menunjukkan vasodilatasi (syok hangat). Tangki penuh (volume sekuncup lumayan), tetapi pipa terlalu longgar (SVR rendah).",
    },
    actionPlan: {
      title: "Rencana Tindakan Samping Tempat Tidur",
      step1: "1. Periksa MAP Terlebih Dahulu",
      step1Desc: "Apakah pasien mengalami perfusi? Jika MAP < 65, perbaiki hipotensi segera (Cairan? Vasopresor?).",
      step2: "2. Periksa Tekanan Nadi Selanjutnya",
      step2Desc: "Jika MAP aman, lihat PP. Apakah < 25% dari BP sistolik? (Sempit). Apakah > 60 mmHg? (Lebar).",
      step3: "3. Triangulasi",
      step3Desc: "PP Sempit? Pikirkan Volume atau Kegagalan Pompa. PP Lebar? Pikirkan Kekakuan atau Kebocoran (Regurgitasi).",
    },
  },
  cta: {
    calculator: "Hitung MAP & PP",
    back: "Kembali ke Artikel",
  },
} as const;

export default PulsePressureVsMapId;
