# Yanime API

Unofficial REST API untuk scraping data anime dari [OtakuDesu](https://otakudesu.blog).

## Stack

Node.js · Express.js · ES Modules

## Menjalankan Lokal

```bash
npm install
npm start
```

Server berjalan di `http://localhost:7128`

---

## Endpoints

Base URL: `http://localhost:7128/otakudesu`

| Method       | Endpoint                  | Deskripsi                          | Query Params         |
|--------------|---------------------------|------------------------------------|----------------------|
| GET          | `/`                       | Daftar semua route                 | —                    |
| GET          | `/home`                   | Anime ongoing & completed terbaru  | —                    |
| GET          | `/schedule`               | Jadwal rilis per hari              | —                    |
| GET          | `/anime`                  | Semua anime (urutan abjad)         | —                    |
| GET          | `/genre`                  | Semua genre                        | —                    |
| GET          | `/ongoing`                | Anime sedang tayang                | `page` (opsional)    |
| GET          | `/completed`              | Anime selesai                      | `page` (opsional)    |
| GET          | `/search`                 | Cari anime                         | `q` (**wajib**)      |
| GET          | `/genre/:genreId`         | Anime berdasarkan genre            | `page` (opsional)    |
| GET          | `/anime/:animeId`         | Detail anime                       | —                    |
| GET          | `/episode/:episodeId`     | Detail episode & daftar server     | —                    |
| GET          | `/batch/:batchId`         | Detail batch                       | —                    |
| GET \| POST  | `/server/:serverId`       | Link video streaming               | —                    |