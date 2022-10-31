function telefone(v) {

    v.value=v.value.replace(/\D/g,"");

    //Adicona parênteses no DDD

    v.value=v.value.replace(/^(\d\d)(\d)/g,"($1) $2");

    //Adicona hífen no número do telefone

    v.value=v.value.replace(/(\d{4})(\d)/,"$1-$2");
    
}

