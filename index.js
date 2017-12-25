var crossValidate = require('./dist/cross-validate').default;
var likely = require('./dist/likely').default;
var lookup = require('./dist/lookup').default;
var NeuralNetwork = require('./dist/neural-network').default;
var NeuralNetworkGPU = require('./dist/neural-network-gpu').default;
var TrainStream = require('./dist/train-stream').default;
var RNN = require('./dist/recurrent/rnn').default;
var LSTM = require('./dist/recurrent/lstm').default;
var GRU = require('./dist/recurrent/gru').default;
var utilities = {
  max: require('./dist/utilities/max').default,
  mse: require('./dist/utilities/mse').default,
  ones: require('./dist/utilities/ones').default,
  random: require('./dist/utilities/random').default,
  randomWeight: require('./dist/utilities/random-weight').default,
  randos: require('./dist/utilities/randos').default,
  range: require('./dist/utilities/range').default,
  toArray: require('./dist/utilities/to-array').default,
  DataFormatter: require('./dist/utilities/data-formatter').default,
  zeros: require('./dist/utilities/zeros').default
};

var brain = {
  crossValidate: crossValidate,
  likely: likely,
  lookup: lookup,
  NeuralNetwork: NeuralNetwork,
  NeuralNetworkGPU: NeuralNetworkGPU,
  TrainStream: TrainStream,
  recurrent: {
    RNN: RNN,
    LSTM: LSTM,
    GRU: GRU,
  },
  utilities: utilities
};

if (typeof window !== 'undefined') {
  window.brain = brain;
} else {
  module.exports = brain;
}