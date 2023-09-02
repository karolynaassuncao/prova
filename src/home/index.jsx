import { Container } from './styles'

export const Home = () => {
  return (
    <Container>
      <main>
        <section>
          <h2>deixe seu pet muito mais saudável!</h2>
          <div className="photo-gallery">
            <a href="https://www.veterinup.com.br/cachorro-forte-gummy.html">
              <img src="https://www.veterinup.com.br/upload/produto/imagem/b_cachorro-forte-gummy-33.webp" alt="Foto 1" />
            </a>
            <a href="https://www.veterinup.com.br/gato-forte-gummy.html">
              <img src="https://www.veterinup.com.br/upload/produto/imagem/b_gato-forte-gummy-13.webp" alt="Foto 2" />
            </a>
          </div>
        </section>
        <section className='texto'>
          <div className="titulo-texto">
            <h2>Líder no segmento de Suplemento Canino no Brasil e com Filial no Estado da Flórida EUA.</h2>
          </div>
          <p>
            A VeterinUp trabalha envolvida com o bem estar e qualidade de vida dos animais. Sempre buscando por inovações e tecnologia para que possamos evoluir e oferecer o melhor do mercado em matéria prima para o seu melhor amigo.
          </p>
          <p>
            Contamos com uma equipe capacitada e qualificada para oferecer excelência desde o desenvolvimento até a entrega na sua casa. Compare e comprove, a VeterinUp é a melhor opção para ajudar a prolongar a vida de forma saudável do seu amor de quatro patas.
          </p>
        </section>
        <section className='video'>
          <div className="titulo-video">
            <h2>entenda por que VeterinUp é a melhor opção</h2>
          </div>
          <div className="video-container">
            <iframe width="500" height="500" src="https://www.youtube.com/embed/u3mO30UpPLU" title="Dra. Juliana fala sobre o Suplemento Cachorro Forte" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"
          </div>
        </section>
      </main>
    </Container>
  )
}