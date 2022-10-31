function cpf(v) {

    v.value = v.value.replace(/\D/g, "");

    //Adiciona ponto após os três primeiros números

    v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");

    //Adiciona ponto após os seis primeiros números

    v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");

    //Adiciona o hífen antes dos últimos 2 caracteres
    
    v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

