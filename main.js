
var Typed = new Typed('.content-msg', {
    strings: ['Pesan singkat untuk Kamu❤️ ^1000', 'Yang sedang berulang tahun🎉 ^1000', 'Sekarang sudah umur 15😉', 'Semoga sehat selalu yasa✨', 'Aku sayang kamu😊'],
    typeSpeed: 50,
    loop: true,
    backSpeed: 20,
    startDelay: 1000,
});

const btnFilter = document.querySelectorAll(".btn-gallery ul li");
const imgItem  = document.querySelectorAll(".gallery-image img");

btnFilter.forEach(data => {
    data.onclick = () => {
        btnFilter.forEach(data => {
            data.className = "";
        });
        data.className = "active";

        // filter images
        const btnText = data.textContent;
        imgItem.forEach(img => {
            img.style.display = "none";
            
            if(img.getAttribute("data-filter") == btnText || btnText == "All"){
                img.style.display ="block";
            }
        })
    };
});
