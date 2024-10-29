import React from 'react';
import { useLocation } from 'react-router-dom';
import ViewTrailer from './ViewTrailer';

const MovieDetails: React.FC = () => {

    const location = useLocation()
    console.log(location)

    return (
        
        <div style={{backgroundImage: `linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${location?.state?.data?.poster_path})`, backgroundRepeat:"no-repeat", backgroundSize:"1280px 950px"}} className=' pl-10 pb-7 h-full  grid grid-cols-2 '>
            
            <div>
                <h1 className='text-slate-300 pt-44 font-bold text-4xl'>{location?.state?.data?.title ?? location?.state?.data?.name}</h1>
                <h1 className='text-slate-300 mt-3'>{location?.state?.data?.release_date ?? location?.state?.data?.first_air_date}</h1>
                <h1 className='text-slate-300 mt-4'>{location?.state?.data?.overview}</h1>
                <h1 className='text-yellow-500 font-bold text-3xl mt-8'>Language- {location?.state?.data?.original_language}</h1>
                {/* <button className='bg-gray-600 mt-10 w-80 h-12 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Watch Now</button> */}
                <ViewTrailer detailsId={location?.state?.data?.id} />
            </div>

        </div>
    );
};

export default MovieDetails;


















//2

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import  ViewTrailer from './ViewTrailer';
// import { useQuery } from '@tanstack/react-query';
// import { useParams } from 'react-router-dom';

// const MovieDetails = () => {
//     const params = useParams();

//     const location = useLocation();
//     const movieId = location?.state?.data?.id;

//     const fetchMovieData = async () => {
//         const response = await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=2ce89c84708866b64bb8e74374b07865`);
//         const data = await response.json();
//         return data;
//     };

//     const { data: movieData, isLoading, error } = useQuery({
//                                                             queryKey: ['movie', params.movieId],
//                                                             queryFn: fetchMovieData,
//                                                             // staleTime: 10000,
//                                                         });
   

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;

//     return (
//         <div style={{backgroundImage: `linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${movieData?.poster_path})`, backgroundRepeat:"no-repeat", backgroundSize:"1280px 950px"}} className=' pl-10 pb-7 h-full  grid grid-cols-2 '>
//             <div>
//                 <h1 className='text-slate-300 pt-44 font-bold text-4xl'>{movieData?.title ?? movieData?.name}</h1>
//                 <h1 className='text-slate-300 mt-3'>{movieData?.release_date ?? movieData?.first_air_date}</h1>
//                 <h1 className='text-slate-300 mt-4'>{movieData?.overview}</h1>
//                 <h1 className='text-yellow-500 font-bold text-3xl mt-8'>Language- {movieData?.original_language}</h1>
//                 <ViewTrailer detailsId={movieId} />
//             </div>
//         </div>
//     );
// };

// export default MovieDetails;


