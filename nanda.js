const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000
app.use(bodyParser.urlencoded({extented: false}))

app.get('/', (req, res) => res.send('I LOVE UUU'))

app.get('/crud/:name/:class', (req, res) => {
    let namaSiswa = req.params.name;
    let kelas = req.params.class;
    res.end("Student name : " + namaSiswa + " class: " + kelas);
});

app.post('/crud', (req, res) => {
    let namaSiswa = req.body.name;
    let kelas = req.body.class;
    res.end("new student name: " +namaSiswa + " class: " +kelas)
});

app.put('/crud/:id', (req, res) => {
    let id = req.params.id;
    let namaSiswa = req.body.name;
    let kelas = req.body.class;
    res.end("student by id: " + id + " name: " +namaSiswa + " has done update")
});

app.delete('/crud/:id', (req, res) => {
    let id = req.params.id;
    let namaSiswa = req.body.name;
    res.end("student by id: " +id+ " and name: " +namaSiswa+ " has deleted")
})

//ini file PASKI
app.get('/wangsa/:name/:class/:high', (req, res) => {
    let namaSiswa1 = req.params.name;
    let kelas = req.params.class;
    let tinggiBadan = req.params.high;
    res.end("Student name: " + namaSiswa1 + " class: " + kelas + " high: " + tinggiBadan);
});

app.post('/wangsa', (req, res) => {
    let namaSiswa1 = req.body.name;
    let kelas = req.body.class;
    let tinggiBadan = req.body.high;
    res.end("new student name: " +namaSiswa1 + " class: " +kelas + " high: " + tinggiBadan)
});

app.put('/wangsa/:id', (req, res) => {
    let id = req.params.id;
    let namaSiswa1 = req.body.name;
    let kelas = req.body.class;
    let tinggiBadan = req.body.high;
    res.end("student by id: " + id + " name: " +namaSiswa1 + "kelas : " + kelas + " tinggi: " + tinggiBadan + " has done update")
});

app.delete('/wangsa/:id', (req, res) => {
    let id = req.params.id;
    let namaSiswa1 = req.body.name;
    let tinggiBadan = req.body.high;
    res.end("student by id: " +id+ " and name: " + namaSiswa1 + " tinggi: " + tinggiBadan + " has deleted")
})

//Ini file ATK
app.get('/nawang/:name/:barang/:jumlah', (req, res) => {
    let namaPembeli = req.params.name;
    let namaBarang = req.params.barang;
    let jumlah = req.params.jumlah;
    res.end("Buyer name : " + namaPembeli+ " Barang : " + namaBarang + " Jumlah :" + jumlah);
});

app.post('/nawang', (req, res) => {
    let namaPembeli = req.body.name;
    let namaBarang = req.body.barang;
    let jumlah = req.body.jumlah;
    res.end("New buyer name : " +namaPembeli+ "\nBarang : " +namaBarang + "\nJumlah : " + jumlah)
});

app.put('/nawang/:id', (req, res) => {
    let id = req.params.id;
    let namaPembeli = req.body.name;
    let namaBarang = req.body.barang;
    let jumlah = req.body.jumlah;
    res.end("student by id: " + id + " Name: " +namaPembeli + "/n Barang : " + namaBarang + + " \n Jumlah : " + jumlah + " has done update")
});

app.delete('/nawang/:id', (req, res) => {
    let id = req.params.id;
    let namaPembeli = req.body.name;
    let namaBarang = req.body.barang;
    let jumlah = req.body.jumlah;
    res.end("student by id: " +id+ " Name: " +namaPembeli + "Barang : " + namaBarang + " Jumlah :" + jumlah + " has deleted")
})

//Ini file DATA BUKU PERPUS
app.get('/dhani/:judul/:pengarang/:jumlah', (req, res) => {
    let judulBuku = req.params.judul;
    let namaPengarang = req.params.pengarang;
    let jumlah = req.params.jumlah;
    res.end("Judul buku : " + judulBuku+ " Pengarang : " + namaPengarang + " Jumlah :" + jumlah);
});

