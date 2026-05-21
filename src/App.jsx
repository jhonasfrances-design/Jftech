import { useMemo, useState } from 'react'

function App() {
  const whatsapp = '5532999315501'

  const categorias = {
    'Carregadores': [
      { nome: 'Carregador V8 Turbo', preco: 'R$ 25,00' },
      { nome: 'Carregador Tipo C Turbo', preco: 'R$ 35,00' },
      { nome: 'Carregador Tipo C Turbo 33w', preco: 'R$ 40,00' },
      { nome: 'Carregador iphone Lightning (5 ao 14)', preco: 'R$25,00' },
      { nome: 'Carregador iphone', preco: 'R$ 35,00' },
      { nome: 'Carregador Tipo C 33w', preco: 'R$ 45,00' },
    ],

    'Cabos de Carregador': [
      { nome: 'Cabo USB-C Turbo', preco: 'R$ 15,00' },
      { nome: 'Cabo USB Lightning ', preco: 'R$ 15,00' },
      { nome: 'Cabo V8 ', preco: 'R$ 15,00' },
      { nome: 'Cabo USB-C / Lightning', preco: 'R$ 20,00' },
      { nome: 'Cabo USB-C / USB-C', preco: 'R$ 20,00' },
      { nome: 'Cabo MD-12785', preco: 'R$ 40,00' },
    ],

    'Fonte de Carregador': [
      { nome: 'Fonte USB-C/ USB-C', preco: 'R$ 40,00' },
      { nome: 'Fonte USB 3.1A', preco: 'R$ 15,00' },
      { nome: 'Fonte USB/ USB-C', preco: 'R$ 15,00' },
    ],

    'Cabos Variados': [
      { nome: 'Cabo P2/P2', preco: 'R$ 10,00' },
    ],

    'Fones de Ouvido': [
      { nome: 'Fone USB-C/Lighniting', preco: 'R$ 30,00' },
      { nome: 'Fone P2 H´Maston', preco: 'R$ 20,00' },
      { nome: 'Fone P2 Kapbom', preco: 'R$ 15,00' },
      { nome: 'Fone P2 a´Gold', preco: 'R$ 20,00' },
      { nome: 'Fone P2 Lelong', preco: 'R$ 25,00' },
     
    ],

    'Fones Bluetooth': [
      { nome: 'Fone Rs21', preco: 'R$ 100,00' },
      { nome: 'Fone Redmi AirDotspro', preco: 'R$ 35,00' },
      { nome: 'fone M10', preco: 'R$ 40,00' },
      { nome: 'fone Nfb-103', preco: 'R$ 60,00' },
      { nome: 'fone JB950', preco: 'R$ 70,00' },
      { nome: 'fone Rs30 Gamer', preco: 'R$ 90,00' },
      
    ],

    'Caixas de Som': [
      { nome: 'AL-8381 Ltomex', preco: 'R$ 100,00' },
      { nome: 'Caixa AL-3629', preco: 'R$ 200,00' },
      { nome: 'Mini 10w', preco: 'R$ 25,00' },
      { nome: 'Caixa AL-652', preco: 'R$ 80,00' },
      { nome: 'Rádio Retrô', preco: 'R$ 150,00' },
      { nome: 'Caixa PC', preco: 'R$ 40,00' },
      
    ],

    'TVs': [{ nome: 'UniTv', preco: 'R$ 420,00' },
          { nome: 'UniTv', preco: 'R$ 420,00' }
    ],

    'Copos e Garrafas': [
      { nome: 'Copo Stanley', preco: 'R$ 45,00' },
      
    ],

    'Balanças': [
      { nome: 'Balança Digital Cozinha 10kg', preco: 'R$ 45,00' },
     
    ],

    'Projetores': [
      { nome: 'Mini Projetor', preco: 'R$ 250,00' },
      
    ],

    'Câmeras de Segurança': [
      { nome: 'Câmera Wi-Fi Inova', preco: 'R$ 250,00' },
      { nome: 'Câmera Wi-Fi Inova MD-5703', preco: 'R$ 90,00' },
      { nome: 'Câmera Wi-Fi KAPBOM Bocal', preco: 'R$ 90,00' },
      
    ],

    'Lanternas': [
      { nome: 'Lanterna LED KV-564', preco: 'R$ 80,00' },
      
    ],

    'Videogames': [
      { nome: 'Pistola Sabão', preco: 'R$ 40,00' },
      { nome: 'Game Retrô', preco: 'R$ 150,00' },
      
    ],

    'Carregadores Veiculares': [
      { nome: 'Carregador Veicular USB/USB-C LE-531', preco: 'R$ 25,00' },
      
    ],

    'Pilhas e Baterias': [
      { nome: 'Carregador de pilha A612', preco: 'R$ 45,00' },
      { nome: 'Pilha AAA Recarregavel 4 un', preco: 'R$ 35,00' },
      { nome: 'Pilha AA Recarregalvel 4 un', preco: 'R$ 35,00' },
     
    ],

    'Smartwatches': [
  { nome: 'Smartwatch Bazik com 7 pulseiras', preco: 'R$ 180,00' },
  
],

'Power Banks': [
  { nome: 'Power Bank 10000mAh', preco: 'R$ 80,00' },
  { nome: 'Power Bank 20000mAh', preco: 'R$ 120,00' },
  
],

'Suportes para Celular': [
  { nome: 'Suporte Veicular', preco: 'R$ 25,00' },
  { nome: 'Suporte de Mesa', preco: 'R$ 15,00' },
  
],



'Teclados e Mouses': [
  { nome: 'Mouse Inova KV-9813 S/FIO', preco: 'R$ 30,00' },
  
],

'LEDs e Decoração Gamer': [
  { nome: 'Fita LED RGB 3M MD-12795', preco: 'R$ 35,00' },
  
],

'Antena Digital': [
  { nome: 'Antena Interna ', preco: 'R$ 35,00' },
  { nome: 'Antena Interna/Externa ', preco: 'R$ 40,00' },
  
],

'Campainha': [
  { nome: 'Campainha Lukton ', preco: 'R$ 45,00' },
  
  
],

'Microfone ': [
  { nome: 'Microfone sem fio MK-12 ', preco: 'R$ 60,00' },
  
  
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