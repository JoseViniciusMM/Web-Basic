function cep(v) {
    // Removendo os caracteres que não forem números
    v.value = v.value.replace(/\D/g, "");
    // Adicionandoohífen na6posição
    v.value = v.value.replace(/^(\d{5})(\d)/, "$1-$2");
}
function camposPreenchidos(form) {
    if (form.cep.value != "" && form.cep.value.length == 9) {
        return true;
    }
    return false;
}