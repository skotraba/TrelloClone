const cards = [
  {
    id: 'card-1',
    content: 'Eating',
  },
  {
    id: 'card-2',
    content: 'Probably More eating',
  },
  {
    id: 'card-3',
    content: 'I just like eating',
  },
];

// const data = {
//   lists: {
//     'list-1': {
//       id: 'list-1',
//       title: 'Done',
//       cards,
//     },
//     'list-2': {
//       id: 'list-2',
//       title: 'Doing',
//       cards: [],
//     },
//   },
//   listIds: ['list-1', 'list-2'],
// };

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Done',
      cards,
    },
  },
  listIds: ['list-1'],
};

export default data;