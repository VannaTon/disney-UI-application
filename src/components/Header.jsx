import React, { useState } from 'react'
import image from './../assets/images/image.png'
import Headeritem from './Headeritem'
import people from './../assets/images/people.png'
import { HiHome, HiMagnifyingGlass,HiStar,HiPlusCircle,HiTv,  HiPlayCircle  } from 'react-icons/hi2'
import {HiPlus,HiDotsVertical} from 'react-icons/hi'
const Header = () => {
  const [toggle,setToggle] = useState(false);
  const menu = [
    {
      
      name:'HOME',
      icon:HiHome
    },
    {
      
      name:'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      
      name:'WATCH LIST',
      icon:HiPlus
    },
    {
      
      name:'ORIGINALS',
      icon:HiStar
    },
    {
      name:'MOVIES',
      icon:HiPlayCircle

    },
    {
      name:'SERIES',
      icon:HiTv
    }
  ];
  return (
    <div className='flex items-center gap-8 justify-between p-5'>
      <div className="flex gap-8 items-center">
     <img src={image} alt="" className='w-[80px] md:[115px] object-cover' />
     <div className=" gap-8  md:flex hidden">
     {menu.map((item, index)=>(
        <Headeritem key={index} name={item.name } Icon={item.icon}/>
       ))}
     </div>
     <div className="flex gap-5 md:hidden">
     {menu.map((item,index)=>index<3&&(
        <Headeritem key={index} name={''} Icon={item.icon}/>
       ))}
        <div className=" md:hidden " onClick={()=>setToggle(!toggle)}>
    
        <Headeritem name={''} Icon={HiDotsVertical}/>
       {toggle? <div className=' absolute mt-3 bg-[#121212]
        border-[1px] p-3 border-gray-700 px-5 py-4'>
        {menu.map((item,index)=>index>2&&(
        <Headeritem key={index} name={item.name} Icon={item.icon}/>
       ))}
        </div>:null}
      
     </div>
     
     </div>
      
       </div>
       <img src={people} alt="" className='w-[40px] rounded-full' />
    </div>
  )
}

export default Header
