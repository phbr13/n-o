const sabado = ['Inglês', 'Ler Livro', 'Sábado']
const domingo = ['Redação', 'Ler Livro', 'Domingo']
const segunda = ['Anotar Aula','Exercícios','Ver Jornal','Ler Livro', 'Segunda-feira']
const terca = ['Anotar Aula','Exercícios','Ver Jornal','Aula de Redação','Ler Livro', 'Terça-feira']
const quarta = ['Anotar Aula','Exercícios','Ver Jornal','Aula de Livro','Ler Livro','Quarta-feira']
const quinta = ['Anotar Aula','Exercícios','Ver Jornal','Aula de Filosofia','Ler Livro', 'Quinta-feira']
const sexta = ['Anotar Aula','Exercícios','Ver Jornal','Ler Livro', 'Sexta-feira']

const tasks = [domingo, segunda, terca, quarta, quinta, sexta, sabado,]
const d = new Date();

document.querySelector('body > h3').innerHTML = tasks[d.getDay()].slice(-1)

tasks[d.getDay()].forEach((elemento) => {
    document.getElementById('tasks').innerHTML += `
    <div class="task">
        <h3>${elemento}</h3>
        <div class="square" onclick="checar(this)">
            <div class="checked" data-checked="0" style="scale: 0;">
                <img src="check.svg" alt="">
            </div>
        </div>
    </div>
    `
})