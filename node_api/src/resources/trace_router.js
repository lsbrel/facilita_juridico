module.exports.traceRouter = (clientes, startX, startY) => {
  let route = [clientes[0]];
  let lastDistance = 0;

  for (let i = 1; i < clientes.length; i++) {
    route[i] = clientes[i];
  }

  return route;
};
