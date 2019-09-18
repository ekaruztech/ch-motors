"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _request = _interopRequireDefault(require("../controller/request"));

var AppController = {
  index: function index(req, res, next) {
    return res.render('index', {
      title: 'Captain Hamilton'
    });
  },
  contact: function () {
    var _contact = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(req, res, next) {
      var _ref, _ref$data, api, _api$account, location, contact_info;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _request["default"].getApi({
                api_key: process.env.VOOMSWAY_API_KEY
              });

            case 2:
              _ref = _context.sent;
              _ref$data = (0, _slicedToArray2["default"])(_ref.data, 1);
              api = _ref$data[0];

              if (api.account) {
                _api$account = api.account, location = _api$account.location, contact_info = _api$account.contact_info;
                res.render('contact', {
                  title: 'Captain Hamilton',
                  location: location,
                  contact_info: contact_info
                });
              } else {
                res.render('contact', {
                  title: 'Captain Hamilton'
                });
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function contact(_x, _x2, _x3) {
      return _contact.apply(this, arguments);
    }

    return contact;
  }(),
  about: function about(req, res, next) {
    return res.render('about', {
      title: 'Captain Hamilton'
    });
  },
  entry: function entry(req, res, next) {
    res.render('trips', {
      title: 'Captain Hamilton',
      host: process.env.HOST
    });
  },
  terminals: function () {
    var _terminals = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(req, res, next) {
      var page, _ref2, _meta, data;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              page = req.query.page || 1;
              _context2.next = 3;
              return _request["default"].getTerminals({
                page: page
              });

            case 3:
              _ref2 = _context2.sent;
              _meta = _ref2._meta;
              data = _ref2.data;

              if (data) {
                res.render('terminals', {
                  title: 'Captain Hamilton',
                  terminals: data,
                  pagination: _meta.pagination
                });
              } else {
                res.render('terminals', {
                  title: 'Captain Hamilton',
                  terminals: [],
                  pagination: null
                });
              }

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function terminals(_x4, _x5, _x6) {
      return _terminals.apply(this, arguments);
    }

    return terminals;
  }()
};
exports.AppController = AppController;