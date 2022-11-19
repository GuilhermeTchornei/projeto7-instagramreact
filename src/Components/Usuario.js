import React, { useState } from "react";

function User(props) {
    return (
        <div className="usuario" data-test="user">
            <img src={props.imagem} onClick={props.alteraImagem} data-test="profile-image" />
            <div className="texto">
                <strong>{props.nome}</strong>
                <span data-test="name">
                    {props.apelido}
                    <ion-icon name="pencil" onClick={props.alteraApelido} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    );
}


export default function Usuario() {
    const nome = "catanacomics";
    const [imagem, setImagem] = useState("assets/img/catanacomics.svg");
    const [apelido, setApelido] = useState("Catana");

    function alteraImagem() {
        const url = prompt("Qual a URL da nova imagem?");
        setImagem(!url ? imagem : url);
    }

    function alteraApelido() {
        const novoApelido = prompt("Qual o novo apelido?");
        setApelido(!novoApelido ? apelido : novoApelido);
    }

    return (
        <User key={nome} imagem={imagem} nome={nome} apelido={apelido} alteraApelido={alteraApelido} alteraImagem={alteraImagem} />
    );
}