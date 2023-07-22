import { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import {AiOutlineSearch} from "react-icons/ai"

function Header({search}) {

  const [searchValue,setSearchValue] = useState("")

  const handleSubmit = (event)=> {
    event.preventDefault()
    search(searchValue)
  }

  return (
    <Container className="header-main">
      <h1 className="title"> SnapShot | Photo Search App </h1>
      <h4 className="subtitle">Built with Flickr API</h4>
      <form onSubmit={handleSubmit}>
      <InputGroup className="mb-3" >
        <Form.Control
          value={searchValue}
          onChange={(event)=>setSearchValue(event.target.value)}
          placeholder="Search..."
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit}>
          <AiOutlineSearch/>
        </Button>
      </InputGroup>
      </form>

      <div className="buttons">
        <Button className="button" variant="secondary" onClick={()=>search("metal")}>Metal</Button>
        <Button className="button" variant="secondary" onClick={()=>search("pizza")}>Pizza</Button>
        <Button className="button" variant="secondary" onClick={()=>search("slipknot")}>Slipknot</Button>
        <Button className="button" variant="secondary" onClick={()=>search("snake")}>Snake</Button>
      </div>

    </Container>
  );
}

export default Header;
