
/* =========================================
   KONFIGURASI SUPABASE
========================================= */

const SUPABASE_URL = "https://ytmbiwnrfditufrwjfpq.supabase.co";
const SUPABASE_KEY = "sb_publishable_hKUyGPqsAHWiGC8LOqyY_g_oBXkvRPm";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

/* =========================================
   DATA PORTAL AKADEMIK & V-CLASS
========================================= */

const academicPortals = [
    { name: "Komputasi Big Data (Team Teaching)", desc: "V-Class Komputasi Big Data ID: 8", url: "https://v-class.gunadarma.ac.id/course/view.php?id=8" },
    { name: "Praktikum Komputasi Big Data", desc: "V-Class Modul Komputasi Big Data ID: 24", url: "https://v-class.gunadarma.ac.id/course/view.php?id=24" },
    { name: "BAAK Online", desc: "Layanan administrasi akademik & jadwal kuliah", url: "https://baak.gunadarma.ac.id" },
    { name: "Studentsite Gunadarma", desc: "Portal utama rangkuman nilai & informasi mahasiswa", url: "https://studentsite.gunadarma.ac.id" }
];

const praktikumPortals = [
    { name: "Praktikum ILAB", desc: "Sistem Manajemen Praktikum ILAB Gunadarma", url: "https://praktikum.gunadarma.ac.id/login/index.php" },
    { name: "Praktikum LabTI (AP-3 A, AP-3 B & Data Science)", desc: "Portal Praktikum iFLAB / LabTI", url: "https://praktikum-iflab.gunadarma.ac.id/login/index.php" },
    { name: "Praktikum LEPKOM (Virtual Machine)", desc: "Akses Praktikum Server / VM Lepkom", url: "https://vm.lepkom.gunadarma.ac.id/auth" },
    { name: "LEPKOM Utama", desc: "Pusat modul & pendaftaran praktikum laboratorium", url: "https://lepkom.gunadarma.ac.id" }
];

const fasilitasPortals = [
    { name: "Kemahasiswaan Gunadarma", desc: "Portal beasiswa, ormawa, & kegiatan mahasiswa", url: "https://kemahasiswaan.gunadarma.ac.id" },
    { name: "Perpustakaan Gunadarma", desc: "E-Library & pencarian katalog buku", url: "https://library.gunadarma.ac.id" }
];

const unitOptions = {
    "Akademik": academicPortals,
    "Praktikum": praktikumPortals,
    "Fasilitas": fasilitasPortals
};

/* =========================================
   DATA LOKASI KAMPUS
========================================= */

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

/* =========================================
   NAVIGASI TAB
========================================= */

function switchTab(tabName) {
    const aspirasiSec = document.getElementById("aspirasiSection");
    const informasiSec = document.getElementById("informasiSection");
    const buttons = document.querySelectorAll(".tab-btn");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (tabName === "aspirasi") {
        aspirasiSec.classList.remove("hidden");
        informasiSec.classList.add("hidden");
        if (buttons[0]) buttons[0].classList.add("active");
    } else {
        aspirasiSec.classList.add("hidden");
        informasiSec.classList.remove("hidden");
        if (buttons[1]) buttons[1].classList.add("active");
        renderDirectoryContent();
    }
}

/* =========================================
   DIREKTORI INFORMASI & KAMPUS
========================================= */

function renderDirectoryContent() {
    const academicGrid = document.getElementById("academicGrid");
    const praktikumGrid = document.getElementById("praktikumGrid");
    const campusGrid = document.getElementById("campusGrid");

    if (!academicGrid || !praktikumGrid || !campusGrid) return;
    if (campusGrid.innerHTML.trim() !== "") return;

    academicPortals.forEach(p => {
        academicGrid.appendChild(createPortalCard(p.name, p.desc, p.url));
    });

    praktikumPortals.forEach(p => {
        praktikumGrid.appendChild(createPortalCard(p.name, p.desc, p.url));
    });

    campusLocations.forEach(camp => {
        const card = document.createElement("div");
        card.className = "campus-card";

        const info = document.createElement("div");
        const title = document.createElement("h4");
        title.textContent = camp.code;

        const address = document.createElement("p");
        address.textContent = camp.address;

        info.append(title, address);

        const footer = document.createElement("div");
        footer.className = "campus-footer";

        const badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = camp.region;

        const maps = document.createElement("a");
        maps.href = camp.maps;
        maps.target = "_blank";
        maps.rel = "noopener noreferrer";
        maps.className = "btn-maps";
        maps.textContent = "Google Maps";

        footer.append(badge, maps);
        card.append(info, footer);
        campusGrid.appendChild(card);
    });
}

