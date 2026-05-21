import { useMemo, useState } from "react";

function App() {
  const whatsapp = "5532999315501";

  const categorias = {
    Carregadores: [
      {
        nome: "Carregador V8 Turbo",
        preco: "R$ 25,00",
        imagem: "/images/carregadores/carregador-v8-turbo.jpg",
      },

      {
        nome: "Carregador Tipo C Turbo",
        preco: "R$ 35,00",
        imagem: "/images/carregadores/carregador-tipo-c-turbo.jpg",
      },

      {
        nome: "Carregador Tipo C Turbo 33w",
        preco: "R$ 40,00",
        imagem: "/images/carregadores/carregador-tipo-c-33w.jpg",
      },

      {
        nome: "Carregador iphone Lightning (5 ao 14)",
        preco: "R$ 25,00",
        imagem: "/images/carregadores/carregador-iphone-lightning.jpg",
      },

      {
        nome: "Carregador iphone",
        preco: "R$ 35,00",
        imagem: "/images/carregadores/carregador-iphone.jpg",
      },

      {
        nome: "Carregador Tipo C 33w",
        preco: "R$ 45,00",
        imagem: "/images/carregadores/carregador-tipo-c-33w-2.jpg",
      },
    ],

    "Cabos de Carregador": [
      {
        nome: "Cabo USB-C Turbo",
        preco: "R$ 15,00",
        imagem: "/images/cabos-carregador/cabo-usbc-turbo.jpg",
      },

      {
        nome: "Cabo USB Lightning",
        preco: "R$ 15,00",
        imagem: "/images/cabos-carregador/cabo-lightning.jpg",
      },

      {
        nome: "Cabo V8",
        preco: "R$ 15,00",
        imagem: "/images/cabos-carregador/cabo-v8.jpg",
      },

      {
        nome: "Cabo USB-C / Lightning",
        preco: "R$ 20,00",
        imagem: "/images/cabos-carregador/cabo-usbc-lightning.jpg",
      },

      {
        nome: "Cabo USB-C / USB-C",
        preco: "R$ 20,00",
        imagem: "/images/cabos-carregador/cabo-usbc-usbc.jpg",
      },

      {
        nome: "Cabo MD-12785",
        preco: "R$ 40,00",
        imagem: "/images/cabos-carregador/cabo-md-12785.jpg",
      },
    ],
    "Fonte de Carregador": [
      {
        nome: "Fonte USB-C/ USB-C",
        preco: "R$ 40,00",
        imagem: "/images/fontes-carregador/fonte-usbc-usbc.jpg",
      },

      {
        nome: "Fonte USB 3.1A",
        preco: "R$ 15,00",
        imagem: "/images/fontes-carregador/fonte-usb-31a.jpg",
      },

      {
        nome: "Fonte USB/ USB-C",
        preco: "R$ 15,00",
        imagem: "/images/fontes-carregador/fonte-usb-usbc.jpg",
      },
    ],

    "Cabos Variados": [
      {
        nome: "Cabo P2/P2",
        preco: "R$ 10,00",
        imagem: "/images/cabos-variados/cabo-p2-p2.jpg",
      },
    ],
    "Fones de Ouvido": [
      {
        nome: "Fone USB-C/Lighniting",
        preco: "R$ 30,00",
        imagem: "/images/fones-ouvido/fone-usbc-lightning.jpg",
      },

      {
        nome: "Fone P2 H´Maston",
        preco: "R$ 20,00",
        imagem: "/images/fones-ouvido/fone-p2-hmaston.jpg",
      },

      {
        nome: "Fone P2 Kapbom",
        preco: "R$ 15,00",
        imagem: "/images/fones-ouvido/fone-p2-kapbom.jpg",
      },

      {
        nome: "Fone P2 a´Gold",
        preco: "R$ 20,00",
        imagem: "/images/fones-ouvido/fone-p2-agold.jpg",
      },

      {
        nome: "Fone P2 Lelong",
        preco: "R$ 25,00",
        imagem: "/images/fones-ouvido/fone-p2-lelong.jpg",
      },
    ],

    "Fones Bluetooth": [
      {
        nome: "Fone Rs21",
        preco: "R$ 100,00",
        imagem: "/images/fones-bluetooth/fone-rs21.jpg",
      },

      {
        nome: "Fone Redmi AirDotspro",
        preco: "R$ 35,00",
        imagem: "/images/fones-bluetooth/fone-redmi-airdotspro.jpg",
      },

      {
        nome: "fone M10",
        preco: "R$ 40,00",
        imagem: "/images/fones-bluetooth/fone-m10.jpg",
      },

      {
        nome: "fone Nfb-103",
        preco: "R$ 60,00",
        imagem: "/images/fones-bluetooth/fone-nfb-103.jpg",
      },

      {
        nome: "fone JB950",
        preco: "R$ 70,00",
        imagem: "/images/fones-bluetooth/fone-jb950.jpg",
      },

      {
        nome: "fone Rs30 Gamer",
        preco: "R$ 90,00",
        imagem: "/images/fones-bluetooth/fone-rs30-gamer.jpg",
      },
    ],

    "Caixas de Som": [
      {
        nome: "AL-8381 Ltomex",
        preco: "R$ 100,00",
        imagem: "/images/caixas-de-som/al-8381-ltomex.jpg",
      },

      {
        nome: "Caixa AL-3629",
        preco: "R$ 200,00",
        imagem: "/images/caixas-de-som/caixa-al-3629.jpg",
      },

      {
        nome: "Mini 10w",
        preco: "R$ 25,00",
        imagem: "/images/caixas-de-som/mini-10w.jpg",
      },

      {
        nome: "Caixa AL-652",
        preco: "R$ 80,00",
        imagem: "/images/caixas-de-som/caixa-al-652.jpg",
      },

      {
        nome: "Rádio Retrô",
        preco: "R$ 150,00",
        imagem: "/images/caixas-de-som/radio-retro.jpg",
      },

      {
        nome: "Caixa PC",
        preco: "R$ 40,00",
        imagem: "/images/caixas-de-som/caixa-pc.jpg",
      },
    ],

    TVs: [
      {
        nome: "UniTv",
        preco: "R$ 420,00",
        imagem: "/images/tvs/unitv.jpg",
      },

      {
        nome: "controle",
        preco: "R$ 18,00",
        imagem: "/images/tvs/controle.jpg",
      },
    ],

    "Copos e Garrafas": [
      {
        nome: "Copo Stanley",
        preco: "R$ 45,00",
        imagem: "/images/copos-garrafas/copo-stanley.jpg",
      },
    ],
    Balanças: [
      {
        nome: "Balança Digital Cozinha 10kg",
        preco: "R$ 45,00",
        imagem: "/images/balancas/balanca-digital-10kg.jpg",
      },
    ],

    Projetores: [
      {
        nome: "Mini Projetor",
        preco: "R$ 250,00",
        imagem: "/images/projetores/mini-projetor.jpg",
      },
    ],

    "Câmeras de Segurança": [
      {
        nome: "Câmera Wi-Fi Inova",
        preco: "R$ 250,00",
        imagem: "/images/cameras-seguranca/camera-wifi-inova.jpg",
      },

      {
        nome: "Câmera Wi-Fi Inova MD-5703",
        preco: "R$ 90,00",
        imagem: "/images/cameras-seguranca/camera-inova-md5703.jpg",
      },

      {
        nome: "Câmera Wi-Fi KAPBOM Bocal",
        preco: "R$ 90,00",
        imagem: "/images/cameras-seguranca/camera-kapbom-bocal.jpg",
      },
    ],

    Lanternas: [
      {
        nome: "Lanterna LED KV-564",
        preco: "R$ 80,00",
        imagem: "/images/lanternas/lanterna-kv564.jpg",
      },
    ],

    Videogames: [
      {
        nome: "Pistola Sabão",
        preco: "R$ 40,00",
        imagem: "/images/videogames/pistola-sabao.jpg",
      },

      {
        nome: "Game Retrô",
        preco: "R$ 150,00",
        imagem: "/images/videogames/game-retro.jpg",
      },
    ],
    "Carregadores Veiculares": [
      {
        nome: "Carregador Veicular USB/USB-C LE-531",
        preco: "R$ 25,00",
        imagem: "/images/carregadores-veiculares/carregador-veicular-le531.jpg",
      },
    ],

    "Pilhas e Baterias": [
      {
        nome: "Carregador de pilha A612",
        preco: "R$ 45,00",
        imagem: "/images/pilhas-baterias/carregador-pilha-a612.jpg",
      },

      {
        nome: "Pilha AAA Recarregavel 4 un",
        preco: "R$ 35,00",
        imagem: "/images/pilhas-baterias/pilha-aaa-4un.jpg",
      },

      {
        nome: "Pilha AA Recarregalvel 4 un",
        preco: "R$ 35,00",
        imagem: "/images/pilhas-baterias/pilha-aa-4un.jpg",
      },
    ],

    Smartwatches: [
      {
        nome: "Smartwatch Bazik com 7 pulseiras",
        preco: "R$ 180,00",
        imagem: "/images/smartwatches/smartwatch-bazik.jpg",
      },
    ],

    "Power Banks": [
      {
        nome: "Power Bank 10000mAh",
        preco: "R$ 80,00",
        imagem: "/images/powerbanks/powerbank-10000mah.jpg",
      },

      {
        nome: "Power Bank 20000mAh",
        preco: "R$ 120,00",
        imagem: "/images/powerbanks/powerbank-20000mah.jpg",
      },
    ],

    "Suportes para Celular": [
      {
        nome: "Suporte Veicular",
        preco: "R$ 25,00",
        imagem: "/images/suportes-celular/suporte-veicular.jpg",
      },

      {
        nome: "Suporte de Mesa",
        preco: "R$ 15,00",
        imagem: "/images/suportes-celular/suporte-mesa.jpg",
      },
    ],

    "Teclados e Mouses": [
      {
        nome: "Mouse Inova KV-9813 S/FIO",
        preco: "R$ 30,00",
        imagem: "/images/teclados-mouses/mouse-inova-kv9813.jpg",
      },
    ],

    "LEDs e Decoração Gamer": [
      {
        nome: "Fita LED RGB 3M MD-12795",
        preco: "R$ 35,00",
        imagem: "/images/leds-gamer/fita-led-rgb.jpg",
      },
    ],

    "Antena Digital": [
      {
        nome: "Antena Interna",
        preco: "R$ 35,00",
        imagem: "/images/antena-digital/antena-interna.jpg",
      },

      {
        nome: "Antena Interna/Externa",
        preco: "R$ 40,00",
        imagem: "/images/antena-digital/antena-interna-externa.jpg",
      },
    ],

    Campainha: [
      {
        nome: "Campainha Lukton",
        preco: "R$ 45,00",
        imagem: "/images/campainha/campainha-lukton.jpg",
      },
    ],

    Microfone: [
      {
        nome: "Microfone sem fio MK-12",
        preco: "R$ 60,00",
        imagem: "/images/microfone/microfone-mk12.jpg",
      },
    ],
  };

  const [categoriaSelecionada, setCategoriaSelecionada] = useState(
    "Cabos de Carregador",
  );

  const [pesquisa, setPesquisa] = useState("");

  function normalizarTexto(texto) {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  const todosProdutos = useMemo(() => {
    return Object.entries(categorias).flatMap(([categoria, produtos]) =>
      produtos.map((produto) => ({
        ...produto,
        categoria,
      })),
    );
  }, []);

  const produtosExibidos = pesquisa
    ? todosProdutos.filter((produto) =>
        normalizarTexto(produto.nome).includes(normalizarTexto(pesquisa)),
      )
    : categorias[categoriaSelecionada];

  return (
    <div>
      <header className="header">
        <div>
          <h1 className="logo">JF Tech</h1>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <h2>Produtos</h2>

          {Object.keys(categorias).map((categoria) => (
            <button
              key={categoria}
              onClick={() => {
                setCategoriaSelecionada(categoria);
                setPesquisa("");

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
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
            onChange={(e) => setPesquisa(e.target.value)}
          />

          <h2>{pesquisa ? "Resultados da pesquisa" : categoriaSelecionada}</h2>

          <div className="lista-produtos">
            {produtosExibidos.map((produto, index) => (
              <div className="card-produto" key={index}>
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="imagem-produto"
                />

                <h3>{produto.nome}</h3>

                <p>{produto.preco}</p>

                {produto.categoria && (
                  <span className="categoria-tag">{produto.categoria}</span>
                )}

                <a
                  href={`https://wa.me/${whatsapp}?text=Olá,%20tenho%20interesse%20no%20produto:%20${produto.nome}`}
                  target="_blank"
                >
                  <button>Consultar disponibilidade</button>
                </a>
              </div>
            ))}
          </div>
        </main>
      </div>

      <button
        className="botao-topo"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        ↑
      </button>
    </div>
  );
}

export default App;
