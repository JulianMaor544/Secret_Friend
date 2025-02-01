// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crea un array para almacenar los nombres

let name_array=[];

function addFriend()   {
    let nameOfFriend=document.getElementById('amigo').value;
    if(nameOfFriend!=0)    {
        name_array.push(nameOfFriend);
    }else   {
        alert("Porfavor, ingrese un nombre");
    }
    //Vuelve a null el valor para dejarlo en blanco 
    document.getElementById('amigo').value=null;
    showFriendsList();
    return;
}

function showFriendsList()  {
    clearElement('resultado');
    clearElement('listaAmigos');
    for(i=0;i<name_array.length;i++)    {
        let newLi=document.createElement('li');
        let content=document.createTextNode(name_array[i]);
        let selectElement= document.getElementById('listaAmigos');
        newLi.appendChild(content);
        selectElement.appendChild(newLi);
    }
    return;
}

function clearElement(elementID)    {
    let selectElement=document.getElementById(elementID);
    selectElement.innerHTML="";
    return;
}

function drawFriend()   {
    clearElement('listaAmigos');
    if(name_array.length!=0)    {
        let ranNumber=Math.floor(Math.random()*((name_array.length)-0)+0);
        document.getElementById('resultado').innerHTML=`El amigo sorteado secreto es: ${name_array[ranNumber]}`;
    }else   {
        addFriend();
    }
    return;
}
