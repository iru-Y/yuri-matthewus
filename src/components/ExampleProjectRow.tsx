import styles from './ExampleProjectRow.module.css'
const ExampleProjectRow = () => {
  return (
    <div className={styles.example}>
      <div className={styles.leftSide}>
        <h1>Projeto feito</h1>
        <h2>Exemplo do projeto</h2>
        <p className={styles.description}>Fundada em 2017, a Agnus Dei é uma empresa inovadora no setor da moda e utilidades. Utilizei Golang para o backend, usando do gin para montar apis rest, swagger para documentação, arquitetura limpa, slog para logging e debug. O projeto já se encontra no ar e em uso atendendo mais de 500 clientes por dia.</p>
        <ul>
          <li>a</li>
          <li>b</li>
        </ul>
      </div>
      <div className={styles.rightSide}>
      </div>
    </div>

      )
}

export default ExampleProjectRow;
