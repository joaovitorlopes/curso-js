// Fetch API (GET)

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        loadPage(el);
    }
});

async function loadPage(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if (response.status !== 200) throw new Error('ERROR 404!');

        const html = await response.text();
        loadResult(html);
    } catch (e) {
        console.log(e);
    }
}

function loadResult(response) {
    const result = document.querySelector('.result');
    result.innerHTML = response;
}

// fetch('./page1.html')
//     .then(response => {
//         if (response.status !== 200) throw new Error('ERROR 404 NOSSO');
//         return response.text(); // Retorna outra promise
//     })
//     .then(html => console.log(html)) // Then da promise retornada
//     .catch(e => console.errot(e));