app.post('/dhani', (req, res) => {
    let judulBuku = req.body.judul;
    let namaPengarang = req.body.pengarang;
    let jumlah = req.body.jumlah;
    res.end("Judul buku : " + judulBuku+ " Pengarang : " +namaPengarang + " Jumlah : " + jumlah)
});

app.put('/dhani/:id', (req, res) => {
    let id = req.params.id;
    let judulBuku = req.body.judul;
    let namaPengarang = req.body.pengarang;
    let jumlah = req.body.jumlah;
    res.end("student by id: " + id + " Judul buku : " + judulBuku + " Pengarang : " + namaPengarang + " Jumlah : " + jumlah + " has done update")
});

app.delete('/dhani/:id', (req, res) => {
    let id = req.params.id;
    let judulBuku = req.body.judul;
    let namaPengarang = req.body.pengarang;
    let jumlah = req.body.jumlah;
    res.end("student by id: " +id+ " Judul buku: " + judulBuku + " Pengarang : " + namaPengarang + " Jumlah :" + jumlah + " has deleted")
})

//ini file ZONASI
app.get('/wardha/:nama/:jarak/:nilai', (req, res) => {
    let namaSiswa2 = req.params.nama;
    let jarak = req.params.jarak;
    let nilai = req.params.nilai;
    res.end("Nama siswa : " + namaSiswa2 + " Jarak : " + jarak + " Nilai :" + nilai);
});

app.post('/wardha', (req, res) => {
    let namaSiswa2 = req.body.nama;
    let jarak = req.body.jarak;
    let nilai = req.body.nilai;
    res.end("Nama siswa : " +namaSiswa2 + " Jarak : " + jarak + " Nilai : " + nilai)
});

app.put('/wardha/:id', (req, res) => {
    let id = req.params.id;
    let namaSiswa2 = req.body.nama;
    let jarak = req.body.jarak;
    let nilai = req.body.nilai;
    res.end("student by id: " + id + " Nama siswa : " + namaSiswa2 + " Jarak : " + jarak + " Nilai : " + nilai + " has done update")
});

app.delete('/wardha/:id', (req, res) => {
    let id = req.params.id;
    let namaSiswa2 = req.body.nama;
    let jarak = req.body.jarak;
    let nilai = req.body.nilai;
    res.end("student by id: " +id+ " Nama siswa : " + namaSiswa2 + " Jarak : " + jarak + " Nilai  :" + nilai + " has deleted")
})

//ini file LAPTOP
app.get('/adnan/:merk/:jenis/:harga', (req, res) => {
    let merklaptop = req.params.merk;
    let jenislaptop = req.params.jenis;
    let harga = req.params.harga;
    res.end("Merk laptop : " + merklaptop + " Jenis : " + jenislaptop + " Harga :" + harga);
});

app.post('/adnan', (req, res) => {
    let merklaptop = req.body.merk;
    let jenislaptop = req.body.jenis;
    let harga = req.body.harga;
    res.end("Merk laptop : " + merklaptop + " Jenis : " + jenislaptop + " Harga : " + harga)
});

app.put('/adnan/:id', (req, res) => {
    let id = req.params.id;
    let merklaptop = req.body.merk;
    let jenislaptop = req.body.jenis;
    let harga = req.body.harga;
    res.end("student by id: " + id + " Merk laptop : " + merklaptop + " Jenis : " + jenislaptop + " Harga : " + harga + " has done update")
});

app.delete('/adnan/:id', (req, res) => {
    let id = req.params.id;
    let merklaptop = req.body.merk;
    let jenislaptop = req.body.jenis;
    let harga = req.body.harga;
    res.end("student by id: " +id+ " Merk laptop : " + merklaptop + " Jenis : " + jenislaptop + " Harga  :" + harga + " has deleted")
})

