// mengaktifkan javascript pada saat halaman dimut /load
document.addEventListener("DOMContentLoaded", ()=>{
    // daftarkan variabel burgerBtn
    const burgerBtn = document.getElementById("burgerBtn");
    //daftarkan variabel navLinks
    const navLinks = document.getElementById("navLinks");
    // daftarkan variabel dropdowns
    const dropdowns = document.getElementById("dropdown");
    //daftarkan variabel tombol light/dark mode
    const themeToggle = document.getElementById("themeToggle");
    
    // tampilkan nav ketika tombol diklik
    burgerBtn.addEventListener("click", ()=>{
        //tampilkan kembali navLinks
        navLinks.classList.toggle("show");
        // jika navLinks class nya tidak aktif, maka tutup dropdown nya
        if(!navLinks.classList.contains("show")){
            dropdowns.forEach((d) => d.classList.remove("open"));
        }
        });

         // dark mode
        // Cek prefensi sebelumnya
        if (localStorage.getItem("theme") === "dark"){
            document.body.classList.add("dark-mode");
            themeToggle.textContent = "☀️";
        }

        // Tombol toggle mode
        themeToggle.addEventListener("click", () =>{
            document.body.classList.toggle("dark-mode");

            const isDark = document.body.classList.contains("dark-mode");
            themeToggle.textContent = isDark ? "☀️" : "🌙";
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    });

   