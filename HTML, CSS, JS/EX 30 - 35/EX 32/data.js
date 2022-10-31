function data(v) {

    v.value=v.value.replace(/\D/g,"");

    //Adicona a barra entre o dia e o mês

    v.value=v.value.replace(/^(\d{2})(\d)/,"$1/$2");

    //Adicona a barra entre o mês e o ano

    v.value=v.value.replace(/(\d{2})(\d)/,"$1/$2");
    
}
