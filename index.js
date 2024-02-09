const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var minhaVariavel",
        "const minhaVariavel",
        "let minhaVariavel"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o método que é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "console.log()",
        "print()",
        "alert()"
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de linha única",
        "<!-- Este é um comentário de linha única -->",
        "/* Este é um comentário de linha única */"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função de parseInt() em JavaScript?",
      respostas: [
        "Converter uma string para um número inteiro",
        "Converter um número para uma string",
        "Converter uma string para um número decimal"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "add()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para obter o comprimento de uma string em JavaScript?",
      respostas: [
        "len()",
        "size()",
        "length()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado de 10 + '5' em JavaScript?",
      respostas: [
        "15",
        "105",
        "Erro"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a saída do código: console.log(typeof([]))?",
      respostas: [
        "'array'",
        "'object'",
        "'array object'"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 5; i++)",
        "for (var i = 0; i < 5; i++)",
        "for (i < 5; i++)"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //console.log(perguntas);
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
    for(let respostas of item.respostas){
  
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = respostas
      dt.querySelector('input').setAttribute('name', 'perguta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(respostas)
      dt.querySelector('input').onchange = (event)=> {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
  
  
  
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }