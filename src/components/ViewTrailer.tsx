// import React, {useState, useEffect} from 'react';
// import Modal from 'react-modal';
// import YouTube from 'react-youtube';

// const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//     },
//   };

// interface idProp {
//   detailsId?:any
//   welcomeId?:any
// }


// const ViewTrailer = (props:idProp) => {

//     const [videos,setVideos] = useState<any>([])

//     const getVideos = async ()=> {
//         try{
//           await fetch(`https://api.themoviedb.org/3/movie/${props?.detailsId ?? props?.welcomeId}/videos?api_key=2ce89c84708866b64bb8e74374b07865&language=en-US`)
//         .then(res=> res.json())
//         .then(json => setVideos(json?.results))
//         }
//         catch(err){
//           console.error(err)
//         }       
//     }

//     useEffect(()=>{
//       getVideos()
//     },[videos])

    

//     const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   console.log(videos,"video")
//     return (
    
//         <div>
//       <button onClick={openModal} className='bg-gray-600 mt-10 w-80 h-12 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Watch Now</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//       >
//           <YouTube videoId={videos[0]?.key}/>
//       </Modal>
//     </div>
//     );
// };

// export default ViewTrailer;















//2

import React from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import { useQuery } from '@tanstack/react-query';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface idProp {
  detailsId?: number | string;
  welcomeId?: number | string;
}


const ViewTrailer: React.FC<idProp> = (props) => {


  const [modalIsOpen, setIsOpen] = React.useState(false);


  const viewMovieData = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${props?.detailsId ?? props?.welcomeId}/videos?api_key=2ce89c84708866b64bb8e74374b07865&language=en-US`);
    const json = await response.json();
    return json?.results;

  };


  const { data: videos, isLoading, isError } = useQuery({
                                                          queryKey:['videos'],
                                                          queryFn: viewMovieData
                                                        });

 

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <button onClick={openModal} className='bg-zinc-600 mt-10 w-80 h-12 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Watch Now</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <YouTube videoId={videos?.[0]?.key} />
      </Modal>
    </div>
  );
};

export default ViewTrailer;













//3

// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import YouTube from 'react-youtube';

// // Define the types for the props
// interface IdProp {
//   detailsId?: string;
//   welcomeId?: string;
// }

// const customStyles: Modal.Styles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// const ViewTrailer: React.FC<IdProp> = ({ detailsId, welcomeId }) => {
//   const [videos, setVideos] = useState<any>([]);

//   // Fetch videos based on the provided ID
//   const getVideos = async () => {
//     try {
//       const response = await fetch(`https://api.themoviedb.org/3/movie/${detailsId ?? welcomeId}/videos?api_key=2ce89c84708866b64bb8e74374b07865&language=en-US`);
//       const json = await response.json();
//       setVideos(json?.results);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     getVideos();
//   }, [detailsId, welcomeId]);

//   const [modalIsOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   console.log(videos, "video");

//   return (
//     <div>
//       <button onClick={openModal} className='bg-gray-600 mt-10 w-80 h-12 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Watch Now</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//       >
//         <YouTube videoId={videos[0]?.key} />
//       </Modal>
//     </div>
//   );
// };

// export default ViewTrailer;







//4
// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import YouTube from 'react-youtube';
// import { useQuery } from '@tanstack/react-query';

// // Define the types for the props
// interface IdProp {
//   detailsId?: string;
//   welcomeId?: number;
// }

// const customStyles: Modal.Styles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// const ViewTrailer: React.FC<IdProp> = ({ detailsId, welcomeId }) => {
//   // Define a function to fetch the videos

//   const fetchVideos = async (id: string) => {
//     const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=2ce89c84708866b64bb8e74374b07865&language=en-US`);
//     const json = await response.json();
//     return json?.results;
//   };


//   const { data: videos, isLoading, isError } = useQuery({
//                                                   queryKey:['videos', detailsId ?? welcomeId??''], 
//                                                   queryFn:()=>fetchVideos(detailsId??welcomeId??'')
//                                                   });

//   const [modalIsOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   console.log(videos, "video");

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error fetching data</div>;

//   return (
//     <div>
//       <button onClick={openModal} className='bg-gray-600 mt-10 w-80 h-12 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Watch Now</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//       >
//         <YouTube videoId={videos?.[0]?.key} />
//       </Modal>
//     </div>
//   );
// };

// export default ViewTrailer;














