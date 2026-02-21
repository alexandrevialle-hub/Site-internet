/* Styles globaux */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
}

body {
    background: url(images/fond.jpeg) no-repeat center center fixed;
    background-size: cover;
    color: #111;
}

p {
    font-weight: 300;
    line-height: 1.6;
}

/* Header */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 40px;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #faebd7;
    box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    flex-wrap: wrap;
}

header.hidden {
    visibility: hidden;
    opacity: 0;
}

.logo {
    color: #502c02;
    font-weight: bold;
    font-size: 2em;
    text-decoration: none;
}

.logo span {
    color: #b90606;
}

.navbar1 {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    position: relative;
}

.navbar1 ul {
    display: flex;
    list-style: none;
    align-items: center;
}

.navbar1 a {
    color: #000;
    text-decoration: none;
    font-size: 1.3em;
    margin-left: 30px;
    font-weight: 600;
    transition: color 0.3s, font-size 0.3s;
}

.navbar1 a:hover {
    color: #b90606;
    border-bottom: 2px solid #b90606;
}

/* Banniere */
.banniere {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(./images/imagedetitre.jpg) no-repeat center center / cover;
    text-align: center;
    border-bottom: 2px solid #63400d;
}

.banniere .contenu h2 {
    color: #b90606;
    font-size: 3em;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

/* Sections General */
section {
    padding: 10px 40px;
}

.presentation {
    font-size: 1.2em;
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
}

.row .col50 {
    flex: 1 1 45%;
    min-width: 300px;
    margin: 20px 0;
}

.titre-texte {
    color: #000;
    font-size: 2em;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 20px;
}

.titre-texte span {
    color: #b90606;
    font-weight: 700;
    font-size: 1.2em;
}

.img img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Cuisines régionales */
.cuisines {
    font-size: 1.2em;
}

.titre {
    margin-bottom: 40px;
}

.contenu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.contenu .box {
    flex: 0 1 300px;
    margin: 15px;
    border: 2px solid #b90606;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    transition: transform 0.3s;
    background: #faebd7;
    border-radius: 8px;
    overflow: hidden;
}

.contenu .box:hover {
    transform: translateY(-10px);
}

.contenu .box .imbox img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.contenu .box .text {
    padding: 15px;
    text-align: center;
}

.contenu .box .text a {
    color: #000;
    text-decoration: none;
    font-weight: 600;
}

.contenu .box .text a:hover {
    color: #b90606;
    text-decoration: underline;
}

/* Deroulement */
.deroulement .row .col50 {
    font-size: 1.2em;
}

.image img {
    max-width: 100%;
    height: auto;
    aspect-ratio: 16/9;
}

/* Footer */
footer {
    background-color: #502c02;
    color: #faebd7;
    text-align: right;
    padding: 20px 40px;
    font-size: 1.2em;
}

/* Responsive Design */
@media (max-width: 768px) {
    header {
        flex-direction: column;
        padding: 10px;
    }

    .navbar1 ul {
        flex-direction: column;
        margin-top: 10px;
    }

    .navbar1 a {
        margin: 10px 0;
    }

    section {
        padding: 60px 20px;
    }

    .banniere {
        min-height: 50vh;
    }

    .banniere h2 {
        font-size: 2em;
    }
}

/* Fin acceuil */
/* Début régions */
.navbar2 {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    position: relative;
}

.navbar2 > a {
    font-size: 1.3rem;
    font-weight: 600;
    color: #502c02;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 6px;
    transition: all 0.25s ease;
}

.navbar2 > a:hover {
    background: rgba(185,6,6,0.1);
    color: #b90606;
}

.dropdown {
    position: relative;
}

.dropbtn {
    background: none;
    border: none;
    font-size: 1.3rem;
    font-weight: 600;
    color: #502c02;
    cursor: pointer;
    padding: 10px 16px;
    border-radius: 6px;
    transition: background 0.25s;
}

.dropbtn:hover {
    background: rgba(185, 6, 6, 0.1);
}

.dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 200px;
    background: #faebd7;
    border: 1px solid #e0d0b0;
    border-radius: 8px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    z-index: 100;
    padding: 6px 0;
}

