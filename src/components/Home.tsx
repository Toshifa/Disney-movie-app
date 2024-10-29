// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// // import johnwick from '../images/johnwick.png'



// interface MovieProp {
//     movies:any;
// }

// const Home = (props:MovieProp) => {

//     console.log(props,"props")
//     return (
//         <>
//         <h1 className='text-slate-300 pl-28 font-bold text-xl'>Latest Releases</h1>
//         <div className='grid grid-cols-6 pl-24 pt-7'>
            
//                 {props.movies.results.map((data:any)=>{
//                     return<>
//                         <Link to="/details" state={{data:data}}>
//                             <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2">
                    
//                                 <img className="w-full" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="movies/tv-shows lists"/>
            
//                             </div>
//                         </Link>
//                     </>
//                     })
//                 }           
//         </div>
//         </>
//     );
// };

// export default Home;








//2 final
import React from 'react';
import { Link } from 'react-router-dom';

interface Movie {
  id: number;
  poster_path: string;
  
}

interface MovieProp {
  movies: {
    results: Movie[];
    
  };
}

const Home: React.FC<MovieProp> = ({ movies }) => {

  console.log(movies,"homemov")

  return (
    <>
      <h1 className='text-slate-300 pl-28 font-bold text-xl pt-5'>Latest Releases</h1>
      <div className='grid grid-cols-6 pl-24 pt-7'>
        {movies?.results?.map((data: Movie) => (
        
          <Link to="/details" state={{ data }} key={data.id}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2">
              <img
                className="w-full"
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                alt="movies/tv-shows lists"
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;


//hover



















// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';

// interface MovieProp {
//     movies: any[];
// }

// const Home = (props: MovieProp) => {
//     const fetchMovies = async () => {
//         const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=2ce89c84708866b64bb8e74374b07865');
//         const data = await response.json();
//         return data.results;
//     };

//     const { data: movies, isLoading, error } = useQuery({
//                                                         queryKey:['movies'],
//                                                         queryFn: fetchMovies,
//                                                         });

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;

//     return (
//         <>
//             <h1 className='text-slate-300 pl-28 font-bold text-xl'>Latest Releases</h1>
//             <div className='grid grid-cols-6 pl-24 pt-7'>
//                 {movies?.map((data: any) => (
//                     <Link to="/details" state={{ data: data }} key={data.id}>
//                         <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2">
//                             <img className="w-full" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="movies/tv-shows lists" />
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Home;


