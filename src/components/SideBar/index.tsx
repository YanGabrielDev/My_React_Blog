import { useState } from "react";
import * as Styled from "./styles";
import { Close, Menu } from "@mui/icons-material"
import mock from "./mock";

export const SideBar = () => {
const [open, setOpen] = useState(false)
return(
  <Styled.Container open={open}>
    <Styled.Header>

  <Styled.Button onClick={() => setOpen(!open)}>
    {open ? <Close/> : <Menu/>}
  </Styled.Button>
    </Styled.Header>
    <Styled.Menu>
     
  {mock.map((links: any) => {
    return(
      <>
      
      <Styled.MenuLink>
        <Close/>
        <h3>uepa</h3>
      </Styled.MenuLink>
      </>
    )
  })}
    </Styled.Menu>
  </Styled.Container>
)
 
};