//ini file SEPATU
app.get('/putri/:merk/:ukuran/:warna', (req, res) => {
    let merkspt = req.params.merk;
    let ukuran = req.params.ukuran;
    let warna = req.params.warna;
    res.end("Merk sepatu : " + merkspt + " Ukuran sepatu : " + ukuran + " Warna : " + warna);
});

app.post('/putri', (req, res) => {
    let merkspt = req.body.merk;
    let ukuran = req.body.ukuran;
    let warna = req.body.warna;
    res.end("Merk sepatu : " + merkspt + " Ukuran sepatu : " + ukuran + " Warna : " + warna)
});

app.put('/putri/:id', (req, res) => {
    let id = req.params.id;
    let merkspt = req.body.merk;
    let ukuran = req.body.ukuran;
    let warna = req.body.warna;
    res.end("student by id: " + id + " Merk sepatu : " + merkspt + " Ukuran sepatu : " + ukuran + " Warna : " + warna + " has done update")
});

app.delete('/putri/:id', (req, res) => {
    let id = req.params.id;
    let merkspt = req.body.merk;
    let ukuran = req.body.ukuran;
    let warna = req.body.warna;
    res.end("student by id: " +id+ " Merk sepatu : " + merkspt + " Ukuran sepatu : " + ukuran + " Warna  :" + warna + " has deleted")
})

//ini file LOMBA
app.get('/bombi/:nomer/:jenis/:tema', (req, res) => {
    let noPeserta = req.params.nomer;
    let jenisLomba = req.params.jenis;
    let subTema = req.params.tema;
    res.end("No.Peserta : " + noPeserta + " Jenis lomba : " + jenisLomba + " Subtema : " + subTema);
});

app.post('/bombi', (req, res) => {
    let noPeserta = req.body.nomer;
    let jenisLomba = req.body.ukuran;
    let subTema = req.body.tema;
    res.end("No.Peserta : " + noPeserta + " Jenis lomba : " + jenisLomba + " Subtema : " + subTema)
});

app.put('/bombi/:id', (req, res) => {
    let id = req.params.id;
    let noPeserta = req.body.nomer;
    let jenisLomba = req.body.jenis;
    let subTema = req.body.tema;
    res.end("student by id: " + id + " No.Peserta : " + noPeserta + " Jenis lomba : " + jenisLomba + " Subtema : " + subTema)
});

app.delete('/bombi/:id', (req, res) => {
    let id = req.params.id;
    let noPeserta = req.body.nomer;
    let jenisLomba = req.body.jenis;
    let subTema = req.body.tema;
    res.end("student by id: " +id+ " No.Peserta : " + noPeserta + " Jenis lomba : " + jenisLomba + " Subtema : " + subTema)
});

//ini file BAKAT MINAT
app.get('/wibu/:namaPeserta/:bakat/:minat', (req, res) => {
    let namaPeserta = req.params.namaPeserta;
    let bakat = req.params.bakat;
    let minat = req.params.minat;
    res.end("Nama Peserta : " + namaPeserta + " Bakat : " + bakat + " Minat : " + minat);
});

app.post('/wibu', (req, res) => {
    let namaPeserta = req.body.namaPeserta;
    let bakat = req.body.bakat;
    let minat = req.body.minat;
    res.end("Nama Peserta : " + namaPeserta + " Bakat : " + bakat + " Minat : " + minat)
});

app.put('/wibu/:id', (req, res) => {
    let id = req.params.id;
    let namaPeserta = req.body.namaPeserta;
    let bakat = req.body.bakat;
    let minat = req.body.minat;
    res.end("student by id: " + id + " Nama Peserta : " + namaPeserta + " Bakat : " + bakat + " Minat : " + minat)
});

