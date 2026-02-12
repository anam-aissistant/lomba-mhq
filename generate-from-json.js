// Generate soal MHQ dari JSON lokal (tanpa API)
const fs = require('fs');

// Load Quran data dari JSON
const quranData = JSON.parse(fs.readFileSync('./data/quran.json', 'utf8')).data;

// Mapping nama surah ke nomor
const surahMap = {
  'Al-Mulk': 67, 'Al-Qalam': 68, 'Al-Haqqah': 69, 'Al-Maarij': 70, 'Nuh': 71,
  'Al-Jinn': 72, 'Al-Muzzammil': 73, 'Al-Muddaththir': 74, 'Al-Qiyamah': 75,
  'Al-Insan': 76, 'Al-Mursalat': 77, 'An-Naba': 78, 'An-Naziat': 79, 'Abasa': 80,
  'At-Takwir': 81, 'Al-Infitar': 82, 'Al-Mutaffifin': 83, 'Al-Inshiqaq': 84,
  'Al-Buruj': 85, 'At-Tariq': 86, 'Al-Ala': 87, 'Al-Ghashiyah': 88, 'Al-Fajr': 89,
  'Al-Balad': 90, 'Ash-Shams': 91, 'Al-Lail': 92, 'Adh-Dhuha': 93, 'Ash-Sharh': 94,
  'Az-Zalzalah': 99, 'Al-Adiyat': 100, 'Al-Qariah': 101, 'At-Takathur': 102,
  'Al-Humazah': 104, 'Al-Fil': 105, 'Al-Maun': 107, 'Al-Kawthar': 108
};

