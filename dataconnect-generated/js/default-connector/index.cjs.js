const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'SIM2024Q4-TechniCARlly',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

