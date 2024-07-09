import React, { useState ,useEffect} from 'react'
import styled from "styled-components";
import { GoTriangleUp } from "react-icons/go";
function Topbtn() {
const [hidden,sethidden]=useState(true)
useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        sethidden(true)
      }
      else{
        sethidden(false)
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (
    <Tbn hdn={hidden}>
      <button onClick={scrollToTop}> <GoTriangleUp />	</button>
    </Tbn>
  )
}
const Tbn = styled.div`
display: ${(props)=>props.hdn?'none':'block'};
  button {
    padding: 10px;
    border: none;
    border-radius: 100px;
    background-color: #06090f;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    cursor: pointer;
  }
`;


export default Topbtn
