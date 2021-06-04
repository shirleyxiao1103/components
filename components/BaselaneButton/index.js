"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@chakra-ui/react");

require("./button.style.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var BaselaneButton = /*#__PURE__*/(0, _react.forwardRef)(function BaselaneButtonElement(_ref, ref) {
  var styles = _ref.styles,
      type = _ref.type,
      size = _ref.size,
      leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      isDisabled = _ref.isDisabled,
      children = _ref.children,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      onBlur = _ref.onBlur,
      buttonType = _ref.buttonType,
      isLoading = _ref.isLoading;
  return (
    /*#__PURE__*/
    // NOTE: Refer to theme.js on options for variant and size props
    _react["default"].createElement(_react2.Button, _extends({}, styles, {
      _focus: {
        boxShadow: '0'
      },
      leftIcon: leftIcon,
      rightIcon: rightIcon,
      isDisabled: isDisabled,
      size: size,
      variant: type,
      ref: ref,
      onChange: onChange,
      onClick: onClick,
      onBlur: onBlur,
      type: buttonType,
      isLoading: isLoading
    }), children)
  );
});
BaselaneButton.defaultProps = {
  isLoading: false
};
var _default = BaselaneButton;
exports["default"] = _default;