import React from "react";
import Header from '../../components/Header'
import { Container } from 'react-bootstrap'

import {parseISO,formatRelative} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ShortenerService from '../../services/shortenerService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StatsContainer, StatsRow, StatsBox, StatsTitle } from './styles'

class StatsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            shortenerURL: {},
            errorMessage: '',
        }
    }
    async componentDidMount() {
        const { code } = this.props.match.params;

        try {
            const service = new ShortenerService();
            const shortenerURL = await service.getStats(code);

            const parsedDate = parseISO(shortenerURL.updatedAt);
            const currentDate = new Date();
            const relativeDate = formatRelative(parsedDate, currentDate, {
                locale: ptBR,
            });
            shortenerURL.relativeDate = relativeDate;

            this.setState({ isLoading: false, shortenerURL });
        } catch (error) {
            this.setState({ isLoading: false, errorMessage : error+'Ops, a url solicitada não existe!' });
        }
    }

    render() {
        const { shortenerURL } = this.state
        return (
            <Container>
                <Header>
                    Estatísticas:
                </Header>

                {this.state.errorMessage ? (
                    <StatsContainer className="text-center">
                        <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle"></FontAwesomeIcon>
                        <p className="m-3">{this.state.errorMessage}</p>
                        <a className="btn btn-primary" href="/">Encurtar nova URL</a>
                    </StatsContainer>
                ) : (
                    <StatsContainer className="text-center">
                        <p><b>https://pitu.tk/{shortenerURL.code}</b></p>
                        <p>Redireciona para: <br/> {shortenerURL.url}</p>
                        <StatsRow>
                            <StatsBox>
                                <b>{shortenerURL.hits} </b>
                                <StatsTitle> Visitas</StatsTitle>
                            </StatsBox>
                            <StatsBox>
                                <b>{shortenerURL.relativeDate} </b>
                                <StatsTitle> Última Visita</StatsTitle>
                            </StatsBox>
                        </StatsRow>
                        <a className="btn btn-primary" href="/">Encurtar nova URL</a>
                    </StatsContainer>

                )}

            </Container>
        )
    }

}

export default StatsPage