// Data soal dari Google Sheets (struktur lengkap)
const soalData = [
  { paket: 1, soal: [
    { type: 'lantunkan', surah: 'Al-Mulk', ayatStart: 11, ayatEnd: 15 },
    { type: 'lanjutkan', surah: 'Al-Qalam', ayatRef: 35, jawabanAyat: [36, 37, 38] },
    { type: 'lanjutkan', surah: 'An-Naba', ayatRef: 17, jawabanAyat: [18, 19, 20] },
    { type: 'transisi', surah: 'Al-Lail', ayatRef: 21, jawabanSurah: 'Adh-Dhuha', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 2, soal: [
    { type: 'lantunkan', surah: 'An-Naba', ayatStart: 6, ayatEnd: 10 },
    { type: 'lanjutkan', surah: 'Abasa', ayatRef: 22, jawabanAyat: [23, 24, 25] },
    { type: 'lanjutkan', surah: 'Al-Haqqah', ayatRef: 21, jawabanAyat: [22, 23, 24] },
    { type: 'transisi', surah: 'Al-Mulk', ayatRef: 30, jawabanSurah: 'Al-Qalam', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 3, soal: [
    { type: 'lantunkan', surah: 'Al-Qalam', ayatStart: 1, ayatEnd: 5 },
    { type: 'lanjutkan', surah: 'Al-Mulk', ayatRef: 7, jawabanAyat: [8, 9] },
    { type: 'lanjutkan', surah: 'An-Naziat', ayatRef: 24, jawabanAyat: [25, 26, 27] },
    { type: 'transisi', surah: 'Az-Zalzalah', ayatRef: 8, jawabanSurah: 'Al-Adiyat', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 4, soal: [
    { type: 'lantunkan', surah: 'An-Naziat', ayatStart: 1, ayatEnd: 5 },
    { type: 'lanjutkan', surah: 'At-Takwir', ayatRef: 12, jawabanAyat: [13, 14, 15] },
    { type: 'lanjutkan', surah: 'Al-Maarij', ayatRef: 29, jawabanAyat: [30, 31, 32] },
    { type: 'transisi', surah: 'Al-Qalam', ayatRef: 52, jawabanSurah: 'Al-Haqqah', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 5, soal: [
    { type: 'lantunkan', surah: 'Al-Haqqah', ayatStart: 7, ayatEnd: 11 },
    { type: 'lanjutkan', surah: 'Al-Maarij', ayatRef: 20, jawabanAyat: [21, 22, 23] },
    { type: 'lanjutkan', surah: 'Al-Infitar', ayatRef: 9, jawabanAyat: [10, 11, 12] },
    { type: 'transisi', surah: 'Al-Qariah', ayatRef: 11, jawabanSurah: 'At-Takathur', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 6, soal: [
    { type: 'lantunkan', surah: 'Abasa', ayatStart: 30, ayatEnd: 34 },
    { type: 'lanjutkan', surah: 'Al-Mutaffifin', ayatRef: 26, jawabanAyat: [27, 28, 29] },
    { type: 'lanjutkan', surah: 'Nuh', ayatRef: 17, jawabanAyat: [18, 19, 20] },
    { type: 'transisi', surah: 'Al-Haqqah', ayatRef: 52, jawabanSurah: 'Al-Maarij', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 7, soal: [
    { type: 'lantunkan', surah: 'Al-Maarij', ayatStart: 1, ayatEnd: 5 },
    { type: 'lanjutkan', surah: 'Nuh', ayatRef: 22, jawabanAyat: [23, 24] },
    { type: 'lanjutkan', surah: 'Al-Inshiqaq', ayatRef: 8, jawabanAyat: [9, 10, 11] },
    { type: 'transisi', surah: 'Al-Humazah', ayatRef: 9, jawabanSurah: 'Al-Fil', jawabanAyat: [1, 2, 3, 4, 5] }
  ]},
  { paket: 8, soal: [
    { type: 'lantunkan', surah: 'At-Takwir', ayatStart: 1, ayatEnd: 5 },
    { type: 'lanjutkan', surah: 'Al-Qalam', ayatRef: 31, jawabanAyat: [32, 33, 34] },
    { type: 'lanjutkan', surah: 'Nuh', ayatRef: 10, jawabanAyat: [11, 12, 13] },
    { type: 'transisi', surah: 'Al-Fajr', ayatRef: 30, jawabanSurah: 'Al-Balad', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 9, soal: [
    { type: 'lantunkan', surah: 'Nuh', ayatStart: 1, ayatEnd: 5 },
    { type: 'lanjutkan', surah: 'Al-Jinn', ayatRef: 15, jawabanAyat: [16, 17, 18] },
    { type: 'lanjutkan', surah: 'Al-Buruj', ayatRef: 8, jawabanAyat: [9, 10] },
    { type: 'transisi', surah: 'Al-Maun', ayatRef: 7, jawabanSurah: 'Al-Kawthar', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 10, soal: [
    { type: 'lantunkan', surah: 'Al-Infitar', ayatStart: 6, ayatEnd: 10 },
    { type: 'lanjutkan', surah: 'Al-Muzzammil', ayatRef: 12, jawabanAyat: [13, 14, 15] },
    { type: 'lanjutkan', surah: 'Al-Maarij', ayatRef: 23, jawabanAyat: [24, 25, 26] },
    { type: 'transisi', surah: 'Al-Balad', ayatRef: 20, jawabanSurah: 'Ash-Shams', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 11, soal: [
    { type: 'lantunkan', surah: 'Al-Jinn', ayatStart: 1, ayatEnd: 5 },
    { type: 'lanjutkan', surah: 'Al-Muddaththir', ayatRef: 14, jawabanAyat: [15, 16, 17] },
    { type: 'lanjutkan', surah: 'At-Tariq', ayatRef: 6, jawabanAyat: [7, 8, 9] },
    { type: 'transisi', surah: 'An-Naba', ayatRef: 40, jawabanSurah: 'An-Naziat', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 12, soal: [
    { type: 'lantunkan', surah: 'Al-Mutaffifin', ayatStart: 16, ayatEnd: 20 },
    { type: 'lanjutkan', surah: 'Al-Qiyamah', ayatRef: 16, jawabanAyat: [17, 18, 19] },
    { type: 'lanjutkan', surah: 'Al-Muddaththir', ayatRef: 48, jawabanAyat: [49, 50, 51] },
    { type: 'transisi', surah: 'Ash-Shams', ayatRef: 15, jawabanSurah: 'Al-Lail', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 13, soal: [
    { type: 'lantunkan', surah: 'Al-Muzzammil', ayatStart: 11, ayatEnd: 15 },
    { type: 'lanjutkan', surah: 'Al-Insan', ayatRef: 14, jawabanAyat: [15, 16, 17] },
    { type: 'lanjutkan', surah: 'Al-Ala', ayatRef: 9, jawabanAyat: [10, 11, 12] },
    { type: 'transisi', surah: 'An-Naziat', ayatRef: 46, jawabanSurah: 'Abasa', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 14, soal: [
    { type: 'lantunkan', surah: 'Al-Inshiqaq', ayatStart: 1, ayatEnd: 5 },
    { type: 'lanjutkan', surah: 'Al-Mursalat', ayatRef: 26, jawabanAyat: [27, 28, 29] },
    { type: 'lanjutkan', surah: 'Al-Haqqah', ayatRef: 27, jawabanAyat: [28, 29, 30] },
    { type: 'transisi', surah: 'Al-Lail', ayatRef: 21, jawabanSurah: 'Adh-Dhuha', jawabanAyat: [1] }
  ]},
  { paket: 15, soal: [
    { type: 'lantunkan', surah: 'Al-Buruj', ayatStart: 1, ayatEnd: 5 },
    { type: 'lanjutkan', surah: 'At-Tariq', ayatRef: 12, jawabanAyat: [13, 14, 15] },
    { type: 'lanjutkan', surah: 'Al-Ghashiyah', ayatRef: 17, jawabanAyat: [18, 19, 20] },
    { type: 'transisi', surah: 'Al-Fajr', ayatRef: 30, jawabanSurah: 'Al-Balad', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 16, soal: [
    { type: 'lantunkan', surah: 'Al-Qiyamah', ayatStart: 1, ayatEnd: 5 },
    { type: 'lanjutkan', surah: 'Al-Mursalat', ayatRef: 15, jawabanAyat: [16, 17, 18] },
    { type: 'lanjutkan', surah: 'Abasa', ayatRef: 10, jawabanAyat: [11, 12, 13] },
    { type: 'transisi', surah: 'Al-Infitar', ayatRef: 19, jawabanSurah: 'Al-Mutaffifin', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 17, soal: [
    { type: 'lantunkan', surah: 'Al-Insan', ayatStart: 1, ayatEnd: 5 },
    { type: 'lanjutkan', surah: 'Al-Mulk', ayatRef: 15, jawabanAyat: [16, 17, 18] },
    { type: 'lanjutkan', surah: 'At-Takwir', ayatRef: 20, jawabanAyat: [21, 22, 23] },
    { type: 'transisi', surah: 'Al-Buruj', ayatRef: 22, jawabanSurah: 'At-Tariq', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 18, soal: [
    { type: 'lantunkan', surah: 'Al-Mursalat', ayatStart: 11, ayatEnd: 15 },
    { type: 'lanjutkan', surah: 'An-Naba', ayatRef: 25, jawabanAyat: [26, 27, 28] },
    { type: 'lanjutkan', surah: 'An-Naziat', ayatRef: 30, jawabanAyat: [31, 32, 33] },
    { type: 'transisi', surah: 'Al-Inshiqaq', ayatRef: 25, jawabanSurah: 'Al-Buruj', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 19, soal: [
    { type: 'lantunkan', surah: 'An-Naziat', ayatStart: 11, ayatEnd: 15 },
    { type: 'lanjutkan', surah: 'Abasa', ayatRef: 30, jawabanAyat: [31, 32, 33] },
    { type: 'lanjutkan', surah: 'Al-Jinn', ayatRef: 20, jawabanAyat: [21, 22, 23] },
    { type: 'transisi', surah: 'At-Takwir', ayatRef: 29, jawabanSurah: 'Al-Infitar', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 20, soal: [
    { type: 'lantunkan', surah: 'Abasa', ayatStart: 11, ayatEnd: 15 },
    { type: 'lanjutkan', surah: 'Al-Muzzammil', ayatRef: 5, jawabanAyat: [6, 7, 8] },
    { type: 'lanjutkan', surah: 'Al-Muddaththir', ayatRef: 35, jawabanAyat: [36, 37, 38] },
    { type: 'transisi', surah: 'Al-Mutaffifin', ayatRef: 36, jawabanSurah: 'Al-Inshiqaq', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 21, soal: [
    { type: 'lantunkan', surah: 'At-Takwir', ayatStart: 6, ayatEnd: 10 },
    { type: 'lanjutkan', surah: 'Al-Infitar', ayatRef: 15, jawabanAyat: [16, 17, 18] },
    { type: 'lanjutkan', surah: 'Al-Mutaffifin', ayatRef: 15, jawabanAyat: [16, 17, 18] },
    { type: 'transisi', surah: 'Nuh', ayatRef: 28, jawabanSurah: 'Al-Jinn', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 22, soal: [
    { type: 'lantunkan', surah: 'Al-Infitar', ayatStart: 11, ayatEnd: 15 },
    { type: 'lanjutkan', surah: 'Al-Mutaffifin', ayatRef: 20, jawabanAyat: [21, 22, 23] },
    { type: 'lanjutkan', surah: 'Al-Inshiqaq', ayatRef: 15, jawabanAyat: [16, 17, 18] },
    { type: 'transisi', surah: 'Al-Buruj', ayatRef: 22, jawabanSurah: 'At-Tariq', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 23, soal: [
    { type: 'lantunkan', surah: 'Al-Mutaffifin', ayatStart: 1, ayatEnd: 5 },
    { type: 'lanjutkan', surah: 'Al-Inshiqaq', ayatRef: 20, jawabanAyat: [21, 22, 23] },
    { type: 'lanjutkan', surah: 'Al-Buruj', ayatRef: 15, jawabanAyat: [16, 17, 18] },
    { type: 'transisi', surah: 'At-Tariq', ayatRef: 17, jawabanSurah: 'Al-Ala', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 24, soal: [
    { type: 'lantunkan', surah: 'Al-Inshiqaq', ayatStart: 6, ayatEnd: 10 },
    { type: 'lanjutkan', surah: 'Al-Buruj', ayatRef: 12, jawabanAyat: [13, 14, 15] },
    { type: 'lanjutkan', surah: 'At-Tariq', ayatRef: 10, jawabanAyat: [11, 12, 13] },
    { type: 'transisi', surah: 'Al-Ala', ayatRef: 19, jawabanSurah: 'Al-Ghashiyah', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 25, soal: [
    { type: 'lantunkan', surah: 'Al-Buruj', ayatStart: 6, ayatEnd: 10 },
    { type: 'lanjutkan', surah: 'At-Tariq', ayatRef: 5, jawabanAyat: [6, 7, 8] },
    { type: 'lanjutkan', surah: 'Al-Ala', ayatRef: 14, jawabanAyat: [15, 16, 17] },
    { type: 'transisi', surah: 'Al-Ghashiyah', ayatRef: 26, jawabanSurah: 'Al-Fajr', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 26, soal: [
    { type: 'lantunkan', surah: 'At-Tariq', ayatStart: 1, ayatEnd: 5 },
    { type: 'lanjutkan', surah: 'Al-Ala', ayatRef: 10, jawabanAyat: [11, 12, 13] },
    { type: 'lanjutkan', surah: 'Al-Ghashiyah', ayatRef: 15, jawabanAyat: [16, 17, 18] },
    { type: 'transisi', surah: 'Al-Fajr', ayatRef: 30, jawabanSurah: 'Al-Balad', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 27, soal: [
    { type: 'lantunkan', surah: 'Al-Ala', ayatStart: 11, ayatEnd: 15 },
    { type: 'lanjutkan', surah: 'Al-Ghashiyah', ayatRef: 10, jawabanAyat: [11, 12, 13] },
    { type: 'lanjutkan', surah: 'Al-Fajr', ayatRef: 20, jawabanAyat: [21, 22, 23] },
    { type: 'transisi', surah: 'Al-Balad', ayatRef: 20, jawabanSurah: 'Ash-Shams', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 28, soal: [
    { type: 'lantunkan', surah: 'Al-Ghashiyah', ayatStart: 11, ayatEnd: 15 },
    { type: 'lanjutkan', surah: 'Al-Fajr', ayatRef: 15, jawabanAyat: [16, 17, 18] },
    { type: 'lanjutkan', surah: 'Al-Balad', ayatRef: 10, jawabanAyat: [11, 12, 13] },
    { type: 'transisi', surah: 'Ash-Shams', ayatRef: 15, jawabanSurah: 'Al-Lail', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 29, soal: [
    { type: 'lantunkan', surah: 'Al-Fajr', ayatStart: 6, ayatEnd: 10 },
    { type: 'lanjutkan', surah: 'Al-Balad', ayatRef: 5, jawabanAyat: [6, 7, 8] },
    { type: 'lanjutkan', surah: 'Ash-Shams', ayatRef: 10, jawabanAyat: [11, 12, 13] },
    { type: 'transisi', surah: 'Al-Lail', ayatRef: 21, jawabanSurah: 'Adh-Dhuha', jawabanAyat: [1, 2, 3] }
  ]},
  { paket: 30, soal: [
    { type: 'lantunkan', surah: 'Al-Balad', ayatStart: 6, ayatEnd: 10 },
    { type: 'lanjutkan', surah: 'Ash-Shams', ayatRef: 5, jawabanAyat: [6, 7, 8] },
    { type: 'lanjutkan', surah: 'Al-Lail', ayatRef: 10, jawabanAyat: [11, 12, 13] },
    { type: 'transisi', surah: 'Adh-Dhuha', ayatRef: 11, jawabanSurah: 'Ash-Sharh', jawabanAyat: [1, 2, 3] }
  ]}
];

function getAyatText(surahNum, ayatNum) {
  const surah = quranData[surahNum];
  if (!surah) return '';
  const ayat = surah.ayahs.find(a => a.ayah_number === ayatNum);
  return ayat ? ayat.arab : '';
}

function generateSoal() {
  const paketSoal = [];
  
  for (const paket of soalData) {
    const soalPaket = { paket: paket.paket, soal: [] };
    
    for (let i = 0; i < paket.soal.length; i++) {
      const s = paket.soal[i];
      const soalNum = i + 1;
      
      if (s.type === 'lantunkan') {
        const surahNum = surahMap[s.surah];
        const ayatTexts = [];
        for (let a = s.ayatStart; a <= s.ayatEnd; a++) {
          const text = getAyatText(surahNum, a);
          if (text) ayatTexts.push(text);
        }
        
        soalPaket.soal.push({
          nomor: soalNum,
          tipe: 'Lantunkan',
          perintah: `Lantunkan ayat ${s.ayatStart}-${s.ayatEnd} QS ${s.surah}`,
          pertanyaanArray: ayatTexts,
          pertanyaan: ayatTexts.join(' ۝ '),
          kunciJawaban: {
            surah: s.surah,
            ayat: `${s.ayatStart}-${s.ayatEnd}`,
            teksArray: ayatTexts,
            teks: ayatTexts.join(' ۝ ')
          }
        });
        
      } else if (s.type === 'lanjutkan') {
        const surahNum = surahMap[s.surah];
        const pertanyaan = getAyatText(surahNum, s.ayatRef);
        const jawabanTexts = [];
        for (const a of s.jawabanAyat) {
          const text = getAyatText(surahNum, a);
          if (text) jawabanTexts.push(text);
        }
        
        soalPaket.soal.push({
          nomor: soalNum,
          tipe: 'Lanjutkan',
          perintah: 'Lanjutkan ayat berikut',
          pertanyaan: pertanyaan,
          kunciJawaban: {
            surah: s.surah,
            ayat: s.jawabanAyat.join('-'),
            teksArray: jawabanTexts,
            teks: jawabanTexts.join(' ۝ ')
          }
        });
        
      } else if (s.type === 'transisi') {
        const surahNum = surahMap[s.surah];
        const jawabanSurahNum = surahMap[s.jawabanSurah];
        const pertanyaan = getAyatText(surahNum, s.ayatRef);
        const jawabanTexts = [];
        for (const a of s.jawabanAyat) {
          const text = getAyatText(jawabanSurahNum, a);
          if (text) jawabanTexts.push(text);
        }
        
        soalPaket.soal.push({
          nomor: soalNum,
          tipe: 'Transisi',
          perintah: 'Lanjutkan ayat berikut',
          pertanyaan: pertanyaan,
          kunciJawaban: {
            surah: s.jawabanSurah,
            ayat: s.jawabanAyat.join('-'),
            teksArray: jawabanTexts,
            teks: jawabanTexts.join(' ۝ ')
          }
        });
      }
    }
    
    paketSoal.push(soalPaket);
  }
  
  return paketSoal;
}

console.log('📝 Generating soal from local JSON...\n');
const allPaket = generateSoal();

// Validate
let emptyPertanyaan = 0;
let emptyKunci = 0;
allPaket.forEach(p => {
  p.soal.forEach(s => {
    if (!s.pertanyaan || s.pertanyaan === '') emptyPertanyaan++;
    if (!s.kunciJawaban.teks || s.kunciJawaban.teks === '') emptyKunci++;
  });
});

console.log('📊 Validation:');
console.log(`   Total soal: ${allPaket.length * 4}`);
console.log(`   Pertanyaan kosong: ${emptyPertanyaan}`);
console.log(`   Kunci kosong: ${emptyKunci}`);
console.log('');

// Save
const jsContent = `// Data Soal Lomba MHQ - 30 Paket
// Generated from local quran.json (no API dependency)
// Source: Google Sheets + API MyQuran
// Last updated: ${new Date().toISOString()}

const dataSoal = ${JSON.stringify(allPaket, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = dataSoal;
}
`;

fs.writeFileSync('./data/soal.js', jsContent);
console.log('💾 Saved to: data/soal.js');
console.log('✅ Done! Production-ready (no API dependency)');
