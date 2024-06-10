import { useEffect } from "react";

const Effects = ()=>{
    useEffect(() => {
        const centeredDivs = document.getElementsByClassName('shoeBlue');
        const centeredDivss = document.getElementsByClassName('SellerForm');
    
    
        for (let i = 0; i < centeredDivs.length; i++) {
          
          const centeredDiv = centeredDivs[i];
          const centeredDivsss = centeredDivss[i];
    
          setTimeout(() => {
            centeredDiv.style.opacity = '1';
            centeredDiv.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out'; // Transition for opacity and transform
            centeredDiv.style.transform = 'translate(0%, 30%)';
    
            centeredDivsss.style.opacity = '1';
            centeredDivsss.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out'; // Transition for opacity and transform
            centeredDivsss.style.transform = 'translate(0%, 30%)';
    
            
          }, 0);
    
        }
      }, []); 
}

export default Effects;