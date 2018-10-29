webpackHotUpdate("main",{

/***/ "./app/components/dashboard/profile/profileSkillForm.js":
/*!**************************************************************!*\
  !*** ./app/components/dashboard/profile/profileSkillForm.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _files_containers_SelectImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../files/containers/SelectImage */ \"./app/components/dashboard/files/containers/SelectImage.js\");\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ \"./node_modules/redux-form/es/index.js\");\n/* harmony import */ var react_widgets_lib_Multiselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-widgets/lib/Multiselect */ \"./node_modules/react-widgets/lib/Multiselect.js\");\n/* harmony import */ var react_widgets_lib_Multiselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_widgets_lib_Multiselect__WEBPACK_IMPORTED_MODULE_3__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar ProfileSkillForm = function ProfileSkillForm(props) {\n\n\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\tredux_form__WEBPACK_IMPORTED_MODULE_2__[\"Form\"],\n\t\t{ className: 'profile__form-skills', onSubmit: props.handleSubmit(props.addSkill) },\n\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'flex-row' },\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'flex-col' },\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'col-1' },\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], { type: 'text', name: 'name', label: 'Skill name', component: InputComponent }),\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], { type: 'number', name: 'level', label: 'Skill level', component: InputComponent })\n\t\t\t\t),\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'col-1' },\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], { type: 'select', name: 'icon', label: 'Skill icon', selectUrl: true, component: _files_containers_SelectImage__WEBPACK_IMPORTED_MODULE_1__[\"default\"] }),\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fields, { type: 'select', name: 'school', label: 'School', items: ['pluralsight', 'Udemy', 'codecademy'], component: renderMultiselect })\n\t\t\t\t)\n\t\t\t),\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'flex-col' },\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], { type: 'date', name: 'from', label: 'Skill name', component: InputComponent }),\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], { type: 'date', name: 'to', label: 'Skill name', component: InputComponent })\n\t\t\t)\n\t\t),\n\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'form-submit' },\n\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'button',\n\t\t\t\t{ type: 'submit' },\n\t\t\t\t'Add Skill'\n\t\t\t)\n\t\t)\n\t);\n};\n\nvar renderMultiselect = function (_Component) {\n\t_inherits(renderMultiselect, _Component);\n\n\tfunction renderMultiselect(props) {\n\t\t_classCallCheck(this, renderMultiselect);\n\n\t\tvar _this = _possibleConstructorReturn(this, (renderMultiselect.__proto__ || Object.getPrototypeOf(renderMultiselect)).call(this, props));\n\n\t\t_this.state = {\n\t\t\titemsFiltered: [],\n\t\t\titemsAdded: []\n\t\t};\n\t\t_this.inputValue = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n\n\t\t_this.addItem = _this.addItem.bind(_this);\n\t\t_this.removeItem = _this.removeItem.bind(_this);\n\t\t_this.filterSearch = _this.filterSearch.bind(_this);\n\n\t\treturn _this;\n\t}\n\n\t_createClass(renderMultiselect, [{\n\t\tkey: 'addItem',\n\t\tvalue: function addItem(item) {\n\n\t\t\tif (this.state.itemsAdded.indexOf(item) === -1) {\n\t\t\t\tthis.setState({\n\t\t\t\t\titemsAdded: [].concat(_toConsumableArray(this.state.itemsAdded), [item]),\n\t\t\t\t\titemsFiltered: []\n\t\t\t\t});\n\n\t\t\t\tthis.inputValue.current.value = \"\";\n\t\t\t\tconsole.log(this.props);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'removeItem',\n\t\tvalue: function removeItem(e) {\n\t\t\tvar key = e.keyCode || e.charCode;\n\n\t\t\tif (key === 8 && this.state.itemsAdded.length && this.inputValue.current.value === '') {\n\t\t\t\tthis.state.itemsAdded.pop();\n\n\t\t\t\tthis.setState({\n\t\t\t\t\titemsAdded: this.state.itemsAdded\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'filterSearch',\n\t\tvalue: function filterSearch(e) {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar value = e.target.value;\n\n\t\t\tvar filtered = value.length > 0 ? this.props.items.filter(function (item) {\n\t\t\t\treturn item.toLowerCase().includes(value.toLowerCase()) && _this2.state.itemsAdded.indexOf(item) === -1;\n\t\t\t}) : [];\n\t\t\tthis.setState({\n\t\t\t\titemsFiltered: filtered,\n\t\t\t\tsearchValue: value\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this3 = this;\n\n\t\t\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'field-multiselect-w' },\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'filter-search' },\n\t\t\t\t\tthis.state.itemsAdded.map(function (item, key) {\n\t\t\t\t\t\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t\t'span',\n\t\t\t\t\t\t\t{ key: key },\n\t\t\t\t\t\t\titem\n\t\t\t\t\t\t);\n\t\t\t\t\t}),\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { onKeyDown: this.removeItem, ref: this.inputValue, onChange: this.filterSearch, type: 'text', placeholder: 'Find School' })\n\t\t\t\t),\n\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'popup-multiselect' },\n\t\t\t\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t'ul',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tthis.state.itemsFiltered.map(function (item, key) {\n\n\t\t\t\t\t\t\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t\t\t\t\t\t'li',\n\t\t\t\t\t\t\t\t{ key: key, onClick: function onClick() {\n\t\t\t\t\t\t\t\t\t\treturn _this3.addItem(item);\n\t\t\t\t\t\t\t\t\t} },\n\t\t\t\t\t\t\t\titem\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn renderMultiselect;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar InputComponent = function InputComponent(props) {\n\n\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t'div',\n\t\t{ className: 'field-input-w' },\n\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({ type: props.type, onChange: props.onChange, placeholder: props.label }, props.input))\n\t);\n};\n\nvar TextareaComponent = function TextareaComponent(props) {\n\n\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t'div',\n\t\t{ className: 'field-textarea-w' },\n\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('textarea', _extends({ type: props.type, onChange: props.onChange }, props.input, { placeholder: props.label }))\n\t);\n};\n\nvar SelectComponent = function SelectComponent(props) {\n\n\treturn react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t'select',\n\t\t{ className: 'btn btn-primary' },\n\t\treact__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n\t\t\t'option',\n\t\t\t{ defaultselected: 'true' },\n\t\t\t'Select school'\n\t\t)\n\t);\n};\n\nvar validate = function validate(values) {\n\tvar errors = {};\n\n\treturn errors;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_2__[\"reduxForm\"])({ form: 'profileSkill', validate: validate })(ProfileSkillForm));\n\n//# sourceURL=webpack:///./app/components/dashboard/profile/profileSkillForm.js?");

/***/ })

})