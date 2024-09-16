document.addEventListener('DOMContentLoaded', function() {
    // Obtém os elementos do formulário e do span
    var form = document.getElementById('calcForm');
    var valorDeOperacao = document.getElementById('valorDeOperacao');
    var inOperacao = document.getElementById('inOperacao');
    var inNumberOne = document.getElementById('inNumberOne');
    var inNumberTwo = document.getElementById('inNumberTwo');

    // Atualiza o símbolo da operação com base na seleção
    function atualizarSimboloOperacao() {
        var operacao = inOperacao.value;
        switch (operacao) {
            case 'Soma':
                valorDeOperacao.textContent = '( + )';
                break;
            case 'Subtração':
                valorDeOperacao.textContent = '( - )';
                break;
            case 'Multiplicação':
                valorDeOperacao.textContent = '( X )';
                break;
            case 'Divisão':
                valorDeOperacao.textContent = '( / )';
                break;
            default:
                valorDeOperacao.textContent = '( )';
        }
    }

    // Adiciona o evento para atualizar o símbolo quando a operação mudar
    inOperacao.addEventListener('input', atualizarSimboloOperacao);

    // Adiciona o evento para calcular o resultado ao submeter o formulário
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário
            
            // Obtém os valores dos campos de entrada
            var numero1 = parseFloat(inNumberOne.value);
            var numero2 = parseFloat(inNumberTwo.value);
            var operacao = inOperacao.value;
            
            var resultado = '';

            // Realiza a operação com base na escolha
            switch (operacao) {
                case 'Soma':
                    resultado = numero1 + numero2;
                    break;
                case 'Subtração':
                    resultado = numero1 - numero2;
                    break;
                case 'Multiplicação':
                    resultado = numero1 * numero2;
                    break;
                case 'Subtração':
                        resultado = numero1 - numero2;
                        break;    
                case 'Divisão':
                    if (numero2 !== 0) {
                        resultado = numero1 / numero2;
                    } else {
                        resultado = 'Erro: Divisão por zero';
                    }
                    break;
                default:
                    resultado = 'Operação inválida';
            }

            // Exibe o resultado
            document.getElementById('outResultado').textContent = 'Resultado: ' + resultado;
        });
    } else {
        console.error("O formulário com ID 'calcForm' não foi encontrado.");
    }
});
