export const getMovies = async() =>{
    const url = `https://api.tvmaze.com/shows`;
    const result = await fetch(url);
    if(!result.ok){
        throw new Error("failed to fetch movies.")
    }
    const data = await result.json();
    // console.log(data);
    return data;
};

export const searchMovies = async(query)=>{
    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
    const result = await fetch(url);
    const data = await result.json();
    return data.map((item)=>item.show);
};