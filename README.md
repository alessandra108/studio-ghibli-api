# 🎥 **Studio Ghibli API** 🌟

---

## 📖 **Introdução**

Neste projeto, desenvolvi uma aplicação utilizando **React** que consome a **API pública do Studio Ghibli**. O objetivo foi exibir uma lista de filmes em formato de **cards**, trazendo algumas informações importantes de cada um, como:

- Título do filme
- Imagem (como se fosse um pôster)
- Diretor
- Produtor
- Ano de lançamento
- Uma breve descrição

Tudo isso foi feito para proporcionar uma visualização dinâmica e interativa dos filmes do Studio Ghibli!

---

## 🛠️ **Tecnologias Utilizadas**

- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **Axios**: Biblioteca para realizar requisições HTTP à API.
- **CSS**: Utilizado para estilização dos componentes.
- **API do Studio Ghibli**: [Acesse a API aqui](https://ghibliapi.vercel.app) - Fornece dados sobre os filmes do Studio Ghibli.

---

## 🗂️ **Estrutura do Projeto**

Organizei o projeto de maneira modular, separando os componentes e estilos em pastas específicas para manter a estrutura clara e eficiente:

```plaintext
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   └── Card/
│       ├── Card.jsx
│       └── Card.css
├── App.jsx
└── App.css
```

Header: Componente responsável pelo cabeçalho da aplicação.

Card: Componente que exibe as informações de cada filme.

App.jsx: Componente principal da aplicação.

App.css: Estilos gerais da aplicação.

## **🚀 Como Funciona**
🎬 Requisição dos Filmes
Ao carregar o app, faço uma requisição GET à API do Studio Ghibli usando o hook useEffect do React com a biblioteca Axios. A URL utilizada para obter os filmes é:

```plaintext
https://ghibliapi.vercel.app/films
```
A API retorna uma lista de filmes, e cada filme é um objeto com várias propriedades como:

id: Identificador único do filme

title: Título do filme

description: Descrição do filme

image: Imagem do filme (pôster)

director: Nome do diretor

producer: Nome do produtor

release_date: Ano de lançamento

## **🖼️ Exibindo os Dados**
A lista de filmes é armazenada no estado da aplicação usando o hook useState. Em seguida, utilizamos o método .map() para percorrer os filmes e renderizar um componente Card para cada um deles.

Cada Card exibe as seguintes informações:

🎥 Título do filme

🖼️ Imagem (pôster)

🎬 Diretor

🎩 Produtor

📅 Ano de lançamento

📝 Descrição

Essas informações são dispostas de maneira clara e visualmente atraente dentro de um card estilizado com CSS.

## **🎨 Estilização**
A estilização foi feita de forma modular para garantir clareza e manutenção fácil:

App.css: Estilos gerais da página.

Header.css: Estilos do cabeçalho.

Card.css: Estilos dos cards de filmes.

Além disso, ajustei o tamanho das imagens para que ficassem em formato retrato, semelhantes a cartazes de filmes, o que contribui para uma experiência visual mais imersiva.

## **🏁 Como Rodar o Projeto**
Clone este repositório:

```plaintext
git clone https://github.com/alessandra108/studio-ghibli-api.git
Entre no diretório do projeto:
```

```plaintext
cd studio-ghibli-api
Instale as dependências:
```

```plaintext
npm install
Inicie o servidor de desenvolvimento:
```

```plaintext
npm start
```

A aplicação estará pronta para vizualização 🚀.
