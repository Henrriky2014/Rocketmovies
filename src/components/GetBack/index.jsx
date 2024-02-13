import { Container } from "./styles";

export function GetBack({icon: Icon}) {
    return(
        <Container>
            <Icon size={20} />
            <p>Voltar</p>
        </Container>
    )
}