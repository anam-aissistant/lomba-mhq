# Vercel Blob Setup

Untuk mengaktifkan sync state antar juri, Anda perlu setup Vercel Blob:

## Langkah Setup

1. Login ke [Vercel Dashboard](https://vercel.com/dashboard)
2. Pilih project **lomba-mhq**
3. Masuk ke menu **Storage** → **Blob**
4. Klik **Create New**
5. Copy **BLOB_READ_WRITE_TOKEN** yang di-generate
6. Masuk ke project settings → **Environment Variables**
7. Tambahkan variable:
   - Name: `BLOB_READ_WRITE_TOKEN`
   - Value: *(paste token dari step 5)*
8. Klik **Save** dan **Redeploy**

## Fitur Server-Side State

Setelah setup:
- ✅ Multiple juri bisa akses real-time
- ✅ Status paket (sudah/belum digunakan) sync otomatis
- ✅ Polling setiap 3 detik saat di halaman daftar paket
- ✅ Reset button untuk panitia (sync ke semua juri)

## Tanpa Setup Blob

Jika tidak ingin setup Blob, web tetap bisa jalan dengan:
- State tetap tersimpan di localStorage (per-browser)
- Tidak ada sync antar juri (masing-masing lihat status sendiri)