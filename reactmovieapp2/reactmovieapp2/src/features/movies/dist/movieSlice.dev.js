"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getAllMovies = exports.addMovies = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _movieApi = _interopRequireDefault(require("../../common/apis/movieApi"));

var _MovieApiKey = require("../../common/apis/MovieApiKey");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  movies: {}
};
var movieSlice = (0, _toolkit.createSlice)({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovies: function addMovies(state, _ref) {
      var payload = _ref.payload;
      state.movies = payload;
      return _objectSpread({}, state, {
        payload: payload
      });
    },
    // addMovies2: (state, { payload }) => ({
    // ...state,
    // movies: payload,
    // payload,
    // }),
    fetch: function fetch(state) {
      var response;
      return regeneratorRuntime.async(function fetch$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_movieApi.default.get("?apikey=".concat(_MovieApiKey.APIKey, "&s=").concat(movieText, "&type=movie")).catch(function (err) {
                console.log("Err :", err);
              }));

            case 2:
              response = _context.sent;
              console.log(response.data);
              return _context.abrupt("return", {
                movies: response.data
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }
});
var addMovies = movieSlice.actions.addMovies;
exports.addMovies = addMovies;

var getAllMovies = function getAllMovies(state) {
  return state.movies.movies;
};

exports.getAllMovies = getAllMovies;
var _default = movieSlice.reducer;
exports.default = _default;
//# sourceMappingURL=movieSlice.dev.js.map
