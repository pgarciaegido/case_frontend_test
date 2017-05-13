// Stores data from components.

export default function ComponentComunicatorService() {
  let comunicator = {};

  comunicator.setInfo = function(key, data) {
    comunicator[key] = data;
  }

  comunicator.getInfo = function(key) {
    return comunicator[key];
  }

  return comunicator;
}
