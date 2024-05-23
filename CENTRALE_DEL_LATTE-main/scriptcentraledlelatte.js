document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente caricato e analizzato");

    // Creazione dell'elemento menu
    const menu = document.createElement('div');
    menu.id = 'menu';
    console.log("Elemento menu creato:", menu);

    // Creazione del contenitore dei contenuti
    const contentContainer = document.createElement('div');
    contentContainer.id = 'content-container';
    console.log("Elemento contentContainer creato:", contentContainer);

    // Aggiunta degli elementi al body
    document.body.appendChild(menu);
    document.body.appendChild(contentContainer);
    console.log("Elementi aggiunti al body");

    // Funzione per creare un bottone del menu
    const createMenuButton = (text, contentId) => {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = 'menu-button';
        button.addEventListener('click', () => showContent(contentId));
        console.log("Bottone del menu creato:", button);
        return button;
    };

    // Funzione per creare un'area di contenuto
    const createContentArea = (id, content) => {
        const contentDiv = document.createElement('div');
        contentDiv.id = id;
        contentDiv.className = 'content';
        contentDiv.textContent = content;
        console.log("Area di contenuto creata:", contentDiv);
        return contentDiv;
    };

    // Funzione per mostrare l'area di contenuto corrispondente al bottone cliccato
    const showContent = (contentId) => {
        const contents = document.querySelectorAll('.content');
        contents.forEach(content => content.classList.remove('active'));
        console.log("Contenuti nascosti");

        const activeContent = document.getElementById(contentId);
        if (activeContent) {
            activeContent.classList.add('active');
            console.log("Contenuto mostrato:", activeContent);
        }
    };

    // Definizione dei dati del menu e dei contenuti
    const menuItems = [
        { text: 'Home', contentId: 'home', content: 'Benvenuti nella sezione Home.' },
        { text: 'Chi Siamo', contentId: 'about', content: 'Informazioni su di noi.' },
        { text: 'Servizi', contentId: 'services', content: 'Descrizione dei nostri servizi.' },
        { text: 'Contatti', contentId: 'contact', content: 'Come contattarci.' }
    ];

    // Creazione dei bottoni del menu e delle aree di contenuto
    menuItems.forEach(item => {
        const menuButton = createMenuButton(item.text, item.contentId);
        const contentArea = createContentArea(item.contentId, item.content);

        menu.appendChild(menuButton);
        contentContainer.appendChild(contentArea);
    });

    // Mostra inizialmente la sezione Home
    showContent('home');
    console.log("Inizialmente mostrata la sezione Home");
});
