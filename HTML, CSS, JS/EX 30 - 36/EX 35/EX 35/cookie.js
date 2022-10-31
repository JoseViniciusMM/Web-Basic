function setcookie(nome, valor, expira){
    dia= new Date();
    dia.setdate(dia.getdate() + expira);
    var valor = escape(valor) + ((expira==null) ? "": "; expires=" + dia.toutcstring());
    document.cookie = nome + "=" + valor;
}
function getcookie(nome){
    var cookies = document.cookie;
    var inicio = cookies.indexOf("" + nome + "=");
    if(inicio == -1){
        inicio = cookies.indexOf(nome + "=");
    }
    if (inicio == -1){
        cookies = null;
    }
    else {
        inicio = cookies.indexOf("=", inicio) + 1;
        var fim = cookies.indexOf(";", inicio);
        if(fim == -1){
            fim = cookies.length;
        }
        cookies = unescape(cookies.substring(inicio,fim));
    }
    return cookies;
}