app.delete('/wibu/:id', (req, res) => {
    let id = req.params.id;
    let namaPeserta = req.body.namaPeserta;
    let bakat = req.body.bakat;
    let minat = req.body.minat;
    res.end("student by id: " +id+ " Nama Peserta : " + namaPeserta + " Bakat : " + bakat + " Minat : " + minat)
});

//ini file PEMESANAN
app.get('/moklet/:namaPemesan/:minuman/:makanan', (req, res) => {
    let namaPemesan = req.params.namaPemesan;
    let minuman = req.params.minuman;
    let makanan = req.params.makanan;
    res.end("Nama Pemesan : " + namaPemesan + " Minuman : " + minuman + " Makanan : " + makanan);
});

app.post('/moklet', (req, res) => {
    let namaPemesan = req.body.namaPemesan;
    let minuman = req.body.minuman;
    let makanan = req.body.makanan;
    res.end("Nama Pemesan : " + namaPemesan + " Minuman : " + minuman + " Makanan: " + makanan)
});

app.put('/moklet/:id', (req, res) => {
    let id = req.params.id;
    let namaPemesan = req.body.namaPemesan;
    let minuman = req.body.minuman;
    let makanan = req.body.makaan;
    res.end("student by id: " + id + " Nama Pemesanan : " + namaPemesan + " Minuman : " + minuman + " Makanan : " + makanan)
});

app.delete('/moklet/:id', (req, res) => {
    let id = req.params.id;
    let namaPemesan = req.body.namaPemesan;
    let minuman = req.body.minuman;
    let makanan = req.body.makanan;
    res.end("student by id: " +id+ " Nama Pemesanan : " + namaPemesan + " Minuman : " + minuman + " Makanan : " + makanan)
});

//ini file SEKOLAH 
app.get('/wiku/:namaKepsek/:namaSekolah/:alamatSekolah', (req, res) => {
    let namaKepsek = req.params.namaKepsek;
    let namaSekolah = req.params.namaSekolah;
    let alamatSekolah = req.params.alamatSekolah;
    res.end("Nama Kepala Sekolah : " + namaKepsek + " Nama Sekolah : " + namaSekolah + " Alamat Sekolah : " + alamatSekolah);
});

app.post('/wiku', (req, res) => {
    let namaKepsek = req.body.namaKepsek;
    let namaSekolah = req.body.namaSekolah;
    let alamatSekolah = req.body.alamatSekolah;
    res.end("Nama Kapala Sekolah : " + namaKepsek + " Nama Sekolah : " + namaSekolah + " Alamat Sekolah : " + alamatSekolah)
});

app.put('/wiku/:id', (req, res) => {
    let id = req.params.id;
    let namaKepsek = req.body.namaKepsek;
    let namaSekolah = req.body.namaSekolah;
    let alamatSekolah = req.body.alamatSekolah;
    res.end("student by id: " + id + "Nama Kapala Sekolah : " + namaKepsek + " Nama Sekolah : " + namaSekolah + " Alamat Sekolah : " + alamatSekolah)
});

app.delete('/wiku/:id', (req, res) => {
    let id = req.params.id;
    let namaKepsek = req.body.namaKepsek;
    let namaSekolah = req.body.namaSekolah;
    let alamatSekolah = req.body.alamatSekolah;
    res.end("student by id: " +id+ "Nama Kapala Sekolah : " + namaKepsek + " Nama Sekolah : " + namaSekolah + " Alamat Sekolah : " + alamatSekolah)
});

app.listen(port, () => console.log(`Example app listening on nanda`))

//ini data pegawai 
app.post('/data_pegawai', (req, res) => {
    let namaPegawai = req.body.namaPegawai;
    let alamatPegawai = req.body.alamatPegawai;
    let nip = req.body.nip;
    let nomorHandphone = req.body.nomorHandphone;
    res.end("Nama Pegawai : " + namaPegawai + " Alamat Pegawai : " + alamatPegawai + " NIP : " + nip + " Nomor Handphone : " + nomorHandphone)
});