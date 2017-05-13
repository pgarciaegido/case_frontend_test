// Stores data from components.

export default function ComponentComunicatorService() {
  let comunicator = {};

  comunicator.setInfo = function(key, data) {
    comunicator[key] = data;
  }

  comunicator.getInfo = function(key) {
    if (comunicator[key]) return comunicator[key][0];
  }

  return comunicator;
}
