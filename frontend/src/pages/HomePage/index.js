import React from "react";

//É basicamente uma div com as formas do bootstrap
// import{Container} from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from "../../components/Header";

import { Form, ContentContainer,AdsBlock } from "./styled";

import { Container, InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap'
import ShortenerService from "../../services/shortenerService";

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            url: '',
            code: '',
            errorMessage: ''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const { url } = this.state;
        console.log(url)
        this.setState({ isLoading: true, errorMessage: '' })

        if (!url) {
            this.setState({ isLoading: false, errorMessage: 'Informe Uma Url para encurtar' })
        } else {
            try {
                const service = new ShortenerService();
                console.log(url)
                const result = await service.generate({ url })

                this.setState({ isLoading: false, code: result.code })
            } catch (error) {
                this.setState({ isLoading: false, errorMessage:url+ error+ ' Ops, ocorreu um erro ao tentar encurtar a URL' })
            }
        }
    }
    copyToClipBoard = async ()=>{
        const element = this.inputURL;
        element.select()
        document.execCommand('copy')
    }

    render() {
        const { isLoading, errorMessage, code } = this.state
        return (
            <Container>
                {/* Propriedade filha  */}
                <Header >Seu novo Encurdator de URL. :)   </Header>
                <ContentContainer>
                    <Form onSubmit={this.handleSubmit}>
                        <InputGroup className="mb-3">
                            <FormControl  placeholder="Digite a URL para encurtar"
                                defaultValue=""
                                onChange={e => this.setState({ url: e.target.value })}

                            />
                            <InputGroup.Append >
                                <Button variant="primary" type="submit">Encurtar</Button>
                            </InputGroup.Append>
                        </InputGroup>


                        {isLoading ? (
                            <Spinner animation="border"></Spinner>
                        ) : (
                            code && (
                                <>
                                    <InputGroup className="mb-3">
                                        <FormControl 
                                            autoFocus = {true}
                                            defaultValue={"https://pitu.tk/"+code}
                                            ref = {(input)=> this.inputURL = input}

                                        />
                                        <InputGroup.Append>
                                            <Button variant="outline-secondary" onClick={()=> this.copyToClipBoard()} >Copiar</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <p>para acompanhar as estatisticas, acesse https://pitu.tk/{code}</p>
                                </>
                            )
                        )}

                        {errorMessage && <Alert variant="danger"> {errorMessage}</Alert> }

                    </Form>
                </ContentContainer>
                <ContentContainer>
                < AdsBlock>Adense</AdsBlock>
                </ContentContainer>
               

            </Container>
        )
    }

}

export default HomePage;