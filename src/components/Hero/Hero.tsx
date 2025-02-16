import Logo from '@/assests/logo.png';
import {motion} from 'framer-motion';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdMenu, MdOutlineShoppingBag } from 'react-icons/md';

const NavbarMenu = [
    {
      id: 1,
      title: "New Release",
      link: "/",
      delay: "0.2",
    },
    {
      id: 2,
      title: "Men",
      link: "#",
      delay: "0.4",
    },
    {
      id: 3,
      title: "Women",
      link: "#",
      delay: "0.6",
    },
    {
      id: 4,
      title: "Kids",
      link: "#",
      delay: "0.8",
    },
    {
      id: 5,
      title: "Customize",
      link: "#",
      delay: "1",
    },
  ];

  const slideRight = (delay:number) => ({
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });

const Hero = () => {
  return (
    <div>Hero</div>
  )
}

export default Hero