const carros = [
    { valor: 30000, marca: "Toyota", modelo: "Corolla", ano: 2020, cor: "Prata", cidade:"Floripa" },
    { valor: 30000, marca: "Honda", modelo: "Civic", ano: 2019, cor: "Branco" , cidade:"São Paulo"},
    { valor: 30000, marca: "Volkswagen", modelo: "Golf", ano: 2021, cor: "Azul" , cidade:"Blumenau"},
    { valor: 30000, marca: "Ford", modelo: "Mustang", ano: 2022, cor: "Vermelho" , cidade:"São Paulo"},
    { valor: 30000, marca: "Chevrolet", modelo: "Camaro", ano: 2020, cor: "Amarelo" , cidade:"Floripa"},
    { valor: 30000, marca: "BMW", modelo: "X5", ano: 2018, cor: "Preto" },
    // Adicione mais objetos de carro aqui, se necessário
    ];
    // Baseado no array de carros: 
    
    // 1 - Devolva um novo array somente com strings do modelo (map)
    // Resultado esperado:["Corolla","Civic","Golf","Mustang","Camaro","X5"]

    let modelos = carros.map(carro=> carro.modelo);
    console.log(JSON.stringify(modelos));
    
    // 2 - Remover a cor de cada objeto do array (map) usando delete
    // Resultado esperado: [
    // { valor: 30000, marca: "Toyota", modelo: "Corolla", ano: 2020, },
    // { valor: 30000, marca: "Honda", modelo: "Civic", ano: 2019, },
    // { valor: 30000, marca: "Volkswagen", modelo: "Golf", ano: 2021, },
    // { valor: 30000, marca: "Ford", modelo: "Mustang", ano: 2022, },
    // { valor: 30000, marca: "Chevrolet", modelo: "Camaro", ano: 2020, },
    // { valor: 30000, marca: "BMW", modelo: "X5", ano: 2018, },
    // // Adicione mais objetos de carro aqui, se necessário
    // ]

    let carrosSemCor = carros.map(carro=>{
        let carroSemCor = {...carro}
        delete carroSemCor.cor;
        return carroSemCor;
    })
    
    console.log(JSON.stringify(carrosSemCor));

    // 3 - Filtrar carros com ano entre 2018 e 2020 e cor preta:

    let carrosFiltradosAnoCor = carros.filter(carro=>carro.ano>=2018 && carro.ano<=2020 && carro.cor=='Preto');
   console.log(JSON.stringify(carrosFiltradosAnoCor));
    
    
    // 4 - Filtrar carros com modelo que começa com a letra "C" e estão disponíveis na cidade "São Paulo":

    
    let carrosFiltradosCSP = carros.filter(carro=>carro.modelo.startsWith('C') && carro.cidade=="São Paulo");
   console.log(JSON.stringify(carrosFiltradosCSP));
    
    // 5 - Obter um novo array com uma frase personalizada para cada carro, contendo a marca, modelo e ano (map):
    // Exemplo: Este é um VW modelo Gol fabricado em 2028
    
    let carrosFrase = carros.map(carro=> `Este é um ${carro.marca} modelo ${carro.modelo} fabricado em ${carro.ano}`);
    console.log(carrosFrase);
    
    // 6 - Obter um novo array com o nome da cidade e a cor de cada carro:

    let carrosCidadeCor = carros.map(carro=> {
        return {cidade:carro.cidade, cor:carro.cor}
    });
    console.log(JSON.stringify(carrosCidadeCor));
    
    
    // 7 - Adicionar uma propriedade "novoValor" a cada carro, definindo um reajuste de 10% sobre valor antigo do carro:
    
    let carrosReajustado = carros.map(carro=>{
        carro.novoValor = carro.valor*1.1;
        return carro;
    });
    console.log(JSON.stringify(carrosReajustado));