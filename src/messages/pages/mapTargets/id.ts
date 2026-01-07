const MapTargetsId = {
  meta: {
    title: "Target MAP Berdasarkan Kondisi: Ketika 65 Tidak Cukup (2025)",
    description:
      "Target MAP berbasis bukti berdasarkan kondisi (sepsis, TBI, stroke, pasca henti jantung, anestesi). Pelajari kapan MAP ≥65 sesuai, kapan harus individualisasi, dan cara menyeimbangkan perfusi organ dan bahaya.",
    keywords: [
      "target MAP",
      "target MAP sepsis 65",
      "target MAP TBI",
      "target MAP stroke",
      "MAP pasca henti jantung",
      "cara individualisasi MAP",
      "tekanan perfusi serebral CPP",
      "target tekanan arteri rata-rata",
      "kalkulator map tekanan darah",
      "bp ke map",
    ],
    openGraphTitle: "Target MAP Berdasarkan Kondisi — Bukti dan Panduan Praktis",
    openGraphDescription:
      "Tujuan MAP sepsis, TBI, stroke, dan perioperatif dengan algoritma samping tempat tidur untuk individualisasi dengan aman.",
    heroTitle: "Target MAP Berdasarkan Kondisi: Bukti, Nuansa, dan Algoritma Samping Tempat Tidur",
    heroDescription:
      "MAP ≥65 mmHg adalah titik awal, bukan garis akhir. Pelajari tujuan spesifik kondisi dan cara menyesuaikan target untuk setiap pasien.",
    quickAnswerLabel: "Ringkasan Cepat",
    readingTime: "Waktu Baca",
    skillLevel: "Audiens",
    lastUpdated: "November 2025",
  },
  schema: {
    article: {
      headline: "Target MAP Berdasarkan Kondisi: Ketika 65 Tidak Cukup",
      description:
        "Target MAP spesifik kondisi dengan konteks bukti, risiko perawatan berlebihan, dan langkah-langkah praktis untuk individualisasi tujuan.",
    },
    faq: [
      {
        question: "Apakah MAP ≥65 selalu benar?",
        answer:
          "Tidak. 65 mmHg adalah target awal yang umum (misalnya, dalam bundel sepsis) tetapi harus diindividualisasi menggunakan penanda perfusi, komorbiditas, dan bukti spesifik kondisi.",
      },
      {
        question: "Berapa target MAP pada cedera otak traumatis (TBI)?",
        answer:
          "Target tekanan perfusi serebral (CPP) = MAP − ICP. Banyak protokol menargetkan CPP 60–70 mmHg, yang seringkali membutuhkan MAP 80–110 tergantung pada ICP dan autoregulasi.",
      },
      {
        question: "Target MAP apa yang harus saya tuju setelah henti jantung?",
        answer:
          "Sebagian besar protokol pasca henti jantung menargetkan MAP ≥65–75 mmHg, disesuaikan dengan status neurologis, komorbiditas, dan tujuan dukungan organ. Hindari hipotensi selama pemulihan awal.",
      },
      {
        question: "MAP apa untuk stroke iskemik?",
        answer:
          "Awal setelah stroke iskemik, hipertensi permisif sering digunakan untuk mendukung perfusi penumbra. Protokol mungkin mentolerir MAP tinggi; ikuti pedoman stroke dan rekomendasi tim neurologi.",
      },
      {
        question: "Kapan saya harus menggunakan jalur arteri untuk MAP?",
        answer:
          "Gunakan jalur arteri untuk syok pada vasopresor, perubahan hemodinamik cepat, hipotensi berat, atau kasus neuro di mana penargetan CPP menuntut akurasi tinggi.",
      },
    ],
  },
  // Hero quick list
  t0001: "Panduan Terapan Klinis",
  t0002: "Ide kunci:",
  t0003:
    "MAP ≥65 mmHg adalah titik awal yang aman bagi banyak orang dewasa, tetapi kondisi, komorbiditas, dan penanda perfusi harus memandu target yang sebenarnya.",
  t0004: "Gunakan penanda perfusi untuk individualisasi (kesadaran, UOP, laktat, kulit).",
  t0005: "8–10 menit",
  t0006: "Klinisi, UGD/ICU/OK, Peserta Pelatihan",

  // Sections
  t0010: "Mengapa 65 Adalah Titik Awal, Bukan Aturan",
  t0011:
    "Pada orang dewasa yang sehat, MAP 70–100 mmHg adalah tipikal. Protokol sering dimulai pada ≥65 mmHg, tetapi ambang batas ini mungkin kurang mengobati atau mengobati secara berlebihan tergantung pada usia, hipertensi kronis, status neuro, dan disfungsi mikrosirkulasi.",

  t0020: "Target MAP Spesifik Kondisi (Diinformasikan Bukti)",
  t0021: "Dewasa umum (stabil): 70–100 mmHg; hindari ekstrem.",
  t0022: "Sepsis: mulai pada ≥65 mmHg; individualisasi lebih tinggi jika hipertensi kronis atau tanda-tanda hipoperfusi menetap. [1]",
  t0023: "Cedera otak traumatis (TBI): target CPP 60–70 mmHg → membutuhkan MAP ~80–110 tergantung pada ICP. [2]",
  t0024: "Stroke iskemik (awal): hipertensi permisif sesuai protokol stroke; hindari penurunan MAP yang drastis. [3]",
  t0025: "Pasca henti jantung: umumnya ≥65–75 mmHg; selaraskan dengan neuroprognostikasi dan tujuan dukungan organ. [4]",
  t0026: "Perioperatif/OK: individualisasi berdasarkan BP dasar, risiko bedah, dan kerentanan organ (ginjal, otak, jantung). [5]",
  t0027: "Risiko hipoperfusi ginjal (CKD/lansia): pertimbangkan MAP sedikit lebih tinggi jika tanda-tanda AKI atau UOP rendah menetap meskipun resusitasi. [6]",

  t0030: "Cara Individualisasi dengan Aman",
  t0031: "Gunakan pemeriksaan dua bagian: (1) Target makro (MAP) (2) Penanda mikro (perfusi).",
  t0032: "Penanda mikro: kesadaran, UOP ≥0.5 mL/kg/jam, laktat/pembersihan, suhu kulit/pengisian kapiler, bintik-bintik, gema samping tempat tidur.",
  t0033: "Jika perfusi tidak memadai pada MAP 65, tingkatkan sebesar 5–10 mmHg dan nilai ulang tren, bukan angka tunggal.",
  t0034: "Hindari hipertensi yang tidak perlu: MAP yang lebih tinggi meningkatkan kebutuhan O2 miokard dan afterload; titrasi turun setelah penanda membaik.",

  t0040: "Kapan Akurasi Penting (Manset vs Jalur A)",
  t0041: "Lebih suka Jalur A saat menggunakan vasopresor, perubahan cepat, hipotensi berat, atau kasus neuro (penargetan CPP).",
  t0042: "MAP manset biasanya dalam kisaran 5–10 mmHg dalam ritme stabil; konfirmasi jika keputusan bergantung pada perbedaan kecil.",

  t0050: "Algoritma Samping Tempat Tidur",
  t0051: "1) Mulai: atur MAP ≥65 (kecuali indikasi neuro).",
  t0052: "2) Periksa penanda perfusi dan riwayat BP dasar.",
  t0053: "3) Jika penanda buruk → naikkan target sebesar 5–10 dan obati penyebabnya (cairan/pressor).",
  t0054: "4) Jika neuro/TBI → atur target melalui CPP = MAP − ICP; libatkan tim neuro.",
  t0055: "5) Pantau tren; de-eskalasi saat perfusi normal untuk menghindari bahaya.",

  t0060: "FAQ",
  t0061: "Apakah lebih tinggi selalu lebih baik?",
  t0062: "Tidak. MAP yang berlebihan dapat memperburuk iskemia miokard, afterload, dan risiko pendarahan. Gunakan MAP terendah yang mempertahankan perfusi organ yang memadai.",
  t0063: "Apakah pasien hipertensi kronis memerlukan MAP lebih tinggi?",
  t0064: "Seringkali ya, terutama untuk perfusi ginjal dan otak; naikkan dengan hati-hati dan nilai ulang penanda perfusi.",
  t0065: "Bagaimana jika laktat tetap tinggi meskipun MAP ≥65?",
  t0066: "Nilai ulang status volume, kontrol sumber, curah jantung, dan mikrosirkulasi; MAP saja mungkin tidak cukup.",
  
  // References
  refsHeading: "Referensi",
  refs: [
    {
      label: "Kampanye Surviving Sepsis 2021",
      text:
        "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: 2021 International Guidelines for Management of Sepsis and Septic Shock. Intensive Care Med. 2021;47:1181–1247. doi:10.1007/s00134-021-06506-y",
      url: "https://link.springer.com/article/10.1007/s00134-021-06506-y",
    },
    {
      label: "Pedoman TBI Berat (CPP)",
      text:
        "Carney N, Totten AM, O’Reilly C, et al. Guidelines for the Management of Severe Traumatic Brain Injury, Fourth Edition. Neurosurgery. 2016;80(1):6–15. doi:10.1227/NEU.0000000000001432",
      url: "https://doi.org/10.1227/NEU.0000000000001432",
    },
    {
      label: "Pedoman Stroke Iskemik Akut",
      text:
        "Powers WJ, Rabinstein AA, Ackerson T, et al. 2019 AHA/ASA Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke. 2019;50:e344–e418. doi:10.1161/STR.0000000000000211",
      url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000211",
    },
    {
      label: "Perawatan Pasca Henti Jantung",
      text:
        "Panchal AR, Bartos JA, Cabañas JG, et al. 2020 American Heart Association Guidelines for CPR and ECC: Post–Cardiac Arrest Care. Circulation. 2020;142(16_suppl_2):S469–S523. doi:10.1161/CIR.0000000000000916",
      url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000916",
    },
    {
      label: "Hipotensi Intraoperatif & Hasil",
      text:
        "Salmasi V, Maheshwari K, Yang D, et al. Relationship between Intraoperative Hypotension, Defined by Either Reduction from Baseline or Absolute Thresholds, and Acute Kidney Injury and Myocardial Injury After Noncardiac Surgery. Anesthesiology. 2017;126(1):47–65. doi:10.1097/ALN.0000000000001432",
      url: "https://doi.org/10.1097/ALN.0000000000001432",
    },
    {
      label: "Pedoman AKI KDIGO",
      text:
        "KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney Int Suppl. 2012;2(1):1–138.",
      url: "https://kdigo.org/guidelines/acute-kidney-injury/",
    },
  ],
} as const;

export default MapTargetsId;
