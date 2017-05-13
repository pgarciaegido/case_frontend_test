// Specifically built to search through posts array
export default function SearchFilterService () {
  return function (arrayToSearch, keyword) {
    arrayToSearch = arrayToSearch.filter((x) => {
      if(x.title.indexOf(keyword) !== -1) return true;
      else if(x.body.indexOf(keyword) !== -1) return true;
      else return false;
    })
    return arrayToSearch
  }
}
