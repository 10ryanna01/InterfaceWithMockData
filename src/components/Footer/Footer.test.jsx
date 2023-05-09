
import { describe, expect, it } from "vitest"
import { render, screen, userEvent, mount } from "../../../test-utils"; 
import Footer from "./Footer";

 

describe('Footer snapshot test', () =>{

    it('should render correctly'), ()=> {
      const footerWrapper =mount(Footer);
      expect(footerWrapper.html()).toMatchFileSnapshot();
    }

    it('should have a headline tag ', () =>{ 
      render(<Footer />);
      expect(screen.getByRole('footer').className).toContain('Project__UI__grid__footer');
    });  
   
  
  }); 