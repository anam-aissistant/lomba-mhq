/**
 * DATA 30 PAKET SOAL LOMBA MHQ - REVISI FINAL
 * Semua soal dari Juz 29 (Tabarak) dan Juz 30 ('Amma)
 * 
 * Format Soal:
 * - Soal 1 & 2: Sambung ayat, kunci jawaban = 3 ayat lengkap
 * - Soal 3: Bacakan 5 ayat
 * - Soal 4: Sambung surat (ayat terakhir ke awal surat berikutnya)
 */

const PAKET_SOAL = [
  {
    "id": 1,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالسَّمَاءِ وَالطَّارِقِ وَمَا أَدْرَاكَ مَا الطَّارِقُ النَّجْمُ الثَّاقِبُ",
        "referensi": "Surat At-Tariq: 1-3",
        "kunciLabel": "3 Ayat awal Surat At-Tariq (1-3):",
        "kunciArab": "(١) وَالسَّمَاءِ وَالطَّارِقِ ۝ (٢) وَمَا أَدْرَاكَ مَا الطَّارِقُ ۝ (٣) النَّجْمُ الثَّاقِبُ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ رَسُولٌ مِّنَ اللَّهِ يَتْلُو صُحُفًا مُّطَهَّرَةً",
        "referensi": "Surat Al-Bayyinah: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Bayyinah (1-3):",
        "kunciArab": "(١) لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ ۝ (٢) رَسُولٌ مِّنَ اللَّهِ يَتْلُو صُحُفًا مُّطَهَّرَةً ۝ (٣) فِيهَا كُتُبٌ قَيِّمَةٌ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Ma'arij ayat 19-23",
        "rentangAyat": "Ayat 19-23",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Ma'arij 19-23):",
        "kunciArab": "[Ayat 19-23 Surat Al-Ma'arij]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ",
        "kunciLabel": "Surat berikutnya: Al-Bayyinah - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Bayyinah] ۝ (٢) [Ayat 2 Surat Al-Bayyinah] ۝ (٣) [Ayat 3 Surat Al-Bayyinah] ۝ (٤) [Ayat 4 Surat Al-Bayyinah] ۝ (٥) [Ayat 5 Surat Al-Bayyinah]"
      }
    ]
  },
  {
    "id": 2,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالتِّينِ وَالزَّيْتُونِ وَطُورِ سِينِينَ وَهَٰذَا الْبَلَدِ الْأَمِينِ",
        "referensi": "Surat At-Tin: 1-3",
        "kunciLabel": "3 Ayat awal Surat At-Tin (1-3):",
        "kunciArab": "(١) وَالتِّينِ وَالزَّيْتُونِ ۝ (٢) وَطُورِ سِينِينَ ۝ (٣) وَهَٰذَا الْبَلَدِ الْأَمِينِ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالْفَجْرِ وَلَيَالٍ عَشْرٍ وَالشَّفْعِ وَالْوَتْرِ",
        "referensi": "Surat Al-Fajr: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Fajr (1-3):",
        "kunciArab": "(١) وَالْفَجْرِ ۝ (٢) وَلَيَالٍ عَشْرٍ ۝ (٣) وَالشَّفْعِ وَالْوَتْرِ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Ma'un ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Ma'un 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Ma'un]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...عَلِيمٌ خَبِيرٌ",
        "kunciLabel": "Surat berikutnya: Al-Mutaffifin - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Mutaffifin] ۝ (٢) [Ayat 2 Surat Al-Mutaffifin] ۝ (٣) [Ayat 3 Surat Al-Mutaffifin] ۝ (٤) [Ayat 4 Surat Al-Mutaffifin] ۝ (٥) [Ayat 5 Surat Al-Mutaffifin]"
      }
    ]
  },
  {
    "id": 3,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ عَامِلَةٌ نَّاصِبَةٌ",
        "referensi": "Surat Al-Ghashiyah: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Ghashiyah (1-3):",
        "kunciArab": "(١) هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ ۝ (٢) وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ ۝ (٣) عَامِلَةٌ نَّاصِبَةٌ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِذَا الشَّمْسُ كُوِّرَتْ وَإِذَا النُّجُومُ انكَدَرَتْ وَإِذَا الْجِبَالُ سُيِّرَتْ",
        "referensi": "Surat At-Takwir: 1-3",
        "kunciLabel": "3 Ayat awal Surat At-Takwir (1-3):",
        "kunciArab": "(١) إِذَا الشَّمْسُ كُوِّرَتْ ۝ (٢) وَإِذَا النُّجُومُ انكَدَرَتْ ۝ (٣) وَإِذَا الْجِبَالُ سُيِّرَتْ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Inshiqaq ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Inshiqaq 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Inshiqaq]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...فَإِذَا فَرَغْتَ فَانصَبْ",
        "kunciLabel": "Surat berikutnya: At-Tin - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat At-Tin] ۝ (٢) [Ayat 2 Surat At-Tin] ۝ (٣) [Ayat 3 Surat At-Tin] ۝ (٤) [Ayat 4 Surat At-Tin] ۝ (٥) [Ayat 5 Surat At-Tin]"
      }
    ]
  },
  {
    "id": 4,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالضُّحَىٰ وَاللَّيْلِ إِذَا سَجَىٰ مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
        "referensi": "Surat Ad-Duha: 1-3",
        "kunciLabel": "3 Ayat awal Surat Ad-Duha (1-3):",
        "kunciArab": "(١) وَالضُّحَىٰ ۝ (٢) وَاللَّيْلِ إِذَا سَجَىٰ ۝ (٣) مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "يَا أَيُّهَا الْمُدَّثِّرُ قُمْ فَأَنْذِرْ وَرَبَّكَ فَكَبِّرْ",
        "referensi": "Surat Al-Muddassir: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Muddassir (1-3):",
        "kunciArab": "(١) يَا أَيُّهَا الْمُدَّثِّرُ ۝ (٢) قُمْ فَأَنْذِرْ ۝ (٣) وَرَبَّكَ فَكَبِّرْ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Qari'ah ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Qari'ah 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Qari'ah]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...هَلْ فِي ذَٰلِكَ قَسَمٌ لِّذِي حِجْرٍ",
        "kunciLabel": "Surat berikutnya: Al-Fajr - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Fajr] ۝ (٢) [Ayat 2 Surat Al-Fajr] ۝ (٣) [Ayat 3 Surat Al-Fajr] ۝ (٤) [Ayat 4 Surat Al-Fajr] ۝ (٥) [Ayat 5 Surat Al-Fajr]"
      }
    ]
  },
  {
    "id": 5,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَنْ يَأْتِيكُمْ بِمَاءٍ مَعِينٍ",
        "referensi": "Surat Al-Mulk: 30",
        "kunciLabel": "3 Ayat terakhir Surat Al-Mulk (28-30):",
        "kunciArab": "(٢٨) قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَنْ يَأْتِيكُمْ بِمَاءٍ مَعِينٍ ۝ (٢٩) قُلْ هُوَ الرَّحْمَٰنُ آمَنَّا بِهِ وَعَلَيْهِ تَوَكَّلْنَا ۝ (٣٠) قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَنْ يَأْتِيكُمْ بِمَاءٍ مَعِينٍ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِذَا السَّمَاءُ انفَطَرَتْ وَإِذَا الْكَوَاكِبُ انتَثَرَتْ وَإِذَا الْبِحَارُ فُجِّرَتْ",
        "referensi": "Surat Al-Infitar: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Infitar (1-3):",
        "kunciArab": "(١) إِذَا السَّمَاءُ انفَطَرَتْ ۝ (٢) وَإِذَا الْكَوَاكِبُ انتَثَرَتْ ۝ (٣) وَإِذَا الْبِحَارُ فُجِّرَتْ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-'Alaq ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-'Alaq 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-'Alaq]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...إِنَّ هَٰذَا لَرِزْقٌ لَّنَا",
        "kunciLabel": "Surat berikutnya: Al-Mursalat - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Mursalat] ۝ (٢) [Ayat 2 Surat Al-Mursalat] ۝ (٣) [Ayat 3 Surat Al-Mursalat] ۝ (٤) [Ayat 4 Surat Al-Mursalat] ۝ (٥) [Ayat 5 Surat Al-Mursalat]"
      }
    ]
  },
  {
    "id": 6,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ رَسُولٌ مِّنَ اللَّهِ يَتْلُو صُحُفًا مُّطَهَّرَةً",
        "referensi": "Surat Al-Bayyinah: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Bayyinah (1-3):",
        "kunciArab": "(١) لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ ۝ (٢) رَسُولٌ مِّنَ اللَّهِ يَتْلُو صُحُفًا مُّطَهَّرَةً ۝ (٣) فِيهَا كُتُبٌ قَيِّمَةٌ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ وَالْيَوْمِ الْمَوْعُودِ وَشَاهِدٍ وَمَشْهُودٍ",
        "referensi": "Surat Al-Buruj: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Buruj (1-3):",
        "kunciArab": "(١) وَالسَّمَاءِ ذَاتِ الْبُرُوجِ ۝ (٢) وَالْيَوْمِ الْمَوْعُودِ ۝ (٣) وَشَاهِدٍ وَمَشْهُودٍ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat An-Nasr ayat 1-3",
        "rentangAyat": "Ayat 1-3",
        "kunciLabel": "3 Ayat lengkap (Surat An-Nasr 1-3):",
        "kunciArab": "[Ayat 1-3 Surat An-Nasr]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...إِنَّ رَبَّهُم بِهِمْ يَوْمَئِذٍ لَّخَبِيرٌ",
        "kunciLabel": "Surat berikutnya: Al-Qari'ah - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Qari'ah] ۝ (٢) [Ayat 2 Surat Al-Qari'ah] ۝ (٣) [Ayat 3 Surat Al-Qari'ah] ۝ (٤) [Ayat 4 Surat Al-Qari'ah] ۝ (٥) [Ayat 5 Surat Al-Qari'ah]"
      }
    ]
  },
  {
    "id": 7,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالْفَجْرِ وَلَيَالٍ عَشْرٍ وَالشَّفْعِ وَالْوَتْرِ",
        "referensi": "Surat Al-Fajr: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Fajr (1-3):",
        "kunciArab": "(١) وَالْفَجْرِ ۝ (٢) وَلَيَالٍ عَشْرٍ ۝ (٣) وَالشَّفْعِ وَالْوَتْرِ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِذَا السَّمَاءُ انشَقَّتْ وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ وَإِذَا الْأَرْضُ مُدَّتْ",
        "referensi": "Surat Al-Inshiqaq: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Inshiqaq (1-3):",
        "kunciArab": "(١) إِذَا السَّمَاءُ انشَقَّتْ ۝ (٢) وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ ۝ (٣) وَإِذَا الْأَرْضُ مُدَّتْ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat At-Tin ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat At-Tin 1-5):",
        "kunciArab": "[Ayat 1-5 Surat At-Tin]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...ثُمَّ كَلَّا سَيَعْلَمُونَ",
        "kunciLabel": "Surat berikutnya: Al-Ma'arij - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Ma'arij] ۝ (٢) [Ayat 2 Surat Al-Ma'arij] ۝ (٣) [Ayat 3 Surat Al-Ma'arij] ۝ (٤) [Ayat 4 Surat Al-Ma'arij] ۝ (٥) [Ayat 5 Surat Al-Ma'arij]"
      }
    ]
  },
  {
    "id": 8,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِذَا الشَّمْسُ كُوِّرَتْ وَإِذَا النُّجُومُ انكَدَرَتْ وَإِذَا الْجِبَالُ سُيِّرَتْ",
        "referensi": "Surat At-Takwir: 1-3",
        "kunciLabel": "3 Ayat awal Surat At-Takwir (1-3):",
        "kunciArab": "(١) إِذَا الشَّمْسُ كُوِّرَتْ ۝ (٢) وَإِذَا النُّجُومُ انكَدَرَتْ ۝ (٣) وَإِذَا الْجِبَالُ سُيِّرَتْ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "ن وَالْقَلَمِ وَمَا يَسْطُرُونَ مَا أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍ",
        "referensi": "Surat Al-Qalam: 1-2",
        "kunciLabel": "3 Ayat awal Surat Al-Qalam (1-3):",
        "kunciArab": "(١) ن ۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ ۝ (٢) مَا أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍ ۝ (٣) وَإِنَّ لَكَ لَأَجْرًا غَيْرَ مَمْنُونٍ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Az-Zalzalah ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Az-Zalzalah 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Az-Zalzalah]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ",
        "kunciLabel": "Surat berikutnya: Al-'Adiyat - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-'Adiyat] ۝ (٢) [Ayat 2 Surat Al-'Adiyat] ۝ (٣) [Ayat 3 Surat Al-'Adiyat] ۝ (٤) [Ayat 4 Surat Al-'Adiyat] ۝ (٥) [Ayat 5 Surat Al-'Adiyat]"
      }
    ]
  },
  {
    "id": 9,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "يَا أَيُّهَا الْمُدَّثِّرُ قُمْ فَأَنْذِرْ وَرَبَّكَ فَكَبِّرْ",
        "referensi": "Surat Al-Muddassir: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Muddassir (1-3):",
        "kunciArab": "(١) يَا أَيُّهَا الْمُدَّثِّرُ ۝ (٢) قُمْ فَأَنْذِرْ ۝ (٣) وَرَبَّكَ فَكَبِّرْ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "عَبَسَ وَتَوَلَّىٰ أَن جَاءَهُ الْأَعْمَىٰ وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ",
        "referensi": "Surat 'Abasa: 1-3",
        "kunciLabel": "3 Ayat awal Surat 'Abasa (1-3):",
        "kunciArab": "(١) عَبَسَ وَتَوَلَّىٰ ۝ (٢) أَن جَاءَهُ الْأَعْمَىٰ ۝ (٣) وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Ghashiyah ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Ghashiyah 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Ghashiyah]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ",
        "kunciLabel": "Surat berikutnya: Az-Zalzalah - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Az-Zalzalah] ۝ (٢) [Ayat 2 Surat Az-Zalzalah] ۝ (٣) [Ayat 3 Surat Az-Zalzalah] ۝ (٤) [Ayat 4 Surat Az-Zalzalah] ۝ (٥) [Ayat 5 Surat Az-Zalzalah]"
      }
    ]
  },
  {
    "id": 10,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِذَا السَّمَاءُ انفَطَرَتْ وَإِذَا الْكَوَاكِبُ انتَثَرَتْ وَإِذَا الْبِحَارُ فُجِّرَتْ",
        "referensi": "Surat Al-Infitar: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Infitar (1-3):",
        "kunciArab": "(١) إِذَا السَّمَاءُ انفَطَرَتْ ۝ (٢) وَإِذَا الْكَوَاكِبُ انتَثَرَتْ ۝ (٣) وَإِذَا الْبِحَارُ فُجِّرَتْ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "الْحَاقَّةُ مَا الْحَاقَّةُ وَمَا أَدْرَاكَ مَا الْحَاقَّةُ",
        "referensi": "Surat Al-Haqqah: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Haqqah (1-3):",
        "kunciArab": "(١) الْحَاقَّةُ ۝ (٢) مَا الْحَاقَّةُ ۝ (٣) وَمَا أَدْرَاكَ مَا الْحَاقَّةُ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Infitar ayat 6-10",
        "rentangAyat": "Ayat 6-10",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Infitar 6-10):",
        "kunciArab": "[Ayat 6-10 Surat Al-Infitar]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَإِنَّ لَكَ لَأَجْرًا غَيْرَ مَمْنُونٍ",
        "kunciLabel": "Surat berikutnya: Al-Haqqah - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Haqqah] ۝ (٢) [Ayat 2 Surat Al-Haqqah] ۝ (٣) [Ayat 3 Surat Al-Haqqah] ۝ (٤) [Ayat 4 Surat Al-Haqqah] ۝ (٥) [Ayat 5 Surat Al-Haqqah]"
      }
    ]
  },
  {
    "id": 11,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ وَالْيَوْمِ الْمَوْعُودِ وَشَاهِدٍ وَمَشْهُودٍ",
        "referensi": "Surat Al-Buruj: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Buruj (1-3):",
        "kunciArab": "(١) وَالسَّمَاءِ ذَاتِ الْبُرُوجِ ۝ (٢) وَالْيَوْمِ الْمَوْعُودِ ۝ (٣) وَشَاهِدٍ وَمَشْهُودٍ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "عَمَّ يَتَسَاءَلُونَ عَنِ النَّبَإِ الْعَظِيمِ الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ",
        "referensi": "Surat An-Naba': 1-3",
        "kunciLabel": "3 Ayat awal Surat An-Naba' (1-3):",
        "kunciArab": "(١) عَمَّ يَتَسَاءَلُونَ ۝ (٢) عَنِ النَّبَإِ الْعَظِيمِ ۝ (٣) الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-A'la ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-A'la 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-A'la]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...فَذَكِّرْ إِن نَّفَعَتِ الذِّكْرَىٰ",
        "kunciLabel": "Surat berikutnya: Al-Ghashiyah - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Ghashiyah] ۝ (٢) [Ayat 2 Surat Al-Ghashiyah] ۝ (٣) [Ayat 3 Surat Al-Ghashiyah] ۝ (٤) [Ayat 4 Surat Al-Ghashiyah] ۝ (٥) [Ayat 5 Surat Al-Ghashiyah]"
      }
    ]
  },
  {
    "id": 12,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِذَا السَّمَاءُ انشَقَّتْ وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ وَإِذَا الْأَرْضُ مُدَّتْ",
        "referensi": "Surat Al-Inshiqaq: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Inshiqaq (1-3):",
        "kunciArab": "(١) إِذَا السَّمَاءُ انشَقَّتْ ۝ (٢) وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ ۝ (٣) وَإِذَا الْأَرْضُ مُدَّتْ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى الَّذِي خَلَقَ فَسَوَّىٰ وَالَّذِي قَدَّرَ فَهَدَىٰ",
        "referensi": "Surat Al-A'la: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-A'la (1-3):",
        "kunciArab": "(١) سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى ۝ (٢) الَّذِي خَلَقَ فَسَوَّىٰ ۝ (٣) وَالَّذِي قَدَّرَ فَهَدَىٰ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Haqqah ayat 19-23",
        "rentangAyat": "Ayat 19-23",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Haqqah 19-23):",
        "kunciArab": "[Ayat 19-23 Surat Al-Haqqah]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَصَدَقَتِ الْمُصَدِّقُونَ",
        "kunciLabel": "Surat berikutnya: Ad-Duha - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Ad-Duha] ۝ (٢) [Ayat 2 Surat Ad-Duha] ۝ (٣) [Ayat 3 Surat Ad-Duha] ۝ (٤) [Ayat 4 Surat Ad-Duha] ۝ (٥) [Ayat 5 Surat Ad-Duha]"
      }
    ]
  },
  {
    "id": 13,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "ن وَالْقَلَمِ وَمَا يَسْطُرُونَ مَا أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍ",
        "referensi": "Surat Al-Qalam: 1-2",
        "kunciLabel": "3 Ayat awal Surat Al-Qalam (1-3):",
        "kunciArab": "(١) ن ۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ ۝ (٢) مَا أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍ ۝ (٣) وَإِنَّ لَكَ لَأَجْرًا غَيْرَ مَمْنُونٍ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ",
        "referensi": "Surat Al-'Alaq: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-'Alaq (1-3):",
        "kunciArab": "(١) اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ (٢) خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ (٣) اقْرَأْ وَرَبُّكَ الْأَكْرَمُ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-'Adiyat ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-'Adiyat 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-'Adiyat]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...فَسَيُنزِلُ اللَّهُ عَزَابًا مِّنَ السَّمَاءِ",
        "kunciLabel": "Surat berikutnya: At-Takwir - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat At-Takwir] ۝ (٢) [Ayat 2 Surat At-Takwir] ۝ (٣) [Ayat 3 Surat At-Takwir] ۝ (٤) [Ayat 4 Surat At-Takwir] ۝ (٥) [Ayat 5 Surat At-Takwir]"
      }
    ]
  },
  {
    "id": 14,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "عَبَسَ وَتَوَلَّىٰ أَن جَاءَهُ الْأَعْمَىٰ وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ",
        "referensi": "Surat 'Abasa: 1-3",
        "kunciLabel": "3 Ayat awal Surat 'Abasa (1-3):",
        "kunciArab": "(١) عَبَسَ وَتَوَلَّىٰ ۝ (٢) أَن جَاءَهُ الْأَعْمَىٰ ۝ (٣) وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالنَّازِعَاتِ غَرْقًا وَالنَّاشِطَاتِ نَشْطًا وَالسَّابِحَاتِ سَبْحًا",
        "referensi": "Surat An-Nazi'at: 1-3",
        "kunciLabel": "3 Ayat awal Surat An-Nazi'at (1-3):",
        "kunciArab": "(١) وَالنَّازِعَاتِ غَرْقًا ۝ (٢) وَالنَّاشِطَاتِ نَشْطًا ۝ (٣) وَالسَّابِحَاتِ سَبْحًا"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat An-Nas ayat 1-6",
        "rentangAyat": "Ayat 1-6",
        "kunciLabel": "6 Ayat lengkap (Surat An-Nas 1-6):",
        "kunciArab": "[Ayat 1-6 Surat An-Nas]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...إِنَّ فِي ذَٰلِكَ لَذِكْرَىٰ لِمَن كَانَ لَهُ قَلْبٌ",
        "kunciLabel": "Surat berikutnya: Al-Muddassir - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Muddassir] ۝ (٢) [Ayat 2 Surat Al-Muddassir] ۝ (٣) [Ayat 3 Surat Al-Muddassir] ۝ (٤) [Ayat 4 Surat Al-Muddassir] ۝ (٥) [Ayat 5 Surat Al-Muddassir]"
      }
    ]
  },
  {
    "id": 15,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "الْحَاقَّةُ مَا الْحَاقَّةُ وَمَا أَدْرَاكَ مَا الْحَاقَّةُ",
        "referensi": "Surat Al-Haqqah: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Haqqah (1-3):",
        "kunciArab": "(١) الْحَاقَّةُ ۝ (٢) مَا الْحَاقَّةُ ۝ (٣) وَمَا أَدْرَاكَ مَا الْحَاقَّةُ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَيْلٌ لِّلْمُطَفِّفِينَ الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ",
        "referensi": "Surat Al-Mutaffifin: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Mutaffifin (1-3):",
        "kunciArab": "(١) وَيْلٌ لِّلْمُطَفِّفِينَ ۝ (٢) الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ ۝ (٣) وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Ad-Duha ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Ad-Duha 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Ad-Duha]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ",
        "kunciLabel": "Surat berikutnya: Al-'Alaq - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-'Alaq] ۝ (٢) [Ayat 2 Surat Al-'Alaq] ۝ (٣) [Ayat 3 Surat Al-'Alaq] ۝ (٤) [Ayat 4 Surat Al-'Alaq] ۝ (٥) [Ayat 5 Surat Al-'Alaq]"
      }
    ]
  },
  {
    "id": 16,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "عَمَّ يَتَسَاءَلُونَ عَنِ النَّبَإِ الْعَظِيمِ الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ",
        "referensi": "Surat An-Naba': 1-3",
        "kunciLabel": "3 Ayat awal Surat An-Naba' (1-3):",
        "kunciArab": "(١) عَمَّ يَتَسَاءَلُونَ ۝ (٢) عَنِ النَّبَإِ الْعَظِيمِ ۝ (٣) الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "يَا أَيُّهَا الْمُزَّمِّلُ قُمِ اللَّيْلَ إِلَّا قَلِيلًا نِّصْفَهُ أَوِ انقُصْ مِنْهُ قَلِيلًا",
        "referensi": "Surat Al-Muzzammil: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Muzzammil (1-3):",
        "kunciArab": "(١) يَا أَيُّهَا الْمُزَّمِّلُ ۝ (٢) قُمِ اللَّيْلَ إِلَّا قَلِيلًا ۝ (٣) نِّصْفَهُ أَوِ انقُصْ مِنْهُ قَلِيلًا"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Humazah ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Humazah 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Humazah]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...ثُمَّ كَلَّا سَيَعْلَمُونَ",
        "kunciLabel": "Surat berikutnya: An-Nazi'at - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat An-Nazi'at] ۝ (٢) [Ayat 2 Surat An-Nazi'at] ۝ (٣) [Ayat 3 Surat An-Nazi'at] ۝ (٤) [Ayat 4 Surat An-Nazi'at] ۝ (٥) [Ayat 5 Surat An-Nazi'at]"
      }
    ]
  },
  {
    "id": 17,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى الَّذِي خَلَقَ فَسَوَّىٰ وَالَّذِي قَدَّرَ فَهَدَىٰ",
        "referensi": "Surat Al-A'la: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-A'la (1-3):",
        "kunciArab": "(١) سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى ۝ (٢) الَّذِي خَلَقَ فَسَوَّىٰ ۝ (٣) وَالَّذِي قَدَّرَ فَهَدَىٰ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالسَّمَاءِ وَالطَّارِقِ وَمَا أَدْرَاكَ مَا الطَّارِقُ النَّجْمُ الثَّاقِبُ",
        "referensi": "Surat At-Tariq: 1-3",
        "kunciLabel": "3 Ayat awal Surat At-Tariq (1-3):",
        "kunciArab": "(١) وَالسَّمَاءِ وَالطَّارِقِ ۝ (٢) وَمَا أَدْرَاكَ مَا الطَّارِقُ ۝ (٣) النَّجْمُ الثَّاقِبُ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Balad ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Balad 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Balad]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَأَنَّهُ كَانَ رِجَالٌ مِّنَ الْإِنسِ يَعُوذُونَ بِرِجَالٍ مِّنَ الْجِنِّ",
        "kunciLabel": "Surat berikutnya: Al-Muzzammil - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Muzzammil] ۝ (٢) [Ayat 2 Surat Al-Muzzammil] ۝ (٣) [Ayat 3 Surat Al-Muzzammil] ۝ (٤) [Ayat 4 Surat Al-Muzzammil] ۝ (٥) [Ayat 5 Surat Al-Muzzammil]"
      }
    ]
  },
  {
    "id": 18,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ",
        "referensi": "Surat Al-'Alaq: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-'Alaq (1-3):",
        "kunciArab": "(١) اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ (٢) خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ (٣) اقْرَأْ وَرَبُّكَ الْأَكْرَمُ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالتِّينِ وَالزَّيْتُونِ وَطُورِ سِينِينَ وَهَٰذَا الْبَلَدِ الْأَمِينِ",
        "referensi": "Surat At-Tin: 1-3",
        "kunciLabel": "3 Ayat awal Surat At-Tin (1-3):",
        "kunciArab": "(١) وَالتِّينِ وَالزَّيْتُونِ ۝ (٢) وَطُورِ سِينِينَ ۝ (٣) وَهَٰذَا الْبَلَدِ الْأَمِينِ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat 'Abasa ayat 24-28",
        "rentangAyat": "Ayat 24-28",
        "kunciLabel": "5 Ayat lengkap (Surat 'Abasa 24-28):",
        "kunciArab": "[Ayat 24-28 Surat 'Abasa]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...أُولَٰئِكَ أَصْحَابُ الْمَيْمَنَةِ",
        "kunciLabel": "Surat berikutnya: Ash-Shams - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Ash-Shams] ۝ (٢) [Ayat 2 Surat Ash-Shams] ۝ (٣) [Ayat 3 Surat Ash-Shams] ۝ (٤) [Ayat 4 Surat Ash-Shams] ۝ (٥) [Ayat 5 Surat Ash-Shams]"
      }
    ]
  },
  {
    "id": 19,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالنَّازِعَاتِ غَرْقًا وَالنَّاشِطَاتِ نَشْطًا وَالسَّابِحَاتِ سَبْحًا",
        "referensi": "Surat An-Nazi'at: 1-3",
        "kunciLabel": "3 Ayat awal Surat An-Nazi'at (1-3):",
        "kunciArab": "(١) وَالنَّازِعَاتِ غَرْقًا ۝ (٢) وَالنَّاشِطَاتِ نَشْطًا ۝ (٣) وَالسَّابِحَاتِ سَبْحًا"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ عَامِلَةٌ نَّاصِبَةٌ",
        "referensi": "Surat Al-Ghashiyah: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Ghashiyah (1-3):",
        "kunciArab": "(١) هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ ۝ (٢) وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ ۝ (٣) عَامِلَةٌ نَّاصِبَةٌ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat An-Nazi'at ayat 11-15",
        "rentangAyat": "Ayat 11-15",
        "kunciLabel": "5 Ayat lengkap (Surat An-Nazi'at 11-15):",
        "kunciArab": "[Ayat 11-15 Surat An-Nazi'at]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَنْ يَأْتِيكُمْ بِمَاءٍ مَعِينٍ",
        "kunciLabel": "Surat berikutnya: Al-Qalam - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Qalam] ۝ (٢) [Ayat 2 Surat Al-Qalam] ۝ (٣) [Ayat 3 Surat Al-Qalam] ۝ (٤) [Ayat 4 Surat Al-Qalam] ۝ (٥) [Ayat 5 Surat Al-Qalam]"
      }
    ]
  },
  {
    "id": 20,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَيْلٌ لِّلْمُطَفِّفِينَ الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ",
        "referensi": "Surat Al-Mutaffifin: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Mutaffifin (1-3):",
        "kunciArab": "(١) وَيْلٌ لِّلْمُطَفِّفِينَ ۝ (٢) الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ ۝ (٣) وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالضُّحَىٰ وَاللَّيْلِ إِذَا سَجَىٰ مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
        "referensi": "Surat Ad-Duha: 1-3",
        "kunciLabel": "3 Ayat awal Surat Ad-Duha (1-3):",
        "kunciArab": "(١) وَالضُّحَىٰ ۝ (٢) وَاللَّيْلِ إِذَا سَجَىٰ ۝ (٣) مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Kafirun ayat 1-6",
        "rentangAyat": "Ayat 1-6",
        "kunciLabel": "6 Ayat lengkap (Surat Al-Kafirun 1-6):",
        "kunciArab": "[Ayat 1-6 Surat Al-Kafirun]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...كَلَّا لَا تُطِعْهُ",
        "kunciLabel": "Surat berikutnya: Al-Qadr - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Qadr] ۝ (٢) [Ayat 2 Surat Al-Qadr] ۝ (٣) [Ayat 3 Surat Al-Qadr] ۝ (٤) [Ayat 4 Surat Al-Qadr] ۝ (٥) [Ayat 5 Surat Al-Qadr]"
      }
    ]
  },
  {
    "id": 21,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "يَا أَيُّهَا الْمُزَّمِّلُ قُمِ اللَّيْلَ إِلَّا قَلِيلًا نِّصْفَهُ أَوِ انقُصْ مِنْهُ قَلِيلًا",
        "referensi": "Surat Al-Muzzammil: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Muzzammil (1-3):",
        "kunciArab": "(١) يَا أَيُّهَا الْمُزَّمِّلُ ۝ (٢) قُمِ اللَّيْلَ إِلَّا قَلِيلًا ۝ (٣) نِّصْفَهُ أَوِ انقُصْ مِنْهُ قَلِيلًا"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَنْ يَأْتِيكُمْ بِمَاءٍ مَعِينٍ",
        "referensi": "Surat Al-Mulk: 30",
        "kunciLabel": "3 Ayat terakhir Surat Al-Mulk (28-30):",
        "kunciArab": "(٢٨) قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَنْ يَأْتِيكُمْ بِمَاءٍ مَعِينٍ ۝ (٢٩) قُلْ هُوَ الرَّحْمَٰنُ آمَنَّا بِهِ وَعَلَيْهِ تَوَكَّلْنَا ۝ (٣٠) قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَنْ يَأْتِيكُمْ بِمَاءٍ مَعِينٍ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Lail ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Lail 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Lail]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَقَدْ خَابَ مَن دَسَّاهَا",
        "kunciLabel": "Surat berikutnya: Al-Lail - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Lail] ۝ (٢) [Ayat 2 Surat Al-Lail] ۝ (٣) [Ayat 3 Surat Al-Lail] ۝ (٤) [Ayat 4 Surat Al-Lail] ۝ (٥) [Ayat 5 Surat Al-Lail]"
      }
    ]
  },
  {
    "id": 22,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالسَّمَاءِ وَالطَّارِقِ وَمَا أَدْرَاكَ مَا الطَّارِقُ النَّجْمُ الثَّاقِبُ",
        "referensi": "Surat At-Tariq: 1-3",
        "kunciLabel": "3 Ayat awal Surat At-Tariq (1-3):",
        "kunciArab": "(١) وَالسَّمَاءِ وَالطَّارِقِ ۝ (٢) وَمَا أَدْرَاكَ مَا الطَّارِقُ ۝ (٣) النَّجْمُ الثَّاقِبُ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ رَسُولٌ مِّنَ اللَّهِ يَتْلُو صُحُفًا مُّطَهَّرَةً",
        "referensi": "Surat Al-Bayyinah: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Bayyinah (1-3):",
        "kunciArab": "(١) لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ ۝ (٢) رَسُولٌ مِّنَ اللَّهِ يَتْلُو صُحُفًا مُّطَهَّرَةً ۝ (٣) فِيهَا كُتُبٌ قَيِّمَةٌ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Mutaffifin ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Mutaffifin 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Mutaffifin]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...فَوَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ",
        "kunciLabel": "Surat berikutnya: Al-Inshiqaq - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Inshiqaq] ۝ (٢) [Ayat 2 Surat Al-Inshiqaq] ۝ (٣) [Ayat 3 Surat Al-Inshiqaq] ۝ (٤) [Ayat 4 Surat Al-Inshiqaq] ۝ (٥) [Ayat 5 Surat Al-Inshiqaq]"
      }
    ]
  },
  {
    "id": 23,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالتِّينِ وَالزَّيْتُونِ وَطُورِ سِينِينَ وَهَٰذَا الْبَلَدِ الْأَمِينِ",
        "referensi": "Surat At-Tin: 1-3",
        "kunciLabel": "3 Ayat awal Surat At-Tin (1-3):",
        "kunciArab": "(١) وَالتِّينِ وَالزَّيْتُونِ ۝ (٢) وَطُورِ سِينِينَ ۝ (٣) وَهَٰذَا الْبَلَدِ الْأَمِينِ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالْفَجْرِ وَلَيَالٍ عَشْرٍ وَالشَّفْعِ وَالْوَتْرِ",
        "referensi": "Surat Al-Fajr: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Fajr (1-3):",
        "kunciArab": "(١) وَالْفَجْرِ ۝ (٢) وَلَيَالٍ عَشْرٍ ۝ (٣) وَالشَّفْعِ وَالْوَتْرِ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat At-Takwir ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat At-Takwir 1-5):",
        "kunciArab": "[Ayat 1-5 Surat At-Takwir]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...فَإِذَا شَاءَ اللَّهُ لَأَمَرَهُمْ",
        "kunciLabel": "Surat berikutnya: Al-Insan - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Insan] ۝ (٢) [Ayat 2 Surat Al-Insan] ۝ (٣) [Ayat 3 Surat Al-Insan] ۝ (٤) [Ayat 4 Surat Al-Insan] ۝ (٥) [Ayat 5 Surat Al-Insan]"
      }
    ]
  },
  {
    "id": 24,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ عَامِلَةٌ نَّاصِبَةٌ",
        "referensi": "Surat Al-Ghashiyah: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Ghashiyah (1-3):",
        "kunciArab": "(١) هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ ۝ (٢) وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ ۝ (٣) عَامِلَةٌ نَّاصِبَةٌ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِذَا الشَّمْسُ كُوِّرَتْ وَإِذَا النُّجُومُ انكَدَرَتْ وَإِذَا الْجِبَالُ سُيِّرَتْ",
        "referensi": "Surat At-Takwir: 1-3",
        "kunciLabel": "3 Ayat awal Surat At-Takwir (1-3):",
        "kunciArab": "(١) إِذَا الشَّمْسُ كُوِّرَتْ ۝ (٢) وَإِذَا النُّجُومُ انكَدَرَتْ ۝ (٣) وَإِذَا الْجِبَالُ سُيِّرَتْ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Buruj ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Buruj 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Buruj]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
        "kunciLabel": "Surat berikutnya: Al-Inshirah - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Inshirah] ۝ (٢) [Ayat 2 Surat Al-Inshirah] ۝ (٣) [Ayat 3 Surat Al-Inshirah] ۝ (٤) [Ayat 4 Surat Al-Inshirah] ۝ (٥) [Ayat 5 Surat Al-Inshirah]"
      }
    ]
  },
  {
    "id": 25,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالضُّحَىٰ وَاللَّيْلِ إِذَا سَجَىٰ مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
        "referensi": "Surat Ad-Duha: 1-3",
        "kunciLabel": "3 Ayat awal Surat Ad-Duha (1-3):",
        "kunciArab": "(١) وَالضُّحَىٰ ۝ (٢) وَاللَّيْلِ إِذَا سَجَىٰ ۝ (٣) مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "يَا أَيُّهَا الْمُدَّثِّرُ قُمْ فَأَنْذِرْ وَرَبَّكَ فَكَبِّرْ",
        "referensi": "Surat Al-Muddassir: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Muddassir (1-3):",
        "kunciArab": "(١) يَا أَيُّهَا الْمُدَّثِّرُ ۝ (٢) قُمْ فَأَنْذِرْ ۝ (٣) وَرَبَّكَ فَكَبِّرْ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Falaq ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Falaq 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Falaq]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...غَفُورٌ وَدُودٌ",
        "kunciLabel": "Surat berikutnya: At-Tariq - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat At-Tariq] ۝ (٢) [Ayat 2 Surat At-Tariq] ۝ (٣) [Ayat 3 Surat At-Tariq] ۝ (٤) [Ayat 4 Surat At-Tariq] ۝ (٥) [Ayat 5 Surat At-Tariq]"
      }
    ]
  },
  {
    "id": 26,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَنْ يَأْتِيكُمْ بِمَاءٍ مَعِينٍ",
        "referensi": "Surat Al-Mulk: 30",
        "kunciLabel": "3 Ayat terakhir Surat Al-Mulk (28-30):",
        "kunciArab": "(٢٨) قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَنْ يَأْتِيكُمْ بِمَاءٍ مَعِينٍ ۝ (٢٩) قُلْ هُوَ الرَّحْمَٰنُ آمَنَّا بِهِ وَعَلَيْهِ تَوَكَّلْنَا ۝ (٣٠) قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَنْ يَأْتِيكُمْ بِمَاءٍ مَعِينٍ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِذَا السَّمَاءُ انفَطَرَتْ وَإِذَا الْكَوَاكِبُ انتَثَرَتْ وَإِذَا الْبِحَارُ فُجِّرَتْ",
        "referensi": "Surat Al-Infitar: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Infitar (1-3):",
        "kunciArab": "(١) إِذَا السَّمَاءُ انفَطَرَتْ ۝ (٢) وَإِذَا الْكَوَاكِبُ انتَثَرَتْ ۝ (٣) وَإِذَا الْبِحَارُ فُجِّرَتْ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Quraysh ayat 1-4",
        "rentangAyat": "Ayat 1-4",
        "kunciLabel": "4 Ayat lengkap (Surat Quraysh 1-4):",
        "kunciArab": "[Ayat 1-4 Surat Quraysh]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَمَا هُوَ بِقَوْلِ شَيْطَانٍ رَّجِيمٍ",
        "kunciLabel": "Surat berikutnya: Al-Infitar - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Infitar] ۝ (٢) [Ayat 2 Surat Al-Infitar] ۝ (٣) [Ayat 3 Surat Al-Infitar] ۝ (٤) [Ayat 4 Surat Al-Infitar] ۝ (٥) [Ayat 5 Surat Al-Infitar]"
      }
    ]
  },
  {
    "id": 27,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ رَسُولٌ مِّنَ اللَّهِ يَتْلُو صُحُفًا مُّطَهَّرَةً",
        "referensi": "Surat Al-Bayyinah: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Bayyinah (1-3):",
        "kunciArab": "(١) لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ ۝ (٢) رَسُولٌ مِّنَ اللَّهِ يَتْلُو صُحُفًا مُّطَهَّرَةً ۝ (٣) فِيهَا كُتُبٌ قَيِّمَةٌ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ وَالْيَوْمِ الْمَوْعُودِ وَشَاهِدٍ وَمَشْهُودٍ",
        "referensi": "Surat Al-Buruj: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Buruj (1-3):",
        "kunciArab": "(١) وَالسَّمَاءِ ذَاتِ الْبُرُوجِ ۝ (٢) وَالْيَوْمِ الْمَوْعُودِ ۝ (٣) وَشَاهِدٍ وَمَشْهُودٍ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Ash-Shams ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Ash-Shams 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Ash-Shams]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...إِنَّهُ كَانَ عَبْدًا شَكُورًا",
        "kunciLabel": "Surat berikutnya: Al-Jinn - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Jinn] ۝ (٢) [Ayat 2 Surat Al-Jinn] ۝ (٣) [Ayat 3 Surat Al-Jinn] ۝ (٤) [Ayat 4 Surat Al-Jinn] ۝ (٥) [Ayat 5 Surat Al-Jinn]"
      }
    ]
  },
  {
    "id": 28,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "وَالْفَجْرِ وَلَيَالٍ عَشْرٍ وَالشَّفْعِ وَالْوَتْرِ",
        "referensi": "Surat Al-Fajr: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Fajr (1-3):",
        "kunciArab": "(١) وَالْفَجْرِ ۝ (٢) وَلَيَالٍ عَشْرٍ ۝ (٣) وَالشَّفْعِ وَالْوَتْرِ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِذَا السَّمَاءُ انشَقَّتْ وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ وَإِذَا الْأَرْضُ مُدَّتْ",
        "referensi": "Surat Al-Inshiqaq: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Inshiqaq (1-3):",
        "kunciArab": "(١) إِذَا السَّمَاءُ انشَقَّتْ ۝ (٢) وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ ۝ (٣) وَإِذَا الْأَرْضُ مُدَّتْ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat At-Tariq ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat At-Tariq 1-5):",
        "kunciArab": "[Ayat 1-5 Surat At-Tariq]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَلَهُمْ عَذَابٌ مُّهِينٌ",
        "kunciLabel": "Surat berikutnya: Al-Buruj - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-Buruj] ۝ (٢) [Ayat 2 Surat Al-Buruj] ۝ (٣) [Ayat 3 Surat Al-Buruj] ۝ (٤) [Ayat 4 Surat Al-Buruj] ۝ (٥) [Ayat 5 Surat Al-Buruj]"
      }
    ]
  },
  {
    "id": 29,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "إِذَا الشَّمْسُ كُوِّرَتْ وَإِذَا النُّجُومُ انكَدَرَتْ وَإِذَا الْجِبَالُ سُيِّرَتْ",
        "referensi": "Surat At-Takwir: 1-3",
        "kunciLabel": "3 Ayat awal Surat At-Takwir (1-3):",
        "kunciArab": "(١) إِذَا الشَّمْسُ كُوِّرَتْ ۝ (٢) وَإِذَا النُّجُومُ انكَدَرَتْ ۝ (٣) وَإِذَا الْجِبَالُ سُيِّرَتْ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "ن وَالْقَلَمِ وَمَا يَسْطُرُونَ مَا أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍ",
        "referensi": "Surat Al-Qalam: 1-2",
        "kunciLabel": "3 Ayat awal Surat Al-Qalam (1-3):",
        "kunciArab": "(١) ن ۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ ۝ (٢) مَا أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍ ۝ (٣) وَإِنَّ لَكَ لَأَجْرًا غَيْرَ مَمْنُونٍ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Masad ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Masad 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Masad]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...وَإِنَّ عَلَيْهِ لَقَادِرُونَ",
        "kunciLabel": "Surat berikutnya: Al-A'la - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat Al-A'la] ۝ (٢) [Ayat 2 Surat Al-A'la] ۝ (٣) [Ayat 3 Surat Al-A'la] ۝ (٤) [Ayat 4 Surat Al-A'la] ۝ (٥) [Ayat 5 Surat Al-A'la]"
      }
    ]
  },
  {
    "id": 30,
    "soal": [
      {
        "nomor": 1,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "يَا أَيُّهَا الْمُدَّثِّرُ قُمْ فَأَنْذِرْ وَرَبَّكَ فَكَبِّرْ",
        "referensi": "Surat Al-Muddassir: 1-3",
        "kunciLabel": "3 Ayat awal Surat Al-Muddassir (1-3):",
        "kunciArab": "(١) يَا أَيُّهَا الْمُدَّثِّرُ ۝ (٢) قُمْ فَأَنْذِرْ ۝ (٣) وَرَبَّكَ فَكَبِّرْ"
      },
      {
        "nomor": 2,
        "jenis": "sambung",
        "pertanyaan": "Sambungkan ayat berikut:",
        "potonganAyat": "عَبَسَ وَتَوَلَّىٰ أَن جَاءَهُ الْأَعْمَىٰ وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ",
        "referensi": "Surat 'Abasa: 1-3",
        "kunciLabel": "3 Ayat awal Surat 'Abasa (1-3):",
        "kunciArab": "(١) عَبَسَ وَتَوَلَّىٰ ۝ (٢) أَن جَاءَهُ الْأَعْمَىٰ ۝ (٣) وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ"
      },
      {
        "nomor": 3,
        "jenis": "bacakan",
        "pertanyaan": "Bacakan Quran Surat Al-Fajr ayat 1-5",
        "rentangAyat": "Ayat 1-5",
        "kunciLabel": "5 Ayat lengkap (Surat Al-Fajr 1-5):",
        "kunciArab": "[Ayat 1-5 Surat Al-Fajr]"
      },
      {
        "nomor": 4,
        "jenis": "sambung-surat",
        "pertanyaan": "Sambungkan ayat terakhir sebuah surat ke awal surat berikutnya:",
        "potonganAyat": "...فِي ذَٰلِكَ لَعِبْرَةٌ لِّمَن يَخْشَىٰ",
        "kunciLabel": "Surat berikutnya: 'Abasa - 5 ayat awal:",
        "kunciArab": "(١) [Ayat 1 Surat 'Abasa] ۝ (٢) [Ayat 2 Surat 'Abasa] ۝ (٣) [Ayat 3 Surat 'Abasa] ۝ (٤) [Ayat 4 Surat 'Abasa] ۝ (٥) [Ayat 5 Surat 'Abasa]"
      }
    ]
  }
];

// Export untuk digunakan di browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PAKET_SOAL };
}
