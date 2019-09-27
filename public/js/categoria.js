function eliminarCategoria(idForm, destino) {
            
            confirma = confirm("Deseja eliminar a categoria");

if(confirma)
{
            
            dadosForm = $('#'+idForm).serialize();
            
            $.ajax({
                
            method: 'post',
            url: destino,
            data: dadosForm,
            dataType: 'html',
            success: function (data) {
                //Ação de sucesso
                if (data == 'true') {
                    $('#linha'+idForm).remove();
                } else {
                    alert('Não foi possível eliminar a categoria!');
                }
            },
            error: function (argument) {
                alert('Erro ao eliminar categoria!');
            }
            
            });
            
        }
            
            return false;
        }
        
        //JS guarda estados das variaveis
        var situacao = false;
        
        function mostrarEsconderTitulo(){
            $('#titulo').slideToggle(1000);
        }
        
        /**
         * rotina para add categorias
         */
        
        function AdicionarCategoria(destino){
           
            
            dadosForm = $('#formAdd').serialize();
            nomcat = $('#nomcat').val();
            
            //Travar botão adicionar
            $('#btnSalvar').attr('disable', 'true');
            
            if(nomcat.trim() !=""){
            
            $.ajax({
                
            method: 'post',
            url: destino,
            data: dadosForm,
            dataType: 'html',
            success: function (data) {
              if(data == "true"){
                  msg = 'Categoria adicionada com sucesso!';
                  $('#status').hide();
                  $('#status').html('<h2 class="sucesso">'+msg+'</h2>');
                  $('#status').fadeIn(800);
                   
                  //history.back();
                  //redirecionando o usuario
                  //location.href='https://google.com';
                  
                  $('#nomcat').val('');
                  $('#nomcat').focus();
                  
                  //Destrava o botão
                  $('#btnSalvar').removeAttr('disabled');
                  
                  
                  
              }else{
                  alert('Falha ao adicionar categoria!');
              }
            },
            error: function (argument) {
                alert('Erro ao eliminar categoria!');
                msg = 'Erro ao eliminar categoria!';
                  $('#status').hide();
                  $('#status').html('<h2 class="erro">'+msg+'</h2>');
                  $('#status').fadeIn(800);
                   
            }
            
            });
         
            }else{
                msg = 'Preencha todos os campos!';
                  $('#status').hide();
                  $('#status').html('<h2 class="erro">'+msg+'</h2>');
                  $('#status').fadeIn(800);
                   
                
                //Destrava o botão
                  $('#btnSalvar').removeAttr('disabled');
            }
            return false; 
        }
        
        function editarCategoria(destino) {


    dadosForm = $('#formEdit').serialize();
    nomcat = $('#nomcat').val();
    $('#btnEditar').attr('disabled', 'true');

        $.ajax({

            method: 'post',
            url: destino,
            data: dadosForm,
            dataType: 'html',
            success: function (data) {
                if (data == 'true') {
                    
                    msg = 'Categoria editada com sucesso!'
                    $('#status').hide();
                    $('#status').html('<h4 class="sucesso">'+msg+'</h4>');
                    $('#status').fadeIn(800);
                    
                    $('#nomcat').val('');
                    $('#nomcat').focus();
                    
                    $('#btnEditar').removeAttr('disabled', 'true');
                    //$('#caixa-status').addClass('sucesso');
                    //$('#caixa-status').fadeIn(300);
                   
                } else {
                    msg = 'Erro a editar categoria!'
                    $('#status').hide();
                    $('#status').html('<h4>'+msg+'</h4>');
                    $('#status').fadeIn(800);
                    //$('#caixa-status').addClass('falha').fadeIn(800);
                }

            },
            error: function (argument) {
                msg = 'Erro a editar categoria!'
                    $('#status').hide();
                    $('#status').html('<h4 class"erro">'+msg+'</h4>');
                    $('#status').fadeIn(800);
                    //$('#caixa-status').addClass('falha');
            }
        });
    $('#btnEditar').attr('disabled', 'true');
    return false;
}
          
          
        

