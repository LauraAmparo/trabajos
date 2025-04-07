const albums = [ { src: "./assets/caratulas/albums/Acoustica.jpg", category: "albums", title: "Acoustica" },
    { src: "./assets/caratulas/albums/AnimalMagnetism.jpg", category: "albums", title: "AnimalMagnetism" },
    { src: "./assets/caratulas/albums/Blackout.jpg", category: "albums", title:  "Blackout" },
    { src: "./assets/caratulas/albums/comeblack-scorpions.jpg", category: "albums", title:  "comeblack-scorpions" },
    { src: ".assets/caratulas/albums/CrazyWorld.jpg", category: "albums", title:  "CrazyWorld" },
    { src: ".assets/caratulas/albums/EyeIIEye.jpg", category: "albums", title:  "EyeIIEye" },
    { src: "./assets/caratulas/albums/FaceTheHeat.jpg", category: "albums", title:  "FaceTheHeat" },
    { src: "./assets/caratulas/albums/LoveAtFirstSting.jpg", category: "albums", title:  "LoveAtFirstSting" },
    { src: "./assets/caratulas/albums/Lovedrive.jpg", category: "albums", title:  "Lovedrive" },
    { src: ".assets/caratulas/albums/MomentOfGlory.jpg", category: "albums", title:  "MomentOfGlory" },
    { src: "./assets/caratulas/albums/PureInstinct.jpg", category: "albums", title:  "PureInstinct" },
    { src: "./assets/caratulas/albums/ReturnToForever.jpg", category: "albums", title:  "ReturnToForever" },
    { src: "./assets/caratulas/albums/RockBeliever.jpg", category: "albums", title:  "RockBeliever" },
    { src: "./assets/caratulas/albums/SavageAmusement.jpg", category: "albums", title:  "SavageAmusement" },
    { src: "./assets/caratulas/albums/scorpions-humanity-hour.jpg", category: "albums", title: "scorpions-humanity-hour" },
    { src: "./assets/caratulas/albums/StingInTheTail.jpg", category: "albums", title:  "StingInTheTail" },


    { src: "./assets/caratulas/compilations/BEST.jpg", category: "albums", title: "BEST" },
    { src: "./assets/caratulas/compilations/Millennium.jpg", category: "albums", title:  "Millennium" },

   
    { src: "./assets/caratulas/DVD/Live2011GetYourStingandBlackout.jpg", category: "dvd", title: "Live2011GetYourStingandBlackout" },
    { src: "./assets/caratulas/DVD/MOSCOW.jpg", category: "dvd", title: "MOSCOW" },
    { src: "./assets/caratulas/DVD/MTV-Unplugged-Live-In-Athens.jpg", category: "dvd", title: "MTV-Unplugged-Live-In-Athens" },
    { src: "./assets/caratulas/DVD/SCORPIONS_Unbreakable.jpg", category: "dvd", title: "SCORPIONS_Unbreakable" },
    { src: "./assets/caratulas/DVD/scorpionsliveatwacken.jpg", category: "dvd", title: "scorpionsliveatwacken" },
        { src: "./assets/caratulas/DVD/UNBREAKABLE.jpg", category: "dvd", title: "UNBREAKABLE" }
    ];
    
        const gallery = document.getElementById('gallery');
    const filterButtons = document.querySelectorAll('.filter-btn'); 

    // Función para crear elementos de álbum
function createAlbumElement(album) { 
    const albumElement = document.createElement('div'); 
    albumElement.className = `album-item ${album.category}`;
    albumElement.innerHTML = ` <img src="${album.src}" alt="${album.title}"> 
    <p>${album.title}</p> `; 
    return albumElement; } 

    function displayAlbums(filter = 'all') { 
        gallery.innerHTML = '';
        albums.forEach(album => { 
        if (filter === 'all' || album.category === filter) { 
        gallery.appendChild(createAlbumElement(album));
        } });
    }

    filterButtons.forEach(button => { 
        button.addEventListener('click', () => { 
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active'); 
            displayAlbums(button.getAttribute('data-filter'));
            button.classList.add('active'); 
            displayAlbums(button.getAttribute('data-filter'));
        });
    });

        
    