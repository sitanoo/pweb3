<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    </head>
    <body>
        
        <form action="{{route('produto.store')}}" method="post">
            @csrf
            
            <label for="nompro">Nome do produto</label><br/>
            <input type="text" name="nompro" id="nompro"/><br/><br/>
            <label for="despro">Descrição do produto</label><br/>
            <input type="text" name="despro" id="despro"/><br/><br/>
            <label for="vlrpro">Valor do produto</label><br/>
            <input type="text" name="vlrpro" id="vlrpro"/><br/><br/>
            <label for="codcat">Código da categoria</label><br/>
            <input type="number" name="codcat" id="codcat"/><br/><br/>
            <button type="submit">Adicionar</button>
            
        </form>
        
    </body>
</html>
