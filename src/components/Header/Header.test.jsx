import { describe, expect, it } from "vitest"
import { render, screen, userEvent, mount } from "../../../test-utils"; 
import Header from "./Header";

 

describe('Complete Header snapshot test', () =>{

    it('should render correctly'), ()=> {
      const headerWrapper =mount(Header);
      expect(headerWrapper.html()).toMatchFileSnapshot();
    }
 

    it('should have a headline text ', () =>{

        render(<Header />);
        expect(screen.getByText(/schedual/i)).toBeInTheDocument(); 
      }); 
    
      it('should have a headline tag ', () =>{ 
        render(<Header />);
        expect(screen.getByRole('heading').className).toContain('Project__UI__header__title');
      });  
 
      
   
  
  }); 