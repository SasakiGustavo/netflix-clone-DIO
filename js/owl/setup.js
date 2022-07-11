let lista = [
    {
        title: 'Squid Game',
        sinopse: `Centenas de jogadores falidos aceitam um estranho convite para um jogo de sobrevivência. Um prêmio milionário aguarda, mas as apostas são altas e mortais.`,
        image: 'squidgame.jpg'
    },
    {
        title: 'Cobra Kai',
        sinopse: `Trinta anos depois do embate entre Daniel LaRusso e Johnny Lawrence, a rivalidade desses dois ressurge quando Lawrence decide retomar sua vida por meio do infame dojo Cobra Kai. Enquanto ele busca redenção, o agora bem-sucedido Daniel, por sua vez, tenta superar os desafios de sua vida sem a ajuda do seu mentor, o Sr. Miyagi.`,
        image: 'cobrakai.jpg'
    },
    {
        title: 'Stranger Things',
        sinopse: `Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina.`,
        image: 'strangerthings.jpg'
    },
    {
        title: 'Smallville',
        sinopse: `Clark Kent é um adolescente aparentemente comum que vive em uma cidadezinha americana chamada Smallville, Kansas. O que ninguém sabe é que, na verdade, Clark veio de um planeta distante chamado Krypton, logo após este ser destruído. Durante uma chuva de meteoros em Smallville, o casal Martha e Jonathan Kent encontra Clark ainda pequeno, e, como o sonho não realizado de Marta é ter um filho, eles decidem adotá-lo.`,
        image: 'smallville.jpg'
    },
    {
        title: 'Arrow',
        sinopse: `Oliver Queen (Stephen Amell) é um milionário que fica em uma ilha durante 5 anos após um naufrágio do qual ele foi o único sobrevivente. Entre os mortos estava Sara Lance (Caity Lotz), a irmã mais nova de sua namorada, com quem estava tendo um caso, e Robert Queen, seu pai. Ao retornar à Starling City, ele busca reconciliar com sua antiga namorada, Laurel Lance (Katie Cassidy), corrigir os erros da família Queen e lutar contra os males da sociedade. Para isso usa o codinome Arrow e se torna um vigilante secreto que atua à noite, buscando trazer Starling City à sua antiga glória.`,
        image: 'arrow.jpg'
    },
    {
        title: 'DareDevil',
        sinopse: `Matthew Michael Murdock (Charlie Cox) é um jovem atleta e excelente aluno. Ainda na infância, um acidente envolvendo um caminhão que carregava lixos tóxicos o deixou cego e fez com que ele desenvolvesse vários sentidos. Quando Matt decide vestir o uniforme e adotar o nome "Demolidor" (Daredevil), leva uma vida dupla: é advogado durante o dia, e, à noite, protege as ruas de Hell's Kitchen, seu bairro em Nova York.`,
        image: 'daredevil.jpg'
    },
    {
        title: 'Jessica Jones',
        sinopse: `Desde que sua curta vida como super-heroína acabou de forma trágica, Jessica Jones vem reconstruindo sua carreira e passou a levar a vida como detetive particular no bairro de Hell's Kitchen, em Nova York, na sua própria agência de investigações, a Alias Investigations. Traumatizada por eventos anteriores de sua vida, ela sofre de Transtorno de Estresse Pós-Traumático, e tenta fazer com que seus super-poderes passem despercebidos pelos seus clientes. Mas, mesmo tentando fugir do passado, seus demônios particulares vão voltar a perseguí-la, na figura de Kilgrave, um obsessivo vilão que fará de tudo para chamar a atenção de Jessica.`,
        image: 'jessicajones.jpg'
    },
    {
        title: 'Luke Cage',
        sinopse: `Um ex-presidiário com pele indestrutível luta para limpar seu nome e salvar o bairro onde vive. Ele não queria confusão, mas a população precisava muito de um herói.`,
        image: 'lukecage.jpg'
    },
    {
        title: 'The Punisher',
        sinopse: `O ex-marine Frank Castle só quer punir os criminosos responsáveis pela morte da sua família, mas torna-se alvo de uma conspiração militar.`,
        image: 'thepunisher.jpg'
    },
    {
        title: 'The Defenders',
        sinopse: `Demolidor, Jessica Jones, Luke Cage e Punho de Ferro unem forças quando uma conspiração ameaça Nova York.`,
        image: 'thedefenders.jpg'
    }
];

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

let opcoes = document.querySelectorAll('img.box-filme');
let destaque = document.querySelector('#destaque');
let titulo = document.querySelector('.titulo');
let descricao = document.querySelector('.descricao');

opcoes.forEach((item,index) => {
    item.addEventListener('click', () => {
        //console.log(item.getAttribute('alt').split('-')[0]);
        destaque.style.backgroundImage = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('./img/" + lista[item.getAttribute('alt').split('-')[0]].image + "')";
        titulo.innerHTML = lista[item.getAttribute('alt').split('-')[0]].title;
        descricao.innerHTML = lista[item.getAttribute('alt').split('-')[0]].sinopse;
        //destaque.style.backgroundImage = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('/img/" + item.getAttribute('alt') + ".jpg')";
    })
})