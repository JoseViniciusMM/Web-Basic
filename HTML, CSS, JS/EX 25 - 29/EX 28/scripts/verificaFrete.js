function verificaFrete(cep1, cep2)
   {
      if((cep1.value.match(/^[0-9]+$/)) && (cep2.value.match(/^[0-9]+$/)))
      {
      alert('CEP verificado!');
      return true;
      }
      else
      {
      alert('CEP inválido!');
      return false;
      }
   } 
   
   function verificaInteiro(quantidade1, quantidade2)
   {
      if(quantidade1.value == "")
      {
         quantidade1.value = 0;
      }
      if(quantidade2.value == "")
      {
         quantidade2.value = 0;
      }

      if ((quantidade1.value.match(/^[0-9]+$/)) && (quantidade2.value.match(/^[0-9]+$/)))
      {
         if(quantidade1.value == 0){
            quantidade1.value = "";
         }
         if(quantidade2.value == 0){
            quantidade2.value = "";
         }
         return true;
      }
      else
      {
         alert('Quantidade Inválida!');
         quantidade1.value = "";
         quantidade2.value = "";
         return false;
      }
   }