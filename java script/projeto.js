
function carregar(){
    var mensagem = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var fundo = document.getElementById('fundo')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    if(hora > 0 && hora <= 12){
    
        mensagem.innerHTML = `Bom dia, são exatamente ${hora} horas e ${minuto} minutos`
        imagem.src="manha.jpg"
    } else if(hora >12 && hora <= 18 ){
        
        mensagem.innerHTML = `Boa tarde, são exatamente ${hora}:${minuto}:${segundo}`
        imagem.src="tarde.jpg"

    } else if( hora > 18 && hora <= 24){
        mensagem.innerHTML = `Boa noite, são exatamente ${hora} horas e ${minuto} minutos`
        imagem.src="noite.jpg"
    } 
}
window.onload = carregar