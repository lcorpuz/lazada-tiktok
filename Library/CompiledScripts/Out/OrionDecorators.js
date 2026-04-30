const APJS = require('./amazingpro');

"use strict";
Object.defineProperty(exports, '__esModule', {value: true});
exports.output = exports.input = exports.component = exports.customNode = void 0;
function customNode() {
  return target => {
    //console.log('@customNode is Used');
  };
}
exports.customNode = customNode;
function component() {
  return target => {
    APJS.UserScriptComponentUtils.registerUserComponent(target);
  };
}
exports.component = component;
//property decoration
// Graph Input Port
function input(type) {
  return (target, key) => {
    //console.log('@input with param ' + type);
  };
}
exports.input = input;

// Graph Output Port
function output(type) {
  return (target, key) => {
    //console.log('@output with param ' + type);
  };
}
exports.output = output;

// SerializeSceneObjectFlag Decorator. Flag the property's type is 'APJS.SceneObject'.
function serializeSceneObjectFlag(target, key) {
  APJS.addSceneObjectProperty(target.constructor, key);
}
exports.serializeSceneObjectFlag = serializeSceneObjectFlag;

// SerializeProperty Decorator
function serializeProperty(target, key) {
  if (target && key) {
    // Support `@serializeProperty`
    APJS.serialize(target, key);
  } else {
    // Support `@serializeProperty()`
    return (target, key) => {
      APJS.serialize(target, key);
    };
  }
}
exports.serializeProperty = serializeProperty;

