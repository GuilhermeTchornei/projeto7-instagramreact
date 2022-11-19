import { useState } from "react";

function Post(props) {
    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.usuario.imagem} />
                    {props.usuario.nome}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.imagem} onClick={props.curtido ? null:props.curtePost } data-test="post-image" />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={props.curtido ? "heart" : "heart-outline"} class={props.curtido ? "vermelho" : ""} onClick={props.curtePost} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={props.salvo ? "bookmark":"bookmark-outline"} onClick={props.salvaPost} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src="assets/img/adorable_animals.svg" />
                    <div className="texto">
                        Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras <span data-test="likes-number">{props.curtidas.toLocaleString('pt-br')}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default function Posts() {
    const [posts, setPosts] = useState([
        {
            usuario:
            {
                imagem: "assets/img/meowed.svg",
                nome: "meowed"
            },
            imagem: "assets/img/gato-telefone.svg",
            curtidoPor: "respondeai",
            curtidas: 101523,
            curtido: false,
            salvo: false
        },
        {
            usuario:
            {
                imagem: "assets/img/barked.svg",
                nome: "barked"
            },
            imagem: "assets/img/dog.svg",
            curtidoPor: "adorable_animals",
            curtidas: 99159,
            curtido: false,
            salvo: false
        }]);

    function salvaPost(index) {
        setPosts(posts.map((post, id) => {
            if (id === index) post.salvo = !post.salvo;
            return post;
        }));
    }

    function curtePost(index) {
        setPosts(posts.map((post, id) => {
            if (id === index)
            {
                post.curtido = !post.curtido;
                post.curtidas += post.curtido ? 1 : -1;
            }
            return post;
        }))
    }

    return (
        <div className="posts">
            {posts.map((p, index) =>
                <Post key={index}
                    usuario={p.usuario}
                    imagem={p.imagem}
                    curtidoPor={p.curtidoPor} curtidas={p.curtidas} curtePost={() => curtePost(index)} curtido={p.curtido}
                    salvo={p.salvo} salvaPost={() => salvaPost(index)} />)}
        </div>
    );
}