const teams = [
    {
        teamShortName: "MS",
        teamFullName: "Multan Sultan",
        captainImage: "media/rizwan.webp",
        flagImage: "media/ms-flag.webp",
        captainName: "Muhammad Rizwan",
        color1: "#01163A",
        color2: "#1A8709"
    },
    {
        teamShortName: "PZ",
        teamFullName: "Peshawar Zalmi",
        captainImage: "media/babar.webp",
        flagImage: "media/pz-flag.webp",
        captainName: "Babar Azam",
        color1: "#E5A61A",
        color2: "#031D34"
    },
    {
        teamShortName: "ISU",
        teamFullName: "Islamabad United",
        captainImage: "media/shadab.webp",
        flagImage: "media/isb-flag.webp",
        captainName: "Shadab Khan",
        color1: "#E21118",
        color2: "#D49A26"
    },
    {
        teamShortName: "LQ",
        teamFullName: "Lahore Qalandar",
        captainImage: "media/shaheen.webp",
        flagImage: "media/lq-flag.webp",
        captainName: "Shaheen Afridi",
        color1: "#8F0405",
        color2: "#AAE10F"
    },
    {
        teamShortName: "QG",
        teamFullName: "Quetta Gladiators",
        captainImage: "media/saud.webp",
        flagImage: "media/qg-flag.webp",
        captainName: "Saud Shakeel",
        color1: "#260A38",
        color2: "#A67D2B"
    },
    {
        teamShortName: "KK",
        teamFullName: "Karachi Kings",
        captainImage: "media/warner.png",
        flagImage: "media/kk-flag.webp",
        captainName: "David Warner",
        color1: "#0D245A",
        color2: "#925F1E"
    },
];

let predictButton = document.querySelector("#predict");
let mainMessageBox = document.querySelector(".main-text");
let winnerStatsContainer = document.querySelector(".winner-stats");

let teamFlagImage = document.querySelector(".flag img");
let teamFullNameText = document.querySelector(".full-name h3");
let teamFullNameBox = document.querySelector(".full-name");

let teamShortNameBox = document.querySelector(".short-name");
let teamShortNameText = document.querySelector(".short-name h3");

let captainNameText = document.querySelector("h5");
let captainImageElement = document.querySelector(".caption img");

let winningYearText = document.querySelector(".year h4");

predictButton.addEventListener("click", function () {
    mainMessageBox.style.display = "none";
    winnerStatsContainer.style.display = "flex";
    let winnerTeam = teams[Math.floor(Math.random() * teams.length)];

    let {
        teamShortName,
        teamFullName,
        captainImage,
        flagImage,
        captainName,
        color1,
        color2
    } = winnerTeam;

    let year = Math.floor(Math.random() * (2050 - 2026 + 1) + 2026);

    teamFlagImage.src = flagImage;
    teamFullNameText.textContent = teamFullName;
    teamShortNameText.textContent = teamShortName;

    captainNameText.textContent = captainName;
    captainImageElement.src = captainImage;

    winningYearText.textContent = year;

    teamShortNameBox.style.background =
        `linear-gradient(to left, ${color1} 80%, ${color2} 10%)`;

    teamFullNameBox.style.background =
        `linear-gradient(to left, ${color1} 80%, ${color2} 10%)`;
});