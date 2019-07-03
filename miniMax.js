// Alunos: Leonardo Marco, Maria Clara, Mariane Luiza
//UNIBH 2019/1


var quadro_jogador = [];
var quadro_computador = [];
var quadro_velha = [];
var ganhar = -1;

$('.button').click(function () {
    var val = $(this).val()
    var html = $(this).html()

    jogador(html, val)
    ganhou(quadro_jogador, 'Vitória', 'green')
    computador()
    ganhou(quadro_computador, 'Derrota', 'red')

})

function jogador(html, val) {
    if (!vazio(html)) {
        alert('Este campo já está preenchido')
    } else {
        $(`[value="${val}"]`).html('X')
        quadro_jogador.push(val)
        quadro_velha.push(val)
        ganhar = vaiGanhar(quadro_jogador)
    }
}

function computador() {
    var ganhar_computador = vaiGanhar(quadro_computador)
    if (ganhar_computador != -1) {
        $(`[value="${ganhar_computador}"]`).html('O')
        quadro_computador.push(`${ganhar_computador}`)
        quadro_velha.push(`${ganhar_computador}`)
    } else {
        if (ganhar != -1) {
            $(`[value="${ganhar}"]`).html('O')
            quadro_computador.push(`${ganhar_computador}`)
            quadro_velha.push(`${ganhar_computador}`)
        } else {
            numero = aleatorio();
            $(`[value="${numero}"]`).html('O')
            quadro_computador.push(`${numero}`)
            quadro_velha.push(`${numero}`)
        }
    }
}

function vazio(html) {
    if (html == "") {
        return true;
    } else {
        return false;
    }
}

function aleatorio() {
    numero = Math.floor(Math.random() * 10)
    aux = false;
    while (!aux) {
        if (quadro_jogador.indexOf(numero.toString()) == -1 && quadro_computador.indexOf(numero.toString()) == -1 && numero != 0) {
            aux = true
        } else {
            numero = Math.floor(Math.random() * 10)
        }
    }

    return numero
}

function ganhou(array, mensagem, cor) {
    if (array.indexOf("1") > -1 && array.indexOf("2") > -1 && array.indexOf("3") > -1) {
        $('button').attr('disabled', true)
        $('#mensagem').html(mensagem)
        $('body').css('background', cor)
    } else if (array.indexOf("4") > -1 && array.indexOf("5") > -1 && array.indexOf("6") > -1) {
        $('button').attr('disabled', true)
        $('#mensagem').html(mensagem)
        $('body').css('background', cor)
    } else if (array.indexOf("7") > -1 && array.indexOf("8") > -1 && array.indexOf("9") > -1) {
        $('button').attr('disabled', true)
        $('#mensagem').html(mensagem)
        $('body').css('background', cor)
    } else if (array.indexOf("1") > -1 && array.indexOf("4") > -1 && array.indexOf("7") > -1) {
        $('button').attr('disabled', true)
        $('#mensagem').html(mensagem)
        $('body').css('background', cor)
    } else if (array.indexOf("2") > -1 && array.indexOf("5") > -1 && array.indexOf("8") > -1) {
        $('button').attr('disabled', true)
        $('#mensagem').html(mensagem)
        $('body').css('background', cor)
    } else if (array.indexOf("3") > -1 && array.indexOf("6") > -1 && array.indexOf("9") > -1) {
        $('button').attr('disabled', true)
        $('#mensagem').html(mensagem)
        $('body').css('background', cor)
    } else if (array.indexOf("1") > -1 && array.indexOf("5") > -1 && array.indexOf("9") > -1) {
        $('button').attr('disabled', true)
        $('#mensagem').html(mensagem)
        $('body').css('background', cor)
    } else if (array.indexOf("3") > -1 && array.indexOf("5") > -1 && array.indexOf("7") > -1) {
        $('button').attr('disabled', true)
        $('#mensagem').html(mensagem)
        $('body').css('background', cor)
    } else if(quadro_velha.length == 9){
        $('button').attr('disabled', true)
        $('#mensagem').html('Velha')
    }
}

