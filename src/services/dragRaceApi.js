export const getQueens = () => {
  return fetch('http://www.nokeynoshade.party/api/queens?limit=50')
    .then(res => res.json());
};

export const getOneQueen = (id) => {
  return fetch(`http://www.nokeynoshade.party/api/queens/${id}`)
    .then(res => res.json());
};