function createPortalCard(title, desc, url) {
    const a = document.createElement("a");
    a.className = "portal-item";
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const strong = document.createElement("strong");
    strong.textContent = title;

    const span = document.createElement("span");
    span.textContent = desc;

    a.append(strong, span);
    return a;
}

/* =========================================
   LOGIN, DAFTAR AKUN & LOGOUT
========================================= */

const authForm = document.getElementById("authForm");
const authCard = document.getElementById("authCard");
const authEmail = document.getElementById("authEmail");
const authPassword = document.getElementById("authPassword");
const authMessage = document.getElementById("authMessage");
const signupBtn = document.getElementById("signupBtn");
const logoutBtn = document.getElementById("logoutBtn");
const accountInfo = document.getElementById("accountInfo");
const loggedInEmail = document.getElementById("loggedInEmail");

let currentSession = null;

function showAuthMessage(message, isError = false) {
    if (!authMessage) return;
    authMessage.textContent = message;
    authMessage.style.color = isError ? "#b42318" : "#16794b";
}

function updateAuthUI(session) {
    currentSession = session;
    const user = session?.user;

    if (authForm) authForm.hidden = Boolean(user);
    if (accountInfo) accountInfo.hidden = !user;

    if (loggedInEmail) {
        loggedInEmail.textContent = user
            ? `Login sebagai: ${user.email}`
            : "";
    }

    if (authCard) {
        authCard.classList.toggle("logged-in", Boolean(user));
    }
}

// Login
if (authForm) {
    authForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const email = authEmail.value.trim();
        const password = authPassword.value;

        const loginBtn = document.getElementById("loginBtn");
        if (loginBtn) loginBtn.disabled = true;
        if (signupBtn) signupBtn.disabled = true;

        showAuthMessage("Sedang memproses login...");

        try {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;

            updateAuthUI(data.session);
            showAuthMessage("Login berhasil. Kamu sekarang bisa mengirim laporan.");
            authPassword.value = "";
        } catch (error) {
            showAuthMessage("Login gagal: " + error.message, true);
        } finally {
            if (loginBtn) loginBtn.disabled = false;
            if (signupBtn) signupBtn.disabled = false;
        }
    });
}

// Daftar akun
if (signupBtn) {
    signupBtn.addEventListener("click", async function () {
        const email = authEmail.value.trim();
        const password = authPassword.value;

        if (!email || !password) {
            showAuthMessage("Isi email dan kata sandi terlebih dahulu.", true);
            return;
        }

        if (password.length < 8) {
            showAuthMessage("Kata sandi minimal 8 karakter.", true);
            return;
        }

        signupBtn.disabled = true;
        const loginBtn = document.getElementById("loginBtn");
        if (loginBtn) loginBtn.disabled = true;

        showAuthMessage("Sedang membuat akun...");

        try {
            const { data, error } = await supabaseClient.auth.signUp({
                email,
                password
            });

            if (error) throw error;

            if (data.session) {
                updateAuthUI(data.session);
                showAuthMessage("Akun berhasil dibuat dan kamu sudah login.");
            } else {
                showAuthMessage(
                    "Akun berhasil didaftarkan. Periksa email untuk konfirmasi, lalu login."
                );
            }
        } catch (error) {
            showAuthMessage("Pendaftaran gagal: " + error.message, true);
        } finally {
            signupBtn.disabled = false;
            if (loginBtn) loginBtn.disabled = false;
        }
    });
}

// Logout
if (logoutBtn) {
    logoutBtn.addEventListener("click", async function () {
        logoutBtn.disabled = true;

        try {
            const { error } = await supabaseClient.auth.signOut();
            if (error) throw error;

            updateAuthUI(null);
            showAuthMessage("Kamu sudah logout.");
        } catch (error) {
            showAuthMessage("Logout gagal: " + error.message, true);
        } finally {
            logoutBtn.disabled = false;
        }
    });
}