.dropdown:hover .dropbtn,
.dropdown:hover .dropbtn:focus {
    color: #b90606;
    background: rgba(185, 6, 6, 0.1);
}

.dropdown:hover .dropdown-content,
.dropdown-content:hover {
    display: block;
}

.dropdown-content a {
    display: block;
    padding: 12px 20px;
    color: #333;
    font-size: 1.1rem;
    text-decoration: none;
    transition: all 0.2s;
}

.dropdown-content a:hover {
    background: #b90606;
    color: white;
}

#speaker {
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #b90606;
}

#flèche {
    position: fixed;
    top: 95px;
    right: 30px;
    background: #faebd7;
    color: #333;
    border: none;
    font-size: 24px;
    padding: 12px;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 999;
    cursor: pointer;
    transition: all 0.3s;
}

#flèche:hover {
    transform: scale(1.1);
    background: #f5d8a0;
}

/* Intro région */
.intro-region {
    padding: 140px 60px 80px;
    background: linear-gradient(to bottom, rgba(250,235,215,0.4), rgba(250,235,215,0.1));
}

.texte-intro h1 {
    font-size: 2.8rem;
    margin-bottom: 1.2rem;
    color: #b90606;
}

.texte-intro p {
    font-size: 1.15rem;
    line-height: 1.7;
    margin-bottom: 1.4rem;
}

/* Diaporama */
.slide-container {
    position: relative;
    width: 100%;
    max-width: 620px;
    margin: 0 auto;
    height: 410px;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.effect {
    animation-name: effect;
    animation-duration: 1.5s;
}

@keyframes effect {
    from { opacity: 0.6; }
    to { opacity: 1; }
}

.dots {
    text-align: center;
    padding: 12px 0;
}

.dots span {
    height: 13px;
    width: 13px;
    margin: 0 4px;
    background-color: #bbb;
    display: inline-block;
    border-radius: 50%;
    cursor: pointer;
}

.dots span.active {
    background-color: #b90606;
}

.slide-container > div:first-child {
    display: block !important;
}

/* Blocs plats */
.plat {
    display: flex;
    align-items: center;
    min-height: 420px;
    margin: 60px 0;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    border: 1px solid #e0d0b0;
}

.plat:nth-child(odd)  { background: #f6e9d8; }
.plat:nth-child(even) { background: #f6e9d8; }

.plat .img {
    flex: 0 0 38%;
    height: 420px;
}

.plat .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.plat .contenu-texte {
    flex: 1;
    padding: 50px 60px;
}

.plat h2 {
    font-size: 2.4rem;
    margin-bottom: 1.2rem;
    color: #502c02;
}

.plat h2 span {
    color: #b90606;
    font-weight: 700;
}

.plat p {
    font-size: 1.15rem;
    line-height: 1.75;
    color: #333;
}

.caract {
    font-style: italic;
    color: #555;
    margin-top: 1.2rem;
    padding-left: 1.2rem;
    border-left: 3px solid #b90606;
}

/* Responsive */
@media (max-width: 960px) {
    .plat {
        flex-direction: column;
        min-height: auto;
    }
    .plat .img {
        height: 320px;
        flex: 0 0 auto;
    }
    .plat .contenu-texte {
        padding: 40px 30px;
    }
}

/* Bouton haut de page */
#bouton-haut {
    display: none;
    position: fixed;
    bottom: 52px;
    right: 30px;
    padding: 12px 24px;
    background: #faebd7;
    color: #b90606;
    font-size: 1.1rem;
    font-weight: 600;
    border: 2px solid #b90606;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 999;
    transition: all 0.3s;
}

#bouton-haut:hover {
    background: #b90606;
    color: white;
}

/* Footer */
footer {
    background-color: #502c02;
    color: #faebd7;
    text-align: right;
    padding: 20px 40px;
    font-size: 1.2em;
    position: relative;
}

/* Mention auteur */
.auteur {
    text-align: center;
    font-size: 1.5rem;
    color: #faebd7;
    opacity: 0.9;
    margin: 20px 0 15px;
    font-style: italic;
}


/* Musiques */
#speaker {
    font-size: 40px;
    color: #000;
    cursor: pointer;
}
