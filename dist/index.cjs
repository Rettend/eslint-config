"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/tsup@8.0.1_postcss@8.4.32_typescript@5.3.3/node_modules/tsup/assets/cjs_shims.js
var init_cjs_shims = __esm({
  "node_modules/.pnpm/tsup@8.0.1_postcss@8.4.32_typescript@5.3.3/node_modules/tsup/assets/cjs_shims.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/eslint-visitor-keys@3.4.3/node_modules/eslint-visitor-keys/dist/eslint-visitor-keys.cjs
var require_eslint_visitor_keys = __commonJS({
  "node_modules/.pnpm/eslint-visitor-keys@3.4.3/node_modules/eslint-visitor-keys/dist/eslint-visitor-keys.cjs"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var KEYS = {
      ArrayExpression: [
        "elements"
      ],
      ArrayPattern: [
        "elements"
      ],
      ArrowFunctionExpression: [
        "params",
        "body"
      ],
      AssignmentExpression: [
        "left",
        "right"
      ],
      AssignmentPattern: [
        "left",
        "right"
      ],
      AwaitExpression: [
        "argument"
      ],
      BinaryExpression: [
        "left",
        "right"
      ],
      BlockStatement: [
        "body"
      ],
      BreakStatement: [
        "label"
      ],
      CallExpression: [
        "callee",
        "arguments"
      ],
      CatchClause: [
        "param",
        "body"
      ],
      ChainExpression: [
        "expression"
      ],
      ClassBody: [
        "body"
      ],
      ClassDeclaration: [
        "id",
        "superClass",
        "body"
      ],
      ClassExpression: [
        "id",
        "superClass",
        "body"
      ],
      ConditionalExpression: [
        "test",
        "consequent",
        "alternate"
      ],
      ContinueStatement: [
        "label"
      ],
      DebuggerStatement: [],
      DoWhileStatement: [
        "body",
        "test"
      ],
      EmptyStatement: [],
      ExperimentalRestProperty: [
        "argument"
      ],
      ExperimentalSpreadProperty: [
        "argument"
      ],
      ExportAllDeclaration: [
        "exported",
        "source"
      ],
      ExportDefaultDeclaration: [
        "declaration"
      ],
      ExportNamedDeclaration: [
        "declaration",
        "specifiers",
        "source"
      ],
      ExportSpecifier: [
        "exported",
        "local"
      ],
      ExpressionStatement: [
        "expression"
      ],
      ForInStatement: [
        "left",
        "right",
        "body"
      ],
      ForOfStatement: [
        "left",
        "right",
        "body"
      ],
      ForStatement: [
        "init",
        "test",
        "update",
        "body"
      ],
      FunctionDeclaration: [
        "id",
        "params",
        "body"
      ],
      FunctionExpression: [
        "id",
        "params",
        "body"
      ],
      Identifier: [],
      IfStatement: [
        "test",
        "consequent",
        "alternate"
      ],
      ImportDeclaration: [
        "specifiers",
        "source"
      ],
      ImportDefaultSpecifier: [
        "local"
      ],
      ImportExpression: [
        "source"
      ],
      ImportNamespaceSpecifier: [
        "local"
      ],
      ImportSpecifier: [
        "imported",
        "local"
      ],
      JSXAttribute: [
        "name",
        "value"
      ],
      JSXClosingElement: [
        "name"
      ],
      JSXClosingFragment: [],
      JSXElement: [
        "openingElement",
        "children",
        "closingElement"
      ],
      JSXEmptyExpression: [],
      JSXExpressionContainer: [
        "expression"
      ],
      JSXFragment: [
        "openingFragment",
        "children",
        "closingFragment"
      ],
      JSXIdentifier: [],
      JSXMemberExpression: [
        "object",
        "property"
      ],
      JSXNamespacedName: [
        "namespace",
        "name"
      ],
      JSXOpeningElement: [
        "name",
        "attributes"
      ],
      JSXOpeningFragment: [],
      JSXSpreadAttribute: [
        "argument"
      ],
      JSXSpreadChild: [
        "expression"
      ],
      JSXText: [],
      LabeledStatement: [
        "label",
        "body"
      ],
      Literal: [],
      LogicalExpression: [
        "left",
        "right"
      ],
      MemberExpression: [
        "object",
        "property"
      ],
      MetaProperty: [
        "meta",
        "property"
      ],
      MethodDefinition: [
        "key",
        "value"
      ],
      NewExpression: [
        "callee",
        "arguments"
      ],
      ObjectExpression: [
        "properties"
      ],
      ObjectPattern: [
        "properties"
      ],
      PrivateIdentifier: [],
      Program: [
        "body"
      ],
      Property: [
        "key",
        "value"
      ],
      PropertyDefinition: [
        "key",
        "value"
      ],
      RestElement: [
        "argument"
      ],
      ReturnStatement: [
        "argument"
      ],
      SequenceExpression: [
        "expressions"
      ],
      SpreadElement: [
        "argument"
      ],
      StaticBlock: [
        "body"
      ],
      Super: [],
      SwitchCase: [
        "test",
        "consequent"
      ],
      SwitchStatement: [
        "discriminant",
        "cases"
      ],
      TaggedTemplateExpression: [
        "tag",
        "quasi"
      ],
      TemplateElement: [],
      TemplateLiteral: [
        "quasis",
        "expressions"
      ],
      ThisExpression: [],
      ThrowStatement: [
        "argument"
      ],
      TryStatement: [
        "block",
        "handler",
        "finalizer"
      ],
      UnaryExpression: [
        "argument"
      ],
      UpdateExpression: [
        "argument"
      ],
      VariableDeclaration: [
        "declarations"
      ],
      VariableDeclarator: [
        "id",
        "init"
      ],
      WhileStatement: [
        "test",
        "body"
      ],
      WithStatement: [
        "object",
        "body"
      ],
      YieldExpression: [
        "argument"
      ]
    };
    var NODE_TYPES = Object.keys(KEYS);
    for (const type of NODE_TYPES) {
      Object.freeze(KEYS[type]);
    }
    Object.freeze(KEYS);
    var KEY_BLACKLIST = /* @__PURE__ */ new Set([
      "parent",
      "leadingComments",
      "trailingComments"
    ]);
    function filterKey(key) {
      return !KEY_BLACKLIST.has(key) && key[0] !== "_";
    }
    function getKeys(node2) {
      return Object.keys(node2).filter(filterKey);
    }
    function unionWith(additionalKeys) {
      const retv = (
        /** @type {{
            [type: string]: ReadonlyArray<string>
        }} */
        Object.assign({}, KEYS)
      );
      for (const type of Object.keys(additionalKeys)) {
        if (Object.prototype.hasOwnProperty.call(retv, type)) {
          const keys = new Set(additionalKeys[type]);
          for (const key of retv[type]) {
            keys.add(key);
          }
          retv[type] = Object.freeze(Array.from(keys));
        } else {
          retv[type] = Object.freeze(Array.from(additionalKeys[type]));
        }
      }
      return Object.freeze(retv);
    }
    exports.KEYS = KEYS;
    exports.getKeys = getKeys;
    exports.unionWith = unionWith;
  }
});

// node_modules/.pnpm/@eslint-community+eslint-utils@4.4.0_eslint-ts-patch@8.56.0-0/node_modules/@eslint-community/eslint-utils/index.js
var require_eslint_utils = __commonJS({
  "node_modules/.pnpm/@eslint-community+eslint-utils@4.4.0_eslint-ts-patch@8.56.0-0/node_modules/@eslint-community/eslint-utils/index.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var eslintVisitorKeys = require_eslint_visitor_keys();
    function getInnermostScope(initialScope, node2) {
      const location = node2.range[0];
      let scope = initialScope;
      let found = false;
      do {
        found = false;
        for (const childScope of scope.childScopes) {
          const range = childScope.block.range;
          if (range[0] <= location && location < range[1]) {
            scope = childScope;
            found = true;
            break;
          }
        }
      } while (found);
      return scope;
    }
    function findVariable(initialScope, nameOrNode) {
      let name = "";
      let scope = initialScope;
      if (typeof nameOrNode === "string") {
        name = nameOrNode;
      } else {
        name = nameOrNode.name;
        scope = getInnermostScope(scope, nameOrNode);
      }
      while (scope != null) {
        const variable = scope.set.get(name);
        if (variable != null) {
          return variable;
        }
        scope = scope.upper;
      }
      return null;
    }
    function negate0(token) {
      return !this(token);
    }
    function negate(f) {
      return negate0.bind(f);
    }
    function isPunctuatorTokenWithValue(token, value) {
      return token.type === "Punctuator" && token.value === value;
    }
    function isArrowToken(token) {
      return isPunctuatorTokenWithValue(token, "=>");
    }
    function isCommaToken(token) {
      return isPunctuatorTokenWithValue(token, ",");
    }
    function isSemicolonToken(token) {
      return isPunctuatorTokenWithValue(token, ";");
    }
    function isColonToken(token) {
      return isPunctuatorTokenWithValue(token, ":");
    }
    function isOpeningParenToken(token) {
      return isPunctuatorTokenWithValue(token, "(");
    }
    function isClosingParenToken(token) {
      return isPunctuatorTokenWithValue(token, ")");
    }
    function isOpeningBracketToken(token) {
      return isPunctuatorTokenWithValue(token, "[");
    }
    function isClosingBracketToken(token) {
      return isPunctuatorTokenWithValue(token, "]");
    }
    function isOpeningBraceToken(token) {
      return isPunctuatorTokenWithValue(token, "{");
    }
    function isClosingBraceToken(token) {
      return isPunctuatorTokenWithValue(token, "}");
    }
    function isCommentToken(token) {
      return ["Block", "Line", "Shebang"].includes(token.type);
    }
    var isNotArrowToken = negate(isArrowToken);
    var isNotCommaToken = negate(isCommaToken);
    var isNotSemicolonToken = negate(isSemicolonToken);
    var isNotColonToken = negate(isColonToken);
    var isNotOpeningParenToken = negate(isOpeningParenToken);
    var isNotClosingParenToken = negate(isClosingParenToken);
    var isNotOpeningBracketToken = negate(isOpeningBracketToken);
    var isNotClosingBracketToken = negate(isClosingBracketToken);
    var isNotOpeningBraceToken = negate(isOpeningBraceToken);
    var isNotClosingBraceToken = negate(isClosingBraceToken);
    var isNotCommentToken = negate(isCommentToken);
    function getOpeningParenOfParams(node2, sourceCode) {
      return node2.id ? sourceCode.getTokenAfter(node2.id, isOpeningParenToken) : sourceCode.getFirstToken(node2, isOpeningParenToken);
    }
    function getFunctionHeadLocation(node2, sourceCode) {
      const parent = node2.parent;
      let start = null;
      let end = null;
      if (node2.type === "ArrowFunctionExpression") {
        const arrowToken = sourceCode.getTokenBefore(node2.body, isArrowToken);
        start = arrowToken.loc.start;
        end = arrowToken.loc.end;
      } else if (parent.type === "Property" || parent.type === "MethodDefinition" || parent.type === "PropertyDefinition") {
        start = parent.loc.start;
        end = getOpeningParenOfParams(node2, sourceCode).loc.start;
      } else {
        start = node2.loc.start;
        end = getOpeningParenOfParams(node2, sourceCode).loc.start;
      }
      return {
        start: { ...start },
        end: { ...end }
      };
    }
    var globalObject = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
    var builtinNames = Object.freeze(
      /* @__PURE__ */ new Set([
        "Array",
        "ArrayBuffer",
        "BigInt",
        "BigInt64Array",
        "BigUint64Array",
        "Boolean",
        "DataView",
        "Date",
        "decodeURI",
        "decodeURIComponent",
        "encodeURI",
        "encodeURIComponent",
        "escape",
        "Float32Array",
        "Float64Array",
        "Function",
        "Infinity",
        "Int16Array",
        "Int32Array",
        "Int8Array",
        "isFinite",
        "isNaN",
        "isPrototypeOf",
        "JSON",
        "Map",
        "Math",
        "NaN",
        "Number",
        "Object",
        "parseFloat",
        "parseInt",
        "Promise",
        "Proxy",
        "Reflect",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "Uint16Array",
        "Uint32Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "undefined",
        "unescape",
        "WeakMap",
        "WeakSet"
      ])
    );
    var callAllowed = new Set(
      [
        Array.isArray,
        Array.of,
        Array.prototype.at,
        Array.prototype.concat,
        Array.prototype.entries,
        Array.prototype.every,
        Array.prototype.filter,
        Array.prototype.find,
        Array.prototype.findIndex,
        Array.prototype.flat,
        Array.prototype.includes,
        Array.prototype.indexOf,
        Array.prototype.join,
        Array.prototype.keys,
        Array.prototype.lastIndexOf,
        Array.prototype.slice,
        Array.prototype.some,
        Array.prototype.toString,
        Array.prototype.values,
        typeof BigInt === "function" ? BigInt : void 0,
        Boolean,
        Date,
        Date.parse,
        decodeURI,
        decodeURIComponent,
        encodeURI,
        encodeURIComponent,
        escape,
        isFinite,
        isNaN,
        isPrototypeOf,
        Map,
        Map.prototype.entries,
        Map.prototype.get,
        Map.prototype.has,
        Map.prototype.keys,
        Map.prototype.values,
        ...Object.getOwnPropertyNames(Math).filter((k) => k !== "random").map((k) => Math[k]).filter((f) => typeof f === "function"),
        Number,
        Number.isFinite,
        Number.isNaN,
        Number.parseFloat,
        Number.parseInt,
        Number.prototype.toExponential,
        Number.prototype.toFixed,
        Number.prototype.toPrecision,
        Number.prototype.toString,
        Object,
        Object.entries,
        Object.is,
        Object.isExtensible,
        Object.isFrozen,
        Object.isSealed,
        Object.keys,
        Object.values,
        parseFloat,
        parseInt,
        RegExp,
        Set,
        Set.prototype.entries,
        Set.prototype.has,
        Set.prototype.keys,
        Set.prototype.values,
        String,
        String.fromCharCode,
        String.fromCodePoint,
        String.raw,
        String.prototype.at,
        String.prototype.charAt,
        String.prototype.charCodeAt,
        String.prototype.codePointAt,
        String.prototype.concat,
        String.prototype.endsWith,
        String.prototype.includes,
        String.prototype.indexOf,
        String.prototype.lastIndexOf,
        String.prototype.normalize,
        String.prototype.padEnd,
        String.prototype.padStart,
        String.prototype.slice,
        String.prototype.startsWith,
        String.prototype.substr,
        String.prototype.substring,
        String.prototype.toLowerCase,
        String.prototype.toString,
        String.prototype.toUpperCase,
        String.prototype.trim,
        String.prototype.trimEnd,
        String.prototype.trimLeft,
        String.prototype.trimRight,
        String.prototype.trimStart,
        Symbol.for,
        Symbol.keyFor,
        unescape
      ].filter((f) => typeof f === "function")
    );
    var callPassThrough = /* @__PURE__ */ new Set([
      Object.freeze,
      Object.preventExtensions,
      Object.seal
    ]);
    var getterAllowed = [
      [Map, /* @__PURE__ */ new Set(["size"])],
      [
        RegExp,
        /* @__PURE__ */ new Set([
          "dotAll",
          "flags",
          "global",
          "hasIndices",
          "ignoreCase",
          "multiline",
          "source",
          "sticky",
          "unicode"
        ])
      ],
      [Set, /* @__PURE__ */ new Set(["size"])]
    ];
    function getPropertyDescriptor(object, name) {
      let x = object;
      while ((typeof x === "object" || typeof x === "function") && x !== null) {
        const d = Object.getOwnPropertyDescriptor(x, name);
        if (d) {
          return d;
        }
        x = Object.getPrototypeOf(x);
      }
      return null;
    }
    function isGetter(object, name) {
      const d = getPropertyDescriptor(object, name);
      return d != null && d.get != null;
    }
    function getElementValues(nodeList, initialScope) {
      const valueList = [];
      for (let i = 0; i < nodeList.length; ++i) {
        const elementNode = nodeList[i];
        if (elementNode == null) {
          valueList.length = i + 1;
        } else if (elementNode.type === "SpreadElement") {
          const argument = getStaticValueR(elementNode.argument, initialScope);
          if (argument == null) {
            return null;
          }
          valueList.push(...argument.value);
        } else {
          const element = getStaticValueR(elementNode, initialScope);
          if (element == null) {
            return null;
          }
          valueList.push(element.value);
        }
      }
      return valueList;
    }
    function isEffectivelyConst(variable) {
      const refs = variable.references;
      const inits = refs.filter((r) => r.init).length;
      const reads = refs.filter((r) => r.isReadOnly()).length;
      if (inits === 1 && reads + inits === refs.length) {
        return true;
      }
      return false;
    }
    var operations = Object.freeze({
      ArrayExpression(node2, initialScope) {
        const elements = getElementValues(node2.elements, initialScope);
        return elements != null ? { value: elements } : null;
      },
      AssignmentExpression(node2, initialScope) {
        if (node2.operator === "=") {
          return getStaticValueR(node2.right, initialScope);
        }
        return null;
      },
      //eslint-disable-next-line complexity
      BinaryExpression(node2, initialScope) {
        if (node2.operator === "in" || node2.operator === "instanceof") {
          return null;
        }
        const left = getStaticValueR(node2.left, initialScope);
        const right = getStaticValueR(node2.right, initialScope);
        if (left != null && right != null) {
          switch (node2.operator) {
            case "==":
              return { value: left.value == right.value };
            case "!=":
              return { value: left.value != right.value };
            case "===":
              return { value: left.value === right.value };
            case "!==":
              return { value: left.value !== right.value };
            case "<":
              return { value: left.value < right.value };
            case "<=":
              return { value: left.value <= right.value };
            case ">":
              return { value: left.value > right.value };
            case ">=":
              return { value: left.value >= right.value };
            case "<<":
              return { value: left.value << right.value };
            case ">>":
              return { value: left.value >> right.value };
            case ">>>":
              return { value: left.value >>> right.value };
            case "+":
              return { value: left.value + right.value };
            case "-":
              return { value: left.value - right.value };
            case "*":
              return { value: left.value * right.value };
            case "/":
              return { value: left.value / right.value };
            case "%":
              return { value: left.value % right.value };
            case "**":
              return { value: left.value ** right.value };
            case "|":
              return { value: left.value | right.value };
            case "^":
              return { value: left.value ^ right.value };
            case "&":
              return { value: left.value & right.value };
          }
        }
        return null;
      },
      CallExpression(node2, initialScope) {
        const calleeNode = node2.callee;
        const args = getElementValues(node2.arguments, initialScope);
        if (args != null) {
          if (calleeNode.type === "MemberExpression") {
            if (calleeNode.property.type === "PrivateIdentifier") {
              return null;
            }
            const object = getStaticValueR(calleeNode.object, initialScope);
            if (object != null) {
              if (object.value == null && (object.optional || node2.optional)) {
                return { value: void 0, optional: true };
              }
              const property = getStaticPropertyNameValue(
                calleeNode,
                initialScope
              );
              if (property != null) {
                const receiver = object.value;
                const methodName = property.value;
                if (callAllowed.has(receiver[methodName])) {
                  return { value: receiver[methodName](...args) };
                }
                if (callPassThrough.has(receiver[methodName])) {
                  return { value: args[0] };
                }
              }
            }
          } else {
            const callee = getStaticValueR(calleeNode, initialScope);
            if (callee != null) {
              if (callee.value == null && node2.optional) {
                return { value: void 0, optional: true };
              }
              const func = callee.value;
              if (callAllowed.has(func)) {
                return { value: func(...args) };
              }
              if (callPassThrough.has(func)) {
                return { value: args[0] };
              }
            }
          }
        }
        return null;
      },
      ConditionalExpression(node2, initialScope) {
        const test2 = getStaticValueR(node2.test, initialScope);
        if (test2 != null) {
          return test2.value ? getStaticValueR(node2.consequent, initialScope) : getStaticValueR(node2.alternate, initialScope);
        }
        return null;
      },
      ExpressionStatement(node2, initialScope) {
        return getStaticValueR(node2.expression, initialScope);
      },
      Identifier(node2, initialScope) {
        if (initialScope != null) {
          const variable = findVariable(initialScope, node2);
          if (variable != null && variable.defs.length === 0 && builtinNames.has(variable.name) && variable.name in globalObject) {
            return { value: globalObject[variable.name] };
          }
          if (variable != null && variable.defs.length === 1) {
            const def = variable.defs[0];
            if (def.parent && def.type === "Variable" && (def.parent.kind === "const" || isEffectivelyConst(variable)) && // TODO(mysticatea): don't support destructuring here.
            def.node.id.type === "Identifier") {
              return getStaticValueR(def.node.init, initialScope);
            }
          }
        }
        return null;
      },
      Literal(node2) {
        if ((node2.regex != null || node2.bigint != null) && node2.value == null) {
          return null;
        }
        return { value: node2.value };
      },
      LogicalExpression(node2, initialScope) {
        const left = getStaticValueR(node2.left, initialScope);
        if (left != null) {
          if (node2.operator === "||" && Boolean(left.value) === true || node2.operator === "&&" && Boolean(left.value) === false || node2.operator === "??" && left.value != null) {
            return left;
          }
          const right = getStaticValueR(node2.right, initialScope);
          if (right != null) {
            return right;
          }
        }
        return null;
      },
      MemberExpression(node2, initialScope) {
        if (node2.property.type === "PrivateIdentifier") {
          return null;
        }
        const object = getStaticValueR(node2.object, initialScope);
        if (object != null) {
          if (object.value == null && (object.optional || node2.optional)) {
            return { value: void 0, optional: true };
          }
          const property = getStaticPropertyNameValue(node2, initialScope);
          if (property != null) {
            if (!isGetter(object.value, property.value)) {
              return { value: object.value[property.value] };
            }
            for (const [classFn, allowed] of getterAllowed) {
              if (object.value instanceof classFn && allowed.has(property.value)) {
                return { value: object.value[property.value] };
              }
            }
          }
        }
        return null;
      },
      ChainExpression(node2, initialScope) {
        const expression = getStaticValueR(node2.expression, initialScope);
        if (expression != null) {
          return { value: expression.value };
        }
        return null;
      },
      NewExpression(node2, initialScope) {
        const callee = getStaticValueR(node2.callee, initialScope);
        const args = getElementValues(node2.arguments, initialScope);
        if (callee != null && args != null) {
          const Func = callee.value;
          if (callAllowed.has(Func)) {
            return { value: new Func(...args) };
          }
        }
        return null;
      },
      ObjectExpression(node2, initialScope) {
        const object = {};
        for (const propertyNode of node2.properties) {
          if (propertyNode.type === "Property") {
            if (propertyNode.kind !== "init") {
              return null;
            }
            const key = getStaticPropertyNameValue(
              propertyNode,
              initialScope
            );
            const value = getStaticValueR(propertyNode.value, initialScope);
            if (key == null || value == null) {
              return null;
            }
            object[key.value] = value.value;
          } else if (propertyNode.type === "SpreadElement" || propertyNode.type === "ExperimentalSpreadProperty") {
            const argument = getStaticValueR(
              propertyNode.argument,
              initialScope
            );
            if (argument == null) {
              return null;
            }
            Object.assign(object, argument.value);
          } else {
            return null;
          }
        }
        return { value: object };
      },
      SequenceExpression(node2, initialScope) {
        const last = node2.expressions[node2.expressions.length - 1];
        return getStaticValueR(last, initialScope);
      },
      TaggedTemplateExpression(node2, initialScope) {
        const tag = getStaticValueR(node2.tag, initialScope);
        const expressions = getElementValues(
          node2.quasi.expressions,
          initialScope
        );
        if (tag != null && expressions != null) {
          const func = tag.value;
          const strings = node2.quasi.quasis.map((q) => q.value.cooked);
          strings.raw = node2.quasi.quasis.map((q) => q.value.raw);
          if (func === String.raw) {
            return { value: func(strings, ...expressions) };
          }
        }
        return null;
      },
      TemplateLiteral(node2, initialScope) {
        const expressions = getElementValues(node2.expressions, initialScope);
        if (expressions != null) {
          let value = node2.quasis[0].value.cooked;
          for (let i = 0; i < expressions.length; ++i) {
            value += expressions[i];
            value += node2.quasis[i + 1].value.cooked;
          }
          return { value };
        }
        return null;
      },
      UnaryExpression(node2, initialScope) {
        if (node2.operator === "delete") {
          return null;
        }
        if (node2.operator === "void") {
          return { value: void 0 };
        }
        const arg = getStaticValueR(node2.argument, initialScope);
        if (arg != null) {
          switch (node2.operator) {
            case "-":
              return { value: -arg.value };
            case "+":
              return { value: +arg.value };
            case "!":
              return { value: !arg.value };
            case "~":
              return { value: ~arg.value };
            case "typeof":
              return { value: typeof arg.value };
          }
        }
        return null;
      }
    });
    function getStaticValueR(node2, initialScope) {
      if (node2 != null && Object.hasOwnProperty.call(operations, node2.type)) {
        return operations[node2.type](node2, initialScope);
      }
      return null;
    }
    function getStaticPropertyNameValue(node2, initialScope) {
      const nameNode = node2.type === "Property" ? node2.key : node2.property;
      if (node2.computed) {
        return getStaticValueR(nameNode, initialScope);
      }
      if (nameNode.type === "Identifier") {
        return { value: nameNode.name };
      }
      if (nameNode.type === "Literal") {
        if (nameNode.bigint) {
          return { value: nameNode.bigint };
        }
        return { value: String(nameNode.value) };
      }
      return null;
    }
    function getStaticValue(node2, initialScope = null) {
      try {
        return getStaticValueR(node2, initialScope);
      } catch (_error) {
        return null;
      }
    }
    function getStringIfConstant(node2, initialScope = null) {
      if (node2 && node2.type === "Literal" && node2.value === null) {
        if (node2.regex) {
          return `/${node2.regex.pattern}/${node2.regex.flags}`;
        }
        if (node2.bigint) {
          return node2.bigint;
        }
      }
      const evaluated = getStaticValue(node2, initialScope);
      return evaluated && String(evaluated.value);
    }
    function getPropertyName(node2, initialScope) {
      switch (node2.type) {
        case "MemberExpression":
          if (node2.computed) {
            return getStringIfConstant(node2.property, initialScope);
          }
          if (node2.property.type === "PrivateIdentifier") {
            return null;
          }
          return node2.property.name;
        case "Property":
        case "MethodDefinition":
        case "PropertyDefinition":
          if (node2.computed) {
            return getStringIfConstant(node2.key, initialScope);
          }
          if (node2.key.type === "Literal") {
            return String(node2.key.value);
          }
          if (node2.key.type === "PrivateIdentifier") {
            return null;
          }
          return node2.key.name;
      }
      return null;
    }
    function getFunctionNameWithKind(node2, sourceCode) {
      const parent = node2.parent;
      const tokens = [];
      const isObjectMethod = parent.type === "Property" && parent.value === node2;
      const isClassMethod = parent.type === "MethodDefinition" && parent.value === node2;
      const isClassFieldMethod = parent.type === "PropertyDefinition" && parent.value === node2;
      if (isClassMethod || isClassFieldMethod) {
        if (parent.static) {
          tokens.push("static");
        }
        if (parent.key.type === "PrivateIdentifier") {
          tokens.push("private");
        }
      }
      if (node2.async) {
        tokens.push("async");
      }
      if (node2.generator) {
        tokens.push("generator");
      }
      if (isObjectMethod || isClassMethod) {
        if (parent.kind === "constructor") {
          return "constructor";
        }
        if (parent.kind === "get") {
          tokens.push("getter");
        } else if (parent.kind === "set") {
          tokens.push("setter");
        } else {
          tokens.push("method");
        }
      } else if (isClassFieldMethod) {
        tokens.push("method");
      } else {
        if (node2.type === "ArrowFunctionExpression") {
          tokens.push("arrow");
        }
        tokens.push("function");
      }
      if (isObjectMethod || isClassMethod || isClassFieldMethod) {
        if (parent.key.type === "PrivateIdentifier") {
          tokens.push(`#${parent.key.name}`);
        } else {
          const name = getPropertyName(parent);
          if (name) {
            tokens.push(`'${name}'`);
          } else if (sourceCode) {
            const keyText = sourceCode.getText(parent.key);
            if (!keyText.includes("\n")) {
              tokens.push(`[${keyText}]`);
            }
          }
        }
      } else if (node2.id) {
        tokens.push(`'${node2.id.name}'`);
      } else if (parent.type === "VariableDeclarator" && parent.id && parent.id.type === "Identifier") {
        tokens.push(`'${parent.id.name}'`);
      } else if ((parent.type === "AssignmentExpression" || parent.type === "AssignmentPattern") && parent.left && parent.left.type === "Identifier") {
        tokens.push(`'${parent.left.name}'`);
      } else if (parent.type === "ExportDefaultDeclaration" && parent.declaration === node2) {
        tokens.push("'default'");
      }
      return tokens.join(" ");
    }
    var typeConversionBinaryOps = Object.freeze(
      /* @__PURE__ */ new Set([
        "==",
        "!=",
        "<",
        "<=",
        ">",
        ">=",
        "<<",
        ">>",
        ">>>",
        "+",
        "-",
        "*",
        "/",
        "%",
        "|",
        "^",
        "&",
        "in"
      ])
    );
    var typeConversionUnaryOps = Object.freeze(/* @__PURE__ */ new Set(["-", "+", "!", "~"]));
    function isNode(x) {
      return x !== null && typeof x === "object" && typeof x.type === "string";
    }
    var visitor = Object.freeze(
      Object.assign(/* @__PURE__ */ Object.create(null), {
        $visit(node2, options, visitorKeys) {
          const { type } = node2;
          if (typeof this[type] === "function") {
            return this[type](node2, options, visitorKeys);
          }
          return this.$visitChildren(node2, options, visitorKeys);
        },
        $visitChildren(node2, options, visitorKeys) {
          const { type } = node2;
          for (const key of visitorKeys[type] || eslintVisitorKeys.getKeys(node2)) {
            const value = node2[key];
            if (Array.isArray(value)) {
              for (const element of value) {
                if (isNode(element) && this.$visit(element, options, visitorKeys)) {
                  return true;
                }
              }
            } else if (isNode(value) && this.$visit(value, options, visitorKeys)) {
              return true;
            }
          }
          return false;
        },
        ArrowFunctionExpression() {
          return false;
        },
        AssignmentExpression() {
          return true;
        },
        AwaitExpression() {
          return true;
        },
        BinaryExpression(node2, options, visitorKeys) {
          if (options.considerImplicitTypeConversion && typeConversionBinaryOps.has(node2.operator) && (node2.left.type !== "Literal" || node2.right.type !== "Literal")) {
            return true;
          }
          return this.$visitChildren(node2, options, visitorKeys);
        },
        CallExpression() {
          return true;
        },
        FunctionExpression() {
          return false;
        },
        ImportExpression() {
          return true;
        },
        MemberExpression(node2, options, visitorKeys) {
          if (options.considerGetters) {
            return true;
          }
          if (options.considerImplicitTypeConversion && node2.computed && node2.property.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node2, options, visitorKeys);
        },
        MethodDefinition(node2, options, visitorKeys) {
          if (options.considerImplicitTypeConversion && node2.computed && node2.key.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node2, options, visitorKeys);
        },
        NewExpression() {
          return true;
        },
        Property(node2, options, visitorKeys) {
          if (options.considerImplicitTypeConversion && node2.computed && node2.key.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node2, options, visitorKeys);
        },
        PropertyDefinition(node2, options, visitorKeys) {
          if (options.considerImplicitTypeConversion && node2.computed && node2.key.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node2, options, visitorKeys);
        },
        UnaryExpression(node2, options, visitorKeys) {
          if (node2.operator === "delete") {
            return true;
          }
          if (options.considerImplicitTypeConversion && typeConversionUnaryOps.has(node2.operator) && node2.argument.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node2, options, visitorKeys);
        },
        UpdateExpression() {
          return true;
        },
        YieldExpression() {
          return true;
        }
      })
    );
    function hasSideEffect(node2, sourceCode, { considerGetters = false, considerImplicitTypeConversion = false } = {}) {
      return visitor.$visit(
        node2,
        { considerGetters, considerImplicitTypeConversion },
        sourceCode.visitorKeys || eslintVisitorKeys.KEYS
      );
    }
    function getParentSyntaxParen(node2, sourceCode) {
      const parent = node2.parent;
      switch (parent.type) {
        case "CallExpression":
        case "NewExpression":
          if (parent.arguments.length === 1 && parent.arguments[0] === node2) {
            return sourceCode.getTokenAfter(
              parent.callee,
              isOpeningParenToken
            );
          }
          return null;
        case "DoWhileStatement":
          if (parent.test === node2) {
            return sourceCode.getTokenAfter(
              parent.body,
              isOpeningParenToken
            );
          }
          return null;
        case "IfStatement":
        case "WhileStatement":
          if (parent.test === node2) {
            return sourceCode.getFirstToken(parent, 1);
          }
          return null;
        case "ImportExpression":
          if (parent.source === node2) {
            return sourceCode.getFirstToken(parent, 1);
          }
          return null;
        case "SwitchStatement":
          if (parent.discriminant === node2) {
            return sourceCode.getFirstToken(parent, 1);
          }
          return null;
        case "WithStatement":
          if (parent.object === node2) {
            return sourceCode.getFirstToken(parent, 1);
          }
          return null;
        default:
          return null;
      }
    }
    function isParenthesized(timesOrNode, nodeOrSourceCode, optionalSourceCode) {
      let times, node2, sourceCode, maybeLeftParen, maybeRightParen;
      if (typeof timesOrNode === "number") {
        times = timesOrNode | 0;
        node2 = nodeOrSourceCode;
        sourceCode = optionalSourceCode;
        if (!(times >= 1)) {
          throw new TypeError("'times' should be a positive integer.");
        }
      } else {
        times = 1;
        node2 = timesOrNode;
        sourceCode = nodeOrSourceCode;
      }
      if (node2 == null || // `Program` can't be parenthesized
      node2.parent == null || // `CatchClause.param` can't be parenthesized, example `try {} catch (error) {}`
      node2.parent.type === "CatchClause" && node2.parent.param === node2) {
        return false;
      }
      maybeLeftParen = maybeRightParen = node2;
      do {
        maybeLeftParen = sourceCode.getTokenBefore(maybeLeftParen);
        maybeRightParen = sourceCode.getTokenAfter(maybeRightParen);
      } while (maybeLeftParen != null && maybeRightParen != null && isOpeningParenToken(maybeLeftParen) && isClosingParenToken(maybeRightParen) && // Avoid false positive such as `if (a) {}`
      maybeLeftParen !== getParentSyntaxParen(node2, sourceCode) && --times > 0);
      return times === 0;
    }
    var placeholder = /\$(?:[$&`']|[1-9][0-9]?)/gu;
    var internal = /* @__PURE__ */ new WeakMap();
    function isEscaped(str, index2) {
      let escaped = false;
      for (let i = index2 - 1; i >= 0 && str.charCodeAt(i) === 92; --i) {
        escaped = !escaped;
      }
      return escaped;
    }
    function replaceS(matcher, str, replacement) {
      const chunks = [];
      let index2 = 0;
      let match = null;
      function replacer(key) {
        switch (key) {
          case "$$":
            return "$";
          case "$&":
            return match[0];
          case "$`":
            return str.slice(0, match.index);
          case "$'":
            return str.slice(match.index + match[0].length);
          default: {
            const i = key.slice(1);
            if (i in match) {
              return match[i];
            }
            return key;
          }
        }
      }
      for (match of matcher.execAll(str)) {
        chunks.push(str.slice(index2, match.index));
        chunks.push(replacement.replace(placeholder, replacer));
        index2 = match.index + match[0].length;
      }
      chunks.push(str.slice(index2));
      return chunks.join("");
    }
    function replaceF(matcher, str, replace) {
      const chunks = [];
      let index2 = 0;
      for (const match of matcher.execAll(str)) {
        chunks.push(str.slice(index2, match.index));
        chunks.push(String(replace(...match, match.index, match.input)));
        index2 = match.index + match[0].length;
      }
      chunks.push(str.slice(index2));
      return chunks.join("");
    }
    var PatternMatcher = class {
      /**
       * Initialize this matcher.
       * @param {RegExp} pattern The pattern to match.
       * @param {{escaped:boolean}} options The options.
       */
      constructor(pattern, { escaped = false } = {}) {
        if (!(pattern instanceof RegExp)) {
          throw new TypeError("'pattern' should be a RegExp instance.");
        }
        if (!pattern.flags.includes("g")) {
          throw new Error("'pattern' should contains 'g' flag.");
        }
        internal.set(this, {
          pattern: new RegExp(pattern.source, pattern.flags),
          escaped: Boolean(escaped)
        });
      }
      /**
       * Find the pattern in a given string.
       * @param {string} str The string to find.
       * @returns {IterableIterator<RegExpExecArray>} The iterator which iterate the matched information.
       */
      *execAll(str) {
        const { pattern, escaped } = internal.get(this);
        let match = null;
        let lastIndex = 0;
        pattern.lastIndex = 0;
        while ((match = pattern.exec(str)) != null) {
          if (escaped || !isEscaped(str, match.index)) {
            lastIndex = pattern.lastIndex;
            yield match;
            pattern.lastIndex = lastIndex;
          }
        }
      }
      /**
       * Check whether the pattern is found in a given string.
       * @param {string} str The string to check.
       * @returns {boolean} `true` if the pattern was found in the string.
       */
      test(str) {
        const it = this.execAll(str);
        const ret = it.next();
        return !ret.done;
      }
      /**
       * Replace a given string.
       * @param {string} str The string to be replaced.
       * @param {(string|((...strs:string[])=>string))} replacer The string or function to replace. This is the same as the 2nd argument of `String.prototype.replace`.
       * @returns {string} The replaced string.
       */
      [Symbol.replace](str, replacer) {
        return typeof replacer === "function" ? replaceF(this, String(str), replacer) : replaceS(this, String(str), String(replacer));
      }
    };
    var IMPORT_TYPE = /^(?:Import|Export(?:All|Default|Named))Declaration$/u;
    var has = Function.call.bind(Object.hasOwnProperty);
    var READ = Symbol("read");
    var CALL = Symbol("call");
    var CONSTRUCT = Symbol("construct");
    var ESM = Symbol("esm");
    var requireCall = { require: { [CALL]: true } };
    function isModifiedGlobal(variable) {
      return variable == null || variable.defs.length !== 0 || variable.references.some((r) => r.isWrite());
    }
    function isPassThrough(node2) {
      const parent = node2.parent;
      switch (parent && parent.type) {
        case "ConditionalExpression":
          return parent.consequent === node2 || parent.alternate === node2;
        case "LogicalExpression":
          return true;
        case "SequenceExpression":
          return parent.expressions[parent.expressions.length - 1] === node2;
        case "ChainExpression":
          return true;
        default:
          return false;
      }
    }
    var ReferenceTracker = class {
      /**
       * Initialize this tracker.
       * @param {Scope} globalScope The global scope.
       * @param {object} [options] The options.
       * @param {"legacy"|"strict"} [options.mode="strict"] The mode to determine the ImportDeclaration's behavior for CJS modules.
       * @param {string[]} [options.globalObjectNames=["global","globalThis","self","window"]] The variable names for Global Object.
       */
      constructor(globalScope, {
        mode = "strict",
        globalObjectNames = ["global", "globalThis", "self", "window"]
      } = {}) {
        this.variableStack = [];
        this.globalScope = globalScope;
        this.mode = mode;
        this.globalObjectNames = globalObjectNames.slice(0);
      }
      /**
       * Iterate the references of global variables.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *iterateGlobalReferences(traceMap) {
        for (const key of Object.keys(traceMap)) {
          const nextTraceMap = traceMap[key];
          const path = [key];
          const variable = this.globalScope.set.get(key);
          if (isModifiedGlobal(variable)) {
            continue;
          }
          yield* this._iterateVariableReferences(
            variable,
            path,
            nextTraceMap,
            true
          );
        }
        for (const key of this.globalObjectNames) {
          const path = [];
          const variable = this.globalScope.set.get(key);
          if (isModifiedGlobal(variable)) {
            continue;
          }
          yield* this._iterateVariableReferences(
            variable,
            path,
            traceMap,
            false
          );
        }
      }
      /**
       * Iterate the references of CommonJS modules.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *iterateCjsReferences(traceMap) {
        for (const { node: node2 } of this.iterateGlobalReferences(requireCall)) {
          const key = getStringIfConstant(node2.arguments[0]);
          if (key == null || !has(traceMap, key)) {
            continue;
          }
          const nextTraceMap = traceMap[key];
          const path = [key];
          if (nextTraceMap[READ]) {
            yield {
              node: node2,
              path,
              type: READ,
              info: nextTraceMap[READ]
            };
          }
          yield* this._iteratePropertyReferences(node2, path, nextTraceMap);
        }
      }
      /**
       * Iterate the references of ES modules.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *iterateEsmReferences(traceMap) {
        const programNode = this.globalScope.block;
        for (const node2 of programNode.body) {
          if (!IMPORT_TYPE.test(node2.type) || node2.source == null) {
            continue;
          }
          const moduleId = node2.source.value;
          if (!has(traceMap, moduleId)) {
            continue;
          }
          const nextTraceMap = traceMap[moduleId];
          const path = [moduleId];
          if (nextTraceMap[READ]) {
            yield { node: node2, path, type: READ, info: nextTraceMap[READ] };
          }
          if (node2.type === "ExportAllDeclaration") {
            for (const key of Object.keys(nextTraceMap)) {
              const exportTraceMap = nextTraceMap[key];
              if (exportTraceMap[READ]) {
                yield {
                  node: node2,
                  path: path.concat(key),
                  type: READ,
                  info: exportTraceMap[READ]
                };
              }
            }
          } else {
            for (const specifier of node2.specifiers) {
              const esm = has(nextTraceMap, ESM);
              const it = this._iterateImportReferences(
                specifier,
                path,
                esm ? nextTraceMap : this.mode === "legacy" ? { default: nextTraceMap, ...nextTraceMap } : { default: nextTraceMap }
              );
              if (esm) {
                yield* it;
              } else {
                for (const report of it) {
                  report.path = report.path.filter(exceptDefault);
                  if (report.path.length >= 2 || report.type !== READ) {
                    yield report;
                  }
                }
              }
            }
          }
        }
      }
      /**
       * Iterate the references for a given variable.
       * @param {Variable} variable The variable to iterate that references.
       * @param {string[]} path The current path.
       * @param {object} traceMap The trace map.
       * @param {boolean} shouldReport = The flag to report those references.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *_iterateVariableReferences(variable, path, traceMap, shouldReport) {
        if (this.variableStack.includes(variable)) {
          return;
        }
        this.variableStack.push(variable);
        try {
          for (const reference of variable.references) {
            if (!reference.isRead()) {
              continue;
            }
            const node2 = reference.identifier;
            if (shouldReport && traceMap[READ]) {
              yield { node: node2, path, type: READ, info: traceMap[READ] };
            }
            yield* this._iteratePropertyReferences(node2, path, traceMap);
          }
        } finally {
          this.variableStack.pop();
        }
      }
      /**
       * Iterate the references for a given AST node.
       * @param rootNode The AST node to iterate references.
       * @param {string[]} path The current path.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      //eslint-disable-next-line complexity
      *_iteratePropertyReferences(rootNode, path, traceMap) {
        let node2 = rootNode;
        while (isPassThrough(node2)) {
          node2 = node2.parent;
        }
        const parent = node2.parent;
        if (parent.type === "MemberExpression") {
          if (parent.object === node2) {
            const key = getPropertyName(parent);
            if (key == null || !has(traceMap, key)) {
              return;
            }
            path = path.concat(key);
            const nextTraceMap = traceMap[key];
            if (nextTraceMap[READ]) {
              yield {
                node: parent,
                path,
                type: READ,
                info: nextTraceMap[READ]
              };
            }
            yield* this._iteratePropertyReferences(
              parent,
              path,
              nextTraceMap
            );
          }
          return;
        }
        if (parent.type === "CallExpression") {
          if (parent.callee === node2 && traceMap[CALL]) {
            yield { node: parent, path, type: CALL, info: traceMap[CALL] };
          }
          return;
        }
        if (parent.type === "NewExpression") {
          if (parent.callee === node2 && traceMap[CONSTRUCT]) {
            yield {
              node: parent,
              path,
              type: CONSTRUCT,
              info: traceMap[CONSTRUCT]
            };
          }
          return;
        }
        if (parent.type === "AssignmentExpression") {
          if (parent.right === node2) {
            yield* this._iterateLhsReferences(parent.left, path, traceMap);
            yield* this._iteratePropertyReferences(parent, path, traceMap);
          }
          return;
        }
        if (parent.type === "AssignmentPattern") {
          if (parent.right === node2) {
            yield* this._iterateLhsReferences(parent.left, path, traceMap);
          }
          return;
        }
        if (parent.type === "VariableDeclarator") {
          if (parent.init === node2) {
            yield* this._iterateLhsReferences(parent.id, path, traceMap);
          }
        }
      }
      /**
       * Iterate the references for a given Pattern node.
       * @param {Node} patternNode The Pattern node to iterate references.
       * @param {string[]} path The current path.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *_iterateLhsReferences(patternNode, path, traceMap) {
        if (patternNode.type === "Identifier") {
          const variable = findVariable(this.globalScope, patternNode);
          if (variable != null) {
            yield* this._iterateVariableReferences(
              variable,
              path,
              traceMap,
              false
            );
          }
          return;
        }
        if (patternNode.type === "ObjectPattern") {
          for (const property of patternNode.properties) {
            const key = getPropertyName(property);
            if (key == null || !has(traceMap, key)) {
              continue;
            }
            const nextPath = path.concat(key);
            const nextTraceMap = traceMap[key];
            if (nextTraceMap[READ]) {
              yield {
                node: property,
                path: nextPath,
                type: READ,
                info: nextTraceMap[READ]
              };
            }
            yield* this._iterateLhsReferences(
              property.value,
              nextPath,
              nextTraceMap
            );
          }
          return;
        }
        if (patternNode.type === "AssignmentPattern") {
          yield* this._iterateLhsReferences(patternNode.left, path, traceMap);
        }
      }
      /**
       * Iterate the references for a given ModuleSpecifier node.
       * @param {Node} specifierNode The ModuleSpecifier node to iterate references.
       * @param {string[]} path The current path.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *_iterateImportReferences(specifierNode, path, traceMap) {
        const type = specifierNode.type;
        if (type === "ImportSpecifier" || type === "ImportDefaultSpecifier") {
          const key = type === "ImportDefaultSpecifier" ? "default" : specifierNode.imported.name;
          if (!has(traceMap, key)) {
            return;
          }
          path = path.concat(key);
          const nextTraceMap = traceMap[key];
          if (nextTraceMap[READ]) {
            yield {
              node: specifierNode,
              path,
              type: READ,
              info: nextTraceMap[READ]
            };
          }
          yield* this._iterateVariableReferences(
            findVariable(this.globalScope, specifierNode.local),
            path,
            nextTraceMap,
            false
          );
          return;
        }
        if (type === "ImportNamespaceSpecifier") {
          yield* this._iterateVariableReferences(
            findVariable(this.globalScope, specifierNode.local),
            path,
            traceMap,
            false
          );
          return;
        }
        if (type === "ExportSpecifier") {
          const key = specifierNode.local.name;
          if (!has(traceMap, key)) {
            return;
          }
          path = path.concat(key);
          const nextTraceMap = traceMap[key];
          if (nextTraceMap[READ]) {
            yield {
              node: specifierNode,
              path,
              type: READ,
              info: nextTraceMap[READ]
            };
          }
        }
      }
    };
    ReferenceTracker.READ = READ;
    ReferenceTracker.CALL = CALL;
    ReferenceTracker.CONSTRUCT = CONSTRUCT;
    ReferenceTracker.ESM = ESM;
    function exceptDefault(name, index2) {
      return !(index2 === 1 && name === "default");
    }
    var index = {
      CALL,
      CONSTRUCT,
      ESM,
      findVariable,
      getFunctionHeadLocation,
      getFunctionNameWithKind,
      getInnermostScope,
      getPropertyName,
      getStaticValue,
      getStringIfConstant,
      hasSideEffect,
      isArrowToken,
      isClosingBraceToken,
      isClosingBracketToken,
      isClosingParenToken,
      isColonToken,
      isCommaToken,
      isCommentToken,
      isNotArrowToken,
      isNotClosingBraceToken,
      isNotClosingBracketToken,
      isNotClosingParenToken,
      isNotColonToken,
      isNotCommaToken,
      isNotCommentToken,
      isNotOpeningBraceToken,
      isNotOpeningBracketToken,
      isNotOpeningParenToken,
      isNotSemicolonToken,
      isOpeningBraceToken,
      isOpeningBracketToken,
      isOpeningParenToken,
      isParenthesized,
      isSemicolonToken,
      PatternMatcher,
      READ,
      ReferenceTracker
    };
    exports.CALL = CALL;
    exports.CONSTRUCT = CONSTRUCT;
    exports.ESM = ESM;
    exports.PatternMatcher = PatternMatcher;
    exports.READ = READ;
    exports.ReferenceTracker = ReferenceTracker;
    exports["default"] = index;
    exports.findVariable = findVariable;
    exports.getFunctionHeadLocation = getFunctionHeadLocation;
    exports.getFunctionNameWithKind = getFunctionNameWithKind;
    exports.getInnermostScope = getInnermostScope;
    exports.getPropertyName = getPropertyName;
    exports.getStaticValue = getStaticValue;
    exports.getStringIfConstant = getStringIfConstant;
    exports.hasSideEffect = hasSideEffect;
    exports.isArrowToken = isArrowToken;
    exports.isClosingBraceToken = isClosingBraceToken;
    exports.isClosingBracketToken = isClosingBracketToken;
    exports.isClosingParenToken = isClosingParenToken;
    exports.isColonToken = isColonToken;
    exports.isCommaToken = isCommaToken;
    exports.isCommentToken = isCommentToken;
    exports.isNotArrowToken = isNotArrowToken;
    exports.isNotClosingBraceToken = isNotClosingBraceToken;
    exports.isNotClosingBracketToken = isNotClosingBracketToken;
    exports.isNotClosingParenToken = isNotClosingParenToken;
    exports.isNotColonToken = isNotColonToken;
    exports.isNotCommaToken = isNotCommaToken;
    exports.isNotCommentToken = isNotCommentToken;
    exports.isNotOpeningBraceToken = isNotOpeningBraceToken;
    exports.isNotOpeningBracketToken = isNotOpeningBracketToken;
    exports.isNotOpeningParenToken = isNotOpeningParenToken;
    exports.isNotSemicolonToken = isNotSemicolonToken;
    exports.isOpeningBraceToken = isOpeningBraceToken;
    exports.isOpeningBracketToken = isOpeningBracketToken;
    exports.isOpeningParenToken = isOpeningParenToken;
    exports.isParenthesized = isParenthesized;
    exports.isSemicolonToken = isSemicolonToken;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/astUtilities.js
var require_astUtilities = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/astUtilities.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isParenthesized = exports.hasSideEffect = exports.getStringIfConstant = exports.getStaticValue = exports.getPropertyName = exports.getFunctionNameWithKind = exports.getFunctionHeadLocation = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    var getFunctionHeadLocation = eslintUtils.getFunctionHeadLocation;
    exports.getFunctionHeadLocation = getFunctionHeadLocation;
    var getFunctionNameWithKind = eslintUtils.getFunctionNameWithKind;
    exports.getFunctionNameWithKind = getFunctionNameWithKind;
    var getPropertyName = eslintUtils.getPropertyName;
    exports.getPropertyName = getPropertyName;
    var getStaticValue = eslintUtils.getStaticValue;
    exports.getStaticValue = getStaticValue;
    var getStringIfConstant = eslintUtils.getStringIfConstant;
    exports.getStringIfConstant = getStringIfConstant;
    var hasSideEffect = eslintUtils.hasSideEffect;
    exports.hasSideEffect = hasSideEffect;
    var isParenthesized = eslintUtils.isParenthesized;
    exports.isParenthesized = isParenthesized;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/PatternMatcher.js
var require_PatternMatcher = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/PatternMatcher.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PatternMatcher = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    var PatternMatcher = eslintUtils.PatternMatcher;
    exports.PatternMatcher = PatternMatcher;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/predicates.js
var require_predicates = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/predicates.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSemicolonToken = exports.isOpeningParenToken = exports.isOpeningBracketToken = exports.isOpeningBraceToken = exports.isNotSemicolonToken = exports.isNotOpeningParenToken = exports.isNotOpeningBracketToken = exports.isNotOpeningBraceToken = exports.isNotCommentToken = exports.isNotCommaToken = exports.isNotColonToken = exports.isNotClosingParenToken = exports.isNotClosingBracketToken = exports.isNotClosingBraceToken = exports.isNotArrowToken = exports.isCommentToken = exports.isCommaToken = exports.isColonToken = exports.isClosingParenToken = exports.isClosingBracketToken = exports.isClosingBraceToken = exports.isArrowToken = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    var isArrowToken = eslintUtils.isArrowToken;
    exports.isArrowToken = isArrowToken;
    var isNotArrowToken = eslintUtils.isNotArrowToken;
    exports.isNotArrowToken = isNotArrowToken;
    var isClosingBraceToken = eslintUtils.isClosingBraceToken;
    exports.isClosingBraceToken = isClosingBraceToken;
    var isNotClosingBraceToken = eslintUtils.isNotClosingBraceToken;
    exports.isNotClosingBraceToken = isNotClosingBraceToken;
    var isClosingBracketToken = eslintUtils.isClosingBracketToken;
    exports.isClosingBracketToken = isClosingBracketToken;
    var isNotClosingBracketToken = eslintUtils.isNotClosingBracketToken;
    exports.isNotClosingBracketToken = isNotClosingBracketToken;
    var isClosingParenToken = eslintUtils.isClosingParenToken;
    exports.isClosingParenToken = isClosingParenToken;
    var isNotClosingParenToken = eslintUtils.isNotClosingParenToken;
    exports.isNotClosingParenToken = isNotClosingParenToken;
    var isColonToken = eslintUtils.isColonToken;
    exports.isColonToken = isColonToken;
    var isNotColonToken = eslintUtils.isNotColonToken;
    exports.isNotColonToken = isNotColonToken;
    var isCommaToken = eslintUtils.isCommaToken;
    exports.isCommaToken = isCommaToken;
    var isNotCommaToken = eslintUtils.isNotCommaToken;
    exports.isNotCommaToken = isNotCommaToken;
    var isCommentToken = eslintUtils.isCommentToken;
    exports.isCommentToken = isCommentToken;
    var isNotCommentToken = eslintUtils.isNotCommentToken;
    exports.isNotCommentToken = isNotCommentToken;
    var isOpeningBraceToken = eslintUtils.isOpeningBraceToken;
    exports.isOpeningBraceToken = isOpeningBraceToken;
    var isNotOpeningBraceToken = eslintUtils.isNotOpeningBraceToken;
    exports.isNotOpeningBraceToken = isNotOpeningBraceToken;
    var isOpeningBracketToken = eslintUtils.isOpeningBracketToken;
    exports.isOpeningBracketToken = isOpeningBracketToken;
    var isNotOpeningBracketToken = eslintUtils.isNotOpeningBracketToken;
    exports.isNotOpeningBracketToken = isNotOpeningBracketToken;
    var isOpeningParenToken = eslintUtils.isOpeningParenToken;
    exports.isOpeningParenToken = isOpeningParenToken;
    var isNotOpeningParenToken = eslintUtils.isNotOpeningParenToken;
    exports.isNotOpeningParenToken = isNotOpeningParenToken;
    var isSemicolonToken = eslintUtils.isSemicolonToken;
    exports.isSemicolonToken = isSemicolonToken;
    var isNotSemicolonToken = eslintUtils.isNotSemicolonToken;
    exports.isNotSemicolonToken = isNotSemicolonToken;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/ReferenceTracker.js
var require_ReferenceTracker = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/ReferenceTracker.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReferenceTracker = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    var ReferenceTrackerREAD = eslintUtils.ReferenceTracker.READ;
    var ReferenceTrackerCALL = eslintUtils.ReferenceTracker.CALL;
    var ReferenceTrackerCONSTRUCT = eslintUtils.ReferenceTracker.CONSTRUCT;
    var ReferenceTrackerESM = eslintUtils.ReferenceTracker.ESM;
    var ReferenceTracker = eslintUtils.ReferenceTracker;
    exports.ReferenceTracker = ReferenceTracker;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/scopeAnalysis.js
var require_scopeAnalysis = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/scopeAnalysis.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getInnermostScope = exports.findVariable = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    var findVariable = eslintUtils.findVariable;
    exports.findVariable = findVariable;
    var getInnermostScope = eslintUtils.getInnermostScope;
    exports.getInnermostScope = getInnermostScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/index.js
var require_eslint_utils2 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/index.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_astUtilities(), exports);
    __exportStar(require_PatternMatcher(), exports);
    __exportStar(require_predicates(), exports);
    __exportStar(require_ReferenceTracker(), exports);
    __exportStar(require_scopeAnalysis(), exports);
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/helpers.js
var require_helpers = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/helpers.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isNotTokenOfTypeWithConditions = exports.isTokenOfTypeWithConditions = exports.isNodeOfTypeWithConditions = exports.isNodeOfTypes = exports.isNodeOfType = void 0;
    var isNodeOfType = (nodeType) => (node2) => node2?.type === nodeType;
    exports.isNodeOfType = isNodeOfType;
    var isNodeOfTypes = (nodeTypes) => (node2) => !!node2 && nodeTypes.includes(node2.type);
    exports.isNodeOfTypes = isNodeOfTypes;
    var isNodeOfTypeWithConditions = (nodeType, conditions) => {
      const entries = Object.entries(conditions);
      return (node2) => node2?.type === nodeType && entries.every(([key, value]) => node2[key] === value);
    };
    exports.isNodeOfTypeWithConditions = isNodeOfTypeWithConditions;
    var isTokenOfTypeWithConditions = (tokenType, conditions) => {
      const entries = Object.entries(conditions);
      return (token) => token?.type === tokenType && entries.every(([key, value]) => token[key] === value);
    };
    exports.isTokenOfTypeWithConditions = isTokenOfTypeWithConditions;
    var isNotTokenOfTypeWithConditions = (tokenType, conditions) => (token) => !(0, exports.isTokenOfTypeWithConditions)(tokenType, conditions)(token);
    exports.isNotTokenOfTypeWithConditions = isNotTokenOfTypeWithConditions;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/misc.js
var require_misc = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/misc.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LINEBREAK_MATCHER = exports.isTokenOnSameLine = void 0;
    var LINEBREAK_MATCHER = /\r\n|[\r\n\u2028\u2029]/;
    exports.LINEBREAK_MATCHER = LINEBREAK_MATCHER;
    function isTokenOnSameLine(left, right) {
      return left.loc.end.line === right.loc.start.line;
    }
    exports.isTokenOnSameLine = isTokenOnSameLine;
  }
});

// node_modules/.pnpm/@typescript-eslint+types@6.19.0/node_modules/@typescript-eslint/types/dist/generated/ast-spec.js
var require_ast_spec = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+types@6.19.0/node_modules/@typescript-eslint/types/dist/generated/ast-spec.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AST_TOKEN_TYPES = exports.AST_NODE_TYPES = void 0;
    var AST_NODE_TYPES;
    (function(AST_NODE_TYPES2) {
      AST_NODE_TYPES2["AccessorProperty"] = "AccessorProperty";
      AST_NODE_TYPES2["ArrayExpression"] = "ArrayExpression";
      AST_NODE_TYPES2["ArrayPattern"] = "ArrayPattern";
      AST_NODE_TYPES2["ArrowFunctionExpression"] = "ArrowFunctionExpression";
      AST_NODE_TYPES2["AssignmentExpression"] = "AssignmentExpression";
      AST_NODE_TYPES2["AssignmentPattern"] = "AssignmentPattern";
      AST_NODE_TYPES2["AwaitExpression"] = "AwaitExpression";
      AST_NODE_TYPES2["BinaryExpression"] = "BinaryExpression";
      AST_NODE_TYPES2["BlockStatement"] = "BlockStatement";
      AST_NODE_TYPES2["BreakStatement"] = "BreakStatement";
      AST_NODE_TYPES2["CallExpression"] = "CallExpression";
      AST_NODE_TYPES2["CatchClause"] = "CatchClause";
      AST_NODE_TYPES2["ChainExpression"] = "ChainExpression";
      AST_NODE_TYPES2["ClassBody"] = "ClassBody";
      AST_NODE_TYPES2["ClassDeclaration"] = "ClassDeclaration";
      AST_NODE_TYPES2["ClassExpression"] = "ClassExpression";
      AST_NODE_TYPES2["ConditionalExpression"] = "ConditionalExpression";
      AST_NODE_TYPES2["ContinueStatement"] = "ContinueStatement";
      AST_NODE_TYPES2["DebuggerStatement"] = "DebuggerStatement";
      AST_NODE_TYPES2["Decorator"] = "Decorator";
      AST_NODE_TYPES2["DoWhileStatement"] = "DoWhileStatement";
      AST_NODE_TYPES2["EmptyStatement"] = "EmptyStatement";
      AST_NODE_TYPES2["ExportAllDeclaration"] = "ExportAllDeclaration";
      AST_NODE_TYPES2["ExportDefaultDeclaration"] = "ExportDefaultDeclaration";
      AST_NODE_TYPES2["ExportNamedDeclaration"] = "ExportNamedDeclaration";
      AST_NODE_TYPES2["ExportSpecifier"] = "ExportSpecifier";
      AST_NODE_TYPES2["ExpressionStatement"] = "ExpressionStatement";
      AST_NODE_TYPES2["ForInStatement"] = "ForInStatement";
      AST_NODE_TYPES2["ForOfStatement"] = "ForOfStatement";
      AST_NODE_TYPES2["ForStatement"] = "ForStatement";
      AST_NODE_TYPES2["FunctionDeclaration"] = "FunctionDeclaration";
      AST_NODE_TYPES2["FunctionExpression"] = "FunctionExpression";
      AST_NODE_TYPES2["Identifier"] = "Identifier";
      AST_NODE_TYPES2["IfStatement"] = "IfStatement";
      AST_NODE_TYPES2["ImportAttribute"] = "ImportAttribute";
      AST_NODE_TYPES2["ImportDeclaration"] = "ImportDeclaration";
      AST_NODE_TYPES2["ImportDefaultSpecifier"] = "ImportDefaultSpecifier";
      AST_NODE_TYPES2["ImportExpression"] = "ImportExpression";
      AST_NODE_TYPES2["ImportNamespaceSpecifier"] = "ImportNamespaceSpecifier";
      AST_NODE_TYPES2["ImportSpecifier"] = "ImportSpecifier";
      AST_NODE_TYPES2["JSXAttribute"] = "JSXAttribute";
      AST_NODE_TYPES2["JSXClosingElement"] = "JSXClosingElement";
      AST_NODE_TYPES2["JSXClosingFragment"] = "JSXClosingFragment";
      AST_NODE_TYPES2["JSXElement"] = "JSXElement";
      AST_NODE_TYPES2["JSXEmptyExpression"] = "JSXEmptyExpression";
      AST_NODE_TYPES2["JSXExpressionContainer"] = "JSXExpressionContainer";
      AST_NODE_TYPES2["JSXFragment"] = "JSXFragment";
      AST_NODE_TYPES2["JSXIdentifier"] = "JSXIdentifier";
      AST_NODE_TYPES2["JSXMemberExpression"] = "JSXMemberExpression";
      AST_NODE_TYPES2["JSXNamespacedName"] = "JSXNamespacedName";
      AST_NODE_TYPES2["JSXOpeningElement"] = "JSXOpeningElement";
      AST_NODE_TYPES2["JSXOpeningFragment"] = "JSXOpeningFragment";
      AST_NODE_TYPES2["JSXSpreadAttribute"] = "JSXSpreadAttribute";
      AST_NODE_TYPES2["JSXSpreadChild"] = "JSXSpreadChild";
      AST_NODE_TYPES2["JSXText"] = "JSXText";
      AST_NODE_TYPES2["LabeledStatement"] = "LabeledStatement";
      AST_NODE_TYPES2["Literal"] = "Literal";
      AST_NODE_TYPES2["LogicalExpression"] = "LogicalExpression";
      AST_NODE_TYPES2["MemberExpression"] = "MemberExpression";
      AST_NODE_TYPES2["MetaProperty"] = "MetaProperty";
      AST_NODE_TYPES2["MethodDefinition"] = "MethodDefinition";
      AST_NODE_TYPES2["NewExpression"] = "NewExpression";
      AST_NODE_TYPES2["ObjectExpression"] = "ObjectExpression";
      AST_NODE_TYPES2["ObjectPattern"] = "ObjectPattern";
      AST_NODE_TYPES2["PrivateIdentifier"] = "PrivateIdentifier";
      AST_NODE_TYPES2["Program"] = "Program";
      AST_NODE_TYPES2["Property"] = "Property";
      AST_NODE_TYPES2["PropertyDefinition"] = "PropertyDefinition";
      AST_NODE_TYPES2["RestElement"] = "RestElement";
      AST_NODE_TYPES2["ReturnStatement"] = "ReturnStatement";
      AST_NODE_TYPES2["SequenceExpression"] = "SequenceExpression";
      AST_NODE_TYPES2["SpreadElement"] = "SpreadElement";
      AST_NODE_TYPES2["StaticBlock"] = "StaticBlock";
      AST_NODE_TYPES2["Super"] = "Super";
      AST_NODE_TYPES2["SwitchCase"] = "SwitchCase";
      AST_NODE_TYPES2["SwitchStatement"] = "SwitchStatement";
      AST_NODE_TYPES2["TaggedTemplateExpression"] = "TaggedTemplateExpression";
      AST_NODE_TYPES2["TemplateElement"] = "TemplateElement";
      AST_NODE_TYPES2["TemplateLiteral"] = "TemplateLiteral";
      AST_NODE_TYPES2["ThisExpression"] = "ThisExpression";
      AST_NODE_TYPES2["ThrowStatement"] = "ThrowStatement";
      AST_NODE_TYPES2["TryStatement"] = "TryStatement";
      AST_NODE_TYPES2["UnaryExpression"] = "UnaryExpression";
      AST_NODE_TYPES2["UpdateExpression"] = "UpdateExpression";
      AST_NODE_TYPES2["VariableDeclaration"] = "VariableDeclaration";
      AST_NODE_TYPES2["VariableDeclarator"] = "VariableDeclarator";
      AST_NODE_TYPES2["WhileStatement"] = "WhileStatement";
      AST_NODE_TYPES2["WithStatement"] = "WithStatement";
      AST_NODE_TYPES2["YieldExpression"] = "YieldExpression";
      AST_NODE_TYPES2["TSAbstractAccessorProperty"] = "TSAbstractAccessorProperty";
      AST_NODE_TYPES2["TSAbstractKeyword"] = "TSAbstractKeyword";
      AST_NODE_TYPES2["TSAbstractMethodDefinition"] = "TSAbstractMethodDefinition";
      AST_NODE_TYPES2["TSAbstractPropertyDefinition"] = "TSAbstractPropertyDefinition";
      AST_NODE_TYPES2["TSAnyKeyword"] = "TSAnyKeyword";
      AST_NODE_TYPES2["TSArrayType"] = "TSArrayType";
      AST_NODE_TYPES2["TSAsExpression"] = "TSAsExpression";
      AST_NODE_TYPES2["TSAsyncKeyword"] = "TSAsyncKeyword";
      AST_NODE_TYPES2["TSBigIntKeyword"] = "TSBigIntKeyword";
      AST_NODE_TYPES2["TSBooleanKeyword"] = "TSBooleanKeyword";
      AST_NODE_TYPES2["TSCallSignatureDeclaration"] = "TSCallSignatureDeclaration";
      AST_NODE_TYPES2["TSClassImplements"] = "TSClassImplements";
      AST_NODE_TYPES2["TSConditionalType"] = "TSConditionalType";
      AST_NODE_TYPES2["TSConstructorType"] = "TSConstructorType";
      AST_NODE_TYPES2["TSConstructSignatureDeclaration"] = "TSConstructSignatureDeclaration";
      AST_NODE_TYPES2["TSDeclareFunction"] = "TSDeclareFunction";
      AST_NODE_TYPES2["TSDeclareKeyword"] = "TSDeclareKeyword";
      AST_NODE_TYPES2["TSEmptyBodyFunctionExpression"] = "TSEmptyBodyFunctionExpression";
      AST_NODE_TYPES2["TSEnumDeclaration"] = "TSEnumDeclaration";
      AST_NODE_TYPES2["TSEnumMember"] = "TSEnumMember";
      AST_NODE_TYPES2["TSExportAssignment"] = "TSExportAssignment";
      AST_NODE_TYPES2["TSExportKeyword"] = "TSExportKeyword";
      AST_NODE_TYPES2["TSExternalModuleReference"] = "TSExternalModuleReference";
      AST_NODE_TYPES2["TSFunctionType"] = "TSFunctionType";
      AST_NODE_TYPES2["TSInstantiationExpression"] = "TSInstantiationExpression";
      AST_NODE_TYPES2["TSImportEqualsDeclaration"] = "TSImportEqualsDeclaration";
      AST_NODE_TYPES2["TSImportType"] = "TSImportType";
      AST_NODE_TYPES2["TSIndexedAccessType"] = "TSIndexedAccessType";
      AST_NODE_TYPES2["TSIndexSignature"] = "TSIndexSignature";
      AST_NODE_TYPES2["TSInferType"] = "TSInferType";
      AST_NODE_TYPES2["TSInterfaceBody"] = "TSInterfaceBody";
      AST_NODE_TYPES2["TSInterfaceDeclaration"] = "TSInterfaceDeclaration";
      AST_NODE_TYPES2["TSInterfaceHeritage"] = "TSInterfaceHeritage";
      AST_NODE_TYPES2["TSIntersectionType"] = "TSIntersectionType";
      AST_NODE_TYPES2["TSIntrinsicKeyword"] = "TSIntrinsicKeyword";
      AST_NODE_TYPES2["TSLiteralType"] = "TSLiteralType";
      AST_NODE_TYPES2["TSMappedType"] = "TSMappedType";
      AST_NODE_TYPES2["TSMethodSignature"] = "TSMethodSignature";
      AST_NODE_TYPES2["TSModuleBlock"] = "TSModuleBlock";
      AST_NODE_TYPES2["TSModuleDeclaration"] = "TSModuleDeclaration";
      AST_NODE_TYPES2["TSNamedTupleMember"] = "TSNamedTupleMember";
      AST_NODE_TYPES2["TSNamespaceExportDeclaration"] = "TSNamespaceExportDeclaration";
      AST_NODE_TYPES2["TSNeverKeyword"] = "TSNeverKeyword";
      AST_NODE_TYPES2["TSNonNullExpression"] = "TSNonNullExpression";
      AST_NODE_TYPES2["TSNullKeyword"] = "TSNullKeyword";
      AST_NODE_TYPES2["TSNumberKeyword"] = "TSNumberKeyword";
      AST_NODE_TYPES2["TSObjectKeyword"] = "TSObjectKeyword";
      AST_NODE_TYPES2["TSOptionalType"] = "TSOptionalType";
      AST_NODE_TYPES2["TSParameterProperty"] = "TSParameterProperty";
      AST_NODE_TYPES2["TSPrivateKeyword"] = "TSPrivateKeyword";
      AST_NODE_TYPES2["TSPropertySignature"] = "TSPropertySignature";
      AST_NODE_TYPES2["TSProtectedKeyword"] = "TSProtectedKeyword";
      AST_NODE_TYPES2["TSPublicKeyword"] = "TSPublicKeyword";
      AST_NODE_TYPES2["TSQualifiedName"] = "TSQualifiedName";
      AST_NODE_TYPES2["TSReadonlyKeyword"] = "TSReadonlyKeyword";
      AST_NODE_TYPES2["TSRestType"] = "TSRestType";
      AST_NODE_TYPES2["TSSatisfiesExpression"] = "TSSatisfiesExpression";
      AST_NODE_TYPES2["TSStaticKeyword"] = "TSStaticKeyword";
      AST_NODE_TYPES2["TSStringKeyword"] = "TSStringKeyword";
      AST_NODE_TYPES2["TSSymbolKeyword"] = "TSSymbolKeyword";
      AST_NODE_TYPES2["TSTemplateLiteralType"] = "TSTemplateLiteralType";
      AST_NODE_TYPES2["TSThisType"] = "TSThisType";
      AST_NODE_TYPES2["TSTupleType"] = "TSTupleType";
      AST_NODE_TYPES2["TSTypeAliasDeclaration"] = "TSTypeAliasDeclaration";
      AST_NODE_TYPES2["TSTypeAnnotation"] = "TSTypeAnnotation";
      AST_NODE_TYPES2["TSTypeAssertion"] = "TSTypeAssertion";
      AST_NODE_TYPES2["TSTypeLiteral"] = "TSTypeLiteral";
      AST_NODE_TYPES2["TSTypeOperator"] = "TSTypeOperator";
      AST_NODE_TYPES2["TSTypeParameter"] = "TSTypeParameter";
      AST_NODE_TYPES2["TSTypeParameterDeclaration"] = "TSTypeParameterDeclaration";
      AST_NODE_TYPES2["TSTypeParameterInstantiation"] = "TSTypeParameterInstantiation";
      AST_NODE_TYPES2["TSTypePredicate"] = "TSTypePredicate";
      AST_NODE_TYPES2["TSTypeQuery"] = "TSTypeQuery";
      AST_NODE_TYPES2["TSTypeReference"] = "TSTypeReference";
      AST_NODE_TYPES2["TSUndefinedKeyword"] = "TSUndefinedKeyword";
      AST_NODE_TYPES2["TSUnionType"] = "TSUnionType";
      AST_NODE_TYPES2["TSUnknownKeyword"] = "TSUnknownKeyword";
      AST_NODE_TYPES2["TSVoidKeyword"] = "TSVoidKeyword";
    })(AST_NODE_TYPES || (exports.AST_NODE_TYPES = AST_NODE_TYPES = {}));
    var AST_TOKEN_TYPES;
    (function(AST_TOKEN_TYPES2) {
      AST_TOKEN_TYPES2["Boolean"] = "Boolean";
      AST_TOKEN_TYPES2["Identifier"] = "Identifier";
      AST_TOKEN_TYPES2["JSXIdentifier"] = "JSXIdentifier";
      AST_TOKEN_TYPES2["JSXText"] = "JSXText";
      AST_TOKEN_TYPES2["Keyword"] = "Keyword";
      AST_TOKEN_TYPES2["Null"] = "Null";
      AST_TOKEN_TYPES2["Numeric"] = "Numeric";
      AST_TOKEN_TYPES2["Punctuator"] = "Punctuator";
      AST_TOKEN_TYPES2["RegularExpression"] = "RegularExpression";
      AST_TOKEN_TYPES2["String"] = "String";
      AST_TOKEN_TYPES2["Template"] = "Template";
      AST_TOKEN_TYPES2["Block"] = "Block";
      AST_TOKEN_TYPES2["Line"] = "Line";
    })(AST_TOKEN_TYPES || (exports.AST_TOKEN_TYPES = AST_TOKEN_TYPES = {}));
  }
});

// node_modules/.pnpm/@typescript-eslint+types@6.19.0/node_modules/@typescript-eslint/types/dist/lib.js
var require_lib = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+types@6.19.0/node_modules/@typescript-eslint/types/dist/lib.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+types@6.19.0/node_modules/@typescript-eslint/types/dist/parser-options.js
var require_parser_options = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+types@6.19.0/node_modules/@typescript-eslint/types/dist/parser-options.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+types@6.19.0/node_modules/@typescript-eslint/types/dist/ts-estree.js
var require_ts_estree = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+types@6.19.0/node_modules/@typescript-eslint/types/dist/ts-estree.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TSESTree = void 0;
    exports.TSESTree = __importStar(require_ast_spec());
  }
});

// node_modules/.pnpm/@typescript-eslint+types@6.19.0/node_modules/@typescript-eslint/types/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+types@6.19.0/node_modules/@typescript-eslint/types/dist/index.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AST_TOKEN_TYPES = exports.AST_NODE_TYPES = void 0;
    var ast_spec_1 = require_ast_spec();
    Object.defineProperty(exports, "AST_NODE_TYPES", { enumerable: true, get: function() {
      return ast_spec_1.AST_NODE_TYPES;
    } });
    Object.defineProperty(exports, "AST_TOKEN_TYPES", { enumerable: true, get: function() {
      return ast_spec_1.AST_TOKEN_TYPES;
    } });
    __exportStar(require_lib(), exports);
    __exportStar(require_parser_options(), exports);
    __exportStar(require_ts_estree(), exports);
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-estree.js
var require_ts_estree2 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-estree.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TSESTree = exports.AST_TOKEN_TYPES = exports.AST_NODE_TYPES = void 0;
    var types_1 = require_dist();
    Object.defineProperty(exports, "AST_NODE_TYPES", { enumerable: true, get: function() {
      return types_1.AST_NODE_TYPES;
    } });
    Object.defineProperty(exports, "AST_TOKEN_TYPES", { enumerable: true, get: function() {
      return types_1.AST_TOKEN_TYPES;
    } });
    Object.defineProperty(exports, "TSESTree", { enumerable: true, get: function() {
      return types_1.TSESTree;
    } });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/predicates.js
var require_predicates2 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/predicates.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isVariableDeclarator = exports.isTypeKeyword = exports.isTypeAssertion = exports.isTSFunctionType = exports.isTSConstructorType = exports.isSetter = exports.isOptionalCallExpression = exports.isOptionalChainPunctuator = exports.isNotOptionalChainPunctuator = exports.isNotNonNullAssertionPunctuator = exports.isNonNullAssertionPunctuator = exports.isLogicalOrOperator = exports.isLoop = exports.isImportKeyword = exports.isIdentifier = exports.isFunctionType = exports.isFunctionOrFunctionType = exports.isFunction = exports.isClassOrTypeElement = exports.isConstructor = exports.isAwaitKeyword = exports.isAwaitExpression = void 0;
    var ts_estree_1 = require_ts_estree2();
    var helpers_1 = require_helpers();
    var isOptionalChainPunctuator = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: "?." });
    exports.isOptionalChainPunctuator = isOptionalChainPunctuator;
    var isNotOptionalChainPunctuator = (0, helpers_1.isNotTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: "?." });
    exports.isNotOptionalChainPunctuator = isNotOptionalChainPunctuator;
    var isNonNullAssertionPunctuator = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: "!" });
    exports.isNonNullAssertionPunctuator = isNonNullAssertionPunctuator;
    var isNotNonNullAssertionPunctuator = (0, helpers_1.isNotTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: "!" });
    exports.isNotNonNullAssertionPunctuator = isNotNonNullAssertionPunctuator;
    var isOptionalCallExpression = (0, helpers_1.isNodeOfTypeWithConditions)(
      ts_estree_1.AST_NODE_TYPES.CallExpression,
      // this flag means the call expression itself is option
      // i.e. it is foo.bar?.() and not foo?.bar()
      { optional: true }
    );
    exports.isOptionalCallExpression = isOptionalCallExpression;
    var isLogicalOrOperator = (0, helpers_1.isNodeOfTypeWithConditions)(ts_estree_1.AST_NODE_TYPES.LogicalExpression, { operator: "||" });
    exports.isLogicalOrOperator = isLogicalOrOperator;
    var isTypeAssertion = (0, helpers_1.isNodeOfTypes)([
      ts_estree_1.AST_NODE_TYPES.TSAsExpression,
      ts_estree_1.AST_NODE_TYPES.TSTypeAssertion
    ]);
    exports.isTypeAssertion = isTypeAssertion;
    var isVariableDeclarator = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.VariableDeclarator);
    exports.isVariableDeclarator = isVariableDeclarator;
    var functionTypes = [
      ts_estree_1.AST_NODE_TYPES.ArrowFunctionExpression,
      ts_estree_1.AST_NODE_TYPES.FunctionDeclaration,
      ts_estree_1.AST_NODE_TYPES.FunctionExpression
    ];
    var isFunction = (0, helpers_1.isNodeOfTypes)(functionTypes);
    exports.isFunction = isFunction;
    var functionTypeTypes = [
      ts_estree_1.AST_NODE_TYPES.TSCallSignatureDeclaration,
      ts_estree_1.AST_NODE_TYPES.TSConstructorType,
      ts_estree_1.AST_NODE_TYPES.TSConstructSignatureDeclaration,
      ts_estree_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
      ts_estree_1.AST_NODE_TYPES.TSFunctionType,
      ts_estree_1.AST_NODE_TYPES.TSMethodSignature
    ];
    var isFunctionType = (0, helpers_1.isNodeOfTypes)(functionTypeTypes);
    exports.isFunctionType = isFunctionType;
    var isFunctionOrFunctionType = (0, helpers_1.isNodeOfTypes)([
      ...functionTypes,
      ...functionTypeTypes
    ]);
    exports.isFunctionOrFunctionType = isFunctionOrFunctionType;
    var isTSFunctionType = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.TSFunctionType);
    exports.isTSFunctionType = isTSFunctionType;
    var isTSConstructorType = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.TSConstructorType);
    exports.isTSConstructorType = isTSConstructorType;
    var isClassOrTypeElement = (0, helpers_1.isNodeOfTypes)([
      // ClassElement
      ts_estree_1.AST_NODE_TYPES.PropertyDefinition,
      ts_estree_1.AST_NODE_TYPES.FunctionExpression,
      ts_estree_1.AST_NODE_TYPES.MethodDefinition,
      ts_estree_1.AST_NODE_TYPES.TSAbstractPropertyDefinition,
      ts_estree_1.AST_NODE_TYPES.TSAbstractMethodDefinition,
      ts_estree_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
      ts_estree_1.AST_NODE_TYPES.TSIndexSignature,
      // TypeElement
      ts_estree_1.AST_NODE_TYPES.TSCallSignatureDeclaration,
      ts_estree_1.AST_NODE_TYPES.TSConstructSignatureDeclaration,
      // AST_NODE_TYPES.TSIndexSignature,
      ts_estree_1.AST_NODE_TYPES.TSMethodSignature,
      ts_estree_1.AST_NODE_TYPES.TSPropertySignature
    ]);
    exports.isClassOrTypeElement = isClassOrTypeElement;
    var isConstructor = (0, helpers_1.isNodeOfTypeWithConditions)(ts_estree_1.AST_NODE_TYPES.MethodDefinition, { kind: "constructor" });
    exports.isConstructor = isConstructor;
    function isSetter(node2) {
      return !!node2 && (node2.type === ts_estree_1.AST_NODE_TYPES.MethodDefinition || node2.type === ts_estree_1.AST_NODE_TYPES.Property) && node2.kind === "set";
    }
    exports.isSetter = isSetter;
    var isIdentifier = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.Identifier);
    exports.isIdentifier = isIdentifier;
    var isAwaitExpression = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.AwaitExpression);
    exports.isAwaitExpression = isAwaitExpression;
    var isAwaitKeyword = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Identifier, {
      value: "await"
    });
    exports.isAwaitKeyword = isAwaitKeyword;
    var isTypeKeyword = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Identifier, {
      value: "type"
    });
    exports.isTypeKeyword = isTypeKeyword;
    var isImportKeyword = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Keyword, {
      value: "import"
    });
    exports.isImportKeyword = isImportKeyword;
    var isLoop = (0, helpers_1.isNodeOfTypes)([
      ts_estree_1.AST_NODE_TYPES.DoWhileStatement,
      ts_estree_1.AST_NODE_TYPES.ForStatement,
      ts_estree_1.AST_NODE_TYPES.ForInStatement,
      ts_estree_1.AST_NODE_TYPES.ForOfStatement,
      ts_estree_1.AST_NODE_TYPES.WhileStatement
    ]);
    exports.isLoop = isLoop;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/index.js
var require_ast_utils = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ast-utils/index.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_eslint_utils2(), exports);
    __exportStar(require_helpers(), exports);
    __exportStar(require_misc(), exports);
    __exportStar(require_predicates2(), exports);
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/deepMerge.js
var require_deepMerge = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/deepMerge.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isObjectNotArray = exports.deepMerge = void 0;
    function isObjectNotArray(obj) {
      return typeof obj === "object" && obj != null && !Array.isArray(obj);
    }
    exports.isObjectNotArray = isObjectNotArray;
    function deepMerge(first = {}, second = {}) {
      const keys = new Set(Object.keys(first).concat(Object.keys(second)));
      return Array.from(keys).reduce((acc, key) => {
        const firstHasKey = key in first;
        const secondHasKey = key in second;
        const firstValue = first[key];
        const secondValue = second[key];
        if (firstHasKey && secondHasKey) {
          if (isObjectNotArray(firstValue) && isObjectNotArray(secondValue)) {
            acc[key] = deepMerge(firstValue, secondValue);
          } else {
            acc[key] = secondValue;
          }
        } else if (firstHasKey) {
          acc[key] = firstValue;
        } else {
          acc[key] = secondValue;
        }
        return acc;
      }, {});
    }
    exports.deepMerge = deepMerge;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/applyDefault.js
var require_applyDefault = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/applyDefault.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.applyDefault = void 0;
    var deepMerge_1 = require_deepMerge();
    function applyDefault(defaultOptions, userOptions) {
      const options = JSON.parse(JSON.stringify(defaultOptions));
      if (userOptions == null) {
        return options;
      }
      options.forEach((opt, i) => {
        if (userOptions[i] !== void 0) {
          const userOpt = userOptions[i];
          if ((0, deepMerge_1.isObjectNotArray)(userOpt) && (0, deepMerge_1.isObjectNotArray)(opt)) {
            options[i] = (0, deepMerge_1.deepMerge)(opt, userOpt);
          } else {
            options[i] = userOpt;
          }
        }
      });
      return options;
    }
    exports.applyDefault = applyDefault;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/context.js
var require_context = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/context.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSourceCode = exports.getScope = exports.getFilename = exports.getDeclaredVariables = exports.getCwd = exports.getAncestors = void 0;
    function getAncestors(context) {
      return context.getAncestors();
    }
    exports.getAncestors = getAncestors;
    function getCwd(context) {
      return context.cwd ?? context.getCwd();
    }
    exports.getCwd = getCwd;
    function getDeclaredVariables(context, node2) {
      const sourceCode = getSourceCode(context);
      return sourceCode.getDeclaredVariables?.(node2) ?? context.getDeclaredVariables(node2);
    }
    exports.getDeclaredVariables = getDeclaredVariables;
    function getFilename(context) {
      return context.filename ?? context.getFilename();
    }
    exports.getFilename = getFilename;
    function getScope(context) {
      return context.getScope();
    }
    exports.getScope = getScope;
    function getSourceCode(context) {
      return context.sourceCode ?? context.getSourceCode();
    }
    exports.getSourceCode = getSourceCode;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/parserPathSeemsToBeTSESLint.js
var require_parserPathSeemsToBeTSESLint = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/parserPathSeemsToBeTSESLint.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parserPathSeemsToBeTSESLint = void 0;
    function parserPathSeemsToBeTSESLint(parserPath) {
      return /(?:typescript-eslint|\.\.)[\w/\\]*parser/.test(parserPath);
    }
    exports.parserPathSeemsToBeTSESLint = parserPathSeemsToBeTSESLint;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/getParserServices.js
var require_getParserServices = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/getParserServices.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getParserServices = void 0;
    var parserPathSeemsToBeTSESLint_1 = require_parserPathSeemsToBeTSESLint();
    var ERROR_MESSAGE_REQUIRES_PARSER_SERVICES = 'You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.';
    var ERROR_MESSAGE_UNKNOWN_PARSER = 'Note: detected a parser other than @typescript-eslint/parser. Make sure the parser is configured to forward "parserOptions.project" to @typescript-eslint/parser.';
    function getParserServices(context, allowWithoutFullTypeInformation = false) {
      if (
        // eslint-disable-next-line deprecation/deprecation -- TODO - support for ESLint v9 with backwards-compatible support for ESLint v8
        context.parserServices?.esTreeNodeToTSNodeMap == null || // eslint-disable-next-line deprecation/deprecation, @typescript-eslint/no-unnecessary-condition -- TODO - support for ESLint v9 with backwards-compatible support for ESLint v8
        context.parserServices.tsNodeToESTreeNodeMap == null
      ) {
        throwError(context.parserPath);
      }
      if (
        // eslint-disable-next-line deprecation/deprecation -- TODO - support for ESLint v9 with backwards-compatible support for ESLint v8
        context.parserServices.program == null && !allowWithoutFullTypeInformation
      ) {
        throwError(context.parserPath);
      }
      return context.parserServices;
    }
    exports.getParserServices = getParserServices;
    function throwError(parserPath) {
      throw new Error((0, parserPathSeemsToBeTSESLint_1.parserPathSeemsToBeTSESLint)(parserPath) ? ERROR_MESSAGE_REQUIRES_PARSER_SERVICES : [
        ERROR_MESSAGE_REQUIRES_PARSER_SERVICES,
        ERROR_MESSAGE_UNKNOWN_PARSER
      ].join("\n"));
    }
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/InferTypesFromRule.js
var require_InferTypesFromRule = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/InferTypesFromRule.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/RuleCreator.js
var require_RuleCreator = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/RuleCreator.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RuleCreator = void 0;
    var applyDefault_1 = require_applyDefault();
    function RuleCreator(urlCreator) {
      return function createNamedRule({ name, meta, ...rule }) {
        return createRule({
          meta: {
            ...meta,
            docs: {
              ...meta.docs,
              url: urlCreator(name)
            }
          },
          ...rule
        });
      };
    }
    exports.RuleCreator = RuleCreator;
    function createRule({ create, defaultOptions, meta }) {
      return {
        create(context) {
          const optionsWithDefault = (0, applyDefault_1.applyDefault)(defaultOptions, context.options);
          return create(context, optionsWithDefault);
        },
        defaultOptions,
        meta
      };
    }
    RuleCreator.withoutDocs = createRule;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/nullThrows.js
var require_nullThrows = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/nullThrows.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NullThrowsReasons = exports.nullThrows = void 0;
    var NullThrowsReasons = {
      MissingParent: "Expected node to have a parent.",
      MissingToken: (token, thing) => `Expected to find a ${token} for the ${thing}.`
    };
    exports.NullThrowsReasons = NullThrowsReasons;
    function nullThrows(value, message) {
      if (value == null) {
        throw new Error(`Non-null Assertion Failed: ${message}`);
      }
      return value;
    }
    exports.nullThrows = nullThrows;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/index.js
var require_eslint_utils3 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/eslint-utils/index.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_applyDefault(), exports);
    __exportStar(require_context(), exports);
    __exportStar(require_getParserServices(), exports);
    __exportStar(require_InferTypesFromRule(), exports);
    __exportStar(require_RuleCreator(), exports);
    __exportStar(require_deepMerge(), exports);
    __exportStar(require_nullThrows(), exports);
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/json-schema.js
var require_json_schema = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/json-schema.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/AST.js
var require_AST = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/AST.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/CLIEngine.js
var require_CLIEngine = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/CLIEngine.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CLIEngine = void 0;
    var eslint_1 = require("eslint");
    var CLIEngine = eslint_1.CLIEngine ? class CLIEngine extends eslint_1.CLIEngine {
    } : void 0;
    exports.CLIEngine = CLIEngine;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/Config.js
var require_Config = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/Config.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/ESLint.js
var require_ESLint = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/ESLint.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ESLint = void 0;
    var eslint_1 = require("eslint");
    var _ESLint = eslint_1.ESLint ?? function() {
      throw new Error("Attempted to construct an ESLint instance on less than ESLint v7.0.0");
    };
    var ESLint = class extends _ESLint {
    };
    exports.ESLint = ESLint;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/Linter.js
var require_Linter = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/Linter.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Linter = void 0;
    var eslint_1 = require("eslint");
    var Linter = class extends eslint_1.Linter {
    };
    exports.Linter = Linter;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/Parser.js
var require_Parser = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/Parser.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/ParserOptions.js
var require_ParserOptions = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/ParserOptions.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/Processor.js
var require_Processor = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/Processor.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/Rule.js
var require_Rule = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/Rule.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/RuleTester.js
var require_RuleTester = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/RuleTester.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RuleTester = void 0;
    var eslint_1 = require("eslint");
    var RuleTester = class extends eslint_1.RuleTester {
    };
    exports.RuleTester = RuleTester;
  }
});

// node_modules/.pnpm/@typescript-eslint+visitor-keys@6.19.0/node_modules/@typescript-eslint/visitor-keys/dist/get-keys.js
var require_get_keys = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+visitor-keys@6.19.0/node_modules/@typescript-eslint/visitor-keys/dist/get-keys.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getKeys = void 0;
    var eslint_visitor_keys_1 = require_eslint_visitor_keys();
    var getKeys = eslint_visitor_keys_1.getKeys;
    exports.getKeys = getKeys;
  }
});

// node_modules/.pnpm/@typescript-eslint+visitor-keys@6.19.0/node_modules/@typescript-eslint/visitor-keys/dist/visitor-keys.js
var require_visitor_keys = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+visitor-keys@6.19.0/node_modules/@typescript-eslint/visitor-keys/dist/visitor-keys.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.visitorKeys = void 0;
    var eslintVisitorKeys = __importStar(require_eslint_visitor_keys());
    var SharedVisitorKeys = (() => {
      const FunctionType = ["typeParameters", "params", "returnType"];
      const AnonymousFunction = [...FunctionType, "body"];
      const AbstractPropertyDefinition = [
        "decorators",
        "key",
        "typeAnnotation"
      ];
      return {
        AnonymousFunction,
        Function: ["id", ...AnonymousFunction],
        FunctionType,
        ClassDeclaration: [
          "decorators",
          "id",
          "typeParameters",
          "superClass",
          "superTypeArguments",
          "implements",
          "body"
        ],
        AbstractPropertyDefinition: ["decorators", "key", "typeAnnotation"],
        PropertyDefinition: [...AbstractPropertyDefinition, "value"],
        TypeAssertion: ["expression", "typeAnnotation"]
      };
    })();
    var additionalKeys = {
      AccessorProperty: SharedVisitorKeys.PropertyDefinition,
      ArrayPattern: ["decorators", "elements", "typeAnnotation"],
      ArrowFunctionExpression: SharedVisitorKeys.AnonymousFunction,
      AssignmentPattern: ["decorators", "left", "right", "typeAnnotation"],
      CallExpression: ["callee", "typeArguments", "arguments"],
      ClassDeclaration: SharedVisitorKeys.ClassDeclaration,
      ClassExpression: SharedVisitorKeys.ClassDeclaration,
      Decorator: ["expression"],
      ExportAllDeclaration: ["exported", "source", "assertions"],
      ExportNamedDeclaration: ["declaration", "specifiers", "source", "assertions"],
      FunctionDeclaration: SharedVisitorKeys.Function,
      FunctionExpression: SharedVisitorKeys.Function,
      Identifier: ["decorators", "typeAnnotation"],
      ImportAttribute: ["key", "value"],
      ImportDeclaration: ["specifiers", "source", "assertions"],
      ImportExpression: ["source", "attributes"],
      JSXClosingFragment: [],
      JSXOpeningElement: ["name", "typeArguments", "attributes"],
      JSXOpeningFragment: [],
      JSXSpreadChild: ["expression"],
      MethodDefinition: ["decorators", "key", "value"],
      NewExpression: ["callee", "typeArguments", "arguments"],
      ObjectPattern: ["decorators", "properties", "typeAnnotation"],
      PropertyDefinition: SharedVisitorKeys.PropertyDefinition,
      RestElement: ["decorators", "argument", "typeAnnotation"],
      StaticBlock: ["body"],
      TaggedTemplateExpression: ["tag", "typeArguments", "quasi"],
      TSAbstractAccessorProperty: SharedVisitorKeys.AbstractPropertyDefinition,
      TSAbstractKeyword: [],
      TSAbstractMethodDefinition: ["key", "value"],
      TSAbstractPropertyDefinition: SharedVisitorKeys.AbstractPropertyDefinition,
      TSAnyKeyword: [],
      TSArrayType: ["elementType"],
      TSAsExpression: SharedVisitorKeys.TypeAssertion,
      TSAsyncKeyword: [],
      TSBigIntKeyword: [],
      TSBooleanKeyword: [],
      TSCallSignatureDeclaration: SharedVisitorKeys.FunctionType,
      TSClassImplements: ["expression", "typeArguments"],
      TSConditionalType: ["checkType", "extendsType", "trueType", "falseType"],
      TSConstructorType: SharedVisitorKeys.FunctionType,
      TSConstructSignatureDeclaration: SharedVisitorKeys.FunctionType,
      TSDeclareFunction: SharedVisitorKeys.Function,
      TSDeclareKeyword: [],
      TSEmptyBodyFunctionExpression: ["id", ...SharedVisitorKeys.FunctionType],
      TSEnumDeclaration: ["id", "members"],
      TSEnumMember: ["id", "initializer"],
      TSExportAssignment: ["expression"],
      TSExportKeyword: [],
      TSExternalModuleReference: ["expression"],
      TSFunctionType: SharedVisitorKeys.FunctionType,
      TSImportEqualsDeclaration: ["id", "moduleReference"],
      TSImportType: ["argument", "qualifier", "typeArguments"],
      TSIndexedAccessType: ["indexType", "objectType"],
      TSIndexSignature: ["parameters", "typeAnnotation"],
      TSInferType: ["typeParameter"],
      TSInstantiationExpression: ["expression", "typeArguments"],
      TSInterfaceBody: ["body"],
      TSInterfaceDeclaration: ["id", "typeParameters", "extends", "body"],
      TSInterfaceHeritage: ["expression", "typeArguments"],
      TSIntersectionType: ["types"],
      TSIntrinsicKeyword: [],
      TSLiteralType: ["literal"],
      TSMappedType: ["nameType", "typeParameter", "typeAnnotation"],
      TSMethodSignature: ["typeParameters", "key", "params", "returnType"],
      TSModuleBlock: ["body"],
      TSModuleDeclaration: ["id", "body"],
      TSNamedTupleMember: ["label", "elementType"],
      TSNamespaceExportDeclaration: ["id"],
      TSNeverKeyword: [],
      TSNonNullExpression: ["expression"],
      TSNullKeyword: [],
      TSNumberKeyword: [],
      TSObjectKeyword: [],
      TSOptionalType: ["typeAnnotation"],
      TSParameterProperty: ["decorators", "parameter"],
      TSPrivateKeyword: [],
      TSPropertySignature: ["typeAnnotation", "key"],
      TSProtectedKeyword: [],
      TSPublicKeyword: [],
      TSQualifiedName: ["left", "right"],
      TSReadonlyKeyword: [],
      TSRestType: ["typeAnnotation"],
      TSSatisfiesExpression: [
        // this is intentionally different to SharedVisitorKeys.TypeAssertion because
        // the type annotation comes first in the source code
        "typeAnnotation",
        "expression"
      ],
      TSStaticKeyword: [],
      TSStringKeyword: [],
      TSSymbolKeyword: [],
      TSTemplateLiteralType: ["quasis", "types"],
      TSThisType: [],
      TSTupleType: ["elementTypes"],
      TSTypeAliasDeclaration: ["id", "typeParameters", "typeAnnotation"],
      TSTypeAnnotation: ["typeAnnotation"],
      TSTypeAssertion: SharedVisitorKeys.TypeAssertion,
      TSTypeLiteral: ["members"],
      TSTypeOperator: ["typeAnnotation"],
      TSTypeParameter: ["name", "constraint", "default"],
      TSTypeParameterDeclaration: ["params"],
      TSTypeParameterInstantiation: ["params"],
      TSTypePredicate: ["typeAnnotation", "parameterName"],
      TSTypeQuery: ["exprName", "typeArguments"],
      TSTypeReference: ["typeName", "typeArguments"],
      TSUndefinedKeyword: [],
      TSUnionType: ["types"],
      TSUnknownKeyword: [],
      TSVoidKeyword: []
    };
    var visitorKeys = eslintVisitorKeys.unionWith(additionalKeys);
    exports.visitorKeys = visitorKeys;
  }
});

// node_modules/.pnpm/@typescript-eslint+visitor-keys@6.19.0/node_modules/@typescript-eslint/visitor-keys/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+visitor-keys@6.19.0/node_modules/@typescript-eslint/visitor-keys/dist/index.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.visitorKeys = exports.getKeys = void 0;
    var get_keys_1 = require_get_keys();
    Object.defineProperty(exports, "getKeys", { enumerable: true, get: function() {
      return get_keys_1.getKeys;
    } });
    var visitor_keys_1 = require_visitor_keys();
    Object.defineProperty(exports, "visitorKeys", { enumerable: true, get: function() {
      return visitor_keys_1.visitorKeys;
    } });
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/assert.js
var require_assert = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/assert.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assert = void 0;
    function assert(value, message) {
      if (value == null) {
        throw new Error(message);
      }
    }
    exports.assert = assert;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/ID.js
var require_ID = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/ID.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resetIds = exports.createIdGenerator = void 0;
    var ID_CACHE = /* @__PURE__ */ new Map();
    var NEXT_KEY = 0;
    function createIdGenerator() {
      const key = NEXT_KEY += 1;
      ID_CACHE.set(key, 0);
      return () => {
        const current = ID_CACHE.get(key) ?? 0;
        const next = current + 1;
        ID_CACHE.set(key, next);
        return next;
      };
    }
    exports.createIdGenerator = createIdGenerator;
    function resetIds() {
      ID_CACHE.clear();
    }
    exports.resetIds = resetIds;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/DefinitionBase.js
var require_DefinitionBase = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/DefinitionBase.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefinitionBase = void 0;
    var ID_1 = require_ID();
    var generator = (0, ID_1.createIdGenerator)();
    var DefinitionBase = class {
      constructor(type, name, node2, parent) {
        this.$id = generator();
        this.type = type;
        this.name = name;
        this.node = node2;
        this.parent = parent;
      }
    };
    exports.DefinitionBase = DefinitionBase;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/DefinitionType.js
var require_DefinitionType = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/DefinitionType.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefinitionType = void 0;
    var DefinitionType;
    (function(DefinitionType2) {
      DefinitionType2["CatchClause"] = "CatchClause";
      DefinitionType2["ClassName"] = "ClassName";
      DefinitionType2["FunctionName"] = "FunctionName";
      DefinitionType2["ImplicitGlobalVariable"] = "ImplicitGlobalVariable";
      DefinitionType2["ImportBinding"] = "ImportBinding";
      DefinitionType2["Parameter"] = "Parameter";
      DefinitionType2["TSEnumName"] = "TSEnumName";
      DefinitionType2["TSEnumMember"] = "TSEnumMemberName";
      DefinitionType2["TSModuleName"] = "TSModuleName";
      DefinitionType2["Type"] = "Type";
      DefinitionType2["Variable"] = "Variable";
    })(DefinitionType || (exports.DefinitionType = DefinitionType = {}));
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/CatchClauseDefinition.js
var require_CatchClauseDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/CatchClauseDefinition.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CatchClauseDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var CatchClauseDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2) {
        super(DefinitionType_1.DefinitionType.CatchClause, name, node2, null);
        this.isTypeDefinition = false;
        this.isVariableDefinition = true;
      }
    };
    exports.CatchClauseDefinition = CatchClauseDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/ClassNameDefinition.js
var require_ClassNameDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/ClassNameDefinition.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClassNameDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var ClassNameDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2) {
        super(DefinitionType_1.DefinitionType.ClassName, name, node2, null);
        this.isTypeDefinition = true;
        this.isVariableDefinition = true;
      }
    };
    exports.ClassNameDefinition = ClassNameDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/Definition.js
var require_Definition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/Definition.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/FunctionNameDefinition.js
var require_FunctionNameDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/FunctionNameDefinition.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FunctionNameDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var FunctionNameDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2) {
        super(DefinitionType_1.DefinitionType.FunctionName, name, node2, null);
        this.isTypeDefinition = false;
        this.isVariableDefinition = true;
      }
    };
    exports.FunctionNameDefinition = FunctionNameDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/ImplicitGlobalVariableDefinition.js
var require_ImplicitGlobalVariableDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/ImplicitGlobalVariableDefinition.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImplicitGlobalVariableDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var ImplicitGlobalVariableDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2) {
        super(DefinitionType_1.DefinitionType.ImplicitGlobalVariable, name, node2, null);
        this.isTypeDefinition = false;
        this.isVariableDefinition = true;
      }
    };
    exports.ImplicitGlobalVariableDefinition = ImplicitGlobalVariableDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/ImportBindingDefinition.js
var require_ImportBindingDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/ImportBindingDefinition.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImportBindingDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var ImportBindingDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2, decl) {
        super(DefinitionType_1.DefinitionType.ImportBinding, name, node2, decl);
        this.isTypeDefinition = true;
        this.isVariableDefinition = true;
      }
    };
    exports.ImportBindingDefinition = ImportBindingDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/ParameterDefinition.js
var require_ParameterDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/ParameterDefinition.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParameterDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var ParameterDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2, rest) {
        super(DefinitionType_1.DefinitionType.Parameter, name, node2, null);
        this.isTypeDefinition = false;
        this.isVariableDefinition = true;
        this.rest = rest;
      }
    };
    exports.ParameterDefinition = ParameterDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/TSEnumMemberDefinition.js
var require_TSEnumMemberDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/TSEnumMemberDefinition.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TSEnumMemberDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var TSEnumMemberDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2) {
        super(DefinitionType_1.DefinitionType.TSEnumMember, name, node2, null);
        this.isTypeDefinition = true;
        this.isVariableDefinition = true;
      }
    };
    exports.TSEnumMemberDefinition = TSEnumMemberDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/TSEnumNameDefinition.js
var require_TSEnumNameDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/TSEnumNameDefinition.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TSEnumNameDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var TSEnumNameDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2) {
        super(DefinitionType_1.DefinitionType.TSEnumName, name, node2, null);
        this.isTypeDefinition = true;
        this.isVariableDefinition = true;
      }
    };
    exports.TSEnumNameDefinition = TSEnumNameDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/TSModuleNameDefinition.js
var require_TSModuleNameDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/TSModuleNameDefinition.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TSModuleNameDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var TSModuleNameDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2) {
        super(DefinitionType_1.DefinitionType.TSModuleName, name, node2, null);
        this.isTypeDefinition = true;
        this.isVariableDefinition = true;
      }
    };
    exports.TSModuleNameDefinition = TSModuleNameDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/TypeDefinition.js
var require_TypeDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/TypeDefinition.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var TypeDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2) {
        super(DefinitionType_1.DefinitionType.Type, name, node2, null);
        this.isTypeDefinition = true;
        this.isVariableDefinition = false;
      }
    };
    exports.TypeDefinition = TypeDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/VariableDefinition.js
var require_VariableDefinition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/VariableDefinition.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VariableDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var VariableDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node2, decl) {
        super(DefinitionType_1.DefinitionType.Variable, name, node2, decl);
        this.isTypeDefinition = false;
        this.isVariableDefinition = true;
      }
    };
    exports.VariableDefinition = VariableDefinition;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/index.js
var require_definition = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/definition/index.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_CatchClauseDefinition(), exports);
    __exportStar(require_ClassNameDefinition(), exports);
    __exportStar(require_Definition(), exports);
    __exportStar(require_DefinitionType(), exports);
    __exportStar(require_FunctionNameDefinition(), exports);
    __exportStar(require_ImplicitGlobalVariableDefinition(), exports);
    __exportStar(require_ImportBindingDefinition(), exports);
    __exportStar(require_ParameterDefinition(), exports);
    __exportStar(require_TSEnumMemberDefinition(), exports);
    __exportStar(require_TSEnumNameDefinition(), exports);
    __exportStar(require_TSModuleNameDefinition(), exports);
    __exportStar(require_TypeDefinition(), exports);
    __exportStar(require_VariableDefinition(), exports);
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/base-config.js
var require_base_config = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/base-config.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TYPE_VALUE = exports.VALUE = exports.TYPE = void 0;
    exports.TYPE = Object.freeze({
      eslintImplicitGlobalSetting: "readonly",
      isTypeVariable: true,
      isValueVariable: false
    });
    exports.VALUE = Object.freeze({
      eslintImplicitGlobalSetting: "readonly",
      isTypeVariable: false,
      isValueVariable: true
    });
    exports.TYPE_VALUE = Object.freeze({
      eslintImplicitGlobalSetting: "readonly",
      isTypeVariable: true,
      isValueVariable: true
    });
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/decorators.js
var require_decorators = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/decorators.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decorators = void 0;
    var base_config_1 = require_base_config();
    exports.decorators = {
      ClassMemberDecoratorContext: base_config_1.TYPE,
      DecoratorContext: base_config_1.TYPE,
      DecoratorMetadataObject: base_config_1.TYPE,
      DecoratorMetadata: base_config_1.TYPE,
      ClassDecoratorContext: base_config_1.TYPE,
      ClassMethodDecoratorContext: base_config_1.TYPE,
      ClassGetterDecoratorContext: base_config_1.TYPE,
      ClassSetterDecoratorContext: base_config_1.TYPE,
      ClassAccessorDecoratorContext: base_config_1.TYPE,
      ClassAccessorDecoratorTarget: base_config_1.TYPE,
      ClassAccessorDecoratorResult: base_config_1.TYPE,
      ClassFieldDecoratorContext: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/decorators.legacy.js
var require_decorators_legacy = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/decorators.legacy.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decorators_legacy = void 0;
    var base_config_1 = require_base_config();
    exports.decorators_legacy = {
      ClassDecorator: base_config_1.TYPE,
      PropertyDecorator: base_config_1.TYPE,
      MethodDecorator: base_config_1.TYPE,
      ParameterDecorator: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/dom.js
var require_dom = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/dom.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dom = void 0;
    var base_config_1 = require_base_config();
    exports.dom = {
      AddEventListenerOptions: base_config_1.TYPE,
      AesCbcParams: base_config_1.TYPE,
      AesCtrParams: base_config_1.TYPE,
      AesDerivedKeyParams: base_config_1.TYPE,
      AesGcmParams: base_config_1.TYPE,
      AesKeyAlgorithm: base_config_1.TYPE,
      AesKeyGenParams: base_config_1.TYPE,
      Algorithm: base_config_1.TYPE,
      AnalyserOptions: base_config_1.TYPE,
      AnimationEventInit: base_config_1.TYPE,
      AnimationPlaybackEventInit: base_config_1.TYPE,
      AssignedNodesOptions: base_config_1.TYPE,
      AudioBufferOptions: base_config_1.TYPE,
      AudioBufferSourceOptions: base_config_1.TYPE,
      AudioConfiguration: base_config_1.TYPE,
      AudioContextOptions: base_config_1.TYPE,
      AudioNodeOptions: base_config_1.TYPE,
      AudioProcessingEventInit: base_config_1.TYPE,
      AudioTimestamp: base_config_1.TYPE,
      AudioWorkletNodeOptions: base_config_1.TYPE,
      AuthenticationExtensionsClientInputs: base_config_1.TYPE,
      AuthenticationExtensionsClientOutputs: base_config_1.TYPE,
      AuthenticatorSelectionCriteria: base_config_1.TYPE,
      AvcEncoderConfig: base_config_1.TYPE,
      BiquadFilterOptions: base_config_1.TYPE,
      BlobEventInit: base_config_1.TYPE,
      BlobPropertyBag: base_config_1.TYPE,
      CSSMatrixComponentOptions: base_config_1.TYPE,
      CSSNumericType: base_config_1.TYPE,
      CSSStyleSheetInit: base_config_1.TYPE,
      CacheQueryOptions: base_config_1.TYPE,
      CanvasRenderingContext2DSettings: base_config_1.TYPE,
      ChannelMergerOptions: base_config_1.TYPE,
      ChannelSplitterOptions: base_config_1.TYPE,
      CheckVisibilityOptions: base_config_1.TYPE,
      ClientQueryOptions: base_config_1.TYPE,
      ClipboardEventInit: base_config_1.TYPE,
      ClipboardItemOptions: base_config_1.TYPE,
      CloseEventInit: base_config_1.TYPE,
      CompositionEventInit: base_config_1.TYPE,
      ComputedEffectTiming: base_config_1.TYPE,
      ComputedKeyframe: base_config_1.TYPE,
      ConstantSourceOptions: base_config_1.TYPE,
      ConstrainBooleanParameters: base_config_1.TYPE,
      ConstrainDOMStringParameters: base_config_1.TYPE,
      ConstrainDoubleRange: base_config_1.TYPE,
      ConstrainULongRange: base_config_1.TYPE,
      ConvolverOptions: base_config_1.TYPE,
      CredentialCreationOptions: base_config_1.TYPE,
      CredentialPropertiesOutput: base_config_1.TYPE,
      CredentialRequestOptions: base_config_1.TYPE,
      CryptoKeyPair: base_config_1.TYPE,
      CustomEventInit: base_config_1.TYPE,
      DOMMatrix2DInit: base_config_1.TYPE,
      DOMMatrixInit: base_config_1.TYPE,
      DOMPointInit: base_config_1.TYPE,
      DOMQuadInit: base_config_1.TYPE,
      DOMRectInit: base_config_1.TYPE,
      DelayOptions: base_config_1.TYPE,
      DeviceMotionEventAccelerationInit: base_config_1.TYPE,
      DeviceMotionEventInit: base_config_1.TYPE,
      DeviceMotionEventRotationRateInit: base_config_1.TYPE,
      DeviceOrientationEventInit: base_config_1.TYPE,
      DisplayMediaStreamOptions: base_config_1.TYPE,
      DocumentTimelineOptions: base_config_1.TYPE,
      DoubleRange: base_config_1.TYPE,
      DragEventInit: base_config_1.TYPE,
      DynamicsCompressorOptions: base_config_1.TYPE,
      EcKeyAlgorithm: base_config_1.TYPE,
      EcKeyGenParams: base_config_1.TYPE,
      EcKeyImportParams: base_config_1.TYPE,
      EcdhKeyDeriveParams: base_config_1.TYPE,
      EcdsaParams: base_config_1.TYPE,
      EffectTiming: base_config_1.TYPE,
      ElementCreationOptions: base_config_1.TYPE,
      ElementDefinitionOptions: base_config_1.TYPE,
      EncodedVideoChunkInit: base_config_1.TYPE,
      EncodedVideoChunkMetadata: base_config_1.TYPE,
      ErrorEventInit: base_config_1.TYPE,
      EventInit: base_config_1.TYPE,
      EventListenerOptions: base_config_1.TYPE,
      EventModifierInit: base_config_1.TYPE,
      EventSourceInit: base_config_1.TYPE,
      FilePropertyBag: base_config_1.TYPE,
      FileSystemCreateWritableOptions: base_config_1.TYPE,
      FileSystemFlags: base_config_1.TYPE,
      FileSystemGetDirectoryOptions: base_config_1.TYPE,
      FileSystemGetFileOptions: base_config_1.TYPE,
      FileSystemRemoveOptions: base_config_1.TYPE,
      FocusEventInit: base_config_1.TYPE,
      FocusOptions: base_config_1.TYPE,
      FontFaceDescriptors: base_config_1.TYPE,
      FontFaceSetLoadEventInit: base_config_1.TYPE,
      FormDataEventInit: base_config_1.TYPE,
      FullscreenOptions: base_config_1.TYPE,
      GainOptions: base_config_1.TYPE,
      GamepadEffectParameters: base_config_1.TYPE,
      GamepadEventInit: base_config_1.TYPE,
      GetAnimationsOptions: base_config_1.TYPE,
      GetNotificationOptions: base_config_1.TYPE,
      GetRootNodeOptions: base_config_1.TYPE,
      HashChangeEventInit: base_config_1.TYPE,
      HkdfParams: base_config_1.TYPE,
      HmacImportParams: base_config_1.TYPE,
      HmacKeyAlgorithm: base_config_1.TYPE,
      HmacKeyGenParams: base_config_1.TYPE,
      IDBDatabaseInfo: base_config_1.TYPE,
      IDBIndexParameters: base_config_1.TYPE,
      IDBObjectStoreParameters: base_config_1.TYPE,
      IDBTransactionOptions: base_config_1.TYPE,
      IDBVersionChangeEventInit: base_config_1.TYPE,
      IIRFilterOptions: base_config_1.TYPE,
      IdleRequestOptions: base_config_1.TYPE,
      ImageBitmapOptions: base_config_1.TYPE,
      ImageBitmapRenderingContextSettings: base_config_1.TYPE,
      ImageDataSettings: base_config_1.TYPE,
      ImageEncodeOptions: base_config_1.TYPE,
      ImportMeta: base_config_1.TYPE,
      InputEventInit: base_config_1.TYPE,
      IntersectionObserverEntryInit: base_config_1.TYPE,
      IntersectionObserverInit: base_config_1.TYPE,
      JsonWebKey: base_config_1.TYPE,
      KeyAlgorithm: base_config_1.TYPE,
      KeyboardEventInit: base_config_1.TYPE,
      Keyframe: base_config_1.TYPE,
      KeyframeAnimationOptions: base_config_1.TYPE,
      KeyframeEffectOptions: base_config_1.TYPE,
      LockInfo: base_config_1.TYPE,
      LockManagerSnapshot: base_config_1.TYPE,
      LockOptions: base_config_1.TYPE,
      MIDIConnectionEventInit: base_config_1.TYPE,
      MIDIMessageEventInit: base_config_1.TYPE,
      MIDIOptions: base_config_1.TYPE,
      MediaCapabilitiesDecodingInfo: base_config_1.TYPE,
      MediaCapabilitiesEncodingInfo: base_config_1.TYPE,
      MediaCapabilitiesInfo: base_config_1.TYPE,
      MediaConfiguration: base_config_1.TYPE,
      MediaDecodingConfiguration: base_config_1.TYPE,
      MediaElementAudioSourceOptions: base_config_1.TYPE,
      MediaEncodingConfiguration: base_config_1.TYPE,
      MediaEncryptedEventInit: base_config_1.TYPE,
      MediaImage: base_config_1.TYPE,
      MediaKeyMessageEventInit: base_config_1.TYPE,
      MediaKeySystemConfiguration: base_config_1.TYPE,
      MediaKeySystemMediaCapability: base_config_1.TYPE,
      MediaMetadataInit: base_config_1.TYPE,
      MediaPositionState: base_config_1.TYPE,
      MediaQueryListEventInit: base_config_1.TYPE,
      MediaRecorderOptions: base_config_1.TYPE,
      MediaSessionActionDetails: base_config_1.TYPE,
      MediaStreamAudioSourceOptions: base_config_1.TYPE,
      MediaStreamConstraints: base_config_1.TYPE,
      MediaStreamTrackEventInit: base_config_1.TYPE,
      MediaTrackCapabilities: base_config_1.TYPE,
      MediaTrackConstraintSet: base_config_1.TYPE,
      MediaTrackConstraints: base_config_1.TYPE,
      MediaTrackSettings: base_config_1.TYPE,
      MediaTrackSupportedConstraints: base_config_1.TYPE,
      MessageEventInit: base_config_1.TYPE,
      MouseEventInit: base_config_1.TYPE,
      MultiCacheQueryOptions: base_config_1.TYPE,
      MutationObserverInit: base_config_1.TYPE,
      NavigationPreloadState: base_config_1.TYPE,
      NotificationAction: base_config_1.TYPE,
      NotificationOptions: base_config_1.TYPE,
      OfflineAudioCompletionEventInit: base_config_1.TYPE,
      OfflineAudioContextOptions: base_config_1.TYPE,
      OptionalEffectTiming: base_config_1.TYPE,
      OscillatorOptions: base_config_1.TYPE,
      PageTransitionEventInit: base_config_1.TYPE,
      PannerOptions: base_config_1.TYPE,
      PaymentCurrencyAmount: base_config_1.TYPE,
      PaymentDetailsBase: base_config_1.TYPE,
      PaymentDetailsInit: base_config_1.TYPE,
      PaymentDetailsModifier: base_config_1.TYPE,
      PaymentDetailsUpdate: base_config_1.TYPE,
      PaymentItem: base_config_1.TYPE,
      PaymentMethodChangeEventInit: base_config_1.TYPE,
      PaymentMethodData: base_config_1.TYPE,
      PaymentRequestUpdateEventInit: base_config_1.TYPE,
      PaymentValidationErrors: base_config_1.TYPE,
      Pbkdf2Params: base_config_1.TYPE,
      PerformanceMarkOptions: base_config_1.TYPE,
      PerformanceMeasureOptions: base_config_1.TYPE,
      PerformanceObserverInit: base_config_1.TYPE,
      PeriodicWaveConstraints: base_config_1.TYPE,
      PeriodicWaveOptions: base_config_1.TYPE,
      PermissionDescriptor: base_config_1.TYPE,
      PictureInPictureEventInit: base_config_1.TYPE,
      PlaneLayout: base_config_1.TYPE,
      PointerEventInit: base_config_1.TYPE,
      PopStateEventInit: base_config_1.TYPE,
      PositionOptions: base_config_1.TYPE,
      ProgressEventInit: base_config_1.TYPE,
      PromiseRejectionEventInit: base_config_1.TYPE,
      PropertyDefinition: base_config_1.TYPE,
      PropertyIndexedKeyframes: base_config_1.TYPE,
      PublicKeyCredentialCreationOptions: base_config_1.TYPE,
      PublicKeyCredentialDescriptor: base_config_1.TYPE,
      PublicKeyCredentialEntity: base_config_1.TYPE,
      PublicKeyCredentialParameters: base_config_1.TYPE,
      PublicKeyCredentialRequestOptions: base_config_1.TYPE,
      PublicKeyCredentialRpEntity: base_config_1.TYPE,
      PublicKeyCredentialUserEntity: base_config_1.TYPE,
      PushSubscriptionJSON: base_config_1.TYPE,
      PushSubscriptionOptionsInit: base_config_1.TYPE,
      QueuingStrategy: base_config_1.TYPE,
      QueuingStrategyInit: base_config_1.TYPE,
      RTCAnswerOptions: base_config_1.TYPE,
      RTCCertificateExpiration: base_config_1.TYPE,
      RTCConfiguration: base_config_1.TYPE,
      RTCDTMFToneChangeEventInit: base_config_1.TYPE,
      RTCDataChannelEventInit: base_config_1.TYPE,
      RTCDataChannelInit: base_config_1.TYPE,
      RTCDtlsFingerprint: base_config_1.TYPE,
      RTCEncodedAudioFrameMetadata: base_config_1.TYPE,
      RTCEncodedVideoFrameMetadata: base_config_1.TYPE,
      RTCErrorEventInit: base_config_1.TYPE,
      RTCErrorInit: base_config_1.TYPE,
      RTCIceCandidateInit: base_config_1.TYPE,
      RTCIceCandidatePair: base_config_1.TYPE,
      RTCIceCandidatePairStats: base_config_1.TYPE,
      RTCIceServer: base_config_1.TYPE,
      RTCInboundRtpStreamStats: base_config_1.TYPE,
      RTCLocalSessionDescriptionInit: base_config_1.TYPE,
      RTCOfferAnswerOptions: base_config_1.TYPE,
      RTCOfferOptions: base_config_1.TYPE,
      RTCOutboundRtpStreamStats: base_config_1.TYPE,
      RTCPeerConnectionIceErrorEventInit: base_config_1.TYPE,
      RTCPeerConnectionIceEventInit: base_config_1.TYPE,
      RTCReceivedRtpStreamStats: base_config_1.TYPE,
      RTCRtcpParameters: base_config_1.TYPE,
      RTCRtpCapabilities: base_config_1.TYPE,
      RTCRtpCodec: base_config_1.TYPE,
      RTCRtpCodecCapability: base_config_1.TYPE,
      RTCRtpCodecParameters: base_config_1.TYPE,
      RTCRtpCodingParameters: base_config_1.TYPE,
      RTCRtpContributingSource: base_config_1.TYPE,
      RTCRtpEncodingParameters: base_config_1.TYPE,
      RTCRtpHeaderExtensionCapability: base_config_1.TYPE,
      RTCRtpHeaderExtensionParameters: base_config_1.TYPE,
      RTCRtpParameters: base_config_1.TYPE,
      RTCRtpReceiveParameters: base_config_1.TYPE,
      RTCRtpSendParameters: base_config_1.TYPE,
      RTCRtpStreamStats: base_config_1.TYPE,
      RTCRtpSynchronizationSource: base_config_1.TYPE,
      RTCRtpTransceiverInit: base_config_1.TYPE,
      RTCSentRtpStreamStats: base_config_1.TYPE,
      RTCSessionDescriptionInit: base_config_1.TYPE,
      RTCStats: base_config_1.TYPE,
      RTCTrackEventInit: base_config_1.TYPE,
      RTCTransportStats: base_config_1.TYPE,
      ReadableStreamGetReaderOptions: base_config_1.TYPE,
      ReadableStreamReadDoneResult: base_config_1.TYPE,
      ReadableStreamReadValueResult: base_config_1.TYPE,
      ReadableWritablePair: base_config_1.TYPE,
      RegistrationOptions: base_config_1.TYPE,
      ReportingObserverOptions: base_config_1.TYPE,
      RequestInit: base_config_1.TYPE,
      ResizeObserverOptions: base_config_1.TYPE,
      ResponseInit: base_config_1.TYPE,
      RsaHashedImportParams: base_config_1.TYPE,
      RsaHashedKeyAlgorithm: base_config_1.TYPE,
      RsaHashedKeyGenParams: base_config_1.TYPE,
      RsaKeyAlgorithm: base_config_1.TYPE,
      RsaKeyGenParams: base_config_1.TYPE,
      RsaOaepParams: base_config_1.TYPE,
      RsaOtherPrimesInfo: base_config_1.TYPE,
      RsaPssParams: base_config_1.TYPE,
      SVGBoundingBoxOptions: base_config_1.TYPE,
      ScrollIntoViewOptions: base_config_1.TYPE,
      ScrollOptions: base_config_1.TYPE,
      ScrollToOptions: base_config_1.TYPE,
      SecurityPolicyViolationEventInit: base_config_1.TYPE,
      ShadowRootInit: base_config_1.TYPE,
      ShareData: base_config_1.TYPE,
      SpeechSynthesisErrorEventInit: base_config_1.TYPE,
      SpeechSynthesisEventInit: base_config_1.TYPE,
      StaticRangeInit: base_config_1.TYPE,
      StereoPannerOptions: base_config_1.TYPE,
      StorageEstimate: base_config_1.TYPE,
      StorageEventInit: base_config_1.TYPE,
      StreamPipeOptions: base_config_1.TYPE,
      StructuredSerializeOptions: base_config_1.TYPE,
      SubmitEventInit: base_config_1.TYPE,
      TextDecodeOptions: base_config_1.TYPE,
      TextDecoderOptions: base_config_1.TYPE,
      TextEncoderEncodeIntoResult: base_config_1.TYPE,
      ToggleEventInit: base_config_1.TYPE,
      TouchEventInit: base_config_1.TYPE,
      TouchInit: base_config_1.TYPE,
      TrackEventInit: base_config_1.TYPE,
      Transformer: base_config_1.TYPE,
      TransitionEventInit: base_config_1.TYPE,
      UIEventInit: base_config_1.TYPE,
      ULongRange: base_config_1.TYPE,
      UnderlyingByteSource: base_config_1.TYPE,
      UnderlyingDefaultSource: base_config_1.TYPE,
      UnderlyingSink: base_config_1.TYPE,
      UnderlyingSource: base_config_1.TYPE,
      ValidityStateFlags: base_config_1.TYPE,
      VideoColorSpaceInit: base_config_1.TYPE,
      VideoConfiguration: base_config_1.TYPE,
      VideoDecoderConfig: base_config_1.TYPE,
      VideoDecoderInit: base_config_1.TYPE,
      VideoDecoderSupport: base_config_1.TYPE,
      VideoEncoderConfig: base_config_1.TYPE,
      VideoEncoderEncodeOptions: base_config_1.TYPE,
      VideoEncoderInit: base_config_1.TYPE,
      VideoEncoderSupport: base_config_1.TYPE,
      VideoFrameBufferInit: base_config_1.TYPE,
      VideoFrameCallbackMetadata: base_config_1.TYPE,
      VideoFrameCopyToOptions: base_config_1.TYPE,
      VideoFrameInit: base_config_1.TYPE,
      WaveShaperOptions: base_config_1.TYPE,
      WebGLContextAttributes: base_config_1.TYPE,
      WebGLContextEventInit: base_config_1.TYPE,
      WebTransportCloseInfo: base_config_1.TYPE,
      WebTransportErrorOptions: base_config_1.TYPE,
      WebTransportHash: base_config_1.TYPE,
      WebTransportOptions: base_config_1.TYPE,
      WebTransportSendStreamOptions: base_config_1.TYPE,
      WheelEventInit: base_config_1.TYPE,
      WindowPostMessageOptions: base_config_1.TYPE,
      WorkerOptions: base_config_1.TYPE,
      WorkletOptions: base_config_1.TYPE,
      WriteParams: base_config_1.TYPE,
      NodeFilter: base_config_1.TYPE_VALUE,
      XPathNSResolver: base_config_1.TYPE,
      ANGLE_instanced_arrays: base_config_1.TYPE,
      ARIAMixin: base_config_1.TYPE,
      AbortController: base_config_1.TYPE_VALUE,
      AbortSignalEventMap: base_config_1.TYPE,
      AbortSignal: base_config_1.TYPE_VALUE,
      AbstractRange: base_config_1.TYPE_VALUE,
      AbstractWorkerEventMap: base_config_1.TYPE,
      AbstractWorker: base_config_1.TYPE,
      AnalyserNode: base_config_1.TYPE_VALUE,
      Animatable: base_config_1.TYPE,
      AnimationEventMap: base_config_1.TYPE,
      Animation: base_config_1.TYPE_VALUE,
      AnimationEffect: base_config_1.TYPE_VALUE,
      AnimationEvent: base_config_1.TYPE_VALUE,
      AnimationFrameProvider: base_config_1.TYPE,
      AnimationPlaybackEvent: base_config_1.TYPE_VALUE,
      AnimationTimeline: base_config_1.TYPE_VALUE,
      Attr: base_config_1.TYPE_VALUE,
      AudioBuffer: base_config_1.TYPE_VALUE,
      AudioBufferSourceNode: base_config_1.TYPE_VALUE,
      AudioContext: base_config_1.TYPE_VALUE,
      AudioDestinationNode: base_config_1.TYPE_VALUE,
      AudioListener: base_config_1.TYPE_VALUE,
      AudioNode: base_config_1.TYPE_VALUE,
      AudioParam: base_config_1.TYPE_VALUE,
      AudioParamMap: base_config_1.TYPE_VALUE,
      AudioProcessingEvent: base_config_1.TYPE_VALUE,
      AudioScheduledSourceNodeEventMap: base_config_1.TYPE,
      AudioScheduledSourceNode: base_config_1.TYPE_VALUE,
      AudioWorklet: base_config_1.TYPE_VALUE,
      AudioWorkletNodeEventMap: base_config_1.TYPE,
      AudioWorkletNode: base_config_1.TYPE_VALUE,
      AuthenticatorAssertionResponse: base_config_1.TYPE_VALUE,
      AuthenticatorAttestationResponse: base_config_1.TYPE_VALUE,
      AuthenticatorResponse: base_config_1.TYPE_VALUE,
      BarProp: base_config_1.TYPE_VALUE,
      BaseAudioContextEventMap: base_config_1.TYPE,
      BaseAudioContext: base_config_1.TYPE_VALUE,
      BeforeUnloadEvent: base_config_1.TYPE_VALUE,
      BiquadFilterNode: base_config_1.TYPE_VALUE,
      Blob: base_config_1.TYPE_VALUE,
      BlobEvent: base_config_1.TYPE_VALUE,
      Body: base_config_1.TYPE,
      BroadcastChannelEventMap: base_config_1.TYPE,
      BroadcastChannel: base_config_1.TYPE_VALUE,
      ByteLengthQueuingStrategy: base_config_1.TYPE_VALUE,
      CDATASection: base_config_1.TYPE_VALUE,
      CSSAnimation: base_config_1.TYPE_VALUE,
      CSSConditionRule: base_config_1.TYPE_VALUE,
      CSSContainerRule: base_config_1.TYPE_VALUE,
      CSSCounterStyleRule: base_config_1.TYPE_VALUE,
      CSSFontFaceRule: base_config_1.TYPE_VALUE,
      CSSFontFeatureValuesRule: base_config_1.TYPE_VALUE,
      CSSFontPaletteValuesRule: base_config_1.TYPE_VALUE,
      CSSGroupingRule: base_config_1.TYPE_VALUE,
      CSSImageValue: base_config_1.TYPE_VALUE,
      CSSImportRule: base_config_1.TYPE_VALUE,
      CSSKeyframeRule: base_config_1.TYPE_VALUE,
      CSSKeyframesRule: base_config_1.TYPE_VALUE,
      CSSKeywordValue: base_config_1.TYPE_VALUE,
      CSSLayerBlockRule: base_config_1.TYPE_VALUE,
      CSSLayerStatementRule: base_config_1.TYPE_VALUE,
      CSSMathClamp: base_config_1.TYPE_VALUE,
      CSSMathInvert: base_config_1.TYPE_VALUE,
      CSSMathMax: base_config_1.TYPE_VALUE,
      CSSMathMin: base_config_1.TYPE_VALUE,
      CSSMathNegate: base_config_1.TYPE_VALUE,
      CSSMathProduct: base_config_1.TYPE_VALUE,
      CSSMathSum: base_config_1.TYPE_VALUE,
      CSSMathValue: base_config_1.TYPE_VALUE,
      CSSMatrixComponent: base_config_1.TYPE_VALUE,
      CSSMediaRule: base_config_1.TYPE_VALUE,
      CSSNamespaceRule: base_config_1.TYPE_VALUE,
      CSSNumericArray: base_config_1.TYPE_VALUE,
      CSSNumericValue: base_config_1.TYPE_VALUE,
      CSSPageRule: base_config_1.TYPE_VALUE,
      CSSPerspective: base_config_1.TYPE_VALUE,
      CSSPropertyRule: base_config_1.TYPE_VALUE,
      CSSRotate: base_config_1.TYPE_VALUE,
      CSSRule: base_config_1.TYPE_VALUE,
      CSSRuleList: base_config_1.TYPE_VALUE,
      CSSScale: base_config_1.TYPE_VALUE,
      CSSSkew: base_config_1.TYPE_VALUE,
      CSSSkewX: base_config_1.TYPE_VALUE,
      CSSSkewY: base_config_1.TYPE_VALUE,
      CSSStyleDeclaration: base_config_1.TYPE_VALUE,
      CSSStyleRule: base_config_1.TYPE_VALUE,
      CSSStyleSheet: base_config_1.TYPE_VALUE,
      CSSStyleValue: base_config_1.TYPE_VALUE,
      CSSSupportsRule: base_config_1.TYPE_VALUE,
      CSSTransformComponent: base_config_1.TYPE_VALUE,
      CSSTransformValue: base_config_1.TYPE_VALUE,
      CSSTransition: base_config_1.TYPE_VALUE,
      CSSTranslate: base_config_1.TYPE_VALUE,
      CSSUnitValue: base_config_1.TYPE_VALUE,
      CSSUnparsedValue: base_config_1.TYPE_VALUE,
      CSSVariableReferenceValue: base_config_1.TYPE_VALUE,
      Cache: base_config_1.TYPE_VALUE,
      CacheStorage: base_config_1.TYPE_VALUE,
      CanvasCaptureMediaStreamTrack: base_config_1.TYPE_VALUE,
      CanvasCompositing: base_config_1.TYPE,
      CanvasDrawImage: base_config_1.TYPE,
      CanvasDrawPath: base_config_1.TYPE,
      CanvasFillStrokeStyles: base_config_1.TYPE,
      CanvasFilters: base_config_1.TYPE,
      CanvasGradient: base_config_1.TYPE_VALUE,
      CanvasImageData: base_config_1.TYPE,
      CanvasImageSmoothing: base_config_1.TYPE,
      CanvasPath: base_config_1.TYPE,
      CanvasPathDrawingStyles: base_config_1.TYPE,
      CanvasPattern: base_config_1.TYPE_VALUE,
      CanvasRect: base_config_1.TYPE,
      CanvasRenderingContext2D: base_config_1.TYPE_VALUE,
      CanvasShadowStyles: base_config_1.TYPE,
      CanvasState: base_config_1.TYPE,
      CanvasText: base_config_1.TYPE,
      CanvasTextDrawingStyles: base_config_1.TYPE,
      CanvasTransform: base_config_1.TYPE,
      CanvasUserInterface: base_config_1.TYPE,
      ChannelMergerNode: base_config_1.TYPE_VALUE,
      ChannelSplitterNode: base_config_1.TYPE_VALUE,
      CharacterData: base_config_1.TYPE_VALUE,
      ChildNode: base_config_1.TYPE,
      ClientRect: base_config_1.TYPE,
      Clipboard: base_config_1.TYPE_VALUE,
      ClipboardEvent: base_config_1.TYPE_VALUE,
      ClipboardItem: base_config_1.TYPE_VALUE,
      CloseEvent: base_config_1.TYPE_VALUE,
      Comment: base_config_1.TYPE_VALUE,
      CompositionEvent: base_config_1.TYPE_VALUE,
      CompressionStream: base_config_1.TYPE_VALUE,
      ConstantSourceNode: base_config_1.TYPE_VALUE,
      ConvolverNode: base_config_1.TYPE_VALUE,
      CountQueuingStrategy: base_config_1.TYPE_VALUE,
      Credential: base_config_1.TYPE_VALUE,
      CredentialsContainer: base_config_1.TYPE_VALUE,
      Crypto: base_config_1.TYPE_VALUE,
      CryptoKey: base_config_1.TYPE_VALUE,
      CustomElementRegistry: base_config_1.TYPE_VALUE,
      CustomEvent: base_config_1.TYPE_VALUE,
      DOMException: base_config_1.TYPE_VALUE,
      DOMImplementation: base_config_1.TYPE_VALUE,
      DOMMatrix: base_config_1.TYPE_VALUE,
      SVGMatrix: base_config_1.TYPE_VALUE,
      WebKitCSSMatrix: base_config_1.TYPE_VALUE,
      DOMMatrixReadOnly: base_config_1.TYPE_VALUE,
      DOMParser: base_config_1.TYPE_VALUE,
      DOMPoint: base_config_1.TYPE_VALUE,
      SVGPoint: base_config_1.TYPE_VALUE,
      DOMPointReadOnly: base_config_1.TYPE_VALUE,
      DOMQuad: base_config_1.TYPE_VALUE,
      DOMRect: base_config_1.TYPE_VALUE,
      SVGRect: base_config_1.TYPE_VALUE,
      DOMRectList: base_config_1.TYPE_VALUE,
      DOMRectReadOnly: base_config_1.TYPE_VALUE,
      DOMStringList: base_config_1.TYPE_VALUE,
      DOMStringMap: base_config_1.TYPE_VALUE,
      DOMTokenList: base_config_1.TYPE_VALUE,
      DataTransfer: base_config_1.TYPE_VALUE,
      DataTransferItem: base_config_1.TYPE_VALUE,
      DataTransferItemList: base_config_1.TYPE_VALUE,
      DecompressionStream: base_config_1.TYPE_VALUE,
      DelayNode: base_config_1.TYPE_VALUE,
      DeviceMotionEvent: base_config_1.TYPE_VALUE,
      DeviceMotionEventAcceleration: base_config_1.TYPE,
      DeviceMotionEventRotationRate: base_config_1.TYPE,
      DeviceOrientationEvent: base_config_1.TYPE_VALUE,
      DocumentEventMap: base_config_1.TYPE,
      Document: base_config_1.TYPE_VALUE,
      DocumentFragment: base_config_1.TYPE_VALUE,
      DocumentOrShadowRoot: base_config_1.TYPE,
      DocumentTimeline: base_config_1.TYPE_VALUE,
      DocumentType: base_config_1.TYPE_VALUE,
      DragEvent: base_config_1.TYPE_VALUE,
      DynamicsCompressorNode: base_config_1.TYPE_VALUE,
      EXT_blend_minmax: base_config_1.TYPE,
      EXT_color_buffer_float: base_config_1.TYPE,
      EXT_color_buffer_half_float: base_config_1.TYPE,
      EXT_float_blend: base_config_1.TYPE,
      EXT_frag_depth: base_config_1.TYPE,
      EXT_sRGB: base_config_1.TYPE,
      EXT_shader_texture_lod: base_config_1.TYPE,
      EXT_texture_compression_bptc: base_config_1.TYPE,
      EXT_texture_compression_rgtc: base_config_1.TYPE,
      EXT_texture_filter_anisotropic: base_config_1.TYPE,
      EXT_texture_norm16: base_config_1.TYPE,
      ElementEventMap: base_config_1.TYPE,
      Element: base_config_1.TYPE_VALUE,
      ElementCSSInlineStyle: base_config_1.TYPE,
      ElementContentEditable: base_config_1.TYPE,
      ElementInternals: base_config_1.TYPE_VALUE,
      EncodedVideoChunk: base_config_1.TYPE_VALUE,
      ErrorEvent: base_config_1.TYPE_VALUE,
      Event: base_config_1.TYPE_VALUE,
      EventCounts: base_config_1.TYPE_VALUE,
      EventListener: base_config_1.TYPE,
      EventListenerObject: base_config_1.TYPE,
      EventSourceEventMap: base_config_1.TYPE,
      EventSource: base_config_1.TYPE_VALUE,
      EventTarget: base_config_1.TYPE_VALUE,
      External: base_config_1.TYPE_VALUE,
      File: base_config_1.TYPE_VALUE,
      FileList: base_config_1.TYPE_VALUE,
      FileReaderEventMap: base_config_1.TYPE,
      FileReader: base_config_1.TYPE_VALUE,
      FileSystem: base_config_1.TYPE_VALUE,
      FileSystemDirectoryEntry: base_config_1.TYPE_VALUE,
      FileSystemDirectoryHandle: base_config_1.TYPE_VALUE,
      FileSystemDirectoryReader: base_config_1.TYPE_VALUE,
      FileSystemEntry: base_config_1.TYPE_VALUE,
      FileSystemFileEntry: base_config_1.TYPE_VALUE,
      FileSystemFileHandle: base_config_1.TYPE_VALUE,
      FileSystemHandle: base_config_1.TYPE_VALUE,
      FileSystemWritableFileStream: base_config_1.TYPE_VALUE,
      FocusEvent: base_config_1.TYPE_VALUE,
      FontFace: base_config_1.TYPE_VALUE,
      FontFaceSetEventMap: base_config_1.TYPE,
      FontFaceSet: base_config_1.TYPE_VALUE,
      FontFaceSetLoadEvent: base_config_1.TYPE_VALUE,
      FontFaceSource: base_config_1.TYPE,
      FormData: base_config_1.TYPE_VALUE,
      FormDataEvent: base_config_1.TYPE_VALUE,
      GainNode: base_config_1.TYPE_VALUE,
      Gamepad: base_config_1.TYPE_VALUE,
      GamepadButton: base_config_1.TYPE_VALUE,
      GamepadEvent: base_config_1.TYPE_VALUE,
      GamepadHapticActuator: base_config_1.TYPE_VALUE,
      GenericTransformStream: base_config_1.TYPE,
      Geolocation: base_config_1.TYPE_VALUE,
      GeolocationCoordinates: base_config_1.TYPE_VALUE,
      GeolocationPosition: base_config_1.TYPE_VALUE,
      GeolocationPositionError: base_config_1.TYPE_VALUE,
      GlobalEventHandlersEventMap: base_config_1.TYPE,
      GlobalEventHandlers: base_config_1.TYPE,
      HTMLAllCollection: base_config_1.TYPE_VALUE,
      HTMLAnchorElement: base_config_1.TYPE_VALUE,
      HTMLAreaElement: base_config_1.TYPE_VALUE,
      HTMLAudioElement: base_config_1.TYPE_VALUE,
      HTMLBRElement: base_config_1.TYPE_VALUE,
      HTMLBaseElement: base_config_1.TYPE_VALUE,
      HTMLBodyElementEventMap: base_config_1.TYPE,
      HTMLBodyElement: base_config_1.TYPE_VALUE,
      HTMLButtonElement: base_config_1.TYPE_VALUE,
      HTMLCanvasElement: base_config_1.TYPE_VALUE,
      HTMLCollectionBase: base_config_1.TYPE,
      HTMLCollection: base_config_1.TYPE_VALUE,
      HTMLCollectionOf: base_config_1.TYPE,
      HTMLDListElement: base_config_1.TYPE_VALUE,
      HTMLDataElement: base_config_1.TYPE_VALUE,
      HTMLDataListElement: base_config_1.TYPE_VALUE,
      HTMLDetailsElement: base_config_1.TYPE_VALUE,
      HTMLDialogElement: base_config_1.TYPE_VALUE,
      HTMLDirectoryElement: base_config_1.TYPE_VALUE,
      HTMLDivElement: base_config_1.TYPE_VALUE,
      HTMLDocument: base_config_1.TYPE_VALUE,
      HTMLElementEventMap: base_config_1.TYPE,
      HTMLElement: base_config_1.TYPE_VALUE,
      HTMLEmbedElement: base_config_1.TYPE_VALUE,
      HTMLFieldSetElement: base_config_1.TYPE_VALUE,
      HTMLFontElement: base_config_1.TYPE_VALUE,
      HTMLFormControlsCollection: base_config_1.TYPE_VALUE,
      HTMLFormElement: base_config_1.TYPE_VALUE,
      HTMLFrameElement: base_config_1.TYPE_VALUE,
      HTMLFrameSetElementEventMap: base_config_1.TYPE,
      HTMLFrameSetElement: base_config_1.TYPE_VALUE,
      HTMLHRElement: base_config_1.TYPE_VALUE,
      HTMLHeadElement: base_config_1.TYPE_VALUE,
      HTMLHeadingElement: base_config_1.TYPE_VALUE,
      HTMLHtmlElement: base_config_1.TYPE_VALUE,
      HTMLHyperlinkElementUtils: base_config_1.TYPE,
      HTMLIFrameElement: base_config_1.TYPE_VALUE,
      HTMLImageElement: base_config_1.TYPE_VALUE,
      HTMLInputElement: base_config_1.TYPE_VALUE,
      HTMLLIElement: base_config_1.TYPE_VALUE,
      HTMLLabelElement: base_config_1.TYPE_VALUE,
      HTMLLegendElement: base_config_1.TYPE_VALUE,
      HTMLLinkElement: base_config_1.TYPE_VALUE,
      HTMLMapElement: base_config_1.TYPE_VALUE,
      HTMLMarqueeElement: base_config_1.TYPE_VALUE,
      HTMLMediaElementEventMap: base_config_1.TYPE,
      HTMLMediaElement: base_config_1.TYPE_VALUE,
      HTMLMenuElement: base_config_1.TYPE_VALUE,
      HTMLMetaElement: base_config_1.TYPE_VALUE,
      HTMLMeterElement: base_config_1.TYPE_VALUE,
      HTMLModElement: base_config_1.TYPE_VALUE,
      HTMLOListElement: base_config_1.TYPE_VALUE,
      HTMLObjectElement: base_config_1.TYPE_VALUE,
      HTMLOptGroupElement: base_config_1.TYPE_VALUE,
      HTMLOptionElement: base_config_1.TYPE_VALUE,
      HTMLOptionsCollection: base_config_1.TYPE_VALUE,
      HTMLOrSVGElement: base_config_1.TYPE,
      HTMLOutputElement: base_config_1.TYPE_VALUE,
      HTMLParagraphElement: base_config_1.TYPE_VALUE,
      HTMLParamElement: base_config_1.TYPE_VALUE,
      HTMLPictureElement: base_config_1.TYPE_VALUE,
      HTMLPreElement: base_config_1.TYPE_VALUE,
      HTMLProgressElement: base_config_1.TYPE_VALUE,
      HTMLQuoteElement: base_config_1.TYPE_VALUE,
      HTMLScriptElement: base_config_1.TYPE_VALUE,
      HTMLSelectElement: base_config_1.TYPE_VALUE,
      HTMLSlotElement: base_config_1.TYPE_VALUE,
      HTMLSourceElement: base_config_1.TYPE_VALUE,
      HTMLSpanElement: base_config_1.TYPE_VALUE,
      HTMLStyleElement: base_config_1.TYPE_VALUE,
      HTMLTableCaptionElement: base_config_1.TYPE_VALUE,
      HTMLTableCellElement: base_config_1.TYPE_VALUE,
      HTMLTableColElement: base_config_1.TYPE_VALUE,
      HTMLTableDataCellElement: base_config_1.TYPE,
      HTMLTableElement: base_config_1.TYPE_VALUE,
      HTMLTableHeaderCellElement: base_config_1.TYPE,
      HTMLTableRowElement: base_config_1.TYPE_VALUE,
      HTMLTableSectionElement: base_config_1.TYPE_VALUE,
      HTMLTemplateElement: base_config_1.TYPE_VALUE,
      HTMLTextAreaElement: base_config_1.TYPE_VALUE,
      HTMLTimeElement: base_config_1.TYPE_VALUE,
      HTMLTitleElement: base_config_1.TYPE_VALUE,
      HTMLTrackElement: base_config_1.TYPE_VALUE,
      HTMLUListElement: base_config_1.TYPE_VALUE,
      HTMLUnknownElement: base_config_1.TYPE_VALUE,
      HTMLVideoElementEventMap: base_config_1.TYPE,
      HTMLVideoElement: base_config_1.TYPE_VALUE,
      HashChangeEvent: base_config_1.TYPE_VALUE,
      Headers: base_config_1.TYPE_VALUE,
      History: base_config_1.TYPE_VALUE,
      IDBCursor: base_config_1.TYPE_VALUE,
      IDBCursorWithValue: base_config_1.TYPE_VALUE,
      IDBDatabaseEventMap: base_config_1.TYPE,
      IDBDatabase: base_config_1.TYPE_VALUE,
      IDBFactory: base_config_1.TYPE_VALUE,
      IDBIndex: base_config_1.TYPE_VALUE,
      IDBKeyRange: base_config_1.TYPE_VALUE,
      IDBObjectStore: base_config_1.TYPE_VALUE,
      IDBOpenDBRequestEventMap: base_config_1.TYPE,
      IDBOpenDBRequest: base_config_1.TYPE_VALUE,
      IDBRequestEventMap: base_config_1.TYPE,
      IDBRequest: base_config_1.TYPE_VALUE,
      IDBTransactionEventMap: base_config_1.TYPE,
      IDBTransaction: base_config_1.TYPE_VALUE,
      IDBVersionChangeEvent: base_config_1.TYPE_VALUE,
      IIRFilterNode: base_config_1.TYPE_VALUE,
      IdleDeadline: base_config_1.TYPE_VALUE,
      ImageBitmap: base_config_1.TYPE_VALUE,
      ImageBitmapRenderingContext: base_config_1.TYPE_VALUE,
      ImageData: base_config_1.TYPE_VALUE,
      InnerHTML: base_config_1.TYPE,
      InputDeviceInfo: base_config_1.TYPE_VALUE,
      InputEvent: base_config_1.TYPE_VALUE,
      IntersectionObserver: base_config_1.TYPE_VALUE,
      IntersectionObserverEntry: base_config_1.TYPE_VALUE,
      KHR_parallel_shader_compile: base_config_1.TYPE,
      KeyboardEvent: base_config_1.TYPE_VALUE,
      KeyframeEffect: base_config_1.TYPE_VALUE,
      LinkStyle: base_config_1.TYPE,
      Location: base_config_1.TYPE_VALUE,
      Lock: base_config_1.TYPE_VALUE,
      LockManager: base_config_1.TYPE_VALUE,
      MIDIAccessEventMap: base_config_1.TYPE,
      MIDIAccess: base_config_1.TYPE_VALUE,
      MIDIConnectionEvent: base_config_1.TYPE_VALUE,
      MIDIInputEventMap: base_config_1.TYPE,
      MIDIInput: base_config_1.TYPE_VALUE,
      MIDIInputMap: base_config_1.TYPE_VALUE,
      MIDIMessageEvent: base_config_1.TYPE_VALUE,
      MIDIOutput: base_config_1.TYPE_VALUE,
      MIDIOutputMap: base_config_1.TYPE_VALUE,
      MIDIPortEventMap: base_config_1.TYPE,
      MIDIPort: base_config_1.TYPE_VALUE,
      MathMLElementEventMap: base_config_1.TYPE,
      MathMLElement: base_config_1.TYPE_VALUE,
      MediaCapabilities: base_config_1.TYPE_VALUE,
      MediaDeviceInfo: base_config_1.TYPE_VALUE,
      MediaDevicesEventMap: base_config_1.TYPE,
      MediaDevices: base_config_1.TYPE_VALUE,
      MediaElementAudioSourceNode: base_config_1.TYPE_VALUE,
      MediaEncryptedEvent: base_config_1.TYPE_VALUE,
      MediaError: base_config_1.TYPE_VALUE,
      MediaKeyMessageEvent: base_config_1.TYPE_VALUE,
      MediaKeySessionEventMap: base_config_1.TYPE,
      MediaKeySession: base_config_1.TYPE_VALUE,
      MediaKeyStatusMap: base_config_1.TYPE_VALUE,
      MediaKeySystemAccess: base_config_1.TYPE_VALUE,
      MediaKeys: base_config_1.TYPE_VALUE,
      MediaList: base_config_1.TYPE_VALUE,
      MediaMetadata: base_config_1.TYPE_VALUE,
      MediaQueryListEventMap: base_config_1.TYPE,
      MediaQueryList: base_config_1.TYPE_VALUE,
      MediaQueryListEvent: base_config_1.TYPE_VALUE,
      MediaRecorderEventMap: base_config_1.TYPE,
      MediaRecorder: base_config_1.TYPE_VALUE,
      MediaSession: base_config_1.TYPE_VALUE,
      MediaSourceEventMap: base_config_1.TYPE,
      MediaSource: base_config_1.TYPE_VALUE,
      MediaStreamEventMap: base_config_1.TYPE,
      MediaStream: base_config_1.TYPE_VALUE,
      MediaStreamAudioDestinationNode: base_config_1.TYPE_VALUE,
      MediaStreamAudioSourceNode: base_config_1.TYPE_VALUE,
      MediaStreamTrackEventMap: base_config_1.TYPE,
      MediaStreamTrack: base_config_1.TYPE_VALUE,
      MediaStreamTrackEvent: base_config_1.TYPE_VALUE,
      MessageChannel: base_config_1.TYPE_VALUE,
      MessageEvent: base_config_1.TYPE_VALUE,
      MessagePortEventMap: base_config_1.TYPE,
      MessagePort: base_config_1.TYPE_VALUE,
      MimeType: base_config_1.TYPE_VALUE,
      MimeTypeArray: base_config_1.TYPE_VALUE,
      MouseEvent: base_config_1.TYPE_VALUE,
      MutationEvent: base_config_1.TYPE_VALUE,
      MutationObserver: base_config_1.TYPE_VALUE,
      MutationRecord: base_config_1.TYPE_VALUE,
      NamedNodeMap: base_config_1.TYPE_VALUE,
      NavigationPreloadManager: base_config_1.TYPE_VALUE,
      Navigator: base_config_1.TYPE_VALUE,
      NavigatorAutomationInformation: base_config_1.TYPE,
      NavigatorBadge: base_config_1.TYPE,
      NavigatorConcurrentHardware: base_config_1.TYPE,
      NavigatorContentUtils: base_config_1.TYPE,
      NavigatorCookies: base_config_1.TYPE,
      NavigatorID: base_config_1.TYPE,
      NavigatorLanguage: base_config_1.TYPE,
      NavigatorLocks: base_config_1.TYPE,
      NavigatorOnLine: base_config_1.TYPE,
      NavigatorPlugins: base_config_1.TYPE,
      NavigatorStorage: base_config_1.TYPE,
      Node: base_config_1.TYPE_VALUE,
      NodeIterator: base_config_1.TYPE_VALUE,
      NodeList: base_config_1.TYPE_VALUE,
      NodeListOf: base_config_1.TYPE,
      NonDocumentTypeChildNode: base_config_1.TYPE,
      NonElementParentNode: base_config_1.TYPE,
      NotificationEventMap: base_config_1.TYPE,
      Notification: base_config_1.TYPE_VALUE,
      OES_draw_buffers_indexed: base_config_1.TYPE,
      OES_element_index_uint: base_config_1.TYPE,
      OES_fbo_render_mipmap: base_config_1.TYPE,
      OES_standard_derivatives: base_config_1.TYPE,
      OES_texture_float: base_config_1.TYPE,
      OES_texture_float_linear: base_config_1.TYPE,
      OES_texture_half_float: base_config_1.TYPE,
      OES_texture_half_float_linear: base_config_1.TYPE,
      OES_vertex_array_object: base_config_1.TYPE,
      OVR_multiview2: base_config_1.TYPE,
      OfflineAudioCompletionEvent: base_config_1.TYPE_VALUE,
      OfflineAudioContextEventMap: base_config_1.TYPE,
      OfflineAudioContext: base_config_1.TYPE_VALUE,
      OffscreenCanvasEventMap: base_config_1.TYPE,
      OffscreenCanvas: base_config_1.TYPE_VALUE,
      OffscreenCanvasRenderingContext2D: base_config_1.TYPE_VALUE,
      OscillatorNode: base_config_1.TYPE_VALUE,
      OverconstrainedError: base_config_1.TYPE_VALUE,
      PageTransitionEvent: base_config_1.TYPE_VALUE,
      PannerNode: base_config_1.TYPE_VALUE,
      ParentNode: base_config_1.TYPE,
      Path2D: base_config_1.TYPE_VALUE,
      PaymentMethodChangeEvent: base_config_1.TYPE_VALUE,
      PaymentRequestEventMap: base_config_1.TYPE,
      PaymentRequest: base_config_1.TYPE_VALUE,
      PaymentRequestUpdateEvent: base_config_1.TYPE_VALUE,
      PaymentResponse: base_config_1.TYPE_VALUE,
      PerformanceEventMap: base_config_1.TYPE,
      Performance: base_config_1.TYPE_VALUE,
      PerformanceEntry: base_config_1.TYPE_VALUE,
      PerformanceEventTiming: base_config_1.TYPE_VALUE,
      PerformanceMark: base_config_1.TYPE_VALUE,
      PerformanceMeasure: base_config_1.TYPE_VALUE,
      PerformanceNavigation: base_config_1.TYPE_VALUE,
      PerformanceNavigationTiming: base_config_1.TYPE_VALUE,
      PerformanceObserver: base_config_1.TYPE_VALUE,
      PerformanceObserverEntryList: base_config_1.TYPE_VALUE,
      PerformancePaintTiming: base_config_1.TYPE_VALUE,
      PerformanceResourceTiming: base_config_1.TYPE_VALUE,
      PerformanceServerTiming: base_config_1.TYPE_VALUE,
      PerformanceTiming: base_config_1.TYPE_VALUE,
      PeriodicWave: base_config_1.TYPE_VALUE,
      PermissionStatusEventMap: base_config_1.TYPE,
      PermissionStatus: base_config_1.TYPE_VALUE,
      Permissions: base_config_1.TYPE_VALUE,
      PictureInPictureEvent: base_config_1.TYPE_VALUE,
      PictureInPictureWindowEventMap: base_config_1.TYPE,
      PictureInPictureWindow: base_config_1.TYPE_VALUE,
      Plugin: base_config_1.TYPE_VALUE,
      PluginArray: base_config_1.TYPE_VALUE,
      PointerEvent: base_config_1.TYPE_VALUE,
      PopStateEvent: base_config_1.TYPE_VALUE,
      PopoverInvokerElement: base_config_1.TYPE,
      ProcessingInstruction: base_config_1.TYPE_VALUE,
      ProgressEvent: base_config_1.TYPE_VALUE,
      PromiseRejectionEvent: base_config_1.TYPE_VALUE,
      PublicKeyCredential: base_config_1.TYPE_VALUE,
      PushManager: base_config_1.TYPE_VALUE,
      PushSubscription: base_config_1.TYPE_VALUE,
      PushSubscriptionOptions: base_config_1.TYPE_VALUE,
      RTCCertificate: base_config_1.TYPE_VALUE,
      RTCDTMFSenderEventMap: base_config_1.TYPE,
      RTCDTMFSender: base_config_1.TYPE_VALUE,
      RTCDTMFToneChangeEvent: base_config_1.TYPE_VALUE,
      RTCDataChannelEventMap: base_config_1.TYPE,
      RTCDataChannel: base_config_1.TYPE_VALUE,
      RTCDataChannelEvent: base_config_1.TYPE_VALUE,
      RTCDtlsTransportEventMap: base_config_1.TYPE,
      RTCDtlsTransport: base_config_1.TYPE_VALUE,
      RTCEncodedAudioFrame: base_config_1.TYPE_VALUE,
      RTCEncodedVideoFrame: base_config_1.TYPE_VALUE,
      RTCError: base_config_1.TYPE_VALUE,
      RTCErrorEvent: base_config_1.TYPE_VALUE,
      RTCIceCandidate: base_config_1.TYPE_VALUE,
      RTCIceTransportEventMap: base_config_1.TYPE,
      RTCIceTransport: base_config_1.TYPE_VALUE,
      RTCPeerConnectionEventMap: base_config_1.TYPE,
      RTCPeerConnection: base_config_1.TYPE_VALUE,
      RTCPeerConnectionIceErrorEvent: base_config_1.TYPE_VALUE,
      RTCPeerConnectionIceEvent: base_config_1.TYPE_VALUE,
      RTCRtpReceiver: base_config_1.TYPE_VALUE,
      RTCRtpSender: base_config_1.TYPE_VALUE,
      RTCRtpTransceiver: base_config_1.TYPE_VALUE,
      RTCSctpTransportEventMap: base_config_1.TYPE,
      RTCSctpTransport: base_config_1.TYPE_VALUE,
      RTCSessionDescription: base_config_1.TYPE_VALUE,
      RTCStatsReport: base_config_1.TYPE_VALUE,
      RTCTrackEvent: base_config_1.TYPE_VALUE,
      RadioNodeList: base_config_1.TYPE_VALUE,
      Range: base_config_1.TYPE_VALUE,
      ReadableByteStreamController: base_config_1.TYPE_VALUE,
      ReadableStream: base_config_1.TYPE_VALUE,
      ReadableStreamBYOBReader: base_config_1.TYPE_VALUE,
      ReadableStreamBYOBRequest: base_config_1.TYPE_VALUE,
      ReadableStreamDefaultController: base_config_1.TYPE_VALUE,
      ReadableStreamDefaultReader: base_config_1.TYPE_VALUE,
      ReadableStreamGenericReader: base_config_1.TYPE,
      RemotePlaybackEventMap: base_config_1.TYPE,
      RemotePlayback: base_config_1.TYPE_VALUE,
      Report: base_config_1.TYPE_VALUE,
      ReportBody: base_config_1.TYPE_VALUE,
      ReportingObserver: base_config_1.TYPE_VALUE,
      Request: base_config_1.TYPE_VALUE,
      ResizeObserver: base_config_1.TYPE_VALUE,
      ResizeObserverEntry: base_config_1.TYPE_VALUE,
      ResizeObserverSize: base_config_1.TYPE_VALUE,
      Response: base_config_1.TYPE_VALUE,
      SVGAElement: base_config_1.TYPE_VALUE,
      SVGAngle: base_config_1.TYPE_VALUE,
      SVGAnimateElement: base_config_1.TYPE_VALUE,
      SVGAnimateMotionElement: base_config_1.TYPE_VALUE,
      SVGAnimateTransformElement: base_config_1.TYPE_VALUE,
      SVGAnimatedAngle: base_config_1.TYPE_VALUE,
      SVGAnimatedBoolean: base_config_1.TYPE_VALUE,
      SVGAnimatedEnumeration: base_config_1.TYPE_VALUE,
      SVGAnimatedInteger: base_config_1.TYPE_VALUE,
      SVGAnimatedLength: base_config_1.TYPE_VALUE,
      SVGAnimatedLengthList: base_config_1.TYPE_VALUE,
      SVGAnimatedNumber: base_config_1.TYPE_VALUE,
      SVGAnimatedNumberList: base_config_1.TYPE_VALUE,
      SVGAnimatedPoints: base_config_1.TYPE,
      SVGAnimatedPreserveAspectRatio: base_config_1.TYPE_VALUE,
      SVGAnimatedRect: base_config_1.TYPE_VALUE,
      SVGAnimatedString: base_config_1.TYPE_VALUE,
      SVGAnimatedTransformList: base_config_1.TYPE_VALUE,
      SVGAnimationElement: base_config_1.TYPE_VALUE,
      SVGCircleElement: base_config_1.TYPE_VALUE,
      SVGClipPathElement: base_config_1.TYPE_VALUE,
      SVGComponentTransferFunctionElement: base_config_1.TYPE_VALUE,
      SVGDefsElement: base_config_1.TYPE_VALUE,
      SVGDescElement: base_config_1.TYPE_VALUE,
      SVGElementEventMap: base_config_1.TYPE,
      SVGElement: base_config_1.TYPE_VALUE,
      SVGEllipseElement: base_config_1.TYPE_VALUE,
      SVGFEBlendElement: base_config_1.TYPE_VALUE,
      SVGFEColorMatrixElement: base_config_1.TYPE_VALUE,
      SVGFEComponentTransferElement: base_config_1.TYPE_VALUE,
      SVGFECompositeElement: base_config_1.TYPE_VALUE,
      SVGFEConvolveMatrixElement: base_config_1.TYPE_VALUE,
      SVGFEDiffuseLightingElement: base_config_1.TYPE_VALUE,
      SVGFEDisplacementMapElement: base_config_1.TYPE_VALUE,
      SVGFEDistantLightElement: base_config_1.TYPE_VALUE,
      SVGFEDropShadowElement: base_config_1.TYPE_VALUE,
      SVGFEFloodElement: base_config_1.TYPE_VALUE,
      SVGFEFuncAElement: base_config_1.TYPE_VALUE,
      SVGFEFuncBElement: base_config_1.TYPE_VALUE,
      SVGFEFuncGElement: base_config_1.TYPE_VALUE,
      SVGFEFuncRElement: base_config_1.TYPE_VALUE,
      SVGFEGaussianBlurElement: base_config_1.TYPE_VALUE,
      SVGFEImageElement: base_config_1.TYPE_VALUE,
      SVGFEMergeElement: base_config_1.TYPE_VALUE,
      SVGFEMergeNodeElement: base_config_1.TYPE_VALUE,
      SVGFEMorphologyElement: base_config_1.TYPE_VALUE,
      SVGFEOffsetElement: base_config_1.TYPE_VALUE,
      SVGFEPointLightElement: base_config_1.TYPE_VALUE,
      SVGFESpecularLightingElement: base_config_1.TYPE_VALUE,
      SVGFESpotLightElement: base_config_1.TYPE_VALUE,
      SVGFETileElement: base_config_1.TYPE_VALUE,
      SVGFETurbulenceElement: base_config_1.TYPE_VALUE,
      SVGFilterElement: base_config_1.TYPE_VALUE,
      SVGFilterPrimitiveStandardAttributes: base_config_1.TYPE,
      SVGFitToViewBox: base_config_1.TYPE,
      SVGForeignObjectElement: base_config_1.TYPE_VALUE,
      SVGGElement: base_config_1.TYPE_VALUE,
      SVGGeometryElement: base_config_1.TYPE_VALUE,
      SVGGradientElement: base_config_1.TYPE_VALUE,
      SVGGraphicsElement: base_config_1.TYPE_VALUE,
      SVGImageElement: base_config_1.TYPE_VALUE,
      SVGLength: base_config_1.TYPE_VALUE,
      SVGLengthList: base_config_1.TYPE_VALUE,
      SVGLineElement: base_config_1.TYPE_VALUE,
      SVGLinearGradientElement: base_config_1.TYPE_VALUE,
      SVGMPathElement: base_config_1.TYPE_VALUE,
      SVGMarkerElement: base_config_1.TYPE_VALUE,
      SVGMaskElement: base_config_1.TYPE_VALUE,
      SVGMetadataElement: base_config_1.TYPE_VALUE,
      SVGNumber: base_config_1.TYPE_VALUE,
      SVGNumberList: base_config_1.TYPE_VALUE,
      SVGPathElement: base_config_1.TYPE_VALUE,
      SVGPatternElement: base_config_1.TYPE_VALUE,
      SVGPointList: base_config_1.TYPE_VALUE,
      SVGPolygonElement: base_config_1.TYPE_VALUE,
      SVGPolylineElement: base_config_1.TYPE_VALUE,
      SVGPreserveAspectRatio: base_config_1.TYPE_VALUE,
      SVGRadialGradientElement: base_config_1.TYPE_VALUE,
      SVGRectElement: base_config_1.TYPE_VALUE,
      SVGSVGElementEventMap: base_config_1.TYPE,
      SVGSVGElement: base_config_1.TYPE_VALUE,
      SVGScriptElement: base_config_1.TYPE_VALUE,
      SVGSetElement: base_config_1.TYPE_VALUE,
      SVGStopElement: base_config_1.TYPE_VALUE,
      SVGStringList: base_config_1.TYPE_VALUE,
      SVGStyleElement: base_config_1.TYPE_VALUE,
      SVGSwitchElement: base_config_1.TYPE_VALUE,
      SVGSymbolElement: base_config_1.TYPE_VALUE,
      SVGTSpanElement: base_config_1.TYPE_VALUE,
      SVGTests: base_config_1.TYPE,
      SVGTextContentElement: base_config_1.TYPE_VALUE,
      SVGTextElement: base_config_1.TYPE_VALUE,
      SVGTextPathElement: base_config_1.TYPE_VALUE,
      SVGTextPositioningElement: base_config_1.TYPE_VALUE,
      SVGTitleElement: base_config_1.TYPE_VALUE,
      SVGTransform: base_config_1.TYPE_VALUE,
      SVGTransformList: base_config_1.TYPE_VALUE,
      SVGURIReference: base_config_1.TYPE,
      SVGUnitTypes: base_config_1.TYPE_VALUE,
      SVGUseElement: base_config_1.TYPE_VALUE,
      SVGViewElement: base_config_1.TYPE_VALUE,
      Screen: base_config_1.TYPE_VALUE,
      ScreenOrientationEventMap: base_config_1.TYPE,
      ScreenOrientation: base_config_1.TYPE_VALUE,
      ScriptProcessorNodeEventMap: base_config_1.TYPE,
      ScriptProcessorNode: base_config_1.TYPE_VALUE,
      SecurityPolicyViolationEvent: base_config_1.TYPE_VALUE,
      Selection: base_config_1.TYPE_VALUE,
      ServiceWorkerEventMap: base_config_1.TYPE,
      ServiceWorker: base_config_1.TYPE_VALUE,
      ServiceWorkerContainerEventMap: base_config_1.TYPE,
      ServiceWorkerContainer: base_config_1.TYPE_VALUE,
      ServiceWorkerRegistrationEventMap: base_config_1.TYPE,
      ServiceWorkerRegistration: base_config_1.TYPE_VALUE,
      ShadowRootEventMap: base_config_1.TYPE,
      ShadowRoot: base_config_1.TYPE_VALUE,
      SharedWorker: base_config_1.TYPE_VALUE,
      Slottable: base_config_1.TYPE,
      SourceBufferEventMap: base_config_1.TYPE,
      SourceBuffer: base_config_1.TYPE_VALUE,
      SourceBufferListEventMap: base_config_1.TYPE,
      SourceBufferList: base_config_1.TYPE_VALUE,
      SpeechRecognitionAlternative: base_config_1.TYPE_VALUE,
      SpeechRecognitionResult: base_config_1.TYPE_VALUE,
      SpeechRecognitionResultList: base_config_1.TYPE_VALUE,
      SpeechSynthesisEventMap: base_config_1.TYPE,
      SpeechSynthesis: base_config_1.TYPE_VALUE,
      SpeechSynthesisErrorEvent: base_config_1.TYPE_VALUE,
      SpeechSynthesisEvent: base_config_1.TYPE_VALUE,
      SpeechSynthesisUtteranceEventMap: base_config_1.TYPE,
      SpeechSynthesisUtterance: base_config_1.TYPE_VALUE,
      SpeechSynthesisVoice: base_config_1.TYPE_VALUE,
      StaticRange: base_config_1.TYPE_VALUE,
      StereoPannerNode: base_config_1.TYPE_VALUE,
      Storage: base_config_1.TYPE_VALUE,
      StorageEvent: base_config_1.TYPE_VALUE,
      StorageManager: base_config_1.TYPE_VALUE,
      StyleMedia: base_config_1.TYPE,
      StylePropertyMap: base_config_1.TYPE_VALUE,
      StylePropertyMapReadOnly: base_config_1.TYPE_VALUE,
      StyleSheet: base_config_1.TYPE_VALUE,
      StyleSheetList: base_config_1.TYPE_VALUE,
      SubmitEvent: base_config_1.TYPE_VALUE,
      SubtleCrypto: base_config_1.TYPE_VALUE,
      Text: base_config_1.TYPE_VALUE,
      TextDecoder: base_config_1.TYPE_VALUE,
      TextDecoderCommon: base_config_1.TYPE,
      TextDecoderStream: base_config_1.TYPE_VALUE,
      TextEncoder: base_config_1.TYPE_VALUE,
      TextEncoderCommon: base_config_1.TYPE,
      TextEncoderStream: base_config_1.TYPE_VALUE,
      TextMetrics: base_config_1.TYPE_VALUE,
      TextTrackEventMap: base_config_1.TYPE,
      TextTrack: base_config_1.TYPE_VALUE,
      TextTrackCueEventMap: base_config_1.TYPE,
      TextTrackCue: base_config_1.TYPE_VALUE,
      TextTrackCueList: base_config_1.TYPE_VALUE,
      TextTrackListEventMap: base_config_1.TYPE,
      TextTrackList: base_config_1.TYPE_VALUE,
      TimeRanges: base_config_1.TYPE_VALUE,
      ToggleEvent: base_config_1.TYPE_VALUE,
      Touch: base_config_1.TYPE_VALUE,
      TouchEvent: base_config_1.TYPE_VALUE,
      TouchList: base_config_1.TYPE_VALUE,
      TrackEvent: base_config_1.TYPE_VALUE,
      TransformStream: base_config_1.TYPE_VALUE,
      TransformStreamDefaultController: base_config_1.TYPE_VALUE,
      TransitionEvent: base_config_1.TYPE_VALUE,
      TreeWalker: base_config_1.TYPE_VALUE,
      UIEvent: base_config_1.TYPE_VALUE,
      URL: base_config_1.TYPE_VALUE,
      webkitURL: base_config_1.TYPE_VALUE,
      URLSearchParams: base_config_1.TYPE_VALUE,
      UserActivation: base_config_1.TYPE_VALUE,
      VTTCue: base_config_1.TYPE_VALUE,
      VTTRegion: base_config_1.TYPE_VALUE,
      ValidityState: base_config_1.TYPE_VALUE,
      VideoColorSpace: base_config_1.TYPE_VALUE,
      VideoDecoderEventMap: base_config_1.TYPE,
      VideoDecoder: base_config_1.TYPE_VALUE,
      VideoEncoderEventMap: base_config_1.TYPE,
      VideoEncoder: base_config_1.TYPE_VALUE,
      VideoFrame: base_config_1.TYPE_VALUE,
      VideoPlaybackQuality: base_config_1.TYPE_VALUE,
      VisualViewportEventMap: base_config_1.TYPE,
      VisualViewport: base_config_1.TYPE_VALUE,
      WEBGL_color_buffer_float: base_config_1.TYPE,
      WEBGL_compressed_texture_astc: base_config_1.TYPE,
      WEBGL_compressed_texture_etc: base_config_1.TYPE,
      WEBGL_compressed_texture_etc1: base_config_1.TYPE,
      WEBGL_compressed_texture_pvrtc: base_config_1.TYPE,
      WEBGL_compressed_texture_s3tc: base_config_1.TYPE,
      WEBGL_compressed_texture_s3tc_srgb: base_config_1.TYPE,
      WEBGL_debug_renderer_info: base_config_1.TYPE,
      WEBGL_debug_shaders: base_config_1.TYPE,
      WEBGL_depth_texture: base_config_1.TYPE,
      WEBGL_draw_buffers: base_config_1.TYPE,
      WEBGL_lose_context: base_config_1.TYPE,
      WEBGL_multi_draw: base_config_1.TYPE,
      WakeLock: base_config_1.TYPE_VALUE,
      WakeLockSentinelEventMap: base_config_1.TYPE,
      WakeLockSentinel: base_config_1.TYPE_VALUE,
      WaveShaperNode: base_config_1.TYPE_VALUE,
      WebGL2RenderingContext: base_config_1.TYPE_VALUE,
      WebGL2RenderingContextBase: base_config_1.TYPE,
      WebGL2RenderingContextOverloads: base_config_1.TYPE,
      WebGLActiveInfo: base_config_1.TYPE_VALUE,
      WebGLBuffer: base_config_1.TYPE_VALUE,
      WebGLContextEvent: base_config_1.TYPE_VALUE,
      WebGLFramebuffer: base_config_1.TYPE_VALUE,
      WebGLProgram: base_config_1.TYPE_VALUE,
      WebGLQuery: base_config_1.TYPE_VALUE,
      WebGLRenderbuffer: base_config_1.TYPE_VALUE,
      WebGLRenderingContext: base_config_1.TYPE_VALUE,
      WebGLRenderingContextBase: base_config_1.TYPE,
      WebGLRenderingContextOverloads: base_config_1.TYPE,
      WebGLSampler: base_config_1.TYPE_VALUE,
      WebGLShader: base_config_1.TYPE_VALUE,
      WebGLShaderPrecisionFormat: base_config_1.TYPE_VALUE,
      WebGLSync: base_config_1.TYPE_VALUE,
      WebGLTexture: base_config_1.TYPE_VALUE,
      WebGLTransformFeedback: base_config_1.TYPE_VALUE,
      WebGLUniformLocation: base_config_1.TYPE_VALUE,
      WebGLVertexArrayObject: base_config_1.TYPE_VALUE,
      WebGLVertexArrayObjectOES: base_config_1.TYPE,
      WebSocketEventMap: base_config_1.TYPE,
      WebSocket: base_config_1.TYPE_VALUE,
      WebTransport: base_config_1.TYPE_VALUE,
      WebTransportBidirectionalStream: base_config_1.TYPE_VALUE,
      WebTransportDatagramDuplexStream: base_config_1.TYPE_VALUE,
      WebTransportError: base_config_1.TYPE_VALUE,
      WheelEvent: base_config_1.TYPE_VALUE,
      WindowEventMap: base_config_1.TYPE,
      Window: base_config_1.TYPE_VALUE,
      WindowEventHandlersEventMap: base_config_1.TYPE,
      WindowEventHandlers: base_config_1.TYPE,
      WindowLocalStorage: base_config_1.TYPE,
      WindowOrWorkerGlobalScope: base_config_1.TYPE,
      WindowSessionStorage: base_config_1.TYPE,
      WorkerEventMap: base_config_1.TYPE,
      Worker: base_config_1.TYPE_VALUE,
      Worklet: base_config_1.TYPE_VALUE,
      WritableStream: base_config_1.TYPE_VALUE,
      WritableStreamDefaultController: base_config_1.TYPE_VALUE,
      WritableStreamDefaultWriter: base_config_1.TYPE_VALUE,
      XMLDocument: base_config_1.TYPE_VALUE,
      XMLHttpRequestEventMap: base_config_1.TYPE,
      XMLHttpRequest: base_config_1.TYPE_VALUE,
      XMLHttpRequestEventTargetEventMap: base_config_1.TYPE,
      XMLHttpRequestEventTarget: base_config_1.TYPE_VALUE,
      XMLHttpRequestUpload: base_config_1.TYPE_VALUE,
      XMLSerializer: base_config_1.TYPE_VALUE,
      XPathEvaluator: base_config_1.TYPE_VALUE,
      XPathEvaluatorBase: base_config_1.TYPE,
      XPathExpression: base_config_1.TYPE_VALUE,
      XPathResult: base_config_1.TYPE_VALUE,
      XSLTProcessor: base_config_1.TYPE_VALUE,
      Console: base_config_1.TYPE,
      CSS: base_config_1.TYPE_VALUE,
      WebAssembly: base_config_1.TYPE_VALUE,
      BlobCallback: base_config_1.TYPE,
      CustomElementConstructor: base_config_1.TYPE,
      DecodeErrorCallback: base_config_1.TYPE,
      DecodeSuccessCallback: base_config_1.TYPE,
      EncodedVideoChunkOutputCallback: base_config_1.TYPE,
      ErrorCallback: base_config_1.TYPE,
      FileCallback: base_config_1.TYPE,
      FileSystemEntriesCallback: base_config_1.TYPE,
      FileSystemEntryCallback: base_config_1.TYPE,
      FrameRequestCallback: base_config_1.TYPE,
      FunctionStringCallback: base_config_1.TYPE,
      IdleRequestCallback: base_config_1.TYPE,
      IntersectionObserverCallback: base_config_1.TYPE,
      LockGrantedCallback: base_config_1.TYPE,
      MediaSessionActionHandler: base_config_1.TYPE,
      MutationCallback: base_config_1.TYPE,
      NotificationPermissionCallback: base_config_1.TYPE,
      OnBeforeUnloadEventHandlerNonNull: base_config_1.TYPE,
      OnErrorEventHandlerNonNull: base_config_1.TYPE,
      PerformanceObserverCallback: base_config_1.TYPE,
      PositionCallback: base_config_1.TYPE,
      PositionErrorCallback: base_config_1.TYPE,
      QueuingStrategySize: base_config_1.TYPE,
      RTCPeerConnectionErrorCallback: base_config_1.TYPE,
      RTCSessionDescriptionCallback: base_config_1.TYPE,
      RemotePlaybackAvailabilityCallback: base_config_1.TYPE,
      ReportingObserverCallback: base_config_1.TYPE,
      ResizeObserverCallback: base_config_1.TYPE,
      TransformerFlushCallback: base_config_1.TYPE,
      TransformerStartCallback: base_config_1.TYPE,
      TransformerTransformCallback: base_config_1.TYPE,
      UnderlyingSinkAbortCallback: base_config_1.TYPE,
      UnderlyingSinkCloseCallback: base_config_1.TYPE,
      UnderlyingSinkStartCallback: base_config_1.TYPE,
      UnderlyingSinkWriteCallback: base_config_1.TYPE,
      UnderlyingSourceCancelCallback: base_config_1.TYPE,
      UnderlyingSourcePullCallback: base_config_1.TYPE,
      UnderlyingSourceStartCallback: base_config_1.TYPE,
      VideoFrameOutputCallback: base_config_1.TYPE,
      VideoFrameRequestCallback: base_config_1.TYPE,
      VoidFunction: base_config_1.TYPE,
      WebCodecsErrorCallback: base_config_1.TYPE,
      HTMLElementTagNameMap: base_config_1.TYPE,
      HTMLElementDeprecatedTagNameMap: base_config_1.TYPE,
      SVGElementTagNameMap: base_config_1.TYPE,
      MathMLElementTagNameMap: base_config_1.TYPE,
      ElementTagNameMap: base_config_1.TYPE,
      AlgorithmIdentifier: base_config_1.TYPE,
      AllowSharedBufferSource: base_config_1.TYPE,
      AutoFill: base_config_1.TYPE,
      AutoFillField: base_config_1.TYPE,
      AutoFillSection: base_config_1.TYPE,
      BigInteger: base_config_1.TYPE,
      BinaryData: base_config_1.TYPE,
      BlobPart: base_config_1.TYPE,
      BodyInit: base_config_1.TYPE,
      BufferSource: base_config_1.TYPE,
      COSEAlgorithmIdentifier: base_config_1.TYPE,
      CSSKeywordish: base_config_1.TYPE,
      CSSNumberish: base_config_1.TYPE,
      CSSPerspectiveValue: base_config_1.TYPE,
      CSSUnparsedSegment: base_config_1.TYPE,
      CanvasImageSource: base_config_1.TYPE,
      ClipboardItemData: base_config_1.TYPE,
      ClipboardItems: base_config_1.TYPE,
      ConstrainBoolean: base_config_1.TYPE,
      ConstrainDOMString: base_config_1.TYPE,
      ConstrainDouble: base_config_1.TYPE,
      ConstrainULong: base_config_1.TYPE,
      DOMHighResTimeStamp: base_config_1.TYPE,
      EpochTimeStamp: base_config_1.TYPE,
      EventListenerOrEventListenerObject: base_config_1.TYPE,
      FileSystemWriteChunkType: base_config_1.TYPE,
      Float32List: base_config_1.TYPE,
      FormDataEntryValue: base_config_1.TYPE,
      GLbitfield: base_config_1.TYPE,
      GLboolean: base_config_1.TYPE,
      GLclampf: base_config_1.TYPE,
      GLenum: base_config_1.TYPE,
      GLfloat: base_config_1.TYPE,
      GLint: base_config_1.TYPE,
      GLint64: base_config_1.TYPE,
      GLintptr: base_config_1.TYPE,
      GLsizei: base_config_1.TYPE,
      GLsizeiptr: base_config_1.TYPE,
      GLuint: base_config_1.TYPE,
      GLuint64: base_config_1.TYPE,
      HTMLOrSVGImageElement: base_config_1.TYPE,
      HTMLOrSVGScriptElement: base_config_1.TYPE,
      HashAlgorithmIdentifier: base_config_1.TYPE,
      HeadersInit: base_config_1.TYPE,
      IDBValidKey: base_config_1.TYPE,
      ImageBitmapSource: base_config_1.TYPE,
      Int32List: base_config_1.TYPE,
      LineAndPositionSetting: base_config_1.TYPE,
      MediaProvider: base_config_1.TYPE,
      MessageEventSource: base_config_1.TYPE,
      MutationRecordType: base_config_1.TYPE,
      NamedCurve: base_config_1.TYPE,
      OffscreenRenderingContext: base_config_1.TYPE,
      OnBeforeUnloadEventHandler: base_config_1.TYPE,
      OnErrorEventHandler: base_config_1.TYPE,
      OptionalPostfixToken: base_config_1.TYPE,
      OptionalPrefixToken: base_config_1.TYPE,
      PerformanceEntryList: base_config_1.TYPE,
      ReadableStreamController: base_config_1.TYPE,
      ReadableStreamReadResult: base_config_1.TYPE,
      ReadableStreamReader: base_config_1.TYPE,
      RenderingContext: base_config_1.TYPE,
      ReportList: base_config_1.TYPE,
      RequestInfo: base_config_1.TYPE,
      TexImageSource: base_config_1.TYPE,
      TimerHandler: base_config_1.TYPE,
      Transferable: base_config_1.TYPE,
      Uint32List: base_config_1.TYPE,
      VibratePattern: base_config_1.TYPE,
      WindowProxy: base_config_1.TYPE,
      XMLHttpRequestBodyInit: base_config_1.TYPE,
      AlignSetting: base_config_1.TYPE,
      AlphaOption: base_config_1.TYPE,
      AnimationPlayState: base_config_1.TYPE,
      AnimationReplaceState: base_config_1.TYPE,
      AppendMode: base_config_1.TYPE,
      AttestationConveyancePreference: base_config_1.TYPE,
      AudioContextLatencyCategory: base_config_1.TYPE,
      AudioContextState: base_config_1.TYPE,
      AuthenticatorAttachment: base_config_1.TYPE,
      AuthenticatorTransport: base_config_1.TYPE,
      AutoFillAddressKind: base_config_1.TYPE,
      AutoFillBase: base_config_1.TYPE,
      AutoFillContactField: base_config_1.TYPE,
      AutoFillContactKind: base_config_1.TYPE,
      AutoFillCredentialField: base_config_1.TYPE,
      AutoFillNormalField: base_config_1.TYPE,
      AutoKeyword: base_config_1.TYPE,
      AutomationRate: base_config_1.TYPE,
      AvcBitstreamFormat: base_config_1.TYPE,
      BinaryType: base_config_1.TYPE,
      BiquadFilterType: base_config_1.TYPE,
      CSSMathOperator: base_config_1.TYPE,
      CSSNumericBaseType: base_config_1.TYPE,
      CanPlayTypeResult: base_config_1.TYPE,
      CanvasDirection: base_config_1.TYPE,
      CanvasFillRule: base_config_1.TYPE,
      CanvasFontKerning: base_config_1.TYPE,
      CanvasFontStretch: base_config_1.TYPE,
      CanvasFontVariantCaps: base_config_1.TYPE,
      CanvasLineCap: base_config_1.TYPE,
      CanvasLineJoin: base_config_1.TYPE,
      CanvasTextAlign: base_config_1.TYPE,
      CanvasTextBaseline: base_config_1.TYPE,
      CanvasTextRendering: base_config_1.TYPE,
      ChannelCountMode: base_config_1.TYPE,
      ChannelInterpretation: base_config_1.TYPE,
      ClientTypes: base_config_1.TYPE,
      CodecState: base_config_1.TYPE,
      ColorGamut: base_config_1.TYPE,
      ColorSpaceConversion: base_config_1.TYPE,
      CompositeOperation: base_config_1.TYPE,
      CompositeOperationOrAuto: base_config_1.TYPE,
      CompressionFormat: base_config_1.TYPE,
      CredentialMediationRequirement: base_config_1.TYPE,
      DOMParserSupportedType: base_config_1.TYPE,
      DirectionSetting: base_config_1.TYPE,
      DisplayCaptureSurfaceType: base_config_1.TYPE,
      DistanceModelType: base_config_1.TYPE,
      DocumentReadyState: base_config_1.TYPE,
      DocumentVisibilityState: base_config_1.TYPE,
      EncodedVideoChunkType: base_config_1.TYPE,
      EndOfStreamError: base_config_1.TYPE,
      EndingType: base_config_1.TYPE,
      FileSystemHandleKind: base_config_1.TYPE,
      FillMode: base_config_1.TYPE,
      FontDisplay: base_config_1.TYPE,
      FontFaceLoadStatus: base_config_1.TYPE,
      FontFaceSetLoadStatus: base_config_1.TYPE,
      FullscreenNavigationUI: base_config_1.TYPE,
      GamepadHapticActuatorType: base_config_1.TYPE,
      GamepadHapticEffectType: base_config_1.TYPE,
      GamepadHapticsResult: base_config_1.TYPE,
      GamepadMappingType: base_config_1.TYPE,
      GlobalCompositeOperation: base_config_1.TYPE,
      HardwareAcceleration: base_config_1.TYPE,
      HdrMetadataType: base_config_1.TYPE,
      IDBCursorDirection: base_config_1.TYPE,
      IDBRequestReadyState: base_config_1.TYPE,
      IDBTransactionDurability: base_config_1.TYPE,
      IDBTransactionMode: base_config_1.TYPE,
      ImageOrientation: base_config_1.TYPE,
      ImageSmoothingQuality: base_config_1.TYPE,
      InsertPosition: base_config_1.TYPE,
      IterationCompositeOperation: base_config_1.TYPE,
      KeyFormat: base_config_1.TYPE,
      KeyType: base_config_1.TYPE,
      KeyUsage: base_config_1.TYPE,
      LatencyMode: base_config_1.TYPE,
      LineAlignSetting: base_config_1.TYPE,
      LockMode: base_config_1.TYPE,
      MIDIPortConnectionState: base_config_1.TYPE,
      MIDIPortDeviceState: base_config_1.TYPE,
      MIDIPortType: base_config_1.TYPE,
      MediaDecodingType: base_config_1.TYPE,
      MediaDeviceKind: base_config_1.TYPE,
      MediaEncodingType: base_config_1.TYPE,
      MediaKeyMessageType: base_config_1.TYPE,
      MediaKeySessionClosedReason: base_config_1.TYPE,
      MediaKeySessionType: base_config_1.TYPE,
      MediaKeyStatus: base_config_1.TYPE,
      MediaKeysRequirement: base_config_1.TYPE,
      MediaSessionAction: base_config_1.TYPE,
      MediaSessionPlaybackState: base_config_1.TYPE,
      MediaStreamTrackState: base_config_1.TYPE,
      NavigationTimingType: base_config_1.TYPE,
      NotificationDirection: base_config_1.TYPE,
      NotificationPermission: base_config_1.TYPE,
      OffscreenRenderingContextId: base_config_1.TYPE,
      OrientationType: base_config_1.TYPE,
      OscillatorType: base_config_1.TYPE,
      OverSampleType: base_config_1.TYPE,
      PanningModelType: base_config_1.TYPE,
      PaymentComplete: base_config_1.TYPE,
      PermissionName: base_config_1.TYPE,
      PermissionState: base_config_1.TYPE,
      PlaybackDirection: base_config_1.TYPE,
      PositionAlignSetting: base_config_1.TYPE,
      PredefinedColorSpace: base_config_1.TYPE,
      PremultiplyAlpha: base_config_1.TYPE,
      PresentationStyle: base_config_1.TYPE,
      PublicKeyCredentialType: base_config_1.TYPE,
      PushEncryptionKeyName: base_config_1.TYPE,
      RTCBundlePolicy: base_config_1.TYPE,
      RTCDataChannelState: base_config_1.TYPE,
      RTCDegradationPreference: base_config_1.TYPE,
      RTCDtlsTransportState: base_config_1.TYPE,
      RTCEncodedVideoFrameType: base_config_1.TYPE,
      RTCErrorDetailType: base_config_1.TYPE,
      RTCIceCandidateType: base_config_1.TYPE,
      RTCIceComponent: base_config_1.TYPE,
      RTCIceConnectionState: base_config_1.TYPE,
      RTCIceGathererState: base_config_1.TYPE,
      RTCIceGatheringState: base_config_1.TYPE,
      RTCIceProtocol: base_config_1.TYPE,
      RTCIceTcpCandidateType: base_config_1.TYPE,
      RTCIceTransportPolicy: base_config_1.TYPE,
      RTCIceTransportState: base_config_1.TYPE,
      RTCPeerConnectionState: base_config_1.TYPE,
      RTCPriorityType: base_config_1.TYPE,
      RTCRtcpMuxPolicy: base_config_1.TYPE,
      RTCRtpTransceiverDirection: base_config_1.TYPE,
      RTCSctpTransportState: base_config_1.TYPE,
      RTCSdpType: base_config_1.TYPE,
      RTCSignalingState: base_config_1.TYPE,
      RTCStatsIceCandidatePairState: base_config_1.TYPE,
      RTCStatsType: base_config_1.TYPE,
      ReadableStreamReaderMode: base_config_1.TYPE,
      ReadableStreamType: base_config_1.TYPE,
      ReadyState: base_config_1.TYPE,
      RecordingState: base_config_1.TYPE,
      ReferrerPolicy: base_config_1.TYPE,
      RemotePlaybackState: base_config_1.TYPE,
      RequestCache: base_config_1.TYPE,
      RequestCredentials: base_config_1.TYPE,
      RequestDestination: base_config_1.TYPE,
      RequestMode: base_config_1.TYPE,
      RequestRedirect: base_config_1.TYPE,
      ResidentKeyRequirement: base_config_1.TYPE,
      ResizeObserverBoxOptions: base_config_1.TYPE,
      ResizeQuality: base_config_1.TYPE,
      ResponseType: base_config_1.TYPE,
      ScrollBehavior: base_config_1.TYPE,
      ScrollLogicalPosition: base_config_1.TYPE,
      ScrollRestoration: base_config_1.TYPE,
      ScrollSetting: base_config_1.TYPE,
      SecurityPolicyViolationEventDisposition: base_config_1.TYPE,
      SelectionMode: base_config_1.TYPE,
      ServiceWorkerState: base_config_1.TYPE,
      ServiceWorkerUpdateViaCache: base_config_1.TYPE,
      ShadowRootMode: base_config_1.TYPE,
      SlotAssignmentMode: base_config_1.TYPE,
      SpeechSynthesisErrorCode: base_config_1.TYPE,
      TextTrackKind: base_config_1.TYPE,
      TextTrackMode: base_config_1.TYPE,
      TouchType: base_config_1.TYPE,
      TransferFunction: base_config_1.TYPE,
      UserVerificationRequirement: base_config_1.TYPE,
      VideoColorPrimaries: base_config_1.TYPE,
      VideoEncoderBitrateMode: base_config_1.TYPE,
      VideoFacingModeEnum: base_config_1.TYPE,
      VideoMatrixCoefficients: base_config_1.TYPE,
      VideoPixelFormat: base_config_1.TYPE,
      VideoTransferCharacteristics: base_config_1.TYPE,
      WakeLockType: base_config_1.TYPE,
      WebGLPowerPreference: base_config_1.TYPE,
      WebTransportCongestionControl: base_config_1.TYPE,
      WebTransportErrorSource: base_config_1.TYPE,
      WorkerType: base_config_1.TYPE,
      WriteCommandType: base_config_1.TYPE,
      XMLHttpRequestResponseType: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/dom.iterable.js
var require_dom_iterable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/dom.iterable.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dom_iterable = void 0;
    var base_config_1 = require_base_config();
    exports.dom_iterable = {
      AudioParam: base_config_1.TYPE,
      AudioParamMap: base_config_1.TYPE,
      BaseAudioContext: base_config_1.TYPE,
      CSSKeyframesRule: base_config_1.TYPE,
      CSSNumericArray: base_config_1.TYPE,
      CSSRuleList: base_config_1.TYPE,
      CSSStyleDeclaration: base_config_1.TYPE,
      CSSTransformValue: base_config_1.TYPE,
      CSSUnparsedValue: base_config_1.TYPE,
      Cache: base_config_1.TYPE,
      CanvasPath: base_config_1.TYPE,
      CanvasPathDrawingStyles: base_config_1.TYPE,
      DOMRectList: base_config_1.TYPE,
      DOMStringList: base_config_1.TYPE,
      DOMTokenList: base_config_1.TYPE,
      DataTransferItemList: base_config_1.TYPE,
      EventCounts: base_config_1.TYPE,
      FileList: base_config_1.TYPE,
      FontFaceSet: base_config_1.TYPE,
      FormData: base_config_1.TYPE,
      HTMLAllCollection: base_config_1.TYPE,
      HTMLCollectionBase: base_config_1.TYPE,
      HTMLCollectionOf: base_config_1.TYPE,
      HTMLFormElement: base_config_1.TYPE,
      HTMLSelectElement: base_config_1.TYPE,
      Headers: base_config_1.TYPE,
      IDBDatabase: base_config_1.TYPE,
      IDBObjectStore: base_config_1.TYPE,
      MIDIInputMap: base_config_1.TYPE,
      MIDIOutput: base_config_1.TYPE,
      MIDIOutputMap: base_config_1.TYPE,
      MediaKeyStatusMap: base_config_1.TYPE,
      MediaList: base_config_1.TYPE,
      MessageEvent: base_config_1.TYPE,
      MimeTypeArray: base_config_1.TYPE,
      NamedNodeMap: base_config_1.TYPE,
      Navigator: base_config_1.TYPE,
      NodeList: base_config_1.TYPE,
      NodeListOf: base_config_1.TYPE,
      Plugin: base_config_1.TYPE,
      PluginArray: base_config_1.TYPE,
      RTCRtpTransceiver: base_config_1.TYPE,
      RTCStatsReport: base_config_1.TYPE,
      SVGLengthList: base_config_1.TYPE,
      SVGNumberList: base_config_1.TYPE,
      SVGPointList: base_config_1.TYPE,
      SVGStringList: base_config_1.TYPE,
      SVGTransformList: base_config_1.TYPE,
      SourceBufferList: base_config_1.TYPE,
      SpeechRecognitionResult: base_config_1.TYPE,
      SpeechRecognitionResultList: base_config_1.TYPE,
      StylePropertyMapReadOnly: base_config_1.TYPE,
      StyleSheetList: base_config_1.TYPE,
      SubtleCrypto: base_config_1.TYPE,
      TextTrackCueList: base_config_1.TYPE,
      TextTrackList: base_config_1.TYPE,
      TouchList: base_config_1.TYPE,
      URLSearchParams: base_config_1.TYPE,
      WEBGL_draw_buffers: base_config_1.TYPE,
      WEBGL_multi_draw: base_config_1.TYPE,
      WebGL2RenderingContextBase: base_config_1.TYPE,
      WebGL2RenderingContextOverloads: base_config_1.TYPE,
      WebGLRenderingContextBase: base_config_1.TYPE,
      WebGLRenderingContextOverloads: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es5.js
var require_es5 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es5.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es5 = void 0;
    var base_config_1 = require_base_config();
    var decorators_1 = require_decorators();
    var decorators_legacy_1 = require_decorators_legacy();
    exports.es5 = {
      ...decorators_1.decorators,
      ...decorators_legacy_1.decorators_legacy,
      Symbol: base_config_1.TYPE,
      PropertyKey: base_config_1.TYPE,
      PropertyDescriptor: base_config_1.TYPE,
      PropertyDescriptorMap: base_config_1.TYPE,
      Object: base_config_1.TYPE_VALUE,
      ObjectConstructor: base_config_1.TYPE,
      Function: base_config_1.TYPE_VALUE,
      FunctionConstructor: base_config_1.TYPE,
      ThisParameterType: base_config_1.TYPE,
      OmitThisParameter: base_config_1.TYPE,
      CallableFunction: base_config_1.TYPE,
      NewableFunction: base_config_1.TYPE,
      IArguments: base_config_1.TYPE,
      String: base_config_1.TYPE_VALUE,
      StringConstructor: base_config_1.TYPE,
      Boolean: base_config_1.TYPE_VALUE,
      BooleanConstructor: base_config_1.TYPE,
      Number: base_config_1.TYPE_VALUE,
      NumberConstructor: base_config_1.TYPE,
      TemplateStringsArray: base_config_1.TYPE,
      ImportMeta: base_config_1.TYPE,
      ImportCallOptions: base_config_1.TYPE,
      ImportAssertions: base_config_1.TYPE,
      ImportAttributes: base_config_1.TYPE,
      Math: base_config_1.TYPE_VALUE,
      Date: base_config_1.TYPE_VALUE,
      DateConstructor: base_config_1.TYPE,
      RegExpMatchArray: base_config_1.TYPE,
      RegExpExecArray: base_config_1.TYPE,
      RegExp: base_config_1.TYPE_VALUE,
      RegExpConstructor: base_config_1.TYPE,
      Error: base_config_1.TYPE_VALUE,
      ErrorConstructor: base_config_1.TYPE,
      EvalError: base_config_1.TYPE_VALUE,
      EvalErrorConstructor: base_config_1.TYPE,
      RangeError: base_config_1.TYPE_VALUE,
      RangeErrorConstructor: base_config_1.TYPE,
      ReferenceError: base_config_1.TYPE_VALUE,
      ReferenceErrorConstructor: base_config_1.TYPE,
      SyntaxError: base_config_1.TYPE_VALUE,
      SyntaxErrorConstructor: base_config_1.TYPE,
      TypeError: base_config_1.TYPE_VALUE,
      TypeErrorConstructor: base_config_1.TYPE,
      URIError: base_config_1.TYPE_VALUE,
      URIErrorConstructor: base_config_1.TYPE,
      JSON: base_config_1.TYPE_VALUE,
      ReadonlyArray: base_config_1.TYPE,
      ConcatArray: base_config_1.TYPE,
      Array: base_config_1.TYPE_VALUE,
      ArrayConstructor: base_config_1.TYPE,
      TypedPropertyDescriptor: base_config_1.TYPE,
      PromiseConstructorLike: base_config_1.TYPE,
      PromiseLike: base_config_1.TYPE,
      Promise: base_config_1.TYPE,
      Awaited: base_config_1.TYPE,
      ArrayLike: base_config_1.TYPE,
      Partial: base_config_1.TYPE,
      Required: base_config_1.TYPE,
      Readonly: base_config_1.TYPE,
      Pick: base_config_1.TYPE,
      Record: base_config_1.TYPE,
      Exclude: base_config_1.TYPE,
      Extract: base_config_1.TYPE,
      Omit: base_config_1.TYPE,
      NonNullable: base_config_1.TYPE,
      Parameters: base_config_1.TYPE,
      ConstructorParameters: base_config_1.TYPE,
      ReturnType: base_config_1.TYPE,
      InstanceType: base_config_1.TYPE,
      Uppercase: base_config_1.TYPE,
      Lowercase: base_config_1.TYPE,
      Capitalize: base_config_1.TYPE,
      Uncapitalize: base_config_1.TYPE,
      ThisType: base_config_1.TYPE,
      WeakKeyTypes: base_config_1.TYPE,
      WeakKey: base_config_1.TYPE,
      ArrayBuffer: base_config_1.TYPE_VALUE,
      ArrayBufferTypes: base_config_1.TYPE,
      ArrayBufferLike: base_config_1.TYPE,
      ArrayBufferConstructor: base_config_1.TYPE,
      ArrayBufferView: base_config_1.TYPE,
      DataView: base_config_1.TYPE_VALUE,
      DataViewConstructor: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE_VALUE,
      Int8ArrayConstructor: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE_VALUE,
      Uint8ArrayConstructor: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE_VALUE,
      Uint8ClampedArrayConstructor: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE_VALUE,
      Int16ArrayConstructor: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE_VALUE,
      Uint16ArrayConstructor: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE_VALUE,
      Int32ArrayConstructor: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE_VALUE,
      Uint32ArrayConstructor: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE_VALUE,
      Float32ArrayConstructor: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE_VALUE,
      Float64ArrayConstructor: base_config_1.TYPE,
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.collection.js
var require_es2015_collection = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.collection.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_collection = void 0;
    var base_config_1 = require_base_config();
    exports.es2015_collection = {
      Map: base_config_1.TYPE_VALUE,
      MapConstructor: base_config_1.TYPE,
      ReadonlyMap: base_config_1.TYPE,
      WeakMap: base_config_1.TYPE_VALUE,
      WeakMapConstructor: base_config_1.TYPE,
      Set: base_config_1.TYPE_VALUE,
      SetConstructor: base_config_1.TYPE,
      ReadonlySet: base_config_1.TYPE,
      WeakSet: base_config_1.TYPE_VALUE,
      WeakSetConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.core.js
var require_es2015_core = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.core.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_core = void 0;
    var base_config_1 = require_base_config();
    exports.es2015_core = {
      Array: base_config_1.TYPE,
      ArrayConstructor: base_config_1.TYPE,
      DateConstructor: base_config_1.TYPE,
      Function: base_config_1.TYPE,
      Math: base_config_1.TYPE,
      NumberConstructor: base_config_1.TYPE,
      ObjectConstructor: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      RegExp: base_config_1.TYPE,
      RegExpConstructor: base_config_1.TYPE,
      String: base_config_1.TYPE,
      StringConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.symbol.js
var require_es2015_symbol = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.symbol.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_symbol = void 0;
    var base_config_1 = require_base_config();
    exports.es2015_symbol = {
      SymbolConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.iterable.js
var require_es2015_iterable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.iterable.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_iterable = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_1 = require_es2015_symbol();
    exports.es2015_iterable = {
      ...es2015_symbol_1.es2015_symbol,
      SymbolConstructor: base_config_1.TYPE,
      IteratorYieldResult: base_config_1.TYPE,
      IteratorReturnResult: base_config_1.TYPE,
      IteratorResult: base_config_1.TYPE,
      Iterator: base_config_1.TYPE,
      Iterable: base_config_1.TYPE,
      IterableIterator: base_config_1.TYPE,
      Array: base_config_1.TYPE,
      ArrayConstructor: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      IArguments: base_config_1.TYPE,
      Map: base_config_1.TYPE,
      ReadonlyMap: base_config_1.TYPE,
      MapConstructor: base_config_1.TYPE,
      WeakMap: base_config_1.TYPE,
      WeakMapConstructor: base_config_1.TYPE,
      Set: base_config_1.TYPE,
      ReadonlySet: base_config_1.TYPE,
      SetConstructor: base_config_1.TYPE,
      WeakSet: base_config_1.TYPE,
      WeakSetConstructor: base_config_1.TYPE,
      Promise: base_config_1.TYPE,
      PromiseConstructor: base_config_1.TYPE,
      String: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Int8ArrayConstructor: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ArrayConstructor: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Uint8ClampedArrayConstructor: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Int16ArrayConstructor: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Uint16ArrayConstructor: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Int32ArrayConstructor: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Uint32ArrayConstructor: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float32ArrayConstructor: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE,
      Float64ArrayConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.generator.js
var require_es2015_generator = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.generator.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_generator = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    exports.es2015_generator = {
      ...es2015_iterable_1.es2015_iterable,
      Generator: base_config_1.TYPE,
      GeneratorFunction: base_config_1.TYPE,
      GeneratorFunctionConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.promise.js
var require_es2015_promise = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.promise.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_promise = void 0;
    var base_config_1 = require_base_config();
    exports.es2015_promise = {
      PromiseConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.proxy.js
var require_es2015_proxy = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.proxy.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_proxy = void 0;
    var base_config_1 = require_base_config();
    exports.es2015_proxy = {
      ProxyHandler: base_config_1.TYPE,
      ProxyConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.reflect.js
var require_es2015_reflect = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.reflect.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_reflect = void 0;
    var base_config_1 = require_base_config();
    exports.es2015_reflect = {
      Reflect: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.symbol.wellknown.js
var require_es2015_symbol_wellknown = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.symbol.wellknown.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_symbol_wellknown = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_1 = require_es2015_symbol();
    exports.es2015_symbol_wellknown = {
      ...es2015_symbol_1.es2015_symbol,
      SymbolConstructor: base_config_1.TYPE,
      Symbol: base_config_1.TYPE,
      Array: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Date: base_config_1.TYPE,
      Map: base_config_1.TYPE,
      WeakMap: base_config_1.TYPE,
      Set: base_config_1.TYPE,
      WeakSet: base_config_1.TYPE,
      JSON: base_config_1.TYPE,
      Function: base_config_1.TYPE,
      GeneratorFunction: base_config_1.TYPE,
      Math: base_config_1.TYPE,
      Promise: base_config_1.TYPE,
      PromiseConstructor: base_config_1.TYPE,
      RegExp: base_config_1.TYPE,
      RegExpConstructor: base_config_1.TYPE,
      String: base_config_1.TYPE,
      ArrayBuffer: base_config_1.TYPE,
      DataView: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE,
      ArrayConstructor: base_config_1.TYPE,
      MapConstructor: base_config_1.TYPE,
      SetConstructor: base_config_1.TYPE,
      ArrayBufferConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es6.js
var require_es6 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es6.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es6 = void 0;
    var es5_1 = require_es5();
    var es2015_collection_1 = require_es2015_collection();
    var es2015_core_1 = require_es2015_core();
    var es2015_generator_1 = require_es2015_generator();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_promise_1 = require_es2015_promise();
    var es2015_proxy_1 = require_es2015_proxy();
    var es2015_reflect_1 = require_es2015_reflect();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    exports.es6 = {
      ...es5_1.es5,
      ...es2015_core_1.es2015_core,
      ...es2015_collection_1.es2015_collection,
      ...es2015_iterable_1.es2015_iterable,
      ...es2015_generator_1.es2015_generator,
      ...es2015_promise_1.es2015_promise,
      ...es2015_proxy_1.es2015_proxy,
      ...es2015_reflect_1.es2015_reflect,
      ...es2015_symbol_1.es2015_symbol,
      ...es2015_symbol_wellknown_1.es2015_symbol_wellknown
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.js
var require_es2015 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015 = void 0;
    var es5_1 = require_es5();
    var es2015_collection_1 = require_es2015_collection();
    var es2015_core_1 = require_es2015_core();
    var es2015_generator_1 = require_es2015_generator();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_promise_1 = require_es2015_promise();
    var es2015_proxy_1 = require_es2015_proxy();
    var es2015_reflect_1 = require_es2015_reflect();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    exports.es2015 = {
      ...es5_1.es5,
      ...es2015_core_1.es2015_core,
      ...es2015_collection_1.es2015_collection,
      ...es2015_iterable_1.es2015_iterable,
      ...es2015_generator_1.es2015_generator,
      ...es2015_promise_1.es2015_promise,
      ...es2015_proxy_1.es2015_proxy,
      ...es2015_reflect_1.es2015_reflect,
      ...es2015_symbol_1.es2015_symbol,
      ...es2015_symbol_wellknown_1.es2015_symbol_wellknown
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.array.include.js
var require_es2016_array_include = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.array.include.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2016_array_include = void 0;
    var base_config_1 = require_base_config();
    exports.es2016_array_include = {
      Array: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es7.js
var require_es7 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es7.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es7 = void 0;
    var es2015_1 = require_es2015();
    var es2016_array_include_1 = require_es2016_array_include();
    exports.es7 = {
      ...es2015_1.es2015,
      ...es2016_array_include_1.es2016_array_include
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.js
var require_es2016 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2016 = void 0;
    var es2015_1 = require_es2015();
    var es2016_array_include_1 = require_es2016_array_include();
    exports.es2016 = {
      ...es2015_1.es2015,
      ...es2016_array_include_1.es2016_array_include
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/scripthost.js
var require_scripthost = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/scripthost.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scripthost = void 0;
    var base_config_1 = require_base_config();
    exports.scripthost = {
      ActiveXObject: base_config_1.TYPE_VALUE,
      ITextWriter: base_config_1.TYPE,
      TextStreamBase: base_config_1.TYPE,
      TextStreamWriter: base_config_1.TYPE,
      TextStreamReader: base_config_1.TYPE,
      SafeArray: base_config_1.TYPE_VALUE,
      Enumerator: base_config_1.TYPE_VALUE,
      EnumeratorConstructor: base_config_1.TYPE,
      VBArray: base_config_1.TYPE_VALUE,
      VBArrayConstructor: base_config_1.TYPE,
      VarDate: base_config_1.TYPE_VALUE,
      DateConstructor: base_config_1.TYPE,
      Date: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.importscripts.js
var require_webworker_importscripts = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.importscripts.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.webworker_importscripts = void 0;
    exports.webworker_importscripts = {};
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.full.js
var require_es2016_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.full.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2016_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2016_1 = require_es2016();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.es2016_full = {
      ...es2016_1.es2016,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.date.js
var require_es2017_date = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.date.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2017_date = void 0;
    var base_config_1 = require_base_config();
    exports.es2017_date = {
      DateConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.intl.js
var require_es2017_intl = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.intl.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2017_intl = void 0;
    var base_config_1 = require_base_config();
    exports.es2017_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.object.js
var require_es2017_object = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.object.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2017_object = void 0;
    var base_config_1 = require_base_config();
    exports.es2017_object = {
      ObjectConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.sharedmemory.js
var require_es2017_sharedmemory = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.sharedmemory.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2017_sharedmemory = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    exports.es2017_sharedmemory = {
      ...es2015_symbol_1.es2015_symbol,
      ...es2015_symbol_wellknown_1.es2015_symbol_wellknown,
      SharedArrayBuffer: base_config_1.TYPE_VALUE,
      SharedArrayBufferConstructor: base_config_1.TYPE,
      ArrayBufferTypes: base_config_1.TYPE,
      Atomics: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.string.js
var require_es2017_string = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.string.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2017_string = void 0;
    var base_config_1 = require_base_config();
    exports.es2017_string = {
      String: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.typedarrays.js
var require_es2017_typedarrays = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.typedarrays.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2017_typedarrays = void 0;
    var base_config_1 = require_base_config();
    exports.es2017_typedarrays = {
      Int8ArrayConstructor: base_config_1.TYPE,
      Uint8ArrayConstructor: base_config_1.TYPE,
      Uint8ClampedArrayConstructor: base_config_1.TYPE,
      Int16ArrayConstructor: base_config_1.TYPE,
      Uint16ArrayConstructor: base_config_1.TYPE,
      Int32ArrayConstructor: base_config_1.TYPE,
      Uint32ArrayConstructor: base_config_1.TYPE,
      Float32ArrayConstructor: base_config_1.TYPE,
      Float64ArrayConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.js
var require_es2017 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2017 = void 0;
    var es2016_1 = require_es2016();
    var es2017_date_1 = require_es2017_date();
    var es2017_intl_1 = require_es2017_intl();
    var es2017_object_1 = require_es2017_object();
    var es2017_sharedmemory_1 = require_es2017_sharedmemory();
    var es2017_string_1 = require_es2017_string();
    var es2017_typedarrays_1 = require_es2017_typedarrays();
    exports.es2017 = {
      ...es2016_1.es2016,
      ...es2017_object_1.es2017_object,
      ...es2017_sharedmemory_1.es2017_sharedmemory,
      ...es2017_string_1.es2017_string,
      ...es2017_intl_1.es2017_intl,
      ...es2017_typedarrays_1.es2017_typedarrays,
      ...es2017_date_1.es2017_date
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.full.js
var require_es2017_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.full.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2017_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2017_1 = require_es2017();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.es2017_full = {
      ...es2017_1.es2017,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.asynciterable.js
var require_es2018_asynciterable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.asynciterable.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2018_asynciterable = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_symbol_1 = require_es2015_symbol();
    exports.es2018_asynciterable = {
      ...es2015_symbol_1.es2015_symbol,
      ...es2015_iterable_1.es2015_iterable,
      SymbolConstructor: base_config_1.TYPE,
      AsyncIterator: base_config_1.TYPE,
      AsyncIterable: base_config_1.TYPE,
      AsyncIterableIterator: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.asyncgenerator.js
var require_es2018_asyncgenerator = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.asyncgenerator.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2018_asyncgenerator = void 0;
    var base_config_1 = require_base_config();
    var es2018_asynciterable_1 = require_es2018_asynciterable();
    exports.es2018_asyncgenerator = {
      ...es2018_asynciterable_1.es2018_asynciterable,
      AsyncGenerator: base_config_1.TYPE,
      AsyncGeneratorFunction: base_config_1.TYPE,
      AsyncGeneratorFunctionConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.intl.js
var require_es2018_intl = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.intl.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2018_intl = void 0;
    var base_config_1 = require_base_config();
    exports.es2018_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.promise.js
var require_es2018_promise = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.promise.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2018_promise = void 0;
    var base_config_1 = require_base_config();
    exports.es2018_promise = {
      Promise: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.regexp.js
var require_es2018_regexp = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.regexp.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2018_regexp = void 0;
    var base_config_1 = require_base_config();
    exports.es2018_regexp = {
      RegExpMatchArray: base_config_1.TYPE,
      RegExpExecArray: base_config_1.TYPE,
      RegExp: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.js
var require_es2018 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2018 = void 0;
    var es2017_1 = require_es2017();
    var es2018_asyncgenerator_1 = require_es2018_asyncgenerator();
    var es2018_asynciterable_1 = require_es2018_asynciterable();
    var es2018_intl_1 = require_es2018_intl();
    var es2018_promise_1 = require_es2018_promise();
    var es2018_regexp_1 = require_es2018_regexp();
    exports.es2018 = {
      ...es2017_1.es2017,
      ...es2018_asynciterable_1.es2018_asynciterable,
      ...es2018_asyncgenerator_1.es2018_asyncgenerator,
      ...es2018_promise_1.es2018_promise,
      ...es2018_regexp_1.es2018_regexp,
      ...es2018_intl_1.es2018_intl
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.full.js
var require_es2018_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.full.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2018_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2018_1 = require_es2018();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.es2018_full = {
      ...es2018_1.es2018,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.array.js
var require_es2019_array = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.array.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2019_array = void 0;
    var base_config_1 = require_base_config();
    exports.es2019_array = {
      FlatArray: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Array: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.intl.js
var require_es2019_intl = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.intl.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2019_intl = void 0;
    var base_config_1 = require_base_config();
    exports.es2019_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.object.js
var require_es2019_object = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.object.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2019_object = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    exports.es2019_object = {
      ...es2015_iterable_1.es2015_iterable,
      ObjectConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.string.js
var require_es2019_string = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.string.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2019_string = void 0;
    var base_config_1 = require_base_config();
    exports.es2019_string = {
      String: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.symbol.js
var require_es2019_symbol = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.symbol.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2019_symbol = void 0;
    var base_config_1 = require_base_config();
    exports.es2019_symbol = {
      Symbol: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.js
var require_es2019 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2019 = void 0;
    var es2018_1 = require_es2018();
    var es2019_array_1 = require_es2019_array();
    var es2019_intl_1 = require_es2019_intl();
    var es2019_object_1 = require_es2019_object();
    var es2019_string_1 = require_es2019_string();
    var es2019_symbol_1 = require_es2019_symbol();
    exports.es2019 = {
      ...es2018_1.es2018,
      ...es2019_array_1.es2019_array,
      ...es2019_object_1.es2019_object,
      ...es2019_string_1.es2019_string,
      ...es2019_symbol_1.es2019_symbol,
      ...es2019_intl_1.es2019_intl
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.full.js
var require_es2019_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.full.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2019_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2019_1 = require_es2019();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.es2019_full = {
      ...es2019_1.es2019,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.intl.js
var require_es2020_intl = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.intl.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_intl = void 0;
    var base_config_1 = require_base_config();
    var es2018_intl_1 = require_es2018_intl();
    exports.es2020_intl = {
      ...es2018_intl_1.es2018_intl,
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.bigint.js
var require_es2020_bigint = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.bigint.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_bigint = void 0;
    var base_config_1 = require_base_config();
    var es2020_intl_1 = require_es2020_intl();
    exports.es2020_bigint = {
      ...es2020_intl_1.es2020_intl,
      BigIntToLocaleStringOptions: base_config_1.TYPE,
      BigInt: base_config_1.TYPE_VALUE,
      BigIntConstructor: base_config_1.TYPE,
      BigInt64Array: base_config_1.TYPE_VALUE,
      BigInt64ArrayConstructor: base_config_1.TYPE,
      BigUint64Array: base_config_1.TYPE_VALUE,
      BigUint64ArrayConstructor: base_config_1.TYPE,
      DataView: base_config_1.TYPE,
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.date.js
var require_es2020_date = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.date.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_date = void 0;
    var base_config_1 = require_base_config();
    var es2020_intl_1 = require_es2020_intl();
    exports.es2020_date = {
      ...es2020_intl_1.es2020_intl,
      Date: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.number.js
var require_es2020_number = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.number.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_number = void 0;
    var base_config_1 = require_base_config();
    var es2020_intl_1 = require_es2020_intl();
    exports.es2020_number = {
      ...es2020_intl_1.es2020_intl,
      Number: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.promise.js
var require_es2020_promise = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.promise.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_promise = void 0;
    var base_config_1 = require_base_config();
    exports.es2020_promise = {
      PromiseFulfilledResult: base_config_1.TYPE,
      PromiseRejectedResult: base_config_1.TYPE,
      PromiseSettledResult: base_config_1.TYPE,
      PromiseConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.sharedmemory.js
var require_es2020_sharedmemory = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.sharedmemory.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_sharedmemory = void 0;
    var base_config_1 = require_base_config();
    exports.es2020_sharedmemory = {
      Atomics: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.string.js
var require_es2020_string = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.string.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_string = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    exports.es2020_string = {
      ...es2015_iterable_1.es2015_iterable,
      String: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.symbol.wellknown.js
var require_es2020_symbol_wellknown = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.symbol.wellknown.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_symbol_wellknown = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_symbol_1 = require_es2015_symbol();
    exports.es2020_symbol_wellknown = {
      ...es2015_iterable_1.es2015_iterable,
      ...es2015_symbol_1.es2015_symbol,
      SymbolConstructor: base_config_1.TYPE,
      RegExp: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.js
var require_es2020 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020 = void 0;
    var es2019_1 = require_es2019();
    var es2020_bigint_1 = require_es2020_bigint();
    var es2020_date_1 = require_es2020_date();
    var es2020_intl_1 = require_es2020_intl();
    var es2020_number_1 = require_es2020_number();
    var es2020_promise_1 = require_es2020_promise();
    var es2020_sharedmemory_1 = require_es2020_sharedmemory();
    var es2020_string_1 = require_es2020_string();
    var es2020_symbol_wellknown_1 = require_es2020_symbol_wellknown();
    exports.es2020 = {
      ...es2019_1.es2019,
      ...es2020_bigint_1.es2020_bigint,
      ...es2020_date_1.es2020_date,
      ...es2020_number_1.es2020_number,
      ...es2020_promise_1.es2020_promise,
      ...es2020_sharedmemory_1.es2020_sharedmemory,
      ...es2020_string_1.es2020_string,
      ...es2020_symbol_wellknown_1.es2020_symbol_wellknown,
      ...es2020_intl_1.es2020_intl
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.full.js
var require_es2020_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.full.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2020_1 = require_es2020();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.es2020_full = {
      ...es2020_1.es2020,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.intl.js
var require_es2021_intl = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.intl.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2021_intl = void 0;
    var base_config_1 = require_base_config();
    exports.es2021_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.promise.js
var require_es2021_promise = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.promise.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2021_promise = void 0;
    var base_config_1 = require_base_config();
    exports.es2021_promise = {
      AggregateError: base_config_1.TYPE_VALUE,
      AggregateErrorConstructor: base_config_1.TYPE,
      PromiseConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.string.js
var require_es2021_string = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.string.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2021_string = void 0;
    var base_config_1 = require_base_config();
    exports.es2021_string = {
      String: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.weakref.js
var require_es2021_weakref = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.weakref.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2021_weakref = void 0;
    var base_config_1 = require_base_config();
    exports.es2021_weakref = {
      WeakRef: base_config_1.TYPE_VALUE,
      WeakRefConstructor: base_config_1.TYPE,
      FinalizationRegistry: base_config_1.TYPE_VALUE,
      FinalizationRegistryConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.js
var require_es2021 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2021 = void 0;
    var es2020_1 = require_es2020();
    var es2021_intl_1 = require_es2021_intl();
    var es2021_promise_1 = require_es2021_promise();
    var es2021_string_1 = require_es2021_string();
    var es2021_weakref_1 = require_es2021_weakref();
    exports.es2021 = {
      ...es2020_1.es2020,
      ...es2021_promise_1.es2021_promise,
      ...es2021_string_1.es2021_string,
      ...es2021_weakref_1.es2021_weakref,
      ...es2021_intl_1.es2021_intl
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.full.js
var require_es2021_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.full.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2021_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2021_1 = require_es2021();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.es2021_full = {
      ...es2021_1.es2021,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.array.js
var require_es2022_array = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.array.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022_array = void 0;
    var base_config_1 = require_base_config();
    exports.es2022_array = {
      Array: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE,
      BigInt64Array: base_config_1.TYPE,
      BigUint64Array: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.error.js
var require_es2022_error = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.error.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022_error = void 0;
    var base_config_1 = require_base_config();
    exports.es2022_error = {
      ErrorOptions: base_config_1.TYPE,
      Error: base_config_1.TYPE,
      ErrorConstructor: base_config_1.TYPE,
      EvalErrorConstructor: base_config_1.TYPE,
      RangeErrorConstructor: base_config_1.TYPE,
      ReferenceErrorConstructor: base_config_1.TYPE,
      SyntaxErrorConstructor: base_config_1.TYPE,
      TypeErrorConstructor: base_config_1.TYPE,
      URIErrorConstructor: base_config_1.TYPE,
      AggregateErrorConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.intl.js
var require_es2022_intl = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.intl.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022_intl = void 0;
    var base_config_1 = require_base_config();
    exports.es2022_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.object.js
var require_es2022_object = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.object.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022_object = void 0;
    var base_config_1 = require_base_config();
    exports.es2022_object = {
      ObjectConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.regexp.js
var require_es2022_regexp = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.regexp.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022_regexp = void 0;
    var base_config_1 = require_base_config();
    exports.es2022_regexp = {
      RegExpMatchArray: base_config_1.TYPE,
      RegExpExecArray: base_config_1.TYPE,
      RegExpIndicesArray: base_config_1.TYPE,
      RegExp: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.sharedmemory.js
var require_es2022_sharedmemory = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.sharedmemory.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022_sharedmemory = void 0;
    var base_config_1 = require_base_config();
    exports.es2022_sharedmemory = {
      Atomics: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.string.js
var require_es2022_string = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.string.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022_string = void 0;
    var base_config_1 = require_base_config();
    exports.es2022_string = {
      String: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.js
var require_es2022 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022 = void 0;
    var es2021_1 = require_es2021();
    var es2022_array_1 = require_es2022_array();
    var es2022_error_1 = require_es2022_error();
    var es2022_intl_1 = require_es2022_intl();
    var es2022_object_1 = require_es2022_object();
    var es2022_regexp_1 = require_es2022_regexp();
    var es2022_sharedmemory_1 = require_es2022_sharedmemory();
    var es2022_string_1 = require_es2022_string();
    exports.es2022 = {
      ...es2021_1.es2021,
      ...es2022_array_1.es2022_array,
      ...es2022_error_1.es2022_error,
      ...es2022_intl_1.es2022_intl,
      ...es2022_object_1.es2022_object,
      ...es2022_sharedmemory_1.es2022_sharedmemory,
      ...es2022_string_1.es2022_string,
      ...es2022_regexp_1.es2022_regexp
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.full.js
var require_es2022_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.full.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2022_1 = require_es2022();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.es2022_full = {
      ...es2022_1.es2022,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.array.js
var require_es2023_array = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.array.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2023_array = void 0;
    var base_config_1 = require_base_config();
    exports.es2023_array = {
      Array: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE,
      BigInt64Array: base_config_1.TYPE,
      BigUint64Array: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.collection.js
var require_es2023_collection = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.collection.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2023_collection = void 0;
    var base_config_1 = require_base_config();
    exports.es2023_collection = {
      WeakKeyTypes: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.js
var require_es2023 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2023 = void 0;
    var es2022_1 = require_es2022();
    var es2023_array_1 = require_es2023_array();
    var es2023_collection_1 = require_es2023_collection();
    exports.es2023 = {
      ...es2022_1.es2022,
      ...es2023_array_1.es2023_array,
      ...es2023_collection_1.es2023_collection
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.full.js
var require_es2023_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.full.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2023_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2023_1 = require_es2023();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.es2023_full = {
      ...es2023_1.es2023,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.decorators.js
var require_esnext_decorators = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.decorators.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_decorators = void 0;
    var base_config_1 = require_base_config();
    var decorators_1 = require_decorators();
    var es2015_symbol_1 = require_es2015_symbol();
    exports.esnext_decorators = {
      ...es2015_symbol_1.es2015_symbol,
      ...decorators_1.decorators,
      SymbolConstructor: base_config_1.TYPE,
      Function: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.disposable.js
var require_esnext_disposable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.disposable.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_disposable = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_1 = require_es2015_symbol();
    exports.esnext_disposable = {
      ...es2015_symbol_1.es2015_symbol,
      SymbolConstructor: base_config_1.TYPE,
      Disposable: base_config_1.TYPE,
      AsyncDisposable: base_config_1.TYPE,
      SuppressedError: base_config_1.TYPE_VALUE,
      SuppressedErrorConstructor: base_config_1.TYPE,
      DisposableStack: base_config_1.TYPE_VALUE,
      DisposableStackConstructor: base_config_1.TYPE,
      AsyncDisposableStack: base_config_1.TYPE_VALUE,
      AsyncDisposableStackConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.intl.js
var require_esnext_intl = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.intl.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_intl = void 0;
    var base_config_1 = require_base_config();
    exports.esnext_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.js
var require_esnext = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext = void 0;
    var es2023_1 = require_es2023();
    var esnext_decorators_1 = require_esnext_decorators();
    var esnext_disposable_1 = require_esnext_disposable();
    var esnext_intl_1 = require_esnext_intl();
    exports.esnext = {
      ...es2023_1.es2023,
      ...esnext_intl_1.esnext_intl,
      ...esnext_decorators_1.esnext_decorators,
      ...esnext_disposable_1.esnext_disposable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.array.js
var require_esnext_array = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.array.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_array = void 0;
    var base_config_1 = require_base_config();
    exports.esnext_array = {
      Array: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE,
      BigInt64Array: base_config_1.TYPE,
      BigUint64Array: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.asynciterable.js
var require_esnext_asynciterable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.asynciterable.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_asynciterable = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_symbol_1 = require_es2015_symbol();
    exports.esnext_asynciterable = {
      ...es2015_symbol_1.es2015_symbol,
      ...es2015_iterable_1.es2015_iterable,
      SymbolConstructor: base_config_1.TYPE,
      AsyncIterator: base_config_1.TYPE,
      AsyncIterable: base_config_1.TYPE,
      AsyncIterableIterator: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.bigint.js
var require_esnext_bigint = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.bigint.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_bigint = void 0;
    var base_config_1 = require_base_config();
    var es2020_intl_1 = require_es2020_intl();
    exports.esnext_bigint = {
      ...es2020_intl_1.es2020_intl,
      BigIntToLocaleStringOptions: base_config_1.TYPE,
      BigInt: base_config_1.TYPE_VALUE,
      BigIntConstructor: base_config_1.TYPE,
      BigInt64Array: base_config_1.TYPE_VALUE,
      BigInt64ArrayConstructor: base_config_1.TYPE,
      BigUint64Array: base_config_1.TYPE_VALUE,
      BigUint64ArrayConstructor: base_config_1.TYPE,
      DataView: base_config_1.TYPE,
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.collection.js
var require_esnext_collection = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.collection.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_collection = void 0;
    var base_config_1 = require_base_config();
    exports.esnext_collection = {
      WeakKeyTypes: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.full.js
var require_esnext_full = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.full.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var esnext_1 = require_esnext();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.esnext_full = {
      ...esnext_1.esnext,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.promise.js
var require_esnext_promise = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.promise.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_promise = void 0;
    var base_config_1 = require_base_config();
    exports.esnext_promise = {
      AggregateError: base_config_1.TYPE_VALUE,
      AggregateErrorConstructor: base_config_1.TYPE,
      PromiseConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.string.js
var require_esnext_string = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.string.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_string = void 0;
    var base_config_1 = require_base_config();
    exports.esnext_string = {
      String: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.symbol.js
var require_esnext_symbol = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.symbol.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_symbol = void 0;
    var base_config_1 = require_base_config();
    exports.esnext_symbol = {
      Symbol: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.weakref.js
var require_esnext_weakref = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.weakref.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_weakref = void 0;
    var base_config_1 = require_base_config();
    exports.esnext_weakref = {
      WeakRef: base_config_1.TYPE_VALUE,
      WeakRefConstructor: base_config_1.TYPE,
      FinalizationRegistry: base_config_1.TYPE_VALUE,
      FinalizationRegistryConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/lib.js
var require_lib2 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/lib.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lib = void 0;
    var dom_1 = require_dom();
    var es5_1 = require_es5();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.lib = {
      ...es5_1.es5,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.js
var require_webworker = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.webworker = void 0;
    var base_config_1 = require_base_config();
    exports.webworker = {
      AddEventListenerOptions: base_config_1.TYPE,
      AesCbcParams: base_config_1.TYPE,
      AesCtrParams: base_config_1.TYPE,
      AesDerivedKeyParams: base_config_1.TYPE,
      AesGcmParams: base_config_1.TYPE,
      AesKeyAlgorithm: base_config_1.TYPE,
      AesKeyGenParams: base_config_1.TYPE,
      Algorithm: base_config_1.TYPE,
      AudioConfiguration: base_config_1.TYPE,
      AvcEncoderConfig: base_config_1.TYPE,
      BlobPropertyBag: base_config_1.TYPE,
      CSSMatrixComponentOptions: base_config_1.TYPE,
      CSSNumericType: base_config_1.TYPE,
      CacheQueryOptions: base_config_1.TYPE,
      ClientQueryOptions: base_config_1.TYPE,
      CloseEventInit: base_config_1.TYPE,
      CryptoKeyPair: base_config_1.TYPE,
      CustomEventInit: base_config_1.TYPE,
      DOMMatrix2DInit: base_config_1.TYPE,
      DOMMatrixInit: base_config_1.TYPE,
      DOMPointInit: base_config_1.TYPE,
      DOMQuadInit: base_config_1.TYPE,
      DOMRectInit: base_config_1.TYPE,
      EcKeyGenParams: base_config_1.TYPE,
      EcKeyImportParams: base_config_1.TYPE,
      EcdhKeyDeriveParams: base_config_1.TYPE,
      EcdsaParams: base_config_1.TYPE,
      EncodedVideoChunkInit: base_config_1.TYPE,
      EncodedVideoChunkMetadata: base_config_1.TYPE,
      ErrorEventInit: base_config_1.TYPE,
      EventInit: base_config_1.TYPE,
      EventListenerOptions: base_config_1.TYPE,
      EventSourceInit: base_config_1.TYPE,
      ExtendableEventInit: base_config_1.TYPE,
      ExtendableMessageEventInit: base_config_1.TYPE,
      FetchEventInit: base_config_1.TYPE,
      FilePropertyBag: base_config_1.TYPE,
      FileSystemCreateWritableOptions: base_config_1.TYPE,
      FileSystemGetDirectoryOptions: base_config_1.TYPE,
      FileSystemGetFileOptions: base_config_1.TYPE,
      FileSystemReadWriteOptions: base_config_1.TYPE,
      FileSystemRemoveOptions: base_config_1.TYPE,
      FontFaceDescriptors: base_config_1.TYPE,
      FontFaceSetLoadEventInit: base_config_1.TYPE,
      GetNotificationOptions: base_config_1.TYPE,
      HkdfParams: base_config_1.TYPE,
      HmacImportParams: base_config_1.TYPE,
      HmacKeyGenParams: base_config_1.TYPE,
      IDBDatabaseInfo: base_config_1.TYPE,
      IDBIndexParameters: base_config_1.TYPE,
      IDBObjectStoreParameters: base_config_1.TYPE,
      IDBTransactionOptions: base_config_1.TYPE,
      IDBVersionChangeEventInit: base_config_1.TYPE,
      ImageBitmapOptions: base_config_1.TYPE,
      ImageBitmapRenderingContextSettings: base_config_1.TYPE,
      ImageDataSettings: base_config_1.TYPE,
      ImageEncodeOptions: base_config_1.TYPE,
      ImportMeta: base_config_1.TYPE,
      JsonWebKey: base_config_1.TYPE,
      KeyAlgorithm: base_config_1.TYPE,
      LockInfo: base_config_1.TYPE,
      LockManagerSnapshot: base_config_1.TYPE,
      LockOptions: base_config_1.TYPE,
      MediaCapabilitiesDecodingInfo: base_config_1.TYPE,
      MediaCapabilitiesEncodingInfo: base_config_1.TYPE,
      MediaCapabilitiesInfo: base_config_1.TYPE,
      MediaConfiguration: base_config_1.TYPE,
      MediaDecodingConfiguration: base_config_1.TYPE,
      MediaEncodingConfiguration: base_config_1.TYPE,
      MessageEventInit: base_config_1.TYPE,
      MultiCacheQueryOptions: base_config_1.TYPE,
      NavigationPreloadState: base_config_1.TYPE,
      NotificationAction: base_config_1.TYPE,
      NotificationEventInit: base_config_1.TYPE,
      NotificationOptions: base_config_1.TYPE,
      Pbkdf2Params: base_config_1.TYPE,
      PerformanceMarkOptions: base_config_1.TYPE,
      PerformanceMeasureOptions: base_config_1.TYPE,
      PerformanceObserverInit: base_config_1.TYPE,
      PermissionDescriptor: base_config_1.TYPE,
      PlaneLayout: base_config_1.TYPE,
      ProgressEventInit: base_config_1.TYPE,
      PromiseRejectionEventInit: base_config_1.TYPE,
      PushEventInit: base_config_1.TYPE,
      PushSubscriptionJSON: base_config_1.TYPE,
      PushSubscriptionOptionsInit: base_config_1.TYPE,
      QueuingStrategy: base_config_1.TYPE,
      QueuingStrategyInit: base_config_1.TYPE,
      RTCEncodedAudioFrameMetadata: base_config_1.TYPE,
      RTCEncodedVideoFrameMetadata: base_config_1.TYPE,
      ReadableStreamGetReaderOptions: base_config_1.TYPE,
      ReadableStreamReadDoneResult: base_config_1.TYPE,
      ReadableStreamReadValueResult: base_config_1.TYPE,
      ReadableWritablePair: base_config_1.TYPE,
      RegistrationOptions: base_config_1.TYPE,
      ReportingObserverOptions: base_config_1.TYPE,
      RequestInit: base_config_1.TYPE,
      ResponseInit: base_config_1.TYPE,
      RsaHashedImportParams: base_config_1.TYPE,
      RsaHashedKeyGenParams: base_config_1.TYPE,
      RsaKeyGenParams: base_config_1.TYPE,
      RsaOaepParams: base_config_1.TYPE,
      RsaOtherPrimesInfo: base_config_1.TYPE,
      RsaPssParams: base_config_1.TYPE,
      SecurityPolicyViolationEventInit: base_config_1.TYPE,
      StorageEstimate: base_config_1.TYPE,
      StreamPipeOptions: base_config_1.TYPE,
      StructuredSerializeOptions: base_config_1.TYPE,
      TextDecodeOptions: base_config_1.TYPE,
      TextDecoderOptions: base_config_1.TYPE,
      TextEncoderEncodeIntoResult: base_config_1.TYPE,
      Transformer: base_config_1.TYPE,
      UnderlyingByteSource: base_config_1.TYPE,
      UnderlyingDefaultSource: base_config_1.TYPE,
      UnderlyingSink: base_config_1.TYPE,
      UnderlyingSource: base_config_1.TYPE,
      VideoColorSpaceInit: base_config_1.TYPE,
      VideoConfiguration: base_config_1.TYPE,
      VideoDecoderConfig: base_config_1.TYPE,
      VideoDecoderInit: base_config_1.TYPE,
      VideoDecoderSupport: base_config_1.TYPE,
      VideoEncoderConfig: base_config_1.TYPE,
      VideoEncoderEncodeOptions: base_config_1.TYPE,
      VideoEncoderInit: base_config_1.TYPE,
      VideoEncoderSupport: base_config_1.TYPE,
      VideoFrameBufferInit: base_config_1.TYPE,
      VideoFrameCopyToOptions: base_config_1.TYPE,
      VideoFrameInit: base_config_1.TYPE,
      WebGLContextAttributes: base_config_1.TYPE,
      WebGLContextEventInit: base_config_1.TYPE,
      WebTransportCloseInfo: base_config_1.TYPE,
      WebTransportErrorOptions: base_config_1.TYPE,
      WebTransportHash: base_config_1.TYPE,
      WebTransportOptions: base_config_1.TYPE,
      WebTransportSendStreamOptions: base_config_1.TYPE,
      WorkerOptions: base_config_1.TYPE,
      WriteParams: base_config_1.TYPE,
      ANGLE_instanced_arrays: base_config_1.TYPE,
      AbortController: base_config_1.TYPE_VALUE,
      AbortSignalEventMap: base_config_1.TYPE,
      AbortSignal: base_config_1.TYPE_VALUE,
      AbstractWorkerEventMap: base_config_1.TYPE,
      AbstractWorker: base_config_1.TYPE,
      AnimationFrameProvider: base_config_1.TYPE,
      Blob: base_config_1.TYPE_VALUE,
      Body: base_config_1.TYPE,
      BroadcastChannelEventMap: base_config_1.TYPE,
      BroadcastChannel: base_config_1.TYPE_VALUE,
      ByteLengthQueuingStrategy: base_config_1.TYPE_VALUE,
      CSSImageValue: base_config_1.TYPE_VALUE,
      CSSKeywordValue: base_config_1.TYPE_VALUE,
      CSSMathClamp: base_config_1.TYPE_VALUE,
      CSSMathInvert: base_config_1.TYPE_VALUE,
      CSSMathMax: base_config_1.TYPE_VALUE,
      CSSMathMin: base_config_1.TYPE_VALUE,
      CSSMathNegate: base_config_1.TYPE_VALUE,
      CSSMathProduct: base_config_1.TYPE_VALUE,
      CSSMathSum: base_config_1.TYPE_VALUE,
      CSSMathValue: base_config_1.TYPE_VALUE,
      CSSMatrixComponent: base_config_1.TYPE_VALUE,
      CSSNumericArray: base_config_1.TYPE_VALUE,
      CSSNumericValue: base_config_1.TYPE_VALUE,
      CSSPerspective: base_config_1.TYPE_VALUE,
      CSSRotate: base_config_1.TYPE_VALUE,
      CSSScale: base_config_1.TYPE_VALUE,
      CSSSkew: base_config_1.TYPE_VALUE,
      CSSSkewX: base_config_1.TYPE_VALUE,
      CSSSkewY: base_config_1.TYPE_VALUE,
      CSSStyleValue: base_config_1.TYPE_VALUE,
      CSSTransformComponent: base_config_1.TYPE_VALUE,
      CSSTransformValue: base_config_1.TYPE_VALUE,
      CSSTranslate: base_config_1.TYPE_VALUE,
      CSSUnitValue: base_config_1.TYPE_VALUE,
      CSSUnparsedValue: base_config_1.TYPE_VALUE,
      CSSVariableReferenceValue: base_config_1.TYPE_VALUE,
      Cache: base_config_1.TYPE_VALUE,
      CacheStorage: base_config_1.TYPE_VALUE,
      CanvasCompositing: base_config_1.TYPE,
      CanvasDrawImage: base_config_1.TYPE,
      CanvasDrawPath: base_config_1.TYPE,
      CanvasFillStrokeStyles: base_config_1.TYPE,
      CanvasFilters: base_config_1.TYPE,
      CanvasGradient: base_config_1.TYPE_VALUE,
      CanvasImageData: base_config_1.TYPE,
      CanvasImageSmoothing: base_config_1.TYPE,
      CanvasPath: base_config_1.TYPE,
      CanvasPathDrawingStyles: base_config_1.TYPE,
      CanvasPattern: base_config_1.TYPE_VALUE,
      CanvasRect: base_config_1.TYPE,
      CanvasShadowStyles: base_config_1.TYPE,
      CanvasState: base_config_1.TYPE,
      CanvasText: base_config_1.TYPE,
      CanvasTextDrawingStyles: base_config_1.TYPE,
      CanvasTransform: base_config_1.TYPE,
      Client: base_config_1.TYPE_VALUE,
      Clients: base_config_1.TYPE_VALUE,
      CloseEvent: base_config_1.TYPE_VALUE,
      CompressionStream: base_config_1.TYPE_VALUE,
      CountQueuingStrategy: base_config_1.TYPE_VALUE,
      Crypto: base_config_1.TYPE_VALUE,
      CryptoKey: base_config_1.TYPE_VALUE,
      CustomEvent: base_config_1.TYPE_VALUE,
      DOMException: base_config_1.TYPE_VALUE,
      DOMMatrix: base_config_1.TYPE_VALUE,
      DOMMatrixReadOnly: base_config_1.TYPE_VALUE,
      DOMPoint: base_config_1.TYPE_VALUE,
      DOMPointReadOnly: base_config_1.TYPE_VALUE,
      DOMQuad: base_config_1.TYPE_VALUE,
      DOMRect: base_config_1.TYPE_VALUE,
      DOMRectReadOnly: base_config_1.TYPE_VALUE,
      DOMStringList: base_config_1.TYPE_VALUE,
      DecompressionStream: base_config_1.TYPE_VALUE,
      DedicatedWorkerGlobalScopeEventMap: base_config_1.TYPE,
      DedicatedWorkerGlobalScope: base_config_1.TYPE_VALUE,
      EXT_blend_minmax: base_config_1.TYPE,
      EXT_color_buffer_float: base_config_1.TYPE,
      EXT_color_buffer_half_float: base_config_1.TYPE,
      EXT_float_blend: base_config_1.TYPE,
      EXT_frag_depth: base_config_1.TYPE,
      EXT_sRGB: base_config_1.TYPE,
      EXT_shader_texture_lod: base_config_1.TYPE,
      EXT_texture_compression_bptc: base_config_1.TYPE,
      EXT_texture_compression_rgtc: base_config_1.TYPE,
      EXT_texture_filter_anisotropic: base_config_1.TYPE,
      EXT_texture_norm16: base_config_1.TYPE,
      EncodedVideoChunk: base_config_1.TYPE_VALUE,
      ErrorEvent: base_config_1.TYPE_VALUE,
      Event: base_config_1.TYPE_VALUE,
      EventListener: base_config_1.TYPE,
      EventListenerObject: base_config_1.TYPE,
      EventSourceEventMap: base_config_1.TYPE,
      EventSource: base_config_1.TYPE_VALUE,
      EventTarget: base_config_1.TYPE_VALUE,
      ExtendableEvent: base_config_1.TYPE_VALUE,
      ExtendableMessageEvent: base_config_1.TYPE_VALUE,
      FetchEvent: base_config_1.TYPE_VALUE,
      File: base_config_1.TYPE_VALUE,
      FileList: base_config_1.TYPE_VALUE,
      FileReaderEventMap: base_config_1.TYPE,
      FileReader: base_config_1.TYPE_VALUE,
      FileReaderSync: base_config_1.TYPE_VALUE,
      FileSystemDirectoryHandle: base_config_1.TYPE_VALUE,
      FileSystemFileHandle: base_config_1.TYPE_VALUE,
      FileSystemHandle: base_config_1.TYPE_VALUE,
      FileSystemSyncAccessHandle: base_config_1.TYPE_VALUE,
      FileSystemWritableFileStream: base_config_1.TYPE_VALUE,
      FontFace: base_config_1.TYPE_VALUE,
      FontFaceSetEventMap: base_config_1.TYPE,
      FontFaceSet: base_config_1.TYPE_VALUE,
      FontFaceSetLoadEvent: base_config_1.TYPE_VALUE,
      FontFaceSource: base_config_1.TYPE,
      FormData: base_config_1.TYPE_VALUE,
      GenericTransformStream: base_config_1.TYPE,
      Headers: base_config_1.TYPE_VALUE,
      IDBCursor: base_config_1.TYPE_VALUE,
      IDBCursorWithValue: base_config_1.TYPE_VALUE,
      IDBDatabaseEventMap: base_config_1.TYPE,
      IDBDatabase: base_config_1.TYPE_VALUE,
      IDBFactory: base_config_1.TYPE_VALUE,
      IDBIndex: base_config_1.TYPE_VALUE,
      IDBKeyRange: base_config_1.TYPE_VALUE,
      IDBObjectStore: base_config_1.TYPE_VALUE,
      IDBOpenDBRequestEventMap: base_config_1.TYPE,
      IDBOpenDBRequest: base_config_1.TYPE_VALUE,
      IDBRequestEventMap: base_config_1.TYPE,
      IDBRequest: base_config_1.TYPE_VALUE,
      IDBTransactionEventMap: base_config_1.TYPE,
      IDBTransaction: base_config_1.TYPE_VALUE,
      IDBVersionChangeEvent: base_config_1.TYPE_VALUE,
      ImageBitmap: base_config_1.TYPE_VALUE,
      ImageBitmapRenderingContext: base_config_1.TYPE_VALUE,
      ImageData: base_config_1.TYPE_VALUE,
      KHR_parallel_shader_compile: base_config_1.TYPE,
      Lock: base_config_1.TYPE_VALUE,
      LockManager: base_config_1.TYPE_VALUE,
      MediaCapabilities: base_config_1.TYPE_VALUE,
      MessageChannel: base_config_1.TYPE_VALUE,
      MessageEvent: base_config_1.TYPE_VALUE,
      MessagePortEventMap: base_config_1.TYPE,
      MessagePort: base_config_1.TYPE_VALUE,
      NavigationPreloadManager: base_config_1.TYPE_VALUE,
      NavigatorBadge: base_config_1.TYPE,
      NavigatorConcurrentHardware: base_config_1.TYPE,
      NavigatorID: base_config_1.TYPE,
      NavigatorLanguage: base_config_1.TYPE,
      NavigatorLocks: base_config_1.TYPE,
      NavigatorOnLine: base_config_1.TYPE,
      NavigatorStorage: base_config_1.TYPE,
      NotificationEventMap: base_config_1.TYPE,
      Notification: base_config_1.TYPE_VALUE,
      NotificationEvent: base_config_1.TYPE_VALUE,
      OES_draw_buffers_indexed: base_config_1.TYPE,
      OES_element_index_uint: base_config_1.TYPE,
      OES_fbo_render_mipmap: base_config_1.TYPE,
      OES_standard_derivatives: base_config_1.TYPE,
      OES_texture_float: base_config_1.TYPE,
      OES_texture_float_linear: base_config_1.TYPE,
      OES_texture_half_float: base_config_1.TYPE,
      OES_texture_half_float_linear: base_config_1.TYPE,
      OES_vertex_array_object: base_config_1.TYPE,
      OVR_multiview2: base_config_1.TYPE,
      OffscreenCanvasEventMap: base_config_1.TYPE,
      OffscreenCanvas: base_config_1.TYPE_VALUE,
      OffscreenCanvasRenderingContext2D: base_config_1.TYPE_VALUE,
      Path2D: base_config_1.TYPE_VALUE,
      PerformanceEventMap: base_config_1.TYPE,
      Performance: base_config_1.TYPE_VALUE,
      PerformanceEntry: base_config_1.TYPE_VALUE,
      PerformanceMark: base_config_1.TYPE_VALUE,
      PerformanceMeasure: base_config_1.TYPE_VALUE,
      PerformanceObserver: base_config_1.TYPE_VALUE,
      PerformanceObserverEntryList: base_config_1.TYPE_VALUE,
      PerformanceResourceTiming: base_config_1.TYPE_VALUE,
      PerformanceServerTiming: base_config_1.TYPE_VALUE,
      PermissionStatusEventMap: base_config_1.TYPE,
      PermissionStatus: base_config_1.TYPE_VALUE,
      Permissions: base_config_1.TYPE_VALUE,
      ProgressEvent: base_config_1.TYPE_VALUE,
      PromiseRejectionEvent: base_config_1.TYPE_VALUE,
      PushEvent: base_config_1.TYPE_VALUE,
      PushManager: base_config_1.TYPE_VALUE,
      PushMessageData: base_config_1.TYPE_VALUE,
      PushSubscription: base_config_1.TYPE_VALUE,
      PushSubscriptionOptions: base_config_1.TYPE_VALUE,
      RTCEncodedAudioFrame: base_config_1.TYPE_VALUE,
      RTCEncodedVideoFrame: base_config_1.TYPE_VALUE,
      ReadableByteStreamController: base_config_1.TYPE_VALUE,
      ReadableStream: base_config_1.TYPE_VALUE,
      ReadableStreamBYOBReader: base_config_1.TYPE_VALUE,
      ReadableStreamBYOBRequest: base_config_1.TYPE_VALUE,
      ReadableStreamDefaultController: base_config_1.TYPE_VALUE,
      ReadableStreamDefaultReader: base_config_1.TYPE_VALUE,
      ReadableStreamGenericReader: base_config_1.TYPE,
      Report: base_config_1.TYPE_VALUE,
      ReportBody: base_config_1.TYPE_VALUE,
      ReportingObserver: base_config_1.TYPE_VALUE,
      Request: base_config_1.TYPE_VALUE,
      Response: base_config_1.TYPE_VALUE,
      SecurityPolicyViolationEvent: base_config_1.TYPE_VALUE,
      ServiceWorkerEventMap: base_config_1.TYPE,
      ServiceWorker: base_config_1.TYPE_VALUE,
      ServiceWorkerContainerEventMap: base_config_1.TYPE,
      ServiceWorkerContainer: base_config_1.TYPE_VALUE,
      ServiceWorkerGlobalScopeEventMap: base_config_1.TYPE,
      ServiceWorkerGlobalScope: base_config_1.TYPE_VALUE,
      ServiceWorkerRegistrationEventMap: base_config_1.TYPE,
      ServiceWorkerRegistration: base_config_1.TYPE_VALUE,
      SharedWorkerGlobalScopeEventMap: base_config_1.TYPE,
      SharedWorkerGlobalScope: base_config_1.TYPE_VALUE,
      StorageManager: base_config_1.TYPE_VALUE,
      StylePropertyMapReadOnly: base_config_1.TYPE_VALUE,
      SubtleCrypto: base_config_1.TYPE_VALUE,
      TextDecoder: base_config_1.TYPE_VALUE,
      TextDecoderCommon: base_config_1.TYPE,
      TextDecoderStream: base_config_1.TYPE_VALUE,
      TextEncoder: base_config_1.TYPE_VALUE,
      TextEncoderCommon: base_config_1.TYPE,
      TextEncoderStream: base_config_1.TYPE_VALUE,
      TextMetrics: base_config_1.TYPE_VALUE,
      TransformStream: base_config_1.TYPE_VALUE,
      TransformStreamDefaultController: base_config_1.TYPE_VALUE,
      URL: base_config_1.TYPE_VALUE,
      URLSearchParams: base_config_1.TYPE_VALUE,
      VideoColorSpace: base_config_1.TYPE_VALUE,
      VideoDecoderEventMap: base_config_1.TYPE,
      VideoDecoder: base_config_1.TYPE_VALUE,
      VideoEncoderEventMap: base_config_1.TYPE,
      VideoEncoder: base_config_1.TYPE_VALUE,
      VideoFrame: base_config_1.TYPE_VALUE,
      WEBGL_color_buffer_float: base_config_1.TYPE,
      WEBGL_compressed_texture_astc: base_config_1.TYPE,
      WEBGL_compressed_texture_etc: base_config_1.TYPE,
      WEBGL_compressed_texture_etc1: base_config_1.TYPE,
      WEBGL_compressed_texture_pvrtc: base_config_1.TYPE,
      WEBGL_compressed_texture_s3tc: base_config_1.TYPE,
      WEBGL_compressed_texture_s3tc_srgb: base_config_1.TYPE,
      WEBGL_debug_renderer_info: base_config_1.TYPE,
      WEBGL_debug_shaders: base_config_1.TYPE,
      WEBGL_depth_texture: base_config_1.TYPE,
      WEBGL_draw_buffers: base_config_1.TYPE,
      WEBGL_lose_context: base_config_1.TYPE,
      WEBGL_multi_draw: base_config_1.TYPE,
      WebGL2RenderingContext: base_config_1.TYPE_VALUE,
      WebGL2RenderingContextBase: base_config_1.TYPE,
      WebGL2RenderingContextOverloads: base_config_1.TYPE,
      WebGLActiveInfo: base_config_1.TYPE_VALUE,
      WebGLBuffer: base_config_1.TYPE_VALUE,
      WebGLContextEvent: base_config_1.TYPE_VALUE,
      WebGLFramebuffer: base_config_1.TYPE_VALUE,
      WebGLProgram: base_config_1.TYPE_VALUE,
      WebGLQuery: base_config_1.TYPE_VALUE,
      WebGLRenderbuffer: base_config_1.TYPE_VALUE,
      WebGLRenderingContext: base_config_1.TYPE_VALUE,
      WebGLRenderingContextBase: base_config_1.TYPE,
      WebGLRenderingContextOverloads: base_config_1.TYPE,
      WebGLSampler: base_config_1.TYPE_VALUE,
      WebGLShader: base_config_1.TYPE_VALUE,
      WebGLShaderPrecisionFormat: base_config_1.TYPE_VALUE,
      WebGLSync: base_config_1.TYPE_VALUE,
      WebGLTexture: base_config_1.TYPE_VALUE,
      WebGLTransformFeedback: base_config_1.TYPE_VALUE,
      WebGLUniformLocation: base_config_1.TYPE_VALUE,
      WebGLVertexArrayObject: base_config_1.TYPE_VALUE,
      WebGLVertexArrayObjectOES: base_config_1.TYPE,
      WebSocketEventMap: base_config_1.TYPE,
      WebSocket: base_config_1.TYPE_VALUE,
      WebTransport: base_config_1.TYPE_VALUE,
      WebTransportBidirectionalStream: base_config_1.TYPE_VALUE,
      WebTransportDatagramDuplexStream: base_config_1.TYPE_VALUE,
      WebTransportError: base_config_1.TYPE_VALUE,
      WindowClient: base_config_1.TYPE_VALUE,
      WindowOrWorkerGlobalScope: base_config_1.TYPE,
      WorkerEventMap: base_config_1.TYPE,
      Worker: base_config_1.TYPE_VALUE,
      WorkerGlobalScopeEventMap: base_config_1.TYPE,
      WorkerGlobalScope: base_config_1.TYPE_VALUE,
      WorkerLocation: base_config_1.TYPE_VALUE,
      WorkerNavigator: base_config_1.TYPE_VALUE,
      WritableStream: base_config_1.TYPE_VALUE,
      WritableStreamDefaultController: base_config_1.TYPE_VALUE,
      WritableStreamDefaultWriter: base_config_1.TYPE_VALUE,
      XMLHttpRequestEventMap: base_config_1.TYPE,
      XMLHttpRequest: base_config_1.TYPE_VALUE,
      XMLHttpRequestEventTargetEventMap: base_config_1.TYPE,
      XMLHttpRequestEventTarget: base_config_1.TYPE_VALUE,
      XMLHttpRequestUpload: base_config_1.TYPE_VALUE,
      Console: base_config_1.TYPE,
      WebAssembly: base_config_1.TYPE_VALUE,
      EncodedVideoChunkOutputCallback: base_config_1.TYPE,
      FrameRequestCallback: base_config_1.TYPE,
      LockGrantedCallback: base_config_1.TYPE,
      OnErrorEventHandlerNonNull: base_config_1.TYPE,
      PerformanceObserverCallback: base_config_1.TYPE,
      QueuingStrategySize: base_config_1.TYPE,
      ReportingObserverCallback: base_config_1.TYPE,
      TransformerFlushCallback: base_config_1.TYPE,
      TransformerStartCallback: base_config_1.TYPE,
      TransformerTransformCallback: base_config_1.TYPE,
      UnderlyingSinkAbortCallback: base_config_1.TYPE,
      UnderlyingSinkCloseCallback: base_config_1.TYPE,
      UnderlyingSinkStartCallback: base_config_1.TYPE,
      UnderlyingSinkWriteCallback: base_config_1.TYPE,
      UnderlyingSourceCancelCallback: base_config_1.TYPE,
      UnderlyingSourcePullCallback: base_config_1.TYPE,
      UnderlyingSourceStartCallback: base_config_1.TYPE,
      VideoFrameOutputCallback: base_config_1.TYPE,
      VoidFunction: base_config_1.TYPE,
      WebCodecsErrorCallback: base_config_1.TYPE,
      AlgorithmIdentifier: base_config_1.TYPE,
      AllowSharedBufferSource: base_config_1.TYPE,
      BigInteger: base_config_1.TYPE,
      BinaryData: base_config_1.TYPE,
      BlobPart: base_config_1.TYPE,
      BodyInit: base_config_1.TYPE,
      BufferSource: base_config_1.TYPE,
      CSSKeywordish: base_config_1.TYPE,
      CSSNumberish: base_config_1.TYPE,
      CSSPerspectiveValue: base_config_1.TYPE,
      CSSUnparsedSegment: base_config_1.TYPE,
      CanvasImageSource: base_config_1.TYPE,
      DOMHighResTimeStamp: base_config_1.TYPE,
      EpochTimeStamp: base_config_1.TYPE,
      EventListenerOrEventListenerObject: base_config_1.TYPE,
      FileSystemWriteChunkType: base_config_1.TYPE,
      Float32List: base_config_1.TYPE,
      FormDataEntryValue: base_config_1.TYPE,
      GLbitfield: base_config_1.TYPE,
      GLboolean: base_config_1.TYPE,
      GLclampf: base_config_1.TYPE,
      GLenum: base_config_1.TYPE,
      GLfloat: base_config_1.TYPE,
      GLint: base_config_1.TYPE,
      GLint64: base_config_1.TYPE,
      GLintptr: base_config_1.TYPE,
      GLsizei: base_config_1.TYPE,
      GLsizeiptr: base_config_1.TYPE,
      GLuint: base_config_1.TYPE,
      GLuint64: base_config_1.TYPE,
      HashAlgorithmIdentifier: base_config_1.TYPE,
      HeadersInit: base_config_1.TYPE,
      IDBValidKey: base_config_1.TYPE,
      ImageBitmapSource: base_config_1.TYPE,
      Int32List: base_config_1.TYPE,
      MessageEventSource: base_config_1.TYPE,
      NamedCurve: base_config_1.TYPE,
      OffscreenRenderingContext: base_config_1.TYPE,
      OnErrorEventHandler: base_config_1.TYPE,
      PerformanceEntryList: base_config_1.TYPE,
      PushMessageDataInit: base_config_1.TYPE,
      ReadableStreamController: base_config_1.TYPE,
      ReadableStreamReadResult: base_config_1.TYPE,
      ReadableStreamReader: base_config_1.TYPE,
      ReportList: base_config_1.TYPE,
      RequestInfo: base_config_1.TYPE,
      TexImageSource: base_config_1.TYPE,
      TimerHandler: base_config_1.TYPE,
      Transferable: base_config_1.TYPE,
      Uint32List: base_config_1.TYPE,
      VibratePattern: base_config_1.TYPE,
      XMLHttpRequestBodyInit: base_config_1.TYPE,
      AlphaOption: base_config_1.TYPE,
      AvcBitstreamFormat: base_config_1.TYPE,
      BinaryType: base_config_1.TYPE,
      CSSMathOperator: base_config_1.TYPE,
      CSSNumericBaseType: base_config_1.TYPE,
      CanvasDirection: base_config_1.TYPE,
      CanvasFillRule: base_config_1.TYPE,
      CanvasFontKerning: base_config_1.TYPE,
      CanvasFontStretch: base_config_1.TYPE,
      CanvasFontVariantCaps: base_config_1.TYPE,
      CanvasLineCap: base_config_1.TYPE,
      CanvasLineJoin: base_config_1.TYPE,
      CanvasTextAlign: base_config_1.TYPE,
      CanvasTextBaseline: base_config_1.TYPE,
      CanvasTextRendering: base_config_1.TYPE,
      ClientTypes: base_config_1.TYPE,
      CodecState: base_config_1.TYPE,
      ColorGamut: base_config_1.TYPE,
      ColorSpaceConversion: base_config_1.TYPE,
      CompressionFormat: base_config_1.TYPE,
      DocumentVisibilityState: base_config_1.TYPE,
      EncodedVideoChunkType: base_config_1.TYPE,
      EndingType: base_config_1.TYPE,
      FileSystemHandleKind: base_config_1.TYPE,
      FontDisplay: base_config_1.TYPE,
      FontFaceLoadStatus: base_config_1.TYPE,
      FontFaceSetLoadStatus: base_config_1.TYPE,
      FrameType: base_config_1.TYPE,
      GlobalCompositeOperation: base_config_1.TYPE,
      HardwareAcceleration: base_config_1.TYPE,
      HdrMetadataType: base_config_1.TYPE,
      IDBCursorDirection: base_config_1.TYPE,
      IDBRequestReadyState: base_config_1.TYPE,
      IDBTransactionDurability: base_config_1.TYPE,
      IDBTransactionMode: base_config_1.TYPE,
      ImageOrientation: base_config_1.TYPE,
      ImageSmoothingQuality: base_config_1.TYPE,
      KeyFormat: base_config_1.TYPE,
      KeyType: base_config_1.TYPE,
      KeyUsage: base_config_1.TYPE,
      LatencyMode: base_config_1.TYPE,
      LockMode: base_config_1.TYPE,
      MediaDecodingType: base_config_1.TYPE,
      MediaEncodingType: base_config_1.TYPE,
      NotificationDirection: base_config_1.TYPE,
      NotificationPermission: base_config_1.TYPE,
      OffscreenRenderingContextId: base_config_1.TYPE,
      PermissionName: base_config_1.TYPE,
      PermissionState: base_config_1.TYPE,
      PredefinedColorSpace: base_config_1.TYPE,
      PremultiplyAlpha: base_config_1.TYPE,
      PushEncryptionKeyName: base_config_1.TYPE,
      RTCEncodedVideoFrameType: base_config_1.TYPE,
      ReadableStreamReaderMode: base_config_1.TYPE,
      ReadableStreamType: base_config_1.TYPE,
      ReferrerPolicy: base_config_1.TYPE,
      RequestCache: base_config_1.TYPE,
      RequestCredentials: base_config_1.TYPE,
      RequestDestination: base_config_1.TYPE,
      RequestMode: base_config_1.TYPE,
      RequestRedirect: base_config_1.TYPE,
      ResizeQuality: base_config_1.TYPE,
      ResponseType: base_config_1.TYPE,
      SecurityPolicyViolationEventDisposition: base_config_1.TYPE,
      ServiceWorkerState: base_config_1.TYPE,
      ServiceWorkerUpdateViaCache: base_config_1.TYPE,
      TransferFunction: base_config_1.TYPE,
      VideoColorPrimaries: base_config_1.TYPE,
      VideoEncoderBitrateMode: base_config_1.TYPE,
      VideoMatrixCoefficients: base_config_1.TYPE,
      VideoPixelFormat: base_config_1.TYPE,
      VideoTransferCharacteristics: base_config_1.TYPE,
      WebGLPowerPreference: base_config_1.TYPE,
      WebTransportCongestionControl: base_config_1.TYPE,
      WebTransportErrorSource: base_config_1.TYPE,
      WorkerType: base_config_1.TYPE,
      WriteCommandType: base_config_1.TYPE,
      XMLHttpRequestResponseType: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.iterable.js
var require_webworker_iterable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.iterable.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.webworker_iterable = void 0;
    var base_config_1 = require_base_config();
    exports.webworker_iterable = {
      CSSNumericArray: base_config_1.TYPE,
      CSSTransformValue: base_config_1.TYPE,
      CSSUnparsedValue: base_config_1.TYPE,
      Cache: base_config_1.TYPE,
      CanvasPath: base_config_1.TYPE,
      CanvasPathDrawingStyles: base_config_1.TYPE,
      DOMStringList: base_config_1.TYPE,
      FileList: base_config_1.TYPE,
      FontFaceSet: base_config_1.TYPE,
      FormData: base_config_1.TYPE,
      Headers: base_config_1.TYPE,
      IDBDatabase: base_config_1.TYPE,
      IDBObjectStore: base_config_1.TYPE,
      MessageEvent: base_config_1.TYPE,
      StylePropertyMapReadOnly: base_config_1.TYPE,
      SubtleCrypto: base_config_1.TYPE,
      URLSearchParams: base_config_1.TYPE,
      WEBGL_draw_buffers: base_config_1.TYPE,
      WEBGL_multi_draw: base_config_1.TYPE,
      WebGL2RenderingContextBase: base_config_1.TYPE,
      WebGL2RenderingContextOverloads: base_config_1.TYPE,
      WebGLRenderingContextBase: base_config_1.TYPE,
      WebGLRenderingContextOverloads: base_config_1.TYPE
    };
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/lib/index.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lib = void 0;
    var decorators_1 = require_decorators();
    var decorators_legacy_1 = require_decorators_legacy();
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es5_1 = require_es5();
    var es6_1 = require_es6();
    var es7_1 = require_es7();
    var es2015_1 = require_es2015();
    var es2015_collection_1 = require_es2015_collection();
    var es2015_core_1 = require_es2015_core();
    var es2015_generator_1 = require_es2015_generator();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_promise_1 = require_es2015_promise();
    var es2015_proxy_1 = require_es2015_proxy();
    var es2015_reflect_1 = require_es2015_reflect();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    var es2016_1 = require_es2016();
    var es2016_array_include_1 = require_es2016_array_include();
    var es2016_full_1 = require_es2016_full();
    var es2017_1 = require_es2017();
    var es2017_date_1 = require_es2017_date();
    var es2017_full_1 = require_es2017_full();
    var es2017_intl_1 = require_es2017_intl();
    var es2017_object_1 = require_es2017_object();
    var es2017_sharedmemory_1 = require_es2017_sharedmemory();
    var es2017_string_1 = require_es2017_string();
    var es2017_typedarrays_1 = require_es2017_typedarrays();
    var es2018_1 = require_es2018();
    var es2018_asyncgenerator_1 = require_es2018_asyncgenerator();
    var es2018_asynciterable_1 = require_es2018_asynciterable();
    var es2018_full_1 = require_es2018_full();
    var es2018_intl_1 = require_es2018_intl();
    var es2018_promise_1 = require_es2018_promise();
    var es2018_regexp_1 = require_es2018_regexp();
    var es2019_1 = require_es2019();
    var es2019_array_1 = require_es2019_array();
    var es2019_full_1 = require_es2019_full();
    var es2019_intl_1 = require_es2019_intl();
    var es2019_object_1 = require_es2019_object();
    var es2019_string_1 = require_es2019_string();
    var es2019_symbol_1 = require_es2019_symbol();
    var es2020_1 = require_es2020();
    var es2020_bigint_1 = require_es2020_bigint();
    var es2020_date_1 = require_es2020_date();
    var es2020_full_1 = require_es2020_full();
    var es2020_intl_1 = require_es2020_intl();
    var es2020_number_1 = require_es2020_number();
    var es2020_promise_1 = require_es2020_promise();
    var es2020_sharedmemory_1 = require_es2020_sharedmemory();
    var es2020_string_1 = require_es2020_string();
    var es2020_symbol_wellknown_1 = require_es2020_symbol_wellknown();
    var es2021_1 = require_es2021();
    var es2021_full_1 = require_es2021_full();
    var es2021_intl_1 = require_es2021_intl();
    var es2021_promise_1 = require_es2021_promise();
    var es2021_string_1 = require_es2021_string();
    var es2021_weakref_1 = require_es2021_weakref();
    var es2022_1 = require_es2022();
    var es2022_array_1 = require_es2022_array();
    var es2022_error_1 = require_es2022_error();
    var es2022_full_1 = require_es2022_full();
    var es2022_intl_1 = require_es2022_intl();
    var es2022_object_1 = require_es2022_object();
    var es2022_regexp_1 = require_es2022_regexp();
    var es2022_sharedmemory_1 = require_es2022_sharedmemory();
    var es2022_string_1 = require_es2022_string();
    var es2023_1 = require_es2023();
    var es2023_array_1 = require_es2023_array();
    var es2023_collection_1 = require_es2023_collection();
    var es2023_full_1 = require_es2023_full();
    var esnext_1 = require_esnext();
    var esnext_array_1 = require_esnext_array();
    var esnext_asynciterable_1 = require_esnext_asynciterable();
    var esnext_bigint_1 = require_esnext_bigint();
    var esnext_collection_1 = require_esnext_collection();
    var esnext_decorators_1 = require_esnext_decorators();
    var esnext_disposable_1 = require_esnext_disposable();
    var esnext_full_1 = require_esnext_full();
    var esnext_intl_1 = require_esnext_intl();
    var esnext_promise_1 = require_esnext_promise();
    var esnext_string_1 = require_esnext_string();
    var esnext_symbol_1 = require_esnext_symbol();
    var esnext_weakref_1 = require_esnext_weakref();
    var lib_1 = require_lib2();
    var scripthost_1 = require_scripthost();
    var webworker_1 = require_webworker();
    var webworker_importscripts_1 = require_webworker_importscripts();
    var webworker_iterable_1 = require_webworker_iterable();
    var lib = {
      es5: es5_1.es5,
      es6: es6_1.es6,
      es2015: es2015_1.es2015,
      es7: es7_1.es7,
      es2016: es2016_1.es2016,
      es2017: es2017_1.es2017,
      es2018: es2018_1.es2018,
      es2019: es2019_1.es2019,
      es2020: es2020_1.es2020,
      es2021: es2021_1.es2021,
      es2022: es2022_1.es2022,
      es2023: es2023_1.es2023,
      esnext: esnext_1.esnext,
      dom: dom_1.dom,
      "dom.iterable": dom_iterable_1.dom_iterable,
      webworker: webworker_1.webworker,
      "webworker.importscripts": webworker_importscripts_1.webworker_importscripts,
      "webworker.iterable": webworker_iterable_1.webworker_iterable,
      scripthost: scripthost_1.scripthost,
      "es2015.core": es2015_core_1.es2015_core,
      "es2015.collection": es2015_collection_1.es2015_collection,
      "es2015.generator": es2015_generator_1.es2015_generator,
      "es2015.iterable": es2015_iterable_1.es2015_iterable,
      "es2015.promise": es2015_promise_1.es2015_promise,
      "es2015.proxy": es2015_proxy_1.es2015_proxy,
      "es2015.reflect": es2015_reflect_1.es2015_reflect,
      "es2015.symbol": es2015_symbol_1.es2015_symbol,
      "es2015.symbol.wellknown": es2015_symbol_wellknown_1.es2015_symbol_wellknown,
      "es2016.array.include": es2016_array_include_1.es2016_array_include,
      "es2017.date": es2017_date_1.es2017_date,
      "es2017.object": es2017_object_1.es2017_object,
      "es2017.sharedmemory": es2017_sharedmemory_1.es2017_sharedmemory,
      "es2017.string": es2017_string_1.es2017_string,
      "es2017.intl": es2017_intl_1.es2017_intl,
      "es2017.typedarrays": es2017_typedarrays_1.es2017_typedarrays,
      "es2018.asyncgenerator": es2018_asyncgenerator_1.es2018_asyncgenerator,
      "es2018.asynciterable": es2018_asynciterable_1.es2018_asynciterable,
      "es2018.intl": es2018_intl_1.es2018_intl,
      "es2018.promise": es2018_promise_1.es2018_promise,
      "es2018.regexp": es2018_regexp_1.es2018_regexp,
      "es2019.array": es2019_array_1.es2019_array,
      "es2019.object": es2019_object_1.es2019_object,
      "es2019.string": es2019_string_1.es2019_string,
      "es2019.symbol": es2019_symbol_1.es2019_symbol,
      "es2019.intl": es2019_intl_1.es2019_intl,
      "es2020.bigint": es2020_bigint_1.es2020_bigint,
      "es2020.date": es2020_date_1.es2020_date,
      "es2020.promise": es2020_promise_1.es2020_promise,
      "es2020.sharedmemory": es2020_sharedmemory_1.es2020_sharedmemory,
      "es2020.string": es2020_string_1.es2020_string,
      "es2020.symbol.wellknown": es2020_symbol_wellknown_1.es2020_symbol_wellknown,
      "es2020.intl": es2020_intl_1.es2020_intl,
      "es2020.number": es2020_number_1.es2020_number,
      "es2021.promise": es2021_promise_1.es2021_promise,
      "es2021.string": es2021_string_1.es2021_string,
      "es2021.weakref": es2021_weakref_1.es2021_weakref,
      "es2021.intl": es2021_intl_1.es2021_intl,
      "es2022.array": es2022_array_1.es2022_array,
      "es2022.error": es2022_error_1.es2022_error,
      "es2022.intl": es2022_intl_1.es2022_intl,
      "es2022.object": es2022_object_1.es2022_object,
      "es2022.sharedmemory": es2022_sharedmemory_1.es2022_sharedmemory,
      "es2022.string": es2022_string_1.es2022_string,
      "es2022.regexp": es2022_regexp_1.es2022_regexp,
      "es2023.array": es2023_array_1.es2023_array,
      "es2023.collection": es2023_collection_1.es2023_collection,
      "esnext.array": esnext_array_1.esnext_array,
      "esnext.collection": esnext_collection_1.esnext_collection,
      "esnext.symbol": esnext_symbol_1.esnext_symbol,
      "esnext.asynciterable": esnext_asynciterable_1.esnext_asynciterable,
      "esnext.intl": esnext_intl_1.esnext_intl,
      "esnext.disposable": esnext_disposable_1.esnext_disposable,
      "esnext.bigint": esnext_bigint_1.esnext_bigint,
      "esnext.string": esnext_string_1.esnext_string,
      "esnext.promise": esnext_promise_1.esnext_promise,
      "esnext.weakref": esnext_weakref_1.esnext_weakref,
      "esnext.decorators": esnext_decorators_1.esnext_decorators,
      decorators: decorators_1.decorators,
      "decorators.legacy": decorators_legacy_1.decorators_legacy,
      "es2016.full": es2016_full_1.es2016_full,
      "es2017.full": es2017_full_1.es2017_full,
      "es2018.full": es2018_full_1.es2018_full,
      "es2019.full": es2019_full_1.es2019_full,
      "es2020.full": es2020_full_1.es2020_full,
      "es2021.full": es2021_full_1.es2021_full,
      "es2022.full": es2022_full_1.es2022_full,
      "es2023.full": es2023_full_1.es2023_full,
      "esnext.full": esnext_full_1.esnext_full,
      lib: lib_1.lib
    };
    exports.lib = lib;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/Reference.js
var require_Reference = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/Reference.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _Reference_flag;
    var _Reference_referenceType;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReferenceTypeFlag = exports.ReferenceFlag = exports.Reference = void 0;
    var ID_1 = require_ID();
    var ReferenceFlag;
    (function(ReferenceFlag2) {
      ReferenceFlag2[ReferenceFlag2["Read"] = 1] = "Read";
      ReferenceFlag2[ReferenceFlag2["Write"] = 2] = "Write";
      ReferenceFlag2[ReferenceFlag2["ReadWrite"] = 3] = "ReadWrite";
    })(ReferenceFlag || (exports.ReferenceFlag = ReferenceFlag = {}));
    var generator = (0, ID_1.createIdGenerator)();
    var ReferenceTypeFlag;
    (function(ReferenceTypeFlag2) {
      ReferenceTypeFlag2[ReferenceTypeFlag2["Value"] = 1] = "Value";
      ReferenceTypeFlag2[ReferenceTypeFlag2["Type"] = 2] = "Type";
    })(ReferenceTypeFlag || (exports.ReferenceTypeFlag = ReferenceTypeFlag = {}));
    var Reference = class {
      /**
       * True if this reference can reference types
       */
      get isTypeReference() {
        return (__classPrivateFieldGet(this, _Reference_referenceType, "f") & ReferenceTypeFlag.Type) !== 0;
      }
      /**
       * True if this reference can reference values
       */
      get isValueReference() {
        return (__classPrivateFieldGet(this, _Reference_referenceType, "f") & ReferenceTypeFlag.Value) !== 0;
      }
      constructor(identifier, scope, flag, writeExpr, maybeImplicitGlobal, init, referenceType = ReferenceTypeFlag.Value) {
        this.$id = generator();
        _Reference_flag.set(this, void 0);
        _Reference_referenceType.set(this, void 0);
        this.identifier = identifier;
        this.from = scope;
        this.resolved = null;
        __classPrivateFieldSet(this, _Reference_flag, flag, "f");
        if (this.isWrite()) {
          this.writeExpr = writeExpr;
          this.init = init;
        }
        this.maybeImplicitGlobal = maybeImplicitGlobal;
        __classPrivateFieldSet(this, _Reference_referenceType, referenceType, "f");
      }
      /**
       * Whether the reference is writeable.
       * @public
       */
      isWrite() {
        return !!(__classPrivateFieldGet(this, _Reference_flag, "f") & ReferenceFlag.Write);
      }
      /**
       * Whether the reference is readable.
       * @public
       */
      isRead() {
        return !!(__classPrivateFieldGet(this, _Reference_flag, "f") & ReferenceFlag.Read);
      }
      /**
       * Whether the reference is read-only.
       * @public
       */
      isReadOnly() {
        return __classPrivateFieldGet(this, _Reference_flag, "f") === ReferenceFlag.Read;
      }
      /**
       * Whether the reference is write-only.
       * @public
       */
      isWriteOnly() {
        return __classPrivateFieldGet(this, _Reference_flag, "f") === ReferenceFlag.Write;
      }
      /**
       * Whether the reference is read-write.
       * @public
       */
      isReadWrite() {
        return __classPrivateFieldGet(this, _Reference_flag, "f") === ReferenceFlag.ReadWrite;
      }
    };
    exports.Reference = Reference;
    _Reference_flag = /* @__PURE__ */ new WeakMap(), _Reference_referenceType = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/variable/VariableBase.js
var require_VariableBase = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/variable/VariableBase.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VariableBase = void 0;
    var ID_1 = require_ID();
    var generator = (0, ID_1.createIdGenerator)();
    var VariableBase = class {
      constructor(name, scope) {
        this.$id = generator();
        this.defs = [];
        this.eslintUsed = false;
        this.identifiers = [];
        this.references = [];
        this.name = name;
        this.scope = scope;
      }
    };
    exports.VariableBase = VariableBase;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/variable/ESLintScopeVariable.js
var require_ESLintScopeVariable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/variable/ESLintScopeVariable.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ESLintScopeVariable = void 0;
    var VariableBase_1 = require_VariableBase();
    var ESLintScopeVariable = class extends VariableBase_1.VariableBase {
    };
    exports.ESLintScopeVariable = ESLintScopeVariable;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/variable/ImplicitLibVariable.js
var require_ImplicitLibVariable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/variable/ImplicitLibVariable.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImplicitLibVariable = void 0;
    var ESLintScopeVariable_1 = require_ESLintScopeVariable();
    var ImplicitLibVariable = class extends ESLintScopeVariable_1.ESLintScopeVariable {
      constructor(scope, name, { isTypeVariable, isValueVariable, writeable, eslintImplicitGlobalSetting }) {
        super(name, scope);
        this.isTypeVariable = isTypeVariable ?? false;
        this.isValueVariable = isValueVariable ?? false;
        this.writeable = writeable ?? false;
        this.eslintImplicitGlobalSetting = eslintImplicitGlobalSetting ?? "readonly";
      }
    };
    exports.ImplicitLibVariable = ImplicitLibVariable;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/variable/Variable.js
var require_Variable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/variable/Variable.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Variable = void 0;
    var VariableBase_1 = require_VariableBase();
    var Variable = class extends VariableBase_1.VariableBase {
      /**
       * `true` if the variable is valid in a type context, false otherwise
       * @public
       */
      get isTypeVariable() {
        if (this.defs.length === 0) {
          return true;
        }
        return this.defs.some((def) => def.isTypeDefinition);
      }
      /**
       * `true` if the variable is valid in a value context, false otherwise
       * @public
       */
      get isValueVariable() {
        if (this.defs.length === 0) {
          return true;
        }
        return this.defs.some((def) => def.isVariableDefinition);
      }
    };
    exports.Variable = Variable;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/variable/index.js
var require_variable = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/variable/index.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Variable = exports.ImplicitLibVariable = exports.ESLintScopeVariable = void 0;
    var ESLintScopeVariable_1 = require_ESLintScopeVariable();
    Object.defineProperty(exports, "ESLintScopeVariable", { enumerable: true, get: function() {
      return ESLintScopeVariable_1.ESLintScopeVariable;
    } });
    var ImplicitLibVariable_1 = require_ImplicitLibVariable();
    Object.defineProperty(exports, "ImplicitLibVariable", { enumerable: true, get: function() {
      return ImplicitLibVariable_1.ImplicitLibVariable;
    } });
    var Variable_1 = require_Variable();
    Object.defineProperty(exports, "Variable", { enumerable: true, get: function() {
      return Variable_1.Variable;
    } });
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ScopeType.js
var require_ScopeType = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ScopeType.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScopeType = void 0;
    var ScopeType;
    (function(ScopeType2) {
      ScopeType2["block"] = "block";
      ScopeType2["catch"] = "catch";
      ScopeType2["class"] = "class";
      ScopeType2["classFieldInitializer"] = "class-field-initializer";
      ScopeType2["classStaticBlock"] = "class-static-block";
      ScopeType2["conditionalType"] = "conditionalType";
      ScopeType2["for"] = "for";
      ScopeType2["function"] = "function";
      ScopeType2["functionExpressionName"] = "function-expression-name";
      ScopeType2["functionType"] = "functionType";
      ScopeType2["global"] = "global";
      ScopeType2["mappedType"] = "mappedType";
      ScopeType2["module"] = "module";
      ScopeType2["switch"] = "switch";
      ScopeType2["tsEnum"] = "tsEnum";
      ScopeType2["tsModule"] = "tsModule";
      ScopeType2["type"] = "type";
      ScopeType2["with"] = "with";
    })(ScopeType || (exports.ScopeType = ScopeType = {}));
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ScopeBase.js
var require_ScopeBase = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ScopeBase.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ScopeBase_declaredVariables;
    var _ScopeBase_dynamic;
    var _ScopeBase_staticCloseRef;
    var _ScopeBase_dynamicCloseRef;
    var _ScopeBase_globalCloseRef;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScopeBase = void 0;
    var types_1 = require_dist();
    var assert_1 = require_assert();
    var definition_1 = require_definition();
    var ID_1 = require_ID();
    var Reference_1 = require_Reference();
    var variable_1 = require_variable();
    var ScopeType_1 = require_ScopeType();
    function isStrictScope(scope, block, isMethodDefinition) {
      let body;
      if (scope.upper?.isStrict) {
        return true;
      }
      if (isMethodDefinition) {
        return true;
      }
      if (scope.type === ScopeType_1.ScopeType.class || scope.type === ScopeType_1.ScopeType.conditionalType || scope.type === ScopeType_1.ScopeType.functionType || scope.type === ScopeType_1.ScopeType.mappedType || scope.type === ScopeType_1.ScopeType.module || scope.type === ScopeType_1.ScopeType.tsEnum || scope.type === ScopeType_1.ScopeType.tsModule || scope.type === ScopeType_1.ScopeType.type) {
        return true;
      }
      if (scope.type === ScopeType_1.ScopeType.block || scope.type === ScopeType_1.ScopeType.switch) {
        return false;
      }
      if (scope.type === ScopeType_1.ScopeType.function) {
        const functionBody = block;
        switch (functionBody.type) {
          case types_1.AST_NODE_TYPES.ArrowFunctionExpression:
            if (functionBody.body.type !== types_1.AST_NODE_TYPES.BlockStatement) {
              return false;
            }
            body = functionBody.body;
            break;
          case types_1.AST_NODE_TYPES.Program:
            body = functionBody;
            break;
          default:
            body = functionBody.body;
        }
        if (!body) {
          return false;
        }
      } else if (scope.type === ScopeType_1.ScopeType.global) {
        body = block;
      } else {
        return false;
      }
      for (const stmt of body.body) {
        if (stmt.type !== types_1.AST_NODE_TYPES.ExpressionStatement) {
          break;
        }
        if (stmt.directive === "use strict") {
          return true;
        }
        const expr = stmt.expression;
        if (expr.type !== types_1.AST_NODE_TYPES.Literal) {
          break;
        }
        if (expr.raw === '"use strict"' || expr.raw === "'use strict'") {
          return true;
        }
        if (expr.value === "use strict") {
          return true;
        }
      }
      return false;
    }
    function registerScope(scopeManager, scope) {
      scopeManager.scopes.push(scope);
      const scopes = scopeManager.nodeToScope.get(scope.block);
      if (scopes) {
        scopes.push(scope);
      } else {
        scopeManager.nodeToScope.set(scope.block, [scope]);
      }
    }
    var generator = (0, ID_1.createIdGenerator)();
    var VARIABLE_SCOPE_TYPES = /* @__PURE__ */ new Set([
      ScopeType_1.ScopeType.classFieldInitializer,
      ScopeType_1.ScopeType.classStaticBlock,
      ScopeType_1.ScopeType.function,
      ScopeType_1.ScopeType.global,
      ScopeType_1.ScopeType.module,
      ScopeType_1.ScopeType.tsModule
    ]);
    var ScopeBase = class {
      constructor(scopeManager, type, upperScope, block, isMethodDefinition) {
        this.$id = generator();
        this.childScopes = [];
        _ScopeBase_declaredVariables.set(this, void 0);
        _ScopeBase_dynamic.set(this, void 0);
        this.functionExpressionScope = false;
        this.leftToResolve = [];
        this.references = [];
        this.set = /* @__PURE__ */ new Map();
        this.through = [];
        this.variables = [];
        _ScopeBase_staticCloseRef.set(this, (ref) => {
          const resolve = () => {
            const name = ref.identifier.name;
            const variable = this.set.get(name);
            if (!variable) {
              return false;
            }
            if (!this.isValidResolution(ref, variable)) {
              return false;
            }
            const isValidTypeReference = ref.isTypeReference && variable.isTypeVariable;
            const isValidValueReference = ref.isValueReference && variable.isValueVariable;
            if (!isValidTypeReference && !isValidValueReference) {
              return false;
            }
            variable.references.push(ref);
            ref.resolved = variable;
            return true;
          };
          if (!resolve()) {
            this.delegateToUpperScope(ref);
          }
        });
        _ScopeBase_dynamicCloseRef.set(this, (ref) => {
          let current = this;
          do {
            current.through.push(ref);
            current = current.upper;
          } while (current);
        });
        _ScopeBase_globalCloseRef.set(this, (ref, scopeManager2) => {
          if (this.shouldStaticallyCloseForGlobal(ref, scopeManager2)) {
            __classPrivateFieldGet(this, _ScopeBase_staticCloseRef, "f").call(this, ref);
          } else {
            __classPrivateFieldGet(this, _ScopeBase_dynamicCloseRef, "f").call(this, ref);
          }
        });
        const upperScopeAsScopeBase = upperScope;
        this.type = type;
        __classPrivateFieldSet(this, _ScopeBase_dynamic, this.type === ScopeType_1.ScopeType.global || this.type === ScopeType_1.ScopeType.with, "f");
        this.block = block;
        this.variableScope = this.isVariableScope() ? this : upperScopeAsScopeBase.variableScope;
        this.upper = upperScope;
        this.isStrict = isStrictScope(this, block, isMethodDefinition);
        upperScopeAsScopeBase?.childScopes.push(this);
        __classPrivateFieldSet(this, _ScopeBase_declaredVariables, scopeManager.declaredVariables, "f");
        registerScope(scopeManager, this);
      }
      isVariableScope() {
        return VARIABLE_SCOPE_TYPES.has(this.type);
      }
      shouldStaticallyClose() {
        return !__classPrivateFieldGet(this, _ScopeBase_dynamic, "f");
      }
      shouldStaticallyCloseForGlobal(ref, scopeManager) {
        const name = ref.identifier.name;
        const variable = this.set.get(name);
        if (!variable) {
          return false;
        }
        if (scopeManager.isModule()) {
          return true;
        }
        const defs = variable.defs;
        return defs.length > 0 && defs.every((def) => {
          if (def.type === definition_1.DefinitionType.Variable && def.parent.kind === "var") {
            return false;
          }
          return true;
        });
      }
      close(scopeManager) {
        let closeRef;
        if (this.shouldStaticallyClose()) {
          closeRef = __classPrivateFieldGet(this, _ScopeBase_staticCloseRef, "f");
        } else if (this.type !== "global") {
          closeRef = __classPrivateFieldGet(this, _ScopeBase_dynamicCloseRef, "f");
        } else {
          closeRef = __classPrivateFieldGet(this, _ScopeBase_globalCloseRef, "f");
        }
        (0, assert_1.assert)(this.leftToResolve);
        this.leftToResolve.forEach((ref) => closeRef(ref, scopeManager));
        this.leftToResolve = null;
        return this.upper;
      }
      /**
       * To override by function scopes.
       * References in default parameters isn't resolved to variables which are in their function body.
       */
      isValidResolution(_ref, _variable) {
        return true;
      }
      delegateToUpperScope(ref) {
        this.upper?.leftToResolve?.push(ref);
        this.through.push(ref);
      }
      addDeclaredVariablesOfNode(variable, node2) {
        if (node2 == null) {
          return;
        }
        let variables = __classPrivateFieldGet(this, _ScopeBase_declaredVariables, "f").get(node2);
        if (variables == null) {
          variables = [];
          __classPrivateFieldGet(this, _ScopeBase_declaredVariables, "f").set(node2, variables);
        }
        if (!variables.includes(variable)) {
          variables.push(variable);
        }
      }
      defineVariable(nameOrVariable, set, variables, node2, def) {
        const name = typeof nameOrVariable === "string" ? nameOrVariable : nameOrVariable.name;
        let variable = set.get(name);
        if (!variable) {
          variable = typeof nameOrVariable === "string" ? new variable_1.Variable(name, this) : nameOrVariable;
          set.set(name, variable);
          variables.push(variable);
        }
        if (def) {
          variable.defs.push(def);
          this.addDeclaredVariablesOfNode(variable, def.node);
          this.addDeclaredVariablesOfNode(variable, def.parent);
        }
        if (node2) {
          variable.identifiers.push(node2);
        }
      }
      defineIdentifier(node2, def) {
        this.defineVariable(node2.name, this.set, this.variables, node2, def);
      }
      defineLiteralIdentifier(node2, def) {
        this.defineVariable(node2.value, this.set, this.variables, null, def);
      }
      referenceValue(node2, assign = Reference_1.ReferenceFlag.Read, writeExpr, maybeImplicitGlobal, init = false) {
        const ref = new Reference_1.Reference(node2, this, assign, writeExpr, maybeImplicitGlobal, init, Reference_1.ReferenceTypeFlag.Value);
        this.references.push(ref);
        this.leftToResolve?.push(ref);
      }
      referenceType(node2) {
        const ref = new Reference_1.Reference(node2, this, Reference_1.ReferenceFlag.Read, null, null, false, Reference_1.ReferenceTypeFlag.Type);
        this.references.push(ref);
        this.leftToResolve?.push(ref);
      }
      referenceDualValueType(node2) {
        const ref = new Reference_1.Reference(node2, this, Reference_1.ReferenceFlag.Read, null, null, false, Reference_1.ReferenceTypeFlag.Type | Reference_1.ReferenceTypeFlag.Value);
        this.references.push(ref);
        this.leftToResolve?.push(ref);
      }
    };
    exports.ScopeBase = ScopeBase;
    _ScopeBase_declaredVariables = /* @__PURE__ */ new WeakMap(), _ScopeBase_dynamic = /* @__PURE__ */ new WeakMap(), _ScopeBase_staticCloseRef = /* @__PURE__ */ new WeakMap(), _ScopeBase_dynamicCloseRef = /* @__PURE__ */ new WeakMap(), _ScopeBase_globalCloseRef = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/BlockScope.js
var require_BlockScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/BlockScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BlockScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var BlockScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.block, upperScope, block, false);
      }
    };
    exports.BlockScope = BlockScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/CatchScope.js
var require_CatchScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/CatchScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CatchScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var CatchScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.catch, upperScope, block, false);
      }
    };
    exports.CatchScope = CatchScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ClassFieldInitializerScope.js
var require_ClassFieldInitializerScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ClassFieldInitializerScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClassFieldInitializerScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ClassFieldInitializerScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.classFieldInitializer, upperScope, block, false);
      }
    };
    exports.ClassFieldInitializerScope = ClassFieldInitializerScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ClassScope.js
var require_ClassScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ClassScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClassScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ClassScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.class, upperScope, block, false);
      }
    };
    exports.ClassScope = ClassScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ConditionalTypeScope.js
var require_ConditionalTypeScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ConditionalTypeScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConditionalTypeScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ConditionalTypeScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.conditionalType, upperScope, block, false);
      }
    };
    exports.ConditionalTypeScope = ConditionalTypeScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ForScope.js
var require_ForScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ForScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ForScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ForScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.for, upperScope, block, false);
      }
    };
    exports.ForScope = ForScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionExpressionNameScope.js
var require_FunctionExpressionNameScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionExpressionNameScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FunctionExpressionNameScope = void 0;
    var definition_1 = require_definition();
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var FunctionExpressionNameScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.functionExpressionName, upperScope, block, false);
        if (block.id) {
          this.defineIdentifier(block.id, new definition_1.FunctionNameDefinition(block.id, block));
        }
        this.functionExpressionScope = true;
      }
    };
    exports.FunctionExpressionNameScope = FunctionExpressionNameScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionScope.js
var require_FunctionScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FunctionScope = void 0;
    var types_1 = require_dist();
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var FunctionScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block, isMethodDefinition) {
        super(scopeManager, ScopeType_1.ScopeType.function, upperScope, block, isMethodDefinition);
        if (this.block.type !== types_1.AST_NODE_TYPES.ArrowFunctionExpression) {
          this.defineVariable("arguments", this.set, this.variables, null, null);
        }
      }
      // References in default parameters isn't resolved to variables which are in their function body.
      //     const x = 1
      //     function f(a = x) { // This `x` is resolved to the `x` in the outer scope.
      //         const x = 2
      //         console.log(a)
      //     }
      isValidResolution(ref, variable) {
        if (this.block.type === types_1.AST_NODE_TYPES.Program) {
          return true;
        }
        const bodyStart = this.block.body?.range[0] ?? -1;
        return !(variable.scope === this && ref.identifier.range[0] < bodyStart && // the reference is in the parameter part.
        variable.defs.every((d) => d.name.range[0] >= bodyStart));
      }
    };
    exports.FunctionScope = FunctionScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionTypeScope.js
var require_FunctionTypeScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionTypeScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FunctionTypeScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var FunctionTypeScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.functionType, upperScope, block, false);
      }
    };
    exports.FunctionTypeScope = FunctionTypeScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/GlobalScope.js
var require_GlobalScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/GlobalScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GlobalScope = void 0;
    var types_1 = require_dist();
    var assert_1 = require_assert();
    var ImplicitGlobalVariableDefinition_1 = require_ImplicitGlobalVariableDefinition();
    var variable_1 = require_variable();
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var GlobalScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, block) {
        super(scopeManager, ScopeType_1.ScopeType.global, null, block, false);
        this.implicit = {
          set: /* @__PURE__ */ new Map(),
          variables: [],
          leftToBeResolved: []
        };
      }
      defineImplicitVariable(name, options) {
        this.defineVariable(new variable_1.ImplicitLibVariable(this, name, options), this.set, this.variables, null, null);
      }
      close(scopeManager) {
        (0, assert_1.assert)(this.leftToResolve);
        for (const ref of this.leftToResolve) {
          if (ref.maybeImplicitGlobal && !this.set.has(ref.identifier.name)) {
            const info = ref.maybeImplicitGlobal;
            const node2 = info.pattern;
            if (node2.type === types_1.AST_NODE_TYPES.Identifier) {
              this.defineVariable(node2.name, this.implicit.set, this.implicit.variables, node2, new ImplicitGlobalVariableDefinition_1.ImplicitGlobalVariableDefinition(info.pattern, info.node));
            }
          }
        }
        this.implicit.leftToBeResolved = this.leftToResolve;
        return super.close(scopeManager);
      }
    };
    exports.GlobalScope = GlobalScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/MappedTypeScope.js
var require_MappedTypeScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/MappedTypeScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MappedTypeScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var MappedTypeScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.mappedType, upperScope, block, false);
      }
    };
    exports.MappedTypeScope = MappedTypeScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ModuleScope.js
var require_ModuleScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ModuleScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ModuleScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ModuleScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.module, upperScope, block, false);
      }
    };
    exports.ModuleScope = ModuleScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/Scope.js
var require_Scope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/Scope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/SwitchScope.js
var require_SwitchScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/SwitchScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SwitchScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var SwitchScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.switch, upperScope, block, false);
      }
    };
    exports.SwitchScope = SwitchScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/TSEnumScope.js
var require_TSEnumScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/TSEnumScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TSEnumScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var TSEnumScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.tsEnum, upperScope, block, false);
      }
    };
    exports.TSEnumScope = TSEnumScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/TSModuleScope.js
var require_TSModuleScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/TSModuleScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TSModuleScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var TSModuleScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.tsModule, upperScope, block, false);
      }
    };
    exports.TSModuleScope = TSModuleScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/TypeScope.js
var require_TypeScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/TypeScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var TypeScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.type, upperScope, block, false);
      }
    };
    exports.TypeScope = TypeScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/WithScope.js
var require_WithScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/WithScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WithScope = void 0;
    var assert_1 = require_assert();
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var WithScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.with, upperScope, block, false);
      }
      close(scopeManager) {
        if (this.shouldStaticallyClose()) {
          return super.close(scopeManager);
        }
        (0, assert_1.assert)(this.leftToResolve);
        this.leftToResolve.forEach((ref) => this.delegateToUpperScope(ref));
        this.leftToResolve = null;
        return this.upper;
      }
    };
    exports.WithScope = WithScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/index.js
var require_scope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/index.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_BlockScope(), exports);
    __exportStar(require_CatchScope(), exports);
    __exportStar(require_ClassFieldInitializerScope(), exports);
    __exportStar(require_ClassScope(), exports);
    __exportStar(require_ConditionalTypeScope(), exports);
    __exportStar(require_ForScope(), exports);
    __exportStar(require_FunctionExpressionNameScope(), exports);
    __exportStar(require_FunctionScope(), exports);
    __exportStar(require_FunctionTypeScope(), exports);
    __exportStar(require_GlobalScope(), exports);
    __exportStar(require_MappedTypeScope(), exports);
    __exportStar(require_ModuleScope(), exports);
    __exportStar(require_Scope(), exports);
    __exportStar(require_ScopeType(), exports);
    __exportStar(require_SwitchScope(), exports);
    __exportStar(require_TSEnumScope(), exports);
    __exportStar(require_TSModuleScope(), exports);
    __exportStar(require_TypeScope(), exports);
    __exportStar(require_WithScope(), exports);
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/VisitorBase.js
var require_VisitorBase = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/VisitorBase.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _VisitorBase_childVisitorKeys;
    var _VisitorBase_visitChildrenEvenIfSelectorExists;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VisitorBase = void 0;
    var visitor_keys_1 = require_dist2();
    function isObject(obj) {
      return typeof obj === "object" && obj != null;
    }
    function isNode(node2) {
      return isObject(node2) && typeof node2.type === "string";
    }
    var VisitorBase = class {
      constructor(options) {
        _VisitorBase_childVisitorKeys.set(this, void 0);
        _VisitorBase_visitChildrenEvenIfSelectorExists.set(this, void 0);
        __classPrivateFieldSet(this, _VisitorBase_childVisitorKeys, options.childVisitorKeys ?? visitor_keys_1.visitorKeys, "f");
        __classPrivateFieldSet(this, _VisitorBase_visitChildrenEvenIfSelectorExists, options.visitChildrenEvenIfSelectorExists ?? false, "f");
      }
      /**
       * Default method for visiting children.
       * @param node the node whose children should be visited
       * @param excludeArr a list of keys to not visit
       */
      visitChildren(node2, excludeArr = []) {
        if (node2?.type == null) {
          return;
        }
        const exclude = /* @__PURE__ */ new Set([...excludeArr, "parent"]);
        const children = __classPrivateFieldGet(this, _VisitorBase_childVisitorKeys, "f")[node2.type] ?? Object.keys(node2);
        for (const key of children) {
          if (exclude.has(key)) {
            continue;
          }
          const child = node2[key];
          if (!child) {
            continue;
          }
          if (Array.isArray(child)) {
            for (const subChild of child) {
              if (isNode(subChild)) {
                this.visit(subChild);
              }
            }
          } else if (isNode(child)) {
            this.visit(child);
          }
        }
      }
      /**
       * Dispatching node.
       */
      visit(node2) {
        if (node2?.type == null) {
          return;
        }
        const visitor = this[node2.type];
        if (visitor) {
          visitor.call(this, node2);
          if (!__classPrivateFieldGet(this, _VisitorBase_visitChildrenEvenIfSelectorExists, "f")) {
            return;
          }
        }
        this.visitChildren(node2);
      }
    };
    exports.VisitorBase = VisitorBase;
    _VisitorBase_childVisitorKeys = /* @__PURE__ */ new WeakMap(), _VisitorBase_visitChildrenEvenIfSelectorExists = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/PatternVisitor.js
var require_PatternVisitor = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/PatternVisitor.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _PatternVisitor_rootPattern;
    var _PatternVisitor_callback;
    var _PatternVisitor_assignments;
    var _PatternVisitor_restElements;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PatternVisitor = void 0;
    var types_1 = require_dist();
    var VisitorBase_1 = require_VisitorBase();
    var PatternVisitor = class extends VisitorBase_1.VisitorBase {
      static isPattern(node2) {
        const nodeType = node2.type;
        return nodeType === types_1.AST_NODE_TYPES.Identifier || nodeType === types_1.AST_NODE_TYPES.ObjectPattern || nodeType === types_1.AST_NODE_TYPES.ArrayPattern || nodeType === types_1.AST_NODE_TYPES.SpreadElement || nodeType === types_1.AST_NODE_TYPES.RestElement || nodeType === types_1.AST_NODE_TYPES.AssignmentPattern;
      }
      constructor(options, rootPattern, callback) {
        super(options);
        _PatternVisitor_rootPattern.set(this, void 0);
        _PatternVisitor_callback.set(this, void 0);
        _PatternVisitor_assignments.set(this, []);
        this.rightHandNodes = [];
        _PatternVisitor_restElements.set(this, []);
        __classPrivateFieldSet(this, _PatternVisitor_rootPattern, rootPattern, "f");
        __classPrivateFieldSet(this, _PatternVisitor_callback, callback, "f");
      }
      ArrayExpression(node2) {
        node2.elements.forEach(this.visit, this);
      }
      ArrayPattern(pattern) {
        for (const element of pattern.elements) {
          this.visit(element);
        }
      }
      AssignmentExpression(node2) {
        __classPrivateFieldGet(this, _PatternVisitor_assignments, "f").push(node2);
        this.visit(node2.left);
        this.rightHandNodes.push(node2.right);
        __classPrivateFieldGet(this, _PatternVisitor_assignments, "f").pop();
      }
      AssignmentPattern(pattern) {
        __classPrivateFieldGet(this, _PatternVisitor_assignments, "f").push(pattern);
        this.visit(pattern.left);
        this.rightHandNodes.push(pattern.right);
        __classPrivateFieldGet(this, _PatternVisitor_assignments, "f").pop();
      }
      CallExpression(node2) {
        node2.arguments.forEach((a) => {
          this.rightHandNodes.push(a);
        });
        this.visit(node2.callee);
      }
      Decorator() {
      }
      Identifier(pattern) {
        const lastRestElement = __classPrivateFieldGet(this, _PatternVisitor_restElements, "f").at(-1);
        __classPrivateFieldGet(this, _PatternVisitor_callback, "f").call(this, pattern, {
          topLevel: pattern === __classPrivateFieldGet(this, _PatternVisitor_rootPattern, "f"),
          rest: lastRestElement?.argument === pattern,
          assignments: __classPrivateFieldGet(this, _PatternVisitor_assignments, "f")
        });
      }
      MemberExpression(node2) {
        if (node2.computed) {
          this.rightHandNodes.push(node2.property);
        }
        this.rightHandNodes.push(node2.object);
      }
      Property(property) {
        if (property.computed) {
          this.rightHandNodes.push(property.key);
        }
        this.visit(property.value);
      }
      RestElement(pattern) {
        __classPrivateFieldGet(this, _PatternVisitor_restElements, "f").push(pattern);
        this.visit(pattern.argument);
        __classPrivateFieldGet(this, _PatternVisitor_restElements, "f").pop();
      }
      SpreadElement(node2) {
        this.visit(node2.argument);
      }
      TSTypeAnnotation() {
      }
    };
    exports.PatternVisitor = PatternVisitor;
    _PatternVisitor_rootPattern = /* @__PURE__ */ new WeakMap(), _PatternVisitor_callback = /* @__PURE__ */ new WeakMap(), _PatternVisitor_assignments = /* @__PURE__ */ new WeakMap(), _PatternVisitor_restElements = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/Visitor.js
var require_Visitor = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/Visitor.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _Visitor_options;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VisitorBase = exports.Visitor = void 0;
    var PatternVisitor_1 = require_PatternVisitor();
    var VisitorBase_1 = require_VisitorBase();
    Object.defineProperty(exports, "VisitorBase", { enumerable: true, get: function() {
      return VisitorBase_1.VisitorBase;
    } });
    var Visitor = class _Visitor extends VisitorBase_1.VisitorBase {
      constructor(optionsOrVisitor) {
        super(optionsOrVisitor instanceof _Visitor ? __classPrivateFieldGet(optionsOrVisitor, _Visitor_options, "f") : optionsOrVisitor);
        _Visitor_options.set(this, void 0);
        __classPrivateFieldSet(this, _Visitor_options, optionsOrVisitor instanceof _Visitor ? __classPrivateFieldGet(optionsOrVisitor, _Visitor_options, "f") : optionsOrVisitor, "f");
      }
      visitPattern(node2, callback, options = { processRightHandNodes: false }) {
        const visitor = new PatternVisitor_1.PatternVisitor(__classPrivateFieldGet(this, _Visitor_options, "f"), node2, callback);
        visitor.visit(node2);
        if (options.processRightHandNodes) {
          visitor.rightHandNodes.forEach(this.visit, this);
        }
      }
    };
    exports.Visitor = Visitor;
    _Visitor_options = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/TypeVisitor.js
var require_TypeVisitor = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/TypeVisitor.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _TypeVisitor_referencer;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeVisitor = void 0;
    var types_1 = require_dist();
    var definition_1 = require_definition();
    var scope_1 = require_scope();
    var Visitor_1 = require_Visitor();
    var TypeVisitor = class _TypeVisitor extends Visitor_1.Visitor {
      constructor(referencer) {
        super(referencer);
        _TypeVisitor_referencer.set(this, void 0);
        __classPrivateFieldSet(this, _TypeVisitor_referencer, referencer, "f");
      }
      static visit(referencer, node2) {
        const typeReferencer = new _TypeVisitor(referencer);
        typeReferencer.visit(node2);
      }
      ///////////////////
      // Visit helpers //
      ///////////////////
      visitFunctionType(node2) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").scopeManager.nestFunctionTypeScope(node2);
        this.visit(node2.typeParameters);
        for (const param of node2.params) {
          let didVisitAnnotation = false;
          this.visitPattern(param, (pattern, info) => {
            __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().defineIdentifier(pattern, new definition_1.ParameterDefinition(pattern, node2, info.rest));
            if (pattern.typeAnnotation) {
              this.visit(pattern.typeAnnotation);
              didVisitAnnotation = true;
            }
          });
          if (!didVisitAnnotation && "typeAnnotation" in param) {
            this.visit(param.typeAnnotation);
          }
        }
        this.visit(node2.returnType);
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").close(node2);
      }
      visitPropertyKey(node2) {
        if (!node2.computed) {
          return;
        }
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").visit(node2.key);
      }
      /////////////////////
      // Visit selectors //
      /////////////////////
      Identifier(node2) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().referenceType(node2);
      }
      MemberExpression(node2) {
        this.visit(node2.object);
      }
      TSCallSignatureDeclaration(node2) {
        this.visitFunctionType(node2);
      }
      TSConditionalType(node2) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").scopeManager.nestConditionalTypeScope(node2);
        this.visitChildren(node2, ["falseType"]);
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").close(node2);
        this.visit(node2.falseType);
      }
      TSConstructorType(node2) {
        this.visitFunctionType(node2);
      }
      TSConstructSignatureDeclaration(node2) {
        this.visitFunctionType(node2);
      }
      TSFunctionType(node2) {
        this.visitFunctionType(node2);
      }
      TSImportType(node2) {
        this.visit(node2.typeArguments);
      }
      TSIndexSignature(node2) {
        for (const param of node2.parameters) {
          if (param.type === types_1.AST_NODE_TYPES.Identifier) {
            this.visit(param.typeAnnotation);
          }
        }
        this.visit(node2.typeAnnotation);
      }
      TSInferType(node2) {
        const typeParameter = node2.typeParameter;
        let scope = __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope();
        if (scope.type === scope_1.ScopeType.functionType || scope.type === scope_1.ScopeType.mappedType) {
          let currentScope = scope.upper;
          while (currentScope) {
            if (currentScope.type === scope_1.ScopeType.functionType || currentScope.type === scope_1.ScopeType.mappedType) {
              currentScope = currentScope.upper;
              continue;
            }
            if (currentScope.type === scope_1.ScopeType.conditionalType) {
              scope = currentScope;
              break;
            }
            break;
          }
        }
        scope.defineIdentifier(typeParameter.name, new definition_1.TypeDefinition(typeParameter.name, typeParameter));
        this.visit(typeParameter.constraint);
      }
      TSInterfaceDeclaration(node2) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().defineIdentifier(node2.id, new definition_1.TypeDefinition(node2.id, node2));
        if (node2.typeParameters) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").scopeManager.nestTypeScope(node2);
          this.visit(node2.typeParameters);
        }
        node2.extends.forEach(this.visit, this);
        this.visit(node2.body);
        if (node2.typeParameters) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").close(node2);
        }
      }
      TSMappedType(node2) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").scopeManager.nestMappedTypeScope(node2);
        this.visitChildren(node2);
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").close(node2);
      }
      TSMethodSignature(node2) {
        this.visitPropertyKey(node2);
        this.visitFunctionType(node2);
      }
      TSNamedTupleMember(node2) {
        this.visit(node2.elementType);
      }
      TSPropertySignature(node2) {
        this.visitPropertyKey(node2);
        this.visit(node2.typeAnnotation);
      }
      TSQualifiedName(node2) {
        this.visit(node2.left);
      }
      TSTypeAliasDeclaration(node2) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().defineIdentifier(node2.id, new definition_1.TypeDefinition(node2.id, node2));
        if (node2.typeParameters) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").scopeManager.nestTypeScope(node2);
          this.visit(node2.typeParameters);
        }
        this.visit(node2.typeAnnotation);
        if (node2.typeParameters) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").close(node2);
        }
      }
      TSTypeParameter(node2) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().defineIdentifier(node2.name, new definition_1.TypeDefinition(node2.name, node2));
        this.visit(node2.constraint);
        this.visit(node2.default);
      }
      TSTypePredicate(node2) {
        if (node2.parameterName.type !== types_1.AST_NODE_TYPES.TSThisType) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().referenceValue(node2.parameterName);
        }
        this.visit(node2.typeAnnotation);
      }
      // a type query `typeof foo` is a special case that references a _non-type_ variable,
      TSTypeQuery(node2) {
        let entityName;
        if (node2.exprName.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
          let iter = node2.exprName;
          while (iter.left.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
            iter = iter.left;
          }
          entityName = iter.left;
        } else {
          entityName = node2.exprName;
          if (node2.exprName.type === types_1.AST_NODE_TYPES.TSImportType) {
            this.visit(node2.exprName);
          }
        }
        if (entityName.type === types_1.AST_NODE_TYPES.Identifier) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().referenceValue(entityName);
        }
        this.visit(node2.typeArguments);
      }
      TSTypeAnnotation(node2) {
        this.visitChildren(node2);
      }
    };
    exports.TypeVisitor = TypeVisitor;
    _TypeVisitor_referencer = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/ClassVisitor.js
var require_ClassVisitor = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/ClassVisitor.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ClassVisitor_classNode;
    var _ClassVisitor_referencer;
    var _ClassVisitor_emitDecoratorMetadata;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClassVisitor = void 0;
    var types_1 = require_dist();
    var definition_1 = require_definition();
    var TypeVisitor_1 = require_TypeVisitor();
    var Visitor_1 = require_Visitor();
    var ClassVisitor = class _ClassVisitor extends Visitor_1.Visitor {
      constructor(referencer, node2, emitDecoratorMetadata) {
        super(referencer);
        _ClassVisitor_classNode.set(this, void 0);
        _ClassVisitor_referencer.set(this, void 0);
        _ClassVisitor_emitDecoratorMetadata.set(this, void 0);
        __classPrivateFieldSet(this, _ClassVisitor_referencer, referencer, "f");
        __classPrivateFieldSet(this, _ClassVisitor_classNode, node2, "f");
        __classPrivateFieldSet(this, _ClassVisitor_emitDecoratorMetadata, emitDecoratorMetadata, "f");
      }
      static visit(referencer, node2, emitDecoratorMetadata) {
        const classVisitor = new _ClassVisitor(referencer, node2, emitDecoratorMetadata);
        classVisitor.visitClass(node2);
      }
      visit(node2) {
        if (node2 && node2.type in this) {
          super.visit(node2);
        } else {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node2);
        }
      }
      ///////////////////
      // Visit helpers //
      ///////////////////
      visitClass(node2) {
        if (node2.type === types_1.AST_NODE_TYPES.ClassDeclaration && node2.id) {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").currentScope().defineIdentifier(node2.id, new definition_1.ClassNameDefinition(node2.id, node2));
        }
        node2.decorators.forEach((d) => __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(d));
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestClassScope(node2);
        if (node2.id) {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").currentScope().defineIdentifier(node2.id, new definition_1.ClassNameDefinition(node2.id, node2));
        }
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node2.superClass);
        this.visitType(node2.typeParameters);
        this.visitType(node2.superTypeArguments);
        node2.implements.forEach((imp) => this.visitType(imp));
        this.visit(node2.body);
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").close(node2);
      }
      visitPropertyDefinition(node2) {
        this.visitPropertyBase(node2);
        this.visitMetadataType(node2.typeAnnotation, !!node2.decorators.length);
      }
      visitFunctionParameterTypeAnnotation(node2, withDecorators) {
        switch (node2.type) {
          case types_1.AST_NODE_TYPES.AssignmentPattern:
            this.visitMetadataType(node2.left.typeAnnotation, withDecorators);
            break;
          case types_1.AST_NODE_TYPES.TSParameterProperty:
            this.visitFunctionParameterTypeAnnotation(node2.parameter, withDecorators);
            break;
          default:
            this.visitMetadataType(node2.typeAnnotation, withDecorators);
        }
      }
      visitMethodFunction(node2, methodNode) {
        if (node2.id) {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestFunctionExpressionNameScope(node2);
        }
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestFunctionScope(node2, true);
        let withMethodDecorators = !!methodNode.decorators.length;
        withMethodDecorators || (withMethodDecorators = methodNode.kind !== "set" && node2.params.some((param) => param.decorators.length));
        if (!withMethodDecorators && methodNode.kind === "set") {
          const keyName = getLiteralMethodKeyName(methodNode);
          if (keyName != null && __classPrivateFieldGet(this, _ClassVisitor_classNode, "f").body.body.find((node3) => node3 !== methodNode && node3.type === types_1.AST_NODE_TYPES.MethodDefinition && // Node must both be static or not
          node3.static === methodNode.static && getLiteralMethodKeyName(node3) === keyName)?.decorators.length) {
            withMethodDecorators = true;
          }
        }
        if (!withMethodDecorators && methodNode.kind === "constructor" && __classPrivateFieldGet(this, _ClassVisitor_classNode, "f").decorators.length) {
          withMethodDecorators = true;
        }
        for (const param of node2.params) {
          this.visitPattern(param, (pattern, info) => {
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").currentScope().defineIdentifier(pattern, new definition_1.ParameterDefinition(pattern, node2, info.rest));
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").referencingDefaultValue(pattern, info.assignments, null, true);
          }, { processRightHandNodes: true });
          this.visitFunctionParameterTypeAnnotation(param, withMethodDecorators);
          param.decorators.forEach((d) => this.visit(d));
        }
        this.visitMetadataType(node2.returnType, withMethodDecorators);
        this.visitType(node2.typeParameters);
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visitChildren(node2.body);
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").close(node2);
      }
      visitPropertyBase(node2) {
        if (node2.computed) {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node2.key);
        }
        if (node2.value) {
          if (node2.type === types_1.AST_NODE_TYPES.PropertyDefinition || node2.type === types_1.AST_NODE_TYPES.AccessorProperty) {
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestClassFieldInitializerScope(node2.value);
          }
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node2.value);
          if (node2.type === types_1.AST_NODE_TYPES.PropertyDefinition || node2.type === types_1.AST_NODE_TYPES.AccessorProperty) {
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").close(node2.value);
          }
        }
        node2.decorators.forEach((d) => __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(d));
      }
      visitMethod(node2) {
        if (node2.computed) {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node2.key);
        }
        if (node2.value.type === types_1.AST_NODE_TYPES.FunctionExpression) {
          this.visitMethodFunction(node2.value, node2);
        } else {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node2.value);
        }
        node2.decorators.forEach((d) => __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(d));
      }
      visitType(node2) {
        if (!node2) {
          return;
        }
        TypeVisitor_1.TypeVisitor.visit(__classPrivateFieldGet(this, _ClassVisitor_referencer, "f"), node2);
      }
      visitMetadataType(node2, withDecorators) {
        if (!node2) {
          return;
        }
        if (__classPrivateFieldGet(this, _ClassVisitor_classNode, "f").type === types_1.AST_NODE_TYPES.ClassDeclaration && !__classPrivateFieldGet(this, _ClassVisitor_classNode, "f").declare && node2.typeAnnotation.type === types_1.AST_NODE_TYPES.TSTypeReference && __classPrivateFieldGet(this, _ClassVisitor_emitDecoratorMetadata, "f")) {
          let entityName;
          if (node2.typeAnnotation.typeName.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
            let iter = node2.typeAnnotation.typeName;
            while (iter.left.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
              iter = iter.left;
            }
            entityName = iter.left;
          } else {
            entityName = node2.typeAnnotation.typeName;
          }
          if (withDecorators) {
            if (entityName.type === types_1.AST_NODE_TYPES.Identifier) {
              __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").currentScope().referenceDualValueType(entityName);
            }
            if (node2.typeAnnotation.typeArguments) {
              this.visitType(node2.typeAnnotation.typeArguments);
            }
            return;
          }
        }
        this.visitType(node2);
      }
      /////////////////////
      // Visit selectors //
      /////////////////////
      AccessorProperty(node2) {
        this.visitPropertyDefinition(node2);
      }
      ClassBody(node2) {
        this.visitChildren(node2);
      }
      PropertyDefinition(node2) {
        this.visitPropertyDefinition(node2);
      }
      MethodDefinition(node2) {
        this.visitMethod(node2);
      }
      TSAbstractAccessorProperty(node2) {
        this.visitPropertyDefinition(node2);
      }
      TSAbstractPropertyDefinition(node2) {
        this.visitPropertyDefinition(node2);
      }
      TSAbstractMethodDefinition(node2) {
        this.visitPropertyBase(node2);
      }
      Identifier(node2) {
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node2);
      }
      PrivateIdentifier() {
      }
      StaticBlock(node2) {
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestClassStaticBlockScope(node2);
        node2.body.forEach((b) => this.visit(b));
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").close(node2);
      }
    };
    exports.ClassVisitor = ClassVisitor;
    _ClassVisitor_classNode = /* @__PURE__ */ new WeakMap(), _ClassVisitor_referencer = /* @__PURE__ */ new WeakMap(), _ClassVisitor_emitDecoratorMetadata = /* @__PURE__ */ new WeakMap();
    function getLiteralMethodKeyName(node2) {
      if (node2.computed && node2.key.type === types_1.AST_NODE_TYPES.Literal) {
        if (typeof node2.key.value === "string" || typeof node2.key.value === "number") {
          return node2.key.value;
        }
      } else if (!node2.computed && node2.key.type === types_1.AST_NODE_TYPES.Identifier) {
        return node2.key.name;
      }
      return null;
    }
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/ExportVisitor.js
var require_ExportVisitor = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/ExportVisitor.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ExportVisitor_referencer;
    var _ExportVisitor_exportNode;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExportVisitor = void 0;
    var types_1 = require_dist();
    var Visitor_1 = require_Visitor();
    var ExportVisitor = class _ExportVisitor extends Visitor_1.Visitor {
      constructor(node2, referencer) {
        super(referencer);
        _ExportVisitor_referencer.set(this, void 0);
        _ExportVisitor_exportNode.set(this, void 0);
        __classPrivateFieldSet(this, _ExportVisitor_exportNode, node2, "f");
        __classPrivateFieldSet(this, _ExportVisitor_referencer, referencer, "f");
      }
      static visit(referencer, node2) {
        const exportReferencer = new _ExportVisitor(node2, referencer);
        exportReferencer.visit(node2);
      }
      Identifier(node2) {
        if (__classPrivateFieldGet(this, _ExportVisitor_exportNode, "f").exportKind === "type") {
          __classPrivateFieldGet(this, _ExportVisitor_referencer, "f").currentScope().referenceType(node2);
        } else {
          __classPrivateFieldGet(this, _ExportVisitor_referencer, "f").currentScope().referenceDualValueType(node2);
        }
      }
      ExportDefaultDeclaration(node2) {
        if (node2.declaration.type === types_1.AST_NODE_TYPES.Identifier) {
          this.visit(node2.declaration);
        } else {
        }
      }
      ExportNamedDeclaration(node2) {
        if (node2.source) {
          return;
        }
        if (!node2.declaration) {
          this.visitChildren(node2);
        } else {
        }
      }
      ExportSpecifier(node2) {
        if (node2.exportKind === "type") {
          __classPrivateFieldGet(this, _ExportVisitor_referencer, "f").currentScope().referenceType(node2.local);
        } else {
          this.visit(node2.local);
        }
      }
    };
    exports.ExportVisitor = ExportVisitor;
    _ExportVisitor_referencer = /* @__PURE__ */ new WeakMap(), _ExportVisitor_exportNode = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/ImportVisitor.js
var require_ImportVisitor = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/ImportVisitor.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ImportVisitor_declaration;
    var _ImportVisitor_referencer;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImportVisitor = void 0;
    var definition_1 = require_definition();
    var Visitor_1 = require_Visitor();
    var ImportVisitor = class _ImportVisitor extends Visitor_1.Visitor {
      constructor(declaration, referencer) {
        super(referencer);
        _ImportVisitor_declaration.set(this, void 0);
        _ImportVisitor_referencer.set(this, void 0);
        __classPrivateFieldSet(this, _ImportVisitor_declaration, declaration, "f");
        __classPrivateFieldSet(this, _ImportVisitor_referencer, referencer, "f");
      }
      static visit(referencer, declaration) {
        const importReferencer = new _ImportVisitor(declaration, referencer);
        importReferencer.visit(declaration);
      }
      visitImport(id, specifier) {
        __classPrivateFieldGet(this, _ImportVisitor_referencer, "f").currentScope().defineIdentifier(id, new definition_1.ImportBindingDefinition(id, specifier, __classPrivateFieldGet(this, _ImportVisitor_declaration, "f")));
      }
      ImportNamespaceSpecifier(node2) {
        const local = node2.local;
        this.visitImport(local, node2);
      }
      ImportDefaultSpecifier(node2) {
        const local = node2.local;
        this.visitImport(local, node2);
      }
      ImportSpecifier(node2) {
        const local = node2.local;
        this.visitImport(local, node2);
      }
    };
    exports.ImportVisitor = ImportVisitor;
    _ImportVisitor_declaration = /* @__PURE__ */ new WeakMap(), _ImportVisitor_referencer = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/Referencer.js
var require_Referencer = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/Referencer.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Referencer_jsxPragma;
    var _Referencer_jsxFragmentName;
    var _Referencer_hasReferencedJsxFactory;
    var _Referencer_hasReferencedJsxFragmentFactory;
    var _Referencer_lib;
    var _Referencer_emitDecoratorMetadata;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Referencer = void 0;
    var types_1 = require_dist();
    var assert_1 = require_assert();
    var definition_1 = require_definition();
    var lib_1 = require_lib3();
    var ClassVisitor_1 = require_ClassVisitor();
    var ExportVisitor_1 = require_ExportVisitor();
    var ImportVisitor_1 = require_ImportVisitor();
    var PatternVisitor_1 = require_PatternVisitor();
    var Reference_1 = require_Reference();
    var TypeVisitor_1 = require_TypeVisitor();
    var Visitor_1 = require_Visitor();
    var Referencer = class extends Visitor_1.Visitor {
      constructor(options, scopeManager) {
        super(options);
        _Referencer_jsxPragma.set(this, void 0);
        _Referencer_jsxFragmentName.set(this, void 0);
        _Referencer_hasReferencedJsxFactory.set(this, false);
        _Referencer_hasReferencedJsxFragmentFactory.set(this, false);
        _Referencer_lib.set(this, void 0);
        _Referencer_emitDecoratorMetadata.set(this, void 0);
        this.scopeManager = scopeManager;
        __classPrivateFieldSet(this, _Referencer_jsxPragma, options.jsxPragma, "f");
        __classPrivateFieldSet(this, _Referencer_jsxFragmentName, options.jsxFragmentName, "f");
        __classPrivateFieldSet(this, _Referencer_lib, options.lib, "f");
        __classPrivateFieldSet(this, _Referencer_emitDecoratorMetadata, options.emitDecoratorMetadata, "f");
      }
      currentScope(dontThrowOnNull) {
        if (!dontThrowOnNull) {
          (0, assert_1.assert)(this.scopeManager.currentScope, "aaa");
        }
        return this.scopeManager.currentScope;
      }
      close(node2) {
        while (this.currentScope(true) && node2 === this.currentScope().block) {
          this.scopeManager.currentScope = this.currentScope().close(this.scopeManager);
        }
      }
      referencingDefaultValue(pattern, assignments, maybeImplicitGlobal, init) {
        assignments.forEach((assignment) => {
          this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, assignment.right, maybeImplicitGlobal, init);
        });
      }
      populateGlobalsFromLib(globalScope) {
        for (const lib of __classPrivateFieldGet(this, _Referencer_lib, "f")) {
          const variables = lib_1.lib[lib];
          if (!variables) {
            throw new Error(`Invalid value for lib provided: ${lib}`);
          }
          for (const [name, variable] of Object.entries(variables)) {
            globalScope.defineImplicitVariable(name, variable);
          }
        }
        globalScope.defineImplicitVariable("const", {
          eslintImplicitGlobalSetting: "readonly",
          isTypeVariable: true,
          isValueVariable: false
        });
      }
      /**
       * Searches for a variable named "name" in the upper scopes and adds a pseudo-reference from itself to itself
       */
      referenceInSomeUpperScope(name) {
        let scope = this.scopeManager.currentScope;
        while (scope) {
          const variable = scope.set.get(name);
          if (!variable) {
            scope = scope.upper;
            continue;
          }
          scope.referenceValue(variable.identifiers[0]);
          return true;
        }
        return false;
      }
      referenceJsxPragma() {
        if (__classPrivateFieldGet(this, _Referencer_jsxPragma, "f") == null || __classPrivateFieldGet(this, _Referencer_hasReferencedJsxFactory, "f")) {
          return;
        }
        __classPrivateFieldSet(this, _Referencer_hasReferencedJsxFactory, this.referenceInSomeUpperScope(__classPrivateFieldGet(this, _Referencer_jsxPragma, "f")), "f");
      }
      referenceJsxFragment() {
        if (__classPrivateFieldGet(this, _Referencer_jsxFragmentName, "f") == null || __classPrivateFieldGet(this, _Referencer_hasReferencedJsxFragmentFactory, "f")) {
          return;
        }
        __classPrivateFieldSet(this, _Referencer_hasReferencedJsxFragmentFactory, this.referenceInSomeUpperScope(__classPrivateFieldGet(this, _Referencer_jsxFragmentName, "f")), "f");
      }
      ///////////////////
      // Visit helpers //
      ///////////////////
      visitClass(node2) {
        ClassVisitor_1.ClassVisitor.visit(this, node2, __classPrivateFieldGet(this, _Referencer_emitDecoratorMetadata, "f"));
      }
      visitForIn(node2) {
        if (node2.left.type === types_1.AST_NODE_TYPES.VariableDeclaration && node2.left.kind !== "var") {
          this.scopeManager.nestForScope(node2);
        }
        if (node2.left.type === types_1.AST_NODE_TYPES.VariableDeclaration) {
          this.visit(node2.left);
          this.visitPattern(node2.left.declarations[0].id, (pattern) => {
            this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, node2.right, null, true);
          });
        } else {
          this.visitPattern(node2.left, (pattern, info) => {
            const maybeImplicitGlobal = !this.currentScope().isStrict ? {
              pattern,
              node: node2
            } : null;
            this.referencingDefaultValue(pattern, info.assignments, maybeImplicitGlobal, false);
            this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, node2.right, maybeImplicitGlobal, false);
          }, { processRightHandNodes: true });
        }
        this.visit(node2.right);
        this.visit(node2.body);
        this.close(node2);
      }
      visitFunctionParameterTypeAnnotation(node2) {
        switch (node2.type) {
          case types_1.AST_NODE_TYPES.AssignmentPattern:
            this.visitType(node2.left.typeAnnotation);
            break;
          case types_1.AST_NODE_TYPES.TSParameterProperty:
            this.visitFunctionParameterTypeAnnotation(node2.parameter);
            break;
          default:
            this.visitType(node2.typeAnnotation);
            break;
        }
      }
      visitFunction(node2) {
        if (node2.type === types_1.AST_NODE_TYPES.FunctionExpression) {
          if (node2.id) {
            this.scopeManager.nestFunctionExpressionNameScope(node2);
          }
        } else if (node2.id) {
          this.currentScope().defineIdentifier(node2.id, new definition_1.FunctionNameDefinition(node2.id, node2));
        }
        this.scopeManager.nestFunctionScope(node2, false);
        for (const param of node2.params) {
          this.visitPattern(param, (pattern, info) => {
            this.currentScope().defineIdentifier(pattern, new definition_1.ParameterDefinition(pattern, node2, info.rest));
            this.referencingDefaultValue(pattern, info.assignments, null, true);
          }, { processRightHandNodes: true });
          this.visitFunctionParameterTypeAnnotation(param);
          param.decorators.forEach((d) => this.visit(d));
        }
        this.visitType(node2.returnType);
        this.visitType(node2.typeParameters);
        if (node2.body) {
          if (node2.body.type === types_1.AST_NODE_TYPES.BlockStatement) {
            this.visitChildren(node2.body);
          } else {
            this.visit(node2.body);
          }
        }
        this.close(node2);
      }
      visitProperty(node2) {
        if (node2.computed) {
          this.visit(node2.key);
        }
        this.visit(node2.value);
      }
      visitType(node2) {
        if (!node2) {
          return;
        }
        TypeVisitor_1.TypeVisitor.visit(this, node2);
      }
      visitTypeAssertion(node2) {
        this.visit(node2.expression);
        this.visitType(node2.typeAnnotation);
      }
      /////////////////////
      // Visit selectors //
      /////////////////////
      ArrowFunctionExpression(node2) {
        this.visitFunction(node2);
      }
      AssignmentExpression(node2) {
        let left = node2.left;
        switch (left.type) {
          case types_1.AST_NODE_TYPES.TSAsExpression:
          case types_1.AST_NODE_TYPES.TSTypeAssertion:
            this.visitType(left.typeAnnotation);
          case types_1.AST_NODE_TYPES.TSNonNullExpression:
            left = left.expression;
        }
        if (PatternVisitor_1.PatternVisitor.isPattern(left)) {
          if (node2.operator === "=") {
            this.visitPattern(left, (pattern, info) => {
              const maybeImplicitGlobal = !this.currentScope().isStrict ? {
                pattern,
                node: node2
              } : null;
              this.referencingDefaultValue(pattern, info.assignments, maybeImplicitGlobal, false);
              this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, node2.right, maybeImplicitGlobal, false);
            }, { processRightHandNodes: true });
          } else if (left.type === types_1.AST_NODE_TYPES.Identifier) {
            this.currentScope().referenceValue(left, Reference_1.ReferenceFlag.ReadWrite, node2.right);
          }
        } else {
          this.visit(left);
        }
        this.visit(node2.right);
      }
      BlockStatement(node2) {
        this.scopeManager.nestBlockScope(node2);
        this.visitChildren(node2);
        this.close(node2);
      }
      BreakStatement() {
      }
      CallExpression(node2) {
        this.visitChildren(node2, ["typeArguments"]);
        this.visitType(node2.typeArguments);
      }
      CatchClause(node2) {
        this.scopeManager.nestCatchScope(node2);
        if (node2.param) {
          const param = node2.param;
          this.visitPattern(param, (pattern, info) => {
            this.currentScope().defineIdentifier(pattern, new definition_1.CatchClauseDefinition(param, node2));
            this.referencingDefaultValue(pattern, info.assignments, null, true);
          }, { processRightHandNodes: true });
        }
        this.visit(node2.body);
        this.close(node2);
      }
      ClassExpression(node2) {
        this.visitClass(node2);
      }
      ClassDeclaration(node2) {
        this.visitClass(node2);
      }
      ContinueStatement() {
      }
      ExportAllDeclaration() {
      }
      ExportDefaultDeclaration(node2) {
        if (node2.declaration.type === types_1.AST_NODE_TYPES.Identifier) {
          ExportVisitor_1.ExportVisitor.visit(this, node2);
        } else {
          this.visit(node2.declaration);
        }
      }
      ExportNamedDeclaration(node2) {
        if (node2.declaration) {
          this.visit(node2.declaration);
        } else {
          ExportVisitor_1.ExportVisitor.visit(this, node2);
        }
      }
      ForInStatement(node2) {
        this.visitForIn(node2);
      }
      ForOfStatement(node2) {
        this.visitForIn(node2);
      }
      ForStatement(node2) {
        if (node2.init && node2.init.type === types_1.AST_NODE_TYPES.VariableDeclaration && node2.init.kind !== "var") {
          this.scopeManager.nestForScope(node2);
        }
        this.visitChildren(node2);
        this.close(node2);
      }
      FunctionDeclaration(node2) {
        this.visitFunction(node2);
      }
      FunctionExpression(node2) {
        this.visitFunction(node2);
      }
      Identifier(node2) {
        this.currentScope().referenceValue(node2);
        this.visitType(node2.typeAnnotation);
      }
      ImportDeclaration(node2) {
        (0, assert_1.assert)(this.scopeManager.isModule(), "ImportDeclaration should appear when the mode is ES6 and in the module context.");
        ImportVisitor_1.ImportVisitor.visit(this, node2);
      }
      JSXAttribute(node2) {
        this.visit(node2.value);
      }
      JSXClosingElement() {
      }
      JSXFragment(node2) {
        this.referenceJsxPragma();
        this.referenceJsxFragment();
        this.visitChildren(node2);
      }
      JSXIdentifier(node2) {
        this.currentScope().referenceValue(node2);
      }
      JSXMemberExpression(node2) {
        if (node2.object.type !== types_1.AST_NODE_TYPES.JSXIdentifier) {
          this.visit(node2.object);
        } else {
          if (node2.object.name !== "this") {
            this.visit(node2.object);
          }
        }
      }
      JSXOpeningElement(node2) {
        this.referenceJsxPragma();
        if (node2.name.type === types_1.AST_NODE_TYPES.JSXIdentifier) {
          if (node2.name.name[0].toUpperCase() === node2.name.name[0] || node2.name.name === "this") {
            this.visit(node2.name);
          }
        } else {
          this.visit(node2.name);
        }
        this.visitType(node2.typeArguments);
        for (const attr of node2.attributes) {
          this.visit(attr);
        }
      }
      LabeledStatement(node2) {
        this.visit(node2.body);
      }
      MemberExpression(node2) {
        this.visit(node2.object);
        if (node2.computed) {
          this.visit(node2.property);
        }
      }
      MetaProperty() {
      }
      NewExpression(node2) {
        this.visitChildren(node2, ["typeArguments"]);
        this.visitType(node2.typeArguments);
      }
      PrivateIdentifier() {
      }
      Program(node2) {
        const globalScope = this.scopeManager.nestGlobalScope(node2);
        this.populateGlobalsFromLib(globalScope);
        if (this.scopeManager.isGlobalReturn()) {
          this.currentScope().isStrict = false;
          this.scopeManager.nestFunctionScope(node2, false);
        }
        if (this.scopeManager.isModule()) {
          this.scopeManager.nestModuleScope(node2);
        }
        if (this.scopeManager.isImpliedStrict()) {
          this.currentScope().isStrict = true;
        }
        this.visitChildren(node2);
        this.close(node2);
      }
      Property(node2) {
        this.visitProperty(node2);
      }
      SwitchStatement(node2) {
        this.visit(node2.discriminant);
        this.scopeManager.nestSwitchScope(node2);
        for (const switchCase of node2.cases) {
          this.visit(switchCase);
        }
        this.close(node2);
      }
      TaggedTemplateExpression(node2) {
        this.visit(node2.tag);
        this.visit(node2.quasi);
        this.visitType(node2.typeArguments);
      }
      TSAsExpression(node2) {
        this.visitTypeAssertion(node2);
      }
      TSDeclareFunction(node2) {
        this.visitFunction(node2);
      }
      TSImportEqualsDeclaration(node2) {
        this.currentScope().defineIdentifier(node2.id, new definition_1.ImportBindingDefinition(node2.id, node2, node2));
        if (node2.moduleReference.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
          this.visit(node2.moduleReference.left);
        } else {
          this.visit(node2.moduleReference);
        }
      }
      TSEmptyBodyFunctionExpression(node2) {
        this.visitFunction(node2);
      }
      TSEnumDeclaration(node2) {
        this.currentScope().defineIdentifier(node2.id, new definition_1.TSEnumNameDefinition(node2.id, node2));
        this.scopeManager.nestTSEnumScope(node2);
        this.currentScope().defineIdentifier(node2.id, new definition_1.TSEnumNameDefinition(node2.id, node2));
        for (const member of node2.members) {
          if (member.id.type === types_1.AST_NODE_TYPES.Literal && typeof member.id.value === "string") {
            const name = member.id;
            this.currentScope().defineLiteralIdentifier(name, new definition_1.TSEnumMemberDefinition(name, member));
          } else if (!member.computed && member.id.type === types_1.AST_NODE_TYPES.Identifier) {
            this.currentScope().defineIdentifier(member.id, new definition_1.TSEnumMemberDefinition(member.id, member));
          }
          this.visit(member.initializer);
        }
        this.close(node2);
      }
      TSInstantiationExpression(node2) {
        this.visitChildren(node2, ["typeArguments"]);
        this.visitType(node2.typeArguments);
      }
      TSInterfaceDeclaration(node2) {
        this.visitType(node2);
      }
      TSModuleDeclaration(node2) {
        if (node2.id.type === types_1.AST_NODE_TYPES.Identifier && !node2.global) {
          this.currentScope().defineIdentifier(node2.id, new definition_1.TSModuleNameDefinition(node2.id, node2));
        }
        this.scopeManager.nestTSModuleScope(node2);
        this.visit(node2.body);
        this.close(node2);
      }
      TSSatisfiesExpression(node2) {
        this.visitTypeAssertion(node2);
      }
      TSTypeAliasDeclaration(node2) {
        this.visitType(node2);
      }
      TSTypeAssertion(node2) {
        this.visitTypeAssertion(node2);
      }
      UpdateExpression(node2) {
        if (PatternVisitor_1.PatternVisitor.isPattern(node2.argument)) {
          this.visitPattern(node2.argument, (pattern) => {
            this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.ReadWrite, null);
          });
        } else {
          this.visitChildren(node2);
        }
      }
      VariableDeclaration(node2) {
        const variableTargetScope = node2.kind === "var" ? this.currentScope().variableScope : this.currentScope();
        for (const decl of node2.declarations) {
          const init = decl.init;
          this.visitPattern(decl.id, (pattern, info) => {
            variableTargetScope.defineIdentifier(pattern, new definition_1.VariableDefinition(pattern, decl, node2));
            this.referencingDefaultValue(pattern, info.assignments, null, true);
            if (init) {
              this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, init, null, true);
            }
          }, { processRightHandNodes: true });
          this.visit(decl.init);
          this.visitType(decl.id.typeAnnotation);
        }
      }
      WithStatement(node2) {
        this.visit(node2.object);
        this.scopeManager.nestWithScope(node2);
        this.visit(node2.body);
        this.close(node2);
      }
      ImportAttribute() {
      }
    };
    exports.Referencer = Referencer;
    _Referencer_jsxPragma = /* @__PURE__ */ new WeakMap(), _Referencer_jsxFragmentName = /* @__PURE__ */ new WeakMap(), _Referencer_hasReferencedJsxFactory = /* @__PURE__ */ new WeakMap(), _Referencer_hasReferencedJsxFragmentFactory = /* @__PURE__ */ new WeakMap(), _Referencer_lib = /* @__PURE__ */ new WeakMap(), _Referencer_emitDecoratorMetadata = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/index.js
var require_referencer = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/referencer/index.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Referencer = void 0;
    var Referencer_1 = require_Referencer();
    Object.defineProperty(exports, "Referencer", { enumerable: true, get: function() {
      return Referencer_1.Referencer;
    } });
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ClassStaticBlockScope.js
var require_ClassStaticBlockScope = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/scope/ClassStaticBlockScope.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClassStaticBlockScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ClassStaticBlockScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.classStaticBlock, upperScope, block, false);
      }
    };
    exports.ClassStaticBlockScope = ClassStaticBlockScope;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/ScopeManager.js
var require_ScopeManager = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/ScopeManager.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ScopeManager_options;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScopeManager = void 0;
    var assert_1 = require_assert();
    var scope_1 = require_scope();
    var ClassFieldInitializerScope_1 = require_ClassFieldInitializerScope();
    var ClassStaticBlockScope_1 = require_ClassStaticBlockScope();
    var ScopeManager = class {
      get variables() {
        const variables = /* @__PURE__ */ new Set();
        function recurse(scope) {
          scope.variables.forEach((v) => variables.add(v));
          scope.childScopes.forEach(recurse);
        }
        this.scopes.forEach(recurse);
        return Array.from(variables).sort((a, b) => a.$id - b.$id);
      }
      constructor(options) {
        _ScopeManager_options.set(this, void 0);
        this.scopes = [];
        this.globalScope = null;
        this.nodeToScope = /* @__PURE__ */ new WeakMap();
        this.currentScope = null;
        __classPrivateFieldSet(this, _ScopeManager_options, options, "f");
        this.declaredVariables = /* @__PURE__ */ new WeakMap();
      }
      isGlobalReturn() {
        return __classPrivateFieldGet(this, _ScopeManager_options, "f").globalReturn === true;
      }
      isModule() {
        return __classPrivateFieldGet(this, _ScopeManager_options, "f").sourceType === "module";
      }
      isImpliedStrict() {
        return __classPrivateFieldGet(this, _ScopeManager_options, "f").impliedStrict === true;
      }
      isStrictModeSupported() {
        return true;
      }
      isES6() {
        return true;
      }
      /**
       * Get the variables that a given AST node defines. The gotten variables' `def[].node`/`def[].parent` property is the node.
       * If the node does not define any variable, this returns an empty array.
       * @param node An AST node to get their variables.
       */
      getDeclaredVariables(node2) {
        return this.declaredVariables.get(node2) ?? [];
      }
      /**
       * Get the scope of a given AST node. The gotten scope's `block` property is the node.
       * This method never returns `function-expression-name` scope. If the node does not have their scope, this returns `null`.
       *
       * @param node An AST node to get their scope.
       * @param inner If the node has multiple scopes, this returns the outermost scope normally.
       *                If `inner` is `true` then this returns the innermost scope.
       */
      acquire(node2, inner = false) {
        function predicate(testScope) {
          if (testScope.type === scope_1.ScopeType.function && testScope.functionExpressionScope) {
            return false;
          }
          return true;
        }
        const scopes = this.nodeToScope.get(node2);
        if (!scopes || scopes.length === 0) {
          return null;
        }
        if (scopes.length === 1) {
          return scopes[0];
        }
        if (inner) {
          for (let i = scopes.length - 1; i >= 0; --i) {
            const scope = scopes[i];
            if (predicate(scope)) {
              return scope;
            }
          }
          return null;
        }
        return scopes.find(predicate) ?? null;
      }
      nestScope(scope) {
        if (scope instanceof scope_1.GlobalScope) {
          (0, assert_1.assert)(this.currentScope == null);
          this.globalScope = scope;
        }
        this.currentScope = scope;
        return scope;
      }
      nestBlockScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.BlockScope(this, this.currentScope, node2));
      }
      nestCatchScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.CatchScope(this, this.currentScope, node2));
      }
      nestClassScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ClassScope(this, this.currentScope, node2));
      }
      nestClassFieldInitializerScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new ClassFieldInitializerScope_1.ClassFieldInitializerScope(this, this.currentScope, node2));
      }
      nestClassStaticBlockScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new ClassStaticBlockScope_1.ClassStaticBlockScope(this, this.currentScope, node2));
      }
      nestConditionalTypeScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ConditionalTypeScope(this, this.currentScope, node2));
      }
      nestForScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ForScope(this, this.currentScope, node2));
      }
      nestFunctionExpressionNameScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.FunctionExpressionNameScope(this, this.currentScope, node2));
      }
      nestFunctionScope(node2, isMethodDefinition) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.FunctionScope(this, this.currentScope, node2, isMethodDefinition));
      }
      nestFunctionTypeScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.FunctionTypeScope(this, this.currentScope, node2));
      }
      nestGlobalScope(node2) {
        return this.nestScope(new scope_1.GlobalScope(this, node2));
      }
      nestMappedTypeScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.MappedTypeScope(this, this.currentScope, node2));
      }
      nestModuleScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ModuleScope(this, this.currentScope, node2));
      }
      nestSwitchScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.SwitchScope(this, this.currentScope, node2));
      }
      nestTSEnumScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.TSEnumScope(this, this.currentScope, node2));
      }
      nestTSModuleScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.TSModuleScope(this, this.currentScope, node2));
      }
      nestTypeScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.TypeScope(this, this.currentScope, node2));
      }
      nestWithScope(node2) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.WithScope(this, this.currentScope, node2));
      }
    };
    exports.ScopeManager = ScopeManager;
    _ScopeManager_options = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/analyze.js
var require_analyze = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/analyze.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.analyze = void 0;
    var visitor_keys_1 = require_dist2();
    var referencer_1 = require_referencer();
    var ScopeManager_1 = require_ScopeManager();
    var DEFAULT_OPTIONS = {
      childVisitorKeys: visitor_keys_1.visitorKeys,
      globalReturn: false,
      impliedStrict: false,
      jsxPragma: "React",
      jsxFragmentName: null,
      lib: ["es2018"],
      sourceType: "script",
      emitDecoratorMetadata: false
    };
    function analyze(tree, providedOptions) {
      const options = {
        childVisitorKeys: providedOptions?.childVisitorKeys ?? DEFAULT_OPTIONS.childVisitorKeys,
        globalReturn: providedOptions?.globalReturn ?? DEFAULT_OPTIONS.globalReturn,
        impliedStrict: providedOptions?.impliedStrict ?? DEFAULT_OPTIONS.impliedStrict,
        jsxPragma: providedOptions?.jsxPragma === void 0 ? DEFAULT_OPTIONS.jsxPragma : providedOptions.jsxPragma,
        jsxFragmentName: providedOptions?.jsxFragmentName ?? DEFAULT_OPTIONS.jsxFragmentName,
        sourceType: providedOptions?.sourceType ?? DEFAULT_OPTIONS.sourceType,
        lib: providedOptions?.lib ?? ["esnext"],
        emitDecoratorMetadata: providedOptions?.emitDecoratorMetadata ?? DEFAULT_OPTIONS.emitDecoratorMetadata
      };
      options.lib = options.lib.map((l) => l.toLowerCase());
      const scopeManager = new ScopeManager_1.ScopeManager(options);
      const referencer = new referencer_1.Referencer(options, scopeManager);
      referencer.visit(tree);
      return scopeManager;
    }
    exports.analyze = analyze;
  }
});

// node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+scope-manager@6.19.0/node_modules/@typescript-eslint/scope-manager/dist/index.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScopeManager = exports.PatternVisitor = exports.Visitor = exports.Reference = exports.analyze = void 0;
    var analyze_1 = require_analyze();
    Object.defineProperty(exports, "analyze", { enumerable: true, get: function() {
      return analyze_1.analyze;
    } });
    __exportStar(require_definition(), exports);
    var Reference_1 = require_Reference();
    Object.defineProperty(exports, "Reference", { enumerable: true, get: function() {
      return Reference_1.Reference;
    } });
    var Visitor_1 = require_Visitor();
    Object.defineProperty(exports, "Visitor", { enumerable: true, get: function() {
      return Visitor_1.Visitor;
    } });
    var PatternVisitor_1 = require_PatternVisitor();
    Object.defineProperty(exports, "PatternVisitor", { enumerable: true, get: function() {
      return PatternVisitor_1.PatternVisitor;
    } });
    __exportStar(require_scope(), exports);
    var ScopeManager_1 = require_ScopeManager();
    Object.defineProperty(exports, "ScopeManager", { enumerable: true, get: function() {
      return ScopeManager_1.ScopeManager;
    } });
    __exportStar(require_variable(), exports);
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/Scope.js
var require_Scope2 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/Scope.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scope = void 0;
    var scopeManager = __importStar(require_dist3());
    var Scope;
    (function(Scope2) {
      Scope2.ScopeType = scopeManager.ScopeType;
      Scope2.DefinitionType = scopeManager.DefinitionType;
    })(Scope || (exports.Scope = Scope = {}));
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/SourceCode.js
var require_SourceCode = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/SourceCode.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SourceCode = void 0;
    var eslint_1 = require("eslint");
    var SourceCode = class extends eslint_1.SourceCode {
    };
    exports.SourceCode = SourceCode;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/index.js
var require_ts_eslint = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-eslint/index.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_AST(), exports);
    __exportStar(require_CLIEngine(), exports);
    __exportStar(require_Config(), exports);
    __exportStar(require_ESLint(), exports);
    __exportStar(require_Linter(), exports);
    __exportStar(require_Parser(), exports);
    __exportStar(require_ParserOptions(), exports);
    __exportStar(require_Processor(), exports);
    __exportStar(require_Rule(), exports);
    __exportStar(require_RuleTester(), exports);
    __exportStar(require_Scope2(), exports);
    __exportStar(require_SourceCode(), exports);
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-utils/isArray.js
var require_isArray = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-utils/isArray.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isArray = void 0;
    function isArray(arg) {
      return Array.isArray(arg);
    }
    exports.isArray = isArray;
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-utils/index.js
var require_ts_utils = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/ts-utils/index.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_isArray(), exports);
  }
});

// node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/index.js
var require_dist4 = __commonJS({
  "node_modules/.pnpm/@typescript-eslint+utils@6.19.0_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/@typescript-eslint/utils/dist/index.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TSUtils = exports.TSESLint = exports.JSONSchema = exports.ESLintUtils = exports.ASTUtils = void 0;
    var ASTUtils = __importStar(require_ast_utils());
    exports.ASTUtils = ASTUtils;
    var ESLintUtils = __importStar(require_eslint_utils3());
    exports.ESLintUtils = ESLintUtils;
    var JSONSchema = __importStar(require_json_schema());
    exports.JSONSchema = JSONSchema;
    var TSESLint = __importStar(require_ts_eslint());
    exports.TSESLint = TSESLint;
    var TSUtils = __importStar(require_ts_utils());
    exports.TSUtils = TSUtils;
    __exportStar(require_ts_estree2(), exports);
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/utils.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.jsxGetProp = exports.jsxHasProp = exports.jsxGetAllProps = exports.jsxPropName = exports.removeSpecifier = exports.insertImports = exports.appendImports = exports.trackImports = exports.getCommentAfter = exports.getCommentBefore = exports.findInScope = exports.getFunctionName = exports.isJSXElementOrFragment = exports.isProgramOrFunctionNode = exports.isFunctionNode = exports.ignoreTransparentWrappers = exports.trace = exports.findParent = exports.find = exports.formatList = exports.isPropsByName = exports.isDOMElementName = void 0;
    var utils_1 = require_dist4();
    var { findVariable } = utils_1.ASTUtils;
    var domElementRegex = /^[a-z]/;
    var isDOMElementName = (name) => domElementRegex.test(name);
    exports.isDOMElementName = isDOMElementName;
    var propsRegex = /[pP]rops/;
    var isPropsByName = (name) => propsRegex.test(name);
    exports.isPropsByName = isPropsByName;
    var formatList = (strings) => {
      if (strings.length === 0) {
        return "";
      } else if (strings.length === 1) {
        return `'${strings[0]}'`;
      } else if (strings.length === 2) {
        return `'${strings[0]}' and '${strings[1]}'`;
      } else {
        const last = strings.length - 1;
        return `${strings.slice(0, last).map((s) => `'${s}'`).join(", ")}, and '${strings[last]}'`;
      }
    };
    exports.formatList = formatList;
    var find = (node2, predicate) => {
      let n = node2;
      while (n) {
        const result = predicate(n);
        if (result) {
          return n;
        }
        n = n.parent;
      }
      return null;
    };
    exports.find = find;
    function findParent(node2, predicate) {
      return node2.parent ? (0, exports.find)(node2.parent, predicate) : null;
    }
    exports.findParent = findParent;
    function trace(node2, initialScope) {
      if (node2.type === "Identifier") {
        const variable = findVariable(initialScope, node2);
        if (!variable)
          return node2;
        const def = variable.defs[0];
        switch (def?.type) {
          case "FunctionName":
          case "ClassName":
          case "ImportBinding":
            return def.node;
          case "Variable":
            if ((def.node.parent.kind === "const" || variable.references.every((ref) => ref.init || ref.isReadOnly())) && def.node.id.type === "Identifier" && def.node.init) {
              return trace(def.node.init, initialScope);
            }
        }
      }
      return node2;
    }
    exports.trace = trace;
    function ignoreTransparentWrappers(node2, up = false) {
      if (node2.type === "TSAsExpression" || node2.type === "TSNonNullExpression" || node2.type === "TSSatisfiesExpression") {
        const next = up ? node2.parent : node2.expression;
        if (next) {
          return ignoreTransparentWrappers(next, up);
        }
      }
      return node2;
    }
    exports.ignoreTransparentWrappers = ignoreTransparentWrappers;
    var FUNCTION_TYPES = ["FunctionExpression", "ArrowFunctionExpression", "FunctionDeclaration"];
    var isFunctionNode = (node2) => !!node2 && FUNCTION_TYPES.includes(node2.type);
    exports.isFunctionNode = isFunctionNode;
    var PROGRAM_OR_FUNCTION_TYPES = ["Program"].concat(FUNCTION_TYPES);
    var isProgramOrFunctionNode = (node2) => !!node2 && PROGRAM_OR_FUNCTION_TYPES.includes(node2.type);
    exports.isProgramOrFunctionNode = isProgramOrFunctionNode;
    var isJSXElementOrFragment = (node2) => node2?.type === "JSXElement" || node2?.type === "JSXFragment";
    exports.isJSXElementOrFragment = isJSXElementOrFragment;
    var getFunctionName = (node2) => {
      if ((node2.type === "FunctionDeclaration" || node2.type === "FunctionExpression") && node2.id != null) {
        return node2.id.name;
      }
      if (node2.parent?.type === "VariableDeclarator" && node2.parent.id.type === "Identifier") {
        return node2.parent.id.name;
      }
      return null;
    };
    exports.getFunctionName = getFunctionName;
    function findInScope(node2, scope, predicate) {
      const found = (0, exports.find)(node2, (node3) => node3 === scope || predicate(node3));
      return found === scope && !predicate(node2) ? null : found;
    }
    exports.findInScope = findInScope;
    var getCommentBefore = (node2, sourceCode) => sourceCode.getCommentsBefore(node2).find((comment) => comment.loc.end.line >= node2.loc.start.line - 1);
    exports.getCommentBefore = getCommentBefore;
    var getCommentAfter = (node2, sourceCode) => sourceCode.getCommentsAfter(node2).find((comment) => comment.loc.start.line === node2.loc.end.line);
    exports.getCommentAfter = getCommentAfter;
    var trackImports = (fromModule = /^solid-js(?:\/?|\b)/) => {
      const importMap = /* @__PURE__ */ new Map();
      const handleImportDeclaration = (node2) => {
        if (fromModule.test(node2.source.value)) {
          for (const specifier of node2.specifiers) {
            if (specifier.type === "ImportSpecifier") {
              importMap.set(specifier.imported.name, specifier.local.name);
            }
          }
        }
      };
      const matchImport = (imports2, str) => {
        const importArr = Array.isArray(imports2) ? imports2 : [imports2];
        return importArr.find((i) => importMap.get(i) === str);
      };
      return { matchImport, handleImportDeclaration };
    };
    exports.trackImports = trackImports;
    function appendImports(fixer, sourceCode, importNode, identifiers) {
      const identifiersString = identifiers.join(", ");
      const reversedSpecifiers = importNode.specifiers.slice().reverse();
      const lastSpecifier = reversedSpecifiers.find((s) => s.type === "ImportSpecifier");
      if (lastSpecifier) {
        return fixer.insertTextAfter(lastSpecifier, `, ${identifiersString}`);
      }
      const otherSpecifier = importNode.specifiers.find((s) => s.type === "ImportDefaultSpecifier" || s.type === "ImportNamespaceSpecifier");
      if (otherSpecifier) {
        return fixer.insertTextAfter(otherSpecifier, `, { ${identifiersString} }`);
      }
      if (importNode.specifiers.length === 0) {
        const [importToken, maybeBrace] = sourceCode.getFirstTokens(importNode, { count: 2 });
        if (maybeBrace?.value === "{") {
          return fixer.insertTextAfter(maybeBrace, ` ${identifiersString} `);
        } else {
          return importToken ? fixer.insertTextAfter(importToken, ` { ${identifiersString} } from`) : null;
        }
      }
      return null;
    }
    exports.appendImports = appendImports;
    function insertImports(fixer, sourceCode, source, identifiers, aboveImport, isType = false) {
      const identifiersString = identifiers.join(", ");
      const programNode = sourceCode.ast;
      const firstImport = aboveImport ?? programNode.body.find((n) => n.type === "ImportDeclaration");
      if (firstImport) {
        return fixer.insertTextBeforeRange(((0, exports.getCommentBefore)(firstImport, sourceCode) ?? firstImport).range, `import ${isType ? "type " : ""}{ ${identifiersString} } from "${source}";
`);
      }
      return fixer.insertTextBeforeRange([0, 0], `import ${isType ? "type " : ""}{ ${identifiersString} } from "${source}";
`);
    }
    exports.insertImports = insertImports;
    function removeSpecifier(fixer, sourceCode, specifier, pure = true) {
      const declaration = specifier.parent;
      if (declaration.specifiers.length === 1 && pure) {
        return fixer.remove(declaration);
      }
      const maybeComma = sourceCode.getTokenAfter(specifier);
      if (maybeComma?.value === ",") {
        return fixer.removeRange([specifier.range[0], maybeComma.range[1]]);
      }
      return fixer.remove(specifier);
    }
    exports.removeSpecifier = removeSpecifier;
    function jsxPropName(prop) {
      if (prop.name.type === "JSXNamespacedName") {
        return `${prop.name.namespace.name}:${prop.name.name.name}`;
      }
      return prop.name.name;
    }
    exports.jsxPropName = jsxPropName;
    function* jsxGetAllProps(props) {
      for (const attr of props) {
        if (attr.type === "JSXSpreadAttribute" && attr.argument.type === "ObjectExpression") {
          for (const property of attr.argument.properties) {
            if (property.type === "Property") {
              if (property.key.type === "Identifier") {
                yield [property.key.name, property.key];
              } else if (property.key.type === "Literal") {
                yield [String(property.key.value), property.key];
              }
            }
          }
        } else if (attr.type === "JSXAttribute") {
          yield [jsxPropName(attr), attr.name];
        }
      }
    }
    exports.jsxGetAllProps = jsxGetAllProps;
    function jsxHasProp(props, prop) {
      for (const [p] of jsxGetAllProps(props)) {
        if (p === prop)
          return true;
      }
      return false;
    }
    exports.jsxHasProp = jsxHasProp;
    function jsxGetProp(props, prop) {
      return props.find((attribute) => attribute.type !== "JSXSpreadAttribute" && prop === jsxPropName(attribute));
    }
    exports.jsxGetProp = jsxGetProp;
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/components-return-once.js
var require_components_return_once = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/components-return-once.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var utils_2 = require_utils();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    var isNothing = (node2) => {
      if (!node2) {
        return true;
      }
      switch (node2.type) {
        case "Literal":
          return [null, void 0, false, ""].includes(node2.value);
        case "JSXFragment":
          return !node2.children || node2.children.every(isNothing);
        default:
          return false;
      }
    };
    var getLineLength = (loc) => loc.end.line - loc.start.line + 1;
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Disallow early returns in components. Solid components only run once, and so conditionals should be inside JSX.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/components-return-once.md"
        },
        fixable: "code",
        schema: [],
        messages: {
          noEarlyReturn: "Solid components run once, so an early return breaks reactivity. Move the condition inside a JSX element, such as a fragment or <Show />.",
          noConditionalReturn: "Solid components run once, so a conditional return breaks reactivity. Move the condition inside a JSX element, such as a fragment or <Show />."
        }
      },
      defaultOptions: [],
      create(context) {
        const functionStack = [];
        const putIntoJSX = (node2) => {
          const text = context.getSourceCode().getText(node2);
          return node2.type === "JSXElement" || node2.type === "JSXFragment" ? text : `{${text}}`;
        };
        const currentFunction = () => functionStack[functionStack.length - 1];
        const onFunctionEnter = (node2) => {
          let lastReturn;
          if (node2.body.type === "BlockStatement") {
            const { length } = node2.body.body;
            const last = length && node2.body.body[length - 1];
            if (last && last.type === "ReturnStatement") {
              lastReturn = last;
            }
          }
          functionStack.push({ isComponent: false, lastReturn, earlyReturns: [] });
        };
        const onFunctionExit = (node2) => {
          if ((0, utils_2.getFunctionName)(node2)?.match(/^[a-z]/) || node2.parent?.type === "JSXExpressionContainer" || node2.parent?.type === "CallExpression" && node2.parent.arguments.some((n) => n === node2) && !node2.parent.callee.name?.match(/^[A-Z]/)) {
            currentFunction().isComponent = false;
          }
          if (currentFunction().isComponent) {
            currentFunction().earlyReturns.forEach((earlyReturn) => {
              context.report({
                node: earlyReturn,
                messageId: "noEarlyReturn"
              });
            });
            const argument = currentFunction().lastReturn?.argument;
            if (argument?.type === "ConditionalExpression") {
              const sourceCode = context.getSourceCode();
              context.report({
                node: argument.parent,
                messageId: "noConditionalReturn",
                fix: (fixer) => {
                  const { test: test2, consequent, alternate } = argument;
                  const conditions = [{ test: test2, consequent }];
                  let fallback = alternate;
                  while (fallback.type === "ConditionalExpression") {
                    conditions.push({ test: fallback.test, consequent: fallback.consequent });
                    fallback = fallback.alternate;
                  }
                  if (conditions.length >= 2) {
                    const fallbackStr = !isNothing(fallback) ? ` fallback={${sourceCode.getText(fallback)}}` : "";
                    return fixer.replaceText(argument, `<Switch${fallbackStr}>
${conditions.map(({ test: test3, consequent: consequent2 }) => `<Match when={${sourceCode.getText(test3)}}>${putIntoJSX(consequent2)}</Match>`).join("\n")}
</Switch>`);
                  }
                  if (isNothing(consequent)) {
                    return fixer.replaceText(argument, `<Show when={!(${sourceCode.getText(test2)})}>${putIntoJSX(alternate)}</Show>`);
                  }
                  if (isNothing(fallback) || getLineLength(consequent.loc) >= getLineLength(alternate.loc) * 1.5) {
                    const fallbackStr = !isNothing(fallback) ? ` fallback={${sourceCode.getText(fallback)}}` : "";
                    return fixer.replaceText(argument, `<Show when={${sourceCode.getText(test2)}}${fallbackStr}>${putIntoJSX(consequent)}</Show>`);
                  }
                  return fixer.replaceText(argument, `<>${putIntoJSX(argument)}</>`);
                }
              });
            } else if (argument?.type === "LogicalExpression")
              if (argument.operator === "&&") {
                const sourceCode = context.getSourceCode();
                context.report({
                  node: argument,
                  messageId: "noConditionalReturn",
                  fix: (fixer) => {
                    const { left: test2, right: consequent } = argument;
                    return fixer.replaceText(argument, `<Show when={${sourceCode.getText(test2)}}>${putIntoJSX(consequent)}</Show>`);
                  }
                });
              } else {
                context.report({
                  node: argument,
                  messageId: "noConditionalReturn"
                });
              }
          }
          functionStack.pop();
        };
        return {
          FunctionDeclaration: onFunctionEnter,
          FunctionExpression: onFunctionEnter,
          ArrowFunctionExpression: onFunctionEnter,
          "FunctionDeclaration:exit": onFunctionExit,
          "FunctionExpression:exit": onFunctionExit,
          "ArrowFunctionExpression:exit": onFunctionExit,
          JSXElement() {
            if (functionStack.length) {
              currentFunction().isComponent = true;
            }
          },
          JSXFragment() {
            if (functionStack.length) {
              currentFunction().isComponent = true;
            }
          },
          ReturnStatement(node2) {
            if (functionStack.length && node2 !== currentFunction().lastReturn) {
              currentFunction().earlyReturns.push(node2);
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/event-handlers.js
var require_event_handlers = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/event-handlers.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var utils_2 = require_utils();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    var { getStaticValue } = utils_1.ASTUtils;
    var COMMON_EVENTS = [
      "onAnimationEnd",
      "onAnimationIteration",
      "onAnimationStart",
      "onBeforeInput",
      "onBlur",
      "onChange",
      "onClick",
      "onContextMenu",
      "onCopy",
      "onCut",
      "onDblClick",
      "onDrag",
      "onDragEnd",
      "onDragEnter",
      "onDragExit",
      "onDragLeave",
      "onDragOver",
      "onDragStart",
      "onDrop",
      "onError",
      "onFocus",
      "onFocusIn",
      "onFocusOut",
      "onGotPointerCapture",
      "onInput",
      "onInvalid",
      "onKeyDown",
      "onKeyPress",
      "onKeyUp",
      "onLoad",
      "onLostPointerCapture",
      "onMouseDown",
      "onMouseEnter",
      "onMouseLeave",
      "onMouseMove",
      "onMouseOut",
      "onMouseOver",
      "onMouseUp",
      "onPaste",
      "onPointerCancel",
      "onPointerDown",
      "onPointerEnter",
      "onPointerLeave",
      "onPointerMove",
      "onPointerOut",
      "onPointerOver",
      "onPointerUp",
      "onReset",
      "onScroll",
      "onSelect",
      "onSubmit",
      "onToggle",
      "onTouchCancel",
      "onTouchEnd",
      "onTouchMove",
      "onTouchStart",
      "onTransitionEnd",
      "onWheel"
    ];
    var COMMON_EVENTS_MAP = new Map(function* () {
      for (const event of COMMON_EVENTS) {
        yield [event.toLowerCase(), event];
      }
    }());
    var NONSTANDARD_EVENTS_MAP = {
      ondoubleclick: "onDblClick"
    };
    var isCommonHandlerName = (lowercaseHandlerName) => COMMON_EVENTS_MAP.has(lowercaseHandlerName);
    var getCommonEventHandlerName = (lowercaseHandlerName) => COMMON_EVENTS_MAP.get(lowercaseHandlerName);
    var isNonstandardEventName = (lowercaseEventName) => Boolean(NONSTANDARD_EVENTS_MAP[lowercaseEventName]);
    var getStandardEventHandlerName = (lowercaseEventName) => NONSTANDARD_EVENTS_MAP[lowercaseEventName];
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Enforce naming DOM element event handlers consistently and prevent Solid's analysis from misunderstanding whether a prop should be an event handler.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/event-handlers.md"
        },
        fixable: "code",
        hasSuggestions: true,
        schema: [
          {
            type: "object",
            properties: {
              ignoreCase: {
                type: "boolean",
                description: "if true, don't warn on ambiguously named event handlers like `onclick` or `onchange`",
                default: false
              },
              warnOnSpread: {
                type: "boolean",
                description: "if true, warn when spreading event handlers onto JSX. Enable for Solid < v1.6.",
                default: false
              }
            },
            additionalProperties: false
          }
        ],
        messages: {
          "detected-attr": 'The {{name}} prop is named as an event handler (starts with "on"), but Solid knows its value ({{staticValue}}) is a string or number, so it will be treated as an attribute. If this is intentional, name this prop attr:{{name}}.',
          naming: "The {{name}} prop is ambiguous. If it is an event handler, change it to {{handlerName}}. If it is an attribute, change it to {{attrName}}.",
          capitalization: "The {{name}} prop should be renamed to {{fixedName}} for readability.",
          nonstandard: "The {{name}} prop should be renamed to {{fixedName}}, because it's not a standard event handler.",
          "make-handler": "Change the {{name}} prop to {{handlerName}}.",
          "make-attr": "Change the {{name}} prop to {{attrName}}.",
          "spread-handler": "The {{name}} prop should be added as a JSX attribute, not spread in. Solid doesn't add listeners when spreading into JSX."
        }
      },
      defaultOptions: [],
      create(context) {
        const sourceCode = context.getSourceCode();
        return {
          JSXAttribute(node2) {
            const openingElement = node2.parent;
            if (openingElement.name.type !== "JSXIdentifier" || !(0, utils_2.isDOMElementName)(openingElement.name.name)) {
              return;
            }
            if (node2.name.type === "JSXNamespacedName") {
              return;
            }
            const { name } = node2.name;
            if (!/^on[a-zA-Z]/.test(name)) {
              return;
            }
            let staticValue = null;
            if (node2.value?.type === "JSXExpressionContainer" && node2.value.expression.type !== "JSXEmptyExpression" && node2.value.expression.type !== "ArrayExpression" && (staticValue = getStaticValue(node2.value.expression, context.getScope())) !== null && (typeof staticValue.value === "string" || typeof staticValue.value === "number")) {
              context.report({
                node: node2,
                messageId: "detected-attr",
                data: {
                  name,
                  staticValue: staticValue.value
                }
              });
            } else if (node2.value === null || node2.value?.type === "Literal") {
              context.report({
                node: node2,
                messageId: "detected-attr",
                data: {
                  name,
                  staticValue: node2.value !== null ? node2.value.value : true
                }
              });
            } else if (!context.options[0]?.ignoreCase) {
              const lowercaseHandlerName = name.toLowerCase();
              if (isNonstandardEventName(lowercaseHandlerName)) {
                const fixedName = getStandardEventHandlerName(lowercaseHandlerName);
                context.report({
                  node: node2.name,
                  messageId: "nonstandard",
                  data: { name, fixedName },
                  fix: (fixer) => fixer.replaceText(node2.name, fixedName)
                });
              } else if (isCommonHandlerName(lowercaseHandlerName)) {
                const fixedName = getCommonEventHandlerName(lowercaseHandlerName);
                if (fixedName !== name) {
                  context.report({
                    node: node2.name,
                    messageId: "capitalization",
                    data: { name, fixedName },
                    fix: (fixer) => fixer.replaceText(node2.name, fixedName)
                  });
                }
              } else if (name[2] === name[2].toLowerCase()) {
                const handlerName = `on${name[2].toUpperCase()}${name.slice(3)}`;
                const attrName = `attr:${name}`;
                context.report({
                  node: node2.name,
                  messageId: "naming",
                  data: { name, attrName, handlerName },
                  suggest: [
                    {
                      messageId: "make-handler",
                      data: { name, handlerName },
                      fix: (fixer) => fixer.replaceText(node2.name, handlerName)
                    },
                    {
                      messageId: "make-attr",
                      data: { name, attrName },
                      fix: (fixer) => fixer.replaceText(node2.name, attrName)
                    }
                  ]
                });
              }
            }
          },
          Property(node2) {
            if (context.options[0]?.warnOnSpread && node2.parent?.type === "ObjectExpression" && node2.parent.parent?.type === "JSXSpreadAttribute" && node2.parent.parent.parent?.type === "JSXOpeningElement") {
              const openingElement = node2.parent.parent.parent;
              if (openingElement.name.type === "JSXIdentifier" && (0, utils_2.isDOMElementName)(openingElement.name.name)) {
                if (node2.key.type === "Identifier" && /^on/.test(node2.key.name)) {
                  const handlerName = node2.key.name;
                  context.report({
                    node: node2,
                    messageId: "spread-handler",
                    data: {
                      name: node2.key.name
                    },
                    *fix(fixer) {
                      const commaAfter = sourceCode.getTokenAfter(node2);
                      yield fixer.remove(node2.parent.properties.length === 1 ? node2.parent.parent : node2);
                      if (commaAfter?.value === ",") {
                        yield fixer.remove(commaAfter);
                      }
                      yield fixer.insertTextAfter(node2.parent.parent, ` ${handlerName}={${sourceCode.getText(node2.value)}}`);
                    }
                  });
                }
              }
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/imports.js
var require_imports = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/imports.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var utils_2 = require_utils();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    var primitiveMap = /* @__PURE__ */ new Map();
    for (const primitive of [
      "createSignal",
      "createEffect",
      "createMemo",
      "createResource",
      "onMount",
      "onCleanup",
      "onError",
      "untrack",
      "batch",
      "on",
      "createRoot",
      "getOwner",
      "runWithOwner",
      "mergeProps",
      "splitProps",
      "useTransition",
      "observable",
      "from",
      "mapArray",
      "indexArray",
      "createContext",
      "useContext",
      "children",
      "lazy",
      "createUniqueId",
      "createDeferred",
      "createRenderEffect",
      "createComputed",
      "createReaction",
      "createSelector",
      "DEV",
      "For",
      "Show",
      "Switch",
      "Match",
      "Index",
      "ErrorBoundary",
      "Suspense",
      "SuspenseList"
    ]) {
      primitiveMap.set(primitive, "solid-js");
    }
    for (const primitive of [
      "Portal",
      "render",
      "hydrate",
      "renderToString",
      "renderToStream",
      "isServer",
      "renderToStringAsync",
      "generateHydrationScript",
      "HydrationScript",
      "Dynamic"
    ]) {
      primitiveMap.set(primitive, "solid-js/web");
    }
    for (const primitive of [
      "createStore",
      "produce",
      "reconcile",
      "unwrap",
      "createMutable",
      "modifyMutable"
    ]) {
      primitiveMap.set(primitive, "solid-js/store");
    }
    var typeMap = /* @__PURE__ */ new Map();
    for (const type of [
      "Signal",
      "Accessor",
      "Setter",
      "Resource",
      "ResourceActions",
      "ResourceOptions",
      "ResourceReturn",
      "ResourceFetcher",
      "InitializedResourceReturn",
      "Component",
      "VoidProps",
      "VoidComponent",
      "ParentProps",
      "ParentComponent",
      "FlowProps",
      "FlowComponent",
      "ValidComponent",
      "ComponentProps",
      "Ref",
      "MergeProps",
      "SplitPrips",
      "Context",
      "JSX",
      "ResolvedChildren",
      "MatchProps"
    ]) {
      typeMap.set(type, "solid-js");
    }
    for (const type of ["MountableElement"]) {
      typeMap.set(type, "solid-js/web");
    }
    for (const type of ["StoreNode", "Store", "SetStoreFunction"]) {
      typeMap.set(type, "solid-js/store");
    }
    var sourceRegex = /^solid-js(?:\/web|\/store)?$/;
    var isSource = (source) => sourceRegex.test(source);
    exports.default = createRule({
      meta: {
        type: "suggestion",
        docs: {
          description: 'Enforce consistent imports from "solid-js", "solid-js/web", and "solid-js/store".',
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/imports.md"
        },
        fixable: "code",
        schema: [],
        messages: {
          "prefer-source": 'Prefer importing {{name}} from "{{source}}".'
        }
      },
      defaultOptions: [],
      create(context) {
        return {
          ImportDeclaration(node2) {
            const source = node2.source.value;
            if (!isSource(source))
              return;
            for (const specifier of node2.specifiers) {
              if (specifier.type === "ImportSpecifier") {
                const isType = specifier.importKind === "type" || node2.importKind === "type";
                const map = isType ? typeMap : primitiveMap;
                const correctSource = map.get(specifier.imported.name);
                if (correctSource != null && correctSource !== source) {
                  context.report({
                    node: specifier,
                    messageId: "prefer-source",
                    data: {
                      name: specifier.imported.name,
                      source: correctSource
                    },
                    fix(fixer) {
                      const sourceCode = context.getSourceCode();
                      const program = sourceCode.ast;
                      const correctDeclaration = program.body.find((node3) => node3.type === "ImportDeclaration" && node3.source.value === correctSource);
                      if (correctDeclaration) {
                        return [
                          (0, utils_2.removeSpecifier)(fixer, sourceCode, specifier),
                          (0, utils_2.appendImports)(fixer, sourceCode, correctDeclaration, [
                            sourceCode.getText(specifier)
                          ])
                        ].filter(Boolean);
                      }
                      const firstSolidDeclaration = program.body.find((node3) => node3.type === "ImportDeclaration" && isSource(node3.source.value));
                      return [
                        (0, utils_2.removeSpecifier)(fixer, sourceCode, specifier),
                        (0, utils_2.insertImports)(fixer, sourceCode, correctSource, [sourceCode.getText(specifier)], firstSolidDeclaration, isType)
                      ];
                    }
                  });
                }
              }
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/jsx-no-duplicate-props.js
var require_jsx_no_duplicate_props = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/jsx-no-duplicate-props.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var utils_2 = require_utils();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Disallow passing the same prop twice in JSX.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-duplicate-props.md"
        },
        schema: [
          {
            type: "object",
            properties: {
              ignoreCase: {
                type: "boolean",
                description: "Consider two prop names differing only by case to be the same.",
                default: false
              }
            }
          }
        ],
        messages: {
          noDuplicateProps: "Duplicate props are not allowed.",
          noDuplicateClass: "Duplicate `class` props are not allowed; while it might seem to work, it can break unexpectedly. Use `classList` instead.",
          noDuplicateChildren: "Using {{used}} at the same time is not allowed."
        }
      },
      defaultOptions: [],
      create(context) {
        return {
          JSXOpeningElement(node2) {
            const ignoreCase = context.options[0]?.ignoreCase ?? false;
            const props = /* @__PURE__ */ new Set();
            const checkPropName = (name, node3) => {
              if (ignoreCase || name.startsWith("on")) {
                name = name.toLowerCase().replace(/^on(?:capture)?:/, "on").replace(/^(?:attr|prop):/, "");
              }
              if (props.has(name)) {
                context.report({
                  node: node3,
                  messageId: name === "class" ? "noDuplicateClass" : "noDuplicateProps"
                });
              }
              props.add(name);
            };
            for (const [name, propNode] of (0, utils_2.jsxGetAllProps)(node2.attributes)) {
              checkPropName(name, propNode);
            }
            const hasChildrenProp = props.has("children");
            const hasChildren = node2.parent.children.length > 0;
            const hasInnerHTML = props.has("innerHTML") || props.has("innerhtml");
            const hasTextContent = props.has("textContent") || props.has("textContent");
            const used = [
              hasChildrenProp && "`props.children`",
              hasChildren && "JSX children",
              hasInnerHTML && "`props.innerHTML`",
              hasTextContent && "`props.textContent`"
            ].filter(Boolean);
            if (used.length > 1) {
              context.report({
                node: node2,
                messageId: "noDuplicateChildren",
                data: {
                  used: used.join(", ")
                }
              });
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/jsx-no-script-url.js
var require_jsx_no_script_url = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/jsx-no-script-url.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    var { getStaticValue } = utils_1.ASTUtils;
    var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Disallow javascript: URLs.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-script-url.md"
        },
        schema: [],
        messages: {
          noJSURL: "For security, don't use javascript: URLs. Use event handlers instead if you can."
        }
      },
      defaultOptions: [],
      create(context) {
        return {
          JSXAttribute(node2) {
            if (node2.name.type === "JSXIdentifier" && node2.value) {
              const link = getStaticValue(node2.value.type === "JSXExpressionContainer" ? node2.value.expression : node2.value, context.getScope());
              if (link && typeof link.value === "string" && isJavaScriptProtocol.test(link.value)) {
                context.report({
                  node: node2.value,
                  messageId: "noJSURL"
                });
              }
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/jsx-no-undef.js
var require_jsx_no_undef = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/jsx-no-undef.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var utils_2 = require_utils();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    var AUTO_COMPONENTS = ["Show", "For", "Index", "Switch", "Match"];
    var SOURCE_MODULE = "solid-js";
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Disallow references to undefined variables in JSX. Handles custom directives.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-no-undef.md"
        },
        fixable: "code",
        schema: [
          {
            type: "object",
            properties: {
              allowGlobals: {
                type: "boolean",
                description: "When true, the rule will consider the global scope when checking for defined components.",
                default: false
              },
              autoImport: {
                type: "boolean",
                description: 'Automatically import certain components from `"solid-js"` if they are undefined.',
                default: true
              },
              typescriptEnabled: {
                type: "boolean",
                description: "Adjusts behavior not to conflict with TypeScript's type checking.",
                default: false
              }
            },
            additionalProperties: false
          }
        ],
        messages: {
          undefined: "'{{identifier}}' is not defined.",
          customDirectiveUndefined: "Custom directive '{{identifier}}' is not defined.",
          autoImport: "{{imports}} should be imported from '{{source}}'."
        }
      },
      defaultOptions: [],
      create(context) {
        const allowGlobals = context.options[0]?.allowGlobals ?? false;
        const autoImport = context.options[0]?.autoImport !== false;
        const isTypeScriptEnabled = context.options[0]?.typescriptEnabled ?? false;
        const missingComponentsSet = /* @__PURE__ */ new Set();
        function checkIdentifierInJSX(node2, { isComponent, isCustomDirective } = {}) {
          let scope = context.getScope();
          const sourceCode = context.getSourceCode();
          const sourceType = sourceCode.ast.sourceType;
          const scopeUpperBound = !allowGlobals && sourceType === "module" ? "module" : "global";
          const variables = [...scope.variables];
          if (node2.name === "this") {
            return;
          }
          while (scope.type !== scopeUpperBound && scope.type !== "global" && scope.upper) {
            scope = scope.upper;
            variables.push(...scope.variables);
          }
          if (scope.childScopes.length) {
            variables.push(...scope.childScopes[0].variables);
            if (scope.childScopes[0].childScopes.length) {
              variables.push(...scope.childScopes[0].childScopes[0].variables);
            }
          }
          if (variables.find((variable) => variable.name === node2.name)) {
            return;
          }
          if (isComponent && autoImport && AUTO_COMPONENTS.includes(node2.name) && !missingComponentsSet.has(node2.name)) {
            missingComponentsSet.add(node2.name);
          } else if (isCustomDirective) {
            context.report({
              node: node2,
              messageId: "customDirectiveUndefined",
              data: {
                identifier: node2.name
              }
            });
          } else if (!isTypeScriptEnabled) {
            context.report({
              node: node2,
              messageId: "undefined",
              data: {
                identifier: node2.name
              }
            });
          }
        }
        return {
          JSXOpeningElement(node2) {
            let n;
            switch (node2.name.type) {
              case "JSXIdentifier":
                if (!(0, utils_2.isDOMElementName)(node2.name.name)) {
                  checkIdentifierInJSX(node2.name, { isComponent: true });
                }
                break;
              case "JSXMemberExpression":
                n = node2.name;
                do {
                  n = n.object;
                } while (n && n.type !== "JSXIdentifier");
                if (n) {
                  checkIdentifierInJSX(n);
                }
                break;
              default:
                break;
            }
          },
          "JSXAttribute > JSXNamespacedName": (node2) => {
            if (node2.namespace?.type === "JSXIdentifier" && node2.namespace.name === "use" && node2.name?.type === "JSXIdentifier") {
              checkIdentifierInJSX(node2.name, { isCustomDirective: true });
            }
          },
          "Program:exit": (programNode) => {
            const missingComponents = Array.from(missingComponentsSet.values());
            if (autoImport && missingComponents.length) {
              const importNode = programNode.body.find((n) => n.type === "ImportDeclaration" && n.importKind !== "type" && n.source.type === "Literal" && n.source.value === SOURCE_MODULE);
              if (importNode) {
                context.report({
                  node: importNode,
                  messageId: "autoImport",
                  data: {
                    imports: (0, utils_2.formatList)(missingComponents),
                    source: SOURCE_MODULE
                  },
                  fix: (fixer) => {
                    return (0, utils_2.appendImports)(fixer, context.getSourceCode(), importNode, missingComponents);
                  }
                });
              } else {
                context.report({
                  node: programNode,
                  messageId: "autoImport",
                  data: {
                    imports: (0, utils_2.formatList)(missingComponents),
                    source: SOURCE_MODULE
                  },
                  fix: (fixer) => {
                    return (0, utils_2.insertImports)(fixer, context.getSourceCode(), "solid-js", missingComponents);
                  }
                });
              }
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/jsx-uses-vars.js
var require_jsx_uses_vars = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/jsx-uses-vars.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Prevent variables used in JSX from being marked as unused.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/jsx-uses-vars.md"
        },
        schema: [],
        messages: {}
      },
      defaultOptions: [],
      create(context) {
        return {
          JSXOpeningElement(node2) {
            let parent;
            switch (node2.name.type) {
              case "JSXNamespacedName":
                return;
              case "JSXIdentifier":
                context.markVariableAsUsed(node2.name.name);
                break;
              case "JSXMemberExpression":
                parent = node2.name.object;
                while (parent?.type === "JSXMemberExpression") {
                  parent = parent.object;
                }
                if (parent.type === "JSXIdentifier") {
                  context.markVariableAsUsed(parent.name);
                }
                break;
            }
          },
          "JSXAttribute > JSXNamespacedName": (node2) => {
            if (node2.namespace?.type === "JSXIdentifier" && node2.namespace.name === "use" && node2.name?.type === "JSXIdentifier") {
              context.markVariableAsUsed(node2.name.name);
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/no-destructure.js
var require_no_destructure = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/no-destructure.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    var { getStringIfConstant } = utils_1.ASTUtils;
    var getName = (node2) => {
      switch (node2.type) {
        case "Literal":
          return typeof node2.value === "string" ? node2.value : null;
        case "Identifier":
          return node2.name;
        case "AssignmentPattern":
          return getName(node2.left);
        default:
          return getStringIfConstant(node2);
      }
    };
    var getPropertyInfo = (prop) => {
      const valueName = getName(prop.value);
      if (valueName !== null) {
        return {
          real: prop.key,
          var: valueName,
          computed: prop.computed,
          init: prop.value.type === "AssignmentPattern" ? prop.value.right : void 0
        };
      } else {
        return null;
      }
    };
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Disallow destructuring props. In Solid, props must be used with property accesses (`props.foo`) to preserve reactivity. This rule only tracks destructuring in the parameter list.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-destructure.md"
        },
        fixable: "code",
        schema: [],
        messages: {
          noDestructure: "Destructuring component props breaks Solid's reactivity; use property access instead."
        }
      },
      defaultOptions: [],
      create(context) {
        const functionStack = [];
        const currentFunction = () => functionStack[functionStack.length - 1];
        const onFunctionEnter = () => {
          functionStack.push({ hasJSX: false });
        };
        const onFunctionExit = (node2) => {
          if (node2.params.length === 1) {
            const props = node2.params[0];
            if (props.type === "ObjectPattern" && currentFunction().hasJSX && node2.parent?.type !== "JSXExpressionContainer") {
              context.report({
                node: props,
                messageId: "noDestructure",
                fix: (fixer) => fixDestructure(node2, props, fixer)
              });
            }
          }
          functionStack.pop();
        };
        function* fixDestructure(func, props, fixer) {
          const propsName = "props";
          const properties = props.properties;
          const propertyInfo = [];
          let rest = null;
          for (const property of properties) {
            if (property.type === "RestElement") {
              rest = property;
            } else {
              const info = getPropertyInfo(property);
              if (info === null) {
                continue;
              }
              propertyInfo.push(info);
            }
          }
          const hasDefaults = propertyInfo.some((info) => info.init);
          const origProps = !(hasDefaults || rest) ? propsName : "_" + propsName;
          if (props.typeAnnotation) {
            const range = [props.range[0], props.typeAnnotation.range[0]];
            yield fixer.replaceTextRange(range, origProps);
          } else {
            yield fixer.replaceText(props, origProps);
          }
          const sourceCode = context.getSourceCode();
          const defaultsObjectString = () => propertyInfo.filter((info) => info.init).map((info) => `${info.computed ? "[" : ""}${sourceCode.getText(info.real)}${info.computed ? "]" : ""}: ${sourceCode.getText(info.init)}`).join(", ");
          const splitPropsArray = () => `[${propertyInfo.map((info) => info.real.type === "Identifier" ? JSON.stringify(info.real.name) : sourceCode.getText(info.real)).join(", ")}]`;
          let lineToInsert = "";
          if (hasDefaults && rest) {
            lineToInsert = `  const [${propsName}, ${rest.argument.type === "Identifier" && rest.argument.name || "rest"}] = splitProps(mergeProps({ ${defaultsObjectString()} }, ${origProps}), ${splitPropsArray()});`;
          } else if (hasDefaults) {
            lineToInsert = `  const ${propsName} = mergeProps({ ${defaultsObjectString()} }, ${origProps});
`;
          } else if (rest) {
            lineToInsert = `  const [${propsName}, ${rest.argument.type === "Identifier" && rest.argument.name || "rest"}] = splitProps(${origProps}, ${splitPropsArray()});
`;
          }
          if (lineToInsert) {
            const body = func.body;
            if (body.type === "BlockStatement") {
              if (body.body.length > 0) {
                yield fixer.insertTextBefore(body.body[0], lineToInsert);
              }
            } else {
              const maybeOpenParen = sourceCode.getTokenBefore(body);
              if (maybeOpenParen?.value === "(") {
                yield fixer.remove(maybeOpenParen);
              }
              const maybeCloseParen = sourceCode.getTokenAfter(body);
              if (maybeCloseParen?.value === ")") {
                yield fixer.remove(maybeCloseParen);
              }
              yield fixer.insertTextBefore(body, `{
${lineToInsert}  return (`);
              yield fixer.insertTextAfter(body, `);
}`);
            }
          }
          const scope = sourceCode.scopeManager?.acquire(func);
          if (scope) {
            for (const [info, variable] of propertyInfo.map((info2) => [info2, scope.set.get(info2.var)])) {
              if (variable) {
                for (const reference of variable.references) {
                  if (reference.isReadOnly()) {
                    const access = info.real.type === "Identifier" && !info.computed ? `.${info.real.name}` : `[${sourceCode.getText(info.real)}]`;
                    yield fixer.replaceText(reference.identifier, `${propsName}${access}`);
                  }
                }
              }
            }
          }
        }
        return {
          FunctionDeclaration: onFunctionEnter,
          FunctionExpression: onFunctionEnter,
          ArrowFunctionExpression: onFunctionEnter,
          "FunctionDeclaration:exit": onFunctionExit,
          "FunctionExpression:exit": onFunctionExit,
          "ArrowFunctionExpression:exit": onFunctionExit,
          JSXElement() {
            if (functionStack.length) {
              currentFunction().hasJSX = true;
            }
          },
          JSXFragment() {
            if (functionStack.length) {
              currentFunction().hasJSX = true;
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/html-tags@3.3.1/node_modules/html-tags/html-tags.json
var require_html_tags = __commonJS({
  "node_modules/.pnpm/html-tags@3.3.1/node_modules/html-tags/html-tags.json"(exports, module2) {
    module2.exports = [
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "math",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rb",
      "rp",
      "rt",
      "rtc",
      "ruby",
      "s",
      "samp",
      "script",
      "search",
      "section",
      "select",
      "slot",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "svg",
      "table",
      "tbody",
      "td",
      "template",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr"
    ];
  }
});

// node_modules/.pnpm/html-tags@3.3.1/node_modules/html-tags/index.js
var require_html_tags2 = __commonJS({
  "node_modules/.pnpm/html-tags@3.3.1/node_modules/html-tags/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    module2.exports = require_html_tags();
  }
});

// node_modules/.pnpm/is-html@2.0.0/node_modules/is-html/index.js
var require_is_html = __commonJS({
  "node_modules/.pnpm/is-html@2.0.0/node_modules/is-html/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var htmlTags = require_html_tags2();
    var basic = /\s?<!doctype html>|(<html\b[^>]*>|<body\b[^>]*>|<x-[^>]+>)+/i;
    var full = new RegExp(htmlTags.map((tag) => `<${tag}\\b[^>]*>`).join("|"), "i");
    module2.exports = (string) => basic.test(string) || full.test(string);
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/no-innerhtml.js
var require_no_innerhtml = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/no-innerhtml.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var is_html_1 = __importDefault(require_is_html());
    var utils_2 = require_utils();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    var { getStringIfConstant } = utils_1.ASTUtils;
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Disallow usage of the innerHTML attribute, which can often lead to security vulnerabilities.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-innerhtml.md"
        },
        fixable: "code",
        hasSuggestions: true,
        schema: [
          {
            type: "object",
            properties: {
              allowStatic: {
                description: "if the innerHTML value is guaranteed to be a static HTML string (i.e. no user input), allow it",
                type: "boolean",
                default: true
              }
            },
            additionalProperties: false
          }
        ],
        messages: {
          dangerous: "The innerHTML attribute is dangerous; passing unsanitized input can lead to security vulnerabilities.",
          conflict: "The innerHTML attribute should not be used on an element with child elements; they will be overwritten.",
          notHtml: "The string passed to innerHTML does not appear to be valid HTML.",
          useInnerText: "For text content, using innerText is clearer and safer.",
          dangerouslySetInnerHTML: "The dangerouslySetInnerHTML prop is not supported; use innerHTML instead."
        }
      },
      defaultOptions: [{ allowStatic: true }],
      create(context) {
        const allowStatic = Boolean(context.options[0]?.allowStatic ?? true);
        return {
          JSXAttribute(node2) {
            if ((0, utils_2.jsxPropName)(node2) === "dangerouslySetInnerHTML") {
              if (node2.value?.type === "JSXExpressionContainer" && node2.value.expression.type === "ObjectExpression" && node2.value.expression.properties.length === 1) {
                const htmlProp = node2.value.expression.properties[0];
                if (htmlProp.type === "Property" && htmlProp.key.type === "Identifier" && htmlProp.key.name === "__html") {
                  context.report({
                    node: node2,
                    messageId: "dangerouslySetInnerHTML",
                    fix: (fixer) => {
                      const propRange = node2.range;
                      const valueRange = htmlProp.value.range;
                      return [
                        fixer.replaceTextRange([propRange[0], valueRange[0]], "innerHTML={"),
                        fixer.replaceTextRange([valueRange[1], propRange[1]], "}")
                      ];
                    }
                  });
                } else {
                  context.report({
                    node: node2,
                    messageId: "dangerouslySetInnerHTML"
                  });
                }
              } else {
                context.report({
                  node: node2,
                  messageId: "dangerouslySetInnerHTML"
                });
              }
              return;
            } else if ((0, utils_2.jsxPropName)(node2) !== "innerHTML") {
              return;
            }
            if (allowStatic) {
              const innerHtmlNode = node2.value?.type === "JSXExpressionContainer" ? node2.value.expression : node2.value;
              const innerHtml = innerHtmlNode && getStringIfConstant(innerHtmlNode);
              if (typeof innerHtml === "string") {
                if ((0, is_html_1.default)(innerHtml)) {
                  if (node2.parent?.parent?.type === "JSXElement" && node2.parent.parent.children?.length) {
                    context.report({
                      node: node2.parent.parent,
                      messageId: "conflict"
                    });
                  }
                } else {
                  context.report({
                    node: node2,
                    messageId: "notHtml",
                    suggest: [
                      {
                        fix: (fixer) => fixer.replaceText(node2.name, "innerText"),
                        messageId: "useInnerText"
                      }
                    ]
                  });
                }
              } else {
                context.report({
                  node: node2,
                  messageId: "dangerous"
                });
              }
            } else {
              context.report({
                node: node2,
                messageId: "dangerous"
              });
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/no-proxy-apis.js
var require_no_proxy_apis = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/no-proxy-apis.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var utils_2 = require_utils();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Disallow usage of APIs that use ES6 Proxies, only to target environments that don't support them.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-proxy-apis.md"
        },
        schema: [],
        messages: {
          noStore: "Solid Store APIs use Proxies, which are incompatible with your target environment.",
          spreadCall: "Using a function call in JSX spread makes Solid use Proxies, which are incompatible with your target environment.",
          spreadMember: "Using a property access in JSX spread makes Solid use Proxies, which are incompatible with your target environment.",
          proxyLiteral: "Proxies are incompatible with your target environment.",
          mergeProps: "If you pass a function to `mergeProps`, it will create a Proxy, which are incompatible with your target environment."
        }
      },
      defaultOptions: [],
      create(context) {
        const { matchImport, handleImportDeclaration } = (0, utils_2.trackImports)();
        return {
          ImportDeclaration(node2) {
            handleImportDeclaration(node2);
            const source = node2.source.value;
            if (source === "solid-js/store") {
              context.report({
                node: node2,
                messageId: "noStore"
              });
            }
          },
          "JSXSpreadAttribute MemberExpression"(node2) {
            context.report({ node: node2, messageId: "spreadMember" });
          },
          "JSXSpreadAttribute CallExpression"(node2) {
            context.report({ node: node2, messageId: "spreadCall" });
          },
          CallExpression(node2) {
            if (node2.callee.type === "Identifier") {
              if (matchImport("mergeProps", node2.callee.name)) {
                node2.arguments.filter((arg) => {
                  if (arg.type === "SpreadElement")
                    return true;
                  const traced = (0, utils_2.trace)(arg, context.getScope());
                  return traced.type === "Identifier" && !(0, utils_2.isPropsByName)(traced.name) || (0, utils_2.isFunctionNode)(traced);
                }).forEach((badArg) => {
                  context.report({
                    node: badArg,
                    messageId: "mergeProps"
                  });
                });
              }
            } else if (node2.callee.type === "MemberExpression") {
              if (node2.callee.object.type === "Identifier" && node2.callee.object.name === "Proxy" && node2.callee.property.type === "Identifier" && node2.callee.property.name === "revocable") {
                context.report({
                  node: node2,
                  messageId: "proxyLiteral"
                });
              }
            }
          },
          NewExpression(node2) {
            if (node2.callee.type === "Identifier" && node2.callee.name === "Proxy") {
              context.report({ node: node2, messageId: "proxyLiteral" });
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/no-react-deps.js
var require_no_react_deps = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/no-react-deps.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var utils_2 = require_utils();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Disallow usage of dependency arrays in `createEffect` and `createMemo`.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-react-deps.md"
        },
        fixable: "code",
        schema: [],
        messages: {
          noUselessDep: "In Solid, `{{name}}` doesn't accept a dependency array because it automatically tracks its dependencies. If you really need to override the list of dependencies, use `on`."
        }
      },
      defaultOptions: [],
      create(context) {
        const { matchImport, handleImportDeclaration } = (0, utils_2.trackImports)();
        return {
          ImportDeclaration: handleImportDeclaration,
          CallExpression(node2) {
            if (node2.callee.type === "Identifier" && matchImport(["createEffect", "createMemo"], node2.callee.name) && node2.arguments.length === 2 && node2.arguments.every((arg) => arg.type !== "SpreadElement")) {
              const [arg0, arg1] = node2.arguments.map((arg) => (0, utils_2.trace)(arg, context.getScope()));
              if ((0, utils_2.isFunctionNode)(arg0) && arg0.params.length === 0 && arg1.type === "ArrayExpression") {
                context.report({
                  node: node2.arguments[1],
                  messageId: "noUselessDep",
                  data: {
                    name: node2.callee.name
                  },
                  fix: arg1 === node2.arguments[1] ? (fixer) => fixer.remove(arg1) : void 0
                });
              }
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/no-react-specific-props.js
var require_no_react_specific_props = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/no-react-specific-props.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var utils_2 = require_utils();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    var reactSpecificProps = [
      { from: "className", to: "class" },
      { from: "htmlFor", to: "for" }
    ];
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Disallow usage of React-specific `className`/`htmlFor` props, which were deprecated in v1.4.0.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-react-specific-props.md"
        },
        fixable: "code",
        schema: [],
        messages: {
          prefer: "Prefer the `{{ to }}` prop over the deprecated `{{ from }}` prop.",
          noUselessKey: "Elements in a <For> or <Index> list do not need a key prop."
        }
      },
      defaultOptions: [],
      create(context) {
        return {
          JSXOpeningElement(node2) {
            for (const { from, to } of reactSpecificProps) {
              const classNameAttribute = (0, utils_2.jsxGetProp)(node2.attributes, from);
              if (classNameAttribute) {
                const fix = !(0, utils_2.jsxHasProp)(node2.attributes, to) ? (fixer) => fixer.replaceText(classNameAttribute.name, to) : void 0;
                context.report({
                  node: classNameAttribute,
                  messageId: "prefer",
                  data: { from, to },
                  fix
                });
              }
            }
            if (node2.name.type === "JSXIdentifier" && (0, utils_2.isDOMElementName)(node2.name.name)) {
              const keyProp = (0, utils_2.jsxGetProp)(node2.attributes, "key");
              if (keyProp) {
                context.report({
                  node: keyProp,
                  messageId: "noUselessKey",
                  fix: (fixer) => fixer.remove(keyProp)
                });
              }
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/no-unknown-namespaces.js
var require_no_unknown_namespaces = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/no-unknown-namespaces.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var utils_2 = require_utils();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    var knownNamespaces = ["on", "oncapture", "use", "prop", "attr"];
    var styleNamespaces = ["style", "class"];
    var otherNamespaces = ["xmlns", "xlink"];
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Enforce using only Solid-specific namespaced attribute names (i.e. `'on:'` in `<div on:click={...} />`).",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-unknown-namespaces.md"
        },
        hasSuggestions: true,
        schema: [
          {
            type: "object",
            properties: {
              allowedNamespaces: {
                description: "an array of additional namespace names to allow",
                type: "array",
                items: {
                  type: "string"
                },
                default: [],
                minItems: 1,
                uniqueItems: true
              }
            },
            additionalProperties: false
          }
        ],
        messages: {
          unknown: `'{{namespace}}:' is not one of Solid's special prefixes for JSX attributes (${knownNamespaces.map((n) => `'${n}:'`).join(", ")}).`,
          style: "Using the '{{namespace}}:' special prefix is potentially confusing, prefer the '{{namespace}}' prop instead.",
          component: "Namespaced props have no effect on components.",
          "component-suggest": "Replace {{namespace}}:{{name}} with {{name}}."
        }
      },
      defaultOptions: [],
      create(context) {
        const explicitlyAllowedNamespaces = context.options?.[0]?.allowedNamespaces;
        return {
          "JSXAttribute > JSXNamespacedName": (node2) => {
            const openingElement = node2.parent.parent;
            if (openingElement.name.type === "JSXIdentifier" && !(0, utils_2.isDOMElementName)(openingElement.name.name)) {
              context.report({
                node: node2,
                messageId: "component",
                suggest: [
                  {
                    messageId: "component-suggest",
                    data: { namespace: node2.namespace.name, name: node2.name.name },
                    fix: (fixer) => fixer.replaceText(node2, node2.name.name)
                  }
                ]
              });
              return;
            }
            const namespace = node2.namespace?.name;
            if (!(knownNamespaces.includes(namespace) || otherNamespaces.includes(namespace) || explicitlyAllowedNamespaces?.includes(namespace))) {
              if (styleNamespaces.includes(namespace)) {
                context.report({
                  node: node2,
                  messageId: "style",
                  data: { namespace }
                });
              } else {
                context.report({
                  node: node2,
                  messageId: "unknown",
                  data: { namespace }
                });
              }
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/prefer-classlist.js
var require_prefer_classlist = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/prefer-classlist.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var utils_2 = require_utils();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Enforce using the classlist prop over importing a classnames helper. The classlist prop accepts an object `{ [class: string]: boolean }` just like classnames.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/prefer-classlist.md"
        },
        fixable: "code",
        schema: [
          {
            type: "object",
            properties: {
              classnames: {
                type: "array",
                description: "An array of names to treat as `classnames` functions",
                default: ["cn", "clsx", "classnames"],
                items: {
                  type: "string"
                },
                minItems: 1,
                uniqueItems: true
              }
            },
            additionalProperties: false
          }
        ],
        messages: {
          preferClasslist: "The classlist prop should be used instead of {{ classnames }} to efficiently set classes based on an object."
        },
        deprecated: true
      },
      defaultOptions: [],
      create(context) {
        const classnames = context.options[0]?.classnames ?? ["cn", "clsx", "classnames"];
        return {
          JSXAttribute(node2) {
            if (["class", "className"].indexOf((0, utils_2.jsxPropName)(node2)) === -1 || (0, utils_2.jsxHasProp)(node2.parent?.attributes ?? [], "classlist")) {
              return;
            }
            if (node2.value?.type === "JSXExpressionContainer") {
              const expr = node2.value.expression;
              if (expr.type === "CallExpression" && expr.callee.type === "Identifier" && classnames.indexOf(expr.callee.name) !== -1 && expr.arguments.length === 1 && expr.arguments[0].type === "ObjectExpression") {
                context.report({
                  node: node2,
                  messageId: "preferClasslist",
                  data: {
                    classnames: expr.callee.name
                  },
                  fix: (fixer) => {
                    const attrRange = node2.range;
                    const objectRange = expr.arguments[0].range;
                    return [
                      fixer.replaceTextRange([attrRange[0], objectRange[0]], "classlist={"),
                      fixer.replaceTextRange([objectRange[1], attrRange[1]], "}")
                    ];
                  }
                });
              }
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/prefer-for.js
var require_prefer_for = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/prefer-for.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var utils_2 = require_utils();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    var { getPropertyName } = utils_1.ASTUtils;
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Enforce using Solid's `<For />` component for mapping an array to JSX elements.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/prefer-for.md"
        },
        fixable: "code",
        schema: [],
        messages: {
          preferFor: "Use Solid's `<For />` component for efficiently rendering lists. Array#map causes DOM elements to be recreated.",
          preferForOrIndex: "Use Solid's `<For />` component or `<Index />` component for rendering lists. Array#map causes DOM elements to be recreated."
        }
      },
      defaultOptions: [],
      create(context) {
        const reportPreferFor = (node2) => {
          const jsxExpressionContainerNode = node2.parent;
          const arrayNode = node2.callee.object;
          const mapFnNode = node2.arguments[0];
          context.report({
            node: node2,
            messageId: "preferFor",
            fix: (fixer) => {
              const beforeArray = [
                jsxExpressionContainerNode.range[0],
                arrayNode.range[0]
              ];
              const betweenArrayAndMapFn = [arrayNode.range[1], mapFnNode.range[0]];
              const afterMapFn = [
                mapFnNode.range[1],
                jsxExpressionContainerNode.range[1]
              ];
              return [
                fixer.replaceTextRange(beforeArray, "<For each={"),
                fixer.replaceTextRange(betweenArrayAndMapFn, "}>{"),
                fixer.replaceTextRange(afterMapFn, "}</For>")
              ];
            }
          });
        };
        return {
          CallExpression(node2) {
            const callOrChain = node2.parent?.type === "ChainExpression" ? node2.parent : node2;
            if (callOrChain.parent?.type === "JSXExpressionContainer" && (0, utils_2.isJSXElementOrFragment)(callOrChain.parent.parent)) {
              if (node2.callee.type === "MemberExpression" && getPropertyName(node2.callee) === "map" && node2.arguments.length === 1 && (0, utils_2.isFunctionNode)(node2.arguments[0])) {
                const mapFnNode = node2.arguments[0];
                if (mapFnNode.params.length === 1 && mapFnNode.params[0].type !== "RestElement") {
                  reportPreferFor(node2);
                } else {
                  context.report({
                    node: node2,
                    messageId: "preferForOrIndex"
                  });
                }
              }
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/prefer-show.js
var require_prefer_show = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/prefer-show.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var utils_2 = require_utils();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    var EXPENSIVE_TYPES = ["JSXElement", "JSXFragment", "Identifier"];
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Enforce using Solid's `<Show />` component for conditionally showing content. Solid's compiler covers this case, so it's a stylistic rule only.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/prefer-show.md"
        },
        fixable: "code",
        schema: [],
        messages: {
          preferShowAnd: "Use Solid's `<Show />` component for conditionally showing content.",
          preferShowTernary: "Use Solid's `<Show />` component for conditionally showing content with a fallback."
        }
      },
      defaultOptions: [],
      create(context) {
        const sourceCode = context.getSourceCode();
        const putIntoJSX = (node2) => {
          const text = sourceCode.getText(node2);
          return (0, utils_2.isJSXElementOrFragment)(node2) ? text : `{${text}}`;
        };
        const logicalExpressionHandler = (node2) => {
          if (node2.operator === "&&" && EXPENSIVE_TYPES.includes(node2.right.type)) {
            context.report({
              node: node2,
              messageId: "preferShowAnd",
              fix: (fixer) => fixer.replaceText(node2.parent?.type === "JSXExpressionContainer" && (0, utils_2.isJSXElementOrFragment)(node2.parent.parent) ? node2.parent : node2, `<Show when={${sourceCode.getText(node2.left)}}>${putIntoJSX(node2.right)}</Show>`)
            });
          }
        };
        const conditionalExpressionHandler = (node2) => {
          if (EXPENSIVE_TYPES.includes(node2.consequent.type) || EXPENSIVE_TYPES.includes(node2.alternate.type)) {
            context.report({
              node: node2,
              messageId: "preferShowTernary",
              fix: (fixer) => fixer.replaceText(node2.parent?.type === "JSXExpressionContainer" && (0, utils_2.isJSXElementOrFragment)(node2.parent.parent) ? node2.parent : node2, `<Show when={${sourceCode.getText(node2.test)}} fallback={${sourceCode.getText(node2.alternate)}}>${putIntoJSX(node2.consequent)}</Show>`)
            });
          }
        };
        return {
          JSXExpressionContainer(node2) {
            if (!(0, utils_2.isJSXElementOrFragment)(node2.parent)) {
              return;
            }
            if (node2.expression.type === "LogicalExpression") {
              logicalExpressionHandler(node2.expression);
            } else if (node2.expression.type === "ArrowFunctionExpression" && node2.expression.body.type === "LogicalExpression") {
              logicalExpressionHandler(node2.expression.body);
            } else if (node2.expression.type === "ConditionalExpression") {
              conditionalExpressionHandler(node2.expression);
            } else if (node2.expression.type === "ArrowFunctionExpression" && node2.expression.body.type === "ConditionalExpression") {
              conditionalExpressionHandler(node2.expression.body);
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/reactivity.js
var require_reactivity = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/reactivity.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var utils_2 = require_utils();
    var { findVariable, getFunctionHeadLocation } = utils_1.ASTUtils;
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    var ScopeStackItem = class {
      constructor(node2) {
        this.trackedScopes = [];
        this.unnamedDerivedSignals = /* @__PURE__ */ new Set();
        this.hasJSX = false;
        this.node = node2;
      }
    };
    var ScopeStack = class extends Array {
      constructor() {
        super(...arguments);
        this.currentScope = () => this[this.length - 1];
        this.parentScope = () => this[this.length - 2];
        this.syncCallbacks = /* @__PURE__ */ new Set();
        this.findDeepestDeclarationScope = (a, b) => {
          if (a === b)
            return a;
          for (let i = this.length - 1; i >= 0; i -= 1) {
            const { node: node2 } = this[i];
            if (a === node2 || b === node2) {
              return node2;
            }
          }
          throw new Error("This should never happen");
        };
        this.signals = [];
        this.props = [];
      }
      pushSignal(variable, declarationScope = this.currentScope().node) {
        this.signals.push({
          references: variable.references.filter((reference) => !reference.init),
          variable,
          declarationScope
        });
      }
      pushUniqueSignal(variable, declarationScope) {
        const foundSignal = this.signals.find((s) => s.variable === variable);
        if (!foundSignal) {
          this.pushSignal(variable, declarationScope);
        } else {
          foundSignal.declarationScope = this.findDeepestDeclarationScope(foundSignal.declarationScope, declarationScope);
        }
      }
      pushProps(variable, declarationScope = this.currentScope().node) {
        this.props.push({
          references: variable.references.filter((reference) => !reference.init),
          variable,
          declarationScope
        });
      }
      *consumeSignalReferencesInScope() {
        yield* this.consumeReferencesInScope(this.signals);
        this.signals = this.signals.filter((variable) => variable.references.length !== 0);
      }
      *consumePropsReferencesInScope() {
        yield* this.consumeReferencesInScope(this.props);
        this.props = this.props.filter((variable) => variable.references.length !== 0);
      }
      *consumeReferencesInScope(variables) {
        for (const variable of variables) {
          const { references } = variable;
          const inScope = [], notInScope = [];
          references.forEach((reference) => {
            if (this.isReferenceInCurrentScope(reference)) {
              inScope.push(reference);
            } else {
              notInScope.push(reference);
            }
          });
          yield* inScope.map((reference) => ({
            reference,
            declarationScope: variable.declarationScope
          }));
          variable.references = notInScope;
        }
      }
      isReferenceInCurrentScope(reference) {
        let parentFunction = (0, utils_2.findParent)(reference.identifier, utils_2.isProgramOrFunctionNode);
        while ((0, utils_2.isFunctionNode)(parentFunction) && this.syncCallbacks.has(parentFunction)) {
          parentFunction = (0, utils_2.findParent)(parentFunction, utils_2.isProgramOrFunctionNode);
        }
        return parentFunction === this.currentScope().node;
      }
    };
    var getNthDestructuredVar = (id, n, scope) => {
      if (id?.type === "ArrayPattern") {
        const el = id.elements[n];
        if (el?.type === "Identifier") {
          return findVariable(scope, el.name);
        }
      }
      return null;
    };
    var getReturnedVar = (id, scope) => {
      if (id.type === "Identifier") {
        return findVariable(scope, id.name);
      }
      return null;
    };
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Enforce that reactivity (props, signals, memos, etc.) is properly used, so changes in those values will be tracked and update the view as expected.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/reactivity.md"
        },
        schema: [
          {
            type: "object",
            properties: {
              customReactiveFunctions: {
                description: "List of function names to consider as reactive functions (allow signals to be safely passed as arguments). In addition, any create* or use* functions are automatically included.",
                type: "array",
                items: {
                  type: "string"
                },
                default: []
              }
            },
            additionalProperties: false
          }
        ],
        messages: {
          noWrite: "The reactive variable '{{name}}' should not be reassigned or altered directly.",
          untrackedReactive: "The reactive variable '{{name}}' should be used within JSX, a tracked scope (like createEffect), or inside an event handler function, or else changes will be ignored.",
          expectedFunctionGotExpression: "The reactive variable '{{name}}' should be wrapped in a function for reactivity. This includes event handler bindings on native elements, which are not reactive like other JSX props.",
          badSignal: "The reactive variable '{{name}}' should be called as a function when used in {{where}}.",
          badUnnamedDerivedSignal: "This function should be passed to a tracked scope (like createEffect) or an event handler because it contains reactivity, or else changes will be ignored.",
          shouldDestructure: "For proper analysis, array destructuring should be used to capture the {{nth}}result of this function call.",
          shouldAssign: "For proper analysis, a variable should be used to capture the result of this function call.",
          noAsyncTrackedScope: "This tracked scope should not be async. Solid's reactivity only tracks synchronously."
        }
      },
      defaultOptions: [
        {
          customReactiveFunctions: []
        }
      ],
      create(context, [options]) {
        const warnShouldDestructure = (node2, nth) => context.report({
          node: node2,
          messageId: "shouldDestructure",
          data: nth ? { nth: nth + " " } : void 0
        });
        const warnShouldAssign = (node2) => context.report({ node: node2, messageId: "shouldAssign" });
        const sourceCode = context.getSourceCode();
        const scopeStack = new ScopeStack();
        const { currentScope, parentScope } = scopeStack;
        const { matchImport, handleImportDeclaration } = (0, utils_2.trackImports)();
        const markPropsOnCondition = (node2, cb) => {
          if (node2.params.length === 1 && node2.params[0].type === "Identifier" && node2.parent?.type !== "JSXExpressionContainer" && node2.parent?.type !== "TemplateLiteral" && cb(node2.params[0])) {
            const propsParam = findVariable(context.getScope(), node2.params[0]);
            if (propsParam) {
              scopeStack.pushProps(propsParam, node2);
            }
          }
        };
        const onFunctionEnter = (node2) => {
          if ((0, utils_2.isFunctionNode)(node2)) {
            if (scopeStack.syncCallbacks.has(node2)) {
              return;
            }
            markPropsOnCondition(node2, (props) => (0, utils_2.isPropsByName)(props.name));
          }
          scopeStack.push(new ScopeStackItem(node2));
        };
        const matchTrackedScope = (trackedScope, node2) => {
          switch (trackedScope.expect) {
            case "function":
            case "called-function":
              return node2 === trackedScope.node;
            case "expression":
              return Boolean((0, utils_2.findInScope)(node2, currentScope().node, (node3) => node3 === trackedScope.node));
          }
        };
        const handleTrackedScopes = (identifier, declarationScope) => {
          const currentScopeNode = currentScope().node;
          if (!currentScope().trackedScopes.find((trackedScope) => matchTrackedScope(trackedScope, identifier))) {
            const matchedExpression = currentScope().trackedScopes.find((trackedScope) => matchTrackedScope({ ...trackedScope, expect: "expression" }, identifier));
            if (declarationScope === currentScopeNode) {
              let parentMemberExpression = null;
              if (identifier.parent?.type === "MemberExpression") {
                parentMemberExpression = identifier.parent;
                while (parentMemberExpression.parent?.type === "MemberExpression") {
                  parentMemberExpression = parentMemberExpression.parent;
                }
              }
              const parentCallExpression = identifier.parent?.type === "CallExpression" ? identifier.parent : null;
              context.report({
                node: parentMemberExpression ?? parentCallExpression ?? identifier,
                messageId: matchedExpression ? "expectedFunctionGotExpression" : "untrackedReactive",
                data: {
                  name: parentMemberExpression ? sourceCode.getText(parentMemberExpression) : identifier.name
                }
              });
            } else {
              if (!parentScope() || !(0, utils_2.isFunctionNode)(currentScopeNode)) {
                throw new Error("this shouldn't happen!");
              }
              const pushUnnamedDerivedSignal = () => {
                var _a;
                return ((_a = parentScope()).unnamedDerivedSignals ?? (_a.unnamedDerivedSignals = /* @__PURE__ */ new Set())).add(currentScopeNode);
              };
              if (currentScopeNode.type === "FunctionDeclaration") {
                const functionVariable = sourceCode.scopeManager?.getDeclaredVariables(currentScopeNode)?.[0];
                if (functionVariable) {
                  scopeStack.pushUniqueSignal(functionVariable, declarationScope);
                } else {
                  pushUnnamedDerivedSignal();
                }
              } else if (currentScopeNode.parent?.type === "VariableDeclarator") {
                const declarator = currentScopeNode.parent;
                const functionVariable = sourceCode.scopeManager?.getDeclaredVariables(declarator)?.[0];
                if (functionVariable) {
                  scopeStack.pushUniqueSignal(functionVariable, declarationScope);
                } else {
                  pushUnnamedDerivedSignal();
                }
              } else if (currentScopeNode.parent?.type === "Property") {
              } else {
                pushUnnamedDerivedSignal();
              }
            }
          }
        };
        const onFunctionExit = (currentScopeNode) => {
          if ((0, utils_2.isFunctionNode)(currentScopeNode)) {
            markPropsOnCondition(currentScopeNode, (props) => {
              if (!(0, utils_2.isPropsByName)(props.name) && currentScope().hasJSX) {
                const functionName = (0, utils_2.getFunctionName)(currentScopeNode);
                if (functionName && !/^[a-z]/.test(functionName))
                  return true;
              }
              return false;
            });
          }
          if ((0, utils_2.isFunctionNode)(currentScopeNode) && scopeStack.syncCallbacks.has(currentScopeNode)) {
            return;
          }
          for (const { reference, declarationScope } of scopeStack.consumeSignalReferencesInScope()) {
            const identifier = reference.identifier;
            if (reference.isWrite()) {
              context.report({
                node: identifier,
                messageId: "noWrite",
                data: {
                  name: identifier.name
                }
              });
            } else if (identifier.type === "Identifier") {
              const reportBadSignal = (where) => context.report({
                node: identifier,
                messageId: "badSignal",
                data: { name: identifier.name, where }
              });
              if (identifier.parent?.type === "CallExpression" || identifier.parent?.type === "ArrayExpression" && identifier.parent.parent?.type === "CallExpression") {
                handleTrackedScopes(identifier, declarationScope);
              } else if (identifier.parent?.type === "TemplateLiteral") {
                reportBadSignal("template literals");
              } else if (identifier.parent?.type === "BinaryExpression" && [
                "<",
                "<=",
                ">",
                ">=",
                "<<",
                ">>",
                ">>>",
                "+",
                "-",
                "*",
                "/",
                "%",
                "**",
                "|",
                "^",
                "&",
                "in"
              ].includes(identifier.parent.operator)) {
                reportBadSignal("arithmetic or comparisons");
              } else if (identifier.parent?.type === "UnaryExpression" && ["-", "+", "~"].includes(identifier.parent.operator)) {
                reportBadSignal("unary expressions");
              } else if (identifier.parent?.type === "MemberExpression" && identifier.parent.computed && identifier.parent.property === identifier) {
                reportBadSignal("property accesses");
              } else if (identifier.parent?.type === "JSXExpressionContainer" && !currentScope().trackedScopes.find((trackedScope) => trackedScope.node === identifier && (trackedScope.expect === "function" || trackedScope.expect === "called-function"))) {
                const elementOrAttribute = identifier.parent.parent;
                if ((0, utils_2.isJSXElementOrFragment)(elementOrAttribute) || elementOrAttribute?.type === "JSXAttribute" && elementOrAttribute.parent?.type === "JSXOpeningElement" && elementOrAttribute.parent.name.type === "JSXIdentifier" && (0, utils_2.isDOMElementName)(elementOrAttribute.parent.name.name)) {
                  reportBadSignal("JSX");
                }
              }
            }
          }
          for (const { reference, declarationScope } of scopeStack.consumePropsReferencesInScope()) {
            const identifier = reference.identifier;
            if (reference.isWrite()) {
              context.report({
                node: identifier,
                messageId: "noWrite",
                data: {
                  name: identifier.name
                }
              });
            } else if (identifier.parent?.type === "MemberExpression" && identifier.parent.object === identifier) {
              const { parent } = identifier;
              if (parent.parent?.type === "AssignmentExpression" && parent.parent.left === parent) {
                context.report({
                  node: identifier,
                  messageId: "noWrite",
                  data: {
                    name: identifier.name
                  }
                });
              } else if (parent.property.type === "Identifier" && /^(?:initial|default|static)[A-Z]/.test(parent.property.name)) {
              } else {
                handleTrackedScopes(identifier, declarationScope);
              }
            } else if (identifier.parent?.type === "AssignmentExpression" || identifier.parent?.type === "VariableDeclarator") {
              context.report({
                node: identifier,
                messageId: "untrackedReactive",
                data: { name: identifier.name }
              });
            }
          }
          const { unnamedDerivedSignals } = currentScope();
          if (unnamedDerivedSignals) {
            for (const node2 of unnamedDerivedSignals) {
              if (!currentScope().trackedScopes.find((trackedScope) => matchTrackedScope(trackedScope, node2))) {
                context.report({
                  loc: getFunctionHeadLocation(node2, sourceCode),
                  messageId: "badUnnamedDerivedSignal"
                });
              }
            }
          }
          scopeStack.pop();
        };
        const checkForSyncCallbacks = (node2) => {
          if (node2.arguments.length === 1 && (0, utils_2.isFunctionNode)(node2.arguments[0]) && !node2.arguments[0].async) {
            if (node2.callee.type === "Identifier" && matchImport(["batch", "produce"], node2.callee.name)) {
              scopeStack.syncCallbacks.add(node2.arguments[0]);
            } else if (node2.callee.type === "MemberExpression" && !node2.callee.computed && node2.callee.object.type !== "ObjectExpression" && /^(?:forEach|map|flatMap|reduce|reduceRight|find|findIndex|filter|every|some)$/.test(node2.callee.property.name)) {
              scopeStack.syncCallbacks.add(node2.arguments[0]);
            }
          }
          if (node2.callee.type === "Identifier") {
            if (matchImport(["createSignal", "createStore"], node2.callee.name) && node2.parent?.type === "VariableDeclarator") {
              const setter = getNthDestructuredVar(node2.parent.id, 1, context.getScope());
              if (setter) {
                for (const reference of setter.references) {
                  const { identifier } = reference;
                  if (!reference.init && reference.isRead() && identifier.parent?.type === "CallExpression") {
                    for (const arg of identifier.parent.arguments) {
                      if ((0, utils_2.isFunctionNode)(arg) && !arg.async) {
                        scopeStack.syncCallbacks.add(arg);
                      }
                    }
                  }
                }
              }
            } else if (matchImport(["mapArray", "indexArray"], node2.callee.name)) {
              const arg1 = node2.arguments[1];
              if ((0, utils_2.isFunctionNode)(arg1)) {
                scopeStack.syncCallbacks.add(arg1);
              }
            }
          }
          if ((0, utils_2.isFunctionNode)(node2.callee)) {
            scopeStack.syncCallbacks.add(node2.callee);
          }
        };
        const checkForReactiveAssignment = (id, init) => {
          init = (0, utils_2.ignoreTransparentWrappers)(init);
          if (init.type === "CallExpression" && init.callee.type === "Identifier") {
            const { callee } = init;
            if (matchImport(["createSignal", "useTransition"], callee.name)) {
              const signal = id && getNthDestructuredVar(id, 0, context.getScope());
              if (signal) {
                scopeStack.pushSignal(signal, currentScope().node);
              } else {
                warnShouldDestructure(id ?? init, "first");
              }
            } else if (matchImport(["createMemo", "createSelector"], callee.name)) {
              const memo = id && getReturnedVar(id, context.getScope());
              if (memo) {
                scopeStack.pushSignal(memo, currentScope().node);
              } else {
                warnShouldAssign(id ?? init);
              }
            } else if (matchImport("createStore", callee.name)) {
              const store = id && getNthDestructuredVar(id, 0, context.getScope());
              if (store) {
                scopeStack.pushProps(store, currentScope().node);
              } else {
                warnShouldDestructure(id ?? init, "first");
              }
            } else if (matchImport("mergeProps", callee.name)) {
              const merged = id && getReturnedVar(id, context.getScope());
              if (merged) {
                scopeStack.pushProps(merged, currentScope().node);
              } else {
                warnShouldAssign(id ?? init);
              }
            } else if (matchImport("splitProps", callee.name)) {
              if (id?.type === "ArrayPattern") {
                const vars = id.elements.map((_, i) => getNthDestructuredVar(id, i, context.getScope())).filter(Boolean);
                if (vars.length === 0) {
                  warnShouldDestructure(id);
                } else {
                  vars.forEach((variable) => {
                    scopeStack.pushProps(variable, currentScope().node);
                  });
                }
              } else {
                const vars = id && getReturnedVar(id, context.getScope());
                if (vars) {
                  scopeStack.pushProps(vars, currentScope().node);
                }
              }
            } else if (matchImport("createResource", callee.name)) {
              const resourceReturn = id && getNthDestructuredVar(id, 0, context.getScope());
              if (resourceReturn) {
                scopeStack.pushProps(resourceReturn, currentScope().node);
              }
            } else if (matchImport("createMutable", callee.name)) {
              const mutable = id && getReturnedVar(id, context.getScope());
              if (mutable) {
                scopeStack.pushProps(mutable, currentScope().node);
              }
            } else if (matchImport("mapArray", callee.name)) {
              const arg1 = init.arguments[1];
              if ((0, utils_2.isFunctionNode)(arg1) && arg1.params.length >= 2 && arg1.params[1].type === "Identifier") {
                const indexSignal = findVariable(context.getScope(), arg1.params[1]);
                if (indexSignal) {
                  scopeStack.pushSignal(indexSignal);
                }
              }
            } else if (matchImport("indexArray", callee.name)) {
              const arg1 = init.arguments[1];
              if ((0, utils_2.isFunctionNode)(arg1) && arg1.params.length >= 1 && arg1.params[0].type === "Identifier") {
                const valueSignal = findVariable(context.getScope(), arg1.params[0]);
                if (valueSignal) {
                  scopeStack.pushSignal(valueSignal);
                }
              }
            }
          }
        };
        const checkForTrackedScopes = (node2) => {
          const pushTrackedScope = (node3, expect) => {
            currentScope().trackedScopes.push({ node: node3, expect });
            if (expect !== "called-function" && (0, utils_2.isFunctionNode)(node3) && node3.async) {
              context.report({
                node: node3,
                messageId: "noAsyncTrackedScope"
              });
            }
          };
          if (node2.type === "JSXExpressionContainer") {
            if (node2.parent?.type === "JSXAttribute" && /^on[:A-Z]/.test(sourceCode.getText(node2.parent.name)) && node2.parent.parent?.type === "JSXOpeningElement" && node2.parent.parent.name.type === "JSXIdentifier" && (0, utils_2.isDOMElementName)(node2.parent.parent.name.name)) {
              pushTrackedScope(node2.expression, "called-function");
            } else if (node2.parent?.type === "JSXAttribute" && node2.parent.name.type === "JSXNamespacedName" && node2.parent.name.namespace.name === "use" && (0, utils_2.isFunctionNode)(node2.expression)) {
              pushTrackedScope(node2.expression, "called-function");
            } else if (node2.parent?.type === "JSXAttribute" && node2.parent.name.name === "value" && node2.parent.parent?.type === "JSXOpeningElement" && (node2.parent.parent.name.type === "JSXIdentifier" && node2.parent.parent.name.name.endsWith("Provider") || node2.parent.parent.name.type === "JSXMemberExpression" && node2.parent.parent.name.property.name === "Provider")) {
            } else if (node2.parent?.type === "JSXAttribute" && node2.parent.name?.type === "JSXIdentifier" && /^static[A-Z]/.test(node2.parent.name.name) && node2.parent.parent?.type === "JSXOpeningElement" && node2.parent.parent.name.type === "JSXIdentifier" && !(0, utils_2.isDOMElementName)(node2.parent.parent.name.name)) {
            } else if (node2.parent?.type === "JSXAttribute" && node2.parent.name.name === "ref" && (0, utils_2.isFunctionNode)(node2.expression)) {
              pushTrackedScope(node2.expression, "called-function");
            } else if ((0, utils_2.isJSXElementOrFragment)(node2.parent) && (0, utils_2.isFunctionNode)(node2.expression)) {
              pushTrackedScope(node2.expression, "function");
            } else {
              pushTrackedScope(node2.expression, "expression");
            }
          } else if (node2.type === "JSXSpreadAttribute") {
            pushTrackedScope(node2.argument, "expression");
          } else if (node2.type === "NewExpression") {
            const { callee, arguments: { 0: arg0 } } = node2;
            if (callee.type === "Identifier" && arg0 && [
              "IntersectionObserver",
              "MutationObserver",
              "PerformanceObserver",
              "ReportingObserver",
              "ResizeObserver"
            ].includes(callee.name)) {
              pushTrackedScope(arg0, "called-function");
            }
          } else if (node2.type === "CallExpression") {
            if (node2.callee.type === "Identifier") {
              const { callee, arguments: { 0: arg0, 1: arg1 } } = node2;
              if (matchImport([
                "createMemo",
                "children",
                "createEffect",
                "createRenderEffect",
                "createDeferred",
                "createComputed",
                "createSelector",
                "untrack",
                "mapArray",
                "indexArray",
                "observable"
              ], callee.name) || matchImport("createResource", callee.name) && node2.arguments.length >= 2) {
                pushTrackedScope(arg0, "function");
              } else if (matchImport(["onMount", "onCleanup", "onError"], callee.name) || [
                "setInterval",
                "setTimeout",
                "setImmediate",
                "requestAnimationFrame",
                "requestIdleCallback"
              ].includes(callee.name)) {
                pushTrackedScope(arg0, "called-function");
              } else if (matchImport("on", callee.name)) {
                if (arg0) {
                  if (arg0.type === "ArrayExpression") {
                    arg0.elements.forEach((element) => {
                      if (element && element?.type !== "SpreadElement") {
                        pushTrackedScope(element, "function");
                      }
                    });
                  } else {
                    pushTrackedScope(arg0, "function");
                  }
                }
                if (arg1) {
                  pushTrackedScope(arg1, "called-function");
                }
              } else if (matchImport("createStore", callee.name) && arg0?.type === "ObjectExpression") {
                for (const property of arg0.properties) {
                  if (property.type === "Property" && property.kind === "get" && (0, utils_2.isFunctionNode)(property.value)) {
                    pushTrackedScope(property.value, "function");
                  }
                }
              } else if (matchImport("runWithOwner", callee.name)) {
                if (arg1) {
                  let isTrackedScope = true;
                  const owner = arg0.type === "Identifier" && findVariable(context.getScope(), arg0);
                  if (owner) {
                    const decl = owner.defs[0];
                    if (decl && decl.node.type === "VariableDeclarator" && decl.node.init?.type === "CallExpression" && decl.node.init.callee.type === "Identifier" && matchImport("getOwner", decl.node.init.callee.name)) {
                      const ownerFunction = (0, utils_2.findParent)(decl.node, utils_2.isProgramOrFunctionNode);
                      const scopeStackIndex = scopeStack.findIndex(({ node: node3 }) => ownerFunction === node3);
                      if (scopeStackIndex >= 1 && !scopeStack[scopeStackIndex - 1].trackedScopes.some((trackedScope) => trackedScope.expect === "function" && trackedScope.node === ownerFunction) || scopeStackIndex === 0) {
                        isTrackedScope = false;
                      }
                    }
                  }
                  if (isTrackedScope) {
                    pushTrackedScope(arg1, "function");
                  }
                }
              } else if (/^(?:use|create)[A-Z]/.test(callee.name) || options.customReactiveFunctions.includes(callee.name)) {
                for (const arg of node2.arguments) {
                  if ((0, utils_2.isFunctionNode)(arg)) {
                    pushTrackedScope(arg, "called-function");
                  } else if (arg.type === "Identifier" || arg.type === "ObjectExpression" || arg.type === "ArrayExpression") {
                    pushTrackedScope(arg, "expression");
                  }
                }
              }
            } else if (node2.callee.type === "MemberExpression") {
              const { property } = node2.callee;
              if (property.type === "Identifier" && property.name === "addEventListener" && node2.arguments.length >= 2) {
                pushTrackedScope(node2.arguments[1], "called-function");
              } else if (property.type === "Identifier" && (/^(?:use|create)[A-Z]/.test(property.name) || options.customReactiveFunctions.includes(property.name))) {
                for (const arg of node2.arguments) {
                  if ((0, utils_2.isFunctionNode)(arg)) {
                    pushTrackedScope(arg, "called-function");
                  } else if (arg.type === "Identifier" || arg.type === "ObjectExpression" || arg.type === "ArrayExpression") {
                    pushTrackedScope(arg, "expression");
                  }
                }
              }
            }
          } else if (node2.type === "VariableDeclarator") {
            if (node2.init?.type === "CallExpression" && node2.init.callee.type === "Identifier") {
              if (matchImport(["createReactive", "createReaction"], node2.init.callee.name)) {
                const track = getReturnedVar(node2.id, context.getScope());
                if (track) {
                  for (const reference of track.references) {
                    if (!reference.init && reference.isReadOnly() && reference.identifier.parent?.type === "CallExpression" && reference.identifier.parent.callee === reference.identifier) {
                      const arg0 = reference.identifier.parent.arguments[0];
                      arg0 && pushTrackedScope(arg0, "function");
                    }
                  }
                }
                if ((0, utils_2.isFunctionNode)(node2.init.arguments[0])) {
                  pushTrackedScope(node2.init.arguments[0], "called-function");
                }
              }
            }
          } else if (node2.type === "AssignmentExpression") {
            if (node2.left.type === "MemberExpression" && node2.left.property.type === "Identifier" && (0, utils_2.isFunctionNode)(node2.right) && /^on[a-z]+$/.test(node2.left.property.name)) {
              pushTrackedScope(node2.right, "called-function");
            }
          } else if (node2.type === "TaggedTemplateExpression") {
            for (const expression of node2.quasi.expressions) {
              if ((0, utils_2.isFunctionNode)(expression)) {
                pushTrackedScope(expression, "called-function");
                for (const param of expression.params) {
                  if (param.type === "Identifier" && (0, utils_2.isPropsByName)(param.name)) {
                    const variable = findVariable(context.getScope(), param);
                    if (variable)
                      scopeStack.pushProps(variable, currentScope().node);
                  }
                }
              }
            }
          }
        };
        return {
          ImportDeclaration: handleImportDeclaration,
          JSXExpressionContainer(node2) {
            checkForTrackedScopes(node2);
          },
          JSXSpreadAttribute(node2) {
            checkForTrackedScopes(node2);
          },
          CallExpression(node2) {
            checkForTrackedScopes(node2);
            checkForSyncCallbacks(node2);
            const parent = node2.parent && (0, utils_2.ignoreTransparentWrappers)(node2.parent, true);
            if (parent?.type !== "AssignmentExpression" && parent?.type !== "VariableDeclarator") {
              checkForReactiveAssignment(null, node2);
            }
          },
          NewExpression(node2) {
            checkForTrackedScopes(node2);
          },
          VariableDeclarator(node2) {
            if (node2.init) {
              checkForReactiveAssignment(node2.id, node2.init);
              checkForTrackedScopes(node2);
            }
          },
          AssignmentExpression(node2) {
            if (node2.left.type !== "MemberExpression") {
              checkForReactiveAssignment(node2.left, node2.right);
            }
            checkForTrackedScopes(node2);
          },
          TaggedTemplateExpression(node2) {
            checkForTrackedScopes(node2);
          },
          "JSXElement > JSXExpressionContainer > :function"(node2) {
            if ((0, utils_2.isFunctionNode)(node2) && node2.parent?.type === "JSXExpressionContainer" && node2.parent.parent?.type === "JSXElement") {
              const element = node2.parent.parent;
              if (element.openingElement.name.type === "JSXIdentifier") {
                const tagName = element.openingElement.name.name;
                if (matchImport("For", tagName) && node2.params.length === 2 && node2.params[1].type === "Identifier") {
                  const index = findVariable(context.getScope(), node2.params[1]);
                  if (index) {
                    scopeStack.pushSignal(index, currentScope().node);
                  }
                } else if (matchImport("Index", tagName) && node2.params.length >= 1 && node2.params[0].type === "Identifier") {
                  const item = findVariable(context.getScope(), node2.params[0]);
                  if (item) {
                    scopeStack.pushSignal(item, currentScope().node);
                  }
                }
              }
            }
          },
          FunctionExpression: onFunctionEnter,
          ArrowFunctionExpression: onFunctionEnter,
          FunctionDeclaration: onFunctionEnter,
          Program: onFunctionEnter,
          "FunctionExpression:exit": onFunctionExit,
          "ArrowFunctionExpression:exit": onFunctionExit,
          "FunctionDeclaration:exit": onFunctionExit,
          "Program:exit": onFunctionExit,
          JSXElement() {
            if (scopeStack.length) {
              currentScope().hasJSX = true;
            }
          },
          JSXFragment() {
            if (scopeStack.length) {
              currentScope().hasJSX = true;
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/self-closing-comp.js
var require_self_closing_comp = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/self-closing-comp.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var utils_2 = require_utils();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    function isComponent(node2) {
      return node2.name.type === "JSXIdentifier" && !(0, utils_2.isDOMElementName)(node2.name.name) || node2.name.type === "JSXMemberExpression";
    }
    var voidDOMElementRegex = /^(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;
    function isVoidDOMElementName(name) {
      return voidDOMElementRegex.test(name);
    }
    function childrenIsEmpty(node2) {
      return node2.parent.children.length === 0;
    }
    function childrenIsMultilineSpaces(node2) {
      const childrens = node2.parent.children;
      return childrens.length === 1 && childrens[0].type === "JSXText" && childrens[0].value.indexOf("\n") !== -1 && childrens[0].value.replace(/(?!\xA0)\s/g, "") === "";
    }
    exports.default = createRule({
      meta: {
        type: "layout",
        docs: {
          description: "Disallow extra closing tags for components without children.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/self-closing-comp.md"
        },
        fixable: "code",
        schema: [
          {
            type: "object",
            properties: {
              component: {
                type: "string",
                description: "which Solid components should be self-closing when possible",
                enum: ["all", "none"],
                default: "all"
              },
              html: {
                type: "string",
                description: "which native elements should be self-closing when possible",
                enum: ["all", "void", "none"],
                default: "all"
              }
            },
            additionalProperties: false
          }
        ],
        messages: {
          selfClose: "Empty components are self-closing.",
          dontSelfClose: "This element should not be self-closing."
        }
      },
      defaultOptions: [],
      create(context) {
        function shouldBeSelfClosedWhenPossible(node2) {
          if (isComponent(node2)) {
            const whichComponents = context.options[0]?.component ?? "all";
            return whichComponents === "all";
          } else if (node2.name.type === "JSXIdentifier" && (0, utils_2.isDOMElementName)(node2.name.name)) {
            const whichComponents = context.options[0]?.html ?? "all";
            switch (whichComponents) {
              case "all":
                return true;
              case "void":
                return isVoidDOMElementName(node2.name.name);
              case "none":
                return false;
            }
          }
          return true;
        }
        return {
          JSXOpeningElement(node2) {
            const canSelfClose = childrenIsEmpty(node2) || childrenIsMultilineSpaces(node2);
            if (canSelfClose) {
              const shouldSelfClose = shouldBeSelfClosedWhenPossible(node2);
              if (shouldSelfClose && !node2.selfClosing) {
                context.report({
                  node: node2,
                  messageId: "selfClose",
                  fix(fixer) {
                    const openingElementEnding = node2.range[1] - 1;
                    const closingElementEnding = node2.parent.closingElement.range[1];
                    const range = [openingElementEnding, closingElementEnding];
                    return fixer.replaceTextRange(range, " />");
                  }
                });
              } else if (!shouldSelfClose && node2.selfClosing) {
                context.report({
                  node: node2,
                  messageId: "dontSelfClose",
                  fix(fixer) {
                    const sourceCode = context.getSourceCode();
                    const tagName = context.getSourceCode().getText(node2.name);
                    const selfCloseEnding = node2.range[1];
                    const lastTokens = sourceCode.getLastTokens(node2, { count: 3 });
                    const isSpaceBeforeSelfClose = sourceCode.isSpaceBetween?.(lastTokens[0], lastTokens[1]);
                    const range = [
                      isSpaceBeforeSelfClose ? selfCloseEnding - 3 : selfCloseEnding - 2,
                      selfCloseEnding
                    ];
                    return fixer.replaceTextRange(range, `></${tagName}>`);
                  }
                });
              }
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/kebab-case@1.0.2/node_modules/kebab-case/index.js
var require_kebab_case = __commonJS({
  "node_modules/.pnpm/kebab-case@1.0.2/node_modules/kebab-case/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;
    var REVERSE_REGEX = /-[a-z\u00E0-\u00F6\u00F8-\u00FE]/g;
    module2.exports = exports = function kebabCase(str) {
      return str.replace(KEBAB_REGEX, function(match) {
        return "-" + match.toLowerCase();
      });
    };
    exports.reverse = function(str) {
      return str.replace(REVERSE_REGEX, function(match) {
        return match.slice(1).toUpperCase();
      });
    };
  }
});

// node_modules/.pnpm/known-css-properties@0.24.0/node_modules/known-css-properties/data/all.json
var require_all = __commonJS({
  "node_modules/.pnpm/known-css-properties@0.24.0/node_modules/known-css-properties/data/all.json"(exports, module2) {
    module2.exports = {
      properties: [
        "-epub-caption-side",
        "-epub-hyphens",
        "-epub-text-combine",
        "-epub-text-emphasis",
        "-epub-text-emphasis-color",
        "-epub-text-emphasis-style",
        "-epub-text-orientation",
        "-epub-text-transform",
        "-epub-word-break",
        "-epub-writing-mode",
        "-internal-text-autosizing-status",
        "accelerator",
        "accent-color",
        "-wap-accesskey",
        "additive-symbols",
        "align-content",
        "-webkit-align-content",
        "align-items",
        "-webkit-align-items",
        "align-self",
        "-webkit-align-self",
        "alignment-baseline",
        "all",
        "alt",
        "-webkit-alt",
        "animation",
        "animation-delay",
        "-moz-animation-delay",
        "-ms-animation-delay",
        "-webkit-animation-delay",
        "animation-direction",
        "-moz-animation-direction",
        "-ms-animation-direction",
        "-webkit-animation-direction",
        "animation-duration",
        "-moz-animation-duration",
        "-ms-animation-duration",
        "-webkit-animation-duration",
        "animation-fill-mode",
        "-moz-animation-fill-mode",
        "-ms-animation-fill-mode",
        "-webkit-animation-fill-mode",
        "animation-iteration-count",
        "-moz-animation-iteration-count",
        "-ms-animation-iteration-count",
        "-webkit-animation-iteration-count",
        "-moz-animation",
        "-ms-animation",
        "animation-name",
        "-moz-animation-name",
        "-ms-animation-name",
        "-webkit-animation-name",
        "animation-play-state",
        "-moz-animation-play-state",
        "-ms-animation-play-state",
        "-webkit-animation-play-state",
        "animation-timing-function",
        "-moz-animation-timing-function",
        "-ms-animation-timing-function",
        "-webkit-animation-timing-function",
        "-webkit-animation-trigger",
        "-webkit-animation",
        "app-region",
        "-webkit-app-region",
        "appearance",
        "-moz-appearance",
        "-webkit-appearance",
        "ascent-override",
        "aspect-ratio",
        "-webkit-aspect-ratio",
        "audio-level",
        "azimuth",
        "backdrop-filter",
        "-webkit-backdrop-filter",
        "backface-visibility",
        "-moz-backface-visibility",
        "-ms-backface-visibility",
        "-webkit-backface-visibility",
        "background",
        "background-attachment",
        "-webkit-background-attachment",
        "background-blend-mode",
        "background-clip",
        "-moz-background-clip",
        "-webkit-background-clip",
        "background-color",
        "-webkit-background-color",
        "-webkit-background-composite",
        "background-image",
        "-webkit-background-image",
        "-moz-background-inline-policy",
        "background-origin",
        "-moz-background-origin",
        "-webkit-background-origin",
        "background-position",
        "-webkit-background-position",
        "background-position-x",
        "-webkit-background-position-x",
        "background-position-y",
        "-webkit-background-position-y",
        "background-repeat",
        "-webkit-background-repeat",
        "background-repeat-x",
        "background-repeat-y",
        "background-size",
        "-moz-background-size",
        "-webkit-background-size",
        "-webkit-background",
        "baseline-shift",
        "baseline-source",
        "behavior",
        "-moz-binding",
        "block-ellipsis",
        "-ms-block-progression",
        "block-size",
        "block-step",
        "block-step-align",
        "block-step-insert",
        "block-step-round",
        "block-step-size",
        "bookmark-label",
        "bookmark-level",
        "bookmark-state",
        "border",
        "-webkit-border-after-color",
        "-webkit-border-after-style",
        "-webkit-border-after",
        "-webkit-border-after-width",
        "-webkit-border-before-color",
        "-webkit-border-before-style",
        "-webkit-border-before",
        "-webkit-border-before-width",
        "border-block",
        "border-block-color",
        "border-block-end",
        "border-block-end-color",
        "border-block-end-style",
        "border-block-end-width",
        "border-block-start",
        "border-block-start-color",
        "border-block-start-style",
        "border-block-start-width",
        "border-block-style",
        "border-block-width",
        "border-bottom",
        "border-bottom-color",
        "-moz-border-bottom-colors",
        "border-bottom-left-radius",
        "-webkit-border-bottom-left-radius",
        "border-bottom-right-radius",
        "-webkit-border-bottom-right-radius",
        "border-bottom-style",
        "border-bottom-width",
        "border-boundary",
        "border-collapse",
        "border-color",
        "-moz-border-end-color",
        "-webkit-border-end-color",
        "border-end-end-radius",
        "-moz-border-end",
        "border-end-start-radius",
        "-moz-border-end-style",
        "-webkit-border-end-style",
        "-webkit-border-end",
        "-moz-border-end-width",
        "-webkit-border-end-width",
        "-webkit-border-fit",
        "-webkit-border-horizontal-spacing",
        "border-image",
        "-moz-border-image",
        "-o-border-image",
        "border-image-outset",
        "-webkit-border-image-outset",
        "border-image-repeat",
        "-webkit-border-image-repeat",
        "border-image-slice",
        "-webkit-border-image-slice",
        "border-image-source",
        "-webkit-border-image-source",
        "-webkit-border-image",
        "border-image-width",
        "-webkit-border-image-width",
        "border-inline",
        "border-inline-color",
        "border-inline-end",
        "border-inline-end-color",
        "border-inline-end-style",
        "border-inline-end-width",
        "border-inline-start",
        "border-inline-start-color",
        "border-inline-start-style",
        "border-inline-start-width",
        "border-inline-style",
        "border-inline-width",
        "border-left",
        "border-left-color",
        "-moz-border-left-colors",
        "border-left-style",
        "border-left-width",
        "border-radius",
        "-moz-border-radius-bottomleft",
        "-moz-border-radius-bottomright",
        "-moz-border-radius",
        "-moz-border-radius-topleft",
        "-moz-border-radius-topright",
        "-webkit-border-radius",
        "border-right",
        "border-right-color",
        "-moz-border-right-colors",
        "border-right-style",
        "border-right-width",
        "border-spacing",
        "-moz-border-start-color",
        "-webkit-border-start-color",
        "border-start-end-radius",
        "-moz-border-start",
        "border-start-start-radius",
        "-moz-border-start-style",
        "-webkit-border-start-style",
        "-webkit-border-start",
        "-moz-border-start-width",
        "-webkit-border-start-width",
        "border-style",
        "border-top",
        "border-top-color",
        "-moz-border-top-colors",
        "border-top-left-radius",
        "-webkit-border-top-left-radius",
        "border-top-right-radius",
        "-webkit-border-top-right-radius",
        "border-top-style",
        "border-top-width",
        "-webkit-border-vertical-spacing",
        "border-width",
        "bottom",
        "-moz-box-align",
        "-webkit-box-align",
        "box-decoration-break",
        "-webkit-box-decoration-break",
        "-moz-box-direction",
        "-webkit-box-direction",
        "-webkit-box-flex-group",
        "-moz-box-flex",
        "-webkit-box-flex",
        "-webkit-box-lines",
        "-moz-box-ordinal-group",
        "-webkit-box-ordinal-group",
        "-moz-box-orient",
        "-webkit-box-orient",
        "-moz-box-pack",
        "-webkit-box-pack",
        "-webkit-box-reflect",
        "box-shadow",
        "-moz-box-shadow",
        "-webkit-box-shadow",
        "box-sizing",
        "-moz-box-sizing",
        "-webkit-box-sizing",
        "box-snap",
        "break-after",
        "break-before",
        "break-inside",
        "buffered-rendering",
        "caption-side",
        "caret",
        "caret-color",
        "caret-shape",
        "chains",
        "clear",
        "clip",
        "clip-path",
        "-webkit-clip-path",
        "clip-rule",
        "color",
        "color-adjust",
        "-webkit-color-correction",
        "-apple-color-filter",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "color-scheme",
        "-webkit-column-axis",
        "-webkit-column-break-after",
        "-webkit-column-break-before",
        "-webkit-column-break-inside",
        "column-count",
        "-moz-column-count",
        "-webkit-column-count",
        "column-fill",
        "-moz-column-fill",
        "-webkit-column-fill",
        "column-gap",
        "-moz-column-gap",
        "-webkit-column-gap",
        "column-progression",
        "-webkit-column-progression",
        "column-rule",
        "column-rule-color",
        "-moz-column-rule-color",
        "-webkit-column-rule-color",
        "-moz-column-rule",
        "column-rule-style",
        "-moz-column-rule-style",
        "-webkit-column-rule-style",
        "-webkit-column-rule",
        "column-rule-width",
        "-moz-column-rule-width",
        "-webkit-column-rule-width",
        "column-span",
        "-moz-column-span",
        "-webkit-column-span",
        "column-width",
        "-moz-column-width",
        "-webkit-column-width",
        "columns",
        "-moz-columns",
        "-webkit-columns",
        "-webkit-composition-fill-color",
        "-webkit-composition-frame-color",
        "contain",
        "contain-intrinsic-block-size",
        "contain-intrinsic-height",
        "contain-intrinsic-inline-size",
        "contain-intrinsic-size",
        "contain-intrinsic-width",
        "content",
        "content-visibility",
        "-ms-content-zoom-chaining",
        "-ms-content-zoom-limit-max",
        "-ms-content-zoom-limit-min",
        "-ms-content-zoom-limit",
        "-ms-content-zoom-snap",
        "-ms-content-zoom-snap-points",
        "-ms-content-zoom-snap-type",
        "-ms-content-zooming",
        "continue",
        "counter-increment",
        "counter-reset",
        "counter-set",
        "cue",
        "cue-after",
        "cue-before",
        "cursor",
        "-webkit-cursor-visibility",
        "cx",
        "cy",
        "d",
        "-apple-dashboard-region",
        "-webkit-dashboard-region",
        "descent-override",
        "direction",
        "display",
        "display-align",
        "dominant-baseline",
        "elevation",
        "empty-cells",
        "enable-background",
        "epub-caption-side",
        "epub-hyphens",
        "epub-text-combine",
        "epub-text-emphasis",
        "epub-text-emphasis-color",
        "epub-text-emphasis-style",
        "epub-text-orientation",
        "epub-text-transform",
        "epub-word-break",
        "epub-writing-mode",
        "fallback",
        "fill",
        "fill-break",
        "fill-color",
        "fill-image",
        "fill-opacity",
        "fill-origin",
        "fill-position",
        "fill-repeat",
        "fill-rule",
        "fill-size",
        "filter",
        "-ms-filter",
        "-webkit-filter",
        "flex",
        "-ms-flex-align",
        "-webkit-flex-align",
        "flex-basis",
        "-webkit-flex-basis",
        "flex-direction",
        "-ms-flex-direction",
        "-webkit-flex-direction",
        "flex-flow",
        "-ms-flex-flow",
        "-webkit-flex-flow",
        "flex-grow",
        "-webkit-flex-grow",
        "-ms-flex-item-align",
        "-webkit-flex-item-align",
        "-ms-flex-line-pack",
        "-webkit-flex-line-pack",
        "-ms-flex",
        "-ms-flex-negative",
        "-ms-flex-order",
        "-webkit-flex-order",
        "-ms-flex-pack",
        "-webkit-flex-pack",
        "-ms-flex-positive",
        "-ms-flex-preferred-size",
        "flex-shrink",
        "-webkit-flex-shrink",
        "-webkit-flex",
        "flex-wrap",
        "-ms-flex-wrap",
        "-webkit-flex-wrap",
        "float",
        "float-defer",
        "-moz-float-edge",
        "float-offset",
        "float-reference",
        "flood-color",
        "flood-opacity",
        "flow",
        "flow-from",
        "-ms-flow-from",
        "-webkit-flow-from",
        "flow-into",
        "-ms-flow-into",
        "-webkit-flow-into",
        "font",
        "font-display",
        "font-family",
        "font-feature-settings",
        "-moz-font-feature-settings",
        "-ms-font-feature-settings",
        "-webkit-font-feature-settings",
        "font-kerning",
        "-webkit-font-kerning",
        "font-language-override",
        "-moz-font-language-override",
        "font-optical-sizing",
        "font-palette",
        "font-size",
        "font-size-adjust",
        "-webkit-font-size-delta",
        "-webkit-font-smoothing",
        "font-stretch",
        "font-style",
        "font-synthesis",
        "font-synthesis-small-caps",
        "font-synthesis-style",
        "font-synthesis-weight",
        "font-variant",
        "font-variant-alternates",
        "font-variant-caps",
        "font-variant-east-asian",
        "font-variant-emoji",
        "font-variant-ligatures",
        "-webkit-font-variant-ligatures",
        "font-variant-numeric",
        "font-variant-position",
        "font-variation-settings",
        "font-weight",
        "footnote-display",
        "footnote-policy",
        "-moz-force-broken-image-icon",
        "forced-color-adjust",
        "gap",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "grid",
        "-webkit-grid-after",
        "grid-area",
        "grid-auto-columns",
        "-webkit-grid-auto-columns",
        "grid-auto-flow",
        "-webkit-grid-auto-flow",
        "grid-auto-rows",
        "-webkit-grid-auto-rows",
        "-webkit-grid-before",
        "grid-column",
        "-ms-grid-column-align",
        "grid-column-end",
        "grid-column-gap",
        "-ms-grid-column",
        "-ms-grid-column-span",
        "grid-column-start",
        "-webkit-grid-column",
        "-ms-grid-columns",
        "-webkit-grid-columns",
        "-webkit-grid-end",
        "grid-gap",
        "grid-row",
        "-ms-grid-row-align",
        "grid-row-end",
        "grid-row-gap",
        "-ms-grid-row",
        "-ms-grid-row-span",
        "grid-row-start",
        "-webkit-grid-row",
        "-ms-grid-rows",
        "-webkit-grid-rows",
        "-webkit-grid-start",
        "grid-template",
        "grid-template-areas",
        "grid-template-columns",
        "grid-template-rows",
        "hanging-punctuation",
        "height",
        "-ms-high-contrast-adjust",
        "-webkit-highlight",
        "hyphenate-character",
        "-webkit-hyphenate-character",
        "-webkit-hyphenate-limit-after",
        "-webkit-hyphenate-limit-before",
        "hyphenate-limit-chars",
        "-ms-hyphenate-limit-chars",
        "hyphenate-limit-last",
        "hyphenate-limit-lines",
        "-ms-hyphenate-limit-lines",
        "-webkit-hyphenate-limit-lines",
        "hyphenate-limit-zone",
        "-ms-hyphenate-limit-zone",
        "hyphens",
        "-moz-hyphens",
        "-ms-hyphens",
        "-webkit-hyphens",
        "image-orientation",
        "-moz-image-region",
        "image-rendering",
        "image-resolution",
        "-ms-ime-align",
        "ime-mode",
        "inherits",
        "initial-letter",
        "initial-letter-align",
        "-webkit-initial-letter",
        "initial-letter-wrap",
        "initial-value",
        "inline-size",
        "inline-sizing",
        "input-format",
        "-wap-input-format",
        "-wap-input-required",
        "input-security",
        "inset",
        "inset-block",
        "inset-block-end",
        "inset-block-start",
        "inset-inline",
        "inset-inline-end",
        "inset-inline-start",
        "-ms-interpolation-mode",
        "isolation",
        "justify-content",
        "-webkit-justify-content",
        "justify-items",
        "-webkit-justify-items",
        "justify-self",
        "-webkit-justify-self",
        "kerning",
        "layout-flow",
        "layout-grid",
        "layout-grid-char",
        "layout-grid-line",
        "layout-grid-mode",
        "layout-grid-type",
        "leading-trim",
        "left",
        "letter-spacing",
        "lighting-color",
        "-webkit-line-align",
        "-webkit-line-box-contain",
        "line-break",
        "-webkit-line-break",
        "line-clamp",
        "-webkit-line-clamp",
        "line-gap-override",
        "line-grid",
        "-webkit-line-grid-snap",
        "-webkit-line-grid",
        "line-height",
        "line-height-step",
        "line-increment",
        "line-padding",
        "line-snap",
        "-webkit-line-snap",
        "-o-link",
        "-o-link-source",
        "list-style",
        "list-style-image",
        "list-style-position",
        "list-style-type",
        "-webkit-locale",
        "-webkit-logical-height",
        "-webkit-logical-width",
        "margin",
        "-webkit-margin-after-collapse",
        "-webkit-margin-after",
        "-webkit-margin-before-collapse",
        "-webkit-margin-before",
        "margin-block",
        "margin-block-end",
        "margin-block-start",
        "margin-bottom",
        "-webkit-margin-bottom-collapse",
        "margin-break",
        "-webkit-margin-collapse",
        "-moz-margin-end",
        "-webkit-margin-end",
        "margin-inline",
        "margin-inline-end",
        "margin-inline-start",
        "margin-left",
        "margin-right",
        "-moz-margin-start",
        "-webkit-margin-start",
        "margin-top",
        "-webkit-margin-top-collapse",
        "margin-trim",
        "marker",
        "marker-end",
        "marker-knockout-left",
        "marker-knockout-right",
        "marker-mid",
        "marker-offset",
        "marker-pattern",
        "marker-segment",
        "marker-side",
        "marker-start",
        "marks",
        "-wap-marquee-dir",
        "-webkit-marquee-direction",
        "-webkit-marquee-increment",
        "-wap-marquee-loop",
        "-webkit-marquee-repetition",
        "-wap-marquee-speed",
        "-webkit-marquee-speed",
        "-wap-marquee-style",
        "-webkit-marquee-style",
        "-webkit-marquee",
        "mask",
        "-webkit-mask-attachment",
        "mask-border",
        "mask-border-mode",
        "mask-border-outset",
        "mask-border-repeat",
        "mask-border-slice",
        "mask-border-source",
        "mask-border-width",
        "-webkit-mask-box-image-outset",
        "-webkit-mask-box-image-repeat",
        "-webkit-mask-box-image-slice",
        "-webkit-mask-box-image-source",
        "-webkit-mask-box-image",
        "-webkit-mask-box-image-width",
        "mask-clip",
        "-webkit-mask-clip",
        "mask-composite",
        "-webkit-mask-composite",
        "mask-image",
        "-webkit-mask-image",
        "mask-mode",
        "mask-origin",
        "-webkit-mask-origin",
        "mask-position",
        "-webkit-mask-position",
        "mask-position-x",
        "-webkit-mask-position-x",
        "mask-position-y",
        "-webkit-mask-position-y",
        "mask-repeat",
        "-webkit-mask-repeat",
        "-webkit-mask-repeat-x",
        "-webkit-mask-repeat-y",
        "mask-size",
        "-webkit-mask-size",
        "mask-source-type",
        "-webkit-mask-source-type",
        "mask-type",
        "-webkit-mask",
        "-webkit-match-nearest-mail-blockquote-color",
        "math-style",
        "max-block-size",
        "max-height",
        "max-inline-size",
        "max-lines",
        "-webkit-max-logical-height",
        "-webkit-max-logical-width",
        "max-width",
        "max-zoom",
        "min-block-size",
        "min-height",
        "min-inline-size",
        "min-intrinsic-sizing",
        "-webkit-min-logical-height",
        "-webkit-min-logical-width",
        "min-width",
        "min-zoom",
        "mix-blend-mode",
        "motion",
        "motion-offset",
        "motion-path",
        "motion-rotation",
        "nav-down",
        "nav-index",
        "nav-left",
        "nav-right",
        "nav-up",
        "-webkit-nbsp-mode",
        "negative",
        "object-fit",
        "-o-object-fit",
        "object-position",
        "-o-object-position",
        "offset",
        "offset-anchor",
        "offset-block-end",
        "offset-block-start",
        "offset-distance",
        "offset-inline-end",
        "offset-inline-start",
        "offset-path",
        "offset-position",
        "offset-rotate",
        "offset-rotation",
        "opacity",
        "-moz-opacity",
        "-webkit-opacity",
        "order",
        "-webkit-order",
        "-moz-orient",
        "orientation",
        "orphans",
        "-moz-osx-font-smoothing",
        "outline",
        "outline-color",
        "-moz-outline-color",
        "-moz-outline",
        "outline-offset",
        "-moz-outline-offset",
        "-moz-outline-radius-bottomleft",
        "-moz-outline-radius-bottomright",
        "-moz-outline-radius",
        "-moz-outline-radius-topleft",
        "-moz-outline-radius-topright",
        "outline-style",
        "-moz-outline-style",
        "outline-width",
        "-moz-outline-width",
        "overflow",
        "overflow-anchor",
        "overflow-block",
        "overflow-clip-margin",
        "overflow-inline",
        "-webkit-overflow-scrolling",
        "-ms-overflow-style",
        "overflow-wrap",
        "overflow-x",
        "overflow-y",
        "overscroll-behavior",
        "overscroll-behavior-block",
        "overscroll-behavior-inline",
        "overscroll-behavior-x",
        "overscroll-behavior-y",
        "pad",
        "padding",
        "-webkit-padding-after",
        "-webkit-padding-before",
        "padding-block",
        "padding-block-end",
        "padding-block-start",
        "padding-bottom",
        "-moz-padding-end",
        "-webkit-padding-end",
        "padding-inline",
        "padding-inline-end",
        "padding-inline-start",
        "padding-left",
        "padding-right",
        "-moz-padding-start",
        "-webkit-padding-start",
        "padding-top",
        "page",
        "page-break-after",
        "page-break-before",
        "page-break-inside",
        "page-orientation",
        "paint-order",
        "pause",
        "pause-after",
        "pause-before",
        "-apple-pay-button-style",
        "-apple-pay-button-type",
        "pen-action",
        "perspective",
        "-moz-perspective",
        "-ms-perspective",
        "perspective-origin",
        "-moz-perspective-origin",
        "-ms-perspective-origin",
        "-webkit-perspective-origin",
        "perspective-origin-x",
        "-webkit-perspective-origin-x",
        "perspective-origin-y",
        "-webkit-perspective-origin-y",
        "-webkit-perspective",
        "pitch",
        "pitch-range",
        "place-content",
        "place-items",
        "place-self",
        "play-during",
        "pointer-events",
        "position",
        "prefix",
        "print-color-adjust",
        "-webkit-print-color-adjust",
        "property-name",
        "quotes",
        "r",
        "range",
        "-webkit-region-break-after",
        "-webkit-region-break-before",
        "-webkit-region-break-inside",
        "region-fragment",
        "-webkit-region-fragment",
        "-webkit-region-overflow",
        "resize",
        "rest",
        "rest-after",
        "rest-before",
        "richness",
        "right",
        "rotate",
        "row-gap",
        "-webkit-rtl-ordering",
        "ruby-align",
        "ruby-merge",
        "ruby-overhang",
        "ruby-position",
        "-webkit-ruby-position",
        "running",
        "rx",
        "ry",
        "scale",
        "scroll-behavior",
        "-ms-scroll-chaining",
        "-ms-scroll-limit",
        "-ms-scroll-limit-x-max",
        "-ms-scroll-limit-x-min",
        "-ms-scroll-limit-y-max",
        "-ms-scroll-limit-y-min",
        "scroll-margin",
        "scroll-margin-block",
        "scroll-margin-block-end",
        "scroll-margin-block-start",
        "scroll-margin-bottom",
        "scroll-margin-inline",
        "scroll-margin-inline-end",
        "scroll-margin-inline-start",
        "scroll-margin-left",
        "scroll-margin-right",
        "scroll-margin-top",
        "scroll-padding",
        "scroll-padding-block",
        "scroll-padding-block-end",
        "scroll-padding-block-start",
        "scroll-padding-bottom",
        "scroll-padding-inline",
        "scroll-padding-inline-end",
        "scroll-padding-inline-start",
        "scroll-padding-left",
        "scroll-padding-right",
        "scroll-padding-top",
        "-ms-scroll-rails",
        "scroll-snap-align",
        "scroll-snap-coordinate",
        "-webkit-scroll-snap-coordinate",
        "scroll-snap-destination",
        "-webkit-scroll-snap-destination",
        "scroll-snap-margin",
        "scroll-snap-margin-bottom",
        "scroll-snap-margin-left",
        "scroll-snap-margin-right",
        "scroll-snap-margin-top",
        "scroll-snap-points-x",
        "-ms-scroll-snap-points-x",
        "-webkit-scroll-snap-points-x",
        "scroll-snap-points-y",
        "-ms-scroll-snap-points-y",
        "-webkit-scroll-snap-points-y",
        "scroll-snap-stop",
        "scroll-snap-type",
        "-ms-scroll-snap-type",
        "-webkit-scroll-snap-type",
        "scroll-snap-type-x",
        "scroll-snap-type-y",
        "-ms-scroll-snap-x",
        "-ms-scroll-snap-y",
        "-ms-scroll-translation",
        "scrollbar-arrow-color",
        "scrollbar-base-color",
        "scrollbar-color",
        "scrollbar-dark-shadow-color",
        "scrollbar-darkshadow-color",
        "scrollbar-face-color",
        "scrollbar-gutter",
        "scrollbar-highlight-color",
        "scrollbar-shadow-color",
        "scrollbar-track-color",
        "scrollbar-width",
        "scrollbar3d-light-color",
        "scrollbar3dlight-color",
        "shape-image-threshold",
        "-webkit-shape-image-threshold",
        "shape-inside",
        "-webkit-shape-inside",
        "shape-margin",
        "-webkit-shape-margin",
        "shape-outside",
        "-webkit-shape-outside",
        "-webkit-shape-padding",
        "shape-rendering",
        "size",
        "size-adjust",
        "snap-height",
        "solid-color",
        "solid-opacity",
        "spatial-navigation-action",
        "spatial-navigation-contain",
        "spatial-navigation-function",
        "speak",
        "speak-as",
        "speak-header",
        "speak-numeral",
        "speak-punctuation",
        "speech-rate",
        "src",
        "-moz-stack-sizing",
        "stop-color",
        "stop-opacity",
        "stress",
        "string-set",
        "stroke",
        "stroke-align",
        "stroke-alignment",
        "stroke-break",
        "stroke-color",
        "stroke-dash-corner",
        "stroke-dash-justify",
        "stroke-dashadjust",
        "stroke-dasharray",
        "stroke-dashcorner",
        "stroke-dashoffset",
        "stroke-image",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-origin",
        "stroke-position",
        "stroke-repeat",
        "stroke-size",
        "stroke-width",
        "suffix",
        "supported-color-schemes",
        "-webkit-svg-shadow",
        "symbols",
        "syntax",
        "system",
        "tab-size",
        "-moz-tab-size",
        "-o-tab-size",
        "-o-table-baseline",
        "table-layout",
        "-webkit-tap-highlight-color",
        "text-align",
        "text-align-all",
        "text-align-last",
        "-moz-text-align-last",
        "text-anchor",
        "text-autospace",
        "-moz-text-blink",
        "-ms-text-combine-horizontal",
        "text-combine-upright",
        "-webkit-text-combine",
        "text-decoration",
        "text-decoration-blink",
        "text-decoration-color",
        "-moz-text-decoration-color",
        "-webkit-text-decoration-color",
        "text-decoration-line",
        "-moz-text-decoration-line",
        "text-decoration-line-through",
        "-webkit-text-decoration-line",
        "text-decoration-none",
        "text-decoration-overline",
        "text-decoration-skip",
        "text-decoration-skip-box",
        "text-decoration-skip-ink",
        "text-decoration-skip-inset",
        "text-decoration-skip-self",
        "text-decoration-skip-spaces",
        "-webkit-text-decoration-skip",
        "text-decoration-style",
        "-moz-text-decoration-style",
        "-webkit-text-decoration-style",
        "text-decoration-thickness",
        "text-decoration-underline",
        "-webkit-text-decoration",
        "-webkit-text-decorations-in-effect",
        "text-edge",
        "text-emphasis",
        "text-emphasis-color",
        "-webkit-text-emphasis-color",
        "text-emphasis-position",
        "-webkit-text-emphasis-position",
        "text-emphasis-skip",
        "text-emphasis-style",
        "-webkit-text-emphasis-style",
        "-webkit-text-emphasis",
        "-webkit-text-fill-color",
        "text-group-align",
        "text-indent",
        "text-justify",
        "text-justify-trim",
        "text-kashida",
        "text-kashida-space",
        "text-line-through",
        "text-line-through-color",
        "text-line-through-mode",
        "text-line-through-style",
        "text-line-through-width",
        "text-orientation",
        "-webkit-text-orientation",
        "text-overflow",
        "text-overline",
        "text-overline-color",
        "text-overline-mode",
        "text-overline-style",
        "text-overline-width",
        "text-rendering",
        "-webkit-text-security",
        "text-shadow",
        "text-size-adjust",
        "-moz-text-size-adjust",
        "-ms-text-size-adjust",
        "-webkit-text-size-adjust",
        "text-space-collapse",
        "text-space-trim",
        "text-spacing",
        "-webkit-text-stroke-color",
        "-webkit-text-stroke",
        "-webkit-text-stroke-width",
        "text-transform",
        "text-underline",
        "text-underline-color",
        "text-underline-mode",
        "text-underline-offset",
        "text-underline-position",
        "-webkit-text-underline-position",
        "text-underline-style",
        "text-underline-width",
        "text-wrap",
        "-webkit-text-zoom",
        "top",
        "touch-action",
        "touch-action-delay",
        "-ms-touch-action",
        "-webkit-touch-callout",
        "-ms-touch-select",
        "-apple-trailing-word",
        "transform",
        "transform-box",
        "-moz-transform",
        "-ms-transform",
        "-o-transform",
        "transform-origin",
        "-moz-transform-origin",
        "-ms-transform-origin",
        "-o-transform-origin",
        "-webkit-transform-origin",
        "transform-origin-x",
        "-webkit-transform-origin-x",
        "transform-origin-y",
        "-webkit-transform-origin-y",
        "transform-origin-z",
        "-webkit-transform-origin-z",
        "transform-style",
        "-moz-transform-style",
        "-ms-transform-style",
        "-webkit-transform-style",
        "-webkit-transform",
        "transition",
        "transition-delay",
        "-moz-transition-delay",
        "-ms-transition-delay",
        "-o-transition-delay",
        "-webkit-transition-delay",
        "transition-duration",
        "-moz-transition-duration",
        "-ms-transition-duration",
        "-o-transition-duration",
        "-webkit-transition-duration",
        "-moz-transition",
        "-ms-transition",
        "-o-transition",
        "transition-property",
        "-moz-transition-property",
        "-ms-transition-property",
        "-o-transition-property",
        "-webkit-transition-property",
        "transition-timing-function",
        "-moz-transition-timing-function",
        "-ms-transition-timing-function",
        "-o-transition-timing-function",
        "-webkit-transition-timing-function",
        "-webkit-transition",
        "translate",
        "uc-alt-skin",
        "uc-skin",
        "unicode-bidi",
        "unicode-range",
        "-webkit-user-drag",
        "-moz-user-focus",
        "-moz-user-input",
        "-moz-user-modify",
        "-webkit-user-modify",
        "user-select",
        "-moz-user-select",
        "-ms-user-select",
        "-webkit-user-select",
        "user-zoom",
        "vector-effect",
        "vertical-align",
        "viewport-fill",
        "viewport-fill-opacity",
        "viewport-fit",
        "visibility",
        "voice-balance",
        "voice-duration",
        "voice-family",
        "voice-pitch",
        "voice-range",
        "voice-rate",
        "voice-stress",
        "voice-volume",
        "volume",
        "white-space",
        "-webkit-widget-region",
        "widows",
        "width",
        "will-change",
        "-moz-window-dragging",
        "-moz-window-shadow",
        "word-boundary-detection",
        "word-boundary-expansion",
        "word-break",
        "word-spacing",
        "word-wrap",
        "wrap-after",
        "wrap-before",
        "wrap-flow",
        "-ms-wrap-flow",
        "-webkit-wrap-flow",
        "wrap-inside",
        "-ms-wrap-margin",
        "-webkit-wrap-margin",
        "-webkit-wrap-padding",
        "-webkit-wrap-shape-inside",
        "-webkit-wrap-shape-outside",
        "wrap-through",
        "-ms-wrap-through",
        "-webkit-wrap-through",
        "-webkit-wrap",
        "writing-mode",
        "-webkit-writing-mode",
        "x",
        "y",
        "z-index",
        "zoom"
      ]
    };
  }
});

// node_modules/.pnpm/known-css-properties@0.24.0/node_modules/known-css-properties/index.js
var require_known_css_properties = __commonJS({
  "node_modules/.pnpm/known-css-properties@0.24.0/node_modules/known-css-properties/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    module2.exports.all = require_all().properties;
  }
});

// node_modules/.pnpm/inline-style-parser@0.1.1/node_modules/inline-style-parser/index.js
var require_inline_style_parser = __commonJS({
  "node_modules/.pnpm/inline-style-parser@0.1.1/node_modules/inline-style-parser/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
    var NEWLINE_REGEX = /\n/g;
    var WHITESPACE_REGEX = /^\s*/;
    var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
    var COLON_REGEX = /^:\s*/;
    var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
    var SEMICOLON_REGEX = /^[;\s]*/;
    var TRIM_REGEX = /^\s+|\s+$/g;
    var NEWLINE = "\n";
    var FORWARD_SLASH = "/";
    var ASTERISK = "*";
    var EMPTY_STRING = "";
    var TYPE_COMMENT = "comment";
    var TYPE_DECLARATION = "declaration";
    module2.exports = function(style, options) {
      if (typeof style !== "string") {
        throw new TypeError("First argument must be a string");
      }
      if (!style)
        return [];
      options = options || {};
      var lineno = 1;
      var column = 1;
      function updatePosition(str) {
        var lines = str.match(NEWLINE_REGEX);
        if (lines)
          lineno += lines.length;
        var i = str.lastIndexOf(NEWLINE);
        column = ~i ? str.length - i : column + str.length;
      }
      function position() {
        var start = { line: lineno, column };
        return function(node2) {
          node2.position = new Position(start);
          whitespace();
          return node2;
        };
      }
      function Position(start) {
        this.start = start;
        this.end = { line: lineno, column };
        this.source = options.source;
      }
      Position.prototype.content = style;
      var errorsList = [];
      function error(msg) {
        var err = new Error(
          options.source + ":" + lineno + ":" + column + ": " + msg
        );
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = style;
        if (options.silent) {
          errorsList.push(err);
        } else {
          throw err;
        }
      }
      function match(re) {
        var m = re.exec(style);
        if (!m)
          return;
        var str = m[0];
        updatePosition(str);
        style = style.slice(str.length);
        return m;
      }
      function whitespace() {
        match(WHITESPACE_REGEX);
      }
      function comments2(rules) {
        var c;
        rules = rules || [];
        while (c = comment()) {
          if (c !== false) {
            rules.push(c);
          }
        }
        return rules;
      }
      function comment() {
        var pos = position();
        if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1))
          return;
        var i = 2;
        while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
          ++i;
        }
        i += 2;
        if (EMPTY_STRING === style.charAt(i - 1)) {
          return error("End of comment missing");
        }
        var str = style.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        style = style.slice(i);
        column += 2;
        return pos({
          type: TYPE_COMMENT,
          comment: str
        });
      }
      function declaration() {
        var pos = position();
        var prop = match(PROPERTY_REGEX);
        if (!prop)
          return;
        comment();
        if (!match(COLON_REGEX))
          return error("property missing ':'");
        var val = match(VALUE_REGEX);
        var ret = pos({
          type: TYPE_DECLARATION,
          property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
          value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
        });
        match(SEMICOLON_REGEX);
        return ret;
      }
      function declarations() {
        var decls = [];
        comments2(decls);
        var decl;
        while (decl = declaration()) {
          if (decl !== false) {
            decls.push(decl);
            comments2(decls);
          }
        }
        return decls;
      }
      whitespace();
      return declarations();
    };
    function trim(str) {
      return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
    }
  }
});

// node_modules/.pnpm/style-to-object@0.3.0/node_modules/style-to-object/index.js
var require_style_to_object = __commonJS({
  "node_modules/.pnpm/style-to-object@0.3.0/node_modules/style-to-object/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var parse = require_inline_style_parser();
    function StyleToObject(style, iterator) {
      var output = null;
      if (!style || typeof style !== "string") {
        return output;
      }
      var declaration;
      var declarations = parse(style);
      var hasIterator = typeof iterator === "function";
      var property;
      var value;
      for (var i = 0, len = declarations.length; i < len; i++) {
        declaration = declarations[i];
        property = declaration.property;
        value = declaration.value;
        if (hasIterator) {
          iterator(property, value, declaration);
        } else if (value) {
          output || (output = {});
          output[property] = value;
        }
      }
      return output;
    }
    module2.exports = StyleToObject;
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/style-prop.js
var require_style_prop = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/style-prop.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var kebab_case_1 = __importDefault(require_kebab_case());
    var known_css_properties_1 = require_known_css_properties();
    var style_to_object_1 = __importDefault(require_style_to_object());
    var utils_2 = require_utils();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    var { getPropertyName, getStaticValue } = utils_1.ASTUtils;
    var lengthPercentageRegex = /\b(?:width|height|margin|padding|border-width|font-size)\b/i;
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Require CSS properties in the `style` prop to be valid and kebab-cased (ex. 'font-size'), not camel-cased (ex. 'fontSize') like in React, and that property values with dimensions are strings, not numbers with implicit 'px' units.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/style-prop.md"
        },
        fixable: "code",
        schema: [
          {
            type: "object",
            properties: {
              styleProps: {
                description: "an array of prop names to treat as a CSS style object",
                default: ["style"],
                type: "array",
                items: {
                  type: "string"
                },
                minItems: 1,
                uniqueItems: true
              },
              allowString: {
                description: "if allowString is set to true, this rule will not convert a style string literal into a style object (not recommended for performance)",
                type: "boolean",
                default: false
              }
            },
            additionalProperties: false
          }
        ],
        messages: {
          kebabStyleProp: "Use {{ kebabName }} instead of {{ name }}.",
          invalidStyleProp: "{{ name }} is not a valid CSS property.",
          numericStyleValue: 'This CSS property value should be a string with a unit; Solid does not automatically append a "px" unit.',
          stringStyle: "Use an object for the style prop instead of a string."
        }
      },
      defaultOptions: [],
      create(context) {
        const allCssPropertiesSet = new Set(known_css_properties_1.all);
        const allowString = Boolean(context.options[0]?.allowString);
        const styleProps = context.options[0]?.styleProps || ["style"];
        return {
          JSXAttribute(node2) {
            if (styleProps.indexOf((0, utils_2.jsxPropName)(node2)) === -1) {
              return;
            }
            const style = node2.value?.type === "JSXExpressionContainer" ? node2.value.expression : node2.value;
            if (!style) {
              return;
            } else if (style.type === "Literal" && typeof style.value === "string" && !allowString) {
              let objectStyles;
              try {
                objectStyles = (0, style_to_object_1.default)(style.value) ?? void 0;
              } catch (e) {
              }
              context.report({
                node: style,
                messageId: "stringStyle",
                fix: objectStyles && ((fixer) => fixer.replaceText(node2.value, `{${JSON.stringify(objectStyles)}}`))
              });
            } else if (style.type === "TemplateLiteral" && !allowString) {
              context.report({
                node: style,
                messageId: "stringStyle"
              });
            } else if (style.type === "ObjectExpression") {
              const properties = style.properties.filter((prop) => prop.type === "Property");
              properties.forEach((prop) => {
                const name = getPropertyName(prop, context.getScope());
                if (name && !name.startsWith("--") && !allCssPropertiesSet.has(name)) {
                  const kebabName = (0, kebab_case_1.default)(name);
                  if (allCssPropertiesSet.has(kebabName)) {
                    context.report({
                      node: prop.key,
                      messageId: "kebabStyleProp",
                      data: { name, kebabName },
                      fix: (fixer) => fixer.replaceText(prop.key, `"${kebabName}"`)
                    });
                  } else {
                    context.report({
                      node: prop.key,
                      messageId: "invalidStyleProp",
                      data: { name }
                    });
                  }
                } else if (!name || !name.startsWith("--") && lengthPercentageRegex.test(name)) {
                  const value = getStaticValue(prop.value)?.value;
                  if (typeof value === "number" && value !== 0) {
                    context.report({ node: prop.value, messageId: "numericStyleValue" });
                  }
                }
              });
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/no-array-handlers.js
var require_no_array_handlers = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/rules/no-array-handlers.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_dist4();
    var utils_2 = require_utils();
    var createRule = utils_1.ESLintUtils.RuleCreator.withoutDocs;
    exports.default = createRule({
      meta: {
        type: "problem",
        docs: {
          description: "Disallow usage of type-unsafe event handlers.",
          url: "https://github.com/solidjs-community/eslint-plugin-solid/blob/main/docs/no-array-handlers.md"
        },
        schema: [],
        messages: {
          noArrayHandlers: "Passing an array as an event handler is potentially type-unsafe."
        }
      },
      defaultOptions: [],
      create(context) {
        return {
          JSXAttribute(node2) {
            const openingElement = node2.parent;
            if (openingElement.name.type !== "JSXIdentifier" || !(0, utils_2.isDOMElementName)(openingElement.name.name)) {
              return;
            }
            const isNamespacedHandler = node2.name.type === "JSXNamespacedName" && node2.name.namespace.name === "on";
            const isNormalEventHandler = node2.name.type === "JSXIdentifier" && /^on[a-zA-Z]/.test(node2.name.name);
            if ((isNamespacedHandler || isNormalEventHandler) && node2.value?.type === "JSXExpressionContainer" && (0, utils_2.trace)(node2.value.expression, context.getScope()).type === "ArrayExpression") {
              context.report({
                node: node2,
                messageId: "noArrayHandlers"
              });
            }
          }
        };
      }
    });
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/plugin.js
var require_plugin = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/plugin.js"(exports) {
    "use strict";
    init_cjs_shims();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.plugin = void 0;
    var components_return_once_1 = __importDefault(require_components_return_once());
    var event_handlers_1 = __importDefault(require_event_handlers());
    var imports_1 = __importDefault(require_imports());
    var jsx_no_duplicate_props_1 = __importDefault(require_jsx_no_duplicate_props());
    var jsx_no_script_url_1 = __importDefault(require_jsx_no_script_url());
    var jsx_no_undef_1 = __importDefault(require_jsx_no_undef());
    var jsx_uses_vars_1 = __importDefault(require_jsx_uses_vars());
    var no_destructure_1 = __importDefault(require_no_destructure());
    var no_innerhtml_1 = __importDefault(require_no_innerhtml());
    var no_proxy_apis_1 = __importDefault(require_no_proxy_apis());
    var no_react_deps_1 = __importDefault(require_no_react_deps());
    var no_react_specific_props_1 = __importDefault(require_no_react_specific_props());
    var no_unknown_namespaces_1 = __importDefault(require_no_unknown_namespaces());
    var prefer_classlist_1 = __importDefault(require_prefer_classlist());
    var prefer_for_1 = __importDefault(require_prefer_for());
    var prefer_show_1 = __importDefault(require_prefer_show());
    var reactivity_1 = __importDefault(require_reactivity());
    var self_closing_comp_1 = __importDefault(require_self_closing_comp());
    var style_prop_1 = __importDefault(require_style_prop());
    var no_array_handlers_1 = __importDefault(require_no_array_handlers());
    var allRules = {
      "components-return-once": components_return_once_1.default,
      "event-handlers": event_handlers_1.default,
      imports: imports_1.default,
      "jsx-no-duplicate-props": jsx_no_duplicate_props_1.default,
      "jsx-no-undef": jsx_no_undef_1.default,
      "jsx-no-script-url": jsx_no_script_url_1.default,
      "jsx-uses-vars": jsx_uses_vars_1.default,
      "no-destructure": no_destructure_1.default,
      "no-innerhtml": no_innerhtml_1.default,
      "no-proxy-apis": no_proxy_apis_1.default,
      "no-react-deps": no_react_deps_1.default,
      "no-react-specific-props": no_react_specific_props_1.default,
      "no-unknown-namespaces": no_unknown_namespaces_1.default,
      "prefer-classlist": prefer_classlist_1.default,
      "prefer-for": prefer_for_1.default,
      "prefer-show": prefer_show_1.default,
      reactivity: reactivity_1.default,
      "self-closing-comp": self_closing_comp_1.default,
      "style-prop": style_prop_1.default,
      "no-array-handlers": no_array_handlers_1.default
    };
    exports.plugin = { rules: allRules };
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/configs/recommended.js
var require_recommended = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/configs/recommended.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var plugin_1 = require_plugin();
    var recommended = {
      plugins: {
        solid: plugin_1.plugin
      },
      languageOptions: {
        sourceType: "module",
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        }
      },
      rules: {
        "solid/jsx-no-duplicate-props": 2,
        "solid/jsx-no-undef": 2,
        "solid/jsx-uses-vars": 2,
        "solid/no-unknown-namespaces": 2,
        "solid/no-innerhtml": 2,
        "solid/jsx-no-script-url": 2,
        "solid/components-return-once": 1,
        "solid/no-destructure": 2,
        "solid/prefer-for": 2,
        "solid/reactivity": 1,
        "solid/event-handlers": 1,
        "solid/imports": 1,
        "solid/style-prop": 1,
        "solid/no-react-deps": 1,
        "solid/no-react-specific-props": 1,
        "solid/self-closing-comp": 1,
        "solid/no-array-handlers": 0,
        "solid/prefer-show": 0,
        "solid/no-proxy-apis": 0,
        "solid/prefer-classlist": 0
      }
    };
    module2.exports = recommended;
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/configs/typescript.js
var require_typescript = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/configs/typescript.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var recommended_1 = __importDefault(require_recommended());
    var typescript2 = {
      plugins: recommended_1.default.plugins,
      rules: {
        ...recommended_1.default.rules,
        "solid/jsx-no-undef": [2, { typescriptEnabled: true }],
        "solid/no-unknown-namespaces": 0
      }
    };
    module2.exports = typescript2;
  }
});

// node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/index.js
var require_dist5 = __commonJS({
  "node_modules/.pnpm/eslint-plugin-solid@0.13.1_eslint-ts-patch@8.56.0-0_typescript@5.3.3/node_modules/eslint-plugin-solid/dist/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var plugin_1 = require_plugin();
    var recommended_1 = __importDefault(require_recommended());
    var typescript_1 = __importDefault(require_typescript());
    var pluginLegacy = {
      rules: plugin_1.plugin.rules,
      configs: {
        recommended: {
          plugins: ["solid"],
          env: {
            browser: true,
            es6: true
          },
          parserOptions: recommended_1.default.languageOptions.parserOptions,
          rules: recommended_1.default.rules
        },
        typescript: {
          plugins: ["solid"],
          env: {
            browser: true,
            es6: true
          },
          parserOptions: {
            sourceType: "module"
          },
          rules: typescript_1.default.rules
        }
      }
    };
    module2.exports = pluginLegacy;
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  GLOB_ALL_SRC: () => GLOB_ALL_SRC,
  GLOB_CSS: () => GLOB_CSS,
  GLOB_EXCLUDE: () => GLOB_EXCLUDE,
  GLOB_HTML: () => GLOB_HTML,
  GLOB_JS: () => GLOB_JS,
  GLOB_JSON: () => GLOB_JSON,
  GLOB_JSON5: () => GLOB_JSON5,
  GLOB_JSONC: () => GLOB_JSONC,
  GLOB_JSX: () => GLOB_JSX,
  GLOB_LESS: () => GLOB_LESS,
  GLOB_MARKDOWN: () => GLOB_MARKDOWN,
  GLOB_MARKDOWN_CODE: () => GLOB_MARKDOWN_CODE,
  GLOB_MARKDOWN_IN_MARKDOWN: () => GLOB_MARKDOWN_IN_MARKDOWN,
  GLOB_POSTCSS: () => GLOB_POSTCSS,
  GLOB_SCSS: () => GLOB_SCSS,
  GLOB_SRC: () => GLOB_SRC,
  GLOB_SRC_EXT: () => GLOB_SRC_EXT,
  GLOB_STYLE: () => GLOB_STYLE,
  GLOB_SVELTE: () => GLOB_SVELTE,
  GLOB_TESTS: () => GLOB_TESTS,
  GLOB_TOML: () => GLOB_TOML,
  GLOB_TS: () => GLOB_TS,
  GLOB_TSX: () => GLOB_TSX,
  GLOB_VUE: () => GLOB_VUE,
  GLOB_YAML: () => GLOB_YAML,
  StylisticConfigDefaults: () => StylisticConfigDefaults,
  antfu: () => antfu,
  combine: () => combine,
  comments: () => comments,
  default: () => src_default,
  ensurePackages: () => ensurePackages,
  formatters: () => formatters,
  getOverrides: () => getOverrides,
  ignores: () => ignores,
  imports: () => imports,
  interopDefault: () => interopDefault,
  javascript: () => javascript,
  jsdoc: () => jsdoc,
  jsonc: () => jsonc,
  markdown: () => markdown,
  node: () => node,
  parserPlain: () => parserPlain,
  perfectionist: () => perfectionist,
  react: () => react,
  renameRules: () => renameRules,
  resolveSubOptions: () => resolveSubOptions,
  solid: () => solid,
  sortPackageJson: () => sortPackageJson,
  sortTsconfig: () => sortTsconfig,
  stylistic: () => stylistic,
  svelte: () => svelte,
  test: () => test,
  toArray: () => toArray,
  toml: () => toml,
  typescript: () => typescript,
  unicorn: () => unicorn,
  unocss: () => unocss,
  vue: () => vue,
  yaml: () => yaml
});
module.exports = __toCommonJS(src_exports);
init_cjs_shims();

// src/factory.ts
init_cjs_shims();
var import_node_process3 = __toESM(require("process"), 1);
var import_node_fs = __toESM(require("fs"), 1);
var import_local_pkg3 = require("local-pkg");

// src/configs/index.ts
init_cjs_shims();

// src/configs/comments.ts
init_cjs_shims();

// src/plugins.ts
init_cjs_shims();
var import_eslint_plugin_antfu = __toESM(require("eslint-plugin-antfu"), 1);
var import_eslint_plugin_eslint_comments = __toESM(require("eslint-plugin-eslint-comments"), 1);
var pluginImport = __toESM(require("eslint-plugin-i"), 1);
var import_eslint_plugin_n = __toESM(require("eslint-plugin-n"), 1);
var import_eslint_plugin_unicorn = __toESM(require("eslint-plugin-unicorn"), 1);
var import_eslint_plugin_unused_imports = __toESM(require("eslint-plugin-unused-imports"), 1);
var import_eslint_plugin_perfectionist = __toESM(require("eslint-plugin-perfectionist"), 1);

// src/configs/comments.ts
async function comments() {
  return [
    {
      name: "antfu:eslint-comments",
      plugins: {
        "eslint-comments": import_eslint_plugin_eslint_comments.default
      },
      rules: {
        "eslint-comments/no-aggregating-enable": "error",
        "eslint-comments/no-duplicate-disable": "error",
        "eslint-comments/no-unlimited-disable": "error",
        "eslint-comments/no-unused-enable": "error"
      }
    }
  ];
}

// src/configs/ignores.ts
init_cjs_shims();

// src/globs.ts
init_cjs_shims();
var GLOB_SRC_EXT = "?([cm])[jt]s?(x)";
var GLOB_SRC = "**/*.?([cm])[jt]s?(x)";
var GLOB_JS = "**/*.?([cm])js";
var GLOB_JSX = "**/*.?([cm])jsx";
var GLOB_TS = "**/*.?([cm])ts";
var GLOB_TSX = "**/*.?([cm])tsx";
var GLOB_STYLE = "**/*.{c,le,sc}ss";
var GLOB_CSS = "**/*.css";
var GLOB_POSTCSS = "**/*.{p,post}css";
var GLOB_LESS = "**/*.less";
var GLOB_SCSS = "**/*.scss";
var GLOB_JSON = "**/*.json";
var GLOB_JSON5 = "**/*.json5";
var GLOB_JSONC = "**/*.jsonc";
var GLOB_MARKDOWN = "**/*.md";
var GLOB_MARKDOWN_IN_MARKDOWN = "**/*.md/*.md";
var GLOB_SVELTE = "**/*.svelte";
var GLOB_VUE = "**/*.vue";
var GLOB_YAML = "**/*.y?(a)ml";
var GLOB_TOML = "**/*.toml";
var GLOB_HTML = "**/*.htm?(l)";
var GLOB_MARKDOWN_CODE = `${GLOB_MARKDOWN}/${GLOB_SRC}`;
var GLOB_TESTS = [
  `**/__tests__/**/*.${GLOB_SRC_EXT}`,
  `**/*.spec.${GLOB_SRC_EXT}`,
  `**/*.test.${GLOB_SRC_EXT}`,
  `**/*.bench.${GLOB_SRC_EXT}`,
  `**/*.benchmark.${GLOB_SRC_EXT}`
];
var GLOB_ALL_SRC = [
  GLOB_SRC,
  GLOB_STYLE,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_MARKDOWN,
  GLOB_SVELTE,
  GLOB_VUE,
  GLOB_YAML,
  GLOB_HTML
];
var GLOB_EXCLUDE = [
  "**/node_modules",
  "**/dist",
  "**/package-lock.json",
  "**/yarn.lock",
  "**/pnpm-lock.yaml",
  "**/bun.lockb",
  "**/output",
  "**/coverage",
  "**/temp",
  "**/.temp",
  "**/tmp",
  "**/.tmp",
  "**/.history",
  "**/.vitepress/cache",
  "**/.nuxt",
  "**/.next",
  "**/.vercel",
  "**/.changeset",
  "**/.idea",
  "**/.cache",
  "**/.output",
  "**/.vite-inspect",
  "**/CHANGELOG*.md",
  "**/*.min.*",
  "**/LICENSE*",
  "**/__snapshots__",
  "**/auto-import?(s).d.ts",
  "**/components.d.ts"
];

// src/configs/ignores.ts
async function ignores() {
  return [
    {
      ignores: GLOB_EXCLUDE
    }
  ];
}

// src/configs/imports.ts
init_cjs_shims();
async function imports(options = {}) {
  const {
    stylistic: stylistic2 = true
  } = options;
  return [
    {
      name: "antfu:imports",
      plugins: {
        antfu: import_eslint_plugin_antfu.default,
        import: pluginImport
      },
      rules: {
        "antfu/import-dedupe": "error",
        "antfu/no-import-dist": "error",
        "antfu/no-import-node-modules-by-path": "error",
        "import/first": "error",
        "import/no-duplicates": "error",
        "import/no-mutable-exports": "error",
        "import/no-named-default": "error",
        "import/no-self-import": "error",
        "import/no-webpack-loader-syntax": "error",
        "import/order": "error",
        ...stylistic2 ? {
          "import/newline-after-import": ["error", { considerComments: true, count: 1 }]
        } : {}
      }
    },
    {
      files: ["**/bin/**/*", `**/bin.${GLOB_SRC_EXT}`],
      name: "antfu:imports:bin",
      rules: {
        "antfu/no-import-dist": "off",
        "antfu/no-import-node-modules-by-path": "off"
      }
    }
  ];
}

// src/configs/javascript.ts
init_cjs_shims();
var import_globals = __toESM(require("globals"), 1);
async function javascript(options = {}) {
  const {
    isInEditor = false,
    overrides = {}
  } = options;
  return [
    {
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...import_globals.default.browser,
          ...import_globals.default.es2021,
          ...import_globals.default.node,
          document: "readonly",
          navigator: "readonly",
          window: "readonly"
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: 2022,
          sourceType: "module"
        },
        sourceType: "module"
      },
      linterOptions: {
        reportUnusedDisableDirectives: true
      },
      name: "antfu:javascript",
      plugins: {
        "antfu": import_eslint_plugin_antfu.default,
        "unused-imports": import_eslint_plugin_unused_imports.default
      },
      rules: {
        "accessor-pairs": ["error", { enforceForClassMembers: true, setWithoutGet: true }],
        "array-callback-return": "error",
        "block-scoped-var": "error",
        "constructor-super": "error",
        "default-case-last": "error",
        "dot-notation": ["error", { allowKeywords: true }],
        "eqeqeq": ["error", "smart"],
        "new-cap": ["error", { capIsNew: false, newIsCap: true, properties: true }],
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": ["error", "always"],
        "no-console": ["error", { allow: ["warn", "error"] }],
        "no-const-assign": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": ["error", { allowEmptyCatch: true }],
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-import-assign": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
        "no-lone-blocks": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": ["error", { builtinGlobals: false }],
        "no-regex-spaces": "error",
        "no-restricted-globals": [
          "error",
          { message: "Use `globalThis` instead.", name: "global" },
          { message: "Use `globalThis` instead.", name: "self" }
        ],
        "no-restricted-properties": [
          "error",
          { message: "Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.", property: "__proto__" },
          { message: "Use `Object.defineProperty` instead.", property: "__defineGetter__" },
          { message: "Use `Object.defineProperty` instead.", property: "__defineSetter__" },
          { message: "Use `Object.getOwnPropertyDescriptor` instead.", property: "__lookupGetter__" },
          { message: "Use `Object.getOwnPropertyDescriptor` instead.", property: "__lookupSetter__" }
        ],
        "no-restricted-syntax": [
          "error",
          "DebuggerStatement",
          "LabeledStatement",
          "WithStatement",
          "TSEnumDeclaration[const=true]",
          "TSExportAssignment"
        ],
        "no-self-assign": ["error", { props: true }],
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": ["error", { defaultAssignment: false }],
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": ["error", {
          allowShortCircuit: true,
          allowTaggedTemplates: true,
          allowTernary: true
        }],
        "no-unused-vars": ["error", {
          args: "none",
          caughtErrors: "none",
          ignoreRestSiblings: true,
          vars: "all"
        }],
        "no-use-before-define": ["error", { classes: false, functions: false, variables: true }],
        "no-useless-backreference": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-with": "error",
        "object-shorthand": [
          "error",
          "always",
          {
            avoidQuotes: true,
            ignoreConstructors: false
          }
        ],
        "one-var": ["error", { initialized: "never" }],
        "prefer-arrow-callback": [
          "error",
          {
            allowNamedFunctions: false,
            allowUnboundThis: true
          }
        ],
        "prefer-const": [
          "error",
          {
            destructuring: "all",
            ignoreReadBeforeAssign: true
          }
        ],
        "prefer-exponentiation-operator": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "sort-imports": [
          "error",
          {
            allowSeparatedGroups: false,
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
          }
        ],
        "symbol-description": "error",
        "unicode-bom": ["error", "never"],
        "unused-imports/no-unused-imports": isInEditor ? "off" : "error",
        "unused-imports/no-unused-vars": [
          "error",
          { args: "after-used", argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^_" }
        ],
        "use-isnan": ["error", { enforceForIndexOf: true, enforceForSwitchCase: true }],
        "valid-typeof": ["error", { requireStringLiterals: true }],
        "vars-on-top": "error",
        "yoda": ["error", "never"],
        ...overrides
      }
    },
    {
      files: [`scripts/${GLOB_SRC}`, `cli.${GLOB_SRC_EXT}`],
      name: "antfu:scripts-overrides",
      rules: {
        "no-console": "off"
      }
    }
  ];
}

// src/configs/jsdoc.ts
init_cjs_shims();

// src/utils.ts
init_cjs_shims();
var import_node_process = __toESM(require("process"), 1);
var import_local_pkg = require("local-pkg");
var parserPlain = {
  meta: {
    name: "parser-plain"
  },
  parseForESLint: (code) => ({
    ast: {
      body: [],
      comments: [],
      loc: { end: code.length, start: 0 },
      range: [0, code.length],
      tokens: [],
      type: "Program"
    },
    scopeManager: null,
    services: { isPlain: true },
    visitorKeys: {
      Program: []
    }
  })
};
async function combine(...configs) {
  const resolved = await Promise.all(configs);
  return resolved.flat();
}
function renameRules(rules, from, to) {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
      if (key.startsWith(from))
        return [to + key.slice(from.length), value];
      return [key, value];
    })
  );
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
async function interopDefault(m) {
  const resolved = await m;
  return resolved.default || resolved;
}
async function ensurePackages(packages) {
  if (import_node_process.default.env.CI || import_node_process.default.stdout.isTTY === false)
    return;
  const nonExistingPackages = packages.filter((i) => !(0, import_local_pkg.isPackageExists)(i));
  if (nonExistingPackages.length === 0)
    return;
  const { default: prompts } = await import("prompts");
  const { result } = await prompts([
    {
      message: `${nonExistingPackages.length === 1 ? "Package is" : "Packages are"} required for this config: ${nonExistingPackages.join(", ")}. Do you want to install them?`,
      name: "result",
      type: "confirm"
    }
  ]);
  if (result)
    await import("@antfu/install-pkg").then((i) => i.installPackage(nonExistingPackages, { dev: true }));
}

// src/configs/jsdoc.ts
async function jsdoc(options = {}) {
  const {
    stylistic: stylistic2 = true
  } = options;
  return [
    {
      name: "antfu:jsdoc",
      plugins: {
        jsdoc: await interopDefault(import("eslint-plugin-jsdoc"))
      },
      rules: {
        "jsdoc/check-access": "warn",
        "jsdoc/check-param-names": "warn",
        "jsdoc/check-property-names": "warn",
        "jsdoc/check-types": "warn",
        "jsdoc/empty-tags": "warn",
        "jsdoc/implements-on-classes": "warn",
        "jsdoc/no-defaults": "warn",
        "jsdoc/no-multi-asterisks": "warn",
        "jsdoc/require-param-name": "warn",
        "jsdoc/require-property": "warn",
        "jsdoc/require-property-description": "warn",
        "jsdoc/require-property-name": "warn",
        "jsdoc/require-returns-check": "warn",
        "jsdoc/require-returns-description": "warn",
        "jsdoc/require-yields-check": "warn",
        ...stylistic2 ? {
          "jsdoc/check-alignment": "warn",
          "jsdoc/multiline-blocks": "warn"
        } : {}
      }
    }
  ];
}

// src/configs/jsonc.ts
init_cjs_shims();
async function jsonc(options = {}) {
  const {
    files = [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
    overrides = {},
    stylistic: stylistic2 = true
  } = options;
  const {
    indent = 2
  } = typeof stylistic2 === "boolean" ? {} : stylistic2;
  const [
    pluginJsonc,
    parserJsonc
  ] = await Promise.all([
    interopDefault(import("eslint-plugin-jsonc")),
    interopDefault(import("jsonc-eslint-parser"))
  ]);
  return [
    {
      name: "antfu:jsonc:setup",
      plugins: {
        jsonc: pluginJsonc
      }
    },
    {
      files,
      languageOptions: {
        parser: parserJsonc
      },
      name: "antfu:jsonc:rules",
      rules: {
        "jsonc/no-bigint-literals": "error",
        "jsonc/no-binary-expression": "error",
        "jsonc/no-binary-numeric-literals": "error",
        "jsonc/no-dupe-keys": "error",
        "jsonc/no-escape-sequence-in-identifier": "error",
        "jsonc/no-floating-decimal": "error",
        "jsonc/no-hexadecimal-numeric-literals": "error",
        "jsonc/no-infinity": "error",
        "jsonc/no-multi-str": "error",
        "jsonc/no-nan": "error",
        "jsonc/no-number-props": "error",
        "jsonc/no-numeric-separators": "error",
        "jsonc/no-octal": "error",
        "jsonc/no-octal-escape": "error",
        "jsonc/no-octal-numeric-literals": "error",
        "jsonc/no-parenthesized": "error",
        "jsonc/no-plus-sign": "error",
        "jsonc/no-regexp-literals": "error",
        "jsonc/no-sparse-arrays": "error",
        "jsonc/no-template-literals": "error",
        "jsonc/no-undefined-value": "error",
        "jsonc/no-unicode-codepoint-escapes": "error",
        "jsonc/no-useless-escape": "error",
        "jsonc/space-unary-ops": "error",
        "jsonc/valid-json-number": "error",
        "jsonc/vue-custom-block/no-parsing-error": "error",
        ...stylistic2 ? {
          "jsonc/array-bracket-spacing": ["error", "never"],
          "jsonc/comma-dangle": ["error", "never"],
          "jsonc/comma-style": ["error", "last"],
          "jsonc/indent": ["error", indent],
          "jsonc/key-spacing": ["error", { afterColon: true, beforeColon: false }],
          "jsonc/object-curly-newline": ["error", { consistent: true, multiline: true }],
          "jsonc/object-curly-spacing": ["error", "always"],
          "jsonc/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
          "jsonc/quote-props": "error",
          "jsonc/quotes": "error"
        } : {},
        ...overrides
      }
    }
  ];
}

// src/configs/markdown.ts
init_cjs_shims();
var import_eslint_merge_processors = require("eslint-merge-processors");
async function markdown(options = {}) {
  const {
    componentExts = [],
    files = [GLOB_MARKDOWN],
    overrides = {}
  } = options;
  const markdown2 = await interopDefault(import("eslint-plugin-markdown"));
  return [
    {
      name: "antfu:markdown:setup",
      plugins: {
        markdown: markdown2
      }
    },
    {
      files,
      ignores: [GLOB_MARKDOWN_IN_MARKDOWN],
      name: "antfu:markdown:processor",
      // `eslint-plugin-markdown` only creates virtual files for code blocks,
      // but not the markdown file itself. We use `eslint-merge-processors` to
      // add a pass-through processor for the markdown file itself.
      processor: (0, import_eslint_merge_processors.mergeProcessors)([
        markdown2.processors.markdown,
        import_eslint_merge_processors.processorPassThrough
      ])
    },
    {
      files,
      languageOptions: {
        parser: parserPlain
      },
      name: "antfu:markdown:parser"
    },
    {
      files: [
        GLOB_MARKDOWN_CODE,
        ...componentExts.map((ext) => `${GLOB_MARKDOWN}/**/*.${ext}`)
      ],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            impliedStrict: true
          }
        }
      },
      name: "antfu:markdown:disables",
      rules: {
        "import/newline-after-import": "off",
        "no-alert": "off",
        "no-console": "off",
        "no-labels": "off",
        "no-lone-blocks": "off",
        "no-restricted-syntax": "off",
        "no-undef": "off",
        "no-unused-expressions": "off",
        "no-unused-labels": "off",
        "no-unused-vars": "off",
        "node/prefer-global/process": "off",
        "style/comma-dangle": "off",
        "style/eol-last": "off",
        "ts/consistent-type-imports": "off",
        "ts/no-namespace": "off",
        "ts/no-redeclare": "off",
        "ts/no-require-imports": "off",
        "ts/no-unused-vars": "off",
        "ts/no-use-before-define": "off",
        "ts/no-var-requires": "off",
        "unicode-bom": "off",
        "unused-imports/no-unused-imports": "off",
        "unused-imports/no-unused-vars": "off",
        // Type aware rules
        ...{
          "ts/await-thenable": "off",
          "ts/dot-notation": "off",
          "ts/no-floating-promises": "off",
          "ts/no-for-in-array": "off",
          "ts/no-implied-eval": "off",
          "ts/no-misused-promises": "off",
          "ts/no-throw-literal": "off",
          "ts/no-unnecessary-type-assertion": "off",
          "ts/no-unsafe-argument": "off",
          "ts/no-unsafe-assignment": "off",
          "ts/no-unsafe-call": "off",
          "ts/no-unsafe-member-access": "off",
          "ts/no-unsafe-return": "off",
          "ts/restrict-plus-operands": "off",
          "ts/restrict-template-expressions": "off",
          "ts/unbound-method": "off"
        },
        ...overrides
      }
    }
  ];
}

// src/configs/node.ts
init_cjs_shims();
async function node() {
  return [
    {
      name: "antfu:node",
      plugins: {
        node: import_eslint_plugin_n.default
      },
      rules: {
        "node/handle-callback-err": ["error", "^(err|error)$"],
        "node/no-deprecated-api": "error",
        "node/no-exports-assign": "error",
        "node/no-new-require": "error",
        "node/no-path-concat": "error",
        "node/prefer-global/buffer": ["error", "never"],
        "node/prefer-global/process": ["error", "never"],
        "node/process-exit-as-throw": "error"
      }
    }
  ];
}

// src/configs/perfectionist.ts
init_cjs_shims();
async function perfectionist() {
  return [
    {
      name: "antfu:perfectionist",
      plugins: {
        perfectionist: import_eslint_plugin_perfectionist.default
      }
    }
  ];
}

// src/configs/formatters.ts
init_cjs_shims();

// src/configs/stylistic.ts
init_cjs_shims();
var StylisticConfigDefaults = {
  indent: 2,
  jsx: true,
  quotes: "single",
  semi: false
};
async function stylistic(options = {}) {
  const {
    indent,
    jsx,
    overrides = {},
    quotes,
    semi
  } = {
    ...StylisticConfigDefaults,
    ...options
  };
  const pluginStylistic = await interopDefault(import("@stylistic/eslint-plugin"));
  const config = pluginStylistic.configs.customize({
    flat: true,
    indent,
    jsx,
    pluginName: "style",
    quotes,
    semi
  });
  return [
    {
      name: "antfu:stylistic",
      plugins: {
        antfu: import_eslint_plugin_antfu.default,
        style: pluginStylistic
      },
      rules: {
        ...config.rules,
        "antfu/consistent-list-newline": "error",
        "antfu/if-newline": "error",
        "antfu/top-level-function": "error",
        "curly": ["error", "multi-or-nest", "consistent"],
        ...overrides
      }
    }
  ];
}

// src/configs/formatters.ts
async function formatters(options = {}, stylistic2 = {}) {
  await ensurePackages([
    "eslint-plugin-format"
  ]);
  if (options === true) {
    options = {
      css: true,
      graphql: true,
      html: true,
      markdown: true
    };
  }
  const {
    indent,
    quotes,
    semi
  } = {
    ...StylisticConfigDefaults,
    ...stylistic2
  };
  const prettierOptions = Object.assign(
    {
      endOfLine: "auto",
      semi,
      singleQuote: quotes === "single",
      tabWidth: typeof indent === "number" ? indent : 2,
      trailingComma: "all",
      useTabs: indent === "tab"
    },
    options.prettierOptions || {}
  );
  const dprintOptions = Object.assign(
    {
      indentWidth: typeof indent === "number" ? indent : 2,
      quoteStyle: quotes === "single" ? "preferSingle" : "preferDouble",
      useTabs: indent === "tab"
    },
    options.dprintOptions || {}
  );
  const pluginFormat = await interopDefault(import("eslint-plugin-format"));
  const configs = [
    {
      name: "antfu:formatters:setup",
      plugins: {
        format: pluginFormat
      }
    }
  ];
  if (options.css) {
    configs.push(
      {
        files: [GLOB_CSS, GLOB_POSTCSS],
        languageOptions: {
          parser: parserPlain
        },
        name: "antfu:formatter:css",
        rules: {
          "format/prettier": [
            "error",
            {
              ...prettierOptions,
              parser: "css"
            }
          ]
        }
      },
      {
        files: [GLOB_SCSS],
        languageOptions: {
          parser: parserPlain
        },
        name: "antfu:formatter:scss",
        rules: {
          "format/prettier": [
            "error",
            {
              ...prettierOptions,
              parser: "scss"
            }
          ]
        }
      },
      {
        files: [GLOB_LESS],
        languageOptions: {
          parser: parserPlain
        },
        name: "antfu:formatter:less",
        rules: {
          "format/prettier": [
            "error",
            {
              ...prettierOptions,
              parser: "less"
            }
          ]
        }
      }
    );
  }
  if (options.html) {
    configs.push({
      files: ["**/*.html"],
      languageOptions: {
        parser: parserPlain
      },
      name: "antfu:formatter:html",
      rules: {
        "format/prettier": [
          "error",
          {
            ...prettierOptions,
            parser: "html"
          }
        ]
      }
    });
  }
  if (options.markdown) {
    const formater = options.markdown === true ? "prettier" : options.markdown;
    configs.push({
      files: [GLOB_MARKDOWN],
      languageOptions: {
        parser: parserPlain
      },
      name: "antfu:formatter:markdown",
      rules: {
        [`format/${formater}`]: [
          "error",
          formater === "prettier" ? {
            printWidth: 120,
            ...prettierOptions,
            embeddedLanguageFormatting: "off",
            parser: "markdown"
          } : {
            ...dprintOptions,
            language: "markdown"
          }
        ]
      }
    });
  }
  if (options.graphql) {
    configs.push({
      files: ["**/*.graphql"],
      languageOptions: {
        parser: parserPlain
      },
      name: "antfu:formatter:graphql",
      rules: {
        "format/prettier": [
          "error",
          {
            ...prettierOptions,
            parser: "graphql"
          }
        ]
      }
    });
  }
  return configs;
}

// src/configs/react.ts
init_cjs_shims();
var import_local_pkg2 = require("local-pkg");
var ReactRefreshAllowConstantExportPackages = [
  "vite"
];
async function react(options = {}) {
  const {
    files = [GLOB_JSX, GLOB_TSX],
    overrides = {},
    typescript: typescript2 = true
  } = options;
  await ensurePackages([
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
    "eslint-plugin-react-refresh"
  ]);
  const [
    pluginReact,
    pluginReactHooks,
    pluginReactRefresh
  ] = await Promise.all([
    interopDefault(import("eslint-plugin-react")),
    interopDefault(import("eslint-plugin-react-hooks")),
    interopDefault(import("eslint-plugin-react-refresh"))
  ]);
  const isAllowConstantExport = ReactRefreshAllowConstantExportPackages.some(
    (i) => (0, import_local_pkg2.isPackageExists)(i)
  );
  return [
    {
      name: "antfu:react:setup",
      plugins: {
        "react": pluginReact,
        "react-hooks": pluginReactHooks,
        "react-refresh": pluginReactRefresh
      },
      settings: {
        react: {
          version: "detect"
        }
      }
    },
    {
      files,
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        }
      },
      name: "antfu:react:rules",
      rules: {
        // recommended rules react-hooks
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        // react refresh
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: isAllowConstantExport }
        ],
        // recommended rules react
        "react/display-name": "error",
        "react/jsx-key": "error",
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-target-blank": "error",
        "react/jsx-no-undef": "error",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/no-children-prop": "error",
        "react/no-danger-with-children": "error",
        "react/no-deprecated": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "error",
        "react/no-is-mounted": "error",
        "react/no-render-return-value": "error",
        "react/no-string-refs": "error",
        "react/no-unescaped-entities": "error",
        "react/no-unknown-property": "error",
        "react/no-unsafe": "off",
        "react/prop-types": "error",
        "react/react-in-jsx-scope": "off",
        "react/require-render-return": "error",
        ...typescript2 ? {
          "react/jsx-no-undef": "off",
          "react/prop-type": "off"
        } : {},
        // overrides
        ...overrides
      }
    }
  ];
}

// src/configs/solid.ts
init_cjs_shims();
async function solid(options = {}) {
  const {
    files = [GLOB_JSX, GLOB_TSX],
    overrides = {}
  } = options;
  await ensurePackages([
    "eslint-plugin-solid"
  ]);
  const [
    pluginSolid
  ] = await Promise.all([
    // @ts-expect-error types are in src folder (and not in dist)
    interopDefault(Promise.resolve().then(() => __toESM(require_dist5(), 1)))
  ]);
  return [
    {
      name: "antfu:solid:setup",
      plugins: {
        solid: pluginSolid
      },
      settings: {
        solid: {
          version: "detect"
        }
      }
    },
    {
      files,
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        }
      },
      name: "antfu:solid:rules",
      rules: {
        // recommended rules solid
        "solid/components-return-once": "error",
        "solid/event-handlers": "error",
        "solid/imports": "error",
        "solid/jsx-no-duplicate-props": "error",
        "solid/jsx-no-script-url": "error",
        "solid/jsx-no-undef": ["error", { allowGlobals: true, autoImport: true }],
        "solid/jsx-uses-vars": "error",
        "solid/no-array-handlers": "off",
        "solid/no-destructure": "error",
        "solid/no-innerhtml": "error",
        "solid/no-proxy-apis": "off",
        "solid/no-react-deps": "error",
        "solid/no-react-specific-props": "error",
        "solid/no-unknown-namespaces": "error",
        "solid/prefer-classlist": "off",
        "solid/prefer-for": "error",
        "solid/prefer-show": "error",
        "solid/reactivity": "error",
        "solid/self-closing-comp": "error",
        "solid/style-prop": "error",
        // overrides
        ...overrides
      }
    }
  ];
}

// src/configs/sort.ts
init_cjs_shims();
async function sortPackageJson() {
  return [
    {
      files: ["**/package.json"],
      name: "antfu:sort-package-json",
      rules: {
        "jsonc/sort-array-values": [
          "error",
          {
            order: { type: "asc" },
            pathPattern: "^files$"
          }
        ],
        "jsonc/sort-keys": [
          "error",
          {
            order: [
              "publisher",
              "name",
              "displayName",
              "type",
              "version",
              "private",
              "packageManager",
              "description",
              "author",
              "license",
              "funding",
              "homepage",
              "repository",
              "bugs",
              "keywords",
              "categories",
              "sideEffects",
              "exports",
              "main",
              "module",
              "unpkg",
              "jsdelivr",
              "types",
              "typesVersions",
              "bin",
              "icon",
              "files",
              "engines",
              "activationEvents",
              "contributes",
              "scripts",
              "peerDependencies",
              "peerDependenciesMeta",
              "dependencies",
              "optionalDependencies",
              "devDependencies",
              "pnpm",
              "overrides",
              "resolutions",
              "husky",
              "simple-git-hooks",
              "lint-staged",
              "eslintConfig"
            ],
            pathPattern: "^$"
          },
          {
            order: { type: "asc" },
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$"
          },
          {
            order: { type: "asc" },
            pathPattern: "^(?:resolutions|overrides|pnpm.overrides)$"
          },
          {
            order: [
              "types",
              "import",
              "require",
              "default"
            ],
            pathPattern: "^exports.*$"
          }
        ]
      }
    }
  ];
}
function sortTsconfig() {
  return [
    {
      files: ["**/tsconfig.json", "**/tsconfig.*.json"],
      name: "antfu:sort-tsconfig",
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            order: [
              "extends",
              "compilerOptions",
              "references",
              "files",
              "include",
              "exclude"
            ],
            pathPattern: "^$"
          },
          {
            order: [
              /* Projects */
              "incremental",
              "composite",
              "tsBuildInfoFile",
              "disableSourceOfProjectReferenceRedirect",
              "disableSolutionSearching",
              "disableReferencedProjectLoad",
              /* Language and Environment */
              "target",
              "jsx",
              "jsxFactory",
              "jsxFragmentFactory",
              "jsxImportSource",
              "lib",
              "moduleDetection",
              "noLib",
              "reactNamespace",
              "useDefineForClassFields",
              "emitDecoratorMetadata",
              "experimentalDecorators",
              /* Modules */
              "baseUrl",
              "rootDir",
              "rootDirs",
              "customConditions",
              "module",
              "moduleResolution",
              "moduleSuffixes",
              "noResolve",
              "paths",
              "resolveJsonModule",
              "resolvePackageJsonExports",
              "resolvePackageJsonImports",
              "typeRoots",
              "types",
              "allowArbitraryExtensions",
              "allowImportingTsExtensions",
              "allowUmdGlobalAccess",
              /* JavaScript Support */
              "allowJs",
              "checkJs",
              "maxNodeModuleJsDepth",
              /* Type Checking */
              "strict",
              "strictBindCallApply",
              "strictFunctionTypes",
              "strictNullChecks",
              "strictPropertyInitialization",
              "allowUnreachableCode",
              "allowUnusedLabels",
              "alwaysStrict",
              "exactOptionalPropertyTypes",
              "noFallthroughCasesInSwitch",
              "noImplicitAny",
              "noImplicitOverride",
              "noImplicitReturns",
              "noImplicitThis",
              "noPropertyAccessFromIndexSignature",
              "noUncheckedIndexedAccess",
              "noUnusedLocals",
              "noUnusedParameters",
              "useUnknownInCatchVariables",
              /* Emit */
              "declaration",
              "declarationDir",
              "declarationMap",
              "downlevelIteration",
              "emitBOM",
              "emitDeclarationOnly",
              "importHelpers",
              "importsNotUsedAsValues",
              "inlineSourceMap",
              "inlineSources",
              "mapRoot",
              "newLine",
              "noEmit",
              "noEmitHelpers",
              "noEmitOnError",
              "outDir",
              "outFile",
              "preserveConstEnums",
              "preserveValueImports",
              "removeComments",
              "sourceMap",
              "sourceRoot",
              "stripInternal",
              /* Interop Constraints */
              "allowSyntheticDefaultImports",
              "esModuleInterop",
              "forceConsistentCasingInFileNames",
              "isolatedModules",
              "preserveSymlinks",
              "verbatimModuleSyntax",
              /* Completeness */
              "skipDefaultLibCheck",
              "skipLibCheck"
            ],
            pathPattern: "^compilerOptions$"
          }
        ]
      }
    }
  ];
}

// src/configs/svelte.ts
init_cjs_shims();
async function svelte(options = {}) {
  const {
    files = [GLOB_SVELTE],
    overrides = {},
    stylistic: stylistic2 = true
  } = options;
  const {
    indent = 2,
    quotes = "single"
  } = typeof stylistic2 === "boolean" ? {} : stylistic2;
  await ensurePackages([
    "eslint-plugin-svelte"
  ]);
  const [
    pluginSvelte,
    parserSvelte
  ] = await Promise.all([
    interopDefault(import("eslint-plugin-svelte")),
    interopDefault(import("svelte-eslint-parser"))
  ]);
  return [
    {
      name: "antfu:svelte:setup",
      plugins: {
        svelte: pluginSvelte
      }
    },
    {
      files,
      languageOptions: {
        parser: parserSvelte,
        parserOptions: {
          extraFileExtensions: [".svelte"],
          parser: options.typescript ? await interopDefault(import("@typescript-eslint/parser")) : null
        }
      },
      name: "antfu:svelte:rules",
      processor: pluginSvelte.processors[".svelte"],
      rules: {
        "import/no-mutable-exports": "off",
        "no-undef": "off",
        // incompatible with most recent (attribute-form) generic types RFC
        "no-unused-vars": ["error", {
          args: "none",
          caughtErrors: "none",
          ignoreRestSiblings: true,
          vars: "all",
          varsIgnorePattern: "^\\$\\$Props$"
        }],
        "svelte/comment-directive": "error",
        "svelte/no-at-debug-tags": "warn",
        "svelte/no-at-html-tags": "error",
        "svelte/no-dupe-else-if-blocks": "error",
        "svelte/no-dupe-style-properties": "error",
        "svelte/no-dupe-use-directives": "error",
        "svelte/no-dynamic-slot-name": "error",
        "svelte/no-export-load-in-svelte-module-in-kit-pages": "error",
        "svelte/no-inner-declarations": "error",
        "svelte/no-not-function-handler": "error",
        "svelte/no-object-in-text-mustaches": "error",
        "svelte/no-reactive-functions": "error",
        "svelte/no-reactive-literals": "error",
        "svelte/no-shorthand-style-property-overrides": "error",
        "svelte/no-unknown-style-directive-property": "error",
        "svelte/no-unused-svelte-ignore": "error",
        "svelte/no-useless-mustaches": "error",
        "svelte/require-store-callbacks-use-set-param": "error",
        "svelte/system": "error",
        "svelte/valid-compile": "error",
        "svelte/valid-each-key": "error",
        "unused-imports/no-unused-vars": [
          "error",
          { args: "after-used", argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^(_|\\$\\$Props$)" }
        ],
        ...stylistic2 ? {
          "style/no-trailing-spaces": "off",
          // superseded by svelte/no-trailing-spaces
          "svelte/derived-has-same-inputs-outputs": "error",
          "svelte/html-closing-bracket-spacing": "error",
          "svelte/html-quotes": ["error", { prefer: quotes }],
          "svelte/indent": ["error", { alignAttributesVertically: true, indent }],
          "svelte/mustache-spacing": "error",
          "svelte/no-spaces-around-equal-signs-in-attribute": "error",
          "svelte/no-trailing-spaces": "error",
          "svelte/spaced-html-comment": "error"
        } : {},
        ...overrides
      }
    }
  ];
}

// src/configs/test.ts
init_cjs_shims();
async function test(options = {}) {
  const {
    files = GLOB_TESTS,
    isInEditor = false,
    overrides = {}
  } = options;
  const [
    pluginVitest,
    pluginNoOnlyTests
  ] = await Promise.all([
    interopDefault(import("eslint-plugin-vitest")),
    // @ts-expect-error missing types
    interopDefault(import("eslint-plugin-no-only-tests"))
  ]);
  return [
    {
      name: "antfu:test:setup",
      plugins: {
        test: {
          ...pluginVitest,
          rules: {
            ...pluginVitest.rules,
            // extend `test/no-only-tests` rule
            ...pluginNoOnlyTests.rules
          }
        }
      }
    },
    {
      files,
      name: "antfu:test:rules",
      rules: {
        "node/prefer-global/process": "off",
        "test/consistent-test-it": ["error", { fn: "it", withinDescribe: "it" }],
        "test/no-identical-title": "error",
        "test/no-import-node-test": "error",
        "test/no-only-tests": isInEditor ? "off" : "error",
        "test/prefer-hooks-in-order": "error",
        "test/prefer-lowercase-title": "error",
        ...overrides
      }
    }
  ];
}

// src/configs/typescript.ts
init_cjs_shims();
var import_node_process2 = __toESM(require("process"), 1);
async function typescript(options = {}) {
  const {
    componentExts = [],
    overrides = {},
    parserOptions = {}
  } = options;
  const files = options.files ?? [
    GLOB_SRC,
    ...componentExts.map((ext) => `**/*.${ext}`)
  ];
  const filesTypeAware = options.filesTypeAware ?? [GLOB_TS, GLOB_TSX];
  const tsconfigPath = options?.tsconfigPath ? toArray(options.tsconfigPath) : void 0;
  const isTypeAware = !!tsconfigPath;
  const typeAwareRules = {
    "dot-notation": "off",
    "no-implied-eval": "off",
    "no-throw-literal": "off",
    "ts/await-thenable": "error",
    "ts/dot-notation": ["error", { allowKeywords: true }],
    "ts/no-floating-promises": "error",
    "ts/no-for-in-array": "error",
    "ts/no-implied-eval": "error",
    "ts/no-misused-promises": "error",
    "ts/no-throw-literal": "error",
    "ts/no-unnecessary-type-assertion": "error",
    "ts/no-unsafe-argument": "error",
    "ts/no-unsafe-assignment": "error",
    "ts/no-unsafe-call": "error",
    "ts/no-unsafe-member-access": "error",
    "ts/no-unsafe-return": "error",
    "ts/restrict-plus-operands": "error",
    "ts/restrict-template-expressions": "error",
    "ts/unbound-method": "error"
  };
  const [
    pluginTs,
    parserTs
  ] = await Promise.all([
    interopDefault(import("@typescript-eslint/eslint-plugin")),
    interopDefault(import("@typescript-eslint/parser"))
  ]);
  function makeParser(typeAware, files2, ignores2) {
    return {
      files: files2,
      ...ignores2 ? { ignores: ignores2 } : {},
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          extraFileExtensions: componentExts.map((ext) => `.${ext}`),
          sourceType: "module",
          ...typeAware ? {
            project: tsconfigPath,
            tsconfigRootDir: import_node_process2.default.cwd()
          } : {},
          ...parserOptions
        }
      },
      name: `antfu:typescript:${typeAware ? "type-aware-parser" : "parser"}`
    };
  }
  return [
    {
      // Install the plugins without globs, so they can be configured separately.
      name: "antfu:typescript:setup",
      plugins: {
        antfu: import_eslint_plugin_antfu.default,
        ts: pluginTs
      }
    },
    // assign type-aware parser for type-aware files and type-unaware parser for the rest
    ...isTypeAware ? [
      makeParser(true, filesTypeAware),
      makeParser(false, files, filesTypeAware)
    ] : [makeParser(false, files)],
    {
      files,
      name: "antfu:typescript:rules",
      rules: {
        ...renameRules(
          pluginTs.configs["eslint-recommended"].overrides[0].rules,
          "@typescript-eslint/",
          "ts/"
        ),
        ...renameRules(
          pluginTs.configs.strict.rules,
          "@typescript-eslint/",
          "ts/"
        ),
        "no-dupe-class-members": "off",
        "no-loss-of-precision": "off",
        "no-redeclare": "off",
        "no-use-before-define": "off",
        "no-useless-constructor": "off",
        "ts/ban-ts-comment": ["error", { "ts-ignore": "allow-with-description" }],
        "ts/ban-types": ["error", { types: { Function: false } }],
        "ts/consistent-type-definitions": ["error", "interface"],
        "ts/consistent-type-imports": ["error", { disallowTypeAnnotations: false, prefer: "type-imports" }],
        "ts/no-dupe-class-members": "error",
        "ts/no-dynamic-delete": "off",
        "ts/no-explicit-any": "off",
        "ts/no-extraneous-class": "off",
        "ts/no-import-type-side-effects": "error",
        "ts/no-invalid-void-type": "off",
        "ts/no-loss-of-precision": "error",
        "ts/no-non-null-assertion": "off",
        "ts/no-redeclare": "error",
        "ts/no-require-imports": "error",
        "ts/no-unused-vars": "off",
        "ts/no-use-before-define": ["error", { classes: false, functions: false, variables: true }],
        "ts/no-useless-constructor": "off",
        "ts/prefer-ts-expect-error": "error",
        "ts/triple-slash-reference": "off",
        "ts/unified-signatures": "off",
        ...overrides
      }
    },
    {
      files: filesTypeAware,
      name: "antfu:typescript:rules-type-aware",
      rules: {
        ...tsconfigPath ? typeAwareRules : {},
        ...overrides
      }
    },
    {
      files: ["**/*.d.ts"],
      name: "antfu:typescript:dts-overrides",
      rules: {
        "eslint-comments/no-unlimited-disable": "off",
        "import/no-duplicates": "off",
        "no-restricted-syntax": "off",
        "unused-imports/no-unused-vars": "off"
      }
    },
    {
      files: ["**/*.{test,spec}.ts?(x)"],
      name: "antfu:typescript:tests-overrides",
      rules: {
        "no-unused-expressions": "off"
      }
    },
    {
      files: ["**/*.js", "**/*.cjs"],
      name: "antfu:typescript:javascript-overrides",
      rules: {
        "ts/no-require-imports": "off",
        "ts/no-var-requires": "off"
      }
    }
  ];
}

// src/configs/unicorn.ts
init_cjs_shims();
async function unicorn() {
  return [
    {
      name: "antfu:unicorn",
      plugins: {
        unicorn: import_eslint_plugin_unicorn.default
      },
      rules: {
        // Pass error message when throwing errors
        "unicorn/error-message": "error",
        // Uppercase regex escapes
        "unicorn/escape-case": "error",
        // Array.isArray instead of instanceof
        "unicorn/no-instanceof-array": "error",
        // Ban `new Array` as `Array` constructor's params are ambiguous
        "unicorn/no-new-array": "error",
        // Prevent deprecated `new Buffer()`
        "unicorn/no-new-buffer": "error",
        // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
        "unicorn/number-literal-case": "error",
        // textContent instead of innerText
        "unicorn/prefer-dom-node-text-content": "error",
        // includes over indexOf when checking for existence
        "unicorn/prefer-includes": "error",
        // Prefer using the node: protocol
        "unicorn/prefer-node-protocol": "error",
        // Prefer using number properties like `Number.isNaN` rather than `isNaN`
        "unicorn/prefer-number-properties": "error",
        // String methods startsWith/endsWith instead of more complicated stuff
        "unicorn/prefer-string-starts-ends-with": "error",
        // Enforce throwing type error when throwing error while checking typeof
        "unicorn/prefer-type-error": "error",
        // Use new when throwing error
        "unicorn/throw-new-error": "error"
      }
    }
  ];
}

// src/configs/unocss.ts
init_cjs_shims();
async function unocss(options = {}) {
  const {
    attributify = true,
    strict = false
  } = options;
  await ensurePackages([
    "@unocss/eslint-plugin"
  ]);
  const [
    pluginUnoCSS
  ] = await Promise.all([
    interopDefault(import("@unocss/eslint-plugin"))
  ]);
  return [
    {
      name: "antfu:unocss",
      plugins: {
        unocss: pluginUnoCSS
      },
      rules: {
        "unocss/order": "warn",
        ...attributify ? {
          "unocss/order-attributify": "warn"
        } : {},
        ...strict ? {
          "unocss/blocklist": "error"
        } : {}
      }
    }
  ];
}

// src/configs/vue.ts
init_cjs_shims();
var import_eslint_merge_processors2 = require("eslint-merge-processors");
async function vue(options = {}) {
  const {
    files = [GLOB_VUE],
    overrides = {},
    stylistic: stylistic2 = true,
    vueVersion = 3
  } = options;
  const sfcBlocks = options.sfcBlocks === true ? {} : options.sfcBlocks ?? {};
  const {
    indent = 2
  } = typeof stylistic2 === "boolean" ? {} : stylistic2;
  const [
    pluginVue,
    parserVue,
    processorVueBlocks
  ] = await Promise.all([
    // @ts-expect-error missing types
    interopDefault(import("eslint-plugin-vue")),
    interopDefault(import("vue-eslint-parser")),
    interopDefault(import("eslint-processor-vue-blocks"))
  ]);
  return [
    {
      name: "antfu:vue:setup",
      plugins: {
        vue: pluginVue
      }
    },
    {
      files,
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          extraFileExtensions: [".vue"],
          parser: options.typescript ? await interopDefault(import("@typescript-eslint/parser")) : null,
          sourceType: "module"
        }
      },
      name: "antfu:vue:rules",
      processor: sfcBlocks === false ? pluginVue.processors[".vue"] : (0, import_eslint_merge_processors2.mergeProcessors)([
        pluginVue.processors[".vue"],
        processorVueBlocks({
          ...sfcBlocks,
          blocks: {
            styles: true,
            ...sfcBlocks.blocks
          }
        })
      ]),
      rules: {
        ...pluginVue.configs.base.rules,
        ...vueVersion === 2 ? {
          ...pluginVue.configs.essential.rules,
          ...pluginVue.configs["strongly-recommended"].rules,
          ...pluginVue.configs.recommended.rules
        } : {
          ...pluginVue.configs["vue3-essential"].rules,
          ...pluginVue.configs["vue3-strongly-recommended"].rules,
          ...pluginVue.configs["vue3-recommended"].rules
        },
        "node/prefer-global/process": "off",
        "vue/block-order": ["error", {
          order: ["script", "template", "style"]
        }],
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
        "vue/component-options-name-casing": ["error", "PascalCase"],
        // this is deprecated
        "vue/component-tags-order": "off",
        "vue/custom-event-name-casing": ["error", "camelCase"],
        "vue/define-macros-order": ["error", {
          order: ["defineOptions", "defineProps", "defineEmits", "defineSlots"]
        }],
        "vue/dot-location": ["error", "property"],
        "vue/dot-notation": ["error", { allowKeywords: true }],
        "vue/eqeqeq": ["error", "smart"],
        "vue/html-indent": ["error", indent],
        "vue/html-quotes": ["error", "double"],
        "vue/max-attributes-per-line": "off",
        "vue/multi-word-component-names": "off",
        "vue/no-dupe-keys": "off",
        "vue/no-empty-pattern": "error",
        "vue/no-irregular-whitespace": "error",
        "vue/no-loss-of-precision": "error",
        "vue/no-restricted-syntax": [
          "error",
          "DebuggerStatement",
          "LabeledStatement",
          "WithStatement"
        ],
        "vue/no-restricted-v-bind": ["error", "/^v-/"],
        "vue/no-setup-props-reactivity-loss": "off",
        "vue/no-sparse-arrays": "error",
        "vue/no-unused-refs": "error",
        "vue/no-useless-v-bind": "error",
        "vue/no-v-html": "off",
        "vue/object-shorthand": [
          "error",
          "always",
          {
            avoidQuotes: true,
            ignoreConstructors: false
          }
        ],
        "vue/prefer-separate-static-class": "error",
        "vue/prefer-template": "error",
        "vue/prop-name-casing": ["error", "camelCase"],
        "vue/require-default-prop": "off",
        "vue/require-prop-types": "off",
        "vue/space-infix-ops": "error",
        "vue/space-unary-ops": ["error", { nonwords: false, words: true }],
        ...stylistic2 ? {
          "vue/array-bracket-spacing": ["error", "never"],
          "vue/arrow-spacing": ["error", { after: true, before: true }],
          "vue/block-spacing": ["error", "always"],
          "vue/block-tag-newline": ["error", {
            multiline: "always",
            singleline: "always"
          }],
          "vue/brace-style": ["error", "stroustrup", { allowSingleLine: true }],
          "vue/comma-dangle": ["error", "always-multiline"],
          "vue/comma-spacing": ["error", { after: true, before: false }],
          "vue/comma-style": ["error", "last"],
          "vue/html-comment-content-spacing": ["error", "always", {
            exceptions: ["-"]
          }],
          "vue/key-spacing": ["error", { afterColon: true, beforeColon: false }],
          "vue/keyword-spacing": ["error", { after: true, before: true }],
          "vue/object-curly-newline": "off",
          "vue/object-curly-spacing": ["error", "always"],
          "vue/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
          "vue/operator-linebreak": ["error", "before"],
          "vue/padding-line-between-blocks": ["error", "always"],
          "vue/quote-props": ["error", "consistent-as-needed"],
          "vue/space-in-parens": ["error", "never"],
          "vue/template-curly-spacing": "error"
        } : {},
        ...overrides
      }
    }
  ];
}

// src/configs/yaml.ts
init_cjs_shims();
async function yaml(options = {}) {
  const {
    files = [GLOB_YAML],
    overrides = {},
    stylistic: stylistic2 = true
  } = options;
  const {
    indent = 2,
    quotes = "single"
  } = typeof stylistic2 === "boolean" ? {} : stylistic2;
  const [
    pluginYaml,
    parserYaml
  ] = await Promise.all([
    interopDefault(import("eslint-plugin-yml")),
    interopDefault(import("yaml-eslint-parser"))
  ]);
  return [
    {
      name: "antfu:yaml:setup",
      plugins: {
        yaml: pluginYaml
      }
    },
    {
      files,
      languageOptions: {
        parser: parserYaml
      },
      name: "antfu:yaml:rules",
      rules: {
        "style/spaced-comment": "off",
        "yaml/block-mapping": "error",
        "yaml/block-sequence": "error",
        "yaml/no-empty-key": "error",
        "yaml/no-empty-sequence-entry": "error",
        "yaml/no-irregular-whitespace": "error",
        "yaml/plain-scalar": "error",
        "yaml/vue-custom-block/no-parsing-error": "error",
        ...stylistic2 ? {
          "yaml/block-mapping-question-indicator-newline": "error",
          "yaml/block-sequence-hyphen-indicator-newline": "error",
          "yaml/flow-mapping-curly-newline": "error",
          "yaml/flow-mapping-curly-spacing": "error",
          "yaml/flow-sequence-bracket-newline": "error",
          "yaml/flow-sequence-bracket-spacing": "error",
          "yaml/indent": ["error", indent === "tab" ? 2 : indent],
          "yaml/key-spacing": "error",
          "yaml/no-tab-indent": "error",
          "yaml/quotes": ["error", { avoidEscape: false, prefer: quotes }],
          "yaml/spaced-comment": "error"
        } : {},
        ...overrides
      }
    }
  ];
}

// src/configs/toml.ts
init_cjs_shims();
async function toml(options = {}) {
  const {
    files = [GLOB_TOML],
    overrides = {},
    stylistic: stylistic2 = true
  } = options;
  const {
    indent = 2
  } = typeof stylistic2 === "boolean" ? {} : stylistic2;
  const [
    pluginToml,
    parserToml
  ] = await Promise.all([
    interopDefault(import("eslint-plugin-toml")),
    interopDefault(import("toml-eslint-parser"))
  ]);
  return [
    {
      name: "antfu:toml:setup",
      plugins: {
        toml: pluginToml
      }
    },
    {
      files,
      languageOptions: {
        parser: parserToml
      },
      name: "antfu:toml:rules",
      rules: {
        "style/spaced-comment": "off",
        "toml/comma-style": "error",
        "toml/keys-order": "error",
        "toml/no-space-dots": "error",
        "toml/no-unreadable-number-separator": "error",
        "toml/precision-of-fractional-seconds": "error",
        "toml/precision-of-integer": "error",
        "toml/tables-order": "error",
        "toml/vue-custom-block/no-parsing-error": "error",
        ...stylistic2 ? {
          "toml/array-bracket-newline": "error",
          "toml/array-bracket-spacing": "error",
          "toml/array-element-newline": "error",
          "toml/indent": ["error", indent === "tab" ? 2 : indent],
          "toml/inline-table-curly-spacing": "error",
          "toml/key-spacing": "error",
          "toml/padding-line-between-pairs": "error",
          "toml/padding-line-between-tables": "error",
          "toml/quoted-keys": "error",
          "toml/spaced-comment": "error",
          "toml/table-bracket-spacing": "error"
        } : {},
        ...overrides
      }
    }
  ];
}

// src/factory.ts
var flatConfigProps = [
  "files",
  "ignores",
  "languageOptions",
  "linterOptions",
  "processor",
  "plugins",
  "rules",
  "settings"
];
var VuePackages = [
  "vue",
  "nuxt",
  "vitepress",
  "@slidev/cli"
];
async function antfu(options = {}, ...userConfigs) {
  const {
    componentExts = [],
    gitignore: enableGitignore = true,
    isInEditor = !!((import_node_process3.default.env.VSCODE_PID || import_node_process3.default.env.JETBRAINS_IDE || import_node_process3.default.env.VIM) && !import_node_process3.default.env.CI),
    react: enableReact = false,
    solid: enableSolid = false,
    svelte: enableSvelte = false,
    typescript: enableTypeScript = (0, import_local_pkg3.isPackageExists)("typescript"),
    unocss: enableUnoCSS = false,
    vue: enableVue = VuePackages.some((i) => (0, import_local_pkg3.isPackageExists)(i))
  } = options;
  const stylisticOptions = options.stylistic === false ? false : typeof options.stylistic === "object" ? options.stylistic : {};
  if (stylisticOptions && !("jsx" in stylisticOptions))
    stylisticOptions.jsx = options.jsx ?? true;
  const configs = [];
  if (enableGitignore) {
    if (typeof enableGitignore !== "boolean") {
      configs.push(interopDefault(import("eslint-config-flat-gitignore")).then((r) => [r(enableGitignore)]));
    } else {
      if (import_node_fs.default.existsSync(".gitignore"))
        configs.push(interopDefault(import("eslint-config-flat-gitignore")).then((r) => [r()]));
    }
  }
  configs.push(
    ignores(),
    javascript({
      isInEditor,
      overrides: getOverrides(options, "javascript")
    }),
    comments(),
    node(),
    jsdoc({
      stylistic: stylisticOptions
    }),
    imports({
      stylistic: stylisticOptions
    }),
    unicorn(),
    // Optional plugins (installed but not enabled by default)
    perfectionist()
  );
  if (enableVue)
    componentExts.push("vue");
  if (enableTypeScript) {
    configs.push(typescript({
      ...resolveSubOptions(options, "typescript"),
      componentExts,
      overrides: getOverrides(options, "typescript")
    }));
  }
  if (stylisticOptions) {
    configs.push(stylistic({
      ...stylisticOptions,
      overrides: getOverrides(options, "stylistic")
    }));
  }
  if (options.test ?? true) {
    configs.push(test({
      isInEditor,
      overrides: getOverrides(options, "test")
    }));
  }
  if (enableVue) {
    configs.push(vue({
      ...resolveSubOptions(options, "vue"),
      overrides: getOverrides(options, "vue"),
      stylistic: stylisticOptions,
      typescript: !!enableTypeScript
    }));
  }
  if (enableReact) {
    configs.push(react({
      overrides: getOverrides(options, "react"),
      typescript: !!enableTypeScript
    }));
  }
  if (enableSolid) {
    configs.push(solid({
      overrides: getOverrides(options, "solid"),
      typescript: !!enableTypeScript
    }));
  }
  if (enableSvelte) {
    configs.push(svelte({
      overrides: getOverrides(options, "svelte"),
      stylistic: stylisticOptions,
      typescript: !!enableTypeScript
    }));
  }
  if (enableUnoCSS) {
    configs.push(unocss({
      ...resolveSubOptions(options, "unocss"),
      overrides: getOverrides(options, "unocss")
    }));
  }
  if (options.jsonc ?? true) {
    configs.push(
      jsonc({
        overrides: getOverrides(options, "jsonc"),
        stylistic: stylisticOptions
      }),
      sortPackageJson(),
      sortTsconfig()
    );
  }
  if (options.yaml ?? true) {
    configs.push(yaml({
      overrides: getOverrides(options, "yaml"),
      stylistic: stylisticOptions
    }));
  }
  if (options.toml ?? true) {
    configs.push(toml({
      overrides: getOverrides(options, "toml"),
      stylistic: stylisticOptions
    }));
  }
  if (options.markdown ?? true) {
    configs.push(
      markdown(
        {
          componentExts,
          overrides: getOverrides(options, "markdown")
        }
      )
    );
  }
  if (options.formatters) {
    configs.push(formatters(
      options.formatters,
      typeof stylisticOptions === "boolean" ? {} : stylisticOptions
    ));
  }
  const fusedConfig = flatConfigProps.reduce((acc, key) => {
    if (key in options)
      acc[key] = options[key];
    return acc;
  }, {});
  if (Object.keys(fusedConfig).length)
    configs.push([fusedConfig]);
  const merged = combine(
    ...configs,
    ...userConfigs
  );
  return merged;
}
function resolveSubOptions(options, key) {
  return typeof options[key] === "boolean" ? {} : options[key] || {};
}
function getOverrides(options, key) {
  const sub = resolveSubOptions(options, key);
  return {
    ...options.overrides?.[key],
    ..."overrides" in sub ? sub.overrides : {}
  };
}

// src/types.ts
init_cjs_shims();

// src/index.ts
var src_default = antfu;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GLOB_ALL_SRC,
  GLOB_CSS,
  GLOB_EXCLUDE,
  GLOB_HTML,
  GLOB_JS,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_JSONC,
  GLOB_JSX,
  GLOB_LESS,
  GLOB_MARKDOWN,
  GLOB_MARKDOWN_CODE,
  GLOB_MARKDOWN_IN_MARKDOWN,
  GLOB_POSTCSS,
  GLOB_SCSS,
  GLOB_SRC,
  GLOB_SRC_EXT,
  GLOB_STYLE,
  GLOB_SVELTE,
  GLOB_TESTS,
  GLOB_TOML,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
  GLOB_YAML,
  StylisticConfigDefaults,
  antfu,
  combine,
  comments,
  ensurePackages,
  formatters,
  getOverrides,
  ignores,
  imports,
  interopDefault,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  node,
  parserPlain,
  perfectionist,
  react,
  renameRules,
  resolveSubOptions,
  solid,
  sortPackageJson,
  sortTsconfig,
  stylistic,
  svelte,
  test,
  toArray,
  toml,
  typescript,
  unicorn,
  unocss,
  vue,
  yaml
});
