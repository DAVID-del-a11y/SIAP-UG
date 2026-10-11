// Portal Akademik & V-Class Utama
const academicPortals = [
    { name: "Komputasi Big Data (Team Teaching)", desc: "V-Class Komputasi Big Data ID: 8", url: "https://v-class.gunadarma.ac.id/course/view.php?id=8" },
    { name: "Praktikum Komputasi Big Data", desc: "V-Class Modul Komputasi Big Data ID: 24", url: "https://v-class.gunadarma.ac.id/course/view.php?id=24" },
    { name: "BAAK Online", desc: "Layanan administrasi akademik & jadwal kuliah", url: "https://baak.gunadarma.ac.id" },
    { name: "Studentsite Gunadarma", desc: "Portal utama rangkuman nilai & informasi mahasiswa", url: "https://studentsite.gunadarma.ac.id" }
];

// Portal Praktikum & Laboratorium
const praktikumPortals = [
    { name: "Praktikum ILAB", desc: "Sistem Manajemen Praktikum ILAB Gunadarma", url: "https://praktikum.gunadarma.ac.id/login/index.php" },
    { name: "Praktikum LabTI (AP-3 A, AP-3 B & Data Science)", desc: "Portal Praktikum iFLAB / LabTI", url: "https://praktikum-iflab.gunadarma.ac.id/login/index.php" },
    { name: "Praktikum LEPKOM (Virtual Machine)", desc: "Akses Praktikum Server / VM Lepkom", url: "https://vm.lepkom.gunadarma.ac.id/auth" },
    { name: "LEPKOM Utama", desc: "Pusat modul & pendaftaran praktikum laboratorium", url: "https://lepkom.gunadarma.ac.id" }
];

// Portal Fasilitas & Layanan
const fasilitasPortals = [
    { name: "Kemahasiswaan Gunadarma", desc: "Portal beasiswa, ormawa, & kegiatan mahasiswa", url: "https://kemahasiswaan.gunadarma.ac.id" },
    { name: "Perpustakaan Gunadarma", desc: "E-Library & pencarian katalog buku", url: "https://library.gunadarma.ac.id" }
];

// Opsi Pilihan Form Pengaduan Terstruktur
const unitOptions = {
    "Akademik": academicPortals,
    "Praktikum": praktikumPortals,
    "Fasilitas": fasilitasPortals
};

// Data Lokasi Kampus Gunadarma & Tautan Google Maps Resmi
const campusLocations = [
    { code: "Kampus A", address: "Jl. Kenari No. 13, Jakarta Pusat", region: "Jakarta Pusat", maps: "https://maps.google.com/?q=Universitas+Gunadarma+Kampus+A" },
    { code: "Kampus B", address: "Jl. Salemba Bluntas, Jakarta Pusat", region: "Jakarta Pusat", maps: "https://maps.google.com/?q=Universitas+Gunadarma+Kampus+B" },
    { code: "Kampus C", address: "Jl. Salemba Raya No. 53, Jakarta Pusat", region: "Jakarta Pusat", maps: "https://maps.google.com/?q=Universitas+Gunadarma+Kampus+C" },
    { code: "Kampus D", address: "Jl. Margonda Raya, Pondok Cina, Depok", region: "Depok", maps: "https://maps.google.com/?q=Universitas+Gunadarma+Kampus+D" },
    { code: "Kampus E", address: "Jl. Akses Kelapa Dua, Cimanggis, Depok", region: "Depok", maps: "https://maps.google.com/?q=Universitas+Gunadarma+Kampus+E" },
    { code: "Kampus G & H", address: "Jl. Akses Kelapa Dua, Cimanggis (Laboratorium)", region: "Depok", maps: "https://maps.google.com/?q=Universitas+Gunadarma+Kampus+G" },
    { code: "Kampus H2", address: "Jl. T.B. Simatupang Kav. 38, Jakarta Selatan", region: "Jakarta Selatan", maps: "https://maps.google.com/?q=Universitas+Gunadarma+Kampus+H2" },
    { code: "Kampus L", address: "Jl. Raya Kamal Outring No. 75, Jakarta Barat", region: "Jakarta Barat", maps: "https://maps.google.com/?q=Universitas+Gunadarma+Kampus+L" },
    { code: "Kampus J & J1", address: "Jl. KH. Noer Ali, Kalimalang, Bekasi", region: "Bekasi", maps: "https://maps.google.com/?q=Universitas+Gunadarma+Kampus+J" },
    { code: "Kampus J3", address: "Jl. Raya Kalimalang (Kampus Kalimas), Bekasi", region: "Bekasi", maps: "https://maps.google.com/?q=Universitas+Gunadarma+Kampus+J3" },
    { code: "Kampus J4", address: "Jl. Kemang Pratama Raya No. 13, Bekasi", region: "Bekasi", maps: "https://maps.google.com/?q=Universitas+Gunadarma+Kampus+J4" },
    { code: "Kampus J5", address: "Sentra Primer Baru Timur, Cakung, Jakarta Timur", region: "Jakarta Timur", maps: "https://maps.google.com/?q=Universitas+Gunadarma+Kampus+J5" },
    { code: "Kampus K", address: "Jl. Kelapa Dua Raya No. 93, Karawaci, Tangerang", region: "Tangerang", maps: "https://maps.google.com/?q=Universitas+Gunadarma+Kampus+K" },
    { code: "Kampus M (Technopark)", address: "Technopark, Mande, Cianjur, Jawa Barat", region: "Cianjur", maps: "https://maps.google.com/?q=Universitas+Gunadarma+Technopark+Cianjur" },
    { code: "Kampus N (IKN)", address: "Kabupaten Penajam Paser Utara, Kalimantan Timur", region: "IKN / Kaltim", maps: "https://maps.google.com/?q=Universitas+Gunadarma+Penajam+Paser+Utara" }
];

