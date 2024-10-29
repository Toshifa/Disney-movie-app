// import React from 'react';
// // import avengers from '../images/avengers.png'
// import { useState, useEffect } from 'react';
// import ViewTrailer from './ViewTrailer';

// interface movieProp {
//     movies : any;
// }

// const Welcome = (props:movieProp) => {

//     console.log(props,"props2")




//     return (
//         <div style={{backgroundImage: `linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${props?.movies?.poster_path})`, backgroundRepeat:"no-repeat", backgroundSize:"1160px 950px"}} className=' pb-7 h-screen  grid grid-cols-2 pl-4'>
            
//             <div>
//                 <h1 className='text-slate-300 pt-44 font-bold text-4xl'>{props?.movies?.title ?? props?.movies?.name}</h1>
//                 <h1 className='text-slate-300 mt-3'>{props?.movies?.release_date ?? props?.movies?.first_air_date}</h1>
//                 <h1 className='text-slate-300 mt-4'>{props?.movies?.overview?.substring(0,props?.movies?.overview.indexOf("."))}</h1>
//                 <h1 className='text-yellow-500 font-bold text-3xl mt-8'>Language- {props?.movies?.original_language}</h1>
//                 {/* <button className='bg-gray-600 mt-10 w-80 h-12 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Watch Now</button> */}
//                 {props.movies && <ViewTrailer welcomeId = {props?.movies?.id}/>}

//             </div>

//         </div>
        
//     );
// };

// export default Welcome;













// //2
// import React from 'react';
// import { useState, useEffect } from 'react';
// import ViewTrailer from './ViewTrailer';
// import { useQuery } from '@tanstack/react-query';

// interface movieProp {
//     movies : any
// }

// const Welcome = (props:movieProp) => {
//     const fetchMovieData = async () => {
//         const response = await fetch(`https://api.themoviedb.org/3/movie/${props?.movies?.id}?api_key=2ce89c84708866b64bb8e74374b07865`);
//         const data = await response.json();
//         return data;
//     };

//     const { data: movieData, isLoading, error } = useQuery({
//                                                             queryKey:['movieData'],
//                                                             queryFn: fetchMovieData,
//                                                             });
    

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;

//     return (
//         <div style={{backgroundImage: `linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${props?.movies?.poster_path})`, backgroundRepeat:"no-repeat", backgroundSize:"1160px 950px"}} className=' pb-7 h-screen  grid grid-cols-2 pl-4'>
            
//             <div>
//                 <h1 className='text-slate-300 pt-44 font-bold text-4xl'>{movieData?.title ?? movieData?.name}</h1>
//                 <h1 className='text-slate-300 mt-3'>{movieData?.release_date ?? movieData?.first_air_date}</h1>
//                 <h1 className='text-slate-300 mt-4'>{movieData?.overview?.substring(0,movieData?.overview.indexOf("."))}</h1>
//                 <h1 className='text-yellow-500 font-bold text-3xl mt-8'>Language- {movieData?.original_language}</h1>
//                 {movieData && <ViewTrailer welcomeId={movieData?.id} />}
//             </div>

//         </div>
//     );
// };

// export default Welcome;






//3
import React from 'react';
import ViewTrailer from './ViewTrailer';

interface Movie {
  id: number;
  title: string;
  name: string;
  release_date: string;
  first_air_date: string;
  overview: string;
  original_language: string;
  poster_path: string;
}

interface WelcomeProps {
  movies: Movie;
}

const Welcome: React.FC<WelcomeProps> = ({ movies }) => {
  return (
    
    <div
      style={{
        backgroundImage: `linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${movies?.poster_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1160px 950px"
      }}
      className=' pl-6 h-screen grid grid-cols-2'
    >
      <div >
        <h1 className='text-slate-300 pt-40 font-bold text-4xl'>{movies?.title ?? movies?.name}</h1>
        <h1 className='text-slate-300 mt-3'>{movies?.release_date ?? movies?.first_air_date}</h1>
        <h1 className='text-slate-300 mt-4'>{movies?.overview?.substring(0, movies?.overview.indexOf("."))}</h1>
        <h1 className='text-yellow-500 font-bold text-3xl mt-5'>Language - {movies?.original_language}</h1>
        {movies && <ViewTrailer welcomeId={movies?.id} />}
      </div>
    </div>
  );
};

export default Welcome;

