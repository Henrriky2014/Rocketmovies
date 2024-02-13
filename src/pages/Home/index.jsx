import { Container, Content } from "./styles";

import { Header } from "../../components/Header";


export function Home() {
    return(
        <Container>
            
            <Header />

            <main>
                <Content style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <p > 
                        
                    </p>
                
                </Content>
            </main>

        </Container>
    )
}