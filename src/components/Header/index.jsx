import { Container, Profile } from "./styles";

export function Header() {
    return (
        <Container>
            <strong>ROCKETMOVIES</strong>
            <input type="text" placeholder="Pesquisar pelo Título" />
            <Profile>
                <div>
                    <p>Carlos Henrriky</p>
                    <button>sair</button>
                </div>
                <img 
                    src="https://github.com/henrriky2014.png" 
                    alt="Imagem do Usuário" 
                />
            </Profile>
            
        </Container>
    )
}