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

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

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
      square.setAttribute('draggable', 'true');
      square.classList.add(classColor, 'square');
      squareArea.append(square);
    });
  });

  // shuffle button
  const shuffleButton = document.createElement('button');
  shuffleButton.classList.add('shuffle-button');
  shuffleButton.textContent = 'shuffle';
  const links = [];
  shuffleButton.onclick = () => {
    if (squareArea.children.length && squareArea.children.length > 3) {
      const shuffled = shuffle(Array.from(squareArea.children));
      shuffled.forEach((el, index) => {
        if (index < 108) {
          links.push(el);
          collectingArea.children[index].append(el);
        }
      });
    } else {
      const shuffled = shuffle(links);
      shuffled.forEach((el, index) => {
        if (index < 108) {
          collectingArea.children[index].innerHTML = '';
          collectingArea.children[index].append(el);
        }
      });
    }
  }

  wrapperCollectionArea.append(collectingArea);
  containerWrap.append(wrapperCollectionArea, shuffleButton, squareArea);
  document.querySelector('body').append(containerWrap);

  // hundler draggable
  let dragged;
  let draggedClient;
  document.addEventListener('dragstart', ({ target }) => {
      draggedClient = target.getBoundingClientRect();
      if (target.classList.contains('square')) {
        dragged = target;
      }
  });
  document.addEventListener('dragover', (event) => {
      event.preventDefault();
  });
  document.addEventListener('drop', ({ target }) => {
    if (target.classList.contains('collect-square')) {
      target.append(dragged);
    }
  });
}
