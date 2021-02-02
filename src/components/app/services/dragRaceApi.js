
export const getQueens = () => {
  return fetch('http://www.nokeynoshade.party/api/queens?limit=50')
    .then(res => res.json())
    .then(json => json.results);
};