import React from "react";
import {logo, HeaderContainer} from './styles'
import icone from "../../assets/logo.png";

function Header(props) {
    return (
        <div>
            {/* pega o valor da propriedade title criada */}
            {/* <p>Header {props.title}</p> */}

            {/* pega o valor do conteudo da tag */}
            {/* <p>{props.children} </p> */}

            <HeaderContainer>
                <logo src={icone} alt= "Pitu - Encurtador de URL "> </logo>
                <h1>Pitu</h1>
                <p>{props.children}</p>

            </HeaderContainer> 

        </div>
    )
}


export default Header