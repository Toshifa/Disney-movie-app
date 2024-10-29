// import React, { useState } from 'react';
// import logo from '../images/logo.png'
// import movie from '../images/movie.png'
// import tv from '../images/tv.png'
// import home from '../images/home.png'
// import search from '../images/search.png'
// import user from '../images/user.png'
// import { Link } from 'react-router-dom';


// interface menuProp {
//     setMenu : any;
// }


// const Sidebar = (props: menuProp) => {
//     const [menu, setMenu] = useState('');
//     const [touch,setTouch] = useState(false)
//     console.log(props,"navprop")

//     return (
//         <div className='z-20 fixed grid grid-cols-2 bg-black h-full w-24'>
//             <div onMouseEnter={()=> setTouch(true)} onMouseLeave={()=> setTouch(false)}>
//                 <img src={logo} alt='logo-img' className= 'w-28 ml-5 mt-5'/>
//                 <Link to="/signin"><img src={user} alt='user-img'className= 'w-5 ml-9 mt-8 cursor-pointer'/></Link>
//                 <img src={search} alt='search-img'className= 'w-9 ml-7 mt-8 cursor-pointer'/>
//                 <img src={home} onClick={()=> props.setMenu("home")} alt='home-img' className= 'w-9 ml-7 mt-8 cursor-pointer'/>
//                 <img src={movie} onClick={()=> props.setMenu("movie")} alt='love-img'className= 'w-16 ml-5 mt-8 cursor-pointer'/>
//                 <img src={tv} onClick={()=> props.setMenu("tv")} alt='action-img'className= 'w-16 ml-5 mt-8 cursor-pointer'/>
                
//             </div>
//             {touch && <div className='bg-opacity-60 ml-8 w-20 bg-black h-screen font-bold text-base text-slate-300'>
//                 <h4 className='pt-20'>Signin</h4>
//                 <h4 className='mt-8'>Search</h4>
//                 <h4 className='mt-12'>Home</h4>
//                 <h4 className='mt-9'>Movie</h4>
//                 <h4 className='mt-9'>Tv Shows</h4>
                
                
//             </div>
//             }
//         </div>
//     );
// };

// export default Sidebar;



//2
// import React, { useState } from 'react';
// import logo from '../images/logo.png';
// import movie from '../images/movie.png';
// import tv from '../images/tv.png';   
// import home from '../images/home.png';
// import search from '../images/search.png';
// import user from '../images/user.png';
// import { Fade } from 'react-awesome-reveal';
// import { Link } from 'react-router-dom';

// interface SidebarProps {
//     setMenu: (menu: string) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ setMenu }) => {
//     const [touch, setTouch] = useState(false);

//     return (
//         <div className='z-20 fixed grid grid-cols-2 bg-black h-full w-24'>
//             <div onMouseEnter={() => setTouch(true)} onMouseLeave={() => setTouch(false)}>
//                 <img src={logo} alt='logo-img' className='w-28 ml-5 mt-5' />
//                 <Link to='/signin'>
//                     <img src={user} alt='user-img' className='w-5 ml-9 mt-8 cursor-pointer' />
//                 </Link>
//                 <img src={search} alt='search-img' className='w-9 ml-7 mt-8 cursor-pointer' />
//                 <img src={home} onClick={() => setMenu('home')} alt='home-img' className='w-9 ml-7 mt-8 cursor-pointer' />
//                 <img src={movie} onClick={() => setMenu('movie')} alt='love-img' className='w-16 ml-5 mt-8 cursor-pointer' />
//                 <img src={tv} onClick={() => setMenu('tv')} alt='action-img' className='w-16 ml-5 mt-8 cursor-pointer' />
//             </div>
//             {touch && (
//                 <Fade>
//                     <div className='bg-opacity-60 ml-8 w-20 bg-black h-screen font-bold text-base text-slate-300'>
//                         <h4 className='pt-20'>Signin</h4>
//                         <h4 className='mt-8'>Search</h4>
//                         <h4 className='mt-12'>Home</h4>
//                         <h4 className='mt-9'>Movie</h4>
//                         <h4 className='mt-9'>Tv Shows</h4>
//                     </div>
//                 </Fade>
//             )}
//         </div>
//     );
// };

// export default Sidebar;









//3
import React, { useState } from 'react';
import logo from '../images/logo-d-plus.png'
import movie from '../images/movie.png';
import tv from '../images/tv.png';
import home from '../images/home.png';
import search from '../images/search.png';
import user from '../images/user.png';
import { Link } from 'react-router-dom';

interface SidebarProps {
    setMenu: 
    (menu: string) => void
}


const Sidebar: React.FC<SidebarProps> = (props) => {
    const [touch, setTouch] = useState(false);
    
    return (
        <div className='z-20 fixed grid grid-cols-2 bg-black h-full w-24'>
            <div onMouseEnter={() => setTouch(true)} onMouseLeave={() => setTouch(false)}>
                <img src={logo} alt='logo-img' className='w-28 ml-5 mt-5'/>
                <Link to="/signin"><img src={user} alt='user-img' className='w-5 ml-9 mt-8 cursor-pointer'/></Link>
                <img src={search} alt='search-img' className='w-9 ml-7 mt-8 cursor-pointer'/>
                <img src={home} onClick={() => props.setMenu("home")} alt='home-img' className='w-9 ml-7 mt-8 cursor-pointer'/>
                <img src={movie} onClick={() => props.setMenu("movie")} alt='love-img' className='w-16 ml-5 mt-8 cursor-pointer'/>
                <img src={tv} onClick={() => props.setMenu("tv")} alt='action-img' className='w-16 ml-5 mt-8 cursor-pointer'/>
                
            </div>
            {touch && 
                <div className='bg-opacity-60 ml-8 w-20  bg-black h-screen font-bold text-base text-slate-300'>
                    <h4 className='pt-20'>Signin</h4>
                    <h4 className='mt-10'>Search</h4>
                    <h4 className='mt-12'>Home</h4>
                    <h4 className='mt-9'>Movie</h4>
                    <h4 className='mt-9'>Tv Shows</h4>
                </div>
            }
        </div>
    );
};

export default Sidebar;

