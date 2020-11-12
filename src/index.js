const wrapSquares = [
  {
    quantity: 10,
    classColor: 'beige'
  },
  {
    quantity: 10,
    classColor: 'letters-are-blue'
  },
  {
    quantity: 4,
    classColor: 'yellow'
  },
  {
    quantity: 16,
    classColor: 'snake'
  },
  {
    quantity: 4,
    classColor: 'brown-flowers'
  },
  {
    quantity: 8,
    classColor: 'red-flowers'
  },
  {
    quantity: 17,
    classColor: 'red'
  },
  {
    quantity: 10,
    classColor: 'citric'
  },
  {
    quantity: 2,
    classColor: 'light-yellow'
  },
  {
    quantity: 10,
    classColor: 'light-gray'
  },
  {
    quantity: 8,
    classColor: 'gray'
  },
  {
    quantity: 8,
    classColor: 'dark-green'
  },
  {
    quantity: 4,
    classColor: 'dark-blue'
  },
];

window.onload = function() {
  console.log('Hello Volha =)');

  const containerWrap = document.createElement('div');
  containerWrap.classList.add('container-wrap');

  // collection area
  const wrapperCollectionArea = document.createElement('div');

  const collectingArea = document.createElement('div');
  collectingArea.classList.add('collecting-area');

  Array(108).fill(' ').map(() => {
    const collectSquare = document.createElement('div');
    collectSquare.classList.add('collect-square');
    collectingArea.append(collectSquare);
  });

  // squares area
  const squareArea = document.createElement('div');
  squareArea.classList.add('square-area');

  wrapSquares.map(({ quantity, classColor }) => {
    Array(quantity).fill(' ').forEach(() => {
      const square = document.createElement('div');
      square.classList.add(classColor, 'square');
      squareArea.append(square);
    });
  });

  wrapperCollectionArea.append(collectingArea);
  containerWrap.append(wrapperCollectionArea, squareArea);
  document.querySelector('body').append(containerWrap);
}
