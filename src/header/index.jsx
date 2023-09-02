import { Header } from './styles'

export const Cabecalho = () => {
  return (
    <Header>
      <div className="logo">
        <img src="https://www.veterinup.com.br/upload/produto/layout/7/sobreempresa-logo.webp" alt="" />
      </div>
      <div className="titulo">
        <h1>Alta tecnologia trazendo resultados incríveis aos animais</h1>
      </div>
    </Header>
  )
}