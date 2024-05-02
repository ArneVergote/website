const setup = () => {
    document.getElementById("btnGo").addEventListener("click", handleCommand);
    loadHistory();
}

let history = [];

let loadHistory = () =>{
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
        history = JSON.parse(savedHistory);
        renderHistory();
    }
}

let saveHistory = () =>{
    localStorage.setItem('searchHistory', JSON.stringify(history));
}
let handleCommand = () => {
    const inputField = document.getElementById("searchInput");
    const command = inputField.value.trim();
    inputField.value = "";

    if (!command.startsWith("/")) {
        alert("Fout: Commando moet beginnen met een '/' gevolgd door een letter.");
        return;
    }

    const parts = command.split(" ", 2);
    if (parts.length < 2) {
        alert("Fout: Ongeldig commando.");
        return;
    }
    const prefix = parts[0].slice(1).toLowerCase();
    const query = parts[1];

    let url, title;
    switch (prefix) {
        case 'g':
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            title = "Google";
            break;
        case 'y':
            url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
            title = "YouTube";
            break;
        case 't':
            url = `https://twitter.com/hashtag/${encodeURIComponent(query)}`;
            title = "Twitter";
            break;
        case 'i':
            url = `https://www.instagram.com/explore/tags/${encodeURIComponent(query)}`;
            title = "Instagram";
            break;
        default:
            alert("Fout: Onbekende prefix.");
            return;
    }

    history.push({
        title: title,
        text: query,
        url: url
    });

    saveHistory();

    window.open(url, "_blank");

    renderHistory();
}

let renderHistory = () => {
    const historyContainer = document.getElementById("history");
    historyContainer.innerHTML = "";

    const totalItems = history.length;

    for (let i = 0; i < totalItems; i += 3) {
        const row = document.createElement("div");
        row.className = "row";

        for (let j = 0; j < 3; j++) {
            const index = i + j;
            if (index >= totalItems) {
                break;
            }

            const item = history[index];
            const col = document.createElement("div");
            col.className = "col-md-4";

            const card = document.createElement("div");
            card.className = "card mb-3"; // Bootstrap-card
            card.style.backgroundColor = ` ${
                item.title === 'Google' ? '#4285F4' :
                    item.title === 'YouTube' ? '#FF0000' :
                        item.title === 'Twitter' ? '#1DA1F2' :
                            item.title === 'Instagram' ? '#C13584' : 'black'}`;

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";
            card.style.color = "white";

            const cardTitle = document.createElement("h5");
            cardTitle.className = "card-title";
            cardTitle.textContent = item.title;

            const cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.textContent = item.text;

            const goLink = document.createElement("a");
            goLink.className = `btn ${
                item.title === 'Google' ? 'btn-danger' :
                    item.title === 'Instagram' ? 'btn-warning' :
                        item.title === 'YouTube' || item.title === 'Twitter' ? 'btn-dark' :
                            'btn-default'
            }`;
            goLink.href = item.url;
            goLink.target = "_blank";
            goLink.textContent = "Go!";

            cardBody.append(cardTitle, cardText, goLink);
            card.append(cardBody);
            col.append(card);
            row.append(col);
        }

        historyContainer.append(row);
    }
}


window.addEventListener("load", setup);