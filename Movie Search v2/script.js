const form = document.querySelector('#form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    GetMovies();
});

const GetMovies = async ()=>{
    const userSearch = document.querySelector('#text').value;
    const config = {
        params: {
            api_key:'c47184553e058b7c3110d774ac2d6723',
            query:userSearch
        }
    };
    const res = await axios('https://api.themoviedb.org/3/search/movie',config);
    display(res.data.results);
}

const display = (arr)=>{
    const results = document.querySelector('#results');
    results.innerHTML = ''; 
    
    for(let val of arr){

        const column = document.createElement('div');
        column.className = 'column is-4'; // bulma class

        const card = document.createElement('div');
        card.className = 'card mb-4 equal-height' ; // bulma class //equal height mere hai css file mai
        card.style.maxWidth = '400px'; // bulma class
        card.style.margin = 'auto';// bulma class


        const cardContent = `
        <div class="card-image">
        <figure class="image is-3by2">
        <img src="https://image.tmdb.org/t/p/w500${val.poster_path || ''}" alt="${val.title}" style="object-fit: cover; height: 250px; width: 100%;" loading="lazy"/>
        </figure>
        </div>
        <div class="card-content">
        <p class="title is-4">${val.title}</p>
        <p>${val.overview.substring(0,50)}...</p>
        </div>`;

        card.innerHTML = cardContent;

        column.appendChild(card);
        results.appendChild(column);
    }
}