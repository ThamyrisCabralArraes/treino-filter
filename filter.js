let listaArray = [
  {
    email: 'sdfmndlskfnmj@gmail.com',
    name: 'thamyris',
    cidade: 'Recife',
    idade: 12,
  },
  {
    email: 'vbfdghbfgh@gmail.com',
    name: 'Carlos',
    cidade: 'Recife',
    idade: 45,
  },
  {
    email: 'nmfghnfsdgf@gmail.com',
    name: 'magnum',
    cidade: 'Sanja',
    idade: 24,
  },
  {
    email: 'asdfgsdgfdg@gmail.com',
    name: 'Adilma',
    cidade: 'Sanja',
    idade: 14,
  },
  {
    email: 'khjlkjhlkhj@gmail.com',
    name: 'Joao',
    cidade: 'Recife',
    idade: 74,
  },
];

const cadastro = listaArray
  .filter((elemento) => elemento.idade <= 18)
  .filter((elemento) => elemento.cidade === 'Recife');

console.log(cadastro);

//ou

const cadastro2 = listaArray.filter((elemento) => elemento.idade >= 18);

const cadastro3 = cadastro2.filter((elemento) => elemento.cidade === 'Sanja');

console.log(cadastro3);
