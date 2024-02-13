import { FiArrowLeft } from 'react-icons/fi';
import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md';
import { CiClock2 } from "react-icons/ci";

import { Container, Content, Stars } from './styles';

import { Header } from '../../components/Header';
import { GetBack } from '../../components/GetBack';
import { Tag } from '../../components/Tag';


export function Details() {
  return (
    <Container>
      <Header />
      
      <main>
        <Content style={{ maxHeight: '700px', overflowY: 'auto' }}>
        <GetBack icon={FiArrowLeft} />
        
        <div>
          <h1>Interestelar</h1>
          <Stars>
            <MdOutlineStar size={20}/>
            <MdOutlineStar size={20}/>
            <MdOutlineStar size={20}/>
            <MdOutlineStar size={20}/>
            <MdOutlineStarBorder size={20}/>
          </Stars>
        </div>

        <div className="created_at">
          <img 
            src="https://github.com/henrriky2014.png" 
            alt="Imagem do Usuário" 
          />
          <p>Por Carlos Henrriky</p>
          <CiClock2 />
          <p>23/05/22 às 08:00</p>
        </div>
        <div>
          <Tag title="Ficção Científica"/>
          <Tag title="Drama"/>
          <Tag title="Família"/>
        </div>

        <p>
          Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
        </p>
        <p>
          Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
        </p>
        <p>
          Na Terra, Murphy, agora adulta, trabalha como cientista da NASA ajudando Brand na equação que permitirá o lançamento de uma enorme estação espacial usando a gravidade. Brand admite em seu leito de morte que já resolveu o problema e determinou que é impossível; ele escondeu a verdade para manter a esperança ainda viva e colocar sua fé no "Plano B": usar óvulos fertilizados a bordo da Endurance para recomeçar a espécie humana. Porém Murphy conclui que a equação pode funcionar com os dados adicionais da singularidade de um buraco negro.
        </p>
        <p>
          A Endurance está com pouco combustível e é capaz de visitar apenas mais um planeta antes de voltar para a Terra. Eles selecionam Mann depois de uma votação tensa, por ser o único ainda transmitindo. Entretanto, eles descobrem que o planeta é gelado e inóspito; Mann sempre soube que o Plano B era o verdadeiro objetivo da missão e falsificou os dados sobre a viabilidade de seu mundo para que a Endurance o resgatasse. Ele quebra o visor do capacete de Cooper e o deixa para morrer, indo para a Endurance numa nave auxliar. Romilly é morto por uma bomba armada secretamente por Mann a fim de proteger seu segredo. Amelia resgata Cooper em outra nave auxiliar. Mann atraca de forma incorreta na nave espacial e é morto numa explosão que também danifica a Endurance, porém Cooper usa sua nave auxiliar para controlá-la.
        </p>
        <p>
          Quase sem combustível, Cooper e Amelia planejam catapultar a Endurance ao redor de Gargântua numa rota para Edmunds. TARS e Cooper se jogam no buraco negro se sacrificando para coletar os dados da singularidade e ajudar Amelia reduzindo a massa da nave espacial. Eles emergem em um "tesserato" extradimensional, onde o tempo é mostrado como dimensão espacial enquanto portais mostram pequenos momentos do quarto de infância de Murphy. Cooper raciocina que os supostos alienígenas que criaram o buraco de minhoca são na verdade humanos avançados que dominaram outras dimensões e construíram esse espaço para que ele pudesse se comunicar com a filha e salvar a humanidade. Cooper percebe que o "fantasma" de Murphy, na realidade, era ele mesmo, num período temporal mais avançado. De novo usando radiação gravitacional, passa os dados da singularidade coletados por TARS para o relógio de pulso de Murphy, que, adulta, também entende que o "fantasma" era o pai, comunicando-se com ela através da dimensão temporal, para que ela solucione a equação de Brand e lance a estação espacial da NASA, permitindo assim, evacuar a Terra.
        </p>
        <p>
        Cooper acorda décadas depois numa estação espacial da NASA, um cilindro de O'Neill que orbita Saturno e serve de base para a humanidade viajar pelo buraco de minhoca. Cooper que envelheceu apenas alguns anos, devido à relatividade temporal, reencontra Murphy, já mulher idosa, que havia liderado a espécie em seu êxodo. Ela convence o pai a viajar para reencontrar Amelia, que começou a preparação de Edmunds, descobrindo ser habitável para a humanidade. Cooper se reúne com TARS, que também foi salvo, e os dois roubam uma nave da NASA e partem para Edmunds.
        </p>

      </Content>
      </main>
    </Container>
  )
}