function vaiGanhar(array) {
    if (array.indexOf("1") > -1 && array.indexOf("2") > -1) {
        if ($(`[value="3"]`).html() == "") {
            return 3
        } else {
            return -1
        }
    } else if (array.indexOf("2") > -1 && array.indexOf("3") > -1) {
        if ($(`[value="1"]`).html() == "") {
            return 1
        } else {
            return -1
        }
    } else if (array.indexOf("1") > -1 && array.indexOf("3") > -1) {
        if ($(`[value="2"]`).html() == "") {
            return 2
        } else {
            return -1
        }
    } else if (array.indexOf("4") > -1 && array.indexOf("5") > -1) {
        if ($(`[value="6"]`).html() == "") {
            return 6
        } else {
            return -1
        }
    } else if (array.indexOf("5") > -1 && array.indexOf("6") > -1) {
        if ($(`[value="4"]`).html() == "") {
            return 4
        } else {
            return -1
        }
    } else if (array.indexOf("4") > -1 && array.indexOf("6") > -1) {
        if ($(`[value="5"]`).html() == "") {
            return 5
        } else {
            return -1
        }
    } else if (array.indexOf("7") > -1 && array.indexOf("8") > -1) {
        if ($(`[value="9"]`).html() == "") {
            return 9
        } else {
            return -1
        }
    } else if (array.indexOf("8") > -1 && array.indexOf("9") > -1) {
        if ($(`[value="7"]`).html() == "") {
            return 7
        } else {
            return -1
        }
    } else if (array.indexOf("7") > -1 && array.indexOf("9") > -1) {
        if ($(`[value="8"]`).html() == "") {
            return 8
        } else {
            return -1
        }
    } else if (array.indexOf("1") > -1 && array.indexOf("4") > -1) {
        if ($(`[value="7"]`).html() == "") {
            return 7
        } else {
            return -1
        }
    } else if (array.indexOf("7") > -1 && array.indexOf("4") > -1) {
        if ($(`[value="1"]`).html() == "") {
            return 1
        } else {
            return -1
        }
    } else if (array.indexOf("1") > -1 && array.indexOf("7") > -1) {
        if ($(`[value="4"]`).html() == "") {
            return 4
        } else {
            return -1
        }
    } else if (array.indexOf("2") > -1 && array.indexOf("5") > -1) {
        if ($(`[value="8"]`).html() == "") {
            return 8
        } else {
            return -1
        }
    } else if (array.indexOf("5") > -1 && array.indexOf("8") > -1) {
        if ($(`[value="2"]`).html() == "") {
            return 2
        } else {
            return -1
        }
    } else if (array.indexOf("2") > -1 && array.indexOf("8") > -1) {
        if ($(`[value="5"]`).html() == "") {
            return 5
        } else {
            return -1
        }
    } else if (array.indexOf("3") > -1 && array.indexOf("6") > -1) {
        if ($(`[value="9"]`).html() == "") {
            return 9
        } else {
            return -1
        }
    } else if (array.indexOf("6") > -1 && array.indexOf("9") > -1) {
        if ($(`[value="3"]`).html() == "") {
            return 3
        } else {
            return -1
        }
    } else if (array.indexOf("3") > -1 && array.indexOf("9") > -1) {
        if ($(`[value="6"]`).html() == "") {
            return 6
        } else {
            return -1
        }
    } else if (array.indexOf("1") > -1 && array.indexOf("5") > -1) {
        if ($(`[value="9"]`).html() == "") {
            return 9
        } else {
            return -1
        }
    } else if (array.indexOf("5") > -1 && array.indexOf("9") > -1) {
        if ($(`[value="1"]`).html() == "") {
            return 1
        } else {
            return -1
        }
    } else if (array.indexOf("1") > -1 && array.indexOf("9") > -1) {
        if ($(`[value="5"]`).html() == "") {
            return 5
        } else {
            return -1
        }
    } else if (array.indexOf("3") > -1 && array.indexOf("5") > -1) {
        if ($(`[value="7"]`).html() == "") {
            return 7
        } else {
            return -1
        }
    } else if (array.indexOf("5") > -1 && array.indexOf("7") > -1) {
        if ($(`[value="3"]`).html() == "") {
            return 3
        } else {
            return -1
        }
    } else if (array.indexOf("3") > -1 && array.indexOf("7") > -1) {
        if ($(`[value="5"]`).html() == "") {
            return 5
        } else {
            return -1
        }
    } else {
        return -1
    }
}