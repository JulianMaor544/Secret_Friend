// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crea un array para almacenar los nombres

let name_array=[];
console.log(name_array);

function addFriend()   {
    let nameOfFriend=document.getElementById('amigo').value;
    if(nameOfFriend!=0)    {
        name_array.push(nameOfFriend);
    }else   {
        alert("Porfavor, ingrese un nombre");
    }
    //Vuelve a null el valor para dejarlo en blanco 
    document.getElementById('amigo').value=null;

    //pruebas
    console.log(name_array);
    return;
}