// Pulihkan sesi login dan pantau perubahan status autentikasi
supabaseClient.auth.onAuthStateChange((event, session) => {
    updateAuthUI(session);
});

(async function restoreSession() {
    try {
        const { data, error } = await supabaseClient.auth.getSession();
        if (error) throw error;
        updateAuthUI(data.session);
    } catch (error) {
        showAuthMessage("Gagal memeriksa sesi login: " + error.message, true);
    }
})();

/* =========================================
   DROPDOWN KATEGORI & UNIT TUJUAN
========================================= */

const kategoriSelect = document.getElementById("kategori");
const unitTujuanSelect = document.getElementById("unitTujuan");
const laporanForm = document.getElementById("laporanForm");
const resultCard = document.getElementById("resultCard");
const resultText = document.getElementById("resultText");
const redirectContainer = document.getElementById("redirectContainer");

if (kategoriSelect && unitTujuanSelect) {
    kategoriSelect.addEventListener("change", function () {
        const selectedCategory = this.value;

        unitTujuanSelect.innerHTML =
            '<option value="" disabled selected>-- Pilih Portal Tujuan --</option>';

        if (unitOptions[selectedCategory]) {
            unitOptions[selectedCategory].forEach(item => {
                const option = document.createElement("option");
                option.value = item.url;
                option.textContent = item.name;
                unitTujuanSelect.appendChild(option);
            });
        }
    });
}

/* =========================================
   KIRIM LAPORAN KE SUPABASE
========================================= */

if (laporanForm) {
    laporanForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        if (!currentSession?.user) {
            alert("Silakan login terlebih dahulu sebelum mengirim laporan.");
            authCard?.scrollIntoView({ behavior: "smooth" });
            return;
        }

        const nama = document.getElementById("nama").value.trim();
        const npm = document.getElementById("npm").value.trim();
        const kelas = document.getElementById("kelas").value.trim();
        const kategori = kategoriSelect.value;
        const deskripsi = document.getElementById("deskripsi").value.trim();
        const selectedUnit =
            unitTujuanSelect.options[unitTujuanSelect.selectedIndex];

        if (!selectedUnit || !selectedUnit.value) {
            alert("Pilih portal tujuan terlebih dahulu.");
            return;
        }

        if (!nama || !npm || !kelas || !kategori || !deskripsi) {
            alert("Lengkapi semua data laporan terlebih dahulu.");
            return;
        }

        const submitButton = laporanForm.querySelector(
            'button[type="submit"]'
        );

        if (submitButton) submitButton.disabled = true;

        if (resultCard) resultCard.classList.add("hidden");

        try {
            const laporan = {
                user_id: currentSession.user.id,
                jenis_pelapor: "Mahasiswa",
                nama: nama,
                identitas: npm,
                kelas: kelas,
                kategori: kategori,
                unit_tujuan: selectedUnit.textContent,
                deskripsi: deskripsi
            };

            const { error } = await supabaseClient
                .from("laporan_civitas_akademika")
                .insert([laporan]);

            if (error) throw error;

            if (resultText) {
                resultText.textContent =
                    `Laporan dari ${nama} (NPM: ${npm}, Kelas: ${kelas}) ` +
                    `untuk kategori ${kategori} — ${selectedUnit.textContent} ` +
                    "berhasil disimpan ke database.";
            }

            if (redirectContainer) {
                redirectContainer.replaceChildren();

                const link = document.createElement("a");
                link.href = selectedUnit.value;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.textContent = `Akses Portal ${selectedUnit.textContent} →`;

                redirectContainer.appendChild(link);
            }

            laporanForm.reset();

            if (kategoriSelect && unitTujuanSelect) {
                unitTujuanSelect.innerHTML =
                    '<option value="" disabled selected>-- Pilih Portal Tujuan --</option>';
            }

            if (resultCard) {
                resultCard.classList.remove("hidden");
                resultCard.scrollIntoView({ behavior: "smooth" });
            }
        } catch (error) {
            console.error("Gagal menyimpan laporan:", error);
            alert(
                "Laporan belum berhasil disimpan. Periksa koneksi dan konfigurasi Supabase. Detail: " +
                error.message
            );
        } finally {
            if (submitButton) submitButton.disabled = false;
        }
    });
}
