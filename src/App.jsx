import { useMemo, useState } from 'react'

function App() {
  const whatsapp = '5532999315501'

  const categorias = {
    'Carregadores Completos': [
      { nome: 'Carregador Turbo', preco: 'R$ 79,90' },
      { nome: 'Carregador iPhone', preco: 'R$ 129,90' },
      { nome: 'Carregador Samsung', preco: 'R$ 89,90' },
      { nome: 'Carregador Xiaomi', preco: 'R$ 94,90' },
      { nome: 'Carregador Tipo C', preco: 'R$ 69,90' },
      { nome: 'Carregador Duplo USB', preco: 'R$ 74,90' },
      { nome: 'Carregador Super Fast', preco: 'R$ 99,90' },
      { nome: 'Carregador Original', preco: 'R$ 119,90' },
      { nome: 'Carregador Universal', preco: 'R$ 59,90' },
      { nome: 'Carregador Premium', preco: 'R$ 139,90' },
    ],

    'Cabos de Carregador': [
      { nome: 'Cabo USB-C Turbo', preco: 'R$ 29,90' },
      { nome: 'Cabo Lightning Premium', preco: 'R$ 39,90' },
      { nome: 'Cabo V8 Reforçado', preco: 'R$ 24,90' },
      { nome: 'Cabo USB-C 2 Metros', preco: 'R$ 34,90' },
      { nome: 'Cabo Magnético', preco: 'R$ 49,90' },
      { nome: 'Cabo Gamer LED', preco: 'R$ 44,90' },
      { nome: 'Cabo Nylon USB-C', preco: 'R$ 37,90' },
      { nome: 'Cabo Lightning Original', preco: 'R$ 79,90' },
      { nome: 'Cabo V8 Turbo', preco: 'R$ 32,90' },
      { nome: 'Cabo Carregamento Rápido', preco: 'R$ 42,90' },
    ],

    'Fonte de Carregador': [
      { nome: 'Fonte USB-C', preco: 'R$ 49,90' },
      { nome: 'Fonte Turbo', preco: 'R$ 69,90' },
      { nome: 'Fonte Original', preco: 'R$ 99,90' },
      { nome: 'Fonte Fast Charge', preco: 'R$ 79,90' },
      { nome: 'Fonte Samsung', preco: 'R$ 89,90' },
      { nome: 'Fonte iPhone', preco: 'R$ 109,90' },
      { nome: 'Fonte Xiaomi', preco: 'R$ 84,90' },
      { nome: 'Fonte USB Dupla', preco: 'R$ 59,90' },
      { nome: 'Fonte Compacta', preco: 'R$ 44,90' },
      { nome: 'Fonte Premium', preco: 'R$ 119,90' },
    ],

    'Cabos Variados': [
      { nome: 'Cabo HDMI', preco: 'R$ 39,90' },
      { nome: 'Cabo AUX', preco: 'R$ 19,90' },
      { nome: 'Cabo de Rede', preco: 'R$ 29,90' },
      { nome: 'Cabo VGA', preco: 'R$ 34,90' },
      { nome: 'Cabo DisplayPort', preco: 'R$ 59,90' },
      { nome: 'Cabo P2', preco: 'R$ 17,90' },
      { nome: 'Cabo Extensor USB', preco: 'R$ 27,90' },
      { nome: 'Cabo Adaptador', preco: 'R$ 24,90' },
      { nome: 'Cabo de Energia', preco: 'R$ 32,90' },
      { nome: 'Cabo RCA', preco: 'R$ 22,90' },
    ],

    'Fones de Ouvido': [
      { nome: 'Fone P2 Premium', preco: 'R$ 39,90' },
      { nome: 'Fone Gamer RGB', preco: 'R$ 89,90' },
      { nome: 'Fone Intra Auricular', preco: 'R$ 49,90' },
      { nome: 'Fone Bass Boost', preco: 'R$ 59,90' },
      { nome: 'Fone Estéreo', preco: 'R$ 44,90' },
      { nome: 'Fone com Microfone', preco: 'R$ 69,90' },
      { nome: 'Fone Headphone', preco: 'R$ 99,90' },
      { nome: 'Fone Dobrável', preco: 'R$ 54,90' },
      { nome: 'Fone Esportivo', preco: 'R$ 64,90' },
      { nome: 'Fone Extra Bass', preco: 'R$ 74,90' },
    ],

    'Fones Bluetooth': [
      { nome: 'AirPods', preco: 'R$ 159,90' },
      { nome: 'Fone TWS', preco: 'R$ 99,90' },
      { nome: 'Headset Bluetooth', preco: 'R$ 189,90' },
      { nome: 'Fone Gamer Bluetooth', preco: 'R$ 219,90' },
      { nome: 'Fone Bluetooth Mini', preco: 'R$ 79,90' },
      { nome: 'Fone Bluetooth Bass', preco: 'R$ 129,90' },
      { nome: 'Fone Bluetooth LED', preco: 'R$ 149,90' },
      { nome: 'Fone Bluetooth Premium', preco: 'R$ 199,90' },
      { nome: 'Fone Bluetooth Dobrável', preco: 'R$ 169,90' },
      { nome: 'Fone Bluetooth Esportivo', preco: 'R$ 139,90' },
    ],

    'Caixas de Som': [
      { nome: 'JBL Bluetooth', preco: 'R$ 299,90' },
      { nome: 'Caixa Bluetooth', preco: 'R$ 149,90' },
      { nome: 'Mini Speaker', preco: 'R$ 89,90' },
      { nome: 'Caixa RGB', preco: 'R$ 179,90' },
      { nome: 'Caixa Portátil', preco: 'R$ 129,90' },
      { nome: 'Caixa Extra Bass', preco: 'R$ 219,90' },
      { nome: 'Caixa Festa', preco: 'R$ 399,90' },
      { nome: 'Caixa Compacta', preco: 'R$ 99,90' },
      { nome: 'Caixa Premium', preco: 'R$ 349,90' },
      { nome: 'Caixa Som USB', preco: 'R$ 119,90' },
    ],

    Adaptadores: [
      { nome: 'Adaptador USB', preco: 'R$ 24,90' },
      { nome: 'Adaptador OTG', preco: 'R$ 29,90' },
      { nome: 'Adaptador Tipo C', preco: 'R$ 34,90' },
      { nome: 'Adaptador HDMI', preco: 'R$ 49,90' },
      { nome: 'Adaptador Lightning', preco: 'R$ 39,90' },
      { nome: 'Adaptador VGA', preco: 'R$ 44,90' },
      { nome: 'Adaptador P2', preco: 'R$ 19,90' },
      { nome: 'Adaptador USB-C', preco: 'R$ 37,90' },
      { nome: 'Adaptador Bluetooth', preco: 'R$ 54,90' },
      { nome: 'Adaptador Universal', preco: 'R$ 59,90' },
    ],

    TVs: [{ nome: 'UniTv', preco: 'R$ 249,90' }],

    'Copos e Garrafas': [
      { nome: 'Garrafa Térmica', preco: 'R$ 79,90' },
      { nome: 'Copo Stanley', preco: 'R$ 119,90' },
      { nome: 'Garrafa Fitness', preco: 'R$ 49,90' },
      { nome: 'Copo Inox', preco: 'R$ 39,90' },
      { nome: 'Squeeze Academia', preco: 'R$ 34,90' },
      { nome: 'Caneca Térmica', preco: 'R$ 59,90' },
      { nome: 'Garrafa Infantil', preco: 'R$ 44,90' },
      { nome: 'Copo LED', preco: 'R$ 69,90' },
      { nome: 'Copo com Tampa', preco: 'R$ 29,90' },
      { nome: 'Garrafa Premium', preco: 'R$ 89,90' },
    ],

    Balanças: [
      { nome: 'Balança Digital', preco: 'R$ 89,90' },
      { nome: 'Balança Cozinha', preco: 'R$ 69,90' },
      { nome: 'Balança Corporal', preco: 'R$ 119,90' },
      { nome: 'Balança Smart', preco: 'R$ 149,90' },
      { nome: 'Mini Balança', preco: 'R$ 39,90' },
      { nome: 'Balança Precisão', preco: 'R$ 99,90' },
      { nome: 'Balança Bluetooth', preco: 'R$ 159,90' },
      { nome: 'Balança Vidro', preco: 'R$ 109,90' },
      { nome: 'Balança Fitness', preco: 'R$ 129,90' },
      { nome: 'Balança Portátil', preco: 'R$ 79,90' },
    ],

    Projetores: [
      { nome: 'Mini Projetor', preco: 'R$ 499,90' },
      { nome: 'Projetor LED', preco: 'R$ 699,90' },
      { nome: 'Projetor Full HD', preco: 'R$ 999,90' },
      { nome: 'Projetor Portátil', preco: 'R$ 849,90' },
      { nome: 'Projetor Android', preco: 'R$ 1299,90' },
      { nome: 'Projetor Wi-Fi', preco: 'R$ 1199,90' },
      { nome: 'Projetor Bluetooth', preco: 'R$ 1399,90' },
      { nome: 'Projetor Smart', preco: 'R$ 1599,90' },
      { nome: 'Projetor Cinema', preco: 'R$ 1999,90' },
      { nome: 'Projetor Compacto', preco: 'R$ 799,90' },
    ],

    'Câmeras de Segurança': [
      { nome: 'Câmera Wi-Fi', preco: 'R$ 189,90' },
      { nome: 'Câmera IP', preco: 'R$ 249,90' },
      { nome: 'Câmera Full HD', preco: 'R$ 299,90' },
      { nome: 'Câmera Noturna', preco: 'R$ 279,90' },
      { nome: 'Câmera 360', preco: 'R$ 349,90' },
      { nome: 'Câmera Externa', preco: 'R$ 399,90' },
      { nome: 'Câmera Interna', preco: 'R$ 229,90' },
      { nome: 'Kit Segurança', preco: 'R$ 899,90' },
      { nome: 'Câmera Inteligente', preco: 'R$ 459,90' },
      { nome: 'Mini Câmera', preco: 'R$ 159,90' },
    ],

    Lanternas: [
      { nome: 'Lanterna LED', preco: 'R$ 49,90' },
      { nome: 'Lanterna Tática', preco: 'R$ 89,90' },
      { nome: 'Lanterna Recarregável', preco: 'R$ 119,90' },
      { nome: 'Mini Lanterna', preco: 'R$ 29,90' },
      { nome: 'Lanterna Potente', preco: 'R$ 139,90' },
      { nome: 'Lanterna USB', preco: 'R$ 59,90' },
      { nome: 'Lanterna Camping', preco: 'R$ 79,90' },
      { nome: 'Lanterna Profissional', preco: 'R$ 169,90' },
      { nome: 'Lanterna Emergência', preco: 'R$ 64,90' },
      { nome: 'Lanterna Zoom', preco: 'R$ 99,90' },
    ],

    Videogames: [
      { nome: 'PlayStation 5', preco: 'R$ 4299,90' },
      { nome: 'Xbox Series S', preco: 'R$ 2599,90' },
      { nome: 'Nintendo Switch', preco: 'R$ 2299,90' },
      { nome: 'Controle PS5', preco: 'R$ 399,90' },
      { nome: 'Controle Xbox', preco: 'R$ 349,90' },
      { nome: 'Headset Gamer', preco: 'R$ 249,90' },
      { nome: 'Console Retrô', preco: 'R$ 199,90' },
      { nome: 'Game Stick', preco: 'R$ 179,90' },
      { nome: 'Volante Gamer', preco: 'R$ 899,90' },
      { nome: 'Cadeira Gamer', preco: 'R$ 1199,90' },
    ],

    'Carregadores Veiculares': [
      { nome: 'Carregador Veicular USB', preco: 'R$ 39,90' },
      { nome: 'Carregador Turbo Carro', preco: 'R$ 59,90' },
      { nome: 'Carregador USB-C Carro', preco: 'R$ 49,90' },
      { nome: 'Carregador iPhone Carro', preco: 'R$ 69,90' },
      { nome: 'Carregador Duplo Veicular', preco: 'R$ 54,90' },
      { nome: 'Carregador Premium Carro', preco: 'R$ 89,90' },
      { nome: 'Carregador Rápido Veicular', preco: 'R$ 74,90' },
      { nome: 'Carregador LED Carro', preco: 'R$ 44,90' },
      { nome: 'Carregador Universal Carro', preco: 'R$ 64,90' },
      { nome: 'Carregador Smart Carro', preco: 'R$ 79,90' },
    ],

    'Pilhas e Baterias': [
      { nome: 'Pilha AA', preco: 'R$ 19,90' },
      { nome: 'Pilha AAA', preco: 'R$ 17,90' },
      { nome: 'Bateria 9V', preco: 'R$ 24,90' },
      { nome: 'Pilha Recarregável', preco: 'R$ 39,90' },
      { nome: 'Carregador de Pilhas', preco: 'R$ 79,90' },
      { nome: 'Kit Pilhas', preco: 'R$ 29,90' },
      { nome: 'Bateria Lithium', preco: 'R$ 49,90' },
      { nome: 'Pilha Alcalina', preco: 'R$ 22,90' },
      { nome: 'Bateria Recarregável', preco: 'R$ 59,90' },
      { nome: 'Kit Baterias', preco: 'R$ 69,90' },
    ],

    Smartwatches: [
  { nome: 'Smartwatch Colmi', preco: 'R$ 189,90' },
  { nome: 'Smartwatch IWO', preco: 'R$ 159,90' },
  { nome: 'Smartwatch Fitness', preco: 'R$ 129,90' },
  { nome: 'Smartwatch Ultra', preco: 'R$ 249,90' },
  { nome: 'Relógio Inteligente LED', preco: 'R$ 119,90' },
  { nome: 'Smartwatch Bluetooth', preco: 'R$ 179,90' },
  { nome: 'Smartwatch Esportivo', preco: 'R$ 199,90' },
  { nome: 'Smartwatch Premium', preco: 'R$ 299,90' },
  { nome: 'Smartwatch Android', preco: 'R$ 219,90' },
  { nome: 'Smartwatch Feminino', preco: 'R$ 169,90' },
],

'Power Banks': [
  { nome: 'Power Bank 10000mAh', preco: 'R$ 119,90' },
  { nome: 'Power Bank 20000mAh', preco: 'R$ 179,90' },
  { nome: 'Mini Power Bank', preco: 'R$ 89,90' },
  { nome: 'Power Bank Turbo', preco: 'R$ 149,90' },
  { nome: 'Power Bank Premium', preco: 'R$ 199,90' },
  { nome: 'Power Bank USB-C', preco: 'R$ 159,90' },
  { nome: 'Power Bank iPhone', preco: 'R$ 169,90' },
  { nome: 'Power Bank Slim', preco: 'R$ 129,90' },
  { nome: 'Power Bank Fast Charge', preco: 'R$ 189,90' },
  { nome: 'Power Bank Compacto', preco: 'R$ 99,90' },
],

'Suportes para Celular': [
  { nome: 'Suporte Veicular', preco: 'R$ 39,90' },
  { nome: 'Suporte de Mesa', preco: 'R$ 29,90' },
  { nome: 'Suporte Articulado', preco: 'R$ 59,90' },
  { nome: 'Suporte Magnético', preco: 'R$ 49,90' },
  { nome: 'Suporte para Moto', preco: 'R$ 69,90' },
  { nome: 'Suporte Dobrável', preco: 'R$ 34,90' },
  { nome: 'Suporte Premium', preco: 'R$ 79,90' },
  { nome: 'Suporte Gamer', preco: 'R$ 44,90' },
  { nome: 'Suporte Universal', preco: 'R$ 32,90' },
  { nome: 'Suporte de Parede', preco: 'R$ 54,90' },
],

'Ring Lights': [
  { nome: 'Ring Light Pequeno', preco: 'R$ 59,90' },
  { nome: 'Ring Light Médio', preco: 'R$ 89,90' },
  { nome: 'Ring Light Grande', preco: 'R$ 129,90' },
  { nome: 'Ring Light com Tripé', preco: 'R$ 149,90' },
  { nome: 'Kit Ring Light', preco: 'R$ 179,90' },
  { nome: 'Ring Light LED', preco: 'R$ 99,90' },
  { nome: 'Ring Light USB', preco: 'R$ 69,90' },
  { nome: 'Ring Light Profissional', preco: 'R$ 219,90' },
  { nome: 'Ring Light RGB', preco: 'R$ 159,90' },
  { nome: 'Mini Ring Light', preco: 'R$ 39,90' },
],

'Teclados e Mouses': [
  { nome: 'Teclado Gamer RGB', preco: 'R$ 149,90' },
  { nome: 'Mouse Gamer', preco: 'R$ 89,90' },
  { nome: 'Kit Gamer', preco: 'R$ 229,90' },
  { nome: 'Teclado Sem Fio', preco: 'R$ 119,90' },
  { nome: 'Mouse Sem Fio', preco: 'R$ 69,90' },
  { nome: 'Teclado Mecânico', preco: 'R$ 299,90' },
  { nome: 'Mouse RGB', preco: 'R$ 99,90' },
  { nome: 'Teclado Compacto', preco: 'R$ 79,90' },
  { nome: 'Kit Teclado e Mouse', preco: 'R$ 139,90' },
  { nome: 'Mouse Pad Gamer', preco: 'R$ 49,90' },
],

'SSD e Pendrives': [
  { nome: 'SSD 240GB', preco: 'R$ 189,90' },
  { nome: 'SSD 480GB', preco: 'R$ 299,90' },
  { nome: 'SSD 1TB', preco: 'R$ 499,90' },
  { nome: 'Pendrive 32GB', preco: 'R$ 39,90' },
  { nome: 'Pendrive 64GB', preco: 'R$ 59,90' },
  { nome: 'Pendrive 128GB', preco: 'R$ 89,90' },
  { nome: 'Cartão de Memória 32GB', preco: 'R$ 44,90' },
  { nome: 'Cartão de Memória 64GB', preco: 'R$ 69,90' },
  { nome: 'SSD Gamer', preco: 'R$ 549,90' },
  { nome: 'SSD Externo', preco: 'R$ 399,90' },
],

'Roteadores e Wi-Fi': [
  { nome: 'Roteador Dual Band', preco: 'R$ 249,90' },
  { nome: 'Repetidor Wi-Fi', preco: 'R$ 119,90' },
  { nome: 'Roteador Gamer', preco: 'R$ 499,90' },
  { nome: 'Mesh Wi-Fi', preco: 'R$ 699,90' },
  { nome: 'Roteador Compacto', preco: 'R$ 159,90' },
  { nome: 'Roteador Premium', preco: 'R$ 399,90' },
  { nome: 'Wi-Fi Extensor', preco: 'R$ 139,90' },
  { nome: 'Roteador 5G', preco: 'R$ 349,90' },
  { nome: 'Roteador Inteligente', preco: 'R$ 459,90' },
  { nome: 'Kit Wi-Fi', preco: 'R$ 599,90' },
],

'Mini Impressoras': [
  { nome: 'Mini Impressora Bluetooth', preco: 'R$ 249,90' },
  { nome: 'Mini Impressora Térmica', preco: 'R$ 299,90' },
  { nome: 'Impressora Portátil', preco: 'R$ 349,90' },
  { nome: 'Impressora Etiqueta', preco: 'R$ 279,90' },
  { nome: 'Mini Impressora LED', preco: 'R$ 319,90' },
  { nome: 'Impressora Smart', preco: 'R$ 399,90' },
  { nome: 'Impressora Compacta', preco: 'R$ 229,90' },
  { nome: 'Mini Printer USB', preco: 'R$ 259,90' },
  { nome: 'Impressora Wireless', preco: 'R$ 429,90' },
  { nome: 'Mini Impressora Premium', preco: 'R$ 499,90' },
],

'Aspiradores Portáteis': [
  { nome: 'Aspirador Portátil USB', preco: 'R$ 119,90' },
  { nome: 'Mini Aspirador', preco: 'R$ 89,90' },
  { nome: 'Aspirador Veicular', preco: 'R$ 149,90' },
  { nome: 'Aspirador Recarregável', preco: 'R$ 179,90' },
  { nome: 'Aspirador Turbo', preco: 'R$ 199,90' },
  { nome: 'Aspirador Compacto', preco: 'R$ 99,90' },
  { nome: 'Aspirador Premium', preco: 'R$ 249,90' },
  { nome: 'Aspirador Sem Fio', preco: 'R$ 219,90' },
  { nome: 'Aspirador Multiuso', preco: 'R$ 269,90' },
  { nome: 'Aspirador Gamer', preco: 'R$ 159,90' },
],

'LEDs e Decoração Gamer': [
  { nome: 'Fita LED RGB', preco: 'R$ 59,90' },
  { nome: 'LED Gamer', preco: 'R$ 89,90' },
  { nome: 'Luminária RGB', preco: 'R$ 119,90' },
  { nome: 'Painel LED', preco: 'R$ 149,90' },
  { nome: 'LED USB', preco: 'R$ 39,90' },
  { nome: 'Luz Ambiente Gamer', preco: 'R$ 99,90' },
  { nome: 'Kit LED RGB', preco: 'R$ 179,90' },
  { nome: 'LED Bluetooth', preco: 'R$ 129,90' },
  { nome: 'LED Inteligente', preco: 'R$ 199,90' },
  { nome: 'LED Decorativo', preco: 'R$ 79,90' },
],
  }

  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState('Cabos de Carregador')

  const [pesquisa, setPesquisa] = useState('')

  function normalizarTexto(texto) {
    return texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  }

  const todosProdutos = useMemo(() => {
    return Object.entries(categorias).flatMap(
      ([categoria, produtos]) =>
        produtos.map((produto) => ({
          ...produto,
          categoria,
        }))
    )
  }, [])

  const produtosExibidos = pesquisa
    ? todosProdutos.filter((produto) =>
        normalizarTexto(produto.nome).includes(
          normalizarTexto(pesquisa)
        )
      )
    : categorias[categoriaSelecionada]

  return (
    <div>
      <header className="header">
        <div>
          <h1>JF Tech</h1>
        </div>

        <div className="avisos">
          <p>
            Todos os pedidos feitos antes das
            11h chegam na cidade no mesmo dia.
            Entrega a combinar via WhatsApp.
          </p>

          <p>
            Garantia de 3 meses. Trocas a
            combinar via WhatsApp.
          </p>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <h2>Produtos</h2>

          {Object.keys(categorias).map((categoria) => (
            <button
              key={categoria}
              onClick={() => {
                setCategoriaSelecionada(categoria)
                setPesquisa('')
              }}
            >
              {categoria}
            </button>
          ))}
        </aside>

        <main className="conteudo">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="pesquisa"
            value={pesquisa}
            onChange={(e) =>
              setPesquisa(e.target.value)
            }
          />

          <h2>
            {pesquisa
              ? 'Resultados da pesquisa'
              : categoriaSelecionada}
          </h2>

          <div className="lista-produtos">
            {produtosExibidos.map(
              (produto, index) => (
                <div
                  className="card-produto"
                  key={index}
                >
                  <div className="imagem-produto"></div>

                  <h3>{produto.nome}</h3>

                  <p>{produto.preco}</p>

                  {produto.categoria && (
                    <span className="categoria-tag">
                      {produto.categoria}
                    </span>
                  )}

                  <a
                    href={`https://wa.me/${whatsapp}?text=Olá,%20tenho%20interesse%20no%20produto:%20${produto.nome}`}
                    target="_blank"
                  >
                    <button>
                      Consultar disponibilidade
                    </button>
                  </a>
                </div>
              )
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App