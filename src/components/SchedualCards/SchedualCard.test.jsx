import { describe, expect, it } from "vitest"
import { render, screen, userEvent, mount } from "../../../test-utils"; 
import SchedualCard from "./SchedualCard";

 

describe('Complete Header snapshot test', () =>{

    it('should render correctly'), ()=> {
      const cardWrapper =mount(SchedualCard);
      expect(cardWrapper.html()).toMatchFileSnapshot();
    }
 

 
    
  
      
   
  
  }); 