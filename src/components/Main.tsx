// import React from 'react';
// import Sidebar from './Sidebar';
// import Welcome from './Welcome';
// import Home from './Home';
// // import { useState, useEffect } from 'react';
// import { useQuery } from '@tanstack/react-query';


// const getMovies = async()=>{
//     await fetch(menu == "home" || menu == "" ? `https://api.themoviedb.org/3/movie/upcoming?api_key=2ce89c84708866b64bb8e74374b07865` : `https://api.themoviedb.org/3/discover/${menu ? menu:"movie"}?api_key=2ce89c84708866b64bb8e74374b07865`)
//         .then(res => res.json())
//         .then(json => setMovies(json.results))
// }



// const Main = () => {

//     const {movies,isLoading, error, data} = useQuery({ queryKey: ['props?.movies'], queryFn: getMovies })

//     // const [movies,setMovies] = useState([])
//     // const [menu,setMenu] = useState("")

//     // const getMovies = async()=>{
//     //     try{
//     //         await fetch(menu == "home" || menu == "" ? `https://api.themoviedb.org/3/movie/upcoming?api_key=2ce89c84708866b64bb8e74374b07865` : `https://api.themoviedb.org/3/discover/${menu ? menu:"movie"}?api_key=2ce89c84708866b64bb8e74374b07865`)
//     //         .then(res => res.json())
//     //         .then(json => setMovies(json.results))
//     //     }catch(err){
//     //         console.error(err)
//     //     }
//     // }

//     // useEffect(()=>{
//     //     getMovies()
//     // },[menu])

//     if (isLoading) {
//         return <h3>Loading...</h3>;
//     }

//     if (error) {
//         return <h3>Error: {error.message}</h3>;
//     }

//     return (
//         <div className='bg-black min-h-screen'>
        
//             <div className='flex h-full w-full'>
//                 <div className='w-1/12'>
//                     <Sidebar setMenu={setMenu} />  
//                 </div>
//                 <div className='w-11/12'>
//                     <Welcome movies={movies[0]}/>
//                 </div>
//             </div>
        
//             <div>
//                 <Home movies= {movies}/>
//             </div>
//         </div>
//     );
// };

// export default Main;

//2

// import React from 'react'
// import Sidebar from './Sidebar'
// import Welcome from './Welcome'
// import Home from './Home'
// import {useState,useEffect} from "react"

// const Main = () => {


//     const [movies, setMovies] = useState([])
//     const [menu,setMenu] = useState("")

//     const getMovies = async () => {
//         try {
//             await fetch(menu == "home" || menu == "" ? `https://api.themoviedb.org/3/movie/upcoming?api_key=aafa86502a60244c7844fcc84ca5ecce` : `https://api.themoviedb.org/3/discover/${menu ? menu : "movie"}?api_key=aafa86502a60244c7844fcc84ca5ecce`)
//                 .then(res => res.json())
//                 .then(json => setMovies(json.results))
//         } catch (err) {
//             console.error(err)
//         }
//     }
    
  
//     useEffect(() => {
//         getMovies()
//     }, [menu])

//     return (
//         <div className='bg-black min-h-screen' >
//           <div className='flex  h-full w-full'>

//             <div className='w-1/12'>
//               <Sidebar setMenu={setMenu}/>
//             </div>

//             <div className='w-11/12'>
//               <Welcome movies={movies[0]}/>
//             </div>
//           </div>

//           <div>
//             <Home movies={movies}/>
//           </div>
//         </div>
//       )
//     }
    
//     export default Main;

//3 react query

import React from 'react';
import Sidebar from './Sidebar';
import Welcome from './Welcome';
import Home from './Home';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const Main: React.FC = () => {
    const [menu, setMenu] = useState('');
    

    const getMovies = async () => {
        const response = await fetch(menu === 'home' || menu === ''
                ? `https://api.themoviedb.org/3/movie/upcoming?api_key=2ce89c84708866b64bb8e74374b07865`
                : `https://api.themoviedb.org/3/discover/${
                      menu ? menu : 'movie'
                  }?api_key=2ce89c84708866b64bb8e74374b07865`
        );
        // const data = await response.json();
        // return data.results;
        return response.json();
        
    };

    const { data: movies, isLoading, error } = useQuery({
                                                        queryKey:['movies',menu],
                                                        queryFn: getMovies,
                                                        });

    if (isLoading){
         return <div>Loading...</div>;
    }
    if (error){
     return <div>Error: {error.message}</div>;
    }

    return (
        <div className="bg-black min-h-screen">
            <div className="flex h-full w-full">
                <div className="w-1/12">
                    <Sidebar setMenu={setMenu} />
                </div>
                <div className="w-11/12">
                    {/* <Welcome movies={movies[0]} /> */}
                    <Welcome movies={movies.results[1]} />
                    
                </div>
            </div>
            <div>
                <Home movies={movies} />
            </div>
            
        </div>
    );
};


export default Main;
