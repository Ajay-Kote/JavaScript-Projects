const from = document.querySelector('#sf');
from.addEventListener('submit',(e)=>{
    e.preventDefault();
    const s = from.elements.query.value;
    getMovie(s);
});
const getMovie = async (s)=>{
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${s}`);
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${s}`);
    console.log(res.data);
    makeimgs(res.data);
    // getnames(res.data);
    
}
//asi means all shows images 
const makeimgs = (ASI)=>{
    for(let x of ASI){
        const img = document.createElement('IMG');
        img.src = x.show.image.medium;
        document.body.append(img);
        const p = document.createElement('p');
        p.textContent = x.show.name;
        document.body.append(p);
    }
}
// //asn names
// const getnames = (ASN)=>{
//     for(let x of ASN){
        
//     }
// }