// Logika Navigasi Tab Interface
function switchTab(tabName) {
    const aspirasiSec = document.getElementById('aspirasiSection');
    const informasiSec = document.getElementById('informasiSection');
    const buttons = document.querySelectorAll('.tab-btn');

    buttons.forEach(btn => btn.classList.remove('active'));

    if (tabName === 'aspirasi') {
        aspirasiSec.classList.remove('hidden');
        informasiSec.classList.add('hidden');
        buttons[0].classList.add('active');
    } else {
        aspirasiSec.classList.add('hidden');
        informasiSec.classList.remove('hidden');
        buttons[1].classList.add('active');
        renderDirectoryContent();
    }
}

// Render Direktori Informasi dan Lokasi Kampus
function renderDirectoryContent() {
    const academicGrid = document.getElementById('academicGrid');
    const praktikumGrid = document.getElementById('praktikumGrid');
    const campusGrid = document.getElementById('campusGrid');

    if (campusGrid.innerHTML.trim() !== "") return;

    academicPortals.forEach(p => {
        academicGrid.appendChild(createPortalCard(p.name, p.desc, p.url));
    });

    praktikumPortals.forEach(p => {
        praktikumGrid.appendChild(createPortalCard(p.name, p.desc, p.url));
    });

    campusLocations.forEach(camp => {
        const card = document.createElement('div');
        card.className = 'campus-card';
        card.innerHTML = `
            <div>
                <h4>${camp.code}</h4>
                <p>${camp.address}</p>
            </div>
            <div class="campus-footer">
                <span class="badge">${camp.region}</span>
                <a href="${camp.maps}" target="_blank" class="btn-maps">Google Maps</a>
            </div>
        `;
        campusGrid.appendChild(card);
    });
}

function createPortalCard(title, desc, url) {
    const a = document.createElement('a');
    a.className = 'portal-item';
    a.href = url;
    a.target = '_blank';
    a.innerHTML = `<strong>${title}</strong><span>${desc}</span>`;
    return a;
}

// Handler Dropdown Form Dinamis
const kategoriSelect = document.getElementById('kategori');
const unitTujuanSelect = document.getElementById('unitTujuan');
const laporanForm = document.getElementById('laporanForm');
const resultCard = document.getElementById('resultCard');
const resultText = document.getElementById('resultText');
const redirectContainer = document.getElementById('redirectContainer');

kategoriSelect.addEventListener('change', function() {
    const selectedCategory = this.value;
    unitTujuanSelect.innerHTML = '<option value="" disabled selected>-- Pilih Portal Tujuan --</option>';
    
    if (unitOptions[selectedCategory]) {
        unitOptions[selectedCategory].forEach(item => {
            const option = document.createElement('option');
            option.value = item.url;
            option.textContent = item.name;
            unitTujuanSelect.appendChild(option);
        });
    }
});

// Handler Pengiriman Form (Simulasi Black Box Test Validasi Sistem)
laporanForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const npm = document.getElementById('npm').value;
    const kelas = document.getElementById('kelas').value;
    const kategori = kategoriSelect.value;
    const selectedUnit = unitTujuanSelect.options[unitTujuanSelect.selectedIndex];
    
    resultText.innerHTML = `Laporan atas nama <strong>${nama}</strong> (NPM: ${npm} - Kelas: ${kelas}) terkait kategori <strong>${kategori} (${selectedUnit.text})</strong> telah berhasil divalidasi dan direkam ke dalam database sistem.`;
    
    redirectContainer.innerHTML = `<a href="${selectedUnit.value}" target="_blank">Akses Portal ${selectedUnit.text} &rarr;</a>`;
    
    laporanForm.reset();
    resultCard.classList.remove('hidden');
    resultCard.scrollIntoView({ behavior: 'smooth' });
});