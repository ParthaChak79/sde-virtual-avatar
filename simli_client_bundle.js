var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
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

// node_modules/livekit-client/dist/livekit-client.umd.js
var require_livekit_client_umd = __commonJS({
  "node_modules/livekit-client/dist/livekit-client.umd.js"(exports, module) {
    !(function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).LivekitClient = {});
    })(exports, (function(e) {
      "use strict";
      function t(e2, t2) {
        return t2.forEach((function(t3) {
          t3 && "string" != typeof t3 && !Array.isArray(t3) && Object.keys(t3).forEach((function(n2) {
            if ("default" !== n2 && !(n2 in e2)) {
              var i2 = Object.getOwnPropertyDescriptor(t3, n2);
              Object.defineProperty(e2, n2, i2.get ? i2 : { enumerable: true, get: function() {
                return t3[n2];
              } });
            }
          }));
        })), Object.freeze(e2);
      }
      var n = Object.defineProperty, i = (e2, t2, i2) => ((e3, t3, i3) => t3 in e3 ? n(e3, t3, { enumerable: true, configurable: true, writable: true, value: i3 }) : e3[t3] = i3)(e2, "symbol" != typeof t2 ? t2 + "" : t2, i2);
      class r {
        constructor() {
          i(this, "_locking"), i(this, "_locks"), this._locking = Promise.resolve(), this._locks = 0;
        }
        isLocked() {
          return this._locks > 0;
        }
        lock() {
          let e2;
          this._locks += 1;
          const t2 = new Promise(((t3) => e2 = () => {
            this._locks -= 1, t3();
          })), n2 = this._locking.then((() => e2));
          return this._locking = this._locking.then((() => t2)), n2;
        }
      }
      function a(e2, t2) {
        if (!e2) throw new Error(t2);
      }
      function s(e2) {
        if ("number" != typeof e2) throw new Error("invalid int 32: " + typeof e2);
        if (!Number.isInteger(e2) || e2 > 2147483647 || e2 < -2147483648) throw new Error("invalid int 32: " + e2);
      }
      function o(e2) {
        if ("number" != typeof e2) throw new Error("invalid uint 32: " + typeof e2);
        if (!Number.isInteger(e2) || e2 > 4294967295 || e2 < 0) throw new Error("invalid uint 32: " + e2);
      }
      function c(e2) {
        if ("number" != typeof e2) throw new Error("invalid float 32: " + typeof e2);
        if (Number.isFinite(e2) && (e2 > 34028234663852886e22 || e2 < -34028234663852886e22)) throw new Error("invalid float 32: " + e2);
      }
      const d = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
      function l(e2) {
        const t2 = e2[d];
        return a(t2, "missing enum type on enum object"), t2;
      }
      function u(e2, t2, n2, i2) {
        e2[d] = h(t2, n2.map(((t3) => ({ no: t3.no, name: t3.name, localName: e2[t3.no] }))));
      }
      function h(e2, t2, n2) {
        const i2 = /* @__PURE__ */ Object.create(null), r2 = /* @__PURE__ */ Object.create(null), a2 = [];
        for (const e3 of t2) {
          const t3 = m(e3);
          a2.push(t3), i2[e3.name] = t3, r2[e3.no] = t3;
        }
        return { typeName: e2, values: a2, findName: (e3) => i2[e3], findNumber: (e3) => r2[e3] };
      }
      function p(e2, t2, n2) {
        const i2 = {};
        for (const e3 of t2) {
          const t3 = m(e3);
          i2[t3.localName] = t3.no, i2[t3.no] = t3.localName;
        }
        return u(i2, e2, t2), i2;
      }
      function m(e2) {
        return "localName" in e2 ? e2 : Object.assign(Object.assign({}, e2), { localName: e2.name });
      }
      class g {
        equals(e2) {
          return this.getType().runtime.util.equals(this.getType(), this, e2);
        }
        clone() {
          return this.getType().runtime.util.clone(this);
        }
        fromBinary(e2, t2) {
          const n2 = this.getType().runtime.bin, i2 = n2.makeReadOptions(t2);
          return n2.readMessage(this, i2.readerFactory(e2), e2.byteLength, i2), this;
        }
        fromJson(e2, t2) {
          const n2 = this.getType(), i2 = n2.runtime.json, r2 = i2.makeReadOptions(t2);
          return i2.readMessage(n2, e2, r2, this), this;
        }
        fromJsonString(e2, t2) {
          let n2;
          try {
            n2 = JSON.parse(e2);
          } catch (e3) {
            throw new Error("cannot decode ".concat(this.getType().typeName, " from JSON: ").concat(e3 instanceof Error ? e3.message : String(e3)));
          }
          return this.fromJson(n2, t2);
        }
        toBinary(e2) {
          const t2 = this.getType().runtime.bin, n2 = t2.makeWriteOptions(e2), i2 = n2.writerFactory();
          return t2.writeMessage(this, i2, n2), i2.finish();
        }
        toJson(e2) {
          const t2 = this.getType().runtime.json, n2 = t2.makeWriteOptions(e2);
          return t2.writeMessage(this, n2);
        }
        toJsonString(e2) {
          var t2;
          const n2 = this.toJson(e2);
          return JSON.stringify(n2, null, null !== (t2 = null == e2 ? void 0 : e2.prettySpaces) && void 0 !== t2 ? t2 : 0);
        }
        toJSON() {
          return this.toJson({ emitDefaultValues: true });
        }
        getType() {
          return Object.getPrototypeOf(this).constructor;
        }
      }
      function v() {
        let e2 = 0, t2 = 0;
        for (let n3 = 0; n3 < 28; n3 += 7) {
          let i2 = this.buf[this.pos++];
          if (e2 |= (127 & i2) << n3, !(128 & i2)) return this.assertBounds(), [e2, t2];
        }
        let n2 = this.buf[this.pos++];
        if (e2 |= (15 & n2) << 28, t2 = (112 & n2) >> 4, !(128 & n2)) return this.assertBounds(), [e2, t2];
        for (let n3 = 3; n3 <= 31; n3 += 7) {
          let i2 = this.buf[this.pos++];
          if (t2 |= (127 & i2) << n3, !(128 & i2)) return this.assertBounds(), [e2, t2];
        }
        throw new Error("invalid varint");
      }
      function f(e2, t2, n2) {
        for (let i3 = 0; i3 < 28; i3 += 7) {
          const r3 = e2 >>> i3, a2 = !(r3 >>> 7 == 0 && 0 == t2), s2 = 255 & (a2 ? 128 | r3 : r3);
          if (n2.push(s2), !a2) return;
        }
        const i2 = e2 >>> 28 & 15 | (7 & t2) << 4, r2 = !!(t2 >> 3);
        if (n2.push(255 & (r2 ? 128 | i2 : i2)), r2) {
          for (let e3 = 3; e3 < 31; e3 += 7) {
            const i3 = t2 >>> e3, r3 = !(i3 >>> 7 == 0), a2 = 255 & (r3 ? 128 | i3 : i3);
            if (n2.push(a2), !r3) return;
          }
          n2.push(t2 >>> 31 & 1);
        }
      }
      const k = 4294967296;
      function y(e2) {
        const t2 = "-" === e2[0];
        t2 && (e2 = e2.slice(1));
        const n2 = 1e6;
        let i2 = 0, r2 = 0;
        function a2(t3, a3) {
          const s2 = Number(e2.slice(t3, a3));
          r2 *= n2, i2 = i2 * n2 + s2, i2 >= k && (r2 += i2 / k | 0, i2 %= k);
        }
        return a2(-24, -18), a2(-18, -12), a2(-12, -6), a2(-6), t2 ? S(i2, r2) : T(i2, r2);
      }
      function b(e2, t2) {
        var n2 = (function(e3, t3) {
          return { lo: e3 >>> 0, hi: t3 >>> 0 };
        })(e2, t2);
        if (e2 = n2.lo, (t2 = n2.hi) <= 2097151) return String(k * t2 + e2);
        const i2 = 16777215 & (e2 >>> 24 | t2 << 8), r2 = t2 >> 16 & 65535;
        let a2 = (16777215 & e2) + 6777216 * i2 + 6710656 * r2, s2 = i2 + 8147497 * r2, o2 = 2 * r2;
        const c2 = 1e7;
        return a2 >= c2 && (s2 += Math.floor(a2 / c2), a2 %= c2), s2 >= c2 && (o2 += Math.floor(s2 / c2), s2 %= c2), o2.toString() + E(s2) + E(a2);
      }
      function T(e2, t2) {
        return { lo: 0 | e2, hi: 0 | t2 };
      }
      function S(e2, t2) {
        return t2 = ~t2, e2 ? e2 = 1 + ~e2 : t2 += 1, T(e2, t2);
      }
      const E = (e2) => {
        const t2 = String(e2);
        return "0000000".slice(t2.length) + t2;
      };
      function C(e2, t2) {
        if (e2 >= 0) {
          for (; e2 > 127; ) t2.push(127 & e2 | 128), e2 >>>= 7;
          t2.push(e2);
        } else {
          for (let n2 = 0; n2 < 9; n2++) t2.push(127 & e2 | 128), e2 >>= 7;
          t2.push(1);
        }
      }
      function w() {
        let e2 = this.buf[this.pos++], t2 = 127 & e2;
        if (!(128 & e2)) return this.assertBounds(), t2;
        if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 7, !(128 & e2)) return this.assertBounds(), t2;
        if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 14, !(128 & e2)) return this.assertBounds(), t2;
        if (e2 = this.buf[this.pos++], t2 |= (127 & e2) << 21, !(128 & e2)) return this.assertBounds(), t2;
        e2 = this.buf[this.pos++], t2 |= (15 & e2) << 28;
        for (let t3 = 5; 128 & e2 && t3 < 10; t3++) e2 = this.buf[this.pos++];
        if (128 & e2) throw new Error("invalid varint");
        return this.assertBounds(), t2 >>> 0;
      }
      const R = (function() {
        const e2 = new DataView(new ArrayBuffer(8));
        if ("function" == typeof BigInt && "function" == typeof e2.getBigInt64 && "function" == typeof e2.getBigUint64 && "function" == typeof e2.setBigInt64 && "function" == typeof e2.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
          const t3 = BigInt("-9223372036854775808"), n3 = BigInt("9223372036854775807"), i2 = BigInt("0"), r2 = BigInt("18446744073709551615");
          return { zero: BigInt(0), supported: true, parse(e3) {
            const i3 = "bigint" == typeof e3 ? e3 : BigInt(e3);
            if (i3 > n3 || i3 < t3) throw new Error("int64 invalid: ".concat(e3));
            return i3;
          }, uParse(e3) {
            const t4 = "bigint" == typeof e3 ? e3 : BigInt(e3);
            if (t4 > r2 || t4 < i2) throw new Error("uint64 invalid: ".concat(e3));
            return t4;
          }, enc(t4) {
            return e2.setBigInt64(0, this.parse(t4), true), { lo: e2.getInt32(0, true), hi: e2.getInt32(4, true) };
          }, uEnc(t4) {
            return e2.setBigInt64(0, this.uParse(t4), true), { lo: e2.getInt32(0, true), hi: e2.getInt32(4, true) };
          }, dec: (t4, n4) => (e2.setInt32(0, t4, true), e2.setInt32(4, n4, true), e2.getBigInt64(0, true)), uDec: (t4, n4) => (e2.setInt32(0, t4, true), e2.setInt32(4, n4, true), e2.getBigUint64(0, true)) };
        }
        const t2 = (e3) => a(/^-?[0-9]+$/.test(e3), "int64 invalid: ".concat(e3)), n2 = (e3) => a(/^[0-9]+$/.test(e3), "uint64 invalid: ".concat(e3));
        return { zero: "0", supported: false, parse: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), t2(e3), e3), uParse: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), n2(e3), e3), enc: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), t2(e3), y(e3)), uEnc: (e3) => ("string" != typeof e3 && (e3 = e3.toString()), n2(e3), y(e3)), dec: (e3, t3) => (function(e4, t4) {
          let n3 = T(e4, t4);
          const i2 = 2147483648 & n3.hi;
          i2 && (n3 = S(n3.lo, n3.hi));
          const r2 = b(n3.lo, n3.hi);
          return i2 ? "-" + r2 : r2;
        })(e3, t3), uDec: (e3, t3) => b(e3, t3) };
      })();
      var P, I, D;
      function M(e2, t2, n2) {
        if (t2 === n2) return true;
        if (e2 == P.BYTES) {
          if (!(t2 instanceof Uint8Array && n2 instanceof Uint8Array)) return false;
          if (t2.length !== n2.length) return false;
          for (let e3 = 0; e3 < t2.length; e3++) if (t2[e3] !== n2[e3]) return false;
          return true;
        }
        switch (e2) {
          case P.UINT64:
          case P.FIXED64:
          case P.INT64:
          case P.SFIXED64:
          case P.SINT64:
            return t2 == n2;
        }
        return false;
      }
      function _(e2, t2) {
        switch (e2) {
          case P.BOOL:
            return false;
          case P.UINT64:
          case P.FIXED64:
          case P.INT64:
          case P.SFIXED64:
          case P.SINT64:
            return 0 == t2 ? R.zero : "0";
          case P.DOUBLE:
          case P.FLOAT:
            return 0;
          case P.BYTES:
            return new Uint8Array(0);
          case P.STRING:
            return "";
          default:
            return 0;
        }
      }
      function O(e2, t2) {
        switch (e2) {
          case P.BOOL:
            return false === t2;
          case P.STRING:
            return "" === t2;
          case P.BYTES:
            return t2 instanceof Uint8Array && !t2.byteLength;
          default:
            return 0 == t2;
        }
      }
      function A(e2, t2) {
        (null == t2 || t2 > e2.length) && (t2 = e2.length);
        for (var n2 = 0, i2 = Array(t2); n2 < t2; n2++) i2[n2] = e2[n2];
        return i2;
      }
      function N(e2, t2, n2) {
        return (t2 = (function(e3) {
          var t3 = (function(e4, t4) {
            if ("object" != typeof e4 || !e4) return e4;
            var n3 = e4[Symbol.toPrimitive];
            if (void 0 !== n3) {
              var i2 = n3.call(e4, t4);
              if ("object" != typeof i2) return i2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t4 ? String : Number)(e4);
          })(e3, "string");
          return "symbol" == typeof t3 ? t3 : t3 + "";
        })(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
      }
      function x(e2, t2) {
        return (function(e3) {
          if (Array.isArray(e3)) return e3;
        })(e2) || (function(e3, t3) {
          var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
          if (null != n2) {
            var i2, r2, a2, s2, o2 = [], c2 = true, d2 = false;
            try {
              if (a2 = (n2 = n2.call(e3)).next, 0 === t3) {
                if (Object(n2) !== n2) return;
                c2 = false;
              } else for (; !(c2 = (i2 = a2.call(n2)).done) && (o2.push(i2.value), o2.length !== t3); c2 = true) ;
            } catch (e4) {
              d2 = true, r2 = e4;
            } finally {
              try {
                if (!c2 && null != n2.return && (s2 = n2.return(), Object(s2) !== s2)) return;
              } finally {
                if (d2) throw r2;
              }
            }
            return o2;
          }
        })(e2, t2) || (function(e3, t3) {
          if (e3) {
            if ("string" == typeof e3) return A(e3, t3);
            var n2 = {}.toString.call(e3).slice(8, -1);
            return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? A(e3, t3) : void 0;
          }
        })(e2, t2) || (function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })();
      }
      !(function(e2) {
        e2[e2.DOUBLE = 1] = "DOUBLE", e2[e2.FLOAT = 2] = "FLOAT", e2[e2.INT64 = 3] = "INT64", e2[e2.UINT64 = 4] = "UINT64", e2[e2.INT32 = 5] = "INT32", e2[e2.FIXED64 = 6] = "FIXED64", e2[e2.FIXED32 = 7] = "FIXED32", e2[e2.BOOL = 8] = "BOOL", e2[e2.STRING = 9] = "STRING", e2[e2.BYTES = 12] = "BYTES", e2[e2.UINT32 = 13] = "UINT32", e2[e2.SFIXED32 = 15] = "SFIXED32", e2[e2.SFIXED64 = 16] = "SFIXED64", e2[e2.SINT32 = 17] = "SINT32", e2[e2.SINT64 = 18] = "SINT64";
      })(P || (P = {})), (function(e2) {
        e2[e2.BIGINT = 0] = "BIGINT", e2[e2.STRING = 1] = "STRING";
      })(I || (I = {})), (function(e2) {
        e2[e2.Varint = 0] = "Varint", e2[e2.Bit64 = 1] = "Bit64", e2[e2.LengthDelimited = 2] = "LengthDelimited", e2[e2.StartGroup = 3] = "StartGroup", e2[e2.EndGroup = 4] = "EndGroup", e2[e2.Bit32 = 5] = "Bit32";
      })(D || (D = {}));
      class L {
        constructor(e2) {
          this.stack = [], this.textEncoder = null != e2 ? e2 : new TextEncoder(), this.chunks = [], this.buf = [];
        }
        finish() {
          this.chunks.push(new Uint8Array(this.buf));
          let e2 = 0;
          for (let t3 = 0; t3 < this.chunks.length; t3++) e2 += this.chunks[t3].length;
          let t2 = new Uint8Array(e2), n2 = 0;
          for (let e3 = 0; e3 < this.chunks.length; e3++) t2.set(this.chunks[e3], n2), n2 += this.chunks[e3].length;
          return this.chunks = [], t2;
        }
        fork() {
          return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
        }
        join() {
          let e2 = this.finish(), t2 = this.stack.pop();
          if (!t2) throw new Error("invalid state, fork stack empty");
          return this.chunks = t2.chunks, this.buf = t2.buf, this.uint32(e2.byteLength), this.raw(e2);
        }
        tag(e2, t2) {
          return this.uint32((e2 << 3 | t2) >>> 0);
        }
        raw(e2) {
          return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e2), this;
        }
        uint32(e2) {
          for (o(e2); e2 > 127; ) this.buf.push(127 & e2 | 128), e2 >>>= 7;
          return this.buf.push(e2), this;
        }
        int32(e2) {
          return s(e2), C(e2, this.buf), this;
        }
        bool(e2) {
          return this.buf.push(e2 ? 1 : 0), this;
        }
        bytes(e2) {
          return this.uint32(e2.byteLength), this.raw(e2);
        }
        string(e2) {
          let t2 = this.textEncoder.encode(e2);
          return this.uint32(t2.byteLength), this.raw(t2);
        }
        float(e2) {
          c(e2);
          let t2 = new Uint8Array(4);
          return new DataView(t2.buffer).setFloat32(0, e2, true), this.raw(t2);
        }
        double(e2) {
          let t2 = new Uint8Array(8);
          return new DataView(t2.buffer).setFloat64(0, e2, true), this.raw(t2);
        }
        fixed32(e2) {
          o(e2);
          let t2 = new Uint8Array(4);
          return new DataView(t2.buffer).setUint32(0, e2, true), this.raw(t2);
        }
        sfixed32(e2) {
          s(e2);
          let t2 = new Uint8Array(4);
          return new DataView(t2.buffer).setInt32(0, e2, true), this.raw(t2);
        }
        sint32(e2) {
          return s(e2), C(e2 = (e2 << 1 ^ e2 >> 31) >>> 0, this.buf), this;
        }
        sfixed64(e2) {
          let t2 = new Uint8Array(8), n2 = new DataView(t2.buffer), i2 = R.enc(e2);
          return n2.setInt32(0, i2.lo, true), n2.setInt32(4, i2.hi, true), this.raw(t2);
        }
        fixed64(e2) {
          let t2 = new Uint8Array(8), n2 = new DataView(t2.buffer), i2 = R.uEnc(e2);
          return n2.setInt32(0, i2.lo, true), n2.setInt32(4, i2.hi, true), this.raw(t2);
        }
        int64(e2) {
          let t2 = R.enc(e2);
          return f(t2.lo, t2.hi, this.buf), this;
        }
        sint64(e2) {
          let t2 = R.enc(e2), n2 = t2.hi >> 31;
          return f(t2.lo << 1 ^ n2, (t2.hi << 1 | t2.lo >>> 31) ^ n2, this.buf), this;
        }
        uint64(e2) {
          let t2 = R.uEnc(e2);
          return f(t2.lo, t2.hi, this.buf), this;
        }
      }
      class U {
        constructor(e2, t2) {
          this.varint64 = v, this.uint32 = w, this.buf = e2, this.len = e2.length, this.pos = 0, this.view = new DataView(e2.buffer, e2.byteOffset, e2.byteLength), this.textDecoder = null != t2 ? t2 : new TextDecoder();
        }
        tag() {
          let e2 = this.uint32(), t2 = e2 >>> 3, n2 = 7 & e2;
          if (t2 <= 0 || n2 < 0 || n2 > 5) throw new Error("illegal tag: field no " + t2 + " wire type " + n2);
          return [t2, n2];
        }
        skip(e2, t2) {
          let n2 = this.pos;
          switch (e2) {
            case D.Varint:
              for (; 128 & this.buf[this.pos++]; ) ;
              break;
            case D.Bit64:
              this.pos += 4;
            case D.Bit32:
              this.pos += 4;
              break;
            case D.LengthDelimited:
              let n3 = this.uint32();
              this.pos += n3;
              break;
            case D.StartGroup:
              for (; ; ) {
                const e3 = x(this.tag(), 2), n4 = e3[0], i2 = e3[1];
                if (i2 === D.EndGroup) {
                  if (void 0 !== t2 && n4 !== t2) throw new Error("invalid end group tag");
                  break;
                }
                this.skip(i2, n4);
              }
              break;
            default:
              throw new Error("cant skip wire type " + e2);
          }
          return this.assertBounds(), this.buf.subarray(n2, this.pos);
        }
        assertBounds() {
          if (this.pos > this.len) throw new RangeError("premature EOF");
        }
        int32() {
          return 0 | this.uint32();
        }
        sint32() {
          let e2 = this.uint32();
          return e2 >>> 1 ^ -(1 & e2);
        }
        int64() {
          return R.dec(...this.varint64());
        }
        uint64() {
          return R.uDec(...this.varint64());
        }
        sint64() {
          let e2 = x(this.varint64(), 2), t2 = e2[0], n2 = e2[1], i2 = -(1 & t2);
          return t2 = (t2 >>> 1 | (1 & n2) << 31) ^ i2, n2 = n2 >>> 1 ^ i2, R.dec(t2, n2);
        }
        bool() {
          let e2 = x(this.varint64(), 2), t2 = e2[0], n2 = e2[1];
          return 0 !== t2 || 0 !== n2;
        }
        fixed32() {
          return this.view.getUint32((this.pos += 4) - 4, true);
        }
        sfixed32() {
          return this.view.getInt32((this.pos += 4) - 4, true);
        }
        fixed64() {
          return R.uDec(this.sfixed32(), this.sfixed32());
        }
        sfixed64() {
          return R.dec(this.sfixed32(), this.sfixed32());
        }
        float() {
          return this.view.getFloat32((this.pos += 4) - 4, true);
        }
        double() {
          return this.view.getFloat64((this.pos += 8) - 8, true);
        }
        bytes() {
          let e2 = this.uint32(), t2 = this.pos;
          return this.pos += e2, this.assertBounds(), this.buf.subarray(t2, t2 + e2);
        }
        string() {
          return this.textDecoder.decode(this.bytes());
        }
      }
      function F(e2) {
        const t2 = e2.field.localName, n2 = /* @__PURE__ */ Object.create(null);
        return n2[t2] = (function(e3) {
          const t3 = e3.field;
          if (t3.repeated) return [];
          if (void 0 !== t3.default) return t3.default;
          switch (t3.kind) {
            case "enum":
              return t3.T.values[0].no;
            case "scalar":
              return _(t3.T, t3.L);
            case "message":
              const e4 = t3.T, n3 = new e4();
              return e4.fieldWrapper ? e4.fieldWrapper.unwrapField(n3) : n3;
            case "map":
              throw "map fields are not allowed to be extensions";
          }
        })(e2), [n2, () => n2[t2]];
      }
      let B = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), j = [];
      for (let e2 = 0; e2 < B.length; e2++) j[B[e2].charCodeAt(0)] = e2;
      j["-".charCodeAt(0)] = B.indexOf("+"), j["_".charCodeAt(0)] = B.indexOf("/");
      const q = { dec(e2) {
        let t2 = 3 * e2.length / 4;
        "=" == e2[e2.length - 2] ? t2 -= 2 : "=" == e2[e2.length - 1] && (t2 -= 1);
        let n2, i2 = new Uint8Array(t2), r2 = 0, a2 = 0, s2 = 0;
        for (let t3 = 0; t3 < e2.length; t3++) {
          if (n2 = j[e2.charCodeAt(t3)], void 0 === n2) switch (e2[t3]) {
            case "=":
              a2 = 0;
            case "\n":
            case "\r":
            case "	":
            case " ":
              continue;
            default:
              throw Error("invalid base64 string.");
          }
          switch (a2) {
            case 0:
              s2 = n2, a2 = 1;
              break;
            case 1:
              i2[r2++] = s2 << 2 | (48 & n2) >> 4, s2 = n2, a2 = 2;
              break;
            case 2:
              i2[r2++] = (15 & s2) << 4 | (60 & n2) >> 2, s2 = n2, a2 = 3;
              break;
            case 3:
              i2[r2++] = (3 & s2) << 6 | n2, a2 = 0;
          }
        }
        if (1 == a2) throw Error("invalid base64 string.");
        return i2.subarray(0, r2);
      }, enc(e2) {
        let t2, n2 = "", i2 = 0, r2 = 0;
        for (let a2 = 0; a2 < e2.length; a2++) switch (t2 = e2[a2], i2) {
          case 0:
            n2 += B[t2 >> 2], r2 = (3 & t2) << 4, i2 = 1;
            break;
          case 1:
            n2 += B[r2 | t2 >> 4], r2 = (15 & t2) << 2, i2 = 2;
            break;
          case 2:
            n2 += B[r2 | t2 >> 6], n2 += B[63 & t2], i2 = 0;
        }
        return i2 && (n2 += B[r2], n2 += "=", 1 == i2 && (n2 += "=")), n2;
      } };
      function V(e2, t2, n2) {
        K(t2, e2);
        const i2 = t2.runtime.bin.makeReadOptions(n2), r2 = (function(e3, t3) {
          if (!t3.repeated && ("enum" == t3.kind || "scalar" == t3.kind)) {
            for (let n3 = e3.length - 1; n3 >= 0; --n3) if (e3[n3].no == t3.no) return [e3[n3]];
            return [];
          }
          return e3.filter(((e4) => e4.no === t3.no));
        })(e2.getType().runtime.bin.listUnknownFields(e2), t2.field), a2 = x(F(t2), 2), s2 = a2[0], o2 = a2[1];
        for (const e3 of r2) t2.runtime.bin.readField(s2, i2.readerFactory(e3.data), t2.field, e3.wireType, i2);
        return o2();
      }
      function H(e2, t2, n2, i2) {
        K(t2, e2);
        const r2 = t2.runtime.bin.makeReadOptions(i2), a2 = t2.runtime.bin.makeWriteOptions(i2);
        if (W(e2, t2)) {
          const n3 = e2.getType().runtime.bin.listUnknownFields(e2).filter(((e3) => e3.no != t2.field.no));
          e2.getType().runtime.bin.discardUnknownFields(e2);
          for (const t3 of n3) e2.getType().runtime.bin.onUnknownField(e2, t3.no, t3.wireType, t3.data);
        }
        const s2 = a2.writerFactory();
        let o2 = t2.field;
        o2.opt || o2.repeated || "enum" != o2.kind && "scalar" != o2.kind || (o2 = Object.assign(Object.assign({}, t2.field), { opt: true })), t2.runtime.bin.writeField(o2, n2, s2, a2);
        const c2 = r2.readerFactory(s2.finish());
        for (; c2.pos < c2.len; ) {
          const t3 = x(c2.tag(), 2), n3 = t3[0], i3 = t3[1], r3 = c2.skip(i3, n3);
          e2.getType().runtime.bin.onUnknownField(e2, n3, i3, r3);
        }
      }
      function W(e2, t2) {
        const n2 = e2.getType();
        return t2.extendee.typeName === n2.typeName && !!n2.runtime.bin.listUnknownFields(e2).find(((e3) => e3.no == t2.field.no));
      }
      function K(e2, t2) {
        a(e2.extendee.typeName == t2.getType().typeName, "extension ".concat(e2.typeName, " can only be applied to message ").concat(e2.extendee.typeName));
      }
      function z(e2, t2) {
        const n2 = e2.localName;
        if (e2.repeated) return t2[n2].length > 0;
        if (e2.oneof) return t2[e2.oneof.localName].case === n2;
        switch (e2.kind) {
          case "enum":
          case "scalar":
            return e2.opt || e2.req ? void 0 !== t2[n2] : "enum" == e2.kind ? t2[n2] !== e2.T.values[0].no : !O(e2.T, t2[n2]);
          case "message":
            return void 0 !== t2[n2];
          case "map":
            return Object.keys(t2[n2]).length > 0;
        }
      }
      function J(e2, t2) {
        const n2 = e2.localName, i2 = !e2.opt && !e2.req;
        if (e2.repeated) t2[n2] = [];
        else if (e2.oneof) t2[e2.oneof.localName] = { case: void 0 };
        else switch (e2.kind) {
          case "map":
            t2[n2] = {};
            break;
          case "enum":
            t2[n2] = i2 ? e2.T.values[0].no : void 0;
            break;
          case "scalar":
            t2[n2] = i2 ? _(e2.T, e2.L) : void 0;
            break;
          case "message":
            t2[n2] = void 0;
        }
      }
      function G(e2, t2) {
        if (null === e2 || "object" != typeof e2) return false;
        if (!Object.getOwnPropertyNames(g.prototype).every(((t3) => t3 in e2 && "function" == typeof e2[t3]))) return false;
        const n2 = e2.getType();
        return null !== n2 && "function" == typeof n2 && "typeName" in n2 && "string" == typeof n2.typeName && (void 0 === t2 || n2.typeName == t2.typeName);
      }
      function Q(e2, t2) {
        return G(t2) || !e2.fieldWrapper ? t2 : e2.fieldWrapper.wrapField(t2);
      }
      P.DOUBLE, P.FLOAT, P.INT64, P.UINT64, P.INT32, P.UINT32, P.BOOL, P.STRING, P.BYTES;
      const Y = { ignoreUnknownFields: false }, X = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
      function Z(e2) {
        return e2 ? Object.assign(Object.assign({}, Y), e2) : Y;
      }
      function $(e2) {
        return e2 ? Object.assign(Object.assign({}, X), e2) : X;
      }
      const ee = /* @__PURE__ */ Symbol(), te = /* @__PURE__ */ Symbol();
      function ne(e2) {
        if (null === e2) return "null";
        switch (typeof e2) {
          case "object":
            return Array.isArray(e2) ? "array" : "object";
          case "string":
            return e2.length > 100 ? "string" : '"'.concat(e2.split('"').join('\\"'), '"');
          default:
            return String(e2);
        }
      }
      function ie(e2, t2, n2, i2, r2) {
        let s2 = n2.localName;
        if (n2.repeated) {
          if (a("map" != n2.kind), null === t2) return;
          if (!Array.isArray(t2)) throw new Error("cannot decode field ".concat(r2.typeName, ".").concat(n2.name, " from JSON: ").concat(ne(t2)));
          const o3 = e2[s2];
          for (const e3 of t2) {
            if (null === e3) throw new Error("cannot decode field ".concat(r2.typeName, ".").concat(n2.name, " from JSON: ").concat(ne(e3)));
            switch (n2.kind) {
              case "message":
                o3.push(n2.T.fromJson(e3, i2));
                break;
              case "enum":
                const t3 = se(n2.T, e3, i2.ignoreUnknownFields, true);
                t3 !== te && o3.push(t3);
                break;
              case "scalar":
                try {
                  o3.push(ae(n2.T, e3, n2.L, true));
                } catch (t4) {
                  let i3 = "cannot decode field ".concat(r2.typeName, ".").concat(n2.name, " from JSON: ").concat(ne(e3));
                  throw t4 instanceof Error && t4.message.length > 0 && (i3 += ": ".concat(t4.message)), new Error(i3);
                }
            }
          }
        } else if ("map" == n2.kind) {
          if (null === t2) return;
          if ("object" != typeof t2 || Array.isArray(t2)) throw new Error("cannot decode field ".concat(r2.typeName, ".").concat(n2.name, " from JSON: ").concat(ne(t2)));
          const a2 = e2[s2];
          for (const e3 of Object.entries(t2)) {
            var o2 = x(e3, 2);
            const s3 = o2[0], c2 = o2[1];
            if (null === c2) throw new Error("cannot decode field ".concat(r2.typeName, ".").concat(n2.name, " from JSON: map value null"));
            let d2;
            try {
              d2 = re(n2.K, s3);
            } catch (e4) {
              let i3 = "cannot decode map key for field ".concat(r2.typeName, ".").concat(n2.name, " from JSON: ").concat(ne(t2));
              throw e4 instanceof Error && e4.message.length > 0 && (i3 += ": ".concat(e4.message)), new Error(i3);
            }
            switch (n2.V.kind) {
              case "message":
                a2[d2] = n2.V.T.fromJson(c2, i2);
                break;
              case "enum":
                const e4 = se(n2.V.T, c2, i2.ignoreUnknownFields, true);
                e4 !== te && (a2[d2] = e4);
                break;
              case "scalar":
                try {
                  a2[d2] = ae(n2.V.T, c2, I.BIGINT, true);
                } catch (e5) {
                  let i3 = "cannot decode map value for field ".concat(r2.typeName, ".").concat(n2.name, " from JSON: ").concat(ne(t2));
                  throw e5 instanceof Error && e5.message.length > 0 && (i3 += ": ".concat(e5.message)), new Error(i3);
                }
            }
          }
        } else switch (n2.oneof && (e2 = e2[n2.oneof.localName] = { case: s2 }, s2 = "value"), n2.kind) {
          case "message":
            const a2 = n2.T;
            if (null === t2 && "google.protobuf.Value" != a2.typeName) return;
            let o3 = e2[s2];
            G(o3) ? o3.fromJson(t2, i2) : (e2[s2] = o3 = a2.fromJson(t2, i2), a2.fieldWrapper && !n2.oneof && (e2[s2] = a2.fieldWrapper.unwrapField(o3)));
            break;
          case "enum":
            const c2 = se(n2.T, t2, i2.ignoreUnknownFields, false);
            switch (c2) {
              case ee:
                J(n2, e2);
                break;
              case te:
                break;
              default:
                e2[s2] = c2;
            }
            break;
          case "scalar":
            try {
              const i3 = ae(n2.T, t2, n2.L, false);
              if (i3 === ee) J(n2, e2);
              else e2[s2] = i3;
            } catch (e3) {
              let i3 = "cannot decode field ".concat(r2.typeName, ".").concat(n2.name, " from JSON: ").concat(ne(t2));
              throw e3 instanceof Error && e3.message.length > 0 && (i3 += ": ".concat(e3.message)), new Error(i3);
            }
        }
      }
      function re(e2, t2) {
        if (e2 === P.BOOL) switch (t2) {
          case "true":
            t2 = true;
            break;
          case "false":
            t2 = false;
        }
        return ae(e2, t2, I.BIGINT, true).toString();
      }
      function ae(e2, t2, n2, i2) {
        if (null === t2) return i2 ? _(e2, n2) : ee;
        switch (e2) {
          case P.DOUBLE:
          case P.FLOAT:
            if ("NaN" === t2) return Number.NaN;
            if ("Infinity" === t2) return Number.POSITIVE_INFINITY;
            if ("-Infinity" === t2) return Number.NEGATIVE_INFINITY;
            if ("" === t2) break;
            if ("string" == typeof t2 && t2.trim().length !== t2.length) break;
            if ("string" != typeof t2 && "number" != typeof t2) break;
            const i3 = Number(t2);
            if (Number.isNaN(i3)) break;
            if (!Number.isFinite(i3)) break;
            return e2 == P.FLOAT && c(i3), i3;
          case P.INT32:
          case P.FIXED32:
          case P.SFIXED32:
          case P.SINT32:
          case P.UINT32:
            let r2;
            if ("number" == typeof t2 ? r2 = t2 : "string" == typeof t2 && t2.length > 0 && t2.trim().length === t2.length && (r2 = Number(t2)), void 0 === r2) break;
            return e2 == P.UINT32 || e2 == P.FIXED32 ? o(r2) : s(r2), r2;
          case P.INT64:
          case P.SFIXED64:
          case P.SINT64:
            if ("number" != typeof t2 && "string" != typeof t2) break;
            const a2 = R.parse(t2);
            return n2 ? a2.toString() : a2;
          case P.FIXED64:
          case P.UINT64:
            if ("number" != typeof t2 && "string" != typeof t2) break;
            const d2 = R.uParse(t2);
            return n2 ? d2.toString() : d2;
          case P.BOOL:
            if ("boolean" != typeof t2) break;
            return t2;
          case P.STRING:
            if ("string" != typeof t2) break;
            try {
              encodeURIComponent(t2);
            } catch (e3) {
              throw new Error("invalid UTF8");
            }
            return t2;
          case P.BYTES:
            if ("" === t2) return new Uint8Array(0);
            if ("string" != typeof t2) break;
            return q.dec(t2);
        }
        throw new Error();
      }
      function se(e2, t2, n2, i2) {
        if (null === t2) return "google.protobuf.NullValue" == e2.typeName ? 0 : i2 ? e2.values[0].no : ee;
        switch (typeof t2) {
          case "number":
            if (Number.isInteger(t2)) return t2;
            break;
          case "string":
            const i3 = e2.findName(t2);
            if (void 0 !== i3) return i3.no;
            if (n2) return te;
        }
        throw new Error("cannot decode enum ".concat(e2.typeName, " from JSON: ").concat(ne(t2)));
      }
      function oe(e2) {
        return !(!e2.repeated && "map" != e2.kind) || !e2.oneof && ("message" != e2.kind && (!e2.opt && !e2.req));
      }
      function ce(e2, t2, n2) {
        if ("map" == e2.kind) {
          a("object" == typeof t2 && null != t2);
          const o2 = {}, c2 = Object.entries(t2);
          switch (e2.V.kind) {
            case "scalar":
              for (const t4 of c2) {
                var i2 = x(t4, 2);
                const n3 = i2[0], r3 = i2[1];
                o2[n3.toString()] = le(e2.V.T, r3);
              }
              break;
            case "message":
              for (const e3 of c2) {
                var r2 = x(e3, 2);
                const t4 = r2[0], i3 = r2[1];
                o2[t4.toString()] = i3.toJson(n2);
              }
              break;
            case "enum":
              const t3 = e2.V.T;
              for (const e3 of c2) {
                var s2 = x(e3, 2);
                const i3 = s2[0], r3 = s2[1];
                o2[i3.toString()] = de(t3, r3, n2.enumAsInteger);
              }
          }
          return n2.emitDefaultValues || c2.length > 0 ? o2 : void 0;
        }
        if (e2.repeated) {
          a(Array.isArray(t2));
          const i3 = [];
          switch (e2.kind) {
            case "scalar":
              for (let n3 = 0; n3 < t2.length; n3++) i3.push(le(e2.T, t2[n3]));
              break;
            case "enum":
              for (let r3 = 0; r3 < t2.length; r3++) i3.push(de(e2.T, t2[r3], n2.enumAsInteger));
              break;
            case "message":
              for (let e3 = 0; e3 < t2.length; e3++) i3.push(t2[e3].toJson(n2));
          }
          return n2.emitDefaultValues || i3.length > 0 ? i3 : void 0;
        }
        switch (e2.kind) {
          case "scalar":
            return le(e2.T, t2);
          case "enum":
            return de(e2.T, t2, n2.enumAsInteger);
          case "message":
            return Q(e2.T, t2).toJson(n2);
        }
      }
      function de(e2, t2, n2) {
        var i2;
        if (a("number" == typeof t2), "google.protobuf.NullValue" == e2.typeName) return null;
        if (n2) return t2;
        const r2 = e2.findNumber(t2);
        return null !== (i2 = null == r2 ? void 0 : r2.name) && void 0 !== i2 ? i2 : t2;
      }
      function le(e2, t2) {
        switch (e2) {
          case P.INT32:
          case P.SFIXED32:
          case P.SINT32:
          case P.FIXED32:
          case P.UINT32:
            return a("number" == typeof t2), t2;
          case P.FLOAT:
          case P.DOUBLE:
            return a("number" == typeof t2), Number.isNaN(t2) ? "NaN" : t2 === Number.POSITIVE_INFINITY ? "Infinity" : t2 === Number.NEGATIVE_INFINITY ? "-Infinity" : t2;
          case P.STRING:
            return a("string" == typeof t2), t2;
          case P.BOOL:
            return a("boolean" == typeof t2), t2;
          case P.UINT64:
          case P.FIXED64:
          case P.INT64:
          case P.SFIXED64:
          case P.SINT64:
            return a("bigint" == typeof t2 || "string" == typeof t2 || "number" == typeof t2), t2.toString();
          case P.BYTES:
            return a(t2 instanceof Uint8Array), q.enc(t2);
        }
      }
      const ue = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), he = { readUnknownFields: true, readerFactory: (e2) => new U(e2) }, pe = { writeUnknownFields: true, writerFactory: () => new L() };
      function me(e2) {
        return e2 ? Object.assign(Object.assign({}, he), e2) : he;
      }
      function ge(e2) {
        return e2 ? Object.assign(Object.assign({}, pe), e2) : pe;
      }
      function ve(e2, t2, n2, i2, r2) {
        let a2 = n2.repeated, s2 = n2.localName;
        switch (n2.oneof && ((e2 = e2[n2.oneof.localName]).case != s2 && delete e2.value, e2.case = s2, s2 = "value"), n2.kind) {
          case "scalar":
          case "enum":
            const o2 = "enum" == n2.kind ? P.INT32 : n2.T;
            let c2 = ye;
            if ("scalar" == n2.kind && n2.L > 0 && (c2 = ke), a2) {
              let n3 = e2[s2];
              if (i2 == D.LengthDelimited && o2 != P.STRING && o2 != P.BYTES) {
                let e3 = t2.uint32() + t2.pos;
                for (; t2.pos < e3; ) n3.push(c2(t2, o2));
              } else n3.push(c2(t2, o2));
            } else e2[s2] = c2(t2, o2);
            break;
          case "message":
            const d2 = n2.T;
            a2 ? e2[s2].push(fe(t2, new d2(), r2, n2)) : G(e2[s2]) ? fe(t2, e2[s2], r2, n2) : (e2[s2] = fe(t2, new d2(), r2, n2), !d2.fieldWrapper || n2.oneof || n2.repeated || (e2[s2] = d2.fieldWrapper.unwrapField(e2[s2])));
            break;
          case "map":
            let l2 = (function(e3, t3, n3) {
              const i3 = t3.uint32(), r3 = t3.pos + i3;
              let a3, s3;
              for (; t3.pos < r3; ) {
                switch (x(t3.tag(), 1)[0]) {
                  case 1:
                    a3 = ye(t3, e3.K);
                    break;
                  case 2:
                    switch (e3.V.kind) {
                      case "scalar":
                        s3 = ye(t3, e3.V.T);
                        break;
                      case "enum":
                        s3 = t3.int32();
                        break;
                      case "message":
                        s3 = fe(t3, new e3.V.T(), n3, void 0);
                    }
                }
              }
              void 0 === a3 && (a3 = _(e3.K, I.BIGINT));
              "string" != typeof a3 && "number" != typeof a3 && (a3 = a3.toString());
              if (void 0 === s3) switch (e3.V.kind) {
                case "scalar":
                  s3 = _(e3.V.T, I.BIGINT);
                  break;
                case "enum":
                  s3 = e3.V.T.values[0].no;
                  break;
                case "message":
                  s3 = new e3.V.T();
              }
              return [a3, s3];
            })(n2, t2, r2), u2 = x(l2, 2), h2 = u2[0], p2 = u2[1];
            e2[s2][h2] = p2;
        }
      }
      function fe(e2, t2, n2, i2) {
        const r2 = t2.getType().runtime.bin, a2 = null == i2 ? void 0 : i2.delimited;
        return r2.readMessage(t2, e2, a2 ? i2.no : e2.uint32(), n2, a2), t2;
      }
      function ke(e2, t2) {
        const n2 = ye(e2, t2);
        return "bigint" == typeof n2 ? n2.toString() : n2;
      }
      function ye(e2, t2) {
        switch (t2) {
          case P.STRING:
            return e2.string();
          case P.BOOL:
            return e2.bool();
          case P.DOUBLE:
            return e2.double();
          case P.FLOAT:
            return e2.float();
          case P.INT32:
            return e2.int32();
          case P.INT64:
            return e2.int64();
          case P.UINT64:
            return e2.uint64();
          case P.FIXED64:
            return e2.fixed64();
          case P.BYTES:
            return e2.bytes();
          case P.FIXED32:
            return e2.fixed32();
          case P.SFIXED32:
            return e2.sfixed32();
          case P.SFIXED64:
            return e2.sfixed64();
          case P.SINT64:
            return e2.sint64();
          case P.UINT32:
            return e2.uint32();
          case P.SINT32:
            return e2.sint32();
        }
      }
      function be(e2, t2, n2, i2) {
        a(void 0 !== t2);
        const r2 = e2.repeated;
        switch (e2.kind) {
          case "scalar":
          case "enum":
            let o2 = "enum" == e2.kind ? P.INT32 : e2.T;
            if (r2) if (a(Array.isArray(t2)), e2.packed) !(function(e3, t3, n3, i3) {
              if (!i3.length) return;
              e3.tag(n3, D.LengthDelimited).fork();
              let r3 = x(Ce(t3), 2)[1];
              for (let t4 = 0; t4 < i3.length; t4++) e3[r3](i3[t4]);
              e3.join();
            })(n2, o2, e2.no, t2);
            else for (const i3 of t2) Ee(n2, o2, e2.no, i3);
            else Ee(n2, o2, e2.no, t2);
            break;
          case "message":
            if (r2) {
              a(Array.isArray(t2));
              for (const r3 of t2) Se(n2, i2, e2, r3);
            } else Se(n2, i2, e2, t2);
            break;
          case "map":
            a("object" == typeof t2 && null != t2);
            for (const r3 of Object.entries(t2)) {
              var s2 = x(r3, 2);
              Te(n2, i2, e2, s2[0], s2[1]);
            }
        }
      }
      function Te(e2, t2, n2, i2, r2) {
        e2.tag(n2.no, D.LengthDelimited), e2.fork();
        let s2 = i2;
        switch (n2.K) {
          case P.INT32:
          case P.FIXED32:
          case P.UINT32:
          case P.SFIXED32:
          case P.SINT32:
            s2 = Number.parseInt(i2);
            break;
          case P.BOOL:
            a("true" == i2 || "false" == i2), s2 = "true" == i2;
        }
        switch (Ee(e2, n2.K, 1, s2), n2.V.kind) {
          case "scalar":
            Ee(e2, n2.V.T, 2, r2);
            break;
          case "enum":
            Ee(e2, P.INT32, 2, r2);
            break;
          case "message":
            a(void 0 !== r2), e2.tag(2, D.LengthDelimited).bytes(r2.toBinary(t2));
        }
        e2.join();
      }
      function Se(e2, t2, n2, i2) {
        const r2 = Q(n2.T, i2);
        n2.delimited ? e2.tag(n2.no, D.StartGroup).raw(r2.toBinary(t2)).tag(n2.no, D.EndGroup) : e2.tag(n2.no, D.LengthDelimited).bytes(r2.toBinary(t2));
      }
      function Ee(e2, t2, n2, i2) {
        a(void 0 !== i2);
        let r2 = x(Ce(t2), 2), s2 = r2[0], o2 = r2[1];
        e2.tag(n2, s2)[o2](i2);
      }
      function Ce(e2) {
        let t2 = D.Varint;
        switch (e2) {
          case P.BYTES:
          case P.STRING:
            t2 = D.LengthDelimited;
            break;
          case P.DOUBLE:
          case P.FIXED64:
          case P.SFIXED64:
            t2 = D.Bit64;
            break;
          case P.FIXED32:
          case P.SFIXED32:
          case P.FLOAT:
            t2 = D.Bit32;
        }
        return [t2, P[e2].toLowerCase()];
      }
      function we(e2) {
        if (void 0 === e2) return e2;
        if (G(e2)) return e2.clone();
        if (e2 instanceof Uint8Array) {
          const t2 = new Uint8Array(e2.byteLength);
          return t2.set(e2), t2;
        }
        return e2;
      }
      function Re(e2) {
        return e2 instanceof Uint8Array ? e2 : new Uint8Array(e2);
      }
      class Pe {
        constructor(e2, t2) {
          this._fields = e2, this._normalizer = t2;
        }
        findJsonName(e2) {
          if (!this.jsonNames) {
            const e3 = {};
            for (const t2 of this.list()) e3[t2.jsonName] = e3[t2.name] = t2;
            this.jsonNames = e3;
          }
          return this.jsonNames[e2];
        }
        find(e2) {
          if (!this.numbers) {
            const e3 = {};
            for (const t2 of this.list()) e3[t2.no] = t2;
            this.numbers = e3;
          }
          return this.numbers[e2];
        }
        list() {
          return this.all || (this.all = this._normalizer(this._fields)), this.all;
        }
        byNumber() {
          return this.numbersAsc || (this.numbersAsc = this.list().concat().sort(((e2, t2) => e2.no - t2.no))), this.numbersAsc;
        }
        byMember() {
          if (!this.members) {
            this.members = [];
            const e2 = this.members;
            let t2;
            for (const n2 of this.list()) n2.oneof ? n2.oneof !== t2 && (t2 = n2.oneof, e2.push(t2)) : e2.push(n2);
          }
          return this.members;
        }
      }
      function Ie(e2, t2) {
        const n2 = Me(e2);
        return t2 ? n2 : xe(Ne(n2));
      }
      const De = Me;
      function Me(e2) {
        let t2 = false;
        const n2 = [];
        for (let i2 = 0; i2 < e2.length; i2++) {
          let r2 = e2.charAt(i2);
          switch (r2) {
            case "_":
              t2 = true;
              break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              n2.push(r2), t2 = false;
              break;
            default:
              t2 && (t2 = false, r2 = r2.toUpperCase()), n2.push(r2);
          }
        }
        return n2.join("");
      }
      const _e = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), Oe = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), Ae = (e2) => "".concat(e2, "$"), Ne = (e2) => Oe.has(e2) ? Ae(e2) : e2, xe = (e2) => _e.has(e2) ? Ae(e2) : e2;
      class Le {
        constructor(e2) {
          this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = e2, this.localName = Ie(e2, false);
        }
        addField(e2) {
          a(e2.oneof === this, "field ".concat(e2.name, " not one of ").concat(this.name)), this.fields.push(e2);
        }
        findField(e2) {
          if (!this._lookup) {
            this._lookup = /* @__PURE__ */ Object.create(null);
            for (let e3 = 0; e3 < this.fields.length; e3++) this._lookup[this.fields[e3].localName] = this.fields[e3];
          }
          return this._lookup[e2];
        }
      }
      const Ue = (Fe = (e2) => new Pe(e2, ((e3) => (function(e4) {
        var t2, n2, i2, r2, a2, s2;
        const o2 = [];
        let c2;
        for (const d2 of "function" == typeof e4 ? e4() : e4) {
          const e5 = d2;
          if (e5.localName = Ie(d2.name, void 0 !== d2.oneof), e5.jsonName = null !== (t2 = d2.jsonName) && void 0 !== t2 ? t2 : De(d2.name), e5.repeated = null !== (n2 = d2.repeated) && void 0 !== n2 && n2, "scalar" == d2.kind && (e5.L = null !== (i2 = d2.L) && void 0 !== i2 ? i2 : I.BIGINT), e5.delimited = null !== (r2 = d2.delimited) && void 0 !== r2 && r2, e5.req = null !== (a2 = d2.req) && void 0 !== a2 && a2, e5.opt = null !== (s2 = d2.opt) && void 0 !== s2 && s2, void 0 === d2.packed && (e5.packed = "enum" == d2.kind || "scalar" == d2.kind && d2.T != P.BYTES && d2.T != P.STRING), void 0 !== d2.oneof) {
            const t3 = "string" == typeof d2.oneof ? d2.oneof : d2.oneof.name;
            c2 && c2.name == t3 || (c2 = new Le(t3)), e5.oneof = c2, c2.addField(e5);
          }
          o2.push(e5);
        }
        return o2;
      })(e3))), Be = (e2) => {
        for (const t2 of e2.getType().fields.byMember()) {
          if (t2.opt) continue;
          const n2 = t2.localName, i2 = e2;
          if (t2.repeated) i2[n2] = [];
          else switch (t2.kind) {
            case "oneof":
              i2[n2] = { case: void 0 };
              break;
            case "enum":
              i2[n2] = 0;
              break;
            case "map":
              i2[n2] = {};
              break;
            case "scalar":
              i2[n2] = _(t2.T, t2.L);
          }
        }
      }, { syntax: "proto3", json: { makeReadOptions: Z, makeWriteOptions: $, readMessage(e2, t2, n2, i2) {
        if (null == t2 || Array.isArray(t2) || "object" != typeof t2) throw new Error("cannot decode message ".concat(e2.typeName, " from JSON: ").concat(ne(t2)));
        i2 = null != i2 ? i2 : new e2();
        const r2 = /* @__PURE__ */ new Map(), a2 = n2.typeRegistry;
        for (const o2 of Object.entries(t2)) {
          var s2 = x(o2, 2);
          const t3 = s2[0], c2 = s2[1], d2 = e2.fields.findJsonName(t3);
          if (d2) {
            if (d2.oneof) {
              if (null === c2 && "scalar" == d2.kind) continue;
              const n3 = r2.get(d2.oneof);
              if (void 0 !== n3) throw new Error("cannot decode message ".concat(e2.typeName, ' from JSON: multiple keys for oneof "').concat(d2.oneof.name, '" present: "').concat(n3, '", "').concat(t3, '"'));
              r2.set(d2.oneof, t3);
            }
            ie(i2, c2, d2, n2, e2);
          } else {
            let r3 = false;
            if ((null == a2 ? void 0 : a2.findExtension) && t3.startsWith("[") && t3.endsWith("]")) {
              const s3 = a2.findExtension(t3.substring(1, t3.length - 1));
              if (s3 && s3.extendee.typeName == e2.typeName) {
                r3 = true;
                const e3 = x(F(s3), 2), t4 = e3[0], a3 = e3[1];
                ie(t4, c2, s3.field, n2, s3), H(i2, s3, a3(), n2);
              }
            }
            if (!r3 && !n2.ignoreUnknownFields) throw new Error("cannot decode message ".concat(e2.typeName, ' from JSON: key "').concat(t3, '" is unknown'));
          }
        }
        return i2;
      }, writeMessage(e2, t2) {
        const n2 = e2.getType(), i2 = {};
        let r2;
        try {
          for (r2 of n2.fields.byNumber()) {
            if (!z(r2, e2)) {
              if (r2.req) throw "required field not set";
              if (!t2.emitDefaultValues) continue;
              if (!oe(r2)) continue;
            }
            const n3 = ce(r2, r2.oneof ? e2[r2.oneof.localName].value : e2[r2.localName], t2);
            void 0 !== n3 && (i2[t2.useProtoFieldName ? r2.name : r2.jsonName] = n3);
          }
          const a2 = t2.typeRegistry;
          if (null == a2 ? void 0 : a2.findExtensionFor) for (const r3 of n2.runtime.bin.listUnknownFields(e2)) {
            const s2 = a2.findExtensionFor(n2.typeName, r3.no);
            if (s2 && W(e2, s2)) {
              const n3 = V(e2, s2, t2), r4 = ce(s2.field, n3, t2);
              void 0 !== r4 && (i2[s2.field.jsonName] = r4);
            }
          }
        } catch (e3) {
          const t3 = r2 ? "cannot encode field ".concat(n2.typeName, ".").concat(r2.name, " to JSON") : "cannot encode message ".concat(n2.typeName, " to JSON"), i3 = e3 instanceof Error ? e3.message : String(e3);
          throw new Error(t3 + (i3.length > 0 ? ": ".concat(i3) : ""));
        }
        return i2;
      }, readScalar: (e2, t2, n2) => ae(e2, t2, null != n2 ? n2 : I.BIGINT, true), writeScalar(e2, t2, n2) {
        if (void 0 !== t2) return n2 || O(e2, t2) ? le(e2, t2) : void 0;
      }, debug: ne }, bin: { makeReadOptions: me, makeWriteOptions: ge, listUnknownFields(e2) {
        var t2;
        return null !== (t2 = e2[ue]) && void 0 !== t2 ? t2 : [];
      }, discardUnknownFields(e2) {
        delete e2[ue];
      }, writeUnknownFields(e2, t2) {
        const n2 = e2[ue];
        if (n2) for (const e3 of n2) t2.tag(e3.no, e3.wireType).raw(e3.data);
      }, onUnknownField(e2, t2, n2, i2) {
        const r2 = e2;
        Array.isArray(r2[ue]) || (r2[ue] = []), r2[ue].push({ no: t2, wireType: n2, data: i2 });
      }, readMessage(e2, t2, n2, i2, r2) {
        const a2 = e2.getType(), s2 = r2 ? t2.len : t2.pos + n2;
        let o2, c2;
        for (; t2.pos < s2; ) {
          var d2 = x(t2.tag(), 2);
          if (o2 = d2[0], c2 = d2[1], true === r2 && c2 == D.EndGroup) break;
          const n3 = a2.fields.find(o2);
          if (n3) ve(e2, t2, n3, c2, i2);
          else {
            const n4 = t2.skip(c2, o2);
            i2.readUnknownFields && this.onUnknownField(e2, o2, c2, n4);
          }
        }
        if (r2 && (c2 != D.EndGroup || o2 !== n2)) throw new Error("invalid end group tag");
      }, readField: ve, writeMessage(e2, t2, n2) {
        const i2 = e2.getType();
        for (const r2 of i2.fields.byNumber()) if (z(r2, e2)) be(r2, r2.oneof ? e2[r2.oneof.localName].value : e2[r2.localName], t2, n2);
        else if (r2.req) throw new Error("cannot encode field ".concat(i2.typeName, ".").concat(r2.name, " to binary: required field not set"));
        return n2.writeUnknownFields && this.writeUnknownFields(e2, t2), t2;
      }, writeField(e2, t2, n2, i2) {
        void 0 !== t2 && be(e2, t2, n2, i2);
      } }, util: Object.assign(Object.assign({}, { setEnumType: u, initPartial(e2, t2) {
        if (void 0 === e2) return;
        const n2 = t2.getType();
        for (const r2 of n2.fields.byMember()) {
          const n3 = r2.localName, a2 = t2, s2 = e2;
          if (null != s2[n3]) switch (r2.kind) {
            case "oneof":
              const e3 = s2[n3].case;
              if (void 0 === e3) continue;
              const t3 = r2.findField(e3);
              let o2 = s2[n3].value;
              t3 && "message" == t3.kind && !G(o2, t3.T) ? o2 = new t3.T(o2) : t3 && "scalar" === t3.kind && t3.T === P.BYTES && (o2 = Re(o2)), a2[n3] = { case: e3, value: o2 };
              break;
            case "scalar":
            case "enum":
              let c2 = s2[n3];
              r2.T === P.BYTES && (c2 = r2.repeated ? c2.map(Re) : Re(c2)), a2[n3] = c2;
              break;
            case "map":
              switch (r2.V.kind) {
                case "scalar":
                case "enum":
                  if (r2.V.T === P.BYTES) for (const e5 of Object.entries(s2[n3])) {
                    var i2 = x(e5, 2);
                    const t4 = i2[0], r3 = i2[1];
                    a2[n3][t4] = Re(r3);
                  }
                  else Object.assign(a2[n3], s2[n3]);
                  break;
                case "message":
                  const e4 = r2.V.T;
                  for (const t4 of Object.keys(s2[n3])) {
                    let i3 = s2[n3][t4];
                    e4.fieldWrapper || (i3 = new e4(i3)), a2[n3][t4] = i3;
                  }
              }
              break;
            case "message":
              const d2 = r2.T;
              if (r2.repeated) a2[n3] = s2[n3].map(((e4) => G(e4, d2) ? e4 : new d2(e4)));
              else {
                const e4 = s2[n3];
                d2.fieldWrapper ? "google.protobuf.BytesValue" === d2.typeName ? a2[n3] = Re(e4) : a2[n3] = e4 : a2[n3] = G(e4, d2) ? e4 : new d2(e4);
              }
          }
        }
      }, equals: (e2, t2, n2) => t2 === n2 || !(!t2 || !n2) && e2.fields.byMember().every(((e3) => {
        const i2 = t2[e3.localName], r2 = n2[e3.localName];
        if (e3.repeated) {
          if (i2.length !== r2.length) return false;
          switch (e3.kind) {
            case "message":
              return i2.every(((t3, n3) => e3.T.equals(t3, r2[n3])));
            case "scalar":
              return i2.every(((t3, n3) => M(e3.T, t3, r2[n3])));
            case "enum":
              return i2.every(((e4, t3) => M(P.INT32, e4, r2[t3])));
          }
          throw new Error("repeated cannot contain ".concat(e3.kind));
        }
        switch (e3.kind) {
          case "message":
            let t3 = i2, n3 = r2;
            return e3.T.fieldWrapper && (void 0 === t3 || G(t3) || (t3 = e3.T.fieldWrapper.wrapField(t3)), void 0 === n3 || G(n3) || (n3 = e3.T.fieldWrapper.wrapField(n3))), e3.T.equals(t3, n3);
          case "enum":
            return M(P.INT32, i2, r2);
          case "scalar":
            return M(e3.T, i2, r2);
          case "oneof":
            if (i2.case !== r2.case) return false;
            const a2 = e3.findField(i2.case);
            if (void 0 === a2) return true;
            switch (a2.kind) {
              case "message":
                return a2.T.equals(i2.value, r2.value);
              case "enum":
                return M(P.INT32, i2.value, r2.value);
              case "scalar":
                return M(a2.T, i2.value, r2.value);
            }
            throw new Error("oneof cannot contain ".concat(a2.kind));
          case "map":
            const s2 = Object.keys(i2).concat(Object.keys(r2));
            switch (e3.V.kind) {
              case "message":
                const t4 = e3.V.T;
                return s2.every(((e4) => t4.equals(i2[e4], r2[e4])));
              case "enum":
                return s2.every(((e4) => M(P.INT32, i2[e4], r2[e4])));
              case "scalar":
                const n4 = e3.V.T;
                return s2.every(((e4) => M(n4, i2[e4], r2[e4])));
            }
        }
      })), clone(e2) {
        const t2 = e2.getType(), n2 = new t2(), i2 = n2;
        for (const n3 of t2.fields.byMember()) {
          const t3 = e2[n3.localName];
          let a2;
          if (n3.repeated) a2 = t3.map(we);
          else if ("map" == n3.kind) {
            a2 = i2[n3.localName];
            for (const e3 of Object.entries(t3)) {
              var r2 = x(e3, 2);
              const t4 = r2[0], n4 = r2[1];
              a2[t4] = we(n4);
            }
          } else a2 = "oneof" == n3.kind ? n3.findField(t3.case) ? { case: t3.case, value: we(t3.value) } : { case: void 0 } : we(t3);
          i2[n3.localName] = a2;
        }
        for (const n3 of t2.runtime.bin.listUnknownFields(e2)) t2.runtime.bin.onUnknownField(i2, n3.no, n3.wireType, n3.data);
        return n2;
      } }), { newFieldList: Fe, initFields: Be }), makeMessageType(e2, t2, n2) {
        return (function(e3, t3, n3, i2) {
          var r2;
          const a2 = null !== (r2 = null == i2 ? void 0 : i2.localName) && void 0 !== r2 ? r2 : t3.substring(t3.lastIndexOf(".") + 1), s2 = { [a2]: function(t4) {
            e3.util.initFields(this), e3.util.initPartial(t4, this);
          } }[a2];
          return Object.setPrototypeOf(s2.prototype, new g()), Object.assign(s2, { runtime: e3, typeName: t3, fields: e3.util.newFieldList(n3), fromBinary: (e4, t4) => new s2().fromBinary(e4, t4), fromJson: (e4, t4) => new s2().fromJson(e4, t4), fromJsonString: (e4, t4) => new s2().fromJsonString(e4, t4), equals: (t4, n4) => e3.util.equals(s2, t4, n4) }), s2;
        })(this, e2, t2, n2);
      }, makeEnum: p, makeEnumType: h, getEnumType: l, makeExtension(e2, t2, n2) {
        return /* @__PURE__ */ (function(e3, t3, n3, i2) {
          let r2;
          return { typeName: t3, extendee: n3, get field() {
            if (!r2) {
              const n4 = "function" == typeof i2 ? i2() : i2;
              n4.name = t3.split(".").pop(), n4.jsonName = "[".concat(t3, "]"), r2 = e3.util.newFieldList([n4]).list()[0];
            }
            return r2;
          }, runtime: e3 };
        })(this, e2, t2, n2);
      } });
      var Fe, Be;
      class je extends g {
        constructor(e2) {
          super(), this.seconds = R.zero, this.nanos = 0, Ue.util.initPartial(e2, this);
        }
        fromJson(e2, t2) {
          if ("string" != typeof e2) throw new Error("cannot decode google.protobuf.Timestamp from JSON: ".concat(Ue.json.debug(e2)));
          const n2 = e2.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
          if (!n2) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
          const i2 = Date.parse(n2[1] + "-" + n2[2] + "-" + n2[3] + "T" + n2[4] + ":" + n2[5] + ":" + n2[6] + (n2[8] ? n2[8] : "Z"));
          if (Number.isNaN(i2)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
          if (i2 < Date.parse("0001-01-01T00:00:00Z") || i2 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
          return this.seconds = R.parse(i2 / 1e3), this.nanos = 0, n2[7] && (this.nanos = parseInt("1" + n2[7] + "0".repeat(9 - n2[7].length)) - 1e9), this;
        }
        toJson(e2) {
          const t2 = 1e3 * Number(this.seconds);
          if (t2 < Date.parse("0001-01-01T00:00:00Z") || t2 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
          if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
          let n2 = "Z";
          if (this.nanos > 0) {
            const e3 = (this.nanos + 1e9).toString().substring(1);
            n2 = "000000" === e3.substring(3) ? "." + e3.substring(0, 3) + "Z" : "000" === e3.substring(6) ? "." + e3.substring(0, 6) + "Z" : "." + e3 + "Z";
          }
          return new Date(t2).toISOString().replace(".000Z", n2);
        }
        toDate() {
          return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
        }
        static now() {
          return je.fromDate(/* @__PURE__ */ new Date());
        }
        static fromDate(e2) {
          const t2 = e2.getTime();
          return new je({ seconds: R.parse(Math.floor(t2 / 1e3)), nanos: t2 % 1e3 * 1e6 });
        }
        static fromBinary(e2, t2) {
          return new je().fromBinary(e2, t2);
        }
        static fromJson(e2, t2) {
          return new je().fromJson(e2, t2);
        }
        static fromJsonString(e2, t2) {
          return new je().fromJsonString(e2, t2);
        }
        static equals(e2, t2) {
          return Ue.util.equals(je, e2, t2);
        }
      }
      je.runtime = Ue, je.typeName = "google.protobuf.Timestamp", je.fields = Ue.util.newFieldList((() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]));
      const qe = Ue.makeMessageType("livekit.MetricsBatch", (() => [{ no: 1, name: "timestamp_ms", kind: "scalar", T: 3 }, { no: 2, name: "normalized_timestamp", kind: "message", T: je }, { no: 3, name: "str_data", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "time_series", kind: "message", T: Ve, repeated: true }, { no: 5, name: "events", kind: "message", T: We, repeated: true }])), Ve = Ue.makeMessageType("livekit.TimeSeriesMetric", (() => [{ no: 1, name: "label", kind: "scalar", T: 13 }, { no: 2, name: "participant_identity", kind: "scalar", T: 13 }, { no: 3, name: "track_sid", kind: "scalar", T: 13 }, { no: 4, name: "samples", kind: "message", T: He, repeated: true }, { no: 5, name: "rid", kind: "scalar", T: 13 }])), He = Ue.makeMessageType("livekit.MetricSample", (() => [{ no: 1, name: "timestamp_ms", kind: "scalar", T: 3 }, { no: 2, name: "normalized_timestamp", kind: "message", T: je }, { no: 3, name: "value", kind: "scalar", T: 2 }])), We = Ue.makeMessageType("livekit.EventMetric", (() => [{ no: 1, name: "label", kind: "scalar", T: 13 }, { no: 2, name: "participant_identity", kind: "scalar", T: 13 }, { no: 3, name: "track_sid", kind: "scalar", T: 13 }, { no: 4, name: "start_timestamp_ms", kind: "scalar", T: 3 }, { no: 5, name: "end_timestamp_ms", kind: "scalar", T: 3, opt: true }, { no: 6, name: "normalized_start_timestamp", kind: "message", T: je }, { no: 7, name: "normalized_end_timestamp", kind: "message", T: je, opt: true }, { no: 8, name: "metadata", kind: "scalar", T: 9 }, { no: 9, name: "rid", kind: "scalar", T: 13 }])), Ke = Ue.makeEnum("livekit.AudioCodec", [{ no: 0, name: "DEFAULT_AC" }, { no: 1, name: "OPUS" }, { no: 2, name: "AAC" }, { no: 3, name: "AC_MP3" }]), ze = Ue.makeEnum("livekit.VideoCodec", [{ no: 0, name: "DEFAULT_VC" }, { no: 1, name: "H264_BASELINE" }, { no: 2, name: "H264_MAIN" }, { no: 3, name: "H264_HIGH" }, { no: 4, name: "VP8" }]), Je = Ue.makeEnum("livekit.ImageCodec", [{ no: 0, name: "IC_DEFAULT" }, { no: 1, name: "IC_JPEG" }]), Ge = Ue.makeEnum("livekit.BackupCodecPolicy", [{ no: 0, name: "PREFER_REGRESSION" }, { no: 1, name: "SIMULCAST" }, { no: 2, name: "REGRESSION" }]), Qe = Ue.makeEnum("livekit.TrackType", [{ no: 0, name: "AUDIO" }, { no: 1, name: "VIDEO" }, { no: 2, name: "DATA" }]), Ye = Ue.makeEnum("livekit.TrackSource", [{ no: 0, name: "UNKNOWN" }, { no: 1, name: "CAMERA" }, { no: 2, name: "MICROPHONE" }, { no: 3, name: "SCREEN_SHARE" }, { no: 4, name: "SCREEN_SHARE_AUDIO" }]), Xe = Ue.makeEnum("livekit.VideoQuality", [{ no: 0, name: "LOW" }, { no: 1, name: "MEDIUM" }, { no: 2, name: "HIGH" }, { no: 3, name: "OFF" }]), Ze = Ue.makeEnum("livekit.ConnectionQuality", [{ no: 0, name: "POOR" }, { no: 1, name: "GOOD" }, { no: 2, name: "EXCELLENT" }, { no: 3, name: "LOST" }]), $e = Ue.makeEnum("livekit.ClientConfigSetting", [{ no: 0, name: "UNSET" }, { no: 1, name: "DISABLED" }, { no: 2, name: "ENABLED" }]), et = Ue.makeEnum("livekit.DisconnectReason", [{ no: 0, name: "UNKNOWN_REASON" }, { no: 1, name: "CLIENT_INITIATED" }, { no: 2, name: "DUPLICATE_IDENTITY" }, { no: 3, name: "SERVER_SHUTDOWN" }, { no: 4, name: "PARTICIPANT_REMOVED" }, { no: 5, name: "ROOM_DELETED" }, { no: 6, name: "STATE_MISMATCH" }, { no: 7, name: "JOIN_FAILURE" }, { no: 8, name: "MIGRATION" }, { no: 9, name: "SIGNAL_CLOSE" }, { no: 10, name: "ROOM_CLOSED" }, { no: 11, name: "USER_UNAVAILABLE" }, { no: 12, name: "USER_REJECTED" }, { no: 13, name: "SIP_TRUNK_FAILURE" }, { no: 14, name: "CONNECTION_TIMEOUT" }, { no: 15, name: "MEDIA_FAILURE" }, { no: 16, name: "AGENT_ERROR" }]), tt = Ue.makeEnum("livekit.ReconnectReason", [{ no: 0, name: "RR_UNKNOWN" }, { no: 1, name: "RR_SIGNAL_DISCONNECTED" }, { no: 2, name: "RR_PUBLISHER_FAILED" }, { no: 3, name: "RR_SUBSCRIBER_FAILED" }, { no: 4, name: "RR_SWITCH_CANDIDATE" }]), nt = Ue.makeEnum("livekit.SubscriptionError", [{ no: 0, name: "SE_UNKNOWN" }, { no: 1, name: "SE_CODEC_UNSUPPORTED" }, { no: 2, name: "SE_TRACK_NOTFOUND" }]), it = Ue.makeEnum("livekit.AudioTrackFeature", [{ no: 0, name: "TF_STEREO" }, { no: 1, name: "TF_NO_DTX" }, { no: 2, name: "TF_AUTO_GAIN_CONTROL" }, { no: 3, name: "TF_ECHO_CANCELLATION" }, { no: 4, name: "TF_NOISE_SUPPRESSION" }, { no: 5, name: "TF_ENHANCED_NOISE_CANCELLATION" }, { no: 6, name: "TF_PRECONNECT_BUFFER" }]), rt = Ue.makeEnum("livekit.PacketTrailerFeature", [{ no: 0, name: "PTF_USER_TIMESTAMP" }, { no: 1, name: "PTF_FRAME_ID" }]), at = Ue.makeMessageType("livekit.Room", (() => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "empty_timeout", kind: "scalar", T: 13 }, { no: 14, name: "departure_timeout", kind: "scalar", T: 13 }, { no: 4, name: "max_participants", kind: "scalar", T: 13 }, { no: 5, name: "creation_time", kind: "scalar", T: 3 }, { no: 15, name: "creation_time_ms", kind: "scalar", T: 3 }, { no: 6, name: "turn_password", kind: "scalar", T: 9 }, { no: 7, name: "enabled_codecs", kind: "message", T: st, repeated: true }, { no: 8, name: "metadata", kind: "scalar", T: 9 }, { no: 9, name: "num_participants", kind: "scalar", T: 13 }, { no: 11, name: "num_publishers", kind: "scalar", T: 13 }, { no: 10, name: "active_recording", kind: "scalar", T: 8 }, { no: 13, name: "version", kind: "message", T: Ht }])), st = Ue.makeMessageType("livekit.Codec", (() => [{ no: 1, name: "mime", kind: "scalar", T: 9 }, { no: 2, name: "fmtp_line", kind: "scalar", T: 9 }])), ot = Ue.makeMessageType("livekit.ParticipantPermission", (() => [{ no: 1, name: "can_subscribe", kind: "scalar", T: 8 }, { no: 2, name: "can_publish", kind: "scalar", T: 8 }, { no: 3, name: "can_publish_data", kind: "scalar", T: 8 }, { no: 9, name: "can_publish_sources", kind: "enum", T: Ue.getEnumType(Ye), repeated: true }, { no: 7, name: "hidden", kind: "scalar", T: 8 }, { no: 8, name: "recorder", kind: "scalar", T: 8 }, { no: 10, name: "can_update_metadata", kind: "scalar", T: 8 }, { no: 11, name: "agent", kind: "scalar", T: 8 }, { no: 12, name: "can_subscribe_metrics", kind: "scalar", T: 8 }, { no: 13, name: "can_manage_agent_session", kind: "scalar", T: 8 }])), ct = Ue.makeMessageType("livekit.ParticipantInfo", (() => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "identity", kind: "scalar", T: 9 }, { no: 3, name: "state", kind: "enum", T: Ue.getEnumType(dt) }, { no: 4, name: "tracks", kind: "message", T: mt, repeated: true }, { no: 5, name: "metadata", kind: "scalar", T: 9 }, { no: 6, name: "joined_at", kind: "scalar", T: 3 }, { no: 17, name: "joined_at_ms", kind: "scalar", T: 3 }, { no: 9, name: "name", kind: "scalar", T: 9 }, { no: 10, name: "version", kind: "scalar", T: 13 }, { no: 11, name: "permission", kind: "message", T: ot }, { no: 12, name: "region", kind: "scalar", T: 9 }, { no: 13, name: "is_publisher", kind: "scalar", T: 8 }, { no: 14, name: "kind", kind: "enum", T: Ue.getEnumType(lt) }, { no: 15, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 16, name: "disconnect_reason", kind: "enum", T: Ue.getEnumType(et) }, { no: 18, name: "kind_details", kind: "enum", T: Ue.getEnumType(ut), repeated: true }, { no: 19, name: "data_tracks", kind: "message", T: gt, repeated: true }, { no: 20, name: "client_protocol", kind: "scalar", T: 5 }])), dt = Ue.makeEnum("livekit.ParticipantInfo.State", [{ no: 0, name: "JOINING" }, { no: 1, name: "JOINED" }, { no: 2, name: "ACTIVE" }, { no: 3, name: "DISCONNECTED" }]), lt = Ue.makeEnum("livekit.ParticipantInfo.Kind", [{ no: 0, name: "STANDARD" }, { no: 1, name: "INGRESS" }, { no: 2, name: "EGRESS" }, { no: 3, name: "SIP" }, { no: 4, name: "AGENT" }, { no: 7, name: "CONNECTOR" }, { no: 8, name: "BRIDGE" }]), ut = Ue.makeEnum("livekit.ParticipantInfo.KindDetail", [{ no: 0, name: "CLOUD_AGENT" }, { no: 1, name: "FORWARDED" }, { no: 2, name: "CONNECTOR_WHATSAPP" }, { no: 3, name: "CONNECTOR_TWILIO" }, { no: 4, name: "BRIDGE_RTSP" }]), ht = Ue.makeEnum("livekit.Encryption.Type", [{ no: 0, name: "NONE" }, { no: 1, name: "GCM" }, { no: 2, name: "CUSTOM" }]), pt = Ue.makeMessageType("livekit.SimulcastCodecInfo", (() => [{ no: 1, name: "mime_type", kind: "scalar", T: 9 }, { no: 2, name: "mid", kind: "scalar", T: 9 }, { no: 3, name: "cid", kind: "scalar", T: 9 }, { no: 4, name: "layers", kind: "message", T: ft, repeated: true }, { no: 5, name: "video_layer_mode", kind: "enum", T: Ue.getEnumType(kt) }, { no: 6, name: "sdp_cid", kind: "scalar", T: 9 }])), mt = Ue.makeMessageType("livekit.TrackInfo", (() => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "type", kind: "enum", T: Ue.getEnumType(Qe) }, { no: 3, name: "name", kind: "scalar", T: 9 }, { no: 4, name: "muted", kind: "scalar", T: 8 }, { no: 5, name: "width", kind: "scalar", T: 13 }, { no: 6, name: "height", kind: "scalar", T: 13 }, { no: 7, name: "simulcast", kind: "scalar", T: 8 }, { no: 8, name: "disable_dtx", kind: "scalar", T: 8 }, { no: 9, name: "source", kind: "enum", T: Ue.getEnumType(Ye) }, { no: 10, name: "layers", kind: "message", T: ft, repeated: true }, { no: 11, name: "mime_type", kind: "scalar", T: 9 }, { no: 12, name: "mid", kind: "scalar", T: 9 }, { no: 13, name: "codecs", kind: "message", T: pt, repeated: true }, { no: 14, name: "stereo", kind: "scalar", T: 8 }, { no: 15, name: "disable_red", kind: "scalar", T: 8 }, { no: 16, name: "encryption", kind: "enum", T: Ue.getEnumType(ht) }, { no: 17, name: "stream", kind: "scalar", T: 9 }, { no: 18, name: "version", kind: "message", T: Ht }, { no: 19, name: "audio_features", kind: "enum", T: Ue.getEnumType(it), repeated: true }, { no: 20, name: "backup_codec_policy", kind: "enum", T: Ue.getEnumType(Ge) }, { no: 21, name: "packet_trailer_features", kind: "enum", T: Ue.getEnumType(rt), repeated: true }])), gt = Ue.makeMessageType("livekit.DataTrackInfo", (() => [{ no: 1, name: "pub_handle", kind: "scalar", T: 13 }, { no: 2, name: "sid", kind: "scalar", T: 9 }, { no: 3, name: "name", kind: "scalar", T: 9 }, { no: 4, name: "encryption", kind: "enum", T: Ue.getEnumType(ht) }])), vt = Ue.makeMessageType("livekit.DataTrackSubscriptionOptions", (() => [{ no: 1, name: "target_fps", kind: "scalar", T: 13, opt: true }])), ft = Ue.makeMessageType("livekit.VideoLayer", (() => [{ no: 1, name: "quality", kind: "enum", T: Ue.getEnumType(Xe) }, { no: 2, name: "width", kind: "scalar", T: 13 }, { no: 3, name: "height", kind: "scalar", T: 13 }, { no: 4, name: "bitrate", kind: "scalar", T: 13 }, { no: 5, name: "ssrc", kind: "scalar", T: 13 }, { no: 6, name: "spatial_layer", kind: "scalar", T: 5 }, { no: 7, name: "rid", kind: "scalar", T: 9 }, { no: 8, name: "repair_ssrc", kind: "scalar", T: 13 }])), kt = Ue.makeEnum("livekit.VideoLayer.Mode", [{ no: 0, name: "MODE_UNUSED" }, { no: 1, name: "ONE_SPATIAL_LAYER_PER_STREAM" }, { no: 2, name: "MULTIPLE_SPATIAL_LAYERS_PER_STREAM" }, { no: 3, name: "ONE_SPATIAL_LAYER_PER_STREAM_INCOMPLETE_RTCP_SR" }]), yt = Ue.makeMessageType("livekit.DataPacket", (() => [{ no: 1, name: "kind", kind: "enum", T: Ue.getEnumType(bt) }, { no: 4, name: "participant_identity", kind: "scalar", T: 9 }, { no: 5, name: "destination_identities", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "user", kind: "message", T: wt, oneof: "value" }, { no: 3, name: "speaker", kind: "message", T: Et, oneof: "value" }, { no: 6, name: "sip_dtmf", kind: "message", T: Rt, oneof: "value" }, { no: 7, name: "transcription", kind: "message", T: Pt, oneof: "value" }, { no: 8, name: "metrics", kind: "message", T: qe, oneof: "value" }, { no: 9, name: "chat_message", kind: "message", T: Dt, oneof: "value" }, { no: 10, name: "rpc_request", kind: "message", T: Mt, oneof: "value" }, { no: 11, name: "rpc_ack", kind: "message", T: _t, oneof: "value" }, { no: 12, name: "rpc_response", kind: "message", T: Ot, oneof: "value" }, { no: 13, name: "stream_header", kind: "message", T: Jt, oneof: "value" }, { no: 14, name: "stream_chunk", kind: "message", T: Gt, oneof: "value" }, { no: 15, name: "stream_trailer", kind: "message", T: Qt, oneof: "value" }, { no: 18, name: "encrypted_packet", kind: "message", T: Tt, oneof: "value" }, { no: 16, name: "sequence", kind: "scalar", T: 13 }, { no: 17, name: "participant_sid", kind: "scalar", T: 9 }])), bt = Ue.makeEnum("livekit.DataPacket.Kind", [{ no: 0, name: "RELIABLE" }, { no: 1, name: "LOSSY" }]), Tt = Ue.makeMessageType("livekit.EncryptedPacket", (() => [{ no: 1, name: "encryption_type", kind: "enum", T: Ue.getEnumType(ht) }, { no: 2, name: "iv", kind: "scalar", T: 12 }, { no: 3, name: "key_index", kind: "scalar", T: 13 }, { no: 4, name: "encrypted_value", kind: "scalar", T: 12 }])), St = Ue.makeMessageType("livekit.EncryptedPacketPayload", (() => [{ no: 1, name: "user", kind: "message", T: wt, oneof: "value" }, { no: 3, name: "chat_message", kind: "message", T: Dt, oneof: "value" }, { no: 4, name: "rpc_request", kind: "message", T: Mt, oneof: "value" }, { no: 5, name: "rpc_ack", kind: "message", T: _t, oneof: "value" }, { no: 6, name: "rpc_response", kind: "message", T: Ot, oneof: "value" }, { no: 7, name: "stream_header", kind: "message", T: Jt, oneof: "value" }, { no: 8, name: "stream_chunk", kind: "message", T: Gt, oneof: "value" }, { no: 9, name: "stream_trailer", kind: "message", T: Qt, oneof: "value" }])), Et = Ue.makeMessageType("livekit.ActiveSpeakerUpdate", (() => [{ no: 1, name: "speakers", kind: "message", T: Ct, repeated: true }])), Ct = Ue.makeMessageType("livekit.SpeakerInfo", (() => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "level", kind: "scalar", T: 2 }, { no: 3, name: "active", kind: "scalar", T: 8 }])), wt = Ue.makeMessageType("livekit.UserPacket", (() => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 5, name: "participant_identity", kind: "scalar", T: 9 }, { no: 2, name: "payload", kind: "scalar", T: 12 }, { no: 3, name: "destination_sids", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "destination_identities", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "topic", kind: "scalar", T: 9, opt: true }, { no: 8, name: "id", kind: "scalar", T: 9, opt: true }, { no: 9, name: "start_time", kind: "scalar", T: 4, opt: true }, { no: 10, name: "end_time", kind: "scalar", T: 4, opt: true }, { no: 11, name: "nonce", kind: "scalar", T: 12 }])), Rt = Ue.makeMessageType("livekit.SipDTMF", (() => [{ no: 3, name: "code", kind: "scalar", T: 13 }, { no: 4, name: "digit", kind: "scalar", T: 9 }])), Pt = Ue.makeMessageType("livekit.Transcription", (() => [{ no: 2, name: "transcribed_participant_identity", kind: "scalar", T: 9 }, { no: 3, name: "track_id", kind: "scalar", T: 9 }, { no: 4, name: "segments", kind: "message", T: It, repeated: true }])), It = Ue.makeMessageType("livekit.TranscriptionSegment", (() => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "text", kind: "scalar", T: 9 }, { no: 3, name: "start_time", kind: "scalar", T: 4 }, { no: 4, name: "end_time", kind: "scalar", T: 4 }, { no: 5, name: "final", kind: "scalar", T: 8 }, { no: 6, name: "language", kind: "scalar", T: 9 }])), Dt = Ue.makeMessageType("livekit.ChatMessage", (() => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "timestamp", kind: "scalar", T: 3 }, { no: 3, name: "edit_timestamp", kind: "scalar", T: 3, opt: true }, { no: 4, name: "message", kind: "scalar", T: 9 }, { no: 5, name: "deleted", kind: "scalar", T: 8 }, { no: 6, name: "generated", kind: "scalar", T: 8 }])), Mt = Ue.makeMessageType("livekit.RpcRequest", (() => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "method", kind: "scalar", T: 9 }, { no: 3, name: "payload", kind: "scalar", T: 9 }, { no: 4, name: "response_timeout_ms", kind: "scalar", T: 13 }, { no: 5, name: "version", kind: "scalar", T: 13 }, { no: 6, name: "compressed_payload", kind: "scalar", T: 12 }])), _t = Ue.makeMessageType("livekit.RpcAck", (() => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }])), Ot = Ue.makeMessageType("livekit.RpcResponse", (() => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "payload", kind: "scalar", T: 9, oneof: "value" }, { no: 3, name: "error", kind: "message", T: At, oneof: "value" }, { no: 4, name: "compressed_payload", kind: "scalar", T: 12, oneof: "value" }])), At = Ue.makeMessageType("livekit.RpcError", (() => [{ no: 1, name: "code", kind: "scalar", T: 13 }, { no: 2, name: "message", kind: "scalar", T: 9 }, { no: 3, name: "data", kind: "scalar", T: 9 }])), Nt = Ue.makeMessageType("livekit.ParticipantTracks", (() => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "track_sids", kind: "scalar", T: 9, repeated: true }])), xt = Ue.makeMessageType("livekit.ServerInfo", (() => [{ no: 1, name: "edition", kind: "enum", T: Ue.getEnumType(Lt) }, { no: 2, name: "version", kind: "scalar", T: 9 }, { no: 3, name: "protocol", kind: "scalar", T: 5 }, { no: 4, name: "region", kind: "scalar", T: 9 }, { no: 5, name: "node_id", kind: "scalar", T: 9 }, { no: 6, name: "debug_info", kind: "scalar", T: 9 }, { no: 7, name: "agent_protocol", kind: "scalar", T: 5 }])), Lt = Ue.makeEnum("livekit.ServerInfo.Edition", [{ no: 0, name: "Standard" }, { no: 1, name: "Cloud" }]), Ut = Ue.makeMessageType("livekit.ClientInfo", (() => [{ no: 1, name: "sdk", kind: "enum", T: Ue.getEnumType(Ft) }, { no: 2, name: "version", kind: "scalar", T: 9 }, { no: 3, name: "protocol", kind: "scalar", T: 5 }, { no: 4, name: "os", kind: "scalar", T: 9 }, { no: 5, name: "os_version", kind: "scalar", T: 9 }, { no: 6, name: "device_model", kind: "scalar", T: 9 }, { no: 7, name: "browser", kind: "scalar", T: 9 }, { no: 8, name: "browser_version", kind: "scalar", T: 9 }, { no: 9, name: "address", kind: "scalar", T: 9 }, { no: 10, name: "network", kind: "scalar", T: 9 }, { no: 11, name: "other_sdks", kind: "scalar", T: 9 }, { no: 12, name: "client_protocol", kind: "scalar", T: 5 }, { no: 13, name: "capabilities", kind: "enum", T: Ue.getEnumType(Bt), repeated: true }])), Ft = Ue.makeEnum("livekit.ClientInfo.SDK", [{ no: 0, name: "UNKNOWN" }, { no: 1, name: "JS" }, { no: 2, name: "SWIFT" }, { no: 3, name: "ANDROID" }, { no: 4, name: "FLUTTER" }, { no: 5, name: "GO" }, { no: 6, name: "UNITY" }, { no: 7, name: "REACT_NATIVE" }, { no: 8, name: "RUST" }, { no: 9, name: "PYTHON" }, { no: 10, name: "CPP" }, { no: 11, name: "UNITY_WEB" }, { no: 12, name: "NODE" }, { no: 13, name: "UNREAL" }, { no: 14, name: "ESP32" }]), Bt = Ue.makeEnum("livekit.ClientInfo.Capability", [{ no: 0, name: "CAP_UNUSED" }, { no: 1, name: "CAP_PACKET_TRAILER" }]), jt = Ue.makeMessageType("livekit.ClientConfiguration", (() => [{ no: 1, name: "video", kind: "message", T: qt }, { no: 2, name: "screen", kind: "message", T: qt }, { no: 3, name: "resume_connection", kind: "enum", T: Ue.getEnumType($e) }, { no: 4, name: "disabled_codecs", kind: "message", T: Vt }, { no: 5, name: "force_relay", kind: "enum", T: Ue.getEnumType($e) }])), qt = Ue.makeMessageType("livekit.VideoConfiguration", (() => [{ no: 1, name: "hardware_encoder", kind: "enum", T: Ue.getEnumType($e) }])), Vt = Ue.makeMessageType("livekit.DisabledCodecs", (() => [{ no: 1, name: "codecs", kind: "message", T: st, repeated: true }, { no: 2, name: "publish", kind: "message", T: st, repeated: true }])), Ht = Ue.makeMessageType("livekit.TimedVersion", (() => [{ no: 1, name: "unix_micro", kind: "scalar", T: 3 }, { no: 2, name: "ticks", kind: "scalar", T: 5 }])), Wt = Ue.makeEnum("livekit.DataStream.OperationType", [{ no: 0, name: "CREATE" }, { no: 1, name: "UPDATE" }, { no: 2, name: "DELETE" }, { no: 3, name: "REACTION" }]), Kt = Ue.makeMessageType("livekit.DataStream.TextHeader", (() => [{ no: 1, name: "operation_type", kind: "enum", T: Ue.getEnumType(Wt) }, { no: 2, name: "version", kind: "scalar", T: 5 }, { no: 3, name: "reply_to_stream_id", kind: "scalar", T: 9 }, { no: 4, name: "attached_stream_ids", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "generated", kind: "scalar", T: 8 }]), { localName: "DataStream_TextHeader" }), zt = Ue.makeMessageType("livekit.DataStream.ByteHeader", (() => [{ no: 1, name: "name", kind: "scalar", T: 9 }]), { localName: "DataStream_ByteHeader" }), Jt = Ue.makeMessageType("livekit.DataStream.Header", (() => [{ no: 1, name: "stream_id", kind: "scalar", T: 9 }, { no: 2, name: "timestamp", kind: "scalar", T: 3 }, { no: 3, name: "topic", kind: "scalar", T: 9 }, { no: 4, name: "mime_type", kind: "scalar", T: 9 }, { no: 5, name: "total_length", kind: "scalar", T: 4, opt: true }, { no: 7, name: "encryption_type", kind: "enum", T: Ue.getEnumType(ht) }, { no: 8, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 9, name: "text_header", kind: "message", T: Kt, oneof: "content_header" }, { no: 10, name: "byte_header", kind: "message", T: zt, oneof: "content_header" }]), { localName: "DataStream_Header" }), Gt = Ue.makeMessageType("livekit.DataStream.Chunk", (() => [{ no: 1, name: "stream_id", kind: "scalar", T: 9 }, { no: 2, name: "chunk_index", kind: "scalar", T: 4 }, { no: 3, name: "content", kind: "scalar", T: 12 }, { no: 4, name: "version", kind: "scalar", T: 5 }, { no: 5, name: "iv", kind: "scalar", T: 12, opt: true }]), { localName: "DataStream_Chunk" }), Qt = Ue.makeMessageType("livekit.DataStream.Trailer", (() => [{ no: 1, name: "stream_id", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }, { no: 3, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }]), { localName: "DataStream_Trailer" }), Yt = Ue.makeMessageType("livekit.FilterParams", (() => [{ no: 1, name: "include_events", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "exclude_events", kind: "scalar", T: 9, repeated: true }])), Xt = Ue.makeMessageType("livekit.WebhookConfig", (() => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "signing_key", kind: "scalar", T: 9 }, { no: 3, name: "filter_params", kind: "message", T: Yt }])), Zt = Ue.makeMessageType("livekit.SubscribedAudioCodec", (() => [{ no: 1, name: "codec", kind: "scalar", T: 9 }, { no: 2, name: "enabled", kind: "scalar", T: 8 }])), $t = Ue.makeEnum("livekit.JobRestartPolicy", [{ no: 0, name: "JRP_ON_FAILURE" }, { no: 1, name: "JRP_NEVER" }]), en = Ue.makeMessageType("livekit.RoomAgentDispatch", (() => [{ no: 1, name: "agent_name", kind: "scalar", T: 9 }, { no: 2, name: "metadata", kind: "scalar", T: 9 }, { no: 3, name: "restart_policy", kind: "enum", T: Ue.getEnumType($t) }, { no: 4, name: "deployment", kind: "scalar", T: 9 }])), tn = Ue.makeEnum("livekit.EncodingOptionsPreset", [{ no: 0, name: "H264_720P_30" }, { no: 1, name: "H264_720P_60" }, { no: 2, name: "H264_1080P_30" }, { no: 3, name: "H264_1080P_60" }, { no: 4, name: "PORTRAIT_H264_720P_30" }, { no: 5, name: "PORTRAIT_H264_720P_60" }, { no: 6, name: "PORTRAIT_H264_1080P_30" }, { no: 7, name: "PORTRAIT_H264_1080P_60" }]), nn = Ue.makeEnum("livekit.EncodedFileType", [{ no: 0, name: "DEFAULT_FILETYPE" }, { no: 1, name: "MP4" }, { no: 2, name: "OGG" }, { no: 3, name: "MP3" }]), rn = Ue.makeEnum("livekit.StreamProtocol", [{ no: 0, name: "DEFAULT_PROTOCOL" }, { no: 1, name: "RTMP" }, { no: 2, name: "SRT" }, { no: 3, name: "WEBSOCKET" }]), an = Ue.makeEnum("livekit.SegmentedFileProtocol", [{ no: 0, name: "DEFAULT_SEGMENTED_FILE_PROTOCOL" }, { no: 1, name: "HLS_PROTOCOL" }]), sn = Ue.makeEnum("livekit.SegmentedFileSuffix", [{ no: 0, name: "INDEX" }, { no: 1, name: "TIMESTAMP" }]), on = Ue.makeEnum("livekit.ImageFileSuffix", [{ no: 0, name: "IMAGE_SUFFIX_INDEX" }, { no: 1, name: "IMAGE_SUFFIX_TIMESTAMP" }, { no: 2, name: "IMAGE_SUFFIX_NONE_OVERWRITE" }]), cn = Ue.makeEnum("livekit.AudioMixing", [{ no: 0, name: "DEFAULT_MIXING" }, { no: 1, name: "DUAL_CHANNEL_AGENT" }, { no: 2, name: "DUAL_CHANNEL_ALTERNATE" }]), dn = Ue.makeMessageType("livekit.EncodingOptions", (() => [{ no: 1, name: "width", kind: "scalar", T: 5 }, { no: 2, name: "height", kind: "scalar", T: 5 }, { no: 3, name: "depth", kind: "scalar", T: 5 }, { no: 4, name: "framerate", kind: "scalar", T: 5 }, { no: 5, name: "audio_codec", kind: "enum", T: Ue.getEnumType(Ke) }, { no: 6, name: "audio_bitrate", kind: "scalar", T: 5 }, { no: 7, name: "audio_frequency", kind: "scalar", T: 5 }, { no: 8, name: "video_codec", kind: "enum", T: Ue.getEnumType(ze) }, { no: 9, name: "video_bitrate", kind: "scalar", T: 5 }, { no: 10, name: "key_frame_interval", kind: "scalar", T: 1 }, { no: 11, name: "audio_quality", kind: "scalar", T: 5 }, { no: 12, name: "video_quality", kind: "scalar", T: 5 }])), ln = Ue.makeMessageType("livekit.StreamOutput", (() => [{ no: 1, name: "protocol", kind: "enum", T: Ue.getEnumType(rn) }, { no: 2, name: "urls", kind: "scalar", T: 9, repeated: true }])), un = Ue.makeMessageType("livekit.SegmentedFileOutput", (() => [{ no: 1, name: "protocol", kind: "enum", T: Ue.getEnumType(an) }, { no: 2, name: "filename_prefix", kind: "scalar", T: 9 }, { no: 3, name: "playlist_name", kind: "scalar", T: 9 }, { no: 11, name: "live_playlist_name", kind: "scalar", T: 9 }, { no: 4, name: "segment_duration", kind: "scalar", T: 13 }, { no: 10, name: "filename_suffix", kind: "enum", T: Ue.getEnumType(sn) }, { no: 8, name: "disable_manifest", kind: "scalar", T: 8 }, { no: 5, name: "s3", kind: "message", T: pn, oneof: "output" }, { no: 6, name: "gcp", kind: "message", T: mn, oneof: "output" }, { no: 7, name: "azure", kind: "message", T: gn, oneof: "output" }, { no: 9, name: "aliOSS", kind: "message", T: vn, oneof: "output" }])), hn = Ue.makeMessageType("livekit.ImageOutput", (() => [{ no: 1, name: "capture_interval", kind: "scalar", T: 13 }, { no: 2, name: "width", kind: "scalar", T: 5 }, { no: 3, name: "height", kind: "scalar", T: 5 }, { no: 4, name: "filename_prefix", kind: "scalar", T: 9 }, { no: 5, name: "filename_suffix", kind: "enum", T: Ue.getEnumType(on) }, { no: 6, name: "image_codec", kind: "enum", T: Ue.getEnumType(Je) }, { no: 7, name: "disable_manifest", kind: "scalar", T: 8 }, { no: 8, name: "s3", kind: "message", T: pn, oneof: "output" }, { no: 9, name: "gcp", kind: "message", T: mn, oneof: "output" }, { no: 10, name: "azure", kind: "message", T: gn, oneof: "output" }, { no: 11, name: "aliOSS", kind: "message", T: vn, oneof: "output" }])), pn = Ue.makeMessageType("livekit.S3Upload", (() => [{ no: 1, name: "access_key", kind: "scalar", T: 9 }, { no: 2, name: "secret", kind: "scalar", T: 9 }, { no: 11, name: "session_token", kind: "scalar", T: 9 }, { no: 12, name: "assume_role_arn", kind: "scalar", T: 9 }, { no: 13, name: "assume_role_external_id", kind: "scalar", T: 9 }, { no: 3, name: "region", kind: "scalar", T: 9 }, { no: 4, name: "endpoint", kind: "scalar", T: 9 }, { no: 5, name: "bucket", kind: "scalar", T: 9 }, { no: 6, name: "force_path_style", kind: "scalar", T: 8 }, { no: 7, name: "metadata", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 8, name: "tagging", kind: "scalar", T: 9 }, { no: 9, name: "content_disposition", kind: "scalar", T: 9 }, { no: 10, name: "proxy", kind: "message", T: fn }])), mn = Ue.makeMessageType("livekit.GCPUpload", (() => [{ no: 1, name: "credentials", kind: "scalar", T: 9 }, { no: 2, name: "bucket", kind: "scalar", T: 9 }, { no: 3, name: "proxy", kind: "message", T: fn }])), gn = Ue.makeMessageType("livekit.AzureBlobUpload", (() => [{ no: 1, name: "account_name", kind: "scalar", T: 9 }, { no: 2, name: "account_key", kind: "scalar", T: 9 }, { no: 3, name: "container_name", kind: "scalar", T: 9 }])), vn = Ue.makeMessageType("livekit.AliOSSUpload", (() => [{ no: 1, name: "access_key", kind: "scalar", T: 9 }, { no: 2, name: "secret", kind: "scalar", T: 9 }, { no: 3, name: "region", kind: "scalar", T: 9 }, { no: 4, name: "endpoint", kind: "scalar", T: 9 }, { no: 5, name: "bucket", kind: "scalar", T: 9 }])), fn = Ue.makeMessageType("livekit.ProxyConfig", (() => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "username", kind: "scalar", T: 9 }, { no: 3, name: "password", kind: "scalar", T: 9 }])), kn = Ue.makeMessageType("livekit.AutoParticipantEgress", (() => [{ no: 1, name: "preset", kind: "enum", T: Ue.getEnumType(tn), oneof: "options" }, { no: 2, name: "advanced", kind: "message", T: dn, oneof: "options" }, { no: 3, name: "file_outputs", kind: "message", T: Tn, repeated: true }, { no: 4, name: "segment_outputs", kind: "message", T: un, repeated: true }])), yn = Ue.makeMessageType("livekit.AutoTrackEgress", (() => [{ no: 1, name: "filepath", kind: "scalar", T: 9 }, { no: 5, name: "disable_manifest", kind: "scalar", T: 8 }, { no: 2, name: "s3", kind: "message", T: pn, oneof: "output" }, { no: 3, name: "gcp", kind: "message", T: mn, oneof: "output" }, { no: 4, name: "azure", kind: "message", T: gn, oneof: "output" }, { no: 6, name: "aliOSS", kind: "message", T: vn, oneof: "output" }])), bn = Ue.makeMessageType("livekit.RoomCompositeEgressRequest", (() => [{ no: 1, name: "room_name", kind: "scalar", T: 9 }, { no: 2, name: "layout", kind: "scalar", T: 9 }, { no: 3, name: "audio_only", kind: "scalar", T: 8 }, { no: 15, name: "audio_mixing", kind: "enum", T: Ue.getEnumType(cn) }, { no: 4, name: "video_only", kind: "scalar", T: 8 }, { no: 5, name: "custom_base_url", kind: "scalar", T: 9 }, { no: 6, name: "file", kind: "message", T: Tn, oneof: "output" }, { no: 7, name: "stream", kind: "message", T: ln, oneof: "output" }, { no: 10, name: "segments", kind: "message", T: un, oneof: "output" }, { no: 8, name: "preset", kind: "enum", T: Ue.getEnumType(tn), oneof: "options" }, { no: 9, name: "advanced", kind: "message", T: dn, oneof: "options" }, { no: 11, name: "file_outputs", kind: "message", T: Tn, repeated: true }, { no: 12, name: "stream_outputs", kind: "message", T: ln, repeated: true }, { no: 13, name: "segment_outputs", kind: "message", T: un, repeated: true }, { no: 14, name: "image_outputs", kind: "message", T: hn, repeated: true }, { no: 16, name: "webhooks", kind: "message", T: Xt, repeated: true }])), Tn = Ue.makeMessageType("livekit.EncodedFileOutput", (() => [{ no: 1, name: "file_type", kind: "enum", T: Ue.getEnumType(nn) }, { no: 2, name: "filepath", kind: "scalar", T: 9 }, { no: 6, name: "disable_manifest", kind: "scalar", T: 8 }, { no: 3, name: "s3", kind: "message", T: pn, oneof: "output" }, { no: 4, name: "gcp", kind: "message", T: mn, oneof: "output" }, { no: 5, name: "azure", kind: "message", T: gn, oneof: "output" }, { no: 7, name: "aliOSS", kind: "message", T: vn, oneof: "output" }])), Sn = Ue.makeMessageType("livekit.RoomEgress", (() => [{ no: 1, name: "room", kind: "message", T: bn }, { no: 3, name: "participant", kind: "message", T: kn }, { no: 2, name: "tracks", kind: "message", T: yn }])), En = Ue.makeMessageType("livekit.RoomConfiguration", (() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "empty_timeout", kind: "scalar", T: 13 }, { no: 3, name: "departure_timeout", kind: "scalar", T: 13 }, { no: 4, name: "max_participants", kind: "scalar", T: 13 }, { no: 11, name: "metadata", kind: "scalar", T: 9 }, { no: 5, name: "egress", kind: "message", T: Sn }, { no: 7, name: "min_playout_delay", kind: "scalar", T: 13 }, { no: 8, name: "max_playout_delay", kind: "scalar", T: 13 }, { no: 9, name: "sync_streams", kind: "scalar", T: 8 }, { no: 10, name: "agents", kind: "message", T: en, repeated: true }, { no: 12, name: "tags", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }])), Cn = Ue.makeEnum("livekit.SignalTarget", [{ no: 0, name: "PUBLISHER" }, { no: 1, name: "SUBSCRIBER" }]), wn = Ue.makeEnum("livekit.StreamState", [{ no: 0, name: "ACTIVE" }, { no: 1, name: "PAUSED" }]), Rn = Ue.makeEnum("livekit.CandidateProtocol", [{ no: 0, name: "UDP" }, { no: 1, name: "TCP" }, { no: 2, name: "TLS" }]), Pn = Ue.makeMessageType("livekit.SignalRequest", (() => [{ no: 1, name: "offer", kind: "message", T: Hn, oneof: "message" }, { no: 2, name: "answer", kind: "message", T: Hn, oneof: "message" }, { no: 3, name: "trickle", kind: "message", T: Un, oneof: "message" }, { no: 4, name: "add_track", kind: "message", T: Mn, oneof: "message" }, { no: 5, name: "mute", kind: "message", T: Fn, oneof: "message" }, { no: 6, name: "subscription", kind: "message", T: Kn, oneof: "message" }, { no: 7, name: "track_setting", kind: "message", T: Gn, oneof: "message" }, { no: 8, name: "leave", kind: "message", T: Xn, oneof: "message" }, { no: 10, name: "update_layers", kind: "message", T: $n, oneof: "message" }, { no: 11, name: "subscription_permission", kind: "message", T: pi, oneof: "message" }, { no: 12, name: "sync_state", kind: "message", T: vi, oneof: "message" }, { no: 13, name: "simulate", kind: "message", T: yi, oneof: "message" }, { no: 14, name: "ping", kind: "scalar", T: 3, oneof: "message" }, { no: 15, name: "update_metadata", kind: "message", T: ei, oneof: "message" }, { no: 16, name: "ping_req", kind: "message", T: bi, oneof: "message" }, { no: 17, name: "update_audio_track", kind: "message", T: Qn, oneof: "message" }, { no: 18, name: "update_video_track", kind: "message", T: Yn, oneof: "message" }, { no: 19, name: "publish_data_track_request", kind: "message", T: _n, oneof: "message" }, { no: 20, name: "unpublish_data_track_request", kind: "message", T: An, oneof: "message" }, { no: 21, name: "update_data_subscription", kind: "message", T: zn, oneof: "message" }])), In = Ue.makeMessageType("livekit.SignalResponse", (() => [{ no: 1, name: "join", kind: "message", T: Bn, oneof: "message" }, { no: 2, name: "answer", kind: "message", T: Hn, oneof: "message" }, { no: 3, name: "offer", kind: "message", T: Hn, oneof: "message" }, { no: 4, name: "trickle", kind: "message", T: Un, oneof: "message" }, { no: 5, name: "update", kind: "message", T: Wn, oneof: "message" }, { no: 6, name: "track_published", kind: "message", T: qn, oneof: "message" }, { no: 8, name: "leave", kind: "message", T: Xn, oneof: "message" }, { no: 9, name: "mute", kind: "message", T: Fn, oneof: "message" }, { no: 10, name: "speakers_changed", kind: "message", T: ni, oneof: "message" }, { no: 11, name: "room_update", kind: "message", T: ii, oneof: "message" }, { no: 12, name: "connection_quality", kind: "message", T: ai, oneof: "message" }, { no: 13, name: "stream_state_update", kind: "message", T: oi, oneof: "message" }, { no: 14, name: "subscribed_quality_update", kind: "message", T: li, oneof: "message" }, { no: 15, name: "subscription_permission_update", kind: "message", T: mi, oneof: "message" }, { no: 16, name: "refresh_token", kind: "scalar", T: 9, oneof: "message" }, { no: 17, name: "track_unpublished", kind: "message", T: Vn, oneof: "message" }, { no: 18, name: "pong", kind: "scalar", T: 3, oneof: "message" }, { no: 19, name: "reconnect", kind: "message", T: jn, oneof: "message" }, { no: 20, name: "pong_resp", kind: "message", T: Ti, oneof: "message" }, { no: 21, name: "subscription_response", kind: "message", T: Ci, oneof: "message" }, { no: 22, name: "request_response", kind: "message", T: wi, oneof: "message" }, { no: 23, name: "track_subscribed", kind: "message", T: Pi, oneof: "message" }, { no: 24, name: "room_moved", kind: "message", T: gi, oneof: "message" }, { no: 25, name: "media_sections_requirement", kind: "message", T: Oi, oneof: "message" }, { no: 26, name: "subscribed_audio_codec_update", kind: "message", T: ui, oneof: "message" }, { no: 27, name: "publish_data_track_response", kind: "message", T: On, oneof: "message" }, { no: 28, name: "unpublish_data_track_response", kind: "message", T: Nn, oneof: "message" }, { no: 29, name: "data_track_subscriber_handles", kind: "message", T: xn, oneof: "message" }])), Dn = Ue.makeMessageType("livekit.SimulcastCodec", (() => [{ no: 1, name: "codec", kind: "scalar", T: 9 }, { no: 2, name: "cid", kind: "scalar", T: 9 }, { no: 4, name: "layers", kind: "message", T: ft, repeated: true }, { no: 5, name: "video_layer_mode", kind: "enum", T: Ue.getEnumType(kt) }])), Mn = Ue.makeMessageType("livekit.AddTrackRequest", (() => [{ no: 1, name: "cid", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "type", kind: "enum", T: Ue.getEnumType(Qe) }, { no: 4, name: "width", kind: "scalar", T: 13 }, { no: 5, name: "height", kind: "scalar", T: 13 }, { no: 6, name: "muted", kind: "scalar", T: 8 }, { no: 7, name: "disable_dtx", kind: "scalar", T: 8 }, { no: 8, name: "source", kind: "enum", T: Ue.getEnumType(Ye) }, { no: 9, name: "layers", kind: "message", T: ft, repeated: true }, { no: 10, name: "simulcast_codecs", kind: "message", T: Dn, repeated: true }, { no: 11, name: "sid", kind: "scalar", T: 9 }, { no: 12, name: "stereo", kind: "scalar", T: 8 }, { no: 13, name: "disable_red", kind: "scalar", T: 8 }, { no: 14, name: "encryption", kind: "enum", T: Ue.getEnumType(ht) }, { no: 15, name: "stream", kind: "scalar", T: 9 }, { no: 16, name: "backup_codec_policy", kind: "enum", T: Ue.getEnumType(Ge) }, { no: 17, name: "audio_features", kind: "enum", T: Ue.getEnumType(it), repeated: true }, { no: 18, name: "packet_trailer_features", kind: "enum", T: Ue.getEnumType(rt), repeated: true }])), _n = Ue.makeMessageType("livekit.PublishDataTrackRequest", (() => [{ no: 1, name: "pub_handle", kind: "scalar", T: 13 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "encryption", kind: "enum", T: Ue.getEnumType(ht) }])), On = Ue.makeMessageType("livekit.PublishDataTrackResponse", (() => [{ no: 1, name: "info", kind: "message", T: gt }])), An = Ue.makeMessageType("livekit.UnpublishDataTrackRequest", (() => [{ no: 1, name: "pub_handle", kind: "scalar", T: 13 }])), Nn = Ue.makeMessageType("livekit.UnpublishDataTrackResponse", (() => [{ no: 1, name: "info", kind: "message", T: gt }])), xn = Ue.makeMessageType("livekit.DataTrackSubscriberHandles", (() => [{ no: 1, name: "sub_handles", kind: "map", K: 13, V: { kind: "message", T: Ln } }])), Ln = Ue.makeMessageType("livekit.DataTrackSubscriberHandles.PublishedDataTrack", (() => [{ no: 1, name: "publisher_identity", kind: "scalar", T: 9 }, { no: 2, name: "publisher_sid", kind: "scalar", T: 9 }, { no: 3, name: "track_sid", kind: "scalar", T: 9 }]), { localName: "DataTrackSubscriberHandles_PublishedDataTrack" }), Un = Ue.makeMessageType("livekit.TrickleRequest", (() => [{ no: 1, name: "candidateInit", kind: "scalar", T: 9 }, { no: 2, name: "target", kind: "enum", T: Ue.getEnumType(Cn) }, { no: 3, name: "final", kind: "scalar", T: 8 }])), Fn = Ue.makeMessageType("livekit.MuteTrackRequest", (() => [{ no: 1, name: "sid", kind: "scalar", T: 9 }, { no: 2, name: "muted", kind: "scalar", T: 8 }])), Bn = Ue.makeMessageType("livekit.JoinResponse", (() => [{ no: 1, name: "room", kind: "message", T: at }, { no: 2, name: "participant", kind: "message", T: ct }, { no: 3, name: "other_participants", kind: "message", T: ct, repeated: true }, { no: 4, name: "server_version", kind: "scalar", T: 9 }, { no: 5, name: "ice_servers", kind: "message", T: ti, repeated: true }, { no: 6, name: "subscriber_primary", kind: "scalar", T: 8 }, { no: 7, name: "alternative_url", kind: "scalar", T: 9 }, { no: 8, name: "client_configuration", kind: "message", T: jt }, { no: 9, name: "server_region", kind: "scalar", T: 9 }, { no: 10, name: "ping_timeout", kind: "scalar", T: 5 }, { no: 11, name: "ping_interval", kind: "scalar", T: 5 }, { no: 12, name: "server_info", kind: "message", T: xt }, { no: 13, name: "sif_trailer", kind: "scalar", T: 12 }, { no: 14, name: "enabled_publish_codecs", kind: "message", T: st, repeated: true }, { no: 15, name: "fast_publish", kind: "scalar", T: 8 }])), jn = Ue.makeMessageType("livekit.ReconnectResponse", (() => [{ no: 1, name: "ice_servers", kind: "message", T: ti, repeated: true }, { no: 2, name: "client_configuration", kind: "message", T: jt }, { no: 3, name: "server_info", kind: "message", T: xt }, { no: 4, name: "last_message_seq", kind: "scalar", T: 13 }])), qn = Ue.makeMessageType("livekit.TrackPublishedResponse", (() => [{ no: 1, name: "cid", kind: "scalar", T: 9 }, { no: 2, name: "track", kind: "message", T: mt }])), Vn = Ue.makeMessageType("livekit.TrackUnpublishedResponse", (() => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }])), Hn = Ue.makeMessageType("livekit.SessionDescription", (() => [{ no: 1, name: "type", kind: "scalar", T: 9 }, { no: 2, name: "sdp", kind: "scalar", T: 9 }, { no: 3, name: "id", kind: "scalar", T: 13 }, { no: 4, name: "mid_to_track_id", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }])), Wn = Ue.makeMessageType("livekit.ParticipantUpdate", (() => [{ no: 1, name: "participants", kind: "message", T: ct, repeated: true }])), Kn = Ue.makeMessageType("livekit.UpdateSubscription", (() => [{ no: 1, name: "track_sids", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "subscribe", kind: "scalar", T: 8 }, { no: 3, name: "participant_tracks", kind: "message", T: Nt, repeated: true }])), zn = Ue.makeMessageType("livekit.UpdateDataSubscription", (() => [{ no: 1, name: "updates", kind: "message", T: Jn, repeated: true }])), Jn = Ue.makeMessageType("livekit.UpdateDataSubscription.Update", (() => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "subscribe", kind: "scalar", T: 8 }, { no: 3, name: "options", kind: "message", T: vt }]), { localName: "UpdateDataSubscription_Update" }), Gn = Ue.makeMessageType("livekit.UpdateTrackSettings", (() => [{ no: 1, name: "track_sids", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "disabled", kind: "scalar", T: 8 }, { no: 4, name: "quality", kind: "enum", T: Ue.getEnumType(Xe) }, { no: 5, name: "width", kind: "scalar", T: 13 }, { no: 6, name: "height", kind: "scalar", T: 13 }, { no: 7, name: "fps", kind: "scalar", T: 13 }, { no: 8, name: "priority", kind: "scalar", T: 13 }])), Qn = Ue.makeMessageType("livekit.UpdateLocalAudioTrack", (() => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "features", kind: "enum", T: Ue.getEnumType(it), repeated: true }])), Yn = Ue.makeMessageType("livekit.UpdateLocalVideoTrack", (() => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "width", kind: "scalar", T: 13 }, { no: 3, name: "height", kind: "scalar", T: 13 }])), Xn = Ue.makeMessageType("livekit.LeaveRequest", (() => [{ no: 1, name: "can_reconnect", kind: "scalar", T: 8 }, { no: 2, name: "reason", kind: "enum", T: Ue.getEnumType(et) }, { no: 3, name: "action", kind: "enum", T: Ue.getEnumType(Zn) }, { no: 4, name: "regions", kind: "message", T: Si }])), Zn = Ue.makeEnum("livekit.LeaveRequest.Action", [{ no: 0, name: "DISCONNECT" }, { no: 1, name: "RESUME" }, { no: 2, name: "RECONNECT" }]), $n = Ue.makeMessageType("livekit.UpdateVideoLayers", (() => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "layers", kind: "message", T: ft, repeated: true }])), ei = Ue.makeMessageType("livekit.UpdateParticipantMetadata", (() => [{ no: 1, name: "metadata", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 4, name: "request_id", kind: "scalar", T: 13 }])), ti = Ue.makeMessageType("livekit.ICEServer", (() => [{ no: 1, name: "urls", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "username", kind: "scalar", T: 9 }, { no: 3, name: "credential", kind: "scalar", T: 9 }])), ni = Ue.makeMessageType("livekit.SpeakersChanged", (() => [{ no: 1, name: "speakers", kind: "message", T: Ct, repeated: true }])), ii = Ue.makeMessageType("livekit.RoomUpdate", (() => [{ no: 1, name: "room", kind: "message", T: at }])), ri = Ue.makeMessageType("livekit.ConnectionQualityInfo", (() => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "quality", kind: "enum", T: Ue.getEnumType(Ze) }, { no: 3, name: "score", kind: "scalar", T: 2 }])), ai = Ue.makeMessageType("livekit.ConnectionQualityUpdate", (() => [{ no: 1, name: "updates", kind: "message", T: ri, repeated: true }])), si = Ue.makeMessageType("livekit.StreamStateInfo", (() => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "track_sid", kind: "scalar", T: 9 }, { no: 3, name: "state", kind: "enum", T: Ue.getEnumType(wn) }])), oi = Ue.makeMessageType("livekit.StreamStateUpdate", (() => [{ no: 1, name: "stream_states", kind: "message", T: si, repeated: true }])), ci = Ue.makeMessageType("livekit.SubscribedQuality", (() => [{ no: 1, name: "quality", kind: "enum", T: Ue.getEnumType(Xe) }, { no: 2, name: "enabled", kind: "scalar", T: 8 }])), di = Ue.makeMessageType("livekit.SubscribedCodec", (() => [{ no: 1, name: "codec", kind: "scalar", T: 9 }, { no: 2, name: "qualities", kind: "message", T: ci, repeated: true }])), li = Ue.makeMessageType("livekit.SubscribedQualityUpdate", (() => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "subscribed_qualities", kind: "message", T: ci, repeated: true }, { no: 3, name: "subscribed_codecs", kind: "message", T: di, repeated: true }])), ui = Ue.makeMessageType("livekit.SubscribedAudioCodecUpdate", (() => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "subscribed_audio_codecs", kind: "message", T: Zt, repeated: true }])), hi = Ue.makeMessageType("livekit.TrackPermission", (() => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "all_tracks", kind: "scalar", T: 8 }, { no: 3, name: "track_sids", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "participant_identity", kind: "scalar", T: 9 }])), pi = Ue.makeMessageType("livekit.SubscriptionPermission", (() => [{ no: 1, name: "all_participants", kind: "scalar", T: 8 }, { no: 2, name: "track_permissions", kind: "message", T: hi, repeated: true }])), mi = Ue.makeMessageType("livekit.SubscriptionPermissionUpdate", (() => [{ no: 1, name: "participant_sid", kind: "scalar", T: 9 }, { no: 2, name: "track_sid", kind: "scalar", T: 9 }, { no: 3, name: "allowed", kind: "scalar", T: 8 }])), gi = Ue.makeMessageType("livekit.RoomMovedResponse", (() => [{ no: 1, name: "room", kind: "message", T: at }, { no: 2, name: "token", kind: "scalar", T: 9 }, { no: 3, name: "participant", kind: "message", T: ct }, { no: 4, name: "other_participants", kind: "message", T: ct, repeated: true }])), vi = Ue.makeMessageType("livekit.SyncState", (() => [{ no: 1, name: "answer", kind: "message", T: Hn }, { no: 2, name: "subscription", kind: "message", T: Kn }, { no: 3, name: "publish_tracks", kind: "message", T: qn, repeated: true }, { no: 4, name: "data_channels", kind: "message", T: ki, repeated: true }, { no: 5, name: "offer", kind: "message", T: Hn }, { no: 6, name: "track_sids_disabled", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "datachannel_receive_states", kind: "message", T: fi, repeated: true }, { no: 8, name: "publish_data_tracks", kind: "message", T: On, repeated: true }])), fi = Ue.makeMessageType("livekit.DataChannelReceiveState", (() => [{ no: 1, name: "publisher_sid", kind: "scalar", T: 9 }, { no: 2, name: "last_seq", kind: "scalar", T: 13 }])), ki = Ue.makeMessageType("livekit.DataChannelInfo", (() => [{ no: 1, name: "label", kind: "scalar", T: 9 }, { no: 2, name: "id", kind: "scalar", T: 13 }, { no: 3, name: "target", kind: "enum", T: Ue.getEnumType(Cn) }])), yi = Ue.makeMessageType("livekit.SimulateScenario", (() => [{ no: 1, name: "speaker_update", kind: "scalar", T: 5, oneof: "scenario" }, { no: 2, name: "node_failure", kind: "scalar", T: 8, oneof: "scenario" }, { no: 3, name: "migration", kind: "scalar", T: 8, oneof: "scenario" }, { no: 4, name: "server_leave", kind: "scalar", T: 8, oneof: "scenario" }, { no: 5, name: "switch_candidate_protocol", kind: "enum", T: Ue.getEnumType(Rn), oneof: "scenario" }, { no: 6, name: "subscriber_bandwidth", kind: "scalar", T: 3, oneof: "scenario" }, { no: 7, name: "disconnect_signal_on_resume", kind: "scalar", T: 8, oneof: "scenario" }, { no: 8, name: "disconnect_signal_on_resume_no_messages", kind: "scalar", T: 8, oneof: "scenario" }, { no: 9, name: "leave_request_full_reconnect", kind: "scalar", T: 8, oneof: "scenario" }])), bi = Ue.makeMessageType("livekit.Ping", (() => [{ no: 1, name: "timestamp", kind: "scalar", T: 3 }, { no: 2, name: "rtt", kind: "scalar", T: 3 }])), Ti = Ue.makeMessageType("livekit.Pong", (() => [{ no: 1, name: "last_ping_timestamp", kind: "scalar", T: 3 }, { no: 2, name: "timestamp", kind: "scalar", T: 3 }])), Si = Ue.makeMessageType("livekit.RegionSettings", (() => [{ no: 1, name: "regions", kind: "message", T: Ei, repeated: true }])), Ei = Ue.makeMessageType("livekit.RegionInfo", (() => [{ no: 1, name: "region", kind: "scalar", T: 9 }, { no: 2, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "distance", kind: "scalar", T: 3 }])), Ci = Ue.makeMessageType("livekit.SubscriptionResponse", (() => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }, { no: 2, name: "err", kind: "enum", T: Ue.getEnumType(nt) }])), wi = Ue.makeMessageType("livekit.RequestResponse", (() => [{ no: 1, name: "request_id", kind: "scalar", T: 13 }, { no: 2, name: "reason", kind: "enum", T: Ue.getEnumType(Ri) }, { no: 3, name: "message", kind: "scalar", T: 9 }, { no: 4, name: "trickle", kind: "message", T: Un, oneof: "request" }, { no: 5, name: "add_track", kind: "message", T: Mn, oneof: "request" }, { no: 6, name: "mute", kind: "message", T: Fn, oneof: "request" }, { no: 7, name: "update_metadata", kind: "message", T: ei, oneof: "request" }, { no: 8, name: "update_audio_track", kind: "message", T: Qn, oneof: "request" }, { no: 9, name: "update_video_track", kind: "message", T: Yn, oneof: "request" }, { no: 10, name: "publish_data_track", kind: "message", T: _n, oneof: "request" }, { no: 11, name: "unpublish_data_track", kind: "message", T: An, oneof: "request" }])), Ri = Ue.makeEnum("livekit.RequestResponse.Reason", [{ no: 0, name: "OK" }, { no: 1, name: "NOT_FOUND" }, { no: 2, name: "NOT_ALLOWED" }, { no: 3, name: "LIMIT_EXCEEDED" }, { no: 4, name: "QUEUED" }, { no: 5, name: "UNSUPPORTED_TYPE" }, { no: 6, name: "UNCLASSIFIED_ERROR" }, { no: 7, name: "INVALID_HANDLE" }, { no: 8, name: "INVALID_NAME" }, { no: 9, name: "DUPLICATE_HANDLE" }, { no: 10, name: "DUPLICATE_NAME" }]), Pi = Ue.makeMessageType("livekit.TrackSubscribed", (() => [{ no: 1, name: "track_sid", kind: "scalar", T: 9 }])), Ii = Ue.makeMessageType("livekit.ConnectionSettings", (() => [{ no: 1, name: "auto_subscribe", kind: "scalar", T: 8 }, { no: 2, name: "adaptive_stream", kind: "scalar", T: 8 }, { no: 3, name: "subscriber_allow_pause", kind: "scalar", T: 8, opt: true }, { no: 4, name: "disable_ice_lite", kind: "scalar", T: 8 }, { no: 5, name: "auto_subscribe_data_track", kind: "scalar", T: 8, opt: true }])), Di = Ue.makeMessageType("livekit.JoinRequest", (() => [{ no: 1, name: "client_info", kind: "message", T: Ut }, { no: 2, name: "connection_settings", kind: "message", T: Ii }, { no: 3, name: "metadata", kind: "scalar", T: 9 }, { no: 4, name: "participant_attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 5, name: "add_track_requests", kind: "message", T: Mn, repeated: true }, { no: 6, name: "publisher_offer", kind: "message", T: Hn }, { no: 7, name: "reconnect", kind: "scalar", T: 8 }, { no: 8, name: "reconnect_reason", kind: "enum", T: Ue.getEnumType(tt) }, { no: 9, name: "participant_sid", kind: "scalar", T: 9 }, { no: 10, name: "sync_state", kind: "message", T: vi }])), Mi = Ue.makeMessageType("livekit.WrappedJoinRequest", (() => [{ no: 1, name: "compression", kind: "enum", T: Ue.getEnumType(_i) }, { no: 2, name: "join_request", kind: "scalar", T: 12 }])), _i = Ue.makeEnum("livekit.WrappedJoinRequest.Compression", [{ no: 0, name: "NONE" }, { no: 1, name: "GZIP" }]), Oi = Ue.makeMessageType("livekit.MediaSectionsRequirement", (() => [{ no: 1, name: "num_audios", kind: "scalar", T: 13 }, { no: 2, name: "num_videos", kind: "scalar", T: 13 }])), Ai = Ue.makeMessageType("livekit.TokenSourceRequest", (() => [{ no: 1, name: "room_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "participant_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "participant_identity", kind: "scalar", T: 9, opt: true }, { no: 4, name: "participant_metadata", kind: "scalar", T: 9, opt: true }, { no: 5, name: "participant_attributes", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 6, name: "room_config", kind: "message", T: En, opt: true }])), Ni = Ue.makeMessageType("livekit.TokenSourceResponse", (() => [{ no: 1, name: "server_url", kind: "scalar", T: 9 }, { no: 2, name: "participant_token", kind: "scalar", T: 9 }]));
      function xi(e2) {
        return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
      }
      var Li, Ui = { exports: {} }, Fi = Ui.exports;
      var Bi, ji, qi = (Li || (Li = 1, (function(e2) {
        var t2, n2;
        t2 = Fi, n2 = function() {
          var e3 = function() {
          }, t3 = "undefined", n3 = typeof window !== t3 && typeof window.navigator !== t3 && /Trident\/|MSIE /.test(window.navigator.userAgent), i2 = ["trace", "debug", "info", "warn", "error"], r2 = {}, a2 = null;
          function s2(e4, t4) {
            var n4 = e4[t4];
            if ("function" == typeof n4.bind) return n4.bind(e4);
            try {
              return Function.prototype.bind.call(n4, e4);
            } catch (t5) {
              return function() {
                return Function.prototype.apply.apply(n4, [e4, arguments]);
              };
            }
          }
          function o2() {
            console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
          }
          function c2() {
            for (var n4 = this.getLevel(), r3 = 0; r3 < i2.length; r3++) {
              var a3 = i2[r3];
              this[a3] = r3 < n4 ? e3 : this.methodFactory(a3, n4, this.name);
            }
            if (this.log = this.debug, typeof console === t3 && n4 < this.levels.SILENT) return "No console available for logging";
          }
          function d2(e4) {
            return function() {
              typeof console !== t3 && (c2.call(this), this[e4].apply(this, arguments));
            };
          }
          function l2(i3, r3, a3) {
            return (function(i4) {
              return "debug" === i4 && (i4 = "log"), typeof console !== t3 && ("trace" === i4 && n3 ? o2 : void 0 !== console[i4] ? s2(console, i4) : void 0 !== console.log ? s2(console, "log") : e3);
            })(i3) || d2.apply(this, arguments);
          }
          function u2(e4, n4) {
            var s3, o3, d3, u3 = this, h3 = "loglevel";
            function p2() {
              var e5;
              if (typeof window !== t3 && h3) {
                try {
                  e5 = window.localStorage[h3];
                } catch (e6) {
                }
                if (typeof e5 === t3) try {
                  var n5 = window.document.cookie, i3 = encodeURIComponent(h3), r3 = n5.indexOf(i3 + "=");
                  -1 !== r3 && (e5 = /^([^;]+)/.exec(n5.slice(r3 + i3.length + 1))[1]);
                } catch (e6) {
                }
                return void 0 === u3.levels[e5] && (e5 = void 0), e5;
              }
            }
            function m2(e5) {
              var t4 = e5;
              if ("string" == typeof t4 && void 0 !== u3.levels[t4.toUpperCase()] && (t4 = u3.levels[t4.toUpperCase()]), "number" == typeof t4 && t4 >= 0 && t4 <= u3.levels.SILENT) return t4;
              throw new TypeError("log.setLevel() called with invalid level: " + e5);
            }
            "string" == typeof e4 ? h3 += ":" + e4 : "symbol" == typeof e4 && (h3 = void 0), u3.name = e4, u3.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }, u3.methodFactory = n4 || l2, u3.getLevel = function() {
              return null != d3 ? d3 : null != o3 ? o3 : s3;
            }, u3.setLevel = function(e5, n5) {
              return d3 = m2(e5), false !== n5 && (function(e6) {
                var n6 = (i2[e6] || "silent").toUpperCase();
                if (typeof window !== t3 && h3) {
                  try {
                    return void (window.localStorage[h3] = n6);
                  } catch (e7) {
                  }
                  try {
                    window.document.cookie = encodeURIComponent(h3) + "=" + n6 + ";";
                  } catch (e7) {
                  }
                }
              })(d3), c2.call(u3);
            }, u3.setDefaultLevel = function(e5) {
              o3 = m2(e5), p2() || u3.setLevel(e5, false);
            }, u3.resetLevel = function() {
              d3 = null, (function() {
                if (typeof window !== t3 && h3) {
                  try {
                    window.localStorage.removeItem(h3);
                  } catch (e5) {
                  }
                  try {
                    window.document.cookie = encodeURIComponent(h3) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                  } catch (e5) {
                  }
                }
              })(), c2.call(u3);
            }, u3.enableAll = function(e5) {
              u3.setLevel(u3.levels.TRACE, e5);
            }, u3.disableAll = function(e5) {
              u3.setLevel(u3.levels.SILENT, e5);
            }, u3.rebuild = function() {
              if (a2 !== u3 && (s3 = m2(a2.getLevel())), c2.call(u3), a2 === u3) for (var e5 in r2) r2[e5].rebuild();
            }, s3 = m2(a2 ? a2.getLevel() : "WARN");
            var g2 = p2();
            null != g2 && (d3 = m2(g2)), c2.call(u3);
          }
          (a2 = new u2()).getLogger = function(e4) {
            if ("symbol" != typeof e4 && "string" != typeof e4 || "" === e4) throw new TypeError("You must supply a name when creating a logger.");
            var t4 = r2[e4];
            return t4 || (t4 = r2[e4] = new u2(e4, a2.methodFactory)), t4;
          };
          var h2 = typeof window !== t3 ? window.log : void 0;
          return a2.noConflict = function() {
            return typeof window !== t3 && window.log === a2 && (window.log = h2), a2;
          }, a2.getLoggers = function() {
            return r2;
          }, a2.default = a2, a2;
        }, e2.exports ? e2.exports = n2() : t2.log = n2();
      })(Ui)), Ui.exports);
      e.LogLevel = void 0, (Bi = e.LogLevel || (e.LogLevel = {}))[Bi.trace = 0] = "trace", Bi[Bi.debug = 1] = "debug", Bi[Bi.info = 2] = "info", Bi[Bi.warn = 3] = "warn", Bi[Bi.error = 4] = "error", Bi[Bi.silent = 5] = "silent", e.LoggerNames = void 0, (ji = e.LoggerNames || (e.LoggerNames = {})).Default = "livekit", ji.Room = "livekit-room", ji.TokenSource = "livekit-token-source", ji.Participant = "livekit-participant", ji.Track = "livekit-track", ji.Publication = "livekit-track-publication", ji.Engine = "livekit-engine", ji.Signal = "livekit-signal", ji.PCManager = "livekit-pc-manager", ji.PCTransport = "livekit-pc-transport", ji.E2EE = "lk-e2ee", ji.DataTracks = "livekit-data-tracks";
      let Vi = qi.getLogger(e.LoggerNames.Default);
      const Hi = Object.values(e.LoggerNames).map(((e2) => qi.getLogger(e2)));
      function Wi(e2, t2) {
        const n2 = qi.getLogger(e2);
        return n2.setDefaultLevel(Vi.getLevel()), t2 ? (function(e3, t3) {
          const n3 = (n4) => (i3, r2) => {
            const a2 = t3(), s2 = a2 || r2 ? Object.assign(Object.assign({}, a2), r2) : void 0;
            e3[n4](i3, s2);
          }, i2 = Object.create(e3);
          return i2.trace = n3("trace"), i2.debug = n3("debug"), i2.info = n3("info"), i2.warn = n3("warn"), i2.error = n3("error"), i2;
        })(n2, t2) : n2;
      }
      Vi.setDefaultLevel(e.LogLevel.info);
      const Ki = qi.getLogger(e.LoggerNames.E2EE), zi = 7e3, Ji = [0, 300, 1200, 2700, 4800, zi, zi, zi, zi, zi];
      class Gi {
        constructor(e2) {
          this._retryDelays = void 0 !== e2 ? [...e2] : Ji;
        }
        nextRetryDelayInMs(e2) {
          if (e2.retryCount >= this._retryDelays.length) return null;
          const t2 = this._retryDelays[e2.retryCount];
          return e2.retryCount <= 1 ? t2 : t2 + 1e3 * Math.random();
        }
      }
      function Qi(e2, t2) {
        var n2 = {};
        for (var i2 in e2) Object.prototype.hasOwnProperty.call(e2, i2) && t2.indexOf(i2) < 0 && (n2[i2] = e2[i2]);
        if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) {
          var r2 = 0;
          for (i2 = Object.getOwnPropertySymbols(e2); r2 < i2.length; r2++) t2.indexOf(i2[r2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, i2[r2]) && (n2[i2[r2]] = e2[i2[r2]]);
        }
        return n2;
      }
      function Yi(e2, t2, n2, i2) {
        return new (n2 || (n2 = Promise))((function(r2, a2) {
          function s2(e3) {
            try {
              c2(i2.next(e3));
            } catch (e4) {
              a2(e4);
            }
          }
          function o2(e3) {
            try {
              c2(i2.throw(e3));
            } catch (e4) {
              a2(e4);
            }
          }
          function c2(e3) {
            var t3;
            e3.done ? r2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2((function(e4) {
              e4(t3);
            }))).then(s2, o2);
          }
          c2((i2 = i2.apply(e2, t2 || [])).next());
        }));
      }
      function Xi(e2) {
        var t2 = "function" == typeof Symbol && Symbol.iterator, n2 = t2 && e2[t2], i2 = 0;
        if (n2) return n2.call(e2);
        if (e2 && "number" == typeof e2.length) return { next: function() {
          return e2 && i2 >= e2.length && (e2 = void 0), { value: e2 && e2[i2++], done: !e2 };
        } };
        throw new TypeError(t2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function Zi(e2) {
        return this instanceof Zi ? (this.v = e2, this) : new Zi(e2);
      }
      function $i(e2, t2, n2) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var i2, r2 = n2.apply(e2, t2 || []), a2 = [];
        return i2 = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), s2("next"), s2("throw"), s2("return", (function(e3) {
          return function(t3) {
            return Promise.resolve(t3).then(e3, d2);
          };
        })), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2;
        function s2(e3, t3) {
          r2[e3] && (i2[e3] = function(t4) {
            return new Promise((function(n3, i3) {
              a2.push([e3, t4, n3, i3]) > 1 || o2(e3, t4);
            }));
          }, t3 && (i2[e3] = t3(i2[e3])));
        }
        function o2(e3, t3) {
          try {
            (n3 = r2[e3](t3)).value instanceof Zi ? Promise.resolve(n3.value.v).then(c2, d2) : l2(a2[0][2], n3);
          } catch (e4) {
            l2(a2[0][3], e4);
          }
          var n3;
        }
        function c2(e3) {
          o2("next", e3);
        }
        function d2(e3) {
          o2("throw", e3);
        }
        function l2(e3, t3) {
          e3(t3), a2.shift(), a2.length && o2(a2[0][0], a2[0][1]);
        }
      }
      function er(e2) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t2, n2 = e2[Symbol.asyncIterator];
        return n2 ? n2.call(e2) : (e2 = Xi(e2), t2 = {}, i2("next"), i2("throw"), i2("return"), t2[Symbol.asyncIterator] = function() {
          return this;
        }, t2);
        function i2(n3) {
          t2[n3] = e2[n3] && function(t3) {
            return new Promise((function(i3, r2) {
              (function(e3, t4, n4, i4) {
                Promise.resolve(i4).then((function(t5) {
                  e3({ value: t5, done: n4 });
                }), t4);
              })(i3, r2, (t3 = e2[n3](t3)).done, t3.value);
            }));
          };
        }
      }
      "function" == typeof SuppressedError && SuppressedError;
      var tr, nr = { exports: {} };
      var ir = (function() {
        if (tr) return nr.exports;
        tr = 1;
        var e2, t2 = "object" == typeof Reflect ? Reflect : null, n2 = t2 && "function" == typeof t2.apply ? t2.apply : function(e3, t3, n3) {
          return Function.prototype.apply.call(e3, t3, n3);
        };
        e2 = t2 && "function" == typeof t2.ownKeys ? t2.ownKeys : Object.getOwnPropertySymbols ? function(e3) {
          return Object.getOwnPropertyNames(e3).concat(Object.getOwnPropertySymbols(e3));
        } : function(e3) {
          return Object.getOwnPropertyNames(e3);
        };
        var i2 = Number.isNaN || function(e3) {
          return e3 != e3;
        };
        function r2() {
          r2.init.call(this);
        }
        nr.exports = r2, nr.exports.once = function(e3, t3) {
          return new Promise((function(n3, i3) {
            function r3(n4) {
              e3.removeListener(t3, a3), i3(n4);
            }
            function a3() {
              "function" == typeof e3.removeListener && e3.removeListener("error", r3), n3([].slice.call(arguments));
            }
            m2(e3, t3, a3, { once: true }), "error" !== t3 && (function(e4, t4, n4) {
              "function" == typeof e4.on && m2(e4, "error", t4, n4);
            })(e3, r3, { once: true });
          }));
        }, r2.EventEmitter = r2, r2.prototype._events = void 0, r2.prototype._eventsCount = 0, r2.prototype._maxListeners = void 0;
        var a2 = 10;
        function s2(e3) {
          if ("function" != typeof e3) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e3);
        }
        function o2(e3) {
          return void 0 === e3._maxListeners ? r2.defaultMaxListeners : e3._maxListeners;
        }
        function c2(e3, t3, n3, i3) {
          var r3, a3, c3, d3;
          if (s2(n3), void 0 === (a3 = e3._events) ? (a3 = e3._events = /* @__PURE__ */ Object.create(null), e3._eventsCount = 0) : (void 0 !== a3.newListener && (e3.emit("newListener", t3, n3.listener ? n3.listener : n3), a3 = e3._events), c3 = a3[t3]), void 0 === c3) c3 = a3[t3] = n3, ++e3._eventsCount;
          else if ("function" == typeof c3 ? c3 = a3[t3] = i3 ? [n3, c3] : [c3, n3] : i3 ? c3.unshift(n3) : c3.push(n3), (r3 = o2(e3)) > 0 && c3.length > r3 && !c3.warned) {
            c3.warned = true;
            var l3 = new Error("Possible EventEmitter memory leak detected. " + c3.length + " " + String(t3) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            l3.name = "MaxListenersExceededWarning", l3.emitter = e3, l3.type = t3, l3.count = c3.length, d3 = l3, console && console.warn && console.warn(d3);
          }
          return e3;
        }
        function d2() {
          if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
        }
        function l2(e3, t3, n3) {
          var i3 = { fired: false, wrapFn: void 0, target: e3, type: t3, listener: n3 }, r3 = d2.bind(i3);
          return r3.listener = n3, i3.wrapFn = r3, r3;
        }
        function u2(e3, t3, n3) {
          var i3 = e3._events;
          if (void 0 === i3) return [];
          var r3 = i3[t3];
          return void 0 === r3 ? [] : "function" == typeof r3 ? n3 ? [r3.listener || r3] : [r3] : n3 ? (function(e4) {
            for (var t4 = new Array(e4.length), n4 = 0; n4 < t4.length; ++n4) t4[n4] = e4[n4].listener || e4[n4];
            return t4;
          })(r3) : p2(r3, r3.length);
        }
        function h2(e3) {
          var t3 = this._events;
          if (void 0 !== t3) {
            var n3 = t3[e3];
            if ("function" == typeof n3) return 1;
            if (void 0 !== n3) return n3.length;
          }
          return 0;
        }
        function p2(e3, t3) {
          for (var n3 = new Array(t3), i3 = 0; i3 < t3; ++i3) n3[i3] = e3[i3];
          return n3;
        }
        function m2(e3, t3, n3, i3) {
          if ("function" == typeof e3.on) i3.once ? e3.once(t3, n3) : e3.on(t3, n3);
          else {
            if ("function" != typeof e3.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e3);
            e3.addEventListener(t3, (function r3(a3) {
              i3.once && e3.removeEventListener(t3, r3), n3(a3);
            }));
          }
        }
        return Object.defineProperty(r2, "defaultMaxListeners", { enumerable: true, get: function() {
          return a2;
        }, set: function(e3) {
          if ("number" != typeof e3 || e3 < 0 || i2(e3)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e3 + ".");
          a2 = e3;
        } }), r2.init = function() {
          void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, r2.prototype.setMaxListeners = function(e3) {
          if ("number" != typeof e3 || e3 < 0 || i2(e3)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e3 + ".");
          return this._maxListeners = e3, this;
        }, r2.prototype.getMaxListeners = function() {
          return o2(this);
        }, r2.prototype.emit = function(e3) {
          for (var t3 = [], i3 = 1; i3 < arguments.length; i3++) t3.push(arguments[i3]);
          var r3 = "error" === e3, a3 = this._events;
          if (void 0 !== a3) r3 = r3 && void 0 === a3.error;
          else if (!r3) return false;
          if (r3) {
            var s3;
            if (t3.length > 0 && (s3 = t3[0]), s3 instanceof Error) throw s3;
            var o3 = new Error("Unhandled error." + (s3 ? " (" + s3.message + ")" : ""));
            throw o3.context = s3, o3;
          }
          var c3 = a3[e3];
          if (void 0 === c3) return false;
          if ("function" == typeof c3) n2(c3, this, t3);
          else {
            var d3 = c3.length, l3 = p2(c3, d3);
            for (i3 = 0; i3 < d3; ++i3) n2(l3[i3], this, t3);
          }
          return true;
        }, r2.prototype.addListener = function(e3, t3) {
          return c2(this, e3, t3, false);
        }, r2.prototype.on = r2.prototype.addListener, r2.prototype.prependListener = function(e3, t3) {
          return c2(this, e3, t3, true);
        }, r2.prototype.once = function(e3, t3) {
          return s2(t3), this.on(e3, l2(this, e3, t3)), this;
        }, r2.prototype.prependOnceListener = function(e3, t3) {
          return s2(t3), this.prependListener(e3, l2(this, e3, t3)), this;
        }, r2.prototype.removeListener = function(e3, t3) {
          var n3, i3, r3, a3, o3;
          if (s2(t3), void 0 === (i3 = this._events)) return this;
          if (void 0 === (n3 = i3[e3])) return this;
          if (n3 === t3 || n3.listener === t3) 0 === --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete i3[e3], i3.removeListener && this.emit("removeListener", e3, n3.listener || t3));
          else if ("function" != typeof n3) {
            for (r3 = -1, a3 = n3.length - 1; a3 >= 0; a3--) if (n3[a3] === t3 || n3[a3].listener === t3) {
              o3 = n3[a3].listener, r3 = a3;
              break;
            }
            if (r3 < 0) return this;
            0 === r3 ? n3.shift() : (function(e4, t4) {
              for (; t4 + 1 < e4.length; t4++) e4[t4] = e4[t4 + 1];
              e4.pop();
            })(n3, r3), 1 === n3.length && (i3[e3] = n3[0]), void 0 !== i3.removeListener && this.emit("removeListener", e3, o3 || t3);
          }
          return this;
        }, r2.prototype.off = r2.prototype.removeListener, r2.prototype.removeAllListeners = function(e3) {
          var t3, n3, i3;
          if (void 0 === (n3 = this._events)) return this;
          if (void 0 === n3.removeListener) return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n3[e3] && (0 === --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n3[e3]), this;
          if (0 === arguments.length) {
            var r3, a3 = Object.keys(n3);
            for (i3 = 0; i3 < a3.length; ++i3) "removeListener" !== (r3 = a3[i3]) && this.removeAllListeners(r3);
            return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
          }
          if ("function" == typeof (t3 = n3[e3])) this.removeListener(e3, t3);
          else if (void 0 !== t3) for (i3 = t3.length - 1; i3 >= 0; i3--) this.removeListener(e3, t3[i3]);
          return this;
        }, r2.prototype.listeners = function(e3) {
          return u2(this, e3, true);
        }, r2.prototype.rawListeners = function(e3) {
          return u2(this, e3, false);
        }, r2.listenerCount = function(e3, t3) {
          return "function" == typeof e3.listenerCount ? e3.listenerCount(t3) : h2.call(e3, t3);
        }, r2.prototype.listenerCount = h2, r2.prototype.eventNames = function() {
          return this._eventsCount > 0 ? e2(this._events) : [];
        }, nr.exports;
      })();
      let rr = true, ar = true;
      function sr(e2, t2, n2) {
        const i2 = e2.match(t2);
        return i2 && i2.length >= n2 && parseFloat(i2[n2], 10);
      }
      function or(e2, t2, n2) {
        if (!e2.RTCPeerConnection) return;
        if (!Object.getOwnPropertyDescriptor(EventTarget.prototype, "addEventListener").writable) return void lr("Unable to polyfill events");
        const i2 = e2.RTCPeerConnection.prototype, r2 = i2.addEventListener;
        i2.addEventListener = function(e3, i3) {
          if (e3 !== t2) return r2.apply(this, arguments);
          const a3 = (e4) => {
            const t3 = n2(e4);
            t3 && (i3.handleEvent ? i3.handleEvent(t3) : i3(t3));
          };
          return this._eventMap = this._eventMap || {}, this._eventMap[t2] || (this._eventMap[t2] = /* @__PURE__ */ new Map()), this._eventMap[t2].set(i3, a3), r2.apply(this, [e3, a3]);
        };
        const a2 = i2.removeEventListener;
        i2.removeEventListener = function(e3, n3) {
          if (e3 !== t2 || !this._eventMap || !this._eventMap[t2]) return a2.apply(this, arguments);
          if (!this._eventMap[t2].has(n3)) return a2.apply(this, arguments);
          const i3 = this._eventMap[t2].get(n3);
          return this._eventMap[t2].delete(n3), 0 === this._eventMap[t2].size && delete this._eventMap[t2], 0 === Object.keys(this._eventMap).length && delete this._eventMap, a2.apply(this, [e3, i3]);
        }, Object.defineProperty(i2, "on" + t2, { get() {
          return this["_on" + t2];
        }, set(e3) {
          this["_on" + t2] && (this.removeEventListener(t2, this["_on" + t2]), delete this["_on" + t2]), e3 && this.addEventListener(t2, this["_on" + t2] = e3);
        }, enumerable: true, configurable: true });
      }
      function cr(e2) {
        return "boolean" != typeof e2 ? new Error("Argument type: " + typeof e2 + ". Please use a boolean.") : (rr = e2, e2 ? "adapter.js logging disabled" : "adapter.js logging enabled");
      }
      function dr(e2) {
        return "boolean" != typeof e2 ? new Error("Argument type: " + typeof e2 + ". Please use a boolean.") : (ar = !e2, "adapter.js deprecation warnings " + (e2 ? "disabled" : "enabled"));
      }
      function lr() {
        if ("object" == typeof window) {
          if (rr) return;
          "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments);
        }
      }
      function ur(e2, t2) {
        ar && console.warn(e2 + " is deprecated, please use " + t2 + " instead.");
      }
      function hr(e2) {
        return "[object Object]" === Object.prototype.toString.call(e2);
      }
      function pr(e2) {
        return hr(e2) ? Object.keys(e2).reduce((function(t2, n2) {
          const i2 = hr(e2[n2]), r2 = i2 ? pr(e2[n2]) : e2[n2], a2 = i2 && !Object.keys(r2).length;
          return void 0 === r2 || a2 ? t2 : Object.assign(t2, { [n2]: r2 });
        }), {}) : e2;
      }
      function mr(e2, t2, n2) {
        t2 && !n2.has(t2.id) && (n2.set(t2.id, t2), Object.keys(t2).forEach(((i2) => {
          i2.endsWith("Id") ? mr(e2, e2.get(t2[i2]), n2) : i2.endsWith("Ids") && t2[i2].forEach(((t3) => {
            mr(e2, e2.get(t3), n2);
          }));
        })));
      }
      function gr(e2, t2, n2) {
        const i2 = n2 ? "outbound-rtp" : "inbound-rtp", r2 = /* @__PURE__ */ new Map();
        if (null === t2) return r2;
        const a2 = [];
        return e2.forEach(((e3) => {
          "track" === e3.type && e3.trackIdentifier === t2.id && a2.push(e3);
        })), a2.forEach(((t3) => {
          e2.forEach(((n3) => {
            n3.type === i2 && n3.trackId === t3.id && mr(e2, n3, r2);
          }));
        })), r2;
      }
      const vr = lr;
      function fr(e2, t2) {
        const n2 = e2 && e2.navigator;
        if (!n2.mediaDevices) return;
        const i2 = function(e3) {
          if ("object" != typeof e3 || e3.mandatory || e3.optional) return e3;
          const t3 = {};
          return Object.keys(e3).forEach(((n3) => {
            if ("require" === n3 || "advanced" === n3 || "mediaSource" === n3) return;
            const i3 = "object" == typeof e3[n3] ? e3[n3] : { ideal: e3[n3] };
            void 0 !== i3.exact && "number" == typeof i3.exact && (i3.min = i3.max = i3.exact);
            const r3 = function(e4, t4) {
              return e4 ? e4 + t4.charAt(0).toUpperCase() + t4.slice(1) : "deviceId" === t4 ? "sourceId" : t4;
            };
            if (void 0 !== i3.ideal) {
              t3.optional = t3.optional || [];
              let e4 = {};
              "number" == typeof i3.ideal ? (e4[r3("min", n3)] = i3.ideal, t3.optional.push(e4), e4 = {}, e4[r3("max", n3)] = i3.ideal, t3.optional.push(e4)) : (e4[r3("", n3)] = i3.ideal, t3.optional.push(e4));
            }
            void 0 !== i3.exact && "number" != typeof i3.exact ? (t3.mandatory = t3.mandatory || {}, t3.mandatory[r3("", n3)] = i3.exact) : ["min", "max"].forEach(((e4) => {
              void 0 !== i3[e4] && (t3.mandatory = t3.mandatory || {}, t3.mandatory[r3(e4, n3)] = i3[e4]);
            }));
          })), e3.advanced && (t3.optional = (t3.optional || []).concat(e3.advanced)), t3;
        }, r2 = function(e3, r3) {
          if (t2.version >= 61) return r3(e3);
          if ((e3 = JSON.parse(JSON.stringify(e3))) && "object" == typeof e3.audio) {
            const t3 = function(e4, t4, n3) {
              t4 in e4 && !(n3 in e4) && (e4[n3] = e4[t4], delete e4[t4]);
            };
            t3((e3 = JSON.parse(JSON.stringify(e3))).audio, "autoGainControl", "googAutoGainControl"), t3(e3.audio, "noiseSuppression", "googNoiseSuppression"), e3.audio = i2(e3.audio);
          }
          if (e3 && "object" == typeof e3.video) {
            let a3 = e3.video.facingMode;
            a3 = a3 && ("object" == typeof a3 ? a3 : { ideal: a3 });
            const s2 = t2.version < 66;
            if (a3 && ("user" === a3.exact || "environment" === a3.exact || "user" === a3.ideal || "environment" === a3.ideal) && (!n2.mediaDevices.getSupportedConstraints || !n2.mediaDevices.getSupportedConstraints().facingMode || s2)) {
              let t3;
              if (delete e3.video.facingMode, "environment" === a3.exact || "environment" === a3.ideal ? t3 = ["back", "rear"] : "user" !== a3.exact && "user" !== a3.ideal || (t3 = ["front"]), t3) return n2.mediaDevices.enumerateDevices().then(((n3) => {
                let s3 = (n3 = n3.filter(((e4) => "videoinput" === e4.kind))).find(((e4) => t3.some(((t4) => e4.label.toLowerCase().includes(t4)))));
                return !s3 && n3.length && t3.includes("back") && (s3 = n3[n3.length - 1]), s3 && (e3.video.deviceId = a3.exact ? { exact: s3.deviceId } : { ideal: s3.deviceId }), e3.video = i2(e3.video), vr("chrome: " + JSON.stringify(e3)), r3(e3);
              }));
            }
            e3.video = i2(e3.video);
          }
          return vr("chrome: " + JSON.stringify(e3)), r3(e3);
        }, a2 = function(e3) {
          return t2.version >= 64 ? e3 : { name: { PermissionDeniedError: "NotAllowedError", PermissionDismissedError: "NotAllowedError", InvalidStateError: "NotAllowedError", DevicesNotFoundError: "NotFoundError", ConstraintNotSatisfiedError: "OverconstrainedError", TrackStartError: "NotReadableError", MediaDeviceFailedDueToShutdown: "NotAllowedError", MediaDeviceKillSwitchOn: "NotAllowedError", TabCaptureError: "AbortError", ScreenCaptureError: "AbortError", DeviceCaptureError: "AbortError" }[e3.name] || e3.name, message: e3.message, constraint: e3.constraint || e3.constraintName, toString() {
            return this.name + (this.message && ": ") + this.message;
          } };
        };
        if (n2.getUserMedia = function(e3, t3, i3) {
          r2(e3, ((e4) => {
            n2.webkitGetUserMedia(e4, t3, ((e5) => {
              i3 && i3(a2(e5));
            }));
          }));
        }.bind(n2), n2.mediaDevices.getUserMedia) {
          const e3 = n2.mediaDevices.getUserMedia.bind(n2.mediaDevices);
          n2.mediaDevices.getUserMedia = function(t3) {
            return r2(t3, ((t4) => e3(t4).then(((e4) => {
              if (t4.audio && !e4.getAudioTracks().length || t4.video && !e4.getVideoTracks().length) throw e4.getTracks().forEach(((e5) => {
                e5.stop();
              })), new DOMException("", "NotFoundError");
              return e4;
            }), ((e4) => Promise.reject(a2(e4))))));
          };
        }
      }
      function kr(e2) {
        e2.MediaStream = e2.MediaStream || e2.webkitMediaStream;
      }
      function yr(e2, t2) {
        if (!(t2.version > 102)) if ("object" == typeof e2 && e2.RTCPeerConnection && !("ontrack" in e2.RTCPeerConnection.prototype)) {
          Object.defineProperty(e2.RTCPeerConnection.prototype, "ontrack", { get() {
            return this._ontrack;
          }, set(e3) {
            this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e3);
          }, enumerable: true, configurable: true });
          const t3 = e2.RTCPeerConnection.prototype.setRemoteDescription;
          e2.RTCPeerConnection.prototype.setRemoteDescription = function() {
            return this._ontrackpoly || (this._ontrackpoly = (t4) => {
              t4.stream.addEventListener("addtrack", ((n2) => {
                let i2;
                i2 = e2.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find(((e3) => e3.track && e3.track.id === n2.track.id)) : { track: n2.track };
                const r2 = new Event("track");
                r2.track = n2.track, r2.receiver = i2, r2.transceiver = { receiver: i2 }, r2.streams = [t4.stream], this.dispatchEvent(r2);
              })), t4.stream.getTracks().forEach(((n2) => {
                let i2;
                i2 = e2.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find(((e3) => e3.track && e3.track.id === n2.id)) : { track: n2 };
                const r2 = new Event("track");
                r2.track = n2, r2.receiver = i2, r2.transceiver = { receiver: i2 }, r2.streams = [t4.stream], this.dispatchEvent(r2);
              }));
            }, this.addEventListener("addstream", this._ontrackpoly)), t3.apply(this, arguments);
          };
        } else or(e2, "track", ((e3) => (e3.transceiver || Object.defineProperty(e3, "transceiver", { value: { receiver: e3.receiver } }), e3)));
      }
      function br(e2) {
        if ("object" == typeof e2 && e2.RTCPeerConnection && !("getSenders" in e2.RTCPeerConnection.prototype) && "createDTMFSender" in e2.RTCPeerConnection.prototype) {
          const t2 = function(e3, t3) {
            return { track: t3, get dtmf() {
              return void 0 === this._dtmf && ("audio" === t3.kind ? this._dtmf = e3.createDTMFSender(t3) : this._dtmf = null), this._dtmf;
            }, _pc: e3 };
          };
          if (!e2.RTCPeerConnection.prototype.getSenders) {
            e2.RTCPeerConnection.prototype.getSenders = function() {
              return this._senders = this._senders || [], this._senders.slice();
            };
            const n3 = e2.RTCPeerConnection.prototype.addTrack;
            e2.RTCPeerConnection.prototype.addTrack = function(e3, i4) {
              let r2 = n3.apply(this, arguments);
              return r2 || (r2 = t2(this, e3), this._senders.push(r2)), r2;
            };
            const i3 = e2.RTCPeerConnection.prototype.removeTrack;
            e2.RTCPeerConnection.prototype.removeTrack = function(e3) {
              i3.apply(this, arguments);
              const t3 = this._senders.indexOf(e3);
              -1 !== t3 && this._senders.splice(t3, 1);
            };
          }
          const n2 = e2.RTCPeerConnection.prototype.addStream;
          e2.RTCPeerConnection.prototype.addStream = function(e3) {
            this._senders = this._senders || [], n2.apply(this, [e3]), e3.getTracks().forEach(((e4) => {
              this._senders.push(t2(this, e4));
            }));
          };
          const i2 = e2.RTCPeerConnection.prototype.removeStream;
          e2.RTCPeerConnection.prototype.removeStream = function(e3) {
            this._senders = this._senders || [], i2.apply(this, [e3]), e3.getTracks().forEach(((e4) => {
              const t3 = this._senders.find(((t4) => t4.track === e4));
              t3 && this._senders.splice(this._senders.indexOf(t3), 1);
            }));
          };
        } else if ("object" == typeof e2 && e2.RTCPeerConnection && "getSenders" in e2.RTCPeerConnection.prototype && "createDTMFSender" in e2.RTCPeerConnection.prototype && e2.RTCRtpSender && !("dtmf" in e2.RTCRtpSender.prototype)) {
          const t2 = e2.RTCPeerConnection.prototype.getSenders;
          e2.RTCPeerConnection.prototype.getSenders = function() {
            const e3 = t2.apply(this, []);
            return e3.forEach(((e4) => e4._pc = this)), e3;
          }, Object.defineProperty(e2.RTCRtpSender.prototype, "dtmf", { get() {
            return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
          } });
        }
      }
      function Tr(e2, t2) {
        if (t2.version >= 67) return;
        if (!("object" == typeof e2 && e2.RTCPeerConnection && e2.RTCRtpSender && e2.RTCRtpReceiver)) return;
        if (!("getStats" in e2.RTCRtpSender.prototype)) {
          const t3 = e2.RTCPeerConnection.prototype.getSenders;
          t3 && (e2.RTCPeerConnection.prototype.getSenders = function() {
            const e3 = t3.apply(this, []);
            return e3.forEach(((e4) => e4._pc = this)), e3;
          });
          const n3 = e2.RTCPeerConnection.prototype.addTrack;
          n3 && (e2.RTCPeerConnection.prototype.addTrack = function() {
            const e3 = n3.apply(this, arguments);
            return e3._pc = this, e3;
          }), e2.RTCRtpSender.prototype.getStats = function() {
            const e3 = this;
            return this._pc.getStats().then(((t4) => gr(t4, e3.track, true)));
          };
        }
        if (!("getStats" in e2.RTCRtpReceiver.prototype)) {
          const t3 = e2.RTCPeerConnection.prototype.getReceivers;
          t3 && (e2.RTCPeerConnection.prototype.getReceivers = function() {
            const e3 = t3.apply(this, []);
            return e3.forEach(((e4) => e4._pc = this)), e3;
          }), or(e2, "track", ((e3) => (e3.receiver._pc = e3.srcElement, e3))), e2.RTCRtpReceiver.prototype.getStats = function() {
            const e3 = this;
            return this._pc.getStats().then(((t4) => gr(t4, e3.track, false)));
          };
        }
        if (!("getStats" in e2.RTCRtpSender.prototype) || !("getStats" in e2.RTCRtpReceiver.prototype)) return;
        const n2 = e2.RTCPeerConnection.prototype.getStats;
        e2.RTCPeerConnection.prototype.getStats = function() {
          if (arguments.length > 0 && arguments[0] instanceof e2.MediaStreamTrack) {
            const e3 = arguments[0];
            let t3, n3, i2;
            return this.getSenders().forEach(((n4) => {
              n4.track === e3 && (t3 ? i2 = true : t3 = n4);
            })), this.getReceivers().forEach(((t4) => (t4.track === e3 && (n3 ? i2 = true : n3 = t4), t4.track === e3))), i2 || t3 && n3 ? Promise.reject(new DOMException("There are more than one sender or receiver for the track.", "InvalidAccessError")) : t3 ? t3.getStats() : n3 ? n3.getStats() : Promise.reject(new DOMException("There is no sender or receiver for the track.", "InvalidAccessError"));
          }
          return n2.apply(this, arguments);
        };
      }
      function Sr(e2) {
        e2.RTCPeerConnection.prototype.getLocalStreams = function() {
          return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(((e3) => this._shimmedLocalStreams[e3][0]));
        };
        const t2 = e2.RTCPeerConnection.prototype.addTrack;
        e2.RTCPeerConnection.prototype.addTrack = function(e3, n3) {
          if (!n3) return t2.apply(this, arguments);
          this._shimmedLocalStreams = this._shimmedLocalStreams || {};
          const i3 = t2.apply(this, arguments);
          return this._shimmedLocalStreams[n3.id] ? -1 === this._shimmedLocalStreams[n3.id].indexOf(i3) && this._shimmedLocalStreams[n3.id].push(i3) : this._shimmedLocalStreams[n3.id] = [n3, i3], i3;
        };
        const n2 = e2.RTCPeerConnection.prototype.addStream;
        e2.RTCPeerConnection.prototype.addStream = function(e3) {
          this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e3.getTracks().forEach(((e4) => {
            if (this.getSenders().find(((t4) => t4.track === e4))) throw new DOMException("Track already exists.", "InvalidAccessError");
          }));
          const t3 = this.getSenders();
          n2.apply(this, arguments);
          const i3 = this.getSenders().filter(((e4) => -1 === t3.indexOf(e4)));
          this._shimmedLocalStreams[e3.id] = [e3].concat(i3);
        };
        const i2 = e2.RTCPeerConnection.prototype.removeStream;
        e2.RTCPeerConnection.prototype.removeStream = function(e3) {
          return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e3.id], i2.apply(this, arguments);
        };
        const r2 = e2.RTCPeerConnection.prototype.removeTrack;
        e2.RTCPeerConnection.prototype.removeTrack = function(e3) {
          return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e3 && Object.keys(this._shimmedLocalStreams).forEach(((t3) => {
            const n3 = this._shimmedLocalStreams[t3].indexOf(e3);
            -1 !== n3 && this._shimmedLocalStreams[t3].splice(n3, 1), 1 === this._shimmedLocalStreams[t3].length && delete this._shimmedLocalStreams[t3];
          })), r2.apply(this, arguments);
        };
      }
      function Er(e2, t2) {
        if (!e2.RTCPeerConnection) return;
        if (e2.RTCPeerConnection.prototype.addTrack && t2.version >= 65) return Sr(e2);
        const n2 = e2.RTCPeerConnection.prototype.getLocalStreams;
        e2.RTCPeerConnection.prototype.getLocalStreams = function() {
          const e3 = n2.apply(this);
          return this._reverseStreams = this._reverseStreams || {}, e3.map(((e4) => this._reverseStreams[e4.id]));
        };
        const i2 = e2.RTCPeerConnection.prototype.addStream;
        e2.RTCPeerConnection.prototype.addStream = function(t3) {
          if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, t3.getTracks().forEach(((e3) => {
            if (this.getSenders().find(((t4) => t4.track === e3))) throw new DOMException("Track already exists.", "InvalidAccessError");
          })), !this._reverseStreams[t3.id]) {
            const n3 = new e2.MediaStream(t3.getTracks());
            this._streams[t3.id] = n3, this._reverseStreams[n3.id] = t3, t3 = n3;
          }
          i2.apply(this, [t3]);
        };
        const r2 = e2.RTCPeerConnection.prototype.removeStream;
        function a2(e3, t3) {
          let n3 = t3.sdp;
          return Object.keys(e3._reverseStreams || []).forEach(((t4) => {
            const i3 = e3._reverseStreams[t4], r3 = e3._streams[i3.id];
            n3 = n3.replace(new RegExp(r3.id, "g"), i3.id);
          })), new RTCSessionDescription({ type: t3.type, sdp: n3 });
        }
        e2.RTCPeerConnection.prototype.removeStream = function(e3) {
          this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, r2.apply(this, [this._streams[e3.id] || e3]), delete this._reverseStreams[this._streams[e3.id] ? this._streams[e3.id].id : e3.id], delete this._streams[e3.id];
        }, e2.RTCPeerConnection.prototype.addTrack = function(t3, n3) {
          if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
          const i3 = [].slice.call(arguments, 1);
          if (1 !== i3.length || !i3[0].getTracks().find(((e3) => e3 === t3))) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
          if (this.getSenders().find(((e3) => e3.track === t3))) throw new DOMException("Track already exists.", "InvalidAccessError");
          this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
          const r3 = this._streams[n3.id];
          if (r3) r3.addTrack(t3), Promise.resolve().then((() => {
            this.dispatchEvent(new Event("negotiationneeded"));
          }));
          else {
            const i4 = new e2.MediaStream([t3]);
            this._streams[n3.id] = i4, this._reverseStreams[i4.id] = n3, this.addStream(i4);
          }
          return this.getSenders().find(((e3) => e3.track === t3));
        }, ["createOffer", "createAnswer"].forEach((function(t3) {
          const n3 = e2.RTCPeerConnection.prototype[t3], i3 = { [t3]() {
            const e3 = arguments;
            return arguments.length && "function" == typeof arguments[0] ? n3.apply(this, [(t4) => {
              const n4 = a2(this, t4);
              e3[0].apply(null, [n4]);
            }, (t4) => {
              e3[1] && e3[1].apply(null, t4);
            }, arguments[2]]) : n3.apply(this, arguments).then(((e4) => a2(this, e4)));
          } };
          e2.RTCPeerConnection.prototype[t3] = i3[t3];
        }));
        const s2 = e2.RTCPeerConnection.prototype.setLocalDescription;
        e2.RTCPeerConnection.prototype.setLocalDescription = function() {
          return arguments.length && arguments[0].type ? (arguments[0] = (function(e3, t3) {
            let n3 = t3.sdp;
            return Object.keys(e3._reverseStreams || []).forEach(((t4) => {
              const i3 = e3._reverseStreams[t4], r3 = e3._streams[i3.id];
              n3 = n3.replace(new RegExp(i3.id, "g"), r3.id);
            })), new RTCSessionDescription({ type: t3.type, sdp: n3 });
          })(this, arguments[0]), s2.apply(this, arguments)) : s2.apply(this, arguments);
        };
        const o2 = Object.getOwnPropertyDescriptor(e2.RTCPeerConnection.prototype, "localDescription");
        Object.defineProperty(e2.RTCPeerConnection.prototype, "localDescription", { get() {
          const e3 = o2.get.apply(this);
          return "" === e3.type ? e3 : a2(this, e3);
        } }), e2.RTCPeerConnection.prototype.removeTrack = function(e3) {
          if ("closed" === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
          if (!e3._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
          if (!(e3._pc === this)) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
          let t3;
          this._streams = this._streams || {}, Object.keys(this._streams).forEach(((n3) => {
            this._streams[n3].getTracks().find(((t4) => e3.track === t4)) && (t3 = this._streams[n3]);
          })), t3 && (1 === t3.getTracks().length ? this.removeStream(this._reverseStreams[t3.id]) : t3.removeTrack(e3.track), this.dispatchEvent(new Event("negotiationneeded")));
        };
      }
      function Cr(e2, t2) {
        !e2.RTCPeerConnection && e2.webkitRTCPeerConnection && (e2.RTCPeerConnection = e2.webkitRTCPeerConnection), e2.RTCPeerConnection && t2.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function(t3) {
          const n2 = e2.RTCPeerConnection.prototype[t3], i2 = { [t3]() {
            return arguments[0] = new ("addIceCandidate" === t3 ? e2.RTCIceCandidate : e2.RTCSessionDescription)(arguments[0]), n2.apply(this, arguments);
          } };
          e2.RTCPeerConnection.prototype[t3] = i2[t3];
        }));
      }
      function wr(e2, t2) {
        t2.version > 102 || or(e2, "negotiationneeded", ((e3) => {
          const n2 = e3.target;
          if (!(t2.version < 72 || n2.getConfiguration && "plan-b" === n2.getConfiguration().sdpSemantics) || "stable" === n2.signalingState) return e3;
        }));
      }
      var Rr = Object.freeze({ __proto__: null, fixNegotiationNeeded: wr, shimAddTrackRemoveTrack: Er, shimAddTrackRemoveTrackWithNative: Sr, shimGetSendersWithDtmf: br, shimGetUserMedia: fr, shimMediaStream: kr, shimOnTrack: yr, shimPeerConnection: Cr, shimSenderReceiverGetStats: Tr });
      function Pr(e2, t2) {
        const n2 = e2 && e2.navigator, i2 = e2 && e2.MediaStreamTrack;
        if (n2.getUserMedia = function(e3, t3, i3) {
          ur("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), n2.mediaDevices.getUserMedia(e3).then(t3, i3);
        }, !(t2.version > 55 && "autoGainControl" in n2.mediaDevices.getSupportedConstraints())) {
          const e3 = function(e4, t4, n3) {
            t4 in e4 && !(n3 in e4) && (e4[n3] = e4[t4], delete e4[t4]);
          }, t3 = n2.mediaDevices.getUserMedia.bind(n2.mediaDevices);
          if (n2.mediaDevices.getUserMedia = function(n3) {
            return "object" == typeof n3 && "object" == typeof n3.audio && (n3 = JSON.parse(JSON.stringify(n3)), e3(n3.audio, "autoGainControl", "mozAutoGainControl"), e3(n3.audio, "noiseSuppression", "mozNoiseSuppression")), t3(n3);
          }, i2 && i2.prototype.getSettings) {
            const t4 = i2.prototype.getSettings;
            i2.prototype.getSettings = function() {
              const n3 = t4.apply(this, arguments);
              return e3(n3, "mozAutoGainControl", "autoGainControl"), e3(n3, "mozNoiseSuppression", "noiseSuppression"), n3;
            };
          }
          if (i2 && i2.prototype.applyConstraints) {
            const t4 = i2.prototype.applyConstraints;
            i2.prototype.applyConstraints = function(n3) {
              return "audio" === this.kind && "object" == typeof n3 && (n3 = JSON.parse(JSON.stringify(n3)), e3(n3, "autoGainControl", "mozAutoGainControl"), e3(n3, "noiseSuppression", "mozNoiseSuppression")), t4.apply(this, [n3]);
            };
          }
        }
      }
      function Ir(e2) {
        "object" == typeof e2 && e2.RTCTrackEvent && "receiver" in e2.RTCTrackEvent.prototype && !("transceiver" in e2.RTCTrackEvent.prototype) && Object.defineProperty(e2.RTCTrackEvent.prototype, "transceiver", { get() {
          return { receiver: this.receiver };
        } });
      }
      function Dr(e2, t2) {
        "object" == typeof e2 && (e2.RTCPeerConnection || e2.mozRTCPeerConnection) && (!e2.RTCPeerConnection && e2.mozRTCPeerConnection && (e2.RTCPeerConnection = e2.mozRTCPeerConnection), t2.version < 53 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach((function(t3) {
          const n2 = e2.RTCPeerConnection.prototype[t3], i2 = { [t3]() {
            return arguments[0] = new ("addIceCandidate" === t3 ? e2.RTCIceCandidate : e2.RTCSessionDescription)(arguments[0]), n2.apply(this, arguments);
          } };
          e2.RTCPeerConnection.prototype[t3] = i2[t3];
        })));
      }
      function Mr(e2, t2) {
        if ("object" != typeof e2 || !e2.RTCPeerConnection && !e2.mozRTCPeerConnection) return;
        if (t2.version >= 151) return;
        const n2 = { inboundrtp: "inbound-rtp", outboundrtp: "outbound-rtp", candidatepair: "candidate-pair", localcandidate: "local-candidate", remotecandidate: "remote-candidate" }, i2 = e2.RTCPeerConnection.prototype.getStats;
        e2.RTCPeerConnection.prototype.getStats = function() {
          const e3 = Array.prototype.slice.call(arguments), r2 = e3[0], a2 = e3[1], s2 = e3[2];
          return "closed" === this.signalingState ? Promise.resolve(/* @__PURE__ */ new Map()) : i2.apply(this, [r2 || null]).then(((e4) => {
            if (t2.version < 53 && !a2) try {
              e4.forEach(((e5) => {
                e5.type = n2[e5.type] || e5.type;
              }));
            } catch (t3) {
              if ("TypeError" !== t3.name) throw t3;
              e4.forEach(((t4, i3) => {
                e4.set(i3, Object.assign({}, t4, { type: n2[t4.type] || t4.type }));
              }));
            }
            return e4;
          })).then(a2, s2);
        };
      }
      function _r(e2) {
        if ("object" != typeof e2 || !e2.RTCPeerConnection || !e2.RTCRtpSender) return;
        if (e2.RTCRtpSender && "getStats" in e2.RTCRtpSender.prototype) return;
        const t2 = e2.RTCPeerConnection.prototype.getSenders;
        t2 && (e2.RTCPeerConnection.prototype.getSenders = function() {
          const e3 = t2.apply(this, []);
          return e3.forEach(((e4) => e4._pc = this)), e3;
        });
        const n2 = e2.RTCPeerConnection.prototype.addTrack;
        n2 && (e2.RTCPeerConnection.prototype.addTrack = function() {
          const e3 = n2.apply(this, arguments);
          return e3._pc = this, e3;
        }), e2.RTCRtpSender.prototype.getStats = function() {
          return this.track ? this._pc.getStats(this.track) : Promise.resolve(/* @__PURE__ */ new Map());
        };
      }
      function Or(e2) {
        if ("object" != typeof e2 || !e2.RTCPeerConnection || !e2.RTCRtpSender) return;
        if (e2.RTCRtpSender && "getStats" in e2.RTCRtpReceiver.prototype) return;
        const t2 = e2.RTCPeerConnection.prototype.getReceivers;
        t2 && (e2.RTCPeerConnection.prototype.getReceivers = function() {
          const e3 = t2.apply(this, []);
          return e3.forEach(((e4) => e4._pc = this)), e3;
        }), or(e2, "track", ((e3) => (e3.receiver._pc = e3.srcElement, e3))), e2.RTCRtpReceiver.prototype.getStats = function() {
          return this._pc.getStats(this.track);
        };
      }
      function Ar(e2) {
        e2.RTCPeerConnection && !("removeStream" in e2.RTCPeerConnection.prototype) && (e2.RTCPeerConnection.prototype.removeStream = function(e3) {
          ur("removeStream", "removeTrack"), this.getSenders().forEach(((t2) => {
            t2.track && e3.getTracks().includes(t2.track) && this.removeTrack(t2);
          }));
        });
      }
      function Nr(e2) {
        e2.DataChannel && !e2.RTCDataChannel && (e2.RTCDataChannel = e2.DataChannel);
      }
      function xr(e2) {
        if ("object" != typeof e2 || !e2.RTCPeerConnection) return;
        const t2 = e2.RTCPeerConnection.prototype.addTransceiver;
        t2 && (e2.RTCPeerConnection.prototype.addTransceiver = function() {
          this.setParametersPromises = [];
          let e3 = arguments[1] && arguments[1].sendEncodings;
          void 0 === e3 && (e3 = []), e3 = [...e3];
          const n2 = e3.length > 0;
          n2 && e3.forEach(((e4) => {
            if ("rid" in e4) {
              if (!/^[a-z0-9]{0,16}$/i.test(e4.rid)) throw new TypeError("Invalid RID value provided.");
            }
            if ("scaleResolutionDownBy" in e4 && !(parseFloat(e4.scaleResolutionDownBy) >= 1)) throw new RangeError("scale_resolution_down_by must be >= 1.0");
            if ("maxFramerate" in e4 && !(parseFloat(e4.maxFramerate) >= 0)) throw new RangeError("max_framerate must be >= 0.0");
          }));
          const i2 = t2.apply(this, arguments);
          if (n2) {
            const t3 = i2.sender, n3 = t3.getParameters();
            (!("encodings" in n3) || 1 === n3.encodings.length && 0 === Object.keys(n3.encodings[0]).length) && (n3.encodings = e3, t3.sendEncodings = e3, this.setParametersPromises.push(t3.setParameters(n3).then((() => {
              delete t3.sendEncodings;
            })).catch((() => {
              delete t3.sendEncodings;
            }))));
          }
          return i2;
        });
      }
      function Lr(e2) {
        if ("object" != typeof e2 || !e2.RTCRtpSender) return;
        const t2 = e2.RTCRtpSender.prototype.getParameters;
        t2 && (e2.RTCRtpSender.prototype.getParameters = function() {
          const e3 = t2.apply(this, arguments);
          return "encodings" in e3 || (e3.encodings = [].concat(this.sendEncodings || [{}])), e3;
        });
      }
      function Ur(e2) {
        if ("object" != typeof e2 || !e2.RTCPeerConnection) return;
        const t2 = e2.RTCPeerConnection.prototype.createOffer;
        e2.RTCPeerConnection.prototype.createOffer = function() {
          return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then((() => t2.apply(this, arguments))).finally((() => {
            this.setParametersPromises = [];
          })) : t2.apply(this, arguments);
        };
      }
      function Fr(e2) {
        if ("object" != typeof e2 || !e2.RTCPeerConnection) return;
        const t2 = e2.RTCPeerConnection.prototype.createAnswer;
        e2.RTCPeerConnection.prototype.createAnswer = function() {
          return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then((() => t2.apply(this, arguments))).finally((() => {
            this.setParametersPromises = [];
          })) : t2.apply(this, arguments);
        };
      }
      var Br = Object.freeze({ __proto__: null, shimAddTransceiver: xr, shimCreateAnswer: Fr, shimCreateOffer: Ur, shimGetDisplayMedia: function(e2, t2) {
        e2.navigator.mediaDevices && "getDisplayMedia" in e2.navigator.mediaDevices || e2.navigator.mediaDevices && (e2.navigator.mediaDevices.getDisplayMedia = function(n2) {
          if (!n2 || !n2.video) {
            const e3 = new DOMException("getDisplayMedia without video constraints is undefined");
            return e3.name = "NotFoundError", e3.code = 8, Promise.reject(e3);
          }
          return true === n2.video ? n2.video = { mediaSource: t2 } : n2.video.mediaSource = t2, e2.navigator.mediaDevices.getUserMedia(n2);
        });
      }, shimGetParameters: Lr, shimGetStats: Mr, shimGetUserMedia: Pr, shimOnTrack: Ir, shimPeerConnection: Dr, shimRTCDataChannel: Nr, shimReceiverGetStats: Or, shimRemoveStream: Ar, shimSenderGetStats: _r });
      function jr(e2) {
        if ("object" == typeof e2 && e2.RTCPeerConnection) {
          if ("getLocalStreams" in e2.RTCPeerConnection.prototype || (e2.RTCPeerConnection.prototype.getLocalStreams = function() {
            return this._localStreams || (this._localStreams = []), this._localStreams;
          }), !("addStream" in e2.RTCPeerConnection.prototype)) {
            const t2 = e2.RTCPeerConnection.prototype.addTrack;
            e2.RTCPeerConnection.prototype.addStream = function(e3) {
              this._localStreams || (this._localStreams = []), this._localStreams.includes(e3) || this._localStreams.push(e3), e3.getAudioTracks().forEach(((n2) => t2.call(this, n2, e3))), e3.getVideoTracks().forEach(((n2) => t2.call(this, n2, e3)));
            }, e2.RTCPeerConnection.prototype.addTrack = function(e3) {
              for (var n2 = arguments.length, i2 = new Array(n2 > 1 ? n2 - 1 : 0), r2 = 1; r2 < n2; r2++) i2[r2 - 1] = arguments[r2];
              return i2 && i2.forEach(((e4) => {
                this._localStreams ? this._localStreams.includes(e4) || this._localStreams.push(e4) : this._localStreams = [e4];
              })), t2.apply(this, arguments);
            };
          }
          "removeStream" in e2.RTCPeerConnection.prototype || (e2.RTCPeerConnection.prototype.removeStream = function(e3) {
            this._localStreams || (this._localStreams = []);
            const t2 = this._localStreams.indexOf(e3);
            if (-1 === t2) return;
            this._localStreams.splice(t2, 1);
            const n2 = e3.getTracks();
            this.getSenders().forEach(((e4) => {
              n2.includes(e4.track) && this.removeTrack(e4);
            }));
          });
        }
      }
      function qr(e2) {
        if ("object" == typeof e2 && e2.RTCPeerConnection && ("getRemoteStreams" in e2.RTCPeerConnection.prototype || (e2.RTCPeerConnection.prototype.getRemoteStreams = function() {
          return this._remoteStreams ? this._remoteStreams : [];
        }), !("onaddstream" in e2.RTCPeerConnection.prototype))) {
          Object.defineProperty(e2.RTCPeerConnection.prototype, "onaddstream", { get() {
            return this._onaddstream;
          }, set(e3) {
            this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e3), this.addEventListener("track", this._onaddstreampoly = (e4) => {
              e4.streams.forEach(((e5) => {
                if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(e5)) return;
                this._remoteStreams.push(e5);
                const t3 = new Event("addstream");
                t3.stream = e5, this.dispatchEvent(t3);
              }));
            });
          } });
          const t2 = e2.RTCPeerConnection.prototype.setRemoteDescription;
          e2.RTCPeerConnection.prototype.setRemoteDescription = function() {
            const e3 = this;
            return this._onaddstreampoly || this.addEventListener("track", this._onaddstreampoly = function(t3) {
              t3.streams.forEach(((t4) => {
                if (e3._remoteStreams || (e3._remoteStreams = []), e3._remoteStreams.indexOf(t4) >= 0) return;
                e3._remoteStreams.push(t4);
                const n2 = new Event("addstream");
                n2.stream = t4, e3.dispatchEvent(n2);
              }));
            }), t2.apply(e3, arguments);
          };
        }
      }
      function Vr(e2) {
        if ("object" != typeof e2 || !e2.RTCPeerConnection) return;
        const t2 = e2.RTCPeerConnection.prototype, n2 = t2.createOffer, i2 = t2.createAnswer, r2 = t2.setLocalDescription, a2 = t2.setRemoteDescription, s2 = t2.addIceCandidate;
        t2.createOffer = function(e3, t3) {
          const i3 = arguments.length >= 2 ? arguments[2] : arguments[0], r3 = n2.apply(this, [i3]);
          return t3 ? (r3.then(e3, t3), Promise.resolve()) : r3;
        }, t2.createAnswer = function(e3, t3) {
          const n3 = arguments.length >= 2 ? arguments[2] : arguments[0], r3 = i2.apply(this, [n3]);
          return t3 ? (r3.then(e3, t3), Promise.resolve()) : r3;
        };
        let o2 = function(e3, t3, n3) {
          const i3 = r2.apply(this, [e3]);
          return n3 ? (i3.then(t3, n3), Promise.resolve()) : i3;
        };
        t2.setLocalDescription = o2, o2 = function(e3, t3, n3) {
          const i3 = a2.apply(this, [e3]);
          return n3 ? (i3.then(t3, n3), Promise.resolve()) : i3;
        }, t2.setRemoteDescription = o2, o2 = function(e3, t3, n3) {
          const i3 = s2.apply(this, [e3]);
          return n3 ? (i3.then(t3, n3), Promise.resolve()) : i3;
        }, t2.addIceCandidate = o2;
      }
      function Hr(e2) {
        const t2 = e2 && e2.navigator;
        if (t2.mediaDevices && t2.mediaDevices.getUserMedia) {
          const e3 = t2.mediaDevices, n2 = e3.getUserMedia.bind(e3);
          t2.mediaDevices.getUserMedia = (e4) => n2(Wr(e4));
        }
        !t2.getUserMedia && t2.mediaDevices && t2.mediaDevices.getUserMedia && (t2.getUserMedia = function(e3, n2, i2) {
          t2.mediaDevices.getUserMedia(e3).then(n2, i2);
        }.bind(t2));
      }
      function Wr(e2) {
        return e2 && void 0 !== e2.video ? Object.assign({}, e2, { video: pr(e2.video) }) : e2;
      }
      function Kr(e2) {
        if (!e2.RTCPeerConnection) return;
        const t2 = e2.RTCPeerConnection;
        e2.RTCPeerConnection = function(e3, n2) {
          if (e3 && e3.iceServers) {
            const t3 = [];
            for (let n3 = 0; n3 < e3.iceServers.length; n3++) {
              let i2 = e3.iceServers[n3];
              void 0 === i2.urls && i2.url ? (ur("RTCIceServer.url", "RTCIceServer.urls"), i2 = JSON.parse(JSON.stringify(i2)), i2.urls = i2.url, delete i2.url, t3.push(i2)) : t3.push(e3.iceServers[n3]);
            }
            e3.iceServers = t3;
          }
          return new t2(e3, n2);
        }, e2.RTCPeerConnection.prototype = t2.prototype, "generateCertificate" in t2 && Object.defineProperty(e2.RTCPeerConnection, "generateCertificate", { get: () => t2.generateCertificate });
      }
      function zr(e2) {
        "object" == typeof e2 && e2.RTCTrackEvent && "receiver" in e2.RTCTrackEvent.prototype && !("transceiver" in e2.RTCTrackEvent.prototype) && Object.defineProperty(e2.RTCTrackEvent.prototype, "transceiver", { get() {
          return { receiver: this.receiver };
        } });
      }
      function Jr(e2) {
        const t2 = e2.RTCPeerConnection.prototype.createOffer;
        e2.RTCPeerConnection.prototype.createOffer = function(e3) {
          if (e3) {
            void 0 !== e3.offerToReceiveAudio && (e3.offerToReceiveAudio = !!e3.offerToReceiveAudio);
            const t3 = this.getTransceivers().find(((e4) => "audio" === e4.receiver.track.kind));
            false === e3.offerToReceiveAudio && t3 ? "sendrecv" === t3.direction ? t3.setDirection ? t3.setDirection("sendonly") : t3.direction = "sendonly" : "recvonly" === t3.direction && (t3.setDirection ? t3.setDirection("inactive") : t3.direction = "inactive") : true !== e3.offerToReceiveAudio || t3 || this.addTransceiver("audio", { direction: "recvonly" }), void 0 !== e3.offerToReceiveVideo && (e3.offerToReceiveVideo = !!e3.offerToReceiveVideo);
            const n2 = this.getTransceivers().find(((e4) => "video" === e4.receiver.track.kind));
            false === e3.offerToReceiveVideo && n2 ? "sendrecv" === n2.direction ? n2.setDirection ? n2.setDirection("sendonly") : n2.direction = "sendonly" : "recvonly" === n2.direction && (n2.setDirection ? n2.setDirection("inactive") : n2.direction = "inactive") : true !== e3.offerToReceiveVideo || n2 || this.addTransceiver("video", { direction: "recvonly" });
          }
          return t2.apply(this, arguments);
        };
      }
      function Gr(e2) {
        "object" != typeof e2 || e2.AudioContext || (e2.AudioContext = e2.webkitAudioContext);
      }
      var Qr, Yr = Object.freeze({ __proto__: null, shimAudioContext: Gr, shimCallbacksAPI: Vr, shimConstraints: Wr, shimCreateOfferLegacy: Jr, shimGetUserMedia: Hr, shimLocalStreamsAPI: jr, shimRTCIceServerUrls: Kr, shimRemoteStreamsAPI: qr, shimTrackEventTransceiver: zr }), Xr = { exports: {} };
      var Zr = (Qr || (Qr = 1, (function(e2) {
        const t2 = { generateIdentifier: function() {
          return Math.random().toString(36).substring(2, 12);
        } };
        t2.localCName = t2.generateIdentifier(), t2.splitLines = function(e3) {
          return e3.trim().split("\n").map(((e4) => e4.trim()));
        }, t2.splitSections = function(e3) {
          return e3.split("\nm=").map(((e4, t3) => (t3 > 0 ? "m=" + e4 : e4).trim() + "\r\n"));
        }, t2.getDescription = function(e3) {
          const n2 = t2.splitSections(e3);
          return n2 && n2[0];
        }, t2.getMediaSections = function(e3) {
          const n2 = t2.splitSections(e3);
          return n2.shift(), n2;
        }, t2.matchPrefix = function(e3, n2) {
          return t2.splitLines(e3).filter(((e4) => 0 === e4.indexOf(n2)));
        }, t2.parseCandidate = function(e3) {
          let t3;
          t3 = 0 === e3.indexOf("a=candidate:") ? e3.substring(12).split(" ") : e3.substring(10).split(" ");
          const n2 = { foundation: t3[0], component: { 1: "rtp", 2: "rtcp" }[t3[1]] || t3[1], protocol: t3[2].toLowerCase(), priority: parseInt(t3[3], 10), ip: t3[4], address: t3[4], port: parseInt(t3[5], 10), type: t3[7] };
          for (let e4 = 8; e4 < t3.length; e4 += 2) switch (t3[e4]) {
            case "raddr":
              n2.relatedAddress = t3[e4 + 1];
              break;
            case "rport":
              n2.relatedPort = parseInt(t3[e4 + 1], 10);
              break;
            case "tcptype":
              n2.tcpType = t3[e4 + 1];
              break;
            case "ufrag":
              n2.ufrag = t3[e4 + 1], n2.usernameFragment = t3[e4 + 1];
              break;
            default:
              void 0 === n2[t3[e4]] && (n2[t3[e4]] = t3[e4 + 1]);
          }
          return n2;
        }, t2.writeCandidate = function(e3) {
          const t3 = [];
          t3.push(e3.foundation);
          const n2 = e3.component;
          "rtp" === n2 ? t3.push(1) : "rtcp" === n2 ? t3.push(2) : t3.push(n2), t3.push(e3.protocol.toUpperCase()), t3.push(e3.priority), t3.push(e3.address || e3.ip), t3.push(e3.port);
          const i2 = e3.type;
          return t3.push("typ"), t3.push(i2), "host" !== i2 && e3.relatedAddress && void 0 !== e3.relatedPort && (t3.push("raddr"), t3.push(e3.relatedAddress), t3.push("rport"), t3.push(e3.relatedPort)), e3.tcpType && "tcp" === e3.protocol.toLowerCase() && (t3.push("tcptype"), t3.push(e3.tcpType)), (e3.usernameFragment || e3.ufrag) && (t3.push("ufrag"), t3.push(e3.usernameFragment || e3.ufrag)), "candidate:" + t3.join(" ");
        }, t2.parseIceOptions = function(e3) {
          return e3.substring(14).split(" ");
        }, t2.parseRtpMap = function(e3) {
          let t3 = e3.substring(9).split(" ");
          const n2 = { payloadType: parseInt(t3.shift(), 10) };
          return t3 = t3[0].split("/"), n2.name = t3[0], n2.clockRate = parseInt(t3[1], 10), n2.channels = 3 === t3.length ? parseInt(t3[2], 10) : 1, n2.numChannels = n2.channels, n2;
        }, t2.writeRtpMap = function(e3) {
          let t3 = e3.payloadType;
          void 0 !== e3.preferredPayloadType && (t3 = e3.preferredPayloadType);
          const n2 = e3.channels || e3.numChannels || 1;
          return "a=rtpmap:" + t3 + " " + e3.name + "/" + e3.clockRate + (1 !== n2 ? "/" + n2 : "") + "\r\n";
        }, t2.parseExtmap = function(e3) {
          const t3 = e3.substring(9).split(" ");
          return { id: parseInt(t3[0], 10), direction: t3[0].indexOf("/") > 0 ? t3[0].split("/")[1] : "sendrecv", uri: t3[1], attributes: t3.slice(2).join(" ") };
        }, t2.writeExtmap = function(e3) {
          return "a=extmap:" + (e3.id || e3.preferredId) + (e3.direction && "sendrecv" !== e3.direction ? "/" + e3.direction : "") + " " + e3.uri + (e3.attributes ? " " + e3.attributes : "") + "\r\n";
        }, t2.parseFmtp = function(e3) {
          const t3 = {};
          let n2;
          const i2 = e3.substring(e3.indexOf(" ") + 1).split(";");
          for (let e4 = 0; e4 < i2.length; e4++) n2 = i2[e4].trim().split("="), t3[n2[0].trim()] = n2[1];
          return t3;
        }, t2.writeFmtp = function(e3) {
          let t3 = "", n2 = e3.payloadType;
          if (void 0 !== e3.preferredPayloadType && (n2 = e3.preferredPayloadType), e3.parameters && Object.keys(e3.parameters).length) {
            const i2 = [];
            Object.keys(e3.parameters).forEach(((t4) => {
              void 0 !== e3.parameters[t4] ? i2.push(t4 + "=" + e3.parameters[t4]) : i2.push(t4);
            })), t3 += "a=fmtp:" + n2 + " " + i2.join(";") + "\r\n";
          }
          return t3;
        }, t2.parseRtcpFb = function(e3) {
          const t3 = e3.substring(e3.indexOf(" ") + 1).split(" ");
          return { type: t3.shift(), parameter: t3.join(" ") };
        }, t2.writeRtcpFb = function(e3) {
          let t3 = "", n2 = e3.payloadType;
          return void 0 !== e3.preferredPayloadType && (n2 = e3.preferredPayloadType), e3.rtcpFeedback && e3.rtcpFeedback.length && e3.rtcpFeedback.forEach(((e4) => {
            t3 += "a=rtcp-fb:" + n2 + " " + e4.type + (e4.parameter && e4.parameter.length ? " " + e4.parameter : "") + "\r\n";
          })), t3;
        }, t2.parseSsrcMedia = function(e3) {
          const t3 = e3.indexOf(" "), n2 = { ssrc: parseInt(e3.substring(7, t3), 10) }, i2 = e3.indexOf(":", t3);
          return i2 > -1 ? (n2.attribute = e3.substring(t3 + 1, i2), n2.value = e3.substring(i2 + 1)) : n2.attribute = e3.substring(t3 + 1), n2;
        }, t2.parseSsrcGroup = function(e3) {
          const t3 = e3.substring(13).split(" ");
          return { semantics: t3.shift(), ssrcs: t3.map(((e4) => parseInt(e4, 10))) };
        }, t2.getMid = function(e3) {
          const n2 = t2.matchPrefix(e3, "a=mid:")[0];
          if (n2) return n2.substring(6);
        }, t2.parseFingerprint = function(e3) {
          const t3 = e3.substring(14).split(" ");
          return { algorithm: t3[0].toLowerCase(), value: t3[1].toUpperCase() };
        }, t2.getDtlsParameters = function(e3, n2) {
          return { role: "auto", fingerprints: t2.matchPrefix(e3 + n2, "a=fingerprint:").map(t2.parseFingerprint) };
        }, t2.writeDtlsParameters = function(e3, t3) {
          let n2 = "a=setup:" + t3 + "\r\n";
          return e3.fingerprints.forEach(((e4) => {
            n2 += "a=fingerprint:" + e4.algorithm + " " + e4.value + "\r\n";
          })), n2;
        }, t2.parseCryptoLine = function(e3) {
          const t3 = e3.substring(9).split(" ");
          return { tag: parseInt(t3[0], 10), cryptoSuite: t3[1], keyParams: t3[2], sessionParams: t3.slice(3) };
        }, t2.writeCryptoLine = function(e3) {
          return "a=crypto:" + e3.tag + " " + e3.cryptoSuite + " " + ("object" == typeof e3.keyParams ? t2.writeCryptoKeyParams(e3.keyParams) : e3.keyParams) + (e3.sessionParams ? " " + e3.sessionParams.join(" ") : "") + "\r\n";
        }, t2.parseCryptoKeyParams = function(e3) {
          if (0 !== e3.indexOf("inline:")) return null;
          const t3 = e3.substring(7).split("|");
          return { keyMethod: "inline", keySalt: t3[0], lifeTime: t3[1], mkiValue: t3[2] ? t3[2].split(":")[0] : void 0, mkiLength: t3[2] ? t3[2].split(":")[1] : void 0 };
        }, t2.writeCryptoKeyParams = function(e3) {
          return e3.keyMethod + ":" + e3.keySalt + (e3.lifeTime ? "|" + e3.lifeTime : "") + (e3.mkiValue && e3.mkiLength ? "|" + e3.mkiValue + ":" + e3.mkiLength : "");
        }, t2.getCryptoParameters = function(e3, n2) {
          return t2.matchPrefix(e3 + n2, "a=crypto:").map(t2.parseCryptoLine);
        }, t2.getIceParameters = function(e3, n2) {
          const i2 = t2.matchPrefix(e3 + n2, "a=ice-ufrag:")[0], r2 = t2.matchPrefix(e3 + n2, "a=ice-pwd:")[0];
          return i2 && r2 ? { usernameFragment: i2.substring(12), password: r2.substring(10) } : null;
        }, t2.writeIceParameters = function(e3) {
          let t3 = "a=ice-ufrag:" + e3.usernameFragment + "\r\na=ice-pwd:" + e3.password + "\r\n";
          return e3.iceLite && (t3 += "a=ice-lite\r\n"), t3;
        }, t2.parseRtpParameters = function(e3) {
          const n2 = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] }, i2 = t2.splitLines(e3)[0].split(" ");
          n2.profile = i2[2];
          for (let r3 = 3; r3 < i2.length; r3++) {
            const a2 = i2[r3], s2 = t2.matchPrefix(e3, "a=rtpmap:" + a2 + " ")[0];
            if (s2) {
              const i3 = t2.parseRtpMap(s2), r4 = t2.matchPrefix(e3, "a=fmtp:" + a2 + " ");
              switch (i3.parameters = r4.length ? t2.parseFmtp(r4[0]) : {}, i3.rtcpFeedback = t2.matchPrefix(e3, "a=rtcp-fb:" + a2 + " ").map(t2.parseRtcpFb), n2.codecs.push(i3), i3.name.toUpperCase()) {
                case "RED":
                case "ULPFEC":
                  n2.fecMechanisms.push(i3.name.toUpperCase());
              }
            }
          }
          t2.matchPrefix(e3, "a=extmap:").forEach(((e4) => {
            n2.headerExtensions.push(t2.parseExtmap(e4));
          }));
          const r2 = t2.matchPrefix(e3, "a=rtcp-fb:* ").map(t2.parseRtcpFb);
          return n2.codecs.forEach(((e4) => {
            r2.forEach(((t3) => {
              e4.rtcpFeedback.find(((e5) => e5.type === t3.type && e5.parameter === t3.parameter)) || e4.rtcpFeedback.push(t3);
            }));
          })), n2;
        }, t2.writeRtpDescription = function(e3, n2) {
          let i2 = "";
          i2 += "m=" + e3 + " ", i2 += n2.codecs.length > 0 ? "9" : "0", i2 += " " + (n2.profile || "UDP/TLS/RTP/SAVPF") + " ", i2 += n2.codecs.map(((e4) => void 0 !== e4.preferredPayloadType ? e4.preferredPayloadType : e4.payloadType)).join(" ") + "\r\n", i2 += "c=IN IP4 0.0.0.0\r\n", i2 += "a=rtcp:9 IN IP4 0.0.0.0\r\n", n2.codecs.forEach(((e4) => {
            i2 += t2.writeRtpMap(e4), i2 += t2.writeFmtp(e4), i2 += t2.writeRtcpFb(e4);
          }));
          let r2 = 0;
          return n2.codecs.forEach(((e4) => {
            e4.maxptime > r2 && (r2 = e4.maxptime);
          })), r2 > 0 && (i2 += "a=maxptime:" + r2 + "\r\n"), n2.headerExtensions && n2.headerExtensions.forEach(((e4) => {
            i2 += t2.writeExtmap(e4);
          })), i2;
        }, t2.parseRtpEncodingParameters = function(e3) {
          const n2 = [], i2 = t2.parseRtpParameters(e3), r2 = -1 !== i2.fecMechanisms.indexOf("RED"), a2 = -1 !== i2.fecMechanisms.indexOf("ULPFEC"), s2 = t2.matchPrefix(e3, "a=ssrc:").map(((e4) => t2.parseSsrcMedia(e4))).filter(((e4) => "cname" === e4.attribute)), o2 = s2.length > 0 && s2[0].ssrc;
          let c2;
          const d2 = t2.matchPrefix(e3, "a=ssrc-group:FID").map(((e4) => e4.substring(17).split(" ").map(((e5) => parseInt(e5, 10)))));
          d2.length > 0 && d2[0].length > 1 && d2[0][0] === o2 && (c2 = d2[0][1]), i2.codecs.forEach(((e4) => {
            if ("RTX" === e4.name.toUpperCase() && e4.parameters.apt) {
              let t3 = { ssrc: o2, codecPayloadType: parseInt(e4.parameters.apt, 10) };
              o2 && c2 && (t3.rtx = { ssrc: c2 }), n2.push(t3), r2 && (t3 = JSON.parse(JSON.stringify(t3)), t3.fec = { ssrc: o2, mechanism: a2 ? "red+ulpfec" : "red" }, n2.push(t3));
            }
          })), 0 === n2.length && o2 && n2.push({ ssrc: o2 });
          let l2 = t2.matchPrefix(e3, "b=");
          return l2.length && (l2 = 0 === l2[0].indexOf("b=TIAS:") ? parseInt(l2[0].substring(7), 10) : 0 === l2[0].indexOf("b=AS:") ? 1e3 * parseInt(l2[0].substring(5), 10) * 0.95 - 16e3 : void 0, n2.forEach(((e4) => {
            e4.maxBitrate = l2;
          }))), n2;
        }, t2.parseRtcpParameters = function(e3) {
          const n2 = {}, i2 = t2.matchPrefix(e3, "a=ssrc:").map(((e4) => t2.parseSsrcMedia(e4))).filter(((e4) => "cname" === e4.attribute))[0];
          i2 && (n2.cname = i2.value, n2.ssrc = i2.ssrc);
          const r2 = t2.matchPrefix(e3, "a=rtcp-rsize");
          n2.reducedSize = r2.length > 0, n2.compound = 0 === r2.length;
          const a2 = t2.matchPrefix(e3, "a=rtcp-mux");
          return n2.mux = a2.length > 0, n2;
        }, t2.writeRtcpParameters = function(e3) {
          let t3 = "";
          return e3.reducedSize && (t3 += "a=rtcp-rsize\r\n"), e3.mux && (t3 += "a=rtcp-mux\r\n"), void 0 !== e3.ssrc && e3.cname && (t3 += "a=ssrc:" + e3.ssrc + " cname:" + e3.cname + "\r\n"), t3;
        }, t2.parseMsid = function(e3) {
          let n2;
          const i2 = t2.matchPrefix(e3, "a=msid:");
          if (1 === i2.length) return n2 = i2[0].substring(7).split(" "), { stream: n2[0], track: n2[1] };
          const r2 = t2.matchPrefix(e3, "a=ssrc:").map(((e4) => t2.parseSsrcMedia(e4))).filter(((e4) => "msid" === e4.attribute));
          return r2.length > 0 ? (n2 = r2[0].value.split(" "), { stream: n2[0], track: n2[1] }) : void 0;
        }, t2.parseSctpDescription = function(e3) {
          const n2 = t2.parseMLine(e3), i2 = t2.matchPrefix(e3, "a=max-message-size:");
          let r2;
          i2.length > 0 && (r2 = parseInt(i2[0].substring(19), 10)), isNaN(r2) && (r2 = 65536);
          const a2 = t2.matchPrefix(e3, "a=sctp-port:");
          if (a2.length > 0) return { port: parseInt(a2[0].substring(12), 10), protocol: n2.fmt, maxMessageSize: r2 };
          const s2 = t2.matchPrefix(e3, "a=sctpmap:");
          if (s2.length > 0) {
            const e4 = s2[0].substring(10).split(" ");
            return { port: parseInt(e4[0], 10), protocol: e4[1], maxMessageSize: r2 };
          }
        }, t2.writeSctpDescription = function(e3, t3) {
          let n2 = [];
          return n2 = "DTLS/SCTP" !== e3.protocol ? ["m=" + e3.kind + " 9 " + e3.protocol + " " + t3.protocol + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctp-port:" + t3.port + "\r\n"] : ["m=" + e3.kind + " 9 " + e3.protocol + " " + t3.port + "\r\n", "c=IN IP4 0.0.0.0\r\n", "a=sctpmap:" + t3.port + " " + t3.protocol + " 65535\r\n"], void 0 !== t3.maxMessageSize && n2.push("a=max-message-size:" + t3.maxMessageSize + "\r\n"), n2.join("");
        }, t2.generateSessionId = function() {
          return Math.random().toString().substr(2, 22);
        }, t2.writeSessionBoilerplate = function(e3, n2, i2) {
          let r2;
          const a2 = void 0 !== n2 ? n2 : 2;
          return r2 = e3 || t2.generateSessionId(), "v=0\r\no=" + (i2 || "thisisadapterortc") + " " + r2 + " " + a2 + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n";
        }, t2.getDirection = function(e3, n2) {
          const i2 = t2.splitLines(e3);
          for (let e4 = 0; e4 < i2.length; e4++) switch (i2[e4]) {
            case "a=sendrecv":
            case "a=sendonly":
            case "a=recvonly":
            case "a=inactive":
              return i2[e4].substring(2);
          }
          return n2 ? t2.getDirection(n2) : "sendrecv";
        }, t2.getKind = function(e3) {
          return t2.splitLines(e3)[0].split(" ")[0].substring(2);
        }, t2.isRejected = function(e3) {
          return "0" === e3.split(" ", 2)[1];
        }, t2.parseMLine = function(e3) {
          const n2 = t2.splitLines(e3)[0].substring(2).split(" ");
          return { kind: n2[0], port: parseInt(n2[1], 10), protocol: n2[2], fmt: n2.slice(3).join(" ") };
        }, t2.parseOLine = function(e3) {
          const n2 = t2.matchPrefix(e3, "o=")[0].substring(2).split(" ");
          return { username: n2[0], sessionId: n2[1], sessionVersion: parseInt(n2[2], 10), netType: n2[3], addressType: n2[4], address: n2[5] };
        }, t2.isValidSDP = function(e3) {
          if ("string" != typeof e3 || 0 === e3.length) return false;
          const n2 = t2.splitLines(e3);
          for (let e4 = 0; e4 < n2.length; e4++) if (n2[e4].length < 2 || "=" !== n2[e4].charAt(1)) return false;
          return true;
        }, e2.exports = t2;
      })(Xr)), Xr.exports), $r = xi(Zr), ea = t({ __proto__: null, default: $r }, [Zr]);
      function ta(e2) {
        if (!e2.RTCIceCandidate || e2.RTCIceCandidate && "foundation" in e2.RTCIceCandidate.prototype) return;
        const t2 = e2.RTCIceCandidate;
        e2.RTCIceCandidate = function(e3) {
          if ("object" == typeof e3 && e3.candidate && 0 === e3.candidate.indexOf("a=") && ((e3 = JSON.parse(JSON.stringify(e3))).candidate = e3.candidate.substring(2)), e3.candidate && e3.candidate.length) {
            const n2 = new t2(e3), i2 = $r.parseCandidate(e3.candidate);
            for (const e4 in i2) e4 in n2 || Object.defineProperty(n2, e4, { value: i2[e4] });
            return n2.toJSON = function() {
              return { candidate: n2.candidate, sdpMid: n2.sdpMid, sdpMLineIndex: n2.sdpMLineIndex, usernameFragment: n2.usernameFragment };
            }, n2;
          }
          return new t2(e3);
        }, e2.RTCIceCandidate.prototype = t2.prototype, or(e2, "icecandidate", ((t3) => (t3.candidate && Object.defineProperty(t3, "candidate", { value: new e2.RTCIceCandidate(t3.candidate), writable: "false" }), t3)));
      }
      function na(e2) {
        !e2.RTCIceCandidate || e2.RTCIceCandidate && "relayProtocol" in e2.RTCIceCandidate.prototype || or(e2, "icecandidate", ((e3) => {
          if (e3.candidate) {
            const t2 = $r.parseCandidate(e3.candidate.candidate);
            "relay" === t2.type && (e3.candidate.relayProtocol = { 0: "tls", 1: "tcp", 2: "udp" }[t2.priority >> 24]);
          }
          return e3;
        }));
      }
      function ia(e2, t2) {
        if (!e2.RTCPeerConnection) return;
        "sctp" in e2.RTCPeerConnection.prototype || Object.defineProperty(e2.RTCPeerConnection.prototype, "sctp", { get() {
          return void 0 === this._sctp ? null : this._sctp;
        } });
        const n2 = e2.RTCPeerConnection.prototype.setRemoteDescription;
        e2.RTCPeerConnection.prototype.setRemoteDescription = function() {
          if (this._sctp = null, "chrome" === t2.browser && t2.version >= 76) {
            "plan-b" === this.getConfiguration().sdpSemantics && Object.defineProperty(this, "sctp", { get() {
              return void 0 === this._sctp ? null : this._sctp;
            }, enumerable: true, configurable: true });
          }
          if ((function(e3) {
            if (!e3 || !e3.sdp) return false;
            const t3 = $r.splitSections(e3.sdp);
            return t3.shift(), t3.some(((e4) => {
              const t4 = $r.parseMLine(e4);
              return t4 && "application" === t4.kind && -1 !== t4.protocol.indexOf("SCTP");
            }));
          })(arguments[0])) {
            const e3 = (function(e4) {
              const t3 = e4.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
              if (null === t3 || t3.length < 2) return -1;
              const n4 = parseInt(t3[1], 10);
              return n4 != n4 ? -1 : n4;
            })(arguments[0]), n3 = (function(e4) {
              let n4 = 65536;
              return "firefox" === t2.browser && (n4 = t2.version < 57 ? -1 === e4 ? 16384 : 2147483637 : t2.version < 60 ? 57 === t2.version ? 65535 : 65536 : 2147483637), n4;
            })(e3), i2 = (function(e4, n4) {
              let i3 = 65536;
              "firefox" === t2.browser && 57 === t2.version && (i3 = 65535);
              const r3 = $r.matchPrefix(e4.sdp, "a=max-message-size:");
              return r3.length > 0 ? i3 = parseInt(r3[0].substring(19), 10) : "firefox" === t2.browser && -1 !== n4 && (i3 = 2147483637), i3;
            })(arguments[0], e3);
            let r2;
            r2 = 0 === n3 && 0 === i2 ? Number.POSITIVE_INFINITY : 0 === n3 || 0 === i2 ? Math.max(n3, i2) : Math.min(n3, i2);
            const a2 = {};
            Object.defineProperty(a2, "maxMessageSize", { get: () => r2 }), this._sctp = a2;
          }
          return n2.apply(this, arguments);
        };
      }
      function ra(e2, t2) {
        if (!e2.RTCPeerConnection || !("createDataChannel" in e2.RTCPeerConnection.prototype)) return;
        if ("chrome" === t2.browser && t2.version > 149) return;
        if ("firefox" === t2.browser && t2.version > 60) return;
        function n2(e3, t3) {
          const n3 = e3.send;
          e3.send = function() {
            const i3 = arguments[0], r2 = i3.length || i3.size || i3.byteLength;
            if ("open" === e3.readyState && t3.sctp && r2 > t3.sctp.maxMessageSize) throw new TypeError("Message too large (can send a maximum of " + t3.sctp.maxMessageSize + " bytes)");
            return n3.apply(e3, arguments);
          };
        }
        const i2 = e2.RTCPeerConnection.prototype.createDataChannel;
        e2.RTCPeerConnection.prototype.createDataChannel = function() {
          const e3 = i2.apply(this, arguments);
          return n2(e3, this), e3;
        }, or(e2, "datachannel", ((e3) => (n2(e3.channel, e3.target), e3)));
      }
      function aa(e2) {
        if (!e2.RTCPeerConnection || "connectionState" in e2.RTCPeerConnection.prototype) return;
        const t2 = e2.RTCPeerConnection.prototype;
        Object.defineProperty(t2, "connectionState", { get() {
          return { completed: "connected", checking: "connecting" }[this.iceConnectionState] || this.iceConnectionState;
        }, enumerable: true, configurable: true }), Object.defineProperty(t2, "onconnectionstatechange", { get() {
          return this._onconnectionstatechange || null;
        }, set(e3) {
          this._onconnectionstatechange && (this.removeEventListener("connectionstatechange", this._onconnectionstatechange), delete this._onconnectionstatechange), e3 && this.addEventListener("connectionstatechange", this._onconnectionstatechange = e3);
        }, enumerable: true, configurable: true }), ["setLocalDescription", "setRemoteDescription"].forEach(((e3) => {
          const n2 = t2[e3];
          t2[e3] = function() {
            return this._connectionstatechangepoly || (this._connectionstatechangepoly = (e4) => {
              const t3 = e4.target;
              if (t3._lastConnectionState !== t3.connectionState) {
                t3._lastConnectionState = t3.connectionState;
                const n3 = new Event("connectionstatechange", e4);
                t3.dispatchEvent(n3);
              }
              return e4;
            }, this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)), n2.apply(this, arguments);
          };
        }));
      }
      function sa(e2, t2) {
        if (!e2.RTCPeerConnection) return;
        if ("chrome" === t2.browser && t2.version >= 71) return;
        if ("safari" === t2.browser && t2._safariVersion >= 13.1) return;
        const n2 = e2.RTCPeerConnection.prototype.setRemoteDescription;
        e2.RTCPeerConnection.prototype.setRemoteDescription = function(t3) {
          if (t3 && t3.sdp && -1 !== t3.sdp.indexOf("\na=extmap-allow-mixed")) {
            const n3 = t3.sdp.split("\n").filter(((e3) => "a=extmap-allow-mixed" !== e3.trim())).join("\n");
            e2.RTCSessionDescription && t3 instanceof e2.RTCSessionDescription ? arguments[0] = new e2.RTCSessionDescription({ type: t3.type, sdp: n3 }) : t3.sdp = n3;
          }
          return n2.apply(this, arguments);
        };
      }
      function oa(e2, t2) {
        if (!e2.RTCPeerConnection || !e2.RTCPeerConnection.prototype) return;
        const n2 = e2.RTCPeerConnection.prototype.addIceCandidate;
        n2 && 0 !== n2.length && (e2.RTCPeerConnection.prototype.addIceCandidate = function() {
          return arguments[0] ? ("chrome" === t2.browser && t2.version < 78 || "firefox" === t2.browser && t2.version < 68 || "safari" === t2.browser) && arguments[0] && "" === arguments[0].candidate ? Promise.resolve() : n2.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
        });
      }
      function ca(e2, t2) {
        if (!e2.RTCPeerConnection || !e2.RTCPeerConnection.prototype) return;
        const n2 = e2.RTCPeerConnection.prototype.setLocalDescription;
        n2 && 0 !== n2.length && (e2.RTCPeerConnection.prototype.setLocalDescription = function() {
          let e3 = arguments[0] || {};
          if ("object" != typeof e3 || e3.type && e3.sdp) return n2.apply(this, arguments);
          if (e3 = { type: e3.type, sdp: e3.sdp }, !e3.type) switch (this.signalingState) {
            case "stable":
            case "have-local-offer":
            case "have-remote-pranswer":
              e3.type = "offer";
              break;
            default:
              e3.type = "answer";
          }
          if (e3.sdp || "offer" !== e3.type && "answer" !== e3.type) return n2.apply(this, [e3]);
          return ("offer" === e3.type ? this.createOffer : this.createAnswer).apply(this).then(((e4) => n2.apply(this, [e4])));
        });
      }
      var da, la, ua = Object.freeze({ __proto__: null, removeExtmapAllowMixed: sa, shimAddIceCandidateNullOrEmpty: oa, shimConnectionState: aa, shimMaxMessageSize: ia, shimParameterlessSetLocalDescription: ca, shimRTCIceCandidate: ta, shimRTCIceCandidateRelayProtocol: na, shimSendThrowTypeError: ra });
      !(function() {
        let e2 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).window, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { shimChrome: true, shimFirefox: true, shimSafari: true };
        const n2 = lr, i2 = (function(e3) {
          const t3 = { browser: null, version: null };
          if (void 0 === e3 || !e3.navigator || !e3.navigator.userAgent) return t3.browser = "Not a browser.", t3;
          const n3 = e3.navigator;
          if (n3.userAgentData && n3.userAgentData.brands) {
            const e4 = n3.userAgentData.brands.find(((e5) => "Chromium" === e5.brand));
            if (e4) return { browser: "chrome", version: parseInt(e4.version, 10) };
          }
          if (n3.mozGetUserMedia) t3.browser = "firefox", t3.version = parseInt(sr(n3.userAgent, /Firefox\/(\d+)\./, 1));
          else if (n3.webkitGetUserMedia || false === e3.isSecureContext && e3.webkitRTCPeerConnection) t3.browser = "chrome", t3.version = parseInt(sr(n3.userAgent, /Chrom(e|ium)\/(\d+)\./, 2)) || null;
          else {
            if (!e3.RTCPeerConnection || !n3.userAgent.match(/AppleWebKit\/(\d+)\./)) return t3.browser = "Not a supported browser.", t3;
            t3.browser = "safari", t3.version = parseInt(sr(n3.userAgent, /AppleWebKit\/(\d+)\./, 1)), t3.supportsUnifiedPlan = e3.RTCRtpTransceiver && "currentDirection" in e3.RTCRtpTransceiver.prototype, t3._safariVersion = sr(n3.userAgent, /Version\/(\d+(\.?\d+))/, 1);
          }
          return t3;
        })(e2), r2 = { browserDetails: i2, commonShim: ua, extractVersion: sr, disableLog: cr, disableWarnings: dr, sdp: ea };
        switch (i2.browser) {
          case "chrome":
            if (!Rr || !Cr || !t2.shimChrome) return n2("Chrome shim is not included in this adapter release."), r2;
            if (null === i2.version) return n2("Chrome shim can not determine version, not shimming."), r2;
            n2("adapter.js shimming chrome."), r2.browserShim = Rr, oa(e2, i2), ca(e2), fr(e2, i2), kr(e2), Cr(e2, i2), yr(e2, i2), Er(e2, i2), br(e2), Tr(e2, i2), wr(e2, i2), ta(e2), na(e2), aa(e2), ia(e2, i2), ra(e2, i2), sa(e2, i2);
            break;
          case "firefox":
            if (!Br || !Dr || !t2.shimFirefox) return n2("Firefox shim is not included in this adapter release."), r2;
            n2("adapter.js shimming firefox."), r2.browserShim = Br, oa(e2, i2), ca(e2), Pr(e2, i2), Dr(e2, i2), Mr(e2, i2), Ir(e2), Ar(e2), _r(e2), Or(e2), Nr(e2), xr(e2), Lr(e2), Ur(e2), Fr(e2), ta(e2), aa(e2), ia(e2, i2), ra(e2, i2);
            break;
          case "safari":
            if (!Yr || !t2.shimSafari) return n2("Safari shim is not included in this adapter release."), r2;
            n2("adapter.js shimming safari."), r2.browserShim = Yr, oa(e2, i2), ca(e2), Kr(e2), Jr(e2), Vr(e2), jr(e2), qr(e2), zr(e2), Hr(e2), Gr(e2), ta(e2), na(e2), ia(e2, i2), ra(e2, i2), sa(e2, i2);
            break;
          default:
            n2("Unsupported browser!");
        }
      })({ window: "undefined" == typeof window ? void 0 : window });
      class ha extends (la = Promise) {
        constructor(e2) {
          super(e2);
        }
        catch(e2) {
          return super.catch(e2);
        }
        static reject(e2) {
          return super.reject(e2);
        }
        static all(e2) {
          return super.all(e2);
        }
        static race(e2) {
          return super.race(e2);
        }
      }
      da = ha, ha.resolve = (e2) => Reflect.get(la, "resolve", da).call(da, e2);
      const pa = /version\/(\d+(\.?_?\d+)+)/i;
      let ma;
      function ga(e2) {
        let t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (void 0 === e2 && "undefined" == typeof navigator) return;
        const n2 = (null != e2 ? e2 : navigator.userAgent).toLowerCase();
        if (void 0 === ma || t2) {
          const e3 = va.find(((e4) => e4.test.test(n2)));
          ma = null == e3 ? void 0 : e3.describe(n2);
        }
        return ma;
      }
      const va = [{ test: /firefox|iceweasel|fxios/i, describe: (e2) => ({ name: "Firefox", version: fa(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e2), os: e2.toLowerCase().includes("fxios") ? "iOS" : void 0, osVersion: ka(e2) }) }, { test: /chrom|crios|crmo/i, describe: (e2) => ({ name: "Chrome", version: fa(/(?:chrome|chromium|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e2), os: e2.toLowerCase().includes("crios") ? "iOS" : void 0, osVersion: ka(e2) }) }, { test: /safari|applewebkit/i, describe: (e2) => ({ name: "Safari", version: fa(pa, e2), os: e2.includes("mobile/") ? "iOS" : "macOS", osVersion: ka(e2) }) }];
      function fa(e2, t2) {
        let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        const i2 = t2.match(e2);
        return i2 && i2.length >= n2 && i2[n2] || "";
      }
      function ka(e2) {
        return e2.includes("mac os") ? fa(/\(.+?(\d+_\d+(:?_\d+)?)/, e2, 1).replace(/_/g, ".") : void 0;
      }
      const ya = "2.20.0";
      class ba extends Error {
        constructor(e2, t2, n2) {
          super(t2 || "an error has occurred"), this.name = "LiveKitError", this.code = e2, void 0 !== (null == n2 ? void 0 : n2.cause) && (this.cause = null == n2 ? void 0 : n2.cause);
        }
      }
      class Ta extends ba {
      }
      var Sa, Ea, Ca, wa, Ra, Pa, Ia;
      e.ConnectionErrorReason = void 0, (Sa = e.ConnectionErrorReason || (e.ConnectionErrorReason = {}))[Sa.NotAllowed = 0] = "NotAllowed", Sa[Sa.ServerUnreachable = 1] = "ServerUnreachable", Sa[Sa.InternalError = 2] = "InternalError", Sa[Sa.Cancelled = 3] = "Cancelled", Sa[Sa.LeaveRequest = 4] = "LeaveRequest", Sa[Sa.Timeout = 5] = "Timeout", Sa[Sa.WebSocket = 6] = "WebSocket", Sa[Sa.ServiceNotFound = 7] = "ServiceNotFound";
      class Da extends Ta {
        constructor(t2, n2, i2, r2) {
          super(1, t2), this.name = "ConnectionError", this.status = i2, this.reason = n2, this.context = r2, this.reasonName = e.ConnectionErrorReason[n2];
        }
        static notAllowed(t2, n2, i2) {
          return new Da(t2, e.ConnectionErrorReason.NotAllowed, n2, i2);
        }
        static timeout(t2) {
          return new Da(t2, e.ConnectionErrorReason.Timeout);
        }
        static leaveRequest(t2, n2) {
          return new Da(t2, e.ConnectionErrorReason.LeaveRequest, void 0, n2);
        }
        static internal(t2, n2) {
          return new Da(t2, e.ConnectionErrorReason.InternalError, void 0, n2);
        }
        static cancelled(t2) {
          return new Da(t2, e.ConnectionErrorReason.Cancelled);
        }
        static serverUnreachable(t2, n2) {
          return new Da(t2, e.ConnectionErrorReason.ServerUnreachable, n2);
        }
        static websocket(t2, n2, i2) {
          return new Da(t2, e.ConnectionErrorReason.WebSocket, n2, i2);
        }
        static serviceNotFound(t2, n2) {
          return new Da(t2, e.ConnectionErrorReason.ServiceNotFound, void 0, n2);
        }
      }
      class Ma extends ba {
        constructor(e2) {
          super(21, null != e2 ? e2 : "device is unsupported"), this.name = "DeviceUnsupportedError";
        }
      }
      class _a extends ba {
        constructor(e2) {
          super(20, null != e2 ? e2 : "track is invalid"), this.name = "TrackInvalidError";
        }
      }
      class Oa extends ba {
        constructor(e2) {
          super(10, null != e2 ? e2 : "unsupported server"), this.name = "UnsupportedServer";
        }
      }
      class Aa extends ba {
        constructor(e2) {
          super(12, null != e2 ? e2 : "unexpected connection state"), this.name = "UnexpectedConnectionState";
        }
      }
      class Na extends ba {
        constructor(e2) {
          super(13, null != e2 ? e2 : "unable to negotiate"), this.name = "NegotiationError";
        }
      }
      class xa extends ba {
        constructor(e2) {
          super(14, null != e2 ? e2 : "unable to publish data"), this.name = "PublishDataError";
        }
      }
      class La extends ba {
        constructor(e2, t2) {
          super(15, e2), this.name = "PublishTrackError", this.status = t2;
        }
      }
      class Ua extends Ta {
        constructor(e2, t2) {
          super(15, e2), this.name = "SignalRequestError", this.reason = t2, this.reasonName = "string" == typeof t2 ? t2 : Ri[t2];
        }
      }
      e.DataStreamErrorReason = void 0, (Ea = e.DataStreamErrorReason || (e.DataStreamErrorReason = {}))[Ea.AlreadyOpened = 0] = "AlreadyOpened", Ea[Ea.AbnormalEnd = 1] = "AbnormalEnd", Ea[Ea.DecodeFailed = 2] = "DecodeFailed", Ea[Ea.LengthExceeded = 3] = "LengthExceeded", Ea[Ea.Incomplete = 4] = "Incomplete", Ea[Ea.HandlerAlreadyRegistered = 7] = "HandlerAlreadyRegistered", Ea[Ea.EncryptionTypeMismatch = 8] = "EncryptionTypeMismatch";
      class Fa extends Ta {
        constructor(t2, n2) {
          super(16, t2), this.name = "DataStreamError", this.reason = n2, this.reasonName = e.DataStreamErrorReason[n2];
        }
      }
      class Ba extends ba {
        constructor(e2) {
          super(18, e2), this.name = "SignalReconnectError";
        }
      }
      e.MediaDeviceFailure = void 0, (Ca = e.MediaDeviceFailure || (e.MediaDeviceFailure = {})).PermissionDenied = "PermissionDenied", Ca.NotFound = "NotFound", Ca.DeviceInUse = "DeviceInUse", Ca.Other = "Other", (function(e2) {
        e2.getFailure = function(t2) {
          if (t2 && "name" in t2) return "NotFoundError" === t2.name || "DevicesNotFoundError" === t2.name ? e2.NotFound : "NotAllowedError" === t2.name || "PermissionDeniedError" === t2.name ? e2.PermissionDenied : "NotReadableError" === t2.name || "TrackStartError" === t2.name ? e2.DeviceInUse : e2.Other;
        };
      })(e.MediaDeviceFailure || (e.MediaDeviceFailure = {}));
      class ja {
      }
      ja.setTimeout = function() {
        return setTimeout(...arguments);
      }, ja.setInterval = function() {
        return setInterval(...arguments);
      }, ja.clearTimeout = function() {
        return clearTimeout(...arguments);
      }, ja.clearInterval = function() {
        return clearInterval(...arguments);
      }, e.RoomEvent = void 0, (wa = e.RoomEvent || (e.RoomEvent = {})).Connected = "connected", wa.Reconnecting = "reconnecting", wa.SignalReconnecting = "signalReconnecting", wa.Reconnected = "reconnected", wa.Disconnected = "disconnected", wa.ConnectionStateChanged = "connectionStateChanged", wa.Moved = "moved", wa.MediaDevicesChanged = "mediaDevicesChanged", wa.ParticipantConnected = "participantConnected", wa.ParticipantDisconnected = "participantDisconnected", wa.TrackPublished = "trackPublished", wa.TrackSubscribed = "trackSubscribed", wa.TrackSubscriptionFailed = "trackSubscriptionFailed", wa.TrackUnpublished = "trackUnpublished", wa.TrackUnsubscribed = "trackUnsubscribed", wa.TrackMuted = "trackMuted", wa.TrackUnmuted = "trackUnmuted", wa.LocalTrackPublished = "localTrackPublished", wa.LocalTrackUnpublished = "localTrackUnpublished", wa.LocalAudioSilenceDetected = "localAudioSilenceDetected", wa.ActiveSpeakersChanged = "activeSpeakersChanged", wa.ParticipantMetadataChanged = "participantMetadataChanged", wa.ParticipantNameChanged = "participantNameChanged", wa.ParticipantAttributesChanged = "participantAttributesChanged", wa.ParticipantActive = "participantActive", wa.RoomMetadataChanged = "roomMetadataChanged", wa.DataReceived = "dataReceived", wa.SipDTMFReceived = "sipDTMFReceived", wa.TranscriptionReceived = "transcriptionReceived", wa.ConnectionQualityChanged = "connectionQualityChanged", wa.TrackStreamStateChanged = "trackStreamStateChanged", wa.TrackSubscriptionPermissionChanged = "trackSubscriptionPermissionChanged", wa.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged", wa.AudioPlaybackStatusChanged = "audioPlaybackChanged", wa.VideoPlaybackStatusChanged = "videoPlaybackChanged", wa.MediaDevicesError = "mediaDevicesError", wa.ParticipantPermissionsChanged = "participantPermissionsChanged", wa.SignalConnected = "signalConnected", wa.RecordingStatusChanged = "recordingStatusChanged", wa.ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged", wa.EncryptionError = "encryptionError", wa.DCBufferStatusChanged = "dcBufferStatusChanged", wa.ActiveDeviceChanged = "activeDeviceChanged", wa.ChatMessage = "chatMessage", wa.LocalTrackSubscribed = "localTrackSubscribed", wa.MetricsReceived = "metricsReceived", wa.DataTrackPublished = "dataTrackPublished", wa.DataTrackUnpublished = "dataTrackUnpublished", wa.LocalDataTrackPublished = "localDataTrackPublished", wa.LocalDataTrackUnpublished = "localDataTrackUnpublished", e.ParticipantEvent = void 0, (Ra = e.ParticipantEvent || (e.ParticipantEvent = {})).TrackPublished = "trackPublished", Ra.TrackSubscribed = "trackSubscribed", Ra.TrackSubscriptionFailed = "trackSubscriptionFailed", Ra.TrackUnpublished = "trackUnpublished", Ra.TrackUnsubscribed = "trackUnsubscribed", Ra.TrackMuted = "trackMuted", Ra.TrackUnmuted = "trackUnmuted", Ra.LocalTrackPublished = "localTrackPublished", Ra.LocalTrackUnpublished = "localTrackUnpublished", Ra.LocalTrackCpuConstrained = "localTrackCpuConstrained", Ra.LocalSenderCreated = "localSenderCreated", Ra.ParticipantMetadataChanged = "participantMetadataChanged", Ra.ParticipantNameChanged = "participantNameChanged", Ra.DataReceived = "dataReceived", Ra.SipDTMFReceived = "sipDTMFReceived", Ra.TranscriptionReceived = "transcriptionReceived", Ra.IsSpeakingChanged = "isSpeakingChanged", Ra.ConnectionQualityChanged = "connectionQualityChanged", Ra.TrackStreamStateChanged = "trackStreamStateChanged", Ra.TrackSubscriptionPermissionChanged = "trackSubscriptionPermissionChanged", Ra.TrackSubscriptionStatusChanged = "trackSubscriptionStatusChanged", Ra.TrackCpuConstrained = "trackCpuConstrained", Ra.MediaDevicesError = "mediaDevicesError", Ra.AudioStreamAcquired = "audioStreamAcquired", Ra.ParticipantPermissionsChanged = "participantPermissionsChanged", Ra.PCTrackAdded = "pcTrackAdded", Ra.AttributesChanged = "attributesChanged", Ra.LocalTrackSubscribed = "localTrackSubscribed", Ra.ChatMessage = "chatMessage", Ra.Active = "active", e.EngineEvent = void 0, (Pa = e.EngineEvent || (e.EngineEvent = {})).TransportsCreated = "transportsCreated", Pa.Connected = "connected", Pa.Disconnected = "disconnected", Pa.Resuming = "resuming", Pa.Resumed = "resumed", Pa.Restarting = "restarting", Pa.Restarted = "restarted", Pa.SignalResumed = "signalResumed", Pa.SignalRestarted = "signalRestarted", Pa.Closing = "closing", Pa.MediaTrackAdded = "mediaTrackAdded", Pa.ActiveSpeakersUpdate = "activeSpeakersUpdate", Pa.DataPacketReceived = "dataPacketReceived", Pa.RTPVideoMapUpdate = "rtpVideoMapUpdate", Pa.DCBufferStatusChanged = "dcBufferStatusChanged", Pa.ParticipantUpdate = "participantUpdate", Pa.RoomUpdate = "roomUpdate", Pa.SpeakersChanged = "speakersChanged", Pa.StreamStateChanged = "streamStateChanged", Pa.ConnectionQualityUpdate = "connectionQualityUpdate", Pa.SubscriptionError = "subscriptionError", Pa.SubscriptionPermissionUpdate = "subscriptionPermissionUpdate", Pa.RemoteMute = "remoteMute", Pa.SubscribedQualityUpdate = "subscribedQualityUpdate", Pa.LocalTrackUnpublished = "localTrackUnpublished", Pa.LocalTrackSubscribed = "localTrackSubscribed", Pa.Offline = "offline", Pa.SignalRequestResponse = "signalRequestResponse", Pa.SignalConnected = "signalConnected", Pa.RoomMoved = "roomMoved", Pa.PublishDataTrackResponse = "publishDataTrackResponse", Pa.UnPublishDataTrackResponse = "unPublishDataTrackResponse", Pa.DataTrackSubscriberHandles = "dataTrackSubscriberHandles", Pa.DataTrackPacketReceived = "dataTrackPacketReceived", Pa.Joined = "joined", Pa.TokenRefreshed = "tokenRefreshed", Pa.ServerRegionsReported = "serverRegionsReported", e.TrackEvent = void 0, (Ia = e.TrackEvent || (e.TrackEvent = {})).Message = "message", Ia.Muted = "muted", Ia.Unmuted = "unmuted", Ia.Restarted = "restarted", Ia.Ended = "ended", Ia.Subscribed = "subscribed", Ia.Unsubscribed = "unsubscribed", Ia.CpuConstrained = "cpuConstrained", Ia.UpdateSettings = "updateSettings", Ia.UpdateSubscription = "updateSubscription", Ia.AudioPlaybackStarted = "audioPlaybackStarted", Ia.AudioPlaybackFailed = "audioPlaybackFailed", Ia.AudioSilenceDetected = "audioSilenceDetected", Ia.VisibilityChanged = "visibilityChanged", Ia.VideoDimensionsChanged = "videoDimensionsChanged", Ia.VideoPlaybackStarted = "videoPlaybackStarted", Ia.VideoPlaybackFailed = "videoPlaybackFailed", Ia.ElementAttached = "elementAttached", Ia.ElementDetached = "elementDetached", Ia.UpstreamPaused = "upstreamPaused", Ia.UpstreamResumed = "upstreamResumed", Ia.SubscriptionPermissionChanged = "subscriptionPermissionChanged", Ia.SubscriptionStatusChanged = "subscriptionStatusChanged", Ia.SubscriptionFailed = "subscriptionFailed", Ia.TrackProcessorUpdate = "trackProcessorUpdate", Ia.AudioTrackFeatureUpdate = "audioTrackFeatureUpdate", Ia.TranscriptionReceived = "transcriptionReceived", Ia.TimeSyncUpdate = "timeSyncUpdate", Ia.PreConnectBufferFlushed = "preConnectBufferFlushed";
      class qa {
        constructor(e2, t2, n2, i2, r2) {
          if ("object" == typeof e2) this.width = e2.width, this.height = e2.height, this.aspectRatio = e2.aspectRatio, this.encoding = { maxBitrate: e2.maxBitrate, maxFramerate: e2.maxFramerate, priority: e2.priority };
          else {
            if (void 0 === t2 || void 0 === n2) throw new TypeError("Unsupported options: provide at least width, height and maxBitrate");
            this.width = e2, this.height = t2, this.aspectRatio = e2 / t2, this.encoding = { maxBitrate: n2, maxFramerate: i2, priority: r2 };
          }
        }
        get resolution() {
          return { width: this.width, height: this.height, frameRate: this.encoding.maxFramerate, aspectRatio: this.aspectRatio };
        }
      }
      const Va = ["opus", "red"], Ha = ["vp8", "h264"], Wa = ["vp8", "h264", "vp9", "av1", "h265"];
      function Ka(e2) {
        return !!Ha.find(((t2) => t2 === e2));
      }
      const za = Ka;
      var Ja, Ga;
      e.BackupCodecPolicy = void 0, (Ja = e.BackupCodecPolicy || (e.BackupCodecPolicy = {}))[Ja.PREFER_REGRESSION = 0] = "PREFER_REGRESSION", Ja[Ja.SIMULCAST = 1] = "SIMULCAST", Ja[Ja.REGRESSION = 2] = "REGRESSION", e.AudioPresets = void 0, (Ga = e.AudioPresets || (e.AudioPresets = {})).telephone = { maxBitrate: 12e3 }, Ga.speech = { maxBitrate: 24e3 }, Ga.music = { maxBitrate: 48e3 }, Ga.musicStereo = { maxBitrate: 64e3 }, Ga.musicHighQuality = { maxBitrate: 96e3 }, Ga.musicHighQualityStereo = { maxBitrate: 128e3 };
      const Qa = { h90: new qa(160, 90, 9e4, 20), h180: new qa(320, 180, 16e4, 20), h216: new qa(384, 216, 18e4, 20), h360: new qa(640, 360, 45e4, 20), h540: new qa(960, 540, 8e5, 25), h720: new qa(1280, 720, 17e5, 30), h1080: new qa(1920, 1080, 3e6, 30), h1440: new qa(2560, 1440, 5e6, 30), h2160: new qa(3840, 2160, 8e6, 30) }, Ya = { h120: new qa(160, 120, 7e4, 20), h180: new qa(240, 180, 125e3, 20), h240: new qa(320, 240, 14e4, 20), h360: new qa(480, 360, 33e4, 20), h480: new qa(640, 480, 5e5, 20), h540: new qa(720, 540, 6e5, 25), h720: new qa(960, 720, 13e5, 30), h1080: new qa(1440, 1080, 23e5, 30), h1440: new qa(1920, 1440, 38e5, 30) }, Xa = { h360fps3: new qa(640, 360, 2e5, 3, "medium"), h360fps15: new qa(640, 360, 4e5, 15, "medium"), h720fps5: new qa(1280, 720, 8e5, 5, "medium"), h720fps15: new qa(1280, 720, 15e5, 15, "medium"), h720fps30: new qa(1280, 720, 2e6, 30, "medium"), h1080fps15: new qa(1920, 1080, 25e5, 15, "medium"), h1080fps30: new qa(1920, 1080, 5e6, 30, "medium"), original: new qa(0, 0, 7e6, 30, "medium") };
      function Za(e2, t2, n2) {
        var i2, r2, a2, s2;
        const o2 = ds(null != e2 ? e2 : {}), c2 = o2.optionsWithoutProcessor, d2 = o2.audioProcessor, l2 = o2.videoProcessor, u2 = null == t2 ? void 0 : t2.processor, h2 = null == n2 ? void 0 : n2.processor, p2 = null != c2 ? c2 : {};
        return true === p2.audio && (p2.audio = {}), true === p2.video && (p2.video = {}), p2.audio && ($a(p2.audio, t2), null !== (i2 = (a2 = p2.audio).deviceId) && void 0 !== i2 || (a2.deviceId = { ideal: "default" }), (d2 || u2) && (p2.audio.processor = null != d2 ? d2 : u2)), p2.video && ($a(p2.video, n2), null !== (r2 = (s2 = p2.video).deviceId) && void 0 !== r2 || (s2.deviceId = { ideal: "default" }), (l2 || h2) && (p2.video.processor = null != l2 ? l2 : h2)), p2;
      }
      function $a(e2, t2) {
        return Object.keys(t2).forEach(((n2) => {
          void 0 === e2[n2] && (e2[n2] = t2[n2]);
        })), e2;
      }
      function es(e2) {
        var t2, n2, i2, r2;
        const a2 = {};
        if (e2.video) if ("object" == typeof e2.video) {
          const n3 = {}, r3 = n3, s2 = e2.video;
          Object.keys(s2).forEach(((e3) => {
            if ("resolution" === e3) $a(r3, s2.resolution);
            else r3[e3] = s2[e3];
          })), a2.video = n3, null !== (t2 = (i2 = a2.video).deviceId) && void 0 !== t2 || (i2.deviceId = { ideal: "default" });
        } else a2.video = !!e2.video && { deviceId: { ideal: "default" } };
        else a2.video = false;
        return e2.audio ? "object" == typeof e2.audio ? (a2.audio = e2.audio, null !== (n2 = (r2 = a2.audio).deviceId) && void 0 !== n2 || (r2.deviceId = { ideal: "default" })) : a2.audio = { deviceId: { ideal: "default" } } : a2.audio = false, a2;
      }
      function ts(e2) {
        return Yi(this, arguments, void 0, (function(e3) {
          let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200;
          return (function* () {
            const n2 = ns();
            if (n2) {
              const i2 = n2.createAnalyser();
              i2.fftSize = 2048;
              const r2 = i2.frequencyBinCount, a2 = new Uint8Array(r2);
              n2.createMediaStreamSource(new MediaStream([e3.mediaStreamTrack])).connect(i2), yield fs(t2), i2.getByteTimeDomainData(a2);
              const s2 = a2.some(((e4) => 128 !== e4 && 0 !== e4));
              return n2.close(), !s2;
            }
            return false;
          })();
        }));
      }
      function ns() {
        var e2;
        const t2 = "undefined" != typeof window && (window.AudioContext || window.webkitAudioContext);
        if (t2) {
          const n2 = new t2({ latencyHint: "interactive" });
          if ("suspended" === n2.state && "undefined" != typeof window && (null === (e2 = window.document) || void 0 === e2 ? void 0 : e2.body)) {
            const e3 = () => Yi(this, void 0, void 0, (function* () {
              var t3;
              try {
                "suspended" === n2.state && (yield n2.resume());
              } catch (e4) {
                console.warn("Error trying to auto-resume audio context", e4);
              } finally {
                null === (t3 = window.document.body) || void 0 === t3 || t3.removeEventListener("click", e3);
              }
            }));
            n2.addEventListener("statechange", (() => {
              var t3;
              "closed" === n2.state && (null === (t3 = window.document.body) || void 0 === t3 || t3.removeEventListener("click", e3));
            })), window.document.body.addEventListener("click", e3);
          }
          return n2;
        }
      }
      function is(e2) {
        return "audioinput" === e2 ? ps.Source.Microphone : "videoinput" === e2 ? ps.Source.Camera : ps.Source.Unknown;
      }
      function rs(e2) {
        return e2 === ps.Source.Microphone ? "audioinput" : e2 === ps.Source.Camera ? "videoinput" : void 0;
      }
      function as(e2) {
        var t2, n2;
        let i2 = null === (t2 = e2.video) || void 0 === t2 || t2;
        return e2.resolution && e2.resolution.width > 0 && e2.resolution.height > 0 && (i2 = "boolean" == typeof i2 ? {} : i2, i2 = Ps() ? Object.assign(Object.assign({}, i2), { width: { max: e2.resolution.width }, height: { max: e2.resolution.height }, frameRate: e2.resolution.frameRate }) : Object.assign(Object.assign({}, i2), { width: { ideal: e2.resolution.width }, height: { ideal: e2.resolution.height }, frameRate: e2.resolution.frameRate })), { audio: null !== (n2 = e2.audio) && void 0 !== n2 && n2, video: i2, controller: e2.controller, selfBrowserSurface: e2.selfBrowserSurface, surfaceSwitching: e2.surfaceSwitching, systemAudio: e2.systemAudio, preferCurrentTab: e2.preferCurrentTab };
      }
      function ss(e2) {
        return e2.split("/")[1].toLowerCase();
      }
      function os(e2) {
        const t2 = [];
        return e2.forEach(((e3) => {
          void 0 !== e3.track && t2.push(new qn({ cid: e3.track.mediaStreamID, track: e3.trackInfo }));
        })), t2;
      }
      function cs(e2) {
        return "mediaStreamTrack" in e2 ? { trackID: e2.sid, source: e2.source, muted: e2.isMuted, enabled: e2.mediaStreamTrack.enabled, kind: e2.kind, streamID: e2.mediaStreamID, streamTrackID: e2.mediaStreamTrack.id } : { trackID: e2.trackSid, enabled: e2.isEnabled, muted: e2.isMuted, trackInfo: Object.assign({ mimeType: e2.mimeType, name: e2.trackName, encrypted: e2.isEncrypted, kind: e2.kind, source: e2.source }, e2.track ? cs(e2.track) : {}) };
      }
      function ds(e2) {
        const t2 = Object.assign({}, e2);
        let n2, i2;
        return "object" == typeof t2.audio && t2.audio.processor && (n2 = t2.audio.processor, t2.audio = Object.assign(Object.assign({}, t2.audio), { processor: void 0 })), "object" == typeof t2.video && t2.video.processor && (i2 = t2.video.processor, t2.video = Object.assign(Object.assign({}, t2.video), { processor: void 0 })), { audioProcessor: n2, videoProcessor: i2, optionsWithoutProcessor: (r2 = t2, void 0 === r2 ? r2 : "function" == typeof structuredClone ? "object" == typeof r2 && null !== r2 ? structuredClone(Object.assign({}, r2)) : structuredClone(r2) : JSON.parse(JSON.stringify(r2))) };
        var r2;
      }
      function ls(e2, t2) {
        return e2.width * e2.height < t2.width * t2.height;
      }
      const us = [];
      var hs;
      e.VideoQuality = void 0, (hs = e.VideoQuality || (e.VideoQuality = {}))[hs.LOW = 0] = "LOW", hs[hs.MEDIUM = 1] = "MEDIUM", hs[hs.HIGH = 2] = "HIGH";
      class ps extends ir.EventEmitter {
        get streamState() {
          return this._streamState;
        }
        setStreamState(e2) {
          this._streamState = e2;
        }
        constructor(t2, n2) {
          let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          var r2;
          super(), this.attachedElements = [], this.isMuted = false, this._streamState = ps.StreamState.Active, this.isInBackground = false, this._currentBitrate = 0, this.log = Vi, this.appVisibilityChangedListener = () => {
            this.backgroundTimeout && clearTimeout(this.backgroundTimeout), "hidden" === document.visibilityState ? this.backgroundTimeout = setTimeout((() => this.handleAppVisibilityChanged()), 5e3) : this.handleAppVisibilityChanged();
          }, this.log = Wi(null !== (r2 = i2.loggerName) && void 0 !== r2 ? r2 : e.LoggerNames.Track), this.loggerContextCb = i2.loggerContextCb, this.setMaxListeners(100), this.kind = n2, this._mediaStreamTrack = t2, this._mediaStreamID = t2.id, this.source = ps.Source.Unknown;
        }
        get logContext() {
          var e2;
          return Object.assign(Object.assign({}, null === (e2 = this.loggerContextCb) || void 0 === e2 ? void 0 : e2.call(this)), cs(this));
        }
        get currentBitrate() {
          return this._currentBitrate;
        }
        get mediaStreamTrack() {
          return this._mediaStreamTrack;
        }
        get mediaStreamID() {
          return this._mediaStreamID;
        }
        attach(t2) {
          let n2 = "audio";
          this.kind === ps.Kind.Video && (n2 = "video"), 0 === this.attachedElements.length && this.kind === ps.Kind.Video && this.addAppVisibilityListener(), t2 || ("audio" === n2 && (us.forEach(((e2) => {
            null !== e2.parentElement || t2 || (t2 = e2);
          })), t2 && us.splice(us.indexOf(t2), 1)), t2 || (t2 = document.createElement(n2))), this.attachedElements.includes(t2) || this.attachedElements.push(t2), ms(this.mediaStreamTrack, t2);
          const i2 = t2.srcObject.getTracks(), r2 = i2.some(((e2) => "audio" === e2.kind));
          return t2.play().then((() => {
            this.emit(r2 ? e.TrackEvent.AudioPlaybackStarted : e.TrackEvent.VideoPlaybackStarted);
          })).catch(((n3) => {
            "NotAllowedError" === n3.name ? this.emit(r2 ? e.TrackEvent.AudioPlaybackFailed : e.TrackEvent.VideoPlaybackFailed, n3) : "AbortError" === n3.name ? Vi.debug("".concat(r2 ? "audio" : "video", " playback aborted, likely due to new play request")) : Vi.warn("could not playback ".concat(r2 ? "audio" : "video"), n3), r2 && t2 && i2.some(((e2) => "video" === e2.kind)) && "NotAllowedError" === n3.name && (t2.muted = true, t2.play().catch((() => {
            })));
          })), this.emit(e.TrackEvent.ElementAttached, t2), t2;
        }
        detach(t2) {
          try {
            if (t2) {
              gs(this.mediaStreamTrack, t2);
              const n3 = this.attachedElements.indexOf(t2);
              return n3 >= 0 && (this.attachedElements.splice(n3, 1), this.recycleElement(t2), this.emit(e.TrackEvent.ElementDetached, t2)), t2;
            }
            const n2 = [];
            return this.attachedElements.forEach(((t3) => {
              gs(this.mediaStreamTrack, t3), n2.push(t3), this.recycleElement(t3), this.emit(e.TrackEvent.ElementDetached, t3);
            })), this.attachedElements = [], n2;
          } finally {
            0 === this.attachedElements.length && this.removeAppVisibilityListener();
          }
        }
        stop() {
          this.stopMonitor(), this._mediaStreamTrack.stop();
        }
        enable() {
          this._mediaStreamTrack.enabled = true;
        }
        disable() {
          this._mediaStreamTrack.enabled = false;
        }
        stopMonitor() {
          this.monitorInterval && clearInterval(this.monitorInterval), this.timeSyncHandle && cancelAnimationFrame(this.timeSyncHandle);
        }
        updateLoggerOptions(e2) {
          e2.loggerName && (this.log = Wi(e2.loggerName)), e2.loggerContextCb && (this.loggerContextCb = e2.loggerContextCb);
        }
        recycleElement(e2) {
          if (e2 instanceof HTMLAudioElement) {
            let t2 = true;
            e2.pause(), us.forEach(((e3) => {
              e3.parentElement || (t2 = false);
            })), t2 && us.push(e2);
          }
        }
        handleAppVisibilityChanged() {
          return Yi(this, void 0, void 0, (function* () {
            this.isInBackground = "hidden" === document.visibilityState, this.isInBackground || this.kind !== ps.Kind.Video || setTimeout((() => this.attachedElements.forEach(((e2) => e2.play().catch((() => {
            }))))), 0);
          }));
        }
        addAppVisibilityListener() {
          _s() ? (this.isInBackground = "hidden" === document.visibilityState, document.addEventListener("visibilitychange", this.appVisibilityChangedListener)) : this.isInBackground = false;
        }
        removeAppVisibilityListener() {
          _s() && document.removeEventListener("visibilitychange", this.appVisibilityChangedListener);
        }
      }
      function ms(e2, t2) {
        let n2, i2;
        n2 = t2.srcObject instanceof MediaStream ? t2.srcObject : new MediaStream(), i2 = "audio" === e2.kind ? n2.getAudioTracks() : n2.getVideoTracks(), i2.includes(e2) || (i2.forEach(((e3) => {
          n2.removeTrack(e3);
        })), n2.addTrack(e2)), Ps() && t2 instanceof HTMLVideoElement || (t2.autoplay = true), t2.muted = 0 === n2.getAudioTracks().length, t2 instanceof HTMLVideoElement && (t2.playsInline = true), t2.srcObject !== n2 && (t2.srcObject = n2, (Ps() || ws()) && t2 instanceof HTMLVideoElement && setTimeout((() => {
          t2.srcObject = n2, t2.play().catch((() => {
          }));
        }), 0));
      }
      function gs(e2, t2) {
        if (t2.srcObject instanceof MediaStream) {
          const n2 = t2.srcObject;
          n2.removeTrack(e2), n2.getTracks().length > 0 ? t2.srcObject = n2 : t2.srcObject = null;
        }
      }
      !(function(e2) {
        let t2, n2, i2;
        !(function(e3) {
          e3.Audio = "audio", e3.Video = "video", e3.Unknown = "unknown";
        })(t2 = e2.Kind || (e2.Kind = {})), (function(e3) {
          e3.Camera = "camera", e3.Microphone = "microphone", e3.ScreenShare = "screen_share", e3.ScreenShareAudio = "screen_share_audio", e3.Unknown = "unknown";
        })(n2 = e2.Source || (e2.Source = {})), (function(e3) {
          e3.Active = "active", e3.Paused = "paused", e3.Unknown = "unknown";
        })(i2 = e2.StreamState || (e2.StreamState = {})), e2.kindToProto = function(e3) {
          switch (e3) {
            case t2.Audio:
              return Qe.AUDIO;
            case t2.Video:
              return Qe.VIDEO;
            default:
              return Qe.DATA;
          }
        }, e2.kindFromProto = function(e3) {
          switch (e3) {
            case Qe.AUDIO:
              return t2.Audio;
            case Qe.VIDEO:
              return t2.Video;
            default:
              return t2.Unknown;
          }
        }, e2.sourceToProto = function(e3) {
          switch (e3) {
            case n2.Camera:
              return Ye.CAMERA;
            case n2.Microphone:
              return Ye.MICROPHONE;
            case n2.ScreenShare:
              return Ye.SCREEN_SHARE;
            case n2.ScreenShareAudio:
              return Ye.SCREEN_SHARE_AUDIO;
            default:
              return Ye.UNKNOWN;
          }
        }, e2.sourceFromProto = function(e3) {
          switch (e3) {
            case Ye.CAMERA:
              return n2.Camera;
            case Ye.MICROPHONE:
              return n2.Microphone;
            case Ye.SCREEN_SHARE:
              return n2.ScreenShare;
            case Ye.SCREEN_SHARE_AUDIO:
              return n2.ScreenShareAudio;
            default:
              return n2.Unknown;
          }
        }, e2.streamStateFromProto = function(e3) {
          switch (e3) {
            case wn.ACTIVE:
              return i2.Active;
            case wn.PAUSED:
              return i2.Paused;
            default:
              return i2.Unknown;
          }
        };
      })(ps || (ps = {}));
      const vs = "https://aomediacodec.github.io/av1-rtp-spec/#dependency-descriptor-rtp-header-extension";
      function fs(e2) {
        return new ha(((t2) => ja.setTimeout(t2, e2)));
      }
      function ks() {
        return "addTransceiver" in RTCPeerConnection.prototype;
      }
      function ys() {
        return "addTrack" in RTCPeerConnection.prototype;
      }
      function bs() {
        if (!("getCapabilities" in RTCRtpSender)) return false;
        if (Ps() || ws()) return false;
        const e2 = RTCRtpSender.getCapabilities("video");
        let t2 = false;
        if (e2) {
          for (const n2 of e2.codecs) if ("video/av1" === n2.mimeType.toLowerCase()) {
            t2 = true;
            break;
          }
        }
        return t2;
      }
      function Ts() {
        if (!("getCapabilities" in RTCRtpSender)) return false;
        if (ws()) return false;
        if (Ps()) {
          const e3 = ga();
          if ((null == e3 ? void 0 : e3.version) && Fs(e3.version, "16") < 0) return false;
          if ("iOS" === (null == e3 ? void 0 : e3.os) && (null == e3 ? void 0 : e3.osVersion) && Fs(e3.osVersion, "16") < 0) return false;
        }
        const e2 = RTCRtpSender.getCapabilities("video");
        let t2 = false;
        if (e2) {
          for (const n2 of e2.codecs) if ("video/vp9" === n2.mimeType.toLowerCase()) {
            t2 = true;
            break;
          }
        }
        return t2;
      }
      function Ss(e2) {
        return "av1" === e2 || "vp9" === e2;
      }
      function Es(e2) {
        return !(!document || Is()) && (e2 || (e2 = document.createElement("audio")), "setSinkId" in e2);
      }
      function Cs() {
        return "undefined" != typeof RTCPeerConnection && (ks() || ys());
      }
      function ws() {
        var e2;
        return "Firefox" === (null === (e2 = ga()) || void 0 === e2 ? void 0 : e2.name);
      }
      function Rs() {
        return "undefined" != typeof window && void 0 !== window.RTCRtpScriptTransform && !(function() {
          const e2 = ga();
          return !!e2 && "Chrome" === e2.name && "iOS" !== e2.os;
        })();
      }
      function Ps() {
        var e2;
        return "Safari" === (null === (e2 = ga()) || void 0 === e2 ? void 0 : e2.name);
      }
      function Is() {
        const e2 = ga();
        return "Safari" === (null == e2 ? void 0 : e2.name) || "iOS" === (null == e2 ? void 0 : e2.os);
      }
      function Ds() {
        const e2 = ga();
        return "Safari" === (null == e2 ? void 0 : e2.name) && e2.version.startsWith("17.") || "iOS" === (null == e2 ? void 0 : e2.os) && !!(null == e2 ? void 0 : e2.osVersion) && Fs(e2.osVersion, "17") >= 0;
      }
      function Ms() {
        var e2, t2;
        return !!_s() && (null !== (t2 = null === (e2 = navigator.userAgentData) || void 0 === e2 ? void 0 : e2.mobile) && void 0 !== t2 ? t2 : /Tablet|iPad|Mobile|Android|BlackBerry/.test(navigator.userAgent));
      }
      function _s() {
        return "undefined" != typeof document;
      }
      function Os() {
        return "ReactNative" == navigator.product;
      }
      function As(e2) {
        return e2.hostname.endsWith(".livekit.cloud") || e2.hostname.endsWith(".livekit.run");
      }
      function Ns(e2) {
        return As(e2) ? e2.hostname.split(".")[0] : null;
      }
      function xs() {
        if (global && global.LiveKitReactNativeGlobal) return global.LiveKitReactNativeGlobal;
      }
      function Ls() {
        if (!Os()) return;
        let e2 = xs();
        return e2 ? e2.platform : void 0;
      }
      function Us() {
        if (_s()) return window.devicePixelRatio;
        if (Os()) {
          let e2 = xs();
          if (e2) return e2.devicePixelRatio;
        }
        return 1;
      }
      function Fs(e2, t2) {
        const n2 = e2.split("."), i2 = t2.split("."), r2 = Math.min(n2.length, i2.length);
        for (let e3 = 0; e3 < r2; ++e3) {
          const t3 = parseInt(n2[e3], 10), a2 = parseInt(i2[e3], 10);
          if (t3 > a2) return 1;
          if (t3 < a2) return -1;
          if (e3 === r2 - 1 && t3 === a2) return 0;
        }
        return "" === e2 && "" !== t2 ? -1 : "" === t2 ? 1 : n2.length == i2.length ? 0 : n2.length < i2.length ? -1 : 1;
      }
      function Bs(e2) {
        for (const t2 of e2) t2.target.handleResize(t2);
      }
      function js(e2) {
        for (const t2 of e2) t2.target.handleVisibilityChanged(t2);
      }
      let qs = null;
      const Vs = () => (qs || (qs = new ResizeObserver(Bs)), qs);
      let Hs = null;
      const Ws = () => (Hs || (Hs = new IntersectionObserver(js, { root: null, rootMargin: "0px" })), Hs);
      let Ks, zs;
      function Js() {
        let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16, n2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const r2 = document.createElement("canvas");
        r2.width = e2, r2.height = t2;
        const a2 = r2.getContext("2d");
        null == a2 || a2.fillRect(0, 0, r2.width, r2.height), i2 && a2 && (a2.beginPath(), a2.arc(e2 / 2, t2 / 2, 50, 0, 2 * Math.PI, true), a2.closePath(), a2.fillStyle = "grey", a2.fill());
        const s2 = x(r2.captureStream().getTracks(), 1)[0];
        if (!s2) throw Error("Could not get empty media stream video track");
        return s2.enabled = n2, s2;
      }
      function Gs() {
        if (!zs) {
          const t2 = new AudioContext(), n2 = t2.createOscillator(), i2 = t2.createGain();
          i2.gain.setValueAtTime(0, 0);
          const r2 = t2.createMediaStreamDestination();
          n2.connect(i2), i2.connect(r2), n2.start();
          var e2 = x(r2.stream.getAudioTracks(), 1);
          if (zs = e2[0], !zs) throw Error("Could not get empty media stream audio track");
          zs.enabled = false;
        }
        return zs.clone();
      }
      class Qs {
        get isResolved() {
          return this._isResolved;
        }
        constructor(e2, t2) {
          this._isResolved = false, this.onFinally = t2, this.promise = new Promise(((t3, n2) => Yi(this, void 0, void 0, (function* () {
            this.resolve = t3, this.reject = n2, e2 && (yield e2(t3, n2));
          })))).finally((() => {
            var e3;
            this._isResolved = true, null === (e3 = this.onFinally) || void 0 === e3 || e3.call(this);
          }));
        }
      }
      function Ys(e2) {
        return Wa.includes(e2);
      }
      function Xs(e2) {
        if ("string" == typeof e2 || "number" == typeof e2) return e2;
        if (Array.isArray(e2)) return e2[0];
        if (void 0 !== e2.exact) return Array.isArray(e2.exact) ? e2.exact[0] : e2.exact;
        if (void 0 !== e2.ideal) return Array.isArray(e2.ideal) ? e2.ideal[0] : e2.ideal;
        throw Error("could not unwrap constraint");
      }
      function Zs(e2) {
        return e2.startsWith("ws") ? e2.replace(/^(ws)/, "http") : e2;
      }
      function $s(t2) {
        switch (t2.reason) {
          case e.ConnectionErrorReason.LeaveRequest:
            return t2.context;
          case e.ConnectionErrorReason.Cancelled:
            return et.CLIENT_INITIATED;
          case e.ConnectionErrorReason.NotAllowed:
            return et.USER_REJECTED;
          case e.ConnectionErrorReason.ServerUnreachable:
            return et.JOIN_FAILURE;
          default:
            return et.UNKNOWN_REASON;
        }
      }
      function eo(e2) {
        return void 0 !== e2 ? Number(e2) : void 0;
      }
      function to(e2) {
        return void 0 !== e2 ? BigInt(e2) : void 0;
      }
      function no(e2) {
        return !!e2 && !(e2 instanceof MediaStreamTrack) && e2.isLocal;
      }
      function io(e2) {
        return !!e2 && e2.kind == ps.Kind.Audio;
      }
      function ro(e2) {
        return !!e2 && e2.kind == ps.Kind.Video;
      }
      function ao(e2) {
        return no(e2) && ro(e2);
      }
      function so(e2) {
        return no(e2) && io(e2);
      }
      function oo(e2) {
        return !!e2 && !e2.isLocal;
      }
      function co(e2) {
        return !!e2 && !e2.isLocal;
      }
      function lo(e2) {
        return oo(e2) && ro(e2);
      }
      function uo(e2) {
        return e2.isLocal;
      }
      function ho() {
        return "undefined" != typeof CompressionStream;
      }
      function po(e2, t2) {
        let n2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const i2 = (function(e3, t3) {
          const n3 = new URL((function(e4) {
            return e4.startsWith("http") ? e4.replace(/^(http)/, "ws") : e4;
          })(e3));
          return t3.forEach(((e4, t4) => {
            n3.searchParams.set(t4, e4);
          })), go(n3, "rtc");
        })(e2, t2);
        return n2 ? i2 : go(i2, "v1");
      }
      function mo(e2) {
        return e2.endsWith("/") ? e2 : "".concat(e2, "/");
      }
      function go(e2, t2) {
        return e2.pathname = "".concat(mo(e2.pathname)).concat(t2), e2;
      }
      function vo(e2) {
        if ("string" == typeof e2) return In.fromJson(JSON.parse(e2), { ignoreUnknownFields: true });
        if (e2 instanceof ArrayBuffer) return In.fromBinary(new Uint8Array(e2));
        throw new Error("could not decode websocket message: ".concat(typeof e2));
      }
      const fo = "AES-GCM", ko = "lk_e2ee", yo = { sharedKey: false, ratchetSalt: "LKFrameEncryptionKey", ratchetWindowSize: 8, failureTolerance: 10, keyringSize: 16, keySize: 128 };
      var bo, To;
      function So() {
        return Co() || Eo();
      }
      function Eo() {
        return "undefined" != typeof window && void 0 !== window.RTCRtpScriptTransform;
      }
      function Co() {
        return "undefined" != typeof window && void 0 !== window.RTCRtpSender && void 0 !== window.RTCRtpSender.prototype.createEncodedStreams;
      }
      function wo(e2) {
        return Yi(this, void 0, void 0, (function* () {
          let t2 = new TextEncoder();
          return yield crypto.subtle.importKey("raw", t2.encode(e2), { name: "PBKDF2" }, false, ["deriveBits", "deriveKey"]);
        }));
      }
      function Ro(e2) {
        return Yi(this, void 0, void 0, (function* () {
          return yield crypto.subtle.importKey("raw", e2, "HKDF", false, ["deriveBits", "deriveKey"]);
        }));
      }
      function Po(e2, t2) {
        const n2 = new TextEncoder().encode(t2);
        switch (e2) {
          case "HKDF":
            return { name: "HKDF", salt: n2, hash: "SHA-256", info: new ArrayBuffer(128) };
          case "PBKDF2":
            return { name: "PBKDF2", salt: n2, hash: "SHA-256", iterations: 1e5 };
          default:
            throw new Error("algorithm ".concat(e2, " is currently unsupported"));
        }
      }
      e.KeyProviderEvent = void 0, (bo = e.KeyProviderEvent || (e.KeyProviderEvent = {})).SetKey = "setKey", bo.RatchetRequest = "ratchetRequest", bo.KeyRatcheted = "keyRatcheted", e.KeyHandlerEvent = void 0, (e.KeyHandlerEvent || (e.KeyHandlerEvent = {})).KeyRatcheted = "keyRatcheted", e.EncryptionEvent = void 0, (To = e.EncryptionEvent || (e.EncryptionEvent = {})).ParticipantEncryptionStatusChanged = "participantEncryptionStatusChanged", To.EncryptionError = "encryptionError", e.CryptorEvent = void 0, (e.CryptorEvent || (e.CryptorEvent = {})).Error = "cryptorError";
      function Io(e2) {
        var t2, n2, i2, r2, a2;
        if ("sipDtmf" !== (null === (t2 = e2.value) || void 0 === t2 ? void 0 : t2.case) && "metrics" !== (null === (n2 = e2.value) || void 0 === n2 ? void 0 : n2.case) && "speaker" !== (null === (i2 = e2.value) || void 0 === i2 ? void 0 : i2.case) && "transcription" !== (null === (r2 = e2.value) || void 0 === r2 ? void 0 : r2.case) && "encryptedPacket" !== (null === (a2 = e2.value) || void 0 === a2 ? void 0 : a2.case)) return new St({ value: e2.value });
      }
      class Do extends ir.EventEmitter {
        constructor() {
          let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super(), this.latestManuallySetKeyIndex = 0, this.onKeyRatcheted = (e2, t3, n2) => {
            Vi.debug("key ratcheted event received", { ratchetResult: e2, participantId: t3, keyIndex: n2 });
          }, this.keyInfoMap = /* @__PURE__ */ new Map(), this.options = Object.assign(Object.assign({}, yo), t2), this.on(e.KeyProviderEvent.KeyRatcheted, this.onKeyRatcheted);
        }
        onSetEncryptionKey(t2, n2, i2) {
          const r2 = { key: t2, participantIdentity: n2, keyIndex: i2 };
          if (!this.options.sharedKey && !n2) throw new Error("participant identity needs to be passed for encryption key if sharedKey option is false");
          this.keyInfoMap.set("".concat(null != n2 ? n2 : "shared", "-").concat(null != i2 ? i2 : 0), r2), void 0 !== i2 && (this.latestManuallySetKeyIndex = i2), this.emit(e.KeyProviderEvent.SetKey, r2, void 0 !== i2);
        }
        getKeys() {
          return Array.from(this.keyInfoMap.values());
        }
        getLatestManuallySetKeyIndex() {
          return this.latestManuallySetKeyIndex;
        }
        getOptions() {
          return this.options;
        }
        ratchetKey(t2, n2) {
          this.emit(e.KeyProviderEvent.RatchetRequest, t2, n2);
        }
      }
      var Mo;
      e.CryptorErrorReason = void 0, (Mo = e.CryptorErrorReason || (e.CryptorErrorReason = {}))[Mo.InvalidKey = 0] = "InvalidKey", Mo[Mo.MissingKey = 1] = "MissingKey", Mo[Mo.InternalError = 2] = "InternalError";
      function _o() {
        return Rs();
      }
      function Oo(e2) {
        return !!(null == e2 ? void 0 : e2.worker) && (Co() || _o());
      }
      function Ao(e2) {
        return !(!(null == e2 ? void 0 : e2.timestamp) && !(null == e2 ? void 0 : e2.frameId));
      }
      function No(e2) {
        let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        var i2, r2;
        let a2;
        const s2 = null !== (i2 = n2.isImmediate) && void 0 !== i2 && i2, o2 = null !== (r2 = n2.callback) && void 0 !== r2 && r2, c2 = n2.maxWait;
        let d2 = Date.now(), l2 = [];
        const u2 = function() {
          for (var n3 = arguments.length, i3 = new Array(n3), r3 = 0; r3 < n3; r3++) i3[r3] = arguments[r3];
          const u3 = this;
          return new Promise(((n4, r4) => {
            const h2 = s2 && void 0 === a2;
            if (void 0 !== a2 && ja.clearTimeout(a2), a2 = ja.setTimeout((function() {
              if (a2 = void 0, d2 = Date.now(), !s2) {
                const t3 = e2.apply(u3, i3);
                o2 && o2(t3), l2.forEach(((e3) => (0, e3.resolve)(t3))), l2 = [];
              }
            }), (function() {
              if (void 0 !== c2) {
                const e3 = Date.now() - d2;
                if (e3 + t2 >= c2) return c2 - e3;
              }
              return t2;
            })()), h2) {
              const t3 = e2.apply(u3, i3);
              return o2 && o2(t3), n4(t3);
            }
            l2.push({ resolve: n4, reject: r4 });
          }));
        };
        return u2.cancel = function(e3) {
          void 0 !== a2 && ja.clearTimeout(a2), l2.forEach(((t3) => (0, t3.reject)(e3))), l2 = [];
        }, u2;
      }
      const xo = 2e3;
      function Lo(e2, t2) {
        if (!t2) return 0;
        let n2, i2;
        return "bytesReceived" in e2 ? (n2 = e2.bytesReceived, i2 = t2.bytesReceived) : "bytesSent" in e2 && (n2 = e2.bytesSent, i2 = t2.bytesSent), void 0 === n2 || void 0 === i2 || void 0 === e2.timestamp || void 0 === t2.timestamp ? 0 : 8 * (n2 - i2) * 1e3 / (e2.timestamp - t2.timestamp);
      }
      class Uo extends ps {
        constructor(e2, t2, n2, i2, r2) {
          super(e2, n2, r2), this.sid = t2, this.receiver = i2;
        }
        get isLocal() {
          return false;
        }
        setMuted(t2) {
          this.isMuted !== t2 && (this.isMuted = t2, this._mediaStreamTrack.enabled = !t2, this.emit(t2 ? e.TrackEvent.Muted : e.TrackEvent.Unmuted, this));
        }
        setMediaStream(t2) {
          this.mediaStream = t2;
          const n2 = (i2) => {
            i2.track === this._mediaStreamTrack && (t2.removeEventListener("removetrack", n2), this.receiver && "playoutDelayHint" in this.receiver && (this.receiver.playoutDelayHint = void 0), this.receiver = void 0, this._currentBitrate = 0, this.emit(e.TrackEvent.Ended, this));
          };
          t2.addEventListener("removetrack", n2);
        }
        start() {
          this.startMonitor(), super.enable();
        }
        stop() {
          this.stopMonitor(), super.disable();
        }
        getRTCStatsReport() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            if (!(null === (e2 = this.receiver) || void 0 === e2 ? void 0 : e2.getStats)) return;
            return yield this.receiver.getStats();
          }));
        }
        setPlayoutDelay(e2) {
          this.receiver ? "playoutDelayHint" in this.receiver ? this.receiver.playoutDelayHint = e2 : this.log.warn("Playout delay not supported in this browser") : this.log.warn("Cannot set playout delay, track already ended");
        }
        getPlayoutDelay() {
          if (this.receiver) {
            if ("playoutDelayHint" in this.receiver) return this.receiver.playoutDelayHint;
            this.log.warn("Playout delay not supported in this browser");
          } else this.log.warn("Cannot get playout delay, track already ended");
          return 0;
        }
        startMonitor() {
          this.monitorInterval || (this.monitorInterval = setInterval((() => this.monitorReceiver()), xo)), "undefined" != typeof RTCRtpReceiver && "function" == typeof RTCRtpReceiver.prototype.getSynchronizationSources && this.registerTimeSyncUpdate();
        }
        registerTimeSyncUpdate() {
          const t2 = () => {
            var n2;
            this.timeSyncHandle = requestAnimationFrame((() => t2()));
            const i2 = null === (n2 = this.receiver) || void 0 === n2 ? void 0 : n2.getSynchronizationSources()[0];
            if (i2) {
              const t3 = i2.timestamp, n3 = i2.rtpTimestamp;
              n3 && this.rtpTimestamp !== n3 && (this.emit(e.TrackEvent.TimeSyncUpdate, { timestamp: t3, rtpTimestamp: n3 }), this.rtpTimestamp = n3);
            }
          };
          t2();
        }
      }
      class Fo extends Uo {
        constructor(e2, t2, n2, i2, r2) {
          super(e2, t2, ps.Kind.Video, n2, r2), this.elementInfos = [], this.monitorReceiver = () => Yi(this, void 0, void 0, (function* () {
            if (!this.receiver) return void (this._currentBitrate = 0);
            const e3 = yield this.getReceiverStats();
            e3 && this.prevStats && this.receiver && (this._currentBitrate = Lo(e3, this.prevStats)), this.prevStats = e3;
          })), this.debouncedHandleResize = No((() => {
            this.updateDimensions();
          }), 100), this.adaptiveStreamSettings = i2;
        }
        get isAdaptiveStream() {
          return void 0 !== this.adaptiveStreamSettings;
        }
        lookupFrameMetadata(e2) {
          let t2 = e2.rtpTimestamp;
          var n2;
          return null === (n2 = this.frameMetadataExtractor) || void 0 === n2 ? void 0 : n2.lookupMetadata(t2);
        }
        setStreamState(e2) {
          super.setStreamState(e2), this.log.debug("setStreamState", e2), this.isAdaptiveStream && e2 === ps.StreamState.Active && this.updateVisibility();
        }
        get mediaStreamTrack() {
          return this._mediaStreamTrack;
        }
        setMuted(e2) {
          super.setMuted(e2), this.attachedElements.forEach(((t2) => {
            e2 ? gs(this._mediaStreamTrack, t2) : ms(this._mediaStreamTrack, t2);
          }));
        }
        attach(e2) {
          if (e2 ? super.attach(e2) : e2 = super.attach(), this.adaptiveStreamSettings && void 0 === this.elementInfos.find(((t2) => t2.element === e2))) {
            const t2 = new Bo(e2);
            this.observeElementInfo(t2);
          }
          return e2;
        }
        observeElementInfo(e2) {
          this.adaptiveStreamSettings && void 0 === this.elementInfos.find(((t2) => t2 === e2)) ? (e2.handleResize = () => {
            this.debouncedHandleResize();
          }, e2.handleVisibilityChanged = () => {
            this.updateVisibility();
          }, this.elementInfos.push(e2), e2.observe(), this.debouncedHandleResize(), this.updateVisibility()) : this.log.warn("visibility resize observer not triggered", this.logContext);
        }
        stopObservingElementInfo(e2) {
          if (!this.isAdaptiveStream) return void this.log.warn("stopObservingElementInfo ignored", this.logContext);
          const t2 = this.elementInfos.filter(((t3) => t3 === e2));
          for (const e3 of t2) e3.stopObserving();
          this.elementInfos = this.elementInfos.filter(((t3) => t3 !== e2)), this.updateVisibility(), this.debouncedHandleResize();
        }
        detach(e2) {
          if (e2) return this.stopObservingElement(e2), super.detach(e2);
          const t2 = super.detach();
          for (const e3 of t2) this.stopObservingElement(e3);
          return t2;
        }
        getDecoderImplementation() {
          var e2;
          return null === (e2 = this.prevStats) || void 0 === e2 ? void 0 : e2.decoderImplementation;
        }
        getReceiverStats() {
          return Yi(this, void 0, void 0, (function* () {
            if (!this.receiver || !this.receiver.getStats) return;
            const e2 = yield this.receiver.getStats();
            let t2, n2 = "", i2 = /* @__PURE__ */ new Map();
            return e2.forEach(((e3) => {
              "inbound-rtp" === e3.type ? (n2 = e3.codecId, t2 = { type: "video", streamId: e3.id, framesDecoded: e3.framesDecoded, framesDropped: e3.framesDropped, framesReceived: e3.framesReceived, packetsReceived: e3.packetsReceived, packetsLost: e3.packetsLost, frameWidth: e3.frameWidth, frameHeight: e3.frameHeight, pliCount: e3.pliCount, firCount: e3.firCount, nackCount: e3.nackCount, jitter: e3.jitter, timestamp: e3.timestamp, bytesReceived: e3.bytesReceived, decoderImplementation: e3.decoderImplementation }) : "codec" === e3.type && i2.set(e3.id, e3);
            })), t2 && "" !== n2 && i2.get(n2) && (t2.mimeType = i2.get(n2).mimeType), t2;
          }));
        }
        stopObservingElement(e2) {
          const t2 = this.elementInfos.filter(((t3) => t3.element === e2));
          for (const e3 of t2) this.stopObservingElementInfo(e3);
        }
        handleAppVisibilityChanged() {
          const e2 = Object.create(null, { handleAppVisibilityChanged: { get: () => super.handleAppVisibilityChanged } });
          return Yi(this, void 0, void 0, (function* () {
            yield e2.handleAppVisibilityChanged.call(this), this.isAdaptiveStream && this.updateVisibility();
          }));
        }
        updateVisibility(t2) {
          var n2, i2;
          const r2 = this.elementInfos.reduce(((e2, t3) => Math.max(e2, t3.visibilityChangedAt || 0)), 0), a2 = !(null !== (i2 = null === (n2 = this.adaptiveStreamSettings) || void 0 === n2 ? void 0 : n2.pauseVideoInBackground) && void 0 !== i2 && !i2) && this.isInBackground, s2 = this.elementInfos.some(((e2) => e2.pictureInPicture)), o2 = this.elementInfos.some(((e2) => e2.visible)) && !a2 || s2;
          (this.lastVisible !== o2 || t2) && (!o2 && Date.now() - r2 < 100 ? ja.setTimeout((() => {
            this.updateVisibility();
          }), 100) : (this.lastVisible = o2, this.emit(e.TrackEvent.VisibilityChanged, o2, this)));
        }
        updateDimensions() {
          var t2, n2;
          let i2 = 0, r2 = 0;
          const a2 = this.getPixelDensity();
          for (const e2 of this.elementInfos) {
            const t3 = e2.width() * a2, n3 = e2.height() * a2;
            t3 + n3 > i2 + r2 && (i2 = t3, r2 = n3);
          }
          (null === (t2 = this.lastDimensions) || void 0 === t2 ? void 0 : t2.width) === i2 && (null === (n2 = this.lastDimensions) || void 0 === n2 ? void 0 : n2.height) === r2 || (this.lastDimensions = { width: i2, height: r2 }, this.emit(e.TrackEvent.VideoDimensionsChanged, this.lastDimensions, this));
        }
        getPixelDensity() {
          var e2;
          const t2 = null === (e2 = this.adaptiveStreamSettings) || void 0 === e2 ? void 0 : e2.pixelDensity;
          if ("screen" === t2) return Us();
          if (!t2) {
            return Us() > 2 ? 2 : 1;
          }
          return t2;
        }
      }
      class Bo {
        get visible() {
          return this.isPiP || this.isIntersecting;
        }
        get pictureInPicture() {
          return this.isPiP;
        }
        constructor(e2, t2) {
          this.onVisibilityChanged = (e3) => {
            var t3;
            const n2 = e3.target, i2 = e3.isIntersecting;
            n2 === this.element && (this.isIntersecting = i2, this.isPiP = jo(this.element), this.visibilityChangedAt = Date.now(), null === (t3 = this.handleVisibilityChanged) || void 0 === t3 || t3.call(this));
          }, this.onEnterPiP = () => {
            var e3, t3;
            null === (t3 = null === (e3 = window.documentPictureInPicture) || void 0 === e3 ? void 0 : e3.window) || void 0 === t3 || t3.addEventListener("pagehide", this.onLeavePiP), queueMicrotask((() => {
              requestAnimationFrame((() => {
                var e4;
                this.isPiP = jo(this.element), null === (e4 = this.handleVisibilityChanged) || void 0 === e4 || e4.call(this);
              }));
            }));
          }, this.onLeavePiP = () => {
            var e3;
            this.isPiP = jo(this.element), null === (e3 = this.handleVisibilityChanged) || void 0 === e3 || e3.call(this);
          }, this.element = e2, this.isIntersecting = null != t2 ? t2 : qo(e2), this.isPiP = _s() && jo(e2), this.visibilityChangedAt = 0;
        }
        width() {
          return this.element.clientWidth;
        }
        height() {
          return this.element.clientHeight;
        }
        observe() {
          var e2, t2, n2;
          this.isIntersecting = qo(this.element), this.isPiP = jo(this.element), this.element.handleResize = () => {
            var e3;
            null === (e3 = this.handleResize) || void 0 === e3 || e3.call(this);
          }, this.element.handleVisibilityChanged = this.onVisibilityChanged, Ws().observe(this.element), Vs().observe(this.element), this.element.addEventListener("enterpictureinpicture", this.onEnterPiP), this.element.addEventListener("leavepictureinpicture", this.onLeavePiP), null === (e2 = window.documentPictureInPicture) || void 0 === e2 || e2.addEventListener("enter", this.onEnterPiP), null === (n2 = null === (t2 = window.documentPictureInPicture) || void 0 === t2 ? void 0 : t2.window) || void 0 === n2 || n2.addEventListener("pagehide", this.onLeavePiP);
        }
        stopObserving() {
          var e2, t2, n2, i2, r2;
          null === (e2 = Ws()) || void 0 === e2 || e2.unobserve(this.element), null === (t2 = Vs()) || void 0 === t2 || t2.unobserve(this.element), this.element.removeEventListener("enterpictureinpicture", this.onEnterPiP), this.element.removeEventListener("leavepictureinpicture", this.onLeavePiP), null === (n2 = window.documentPictureInPicture) || void 0 === n2 || n2.removeEventListener("enter", this.onEnterPiP), null === (r2 = null === (i2 = window.documentPictureInPicture) || void 0 === i2 ? void 0 : i2.window) || void 0 === r2 || r2.removeEventListener("pagehide", this.onLeavePiP);
        }
      }
      function jo(e2) {
        var t2, n2;
        return document.pictureInPictureElement === e2 || !!(null === (t2 = window.documentPictureInPicture) || void 0 === t2 ? void 0 : t2.window) && qo(e2, null === (n2 = window.documentPictureInPicture) || void 0 === n2 ? void 0 : n2.window);
      }
      function qo(e2, t2) {
        const n2 = t2 || window;
        let i2 = e2.offsetTop, r2 = e2.offsetLeft;
        const a2 = e2.offsetWidth, s2 = e2.offsetHeight, o2 = e2.hidden, c2 = getComputedStyle(e2).display;
        for (; e2.offsetParent; ) i2 += (e2 = e2.offsetParent).offsetTop, r2 += e2.offsetLeft;
        return i2 < n2.pageYOffset + n2.innerHeight && r2 < n2.pageXOffset + n2.innerWidth && i2 + s2 > n2.pageYOffset && r2 + a2 > n2.pageXOffset && !o2 && "none" !== c2;
      }
      class Vo extends ir.EventEmitter {
        constructor(t2, n2) {
          super(), this.decryptDataRequests = /* @__PURE__ */ new Map(), this.encryptDataRequests = /* @__PURE__ */ new Map(), this.onWorkerMessage = (t3) => {
            var n3, i2;
            const r2 = t3.data, a2 = r2.kind, s2 = r2.data;
            switch (a2) {
              case "error":
                if (Vi.error(s2.error.message), s2.uuid) {
                  const e2 = this.decryptDataRequests.get(s2.uuid);
                  if (null == e2 ? void 0 : e2.reject) {
                    e2.reject(s2.error);
                    break;
                  }
                  const t5 = this.encryptDataRequests.get(s2.uuid);
                  if (null == t5 ? void 0 : t5.reject) {
                    t5.reject(s2.error);
                    break;
                  }
                }
                this.emit(e.EncryptionEvent.EncryptionError, s2.error, s2.participantIdentity);
                break;
              case "initAck":
                s2.enabled && this.keyProvider.getKeys().forEach(((e2) => {
                  this.postKey(e2, false);
                }));
                break;
              case "enable":
                if (s2.enabled && this.keyProvider.getKeys().forEach(((e2) => {
                  this.postKey(e2, false);
                })), this.encryptionEnabled !== s2.enabled && s2.participantIdentity === (null === (n3 = this.room) || void 0 === n3 ? void 0 : n3.localParticipant.identity)) this.emit(e.EncryptionEvent.ParticipantEncryptionStatusChanged, s2.enabled, this.room.localParticipant), this.encryptionEnabled = s2.enabled;
                else if (s2.participantIdentity) {
                  const t5 = null === (i2 = this.room) || void 0 === i2 ? void 0 : i2.getParticipantByIdentity(s2.participantIdentity);
                  if (!t5) throw TypeError("couldn't set encryption status, participant not found".concat(s2.participantIdentity));
                  this.emit(e.EncryptionEvent.ParticipantEncryptionStatusChanged, s2.enabled, t5);
                }
                break;
              case "ratchetKey":
                this.keyProvider.emit(e.KeyProviderEvent.KeyRatcheted, s2.ratchetResult, s2.participantIdentity, s2.keyIndex);
                break;
              case "decryptDataResponse":
                const t4 = this.decryptDataRequests.get(s2.uuid);
                (null == t4 ? void 0 : t4.resolve) && t4.resolve(s2);
                break;
              case "encryptDataResponse":
                const r3 = this.encryptDataRequests.get(s2.uuid);
                (null == r3 ? void 0 : r3.resolve) && r3.resolve(s2);
                break;
              case "packetTrailerMetadata":
                this.handleFrameMetadata(s2.trackId, s2.rtpTimestamp, s2.ssrc, s2.metadata);
            }
          }, this.onWorkerError = (t3) => {
            Vi.error("e2ee worker encountered an error:", { error: t3.error }), this.emit(e.EncryptionEvent.EncryptionError, t3.error, void 0);
          }, this.keyProvider = t2.keyProvider, this.worker = t2.worker, this.encryptionEnabled = false, this.dataChannelEncryptionEnabled = n2;
        }
        get isEnabled() {
          return this.encryptionEnabled;
        }
        get isDataChannelEncryptionEnabled() {
          return this.isEnabled && this.dataChannelEncryptionEnabled;
        }
        setup(e2) {
          if (!So()) throw new Ma("tried to setup end-to-end encryption on an unsupported browser");
          if (Vi.info("setting up e2ee"), e2 !== this.room) {
            this.room = e2, this.setupEventListeners(e2, this.keyProvider);
            const t2 = { kind: "init", data: { keyProviderOptions: this.keyProvider.getOptions(), loglevel: Ki.getLevel() } };
            this.worker && (Vi.info("initializing worker", { worker: this.worker }), this.worker.onmessage = this.onWorkerMessage, this.worker.onerror = this.onWorkerError, this.worker.postMessage(t2));
          }
        }
        setParticipantCryptorEnabled(e2, t2) {
          Vi.debug("set e2ee to ".concat(e2, " for participant ").concat(t2)), this.postEnable(e2, t2);
        }
        setSifTrailer(e2) {
          e2 && 0 !== e2.length ? this.postSifTrailer(e2) : Vi.warn("ignoring server sent trailer as it's empty");
        }
        handleFrameMetadata(e2, t2, n2, i2) {
          if (this.room) {
            for (const r2 of [this.room.localParticipant, ...this.room.remoteParticipants.values()]) for (const a2 of r2.trackPublications.values()) if (a2.track && a2.track.mediaStreamID === e2 && a2.track instanceof Fo && a2.track.frameMetadataExtractor) return void a2.track.frameMetadataExtractor.storeMetadata(t2, n2, i2);
          }
        }
        setupEngine(t2) {
          t2.on(e.EngineEvent.RTPVideoMapUpdate, ((e2) => {
            this.postRTPMap(e2);
          }));
        }
        setupEventListeners(t2, n2) {
          t2.on(e.RoomEvent.TrackPublished, ((e2, t3) => this.setParticipantCryptorEnabled(e2.trackInfo.encryption !== ht.NONE, t3.identity))), t2.on(e.RoomEvent.ConnectionStateChanged, ((n3) => {
            n3 === e.ConnectionState.Connected && t2.remoteParticipants.forEach(((e2) => {
              e2.trackPublications.forEach(((t3) => {
                this.setParticipantCryptorEnabled(t3.trackInfo.encryption !== ht.NONE, e2.identity);
              }));
            }));
          })).on(e.RoomEvent.TrackUnsubscribed, ((e2, t3, n3) => {
            var i2;
            const r2 = { kind: "removeTransform", data: { participantIdentity: n3.identity, trackId: e2.mediaStreamID } };
            null === (i2 = this.worker) || void 0 === i2 || i2.postMessage(r2);
          })).on(e.RoomEvent.TrackSubscribed, ((e2, t3, n3) => {
            this.setupE2EEReceiver(e2, n3.identity, t3.trackInfo);
          })).on(e.RoomEvent.SignalConnected, (() => {
            if (!this.room) throw new TypeError("expected room to be present on signal connect");
            const e2 = n2.getLatestManuallySetKeyIndex();
            n2.getKeys().forEach(((t3) => {
              var n3;
              this.postKey(t3, e2 === (null !== (n3 = t3.keyIndex) && void 0 !== n3 ? n3 : 0));
            })), this.setParticipantCryptorEnabled(this.room.localParticipant.isE2EEEnabled, this.room.localParticipant.identity);
          })), t2.localParticipant.on(e.ParticipantEvent.LocalSenderCreated, ((e2, t3) => Yi(this, void 0, void 0, (function* () {
            this.setupE2EESender(t3, e2);
          })))), t2.localParticipant.on(e.ParticipantEvent.LocalTrackPublished, ((e2) => {
            if (!ro(e2.track) || !Is()) return;
            const t3 = { kind: "updateCodec", data: { trackId: e2.track.mediaStreamID, codec: ss(e2.trackInfo.codecs[0].mimeType), participantIdentity: this.room.localParticipant.identity, hasPacketTrailer: false } };
            this.worker.postMessage(t3);
          })), n2.on(e.KeyProviderEvent.SetKey, ((e2, t3) => this.postKey(e2, null == t3 || t3))).on(e.KeyProviderEvent.RatchetRequest, ((e2, t3) => this.postRatchetRequest(e2, t3)));
        }
        encryptData(e2) {
          return Yi(this, void 0, void 0, (function* () {
            if (!this.worker) throw Error("could not encrypt data, worker is missing");
            const t2 = crypto.randomUUID(), n2 = { kind: "encryptDataRequest", data: { uuid: t2, payload: e2, participantIdentity: this.room.localParticipant.identity } }, i2 = new Qs();
            return i2.onFinally = () => {
              this.encryptDataRequests.delete(t2);
            }, this.encryptDataRequests.set(t2, i2), this.worker.postMessage(n2), i2.promise;
          }));
        }
        handleEncryptedData(e2, t2, n2, i2) {
          if (!this.worker) throw Error("could not handle encrypted data, worker is missing");
          const r2 = crypto.randomUUID(), a2 = { kind: "decryptDataRequest", data: { uuid: r2, payload: e2, iv: t2, participantIdentity: n2, keyIndex: i2 } }, s2 = new Qs();
          return s2.onFinally = () => {
            this.decryptDataRequests.delete(r2);
          }, this.decryptDataRequests.set(r2, s2), this.worker.postMessage(a2), s2.promise;
        }
        postRatchetRequest(e2, t2) {
          if (!this.worker) throw Error("could not ratchet key, worker is missing");
          const n2 = { kind: "ratchetRequest", data: { participantIdentity: e2, keyIndex: t2 } };
          this.worker.postMessage(n2);
        }
        postKey(e2, t2) {
          let n2 = e2.key, i2 = e2.participantIdentity, r2 = e2.keyIndex;
          var a2;
          if (!this.worker) throw Error("could not set key, worker is missing");
          const s2 = { kind: "setKey", data: { participantIdentity: i2, isPublisher: i2 === (null === (a2 = this.room) || void 0 === a2 ? void 0 : a2.localParticipant.identity), key: n2, keyIndex: r2, updateCurrentKeyIndex: t2 } };
          this.worker.postMessage(s2);
        }
        postEnable(e2, t2) {
          if (!this.worker) throw new ReferenceError("failed to enable e2ee, worker is not ready");
          {
            const n2 = { kind: "enable", data: { enabled: e2, participantIdentity: t2 } };
            this.worker.postMessage(n2);
          }
        }
        postRTPMap(e2) {
          var t2;
          if (!this.worker) throw TypeError("could not post rtp map, worker is missing");
          if (!(null === (t2 = this.room) || void 0 === t2 ? void 0 : t2.localParticipant.identity)) throw TypeError("could not post rtp map, local participant identity is missing");
          const n2 = { kind: "setRTPMap", data: { map: e2, participantIdentity: this.room.localParticipant.identity } };
          this.worker.postMessage(n2);
        }
        postSifTrailer(e2) {
          if (!this.worker) throw Error("could not post SIF trailer, worker is missing");
          const t2 = { kind: "setSifTrailer", data: { trailer: e2 } };
          this.worker.postMessage(t2);
        }
        setupE2EEReceiver(e2, t2, n2) {
          if (!e2.receiver) return;
          if (!(null == n2 ? void 0 : n2.mimeType) || "" === n2.mimeType) throw new TypeError("MimeType missing from trackInfo, cannot set up E2EE cryptor");
          const i2 = "video" === e2.kind && !!n2.packetTrailerFeatures && n2.packetTrailerFeatures.length > 0;
          this.handleReceiver(e2.receiver, e2.mediaStreamID, t2, "video" === e2.kind ? ss(n2.mimeType) : void 0, i2);
        }
        setupE2EESender(e2, t2) {
          var n2, i2, r2;
          no(e2) && t2 ? this.handleSender(t2, e2.mediaStreamID, void 0, ro(e2) ? null !== (i2 = null === (n2 = e2.publishOptions) || void 0 === n2 ? void 0 : n2.frameMetadata) && void 0 !== i2 ? i2 : null === (r2 = e2.publishOptions) || void 0 === r2 ? void 0 : r2.packetTrailer : void 0) : t2 || Vi.warn("early return because sender is not ready");
        }
        handleReceiver(e2, t2, n2, i2, r2) {
          return Yi(this, void 0, void 0, (function* () {
            if (this.worker) {
              if (Rs()) {
                const a2 = { kind: "decode", participantIdentity: n2, trackId: t2, codec: i2, hasPacketTrailer: r2 };
                e2.transform = new RTCRtpScriptTransform(this.worker, a2);
              } else {
                if (ko in e2 && i2) {
                  const e3 = { kind: "updateCodec", data: { trackId: t2, codec: i2, participantIdentity: n2, hasPacketTrailer: r2 } };
                  return void this.worker.postMessage(e3);
                }
                let a2 = e2.writableStream, s2 = e2.readableStream;
                if (!a2 || !s2) {
                  const t3 = e2.createEncodedStreams();
                  e2.writableStream = t3.writable, a2 = t3.writable, e2.readableStream = t3.readable, s2 = t3.readable;
                }
                const o2 = { kind: "decode", data: { readableStream: s2, writableStream: a2, trackId: t2, codec: i2, participantIdentity: n2, isReuse: ko in e2, hasPacketTrailer: r2 } };
                this.worker.postMessage(o2, [s2, a2]);
              }
              e2[ko] = true;
            }
          }));
        }
        handleSender(e2, t2, n2, i2) {
          var r2;
          if (!(ko in e2) && this.worker) {
            if (!(null === (r2 = this.room) || void 0 === r2 ? void 0 : r2.localParticipant.identity) || "" === this.room.localParticipant.identity) throw TypeError("local identity needs to be known in order to set up encrypted sender");
            if (Rs()) {
              Vi.info("initialize script transform");
              const r3 = { kind: "encode", participantIdentity: this.room.localParticipant.identity, trackId: t2, codec: n2, hasPacketTrailer: Ao(i2), packetTrailer: i2 };
              e2.transform = new RTCRtpScriptTransform(this.worker, r3);
            } else {
              Vi.info("initialize encoded streams");
              const r3 = e2.createEncodedStreams(), a2 = { kind: "encode", data: { readableStream: r3.readable, writableStream: r3.writable, codec: n2, trackId: t2, participantIdentity: this.room.localParticipant.identity, isReuse: false, hasPacketTrailer: Ao(i2), packetTrailer: i2 } };
              this.worker.postMessage(a2, [r3.readable, r3.writable]);
            }
            e2[ko] = true;
          }
        }
      }
      class Ho {
        constructor() {
          this.metadataMap = /* @__PURE__ */ new Map(), this.activeSsrc = 0;
        }
        storeMetadata(e2, t2, n2) {
          for (0 !== this.activeSsrc && this.activeSsrc !== t2 && this.metadataMap.clear(), this.activeSsrc = t2; this.metadataMap.size >= 300; ) {
            const e3 = this.metadataMap.keys().next().value;
            this.metadataMap.delete(e3);
          }
          this.metadataMap.set(e2, n2);
        }
        lookupMetadata(e2) {
          return this.metadataMap.get(e2);
        }
        dispose() {
          this.metadataMap.clear(), this.activeSsrc = 0;
        }
      }
      class Wo {
        constructor(e2) {
          this.extractors = /* @__PURE__ */ new Map(), this.workerPipelines = /* @__PURE__ */ new Map(), this.onWorkerMessage = (e3) => {
            const t2 = e3.data;
            if ("metadata" === t2.kind) {
              const e4 = this.extractors.get(t2.data.trackId);
              e4 && e4.storeMetadata(t2.data.rtpTimestamp, t2.data.ssrc, t2.data.metadata);
            }
          }, this.onWorkerError = (e3) => {
            Vi.error("frame metadata worker encountered an error:", { error: e3.error });
          }, this.worker = null == e2 ? void 0 : e2.worker;
        }
        setup(t2) {
          t2 !== this.room && (this.room = t2, this.worker && (this.worker.onmessage = this.onWorkerMessage, this.worker.onerror = this.onWorkerError, this.worker.postMessage({ kind: "init" })), t2.on(e.RoomEvent.TrackSubscribed, ((e2, t3, n2) => {
            "video" === e2.kind && this.setupReceiver(e2, t3.trackInfo);
          })).on(e.RoomEvent.TrackUnsubscribed, ((e2) => {
            this.teardownTrack(e2);
          })).on(e.RoomEvent.Disconnected, (() => {
            this.cleanup();
          })));
        }
        setupReceiver(e2, t2) {
          var n2, i2, r2;
          const a2 = e2.receiver;
          if (!a2) return;
          if (!(!!(null == t2 ? void 0 : t2.packetTrailerFeatures) && t2.packetTrailerFeatures.length > 0)) return void ((null === (n2 = this.room) || void 0 === n2 ? void 0 : n2.hasE2EESetup) || this.setupPassthroughReceiver(a2, e2.mediaStreamID));
          if (!Oo(this.worker ? { worker: this.worker } : void 0) && !(null === (i2 = this.room) || void 0 === i2 ? void 0 : i2.hasE2EESetup)) return void Vi.warn("frame metadata transform not supported; skipping extraction");
          const s2 = new Ho(), o2 = e2.mediaStreamID;
          this.extractors.set(o2, s2), e2.frameMetadataExtractor = s2, (null === (r2 = this.room) || void 0 === r2 ? void 0 : r2.hasE2EESetup) || this.setupWorkerReceiver(a2, o2, true);
        }
        setupPassthroughReceiver(e2, t2) {
          _o() ? "transform" in e2 && (e2.transform = null) : (this.worker && Oo({ worker: this.worker }) && !this.workerPipelines.has(e2) || this.worker && this.workerPipelines.has(e2)) && this.setupWorkerReceiver(e2, t2, false);
        }
        setupWorkerReceiver(e2, t2) {
          let n2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          const i2 = this.worker;
          if (!i2) return;
          if (_o()) return void (e2.transform = new RTCRtpScriptTransform(i2, { kind: "decode", trackId: t2 }));
          const r2 = this.workerPipelines.get(e2);
          if (r2) {
            const a3 = { kind: "updateTrackId", data: { oldTrackId: r2, newTrackId: t2, hasPacketTrailer: n2 } };
            return i2.postMessage(a3), void this.workerPipelines.set(e2, t2);
          }
          if (!("createEncodedStreams" in e2)) return void Vi.warn("createEncodedStreams not supported");
          let a2;
          try {
            a2 = e2.createEncodedStreams();
          } catch (e3) {
            return void Vi.warn("failed to create encoded streams", { error: e3 });
          }
          const s2 = { kind: "decode", data: { readableStream: a2.readable, writableStream: a2.writable, trackId: t2, hasPacketTrailer: n2 } };
          i2.postMessage(s2, [a2.readable, a2.writable]), this.workerPipelines.set(e2, t2);
        }
        teardownTrack(e2) {
          const t2 = e2.mediaStreamID, n2 = this.extractors.get(t2);
          n2 && (n2.dispose(), this.extractors.delete(t2)), e2 instanceof Fo && (e2.frameMetadataExtractor = void 0);
        }
        cleanup() {
          var e2;
          for (const e3 of this.extractors.values()) e3.dispose();
          this.extractors.clear(), this.workerPipelines.clear(), null === (e2 = this.worker) || void 0 === e2 || e2.terminate();
        }
      }
      const Ko = Wo;
      class zo {
        constructor() {
          this.failedConnectionAttempts = /* @__PURE__ */ new Map(), this.backOffPromises = /* @__PURE__ */ new Map();
        }
        static getInstance() {
          return this._instance || (this._instance = new zo()), this._instance;
        }
        addFailedConnectionAttempt(e2) {
          var t2;
          const n2 = Ns(new URL(e2));
          if (!n2) return;
          let i2 = null !== (t2 = this.failedConnectionAttempts.get(n2)) && void 0 !== t2 ? t2 : 0;
          this.failedConnectionAttempts.set(n2, i2 + 1), this.backOffPromises.set(n2, fs(Math.min(500 * Math.pow(2, i2), 15e3)));
        }
        getBackOffPromise(e2) {
          const t2 = new URL(e2), n2 = t2 && Ns(t2);
          return n2 && this.backOffPromises.get(n2) || Promise.resolve();
        }
        resetFailedConnectionAttempts(e2) {
          const t2 = new URL(e2), n2 = t2 && Ns(t2);
          n2 && (this.failedConnectionAttempts.set(n2, 0), this.backOffPromises.set(n2, Promise.resolve()));
        }
        resetAll() {
          this.backOffPromises.clear(), this.failedConnectionAttempts.clear();
        }
      }
      zo._instance = null;
      const Jo = "default";
      class Go {
        constructor() {
          this._previousDevices = [];
        }
        static getInstance() {
          return void 0 === this.instance && (this.instance = new Go()), this.instance;
        }
        get previousDevices() {
          return this._previousDevices;
        }
        getDevices(e2) {
          return Yi(this, arguments, void 0, (function(e3) {
            var t2 = this;
            let n2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return (function* () {
              var i2;
              if ((null === (i2 = Go.userMediaPromiseMap) || void 0 === i2 ? void 0 : i2.size) > 0) {
                Vi.debug("awaiting getUserMedia promise");
                try {
                  e3 ? yield Go.userMediaPromiseMap.get(e3) : yield Promise.all(Go.userMediaPromiseMap.values());
                } catch (e4) {
                  Vi.warn("error waiting for media permissons");
                }
              }
              let r2 = yield navigator.mediaDevices.enumerateDevices();
              if (n2 && (!Ps() || !t2.hasDeviceInUse(e3))) {
                if (0 === r2.filter(((t3) => t3.kind === e3)).length || r2.some(((t3) => {
                  const n3 = "" === t3.label, i3 = !e3 || t3.kind === e3;
                  return n3 && i3;
                }))) {
                  const t3 = { video: "audioinput" !== e3 && "audiooutput" !== e3, audio: "videoinput" !== e3 && { deviceId: { ideal: "default" } } }, n3 = yield navigator.mediaDevices.getUserMedia(t3);
                  r2 = yield navigator.mediaDevices.enumerateDevices(), n3.getTracks().forEach(((e4) => {
                    e4.stop();
                  }));
                }
              }
              return t2._previousDevices = r2, e3 && (r2 = r2.filter(((t3) => t3.kind === e3))), r2;
            })();
          }));
        }
        normalizeDeviceId(e2, t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            if (t2 !== Jo) return t2;
            const i2 = yield this.getDevices(e2), r2 = i2.find(((e3) => e3.deviceId === Jo));
            if (!r2) return void Vi.warn("could not reliably determine default device");
            const a2 = i2.find(((e3) => e3.deviceId !== Jo && e3.groupId === (null != n2 ? n2 : r2.groupId)));
            if (a2) return null == a2 ? void 0 : a2.deviceId;
            Vi.warn("could not reliably determine default device");
          }));
        }
        hasDeviceInUse(e2) {
          return e2 ? Go.userMediaPromiseMap.has(e2) : Go.userMediaPromiseMap.size > 0;
        }
      }
      Go.mediaDeviceKinds = ["audioinput", "audiooutput", "videoinput"], Go.userMediaPromiseMap = /* @__PURE__ */ new Map();
      const Qo = 65535, Yo = 4294967295;
      class Xo {
        static u16(e2) {
          return new Xo(e2, Qo);
        }
        static u32(e2) {
          return new Xo(e2, Yo);
        }
        constructor(e2, t2) {
          if (this.value = e2, e2 < 0) throw new Error("WrapAroundUnsignedInt: cannot faithfully represent an integer smaller than 0");
          if (t2 > Number.MAX_SAFE_INTEGER) throw new Error("WrapAroundUnsignedInt: cannot faithfully represent an integer bigger than MAX_SAFE_INTEGER.");
          this.maxSize = t2, this.clamp();
        }
        clamp() {
          for (; this.value > this.maxSize; ) this.value -= this.maxSize + 1;
          for (; this.value < 0; ) this.value += this.maxSize + 1;
        }
        clone() {
          return new Xo(this.value, this.maxSize);
        }
        update(e2) {
          this.value = e2(this.value), this.clamp();
        }
        increment() {
          let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          this.update(((t2) => t2 + e2));
        }
        decrement() {
          let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          this.update(((t2) => t2 - e2));
        }
        getThenIncrement() {
          const e2 = this.value;
          return this.increment(), new Xo(e2, this.maxSize);
        }
        isBefore(e2) {
          const t2 = this.value >>> 0, n2 = (e2.value >>> 0) - t2 >>> 0;
          return 0 !== n2 && n2 < this.maxSize + 1;
        }
      }
      class Zo {
        static fromRtpTicks(e2) {
          return new Zo(e2, 9e4);
        }
        static rtpRandom() {
          const e2 = Math.round(Math.random() * Yo);
          return Zo.fromRtpTicks(e2);
        }
        constructor(e2, t2) {
          this.timestamp = Xo.u32(e2), this.rateInHz = t2;
        }
        asTicks() {
          return this.timestamp.value;
        }
        clone() {
          return new Zo(this.timestamp.value, this.rateInHz);
        }
        wrappingAdd(e2) {
          this.timestamp.increment(e2);
        }
        isBefore(e2) {
          return this.timestamp.isBefore(e2.timestamp);
        }
      }
      class $o {
        constructor(e2, t2, n2) {
          this.epoch = t2, this.base = n2, this.previous = n2.clone(), this.rateInHz = e2;
        }
        static startingNow(e2, t2) {
          return new $o(t2, /* @__PURE__ */ new Date(), e2);
        }
        static startingAtTime(e2, t2, n2) {
          return new $o(n2, e2, t2);
        }
        static rtpStartingNow(e2) {
          return $o.startingNow(e2, 9e4);
        }
        static rtpStartingAtTime(e2, t2) {
          return $o.startingAtTime(e2, t2, 9e4);
        }
        now() {
          return this.at(/* @__PURE__ */ new Date());
        }
        at(e2) {
          let t2 = e2.getTime() - this.epoch.getTime(), n2 = $o.durationInMsToTicks(t2, this.rateInHz), i2 = this.base.clone();
          return i2.wrappingAdd(n2), i2.isBefore(this.previous) && (i2 = this.previous), this.previous = i2.clone(), i2.clone();
        }
        static durationInMsToTicks(e2, t2) {
          let n2 = (1e6 * e2 * t2 + 5e8) / 1e9;
          return Math.round(n2);
        }
      }
      function ec(e2) {
        if (e2 instanceof DataView) return e2;
        if (e2 instanceof ArrayBuffer) return new DataView(e2);
        if (e2 instanceof Uint8Array) return new DataView(e2.buffer, e2.byteOffset, e2.byteLength);
        throw new Error("Error coercing ".concat(e2, " to DataView - input was not DataView, ArrayBuffer, or Uint8Array."));
      }
      var tc;
      !(function(e2) {
        e2[e2.Reserved = 0] = "Reserved", e2[e2.TooLarge = 1] = "TooLarge";
      })(tc || (tc = {}));
      class nc extends Ta {
        constructor(e2, t2) {
          super(19, e2), this.name = "DataTrackHandleError", this.reason = t2, this.reasonName = tc[t2];
        }
        isReason(e2) {
          return this.reason === e2;
        }
        static tooLarge() {
          return new nc("Value too large to be a valid track handle", tc.TooLarge);
        }
        static reserved(e2) {
          return new nc("0x".concat(e2.toString(16), " is a reserved value."), tc.Reserved);
        }
      }
      const ic = { fromNumber(e2) {
        if (0 === e2) throw nc.reserved(e2);
        if (e2 > Qo) throw nc.tooLarge();
        return e2;
      } };
      class rc {
        constructor() {
          this.value = 0;
        }
        get() {
          return this.value += 1, this.value > Qo ? null : this.value;
        }
        reset() {
          this.value = 0;
        }
      }
      const ac = { from: (e2) => ({ sid: e2.sid, pubHandle: e2.pubHandle, name: e2.name, usesE2ee: e2.encryption !== ht.NONE }), toProtobuf: (e2) => new gt({ sid: e2.sid, pubHandle: e2.pubHandle, name: e2.name, encryption: e2.usesE2ee ? ht.GCM : ht.NONE }) };
      var sc;
      !(function(e2) {
        e2[e2.WAITING = 0] = "WAITING", e2[e2.RUNNING = 1] = "RUNNING", e2[e2.COMPLETED = 2] = "COMPLETED";
      })(sc || (sc = {}));
      class oc {
        constructor() {
          this.pendingTasks = /* @__PURE__ */ new Map(), this.taskMutex = new r(), this.nextTaskIndex = 0;
        }
        run(e2) {
          return Yi(this, void 0, void 0, (function* () {
            const t2 = { id: this.nextTaskIndex++, enqueuedAt: Date.now(), status: sc.WAITING };
            this.pendingTasks.set(t2.id, t2);
            const n2 = yield this.taskMutex.lock();
            try {
              return t2.executedAt = Date.now(), t2.status = sc.RUNNING, yield e2();
            } finally {
              t2.status = sc.COMPLETED, this.pendingTasks.delete(t2.id), n2();
            }
          }));
        }
        flush() {
          return Yi(this, void 0, void 0, (function* () {
            return this.run((() => Yi(this, void 0, void 0, (function* () {
            }))));
          }));
        }
        snapshot() {
          return Array.from(this.pendingTasks.values());
        }
      }
      class cc {
        get readyState() {
          return this.ws.readyState;
        }
        constructor(e2) {
          let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var n2, i2;
          if (null === (n2 = t2.signal) || void 0 === n2 ? void 0 : n2.aborted) throw new DOMException("This operation was aborted", "AbortError");
          this.url = e2;
          const r2 = new WebSocket(e2, null !== (i2 = t2.protocols) && void 0 !== i2 ? i2 : []);
          r2.binaryType = "arraybuffer", this.ws = r2;
          const a2 = function() {
            let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t3 = e3.closeCode, n3 = e3.reason;
            return r2.close(t3, n3);
          };
          this.opened = new ha(((e3, t3) => {
            const n3 = () => {
              t3(Da.websocket("Encountered websocket error during connection establishment"));
            };
            r2.onopen = () => {
              e3({ readable: new ReadableStream({ start(e4) {
                r2.onmessage = (t4) => {
                  let n4 = t4.data;
                  return e4.enqueue(n4);
                }, r2.onerror = (t4) => e4.error(t4);
              }, cancel: a2 }), writable: new WritableStream({ write(e4) {
                r2.send(e4);
              }, abort() {
                r2.close();
              }, close: a2 }), protocol: r2.protocol, extensions: r2.extensions }), r2.removeEventListener("error", n3);
            }, r2.addEventListener("error", n3);
          })), this.closed = new ha(((e3, t3) => {
            const n3 = () => Yi(this, void 0, void 0, (function* () {
              const n4 = new ha(((e4) => {
                r2.readyState !== WebSocket.CLOSED && r2.addEventListener("close", ((t4) => {
                  e4(t4);
                }), { once: true });
              })), i3 = yield ha.race([fs(250), n4]);
              i3 ? e3(i3) : t3(Da.websocket("Encountered unspecified websocket error without a timely close event"));
            }));
            r2.onclose = (t4) => {
              let i3 = t4.code, a3 = t4.reason;
              e3({ closeCode: i3, reason: a3 }), r2.removeEventListener("error", n3);
            }, r2.addEventListener("error", n3);
          })), t2.signal && (t2.signal.onabort = () => r2.close()), this.close = a2;
        }
      }
      const dc = ["syncState", "trickle", "offer", "answer", "simulate", "leave"];
      var lc;
      !(function(e2) {
        e2[e2.CONNECTING = 0] = "CONNECTING", e2[e2.CONNECTED = 1] = "CONNECTED", e2[e2.RECONNECTING = 2] = "RECONNECTING", e2[e2.DISCONNECTING = 3] = "DISCONNECTING", e2[e2.DISCONNECTED = 4] = "DISCONNECTED";
      })(lc || (lc = {}));
      class uc {
        get currentState() {
          return this.state;
        }
        get isDisconnected() {
          return this.state === lc.DISCONNECTING || this.state === lc.DISCONNECTED;
        }
        get isEstablishingConnection() {
          return this.state === lc.CONNECTING || this.state === lc.RECONNECTING;
        }
        getNextRequestId() {
          return this._requestId += 1, this._requestId;
        }
        constructor() {
          let t2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var i2;
          this.rtt = 0, this.state = lc.DISCONNECTED, this.log = Vi, this._requestId = 0, this.useV0SignalPath = false, this.resetCallbacks = () => {
            this.onAnswer = void 0, this.onLeave = void 0, this.onLocalTrackPublished = void 0, this.onLocalTrackUnpublished = void 0, this.onNegotiateRequested = void 0, this.onOffer = void 0, this.onRemoteMuteChanged = void 0, this.onSubscribedQualityUpdate = void 0, this.onTokenRefresh = void 0, this.onTrickle = void 0, this.onClose = void 0, this.onMediaSectionsRequirement = void 0;
          }, this.loggerContextCb = n2.loggerContextCb, this.log = Wi(null !== (i2 = n2.loggerName) && void 0 !== i2 ? i2 : e.LoggerNames.Signal, (() => this.logContext)), this.useJSON = t2, this.requestQueue = new oc(), this.queuedRequests = [], this.closingLock = new r(), this.connectionLock = new r(), this.state = lc.DISCONNECTED;
        }
        get logContext() {
          var e2, t2;
          return null !== (t2 = null === (e2 = this.loggerContextCb) || void 0 === e2 ? void 0 : e2.call(this)) && void 0 !== t2 ? t2 : {};
        }
        join(e2, t2, n2, i2) {
          return Yi(this, arguments, void 0, (function(e3, t3, n3, i3) {
            var r2 = this;
            let a2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s2 = arguments.length > 5 ? arguments[5] : void 0;
            return (function* () {
              r2.state = lc.CONNECTING, r2.options = n3;
              return yield r2.connect(e3, t3, n3, i3, a2, s2);
            })();
          }));
        }
        reconnect(e2, t2, n2, i2) {
          return Yi(this, void 0, void 0, (function* () {
            if (!this.options) return void this.log.warn("attempted to reconnect without signal options being set, ignoring");
            this.state = lc.RECONNECTING, this.clearPingInterval();
            return yield this.connect(e2, t2, Object.assign(Object.assign({}, this.options), { reconnect: true, sid: n2, reconnectReason: i2 }), void 0, this.useV0SignalPath);
          }));
        }
        connect(e2, t2, n2, i2) {
          return Yi(this, arguments, void 0, (function(e3, t3, n3, i3) {
            var r2 = this;
            let a2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s2 = arguments.length > 5 ? arguments[5] : void 0;
            return (function* () {
              const o2 = yield r2.connectionLock.lock();
              r2.connectOptions = n3, r2.useV0SignalPath = a2;
              const c2 = (function(e4) {
                var t4;
                const n4 = new Ut({ capabilities: e4, sdk: Ft.JS, protocol: 17, clientProtocol: 1, version: ya });
                return Os() && (n4.os = null !== (t4 = Ls()) && void 0 !== t4 ? t4 : ""), n4;
              })(n3.clientInfoCapabilities), d2 = a2 ? (function(e4, t4, n4) {
                var i4;
                const r3 = new URLSearchParams();
                r3.set("access_token", e4), n4.reconnect && (r3.set("reconnect", "1"), n4.sid && r3.set("sid", n4.sid));
                r3.set("auto_subscribe", n4.autoSubscribe ? "1" : "0"), r3.set("sdk", Os() ? "reactnative" : "js"), r3.set("version", t4.version), r3.set("protocol", t4.protocol.toString()), r3.set("client_protocol", t4.clientProtocol.toString()), t4.deviceModel && r3.set("device_model", t4.deviceModel);
                t4.os && r3.set("os", t4.os);
                t4.osVersion && r3.set("os_version", t4.osVersion);
                t4.browser && r3.set("browser", t4.browser);
                t4.browserVersion && r3.set("browser_version", t4.browserVersion);
                n4.adaptiveStream && r3.set("adaptive_stream", "1");
                n4.reconnectReason && r3.set("reconnect_reason", n4.reconnectReason.toString());
                (null === (i4 = navigator.connection) || void 0 === i4 ? void 0 : i4.type) && r3.set("network", navigator.connection.type);
                return r3;
              })(t3, c2, n3) : yield (function(e4, t4, n4, i4) {
                return Yi(this, void 0, void 0, (function* () {
                  const r3 = new URLSearchParams();
                  r3.set("access_token", e4);
                  const a3 = new Di({ clientInfo: t4, connectionSettings: new Ii({ autoSubscribe: !!n4.autoSubscribe, adaptiveStream: !!n4.adaptiveStream }), reconnect: !!n4.reconnect, participantSid: n4.sid ? n4.sid : void 0, publisherOffer: i4 });
                  n4.reconnectReason && (a3.reconnectReason = n4.reconnectReason);
                  const s3 = a3.toBinary();
                  let o3, c3;
                  if (ho()) {
                    const e5 = new CompressionStream("gzip"), t5 = e5.writable.getWriter();
                    t5.write(new Uint8Array(s3)), t5.close();
                    const n5 = [], i5 = e5.readable.getReader();
                    for (; ; ) {
                      const e6 = yield i5.read(), t6 = e6.done, r5 = e6.value;
                      if (t6) break;
                      n5.push(r5);
                    }
                    const r4 = n5.reduce(((e6, t6) => e6 + t6.length), 0), a4 = new Uint8Array(r4);
                    let d4 = 0;
                    for (const e6 of n5) a4.set(e6, d4), d4 += e6.length;
                    o3 = a4, c3 = _i.GZIP;
                  } else o3 = s3, c3 = _i.NONE;
                  const d3 = new Mi({ joinRequest: o3, compression: c3 }).toBinary(), l3 = (e5) => {
                    const t5 = Array.from(e5, ((e6) => String.fromCodePoint(e6))).join("");
                    return btoa(t5);
                  };
                  return r3.set("join_request", l3(d3).replace(/\+/g, "-").replace(/\//g, "_")), r3;
                }));
              })(t3, c2, n3, s2), l2 = po(e3, d2, a2).toString(), u2 = (h2 = l2, go(new URL(Zs(h2)), "validate")).toString();
              var h2;
              return new Promise(((e4, t4) => Yi(r2, void 0, void 0, (function* () {
                var r3, a3;
                try {
                  let s3 = false;
                  const o3 = (e5) => Yi(this, void 0, void 0, (function* () {
                    if (s3) return;
                    s3 = true;
                    const n4 = (function(e6) {
                      let t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Unknown reason";
                      if (!(e6 instanceof AbortSignal)) return t5;
                      const n5 = e6.reason;
                      switch (typeof n5) {
                        case "string":
                          return n5;
                        case "object":
                          return n5 instanceof Error ? n5.message : t5;
                        default:
                          return "toString" in n5 ? n5.toString() : t5;
                      }
                    })(e5 instanceof Event ? e5.currentTarget : e5, "Abort handler called");
                    this.streamWriter && !this.isDisconnected ? this.sendLeave().then((() => this.close(n4))).catch(((e6) => {
                      this.log.error(e6), this.close();
                    })) : this.close(), c3(), t4(Da.cancelled(n4));
                  }));
                  null == i3 || i3.addEventListener("abort", o3);
                  const c3 = () => {
                    clearTimeout(d3), null == i3 || i3.removeEventListener("abort", o3);
                  }, d3 = setTimeout((() => {
                    o3(Da.timeout("room connection has timed out (signal)"));
                  }), n3.websocketTimeout), h3 = (e5, t5) => {
                    this.handleSignalConnected(e5, d3, t5);
                  }, p2 = new URL(l2);
                  if (p2.searchParams.has("access_token") && p2.searchParams.set("access_token", "<redacted>"), this.ws) {
                    const e5 = performance.now();
                    yield this.close(false), this.log.debug("closed previous ws connection in ".concat(performance.now() - e5, "ms"));
                  }
                  this.log.info("signal connecting to ".concat(p2), { reconnect: n3.reconnect, reconnectReason: n3.reconnectReason }), this.ws = new cc(l2);
                  try {
                    this.ws.closed.then(((e5) => {
                      var n4;
                      this.isEstablishingConnection && t4(Da.internal("Websocket got closed during a (re)connection attempt: ".concat(e5.reason))), 1e3 !== e5.closeCode && (this.log.warn("websocket closed", { reason: e5.reason, code: e5.closeCode, wasClean: 1e3 === e5.closeCode, state: this.state }), this.state === lc.CONNECTED && this.handleOnClose(null !== (n4 = e5.reason) && void 0 !== n4 ? n4 : "Unexpected WS error"));
                    })).catch(((e5) => {
                      this.isEstablishingConnection && t4(Da.internal("Websocket error during a (re)connection attempt: ".concat(e5)));
                    }));
                    const i4 = yield this.ws.opened.catch(((e5) => Yi(this, void 0, void 0, (function* () {
                      if (this.state === lc.CONNECTED) this.handleWSError(e5), t4(e5);
                      else {
                        this.state = lc.DISCONNECTED, clearTimeout(d3);
                        const n4 = yield this.handleConnectionError(e5, u2);
                        t4(n4);
                      }
                    }))));
                    if (clearTimeout(d3), !i4) return;
                    const s4 = i4.readable.getReader();
                    this.streamWriter = i4.writable.getWriter();
                    const o4 = yield s4.read();
                    if (s4.releaseLock(), !o4.value) throw Da.internal("no message received as first message");
                    const c4 = vo(o4.value), l3 = this.validateFirstMessage(c4, null !== (r3 = n3.reconnect) && void 0 !== r3 && r3);
                    if (!l3.isValid) return void t4(l3.error);
                    "join" === (null === (a3 = c4.message) || void 0 === a3 ? void 0 : a3.case) && (this.pingTimeoutDuration = c4.message.value.pingTimeout, this.pingIntervalDuration = c4.message.value.pingInterval, this.pingTimeoutDuration && this.pingTimeoutDuration > 0 && this.log.debug("ping config", { timeout: this.pingTimeoutDuration, interval: this.pingIntervalDuration }), this.onJoined && this.onJoined(c4.message.value));
                    h3(i4, l3.shouldProcessFirstMessage ? c4 : void 0), e4(l3.response);
                  } catch (e5) {
                    t4(e5);
                  } finally {
                    c3();
                  }
                } finally {
                  o2();
                }
              }))));
            })();
          }));
        }
        startReadingLoop(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            for (t2 && this.handleSignalResponse(t2); ; ) {
              this.signalLatency && (yield fs(this.signalLatency));
              const t3 = yield e2.read(), n2 = t3.done, i2 = t3.value;
              if (n2) break;
              const r2 = vo(i2);
              this.handleSignalResponse(r2);
            }
          }));
        }
        close() {
          return Yi(this, arguments, void 0, (function() {
            var e2 = this;
            let t2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Close method called on signal client";
            return (function* () {
              if ([lc.DISCONNECTING || lc.DISCONNECTED].includes(e2.state)) return void e2.log.debug("ignoring signal close as it's already in disconnecting state");
              const i2 = yield e2.closingLock.lock();
              try {
                if (e2.clearPingInterval(), t2 && (e2.state = lc.DISCONNECTING), e2.ws) {
                  e2.ws.close({ closeCode: 1e3, reason: n2 });
                  const t3 = e2.ws.closed;
                  e2.ws = void 0, e2.streamWriter = void 0, yield Promise.race([t3, fs(250)]);
                }
              } catch (t3) {
                e2.log.debug("websocket error while closing", { error: t3 });
              } finally {
                t2 && (e2.state = lc.DISCONNECTED), i2();
              }
            })();
          }));
        }
        sendOffer(e2, t2) {
          this.log.debug("sending offer", { offerSdp: e2.sdp }), this.sendRequest({ case: "offer", value: pc(e2, t2) });
        }
        sendAnswer(e2, t2) {
          return this.log.debug("sending answer", { answerSdp: e2.sdp }), this.sendRequest({ case: "answer", value: pc(e2, t2) });
        }
        sendIceCandidate(e2, t2) {
          return this.log.debug("sending ice candidate", { candidate: e2 }), this.sendRequest({ case: "trickle", value: new Un({ candidateInit: JSON.stringify(e2), target: t2 }) });
        }
        sendMuteTrack(e2, t2) {
          return this.sendRequest({ case: "mute", value: new Fn({ sid: e2, muted: t2 }) });
        }
        sendAddTrack(e2) {
          return this.sendRequest({ case: "addTrack", value: e2 });
        }
        sendUpdateLocalMetadata(e2, t2) {
          return Yi(this, arguments, void 0, (function(e3, t3) {
            var n2 = this;
            let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (function* () {
              const r2 = n2.getNextRequestId();
              return yield n2.sendRequest({ case: "updateMetadata", value: new ei({ requestId: r2, metadata: e3, name: t3, attributes: i2 }) }), r2;
            })();
          }));
        }
        sendUpdateTrackSettings(e2) {
          this.sendRequest({ case: "trackSetting", value: e2 });
        }
        sendUpdateSubscription(e2) {
          return this.sendRequest({ case: "subscription", value: e2 });
        }
        sendSyncState(e2) {
          return this.sendRequest({ case: "syncState", value: e2 });
        }
        sendUpdateVideoLayers(e2, t2) {
          return this.sendRequest({ case: "updateLayers", value: new $n({ trackSid: e2, layers: t2 }) });
        }
        sendUpdateSubscriptionPermissions(e2, t2) {
          return this.sendRequest({ case: "subscriptionPermission", value: new pi({ allParticipants: e2, trackPermissions: t2 }) });
        }
        sendSimulateScenario(e2) {
          return this.sendRequest({ case: "simulate", value: e2 });
        }
        sendPing() {
          return Promise.all([this.sendRequest({ case: "ping", value: R.parse(Date.now()) }), this.sendRequest({ case: "pingReq", value: new bi({ timestamp: R.parse(Date.now()), rtt: R.parse(this.rtt) }) })]);
        }
        sendUpdateLocalAudioTrack(e2, t2) {
          return this.sendRequest({ case: "updateAudioTrack", value: new Qn({ trackSid: e2, features: t2 }) });
        }
        sendLeave() {
          return this.sendRequest({ case: "leave", value: new Xn({ reason: et.CLIENT_INITIATED, action: Zn.DISCONNECT }) });
        }
        sendPublishDataTrackRequest(e2, t2, n2) {
          return this.sendRequest({ case: "publishDataTrackRequest", value: new _n({ pubHandle: e2, name: t2, encryption: n2 ? ht.GCM : ht.NONE }) });
        }
        sendUnPublishDataTrackRequest(e2) {
          return this.sendRequest({ case: "unpublishDataTrackRequest", value: new An({ pubHandle: e2 }) });
        }
        sendUpdateDataSubscription(e2, t2) {
          return this.sendRequest({ case: "updateDataSubscription", value: new zn({ updates: [new Jn({ trackSid: e2, subscribe: t2 })] }) });
        }
        sendRequest(e2) {
          return Yi(this, arguments, void 0, (function(e3) {
            var t2 = this;
            let n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return (function* () {
              const i2 = !n2 && !(function(e4) {
                const t3 = dc.indexOf(e4.case) >= 0;
                return Vi.trace("request allowed to bypass queue:", { canPass: t3, req: e4 }), t3;
              })(e3);
              if (i2 && t2.state === lc.RECONNECTING) return void t2.queuedRequests.push((() => Yi(t2, void 0, void 0, (function* () {
                yield this.sendRequest(e3, true);
              }))));
              if (n2 || (yield t2.requestQueue.flush()), t2.signalLatency && (yield fs(t2.signalLatency)), t2.isDisconnected) return void t2.log.debug("skipping signal request (type: ".concat(e3.case, ") - SignalClient disconnected"));
              if (!t2.streamWriter) return void t2.log.error("cannot send signal request before connected, type: ".concat(null == e3 ? void 0 : e3.case));
              const r2 = new Pn({ message: e3 });
              try {
                t2.useJSON ? yield t2.streamWriter.write(r2.toJsonString()) : yield t2.streamWriter.write(r2.toBinary().buffer);
              } catch (e4) {
                t2.log.error("error sending signal message", { error: e4 });
              }
            })();
          }));
        }
        handleSignalResponse(e2) {
          var t2, n2;
          const i2 = e2.message;
          if (null == i2) return void this.log.debug("received unsupported message");
          let r2 = false;
          if ("answer" === i2.case) {
            const e3 = hc(i2.value);
            this.onAnswer && this.onAnswer(e3, i2.value.id, i2.value.midToTrackId);
          } else if ("offer" === i2.case) {
            const e3 = hc(i2.value);
            this.onOffer && this.onOffer(e3, i2.value.id, i2.value.midToTrackId);
          } else if ("trickle" === i2.case) {
            const e3 = JSON.parse(i2.value.candidateInit);
            this.onTrickle && this.onTrickle(e3, i2.value.target);
          } else "update" === i2.case ? this.onParticipantUpdate && this.onParticipantUpdate(null !== (t2 = i2.value.participants) && void 0 !== t2 ? t2 : []) : "trackPublished" === i2.case ? this.onLocalTrackPublished && this.onLocalTrackPublished(i2.value) : "speakersChanged" === i2.case ? this.onSpeakersChanged && this.onSpeakersChanged(null !== (n2 = i2.value.speakers) && void 0 !== n2 ? n2 : []) : "leave" === i2.case ? this.onLeave && this.onLeave(i2.value) : "mute" === i2.case ? this.onRemoteMuteChanged && this.onRemoteMuteChanged(i2.value.sid, i2.value.muted) : "roomUpdate" === i2.case ? this.onRoomUpdate && i2.value.room && this.onRoomUpdate(i2.value.room) : "connectionQuality" === i2.case ? this.onConnectionQuality && this.onConnectionQuality(i2.value) : "streamStateUpdate" === i2.case ? this.onStreamStateUpdate && this.onStreamStateUpdate(i2.value) : "subscribedQualityUpdate" === i2.case ? this.onSubscribedQualityUpdate && this.onSubscribedQualityUpdate(i2.value) : "subscriptionPermissionUpdate" === i2.case ? this.onSubscriptionPermissionUpdate && this.onSubscriptionPermissionUpdate(i2.value) : "refreshToken" === i2.case ? this.onTokenRefresh && this.onTokenRefresh(i2.value) : "trackUnpublished" === i2.case ? this.onLocalTrackUnpublished && this.onLocalTrackUnpublished(i2.value) : "subscriptionResponse" === i2.case ? this.onSubscriptionError && this.onSubscriptionError(i2.value) : "pong" === i2.case || ("pongResp" === i2.case ? (this.rtt = Date.now() - Number.parseInt(i2.value.lastPingTimestamp.toString()), this.resetPingTimeout(), r2 = true) : "requestResponse" === i2.case ? this.onRequestResponse && this.onRequestResponse(i2.value) : "trackSubscribed" === i2.case ? this.onLocalTrackSubscribed && this.onLocalTrackSubscribed(i2.value.trackSid) : "roomMoved" === i2.case ? (this.onTokenRefresh && this.onTokenRefresh(i2.value.token), this.onRoomMoved && this.onRoomMoved(i2.value)) : "mediaSectionsRequirement" === i2.case ? this.onMediaSectionsRequirement && this.onMediaSectionsRequirement(i2.value) : "publishDataTrackResponse" === i2.case ? this.onPublishDataTrackResponse && this.onPublishDataTrackResponse(i2.value) : "unpublishDataTrackResponse" === i2.case ? this.onUnPublishDataTrackResponse && this.onUnPublishDataTrackResponse(i2.value) : "dataTrackSubscriberHandles" === i2.case ? this.onDataTrackSubscriberHandles && this.onDataTrackSubscriberHandles(i2.value) : this.log.debug("unsupported message", { msgCase: i2.case }));
          r2 || this.resetPingTimeout();
        }
        setReconnected() {
          for (; this.queuedRequests.length > 0; ) {
            const e2 = this.queuedRequests.shift();
            e2 && this.requestQueue.run(e2);
          }
        }
        handleOnClose(e2) {
          return Yi(this, void 0, void 0, (function* () {
            if (this.state === lc.DISCONNECTED) return;
            const t2 = this.onClose;
            yield this.close(void 0, e2), this.log.info("websocket connection closed: ".concat(e2), { reason: e2 }), t2 && t2(e2);
          }));
        }
        handleWSError(e2) {
          this.log.error("websocket error", { error: e2 });
        }
        resetPingTimeout() {
          this.clearPingTimeout(), this.pingTimeoutDuration ? this.pingTimeout = ja.setTimeout((() => {
            this.log.warn("ping timeout triggered. last pong received at: ".concat(new Date(Date.now() - 1e3 * this.pingTimeoutDuration).toUTCString())), this.handleOnClose("ping timeout");
          }), 1e3 * this.pingTimeoutDuration) : this.log.warn("ping timeout duration not set");
        }
        clearPingTimeout() {
          this.pingTimeout && ja.clearTimeout(this.pingTimeout);
        }
        startPingInterval() {
          this.clearPingInterval(), this.resetPingTimeout(), this.pingIntervalDuration ? (this.log.debug("start ping interval"), this.pingInterval = ja.setInterval((() => {
            this.sendPing();
          }), 1e3 * this.pingIntervalDuration)) : this.log.warn("ping interval duration not set");
        }
        clearPingInterval() {
          this.log.debug("clearing ping interval"), this.clearPingTimeout(), this.pingInterval && ja.clearInterval(this.pingInterval);
        }
        handleSignalConnected(e2, t2, n2) {
          this.state = lc.CONNECTED, this.log.info("signal connected"), clearTimeout(t2), this.startPingInterval(), this.startReadingLoop(e2.readable.getReader(), n2);
        }
        validateFirstMessage(e2, t2) {
          var n2, i2, r2, a2, s2;
          return "join" === (null === (n2 = e2.message) || void 0 === n2 ? void 0 : n2.case) ? { isValid: true, response: e2.message.value } : this.state === lc.RECONNECTING && "leave" !== (null === (i2 = e2.message) || void 0 === i2 ? void 0 : i2.case) ? "reconnect" === (null === (r2 = e2.message) || void 0 === r2 ? void 0 : r2.case) ? { isValid: true, response: e2.message.value } : (this.log.debug("declaring signal reconnected without reconnect response received"), { isValid: true, response: void 0, shouldProcessFirstMessage: true }) : this.isEstablishingConnection && "leave" === (null === (a2 = e2.message) || void 0 === a2 ? void 0 : a2.case) ? { isValid: false, error: Da.leaveRequest("Received leave request while trying to (re)connect", e2.message.value.reason) } : t2 ? { isValid: false, error: Da.internal("Unexpected first message") } : { isValid: false, error: Da.internal("did not receive join response, got ".concat(null === (s2 = e2.message) || void 0 === s2 ? void 0 : s2.case, " instead")) };
        }
        handleConnectionError(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            try {
              const n2 = yield fetch(t2);
              switch (n2.status) {
                case 404:
                  const e3 = yield n2.text();
                  return e3.includes("requested room does not exist") ? Da.notAllowed(e3, n2.status) : Da.serviceNotFound("v1 RTC path not found. Consider upgrading your LiveKit server version", "v0-rtc");
                case 401:
                case 403:
                  const t3 = yield n2.text();
                  return Da.notAllowed(t3, n2.status);
              }
              return e2 instanceof Da ? e2 : Da.internal("Encountered unknown websocket error during connection: ".concat(e2), { status: n2.status, statusText: n2.statusText });
            } catch (e3) {
              return e3 instanceof Da ? e3 : Da.serverUnreachable(e3 instanceof Error ? e3.message : "server was not reachable");
            }
          }));
        }
      }
      function hc(e2) {
        const t2 = { type: "offer", sdp: e2.sdp };
        switch (e2.type) {
          case "answer":
          case "offer":
          case "pranswer":
          case "rollback":
            t2.type = e2.type;
        }
        return t2;
      }
      function pc(e2, t2) {
        return new Hn({ sdp: e2.sdp, type: e2.type, id: t2 });
      }
      class mc {
        constructor() {
          this.buffer = [], this._totalSize = 0;
        }
        push(e2) {
          this.buffer.push(e2), this._totalSize += e2.data.byteLength;
        }
        pop() {
          const e2 = this.buffer.shift();
          return e2 && (this._totalSize -= e2.data.byteLength), e2;
        }
        getAll() {
          return this.buffer.slice();
        }
        popToSequence(e2) {
          for (; this.buffer.length > 0; ) {
            if (!(this.buffer[0].sequence <= e2)) break;
            this.pop();
          }
        }
        alignBufferedAmount(e2) {
          for (; this.buffer.length > 0; ) {
            const t2 = this.buffer[0];
            if (this._totalSize - t2.data.byteLength <= e2) break;
            this.pop();
          }
        }
        get length() {
          return this.buffer.length;
        }
      }
      class gc {
        constructor(e2) {
          this._map = /* @__PURE__ */ new Map(), this._lastCleanup = 0, this.ttl = e2;
        }
        set(e2, t2) {
          const n2 = Date.now();
          n2 - this._lastCleanup > this.ttl / 2 && this.cleanup();
          const i2 = n2 + this.ttl;
          return this._map.set(e2, { value: t2, expiresAt: i2 }), this;
        }
        get(e2) {
          const t2 = this._map.get(e2);
          if (t2) {
            if (!(t2.expiresAt < Date.now())) return t2.value;
            this._map.delete(e2);
          }
        }
        has(e2) {
          const t2 = this._map.get(e2);
          return !!t2 && (!(t2.expiresAt < Date.now()) || (this._map.delete(e2), false));
        }
        delete(e2) {
          return this._map.delete(e2);
        }
        clear() {
          this._map.clear();
        }
        cleanup() {
          const e2 = Date.now();
          for (const n2 of this._map.entries()) {
            var t2 = x(n2, 2);
            const i2 = t2[0];
            t2[1].expiresAt < e2 && this._map.delete(i2);
          }
          this._lastCleanup = e2;
        }
        get size() {
          return this.cleanup(), this._map.size;
        }
        forEach(e2) {
          this.cleanup();
          for (const n2 of this._map.entries()) {
            var t2 = x(n2, 2);
            const i2 = t2[0], r2 = t2[1];
            r2.expiresAt >= Date.now() && e2(r2.value, i2, this.asValueMap());
          }
        }
        map(e2) {
          this.cleanup();
          const t2 = [], n2 = this.asValueMap();
          for (const r2 of n2.entries()) {
            var i2 = x(r2, 2);
            const a2 = i2[0], s2 = i2[1];
            t2.push(e2(s2, a2, n2));
          }
          return t2;
        }
        asValueMap() {
          const e2 = /* @__PURE__ */ new Map();
          for (const n2 of this._map.entries()) {
            var t2 = x(n2, 2);
            const i2 = t2[0], r2 = t2[1];
            r2.expiresAt >= Date.now() && e2.set(i2, r2.value);
          }
          return e2;
        }
      }
      var vc, fc, kc, yc, bc, Tc = {}, Sc = {}, Ec = { exports: {} };
      function Cc() {
        if (vc) return Ec.exports;
        vc = 1;
        var e2 = Ec.exports = { v: [{ name: "version", reg: /^(\d*)$/ }], o: [{ name: "origin", reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/, names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"], format: "%s %s %d %s IP%d %s" }], s: [{ name: "name" }], i: [{ name: "description" }], u: [{ name: "uri" }], e: [{ name: "email" }], p: [{ name: "phone" }], z: [{ name: "timezones" }], r: [{ name: "repeats" }], t: [{ name: "timing", reg: /^(\d*) (\d*)/, names: ["start", "stop"], format: "%d %d" }], c: [{ name: "connection", reg: /^IN IP(\d) (\S*)/, names: ["version", "ip"], format: "IN IP%d %s" }], b: [{ push: "bandwidth", reg: /^(TIAS|AS|CT|RR|RS):(\d*)/, names: ["type", "limit"], format: "%s:%s" }], m: [{ reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/, names: ["type", "port", "protocol", "payloads"], format: "%s %d %s %s" }], a: [{ push: "rtp", reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/, names: ["payload", "codec", "rate", "encoding"], format: function(e3) {
          return e3.encoding ? "rtpmap:%d %s/%s/%s" : e3.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s";
        } }, { push: "fmtp", reg: /^fmtp:(\d*) ([\S| ]*)/, names: ["payload", "config"], format: "fmtp:%d %s" }, { name: "control", reg: /^control:(.*)/, format: "control:%s" }, { name: "rtcp", reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/, names: ["port", "netType", "ipVer", "address"], format: function(e3) {
          return null != e3.address ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
        } }, { push: "rtcpFbTrrInt", reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/, names: ["payload", "value"], format: "rtcp-fb:%s trr-int %d" }, { push: "rtcpFb", reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/, names: ["payload", "type", "subtype"], format: function(e3) {
          return null != e3.subtype ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
        } }, { push: "ext", reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/, names: ["value", "direction", "encrypt-uri", "uri", "config"], format: function(e3) {
          return "extmap:%d" + (e3.direction ? "/%s" : "%v") + (e3["encrypt-uri"] ? " %s" : "%v") + " %s" + (e3.config ? " %s" : "");
        } }, { name: "extmapAllowMixed", reg: /^(extmap-allow-mixed)/ }, { push: "crypto", reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/, names: ["id", "suite", "config", "sessionConfig"], format: function(e3) {
          return null != e3.sessionConfig ? "crypto:%d %s %s %s" : "crypto:%d %s %s";
        } }, { name: "setup", reg: /^setup:(\w*)/, format: "setup:%s" }, { name: "connectionType", reg: /^connection:(new|existing)/, format: "connection:%s" }, { name: "mid", reg: /^mid:([^\s]*)/, format: "mid:%s" }, { name: "msid", reg: /^msid:(.*)/, format: "msid:%s" }, { name: "ptime", reg: /^ptime:(\d*(?:\.\d*)*)/, format: "ptime:%d" }, { name: "maxptime", reg: /^maxptime:(\d*(?:\.\d*)*)/, format: "maxptime:%d" }, { name: "direction", reg: /^(sendrecv|recvonly|sendonly|inactive)/ }, { name: "icelite", reg: /^(ice-lite)/ }, { name: "iceUfrag", reg: /^ice-ufrag:(\S*)/, format: "ice-ufrag:%s" }, { name: "icePwd", reg: /^ice-pwd:(\S*)/, format: "ice-pwd:%s" }, { name: "fingerprint", reg: /^fingerprint:(\S*) (\S*)/, names: ["type", "hash"], format: "fingerprint:%s %s" }, { push: "candidates", reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/, names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"], format: function(e3) {
          var t2 = "candidate:%s %d %s %d %s %d typ %s";
          return t2 += null != e3.raddr ? " raddr %s rport %d" : "%v%v", t2 += null != e3.tcptype ? " tcptype %s" : "%v", null != e3.generation && (t2 += " generation %d"), t2 += null != e3["network-id"] ? " network-id %d" : "%v", t2 += null != e3["network-cost"] ? " network-cost %d" : "%v";
        } }, { name: "endOfCandidates", reg: /^(end-of-candidates)/ }, { name: "remoteCandidates", reg: /^remote-candidates:(.*)/, format: "remote-candidates:%s" }, { name: "iceOptions", reg: /^ice-options:(\S*)/, format: "ice-options:%s" }, { push: "ssrcs", reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/, names: ["id", "attribute", "value"], format: function(e3) {
          var t2 = "ssrc:%d";
          return null != e3.attribute && (t2 += " %s", null != e3.value && (t2 += ":%s")), t2;
        } }, { push: "ssrcGroups", reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/, names: ["semantics", "ssrcs"], format: "ssrc-group:%s %s" }, { name: "msidSemantic", reg: /^msid-semantic:\s?(\w*) (\S*)/, names: ["semantic", "token"], format: "msid-semantic: %s %s" }, { push: "groups", reg: /^group:(\w*) (.*)/, names: ["type", "mids"], format: "group:%s %s" }, { name: "rtcpMux", reg: /^(rtcp-mux)/ }, { name: "rtcpRsize", reg: /^(rtcp-rsize)/ }, { name: "sctpmap", reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/, names: ["sctpmapNumber", "app", "maxMessageSize"], format: function(e3) {
          return null != e3.maxMessageSize ? "sctpmap:%s %s %s" : "sctpmap:%s %s";
        } }, { name: "xGoogleFlag", reg: /^x-google-flag:([^\s]*)/, format: "x-google-flag:%s" }, { push: "rids", reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/, names: ["id", "direction", "params"], format: function(e3) {
          return e3.params ? "rid:%s %s %s" : "rid:%s %s";
        } }, { push: "imageattrs", reg: new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"), names: ["pt", "dir1", "attrs1", "dir2", "attrs2"], format: function(e3) {
          return "imageattr:%s %s %s" + (e3.dir2 ? " %s %s" : "");
        } }, { name: "simulcast", reg: new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"), names: ["dir1", "list1", "dir2", "list2"], format: function(e3) {
          return "simulcast:%s %s" + (e3.dir2 ? " %s %s" : "");
        } }, { name: "simulcast_03", reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/, names: ["value"], format: "simulcast: %s" }, { name: "framerate", reg: /^framerate:(\d+(?:$|\.\d+))/, format: "framerate:%s" }, { name: "sourceFilter", reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/, names: ["filterMode", "netType", "addressTypes", "destAddress", "srcList"], format: "source-filter: %s %s %s %s %s" }, { name: "bundleOnly", reg: /^(bundle-only)/ }, { name: "label", reg: /^label:(.+)/, format: "label:%s" }, { name: "sctpPort", reg: /^sctp-port:(\d+)$/, format: "sctp-port:%s" }, { name: "maxMessageSize", reg: /^max-message-size:(\d+)$/, format: "max-message-size:%s" }, { push: "tsRefClocks", reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/, names: ["clksrc", "clksrcExt"], format: function(e3) {
          return "ts-refclk:%s" + (null != e3.clksrcExt ? "=%s" : "");
        } }, { name: "mediaClk", reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/, names: ["id", "mediaClockName", "mediaClockValue", "rateNumerator", "rateDenominator"], format: function(e3) {
          var t2 = "mediaclk:";
          return t2 += null != e3.id ? "id=%s %s" : "%v%s", t2 += null != e3.mediaClockValue ? "=%s" : "", t2 += null != e3.rateNumerator ? " rate=%s" : "", t2 += null != e3.rateDenominator ? "/%s" : "";
        } }, { name: "keywords", reg: /^keywds:(.+)$/, format: "keywds:%s" }, { name: "content", reg: /^content:(.+)/, format: "content:%s" }, { name: "bfcpFloorCtrl", reg: /^floorctrl:(c-only|s-only|c-s)/, format: "floorctrl:%s" }, { name: "bfcpConfId", reg: /^confid:(\d+)/, format: "confid:%s" }, { name: "bfcpUserId", reg: /^userid:(\d+)/, format: "userid:%s" }, { name: "bfcpFloorId", reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/, names: ["id", "mStream"], format: "floorid:%s mstrm:%s" }, { push: "invalid", names: ["value"] }] };
        return Object.keys(e2).forEach((function(t2) {
          e2[t2].forEach((function(e3) {
            e3.reg || (e3.reg = /(.*)/), e3.format || (e3.format = "%s");
          }));
        })), Ec.exports;
      }
      function wc() {
        return fc || (fc = 1, (function(e2) {
          var t2 = function(e3) {
            return String(Number(e3)) === e3 ? Number(e3) : e3;
          }, n2 = function(e3, n3, i3) {
            var r3 = e3.name && e3.names;
            e3.push && !n3[e3.push] ? n3[e3.push] = [] : r3 && !n3[e3.name] && (n3[e3.name] = {});
            var a3 = e3.push ? {} : r3 ? n3[e3.name] : n3;
            !(function(e4, n4, i4, r4) {
              if (r4 && !i4) n4[r4] = t2(e4[1]);
              else for (var a4 = 0; a4 < i4.length; a4 += 1) null != e4[a4 + 1] && (n4[i4[a4]] = t2(e4[a4 + 1]));
            })(i3.match(e3.reg), a3, e3.names, e3.name), e3.push && n3[e3.push].push(a3);
          }, i2 = Cc(), r2 = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
          e2.parse = function(e3) {
            var t3 = {}, a3 = [], s2 = t3;
            return e3.split(/(\r\n|\r|\n)/).filter(r2).forEach((function(e4) {
              var t4 = e4[0], r3 = e4.slice(2);
              "m" === t4 && (a3.push({ rtp: [], fmtp: [] }), s2 = a3[a3.length - 1]);
              for (var o2 = 0; o2 < (i2[t4] || []).length; o2 += 1) {
                var c2 = i2[t4][o2];
                if (c2.reg.test(r3)) return n2(c2, s2, r3);
              }
            })), t3.media = a3, t3;
          };
          var a2 = function(e3, n3) {
            var i3 = n3.split(/=(.+)/, 2);
            return 2 === i3.length ? e3[i3[0]] = t2(i3[1]) : 1 === i3.length && n3.length > 1 && (e3[i3[0]] = void 0), e3;
          };
          e2.parseParams = function(e3) {
            return e3.split(/;\s?/).reduce(a2, {});
          }, e2.parseFmtpConfig = e2.parseParams, e2.parsePayloads = function(e3) {
            return e3.toString().split(" ").map(Number);
          }, e2.parseRemoteCandidates = function(e3) {
            for (var n3 = [], i3 = e3.split(" ").map(t2), r3 = 0; r3 < i3.length; r3 += 3) n3.push({ component: i3[r3], ip: i3[r3 + 1], port: i3[r3 + 2] });
            return n3;
          }, e2.parseImageAttributes = function(e3) {
            return e3.split(" ").map((function(e4) {
              return e4.substring(1, e4.length - 1).split(",").reduce(a2, {});
            }));
          }, e2.parseSimulcastStreamList = function(e3) {
            return e3.split(";").map((function(e4) {
              return e4.split(",").map((function(e5) {
                var n3, i3 = false;
                return "~" !== e5[0] ? n3 = t2(e5) : (n3 = t2(e5.substring(1, e5.length)), i3 = true), { scid: n3, paused: i3 };
              }));
            }));
          };
        })(Sc)), Sc;
      }
      function Rc() {
        if (yc) return kc;
        yc = 1;
        var e2 = Cc(), t2 = /%[sdv%]/g, n2 = function(e3) {
          var n3 = 1, i3 = arguments, r3 = i3.length;
          return e3.replace(t2, (function(e4) {
            if (n3 >= r3) return e4;
            var t3 = i3[n3];
            switch (n3 += 1, e4) {
              case "%%":
                return "%";
              case "%s":
                return String(t3);
              case "%d":
                return Number(t3);
              case "%v":
                return "";
            }
          }));
        }, i2 = function(e3, t3, i3) {
          var r3 = [e3 + "=" + (t3.format instanceof Function ? t3.format(t3.push ? i3 : i3[t3.name]) : t3.format)];
          if (t3.names) for (var a3 = 0; a3 < t3.names.length; a3 += 1) {
            var s2 = t3.names[a3];
            t3.name ? r3.push(i3[t3.name][s2]) : r3.push(i3[t3.names[a3]]);
          }
          else r3.push(i3[t3.name]);
          return n2.apply(null, r3);
        }, r2 = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"], a2 = ["i", "c", "b", "a"];
        return kc = function(t3, n3) {
          n3 = n3 || {}, null == t3.version && (t3.version = 0), null == t3.name && (t3.name = " "), t3.media.forEach((function(e3) {
            null == e3.payloads && (e3.payloads = "");
          }));
          var s2 = n3.outerOrder || r2, o2 = n3.innerOrder || a2, c2 = [];
          return s2.forEach((function(n4) {
            e2[n4].forEach((function(e3) {
              e3.name in t3 && null != t3[e3.name] ? c2.push(i2(n4, e3, t3)) : e3.push in t3 && null != t3[e3.push] && t3[e3.push].forEach((function(t4) {
                c2.push(i2(n4, e3, t4));
              }));
            }));
          })), t3.media.forEach((function(t4) {
            c2.push(i2("m", e2.m[0], t4)), o2.forEach((function(n4) {
              e2[n4].forEach((function(e3) {
                e3.name in t4 && null != t4[e3.name] ? c2.push(i2(n4, e3, t4)) : e3.push in t4 && null != t4[e3.push] && t4[e3.push].forEach((function(t5) {
                  c2.push(i2(n4, e3, t5));
                }));
              }));
            }));
          })), c2.join("\r\n") + "\r\n";
        }, kc;
      }
      var Pc = (function() {
        if (bc) return Tc;
        bc = 1;
        var e2 = wc(), t2 = Rc(), n2 = Cc();
        return Tc.grammar = n2, Tc.write = t2, Tc.parse = e2.parse, Tc.parseParams = e2.parseParams, Tc.parseFmtpConfig = e2.parseFmtpConfig, Tc.parsePayloads = e2.parsePayloads, Tc.parseRemoteCandidates = e2.parseRemoteCandidates, Tc.parseImageAttributes = e2.parseImageAttributes, Tc.parseSimulcastStreamList = e2.parseSimulcastStreamList, Tc;
      })();
      const Ic = "negotiationStarted", Dc = "negotiationComplete", Mc = "offerAnswered", _c = "rtpVideoPayloadTypes";
      class Oc extends ir.EventEmitter {
        get pc() {
          return this._pc || (this._pc = this.createPC()), this._pc;
        }
        constructor(t2) {
          let n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var i2;
          super(), this.log = Vi, this.ddExtID = 0, this.latestOfferId = 0, this.latestAcknowledgedOfferId = 0, this.pendingCandidates = [], this.restartingIce = false, this.renegotiate = false, this.trackBitrates = [], this.remoteStereoMids = [], this.remoteNackMids = [], this.negotiate = No(((e2) => Yi(this, void 0, void 0, (function* () {
            this.emit(Ic);
            try {
              yield this.createAndSendOffer();
            } catch (t3) {
              if (!e2) throw t3;
              e2(t3);
            }
          }))), 20), this.close = () => {
            this._pc && (this.pendingInitialOffer = void 0, this._pc.close(), this._pc.onconnectionstatechange = null, this._pc.oniceconnectionstatechange = null, this._pc.onicegatheringstatechange = null, this._pc.ondatachannel = null, this._pc.onnegotiationneeded = null, this._pc.onsignalingstatechange = null, this._pc.onicecandidate = null, this._pc.ondatachannel = null, this._pc.ontrack = null, this._pc.onconnectionstatechange = null, this._pc.oniceconnectionstatechange = null, this._pc = null);
          }, this.log = Wi(null !== (i2 = n2.loggerName) && void 0 !== i2 ? i2 : e.LoggerNames.PCTransport), this.loggerOptions = n2, this.config = t2, this._pc = this.createPC(), this.offerLock = new r();
        }
        createPC() {
          const e2 = new RTCPeerConnection(this.config);
          return e2.onicecandidate = (e3) => {
            var t2;
            e3.candidate && (null === (t2 = this.onIceCandidate) || void 0 === t2 || t2.call(this, e3.candidate));
          }, e2.onicecandidateerror = (e3) => {
            var t2;
            null === (t2 = this.onIceCandidateError) || void 0 === t2 || t2.call(this, e3);
          }, e2.oniceconnectionstatechange = () => {
            var t2;
            null === (t2 = this.onIceConnectionStateChange) || void 0 === t2 || t2.call(this, e2.iceConnectionState);
          }, e2.onsignalingstatechange = () => {
            var t2;
            null === (t2 = this.onSignalingStatechange) || void 0 === t2 || t2.call(this, e2.signalingState);
          }, e2.onconnectionstatechange = () => {
            var t2;
            null === (t2 = this.onConnectionStateChange) || void 0 === t2 || t2.call(this, e2.connectionState);
          }, e2.ondatachannel = (e3) => {
            var t2;
            null === (t2 = this.onDataChannel) || void 0 === t2 || t2.call(this, e3);
          }, e2.ontrack = (e3) => {
            var t2;
            null === (t2 = this.onTrack) || void 0 === t2 || t2.call(this, e3);
          }, e2;
        }
        get logContext() {
          var e2, t2;
          return Object.assign({}, null === (t2 = (e2 = this.loggerOptions).loggerContextCb) || void 0 === t2 ? void 0 : t2.call(e2));
        }
        get isICEConnected() {
          return null !== this._pc && ("connected" === this.pc.iceConnectionState || "completed" === this.pc.iceConnectionState);
        }
        addIceCandidate(e2) {
          return Yi(this, void 0, void 0, (function* () {
            if (this.pc.remoteDescription && !this.restartingIce) return this.pc.addIceCandidate(e2);
            this.pendingCandidates.push(e2);
          }));
        }
        setRemoteDescription(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            var n2, i2;
            if ("answer" === e2.type && this.latestOfferId > 0 && t2 > 0 && t2 !== this.latestOfferId) return this.log.warn("ignoring answer for old offer", Object.assign(Object.assign({}, this.logContext), { offerId: t2, latestOfferId: this.latestOfferId })), false;
            let r2;
            if ("offer" === e2.type) {
              let t3 = (function(e3) {
                var t4;
                const n4 = [], i4 = [], r3 = Pc.parse(null !== (t4 = e3.sdp) && void 0 !== t4 ? t4 : "");
                let a2 = 0;
                return r3.media.forEach(((e4) => {
                  var t5;
                  const r4 = xc(e4.mid);
                  "audio" === e4.type && (e4.rtp.some(((e5) => "opus" === e5.codec && (a2 = e5.payload, true))), (null === (t5 = e4.rtcpFb) || void 0 === t5 ? void 0 : t5.some(((e5) => e5.payload === a2 && "nack" === e5.type))) && i4.push(r4), e4.fmtp.some(((e5) => e5.payload === a2 && (e5.config.includes("sprop-stereo=1") && n4.push(r4), true))));
                })), { stereoMids: n4, nackMids: i4 };
              })(e2), n3 = t3.stereoMids, i3 = t3.nackMids;
              this.remoteStereoMids = n3, this.remoteNackMids = i3;
            } else if ("answer" === e2.type) {
              if (this.pendingInitialOffer && this._pc) {
                const e3 = this.pendingInitialOffer;
                this.pendingInitialOffer = void 0;
                const t4 = Pc.parse(null !== (n2 = e3.sdp) && void 0 !== n2 ? n2 : "");
                t4.media.forEach(((e4) => {
                  Nc(e4);
                })), this.log.debug("setting pending initial offer before processing answer", this.logContext), yield this.setMungedSDP(e3, Pc.write(t4));
              }
              const t3 = Pc.parse(null !== (i2 = e2.sdp) && void 0 !== i2 ? i2 : "");
              t3.media.forEach(((e3) => {
                const t4 = xc(e3.mid);
                "audio" === e3.type && this.trackBitrates.some(((n3) => {
                  if (!n3.transceiver || t4 != n3.transceiver.mid) return false;
                  let i3 = 0;
                  if (e3.rtp.some(((e4) => e4.codec.toUpperCase() === n3.codec.toUpperCase() && (i3 = e4.payload, true))), 0 === i3) return true;
                  let r3 = false;
                  for (const t5 of e3.fmtp) if (t5.payload === i3) {
                    t5.config = t5.config.split(";").filter(((e4) => !e4.includes("maxaveragebitrate"))).join(";"), n3.maxbr > 0 && (t5.config += ";maxaveragebitrate=".concat(1e3 * n3.maxbr)), r3 = true;
                    break;
                  }
                  return r3 || n3.maxbr > 0 && e3.fmtp.push({ payload: i3, config: "maxaveragebitrate=".concat(1e3 * n3.maxbr) }), true;
                }));
              })), r2 = Pc.write(t3);
            }
            if (yield this.setMungedSDP(e2, r2, true), this.pendingCandidates.forEach(((e3) => {
              this.pc.addIceCandidate(e3);
            })), this.pendingCandidates = [], this.restartingIce = false, "answer" === e2.type && (this.latestAcknowledgedOfferId = t2, this.emit(Mc, t2)), this.renegotiate) this.renegotiate = false, yield this.createAndSendOffer();
            else if ("answer" === e2.type && (this.emit(Dc), e2.sdp)) {
              Pc.parse(e2.sdp).media.forEach(((e3) => {
                "video" === e3.type && this.emit(_c, e3.rtp);
              }));
            }
            return true;
          }));
        }
        createInitialOffer() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            const t2 = yield this.offerLock.lock();
            try {
              if ("stable" !== this.pc.signalingState) return void this.log.warn("signaling state is not stable, cannot create initial offer", this.logContext);
              const t3 = this.latestOfferId + 1;
              this.latestOfferId = t3;
              const n2 = yield this.pc.createOffer();
              this.pendingInitialOffer = { sdp: n2.sdp, type: n2.type };
              const i2 = Pc.parse(null !== (e2 = n2.sdp) && void 0 !== e2 ? e2 : "");
              return i2.media.forEach(((e3) => {
                Nc(e3);
              })), n2.sdp = Pc.write(i2), { offer: n2, offerId: t3 };
            } finally {
              t2();
            }
          }));
        }
        createAndSendOffer(e2) {
          return Yi(this, void 0, void 0, (function* () {
            var t2;
            const n2 = yield this.offerLock.lock();
            try {
              if (void 0 === this.onOffer) return;
              if ((null == e2 ? void 0 : e2.iceRestart) && (this.log.debug("restarting ICE", this.logContext), this.restartingIce = true), this._pc && ("have-local-offer" === this._pc.signalingState || this.pendingInitialOffer)) {
                const t3 = this._pc.remoteDescription;
                if (!(null == e2 ? void 0 : e2.iceRestart) || !t3) return this.renegotiate = true, void this.log.debug("requesting renegotiation", Object.assign({}, this.logContext));
                yield this._pc.setRemoteDescription(t3);
              } else if (!this._pc || "closed" === this._pc.signalingState) return void this.log.warn("could not createOffer with closed peer connection", this.logContext);
              this.log.debug("starting to negotiate", this.logContext);
              const n3 = this.latestOfferId + 1;
              this.latestOfferId = n3;
              const i2 = yield this.pc.createOffer(e2);
              this.log.debug("original offer", Object.assign({ sdp: i2.sdp }, this.logContext));
              const r2 = Pc.parse(null !== (t2 = i2.sdp) && void 0 !== t2 ? t2 : "");
              if (r2.media.forEach(((e3) => {
                Nc(e3), "audio" === e3.type ? Ac(e3, ["all"], []) : "video" === e3.type && this.trackBitrates.some(((t3) => {
                  if (!e3.msid || !t3.cid || !e3.msid.includes(t3.cid)) return false;
                  let n4 = 0;
                  if (e3.rtp.some(((e4) => e4.codec.toUpperCase() === t3.codec.toUpperCase() && (n4 = e4.payload, true))), 0 === n4) return true;
                  if (Ss(t3.codec) && !Ps() && this.ensureVideoDDExtensionForSVC(e3, r2), !Ss(t3.codec)) return true;
                  const i3 = Math.round(0.7 * t3.maxbr);
                  for (const t4 of e3.fmtp) if (t4.payload === n4) {
                    t4.config.includes("x-google-start-bitrate") || (t4.config += ";x-google-start-bitrate=".concat(i3));
                    break;
                  }
                  return true;
                }));
              })), this.latestOfferId > n3) return void this.log.warn("latestOfferId mismatch", Object.assign(Object.assign({}, this.logContext), { latestOfferId: this.latestOfferId, offerId: n3 }));
              yield this.setMungedSDP(i2, Pc.write(r2)), this.onOffer(i2, this.latestOfferId);
            } finally {
              n2();
            }
          }));
        }
        createAndSetAnswer() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            const t2 = yield this.pc.createAnswer(), n2 = Pc.parse(null !== (e2 = t2.sdp) && void 0 !== e2 ? e2 : "");
            return n2.media.forEach(((e3) => {
              Nc(e3), "audio" === e3.type && Ac(e3, this.remoteStereoMids, this.remoteNackMids);
            })), yield this.setMungedSDP(t2, Pc.write(n2)), t2;
          }));
        }
        createDataChannel(e2, t2) {
          return this.pc.createDataChannel(e2, t2);
        }
        addTransceiver(e2, t2) {
          return this.pc.addTransceiver(e2, t2);
        }
        addTransceiverOfKind(e2, t2) {
          return this.pc.addTransceiver(e2, t2);
        }
        addTrack(e2) {
          if (!this._pc) throw new Aa("PC closed, cannot add track");
          return this._pc.addTrack(e2);
        }
        setTrackCodecBitrate(e2) {
          this.trackBitrates.push(e2);
        }
        setConfiguration(e2) {
          var t2;
          if (!this._pc) throw new Aa("PC closed, cannot configure");
          return null === (t2 = this._pc) || void 0 === t2 ? void 0 : t2.setConfiguration(e2);
        }
        canRemoveTrack() {
          var e2;
          return !!(null === (e2 = this._pc) || void 0 === e2 ? void 0 : e2.removeTrack);
        }
        removeTrack(e2) {
          var t2;
          return null === (t2 = this._pc) || void 0 === t2 ? void 0 : t2.removeTrack(e2);
        }
        getConnectionState() {
          var e2, t2;
          return null !== (t2 = null === (e2 = this._pc) || void 0 === e2 ? void 0 : e2.connectionState) && void 0 !== t2 ? t2 : "closed";
        }
        getICEConnectionState() {
          var e2, t2;
          return null !== (t2 = null === (e2 = this._pc) || void 0 === e2 ? void 0 : e2.iceConnectionState) && void 0 !== t2 ? t2 : "closed";
        }
        getSignallingState() {
          var e2, t2;
          return null !== (t2 = null === (e2 = this._pc) || void 0 === e2 ? void 0 : e2.signalingState) && void 0 !== t2 ? t2 : "closed";
        }
        getTransceivers() {
          var e2, t2;
          return null !== (t2 = null === (e2 = this._pc) || void 0 === e2 ? void 0 : e2.getTransceivers()) && void 0 !== t2 ? t2 : [];
        }
        getSenders() {
          var e2, t2;
          return null !== (t2 = null === (e2 = this._pc) || void 0 === e2 ? void 0 : e2.getSenders()) && void 0 !== t2 ? t2 : [];
        }
        getLocalDescription() {
          var e2;
          return null === (e2 = this._pc) || void 0 === e2 ? void 0 : e2.localDescription;
        }
        getRemoteDescription() {
          var e2;
          return null === (e2 = this.pc) || void 0 === e2 ? void 0 : e2.remoteDescription;
        }
        getStats() {
          return this.pc.getStats();
        }
        getMaxMessageSize() {
          var e2, t2;
          return null === (t2 = null === (e2 = this._pc) || void 0 === e2 ? void 0 : e2.sctp) || void 0 === t2 ? void 0 : t2.maxMessageSize;
        }
        getConnectedAddress() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            if (!this._pc) return;
            let t2 = "";
            const n2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map();
            if ((yield this._pc.getStats()).forEach(((e3) => {
              switch (e3.type) {
                case "transport":
                  t2 = e3.selectedCandidatePairId;
                  break;
                case "candidate-pair":
                  "" === t2 && e3.selected && (t2 = e3.id), n2.set(e3.id, e3);
                  break;
                case "remote-candidate":
                  i2.set(e3.id, "".concat(e3.address, ":").concat(e3.port));
              }
            })), "" === t2) return;
            const r2 = null === (e2 = n2.get(t2)) || void 0 === e2 ? void 0 : e2.remoteCandidateId;
            return void 0 !== r2 ? i2.get(r2) : void 0;
          }));
        }
        setMungedSDP(e2, t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            var i2, r2;
            const a2 = e2.sdp;
            if (t2) {
              e2.sdp = t2;
              try {
                return this.log.debug("setting munged ".concat(n2 ? "remote" : "local", " description"), this.logContext), void (n2 ? yield this.pc.setRemoteDescription(e2) : yield this.pc.setLocalDescription(e2));
              } catch (n3) {
                this.log.warn("not able to set ".concat(e2.type, ", falling back to unmodified sdp"), Object.assign(Object.assign({}, this.logContext), { error: n3, mungedSdp: t2, originalSdp: a2 })), e2.sdp = a2;
              }
            }
            try {
              n2 ? yield null === (i2 = this._pc) || void 0 === i2 ? void 0 : i2.setRemoteDescription(e2) : yield null === (r2 = this._pc) || void 0 === r2 ? void 0 : r2.setLocalDescription(e2);
            } catch (i3) {
              let r3 = "unknown error";
              i3 instanceof Error ? r3 = i3.message : "string" == typeof i3 && (r3 = i3);
              const s2 = { error: r3, sdp: e2.sdp };
              throw t2 && t2 !== a2 && (s2.mungedSdp = t2), !n2 && this.pc.remoteDescription && (s2.remoteSdp = this.pc.remoteDescription), this.log.error("unable to set ".concat(e2.type), Object.assign(Object.assign({}, this.logContext), { fields: s2 })), new Na(r3);
            }
          }));
        }
        ensureVideoDDExtensionForSVC(e2, t2) {
          var n2, i2;
          if (!(null === (n2 = e2.ext) || void 0 === n2 ? void 0 : n2.some(((e3) => e3.uri === vs)))) {
            if (0 === this.ddExtID) {
              let e3 = 0;
              t2.media.forEach(((t3) => {
                var n3;
                null === (n3 = t3.ext) || void 0 === n3 || n3.forEach(((t4) => {
                  t4.value > e3 && (e3 = t4.value);
                }));
              })), this.ddExtID = e3 + 1;
            }
            null === (i2 = e2.ext) || void 0 === i2 || i2.push({ value: this.ddExtID, uri: vs });
          }
        }
      }
      function Ac(e2, t2, n2) {
        const i2 = xc(e2.mid);
        let r2 = 0;
        e2.rtp.some(((e3) => "opus" === e3.codec && (r2 = e3.payload, true))), r2 > 0 && (e2.rtcpFb || (e2.rtcpFb = []), n2.includes(i2) && !e2.rtcpFb.some(((e3) => e3.payload === r2 && "nack" === e3.type)) && e2.rtcpFb.push({ payload: r2, type: "nack" }), (t2.includes(i2) || 1 === t2.length && "all" === t2[0]) && e2.fmtp.some(((e3) => e3.payload === r2 && (e3.config.includes("stereo=1") || (e3.config += ";stereo=1"), true))));
      }
      function Nc(e2) {
        if (e2.connection) {
          const t2 = e2.connection.ip.indexOf(":") >= 0;
          (4 === e2.connection.version && t2 || 6 === e2.connection.version && !t2) && (e2.connection.ip = "0.0.0.0", e2.connection.version = 4);
        }
      }
      function xc(e2) {
        return "number" == typeof e2 ? e2.toFixed(0) : e2;
      }
      const Lc = "vp8", Uc = { audioPreset: e.AudioPresets.music, dtx: true, red: true, forceStereo: false, simulcast: true, screenShareEncoding: Xa.h1080fps15.encoding, stopMicTrackOnMute: false, videoCodec: Lc, backupCodec: true, preConnectBuffer: false }, Fc = { deviceId: { ideal: "default" }, autoGainControl: true, echoCancellation: true, noiseSuppression: true, voiceIsolation: true }, Bc = { deviceId: { ideal: "default" }, resolution: Qa.h720.resolution }, jc = { adaptiveStream: false, dynacast: false, stopLocalTrackOnUnpublish: true, reconnectPolicy: new Gi(), disconnectOnPageLeave: true, webAudioMix: false, singlePeerConnection: true }, qc = { autoSubscribe: true, maxRetries: 1, peerConnectionTimeout: 15e3, websocketTimeout: 15e3 };
      var Vc;
      !(function(e2) {
        e2[e2.NEW = 0] = "NEW", e2[e2.CONNECTING = 1] = "CONNECTING", e2[e2.CONNECTED = 2] = "CONNECTED", e2[e2.FAILED = 3] = "FAILED", e2[e2.CLOSING = 4] = "CLOSING", e2[e2.CLOSED = 5] = "CLOSED";
      })(Vc || (Vc = {}));
      class Hc {
        get needsPublisher() {
          return this.isPublisherConnectionRequired;
        }
        get needsSubscriber() {
          return this.isSubscriberConnectionRequired;
        }
        get currentState() {
          return this.state;
        }
        get mode() {
          return this._mode;
        }
        constructor(t2, n2, i2) {
          var a2;
          this.peerConnectionTimeout = qc.peerConnectionTimeout, this.log = Vi, this.updateState = () => {
            var e2, t3;
            const n3 = this.state, i3 = this.requiredTransports.map(((e3) => e3.getConnectionState()));
            i3.every(((e3) => "connected" === e3)) ? this.state = Vc.CONNECTED : i3.some(((e3) => "failed" === e3)) ? this.state = Vc.FAILED : i3.some(((e3) => "connecting" === e3)) ? this.state = Vc.CONNECTING : i3.every(((e3) => "closed" === e3)) ? this.state = Vc.CLOSED : i3.some(((e3) => "closed" === e3)) ? this.state = Vc.CLOSING : i3.every(((e3) => "new" === e3)) && (this.state = Vc.NEW), n3 !== this.state && (this.log.debug("pc state change: from ".concat(Vc[n3], " to ").concat(Vc[this.state]), this.logContext), null === (e2 = this.onStateChange) || void 0 === e2 || e2.call(this, this.state, this.publisher.getConnectionState(), null === (t3 = this.subscriber) || void 0 === t3 ? void 0 : t3.getConnectionState()));
          }, this.log = Wi(null !== (a2 = n2.loggerName) && void 0 !== a2 ? a2 : e.LoggerNames.PCManager), this.loggerOptions = n2, this.isPublisherConnectionRequired = "subscriber-primary" !== t2, this.isSubscriberConnectionRequired = "subscriber-primary" === t2, this.publisher = new Oc(i2, n2), this._mode = t2, "publisher-only" !== t2 && (this.subscriber = new Oc(i2, n2), this.subscriber.onConnectionStateChange = this.updateState, this.subscriber.onIceConnectionStateChange = this.updateState, this.subscriber.onSignalingStatechange = this.updateState, this.subscriber.onIceCandidate = (e2) => {
            var t3;
            null === (t3 = this.onIceCandidate) || void 0 === t3 || t3.call(this, e2, Cn.SUBSCRIBER);
          }, this.subscriber.onDataChannel = (e2) => {
            var t3;
            null === (t3 = this.onDataChannel) || void 0 === t3 || t3.call(this, e2);
          }, this.subscriber.onTrack = (e2) => {
            var t3;
            null === (t3 = this.onTrack) || void 0 === t3 || t3.call(this, e2);
          }), this.publisher.onConnectionStateChange = this.updateState, this.publisher.onIceConnectionStateChange = this.updateState, this.publisher.onSignalingStatechange = this.updateState, this.publisher.onIceCandidate = (e2) => {
            var t3;
            null === (t3 = this.onIceCandidate) || void 0 === t3 || t3.call(this, e2, Cn.PUBLISHER);
          }, this.publisher.onTrack = (e2) => {
            var t3;
            null === (t3 = this.onTrack) || void 0 === t3 || t3.call(this, e2);
          }, this.publisher.onOffer = (e2, t3) => {
            var n3;
            null === (n3 = this.onPublisherOffer) || void 0 === n3 || n3.call(this, e2, t3);
          }, this.state = Vc.NEW, this.connectionLock = new r(), this.remoteOfferLock = new r();
        }
        get logContext() {
          var e2, t2;
          return Object.assign({}, null === (t2 = (e2 = this.loggerOptions).loggerContextCb) || void 0 === t2 ? void 0 : t2.call(e2));
        }
        requirePublisher() {
          let e2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.isPublisherConnectionRequired = e2, this.updateState();
        }
        createAndSendPublisherOffer(e2) {
          return this.publisher.createAndSendOffer(e2);
        }
        setPublisherAnswer(e2, t2) {
          return this.publisher.setRemoteDescription(e2, t2);
        }
        removeTrack(e2) {
          return this.publisher.removeTrack(e2);
        }
        close() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            if (this.publisher && "closed" !== this.publisher.getSignallingState()) {
              const e3 = this.publisher;
              for (const t2 of e3.getSenders()) try {
                e3.canRemoveTrack() && e3.removeTrack(t2);
              } catch (e4) {
                this.log.warn("could not removeTrack", Object.assign(Object.assign({}, this.logContext), { error: e4 }));
              }
            }
            yield Promise.all([this.publisher.close(), null === (e2 = this.subscriber) || void 0 === e2 ? void 0 : e2.close()]), this.updateState();
          }));
        }
        triggerIceRestart() {
          return Yi(this, void 0, void 0, (function* () {
            this.subscriber && (this.subscriber.restartingIce = true), this.needsPublisher && (yield this.createAndSendPublisherOffer({ iceRestart: true }));
          }));
        }
        addIceCandidate(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            var n2;
            t2 === Cn.PUBLISHER ? yield this.publisher.addIceCandidate(e2) : yield null === (n2 = this.subscriber) || void 0 === n2 ? void 0 : n2.addIceCandidate(e2);
          }));
        }
        createSubscriberAnswerFromOffer(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            var n2, i2, r2;
            this.log.debug("received server offer", Object.assign(Object.assign({}, this.logContext), { RTCSdpType: e2.type, sdp: e2.sdp, signalingState: null === (n2 = this.subscriber) || void 0 === n2 ? void 0 : n2.getSignallingState().toString() }));
            const a2 = yield this.remoteOfferLock.lock();
            try {
              if (!(yield null === (i2 = this.subscriber) || void 0 === i2 ? void 0 : i2.setRemoteDescription(e2, t2))) return;
              return yield null === (r2 = this.subscriber) || void 0 === r2 ? void 0 : r2.createAndSetAnswer();
            } finally {
              a2();
            }
          }));
        }
        updateConfiguration(e2, t2) {
          var n2;
          this.publisher.setConfiguration(e2), null === (n2 = this.subscriber) || void 0 === n2 || n2.setConfiguration(e2), t2 && this.triggerIceRestart();
        }
        ensurePCTransportConnection(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            var n2;
            const i2 = yield this.connectionLock.lock();
            try {
              this.isPublisherConnectionRequired && "connected" !== this.publisher.getConnectionState() && "connecting" !== this.publisher.getConnectionState() && (this.log.debug("negotiation required, start negotiating", this.logContext), this.publisher.negotiate()), yield Promise.all(null === (n2 = this.requiredTransports) || void 0 === n2 ? void 0 : n2.map(((n3) => this.ensureTransportConnected(n3, e2, t2))));
            } finally {
              i2();
            }
          }));
        }
        negotiate(e2) {
          return Yi(this, void 0, void 0, (function* () {
            return new ha(((t2, n2) => {
              const i2 = this.publisher.latestOfferId;
              if (this.publisher.latestAcknowledgedOfferId > i2) return this.log.debug("negotiation already handled in more recent acknowledged offer", this.logContext), void t2();
              let r2 = false;
              const a2 = () => {
                r2 || (r2 = true, clearTimeout(c2), this.publisher.off(Mc, s2), e2.signal.removeEventListener("abort", o2));
              }, s2 = (e3) => {
                e3 > i2 && (a2(), t2());
              }, o2 = () => {
                a2(), n2(new Na("negotiation aborted"));
              }, c2 = setTimeout((() => {
                a2(), n2(new Na("negotiation timed out"));
              }), this.peerConnectionTimeout);
              e2.signal.addEventListener("abort", o2), this.publisher.on(Mc, s2), this.publisher.negotiate(((e3) => {
                a2(), e3 instanceof Error ? n2(e3) : n2(new Error(String(e3)));
              }));
            }));
          }));
        }
        addPublisherTransceiver(e2, t2) {
          return this.publisher.addTransceiver(e2, t2);
        }
        addPublisherTransceiverOfKind(e2, t2) {
          return this.publisher.addTransceiverOfKind(e2, t2);
        }
        getMidForReceiver(e2) {
          const t2 = (this.subscriber ? this.subscriber.getTransceivers() : this.publisher.getTransceivers()).find(((t3) => t3.receiver === e2));
          return null == t2 ? void 0 : t2.mid;
        }
        getMaxPublisherMessageSize() {
          return this.publisher.getMaxMessageSize();
        }
        addPublisherTrack(e2) {
          return this.publisher.addTrack(e2);
        }
        createPublisherDataChannel(e2, t2) {
          return this.publisher.createDataChannel(e2, t2);
        }
        getConnectedAddress(e2) {
          return e2 === Cn.PUBLISHER || e2 === Cn.SUBSCRIBER ? this.publisher.getConnectedAddress() : this.requiredTransports[0].getConnectedAddress();
        }
        get requiredTransports() {
          const e2 = [];
          return this.isPublisherConnectionRequired && e2.push(this.publisher), this.isSubscriberConnectionRequired && this.subscriber && e2.push(this.subscriber), e2;
        }
        ensureTransportConnected(e2, t2) {
          return Yi(this, arguments, void 0, (function(e3, t3) {
            var n2 = this;
            let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.peerConnectionTimeout;
            return (function* () {
              if ("connected" !== e3.getConnectionState()) return new Promise(((e4, r2) => Yi(n2, void 0, void 0, (function* () {
                const n3 = () => {
                  this.log.warn("abort transport connection", this.logContext), ja.clearTimeout(a2), r2(Da.cancelled("room connection has been cancelled"));
                };
                (null == t3 ? void 0 : t3.signal.aborted) && n3(), null == t3 || t3.signal.addEventListener("abort", n3);
                const a2 = ja.setTimeout((() => {
                  null == t3 || t3.signal.removeEventListener("abort", n3), r2(Da.internal("could not establish pc connection"));
                }), i2);
                for (; this.state !== Vc.CONNECTED; ) if (yield fs(50), null == t3 ? void 0 : t3.signal.aborted) return void r2(Da.cancelled("room connection has been cancelled"));
                ja.clearTimeout(a2), null == t3 || t3.signal.removeEventListener("abort", n3), e4();
              }))));
            })();
          }));
        }
      }
      const Wc = "undefined" != typeof MediaRecorder;
      const Kc = Wc ? MediaRecorder : class {
        constructor() {
          throw new Error("MediaRecorder is not available in this environment");
        }
      };
      class zc extends Kc {
        constructor(e2, t2) {
          if (!Wc) throw new Error("MediaRecorder is not available in this environment");
          let n2, i2;
          super(new MediaStream([e2.mediaStreamTrack]), t2);
          const r2 = () => {
            this.removeEventListener("dataavailable", n2), this.removeEventListener("stop", r2), this.removeEventListener("error", a2), null == i2 || i2.close(), i2 = void 0;
          }, a2 = (e3) => {
            null == i2 || i2.error(e3), this.removeEventListener("dataavailable", n2), this.removeEventListener("stop", r2), this.removeEventListener("error", a2), i2 = void 0;
          };
          this.byteStream = new ReadableStream({ start: (e3) => {
            i2 = e3, n2 = (t3) => Yi(this, void 0, void 0, (function* () {
              let n3;
              if (t3.data.arrayBuffer) {
                const e4 = yield t3.data.arrayBuffer();
                n3 = new Uint8Array(e4);
              } else {
                if (!t3.data.byteArray) throw new Error("no data available!");
                n3 = t3.data.byteArray;
              }
              void 0 !== i2 && e3.enqueue(n3);
            })), this.addEventListener("dataavailable", n2);
          }, cancel: () => {
            r2();
          } }), this.addEventListener("stop", r2), this.addEventListener("error", a2);
        }
      }
      class Jc extends ps {
        get sender() {
          return this._sender;
        }
        set sender(e2) {
          this._sender = e2;
        }
        get constraints() {
          return this._constraints;
        }
        get hasPreConnectBuffer() {
          return !!this.localTrackRecorder;
        }
        constructor(t2, n2, i2) {
          let a2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          super(t2, n2, arguments.length > 4 ? arguments[4] : void 0), this.manuallyStopped = false, this.pendingDeviceChange = false, this._isUpstreamPaused = false, this.handleTrackMuteEvent = () => this.debouncedTrackMuteHandler().catch((() => this.log.debug("track mute bounce got cancelled by an unmute event", this.logContext))), this.debouncedTrackMuteHandler = No((() => Yi(this, void 0, void 0, (function* () {
            yield this.pauseUpstream();
          }))), 5e3), this.handleTrackUnmuteEvent = () => Yi(this, void 0, void 0, (function* () {
            this.debouncedTrackMuteHandler.cancel("unmute"), yield this.resumeUpstream();
          })), this.handleEnded = () => {
            this.isInBackground && (this.reacquireTrack = true), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent), this.emit(e.TrackEvent.Ended, this);
          }, this.reacquireTrack = false, this.providedByUser = a2, this.muteLock = new r(), this.pauseUpstreamLock = new r(), this.trackChangeLock = new r(), this.trackChangeLock.lock().then(((e2) => Yi(this, void 0, void 0, (function* () {
            try {
              yield this.setMediaStreamTrack(t2, true);
            } finally {
              e2();
            }
          })))), this._constraints = t2.getConstraints(), i2 && (this._constraints = i2);
        }
        get id() {
          return this._mediaStreamTrack.id;
        }
        get dimensions() {
          if (this.kind !== ps.Kind.Video) return;
          const e2 = this._mediaStreamTrack.getSettings(), t2 = e2.width, n2 = e2.height;
          return t2 && n2 ? { width: t2, height: n2 } : void 0;
        }
        get isUpstreamPaused() {
          return this._isUpstreamPaused;
        }
        get isUserProvided() {
          return this.providedByUser;
        }
        get mediaStreamTrack() {
          var e2, t2;
          return null !== (t2 = null === (e2 = this.processor) || void 0 === e2 ? void 0 : e2.processedTrack) && void 0 !== t2 ? t2 : this._mediaStreamTrack;
        }
        get isLocal() {
          return true;
        }
        getSourceTrackSettings() {
          return this._mediaStreamTrack.getSettings();
        }
        setMediaStreamTrack(e2, t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            var i2;
            if (e2 === this._mediaStreamTrack && !t2) return;
            let r2;
            if (this._mediaStreamTrack && (this.attachedElements.forEach(((e3) => {
              gs(this._mediaStreamTrack, e3);
            })), this.debouncedTrackMuteHandler.cancel("new-track"), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent)), this.mediaStream = new MediaStream([e2]), e2 && (e2.addEventListener("ended", this.handleEnded), e2.addEventListener("mute", this.handleTrackMuteEvent), e2.addEventListener("unmute", this.handleTrackUnmuteEvent), this._constraints = e2.getConstraints()), this.processor && e2) {
              if (this.log.debug("restarting processor", this.logContext), "unknown" === this.kind) throw TypeError("cannot set processor on track of unknown kind");
              this.processorElement && (ms(e2, this.processorElement), this.processorElement.muted = true), yield this.processor.restart({ track: e2, kind: this.kind, element: this.processorElement, localTrack: this }), r2 = this.processor.processedTrack;
            }
            this.sender && "closed" !== (null === (i2 = this.sender.transport) || void 0 === i2 ? void 0 : i2.state) && (yield this.sender.replaceTrack(null != r2 ? r2 : e2)), this.providedByUser || this._mediaStreamTrack === e2 || this._mediaStreamTrack.stop(), this._mediaStreamTrack = e2, e2 && (this._mediaStreamTrack.enabled = !!n2 || !this.isMuted, yield this.resumeUpstream(), this.attachedElements.forEach(((t3) => {
              ms(null != r2 ? r2 : e2, t3);
            })));
          }));
        }
        waitForDimensions() {
          return Yi(this, arguments, void 0, (function() {
            var e2 = this;
            let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
            return (function* () {
              var n2;
              if (e2.kind === ps.Kind.Audio) throw new Error("cannot get dimensions for audio tracks");
              "iOS" === (null === (n2 = ga()) || void 0 === n2 ? void 0 : n2.os) && (yield fs(10));
              const i2 = Date.now();
              for (; Date.now() - i2 < t2; ) {
                const t3 = e2.dimensions;
                if (t3) return t3;
                yield fs(50);
              }
              throw new _a("unable to get track dimensions after timeout");
            })();
          }));
        }
        setDeviceId(e2) {
          return Yi(this, void 0, void 0, (function* () {
            return this._constraints.deviceId === e2 && this._mediaStreamTrack.getSettings().deviceId === Xs(e2) || (this._constraints.deviceId = e2, this.isMuted ? (this.pendingDeviceChange = true, true) : (yield this.restartTrack(), Xs(e2) === this._mediaStreamTrack.getSettings().deviceId));
          }));
        }
        getDeviceId() {
          return Yi(this, arguments, void 0, (function() {
            var e2 = this;
            let t2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (function* () {
              if (e2.source === ps.Source.ScreenShare) return;
              const n2 = e2._mediaStreamTrack.getSettings(), i2 = n2.deviceId, r2 = n2.groupId, a2 = e2.kind === ps.Kind.Audio ? "audioinput" : "videoinput";
              return t2 ? Go.getInstance().normalizeDeviceId(a2, i2, r2) : i2;
            })();
          }));
        }
        mute() {
          return Yi(this, void 0, void 0, (function* () {
            return this.setTrackMuted(true), this;
          }));
        }
        unmute() {
          return Yi(this, void 0, void 0, (function* () {
            return this.setTrackMuted(false), this;
          }));
        }
        replaceTrack(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            const n2 = yield this.trackChangeLock.lock();
            try {
              if (!this.sender) throw new _a("unable to replace an unpublished track");
              let n3, i2;
              "boolean" == typeof t2 ? n3 = t2 : void 0 !== t2 && (n3 = t2.userProvidedTrack, i2 = t2.stopProcessor), this.providedByUser = null == n3 || n3, this.log.debug("replace MediaStreamTrack", this.logContext), yield this.setMediaStreamTrack(e2), i2 && this.processor && (yield this.internalStopProcessor());
            } finally {
              n2();
            }
            return yield this.onSenderTrackSwapped(), this;
          }));
        }
        onSenderTrackSwapped() {
          return Yi(this, void 0, void 0, (function* () {
          }));
        }
        restart(t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            this.manuallyStopped = false;
            const i2 = yield this.trackChangeLock.lock();
            try {
              t2 || (t2 = this._constraints);
              const i3 = t2, r2 = i3.deviceId, a2 = i3.facingMode, s2 = Qi(t2, ["deviceId", "facingMode"]);
              this.log.debug("restarting track with constraints", Object.assign(Object.assign({}, this.logContext), { constraints: t2 }));
              const o2 = { audio: false, video: false };
              this.kind === ps.Kind.Video ? o2.video = !r2 && !a2 || { deviceId: r2, facingMode: a2 } : o2.audio = !r2 || Object.assign({ deviceId: r2 }, s2), this.attachedElements.forEach(((e2) => {
                gs(this.mediaStreamTrack, e2);
              })), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.stop();
              const c2 = (yield navigator.mediaDevices.getUserMedia(o2)).getTracks()[0];
              return this.kind === ps.Kind.Video && (yield c2.applyConstraints(s2)), c2.addEventListener("ended", this.handleEnded), this.log.debug("re-acquired MediaStreamTrack", this.logContext), yield this.setMediaStreamTrack(c2, false, n2), this._constraints = t2, this.pendingDeviceChange = false, this.emit(e.TrackEvent.Restarted, this), this.manuallyStopped && (this.log.warn("track was stopped during a restart, stopping restarted track", this.logContext), this.stop()), this;
            } finally {
              i2();
            }
          }));
        }
        setTrackMuted(t2) {
          this.log.debug("setting ".concat(this.kind, " track ").concat(t2 ? "muted" : "unmuted"), this.logContext), this.isMuted === t2 && this._mediaStreamTrack.enabled !== t2 || (this.isMuted = t2, this._mediaStreamTrack.enabled = !t2, this.emit(t2 ? e.TrackEvent.Muted : e.TrackEvent.Unmuted, this));
        }
        get needsReAcquisition() {
          return "live" !== this._mediaStreamTrack.readyState || this._mediaStreamTrack.muted || !this._mediaStreamTrack.enabled || this.reacquireTrack;
        }
        handleAppVisibilityChanged() {
          const e2 = Object.create(null, { handleAppVisibilityChanged: { get: () => super.handleAppVisibilityChanged } });
          return Yi(this, void 0, void 0, (function* () {
            yield e2.handleAppVisibilityChanged.call(this), Ms() && (this.log.debug("visibility changed, is in Background: ".concat(this.isInBackground), this.logContext), this.isInBackground || !this.needsReAcquisition || this.isUserProvided || this.isMuted || (this.log.debug("track needs to be reacquired, restarting ".concat(this.source), this.logContext), yield this.restart(), this.reacquireTrack = false));
          }));
        }
        stop() {
          var e2;
          this.manuallyStopped = true, super.stop(), this._mediaStreamTrack.removeEventListener("ended", this.handleEnded), this._mediaStreamTrack.removeEventListener("mute", this.handleTrackMuteEvent), this._mediaStreamTrack.removeEventListener("unmute", this.handleTrackUnmuteEvent), null === (e2 = this.processor) || void 0 === e2 || e2.destroy(), this.processor = void 0;
        }
        pauseUpstream() {
          return Yi(this, void 0, void 0, (function* () {
            var t2;
            const n2 = yield this.pauseUpstreamLock.lock();
            try {
              if (true === this._isUpstreamPaused) return;
              if (!this.sender) return void this.log.warn("unable to pause upstream for an unpublished track", this.logContext);
              this._isUpstreamPaused = true, this.emit(e.TrackEvent.UpstreamPaused, this);
              const n3 = ga();
              if ("Safari" === (null == n3 ? void 0 : n3.name) && Fs(n3.version, "12.0") < 0) throw new Ma("pauseUpstream is not supported on Safari < 12.");
              "closed" !== (null === (t2 = this.sender.transport) || void 0 === t2 ? void 0 : t2.state) && (yield this.sender.replaceTrack(null));
            } finally {
              n2();
            }
          }));
        }
        resumeUpstream() {
          return Yi(this, void 0, void 0, (function* () {
            var t2;
            const n2 = yield this.pauseUpstreamLock.lock();
            try {
              if (false === this._isUpstreamPaused) return;
              if (!this.sender) return void this.log.warn("unable to resume upstream for an unpublished track", this.logContext);
              this._isUpstreamPaused = false, this.emit(e.TrackEvent.UpstreamResumed, this), "closed" !== (null === (t2 = this.sender.transport) || void 0 === t2 ? void 0 : t2.state) && (yield this.sender.replaceTrack(this.mediaStreamTrack));
            } finally {
              n2();
            }
          }));
        }
        getRTCStatsReport() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            if (!(null === (e2 = this.sender) || void 0 === e2 ? void 0 : e2.getStats)) return;
            return yield this.sender.getStats();
          }));
        }
        setProcessor(t2) {
          return Yi(this, arguments, void 0, (function(t3) {
            var n2 = this;
            let i2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return (function* () {
              var r2;
              const a2 = yield n2.trackChangeLock.lock();
              try {
                n2.log.debug("setting up processor", n2.logContext);
                const a3 = document.createElement(n2.kind), s2 = { kind: n2.kind, track: n2._mediaStreamTrack, element: a3, audioContext: n2.audioContext, localTrack: n2 };
                if (yield t3.init(s2), n2.log.debug("processor initialized", n2.logContext), n2.processor && (yield n2.internalStopProcessor()), "unknown" === n2.kind) throw TypeError("cannot set processor on track of unknown kind");
                if (ms(n2._mediaStreamTrack, a3), a3.muted = true, a3.play().catch(((e2) => {
                  e2 instanceof DOMException && "AbortError" === e2.name ? (n2.log.warn("failed to play processor element, retrying", Object.assign(Object.assign({}, n2.logContext), { error: e2 })), setTimeout((() => {
                    a3.play().catch(((e3) => {
                      n2.log.error("failed to play processor element", Object.assign(Object.assign({}, n2.logContext), { err: e3 }));
                    }));
                  }), 100)) : n2.log.error("failed to play processor element", Object.assign(Object.assign({}, n2.logContext), { error: e2 }));
                })), n2.processor = t3, n2.processorElement = a3, n2.processor.processedTrack) {
                  for (const e2 of n2.attachedElements) e2 !== n2.processorElement && i2 && (gs(n2._mediaStreamTrack, e2), ms(n2.processor.processedTrack, e2));
                  yield null === (r2 = n2.sender) || void 0 === r2 ? void 0 : r2.replaceTrack(n2.processor.processedTrack);
                }
                n2.emit(e.TrackEvent.TrackProcessorUpdate, n2.processor);
              } finally {
                a2();
              }
              yield n2.onSenderTrackSwapped();
            })();
          }));
        }
        getProcessor() {
          return this.processor;
        }
        stopProcessor() {
          return Yi(this, arguments, void 0, (function() {
            var e2 = this;
            let t2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (function* () {
              const n2 = yield e2.trackChangeLock.lock();
              try {
                yield e2.internalStopProcessor(t2);
              } finally {
                n2();
              }
              yield e2.onSenderTrackSwapped();
            })();
          }));
        }
        internalStopProcessor() {
          return Yi(this, arguments, void 0, (function() {
            var t2 = this;
            let n2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (function* () {
              var i2, r2;
              t2.processor && (t2.log.debug("stopping processor", t2.logContext), null === (i2 = t2.processor.processedTrack) || void 0 === i2 || i2.stop(), yield t2.processor.destroy(), t2.processor = void 0, n2 || (null === (r2 = t2.processorElement) || void 0 === r2 || r2.remove(), t2.processorElement = void 0), yield t2._mediaStreamTrack.applyConstraints(t2._constraints), yield t2.setMediaStreamTrack(t2._mediaStreamTrack, true), t2.emit(e.TrackEvent.TrackProcessorUpdate));
            })();
          }));
        }
        startPreConnectBuffer() {
          let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
          if (Wc) if (this.localTrackRecorder) this.log.warn("preconnect buffer already started");
          else {
            {
              let e3 = "audio/webm;codecs=opus";
              MediaRecorder.isTypeSupported(e3) || (e3 = "video/mp4"), this.localTrackRecorder = new zc(this, { mimeType: e3 });
            }
            this.localTrackRecorder.start(e2), this.autoStopPreConnectBuffer = setTimeout((() => {
              this.log.warn("preconnect buffer timed out, stopping recording automatically", this.logContext), this.stopPreConnectBuffer();
            }), 1e4);
          }
          else this.log.warn("MediaRecorder is not available, cannot start preconnect buffer", this.logContext);
        }
        stopPreConnectBuffer() {
          clearTimeout(this.autoStopPreConnectBuffer), this.localTrackRecorder && (this.localTrackRecorder.stop(), this.localTrackRecorder = void 0);
        }
        getPreConnectBuffer() {
          var e2;
          return null === (e2 = this.localTrackRecorder) || void 0 === e2 ? void 0 : e2.byteStream;
        }
        getPreConnectBufferMimeType() {
          var e2;
          return null === (e2 = this.localTrackRecorder) || void 0 === e2 ? void 0 : e2.mimeType;
        }
      }
      class Gc extends Jc {
        get enhancedNoiseCancellation() {
          return this.isKrispNoiseFilterEnabled;
        }
        constructor(t2, n2) {
          let i2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r2 = arguments.length > 3 ? arguments[3] : void 0, a2 = arguments.length > 4 ? arguments[4] : void 0;
          super(t2, ps.Kind.Audio, n2, i2, a2), this.stopOnMute = false, this.isKrispNoiseFilterEnabled = false, this.monitorSender = () => Yi(this, void 0, void 0, (function* () {
            if (!this.sender) return void (this._currentBitrate = 0);
            let e2;
            try {
              e2 = yield this.getSenderStats();
            } catch (e3) {
              return void this.log.error("could not get audio sender stats", Object.assign(Object.assign({}, this.logContext), { error: e3 }));
            }
            e2 && this.prevStats && (this._currentBitrate = Lo(e2, this.prevStats)), this.prevStats = e2;
          })), this.handleKrispNoiseFilterEnable = () => {
            this.isKrispNoiseFilterEnabled = true, this.log.debug("Krisp noise filter enabled", this.logContext), this.emit(e.TrackEvent.AudioTrackFeatureUpdate, this, it.TF_ENHANCED_NOISE_CANCELLATION, true);
          }, this.handleKrispNoiseFilterDisable = () => {
            this.isKrispNoiseFilterEnabled = false, this.log.debug("Krisp noise filter disabled", this.logContext), this.emit(e.TrackEvent.AudioTrackFeatureUpdate, this, it.TF_ENHANCED_NOISE_CANCELLATION, false);
          }, this.audioContext = r2, this.checkForSilence();
        }
        mute() {
          const e2 = Object.create(null, { mute: { get: () => super.mute } });
          return Yi(this, void 0, void 0, (function* () {
            const t2 = yield this.muteLock.lock();
            try {
              return this.isMuted ? (this.log.debug("Track already muted", this.logContext), this) : (this.source === ps.Source.Microphone && this.stopOnMute && !this.isUserProvided && (this.log.debug("stopping mic track", this.logContext), this._mediaStreamTrack.stop()), yield e2.mute.call(this), this);
            } finally {
              t2();
            }
          }));
        }
        unmute() {
          const e2 = Object.create(null, { unmute: { get: () => super.unmute } });
          return Yi(this, void 0, void 0, (function* () {
            const t2 = yield this.muteLock.lock();
            try {
              return this.isMuted ? (this.source !== ps.Source.Microphone || !this.stopOnMute && "ended" !== this._mediaStreamTrack.readyState && !this.pendingDeviceChange || this.isUserProvided || (this.log.debug("reacquiring mic track", this.logContext), yield this.restart(void 0, true)), yield e2.unmute.call(this), this) : (this.log.debug("Track already unmuted", this.logContext), this);
            } finally {
              t2();
            }
          }));
        }
        restartTrack(e2) {
          return Yi(this, void 0, void 0, (function* () {
            let t2;
            if (e2) {
              const n2 = es({ audio: e2 });
              "boolean" != typeof n2.audio && (t2 = n2.audio);
            }
            yield this.restart(t2);
          }));
        }
        restart(e2, t2) {
          const n2 = Object.create(null, { restart: { get: () => super.restart } });
          return Yi(this, void 0, void 0, (function* () {
            const i2 = yield n2.restart.call(this, e2, t2);
            return this.checkForSilence(), i2;
          }));
        }
        startMonitor() {
          _s() && (this.monitorInterval || (this.monitorInterval = setInterval((() => {
            this.monitorSender();
          }), xo)));
        }
        setProcessor(t2) {
          return Yi(this, void 0, void 0, (function* () {
            var n2;
            const i2 = yield this.trackChangeLock.lock();
            try {
              if (!Os() && !this.audioContext) throw Error("Audio context needs to be set on LocalAudioTrack in order to enable processors");
              this.processor && (yield this.internalStopProcessor());
              const i3 = { kind: this.kind, track: this._mediaStreamTrack, audioContext: this.audioContext, localTrack: this };
              this.log.debug("setting up audio processor ".concat(t2.name), this.logContext), yield t2.init(i3), this.processor = t2, this.processor.processedTrack && (yield null === (n2 = this.sender) || void 0 === n2 ? void 0 : n2.replaceTrack(this.processor.processedTrack), this.processor.processedTrack.addEventListener("enable-lk-krisp-noise-filter", this.handleKrispNoiseFilterEnable), this.processor.processedTrack.addEventListener("disable-lk-krisp-noise-filter", this.handleKrispNoiseFilterDisable)), this.emit(e.TrackEvent.TrackProcessorUpdate, this.processor);
            } finally {
              i2();
            }
          }));
        }
        setAudioContext(e2) {
          this.audioContext = e2;
        }
        getSenderStats() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            if (!(null === (e2 = this.sender) || void 0 === e2 ? void 0 : e2.getStats)) return;
            let t2;
            return (yield this.sender.getStats()).forEach(((e3) => {
              "outbound-rtp" === e3.type && (t2 = { type: "audio", streamId: e3.id, packetsSent: e3.packetsSent, packetsLost: e3.packetsLost, bytesSent: e3.bytesSent, timestamp: e3.timestamp, roundTripTime: e3.roundTripTime, jitter: e3.jitter });
            })), t2;
          }));
        }
        checkForSilence() {
          return Yi(this, void 0, void 0, (function* () {
            const t2 = yield ts(this);
            return t2 && (this.isMuted || this.log.debug("silence detected on local audio track", this.logContext), this.emit(e.TrackEvent.AudioSilenceDetected)), t2;
          }));
        }
      }
      const Qc = Object.values(Qa), Yc = Object.values(Ya), Xc = Object.values(Xa), Zc = [Qa.h180, Qa.h360], $c = [Ya.h180, Ya.h360], ed = ["q", "h", "f"];
      function td(e2, t2, n2, i2) {
        var r2, a2;
        let s2 = null == i2 ? void 0 : i2.videoEncoding;
        e2 && (s2 = null == i2 ? void 0 : i2.screenShareEncoding);
        const o2 = null == i2 ? void 0 : i2.simulcast, c2 = null == i2 ? void 0 : i2.scalabilityMode, d2 = null == i2 ? void 0 : i2.videoCodec;
        if (!s2 && !o2 && !c2 || !t2 || !n2) return [{}];
        s2 || (s2 = (function(e3, t3, n3, i3) {
          const r3 = (function(e4, t4, n4) {
            if (e4) return Xc;
            const i4 = t4 > n4 ? t4 / n4 : n4 / t4;
            if (Math.abs(i4 - 16 / 9) < Math.abs(i4 - 4 / 3)) return Qc;
            return Yc;
          })(e3, t3, n3);
          let a3 = r3[0].encoding;
          const s3 = Math.max(t3, n3);
          for (let e4 = 0; e4 < r3.length; e4 += 1) {
            const t4 = r3[e4];
            if (a3 = t4.encoding, t4.width >= s3) break;
          }
          if (i3) switch (i3) {
            case "av1":
            case "h265":
              a3 = Object.assign({}, a3), a3.maxBitrate = 0.7 * a3.maxBitrate;
              break;
            case "vp9":
              a3 = Object.assign({}, a3), a3.maxBitrate = 0.85 * a3.maxBitrate;
          }
          return a3;
        })(e2, t2, n2, d2), Vi.debug("using video encoding", s2));
        const l2 = s2.maxFramerate, u2 = new qa(t2, n2, s2.maxBitrate, s2.maxFramerate, s2.priority);
        if (c2 && Ss(d2)) {
          const e3 = new sd(c2), t3 = [];
          if (e3.spatial > 3) throw new Error("unsupported scalabilityMode: ".concat(c2));
          const n3 = ga();
          if (Is() || Os() || "Chrome" === (null == n3 ? void 0 : n3.name) && Fs(null == n3 ? void 0 : n3.version, "113") < 0) {
            const i3 = "h" == e3.suffix ? 2 : 3, r3 = (function(e4) {
              return e4 || (e4 = ga()), "Safari" === (null == e4 ? void 0 : e4.name) && Fs(e4.version, "18.3") > 0 || "iOS" === (null == e4 ? void 0 : e4.os) && !!(null == e4 ? void 0 : e4.osVersion) && Fs(e4.osVersion, "18.3") > 0;
            })(n3);
            for (let n4 = 0; n4 < e3.spatial; n4 += 1) t3.push({ rid: ed[2 - n4], maxBitrate: s2.maxBitrate / Math.pow(i3, n4), maxFramerate: u2.encoding.maxFramerate, scaleResolutionDownBy: r3 ? Math.pow(2, n4) : void 0 });
            t3[0].scalabilityMode = c2;
          } else t3.push({ maxBitrate: s2.maxBitrate, maxFramerate: u2.encoding.maxFramerate, scalabilityMode: c2 });
          return u2.encoding.priority && (t3[0].priority = u2.encoding.priority, t3[0].networkPriority = u2.encoding.priority), Vi.debug("using svc encoding", { encodings: t3 }), t3;
        }
        if (!o2) return [s2];
        let h2, p2;
        if (h2 = e2 ? null !== (r2 = ad(null == i2 ? void 0 : i2.screenShareSimulcastLayers)) && void 0 !== r2 ? r2 : id(e2, u2) : null !== (a2 = ad(null == i2 ? void 0 : i2.videoSimulcastLayers)) && void 0 !== a2 ? a2 : id(e2, u2), h2.length > 0) {
          const e3 = h2[0];
          if (h2.length > 1) p2 = x(h2, 2)[1];
          const i3 = Math.max(t2, n2);
          if (i3 >= 960 && p2) return rd(t2, n2, [e3, p2, u2], l2);
          if (i3 >= 480) return rd(t2, n2, [e3, u2], l2);
        }
        return rd(t2, n2, [u2]);
      }
      function nd(e2, t2, n2) {
        var i2, r2, a2, s2;
        if (!n2.backupCodec || true === n2.backupCodec || n2.backupCodec.codec === n2.videoCodec) return;
        t2 !== n2.backupCodec.codec && Vi.warn("requested a different codec than specified as backup", { serverRequested: t2, backup: n2.backupCodec.codec }), n2.videoCodec = t2, n2.videoEncoding = n2.backupCodec.encoding;
        const o2 = e2.mediaStreamTrack.getSettings(), c2 = null !== (i2 = o2.width) && void 0 !== i2 ? i2 : null === (r2 = e2.dimensions) || void 0 === r2 ? void 0 : r2.width, d2 = null !== (a2 = o2.height) && void 0 !== a2 ? a2 : null === (s2 = e2.dimensions) || void 0 === s2 ? void 0 : s2.height;
        e2.source === ps.Source.ScreenShare && n2.simulcast && (n2.simulcast = false);
        return td(e2.source === ps.Source.ScreenShare, c2, d2, n2);
      }
      function id(e2, t2) {
        if (e2) return [{ scaleResolutionDownBy: 2, fps: (n2 = t2).encoding.maxFramerate }].map(((e3) => {
          var t3, i3;
          return new qa(Math.floor(n2.width / e3.scaleResolutionDownBy), Math.floor(n2.height / e3.scaleResolutionDownBy), Math.max(15e4, Math.floor(n2.encoding.maxBitrate / (Math.pow(e3.scaleResolutionDownBy, 2) * ((null !== (t3 = n2.encoding.maxFramerate) && void 0 !== t3 ? t3 : 30) / (null !== (i3 = e3.fps) && void 0 !== i3 ? i3 : 30))))), e3.fps, n2.encoding.priority);
        }));
        var n2;
        const i2 = t2.width, r2 = t2.height, a2 = i2 > r2 ? i2 / r2 : r2 / i2;
        return Math.abs(a2 - 16 / 9) < Math.abs(a2 - 4 / 3) ? Zc : $c;
      }
      function rd(e2, t2, n2, i2) {
        const r2 = [];
        if (n2.forEach(((n3, a2) => {
          if (a2 >= ed.length) return;
          const s2 = Math.min(e2, t2), o2 = { rid: ed[a2], scaleResolutionDownBy: Math.max(1, s2 / Math.min(n3.width, n3.height)), maxBitrate: n3.encoding.maxBitrate }, c2 = i2 && n3.encoding.maxFramerate ? Math.min(i2, n3.encoding.maxFramerate) : n3.encoding.maxFramerate;
          c2 && (o2.maxFramerate = c2);
          const d2 = ga(), l2 = "Firefox" === (null == d2 ? void 0 : d2.name) && "iOS" !== d2.os || 0 === a2;
          n3.encoding.priority && l2 && (o2.priority = n3.encoding.priority, o2.networkPriority = n3.encoding.priority), r2.push(o2);
        })), Os() && "ios" === Ls()) {
          let e3;
          r2.forEach(((t4) => {
            e3 ? t4.maxFramerate && t4.maxFramerate > e3 && (e3 = t4.maxFramerate) : e3 = t4.maxFramerate;
          }));
          let t3 = true;
          r2.forEach(((n3) => {
            var i3;
            n3.maxFramerate != e3 && (t3 && (t3 = false, Vi.info("Simulcast on iOS React-Native requires all encodings to share the same framerate.")), Vi.info('Setting framerate of encoding "'.concat(null !== (i3 = n3.rid) && void 0 !== i3 ? i3 : "", '" to ').concat(e3)), n3.maxFramerate = e3);
          }));
        }
        return r2;
      }
      function ad(e2) {
        if (e2) return e2.slice().sort(((e3, t2) => {
          const n2 = e3.encoding, i2 = t2.encoding;
          return n2.maxBitrate > i2.maxBitrate ? 1 : n2.maxBitrate < i2.maxBitrate ? -1 : n2.maxBitrate === i2.maxBitrate && n2.maxFramerate && i2.maxFramerate ? n2.maxFramerate > i2.maxFramerate ? 1 : -1 : 0;
        }));
      }
      class sd {
        constructor(e2) {
          const t2 = e2.match(/^L(\d)T(\d)(h|_KEY|_KEY_SHIFT){0,1}$/);
          if (!t2) throw new Error("invalid scalability mode");
          if (this.spatial = parseInt(t2[1]), this.temporal = parseInt(t2[2]), t2.length > 3) switch (t2[3]) {
            case "h":
            case "_KEY":
            case "_KEY_SHIFT":
              this.suffix = t2[3];
          }
        }
        toString() {
          var e2;
          return "L".concat(this.spatial, "T").concat(this.temporal).concat(null !== (e2 = this.suffix) && void 0 !== e2 ? e2 : "");
        }
      }
      class od extends Jc {
        get sender() {
          return this._sender;
        }
        set sender(e2) {
          this._sender = e2, this.degradationPreference && this.setDegradationPreference(this.degradationPreference);
        }
        constructor(t2, n2) {
          let i2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a2 = arguments.length > 3 ? arguments[3] : void 0;
          super(t2, ps.Kind.Video, n2, i2, a2), this.simulcastCodecs = /* @__PURE__ */ new Map(), this.degradationPreference = "balanced", this.isCpuConstrained = false, this.optimizeForPerformance = false, this.monitorSender = () => Yi(this, void 0, void 0, (function* () {
            if (!this.sender) return void (this._currentBitrate = 0);
            let t3;
            try {
              t3 = yield this.getSenderStats();
            } catch (e2) {
              return void this.log.error("could not get video sender stats", Object.assign(Object.assign({}, this.logContext), { error: e2 }));
            }
            const n3 = new Map(t3.map(((e2) => [e2.rid, e2]))), i3 = t3.some(((e2) => "cpu" === e2.qualityLimitationReason));
            if (i3 !== this.isCpuConstrained && (this.isCpuConstrained = i3, this.isCpuConstrained && this.emit(e.TrackEvent.CpuConstrained)), this.prevStats) {
              let e2 = 0;
              n3.forEach(((t4, n4) => {
                var i4;
                const r2 = null === (i4 = this.prevStats) || void 0 === i4 ? void 0 : i4.get(n4);
                e2 += Lo(t4, r2);
              })), this._currentBitrate = e2;
            }
            this.prevStats = n3;
          })), this.senderLock = new r();
        }
        get isSimulcast() {
          return !!(this.sender && this.sender.getParameters().encodings.length > 1);
        }
        startMonitor(e2) {
          var t2;
          if (this.signalClient = e2, !_s()) return;
          const n2 = null === (t2 = this.sender) || void 0 === t2 ? void 0 : t2.getParameters();
          n2 && (this.encodings = n2.encodings), this.monitorInterval || (this.monitorInterval = setInterval((() => {
            this.monitorSender();
          }), xo));
        }
        stop() {
          this._mediaStreamTrack.getConstraints(), this.simulcastCodecs.forEach(((e2) => {
            e2.mediaStreamTrack.stop();
          })), super.stop();
        }
        pauseUpstream() {
          const e2 = Object.create(null, { pauseUpstream: { get: () => super.pauseUpstream } });
          return Yi(this, void 0, void 0, (function* () {
            var t2, n2, i2, r2, a2;
            yield e2.pauseUpstream.call(this);
            try {
              for (var s2, o2 = true, c2 = er(this.simulcastCodecs.values()); !(t2 = (s2 = yield c2.next()).done); o2 = true) {
                r2 = s2.value, o2 = false;
                const e3 = r2;
                yield null === (a2 = e3.sender) || void 0 === a2 ? void 0 : a2.replaceTrack(null);
              }
            } catch (e3) {
              n2 = { error: e3 };
            } finally {
              try {
                o2 || t2 || !(i2 = c2.return) || (yield i2.call(c2));
              } finally {
                if (n2) throw n2.error;
              }
            }
          }));
        }
        resumeUpstream() {
          const e2 = Object.create(null, { resumeUpstream: { get: () => super.resumeUpstream } });
          return Yi(this, void 0, void 0, (function* () {
            var t2, n2, i2, r2, a2;
            yield e2.resumeUpstream.call(this);
            try {
              for (var s2, o2 = true, c2 = er(this.simulcastCodecs.values()); !(t2 = (s2 = yield c2.next()).done); o2 = true) {
                r2 = s2.value, o2 = false;
                const e3 = r2;
                yield null === (a2 = e3.sender) || void 0 === a2 ? void 0 : a2.replaceTrack(e3.mediaStreamTrack);
              }
            } catch (e3) {
              n2 = { error: e3 };
            } finally {
              try {
                o2 || t2 || !(i2 = c2.return) || (yield i2.call(c2));
              } finally {
                if (n2) throw n2.error;
              }
            }
          }));
        }
        mute() {
          const e2 = Object.create(null, { mute: { get: () => super.mute } });
          return Yi(this, void 0, void 0, (function* () {
            const t2 = yield this.muteLock.lock();
            try {
              return this.isMuted ? (this.log.debug("Track already muted", this.logContext), this) : (this.source !== ps.Source.Camera || this.isUserProvided || (this.log.debug("stopping camera track", this.logContext), this._mediaStreamTrack.stop()), yield e2.mute.call(this), this);
            } finally {
              t2();
            }
          }));
        }
        unmute() {
          const e2 = Object.create(null, { unmute: { get: () => super.unmute } });
          return Yi(this, void 0, void 0, (function* () {
            const t2 = yield this.muteLock.lock();
            try {
              return this.isMuted ? (this.source !== ps.Source.Camera || this.isUserProvided || (this.log.debug("reacquiring camera track", this.logContext), yield this.restart(void 0, true)), yield e2.unmute.call(this), this) : (this.log.debug("Track already unmuted", this.logContext), this);
            } finally {
              t2();
            }
          }));
        }
        setTrackMuted(e2) {
          super.setTrackMuted(e2);
          for (const t2 of this.simulcastCodecs.values()) t2.mediaStreamTrack.enabled = !e2;
        }
        getSenderStats() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            if (!(null === (e2 = this.sender) || void 0 === e2 ? void 0 : e2.getStats)) return [];
            const t2 = [], n2 = yield this.sender.getStats();
            return n2.forEach(((e3) => {
              var i2;
              if ("outbound-rtp" === e3.type) {
                const r2 = { type: "video", streamId: e3.id, frameHeight: e3.frameHeight, frameWidth: e3.frameWidth, framesPerSecond: e3.framesPerSecond, framesSent: e3.framesSent, firCount: e3.firCount, pliCount: e3.pliCount, nackCount: e3.nackCount, packetsSent: e3.packetsSent, bytesSent: e3.bytesSent, qualityLimitationReason: e3.qualityLimitationReason, qualityLimitationDurations: e3.qualityLimitationDurations, qualityLimitationResolutionChanges: e3.qualityLimitationResolutionChanges, rid: null !== (i2 = e3.rid) && void 0 !== i2 ? i2 : e3.id, retransmittedPacketsSent: e3.retransmittedPacketsSent, targetBitrate: e3.targetBitrate, timestamp: e3.timestamp }, a2 = n2.get(e3.remoteId);
                a2 && (r2.jitter = a2.jitter, r2.packetsLost = a2.packetsLost, r2.roundTripTime = a2.roundTripTime), t2.push(r2);
              }
            })), t2.sort(((e3, t3) => {
              var n3, i2;
              return (null !== (n3 = t3.frameWidth) && void 0 !== n3 ? n3 : 0) - (null !== (i2 = e3.frameWidth) && void 0 !== i2 ? i2 : 0);
            })), t2;
          }));
        }
        setPublishingQuality(t2) {
          const n2 = [];
          for (let i2 = e.VideoQuality.LOW; i2 <= e.VideoQuality.HIGH; i2 += 1) n2.push(new ci({ quality: i2, enabled: i2 <= t2 }));
          this.log.debug("setting publishing quality. max quality ".concat(t2), this.logContext), this.setPublishingLayers(Ss(this.codec), n2);
        }
        restartTrack(e2) {
          return Yi(this, void 0, void 0, (function* () {
            var t2, n2, i2, r2, a2;
            let s2;
            if (e2) {
              const t3 = es({ video: e2 });
              "boolean" != typeof t3.video && (s2 = t3.video);
            }
            yield this.restart(s2), this.isCpuConstrained = false;
            try {
              for (var o2, c2 = true, d2 = er(this.simulcastCodecs.values()); !(t2 = (o2 = yield d2.next()).done); c2 = true) {
                r2 = o2.value, c2 = false;
                const e3 = r2;
                e3.sender && "closed" !== (null === (a2 = e3.sender.transport) || void 0 === a2 ? void 0 : a2.state) && (e3.mediaStreamTrack = this.mediaStreamTrack.clone(), yield e3.sender.replaceTrack(e3.mediaStreamTrack));
              }
            } catch (e3) {
              n2 = { error: e3 };
            } finally {
              try {
                c2 || t2 || !(i2 = d2.return) || (yield i2.call(d2));
              } finally {
                if (n2) throw n2.error;
              }
            }
            yield this.onSenderTrackSwapped();
          }));
        }
        onSenderTrackSwapped() {
          return Yi(this, void 0, void 0, (function* () {
            yield this.refreshSenderEncodings();
          }));
        }
        refreshSenderEncodings() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            if (!this.sender || !this.publishOptions || this.optimizeForPerformance) return;
            const t2 = yield this.senderLock.lock();
            try {
              let t3;
              try {
                t3 = yield this.waitForDimensions();
              } catch (e3) {
                return void this.log.warn("could not determine new track dimensions, skipping encoding recompute", Object.assign(Object.assign({}, this.logContext), { error: e3 }));
              }
              if (this.lastEncodedDimensions && this.lastEncodedDimensions.width === t3.width && this.lastEncodedDimensions.height === t3.height) return;
              const i2 = td(this.source === ps.Source.ScreenShare, t3.width, t3.height, Object.assign({}, this.publishOptions));
              yield this.applyEncodingsToSender(this.sender, i2), this.encodings = i2, this.lastEncodedDimensions = t3;
              for (const t4 of this.simulcastCodecs) {
                var n2 = x(t4, 2);
                const i3 = n2[0], r2 = n2[1];
                if (!r2.sender || "closed" === (null === (e2 = r2.sender.transport) || void 0 === e2 ? void 0 : e2.state)) continue;
                if (!Ka(i3)) continue;
                const a2 = nd(this, i3, Object.assign({}, this.publishOptions));
                a2 && (yield this.applyEncodingsToSender(r2.sender, a2), r2.encodings = a2);
              }
            } catch (e3) {
              this.log.warn("failed to apply recomputed encodings", Object.assign(Object.assign({}, this.logContext), { error: e3 }));
            } finally {
              t2();
            }
          }));
        }
        applyEncodingsToSender(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            const n2 = e2.getParameters();
            n2.encodings && n2.encodings.length === t2.length && (n2.encodings.forEach(((e3, n3) => {
              if (false === e3.active) return;
              const i2 = t2[n3];
              void 0 !== i2.scaleResolutionDownBy && (e3.scaleResolutionDownBy = i2.scaleResolutionDownBy), void 0 !== i2.maxBitrate && (e3.maxBitrate = i2.maxBitrate), void 0 !== i2.maxFramerate && (e3.maxFramerate = i2.maxFramerate), void 0 !== i2.priority && (e3.priority = i2.priority, e3.networkPriority = i2.priority);
            })), this.log.debug("updating sender encodings after track restart", Object.assign(Object.assign({}, this.logContext), { encodings: n2.encodings })), yield e2.setParameters(n2));
          }));
        }
        setProcessor(e2) {
          const t2 = Object.create(null, { setProcessor: { get: () => super.setProcessor } });
          return Yi(this, arguments, void 0, (function(e3) {
            var n2 = this;
            let i2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return (function* () {
              var r2, a2, s2, o2, c2, d2;
              if (yield t2.setProcessor.call(n2, e3, i2), null === (c2 = n2.processor) || void 0 === c2 ? void 0 : c2.processedTrack) try {
                for (var l2, u2 = true, h2 = er(n2.simulcastCodecs.values()); !(r2 = (l2 = yield h2.next()).done); u2 = true) {
                  o2 = l2.value, u2 = false;
                  const e4 = o2;
                  yield null === (d2 = e4.sender) || void 0 === d2 ? void 0 : d2.replaceTrack(n2.processor.processedTrack);
                }
              } catch (e4) {
                a2 = { error: e4 };
              } finally {
                try {
                  u2 || r2 || !(s2 = h2.return) || (yield s2.call(h2));
                } finally {
                  if (a2) throw a2.error;
                }
              }
            })();
          }));
        }
        setDegradationPreference(e2) {
          return Yi(this, void 0, void 0, (function* () {
            if (this.degradationPreference = e2, this.sender) try {
              this.log.debug("setting degradationPreference to ".concat(e2), this.logContext);
              const t2 = this.sender.getParameters();
              t2.degradationPreference = e2, this.sender.setParameters(t2);
            } catch (e3) {
              this.log.warn("failed to set degradationPreference", Object.assign({ error: e3 }, this.logContext));
            }
          }));
        }
        addSimulcastTrack(e2, t2) {
          if (this.simulcastCodecs.has(e2)) return void this.log.error("".concat(e2, " already added, skipping adding simulcast codec"), this.logContext);
          const n2 = { codec: e2, mediaStreamTrack: this.mediaStreamTrack.clone(), sender: void 0, encodings: t2 };
          return this.simulcastCodecs.set(e2, n2), n2;
        }
        setSimulcastTrackSender(e2, t2) {
          const n2 = this.simulcastCodecs.get(e2);
          n2 && (n2.sender = t2, setTimeout((() => {
            this.subscribedCodecs && this.setPublishingCodecs(this.subscribedCodecs);
          }), 5e3));
        }
        setPublishingCodecs(e2) {
          return Yi(this, void 0, void 0, (function* () {
            var t2, n2, i2, r2, a2, s2, o2;
            if (this.log.debug("setting publishing codecs", Object.assign(Object.assign({}, this.logContext), { codecs: e2, currentCodec: this.codec })), !this.codec && e2.length > 0) return yield this.setPublishingLayers(Ss(e2[0].codec), e2[0].qualities), [];
            this.subscribedCodecs = e2;
            const c2 = [];
            try {
              for (t2 = true, n2 = er(e2); !(r2 = (i2 = yield n2.next()).done); t2 = true) {
                o2 = i2.value, t2 = false;
                const e3 = o2;
                if (this.codec && this.codec !== e3.codec) {
                  const t3 = this.simulcastCodecs.get(e3.codec);
                  if (this.log.debug("try setPublishingCodec for ".concat(e3.codec), Object.assign(Object.assign({}, this.logContext), { simulcastCodecInfo: t3 })), t3 && t3.sender) t3.encodings && (this.log.debug("try setPublishingLayersForSender ".concat(e3.codec), this.logContext), yield cd(t3.sender, t3.encodings, e3.qualities, this.senderLock, Ss(e3.codec), this.log, this.logContext));
                  else for (const t4 of e3.qualities) if (t4.enabled) {
                    c2.push(e3.codec);
                    break;
                  }
                } else yield this.setPublishingLayers(Ss(e3.codec), e3.qualities);
              }
            } catch (e3) {
              a2 = { error: e3 };
            } finally {
              try {
                t2 || r2 || !(s2 = n2.return) || (yield s2.call(n2));
              } finally {
                if (a2) throw a2.error;
              }
            }
            return c2;
          }));
        }
        setPublishingLayers(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            this.optimizeForPerformance ? this.log.info("skipping setPublishingLayers due to optimized publishing performance", Object.assign(Object.assign({}, this.logContext), { qualities: t2 })) : (this.log.debug("setting publishing layers", Object.assign(Object.assign({}, this.logContext), { qualities: t2 })), this.sender && this.encodings && (yield cd(this.sender, this.encodings, t2, this.senderLock, e2, this.log, this.logContext)));
          }));
        }
        prioritizePerformance() {
          return Yi(this, void 0, void 0, (function* () {
            if (!this.sender) throw new Error("sender not found");
            const e2 = yield this.senderLock.lock();
            try {
              this.optimizeForPerformance = true;
              const e3 = this.sender.getParameters();
              e3.encodings = e3.encodings.map(((e4, t2) => {
                var n2;
                return Object.assign(Object.assign({}, e4), { active: 0 === t2, scaleResolutionDownBy: Math.max(1, Math.ceil((null !== (n2 = this.mediaStreamTrack.getSettings().height) && void 0 !== n2 ? n2 : 360) / 360)), scalabilityMode: 0 === t2 && Ss(this.codec) ? "L1T3" : void 0, maxFramerate: 0 === t2 ? 15 : 0, maxBitrate: 0 === t2 ? e4.maxBitrate : 0 });
              })), this.log.debug("setting performance optimised encodings", Object.assign(Object.assign({}, this.logContext), { encodings: e3.encodings })), this.encodings = e3.encodings, yield this.sender.setParameters(e3);
            } catch (e3) {
              this.log.error("failed to set performance optimised encodings", Object.assign(Object.assign({}, this.logContext), { error: e3 })), this.optimizeForPerformance = false;
            } finally {
              e2();
            }
          }));
        }
        handleAppVisibilityChanged() {
          const e2 = Object.create(null, { handleAppVisibilityChanged: { get: () => super.handleAppVisibilityChanged } });
          return Yi(this, void 0, void 0, (function* () {
            yield e2.handleAppVisibilityChanged.call(this), Ms() && this.isInBackground && this.source === ps.Source.Camera && (this._mediaStreamTrack.enabled = false);
          }));
        }
      }
      function cd(e2, t2, n2, i2, r2, a2, s2) {
        return Yi(this, void 0, void 0, (function* () {
          const o2 = yield i2.lock();
          a2.debug("setPublishingLayersForSender", Object.assign(Object.assign({}, s2), { sender: e2, qualities: n2, senderEncodings: t2 }));
          try {
            const i3 = e2.getParameters(), o3 = i3.encodings;
            if (!o3) return;
            if (o3.length !== t2.length) return void a2.warn("cannot set publishing layers, encodings mismatch", Object.assign(Object.assign({}, s2), { encodings: o3, senderEncodings: t2 }));
            let c2 = false;
            if (false) ;
            else {
              if (r2) {
                n2.some(((e3) => e3.enabled)) && n2.forEach(((e3) => e3.enabled = true));
              }
              o3.forEach(((e3, i4) => {
                var r3;
                let o4 = null !== (r3 = e3.rid) && void 0 !== r3 ? r3 : "";
                "" === o4 && (o4 = "q");
                const d2 = dd(o4), l2 = n2.find(((e4) => e4.quality === d2));
                l2 && e3.active !== l2.enabled && (c2 = true, e3.active = l2.enabled, a2.debug("setting layer ".concat(l2.quality, " to ").concat(e3.active ? "enabled" : "disabled"), s2), ws() && (l2.enabled ? (e3.scaleResolutionDownBy = t2[i4].scaleResolutionDownBy, e3.maxBitrate = t2[i4].maxBitrate, e3.maxFrameRate = t2[i4].maxFrameRate) : (e3.scaleResolutionDownBy = 4, e3.maxBitrate = 10, e3.maxFrameRate = 2)));
              }));
            }
            c2 && (i3.encodings = o3, a2.debug("setting encodings", Object.assign(Object.assign({}, s2), { encodings: i3.encodings })), yield e2.setParameters(i3));
          } finally {
            o2();
          }
        }));
      }
      function dd(t2) {
        switch (t2) {
          case "f":
          default:
            return e.VideoQuality.HIGH;
          case "h":
            return e.VideoQuality.MEDIUM;
          case "q":
            return e.VideoQuality.LOW;
        }
      }
      function ld(t2, n2, i2, r2) {
        if (!i2) return [new ft({ quality: e.VideoQuality.HIGH, width: t2, height: n2, bitrate: 0, ssrc: 0 })];
        if (r2) {
          const r3 = i2[0].scalabilityMode, a2 = new sd(r3), s2 = [], o2 = "h" == a2.suffix ? 1.5 : 2, c2 = "h" == a2.suffix ? 2 : 3;
          for (let r4 = 0; r4 < a2.spatial; r4 += 1) s2.push(new ft({ quality: Math.min(e.VideoQuality.HIGH, a2.spatial - 1) - r4, width: Math.ceil(t2 / Math.pow(o2, r4)), height: Math.ceil(n2 / Math.pow(o2, r4)), bitrate: i2[0].maxBitrate ? Math.ceil(i2[0].maxBitrate / Math.pow(c2, r4)) : 0, ssrc: 0 }));
          return s2;
        }
        return i2.map(((e2) => {
          var i3, r3, a2;
          const s2 = null !== (i3 = e2.scaleResolutionDownBy) && void 0 !== i3 ? i3 : 1;
          let o2 = dd(null !== (r3 = e2.rid) && void 0 !== r3 ? r3 : "");
          return new ft({ quality: o2, width: Math.ceil(t2 / s2), height: Math.ceil(n2 / s2), bitrate: null !== (a2 = e2.maxBitrate) && void 0 !== a2 ? a2 : 0, ssrc: 0 });
        }));
      }
      const ud = "_lossy", hd = "_reliable", pd = "_data_track", md = "leave-reconnect";
      var gd, vd;
      !(function(e2) {
        e2[e2.New = 0] = "New", e2[e2.Connected = 1] = "Connected", e2[e2.Disconnected = 2] = "Disconnected", e2[e2.Reconnecting = 3] = "Reconnecting", e2[e2.Closed = 4] = "Closed";
      })(gd || (gd = {})), (function(e2) {
        e2[e2.RELIABLE = 0] = "RELIABLE", e2[e2.LOSSY = 1] = "LOSSY", e2[e2.DATA_TRACK_LOSSY = 2] = "DATA_TRACK_LOSSY";
      })(vd || (vd = {}));
      class fd extends ir.EventEmitter {
        get isClosed() {
          return this._isClosed;
        }
        get isNewlyCreated() {
          return this._isNewlyCreated;
        }
        get pendingReconnect() {
          return !!this.reconnectTimeout;
        }
        constructor(t2) {
          var n2;
          super(), this.options = t2, this.rtcConfig = {}, this.peerConnectionTimeout = qc.peerConnectionTimeout, this.fullReconnectOnNext = false, this.latestRemoteOfferId = 0, this.subscriberPrimary = false, this.pcState = gd.New, this._isClosed = true, this._isNewlyCreated = true, this.pendingTrackResolvers = {}, this.reconnectAttempts = 0, this.reconnectStart = 0, this.attemptingReconnect = false, this.joinAttempts = 0, this.maxJoinAttempts = 1, this.shouldFailNext = false, this.shouldFailOnV1Path = false, this.log = Vi, this.reliableDataSequence = 1, this.reliableMessageBuffer = new mc(), this.reliableReceivedState = new gc(3e4), this.lossyDataStatCurrentBytes = 0, this.lossyDataStatByterate = 0, this.lossyDataDropCount = 0, this.midToTrackId = {}, this.isWaitingForNetworkReconnect = false, this.bufferStatusLowClosingFuture = new Qs(), this.handleDataChannel = (e2) => Yi(this, [e2], void 0, (function(e3) {
            var t3 = this;
            let n3 = e3.channel;
            return (function* () {
              if (!n3) return;
              let e4;
              if (n3.label === hd) t3.reliableDCSub = n3, e4 = t3.handleDataMessage;
              else if (n3.label === ud) t3.lossyDCSub = n3, e4 = t3.handleDataMessage;
              else {
                if (n3.label !== pd) return;
                t3.dataTrackDCSub = n3, e4 = t3.handleDataTrackMessage;
              }
              t3.log.debug("on data channel ".concat(n3.id, ", ").concat(n3.label)), n3.onmessage = e4;
            })();
          })), this.handleDataMessage = (t3) => Yi(this, void 0, void 0, (function* () {
            var n3, i2, r2, a2, s2;
            const o2 = yield this.dataProcessLock.lock();
            try {
              let o3;
              if (t3.data instanceof ArrayBuffer) o3 = t3.data;
              else {
                if (!(t3.data instanceof Blob)) return void this.log.error("unsupported data type", { data: t3.data });
                o3 = yield t3.data.arrayBuffer();
              }
              const c2 = yt.fromBinary(new Uint8Array(o3));
              if (c2.sequence > 0 && "" !== c2.participantSid) {
                const e2 = this.reliableReceivedState.get(c2.participantSid);
                if (e2 && c2.sequence <= e2) return;
                this.reliableReceivedState.set(c2.participantSid, c2.sequence);
              }
              if ("speaker" === (null === (n3 = c2.value) || void 0 === n3 ? void 0 : n3.case)) this.emit(e.EngineEvent.ActiveSpeakersUpdate, c2.value.value.speakers);
              else if ("encryptedPacket" === (null === (i2 = c2.value) || void 0 === i2 ? void 0 : i2.case)) {
                if (!this.e2eeManager) return void this.log.error("Received encrypted packet but E2EE not set up");
                const t4 = yield null === (r2 = this.e2eeManager) || void 0 === r2 ? void 0 : r2.handleEncryptedData(c2.value.value.encryptedValue, c2.value.value.iv, c2.participantIdentity, c2.value.value.keyIndex), n4 = St.fromBinary(t4.payload), i3 = new yt({ value: n4.value, participantIdentity: c2.participantIdentity, participantSid: c2.participantSid });
                "user" === (null === (a2 = i3.value) || void 0 === a2 ? void 0 : a2.case) && kd(i3, i3.value.value), this.emit(e.EngineEvent.DataPacketReceived, i3, c2.value.value.encryptionType);
              } else "user" === (null === (s2 = c2.value) || void 0 === s2 ? void 0 : s2.case) && kd(c2, c2.value.value), this.emit(e.EngineEvent.DataPacketReceived, c2, ht.NONE);
            } finally {
              o2();
            }
          })), this.handleDataTrackMessage = (e2) => Yi(this, void 0, void 0, (function* () {
            let t3;
            if (e2.data instanceof ArrayBuffer) t3 = e2.data;
            else {
              if (!(e2.data instanceof Blob)) return void this.log.error("unsupported data type", { data: e2.data });
              t3 = yield e2.data.arrayBuffer();
            }
            this.emit("dataTrackPacketReceived", new Uint8Array(t3));
          })), this.handleDataError = (e2) => {
            if (this._isClosed) return;
            const t3 = 0 === e2.currentTarget.maxRetransmits ? "lossy" : "reliable";
            if ("undefined" != typeof RTCErrorEvent && e2 instanceof RTCErrorEvent && e2.error) {
              const n3 = e2.error;
              this.log.error("DataChannel error on ".concat(t3, ": ").concat(n3.message), { error: n3, errorDetail: n3.errorDetail, sctpCauseCode: n3.sctpCauseCode });
            } else this.log.error("Unknown DataChannel error on ".concat(t3), { event: e2 });
          }, this.handleDataChannelClose = (e2) => () => {
            var t3;
            this._isClosed || "connected" !== (null === (t3 = this.pcManager) || void 0 === t3 ? void 0 : t3.publisher.getConnectionState()) || this.log.error("publisher data channel '".concat(vd[e2], "' closed unexpectedly"), this.logContext);
          }, this.handleBufferedAmountLow = (e2) => {
            this.updateAndEmitDCBufferStatus(e2);
          }, this.handleDisconnect = (t3, n3) => {
            if (this._isClosed) return;
            this.log.warn("".concat(t3, " disconnected")), 0 === this.reconnectAttempts && (this.reconnectStart = Date.now());
            const i2 = (t4) => {
              this.log.warn("could not recover connection after ".concat(this.reconnectAttempts, " attempts, ").concat(t4, "ms. giving up")), this.emit(e.EngineEvent.Disconnected), this.close();
            }, r2 = Date.now() - this.reconnectStart;
            let a2 = this.getNextRetryDelay({ elapsedMs: r2, retryCount: this.reconnectAttempts });
            null !== a2 ? (t3 === md && (a2 = 0), this.log.debug("reconnecting in ".concat(a2, "ms")), this.clearReconnectTimeout(), this.token && this.emit(e.EngineEvent.TokenRefreshed, this.token), this.reconnectTimeout = ja.setTimeout((() => this.attemptReconnect(n3).finally((() => this.reconnectTimeout = void 0))), a2)) : i2(r2);
          }, this.waitForRestarted = () => new Promise(((t3, n3) => {
            this.pcState === gd.Connected && t3();
            const i2 = () => {
              this.off(e.EngineEvent.Disconnected, r2), t3();
            }, r2 = () => {
              this.off(e.EngineEvent.Restarted, i2), n3();
            };
            this.once(e.EngineEvent.Restarted, i2), this.once(e.EngineEvent.Disconnected, r2);
          })), this.updateAndEmitDCBufferStatus = (t3) => {
            if (t3 === vd.RELIABLE) {
              const e2 = this.dataChannelForKind(t3);
              e2 && this.reliableMessageBuffer.alignBufferedAmount(e2.bufferedAmount);
            }
            const n3 = this.isBufferStatusLow(t3);
            void 0 !== n3 && n3 !== this.dcBufferStatus.get(t3) && (this.dcBufferStatus.set(t3, n3), this.emit(e.EngineEvent.DCBufferStatusChanged, n3, t3));
          }, this.isBufferStatusLow = (e2) => {
            const t3 = this.dataChannelForKind(e2);
            if (t3) return t3.bufferedAmount <= t3.bufferedAmountLowThreshold;
          }, this.onRtpMapAvailable = (t3) => {
            const n3 = /* @__PURE__ */ new Map();
            t3.forEach(((e2) => {
              const t4 = e2.codec.toLowerCase();
              Ys(t4) && n3.set(e2.payload, t4);
            })), this.emit(e.EngineEvent.RTPVideoMapUpdate, n3);
          }, this.handleBrowserOnLine = () => Yi(this, void 0, void 0, (function* () {
            if (!this.url) return;
            (yield fetch(Zs(this.url), { method: "HEAD" }).then(((e2) => e2.ok)).catch((() => false))) && (this.log.info("detected network reconnected"), (this.client.currentState === lc.RECONNECTING || this.isWaitingForNetworkReconnect && this.client.currentState === lc.CONNECTED) && (this.clearReconnectTimeout(), this.attemptReconnect(tt.RR_SIGNAL_DISCONNECTED), this.isWaitingForNetworkReconnect = false));
          })), this.handleBrowserOffline = () => Yi(this, void 0, void 0, (function* () {
            if (this.url) try {
              yield Promise.race([fetch(Zs(this.url), { method: "HEAD" }), fs(4e3).then((() => Promise.reject()))]);
            } catch (e2) {
              false === window.navigator.onLine && (this.log.info("detected network interruption"), this.isWaitingForNetworkReconnect = true);
            }
          })), this.log = Wi(null !== (n2 = t2.loggerName) && void 0 !== n2 ? n2 : e.LoggerNames.Engine, (() => this.logContext)), this.loggerOptions = { loggerName: t2.loggerName, loggerContextCb: () => this.logContext }, this.client = new uc(void 0, this.loggerOptions), this.client.signalLatency = this.options.expSignalLatency, this.reconnectPolicy = this.options.reconnectPolicy, this.closingLock = new r(), this.dataProcessLock = new r(), this.dcBufferStatus = /* @__PURE__ */ new Map([[vd.RELIABLE, true], [vd.LOSSY, true], [vd.DATA_TRACK_LOSSY, true]]), this.client.onParticipantUpdate = (t3) => this.emit(e.EngineEvent.ParticipantUpdate, t3), this.client.onConnectionQuality = (t3) => this.emit(e.EngineEvent.ConnectionQualityUpdate, t3), this.client.onRoomUpdate = (t3) => this.emit(e.EngineEvent.RoomUpdate, t3), this.client.onSubscriptionError = (t3) => this.emit(e.EngineEvent.SubscriptionError, t3), this.client.onSubscriptionPermissionUpdate = (t3) => this.emit(e.EngineEvent.SubscriptionPermissionUpdate, t3), this.client.onSpeakersChanged = (t3) => this.emit(e.EngineEvent.SpeakersChanged, t3), this.client.onStreamStateUpdate = (t3) => this.emit(e.EngineEvent.StreamStateChanged, t3), this.client.onRequestResponse = (t3) => this.emit(e.EngineEvent.SignalRequestResponse, t3), this.client.onParticipantUpdate = (t3) => this.emit(e.EngineEvent.ParticipantUpdate, t3), this.client.onJoined = (t3) => this.emit(e.EngineEvent.Joined, t3), this.on(e.EngineEvent.Closing, (() => {
            var e2, t3;
            null === (t3 = (e2 = this.bufferStatusLowClosingFuture).reject) || void 0 === t3 || t3.call(e2, new Aa("engine closed"));
          })), this.bufferStatusLowClosingFuture.promise.catch((() => {
          }));
        }
        get logContext() {
          var e2, t2, n2, i2, r2, a2;
          return { room: null === (t2 = null === (e2 = this.latestJoinResponse) || void 0 === e2 ? void 0 : e2.room) || void 0 === t2 ? void 0 : t2.name, roomID: null === (i2 = null === (n2 = this.latestJoinResponse) || void 0 === n2 ? void 0 : n2.room) || void 0 === i2 ? void 0 : i2.sid, participant: null === (a2 = null === (r2 = this.latestJoinResponse) || void 0 === r2 ? void 0 : r2.participant) || void 0 === a2 ? void 0 : a2.identity, participantID: this.participantSid };
        }
        join(t2, n2, i2, r2) {
          return Yi(this, arguments, void 0, (function(t3, n3, i3, r3) {
            var a2 = this;
            let s2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return (function* () {
              var o2, c2, d2;
              a2._isNewlyCreated = false, a2.url = t3, a2.token = n3, a2.signalOpts = i3, a2.maxJoinAttempts = i3.maxRetries;
              try {
                a2.joinAttempts += 1, a2.setupSignalClientCallbacks();
                const l2 = !s2 && ho() && !ws();
                let u2;
                if (l2) {
                  a2.pcManager || (yield a2.configure(), a2.applyInitialPublisherLayout());
                  const e2 = yield null === (o2 = a2.pcManager) || void 0 === o2 ? void 0 : o2.publisher.createInitialOffer();
                  e2 && (u2 = pc(e2.offer, e2.offerId));
                }
                if (null == r3 ? void 0 : r3.aborted) throw Da.cancelled("Connection aborted");
                if (!s2 && a2.shouldFailOnV1Path) throw a2.shouldFailOnV1Path = false, Da.serviceNotFound("Simulated v1 path failure", "v0-rtc");
                const h2 = yield a2.client.join(t3, n3, i3, r3, s2, u2);
                a2._isClosed = false, a2.latestJoinResponse = h2, a2.participantSid = null === (c2 = h2.participant) || void 0 === c2 ? void 0 : c2.sid, a2.subscriberPrimary = h2.subscriberPrimary, l2 ? null === (d2 = a2.pcManager) || void 0 === d2 || d2.updateConfiguration(a2.makeRTCConfiguration(h2)) : (a2.pcManager || (yield a2.configure(h2, !s2), s2 || a2.applyInitialPublisherLayout()), a2.subscriberPrimary && !h2.fastPublish || a2.negotiate().catch(((e2) => {
                  a2.log.error(e2);
                }))), a2.registerOnLineListener(), a2.clientConfiguration = h2.clientConfiguration, a2.emit(e.EngineEvent.SignalConnected, h2);
                let p2 = h2.serverInfo;
                return p2 || (p2 = { version: h2.serverVersion, region: h2.serverRegion }), a2.log.info("connected to Livekit Server ".concat(Object.entries(p2).map(((e2) => {
                  let t4 = x(e2, 2), n4 = t4[0], i4 = t4[1];
                  return "".concat(n4, ": ").concat(i4);
                })).join(", "))), { joinResponse: h2, serverInfo: p2 };
              } catch (o3) {
                if (o3 instanceof Da) {
                  if (o3.reason === e.ConnectionErrorReason.ServerUnreachable) {
                    if (a2.log.warn("Couldn't connect to server, attempt ".concat(a2.joinAttempts, " of ").concat(a2.maxJoinAttempts)), a2.joinAttempts < a2.maxJoinAttempts) return a2.join(t3, n3, i3, r3, s2);
                  } else if (o3.reason === e.ConnectionErrorReason.ServiceNotFound) return a2.log.warn("Initial connection failed: ".concat(o3.message, " \u2013 Retrying")), a2.pcManager && (a2.pcManager.onStateChange = void 0, yield a2.cleanupPeerConnections()), a2.join(t3, n3, i3, r3, true);
                }
                throw o3;
              }
            })();
          }));
        }
        close() {
          return Yi(this, void 0, void 0, (function* () {
            const t2 = yield this.closingLock.lock();
            if (this.isClosed) t2();
            else try {
              this._isClosed = true, this.joinAttempts = 0, this.emit(e.EngineEvent.Closing), this.removeAllListeners(), this.deregisterOnLineListener(), this.clearPendingReconnect(), this.cleanupLossyDataStats(), yield this.cleanupPeerConnections(), yield this.cleanupClient();
            } finally {
              t2();
            }
          }));
        }
        cleanupPeerConnections() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            const t2 = (e3) => {
              e3 && (e3.onbufferedamountlow = null, e3.onclose = null, e3.onclosing = null, e3.onerror = null, e3.onmessage = null, e3.onopen = null, e3.close());
            };
            t2(this.lossyDC), t2(this.lossyDCSub), t2(this.reliableDC), t2(this.reliableDCSub), t2(this.dataTrackDC), t2(this.dataTrackDCSub), yield null === (e2 = this.pcManager) || void 0 === e2 ? void 0 : e2.close(), this.pcManager = void 0, this.lossyDC = void 0, this.lossyDCSub = void 0, this.reliableDC = void 0, this.reliableDCSub = void 0, this.dataTrackDC = void 0, this.dataTrackDCSub = void 0, this.reliableMessageBuffer = new mc(), this.reliableDataSequence = 1, this.reliableReceivedState.clear();
          }));
        }
        cleanupLossyDataStats() {
          this.lossyDataStatByterate = 0, this.lossyDataStatCurrentBytes = 0, this.lossyDataStatInterval && (clearInterval(this.lossyDataStatInterval), this.lossyDataStatInterval = void 0), this.lossyDataDropCount = 0;
        }
        cleanupClient() {
          return Yi(this, void 0, void 0, (function* () {
            yield this.client.close(), this.client.resetCallbacks();
            for (const e2 of Object.keys(this.pendingTrackResolvers)) this.pendingTrackResolvers[e2].reject();
            this.pendingTrackResolvers = {};
          }));
        }
        addTrack(e2) {
          if (this.pendingTrackResolvers[e2.cid]) throw new _a("a track with the same ID has already been published");
          return new Promise(((t2, n2) => {
            const i2 = setTimeout((() => {
              delete this.pendingTrackResolvers[e2.cid], n2(Da.timeout("publication of local track timed out, no response from server"));
            }), 1e4);
            this.pendingTrackResolvers[e2.cid] = { resolve: (e3) => {
              clearTimeout(i2), t2(e3);
            }, reject: () => {
              clearTimeout(i2), n2(new Error("Cancelled publication by calling unpublish"));
            } }, this.client.sendAddTrack(e2);
          }));
        }
        removeTrack(e2) {
          if (e2.track && this.pendingTrackResolvers[e2.track.id]) {
            const t2 = this.pendingTrackResolvers[e2.track.id].reject;
            t2 && t2(), delete this.pendingTrackResolvers[e2.track.id];
          }
          try {
            return this.pcManager.removeTrack(e2), true;
          } catch (e3) {
            this.log.warn("failed to remove track", { error: e3 });
          }
          return false;
        }
        updateMuteStatus(e2, t2) {
          this.client.sendMuteTrack(e2, t2);
        }
        get dataSubscriberReadyState() {
          var e2;
          return null === (e2 = this.reliableDCSub) || void 0 === e2 ? void 0 : e2.readyState;
        }
        getConnectedServerAddress() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            return null === (e2 = this.pcManager) || void 0 === e2 ? void 0 : e2.getConnectedAddress();
          }));
        }
        setRegionStrategy(e2) {
          this.regionStrategy = e2;
        }
        configure(t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            var i2;
            if (!this.pcManager || this.pcManager.currentState === Vc.NEW) {
              if (t2) {
                this.participantSid = null === (i2 = t2.participant) || void 0 === i2 ? void 0 : i2.sid;
                const e2 = this.makeRTCConfiguration(t2);
                this.pcManager = new Hc(n2 ? "publisher-only" : t2.subscriberPrimary ? "subscriber-primary" : "publisher-primary", this.loggerOptions, e2);
              } else {
                const e2 = this.makeRTCConfiguration();
                this.pcManager = new Hc("publisher-only", this.loggerOptions, e2);
              }
              this.emit(e.EngineEvent.TransportsCreated, this.pcManager.publisher, this.pcManager.subscriber), this.pcManager.onIceCandidate = (e2, t3) => {
                this.client.sendIceCandidate(e2, t3);
              }, this.pcManager.onPublisherOffer = (e2, t3) => {
                this.client.sendOffer(e2, t3);
              }, this.pcManager.onDataChannel = this.handleDataChannel, this.pcManager.onStateChange = (t3, n3, i3) => Yi(this, void 0, void 0, (function* () {
                if (this.log.debug("primary PC state changed ".concat(t3)), ["closed", "disconnected", "failed"].includes(n3) && (this.publisherConnectionPromise = void 0), t3 === Vc.CONNECTED) {
                  const t4 = this.pcState === gd.New;
                  this.pcState = gd.Connected, t4 && this.emit(e.EngineEvent.Connected, this.latestJoinResponse);
                } else t3 === Vc.FAILED && (this.pcState !== gd.Connected && this.pcState !== gd.Reconnecting || (this.pcState = gd.Disconnected, this.handleDisconnect("peerconnection failed", "failed" === i3 ? tt.RR_SUBSCRIBER_FAILED : tt.RR_PUBLISHER_FAILED)));
                const r2 = this.client.isDisconnected || this.client.currentState === lc.RECONNECTING, a2 = [Vc.FAILED, Vc.CLOSING, Vc.CLOSED].includes(t3);
                r2 && a2 && !this._isClosed && this.emit(e.EngineEvent.Offline);
              })), this.pcManager.onTrack = (t3) => {
                0 !== t3.streams.length && this.emit(e.EngineEvent.MediaTrackAdded, t3.track, t3.streams[0], t3.receiver);
              };
            }
          }));
        }
        setupSignalClientCallbacks() {
          this.client.onAnswer = (e2, t2, n2) => Yi(this, void 0, void 0, (function* () {
            this.pcManager && (this.log.debug("received server answer", { RTCSdpType: e2.type, sdp: e2.sdp, midToTrackId: n2 }), this.midToTrackId = n2, yield this.pcManager.setPublisherAnswer(e2, t2));
          })), this.client.onTrickle = (e2, t2) => {
            this.pcManager && (this.log.debug("got ICE candidate from peer", { candidate: e2, target: t2 }), this.pcManager.addIceCandidate(e2, t2));
          }, this.client.onOffer = (e2, t2, n2) => Yi(this, void 0, void 0, (function* () {
            if (this.latestRemoteOfferId = t2, !this.pcManager) return;
            this.midToTrackId = n2;
            const i2 = yield this.pcManager.createSubscriberAnswerFromOffer(e2, t2);
            i2 && this.client.sendAnswer(i2, t2);
          })), this.client.onLocalTrackPublished = (e2) => {
            var t2;
            if (this.log.debug("received trackPublishedResponse", { cid: e2.cid, track: null === (t2 = e2.track) || void 0 === t2 ? void 0 : t2.sid }), !this.pendingTrackResolvers[e2.cid]) return void this.log.error("missing track resolver for ".concat(e2.cid), { cid: e2.cid });
            const n2 = this.pendingTrackResolvers[e2.cid].resolve;
            delete this.pendingTrackResolvers[e2.cid], n2(e2.track);
          }, this.client.onLocalTrackUnpublished = (t2) => {
            this.emit(e.EngineEvent.LocalTrackUnpublished, t2);
          }, this.client.onLocalTrackSubscribed = (t2) => {
            this.emit(e.EngineEvent.LocalTrackSubscribed, t2);
          }, this.client.onTokenRefresh = (t2) => {
            this.token = t2, this.emit(e.EngineEvent.TokenRefreshed, t2);
          }, this.client.onRemoteMuteChanged = (t2, n2) => {
            this.emit(e.EngineEvent.RemoteMute, t2, n2);
          }, this.client.onSubscribedQualityUpdate = (t2) => {
            this.emit(e.EngineEvent.SubscribedQualityUpdate, t2);
          }, this.client.onRoomMoved = (t2) => {
            var n2;
            this.participantSid = null === (n2 = t2.participant) || void 0 === n2 ? void 0 : n2.sid, this.latestJoinResponse && (this.latestJoinResponse.room = t2.room), this.emit(e.EngineEvent.RoomMoved, t2);
          }, this.client.onMediaSectionsRequirement = (e2) => {
            this.addMediaSections(e2.numAudios, e2.numVideos), this.negotiate();
          }, this.client.onPublishDataTrackResponse = (t2) => {
            this.emit(e.EngineEvent.PublishDataTrackResponse, t2);
          }, this.client.onUnPublishDataTrackResponse = (t2) => {
            this.emit(e.EngineEvent.UnPublishDataTrackResponse, t2);
          }, this.client.onDataTrackSubscriberHandles = (t2) => {
            this.emit(e.EngineEvent.DataTrackSubscriberHandles, t2);
          }, this.client.onClose = () => {
            this.handleDisconnect("signal", tt.RR_SIGNAL_DISCONNECTED);
          }, this.client.onLeave = (t2) => {
            switch (this.log.info("client leave request received (action=".concat(null == t2 ? void 0 : t2.action, ")"), { reason: null == t2 ? void 0 : t2.reason }), t2.regions && (this.log.debug("updating regions"), this.emit(e.EngineEvent.ServerRegionsReported, t2.regions)), t2.action) {
              case Zn.DISCONNECT:
                this.emit(e.EngineEvent.Disconnected, null == t2 ? void 0 : t2.reason), this.close();
                break;
              case Zn.RECONNECT:
                this.fullReconnectOnNext = true, this.handleDisconnect(md);
                break;
              case Zn.RESUME:
                this.handleDisconnect(md);
            }
          };
        }
        makeRTCConfiguration(e2) {
          var t2;
          const n2 = Object.assign({}, this.rtcConfig);
          if (((null === (t2 = this.signalOpts) || void 0 === t2 ? void 0 : t2.e2eeEnabled) || this.frameMetadataWorker && !_o()) && Co() && (this.log.debug("E2EE - setting up transports with insertable streams"), n2.encodedInsertableStreams = true), n2.sdpSemantics = "unified-plan", n2.continualGatheringPolicy = "gather_continually", !e2) return n2;
          if (e2.iceServers && !n2.iceServers) {
            const t3 = [];
            e2.iceServers.forEach(((e3) => {
              const n3 = { urls: e3.urls };
              e3.username && (n3.username = e3.username), e3.credential && (n3.credential = e3.credential), t3.push(n3);
            })), n2.iceServers = t3;
          }
          return e2.clientConfiguration && e2.clientConfiguration.forceRelay === $e.ENABLED && (n2.iceTransportPolicy = "relay"), n2;
        }
        applyInitialPublisherLayout() {
          this.createDataChannels(), Os() || this.addMediaSections(3, 3);
        }
        addMediaSections(e2, t2) {
          var n2, i2;
          const r2 = { direction: "recvonly" };
          for (let t3 = 0; t3 < e2; t3++) null === (n2 = this.pcManager) || void 0 === n2 || n2.addPublisherTransceiverOfKind("audio", r2);
          for (let e3 = 0; e3 < t2; e3++) null === (i2 = this.pcManager) || void 0 === i2 || i2.addPublisherTransceiverOfKind("video", r2);
        }
        createDataChannels() {
          this.pcManager && (this.lossyDC && (this.lossyDC.onmessage = null, this.lossyDC.onerror = null, this.lossyDC.onclose = null), this.reliableDC && (this.reliableDC.onmessage = null, this.reliableDC.onerror = null, this.reliableDC.onclose = null), this.dataTrackDC && (this.dataTrackDC.onmessage = null, this.dataTrackDC.onerror = null, this.dataTrackDC.onclose = null), this.lossyDC = this.pcManager.createPublisherDataChannel(ud, { ordered: false, maxRetransmits: 0 }), this.reliableDC = this.pcManager.createPublisherDataChannel(hd, { ordered: true }), this.dataTrackDC = this.pcManager.createPublisherDataChannel(pd, { ordered: false, maxRetransmits: 0 }), this.lossyDC.onmessage = this.handleDataMessage, this.reliableDC.onmessage = this.handleDataMessage, this.dataTrackDC.onmessage = this.handleDataTrackMessage, this.lossyDC.onerror = this.handleDataError, this.reliableDC.onerror = this.handleDataError, this.dataTrackDC.onerror = this.handleDataError, this.lossyDC.onclose = this.handleDataChannelClose(vd.LOSSY), this.reliableDC.onclose = this.handleDataChannelClose(vd.RELIABLE), this.dataTrackDC.onclose = this.handleDataChannelClose(vd.DATA_TRACK_LOSSY), this.lossyDC.bufferedAmountLowThreshold = 65535, this.reliableDC.bufferedAmountLowThreshold = 65535, this.dataTrackDC.bufferedAmountLowThreshold = 65535, this.lossyDC.onbufferedamountlow = () => this.handleBufferedAmountLow(vd.LOSSY), this.reliableDC.onbufferedamountlow = () => this.handleBufferedAmountLow(vd.RELIABLE), this.dataTrackDC.onbufferedamountlow = () => this.handleBufferedAmountLow(vd.DATA_TRACK_LOSSY), this.cleanupLossyDataStats(), this.lossyDataStatInterval = setInterval((() => {
            this.lossyDataStatByterate = this.lossyDataStatCurrentBytes, this.lossyDataStatCurrentBytes = 0;
            const e2 = this.dataChannelForKind(vd.LOSSY);
            if (e2) {
              const t2 = this.lossyDataStatByterate / 10;
              e2.bufferedAmountLowThreshold = Math.min(Math.max(t2, 8192), 262144);
            }
          }), 1e3));
        }
        createSender(e2, t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            let i2;
            if (ks()) i2 = yield this.createTransceiverRTCRtpSender(e2, t2, n2);
            else {
              if (!ys()) throw new Aa("Required webRTC APIs not supported on this device");
              this.log.warn("using add-track fallback"), i2 = yield this.createRTCRtpSender(e2.mediaStreamTrack);
            }
            return this.setupFrameMetadataSender(i2, t2), i2;
          }));
        }
        createSimulcastSender(e2, t2, n2, i2) {
          return Yi(this, void 0, void 0, (function* () {
            let r2;
            if (ks()) r2 = yield this.createSimulcastTransceiverSender(e2, t2, n2, i2);
            else {
              if (!ys()) throw new Aa("Cannot stream on this device");
              this.log.debug("using add-track fallback"), r2 = yield this.createRTCRtpSender(e2.mediaStreamTrack);
            }
            return r2 && this.setupFrameMetadataSender(r2, n2), r2;
          }));
        }
        get frameMetadataWorker() {
          var e2, t2;
          return null === (t2 = null !== (e2 = this.options.frameMetadata) && void 0 !== e2 ? e2 : this.options.packetTrailer) || void 0 === t2 ? void 0 : t2.worker;
        }
        setupFrameMetadataSender(e2) {
          let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var n2, i2, r2;
          const a2 = this.frameMetadataWorker;
          if (!a2 || (null === (n2 = this.signalOpts) || void 0 === n2 ? void 0 : n2.e2eeEnabled)) return;
          const s2 = null !== (i2 = t2.frameMetadata) && void 0 !== i2 ? i2 : t2.packetTrailer, o2 = Ao(s2);
          if (_o()) return void (o2 && (e2.transform = new RTCRtpScriptTransform(a2, { kind: "encode", packetTrailer: s2 })));
          if (!Oo(null !== (r2 = this.options.frameMetadata) && void 0 !== r2 ? r2 : this.options.packetTrailer) || !("createEncodedStreams" in e2)) return void (o2 && this.log.warn("frame metadata transform not supported; skipping write", this.logContext));
          const c2 = e2.createEncodedStreams(), d2 = c2.readable, l2 = c2.writable;
          o2 ? a2.postMessage({ kind: "encode", data: { readableStream: d2, writableStream: l2, packetTrailer: s2 } }, [d2, l2]) : d2.pipeTo(l2);
        }
        createTransceiverRTCRtpSender(e2, t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            if (!this.pcManager) throw new Aa("publisher is closed");
            const i2 = [];
            e2.mediaStream && i2.push(e2.mediaStream), ro(e2) && (e2.codec = t2.videoCodec);
            const r2 = { direction: "sendonly", streams: i2 };
            n2 && (r2.sendEncodings = n2);
            return (yield this.pcManager.addPublisherTransceiver(e2.mediaStreamTrack, r2)).sender;
          }));
        }
        createSimulcastTransceiverSender(e2, t2, n2, i2) {
          return Yi(this, void 0, void 0, (function* () {
            if (!this.pcManager) throw new Aa("publisher is closed");
            const r2 = { direction: "sendonly" };
            i2 && (r2.sendEncodings = i2);
            const a2 = yield this.pcManager.addPublisherTransceiver(t2.mediaStreamTrack, r2);
            if (n2.videoCodec) return e2.setSimulcastTrackSender(n2.videoCodec, a2.sender), a2.sender;
          }));
        }
        createRTCRtpSender(e2) {
          return Yi(this, void 0, void 0, (function* () {
            if (!this.pcManager) throw new Aa("publisher is closed");
            return this.pcManager.addPublisherTrack(e2);
          }));
        }
        attemptReconnect(t2) {
          return Yi(this, void 0, void 0, (function* () {
            var n2, i2, r2;
            if (!this._isClosed) if (this.attemptingReconnect) this.log.warn("already attempting reconnect, returning early");
            else {
              (null === (n2 = this.clientConfiguration) || void 0 === n2 ? void 0 : n2.resumeConnection) !== $e.DISABLED && (null !== (r2 = null === (i2 = this.pcManager) || void 0 === i2 ? void 0 : i2.currentState) && void 0 !== r2 ? r2 : Vc.NEW) !== Vc.NEW || (this.fullReconnectOnNext = true);
              try {
                this.attemptingReconnect = true, this.fullReconnectOnNext ? yield this.restartConnection() : yield this.resumeConnection(t2), this.clearPendingReconnect(), this.fullReconnectOnNext = false;
              } catch (t3) {
                this.reconnectAttempts += 1;
                let n3 = true;
                t3 instanceof Aa ? (this.log.debug("received unrecoverable error", { error: t3 }), n3 = false) : t3 instanceof Ba || (this.fullReconnectOnNext = true), n3 ? this.handleDisconnect("reconnect", tt.RR_UNKNOWN) : (this.log.info("could not recover connection after ".concat(this.reconnectAttempts, " attempts, ").concat(Date.now() - this.reconnectStart, "ms. giving up")), this.emit(e.EngineEvent.Disconnected), yield this.close());
              } finally {
                this.attemptingReconnect = false;
              }
            }
          }));
        }
        getNextRetryDelay(e2) {
          try {
            return this.reconnectPolicy.nextRetryDelayInMs(e2);
          } catch (e3) {
            this.log.warn("encountered error in reconnect policy", { error: e3 });
          }
          return null;
        }
        restartConnection(t2) {
          return Yi(this, void 0, void 0, (function* () {
            var n2, i2, r2;
            try {
              if (!this.url || !this.token) throw new Aa("could not reconnect, url or token not saved");
              let i3;
              this.log.info("reconnecting, attempt: ".concat(this.reconnectAttempts)), this.emit(e.EngineEvent.Restarting), this.client.isDisconnected || (yield this.client.sendLeave()), yield this.cleanupPeerConnections(), yield this.cleanupClient();
              try {
                if (!this.signalOpts) throw this.log.warn("attempted connection restart, without signal options present"), new Ba();
                i3 = (yield this.join(null != t2 ? t2 : this.url, this.token, this.signalOpts, void 0, !this.options.singlePeerConnection)).joinResponse;
              } catch (t3) {
                if (t3 instanceof Da && t3.reason === e.ConnectionErrorReason.NotAllowed) throw new Aa("could not reconnect, token might be expired");
                throw new Ba();
              }
              if (this.shouldFailNext) throw this.shouldFailNext = false, new Error("simulated failure");
              if (this.client.setReconnected(), this.emit(e.EngineEvent.SignalRestarted, i3), yield this.waitForPCReconnected(), this.client.currentState !== lc.CONNECTED) throw new Ba("Signal connection got severed during reconnect");
              null === (n2 = this.regionStrategy) || void 0 === n2 || n2.resetAttempts(), this.emit(e.EngineEvent.Restarted);
            } catch (e2) {
              const t3 = yield null === (i2 = this.regionStrategy) || void 0 === i2 ? void 0 : i2.getNextUrl();
              if (t3) return void (yield this.restartConnection(t3));
              throw null === (r2 = this.regionStrategy) || void 0 === r2 || r2.resetAttempts(), e2;
            }
          }));
        }
        resumeConnection(t2) {
          return Yi(this, void 0, void 0, (function* () {
            var n2;
            if (!this.url || !this.token) throw new Aa("could not reconnect, url or token not saved");
            if (!this.pcManager) throw new Aa("publisher and subscriber connections unset");
            let i2;
            this.log.info("resuming signal connection, attempt ".concat(this.reconnectAttempts)), this.emit(e.EngineEvent.Resuming);
            try {
              this.setupSignalClientCallbacks(), i2 = yield this.client.reconnect(this.url, this.token, this.participantSid, t2);
            } catch (t3) {
              let n3 = "";
              if (t3 instanceof Error && (n3 = t3.message, this.log.error(t3.message, { error: t3 })), t3 instanceof Da && t3.reason === e.ConnectionErrorReason.NotAllowed) throw new Aa("could not reconnect, token might be expired");
              if (t3 instanceof Da && t3.reason === e.ConnectionErrorReason.LeaveRequest) throw t3;
              throw new Ba(n3);
            }
            if (this.emit(e.EngineEvent.SignalResumed), i2) {
              const e2 = this.makeRTCConfiguration(i2);
              this.pcManager.updateConfiguration(e2), this.latestJoinResponse && (this.latestJoinResponse.serverInfo = i2.serverInfo);
            } else this.log.warn("Did not receive reconnect response");
            if (this.shouldFailNext) throw this.shouldFailNext = false, new Error("simulated failure");
            if (yield this.pcManager.triggerIceRestart(), yield this.waitForPCReconnected(), this.client.currentState !== lc.CONNECTED) throw new Ba("Signal connection got severed during reconnect");
            this.client.setReconnected(), "open" === (null === (n2 = this.reliableDC) || void 0 === n2 ? void 0 : n2.readyState) && null === this.reliableDC.id && this.createDataChannels(), (null == i2 ? void 0 : i2.lastMessageSeq) && this.resendReliableMessagesForResume(i2.lastMessageSeq), this.emit(e.EngineEvent.Resumed);
          }));
        }
        waitForPCInitialConnection(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            if (!this.pcManager) throw new Aa("PC manager is closed");
            yield this.pcManager.ensurePCTransportConnection(t2, e2);
          }));
        }
        waitForPCReconnected() {
          return Yi(this, void 0, void 0, (function* () {
            this.pcState = gd.Reconnecting, this.log.debug("waiting for peer connection to reconnect");
            try {
              if (yield fs(2e3), !this.pcManager) throw new Aa("PC manager is closed");
              yield this.pcManager.ensurePCTransportConnection(void 0, this.peerConnectionTimeout), this.pcState = gd.Connected;
            } catch (e2) {
              throw this.pcState = gd.Disconnected, Da.internal("could not establish PC connection, ".concat(e2.message));
            }
          }));
        }
        publishRpcAck(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            const n2 = new yt({ destinationIdentities: [e2], kind: bt.RELIABLE, value: { case: "rpcAck", value: new _t({ requestId: t2 }) } });
            yield this.sendDataPacket(n2, vd.RELIABLE);
          }));
        }
        sendDataPacket(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            var n2, i2;
            if (yield this.ensurePublisherConnected(t2), this.e2eeManager && this.e2eeManager.isDataChannelEncryptionEnabled) {
              const t3 = Io(e2);
              if (t3) {
                const n3 = yield this.e2eeManager.encryptData(t3.toBinary());
                e2.value = { case: "encryptedPacket", value: new Tt({ encryptedValue: n3.payload, iv: n3.iv, keyIndex: n3.keyIndex }) };
              }
            }
            t2 === vd.RELIABLE && (e2.sequence = this.reliableDataSequence, this.reliableDataSequence += 1);
            const r2 = e2.toBinary(), a2 = Math.min(null !== (i2 = null === (n2 = this.pcManager) || void 0 === n2 ? void 0 : n2.getMaxPublisherMessageSize()) && void 0 !== i2 ? i2 : 64e3, 64e3);
            if (void 0 !== a2 && 0 !== a2 && r2.byteLength > a2) throw new xa("cannot publish data packet larger than ".concat(a2, " bytes (got ").concat(r2.byteLength, ")"));
            switch (t2) {
              case vd.LOSSY:
              case vd.DATA_TRACK_LOSSY:
                return this.sendLossyBytes(r2, t2);
              case vd.RELIABLE:
                const n3 = this.dataChannelForKind(t2);
                if (n3) {
                  if (yield this.waitForBufferStatusLow(t2), this.reliableMessageBuffer.push({ data: r2, sequence: e2.sequence }), this.attemptingReconnect) return;
                  n3.send(r2);
                }
                this.updateAndEmitDCBufferStatus(t2);
            }
          }));
        }
        sendLossyBytes(e2, t2) {
          return Yi(this, arguments, void 0, (function(e3, t3) {
            var n2 = this;
            let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "drop";
            return (function* () {
              yield n2.ensurePublisherConnected(t3);
              const r2 = n2.dataChannelForKind(t3);
              if (r2) {
                if (!n2.isBufferStatusLow(t3)) switch (i2) {
                  case "wait":
                    yield n2.waitForBufferStatusLow(t3);
                    break;
                  case "drop":
                    return n2.lossyDataDropCount += 1, void (n2.lossyDataDropCount % 100 == 0 && n2.log.warn("dropping lossy data channel messages, total dropped: ".concat(n2.lossyDataDropCount)));
                }
                if (n2.lossyDataStatCurrentBytes += e3.byteLength, n2.attemptingReconnect) return;
                r2.send(e3);
              }
              n2.updateAndEmitDCBufferStatus(t3);
            })();
          }));
        }
        resendReliableMessagesForResume(e2) {
          return Yi(this, void 0, void 0, (function* () {
            yield this.ensurePublisherConnected(vd.RELIABLE);
            const t2 = this.dataChannelForKind(vd.RELIABLE);
            t2 && (this.reliableMessageBuffer.popToSequence(e2), this.reliableMessageBuffer.getAll().forEach(((e3) => {
              t2.send(e3.data);
            }))), this.updateAndEmitDCBufferStatus(vd.RELIABLE);
          }));
        }
        waitForBufferStatusLow(e2) {
          return Yi(this, void 0, void 0, (function* () {
            return new ha(((t2, n2) => Yi(this, void 0, void 0, (function* () {
              if (this.isClosed && n2(new Aa("engine closed")), this.isBufferStatusLow(e2)) t2();
              else {
                const i2 = this.dataChannelForKind(e2);
                if (!i2) return void n2(new Aa("DataChannel not found, kind: ".concat(e2)));
                this.bufferStatusLowClosingFuture.promise.catch(((e3) => n2(e3))), i2.addEventListener("bufferedamountlow", (() => t2()), { once: true });
              }
            }))));
          }));
        }
        ensureDataTransportConnected(e2) {
          return Yi(this, arguments, void 0, (function(e3) {
            var t2 = this;
            let n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.subscriberPrimary;
            return (function* () {
              var i2;
              if (!t2.pcManager) throw new Aa("PC manager is closed");
              const r2 = n2 ? t2.pcManager.subscriber : t2.pcManager.publisher, a2 = n2 ? "Subscriber" : "Publisher";
              if (!r2) throw Da.internal("".concat(a2, " connection not set"));
              let s2 = false;
              n2 || t2.dataChannelForKind(e3, n2) || (t2.createDataChannels(), s2 = true), s2 || n2 || t2.pcManager.publisher.isICEConnected || "checking" === t2.pcManager.publisher.getICEConnectionState() || (s2 = true), s2 && t2.negotiate().catch(((e4) => {
                t2.log.error(e4);
              }));
              const o2 = t2.dataChannelForKind(e3, n2);
              if ("open" === (null == o2 ? void 0 : o2.readyState)) return;
              const c2 = (/* @__PURE__ */ new Date()).getTime() + t2.peerConnectionTimeout;
              for (; (/* @__PURE__ */ new Date()).getTime() < c2; ) {
                if (r2.isICEConnected && "open" === (null === (i2 = t2.dataChannelForKind(e3, n2)) || void 0 === i2 ? void 0 : i2.readyState)) return;
                yield fs(50);
              }
              throw Da.internal("could not establish ".concat(a2, " connection, state: ").concat(r2.getICEConnectionState()));
            })();
          }));
        }
        ensurePublisherConnected(e2) {
          return Yi(this, void 0, void 0, (function* () {
            this.publisherConnectionPromise || (this.publisherConnectionPromise = this.ensureDataTransportConnected(e2, false)), yield this.publisherConnectionPromise;
          }));
        }
        verifyTransport() {
          if (!this.pcManager) return false;
          return !![Vc.CONNECTING, Vc.CONNECTED].includes(this.pcManager.currentState) && !(!this.client.ws || this.client.ws.readyState === WebSocket.CLOSED);
        }
        negotiate() {
          return Yi(this, void 0, void 0, (function* () {
            return new ha(((t2, n2) => Yi(this, void 0, void 0, (function* () {
              if (!this.pcManager) return void n2(new Na("PC manager is closed"));
              this.pcManager.requirePublisher(), 0 != this.pcManager.publisher.getTransceivers().length || this.lossyDC || this.reliableDC || this.dataTrackDC || this.createDataChannels();
              const i2 = new AbortController(), r2 = () => {
                i2.abort(), this.log.debug("engine disconnected while negotiation was ongoing"), t2();
              };
              this.isClosed && n2(new Na("cannot negotiate on closed engine")), this.on(e.EngineEvent.Closing, r2), this.on(e.EngineEvent.Restarting, r2), this.pcManager.publisher.off(_c, this.onRtpMapAvailable), this.pcManager.publisher.once(_c, this.onRtpMapAvailable);
              try {
                yield this.pcManager.negotiate(i2), t2();
              } catch (e2) {
                if (i2.signal.aborted) return void t2();
                e2 instanceof Na && (this.fullReconnectOnNext = true), this.handleDisconnect("negotiation", tt.RR_UNKNOWN), e2 instanceof Error ? n2(e2) : n2(new Error(String(e2)));
              } finally {
                this.off(e.EngineEvent.Closing, r2), this.off(e.EngineEvent.Restarting, r2);
              }
            }))));
          }));
        }
        dataChannelForKind(e2, t2) {
          switch (e2) {
            case vd.RELIABLE:
              return t2 ? this.reliableDCSub : this.reliableDC;
            case vd.LOSSY:
              return t2 ? this.lossyDCSub : this.lossyDC;
            case vd.DATA_TRACK_LOSSY:
              return t2 ? this.dataTrackDCSub : this.dataTrackDC;
          }
        }
        sendSyncState(e2, t2, n2) {
          var i2, r2, a2, s2;
          if (!this.pcManager) return void this.log.warn("sync state cannot be sent without peer connection setup");
          const o2 = this.pcManager.publisher.getLocalDescription(), c2 = this.pcManager.publisher.getRemoteDescription(), d2 = null === (i2 = this.pcManager.subscriber) || void 0 === i2 ? void 0 : i2.getRemoteDescription(), l2 = null === (r2 = this.pcManager.subscriber) || void 0 === r2 ? void 0 : r2.getLocalDescription(), u2 = null === (s2 = null === (a2 = this.signalOpts) || void 0 === a2 ? void 0 : a2.autoSubscribe) || void 0 === s2 || s2, h2 = new Array(), p2 = new Array();
          e2.forEach(((e3) => {
            e3.isDesired !== u2 && h2.push(e3.trackSid), e3.isEnabled || p2.push(e3.trackSid);
          })), this.client.sendSyncState(new vi({ answer: "publisher-only" === this.pcManager.mode ? c2 ? pc({ sdp: c2.sdp, type: c2.type }) : void 0 : l2 ? pc({ sdp: l2.sdp, type: l2.type }) : void 0, offer: "publisher-only" === this.pcManager.mode ? o2 ? pc({ sdp: o2.sdp, type: o2.type }) : void 0 : d2 ? pc({ sdp: d2.sdp, type: d2.type }) : void 0, subscription: new Kn({ trackSids: h2, subscribe: !u2, participantTracks: [] }), publishTracks: os(t2), dataChannels: this.dataChannelsInfo(), trackSidsDisabled: p2, datachannelReceiveStates: this.reliableReceivedState.map(((e3, t3) => new fi({ publisherSid: t3, lastSeq: e3 }))), publishDataTracks: n2.map(((e3) => new On({ info: ac.toProtobuf(e3) }))) }));
        }
        failNext() {
          this.shouldFailNext = true;
        }
        failNextV1Path() {
          this.shouldFailOnV1Path = true;
        }
        dataChannelsInfo() {
          const e2 = [], t2 = (t3, n2) => {
            void 0 !== (null == t3 ? void 0 : t3.id) && null !== t3.id && e2.push(new ki({ label: t3.label, id: t3.id, target: n2 }));
          };
          return t2(this.dataChannelForKind(vd.LOSSY), Cn.PUBLISHER), t2(this.dataChannelForKind(vd.RELIABLE), Cn.PUBLISHER), t2(this.dataChannelForKind(vd.LOSSY, true), Cn.SUBSCRIBER), t2(this.dataChannelForKind(vd.RELIABLE, true), Cn.SUBSCRIBER), e2;
        }
        clearReconnectTimeout() {
          this.reconnectTimeout && ja.clearTimeout(this.reconnectTimeout);
        }
        clearPendingReconnect() {
          this.clearReconnectTimeout(), this.reconnectAttempts = 0;
        }
        registerOnLineListener() {
          _s() && (window.addEventListener("online", this.handleBrowserOnLine), window.addEventListener("offline", this.handleBrowserOffline));
        }
        deregisterOnLineListener() {
          _s() && (window.removeEventListener("online", this.handleBrowserOnLine), window.removeEventListener("offline", this.handleBrowserOffline));
        }
        getTrackIdForReceiver(e2) {
          var t2;
          const n2 = null === (t2 = this.pcManager) || void 0 === t2 ? void 0 : t2.getMidForReceiver(e2);
          if (n2) {
            const e3 = Object.entries(this.midToTrackId).find(((e4) => x(e4, 1)[0] === n2));
            if (e3) return e3[1];
          }
        }
      }
      function kd(e2, t2) {
        const n2 = e2.participantIdentity ? e2.participantIdentity : t2.participantIdentity;
        e2.participantIdentity = n2, t2.participantIdentity = n2;
        const i2 = 0 !== e2.destinationIdentities.length ? e2.destinationIdentities : t2.destinationIdentities;
        e2.destinationIdentities = i2, t2.destinationIdentities = i2;
      }
      const yd = 5e3;
      class bd {
        static fetchRegionSettings(e2, t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            const i2 = yield bd.fetchLock.lock();
            try {
              const i3 = yield fetch("".concat((function(e3) {
                return "".concat(e3.protocol.replace("ws", "http"), "//").concat(e3.host, "/settings");
              })(e2), "/regions"), { headers: { authorization: "Bearer ".concat(t2) }, signal: n2 });
              if (i3.ok) {
                const e3 = (function(e4) {
                  var t4;
                  const n3 = e4.get("Cache-Control");
                  if (n3) {
                    const e5 = null === (t4 = n3.match(/(?:^|[,\s])max-age=(\d+)/)) || void 0 === t4 ? void 0 : t4[1];
                    if (e5) return parseInt(e5, 10);
                  }
                })(i3.headers), t3 = e3 ? 1e3 * e3 : yd;
                return { regionSettings: yield i3.json(), updatedAtInMs: Date.now(), maxAgeInMs: t3 };
              }
              throw 401 === i3.status ? Da.notAllowed("Could not fetch region settings: ".concat(i3.statusText), i3.status) : Da.internal("Could not fetch region settings: ".concat(i3.statusText));
            } catch (e3) {
              throw e3 instanceof Da ? e3 : (null == n2 ? void 0 : n2.aborted) ? Da.cancelled("Region fetching was aborted") : Da.serverUnreachable("Could not fetch region settings, ".concat(e3 instanceof Error ? "".concat(e3.name, ": ").concat(e3.message) : e3));
            } finally {
              i2();
            }
          }));
        }
        static scheduleRefetch(t2, n2, i2) {
          return Yi(this, void 0, void 0, (function* () {
            const r2 = bd.settingsTimeouts.get(t2.hostname);
            clearTimeout(r2), bd.settingsTimeouts.set(t2.hostname, setTimeout((() => Yi(this, void 0, void 0, (function* () {
              try {
                const e2 = yield bd.fetchRegionSettings(t2, n2);
                bd.updateCachedRegionSettings(t2, n2, e2);
              } catch (r3) {
                if (r3 instanceof Da && r3.reason === e.ConnectionErrorReason.NotAllowed) return void Vi.debug("token is not valid, cancelling auto region refresh");
                Vi.debug("auto refetching of region settings failed", { error: r3 }), bd.scheduleRefetch(t2, n2, i2);
              }
            }))), i2));
          }));
        }
        static updateCachedRegionSettings(e2, t2, n2) {
          bd.cache.set(e2.hostname, n2), bd.scheduleRefetch(e2, t2, n2.maxAgeInMs);
        }
        static stopRefetch(e2) {
          const t2 = bd.settingsTimeouts.get(e2);
          t2 && (clearTimeout(t2), bd.settingsTimeouts.delete(e2));
        }
        static scheduleCleanup(e2) {
          let t2 = bd.connectionTrackers.get(e2);
          t2 && (t2.cleanupTimeout && clearTimeout(t2.cleanupTimeout), t2.cleanupTimeout = setTimeout((() => {
            const t3 = bd.connectionTrackers.get(e2);
            t3 && 0 === t3.connectionCount && (Vi.debug("stopping region refetch after disconnect delay", { hostname: e2 }), bd.stopRefetch(e2)), t3 && (t3.cleanupTimeout = void 0);
          }), 3e4));
        }
        static cancelCleanup(e2) {
          const t2 = bd.connectionTrackers.get(e2);
          (null == t2 ? void 0 : t2.cleanupTimeout) && (clearTimeout(t2.cleanupTimeout), t2.cleanupTimeout = void 0);
        }
        notifyConnected() {
          const e2 = this.serverUrl.hostname;
          let t2 = bd.connectionTrackers.get(e2);
          t2 || (t2 = { connectionCount: 0 }, bd.connectionTrackers.set(e2, t2)), t2.connectionCount++, bd.cancelCleanup(e2);
        }
        notifyDisconnected() {
          const e2 = this.serverUrl.hostname, t2 = bd.connectionTrackers.get(e2);
          t2 && (t2.connectionCount = Math.max(0, t2.connectionCount - 1), 0 === t2.connectionCount && bd.scheduleCleanup(e2));
        }
        constructor(e2, t2) {
          this.attemptedRegions = [], this.serverUrl = new URL(e2), this.token = t2;
        }
        updateToken(e2) {
          var t2;
          this.token = e2;
          const n2 = this.getServerUrl(), i2 = bd.cache.get(n2.hostname);
          bd.scheduleRefetch(this.serverUrl, this.token, null !== (t2 = null == i2 ? void 0 : i2.maxAgeInMs) && void 0 !== t2 ? t2 : yd);
        }
        isCloud() {
          return As(this.serverUrl);
        }
        getServerUrl() {
          return this.serverUrl;
        }
        fetchRegionSettings(e2) {
          return Yi(this, void 0, void 0, (function* () {
            return bd.fetchRegionSettings(this.serverUrl, this.token, e2);
          }));
        }
        getNextBestRegionUrl(e2) {
          return Yi(this, void 0, void 0, (function* () {
            if (!this.isCloud()) throw Error("region availability is only supported for LiveKit Cloud domains");
            let t2 = bd.cache.get(this.serverUrl.hostname);
            (!t2 || Date.now() - t2.updatedAtInMs > t2.maxAgeInMs) && (t2 = yield this.fetchRegionSettings(e2), bd.updateCachedRegionSettings(this.serverUrl, this.token, t2));
            const n2 = t2.regionSettings.regions.filter(((e3) => !this.attemptedRegions.find(((t3) => t3.url === e3.url))));
            if (n2.length > 0) {
              const e3 = n2[0];
              return this.attemptedRegions.push(e3), Vi.debug("next region: ".concat(e3.region)), e3.url;
            }
            return null;
          }));
        }
        resetAttempts() {
          this.attemptedRegions = [];
        }
        setServerReportedRegions(e2) {
          bd.updateCachedRegionSettings(this.serverUrl, this.token, e2);
        }
      }
      bd.cache = /* @__PURE__ */ new Map(), bd.settingsTimeouts = /* @__PURE__ */ new Map(), bd.connectionTrackers = /* @__PURE__ */ new Map(), bd.fetchLock = new r();
      class Td {
        get info() {
          return this._info;
        }
        validateBytesReceived() {
          let t2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if ("number" == typeof this.totalByteSize && 0 !== this.totalByteSize) {
            if (t2 && this.bytesReceived < this.totalByteSize) throw new Fa("Not enough chunk(s) received - expected ".concat(this.totalByteSize, " bytes of data total, only received ").concat(this.bytesReceived, " bytes"), e.DataStreamErrorReason.Incomplete);
            if (this.bytesReceived > this.totalByteSize) throw new Fa("Extra chunk(s) received - expected ".concat(this.totalByteSize, " bytes of data total, received ").concat(this.bytesReceived, " bytes"), e.DataStreamErrorReason.LengthExceeded);
          }
        }
        constructor(e2, t2, n2) {
          this.reader = t2, this.totalByteSize = n2, this._info = e2, this.bytesReceived = 0;
        }
      }
      class Sd extends Td {
        handleChunkReceived(e2) {
          var t2;
          this.bytesReceived += e2.content.byteLength, this.validateBytesReceived();
          const n2 = this.totalByteSize ? this.bytesReceived / this.totalByteSize : void 0;
          null === (t2 = this.onProgress) || void 0 === t2 || t2.call(this, n2);
        }
        [Symbol.asyncIterator]() {
          const e2 = this.reader.getReader();
          e2.closed.catch((() => {
          }));
          const t2 = () => {
            e2.releaseLock(), this.signal = void 0;
          };
          return { next: () => Yi(this, void 0, void 0, (function* () {
            try {
              const t3 = this.signal;
              if (null == t3 ? void 0 : t3.aborted) throw t3.reason;
              const n2 = yield new Promise(((n3, i2) => {
                if (t3) {
                  const r2 = () => i2(t3.reason);
                  t3.addEventListener("abort", r2, { once: true }), e2.read().then(n3, i2).finally((() => {
                    t3.removeEventListener("abort", r2);
                  }));
                } else e2.read().then(n3, i2);
              }));
              return n2.done ? (this.validateBytesReceived(true), { done: true, value: void 0 }) : (this.handleChunkReceived(n2.value), { done: false, value: n2.value.content });
            } catch (e3) {
              throw t2(), e3;
            }
          })), return() {
            return Yi(this, void 0, void 0, (function* () {
              return t2(), { done: true, value: void 0 };
            }));
          } };
        }
        withAbortSignal(e2) {
          return this.signal = e2, this;
        }
        readAll() {
          return Yi(this, arguments, void 0, (function() {
            var e2 = this;
            let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return (function* () {
              var n2, i2, r2, a2;
              let s2 = /* @__PURE__ */ new Set();
              const o2 = t2.signal ? e2.withAbortSignal(t2.signal) : e2;
              try {
                for (var c2, d2 = true, l2 = er(o2); !(n2 = (c2 = yield l2.next()).done); d2 = true) {
                  a2 = c2.value, d2 = false;
                  const e3 = a2;
                  s2.add(e3);
                }
              } catch (e3) {
                i2 = { error: e3 };
              } finally {
                try {
                  d2 || n2 || !(r2 = l2.return) || (yield r2.call(l2));
                } finally {
                  if (i2) throw i2.error;
                }
              }
              return Array.from(s2);
            })();
          }));
        }
      }
      class Ed extends Td {
        constructor(e2, t2, n2) {
          super(e2, t2, n2), this.receivedChunks = /* @__PURE__ */ new Map();
        }
        handleChunkReceived(e2) {
          var t2;
          const n2 = eo(e2.chunkIndex), i2 = this.receivedChunks.get(n2);
          if (i2 && i2.version > e2.version) return;
          this.receivedChunks.set(n2, e2), this.bytesReceived += e2.content.byteLength, this.validateBytesReceived();
          const r2 = this.totalByteSize ? this.bytesReceived / this.totalByteSize : void 0;
          null === (t2 = this.onProgress) || void 0 === t2 || t2.call(this, r2);
        }
        [Symbol.asyncIterator]() {
          const t2 = this.reader.getReader();
          t2.closed.catch((() => {
          }));
          const n2 = new TextDecoder("utf-8", { fatal: true }), i2 = this.signal, r2 = () => {
            t2.releaseLock(), this.signal = void 0;
          };
          return { next: () => Yi(this, void 0, void 0, (function* () {
            try {
              if (null == i2 ? void 0 : i2.aborted) throw i2.reason;
              const r3 = yield new Promise(((e2, n3) => {
                if (i2) {
                  const r4 = () => n3(i2.reason);
                  i2.addEventListener("abort", r4, { once: true }), t2.read().then(e2, n3).finally((() => {
                    i2.removeEventListener("abort", r4);
                  }));
                } else t2.read().then(e2, n3);
              }));
              if (r3.done) return this.validateBytesReceived(true), { done: true, value: void 0 };
              {
                let t3;
                this.handleChunkReceived(r3.value);
                try {
                  t3 = n2.decode(r3.value.content);
                } catch (t4) {
                  throw new Fa("Cannot decode datastream chunk ".concat(r3.value.chunkIndex, " as text: ").concat(t4), e.DataStreamErrorReason.DecodeFailed);
                }
                return { done: false, value: t3 };
              }
            } catch (e2) {
              throw r2(), e2;
            }
          })), return() {
            return Yi(this, void 0, void 0, (function* () {
              return r2(), { done: true, value: void 0 };
            }));
          } };
        }
        withAbortSignal(e2) {
          return this.signal = e2, this;
        }
        readAll() {
          return Yi(this, arguments, void 0, (function() {
            var e2 = this;
            let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return (function* () {
              var n2, i2, r2, a2;
              let s2 = "";
              const o2 = t2.signal ? e2.withAbortSignal(t2.signal) : e2;
              try {
                for (var c2, d2 = true, l2 = er(o2); !(n2 = (c2 = yield l2.next()).done); d2 = true) {
                  a2 = c2.value, d2 = false;
                  s2 += a2;
                }
              } catch (e3) {
                i2 = { error: e3 };
              } finally {
                try {
                  d2 || n2 || !(r2 = l2.return) || (yield r2.call(l2));
                } finally {
                  if (i2) throw i2.error;
                }
              }
              return s2;
            })();
          }));
        }
      }
      class Cd {
        constructor() {
          this.log = Vi, this.byteStreamControllers = /* @__PURE__ */ new Map(), this.textStreamControllers = /* @__PURE__ */ new Map(), this.byteStreamHandlers = /* @__PURE__ */ new Map(), this.textStreamHandlers = /* @__PURE__ */ new Map(), this.isConnected = false, this.bufferedPackets = [];
        }
        setConnected(e2) {
          this.isConnected = e2, e2 && this.flushBufferedPackets();
        }
        flushBufferedPackets() {
          const e2 = this.bufferedPackets;
          this.bufferedPackets = [];
          for (const t2 of e2) {
            const e3 = t2.packet, n2 = t2.encryptionType;
            this.handleDataStreamPacket(e3, n2);
          }
        }
        registerTextStreamHandler(t2, n2) {
          if (this.textStreamHandlers.has(t2)) throw new Fa('A text stream handler for topic "'.concat(t2, '" has already been set.'), e.DataStreamErrorReason.HandlerAlreadyRegistered);
          this.textStreamHandlers.set(t2, n2);
        }
        unregisterTextStreamHandler(e2) {
          this.textStreamHandlers.delete(e2);
        }
        registerByteStreamHandler(t2, n2) {
          if (this.byteStreamHandlers.has(t2)) throw new Fa('A byte stream handler for topic "'.concat(t2, '" has already been set.'), e.DataStreamErrorReason.HandlerAlreadyRegistered);
          this.byteStreamHandlers.set(t2, n2);
        }
        unregisterByteStreamHandler(e2) {
          this.byteStreamHandlers.delete(e2);
        }
        clearControllers() {
          this.byteStreamControllers.clear(), this.textStreamControllers.clear(), this.bufferedPackets = [];
        }
        validateParticipantHasNoActiveDataStreams(t2) {
          const n2 = Array.from(this.textStreamControllers.entries()).filter(((e2) => e2[1].sendingParticipantIdentity === t2)), i2 = Array.from(this.byteStreamControllers.entries()).filter(((e2) => e2[1].sendingParticipantIdentity === t2));
          if (n2.length > 0 || i2.length > 0) {
            const s2 = new Fa("Participant ".concat(t2, " unexpectedly disconnected in the middle of sending data"), e.DataStreamErrorReason.AbnormalEnd);
            for (const e2 of i2) {
              var r2 = x(e2, 2);
              const t3 = r2[0];
              r2[1].controller.error(s2), this.byteStreamControllers.delete(t3);
            }
            for (const e2 of n2) {
              var a2 = x(e2, 2);
              const t3 = a2[0];
              a2[1].controller.error(s2), this.textStreamControllers.delete(t3);
            }
          }
        }
        handleDataStreamPacket(e2, t2) {
          if (this.isConnected) switch (e2.value.case) {
            case "streamHeader":
              return this.handleStreamHeader(e2.value.value, e2.participantIdentity, t2);
            case "streamChunk":
              return this.handleStreamChunk(e2.value.value, t2);
            case "streamTrailer":
              return this.handleStreamTrailer(e2.value.value, t2);
            default:
              throw new Error('DataPacket of value "'.concat(e2.value.case, '" is not data stream related!'));
          }
          else this.bufferedPackets.push({ packet: e2, encryptionType: t2 });
        }
        handleStreamHeader(t2, n2, i2) {
          var r2;
          if ("byteHeader" === t2.contentHeader.case) {
            const a2 = this.byteStreamHandlers.get(t2.topic);
            if (!a2) return void this.log.debug("ignoring incoming byte stream due to no handler for topic", t2.topic);
            let s2;
            const o2 = { id: t2.streamId, name: null !== (r2 = t2.contentHeader.value.name) && void 0 !== r2 ? r2 : "unknown", mimeType: t2.mimeType, size: t2.totalLength ? Number(t2.totalLength) : void 0, topic: t2.topic, timestamp: eo(t2.timestamp), attributes: t2.attributes, encryptionType: i2 }, c2 = new ReadableStream({ start: (i3) => {
              if (s2 = i3, this.textStreamControllers.has(t2.streamId)) throw new Fa("A data stream read is already in progress for a stream with id ".concat(t2.streamId, "."), e.DataStreamErrorReason.AlreadyOpened);
              this.byteStreamControllers.set(t2.streamId, { info: o2, controller: s2, startTime: Date.now(), sendingParticipantIdentity: n2 });
            } });
            a2(new Sd(o2, c2, eo(t2.totalLength)), { identity: n2 });
          } else if ("textHeader" === t2.contentHeader.case) {
            const r3 = this.textStreamHandlers.get(t2.topic);
            if (!r3) return void this.log.debug("ignoring incoming text stream due to no handler for topic", t2.topic);
            let a2;
            const s2 = { id: t2.streamId, mimeType: t2.mimeType, size: t2.totalLength ? Number(t2.totalLength) : void 0, topic: t2.topic, timestamp: Number(t2.timestamp), attributes: t2.attributes, encryptionType: i2, attachedStreamIds: t2.contentHeader.value.attachedStreamIds }, o2 = new ReadableStream({ start: (i3) => {
              if (a2 = i3, this.textStreamControllers.has(t2.streamId)) throw new Fa("A data stream read is already in progress for a stream with id ".concat(t2.streamId, "."), e.DataStreamErrorReason.AlreadyOpened);
              this.textStreamControllers.set(t2.streamId, { info: s2, controller: a2, startTime: Date.now(), sendingParticipantIdentity: n2 });
            } });
            r3(new Ed(s2, o2, eo(t2.totalLength)), { identity: n2 });
          }
        }
        handleStreamChunk(t2, n2) {
          const i2 = this.byteStreamControllers.get(t2.streamId);
          i2 && (i2.info.encryptionType !== n2 ? (i2.controller.error(new Fa("Encryption type mismatch for stream ".concat(t2.streamId, ". Expected ").concat(n2, ", got ").concat(i2.info.encryptionType), e.DataStreamErrorReason.EncryptionTypeMismatch)), this.byteStreamControllers.delete(t2.streamId)) : t2.content.length > 0 && i2.controller.enqueue(t2));
          const r2 = this.textStreamControllers.get(t2.streamId);
          r2 && (r2.info.encryptionType !== n2 ? (r2.controller.error(new Fa("Encryption type mismatch for stream ".concat(t2.streamId, ". Expected ").concat(n2, ", got ").concat(r2.info.encryptionType), e.DataStreamErrorReason.EncryptionTypeMismatch)), this.textStreamControllers.delete(t2.streamId)) : t2.content.length > 0 && r2.controller.enqueue(t2));
        }
        handleStreamTrailer(t2, n2) {
          const i2 = this.textStreamControllers.get(t2.streamId);
          i2 && (i2.info.encryptionType !== n2 ? i2.controller.error(new Fa("Encryption type mismatch for stream ".concat(t2.streamId, ". Expected ").concat(n2, ", got ").concat(i2.info.encryptionType), e.DataStreamErrorReason.EncryptionTypeMismatch)) : (i2.info.attributes = Object.assign(Object.assign({}, i2.info.attributes), t2.attributes), i2.controller.close(), this.textStreamControllers.delete(t2.streamId)));
          const r2 = this.byteStreamControllers.get(t2.streamId);
          r2 && (r2.info.encryptionType !== n2 ? r2.controller.error(new Fa("Encryption type mismatch for stream ".concat(t2.streamId, ". Expected ").concat(n2, ", got ").concat(r2.info.encryptionType), e.DataStreamErrorReason.EncryptionTypeMismatch)) : (r2.info.attributes = Object.assign(Object.assign({}, r2.info.attributes), t2.attributes), r2.controller.close()), this.byteStreamControllers.delete(t2.streamId));
        }
      }
      class wd {
        constructor(e2, t2, n2) {
          this.writableStream = e2, this.defaultWriter = e2.getWriter(), this.onClose = n2, this.info = t2;
        }
        write(e2) {
          return this.defaultWriter.write(e2);
        }
        close() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            yield this.defaultWriter.close(), this.defaultWriter.releaseLock(), null === (e2 = this.onClose) || void 0 === e2 || e2.call(this);
          }));
        }
      }
      class Rd extends wd {
      }
      class Pd extends wd {
      }
      class Id {
        constructor(e2, t2) {
          this.engine = e2, this.log = t2;
        }
        setupEngine(e2) {
          this.engine = e2;
        }
        sendText(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            var n2;
            const i2 = crypto.randomUUID(), r2 = new TextEncoder().encode(e2).byteLength, a2 = null === (n2 = null == t2 ? void 0 : t2.attachments) || void 0 === n2 ? void 0 : n2.map((() => crypto.randomUUID())), s2 = new Array(a2 ? a2.length + 1 : 1).fill(0), o2 = (e3, n3) => {
              var i3;
              s2[n3] = e3;
              const r3 = s2.reduce(((e4, t3) => e4 + t3), 0);
              null === (i3 = null == t2 ? void 0 : t2.onProgress) || void 0 === i3 || i3.call(t2, r3);
            }, c2 = yield this.streamText({ streamId: i2, totalSize: r2, destinationIdentities: null == t2 ? void 0 : t2.destinationIdentities, topic: null == t2 ? void 0 : t2.topic, attachedStreamIds: a2, attributes: null == t2 ? void 0 : t2.attributes });
            return yield c2.write(e2), o2(1, 0), yield c2.close(), (null == t2 ? void 0 : t2.attachments) && a2 && (yield Promise.all(t2.attachments.map(((e3, n3) => Yi(this, void 0, void 0, (function* () {
              return this._sendFile(a2[n3], e3, { topic: t2.topic, mimeType: e3.type, onProgress: (e4) => {
                o2(e4, n3 + 1);
              } });
            })))))), c2.info;
          }));
        }
        streamText(t2) {
          return Yi(this, void 0, void 0, (function* () {
            var n2, i2, r2;
            const a2 = null !== (n2 = null == t2 ? void 0 : t2.streamId) && void 0 !== n2 ? n2 : crypto.randomUUID(), s2 = { id: a2, mimeType: "text/plain", timestamp: Date.now(), topic: null !== (i2 = null == t2 ? void 0 : t2.topic) && void 0 !== i2 ? i2 : "", size: null == t2 ? void 0 : t2.totalSize, attributes: null == t2 ? void 0 : t2.attributes, encryptionType: (null === (r2 = this.engine.e2eeManager) || void 0 === r2 ? void 0 : r2.isDataChannelEncryptionEnabled) ? ht.GCM : ht.NONE, attachedStreamIds: null == t2 ? void 0 : t2.attachedStreamIds }, o2 = new Jt({ streamId: a2, mimeType: s2.mimeType, topic: s2.topic, timestamp: to(s2.timestamp), totalLength: to(s2.size), attributes: s2.attributes, contentHeader: { case: "textHeader", value: new Kt({ version: null == t2 ? void 0 : t2.version, attachedStreamIds: s2.attachedStreamIds, replyToStreamId: null == t2 ? void 0 : t2.replyToStreamId, operationType: "update" === (null == t2 ? void 0 : t2.type) ? Wt.UPDATE : Wt.CREATE }) } }), c2 = null == t2 ? void 0 : t2.destinationIdentities, d2 = new yt({ destinationIdentities: c2, value: { case: "streamHeader", value: o2 } });
            yield this.engine.sendDataPacket(d2, vd.RELIABLE);
            let l2 = 0;
            const u2 = this.engine, h2 = new WritableStream({ write(e2) {
              return Yi(this, void 0, void 0, (function* () {
                for (const t3 of (function(e3, t4) {
                  const n3 = [];
                  let i3 = new TextEncoder().encode(e3);
                  for (; i3.length > t4; ) {
                    let e4 = t4;
                    for (; e4 > 0; ) {
                      const t5 = i3[e4];
                      if (void 0 !== t5 && 128 != (192 & t5)) break;
                      e4--;
                    }
                    n3.push(i3.slice(0, e4)), i3 = i3.slice(e4);
                  }
                  return i3.length > 0 && n3.push(i3), n3;
                })(e2, 15e3)) {
                  const e3 = new Gt({ content: t3, streamId: a2, chunkIndex: to(l2) }), n3 = new yt({ destinationIdentities: c2, value: { case: "streamChunk", value: e3 } });
                  yield u2.sendDataPacket(n3, vd.RELIABLE), l2 += 1;
                }
              }));
            }, close() {
              return Yi(this, void 0, void 0, (function* () {
                const e2 = new Qt({ streamId: a2 }), t3 = new yt({ destinationIdentities: c2, value: { case: "streamTrailer", value: e2 } });
                yield u2.sendDataPacket(t3, vd.RELIABLE);
              }));
            }, abort(e2) {
              console.log("Sink error:", e2);
            } });
            let p2 = () => Yi(this, void 0, void 0, (function* () {
              yield m2.close();
            }));
            u2.once(e.EngineEvent.Closing, p2);
            const m2 = new Rd(h2, s2, (() => this.engine.off(e.EngineEvent.Closing, p2)));
            return m2;
          }));
        }
        sendFile(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            const n2 = crypto.randomUUID();
            return yield this._sendFile(n2, e2, t2), { id: n2 };
          }));
        }
        _sendFile(e2, t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            var i2;
            const r2 = yield this.streamBytes({ streamId: e2, totalSize: t2.size, name: t2.name, mimeType: null !== (i2 = null == n2 ? void 0 : n2.mimeType) && void 0 !== i2 ? i2 : t2.type, topic: null == n2 ? void 0 : n2.topic, destinationIdentities: null == n2 ? void 0 : n2.destinationIdentities }), a2 = t2.stream().getReader();
            for (; ; ) {
              const e3 = yield a2.read(), t3 = e3.done, n3 = e3.value;
              if (t3) break;
              yield r2.write(n3);
            }
            return yield r2.close(), r2.info;
          }));
        }
        streamBytes(e2) {
          return Yi(this, void 0, void 0, (function* () {
            var t2, n2, i2, a2, s2;
            const o2 = null !== (t2 = null == e2 ? void 0 : e2.streamId) && void 0 !== t2 ? t2 : crypto.randomUUID(), c2 = null == e2 ? void 0 : e2.destinationIdentities, d2 = { id: o2, mimeType: null !== (n2 = null == e2 ? void 0 : e2.mimeType) && void 0 !== n2 ? n2 : "application/octet-stream", topic: null !== (i2 = null == e2 ? void 0 : e2.topic) && void 0 !== i2 ? i2 : "", timestamp: Date.now(), attributes: null == e2 ? void 0 : e2.attributes, size: null == e2 ? void 0 : e2.totalSize, name: null !== (a2 = null == e2 ? void 0 : e2.name) && void 0 !== a2 ? a2 : "unknown", encryptionType: (null === (s2 = this.engine.e2eeManager) || void 0 === s2 ? void 0 : s2.isDataChannelEncryptionEnabled) ? ht.GCM : ht.NONE }, l2 = new Jt({ totalLength: to(d2.size), mimeType: d2.mimeType, streamId: o2, topic: d2.topic, timestamp: to(Date.now()), attributes: d2.attributes, contentHeader: { case: "byteHeader", value: new zt({ name: d2.name }) } }), u2 = new yt({ destinationIdentities: c2, value: { case: "streamHeader", value: l2 } });
            yield this.engine.sendDataPacket(u2, vd.RELIABLE);
            let h2 = 0;
            const p2 = new r(), m2 = this.engine, g2 = this.log, v2 = new WritableStream({ write(e3) {
              return Yi(this, void 0, void 0, (function* () {
                const t3 = yield p2.lock();
                let n3 = 0;
                try {
                  for (; n3 < e3.byteLength; ) {
                    const t4 = e3.slice(n3, n3 + 15e3), i3 = new yt({ destinationIdentities: c2, value: { case: "streamChunk", value: new Gt({ content: t4, streamId: o2, chunkIndex: to(h2) }) } });
                    yield m2.sendDataPacket(i3, vd.RELIABLE), h2 += 1, n3 += t4.byteLength;
                  }
                } finally {
                  t3();
                }
              }));
            }, close() {
              return Yi(this, void 0, void 0, (function* () {
                const e3 = new Qt({ streamId: o2 }), t3 = new yt({ destinationIdentities: c2, value: { case: "streamTrailer", value: e3 } });
                yield m2.sendDataPacket(t3, vd.RELIABLE);
              }));
            }, abort(e3) {
              g2.error("Sink error:", e3);
            } });
            return new Pd(v2, d2);
          }));
        }
      }
      function Dd(e2) {
        if (0 === e2.length) {
          return new AbortController().signal;
        }
        if (1 === e2.length) return e2[0];
        for (const t3 of e2) if (t3.aborted) return t3;
        const t2 = new AbortController(), n2 = Array(e2.length);
        return e2.forEach(((e3, i2) => {
          const r2 = () => {
            t2.abort(e3.reason), (() => {
              for (const e4 of n2) e4();
            })();
          };
          e3.addEventListener("abort", r2), n2[i2] = () => e3.removeEventListener("abort", r2);
        })), t2.signal;
      }
      function Md(e2) {
        const t2 = new AbortController();
        return setTimeout((() => {
          t2.abort(new DOMException("signal timed out after ".concat(e2, " ms"), "TimeoutError"));
        }), e2), t2.signal;
      }
      var _d, Od, Ad;
      !(function(e2) {
        e2[e2.TooShort = 0] = "TooShort", e2[e2.HeaderOverrun = 1] = "HeaderOverrun", e2[e2.MissingExtWords = 2] = "MissingExtWords", e2[e2.UnsupportedVersion = 3] = "UnsupportedVersion", e2[e2.InvalidHandle = 4] = "InvalidHandle", e2[e2.MalformedExt = 5] = "MalformedExt";
      })(_d || (_d = {}));
      class Nd extends Ta {
        constructor(e2, t2, n2) {
          super(19, e2, n2), this.name = "DataTrackDeserializeError", this.reason = t2, this.reasonName = _d[t2];
        }
        static tooShort() {
          return new Nd("Too short to contain a valid header", _d.TooShort);
        }
        static headerOverrun() {
          return new Nd("Header exceeds total packet length", _d.HeaderOverrun);
        }
        static missingExtWords() {
          return new Nd("Extension word indicator is missing", _d.MissingExtWords);
        }
        static unsupportedVersion(e2) {
          return new Nd("Unsupported version ".concat(e2), _d.UnsupportedVersion);
        }
        static invalidHandle(e2) {
          return new Nd("invalid track handle: ".concat(e2.message), _d.InvalidHandle, { cause: e2 });
        }
        static malformedExt(e2) {
          return new Nd("Extension with tag ".concat(e2, " is malformed"), _d.MalformedExt);
        }
      }
      !(function(e2) {
        e2[e2.TooSmallForHeader = 0] = "TooSmallForHeader", e2[e2.TooSmallForPayload = 1] = "TooSmallForPayload";
      })(Od || (Od = {}));
      class xd extends Ta {
        constructor(e2, t2, n2) {
          super(19, e2, n2), this.name = "DataTrackSerializeError", this.reason = t2, this.reasonName = Od[t2];
        }
        static tooSmallForHeader() {
          return new xd("Buffer cannot fit header", Od.TooSmallForHeader);
        }
        static tooSmallForPayload() {
          return new xd("Buffer cannot fit payload", Od.TooSmallForPayload);
        }
      }
      class Ld {
        toBinary() {
          const e2 = this.toBinaryLengthBytes(), t2 = new ArrayBuffer(e2), n2 = new DataView(t2), i2 = this.toBinaryInto(n2);
          if (e2 !== i2) throw new Error("".concat(this.constructor.name, ".toBinary: written bytes (").concat(i2, " bytes) not equal to allocated array buffer length (").concat(e2, " bytes)."));
          return new Uint8Array(t2);
        }
      }
      !(function(e2) {
        e2[e2.UserTimestamp = 2] = "UserTimestamp", e2[e2.E2ee = 1] = "E2ee";
      })(Ad || (Ad = {}));
      class Ud extends Ld {
      }
      class Fd extends Ud {
        constructor(e2) {
          super(), this.timestamp = e2;
        }
        toBinaryLengthBytes() {
          return 2 + Fd.lengthBytes;
        }
        toBinaryInto(e2) {
          let t2 = 0;
          e2.setUint8(t2, Fd.tag), t2 += 1, e2.setUint8(t2, Fd.lengthBytes), t2 += 1, e2.setBigUint64(t2, this.timestamp), t2 += 8;
          const n2 = this.toBinaryLengthBytes();
          if (t2 !== n2) throw new Error("DataTrackUserTimestampExtension.toBinaryInto: Wrote ".concat(t2, " bytes but expected length was ").concat(n2, " bytes"));
          return t2;
        }
        toJSON() {
          return { tag: Fd.tag, lengthBytes: Fd.lengthBytes, timestamp: this.timestamp };
        }
      }
      Fd.tag = Ad.UserTimestamp, Fd.lengthBytes = 8;
      class Bd extends Ud {
        constructor(e2, t2) {
          super(), this.keyIndex = e2, this.iv = t2;
        }
        toBinaryLengthBytes() {
          return 2 + Bd.lengthBytes;
        }
        toBinaryInto(e2) {
          let t2 = 0;
          e2.setUint8(t2, Bd.tag), t2 += 1, e2.setUint8(t2, Bd.lengthBytes), t2 += 1, e2.setUint8(t2, this.keyIndex), t2 += 1;
          for (let n3 = 0; n3 < this.iv.length; n3 += 1) e2.setUint8(t2, this.iv[n3]), t2 += 1;
          const n2 = this.toBinaryLengthBytes();
          if (t2 !== n2) throw new Error("DataTrackE2eeExtension.toBinaryInto: Wrote ".concat(t2, " bytes but expected length was ").concat(n2, " bytes"));
          return t2;
        }
        toJSON() {
          return { tag: Bd.tag, lengthBytes: Bd.lengthBytes, keyIndex: this.keyIndex, iv: this.iv };
        }
      }
      Bd.tag = Ad.E2ee, Bd.lengthBytes = 13;
      class jd extends Ld {
        constructor() {
          let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super(), this.userTimestamp = e2.userTimestamp, this.e2ee = e2.e2ee;
        }
        toBinaryLengthBytes() {
          let e2 = 0;
          return this.userTimestamp && (e2 += this.userTimestamp.toBinaryLengthBytes()), this.e2ee && (e2 += this.e2ee.toBinaryLengthBytes()), e2;
        }
        toBinaryInto(e2) {
          let t2 = 0;
          if (this.e2ee) {
            t2 += this.e2ee.toBinaryInto(e2);
          }
          if (this.userTimestamp) {
            t2 += this.userTimestamp.toBinaryInto(new DataView(e2.buffer, e2.byteOffset + t2));
          }
          const n2 = this.toBinaryLengthBytes();
          if (t2 !== n2) throw new Error("DataTrackExtensions.toBinaryInto: Wrote ".concat(t2, " bytes but expected length was ").concat(n2, " bytes"));
          return t2;
        }
        static fromBinary(e2) {
          const t2 = ec(e2);
          let n2, i2, r2 = 0;
          for (; t2.byteLength - r2 >= 2; ) {
            const e3 = t2.getUint8(r2);
            r2 += 1;
            const a2 = t2.getUint8(r2);
            if (r2 += 1, 0 !== e3) switch (e3) {
              case Ad.UserTimestamp:
                if (t2.byteLength - r2 < Fd.lengthBytes) throw Nd.malformedExt(e3);
                n2 = new Fd(t2.getBigUint64(r2)), r2 += a2;
                break;
              case Ad.E2ee:
                if (t2.byteLength - r2 < Bd.lengthBytes) throw Nd.malformedExt(e3);
                const s2 = t2.getUint8(r2), o2 = new Uint8Array(12);
                for (let e4 = 0; e4 < o2.length; e4 += 1) {
                  let n3 = r2;
                  n3 += 1, n3 += 1 * e4, o2[e4] = t2.getUint8(n3);
                }
                i2 = new Bd(s2, o2), r2 += a2;
                break;
              default:
                if (t2.byteLength - r2 < a2) throw Nd.malformedExt(e3);
                r2 += a2;
            }
          }
          return [new jd({ userTimestamp: n2, e2ee: i2 }), t2.byteLength];
        }
        toJSON() {
          var e2, t2, n2, i2;
          return { userTimestamp: null !== (t2 = null === (e2 = this.userTimestamp) || void 0 === e2 ? void 0 : e2.toJSON()) && void 0 !== t2 ? t2 : null, e2ee: null !== (i2 = null === (n2 = this.e2ee) || void 0 === n2 ? void 0 : n2.toJSON()) && void 0 !== i2 ? i2 : null };
        }
      }
      const qd = { from: (e2) => ({ payload: e2.payload, extensions: new jd({ userTimestamp: e2.userTimestamp ? new Fd(e2.userTimestamp) : void 0 }) }), lossyIntoFrame(e2) {
        var t2;
        return { payload: e2.payload, userTimestamp: null === (t2 = e2.extensions.userTimestamp) || void 0 === t2 ? void 0 : t2.timestamp };
      } }, Vd = /* @__PURE__ */ Symbol.for("lk.track"), Hd = /* @__PURE__ */ Symbol.for("lk.data-track");
      class Wd {
        constructor(e2, t2, n2) {
          this.trackSymbol = Vd, this.isLocal = false, this.typeSymbol = Hd, this.info = e2, this.manager = t2, this.publisherIdentity = n2.publisherIdentity;
        }
        subscribe(e2) {
          try {
            const t2 = x(this.manager.openSubscriptionStream(this.info.sid, null == e2 ? void 0 : e2.signal, null == e2 ? void 0 : e2.bufferSize), 2), n2 = t2[0];
            return t2[1].catch((() => {
            })), n2;
          } catch (e3) {
            throw e3;
          }
        }
        setPipelineOptions(e2) {
          this.manager.setPipelineOptions(this.info.sid, e2);
        }
      }
      class Kd extends Ld {
        constructor(e2) {
          var t2;
          super(), this.marker = e2.marker, this.trackHandle = e2.trackHandle, this.sequence = e2.sequence, this.frameNumber = e2.frameNumber, this.timestamp = e2.timestamp, this.extensions = null !== (t2 = e2.extensions) && void 0 !== t2 ? t2 : new jd();
        }
        extensionsMetrics() {
          const e2 = this.extensions.toBinaryLengthBytes(), t2 = Math.ceil((2 + e2) / 4);
          return { lengthBytes: e2, lengthWords: t2, paddingLengthBytes: 4 * t2 - 2 - e2 };
        }
        toBinaryLengthBytes() {
          const e2 = this.extensionsMetrics(), t2 = e2.lengthBytes, n2 = e2.paddingLengthBytes;
          let i2 = 12;
          return t2 > 0 && (i2 += 2 + t2 + n2), i2;
        }
        toBinaryInto(e2) {
          if (e2.byteLength < this.toBinaryLengthBytes()) throw xd.tooSmallForHeader();
          let t2, n2 = 0;
          switch (this.marker) {
            case zd.Inter:
              t2 = 0;
              break;
            case zd.Final:
              t2 = 1;
              break;
            case zd.Start:
              t2 = 2;
              break;
            case zd.Single:
              t2 = 3;
          }
          n2 |= t2 << 3;
          const i2 = this.extensionsMetrics(), r2 = i2.lengthBytes, a2 = i2.lengthWords, s2 = i2.paddingLengthBytes;
          r2 > 0 && (n2 |= 4);
          let o2 = 0;
          if (e2.setUint8(o2, n2), o2 += 1, e2.setUint8(o2, 0), o2 += 1, e2.setUint16(o2, this.trackHandle), o2 += 2, e2.setUint16(o2, this.sequence.value), o2 += 2, e2.setUint16(o2, this.frameNumber.value), o2 += 2, e2.setUint32(o2, this.timestamp.asTicks()), o2 += 4, r2 > 0) {
            const t3 = a2 - 1;
            e2.setUint16(o2, t3), o2 += 2;
            o2 += this.extensions.toBinaryInto(new DataView(e2.buffer, e2.byteOffset + o2));
            for (let t4 = 0; t4 < s2; t4 += 1) e2.setUint8(o2, 0), o2 += 1;
          }
          const c2 = this.toBinaryLengthBytes();
          if (o2 !== c2) throw new Error("DataTrackPacketHeader.toBinaryInto: Wrote ".concat(o2, " bytes but expected length was ").concat(c2, " bytes"));
          return c2;
        }
        static fromBinary(e2) {
          const t2 = ec(e2);
          if (t2.byteLength < 12) throw Nd.tooShort();
          let n2 = 0;
          const i2 = t2.getUint8(n2);
          n2 += 1;
          const r2 = i2 >> 5 & 7;
          if (r2 > 0) throw Nd.unsupportedVersion(r2);
          let a2;
          switch (i2 >> 3 & 3) {
            case 2:
              a2 = zd.Start;
              break;
            case 1:
              a2 = zd.Final;
              break;
            case 3:
              a2 = zd.Single;
              break;
            default:
              a2 = zd.Inter;
          }
          const s2 = (i2 >> 2 & 1) > 0;
          let o2;
          n2 += 1;
          try {
            o2 = ic.fromNumber(t2.getUint16(n2));
          } catch (e3) {
            throw e3 instanceof nc && (e3.isReason(tc.Reserved) || e3.isReason(tc.TooLarge)) ? Nd.invalidHandle(e3) : e3;
          }
          n2 += 2;
          const c2 = Xo.u16(t2.getUint16(n2));
          n2 += 2;
          const d2 = Xo.u16(t2.getUint16(n2));
          n2 += 2;
          const l2 = Zo.fromRtpTicks(t2.getUint32(n2));
          n2 += 4;
          let u2 = new jd();
          if (s2) {
            if (t2.byteLength - n2 < 2) throw Nd.missingExtWords();
            let e3 = t2.getUint16(n2);
            n2 += 2;
            let i3 = 4 * (e3 + 1) - 2;
            if (n2 + i3 > t2.byteLength) throw Nd.headerOverrun();
            let r3 = new DataView(t2.buffer, t2.byteOffset + n2, i3);
            const a3 = x(jd.fromBinary(r3), 2);
            u2 = a3[0], n2 += a3[1];
          }
          return [new Kd({ marker: a2, trackHandle: o2, sequence: c2, frameNumber: d2, timestamp: l2, extensions: u2 }), n2];
        }
        toJSON() {
          return { marker: this.marker, trackHandle: this.trackHandle, sequence: this.sequence.value, frameNumber: this.frameNumber.value, timestamp: this.timestamp.asTicks(), extensions: this.extensions.toJSON() };
        }
      }
      var zd;
      !(function(e2) {
        e2[e2.Start = 0] = "Start", e2[e2.Inter = 1] = "Inter", e2[e2.Final = 2] = "Final", e2[e2.Single = 3] = "Single";
      })(zd || (zd = {}));
      class Jd extends Ld {
        constructor(e2, t2) {
          super(), this.header = e2, this.payload = t2;
        }
        toBinaryLengthBytes() {
          return this.header.toBinaryLengthBytes() + this.payload.byteLength;
        }
        toBinaryInto(e2) {
          let t2 = 0;
          if (t2 += this.header.toBinaryInto(e2), e2.byteLength - t2 < this.payload.byteLength) throw xd.tooSmallForPayload();
          for (let n3 = 0; n3 < this.payload.length; n3 += 1) e2.setUint8(t2, this.payload[n3]), t2 += 1;
          const n2 = this.toBinaryLengthBytes();
          if (t2 !== n2) throw new Error("DataTrackPacket.toBinaryInto: Wrote ".concat(t2, " bytes but expected length was ").concat(n2, " bytes"));
          return n2;
        }
        static fromBinary(e2) {
          const t2 = ec(e2), n2 = x(Kd.fromBinary(t2), 2), i2 = n2[0], r2 = n2[1], a2 = t2.buffer.slice(t2.byteOffset + r2, t2.byteOffset + t2.byteLength);
          return [new Jd(i2, new Uint8Array(a2)), t2.byteLength];
        }
        toJSON() {
          return { header: this.header.toJSON(), payload: this.payload };
        }
      }
      const Gd = Wi(e.LoggerNames.DataTracks);
      class Qd extends Ta {
        constructor(e2, t2, n2, i2) {
          super(19, "Frame ".concat(n2, " dropped: ").concat(e2), i2), this.name = "DataTrackDepacketizerDropError", this.reason = t2, this.reasonName = Yd[t2], this.frameNumber = n2;
        }
        static interrupted(e2, t2) {
          return new Qd("Interrupted by the start of a new frame ".concat(t2), Yd.Interrupted, e2);
        }
        static unknownFrame(e2) {
          return new Qd("Initial packet was never received.", Yd.UnknownFrame, e2);
        }
        static bufferFull(e2) {
          return new Qd("Reorder buffer is full.", Yd.BufferFull, e2);
        }
        static incomplete(e2, t2, n2) {
          return new Qd("Not all packets received before final packet. Received ".concat(t2, " packets, expected ").concat(n2, " packets."), Yd.Incomplete, e2);
        }
      }
      var Yd, Xd;
      !(function(e2) {
        e2[e2.Interrupted = 0] = "Interrupted", e2[e2.UnknownFrame = 1] = "UnknownFrame", e2[e2.BufferFull = 2] = "BufferFull", e2[e2.Incomplete = 3] = "Incomplete";
      })(Yd || (Yd = {}));
      class Zd {
        constructor() {
          this.partials = /* @__PURE__ */ new Map();
        }
        push(e2, t2) {
          switch (e2.header.marker) {
            case zd.Single:
              return this.frameFromSingle(e2, t2);
            case zd.Start:
              return this.beginPartial(e2, t2);
            case zd.Inter:
            case zd.Final:
              return this.pushToPartial(e2);
          }
        }
        reset() {
          this.partials.clear();
        }
        peekOldestPartialFrameNumber() {
          const e2 = this.partials.keys().next();
          return e2.done ? null : e2.value;
        }
        frameFromSingle(e2, t2) {
          var n2;
          if (e2.header.marker !== zd.Single) throw new Error("Depacketizer.frameFromSingle: packet.header.marker was not FrameMarker.Single, found ".concat(e2.header.marker, "."));
          const i2 = null !== (n2 = null == t2 ? void 0 : t2.maxPartialFrames) && void 0 !== n2 ? n2 : 1;
          if (this.partials.size >= i2) {
            const n3 = this.peekOldestPartialFrameNumber();
            if ("number" != typeof n3) throw new Error("Depacketizer.frameFromSingle: no oldest frame number found, but partials.size is ".concat(this.partials.size, "."));
            if (this.partials.delete(n3), null == t2 ? void 0 : t2.throwOnInterruption) throw Qd.interrupted(n3, e2.header.frameNumber.value);
            Gd.warn("Data track frame ".concat(n3, " was interrupted by single-packet frame ").concat(e2.header.frameNumber.value, ", dropping."));
          }
          return { payload: e2.payload, extensions: e2.header.extensions };
        }
        beginPartial(e2, t2) {
          var n2;
          if (e2.header.marker !== zd.Start) throw new Error("Depacketizer.beginPartial: packet.header.marker was not FrameMarker.Start, found ".concat(e2.header.marker, "."));
          const i2 = e2.header.sequence, r2 = e2.header.frameNumber.value, a2 = { startSequence: i2, extensions: e2.header.extensions, payloads: /* @__PURE__ */ new Map([[i2.value, e2.payload]]) }, s2 = null !== (n2 = null == t2 ? void 0 : t2.maxPartialFrames) && void 0 !== n2 ? n2 : 1;
          for (; this.partials.size >= s2; ) {
            const e3 = this.peekOldestPartialFrameNumber();
            if ("number" != typeof e3) break;
            if (this.partials.delete(e3), null == t2 ? void 0 : t2.throwOnInterruption) throw Qd.interrupted(e3, r2);
            Gd.warn("Data track partials full (max ".concat(s2, "), evicted oldest frame ").concat(e3, " to make room for new frame ").concat(r2, "."));
          }
          return this.partials.set(r2, a2), null;
        }
        pushToPartial(e2) {
          if (e2.header.marker !== zd.Inter && e2.header.marker !== zd.Final) throw new Error("Depacketizer.pushToPartial: packet.header.marker was not FrameMarker.Inter or FrameMarker.Final, found ".concat(e2.header.marker, "."));
          const t2 = e2.header.frameNumber.value, n2 = this.partials.get(t2);
          if (!n2) throw this.partials.delete(t2), Qd.unknownFrame(t2);
          if (n2.payloads.size >= Zd.MAX_BUFFER_PACKETS) throw this.partials.delete(t2), Qd.bufferFull(t2);
          return n2.payloads.has(e2.header.sequence.value) && Gd.warn("Data track frame ".concat(t2, " received duplicate packet for sequence ").concat(e2.header.sequence.value, ", so replacing with newly received packet.")), n2.payloads.set(e2.header.sequence.value, e2.payload), e2.header.marker === zd.Final ? this.finalize(t2, n2, e2.header.sequence.value) : null;
        }
        finalize(e2, t2, n2) {
          const i2 = t2.payloads.size;
          let r2 = 0;
          for (const e3 of t2.payloads.values()) r2 += e3.length;
          const a2 = new Uint8Array(r2);
          let s2 = t2.startSequence.clone(), o2 = 0;
          for (; ; ) {
            const i3 = t2.payloads.get(s2.value);
            if (!i3) break;
            t2.payloads.delete(s2.value);
            const r3 = a2.length - o2;
            if (i3.length > r3) throw new Error("Depacketizer.finalize: Expected at least ".concat(i3.length, " more bytes left in the payload buffer, only got ").concat(r3, " bytes."));
            if (a2.set(i3, o2), o2 += i3.length, s2.value == n2) return this.partials.delete(e2), { payload: a2, extensions: t2.extensions };
            s2.increment();
          }
          throw this.partials.delete(e2), Qd.incomplete(e2, i2, n2 - t2.startSequence.value + 1);
        }
      }
      Zd.MAX_BUFFER_PACKETS = 128, (function(e2) {
        e2[e2.Unpublished = 0] = "Unpublished", e2[e2.Timeout = 1] = "Timeout", e2[e2.Disconnected = 2] = "Disconnected", e2[e2.Cancelled = 4] = "Cancelled";
      })(Xd || (Xd = {}));
      class $d extends Ta {
        constructor(e2, t2, n2) {
          super(22, e2, n2), this.name = "DataTrackSubscribeError", this.reason = t2, this.reasonName = Xd[t2];
        }
        static unpublished() {
          return new $d("The track has been unpublished and is no longer available", Xd.Unpublished);
        }
        static timeout() {
          return new $d("Request to subscribe to data track timed-out", Xd.Timeout);
        }
        static disconnected() {
          return new $d("Cannot subscribe to data track when disconnected", Xd.Disconnected);
        }
        static cancelled() {
          return new $d("Subscription to data track cancelled by caller", Xd.Cancelled);
        }
      }
      const el = Wi(e.LoggerNames.DataTracks);
      class tl {
        constructor(e2) {
          var t2, n2;
          const i2 = null !== e2.e2eeManager;
          if (e2.info.usesE2ee !== i2) throw new Error("IncomingDataTrackPipeline: DataTrackInfo.usesE2ee must match presence of decryptionProvider");
          const r2 = new Zd();
          this.publisherIdentity = e2.publisherIdentity, this.e2eeManager = null !== (t2 = e2.e2eeManager) && void 0 !== t2 ? t2 : null, this.depacketizer = r2, this.options = null !== (n2 = e2.pipelineOptions) && void 0 !== n2 ? n2 : {};
        }
        updateE2eeManager(e2) {
          this.e2eeManager = e2;
        }
        setOptions(e2) {
          this.options = e2;
        }
        processPacket(e2) {
          return Yi(this, void 0, void 0, (function* () {
            const t2 = this.depacketize(e2);
            if (!t2) return null;
            const n2 = yield this.decryptIfNeeded(t2);
            return n2 || null;
          }));
        }
        depacketize(e2) {
          let t2;
          try {
            t2 = this.depacketizer.push(e2, { throwOnInterruption: false, maxPartialFrames: this.options.maxPartialFrames });
          } catch (e3) {
            return el.warn("Data frame depacketize error: ".concat(e3)), null;
          }
          return t2;
        }
        decryptIfNeeded(e2) {
          return Yi(this, void 0, void 0, (function* () {
            var t2, n2;
            const i2 = this.e2eeManager;
            if (!i2) return e2;
            const r2 = null !== (n2 = null === (t2 = e2.extensions) || void 0 === t2 ? void 0 : t2.e2ee) && void 0 !== n2 ? n2 : null;
            if (!r2) return el.error("Missing E2EE meta"), null;
            let a2;
            try {
              a2 = yield i2.handleEncryptedData(e2.payload, r2.iv, this.publisherIdentity, r2.keyIndex);
            } catch (e3) {
              return el.error("Error decrypting packet: ".concat(e3)), null;
            }
            return e2.payload = a2.payload, e2;
          }));
        }
      }
      const nl = Wi(e.LoggerNames.DataTracks);
      class il extends ir.EventEmitter {
        constructor(e2) {
          var t2;
          super(), this.descriptors = /* @__PURE__ */ new Map(), this.subscriptionHandles = /* @__PURE__ */ new Map(), this.e2eeManager = null !== (t2 = null == e2 ? void 0 : e2.e2eeManager) && void 0 !== t2 ? t2 : null;
        }
        updateE2eeManager(e2) {
          this.e2eeManager = e2;
          for (const t2 of this.descriptors.values()) "active" === t2.subscription.type && t2.subscription.pipeline.updateE2eeManager(e2);
        }
        setPipelineOptions(e2, t2) {
          const n2 = this.descriptors.get(e2);
          n2 ? (n2.pipelineOptions = t2, "active" === n2.subscription.type && n2.subscription.pipeline.setOptions(t2)) : nl.warn("Unknown track ".concat(e2, ", cannot set pipeline options."));
        }
        openSubscriptionStream(e2, t2) {
          let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16, i2 = null;
          const r2 = new Qs(), a2 = () => {
            null == t2 || t2.removeEventListener("abort", o2);
          }, s2 = () => {
            if (a2(), !i2) return void nl.warn("ReadableStream subscribed to ".concat(e2, " was not started."));
            const t3 = this.descriptors.get(e2);
            t3 ? "active" === t3.subscription.type ? (t3.subscription.streamControllers.delete(i2), 0 === t3.subscription.streamControllers.size && this.unSubscribeRequest(t3.info.sid)) : nl.warn("Subscription for track ".concat(e2, " is not active, skipping cancel...")) : nl.warn("Unknown track ".concat(e2, ", skipping cancel..."));
          }, o2 = () => {
            var t3;
            if (!i2) return;
            const n3 = this.descriptors.get(e2);
            "active" === (null == n3 ? void 0 : n3.subscription.type) && n3.subscription.streamControllers.delete(i2), i2.error($d.cancelled()), null === (t3 = r2.reject) || void 0 === t3 || t3.call(r2, $d.cancelled()), s2();
          }, c2 = new ReadableStream({ start: (n3) => {
            i2 = n3, this.subscribeRequest(e2, t2).then((() => Yi(this, void 0, void 0, (function* () {
              var i3, s3, c3;
              const d2 = this.descriptors.get(e2);
              if (!d2) {
                nl.error("Unknown track ".concat(e2));
                const t3 = $d.disconnected();
                return n3.error(t3), void (null === (i3 = r2.reject) || void 0 === i3 || i3.call(r2, t3));
              }
              if ("active" !== d2.subscription.type) {
                nl.error("Subscription for track ".concat(e2, " is not active"));
                const t3 = $d.disconnected();
                return n3.error(t3), void (null === (s3 = r2.reject) || void 0 === s3 || s3.call(r2, t3));
              }
              (null == t2 ? void 0 : t2.aborted) ? o2() : (null == t2 || t2.addEventListener("abort", o2), d2.subscription.streamControllers.set(n3, a2), null === (c3 = r2.resolve) || void 0 === c3 || c3.call(r2));
            })))).catch(((e3) => {
              var t3;
              n3.error(e3), null === (t3 = r2.reject) || void 0 === t3 || t3.call(r2, e3);
            }));
          }, cancel: () => {
            s2();
          } }, new CountQueuingStrategy({ highWaterMark: n2 }));
          return [c2, r2.promise];
        }
        subscribeRequest(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            const n2 = this.descriptors.get(e2);
            if (!n2) throw new Error("Cannot subscribe to unknown track");
            const i2 = (t3, n3, i3) => Yi(this, void 0, void 0, (function* () {
              if ("active" === t3.subscription.type) return;
              if ("pending" !== t3.subscription.type) throw new Error("Descriptor for track ".concat(e2, " is not pending, found ").concat(t3.subscription.type));
              const r2 = Dd([n3, i3].filter(((e3) => void 0 !== e3))), a2 = new Qs();
              t3.subscription.completionFuture.promise.then((() => {
                var e3;
                return null === (e3 = a2.resolve) || void 0 === e3 ? void 0 : e3.call(a2);
              })).catch(((e3) => {
                var t4;
                return null === (t4 = a2.reject) || void 0 === t4 ? void 0 : t4.call(a2, e3);
              }));
              const s2 = () => {
                var e3;
                "pending" === t3.subscription.type && (t3.subscription.pendingRequestCount -= 1, (null == i3 ? void 0 : i3.aborted) || t3.subscription.pendingRequestCount <= 0 ? t3.subscription.cancel() : null === (e3 = a2.reject) || void 0 === e3 || e3.call(a2, $d.cancelled()));
              };
              r2.aborted && s2(), r2.addEventListener("abort", s2), yield a2.promise, r2.removeEventListener("abort", s2);
            }));
            switch (n2.subscription.type) {
              case "none": {
                n2.subscription = { type: "pending", completionFuture: new Qs(), pendingRequestCount: 1, cancel: () => {
                  var t3, i3;
                  const a2 = n2.subscription;
                  n2.subscription = { type: "none" }, this.emit("sfuUpdateSubscription", { sid: e2, subscribe: false }), "pending" === a2.type && (null === (i3 = (t3 = a2.completionFuture).reject) || void 0 === i3 || i3.call(t3, r2.aborted ? $d.timeout() : $d.cancelled()));
                } }, this.emit("sfuUpdateSubscription", { sid: e2, subscribe: true });
                const r2 = Md(1e4);
                return void (yield i2(n2, t2, r2));
              }
              case "pending":
                return n2.subscription.pendingRequestCount += 1, void (yield i2(n2, t2));
              case "active":
                return;
            }
          }));
        }
        querySubscribed() {
          return Yi(this, void 0, void 0, (function* () {
            return Array.from(this.descriptors.values()).filter(((e2) => "active" === e2.subscription.type)).map(((e2) => [e2.info, e2.publisherIdentity]));
          }));
        }
        unSubscribeRequest(e2) {
          var t2;
          const n2 = this.descriptors.get(e2);
          if (!n2) throw new Error("Cannot subscribe to unknown track");
          if ("active" !== n2.subscription.type) return void nl.warn("Unexpected descriptor state in unSubscribeRequest, expected active, found ".concat(null === (t2 = n2.subscription) || void 0 === t2 ? void 0 : t2.type));
          this.closeStreamControllers(n2.subscription.streamControllers, e2);
          const i2 = n2.subscription;
          n2.subscription = { type: "none" }, this.subscriptionHandles.delete(i2.subcriptionHandle), this.emit("sfuUpdateSubscription", { sid: e2, subscribe: false });
        }
        closeStreamControllers(e2, t2) {
          for (const i2 of e2) {
            var n2 = x(i2, 2);
            const e3 = n2[0];
            (0, n2[1])();
            try {
              e3.close();
            } catch (e4) {
              nl.warn("Failed to close readable stream for track ".concat(t2, ": ").concat(e4));
            }
          }
        }
        receiveSfuPublicationUpdates(e2) {
          return Yi(this, void 0, void 0, (function* () {
            if (0 === e2.size) return;
            const t2 = /* @__PURE__ */ new Map();
            for (const i3 of e2.entries()) {
              var n2 = x(i3, 2);
              const e3 = n2[0], r2 = n2[1], a2 = /* @__PURE__ */ new Set();
              for (const t3 of r2) a2.add(t3.sid), this.descriptors.has(t3.sid) || (yield this.handleTrackPublished(e3, t3));
              t2.set(e3, a2);
            }
            for (const e3 of t2.entries()) {
              var i2 = x(e3, 2);
              const t3 = i2[0], n3 = i2[1];
              let r2 = Array.from(this.descriptors.entries()).filter(((e4) => {
                let n4 = x(e4, 2);
                return n4[0], n4[1].publisherIdentity === t3;
              })).map(((e4) => x(e4, 1)[0])).filter(((e4) => !n3.has(e4)));
              for (const e4 of r2) this.handleTrackUnpublished(e4);
            }
          }));
        }
        queryPublications() {
          return Yi(this, void 0, void 0, (function* () {
            return Array.from(this.descriptors.values()).map(((e2) => e2.info));
          }));
        }
        handleTrackPublished(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            if (this.descriptors.has(t2.sid)) return void nl.error("Existing descriptor for track ".concat(t2.sid));
            let n2 = { info: t2, publisherIdentity: e2, subscription: { type: "none" }, pipelineOptions: {} };
            this.descriptors.set(n2.info.sid, n2);
            const i2 = new Wd(n2.info, this, { publisherIdentity: e2 });
            this.emit("trackPublished", { track: i2 });
          }));
        }
        handleTrackUnpublished(e2) {
          const t2 = this.descriptors.get(e2);
          t2 ? (this.descriptors.delete(e2), "active" === t2.subscription.type && (this.closeStreamControllers(t2.subscription.streamControllers, e2), this.subscriptionHandles.delete(t2.subscription.subcriptionHandle)), this.emit("trackUnpublished", { sid: e2, publisherIdentity: t2.publisherIdentity })) : nl.error("Unknown track ".concat(e2));
        }
        receivedSfuSubscriberHandles(e2) {
          for (const n2 of e2.entries()) {
            var t2 = x(n2, 2);
            const e3 = t2[0], i2 = t2[1];
            this.registerSubscriberHandle(e3, i2);
          }
        }
        registerSubscriberHandle(e2, t2) {
          var n2, i2;
          const r2 = this.descriptors.get(t2);
          if (r2) switch (r2.subscription.type) {
            case "none":
              return void nl.warn("No subscription for ".concat(t2));
            case "active":
              return r2.subscription.subcriptionHandle = e2, void this.subscriptionHandles.set(e2, t2);
            case "pending": {
              const a2 = new tl({ info: r2.info, publisherIdentity: r2.publisherIdentity, e2eeManager: this.e2eeManager, pipelineOptions: r2.pipelineOptions }), s2 = r2.subscription;
              r2.subscription = { type: "active", subcriptionHandle: e2, pipeline: a2, streamControllers: /* @__PURE__ */ new Map() }, this.subscriptionHandles.set(e2, t2), null === (i2 = (n2 = s2.completionFuture).resolve) || void 0 === i2 || i2.call(n2);
            }
          }
          else nl.error("Unknown track ".concat(t2));
        }
        packetReceived(e2) {
          return Yi(this, void 0, void 0, (function* () {
            let t2;
            try {
              t2 = x(Jd.fromBinary(e2), 1)[0];
            } catch (e3) {
              return void nl.error("Failed to deserialize packet: ".concat(e3));
            }
            const n2 = this.subscriptionHandles.get(t2.header.trackHandle);
            if (!n2) return void nl.warn("Unknown subscriber handle ".concat(t2.header.trackHandle));
            const i2 = this.descriptors.get(n2);
            if (!i2) return void nl.error("Missing descriptor for track ".concat(n2));
            if ("active" !== i2.subscription.type) return void nl.warn("Received packet for track ".concat(n2, " without active subscription"));
            const r2 = yield i2.subscription.pipeline.processPacket(t2);
            if (r2) for (const e3 of i2.subscription.streamControllers.keys()) {
              if (null !== e3.desiredSize && e3.desiredSize <= 0) {
                nl.warn("Cannot send frame to subscribers: readable stream is full (desiredSize is ".concat(e3.desiredSize, "). To increase this threshold, set a higher 'options.highWaterMark' when calling .subscribe()."));
                continue;
              }
              const t3 = qd.lossyIntoFrame(r2);
              e3.enqueue(t3);
            }
          }));
        }
        resendSubscriptionUpdates() {
          for (const t2 of this.descriptors) {
            var e2 = x(t2, 2);
            const n2 = e2[0];
            "none" !== e2[1].subscription.type && this.emit("sfuUpdateSubscription", { sid: n2, subscribe: true });
          }
        }
        handleRemoteParticipantDisconnected(e2) {
          var t2, n2;
          for (const i2 of this.descriptors.values()) if (i2.publisherIdentity === e2) switch (i2.subscription.type) {
            case "none":
              break;
            case "pending":
              null === (n2 = (t2 = i2.subscription.completionFuture).reject) || void 0 === n2 || n2.call(t2, $d.disconnected());
              break;
            case "active":
              this.unSubscribeRequest(i2.info.sid);
          }
        }
        reset() {
          var e2, t2;
          for (const n2 of this.descriptors.values()) this.emit("trackUnpublished", { sid: n2.info.sid, publisherIdentity: n2.publisherIdentity }), "pending" === n2.subscription.type && (null === (t2 = (e2 = n2.subscription.completionFuture).reject) || void 0 === t2 || t2.call(e2, $d.disconnected())), "active" === n2.subscription.type && this.closeStreamControllers(n2.subscription.streamControllers, n2.info.sid);
          this.descriptors.clear(), this.subscriptionHandles.clear();
        }
      }
      class rl extends Ta {
        constructor(e2, t2, n2) {
          super(19, e2, n2), this.name = "DataTrackPacketizerError", this.reason = t2, this.reasonName = al[t2];
        }
        static mtuTooShort() {
          return new rl("MTU is too short to send frame", al.MtuTooShort);
        }
      }
      var al, sl, ol, cl;
      !(function(e2) {
        e2[e2.MtuTooShort = 0] = "MtuTooShort";
      })(al || (al = {}));
      class dl {
        constructor(e2, t2) {
          this.sequence = Xo.u16(0), this.frameNumber = Xo.u16(0), this.clock = $o.rtpStartingNow(Zo.rtpRandom()), this.handle = e2, this.mtuSizeBytes = t2;
        }
        static computeFrameMarker(e2, t2) {
          return t2 <= 1 ? zd.Single : 0 === e2 ? zd.Start : e2 === t2 - 1 ? zd.Final : zd.Inter;
        }
        *packetize(e2, t2) {
          var n2;
          const i2 = this.frameNumber.getThenIncrement(), r2 = { marker: zd.Inter, trackHandle: this.handle, sequence: Xo.u16(0), frameNumber: i2, timestamp: null !== (n2 = null == t2 ? void 0 : t2.now) && void 0 !== n2 ? n2 : this.clock.now(), extensions: e2.extensions }, a2 = new Kd(r2).toBinaryLengthBytes();
          if (a2 >= this.mtuSizeBytes) throw rl.mtuTooShort();
          const s2 = this.mtuSizeBytes - a2, o2 = Math.ceil(e2.payload.byteLength / s2);
          for (let t3 = 0, n3 = 0; n3 < e2.payload.byteLength; t3 = (c2 = [t3 + 1, n3 + s2])[0], n3 = c2[1], c2) {
            var c2;
            const i3 = this.sequence.getThenIncrement(), a3 = new Kd(Object.assign(Object.assign({}, r2), { marker: dl.computeFrameMarker(t3, o2), sequence: i3 })), d2 = Math.min(s2, e2.payload.byteLength - n3), l2 = new Uint8Array(e2.payload.buffer, e2.payload.byteOffset + n3, d2);
            yield new Jd(a3, l2);
          }
        }
      }
      !(function(e2) {
        e2[e2.NotAllowed = 0] = "NotAllowed", e2[e2.DuplicateName = 1] = "DuplicateName", e2[e2.Timeout = 2] = "Timeout", e2[e2.LimitReached = 3] = "LimitReached", e2[e2.Disconnected = 4] = "Disconnected", e2[e2.Cancelled = 5] = "Cancelled", e2[e2.InvalidName = 6] = "InvalidName", e2[e2.Unknown = 7] = "Unknown";
      })(sl || (sl = {}));
      class ll extends Ta {
        constructor(e2, t2, n2) {
          super(21, e2, n2), this.name = "DataTrackPublishError", this.reason = t2, this.reasonName = sl[t2], this.rawMessage = null == n2 ? void 0 : n2.rawMessage;
        }
        static notAllowed(e2) {
          return new ll("Data track publishing unauthorized", sl.NotAllowed, { rawMessage: e2 });
        }
        static duplicateName(e2) {
          return new ll("Track name already taken", sl.DuplicateName, { rawMessage: e2 });
        }
        static invalidName(e2) {
          return new ll("Track name is invalid", sl.InvalidName, { rawMessage: e2 });
        }
        static timeout() {
          return new ll("Publish data track timed-out. Does the LiveKit server support data tracks?", sl.Timeout);
        }
        static limitReached(e2) {
          return new ll("Data track publication limit reached", sl.LimitReached, { rawMessage: e2 });
        }
        static unknown(e2, t2) {
          return new ll("Received RequestResponse for publishDataTrack, but reason was unrecognised (".concat(e2, ", ").concat(t2, ")"), sl.Unknown);
        }
        static disconnected() {
          return new ll("Room disconnected", sl.Disconnected);
        }
        static cancelled() {
          return new ll("Publish data track cancelled by caller", sl.Cancelled);
        }
      }
      !(function(e2) {
        e2[e2.TrackUnpublished = 0] = "TrackUnpublished", e2[e2.Dropped = 1] = "Dropped";
      })(ol || (ol = {}));
      class ul extends Ta {
        constructor(e2, t2, n2) {
          super(22, e2, n2), this.name = "DataTrackPushFrameError", this.reason = t2, this.reasonName = ol[t2];
        }
        static trackUnpublished() {
          return new ul("Track is no longer published", ol.TrackUnpublished);
        }
        static dropped(e2) {
          return new ul("Frame was dropped", ol.Dropped, { cause: e2 });
        }
      }
      !(function(e2) {
        e2[e2.Packetizer = 0] = "Packetizer", e2[e2.Encryption = 1] = "Encryption";
      })(cl || (cl = {}));
      class hl extends Ta {
        constructor(e2, t2, n2) {
          super(21, e2, n2), this.name = "DataTrackOutgoingPipelineError", this.reason = t2, this.reasonName = cl[t2];
        }
        static packetizer(e2) {
          return new hl("Error packetizing frame", cl.Packetizer, { cause: e2 });
        }
        static encryption(e2) {
          return new hl("Error encrypting frame", cl.Encryption, { cause: e2 });
        }
      }
      class pl {
        constructor(t2, n2) {
          this.trackSymbol = Vd, this.isLocal = true, this.typeSymbol = Hd, this.handle = null, this.log = Vi, this.flushedFuture = new Qs(), this.isFlushed = true, this.handleManagerReset = () => {
            var e2, t3;
            null === (t3 = (e2 = this.flushedFuture).resolve) || void 0 === t3 || t3.call(e2), this.manager.off("packetsFlushedChange", this.handleManagerPacketsFlushedChange), this.manager.off("reset", this.handleManagerReset);
          }, this.handleManagerPacketsFlushedChange = (e2) => {
            var t3, n3;
            this.isFlushed = e2.isFlushed, e2.isFlushed && (null === (n3 = (t3 = this.flushedFuture).resolve) || void 0 === n3 || n3.call(t3), this.flushedFuture = new Qs());
          }, this.options = t2, this.manager = n2, this.log = Wi(e.LoggerNames.DataTracks), this.manager.on("packetsFlushedChange", this.handleManagerPacketsFlushedChange), this.manager.on("reset", this.handleManagerReset);
        }
        static withExplicitHandle(e2, t2, n2) {
          const i2 = new pl(e2, t2);
          return i2.handle = n2, i2;
        }
        get info() {
          const e2 = this.descriptor;
          return "active" === (null == e2 ? void 0 : e2.type) ? e2.info : void 0;
        }
        get descriptor() {
          return this.handle ? this.manager.getDescriptor(this.handle) : null;
        }
        publish(e2) {
          return Yi(this, void 0, void 0, (function* () {
            try {
              this.handle = yield this.manager.publishRequest(this.options, e2);
            } catch (e3) {
              throw e3;
            }
          }));
        }
        isPublished() {
          var e2;
          return "active" === (null === (e2 = this.descriptor) || void 0 === e2 ? void 0 : e2.type) && "unpublished" !== this.descriptor.publishState;
        }
        tryPush(e2) {
          if (!this.handle) throw ul.trackUnpublished();
          const t2 = qd.from(e2);
          try {
            return this.manager.tryProcessAndSend(this.handle, t2);
          } catch (e3) {
            throw e3;
          }
        }
        flush() {
          return Yi(this, void 0, void 0, (function* () {
            if (!this.isFlushed) return this.flushedFuture.promise;
          }));
        }
        unpublish() {
          return Yi(this, void 0, void 0, (function* () {
            if (this.handle) try {
              yield this.manager.unpublishRequest(this.handle);
            } catch (e2) {
              throw e2;
            }
            else Vi.warn('Data track "'.concat(this.options.name, '" is not published, so unpublishing has no effect.'));
          }));
        }
      }
      class ml {
        constructor(e2) {
          this.e2eeManager = e2.e2eeManager, this.packetizer = new dl(e2.info.pubHandle, ml.TRANSPORT_MTU_BYTES);
        }
        updateE2eeManager(e2) {
          this.e2eeManager = e2;
        }
        processFrame(e2) {
          return $i(this, arguments, (function* () {
            const t2 = yield Zi(this.encryptIfNeeded(e2));
            try {
              yield Zi(yield* (function(e3) {
                var t3, n2;
                return t3 = {}, i2("next"), i2("throw", (function(e4) {
                  throw e4;
                })), i2("return"), t3[Symbol.iterator] = function() {
                  return this;
                }, t3;
                function i2(i3, r2) {
                  t3[i3] = e3[i3] ? function(t4) {
                    return (n2 = !n2) ? { value: Zi(e3[i3](t4)), done: false } : r2 ? r2(t4) : t4;
                  } : r2;
                }
              })(er(this.packetizer.packetize(t2))));
            } catch (e3) {
              if (e3 instanceof rl) throw hl.packetizer(e3);
              throw e3;
            }
          }));
        }
        encryptIfNeeded(e2) {
          return Yi(this, void 0, void 0, (function* () {
            if (!this.e2eeManager) return e2;
            let t2;
            try {
              t2 = yield this.e2eeManager.encryptData(e2.payload);
            } catch (e3) {
              throw hl.encryption(e3);
            }
            return e2.payload = t2.payload, e2.extensions.e2ee = new Bd(t2.keyIndex, t2.iv), e2;
          }));
        }
      }
      ml.TRANSPORT_MTU_BYTES = 16e3;
      const gl = Wi(e.LoggerNames.DataTracks), vl = { pending: () => ({ type: "pending", completionFuture: new Qs() }), active: (e2, t2) => ({ type: "active", info: e2, publishState: "published", pipeline: new ml({ info: e2, e2eeManager: t2 }), unpublishingFuture: new Qs() }) };
      class fl extends ir.EventEmitter {
        constructor(e2) {
          var t2;
          super(), this.handleAllocator = new rc(), this.descriptors = /* @__PURE__ */ new Map(), this.inFlightPacketCounter = /* @__PURE__ */ new Map(), this.e2eeManager = null !== (t2 = null == e2 ? void 0 : e2.e2eeManager) && void 0 !== t2 ? t2 : null;
        }
        static withDescriptors(e2) {
          const t2 = new fl();
          return t2.descriptors = e2, t2;
        }
        updateE2eeManager(e2) {
          this.e2eeManager = e2;
          for (const t2 of this.descriptors.values()) "active" === t2.type && t2.pipeline.updateE2eeManager(e2);
        }
        getDescriptor(e2) {
          var t2;
          return null !== (t2 = this.descriptors.get(e2)) && void 0 !== t2 ? t2 : null;
        }
        tryProcessAndSend(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            var n2, i2, r2, a2, s2;
            const o2 = this.getDescriptor(e2);
            if ("active" !== (null == o2 ? void 0 : o2.type)) throw ul.trackUnpublished();
            if ("unpublished" === o2.publishState) throw ul.trackUnpublished();
            if ("republishing" === o2.publishState) throw ul.dropped("Data track republishing");
            try {
              try {
                for (var c2, d2 = true, l2 = er(o2.pipeline.processFrame(t2)); !(n2 = (c2 = yield l2.next()).done); d2 = true) {
                  a2 = c2.value, d2 = false;
                  const t3 = a2, n3 = null !== (s2 = this.inFlightPacketCounter.get(e2)) && void 0 !== s2 ? s2 : 0;
                  this.inFlightPacketCounter.set(e2, n3 + 1), 0 === n3 && this.emit("packetsFlushedChange", { handle: e2, isFlushed: false }), this.emit("packetAvailable", { handle: e2, bytes: t3.toBinary() });
                }
              } catch (e3) {
                i2 = { error: e3 };
              } finally {
                try {
                  d2 || n2 || !(r2 = l2.return) || (yield r2.call(l2));
                } finally {
                  if (i2) throw i2.error;
                }
              }
            } catch (e3) {
              throw ul.dropped(e3);
            }
          }));
        }
        handlePacketSendComplete(e2) {
          var t2;
          let n2 = (null !== (t2 = this.inFlightPacketCounter.get(e2)) && void 0 !== t2 ? t2 : 0) - 1;
          n2 < 0 && (gl.warn("OutgoingDataTrackManager.handlePacketSendComplete: inFlightPacketCounter was decremented below 0 (got ".concat(this.inFlightPacketCounter, " - resetting to 0. Were more packets send than were emitted?")), n2 = 0), this.inFlightPacketCounter.set(e2, n2), 0 === n2 && this.emit("packetsFlushedChange", { handle: e2, isFlushed: true });
        }
        publishRequest(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            const n2 = this.handleAllocator.get();
            if (!n2) throw ll.limitReached();
            const i2 = Md(1e4), r2 = t2 ? Dd([t2, i2]) : i2;
            if (this.descriptors.has(n2)) throw new Error("Descriptor for handle already exists");
            const a2 = vl.pending();
            this.descriptors.set(n2, a2);
            const s2 = () => {
              var e3, t3;
              const r3 = this.descriptors.get(n2);
              r3 ? (this.descriptors.delete(n2), this.emit("sfuUnpublishRequest", { handle: n2 }), "pending" === r3.type && (null === (t3 = (e3 = r3.completionFuture).reject) || void 0 === t3 || t3.call(e3, i2.aborted ? ll.timeout() : ll.cancelled()))) : gl.warn("No descriptor for ".concat(n2));
            };
            return r2.aborted ? (s2(), a2.completionFuture.promise.then((() => n2))) : (r2.addEventListener("abort", s2), this.emit("sfuPublishRequest", { handle: n2, name: e2.name, usesE2ee: null !== this.e2eeManager }), yield a2.completionFuture.promise, r2.removeEventListener("abort", s2), this.emit("trackPublished", { track: pl.withExplicitHandle(e2, this, n2) }), n2);
          }));
        }
        queryPublished() {
          return Array.from(this.descriptors.values()).filter(((e2) => "active" === e2.type)).map(((e2) => e2.info));
        }
        unpublishRequest(e2) {
          return Yi(this, void 0, void 0, (function* () {
            const t2 = this.descriptors.get(e2);
            t2 ? "active" === t2.type ? (this.emit("sfuUnpublishRequest", { handle: e2 }), yield t2.unpublishingFuture.promise, this.inFlightPacketCounter.delete(e2), this.emit("trackUnpublished", { sid: t2.info.sid })) : gl.warn("Track ".concat(e2, " not active")) : gl.warn("No descriptor for ".concat(e2));
          }));
        }
        receivedSfuPublishResponse(e2, t2) {
          var n2, i2, r2, a2;
          const s2 = this.descriptors.get(e2);
          if (s2) switch (this.descriptors.delete(e2), s2.type) {
            case "pending":
              if ("ok" === t2.type) {
                const e3 = t2.data, r3 = e3.usesE2ee ? this.e2eeManager : null;
                this.descriptors.set(e3.pubHandle, vl.active(e3, r3)), null === (i2 = (n2 = s2.completionFuture).resolve) || void 0 === i2 || i2.call(n2);
              } else null === (a2 = (r2 = s2.completionFuture).reject) || void 0 === a2 || a2.call(r2, t2.error);
              return;
            case "active":
              if ("republishing" !== s2.publishState) return void gl.warn("Track ".concat(e2, " already active"));
              if ("error" === t2.type) return void gl.warn("Republish failed for track ".concat(e2));
              gl.debug("Track ".concat(e2, " republished")), s2.info.sid = t2.data.sid, s2.publishState = "published", this.descriptors.set(s2.info.pubHandle, s2);
          }
          else gl.warn("No descriptor for ".concat(e2));
        }
        receivedSfuUnpublishResponse(e2) {
          var t2, n2;
          const i2 = this.descriptors.get(e2);
          i2 ? (this.descriptors.delete(e2), "active" === i2.type ? (i2.publishState = "unpublished", null === (n2 = (t2 = i2.unpublishingFuture).resolve) || void 0 === n2 || n2.call(t2)) : gl.warn("Track ".concat(e2, " not active"))) : gl.warn("No descriptor for ".concat(e2));
        }
        sfuWillRepublishTracks() {
          var e2, t2;
          for (const i2 of this.descriptors.entries()) {
            var n2 = x(i2, 2);
            const r2 = n2[0], a2 = n2[1];
            switch (a2.type) {
              case "pending":
                this.descriptors.delete(r2), null === (t2 = (e2 = a2.completionFuture).reject) || void 0 === t2 || t2.call(e2, ll.disconnected());
                break;
              case "active":
                a2.publishState = "republishing", this.emit("sfuPublishRequest", { handle: a2.info.pubHandle, name: a2.info.name, usesE2ee: a2.info.usesE2ee });
            }
          }
        }
        reset() {
          return Yi(this, void 0, void 0, (function* () {
            var e2, t2, n2, i2;
            this.handleAllocator.reset();
            for (const r2 of this.descriptors.values()) switch (r2.type) {
              case "pending":
                null === (t2 = (e2 = r2.completionFuture).reject) || void 0 === t2 || t2.call(e2, ll.disconnected());
                break;
              case "active":
                null === (i2 = (n2 = r2.unpublishingFuture).resolve) || void 0 === i2 || i2.call(n2), yield this.unpublishRequest(r2.info.pubHandle);
            }
            this.descriptors.clear(), this.inFlightPacketCounter.clear(), this.emit("reset");
          }));
        }
      }
      class kl extends Error {
        constructor(e2, t2, n2, i2) {
          super(t2), this.code = e2, this.message = El(t2, kl.MAX_MESSAGE_BYTES), this.data = n2 ? El(n2, kl.MAX_DATA_BYTES) : void 0, void 0 !== (null == i2 ? void 0 : i2.cause) && (this.cause = null == i2 ? void 0 : i2.cause);
        }
        static fromProto(e2) {
          return new kl(e2.code, e2.message, e2.data);
        }
        toProto() {
          return new At({ code: this.code, message: this.message, data: this.data });
        }
        static builtIn(e2, t2, n2) {
          return new kl(kl.ErrorCode[e2], kl.ErrorMessage[e2], t2, n2);
        }
      }
      kl.MAX_MESSAGE_BYTES = 256, kl.MAX_DATA_BYTES = 15360, kl.ErrorCode = { APPLICATION_ERROR: 1500, CONNECTION_TIMEOUT: 1501, RESPONSE_TIMEOUT: 1502, RECIPIENT_DISCONNECTED: 1503, RESPONSE_PAYLOAD_TOO_LARGE: 1504, SEND_FAILED: 1505, UNSUPPORTED_METHOD: 1400, RECIPIENT_NOT_FOUND: 1401, REQUEST_PAYLOAD_TOO_LARGE: 1402, UNSUPPORTED_SERVER: 1403, UNSUPPORTED_VERSION: 1404 }, kl.ErrorMessage = { APPLICATION_ERROR: "Application error in method handler", CONNECTION_TIMEOUT: "Connection timeout", RESPONSE_TIMEOUT: "Response timeout", RECIPIENT_DISCONNECTED: "Recipient disconnected", RESPONSE_PAYLOAD_TOO_LARGE: "Response payload too large", SEND_FAILED: "Failed to send", UNSUPPORTED_METHOD: "Method not supported at destination", RECIPIENT_NOT_FOUND: "Recipient not found", REQUEST_PAYLOAD_TOO_LARGE: "Request payload too large", UNSUPPORTED_SERVER: "RPC not supported by server", UNSUPPORTED_VERSION: "Unsupported RPC version" };
      const yl = "lk.rpc_request", bl = "lk.rpc_response";
      var Tl;
      !(function(e2) {
        e2.RPC_REQUEST_ID = "lk.rpc_request_id", e2.RPC_REQUEST_METHOD = "lk.rpc_request_method", e2.RPC_REQUEST_RESPONSE_TIMEOUT_MS = "lk.rpc_request_response_timeout_ms", e2.RPC_REQUEST_VERSION = "lk.rpc_request_version";
      })(Tl || (Tl = {}));
      function Sl(e2) {
        return new TextEncoder().encode(e2).length;
      }
      function El(e2, t2) {
        if (Sl(e2) <= t2) return e2;
        let n2 = 0, i2 = e2.length;
        const r2 = new TextEncoder();
        for (; n2 < i2; ) {
          const a2 = Math.floor((n2 + i2 + 1) / 2);
          r2.encode(e2.slice(0, a2)).length <= t2 ? n2 = a2 : i2 = a2 - 1;
        }
        return e2.slice(0, n2);
      }
      class Cl extends ir.EventEmitter {
        constructor(e2, t2, n2, i2) {
          super(), this.pendingAcks = /* @__PURE__ */ new Map(), this.pendingResponses = /* @__PURE__ */ new Map(), this.log = e2, this.outgoingDataStreamManager = t2, this.getRemoteParticipantClientProtocol = n2, this.getServerVersion = i2;
        }
        performRpc(e2) {
          return Yi(this, arguments, void 0, (function(e3) {
            var t2 = this;
            let n2 = e3.destinationIdentity, i2 = e3.method, r2 = e3.payload, a2 = e3.responseTimeout, s2 = void 0 === a2 ? 15e3 : a2;
            return (function* () {
              const e4 = t2.getRemoteParticipantClientProtocol(n2);
              if (Sl(r2) > 15360 && e4 < 1) throw kl.builtIn("REQUEST_PAYLOAD_TOO_LARGE");
              const a3 = t2.getServerVersion();
              if (a3 && Fs(a3, "1.8.0") < 0) throw kl.builtIn("UNSUPPORTED_SERVER");
              const o2 = Math.max(s2, 8e3), c2 = crypto.randomUUID(), d2 = new Qs();
              let l2 = null;
              const u2 = setTimeout((() => {
                var e5;
                t2.pendingAcks.delete(c2), null === (e5 = d2.reject) || void 0 === e5 || e5.call(d2, kl.builtIn("CONNECTION_TIMEOUT")), t2.pendingResponses.delete(c2), null !== l2 && clearTimeout(l2);
              }), 7e3);
              t2.pendingAcks.set(c2, { resolve: () => {
                clearTimeout(u2);
              }, participantIdentity: n2 }), t2.pendingResponses.set(c2, { completionFuture: d2, participantIdentity: n2 }), yield t2.publishRpcRequest(n2, c2, i2, r2, o2, e4), l2 = setTimeout((() => {
                var e5;
                t2.pendingResponses.delete(c2), null === (e5 = d2.reject) || void 0 === e5 || e5.call(d2, kl.builtIn("RESPONSE_TIMEOUT"));
              }), s2);
              const h2 = d2.promise.finally((() => {
                clearTimeout(l2), t2.pendingAcks.has(c2) && (t2.log.warn("RPC response received before ack", c2), t2.pendingAcks.delete(c2), clearTimeout(u2));
              }));
              return [c2, h2];
            })();
          }));
        }
        publishRpcRequest(e2, t2, n2, i2, r2, a2) {
          return Yi(this, void 0, void 0, (function* () {
            if (a2 >= 1) {
              const a3 = yield this.outgoingDataStreamManager.streamText({ topic: yl, destinationIdentities: [e2], attributes: { [Tl.RPC_REQUEST_ID]: t2, [Tl.RPC_REQUEST_METHOD]: n2, [Tl.RPC_REQUEST_RESPONSE_TIMEOUT_MS]: "".concat(r2), [Tl.RPC_REQUEST_VERSION]: "".concat(2) } });
              return yield a3.write(i2), void (yield a3.close());
            }
            this.emit("sendDataPacket", { packet: new yt({ destinationIdentities: [e2], kind: bt.RELIABLE, value: { case: "rpcRequest", value: new Mt({ id: t2, method: n2, payload: i2, responseTimeoutMs: r2, version: 1 }) } }) });
          }));
        }
        handleIncomingDataStream(e2, t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            const i2 = n2[Tl.RPC_REQUEST_ID];
            if (!i2) return void this.log.warn("RPC data stream malformed: ".concat(Tl.RPC_REQUEST_ID, " not set."));
            const r2 = this.pendingResponses.get(i2);
            if (r2 && r2.participantIdentity !== t2) return void this.log.warn("RPC response stream for ".concat(i2, " arrived from unexpected sender ").concat(t2, ", expected ").concat(r2.participantIdentity, ". Ignoring."));
            let a2;
            try {
              a2 = yield e2.readAll();
            } catch (e3) {
              return this.log.warn("Error reading RPC response payload: ".concat(e3)), void this.handleIncomingRpcResponseFailure(i2, kl.builtIn("APPLICATION_ERROR", "Error reading RPC response payload", { cause: e3 }));
            }
            this.handleIncomingRpcResponseSuccess(i2, a2);
          }));
        }
        handleIncomingRpcResponseSuccess(e2, t2) {
          var n2, i2;
          const r2 = this.pendingResponses.get(e2);
          r2 ? (null === (i2 = (n2 = r2.completionFuture).resolve) || void 0 === i2 || i2.call(n2, t2), this.pendingResponses.delete(e2)) : this.log.error("Response received for unexpected RPC request", e2);
        }
        handleIncomingRpcResponseFailure(e2, t2) {
          var n2, i2;
          const r2 = this.pendingResponses.get(e2);
          r2 ? (null === (i2 = (n2 = r2.completionFuture).reject) || void 0 === i2 || i2.call(n2, t2), this.pendingResponses.delete(e2)) : this.log.error("Response received for unexpected RPC request", e2);
        }
        handleIncomingRpcAck(e2) {
          const t2 = this.pendingAcks.get(e2);
          t2 ? (t2.resolve(), this.pendingAcks.delete(e2)) : this.log.error("Ack received for unexpected RPC request: ".concat(e2));
        }
        handleParticipantDisconnected(e2) {
          var t2;
          for (const t3 of this.pendingAcks) {
            var n2 = x(t3, 2);
            const i3 = n2[0];
            n2[1].participantIdentity === e2 && this.pendingAcks.delete(i3);
          }
          for (const n3 of this.pendingResponses) {
            var i2 = x(n3, 2);
            const a2 = i2[0];
            var r2 = i2[1];
            const s2 = r2.participantIdentity, o2 = r2.completionFuture;
            s2 === e2 && (null === (t2 = o2.reject) || void 0 === t2 || t2.call(o2, kl.builtIn("RECIPIENT_DISCONNECTED")), this.pendingResponses.delete(a2));
          }
        }
      }
      class wl extends ir.EventEmitter {
        constructor(e2, t2, n2) {
          super(), this.rpcHandlers = /* @__PURE__ */ new Map(), this.log = e2, this.outgoingDataStreamManager = t2, this.getRemoteParticipantClientProtocol = n2;
        }
        registerRpcMethod(e2, t2) {
          if (this.rpcHandlers.has(e2)) throw Error("RPC handler already registered for method ".concat(e2, ", unregisterRpcMethod before trying to register again"));
          this.rpcHandlers.set(e2, t2);
        }
        unregisterRpcMethod(e2) {
          this.rpcHandlers.delete(e2);
        }
        handleIncomingRpcRequest(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            var n2;
            if (this.publishRpcAck(e2, t2.id), 1 !== t2.version) return void this.publishRpcResponsePacket(e2, t2.id, null, kl.builtIn("UNSUPPORTED_VERSION"));
            const i2 = this.rpcHandlers.get(t2.method);
            if (!i2) return void this.publishRpcResponsePacket(e2, t2.id, null, kl.builtIn("UNSUPPORTED_METHOD"));
            let r2;
            try {
              r2 = yield i2({ requestId: t2.id, callerIdentity: e2, payload: t2.payload, responseTimeout: t2.responseTimeoutMs });
            } catch (i3) {
              let r3;
              return i3 instanceof kl ? r3 = i3 : (this.log.warn("Uncaught error returned by RPC handler for ".concat(t2.method, ". Returning APPLICATION_ERROR instead."), i3), r3 = kl.builtIn("APPLICATION_ERROR", "Uncaught error: ".concat(null !== (n2 = null == i3 ? void 0 : i3.message) && void 0 !== n2 ? n2 : i3), { cause: i3 })), void this.publishRpcResponsePacket(e2, t2.id, null, r3);
            }
            yield this.publishRpcResponse(e2, t2.id, null != r2 ? r2 : "");
          }));
        }
        handleIncomingDataStream(e2, t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            const i2 = n2[Tl.RPC_REQUEST_ID], r2 = n2[Tl.RPC_REQUEST_METHOD], a2 = parseInt(n2[Tl.RPC_REQUEST_RESPONSE_TIMEOUT_MS], 10), s2 = parseInt(n2[Tl.RPC_REQUEST_VERSION], 10);
            if (!i2 || !r2 || Number.isNaN(a2) || Number.isNaN(s2)) return this.log.warn("RPC data stream malformed: ".concat(Tl.RPC_REQUEST_ID, " / ").concat(Tl.RPC_REQUEST_METHOD, " / ").concat(Tl.RPC_REQUEST_RESPONSE_TIMEOUT_MS, " / ").concat(Tl.RPC_REQUEST_VERSION, " not set.")), void this.publishRpcResponsePacket(t2, i2, null, kl.builtIn("APPLICATION_ERROR", "RPC data stream malformed"));
            if (this.publishRpcAck(t2, i2), 2 !== s2) return void this.publishRpcResponsePacket(t2, i2, null, kl.builtIn("UNSUPPORTED_VERSION"));
            let o2;
            try {
              o2 = yield e2.readAll();
            } catch (e3) {
              return this.log.warn("Error reading RPC request payload: ".concat(e3)), void this.publishRpcResponsePacket(t2, i2, null, kl.builtIn("APPLICATION_ERROR", "Error reading RPC request payload", { cause: e3 }));
            }
            const c2 = this.rpcHandlers.get(r2);
            if (!c2) return void this.publishRpcResponsePacket(t2, i2, null, kl.builtIn("UNSUPPORTED_METHOD"));
            let d2;
            try {
              d2 = yield c2({ requestId: i2, callerIdentity: t2, payload: o2, responseTimeout: a2 });
            } catch (e3) {
              let n3;
              return e3 instanceof kl ? n3 = e3 : (this.log.warn("Uncaught error returned by RPC handler for ".concat(r2, ". Returning APPLICATION_ERROR instead."), e3), n3 = kl.builtIn("APPLICATION_ERROR")), void this.publishRpcResponsePacket(t2, i2, null, n3);
            }
            yield this.publishRpcResponse(t2, i2, null != d2 ? d2 : "");
          }));
        }
        publishRpcAck(e2, t2) {
          this.emit("sendDataPacket", { packet: new yt({ destinationIdentities: [e2], kind: bt.RELIABLE, value: { case: "rpcAck", value: new _t({ requestId: t2 }) } }) });
        }
        publishRpcResponsePacket(e2, t2, n2, i2) {
          this.emit("sendDataPacket", { packet: new yt({ destinationIdentities: [e2], kind: bt.RELIABLE, value: { case: "rpcResponse", value: new Ot({ requestId: t2, value: i2 ? { case: "error", value: i2.toProto() } : { case: "payload", value: null != n2 ? n2 : "" } }) } }) });
        }
        publishRpcResponse(e2, t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            if (this.getRemoteParticipantClientProtocol(e2) >= 1) {
              const i2 = yield this.outgoingDataStreamManager.streamText({ topic: bl, destinationIdentities: [e2], attributes: { [Tl.RPC_REQUEST_ID]: t2 } });
              return yield i2.write(n2), void (yield i2.close());
            }
            if (Sl(n2) > 15360) return this.log.warn("RPC Response payload too large for request ".concat(t2, ". To send larger responses, consider updating the sending client.")), void this.publishRpcResponsePacket(e2, t2, null, kl.builtIn("RESPONSE_PAYLOAD_TOO_LARGE"));
            this.publishRpcResponsePacket(e2, t2, n2, null);
          }));
        }
      }
      class Rl extends Uo {
        constructor(e2, t2, n2, i2, r2, a2) {
          super(e2, t2, ps.Kind.Audio, n2, a2), this.monitorReceiver = () => Yi(this, void 0, void 0, (function* () {
            if (!this.receiver) return void (this._currentBitrate = 0);
            const e3 = yield this.getReceiverStats();
            e3 && this.prevStats && this.receiver && (this._currentBitrate = Lo(e3, this.prevStats)), this.prevStats = e3;
          })), this.audioContext = i2, this.webAudioPluginNodes = [], r2 && (this.sinkId = r2.deviceId);
        }
        setVolume(e2) {
          var t2;
          for (const n2 of this.attachedElements) this.audioContext ? null === (t2 = this.gainNode) || void 0 === t2 || t2.gain.setTargetAtTime(e2, 0, 0.1) : n2.volume = e2;
          Os() && this._mediaStreamTrack._setVolume(e2), this.elementVolume = e2;
        }
        getVolume() {
          if (this.elementVolume) return this.elementVolume;
          if (Os()) return 1;
          let e2 = 0;
          return this.attachedElements.forEach(((t2) => {
            t2.volume > e2 && (e2 = t2.volume);
          })), e2;
        }
        setSinkId(e2) {
          return Yi(this, void 0, void 0, (function* () {
            this.sinkId = e2, yield Promise.all(this.attachedElements.map(((t2) => {
              if (Es(t2)) return t2.setSinkId(e2);
            })));
          }));
        }
        attach(e2) {
          const t2 = 0 === this.attachedElements.length;
          return e2 ? super.attach(e2) : e2 = super.attach(), this.sinkId && Es(e2) && e2.setSinkId(this.sinkId).catch(((e3) => {
            this.log.error("Failed to set sink id on remote audio track", e3, this.logContext);
          })), this.audioContext && t2 && (this.log.debug("using audio context mapping", this.logContext), this.connectWebAudio(this.audioContext, e2), e2.volume = 0, e2.muted = true), this.elementVolume && this.setVolume(this.elementVolume), e2;
        }
        detach(e2) {
          let t2;
          return e2 ? (t2 = super.detach(e2), this.audioContext && (this.attachedElements.length > 0 ? this.connectWebAudio(this.audioContext, this.attachedElements[0]) : this.disconnectWebAudio())) : (t2 = super.detach(), this.disconnectWebAudio()), t2;
        }
        setAudioContext(e2) {
          this.audioContext = e2, e2 && this.attachedElements.length > 0 ? this.connectWebAudio(e2, this.attachedElements[0]) : e2 || this.disconnectWebAudio();
        }
        setWebAudioPlugins(e2) {
          this.webAudioPluginNodes = e2, this.attachedElements.length > 0 && this.audioContext && this.connectWebAudio(this.audioContext, this.attachedElements[0]);
        }
        connectWebAudio(t2, n2) {
          this.disconnectWebAudio(), this.sourceNode = t2.createMediaStreamSource(n2.srcObject);
          let i2 = this.sourceNode;
          this.webAudioPluginNodes.forEach(((e2) => {
            i2.connect(e2), i2 = e2;
          })), this.gainNode = t2.createGain(), i2.connect(this.gainNode), this.gainNode.connect(t2.destination), this.elementVolume && this.gainNode.gain.setTargetAtTime(this.elementVolume, 0, 0.1), "running" !== t2.state && t2.resume().then((() => {
            "running" !== t2.state && this.emit(e.TrackEvent.AudioPlaybackFailed, new Error("Audio Context couldn't be started automatically"));
          })).catch(((t3) => {
            this.emit(e.TrackEvent.AudioPlaybackFailed, t3);
          }));
        }
        disconnectWebAudio() {
          var e2, t2;
          null === (e2 = this.gainNode) || void 0 === e2 || e2.disconnect(), null === (t2 = this.sourceNode) || void 0 === t2 || t2.disconnect(), this.gainNode = void 0, this.sourceNode = void 0;
        }
        getReceiverStats() {
          return Yi(this, void 0, void 0, (function* () {
            if (!this.receiver || !this.receiver.getStats) return;
            let e2;
            return (yield this.receiver.getStats()).forEach(((t2) => {
              "inbound-rtp" === t2.type && (e2 = { type: "audio", streamId: t2.id, timestamp: t2.timestamp, jitter: t2.jitter, bytesReceived: t2.bytesReceived, concealedSamples: t2.concealedSamples, concealmentEvents: t2.concealmentEvents, silentConcealedSamples: t2.silentConcealedSamples, silentConcealmentEvents: t2.silentConcealmentEvents, totalAudioEnergy: t2.totalAudioEnergy, totalSamplesDuration: t2.totalSamplesDuration });
            })), e2;
          }));
        }
      }
      class Pl extends ir.EventEmitter {
        constructor(t2, n2, i2, r2) {
          var a2;
          super(), this.metadataMuted = false, this.encryption = ht.NONE, this.log = Vi, this.handleMuted = () => {
            this.emit(e.TrackEvent.Muted);
          }, this.handleUnmuted = () => {
            this.emit(e.TrackEvent.Unmuted);
          }, this.log = Wi(null !== (a2 = null == r2 ? void 0 : r2.loggerName) && void 0 !== a2 ? a2 : e.LoggerNames.Publication), this.loggerContextCb = this.loggerContextCb, this.setMaxListeners(100), this.kind = t2, this.trackSid = n2, this.trackName = i2, this.source = ps.Source.Unknown;
        }
        setTrack(t2) {
          this.track && (this.track.off(e.TrackEvent.Muted, this.handleMuted), this.track.off(e.TrackEvent.Unmuted, this.handleUnmuted)), this.track = t2, t2 && (t2.on(e.TrackEvent.Muted, this.handleMuted), t2.on(e.TrackEvent.Unmuted, this.handleUnmuted));
        }
        get logContext() {
          var e2;
          return Object.assign(Object.assign({}, null === (e2 = this.loggerContextCb) || void 0 === e2 ? void 0 : e2.call(this)), cs(this));
        }
        get isMuted() {
          return this.metadataMuted;
        }
        get isEnabled() {
          return true;
        }
        get isSubscribed() {
          return void 0 !== this.track;
        }
        get isEncrypted() {
          return this.encryption !== ht.NONE;
        }
        get audioTrack() {
          if (io(this.track)) return this.track;
        }
        get videoTrack() {
          if (ro(this.track)) return this.track;
        }
        updateInfo(e2) {
          this.trackSid = e2.sid, this.trackName = e2.name, this.source = ps.sourceFromProto(e2.source), this.mimeType = e2.mimeType, this.kind === ps.Kind.Video && e2.width > 0 && (this.dimensions = { width: e2.width, height: e2.height }, this.simulcasted = e2.simulcast), this.encryption = e2.encryption, this.trackInfo = e2, this.log.debug("update publication info", Object.assign(Object.assign({}, this.logContext), { info: e2 }));
        }
      }
      !(function(e2) {
        var t2, n2;
        (t2 = e2.SubscriptionStatus || (e2.SubscriptionStatus = {})).Desired = "desired", t2.Subscribed = "subscribed", t2.Unsubscribed = "unsubscribed", (n2 = e2.PermissionStatus || (e2.PermissionStatus = {})).Allowed = "allowed", n2.NotAllowed = "not_allowed";
      })(Pl || (Pl = {}));
      class Il extends Pl {
        get isUpstreamPaused() {
          var e2;
          return null === (e2 = this.track) || void 0 === e2 ? void 0 : e2.isUpstreamPaused;
        }
        constructor(t2, n2, i2, r2) {
          super(t2, n2.sid, n2.name, r2), this.track = void 0, this.handleTrackEnded = () => {
            this.emit(e.TrackEvent.Ended);
          }, this.handleCpuConstrained = () => {
            this.track && ro(this.track) && this.emit(e.TrackEvent.CpuConstrained, this.track);
          }, this.updateInfo(n2), this.setTrack(i2);
        }
        setTrack(t2) {
          this.track && (this.track.off(e.TrackEvent.Ended, this.handleTrackEnded), this.track.off(e.TrackEvent.CpuConstrained, this.handleCpuConstrained)), super.setTrack(t2), t2 && (t2.on(e.TrackEvent.Ended, this.handleTrackEnded), t2.on(e.TrackEvent.CpuConstrained, this.handleCpuConstrained));
        }
        get isMuted() {
          return this.track ? this.track.isMuted : super.isMuted;
        }
        get audioTrack() {
          return super.audioTrack;
        }
        get videoTrack() {
          return super.videoTrack;
        }
        get isLocal() {
          return true;
        }
        mute() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            return null === (e2 = this.track) || void 0 === e2 ? void 0 : e2.mute();
          }));
        }
        unmute() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            return null === (e2 = this.track) || void 0 === e2 ? void 0 : e2.unmute();
          }));
        }
        pauseUpstream() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            yield null === (e2 = this.track) || void 0 === e2 ? void 0 : e2.pauseUpstream();
          }));
        }
        resumeUpstream() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            yield null === (e2 = this.track) || void 0 === e2 ? void 0 : e2.resumeUpstream();
          }));
        }
        getTrackFeatures() {
          var e2;
          if (io(this.track)) {
            const t2 = this.track.getSourceTrackSettings(), n2 = /* @__PURE__ */ new Set();
            return t2.autoGainControl && n2.add(it.TF_AUTO_GAIN_CONTROL), t2.echoCancellation && n2.add(it.TF_ECHO_CANCELLATION), t2.noiseSuppression && n2.add(it.TF_NOISE_SUPPRESSION), t2.channelCount && t2.channelCount > 1 && n2.add(it.TF_STEREO), (null === (e2 = this.options) || void 0 === e2 ? void 0 : e2.dtx) || n2.add(it.TF_NO_DTX), this.track.enhancedNoiseCancellation && n2.add(it.TF_ENHANCED_NOISE_CANCELLATION), Array.from(n2.values());
          }
          return [];
        }
      }
      function Dl(e2, t2) {
        return Yi(this, void 0, void 0, (function* () {
          null != e2 || (e2 = {});
          let n2 = false;
          const i2 = ds(e2), r2 = i2.audioProcessor, a2 = i2.videoProcessor, s2 = i2.optionsWithoutProcessor;
          let o2 = s2.audio, c2 = s2.video;
          if (r2 && "object" == typeof s2.audio && (s2.audio.processor = r2), a2 && "object" == typeof s2.video && (s2.video.processor = a2), e2.audio && "object" == typeof s2.audio && "string" == typeof s2.audio.deviceId) {
            const e3 = s2.audio.deviceId;
            s2.audio.deviceId = { exact: e3 }, n2 = true, o2 = Object.assign(Object.assign({}, s2.audio), { deviceId: { ideal: e3 } });
          }
          if (s2.video && "object" == typeof s2.video && "string" == typeof s2.video.deviceId) {
            const e3 = s2.video.deviceId;
            s2.video.deviceId = { exact: e3 }, n2 = true, c2 = Object.assign(Object.assign({}, s2.video), { deviceId: { ideal: e3 } });
          }
          true === s2.audio ? s2.audio = { deviceId: "default" } : "object" == typeof s2.audio && null !== s2.audio && (s2.audio = Object.assign(Object.assign({}, s2.audio), { deviceId: s2.audio.deviceId || "default" })), true === s2.video ? s2.video = { deviceId: "default" } : "object" != typeof s2.video || s2.video.deviceId || (s2.video.deviceId = "default");
          const d2 = es(Za(s2, Fc, Bc)), l2 = navigator.mediaDevices.getUserMedia(d2);
          s2.audio && (Go.userMediaPromiseMap.set("audioinput", l2), l2.catch((() => Go.userMediaPromiseMap.delete("audioinput")))), s2.video && (Go.userMediaPromiseMap.set("videoinput", l2), l2.catch((() => Go.userMediaPromiseMap.delete("videoinput"))));
          try {
            const e3 = yield l2;
            return yield Promise.all(e3.getTracks().map(((n3) => Yi(this, void 0, void 0, (function* () {
              let i3;
              const s3 = "audio" === n3.kind ? d2.audio : d2.video;
              "boolean" != typeof s3 && (i3 = s3);
              const o3 = n3.getSettings().deviceId;
              (null == i3 ? void 0 : i3.deviceId) && Xs(i3.deviceId) !== o3 ? i3.deviceId = o3 : i3 || (i3 = { deviceId: o3 });
              const c3 = (function(e4, t3, n4) {
                switch (e4.kind) {
                  case "audio":
                    return new Gc(e4, t3, false, void 0, n4);
                  case "video":
                    return new od(e4, t3, false, n4);
                  default:
                    throw new _a("unsupported track type: ".concat(e4.kind));
                }
              })(n3, i3, t2);
              return c3.kind === ps.Kind.Video ? c3.source = ps.Source.Camera : c3.kind === ps.Kind.Audio && (c3.source = ps.Source.Microphone), c3.mediaStream = e3, io(c3) && r2 ? yield c3.setProcessor(r2) : ro(c3) && a2 && (yield c3.setProcessor(a2)), c3;
            })))));
          } catch (i3) {
            if (!n2) throw i3;
            return Dl(Object.assign(Object.assign({}, e2), { audio: o2, video: c2 }), t2);
          }
        }));
      }
      function Ml(e2) {
        return Yi(this, void 0, void 0, (function* () {
          return (yield Dl({ audio: false, video: null == e2 || e2 }))[0];
        }));
      }
      function _l(e2) {
        return Yi(this, void 0, void 0, (function* () {
          return (yield Dl({ audio: null == e2 || e2, video: false }))[0];
        }));
      }
      var Ol, Al;
      e.ConnectionQuality = void 0, (Ol = e.ConnectionQuality || (e.ConnectionQuality = {})).Excellent = "excellent", Ol.Good = "good", Ol.Poor = "poor", Ol.Lost = "lost", Ol.Unknown = "unknown";
      class Nl extends ir.EventEmitter {
        get logContext() {
          var e2, t2;
          return Object.assign({}, null === (t2 = null === (e2 = this.loggerOptions) || void 0 === e2 ? void 0 : e2.loggerContextCb) || void 0 === t2 ? void 0 : t2.call(e2));
        }
        get isEncrypted() {
          return this.trackPublications.size > 0 && Array.from(this.trackPublications.values()).every(((e2) => e2.isEncrypted));
        }
        get isAgent() {
          var e2;
          return (null === (e2 = this.permissions) || void 0 === e2 ? void 0 : e2.agent) || this.kind === lt.AGENT;
        }
        get isActive() {
          var e2;
          return (null === (e2 = this.participantInfo) || void 0 === e2 ? void 0 : e2.state) === dt.ACTIVE;
        }
        get kind() {
          return this._kind;
        }
        get attributes() {
          return Object.freeze(Object.assign({}, this._attributes));
        }
        constructor(t2, n2, i2, r2, a2, s2) {
          let o2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : lt.STANDARD;
          var c2;
          super(), this.audioLevel = 0, this.isSpeaking = false, this._connectionQuality = e.ConnectionQuality.Unknown, this.log = Vi, this.loggerOptions = s2, this.log = Wi(null !== (c2 = null == s2 ? void 0 : s2.loggerName) && void 0 !== c2 ? c2 : e.LoggerNames.Participant, (() => this.logContext)), this.setMaxListeners(100), this.sid = t2, this.identity = n2, this.name = i2, this.metadata = r2, this.audioTrackPublications = /* @__PURE__ */ new Map(), this.videoTrackPublications = /* @__PURE__ */ new Map(), this.trackPublications = /* @__PURE__ */ new Map(), this._kind = o2, this._attributes = null != a2 ? a2 : {};
        }
        getTrackPublications() {
          return Array.from(this.trackPublications.values());
        }
        getTrackPublication(e2) {
          for (const t2 of this.trackPublications) {
            const n2 = x(t2, 2)[1];
            if (n2.source === e2) return n2;
          }
        }
        getTrackPublicationByName(e2) {
          for (const t2 of this.trackPublications) {
            const n2 = x(t2, 2)[1];
            if (n2.trackName === e2) return n2;
          }
        }
        waitUntilActive() {
          return this.isActive ? Promise.resolve() : (this.activeFuture || (this.activeFuture = new Qs(), this.once(e.ParticipantEvent.Active, (() => {
            var e2, t2;
            null === (t2 = null === (e2 = this.activeFuture) || void 0 === e2 ? void 0 : e2.resolve) || void 0 === t2 || t2.call(e2), this.activeFuture = void 0;
          }))), this.activeFuture.promise);
        }
        get connectionQuality() {
          return this._connectionQuality;
        }
        get isCameraEnabled() {
          var e2;
          const t2 = this.getTrackPublication(ps.Source.Camera);
          return !(null === (e2 = null == t2 ? void 0 : t2.isMuted) || void 0 === e2 || e2);
        }
        get isMicrophoneEnabled() {
          var e2;
          const t2 = this.getTrackPublication(ps.Source.Microphone);
          return !(null === (e2 = null == t2 ? void 0 : t2.isMuted) || void 0 === e2 || e2);
        }
        get isScreenShareEnabled() {
          return !!this.getTrackPublication(ps.Source.ScreenShare);
        }
        get isLocal() {
          return false;
        }
        get joinedAt() {
          return this.participantInfo ? new Date(1e3 * Number.parseInt(this.participantInfo.joinedAt.toString())) : /* @__PURE__ */ new Date();
        }
        updateInfo(t2) {
          var n2;
          return !(this.participantInfo && this.participantInfo.sid === t2.sid && this.participantInfo.version > t2.version) && (this.identity = t2.identity, this.sid = t2.sid, this._setName(t2.name), this._setMetadata(t2.metadata), this._setAttributes(t2.attributes), t2.state === dt.ACTIVE && (null === (n2 = this.participantInfo) || void 0 === n2 ? void 0 : n2.state) !== dt.ACTIVE && this.emit(e.ParticipantEvent.Active), t2.permission && this.setPermissions(t2.permission), this.participantInfo = t2, true);
        }
        _setMetadata(t2) {
          const n2 = this.metadata !== t2, i2 = this.metadata;
          this.metadata = t2, n2 && this.emit(e.ParticipantEvent.ParticipantMetadataChanged, i2);
        }
        _setName(t2) {
          const n2 = this.name !== t2;
          this.name = t2, n2 && this.emit(e.ParticipantEvent.ParticipantNameChanged, t2);
        }
        _setAttributes(t2) {
          const n2 = (function(e2, t3) {
            var n3;
            void 0 === e2 && (e2 = {}), void 0 === t3 && (t3 = {});
            const i2 = [...Object.keys(t3), ...Object.keys(e2)], r2 = {};
            for (const a2 of i2) e2[a2] !== t3[a2] && (r2[a2] = null !== (n3 = t3[a2]) && void 0 !== n3 ? n3 : "");
            return r2;
          })(this.attributes, t2);
          this._attributes = t2, Object.keys(n2).length > 0 && this.emit(e.ParticipantEvent.AttributesChanged, n2);
        }
        setPermissions(t2) {
          var n2, i2, r2, a2, s2, o2;
          const c2 = this.permissions, d2 = t2.canPublish !== (null === (n2 = this.permissions) || void 0 === n2 ? void 0 : n2.canPublish) || t2.canSubscribe !== (null === (i2 = this.permissions) || void 0 === i2 ? void 0 : i2.canSubscribe) || t2.canPublishData !== (null === (r2 = this.permissions) || void 0 === r2 ? void 0 : r2.canPublishData) || t2.hidden !== (null === (a2 = this.permissions) || void 0 === a2 ? void 0 : a2.hidden) || t2.recorder !== (null === (s2 = this.permissions) || void 0 === s2 ? void 0 : s2.recorder) || t2.canPublishSources.length !== this.permissions.canPublishSources.length || t2.canPublishSources.some(((e2, t3) => {
            var n3;
            return e2 !== (null === (n3 = this.permissions) || void 0 === n3 ? void 0 : n3.canPublishSources[t3]);
          })) || t2.canSubscribeMetrics !== (null === (o2 = this.permissions) || void 0 === o2 ? void 0 : o2.canSubscribeMetrics);
          return this.permissions = t2, d2 && this.emit(e.ParticipantEvent.ParticipantPermissionsChanged, c2), d2;
        }
        setIsSpeaking(t2) {
          t2 !== this.isSpeaking && (this.isSpeaking = t2, t2 && (this.lastSpokeAt = /* @__PURE__ */ new Date()), this.emit(e.ParticipantEvent.IsSpeakingChanged, t2));
        }
        setConnectionQuality(t2) {
          const n2 = this._connectionQuality;
          this._connectionQuality = (function(t3) {
            switch (t3) {
              case Ze.EXCELLENT:
                return e.ConnectionQuality.Excellent;
              case Ze.GOOD:
                return e.ConnectionQuality.Good;
              case Ze.POOR:
                return e.ConnectionQuality.Poor;
              case Ze.LOST:
                return e.ConnectionQuality.Lost;
              default:
                return e.ConnectionQuality.Unknown;
            }
          })(t2), n2 !== this._connectionQuality && this.emit(e.ParticipantEvent.ConnectionQualityChanged, this._connectionQuality);
        }
        setDisconnected() {
          var e2, t2;
          this.activeFuture && (null === (t2 = (e2 = this.activeFuture).reject) || void 0 === t2 || t2.call(e2, new Error("Participant disconnected")), this.activeFuture = void 0);
        }
        setAudioContext(e2) {
          this.audioContext = e2, this.audioTrackPublications.forEach(((t2) => io(t2.track) && t2.track.setAudioContext(e2)));
        }
        addTrackPublication(t2) {
          t2.on(e.TrackEvent.Muted, (() => {
            this.emit(e.ParticipantEvent.TrackMuted, t2);
          })), t2.on(e.TrackEvent.Unmuted, (() => {
            this.emit(e.ParticipantEvent.TrackUnmuted, t2);
          }));
          const n2 = t2;
          switch (n2.track && (n2.track.sid = t2.trackSid), this.trackPublications.set(t2.trackSid, t2), t2.kind) {
            case ps.Kind.Audio:
              this.audioTrackPublications.set(t2.trackSid, t2);
              break;
            case ps.Kind.Video:
              this.videoTrackPublications.set(t2.trackSid, t2);
          }
        }
      }
      class xl extends Nl {
        constructor(t2, n2, i2, a2, s2, o2, c2, d2) {
          super(t2, n2, void 0, void 0, void 0, { loggerName: a2.loggerName, loggerContextCb: () => this.engine.logContext }), this.pendingPublishing = /* @__PURE__ */ new Set(), this.pendingPublishPromises = /* @__PURE__ */ new Map(), this.participantTrackPermissions = [], this.allParticipantsAllowedToSubscribe = true, this.encryptionType = ht.NONE, this.e2eeStateMutex = new r(), this.enabledPublishVideoCodecs = [], this.handleReconnecting = () => {
            this.reconnectFuture || (this.reconnectFuture = new Qs());
          }, this.handleReconnected = () => {
            var e2, t3;
            null === (t3 = null === (e2 = this.reconnectFuture) || void 0 === e2 ? void 0 : e2.resolve) || void 0 === t3 || t3.call(e2), this.reconnectFuture = void 0, this.updateTrackSubscriptionPermissions();
          }, this.handleClosing = () => {
            var e2, t3, n3, i3, r2, a3;
            this.reconnectFuture && (this.reconnectFuture.promise.catch(((e3) => this.log.warn(e3.message))), null === (t3 = null === (e2 = this.reconnectFuture) || void 0 === e2 ? void 0 : e2.reject) || void 0 === t3 || t3.call(e2, new Error("Got disconnected during reconnection attempt")), this.reconnectFuture = void 0), this.signalConnectedFuture && (null === (i3 = (n3 = this.signalConnectedFuture).reject) || void 0 === i3 || i3.call(n3, new Error("Got disconnected without signal connected")), this.signalConnectedFuture = void 0), null === (a3 = null === (r2 = this.activeAgentFuture) || void 0 === r2 ? void 0 : r2.reject) || void 0 === a3 || a3.call(r2, new Error("Got disconnected without active agent present")), this.activeAgentFuture = void 0, this.firstActiveAgent = void 0;
          }, this.handleSignalConnected = (e2) => {
            var t3, n3;
            e2.participant && this.updateInfo(e2.participant), this.signalConnectedFuture || (this.signalConnectedFuture = new Qs()), null === (n3 = (t3 = this.signalConnectedFuture).resolve) || void 0 === n3 || n3.call(t3);
          }, this.handleSignalRequestResponse = (e2) => {
            const t3 = e2.requestId, n3 = e2.reason, i3 = e2.message, r2 = this.pendingSignalRequests.get(t3);
            switch (r2 && (n3 !== Ri.OK && r2.reject(new Ua(i3, n3)), this.pendingSignalRequests.delete(t3)), e2.request.case) {
              case "publishDataTrack": {
                let t4;
                switch (e2.reason) {
                  case Ri.NOT_ALLOWED:
                    t4 = ll.notAllowed(e2.message);
                    break;
                  case Ri.DUPLICATE_NAME:
                    t4 = ll.duplicateName(e2.message);
                    break;
                  case Ri.INVALID_NAME:
                    t4 = ll.invalidName(e2.message);
                    break;
                  case Ri.LIMIT_EXCEEDED:
                    t4 = ll.limitReached(e2.message);
                    break;
                  default:
                    t4 = ll.unknown(e2.reason, e2.message);
                }
                this.roomOutgoingDataTrackManager.receivedSfuPublishResponse(e2.request.value.pubHandle, { type: "error", error: t4 });
                break;
              }
            }
          }, this.updateTrackSubscriptionPermissions = () => {
            this.log.debug("updating track subscription permissions", { allParticipantsAllowed: this.allParticipantsAllowedToSubscribe, participantTrackPermissions: this.participantTrackPermissions }), this.engine.client.sendUpdateSubscriptionPermissions(this.allParticipantsAllowedToSubscribe, this.participantTrackPermissions.map(((e2) => (function(e3) {
              var t3, n3, i3;
              if (!e3.participantSid && !e3.participantIdentity) throw new Error("Invalid track permission, must provide at least one of participantIdentity and participantSid");
              return new hi({ participantIdentity: null !== (t3 = e3.participantIdentity) && void 0 !== t3 ? t3 : "", participantSid: null !== (n3 = e3.participantSid) && void 0 !== n3 ? n3 : "", allTracks: null !== (i3 = e3.allowAll) && void 0 !== i3 && i3, trackSids: e3.allowedTrackSids || [] });
            })(e2))));
          }, this.onTrackUnmuted = (e2) => {
            this.onTrackMuted(e2, e2.isUpstreamPaused);
          }, this.onTrackMuted = (e2, t3) => {
            void 0 === t3 && (t3 = true), e2.sid ? this.engine.updateMuteStatus(e2.sid, t3) : this.log.error("could not update mute status for unpublished track", cs(e2));
          }, this.onTrackUpstreamPaused = (e2) => {
            this.log.debug("upstream paused", cs(e2)), this.onTrackMuted(e2, true);
          }, this.onTrackUpstreamResumed = (e2) => {
            this.log.debug("upstream resumed", cs(e2)), this.onTrackMuted(e2, e2.isMuted);
          }, this.onTrackFeatureUpdate = (e2) => {
            const t3 = this.audioTrackPublications.get(e2.sid);
            t3 ? this.engine.client.sendUpdateLocalAudioTrack(t3.trackSid, t3.getTrackFeatures()) : this.log.warn("Could not update local audio track settings, missing publication for track ".concat(e2.sid));
          }, this.onTrackCpuConstrained = (t3, n3) => {
            this.log.debug("track cpu constrained", cs(n3)), this.emit(e.ParticipantEvent.LocalTrackCpuConstrained, t3, n3);
          }, this.handleSubscribedQualityUpdate = (e2) => Yi(this, void 0, void 0, (function* () {
            var t3, n3, i3, r2, a3;
            if (!(null === (a3 = this.roomOptions) || void 0 === a3 ? void 0 : a3.dynacast)) return;
            const s3 = this.videoTrackPublications.get(e2.trackSid);
            if (!s3) return void this.log.warn("received subscribed quality update for unknown track", { trackSid: e2.trackSid });
            if (!s3.videoTrack) return;
            const o3 = yield s3.videoTrack.setPublishingCodecs(e2.subscribedCodecs);
            try {
              for (var c3, d3 = true, l2 = er(o3); !(t3 = (c3 = yield l2.next()).done); d3 = true) {
                r2 = c3.value, d3 = false;
                const e3 = r2;
                za(e3) && (this.log.debug("publish ".concat(e3, " for ").concat(s3.videoTrack.sid), cs(s3)), yield this.publishAdditionalCodecForTrack(s3.videoTrack, e3, s3.options));
              }
            } catch (e3) {
              n3 = { error: e3 };
            } finally {
              try {
                d3 || t3 || !(i3 = l2.return) || (yield i3.call(l2));
              } finally {
                if (n3) throw n3.error;
              }
            }
          })), this.handleLocalTrackUnpublished = (e2) => {
            const t3 = this.trackPublications.get(e2.trackSid);
            t3 ? this.unpublishTrack(t3.track) : this.log.warn("received unpublished event for unknown track", { trackSid: e2.trackSid });
          }, this.handleTrackEnded = (e2) => Yi(this, void 0, void 0, (function* () {
            if (e2.source === ps.Source.ScreenShare || e2.source === ps.Source.ScreenShareAudio) this.log.debug("unpublishing local track due to TrackEnded", cs(e2)), this.unpublishTrack(e2);
            else if (e2.isUserProvided) yield e2.mute();
            else if (so(e2) || ao(e2)) try {
              if (_s()) try {
                const t3 = yield null === navigator || void 0 === navigator ? void 0 : navigator.permissions.query({ name: e2.source === ps.Source.Camera ? "camera" : "microphone" });
                if (t3 && "denied" === t3.state) throw this.log.warn("user has revoked access to ".concat(e2.source), cs(e2)), t3.onchange = () => {
                  "denied" !== t3.state && (e2.isMuted || e2.restartTrack(), t3.onchange = null);
                }, new Error("GetUserMedia Permission denied");
              } catch (e3) {
              }
              e2.isMuted || (this.log.debug("track ended, attempting to use a different device", cs(e2)), so(e2) ? yield e2.restartTrack({ deviceId: "default" }) : yield e2.restartTrack());
            } catch (t3) {
              this.log.warn("could not restart track, muting instead", cs(e2)), yield e2.mute();
            }
          })), this.audioTrackPublications = /* @__PURE__ */ new Map(), this.videoTrackPublications = /* @__PURE__ */ new Map(), this.trackPublications = /* @__PURE__ */ new Map(), this.engine = i2, this.roomOptions = a2, this.setupEngine(i2), this.activeDeviceMap = /* @__PURE__ */ new Map([["audioinput", "default"], ["videoinput", "default"], ["audiooutput", "default"]]), this.pendingSignalRequests = /* @__PURE__ */ new Map(), this.roomOutgoingDataStreamManager = s2, this.roomOutgoingDataTrackManager = o2, this.rpcClientManager = c2, this.rpcServerManager = d2;
        }
        get lastCameraError() {
          return this.cameraError;
        }
        get lastMicrophoneError() {
          return this.microphoneError;
        }
        get isE2EEEnabled() {
          return this.encryptionType !== ht.NONE;
        }
        getTrackPublication(e2) {
          const t2 = super.getTrackPublication(e2);
          if (t2) return t2;
        }
        getTrackPublicationByName(e2) {
          const t2 = super.getTrackPublicationByName(e2);
          if (t2) return t2;
        }
        setupEngine(t2) {
          var n2;
          this.engine = t2, this.engine.on(e.EngineEvent.RemoteMute, ((e2, t3) => {
            const n3 = this.trackPublications.get(e2);
            n3 && n3.track && (t3 ? n3.mute() : n3.unmute());
          })), (null === (n2 = this.signalConnectedFuture) || void 0 === n2 ? void 0 : n2.isResolved) && (this.signalConnectedFuture = void 0), this.engine.on(e.EngineEvent.Connected, this.handleReconnected).on(e.EngineEvent.SignalConnected, this.handleSignalConnected).on(e.EngineEvent.SignalRestarted, this.handleReconnected).on(e.EngineEvent.SignalResumed, this.handleReconnected).on(e.EngineEvent.Restarting, this.handleReconnecting).on(e.EngineEvent.Resuming, this.handleReconnecting).on(e.EngineEvent.LocalTrackUnpublished, this.handleLocalTrackUnpublished).on(e.EngineEvent.SubscribedQualityUpdate, this.handleSubscribedQualityUpdate).on(e.EngineEvent.Closing, this.handleClosing).on(e.EngineEvent.SignalRequestResponse, this.handleSignalRequestResponse);
        }
        setMetadata(e2) {
          return Yi(this, void 0, void 0, (function* () {
            yield this.requestMetadataUpdate({ metadata: e2 });
          }));
        }
        setName(e2) {
          return Yi(this, void 0, void 0, (function* () {
            yield this.requestMetadataUpdate({ name: e2 });
          }));
        }
        setAttributes(e2) {
          return Yi(this, void 0, void 0, (function* () {
            yield this.requestMetadataUpdate({ attributes: e2 });
          }));
        }
        requestMetadataUpdate(e2) {
          return Yi(this, arguments, void 0, (function(e3) {
            var t2 = this;
            let n2 = e3.metadata, i2 = e3.name, r2 = e3.attributes;
            return (function* () {
              return new ha(((e4, a2) => Yi(t2, void 0, void 0, (function* () {
                var t3, s2;
                try {
                  let o2 = false;
                  const c2 = yield this.engine.client.sendUpdateLocalMetadata(null !== (t3 = null != n2 ? n2 : this.metadata) && void 0 !== t3 ? t3 : "", null !== (s2 = null != i2 ? i2 : this.name) && void 0 !== s2 ? s2 : "", r2), d2 = performance.now();
                  for (this.pendingSignalRequests.set(c2, { resolve: e4, reject: (e5) => {
                    a2(e5), o2 = true;
                  }, values: { name: i2, metadata: n2, attributes: r2 } }); performance.now() - d2 < 5e3 && !o2; ) {
                    if ((!i2 || this.name === i2) && (!n2 || this.metadata === n2) && (!r2 || Object.entries(r2).every(((e5) => {
                      let t4 = x(e5, 2), n3 = t4[0], i3 = t4[1];
                      return this.attributes[n3] === i3 || "" === i3 && !this.attributes[n3];
                    })))) return this.pendingSignalRequests.delete(c2), void e4();
                    yield fs(50);
                  }
                  a2(new Ua("Request to update local metadata timed out", "TimeoutError"));
                } catch (e5) {
                  e5 instanceof Error ? a2(e5) : a2(new Error(String(e5)));
                }
              }))));
            })();
          }));
        }
        setCameraEnabled(e2, t2, n2) {
          return this.setTrackEnabled(ps.Source.Camera, e2, t2, n2);
        }
        setMicrophoneEnabled(e2, t2, n2) {
          return this.setTrackEnabled(ps.Source.Microphone, e2, t2, n2);
        }
        setScreenShareEnabled(e2, t2, n2) {
          return this.setTrackEnabled(ps.Source.ScreenShare, e2, t2, n2);
        }
        setE2EEEnabled(e2) {
          return Yi(this, void 0, void 0, (function* () {
            const t2 = yield this.e2eeStateMutex.lock();
            try {
              if (this.encryptionType = e2 ? ht.GCM : ht.NONE, yield Promise.all(this.pendingPublishPromises.values()), 0 === this.trackPublications.size || Array.from(this.trackPublications.values()).every(((t3) => t3.isEncrypted === e2))) return;
              yield this.republishAllTracks(void 0, false);
            } finally {
              t2();
            }
          }));
        }
        setTrackEnabled(t2, n2, i2, r2) {
          return Yi(this, void 0, void 0, (function* () {
            var a2, s2;
            this.log.debug("setTrackEnabled", { source: t2, enabled: n2 }), this.republishPromise && (yield this.republishPromise);
            let o2 = this.getTrackPublication(t2);
            if (n2) if (o2) yield o2.unmute();
            else {
              let n3;
              if (this.pendingPublishing.has(t2)) {
                const e2 = yield this.waitForPendingPublicationOfSource(t2);
                return e2 || this.log.info("waiting for pending publication promise timed out", { source: t2 }), yield null == e2 ? void 0 : e2.unmute(), e2;
              }
              this.pendingPublishing.add(t2);
              try {
                switch (t2) {
                  case ps.Source.Camera:
                    n3 = yield this.createTracks({ video: null === (a2 = i2) || void 0 === a2 || a2 });
                    break;
                  case ps.Source.Microphone:
                    n3 = yield this.createTracks({ audio: null === (s2 = i2) || void 0 === s2 || s2 });
                    break;
                  case ps.Source.ScreenShare:
                    n3 = yield this.createScreenTracks(Object.assign({}, i2));
                    break;
                  default:
                    throw new _a(t2);
                }
              } catch (i3) {
                throw null == n3 || n3.forEach(((e2) => {
                  e2.stop();
                })), i3 instanceof Error && this.emit(e.ParticipantEvent.MediaDevicesError, i3, rs(t2)), this.pendingPublishing.delete(t2), i3;
              }
              for (const e2 of n3) {
                const n4 = Object.assign(Object.assign({}, this.roomOptions.publishDefaults), i2);
                t2 === ps.Source.Microphone && io(e2) && n4.preConnectBuffer && (this.log.info("starting preconnect buffer for microphone"), e2.startPreConnectBuffer());
              }
              try {
                const e2 = [];
                for (const t3 of n3) this.log.info("publishing track", cs(t3)), e2.push(this.publishTrack(t3, r2));
                o2 = x(yield Promise.all(e2), 1)[0];
              } catch (e2) {
                throw null == n3 || n3.forEach(((e3) => {
                  e3.stop();
                })), e2;
              } finally {
                this.pendingPublishing.delete(t2);
              }
            }
            else if (!(null == o2 ? void 0 : o2.track) && this.pendingPublishing.has(t2) && (o2 = yield this.waitForPendingPublicationOfSource(t2), o2 || this.log.info("waiting for pending publication promise timed out", { source: t2 })), o2 && o2.track) if (t2 === ps.Source.ScreenShare) {
              const e2 = [this.unpublishTrack(o2.track)], t3 = this.getTrackPublication(ps.Source.ScreenShareAudio);
              t3 && t3.track && e2.push(this.unpublishTrack(t3.track)), o2 = x(yield Promise.all(e2), 1)[0];
            } else yield o2.mute();
            return o2;
          }));
        }
        enableCameraAndMicrophone() {
          return Yi(this, void 0, void 0, (function* () {
            if (!this.pendingPublishing.has(ps.Source.Camera) && !this.pendingPublishing.has(ps.Source.Microphone)) {
              this.pendingPublishing.add(ps.Source.Camera), this.pendingPublishing.add(ps.Source.Microphone);
              try {
                const e2 = yield this.createTracks({ audio: true, video: true });
                yield Promise.all(e2.map(((e3) => this.publishTrack(e3))));
              } finally {
                this.pendingPublishing.delete(ps.Source.Camera), this.pendingPublishing.delete(ps.Source.Microphone);
              }
            }
          }));
        }
        createTracks(t2) {
          return Yi(this, void 0, void 0, (function* () {
            var n2, i2;
            null != t2 || (t2 = {});
            const r2 = Za(t2, null === (n2 = this.roomOptions) || void 0 === n2 ? void 0 : n2.audioCaptureDefaults, null === (i2 = this.roomOptions) || void 0 === i2 ? void 0 : i2.videoCaptureDefaults);
            try {
              const t3 = yield Dl(r2, { loggerName: this.roomOptions.loggerName, loggerContextCb: () => this.logContext });
              return t3.map(((t4) => (io(t4) && (this.microphoneError = void 0, t4.setAudioContext(this.audioContext), t4.source = ps.Source.Microphone, this.emit(e.ParticipantEvent.AudioStreamAcquired)), ro(t4) && (this.cameraError = void 0, t4.source = ps.Source.Camera), t4)));
            } catch (e2) {
              throw e2 instanceof Error && (t2.audio && (this.microphoneError = e2), t2.video && (this.cameraError = e2)), e2;
            }
          }));
        }
        createScreenTracks(t2) {
          return Yi(this, void 0, void 0, (function* () {
            if (void 0 === t2 && (t2 = {}), void 0 === navigator.mediaDevices.getDisplayMedia) throw new Ma("getDisplayMedia not supported");
            void 0 !== t2.resolution || Ds() || (t2.resolution = Xa.h1080fps30.resolution);
            const n2 = as(t2), i2 = yield navigator.mediaDevices.getDisplayMedia(n2), r2 = i2.getVideoTracks();
            if (0 === r2.length) throw new _a("no video track found");
            const a2 = new od(r2[0], void 0, false, { loggerName: this.roomOptions.loggerName, loggerContextCb: () => this.logContext });
            a2.source = ps.Source.ScreenShare, t2.contentHint && (a2.mediaStreamTrack.contentHint = t2.contentHint);
            const s2 = [a2];
            if (i2.getAudioTracks().length > 0) {
              this.emit(e.ParticipantEvent.AudioStreamAcquired);
              const t3 = new Gc(i2.getAudioTracks()[0], void 0, false, this.audioContext, { loggerName: this.roomOptions.loggerName, loggerContextCb: () => this.logContext });
              t3.source = ps.Source.ScreenShareAudio, s2.push(t3);
            }
            return s2;
          }));
        }
        publishTrack(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            return this.publishOrRepublishTrack(e2, t2);
          }));
        }
        waitForNextEngineRestart() {
          let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 15e3;
          return new Promise(((n2, i2) => {
            const r2 = () => {
              clearTimeout(o2), this.engine.off(e.EngineEvent.Restarted, a2), this.engine.off(e.EngineEvent.Closing, s2);
            }, a2 = () => {
              r2(), n2();
            }, s2 = () => {
              r2(), i2(new Error("engine closed before restart completed"));
            }, o2 = setTimeout((() => {
              r2(), i2(new Error("timed out waiting for engine restart"));
            }), t2);
            this.engine.once(e.EngineEvent.Restarted, a2), this.engine.once(e.EngineEvent.Closing, s2);
          }));
        }
        publishOrRepublishTrack(e2, t2) {
          return Yi(this, arguments, void 0, (function(e3, t3) {
            var n2 = this;
            let i2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return (function* () {
              var a2, s2, o2, c2;
              let d2, l2;
              if (so(e3) && e3.setAudioContext(n2.audioContext), yield null === (a2 = n2.reconnectFuture) || void 0 === a2 ? void 0 : a2.promise, n2.republishPromise && !i2 && (yield n2.republishPromise), no(e3) && n2.pendingPublishPromises.has(e3) && (yield n2.pendingPublishPromises.get(e3)), e3 instanceof MediaStreamTrack) d2 = e3.getConstraints();
              else {
                let t4;
                switch (d2 = e3.constraints, e3.source) {
                  case ps.Source.Microphone:
                    t4 = "audioinput";
                    break;
                  case ps.Source.Camera:
                    t4 = "videoinput";
                }
                t4 && n2.activeDeviceMap.has(t4) && (d2 = Object.assign(Object.assign({}, d2), { deviceId: n2.activeDeviceMap.get(t4) }));
              }
              if (e3 instanceof MediaStreamTrack) switch (e3.kind) {
                case "audio":
                  e3 = new Gc(e3, d2, true, n2.audioContext, { loggerName: n2.roomOptions.loggerName, loggerContextCb: () => n2.logContext });
                  break;
                case "video":
                  e3 = new od(e3, d2, true, { loggerName: n2.roomOptions.loggerName, loggerContextCb: () => n2.logContext });
                  break;
                default:
                  throw new _a("unsupported MediaStreamTrack kind ".concat(e3.kind));
              }
              else e3.updateLoggerOptions({ loggerName: n2.roomOptions.loggerName, loggerContextCb: () => n2.logContext });
              if (n2.trackPublications.forEach(((t4) => {
                t4.track && t4.track === e3 && (l2 = t4);
              })), l2) return n2.log.warn("track has already been published, skipping", cs(l2)), l2;
              const u2 = Object.assign(Object.assign({}, n2.roomOptions.publishDefaults), t3), h2 = "channelCount" in e3.mediaStreamTrack.getSettings() && 2 === e3.mediaStreamTrack.getSettings().channelCount || 2 === e3.mediaStreamTrack.getConstraints().channelCount, p2 = null !== (s2 = u2.forceStereo) && void 0 !== s2 ? s2 : h2;
              p2 && (void 0 === u2.dtx && n2.log.debug("Opus DTX will be disabled for stereo tracks by default. Enable them explicitly to make it work.", cs(e3)), void 0 === u2.red && n2.log.debug("Opus RED will be disabled for stereo tracks by default. Enable them explicitly to make it work."), null !== (o2 = u2.dtx) && void 0 !== o2 || (u2.dtx = false), null !== (c2 = u2.red) && void 0 !== c2 || (u2.red = false)), !(function() {
                const e4 = ga(), t4 = "17.2";
                if (e4) return "Safari" !== e4.name && "iOS" !== e4.os || !!("iOS" === e4.os && e4.osVersion && Fs(e4.osVersion, t4) >= 0) || "Safari" === e4.name && Fs(e4.version, t4) >= 0;
              })() && n2.roomOptions.e2ee && (n2.log.info("End-to-end encryption is set up, simulcast publishing will be disabled on Safari versions and iOS browsers running iOS < v17.2"), u2.simulcast = false), u2.source && (e3.source = u2.source);
              const m2 = new Promise(((t4, i3) => Yi(n2, void 0, void 0, (function* () {
                try {
                  if (this.engine.client.currentState !== lc.CONNECTED) {
                    this.log.debug("deferring track publication until signal is connected", { track: cs(e3) });
                    let n3 = false;
                    const r3 = setTimeout((() => {
                      n3 = true, e3.stop(), i3(new La("publishing rejected as engine not connected within timeout", 408));
                    }), 15e3);
                    if (yield this.waitUntilEngineConnected(), clearTimeout(r3), n3) return;
                    const a3 = yield this.publish(e3, u2, p2);
                    t4(a3);
                  } else try {
                    const n3 = yield this.publish(e3, u2, p2);
                    t4(n3);
                  } catch (e4) {
                    i3(e4);
                  }
                } catch (e4) {
                  i3(e4);
                }
              }))));
              n2.pendingPublishPromises.set(e3, m2);
              try {
                return yield m2;
              } catch (a3) {
                if (!r2 && a3 instanceof Na) return n2.log.warn("negotiation due to track publish failed, retrying after reconnect", { error: a3 }), n2.pendingPublishPromises.delete(e3), yield n2.waitForNextEngineRestart(), yield n2.publishOrRepublishTrack(e3, t3, i2, true);
                throw a3;
              } finally {
                n2.pendingPublishPromises.delete(e3);
              }
            })();
          }));
        }
        waitUntilEngineConnected() {
          return this.signalConnectedFuture || (this.signalConnectedFuture = new Qs()), this.signalConnectedFuture.promise;
        }
        hasPermissionsToPublish(e2) {
          if (!this.permissions) return this.log.warn("no permissions present for publishing track", cs(e2)), false;
          const t2 = this.permissions, n2 = t2.canPublish, i2 = t2.canPublishSources;
          return !(!n2 || 0 !== i2.length && !i2.map(((e3) => (function(e4) {
            switch (e4) {
              case Ye.CAMERA:
                return ps.Source.Camera;
              case Ye.MICROPHONE:
                return ps.Source.Microphone;
              case Ye.SCREEN_SHARE:
                return ps.Source.ScreenShare;
              case Ye.SCREEN_SHARE_AUDIO:
                return ps.Source.ScreenShareAudio;
              default:
                return ps.Source.Unknown;
            }
          })(e3))).includes(e2.source)) || (this.log.warn("insufficient permissions to publish", cs(e2)), false);
        }
        publish(t2, n2, i2) {
          return Yi(this, void 0, void 0, (function* () {
            var r2, a2, s2, o2, c2, d2, l2, u2, h2, p2;
            if (!this.hasPermissionsToPublish(t2)) throw new La("failed to publish track, insufficient permissions", 403);
            Array.from(this.trackPublications.values()).find(((e2) => no(t2) && e2.source === t2.source)) && t2.source !== ps.Source.Unknown && this.log.info("publishing a second track with the same source: ".concat(t2.source), cs(t2)), n2.stopMicTrackOnMute && io(t2) && (t2.stopOnMute = true), t2.source === ps.Source.ScreenShare && ws() && (n2.simulcast = false), "av1" !== n2.videoCodec || bs() || (n2.videoCodec = void 0), "vp9" !== n2.videoCodec || Ts() || (n2.videoCodec = void 0), void 0 === n2.videoCodec && (n2.videoCodec = Lc), this.enabledPublishVideoCodecs.length > 0 && (this.enabledPublishVideoCodecs.some(((e2) => n2.videoCodec === ss(e2.mime))) || (n2.videoCodec = ss(this.enabledPublishVideoCodecs[0].mime)));
            const m2 = n2.videoCodec;
            t2.on(e.TrackEvent.Muted, this.onTrackMuted), t2.on(e.TrackEvent.Unmuted, this.onTrackUnmuted), t2.on(e.TrackEvent.Ended, this.handleTrackEnded), t2.on(e.TrackEvent.UpstreamPaused, this.onTrackUpstreamPaused), t2.on(e.TrackEvent.UpstreamResumed, this.onTrackUpstreamResumed), t2.on(e.TrackEvent.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate);
            const g2 = [], v2 = !(null === (r2 = n2.dtx) || void 0 === r2 || r2), f2 = t2.getSourceTrackSettings();
            f2.autoGainControl && g2.push(it.TF_AUTO_GAIN_CONTROL), f2.echoCancellation && g2.push(it.TF_ECHO_CANCELLATION), f2.noiseSuppression && g2.push(it.TF_NOISE_SUPPRESSION), f2.channelCount && f2.channelCount > 1 && g2.push(it.TF_STEREO), v2 && g2.push(it.TF_NO_DTX), so(t2) && t2.hasPreConnectBuffer && g2.push(it.TF_PRECONNECT_BUFFER);
            const k2 = this.normalizeRequestedFrameMetadataOptions(t2, n2), y2 = new Mn({ cid: t2.mediaStreamTrack.id, name: n2.name, type: ps.kindToProto(t2.kind), muted: t2.isMuted, source: ps.sourceToProto(t2.source), disableDtx: v2, encryption: this.encryptionType, stereo: i2, disableRed: this.isE2EEEnabled || !(null === (a2 = n2.red) || void 0 === a2 || a2), stream: null == n2 ? void 0 : n2.stream, backupCodecPolicy: null == n2 ? void 0 : n2.backupCodecPolicy, audioFeatures: g2, packetTrailerFeatures: k2 });
            let b2;
            if (t2.kind === ps.Kind.Video) {
              let e2;
              try {
                e2 = yield t2.waitForDimensions();
              } catch (n3) {
                const i3 = null !== (o2 = null === (s2 = this.roomOptions.videoCaptureDefaults) || void 0 === s2 ? void 0 : s2.resolution) && void 0 !== o2 ? o2 : Qa.h720.resolution;
                e2 = { width: i3.width, height: i3.height }, this.log.error("could not determine track dimensions, using defaults", Object.assign(Object.assign({}, cs(t2)), { dims: e2 }));
              }
              y2.width = e2.width, y2.height = e2.height, ao(t2) && (Ss(m2) && (t2.source === ps.Source.ScreenShare && (n2.scalabilityMode = "L1T3", "contentHint" in t2.mediaStreamTrack && (t2.mediaStreamTrack.contentHint = "motion", this.log.debug("forcing contentHint to motion for screenshare with SVC codecs", cs(t2)))), n2.scalabilityMode = null !== (c2 = n2.scalabilityMode) && void 0 !== c2 ? c2 : "L3T3_KEY"), y2.simulcastCodecs = [new Dn({ codec: m2, cid: t2.mediaStreamTrack.id })], true === n2.backupCodec && (n2.backupCodec = { codec: Lc }), n2.backupCodec && m2 !== n2.backupCodec.codec && y2.encryption === ht.NONE && (this.roomOptions.dynacast || (this.roomOptions.dynacast = true), y2.simulcastCodecs.push(new Dn({ codec: n2.backupCodec.codec, cid: "" })))), b2 = td(t2.source === ps.Source.ScreenShare, y2.width, y2.height, n2), y2.layers = ld(y2.width, y2.height, b2, Ss(n2.videoCodec));
            } else t2.kind === ps.Kind.Audio && (b2 = [{ maxBitrate: null === (d2 = n2.audioPreset) || void 0 === d2 ? void 0 : d2.maxBitrate, priority: null !== (u2 = null === (l2 = n2.audioPreset) || void 0 === l2 ? void 0 : l2.priority) && void 0 !== u2 ? u2 : "high", networkPriority: null !== (p2 = null === (h2 = n2.audioPreset) || void 0 === h2 ? void 0 : h2.priority) && void 0 !== p2 ? p2 : "high" }]);
            if (!this.engine || this.engine.isClosed) throw new Aa("cannot publish track when not connected");
            const T2 = () => Yi(this, void 0, void 0, (function* () {
              var i3, r3, a3;
              if (!this.engine.pcManager) throw new Aa("pcManager is not ready");
              if (t2.sender = yield this.engine.createSender(t2, n2, b2), ao(t2) && (t2.publishOptions = n2), this.emit(e.ParticipantEvent.LocalSenderCreated, t2.sender, t2), ao(t2) && (null !== (i3 = n2.degradationPreference) && void 0 !== i3 || (n2.degradationPreference = (function(e2) {
                return e2.source === ps.Source.ScreenShare || e2.constraints.height && Xs(e2.constraints.height) >= 1080 ? "maintain-resolution" : "balanced";
              })(t2)), t2.setDegradationPreference(n2.degradationPreference)), b2) if (ws() && t2.kind === ps.Kind.Audio) {
                let e2;
                for (const n3 of this.engine.pcManager.publisher.getTransceivers()) if (n3.sender === t2.sender) {
                  e2 = n3;
                  break;
                }
                e2 && this.engine.pcManager.publisher.setTrackCodecBitrate({ transceiver: e2, codec: "opus", maxbr: (null === (r3 = b2[0]) || void 0 === r3 ? void 0 : r3.maxBitrate) ? b2[0].maxBitrate / 1e3 : 0 });
              } else t2.codec && Ss(t2.codec) && (null === (a3 = b2[0]) || void 0 === a3 ? void 0 : a3.maxBitrate) && this.engine.pcManager.publisher.setTrackCodecBitrate({ cid: y2.cid, codec: t2.codec, maxbr: b2[0].maxBitrate / 1e3 });
              yield this.engine.negotiate();
            }));
            let S2;
            const E2 = new Promise(((e2, n3) => Yi(this, void 0, void 0, (function* () {
              var i3;
              try {
                S2 = yield this.engine.addTrack(y2), e2(S2);
              } catch (e3) {
                if (t2.sender && (null === (i3 = this.engine.pcManager) || void 0 === i3 ? void 0 : i3.publisher)) {
                  try {
                    this.engine.pcManager.publisher.removeTrack(t2.sender);
                  } catch (e4) {
                    this.log.error(e4);
                  }
                  yield this.engine.negotiate().catch(((e4) => {
                    this.log.error("failed to negotiate after removing track due to failed add track request", Object.assign(Object.assign({}, cs(t2)), { error: e4 }));
                  }));
                }
                n3(e3);
              }
            }))));
            if (this.enabledPublishVideoCodecs.length > 0 && 0 === k2.length) {
              const e2 = yield Promise.all([E2, T2()]);
              S2 = e2[0];
            } else {
              let e2;
              if (S2 = yield E2, S2.codecs.forEach(((t3) => {
                void 0 === e2 && (e2 = t3.mimeType);
              })), e2 && t2.kind === ps.Kind.Video) {
                const i3 = ss(e2);
                i3 !== m2 && (this.log.debug("falling back to server selected codec", Object.assign(Object.assign({}, cs(t2)), { codec: i3 })), n2.videoCodec = i3, b2 = td(t2.source === ps.Source.ScreenShare, y2.width, y2.height, n2));
              }
              yield T2();
            }
            const C2 = new Il(t2.kind, S2, t2, { loggerName: this.roomOptions.loggerName, loggerContextCb: () => this.logContext });
            if (C2.on(e.TrackEvent.CpuConstrained, ((e2) => this.onTrackCpuConstrained(e2, C2))), C2.options = n2, t2.sid = S2.sid, ao(t2) && (t2.publishOptions = n2, y2.width && y2.height && (t2.lastEncodedDimensions = { width: y2.width, height: y2.height })), this.log.debug("publishing ".concat(t2.kind, " with encodings"), { encodings: b2, trackInfo: S2 }), ao(t2) ? t2.startMonitor(this.engine.client) : so(t2) && t2.startMonitor(), this.addTrackPublication(C2), this.emit(e.ParticipantEvent.LocalTrackPublished, C2), so(t2) && S2.audioFeatures.includes(it.TF_PRECONNECT_BUFFER)) {
              const n3 = t2.getPreConnectBuffer(), i3 = t2.getPreConnectBufferMimeType();
              if (this.on(e.ParticipantEvent.LocalTrackSubscribed, ((e2) => {
                if (e2.trackSid === S2.sid) {
                  if (!t2.hasPreConnectBuffer) return void this.log.warn("subscribe event came to late, buffer already closed");
                  this.log.debug("finished recording preconnect buffer", cs(t2)), t2.stopPreConnectBuffer();
                }
              })), n3) {
                const e2 = new Promise(((e3, r3) => Yi(this, void 0, void 0, (function* () {
                  var a3, s3, o3, c3, d3, l3;
                  try {
                    this.log.debug("waiting for agent", cs(t2));
                    const m3 = setTimeout((() => {
                      r3(new Error("agent not active within 10 seconds"));
                    }), 1e4), g3 = yield this.waitUntilActiveAgentPresent();
                    clearTimeout(m3), this.log.debug("sending preconnect buffer", cs(t2));
                    const v3 = yield this.streamBytes({ name: "preconnect-buffer", mimeType: i3, topic: "lk.agent.pre-connect-audio-buffer", destinationIdentities: [g3.identity], attributes: { trackId: C2.trackSid, sampleRate: String(null !== (d3 = f2.sampleRate) && void 0 !== d3 ? d3 : "48000"), channels: String(null !== (l3 = f2.channelCount) && void 0 !== l3 ? l3 : "1") } });
                    try {
                      for (var u3, h3 = true, p3 = er(n3); !(a3 = (u3 = yield p3.next()).done); h3 = true) {
                        c3 = u3.value, h3 = false;
                        const e4 = c3;
                        yield v3.write(e4);
                      }
                    } catch (e4) {
                      s3 = { error: e4 };
                    } finally {
                      try {
                        h3 || a3 || !(o3 = p3.return) || (yield o3.call(p3));
                      } finally {
                        if (s3) throw s3.error;
                      }
                    }
                    yield v3.close(), e3();
                  } catch (e4) {
                    r3(e4);
                  }
                }))));
                e2.then((() => {
                  this.log.debug("preconnect buffer sent successfully", cs(t2));
                })).catch(((e3) => {
                  this.log.error("error sending preconnect buffer", Object.assign(Object.assign({}, cs(t2)), { error: e3 }));
                }));
              }
            }
            return C2;
          }));
        }
        canPublishFrameMetadata() {
          var e2;
          return !!(this.roomOptions.e2ee || this.roomOptions.encryption || Oo(null !== (e2 = this.roomOptions.frameMetadata) && void 0 !== e2 ? e2 : this.roomOptions.packetTrailer));
        }
        normalizeRequestedFrameMetadataOptions(e2, t2) {
          var n2;
          const i2 = null !== (n2 = t2.frameMetadata) && void 0 !== n2 ? n2 : t2.packetTrailer;
          if (e2.kind !== ps.Kind.Video || !Ao(i2)) return t2.frameMetadata = void 0, t2.packetTrailer = void 0, [];
          if (!this.canPublishFrameMetadata()) return this.log.warn("frame metadata transform not supported; not advertising features", Object.assign(Object.assign({}, this.logContext), cs(e2))), t2.frameMetadata = void 0, t2.packetTrailer = void 0, [];
          const r2 = (function(e3) {
            const t3 = [];
            return (null == e3 ? void 0 : e3.timestamp) && t3.push(rt.PTF_USER_TIMESTAMP), (null == e3 ? void 0 : e3.frameId) && t3.push(rt.PTF_FRAME_ID), t3;
          })(i2), a2 = (function(e3) {
            if (!e3 || 0 === e3.length) return;
            const t3 = {};
            return e3.includes(rt.PTF_USER_TIMESTAMP) && (t3.timestamp = true), e3.includes(rt.PTF_FRAME_ID) && (t3.frameId = true), t3.timestamp || t3.frameId ? t3 : void 0;
          })(r2);
          return t2.frameMetadata = a2, t2.packetTrailer = a2, r2;
        }
        get isLocal() {
          return true;
        }
        publishAdditionalCodecForTrack(e2, t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            var i2;
            if (this.encryptionType !== ht.NONE) return;
            let r2;
            if (this.trackPublications.forEach(((t3) => {
              t3.track && t3.track === e2 && (r2 = t3);
            })), !r2) throw new _a("track is not published");
            if (!ao(e2)) throw new _a("track is not a video track");
            const a2 = Object.assign(Object.assign({}, null === (i2 = this.roomOptions) || void 0 === i2 ? void 0 : i2.publishDefaults), n2), s2 = nd(e2, t2, a2);
            if (!s2) return void this.log.info("backup codec has been disabled, ignoring request to add additional codec for track", cs(e2));
            const o2 = e2.addSimulcastTrack(t2, s2);
            if (!o2) return;
            const c2 = this.normalizeRequestedFrameMetadataOptions(e2, a2), d2 = new Mn({ cid: o2.mediaStreamTrack.id, type: ps.kindToProto(e2.kind), muted: e2.isMuted, source: ps.sourceToProto(e2.source), sid: e2.sid, packetTrailerFeatures: c2, simulcastCodecs: [{ codec: a2.videoCodec, cid: o2.mediaStreamTrack.id }] });
            if (d2.layers = ld(d2.width, d2.height, s2), !this.engine || this.engine.isClosed) throw new Aa("cannot publish track when not connected");
            const l2 = (yield Promise.all([this.engine.addTrack(d2), (() => Yi(this, void 0, void 0, (function* () {
              yield this.engine.createSimulcastSender(e2, o2, a2, s2), yield this.engine.negotiate();
            })))()]))[0];
            this.log.debug("published ".concat(t2, " for track ").concat(e2.sid), { encodings: s2, trackInfo: l2 });
          }));
        }
        unpublishTrack(t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            var i2, r2;
            if (no(t2)) {
              const e2 = this.pendingPublishPromises.get(t2);
              e2 && (this.log.debug("awaiting publish promise before attempting to unpublish", cs(t2)), yield e2);
            }
            const a2 = this.getPublicationForTrack(t2), s2 = a2 ? cs(a2) : void 0;
            if (this.log.info("unpublishing track", s2), !a2 || !a2.track) return void this.log.warn("track was not unpublished because no publication was found", s2);
            (t2 = a2.track).off(e.TrackEvent.Muted, this.onTrackMuted), t2.off(e.TrackEvent.Unmuted, this.onTrackUnmuted), t2.off(e.TrackEvent.Ended, this.handleTrackEnded), t2.off(e.TrackEvent.UpstreamPaused, this.onTrackUpstreamPaused), t2.off(e.TrackEvent.UpstreamResumed, this.onTrackUpstreamResumed), t2.off(e.TrackEvent.AudioTrackFeatureUpdate, this.onTrackFeatureUpdate), void 0 === n2 && (n2 = null === (r2 = null === (i2 = this.roomOptions) || void 0 === i2 ? void 0 : i2.stopLocalTrackOnUnpublish) || void 0 === r2 || r2), n2 ? t2.stop() : t2.stopMonitor();
            let o2 = false;
            const c2 = t2.sender;
            if (t2.sender = void 0, this.engine.pcManager && this.engine.pcManager.currentState < Vc.FAILED && c2) try {
              for (const e2 of this.engine.pcManager.publisher.getTransceivers()) e2.sender === c2 && (e2.direction = "inactive", o2 = true);
              try {
                o2 = this.engine.removeTrack(c2);
              } catch (e2) {
                this.log.warn(e2), o2 = true;
              }
              if (ao(t2)) {
                for (const e2 of t2.simulcastCodecs) {
                  const t3 = x(e2, 2)[1];
                  if (t3.sender) {
                    try {
                      o2 = this.engine.removeTrack(t3.sender);
                    } catch (e3) {
                      this.log.warn(e3), o2 = true;
                    }
                    t3.sender = void 0;
                  }
                }
                t2.simulcastCodecs.clear();
              }
            } catch (e2) {
              this.log.warn("failed to unpublish track", Object.assign(Object.assign({}, s2), { error: e2 }));
            }
            switch (this.trackPublications.delete(a2.trackSid), a2.kind) {
              case ps.Kind.Audio:
                this.audioTrackPublications.delete(a2.trackSid);
                break;
              case ps.Kind.Video:
                this.videoTrackPublications.delete(a2.trackSid);
            }
            return this.emit(e.ParticipantEvent.LocalTrackUnpublished, a2), a2.setTrack(void 0), o2 && (yield this.engine.negotiate()), a2;
          }));
        }
        unpublishTracks(e2) {
          return Yi(this, void 0, void 0, (function* () {
            return (yield Promise.all(e2.map(((e3) => this.unpublishTrack(e3))))).filter(((e3) => !!e3));
          }));
        }
        republishAllTracks(e2) {
          return Yi(this, arguments, void 0, (function(e3) {
            var t2 = this;
            let n2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return (function* () {
              t2.republishPromise && (yield t2.republishPromise), t2.republishPromise = new ha(((i2, r2) => Yi(t2, void 0, void 0, (function* () {
                try {
                  const t3 = [];
                  this.trackPublications.forEach(((n3) => {
                    n3.track && (e3 && (n3.options = Object.assign(Object.assign({}, n3.options), e3)), t3.push(n3));
                  })), yield Promise.all(t3.map(((e4) => Yi(this, void 0, void 0, (function* () {
                    const t4 = e4.track;
                    yield this.unpublishTrack(t4, false), !n2 || t4.isMuted || t4.source === ps.Source.ScreenShare || t4.source === ps.Source.ScreenShareAudio || !so(t4) && !ao(t4) || t4.isUserProvided || (this.log.debug("restarting existing track", { track: e4.trackSid }), yield t4.restartTrack()), yield this.publishOrRepublishTrack(t4, e4.options, true);
                  }))))), i2();
                } catch (e4) {
                  e4 instanceof Error ? r2(e4) : r2(new Error(String(e4)));
                } finally {
                  this.republishPromise = void 0;
                }
              })))), yield t2.republishPromise;
            })();
          }));
        }
        publishData(e2) {
          return Yi(this, arguments, void 0, (function(e3) {
            var t2 = this;
            let n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (function* () {
              const i2 = n2.reliable ? vd.RELIABLE : vd.LOSSY, r2 = n2.reliable ? bt.RELIABLE : bt.LOSSY, a2 = n2.destinationIdentities, s2 = n2.topic;
              let o2 = new wt({ participantIdentity: t2.identity, payload: e3, destinationIdentities: a2, topic: s2 });
              const c2 = new yt({ kind: r2, value: { case: "user", value: o2 } });
              yield t2.engine.sendDataPacket(c2, i2);
            })();
          }));
        }
        publishDtmf(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            const n2 = new yt({ kind: bt.RELIABLE, value: { case: "sipDtmf", value: new Rt({ code: e2, digit: t2 }) } });
            yield this.engine.sendDataPacket(n2, vd.RELIABLE);
          }));
        }
        sendChatMessage(t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            const i2 = { id: crypto.randomUUID(), message: t2, timestamp: Date.now(), attachedFiles: null == n2 ? void 0 : n2.attachments }, r2 = new yt({ value: { case: "chatMessage", value: new Dt(Object.assign(Object.assign({}, i2), { timestamp: R.parse(i2.timestamp) })) } });
            return yield this.engine.sendDataPacket(r2, vd.RELIABLE), this.emit(e.ParticipantEvent.ChatMessage, i2), i2;
          }));
        }
        editChatMessage(t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            const i2 = Object.assign(Object.assign({}, n2), { message: t2, editTimestamp: Date.now() }), r2 = new yt({ value: { case: "chatMessage", value: new Dt(Object.assign(Object.assign({}, i2), { timestamp: R.parse(i2.timestamp), editTimestamp: R.parse(i2.editTimestamp) })) } });
            return yield this.engine.sendDataPacket(r2, vd.RELIABLE), this.emit(e.ParticipantEvent.ChatMessage, i2), i2;
          }));
        }
        sendText(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            return this.roomOutgoingDataStreamManager.sendText(e2, t2);
          }));
        }
        streamText(e2) {
          return Yi(this, void 0, void 0, (function* () {
            return this.roomOutgoingDataStreamManager.streamText(e2);
          }));
        }
        sendFile(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            return this.roomOutgoingDataStreamManager.sendFile(e2, t2);
          }));
        }
        streamBytes(e2) {
          return Yi(this, void 0, void 0, (function* () {
            return this.roomOutgoingDataStreamManager.streamBytes(e2);
          }));
        }
        performRpc(e2) {
          return this.rpcClientManager.performRpc(e2).then(((e3) => {
            let t2 = x(e3, 2);
            return t2[0], t2[1];
          }));
        }
        registerRpcMethod(e2, t2) {
          this.rpcServerManager.registerRpcMethod(e2, t2);
        }
        unregisterRpcMethod(e2) {
          this.rpcServerManager.unregisterRpcMethod(e2);
        }
        setTrackSubscriptionPermissions(e2) {
          let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          this.participantTrackPermissions = t2, this.allParticipantsAllowedToSubscribe = e2, this.engine.client.isDisconnected || this.updateTrackSubscriptionPermissions();
        }
        setEnabledPublishCodecs(e2) {
          this.enabledPublishVideoCodecs = e2.filter(((e3) => "video" === e3.mime.split("/")[0].toLowerCase()));
        }
        updateInfo(e2) {
          return !!super.updateInfo(e2) && (e2.tracks.forEach(((e3) => {
            var t2, n2;
            const i2 = this.trackPublications.get(e3.sid);
            if (i2) {
              const r2 = i2.isMuted || null !== (n2 = null === (t2 = i2.track) || void 0 === t2 ? void 0 : t2.isUpstreamPaused) && void 0 !== n2 && n2;
              r2 !== e3.muted && (this.log.debug("updating server mute state after reconcile", Object.assign(Object.assign({}, cs(i2)), { mutedOnServer: r2 })), this.engine.client.sendMuteTrack(e3.sid, r2));
            }
          })), true);
        }
        setActiveAgent(e2) {
          var t2, n2, i2, r2;
          this.firstActiveAgent = e2, e2 && !this.firstActiveAgent && (this.firstActiveAgent = e2), e2 ? null === (n2 = null === (t2 = this.activeAgentFuture) || void 0 === t2 ? void 0 : t2.resolve) || void 0 === n2 || n2.call(t2, e2) : null === (r2 = null === (i2 = this.activeAgentFuture) || void 0 === i2 ? void 0 : i2.reject) || void 0 === r2 || r2.call(i2, new Error("Agent disconnected")), this.activeAgentFuture = void 0;
        }
        waitUntilActiveAgentPresent() {
          return this.firstActiveAgent ? Promise.resolve(this.firstActiveAgent) : (this.activeAgentFuture || (this.activeAgentFuture = new Qs()), this.activeAgentFuture.promise);
        }
        getPublicationForTrack(e2) {
          let t2;
          return this.trackPublications.forEach(((n2) => {
            const i2 = n2.track;
            i2 && (e2 instanceof MediaStreamTrack ? (so(i2) || ao(i2)) && i2.mediaStreamTrack === e2 && (t2 = n2) : e2 === i2 && (t2 = n2));
          })), t2;
        }
        waitForPendingPublicationOfSource(e2) {
          return Yi(this, void 0, void 0, (function* () {
            const t2 = Date.now();
            for (; Date.now() < t2 + 1e4; ) {
              const t3 = Array.from(this.pendingPublishPromises.entries()).find(((t4) => x(t4, 1)[0].source === e2));
              if (t3) return t3[1];
              yield fs(20);
            }
          }));
        }
        publishDataTrack(e2) {
          return Yi(this, void 0, void 0, (function* () {
            const t2 = new pl(e2, this.roomOutgoingDataTrackManager);
            return yield t2.publish(), t2;
          }));
        }
      }
      class Ll extends DOMException {
        constructor(e2, t2) {
          super(e2, "AbortError"), this.reason = t2;
        }
      }
      class Ul extends Map {
        constructor() {
          super(...arguments), this.pending = /* @__PURE__ */ new Map();
        }
        set(e2, t2) {
          var n2, i2;
          super.set(e2, t2);
          const r2 = null === (n2 = this.pending) || void 0 === n2 ? void 0 : n2.get(e2);
          if (r2) {
            for (const e3 of r2) e3.isResolved || null === (i2 = e3.resolve) || void 0 === i2 || i2.call(e3, t2);
            this.pending.delete(e2);
          }
          return this;
        }
        get [Symbol.toStringTag]() {
          return "DeferrableMap";
        }
        getDeferred(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            const n2 = this.get(e2);
            if (void 0 !== n2) return n2;
            if (null == t2 ? void 0 : t2.aborted) throw new Ll("The operation was aborted.", t2.reason);
            const i2 = new Qs(void 0, (() => {
              const t3 = this.pending.get(e2);
              if (!t3) return;
              const n3 = t3.indexOf(i2);
              -1 !== n3 && t3.splice(n3, 1), 0 === t3.length && this.pending.delete(e2);
            })), r2 = this.pending.get(e2);
            if (r2 ? r2.push(i2) : this.pending.set(e2, [i2]), t2) {
              const e3 = () => {
                var e4;
                i2.isResolved || null === (e4 = i2.reject) || void 0 === e4 || e4.call(i2, new Ll("The operation was aborted.", t2.reason));
              };
              t2.addEventListener("abort", e3, { once: true }), i2.promise.finally((() => {
                t2.removeEventListener("abort", e3);
              }));
            }
            return i2.promise;
          }));
        }
      }
      class Fl extends Pl {
        constructor(t2, n2, i2, r2) {
          super(t2, n2.sid, n2.name, r2), this.track = void 0, this.allowed = true, this.requestedDisabled = void 0, this.visible = true, this.handleEnded = (t3) => {
            this.setTrack(void 0), this.emit(e.TrackEvent.Ended, t3);
          }, this.handleVisibilityChange = (e2) => {
            this.log.debug("adaptivestream video visibility ".concat(this.trackSid, ", visible=").concat(e2), this.logContext), this.visible = e2, this.emitTrackUpdate();
          }, this.handleVideoDimensionsChange = (e2) => {
            this.log.debug("adaptivestream video dimensions ".concat(e2.width, "x").concat(e2.height), this.logContext), this.videoDimensionsAdaptiveStream = e2, this.emitTrackUpdate();
          }, this.subscribed = i2, this.updateInfo(n2);
        }
        setSubscribed(t2) {
          const n2 = this.subscriptionStatus, i2 = this.permissionStatus;
          this.subscribed = t2, t2 && (this.allowed = true);
          const r2 = new Kn({ trackSids: [this.trackSid], subscribe: this.subscribed, participantTracks: [new Nt({ participantSid: "", trackSids: [this.trackSid] })] });
          this.emit(e.TrackEvent.UpdateSubscription, r2), this.emitSubscriptionUpdateIfChanged(n2), this.emitPermissionUpdateIfChanged(i2);
        }
        get subscriptionStatus() {
          return false === this.subscribed ? Pl.SubscriptionStatus.Unsubscribed : super.isSubscribed ? Pl.SubscriptionStatus.Subscribed : Pl.SubscriptionStatus.Desired;
        }
        get permissionStatus() {
          return this.allowed ? Pl.PermissionStatus.Allowed : Pl.PermissionStatus.NotAllowed;
        }
        get isSubscribed() {
          return false !== this.subscribed && super.isSubscribed;
        }
        get isDesired() {
          return false !== this.subscribed;
        }
        get isEnabled() {
          return void 0 !== this.requestedDisabled ? !this.requestedDisabled : !this.isAdaptiveStream || this.visible;
        }
        get isLocal() {
          return false;
        }
        setEnabled(e2) {
          this.isManualOperationAllowed() && this.requestedDisabled !== !e2 && (this.requestedDisabled = !e2, this.emitTrackUpdate());
        }
        setVideoQuality(e2) {
          this.isManualOperationAllowed() && this.requestedMaxQuality !== e2 && (this.requestedMaxQuality = e2, this.requestedVideoDimensions = void 0, this.emitTrackUpdate());
        }
        setVideoDimensions(e2) {
          var t2, n2;
          this.isManualOperationAllowed() && ((null === (t2 = this.requestedVideoDimensions) || void 0 === t2 ? void 0 : t2.width) === e2.width && (null === (n2 = this.requestedVideoDimensions) || void 0 === n2 ? void 0 : n2.height) === e2.height || (lo(this.track) && (this.requestedVideoDimensions = e2), this.requestedMaxQuality = void 0, this.emitTrackUpdate()));
        }
        setVideoFPS(e2) {
          this.isManualOperationAllowed() && lo(this.track) && this.fps !== e2 && (this.fps = e2, this.emitTrackUpdate());
        }
        get videoQuality() {
          var t2;
          return null !== (t2 = this.requestedMaxQuality) && void 0 !== t2 ? t2 : e.VideoQuality.HIGH;
        }
        setTrack(t2) {
          const n2 = this.subscriptionStatus, i2 = this.permissionStatus, r2 = this.track;
          r2 !== t2 && (r2 && (r2.off(e.TrackEvent.VideoDimensionsChanged, this.handleVideoDimensionsChange), r2.off(e.TrackEvent.VisibilityChanged, this.handleVisibilityChange), r2.off(e.TrackEvent.Ended, this.handleEnded), r2.detach(), r2.stopMonitor(), this.emit(e.TrackEvent.Unsubscribed, r2)), super.setTrack(t2), t2 && (t2.sid = this.trackSid, t2.on(e.TrackEvent.VideoDimensionsChanged, this.handleVideoDimensionsChange), t2.on(e.TrackEvent.VisibilityChanged, this.handleVisibilityChange), t2.on(e.TrackEvent.Ended, this.handleEnded), this.emit(e.TrackEvent.Subscribed, t2)), this.emitPermissionUpdateIfChanged(i2), this.emitSubscriptionUpdateIfChanged(n2));
        }
        setAllowed(e2) {
          const t2 = this.subscriptionStatus, n2 = this.permissionStatus;
          this.allowed = e2, this.emitPermissionUpdateIfChanged(n2), this.emitSubscriptionUpdateIfChanged(t2);
        }
        setSubscriptionError(t2) {
          this.emit(e.TrackEvent.SubscriptionFailed, t2);
        }
        updateInfo(t2) {
          super.updateInfo(t2);
          const n2 = this.metadataMuted;
          this.metadataMuted = t2.muted, this.track ? this.track.setMuted(t2.muted) : n2 !== t2.muted && this.emit(t2.muted ? e.TrackEvent.Muted : e.TrackEvent.Unmuted);
        }
        emitSubscriptionUpdateIfChanged(t2) {
          const n2 = this.subscriptionStatus;
          t2 !== n2 && this.emit(e.TrackEvent.SubscriptionStatusChanged, n2, t2);
        }
        emitPermissionUpdateIfChanged(t2) {
          this.permissionStatus !== t2 && this.emit(e.TrackEvent.SubscriptionPermissionChanged, this.permissionStatus, t2);
        }
        isManualOperationAllowed() {
          return !!this.isDesired || (this.log.warn("cannot update track settings when not subscribed", this.logContext), false);
        }
        get isAdaptiveStream() {
          return lo(this.track) && this.track.isAdaptiveStream;
        }
        emitTrackUpdate() {
          const t2 = new Gn({ trackSids: [this.trackSid], disabled: !this.isEnabled, fps: this.fps });
          if (this.kind === ps.Kind.Video) {
            let n2 = this.requestedVideoDimensions;
            if (void 0 !== this.videoDimensionsAdaptiveStream) if (n2) {
              ls(this.videoDimensionsAdaptiveStream, n2) && (this.log.debug("using adaptive stream dimensions instead of requested", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), n2 = this.videoDimensionsAdaptiveStream);
            } else if (void 0 !== this.requestedMaxQuality && this.trackInfo) {
              const e2 = (function(e3, t3) {
                var n3;
                return null === (n3 = e3.layers) || void 0 === n3 ? void 0 : n3.find(((e4) => e4.quality === t3));
              })(this.trackInfo, this.requestedMaxQuality);
              e2 && ls(this.videoDimensionsAdaptiveStream, e2) && (this.log.debug("using adaptive stream dimensions instead of max quality layer", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), n2 = this.videoDimensionsAdaptiveStream);
            } else this.log.debug("using adaptive stream dimensions", Object.assign(Object.assign({}, this.logContext), this.videoDimensionsAdaptiveStream)), n2 = this.videoDimensionsAdaptiveStream;
            n2 ? (t2.width = Math.ceil(n2.width), t2.height = Math.ceil(n2.height)) : void 0 !== this.requestedMaxQuality ? (this.log.debug("using requested max quality", Object.assign(Object.assign({}, this.logContext), { quality: this.requestedMaxQuality })), t2.quality = this.requestedMaxQuality) : (this.log.debug("using default quality", Object.assign(Object.assign({}, this.logContext), { quality: e.VideoQuality.HIGH })), t2.quality = e.VideoQuality.HIGH);
          }
          this.emit(e.TrackEvent.UpdateSettings, t2);
        }
      }
      class Bl extends Nl {
        static fromParticipantInfo(e2, t2, n2, i2) {
          return new Bl(e2, t2.sid, t2.identity, t2.name, t2.metadata, t2.attributes, n2, t2.kind, t2.dataTracks.map(((e3) => {
            const n3 = ac.from(e3);
            return new Wd(n3, i2, { publisherIdentity: t2.identity });
          })), t2.clientProtocol);
        }
        get logContext() {
          return Object.assign(Object.assign({}, super.logContext), { remoteParticipantID: this.sid, remoteParticipant: this.identity });
        }
        constructor(e2, t2, n2, i2, r2, a2, s2) {
          let o2 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : lt.STANDARD, c2 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : [], d2 = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          super(t2, n2 || "", i2, r2, a2, s2, o2), this.signalClient = e2, this.trackPublications = /* @__PURE__ */ new Map(), this.audioTrackPublications = /* @__PURE__ */ new Map(), this.videoTrackPublications = /* @__PURE__ */ new Map(), this.dataTracks = new Ul(c2.map(((e3) => [e3.info.name, e3]))), this.volumeMap = /* @__PURE__ */ new Map(), this.clientProtocol = d2;
        }
        addTrackPublication(t2) {
          super.addTrackPublication(t2), t2.on(e.TrackEvent.UpdateSettings, ((e2) => {
            this.log.debug("send update settings", Object.assign(Object.assign(Object.assign({}, this.logContext), cs(t2)), { settings: e2 })), this.signalClient.sendUpdateTrackSettings(e2);
          })), t2.on(e.TrackEvent.UpdateSubscription, ((e2) => {
            e2.participantTracks.forEach(((e3) => {
              e3.participantSid = this.sid;
            })), this.signalClient.sendUpdateSubscription(e2);
          })), t2.on(e.TrackEvent.SubscriptionPermissionChanged, ((n2) => {
            this.emit(e.ParticipantEvent.TrackSubscriptionPermissionChanged, t2, n2);
          })), t2.on(e.TrackEvent.SubscriptionStatusChanged, ((n2) => {
            this.emit(e.ParticipantEvent.TrackSubscriptionStatusChanged, t2, n2);
          })), t2.on(e.TrackEvent.Subscribed, ((n2) => {
            this.emit(e.ParticipantEvent.TrackSubscribed, n2, t2);
          })), t2.on(e.TrackEvent.Unsubscribed, ((n2) => {
            this.emit(e.ParticipantEvent.TrackUnsubscribed, n2, t2);
          })), t2.on(e.TrackEvent.SubscriptionFailed, ((n2) => {
            this.emit(e.ParticipantEvent.TrackSubscriptionFailed, t2.trackSid, n2);
          }));
        }
        getTrackPublication(e2) {
          const t2 = super.getTrackPublication(e2);
          if (t2) return t2;
        }
        getTrackPublicationByName(e2) {
          const t2 = super.getTrackPublicationByName(e2);
          if (t2) return t2;
        }
        setVolume(e2) {
          let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ps.Source.Microphone;
          this.volumeMap.set(t2, e2);
          const n2 = this.getTrackPublication(t2);
          n2 && n2.track && n2.track.setVolume(e2);
        }
        getVolume() {
          let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ps.Source.Microphone;
          const t2 = this.getTrackPublication(e2);
          return t2 && t2.track ? t2.track.getVolume() : this.volumeMap.get(e2);
        }
        addSubscribedMediaTrack(t2, n2, i2, r2, a2, s2) {
          let o2 = this.getTrackPublicationBySid(n2);
          if (o2 || n2.startsWith("TR") || this.trackPublications.forEach(((e2) => {
            o2 || t2.kind !== e2.kind.toString() || (o2 = e2);
          })), !o2) return 0 === s2 ? (this.log.error("could not find published track", Object.assign(Object.assign({}, this.logContext), { trackSid: n2 })), void this.emit(e.ParticipantEvent.TrackSubscriptionFailed, n2)) : (void 0 === s2 && (s2 = 20), void setTimeout((() => {
            this.addSubscribedMediaTrack(t2, n2, i2, r2, a2, s2 - 1);
          }), 150));
          if ("ended" === t2.readyState) return this.log.error("unable to subscribe because MediaStreamTrack is ended. Do not call MediaStreamTrack.stop()", Object.assign(Object.assign({}, this.logContext), cs(o2))), void this.emit(e.ParticipantEvent.TrackSubscriptionFailed, n2);
          let c2;
          return c2 = "video" === t2.kind ? new Fo(t2, n2, r2, a2) : new Rl(t2, n2, r2, this.audioContext, this.audioOutput), c2.source = o2.source, c2.isMuted = o2.isMuted, c2.setMediaStream(i2), c2.start(), o2.setTrack(c2), this.volumeMap.has(o2.source) && oo(c2) && io(c2) && c2.setVolume(this.volumeMap.get(o2.source)), o2;
        }
        get hasMetadata() {
          return !!this.participantInfo;
        }
        getTrackPublicationBySid(e2) {
          return this.trackPublications.get(e2);
        }
        updateInfo(t2) {
          if (!super.updateInfo(t2)) return false;
          const n2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map();
          return t2.tracks.forEach(((e2) => {
            var t3, r2;
            let a2 = this.getTrackPublicationBySid(e2.sid);
            if (a2) a2.updateInfo(e2);
            else {
              const n3 = ps.kindFromProto(e2.type);
              if (!n3) return;
              a2 = new Fl(n3, e2, null === (t3 = this.signalClient.connectOptions) || void 0 === t3 ? void 0 : t3.autoSubscribe, { loggerContextCb: () => this.logContext, loggerName: null === (r2 = this.loggerOptions) || void 0 === r2 ? void 0 : r2.loggerName }), a2.updateInfo(e2), i2.set(e2.sid, a2);
              const s2 = Array.from(this.trackPublications.values()).find(((e3) => e3.source === (null == a2 ? void 0 : a2.source)));
              s2 && a2.source !== ps.Source.Unknown && this.log.debug("received a second track publication for ".concat(this.identity, " with the same source: ").concat(a2.source), Object.assign(Object.assign({}, this.logContext), { oldTrack: cs(s2), newTrack: cs(a2) })), this.addTrackPublication(a2);
            }
            n2.set(e2.sid, a2);
          })), this.trackPublications.forEach(((e2) => {
            n2.has(e2.trackSid) || (this.log.trace("detected removed track on remote participant, unpublishing", Object.assign(Object.assign({}, this.logContext), cs(e2))), this.unpublishTrack(e2.trackSid, true));
          })), i2.forEach(((t3) => {
            this.emit(e.ParticipantEvent.TrackPublished, t3);
          })), true;
        }
        unpublishTrack(t2, n2) {
          const i2 = this.trackPublications.get(t2);
          if (!i2) return;
          const r2 = i2.track;
          switch (r2 && (r2.stop(), i2.setTrack(void 0)), this.trackPublications.delete(t2), i2.kind) {
            case ps.Kind.Audio:
              this.audioTrackPublications.delete(t2);
              break;
            case ps.Kind.Video:
              this.videoTrackPublications.delete(t2);
          }
          n2 && this.emit(e.ParticipantEvent.TrackUnpublished, i2);
        }
        setAudioOutput(e2) {
          return Yi(this, void 0, void 0, (function* () {
            this.audioOutput = e2;
            const t2 = [];
            this.audioTrackPublications.forEach(((n2) => {
              var i2;
              io(n2.track) && oo(n2.track) && t2.push(n2.track.setSinkId(null !== (i2 = e2.deviceId) && void 0 !== i2 ? i2 : "default"));
            })), yield Promise.all(t2);
          }));
        }
        addRemoteDataTrack(e2) {
          this.dataTracks.set(e2.info.name, e2);
        }
        removeRemoteDataTrack(e2) {
          for (const n2 of this.dataTracks.entries()) {
            var t2 = x(n2, 2);
            const i2 = t2[0];
            e2 === t2[1].info.sid && this.dataTracks.delete(i2);
          }
        }
        emit(e2) {
          for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++) n2[i2 - 1] = arguments[i2];
          return this.log.trace("participant event", Object.assign(Object.assign({}, this.logContext), { event: e2, args: n2 })), super.emit(e2, ...n2);
        }
      }
      e.ConnectionState = void 0, (Al = e.ConnectionState || (e.ConnectionState = {})).Disconnected = "disconnected", Al.Connecting = "connecting", Al.Connected = "connected", Al.Reconnecting = "reconnecting", Al.SignalReconnecting = "signalReconnecting";
      class jl extends ir.EventEmitter {
        get hasE2EESetup() {
          return void 0 !== this.e2eeManager;
        }
        constructor(t2) {
          var n2, i2, a2, s2, o2, c2, d2;
          if (super(), n2 = this, this.state = e.ConnectionState.Disconnected, this.activeSpeakers = [], this.isE2EEEnabled = false, this.audioEnabled = true, this.e2eeStateMutex = new r(), this.isVideoPlaybackBlocked = false, this.log = Vi, this.bufferedEvents = [], this.isResuming = false, this.connect = (t3, n3, i3) => Yi(this, void 0, void 0, (function* () {
            var r2;
            if (!Cs()) throw Os() ? Error("WebRTC isn't detected, have you called registerGlobals?") : Error("LiveKit doesn't seem to be supported on this browser. Try to update your browser and make sure no browser extensions are disabling webRTC.");
            const a3 = yield this.disconnectLock.lock();
            if (this.state === e.ConnectionState.Connected) return this.log.info("already connected to room ".concat(this.name)), a3(), Promise.resolve();
            if (this.connectFuture) return a3(), this.connectFuture.promise;
            this.setAndEmitConnectionState(e.ConnectionState.Connecting), (null === (r2 = this.regionUrlProvider) || void 0 === r2 ? void 0 : r2.getServerUrl().toString()) !== mo(t3) && (this.regionUrl = void 0, this.regionUrlProvider = void 0), As(new URL(t3)) && (void 0 === this.regionUrlProvider ? this.regionUrlProvider = new bd(t3, n3) : this.regionUrlProvider.updateToken(n3), this.regionUrlProvider.fetchRegionSettings().then(((e2) => {
              var t4;
              null === (t4 = this.regionUrlProvider) || void 0 === t4 || t4.setServerReportedRegions(e2);
            })).catch(((e2) => {
              this.log.warn("could not fetch region settings", { error: e2 });
            })));
            const s3 = (r3, o4, c3) => Yi(this, void 0, void 0, (function* () {
              var d3, l2;
              this.abortController && this.abortController.abort();
              const u2 = new AbortController();
              this.abortController = u2, null == a3 || a3();
              try {
                if (yield zo.getInstance().getBackOffPromise(t3), u2.signal.aborted) throw Da.cancelled("Connection attempt aborted");
                yield this.attemptConnection(null != c3 ? c3 : t3, n3, i3, u2), this.abortController = void 0, r3();
              } catch (n4) {
                if (this.regionUrlProvider && n4 instanceof Da && n4.reason !== e.ConnectionErrorReason.Cancelled && n4.reason !== e.ConnectionErrorReason.NotAllowed) {
                  let i4 = null;
                  try {
                    this.log.debug("Fetching next region"), i4 = yield this.regionUrlProvider.getNextBestRegionUrl(null === (d3 = this.abortController) || void 0 === d3 ? void 0 : d3.signal);
                  } catch (t4) {
                    if (t4 instanceof Da && (401 === t4.status || t4.reason === e.ConnectionErrorReason.Cancelled)) return this.handleDisconnect(this.options.stopLocalTrackOnUnpublish), void o4(t4);
                  }
                  [e.ConnectionErrorReason.InternalError, e.ConnectionErrorReason.ServerUnreachable, e.ConnectionErrorReason.Timeout].includes(n4.reason) && (this.log.debug("Adding failed connection attempt to back off"), zo.getInstance().addFailedConnectionAttempt(t3)), i4 && !(null === (l2 = this.abortController) || void 0 === l2 ? void 0 : l2.signal.aborted) ? (this.log.info("Initial connection failed with ConnectionError: ".concat(n4.message, ". Retrying with another region: ").concat(i4)), this.recreateEngine(true), yield s3(r3, o4, i4)) : (this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, $s(n4)), o4(n4));
                } else {
                  let e2 = et.UNKNOWN_REASON;
                  n4 instanceof Da && (e2 = $s(n4)), this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, e2), o4(n4);
                }
              }
            })), o3 = this.regionUrl;
            return this.regionUrl = void 0, this.connectFuture = new Qs(((e2, t4) => {
              s3(e2, t4, o3);
            }), (() => {
              this.clearConnectionFutures();
            })), this.connectFuture.promise;
          })), this.connectSignal = (e2, t3, n3, i3, r2, a3) => Yi(this, void 0, void 0, (function* () {
            var s3;
            const o3 = yield n3.join(e2, t3, { autoSubscribe: i3.autoSubscribe, adaptiveStream: "object" == typeof r2.adaptiveStream || r2.adaptiveStream, clientInfoCapabilities: Oo(null !== (s3 = r2.frameMetadata) && void 0 !== s3 ? s3 : r2.packetTrailer) || this.e2eeManager ? [Bt.CAP_PACKET_TRAILER] : void 0, maxRetries: i3.maxRetries, e2eeEnabled: !!this.e2eeManager, websocketTimeout: i3.websocketTimeout }, a3.signal, !r2.singlePeerConnection), c3 = o3.joinResponse, d3 = o3.serverInfo;
            if (this.serverInfo = d3, !d3.version) throw new Oa("unknown server version");
            return "0.15.1" === d3.version && this.options.dynacast && (this.log.debug("disabling dynacast due to server version"), r2.dynacast = false), c3;
          })), this.applyJoinResponse = (e2) => {
            const t3 = e2.participant;
            if (this.localParticipant.sid = t3.sid, this.localParticipant.identity = t3.identity, this.localParticipant.setEnabledPublishCodecs(e2.enabledPublishCodecs), this.e2eeManager) try {
              this.e2eeManager.setSifTrailer(e2.sifTrailer);
            } catch (e3) {
              this.log.error(e3 instanceof Error ? e3.message : "Could not set SifTrailer", { error: e3 });
            }
            this.handleParticipantUpdates([t3, ...e2.otherParticipants]), e2.room && this.handleRoomUpdate(e2.room);
          }, this.attemptConnection = (t3, n3, i3, r2) => Yi(this, void 0, void 0, (function* () {
            var a3, s3;
            this.state === e.ConnectionState.Reconnecting || this.isResuming || (null === (a3 = this.engine) || void 0 === a3 ? void 0 : a3.pendingReconnect) ? (this.log.info("Reconnection attempt replaced by new connection attempt"), this.recreateEngine(true)) : this.maybeCreateEngine(), (null === (s3 = this.regionUrlProvider) || void 0 === s3 ? void 0 : s3.isCloud()) && this.engine.setRegionStrategy(this.createRegionStrategy()), this.acquireAudioContext(), this.connOptions = Object.assign(Object.assign({}, qc), i3), this.connOptions.rtcConfig && (this.engine.rtcConfig = this.connOptions.rtcConfig), this.connOptions.peerConnectionTimeout && (this.engine.peerConnectionTimeout = this.connOptions.peerConnectionTimeout);
            try {
              const i4 = yield this.connectSignal(t3, n3, this.engine, this.connOptions, this.options, r2);
              this.applyJoinResponse(i4), this.setupLocalParticipantEvents(), this.emit(e.RoomEvent.SignalConnected);
            } catch (e2) {
              yield this.engine.close(), this.recreateEngine();
              const t4 = r2.signal.aborted ? Da.cancelled("Signal connection aborted") : Da.serverUnreachable("could not establish signal connection");
              throw e2 instanceof Error && (t4.message = "".concat(t4.message, ": ").concat(e2.message)), e2 instanceof Da && (t4.reason = e2.reason, t4.status = e2.status), this.log.debug("error trying to establish signal connection", { error: e2 }), t4;
            }
            if (r2.signal.aborted) throw yield this.engine.close(), this.recreateEngine(), Da.cancelled("Connection attempt aborted");
            try {
              yield this.engine.waitForPCInitialConnection(this.connOptions.peerConnectionTimeout, r2);
            } catch (e2) {
              throw yield this.engine.close(), this.recreateEngine(), e2;
            }
            _s() && this.options.disconnectOnPageLeave && (window.addEventListener("pagehide", this.onPageLeave), window.addEventListener("beforeunload", this.onPageLeave)), _s() && window.addEventListener("freeze", this.onPageLeave), this.setAndEmitConnectionState(e.ConnectionState.Connected), this.emit(e.RoomEvent.Connected), zo.getInstance().resetFailedConnectionAttempts(t3), this.registerConnectionReconcile(), this.regionUrlProvider && this.regionUrlProvider.notifyConnected();
          })), this.disconnect = function() {
            for (var t3 = arguments.length, i3 = new Array(t3), r2 = 0; r2 < t3; r2++) i3[r2] = arguments[r2];
            return Yi(n2, [...i3], void 0, (function() {
              var t4 = this;
              let n3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              return (function* () {
                var i4, r3, a3;
                const s3 = yield t4.disconnectLock.lock();
                try {
                  if (t4.state === e.ConnectionState.Disconnected) return void t4.log.debug("already disconnected");
                  if (t4.log.info("disconnect from room"), t4.state === e.ConnectionState.Connecting || t4.state === e.ConnectionState.Reconnecting || t4.isResuming) {
                    const e2 = "Abort connection attempt due to user initiated disconnect";
                    t4.log.warn(e2), null === (i4 = t4.abortController) || void 0 === i4 || i4.abort(e2), null === (a3 = null === (r3 = t4.connectFuture) || void 0 === r3 ? void 0 : r3.reject) || void 0 === a3 || a3.call(r3, Da.cancelled("Client initiated disconnect")), t4.connectFuture = void 0;
                  }
                  t4.engine && (t4.engine.client.isDisconnected || (yield t4.engine.client.sendLeave()), yield t4.engine.close()), t4.handleDisconnect(n3, et.CLIENT_INITIATED), t4.engine = void 0;
                } finally {
                  s3();
                }
              })();
            }));
          }, this.onPageLeave = () => Yi(this, void 0, void 0, (function* () {
            this.log.info("Page leave detected, disconnecting"), yield this.disconnect();
          })), this.startAudio = () => Yi(this, void 0, void 0, (function* () {
            const t3 = [], n3 = ga();
            if (n3 && "iOS" === n3.os) {
              const n4 = "livekit-dummy-audio-el";
              let i3 = document.getElementById(n4);
              if (!i3) {
                i3 = document.createElement("audio"), i3.id = n4, i3.autoplay = true, i3.hidden = true;
                const t4 = Gs();
                t4.enabled = true;
                const r2 = new MediaStream([t4]);
                i3.srcObject = r2, document.addEventListener("visibilitychange", (() => {
                  i3 && (i3.srcObject = document.hidden ? null : r2, document.hidden || (this.log.debug("page visible again, triggering startAudio to resume playback and update playback status"), this.startAudio()));
                })), document.body.append(i3), this.once(e.RoomEvent.Disconnected, (() => {
                  null == i3 || i3.remove(), i3 = null;
                }));
              }
              t3.push(i3);
            }
            this.remoteParticipants.forEach(((e2) => {
              e2.audioTrackPublications.forEach(((e3) => {
                e3.track && e3.track.attachedElements.forEach(((e4) => {
                  t3.push(e4);
                }));
              }));
            }));
            try {
              yield Promise.all([this.acquireAudioContext(), ...t3.map(((e2) => (e2.muted = false, e2.play())))]), this.handleAudioPlaybackStarted();
            } catch (e2) {
              throw this.handleAudioPlaybackFailed(e2), e2;
            }
          })), this.startVideo = () => Yi(this, void 0, void 0, (function* () {
            const e2 = [];
            for (const t3 of this.remoteParticipants.values()) t3.videoTrackPublications.forEach(((t4) => {
              var n3;
              null === (n3 = t4.track) || void 0 === n3 || n3.attachedElements.forEach(((t5) => {
                e2.includes(t5) || e2.push(t5);
              }));
            }));
            yield Promise.all(e2.map(((e3) => e3.play()))).then((() => {
              this.handleVideoPlaybackStarted();
            })).catch(((e3) => {
              "NotAllowedError" === e3.name ? this.handleVideoPlaybackFailed() : this.log.warn("Resuming video playback failed, make sure you call `startVideo` directly in a user gesture handler");
            }));
          })), this.handleRestarting = () => {
            this.clearConnectionReconcile(), this.isResuming = false;
            for (const e2 of this.remoteParticipants.values()) this.handleParticipantDisconnected(e2.identity, e2);
            this.setAndEmitConnectionState(e.ConnectionState.Reconnecting) && this.emit(e.RoomEvent.Reconnecting);
          }, this.handleRestarted = () => {
            this.outgoingDataTrackManager.sfuWillRepublishTracks(), this.incomingDataTrackManager.resendSubscriptionUpdates();
          }, this.handleSignalRestarted = (t3) => Yi(this, void 0, void 0, (function* () {
            this.log.debug("signal reconnected to server, region ".concat(t3.serverRegion), { region: t3.serverRegion }), this.bufferedEvents = [], this.applyJoinResponse(t3);
            try {
              yield this.localParticipant.republishAllTracks(void 0, true);
            } catch (e2) {
              this.log.error("error trying to re-publish tracks after reconnection", { error: e2 });
            }
            try {
              yield this.engine.waitForRestarted(), this.log.debug("fully reconnected to server", { region: t3.serverRegion });
            } catch (e2) {
              return;
            }
            this.setAndEmitConnectionState(e.ConnectionState.Connected), this.emit(e.RoomEvent.Reconnected), this.registerConnectionReconcile(), this.emitBufferedEvents();
          })), this.handleParticipantUpdates = (e2) => {
            var t3;
            for (const n4 of e2) {
              if (n4.identity === this.localParticipant.identity) {
                this.localParticipant.updateInfo(n4);
                continue;
              }
              "" === n4.identity && (n4.identity = null !== (t3 = this.sidToIdentity.get(n4.sid)) && void 0 !== t3 ? t3 : "");
              let e3 = this.remoteParticipants.get(n4.identity);
              n4.state === dt.DISCONNECTED ? this.handleParticipantDisconnected(n4.identity, e3) : this.getOrCreateParticipant(n4.identity, n4);
            }
            const n3 = new Map(e2.filter(((e3) => e3.identity !== this.localParticipant.identity)).map(((e3) => [e3.identity, e3.dataTracks.map(((e4) => ac.from(e4)))])));
            this.incomingDataTrackManager.receiveSfuPublicationUpdates(n3);
          }, this.handleActiveSpeakersUpdate = (t3) => {
            const n3 = [], i3 = {};
            t3.forEach(((e2) => {
              if (i3[e2.sid] = true, e2.sid === this.localParticipant.sid) this.localParticipant.audioLevel = e2.level, this.localParticipant.setIsSpeaking(true), n3.push(this.localParticipant);
              else {
                const t4 = this.getRemoteParticipantBySid(e2.sid);
                t4 && (t4.audioLevel = e2.level, t4.setIsSpeaking(true), n3.push(t4));
              }
            })), i3[this.localParticipant.sid] || (this.localParticipant.audioLevel = 0, this.localParticipant.setIsSpeaking(false)), this.remoteParticipants.forEach(((e2) => {
              i3[e2.sid] || (e2.audioLevel = 0, e2.setIsSpeaking(false));
            })), this.activeSpeakers = n3, this.emitWhenConnected(e.RoomEvent.ActiveSpeakersChanged, n3);
          }, this.handleSpeakersChanged = (t3) => {
            const n3 = /* @__PURE__ */ new Map();
            this.activeSpeakers.forEach(((e2) => {
              const t4 = this.remoteParticipants.get(e2.identity);
              t4 && t4.sid !== e2.sid || n3.set(e2.sid, e2);
            })), t3.forEach(((e2) => {
              let t4 = this.getRemoteParticipantBySid(e2.sid);
              e2.sid === this.localParticipant.sid && (t4 = this.localParticipant), t4 && (t4.audioLevel = e2.level, t4.setIsSpeaking(e2.active), e2.active ? n3.set(e2.sid, t4) : n3.delete(e2.sid));
            }));
            const i3 = Array.from(n3.values());
            i3.sort(((e2, t4) => t4.audioLevel - e2.audioLevel)), this.activeSpeakers = i3, this.emitWhenConnected(e.RoomEvent.ActiveSpeakersChanged, i3);
          }, this.handleStreamStateUpdate = (t3) => {
            t3.streamStates.forEach(((t4) => {
              const n3 = this.getRemoteParticipantBySid(t4.participantSid);
              if (!n3) return;
              const i3 = n3.getTrackPublicationBySid(t4.trackSid);
              if (!i3 || !i3.track) return;
              const r2 = ps.streamStateFromProto(t4.state);
              i3.track.setStreamState(r2), r2 !== i3.track.streamState && (n3.emit(e.ParticipantEvent.TrackStreamStateChanged, i3, i3.track.streamState), this.emitWhenConnected(e.RoomEvent.TrackStreamStateChanged, i3, i3.track.streamState, n3));
            }));
          }, this.handleSubscriptionPermissionUpdate = (e2) => {
            const t3 = this.getRemoteParticipantBySid(e2.participantSid);
            if (!t3) return;
            const n3 = t3.getTrackPublicationBySid(e2.trackSid);
            n3 && n3.setAllowed(e2.allowed);
          }, this.handleSubscriptionError = (e2) => {
            const t3 = Array.from(this.remoteParticipants.values()).find(((t4) => t4.trackPublications.has(e2.trackSid)));
            if (!t3) return;
            const n3 = t3.getTrackPublicationBySid(e2.trackSid);
            n3 && n3.setSubscriptionError(e2.err);
          }, this.handleDataPacket = (e2, t3) => {
            const n3 = this.remoteParticipants.get(e2.participantIdentity);
            if ("user" === e2.value.case) this.handleUserPacket(n3, e2.value.value, e2.kind, t3);
            else if ("transcription" === e2.value.case) this.handleTranscription(n3, e2.value.value);
            else if ("sipDtmf" === e2.value.case) this.handleSipDtmf(n3, e2.value.value);
            else if ("chatMessage" === e2.value.case) this.handleChatMessage(n3, e2.value.value);
            else if ("metrics" === e2.value.case) this.handleMetrics(e2.value.value, n3);
            else if ("streamHeader" === e2.value.case || "streamChunk" === e2.value.case || "streamTrailer" === e2.value.case) this.handleDataStream(e2, t3);
            else if ("rpcRequest" === e2.value.case) {
              const t4 = e2.value.value;
              this.rpcServerManager.handleIncomingRpcRequest(e2.participantIdentity, t4);
            } else if ("rpcResponse" === e2.value.case) {
              const t4 = e2.value.value;
              switch (t4.value.case) {
                case "payload":
                  this.rpcClientManager.handleIncomingRpcResponseSuccess(t4.requestId, t4.value.value);
                  break;
                case "error":
                  this.rpcClientManager.handleIncomingRpcResponseFailure(t4.requestId, kl.fromProto(t4.value.value));
                  break;
                default:
                  this.log.warn("Unknown rpcResponse.value.case: ".concat(t4.value.case), this.logContext);
              }
            } else "rpcAck" === e2.value.case && this.rpcClientManager.handleIncomingRpcAck(e2.value.value.requestId);
          }, this.handleUserPacket = (t3, n3, i3, r2) => {
            this.emit(e.RoomEvent.DataReceived, n3.payload, t3, i3, n3.topic, r2), null == t3 || t3.emit(e.ParticipantEvent.DataReceived, n3.payload, i3, r2);
          }, this.handleSipDtmf = (t3, n3) => {
            this.emit(e.RoomEvent.SipDTMFReceived, n3, t3), null == t3 || t3.emit(e.ParticipantEvent.SipDTMFReceived, n3);
          }, this.handleTranscription = (t3, n3) => {
            const i3 = n3.transcribedParticipantIdentity === this.localParticipant.identity ? this.localParticipant : this.getParticipantByIdentity(n3.transcribedParticipantIdentity), r2 = null == i3 ? void 0 : i3.trackPublications.get(n3.trackId), a3 = (function(e2, t4) {
              return e2.segments.map(((e3) => {
                let n4 = e3.id, i4 = e3.text, r3 = e3.language, a4 = e3.startTime, s3 = e3.endTime, o3 = e3.final;
                var c3;
                const d3 = null !== (c3 = t4.get(n4)) && void 0 !== c3 ? c3 : Date.now(), l2 = Date.now();
                return o3 ? t4.delete(n4) : t4.set(n4, d3), { id: n4, text: i4, startTime: Number.parseInt(a4.toString()), endTime: Number.parseInt(s3.toString()), final: o3, language: r3, firstReceivedTime: d3, lastReceivedTime: l2 };
              }));
            })(n3, this.transcriptionReceivedTimes);
            null == r2 || r2.emit(e.TrackEvent.TranscriptionReceived, a3), null == i3 || i3.emit(e.ParticipantEvent.TranscriptionReceived, a3, r2), this.emit(e.RoomEvent.TranscriptionReceived, a3, i3, r2);
          }, this.handleChatMessage = (t3, n3) => {
            const i3 = (function(e2) {
              const t4 = e2.id, n4 = e2.timestamp, i4 = e2.message, r2 = e2.editTimestamp;
              return { id: t4, timestamp: Number.parseInt(n4.toString()), editTimestamp: r2 ? Number.parseInt(r2.toString()) : void 0, message: i4 };
            })(n3);
            this.emit(e.RoomEvent.ChatMessage, i3, t3);
          }, this.handleMetrics = (t3, n3) => {
            this.emit(e.RoomEvent.MetricsReceived, t3, n3);
          }, this.handleDataStream = (e2, t3) => {
            this.incomingDataStreamManager.handleDataStreamPacket(e2, t3);
          }, this.bufferedSegments = /* @__PURE__ */ new Map(), this.handleAudioPlaybackStarted = () => {
            this.canPlaybackAudio || (this.audioEnabled = true, this.emit(e.RoomEvent.AudioPlaybackStatusChanged, true));
          }, this.handleAudioPlaybackFailed = (t3) => {
            this.log.warn("could not playback audio", { error: t3 }), this.canPlaybackAudio && (this.audioEnabled = false, this.emit(e.RoomEvent.AudioPlaybackStatusChanged, false));
          }, this.handleVideoPlaybackStarted = () => {
            this.isVideoPlaybackBlocked && (this.isVideoPlaybackBlocked = false, this.emit(e.RoomEvent.VideoPlaybackStatusChanged, true));
          }, this.handleVideoPlaybackFailed = () => {
            this.isVideoPlaybackBlocked || (this.isVideoPlaybackBlocked = true, this.emit(e.RoomEvent.VideoPlaybackStatusChanged, false));
          }, this.handleDeviceChange = () => Yi(this, void 0, void 0, (function* () {
            var t3;
            "iOS" !== (null === (t3 = ga()) || void 0 === t3 ? void 0 : t3.os) && (yield this.selectDefaultDevices()), this.emit(e.RoomEvent.MediaDevicesChanged);
          })), this.handleRoomUpdate = (t3) => {
            const n3 = this.roomInfo;
            this.roomInfo = t3, n3 && n3.metadata !== t3.metadata && this.emitWhenConnected(e.RoomEvent.RoomMetadataChanged, t3.metadata), (null == n3 ? void 0 : n3.activeRecording) !== t3.activeRecording && this.emitWhenConnected(e.RoomEvent.RecordingStatusChanged, t3.activeRecording);
          }, this.handleConnectionQualityUpdate = (e2) => {
            e2.updates.forEach(((e3) => {
              if (e3.participantSid === this.localParticipant.sid) return void this.localParticipant.setConnectionQuality(e3.quality);
              const t3 = this.getRemoteParticipantBySid(e3.participantSid);
              t3 && t3.setConnectionQuality(e3.quality);
            }));
          }, this.getRemoteParticipantClientProtocol = (e2) => {
            var t3, n3;
            return null !== (n3 = null === (t3 = this.remoteParticipants.get(e2)) || void 0 === t3 ? void 0 : t3.clientProtocol) && void 0 !== n3 ? n3 : 0;
          }, this.onLocalParticipantMetadataChanged = (t3) => {
            this.emit(e.RoomEvent.ParticipantMetadataChanged, t3, this.localParticipant);
          }, this.onLocalParticipantNameChanged = (t3) => {
            this.emit(e.RoomEvent.ParticipantNameChanged, t3, this.localParticipant);
          }, this.onLocalAttributesChanged = (t3) => {
            this.emit(e.RoomEvent.ParticipantAttributesChanged, t3, this.localParticipant);
          }, this.onLocalTrackMuted = (t3) => {
            this.emit(e.RoomEvent.TrackMuted, t3, this.localParticipant);
          }, this.onLocalTrackUnmuted = (t3) => {
            this.emit(e.RoomEvent.TrackUnmuted, t3, this.localParticipant);
          }, this.onTrackProcessorUpdate = (e2) => {
            var t3;
            null === (t3 = null == e2 ? void 0 : e2.onPublish) || void 0 === t3 || t3.call(e2, this);
          }, this.onLocalTrackPublished = (t3) => Yi(this, void 0, void 0, (function* () {
            var n3, i3, r2, a3, s3, o3;
            if (null === (n3 = t3.track) || void 0 === n3 || n3.on(e.TrackEvent.TrackProcessorUpdate, this.onTrackProcessorUpdate), null === (i3 = t3.track) || void 0 === i3 || i3.on(e.TrackEvent.Restarted, this.onLocalTrackRestarted), null === (s3 = null === (a3 = null === (r2 = t3.track) || void 0 === r2 ? void 0 : r2.getProcessor()) || void 0 === a3 ? void 0 : a3.onPublish) || void 0 === s3 || s3.call(a3, this), this.emit(e.RoomEvent.LocalTrackPublished, t3, this.localParticipant), so(t3.track)) {
              (yield t3.track.checkForSilence()) && this.emit(e.RoomEvent.LocalAudioSilenceDetected, t3);
            }
            const c3 = yield null === (o3 = t3.track) || void 0 === o3 ? void 0 : o3.getDeviceId(false), d3 = rs(t3.source);
            d3 && c3 && c3 !== this.localParticipant.activeDeviceMap.get(d3) && (this.localParticipant.activeDeviceMap.set(d3, c3), this.emit(e.RoomEvent.ActiveDeviceChanged, d3, c3));
          })), this.onLocalTrackUnpublished = (t3) => {
            var n3, i3;
            null === (n3 = t3.track) || void 0 === n3 || n3.off(e.TrackEvent.TrackProcessorUpdate, this.onTrackProcessorUpdate), null === (i3 = t3.track) || void 0 === i3 || i3.off(e.TrackEvent.Restarted, this.onLocalTrackRestarted), this.emit(e.RoomEvent.LocalTrackUnpublished, t3, this.localParticipant);
          }, this.onLocalTrackRestarted = (t3) => Yi(this, void 0, void 0, (function* () {
            const n3 = yield t3.getDeviceId(false), i3 = rs(t3.source);
            i3 && n3 && n3 !== this.localParticipant.activeDeviceMap.get(i3) && (this.log.debug("local track restarted, setting ".concat(i3, " ").concat(n3, " active")), this.localParticipant.activeDeviceMap.set(i3, n3), this.emit(e.RoomEvent.ActiveDeviceChanged, i3, n3));
          })), this.onLocalConnectionQualityChanged = (t3) => {
            this.emit(e.RoomEvent.ConnectionQualityChanged, t3, this.localParticipant);
          }, this.onMediaDevicesError = (t3, n3) => {
            this.emit(e.RoomEvent.MediaDevicesError, t3, n3);
          }, this.onLocalParticipantPermissionsChanged = (t3) => {
            this.emit(e.RoomEvent.ParticipantPermissionsChanged, t3, this.localParticipant);
          }, this.onLocalChatMessageSent = (t3) => {
            this.emit(e.RoomEvent.ChatMessage, t3, this.localParticipant);
          }, this.setMaxListeners(100), this.remoteParticipants = /* @__PURE__ */ new Map(), this.sidToIdentity = /* @__PURE__ */ new Map(), this.options = Object.assign(Object.assign({}, jc), t2), this.log = Wi(null !== (i2 = this.options.loggerName) && void 0 !== i2 ? i2 : e.LoggerNames.Room, (() => this.logContext)), this.transcriptionReceivedTimes = /* @__PURE__ */ new Map(), this.options.audioCaptureDefaults = Object.assign(Object.assign({}, Fc), null == t2 ? void 0 : t2.audioCaptureDefaults), this.options.videoCaptureDefaults = Object.assign(Object.assign({}, Bc), null == t2 ? void 0 : t2.videoCaptureDefaults), this.options.publishDefaults = Object.assign(Object.assign({}, Uc), null == t2 ? void 0 : t2.publishDefaults), this.maybeCreateEngine(), this.incomingDataStreamManager = new Cd(), this.outgoingDataStreamManager = new Id(this.engine, this.log), this.incomingDataTrackManager = new il({ e2eeManager: this.e2eeManager }), this.incomingDataTrackManager.on("sfuUpdateSubscription", ((e2) => {
            this.engine.client.sendUpdateDataSubscription(e2.sid, e2.subscribe);
          })).on("trackPublished", ((t3) => {
            var n3;
            t3.track.publisherIdentity !== this.localParticipant.identity && (this.emit(e.RoomEvent.DataTrackPublished, t3.track), null === (n3 = this.remoteParticipants.get(t3.track.publisherIdentity)) || void 0 === n3 || n3.addRemoteDataTrack(t3.track));
          })).on("trackUnpublished", ((t3) => {
            var n3;
            t3.publisherIdentity !== this.localParticipant.identity && (this.emit(e.RoomEvent.DataTrackUnpublished, t3.sid), null === (n3 = this.remoteParticipants.get(t3.publisherIdentity)) || void 0 === n3 || n3.removeRemoteDataTrack(t3.sid));
          })), this.outgoingDataTrackManager = new fl({ e2eeManager: this.e2eeManager }), this.outgoingDataTrackManager.on("sfuPublishRequest", ((e2) => {
            this.engine.client.sendPublishDataTrackRequest(e2.handle, e2.name, e2.usesE2ee);
          })).on("sfuUnpublishRequest", ((e2) => {
            this.engine.client.sendUnPublishDataTrackRequest(e2.handle);
          })).on("trackPublished", ((t3) => {
            this.emit(e.RoomEvent.LocalDataTrackPublished, t3.track);
          })).on("trackUnpublished", ((t3) => {
            this.emit(e.RoomEvent.LocalDataTrackUnpublished, t3.sid);
          })).on("packetAvailable", ((e2) => {
            let t3 = e2.handle, n3 = e2.bytes;
            this.engine.sendLossyBytes(n3, vd.DATA_TRACK_LOSSY, "wait").finally((() => this.outgoingDataTrackManager.handlePacketSendComplete(t3)));
          })), this.registerRpcDataStreamHandler(), this.rpcClientManager = new Cl(this.log, this.outgoingDataStreamManager, this.getRemoteParticipantClientProtocol, (() => {
            var e2, t3;
            return null === (t3 = null === (e2 = this.engine.latestJoinResponse) || void 0 === e2 ? void 0 : e2.serverInfo) || void 0 === t3 ? void 0 : t3.version;
          })), this.rpcClientManager.on("sendDataPacket", ((e2) => {
            let t3 = e2.packet;
            var n3;
            null === (n3 = this.engine) || void 0 === n3 || n3.sendDataPacket(t3, vd.RELIABLE);
          })), this.rpcServerManager = new wl(this.log, this.outgoingDataStreamManager, this.getRemoteParticipantClientProtocol), this.rpcServerManager.on("sendDataPacket", ((e2) => {
            let t3 = e2.packet;
            var n3;
            null === (n3 = this.engine) || void 0 === n3 || n3.sendDataPacket(t3, vd.RELIABLE);
          })), this.disconnectLock = new r(), this.localParticipant = new xl("", "", this.engine, this.options, this.outgoingDataStreamManager, this.outgoingDataTrackManager, this.rpcClientManager, this.rpcServerManager), this.setupFrameMetadata(), (this.options.e2ee || this.options.encryption) && this.setupE2EE(), this.engine.e2eeManager = this.e2eeManager, this.incomingDataTrackManager.updateE2eeManager(null !== (a2 = this.e2eeManager) && void 0 !== a2 ? a2 : null), this.outgoingDataTrackManager.updateE2eeManager(null !== (s2 = this.e2eeManager) && void 0 !== s2 ? s2 : null), this.options.videoCaptureDefaults.deviceId && this.localParticipant.activeDeviceMap.set("videoinput", Xs(this.options.videoCaptureDefaults.deviceId)), this.options.audioCaptureDefaults.deviceId && this.localParticipant.activeDeviceMap.set("audioinput", Xs(this.options.audioCaptureDefaults.deviceId)), (null === (o2 = this.options.audioOutput) || void 0 === o2 ? void 0 : o2.deviceId) && this.switchActiveDevice("audiooutput", Xs(this.options.audioOutput.deviceId)).catch(((e2) => this.log.warn("Could not set audio output: ".concat(e2.message)))), _s()) {
            const e2 = new AbortController();
            let t3;
            if (jl.cleanupRegistry) {
              const n3 = new WeakRef(this);
              t3 = () => {
                const e3 = n3.deref();
                e3 && e3.handleDeviceChange();
              }, jl.cleanupRegistry.register(this, (() => {
                e2.abort();
              }));
            } else t3 = this.handleDeviceChange;
            null === (d2 = null === (c2 = navigator.mediaDevices) || void 0 === c2 ? void 0 : c2.addEventListener) || void 0 === d2 || d2.call(c2, "devicechange", t3, { signal: e2.signal });
          }
        }
        registerTextStreamHandler(e2, t2) {
          return this.incomingDataStreamManager.registerTextStreamHandler(e2, t2);
        }
        unregisterTextStreamHandler(e2) {
          return this.incomingDataStreamManager.unregisterTextStreamHandler(e2);
        }
        registerByteStreamHandler(e2, t2) {
          return this.incomingDataStreamManager.registerByteStreamHandler(e2, t2);
        }
        unregisterByteStreamHandler(e2) {
          return this.incomingDataStreamManager.unregisterByteStreamHandler(e2);
        }
        registerRpcMethod(e2, t2) {
          this.rpcServerManager.registerRpcMethod(e2, t2);
        }
        unregisterRpcMethod(e2) {
          this.rpcServerManager.unregisterRpcMethod(e2);
        }
        setE2EEEnabled(e2) {
          return Yi(this, void 0, void 0, (function* () {
            const t2 = yield this.e2eeStateMutex.lock();
            try {
              if (!this.e2eeManager) throw Error("e2ee not configured, please set e2ee settings within the room options");
              this.isE2EEEnabled !== e2 && (yield this.localParticipant.setE2EEEnabled(e2), "" !== this.localParticipant.identity && this.e2eeManager.setParticipantCryptorEnabled(e2, this.localParticipant.identity));
            } finally {
              t2();
            }
          }));
        }
        setupE2EE() {
          var t2, n2;
          const i2 = !!this.options.encryption, r2 = this.options.encryption || this.options.e2ee;
          r2 && ("e2eeManager" in r2 ? (this.e2eeManager = r2.e2eeManager, this.e2eeManager.isDataChannelEncryptionEnabled = i2) : this.e2eeManager = new Vo(r2, i2), this.e2eeManager.on(e.EncryptionEvent.ParticipantEncryptionStatusChanged, ((t3, n3) => {
            uo(n3) && (this.isE2EEEnabled = t3), this.emit(e.RoomEvent.ParticipantEncryptionStatusChanged, t3, n3);
          })), this.e2eeManager.on(e.EncryptionEvent.EncryptionError, ((t3, n3) => {
            const i3 = n3 ? this.getParticipantByIdentity(n3) : void 0;
            this.emit(e.RoomEvent.EncryptionError, t3, i3);
          })), null === (t2 = this.e2eeManager) || void 0 === t2 || t2.setup(this), null === (n2 = this.e2eeManager) || void 0 === n2 || n2.setupEngine(this.engine));
        }
        setupFrameMetadata() {
          var e2;
          const t2 = null !== (e2 = this.options.frameMetadata) && void 0 !== e2 ? e2 : this.options.packetTrailer;
          this.frameMetadataManager = new Wo(t2), this.frameMetadataManager.setup(this);
        }
        get logContext() {
          var e2, t2, n2;
          return { room: this.name, roomID: null === (e2 = this.roomInfo) || void 0 === e2 ? void 0 : e2.sid, participant: null === (t2 = this.localParticipant) || void 0 === t2 ? void 0 : t2.identity, participantID: null === (n2 = this.localParticipant) || void 0 === n2 ? void 0 : n2.sid };
        }
        get isRecording() {
          var e2, t2;
          return null !== (t2 = null === (e2 = this.roomInfo) || void 0 === e2 ? void 0 : e2.activeRecording) && void 0 !== t2 && t2;
        }
        getSid() {
          return this.state === e.ConnectionState.Disconnected ? ha.resolve("") : this.roomInfo && "" !== this.roomInfo.sid ? ha.resolve(this.roomInfo.sid) : new ha(((t2, n2) => {
            const i2 = (n3) => {
              "" !== n3.sid && (this.engine.off(e.EngineEvent.RoomUpdate, i2), t2(n3.sid));
            };
            this.engine.on(e.EngineEvent.RoomUpdate, i2), this.once(e.RoomEvent.Disconnected, (() => {
              this.engine.off(e.EngineEvent.RoomUpdate, i2), n2(new Aa("Room disconnected before room server id was available"));
            }));
          }));
        }
        get name() {
          var e2, t2;
          return null !== (t2 = null === (e2 = this.roomInfo) || void 0 === e2 ? void 0 : e2.name) && void 0 !== t2 ? t2 : "";
        }
        get metadata() {
          var e2;
          return null === (e2 = this.roomInfo) || void 0 === e2 ? void 0 : e2.metadata;
        }
        get numParticipants() {
          var e2, t2;
          return null !== (t2 = null === (e2 = this.roomInfo) || void 0 === e2 ? void 0 : e2.numParticipants) && void 0 !== t2 ? t2 : 0;
        }
        get numPublishers() {
          var e2, t2;
          return null !== (t2 = null === (e2 = this.roomInfo) || void 0 === e2 ? void 0 : e2.numPublishers) && void 0 !== t2 ? t2 : 0;
        }
        maybeCreateEngine() {
          (!this.engine || !this.engine.isNewlyCreated && this.engine.isClosed) && (this.engine = new fd(this.options), this.engine.e2eeManager = this.e2eeManager, this.engine.on(e.EngineEvent.ParticipantUpdate, this.handleParticipantUpdates).on(e.EngineEvent.RoomUpdate, this.handleRoomUpdate).on(e.EngineEvent.SpeakersChanged, this.handleSpeakersChanged).on(e.EngineEvent.StreamStateChanged, this.handleStreamStateUpdate).on(e.EngineEvent.ConnectionQualityUpdate, this.handleConnectionQualityUpdate).on(e.EngineEvent.SubscriptionError, this.handleSubscriptionError).on(e.EngineEvent.SubscriptionPermissionUpdate, this.handleSubscriptionPermissionUpdate).on(e.EngineEvent.MediaTrackAdded, ((e2, t2, n2) => {
            this.onTrackAdded(e2, t2, n2);
          })).on(e.EngineEvent.Disconnected, ((e2) => {
            this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, e2);
          })).on(e.EngineEvent.ActiveSpeakersUpdate, this.handleActiveSpeakersUpdate).on(e.EngineEvent.DataPacketReceived, this.handleDataPacket).on(e.EngineEvent.Resuming, (() => {
            this.clearConnectionReconcile(), this.isResuming = true, this.log.debug("Resuming signal connection"), this.setAndEmitConnectionState(e.ConnectionState.SignalReconnecting) && this.emit(e.RoomEvent.SignalReconnecting);
          })).on(e.EngineEvent.Resumed, (() => {
            this.registerConnectionReconcile(), this.isResuming = false, this.log.debug("Resumed signal connection"), this.updateSubscriptions(), this.emitBufferedEvents(), this.setAndEmitConnectionState(e.ConnectionState.Connected) && this.emit(e.RoomEvent.Reconnected);
          })).on(e.EngineEvent.SignalResumed, (() => {
            this.bufferedEvents = [], (this.state === e.ConnectionState.Reconnecting || this.isResuming) && this.sendSyncState();
          })).on(e.EngineEvent.Restarting, this.handleRestarting).on(e.EngineEvent.Restarted, this.handleRestarted).on(e.EngineEvent.SignalRestarted, this.handleSignalRestarted).on(e.EngineEvent.Offline, (() => {
            this.setAndEmitConnectionState(e.ConnectionState.Reconnecting) && this.emit(e.RoomEvent.Reconnecting);
          })).on(e.EngineEvent.DCBufferStatusChanged, ((t2, n2) => {
            this.emit(e.RoomEvent.DCBufferStatusChanged, t2, n2);
          })).on(e.EngineEvent.LocalTrackSubscribed, ((e2) => {
            this.handleLocalTrackSubscribed(e2);
          })).on(e.EngineEvent.RoomMoved, ((t2) => {
            this.log.debug("room moved", t2), t2.room && this.handleRoomUpdate(t2.room), this.remoteParticipants.forEach(((e2, t3) => {
              this.handleParticipantDisconnected(t3, e2);
            })), this.emit(e.RoomEvent.Moved, t2.room.name), t2.participant ? this.handleParticipantUpdates([t2.participant, ...t2.otherParticipants]) : this.handleParticipantUpdates(t2.otherParticipants);
          })).on(e.EngineEvent.PublishDataTrackResponse, ((e2) => {
            e2.info ? this.outgoingDataTrackManager.receivedSfuPublishResponse(e2.info.pubHandle, { type: "ok", data: { sid: e2.info.sid, pubHandle: e2.info.pubHandle, name: e2.info.name, usesE2ee: e2.info.encryption !== ht.NONE } }) : this.log.warn("received PublishDataTrackResponse, but event.info was ".concat(e2.info, ", so skipping."));
          })).on(e.EngineEvent.UnPublishDataTrackResponse, ((e2) => {
            e2.info ? this.outgoingDataTrackManager.receivedSfuUnpublishResponse(e2.info.pubHandle) : this.log.warn("received UnPublishDataTrackResponse, but event.info was ".concat(e2.info, ", so skipping."));
          })).on(e.EngineEvent.DataTrackSubscriberHandles, ((e2) => {
            const t2 = new Map(Object.entries(e2.subHandles).map(((e3) => {
              let t3 = x(e3, 2), n2 = t3[0], i2 = t3[1];
              return [parseInt(n2, 10), i2.trackSid];
            })));
            this.incomingDataTrackManager.receivedSfuSubscriberHandles(t2);
          })).on(e.EngineEvent.DataTrackPacketReceived, ((e2) => {
            try {
              this.incomingDataTrackManager.packetReceived(e2);
            } catch (e3) {
              throw e3;
            }
          })).on(e.EngineEvent.Joined, ((e2) => {
            const t2 = new Map(e2.otherParticipants.map(((e3) => [e3.identity, e3.dataTracks.map(((e4) => ac.from(e4)))])));
            this.incomingDataTrackManager.receiveSfuPublicationUpdates(t2);
          })).on(e.EngineEvent.TokenRefreshed, ((e2) => {
            var t2;
            null === (t2 = this.regionUrlProvider) || void 0 === t2 || t2.updateToken(e2);
          })).on(e.EngineEvent.ServerRegionsReported, ((e2) => {
            var t2;
            null === (t2 = this.regionUrlProvider) || void 0 === t2 || t2.setServerReportedRegions({ regionSettings: e2, updatedAtInMs: Date.now(), maxAgeInMs: yd });
          })), this.localParticipant && this.localParticipant.setupEngine(this.engine), this.e2eeManager && this.e2eeManager.setupEngine(this.engine), this.outgoingDataStreamManager && this.outgoingDataStreamManager.setupEngine(this.engine));
        }
        createRegionStrategy() {
          return { getNextUrl: (e2) => Yi(this, void 0, void 0, (function* () {
            return this.regionUrlProvider ? this.regionUrlProvider.getNextBestRegionUrl(e2) : null;
          })), resetAttempts: () => {
            var e2;
            return null === (e2 = this.regionUrlProvider) || void 0 === e2 ? void 0 : e2.resetAttempts();
          } };
        }
        static getLocalDevices(e2) {
          let t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return Go.getInstance().getDevices(e2, t2);
        }
        prepareConnection(t2, n2) {
          return Yi(this, void 0, void 0, (function* () {
            if (this.state === e.ConnectionState.Disconnected) {
              this.log.debug("prepareConnection to ".concat(t2));
              try {
                if (As(new URL(t2)) && n2) {
                  this.regionUrlProvider = new bd(t2, n2);
                  const i2 = yield this.regionUrlProvider.getNextBestRegionUrl();
                  i2 && this.state === e.ConnectionState.Disconnected && (this.regionUrl = i2, yield fetch(Zs(i2), { method: "HEAD" }), this.log.debug("prepared connection to ".concat(i2)));
                } else yield fetch(Zs(t2), { method: "HEAD" });
              } catch (e2) {
                this.log.warn("could not prepare connection", { error: e2 });
              }
            }
          }));
        }
        getParticipantByIdentity(e2) {
          return this.localParticipant.identity === e2 ? this.localParticipant : this.remoteParticipants.get(e2);
        }
        clearConnectionFutures() {
          this.connectFuture = void 0;
        }
        simulateScenario(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            let n2, i2 = () => Yi(this, void 0, void 0, (function* () {
            }));
            switch (e2) {
              case "signal-reconnect":
                yield this.engine.client.handleOnClose("simulate disconnect");
                break;
              case "fail-on-v1-path":
                this.engine.failNextV1Path();
                break;
              case "speaker":
                n2 = new yi({ scenario: { case: "speakerUpdate", value: 3 } });
                break;
              case "node-failure":
                n2 = new yi({ scenario: { case: "nodeFailure", value: true } });
                break;
              case "server-leave":
                n2 = new yi({ scenario: { case: "serverLeave", value: true } });
                break;
              case "migration":
                n2 = new yi({ scenario: { case: "migration", value: true } });
                break;
              case "resume-reconnect":
                this.engine.failNext(), yield this.engine.client.handleOnClose("simulate resume-disconnect");
                break;
              case "disconnect-signal-on-resume":
                i2 = () => Yi(this, void 0, void 0, (function* () {
                  yield this.engine.client.handleOnClose("simulate resume-disconnect");
                })), n2 = new yi({ scenario: { case: "disconnectSignalOnResume", value: true } });
                break;
              case "disconnect-signal-on-resume-no-messages":
                i2 = () => Yi(this, void 0, void 0, (function* () {
                  yield this.engine.client.handleOnClose("simulate resume-disconnect");
                })), n2 = new yi({ scenario: { case: "disconnectSignalOnResumeNoMessages", value: true } });
                break;
              case "full-reconnect":
                this.engine.fullReconnectOnNext = true, yield this.engine.client.handleOnClose("simulate full-reconnect");
                break;
              case "force-tcp":
              case "force-tls":
                n2 = new yi({ scenario: { case: "switchCandidateProtocol", value: "force-tls" === e2 ? 2 : 1 } }), i2 = () => Yi(this, void 0, void 0, (function* () {
                  const e3 = this.engine.client.onLeave;
                  e3 && e3(new Xn({ reason: et.CLIENT_INITIATED, action: Zn.RECONNECT }));
                }));
                break;
              case "subscriber-bandwidth":
                if (void 0 === t2 || "number" != typeof t2) throw new Error("subscriber-bandwidth requires a number as argument");
                n2 = new yi({ scenario: { case: "subscriberBandwidth", value: to(t2) } });
                break;
              case "leave-full-reconnect":
                n2 = new yi({ scenario: { case: "leaveRequestFullReconnect", value: true } });
            }
            n2 && (yield this.engine.client.sendSimulateScenario(n2), yield i2());
          }));
        }
        get canPlaybackAudio() {
          return this.audioEnabled;
        }
        get canPlaybackVideo() {
          return !this.isVideoPlaybackBlocked;
        }
        getActiveDevice(e2) {
          return this.localParticipant.activeDeviceMap.get(e2);
        }
        switchActiveDevice(t2, n2) {
          return Yi(this, arguments, void 0, (function(t3, n3) {
            var i2 = this;
            let r2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return (function* () {
              var a2, s2, o2, c2, d2, l2, u2;
              let h2 = true, p2 = false;
              const m2 = r2 ? { exact: n3 } : n3;
              if ("audioinput" === t3) {
                p2 = 0 === i2.localParticipant.audioTrackPublications.size;
                const e2 = null !== (a2 = i2.getActiveDevice(t3)) && void 0 !== a2 ? a2 : i2.options.audioCaptureDefaults.deviceId;
                i2.options.audioCaptureDefaults.deviceId = m2;
                const n4 = Array.from(i2.localParticipant.audioTrackPublications.values()).filter(((e3) => e3.source === ps.Source.Microphone));
                try {
                  h2 = (yield Promise.all(n4.map(((e3) => {
                    var t4;
                    return null === (t4 = e3.audioTrack) || void 0 === t4 ? void 0 : t4.setDeviceId(m2);
                  })))).every(((e3) => true === e3));
                } catch (t4) {
                  throw i2.options.audioCaptureDefaults.deviceId = e2, t4;
                }
                const r3 = n4.some(((e3) => {
                  var t4, n5;
                  return null !== (n5 = null === (t4 = e3.track) || void 0 === t4 ? void 0 : t4.isMuted) && void 0 !== n5 && n5;
                }));
                h2 && r3 && (p2 = true);
              } else if ("videoinput" === t3) {
                p2 = 0 === i2.localParticipant.videoTrackPublications.size;
                const e2 = null !== (s2 = i2.getActiveDevice(t3)) && void 0 !== s2 ? s2 : i2.options.videoCaptureDefaults.deviceId;
                i2.options.videoCaptureDefaults.deviceId = m2;
                const n4 = Array.from(i2.localParticipant.videoTrackPublications.values()).filter(((e3) => e3.source === ps.Source.Camera));
                try {
                  h2 = (yield Promise.all(n4.map(((e3) => {
                    var t4;
                    return null === (t4 = e3.videoTrack) || void 0 === t4 ? void 0 : t4.setDeviceId(m2);
                  })))).every(((e3) => true === e3));
                } catch (t4) {
                  throw i2.options.videoCaptureDefaults.deviceId = e2, t4;
                }
                const r3 = n4.some(((e3) => {
                  var t4, n5;
                  return null !== (n5 = null === (t4 = e3.track) || void 0 === t4 ? void 0 : t4.isMuted) && void 0 !== n5 && n5;
                }));
                h2 && r3 && (p2 = true);
              } else if ("audiooutput" === t3) {
                if (p2 = true, !Es() && !i2.options.webAudioMix || i2.options.webAudioMix && i2.audioContext && !("setSinkId" in i2.audioContext)) throw new Error("cannot switch audio output, the current browser does not support it");
                i2.options.webAudioMix && (n3 = null !== (o2 = yield Go.getInstance().normalizeDeviceId("audiooutput", n3)) && void 0 !== o2 ? o2 : ""), null !== (c2 = (u2 = i2.options).audioOutput) && void 0 !== c2 || (u2.audioOutput = {});
                const e2 = null !== (d2 = i2.getActiveDevice(t3)) && void 0 !== d2 ? d2 : i2.options.audioOutput.deviceId;
                i2.options.audioOutput.deviceId = n3;
                try {
                  i2.options.webAudioMix && (null === (l2 = i2.audioContext) || void 0 === l2 || l2.setSinkId(n3)), yield Promise.all(Array.from(i2.remoteParticipants.values()).map(((e3) => e3.setAudioOutput({ deviceId: n3 }))));
                } catch (t4) {
                  throw i2.options.audioOutput.deviceId = e2, t4;
                }
              }
              return p2 && (i2.localParticipant.activeDeviceMap.set(t3, n3), i2.emit(e.RoomEvent.ActiveDeviceChanged, t3, n3)), h2;
            })();
          }));
        }
        setupLocalParticipantEvents() {
          this.localParticipant.on(e.ParticipantEvent.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged).on(e.ParticipantEvent.ParticipantNameChanged, this.onLocalParticipantNameChanged).on(e.ParticipantEvent.AttributesChanged, this.onLocalAttributesChanged).on(e.ParticipantEvent.TrackMuted, this.onLocalTrackMuted).on(e.ParticipantEvent.TrackUnmuted, this.onLocalTrackUnmuted).on(e.ParticipantEvent.LocalTrackPublished, this.onLocalTrackPublished).on(e.ParticipantEvent.LocalTrackUnpublished, this.onLocalTrackUnpublished).on(e.ParticipantEvent.ConnectionQualityChanged, this.onLocalConnectionQualityChanged).on(e.ParticipantEvent.MediaDevicesError, this.onMediaDevicesError).on(e.ParticipantEvent.AudioStreamAcquired, this.startAudio).on(e.ParticipantEvent.ChatMessage, this.onLocalChatMessageSent).on(e.ParticipantEvent.ParticipantPermissionsChanged, this.onLocalParticipantPermissionsChanged);
        }
        recreateEngine(e2) {
          const t2 = this.engine;
          e2 && t2 && !t2.client.isDisconnected ? t2.client.sendLeave().finally((() => t2.close())) : null == t2 || t2.close(), this.engine = void 0, this.isResuming = false, this.remoteParticipants.clear(), this.sidToIdentity.clear(), this.bufferedEvents = [], this.maybeCreateEngine();
        }
        onTrackAdded(t2, n2, i2) {
          if (this.state === e.ConnectionState.Connecting || this.state === e.ConnectionState.Reconnecting) {
            const r3 = () => {
              this.log.debug("deferring on track for later", { mediaTrackId: t2.id, mediaStreamId: n2.id, tracksInStream: n2.getTracks().map(((e2) => e2.id)) }), this.onTrackAdded(t2, n2, i2), a3();
            }, a3 = () => {
              this.off(e.RoomEvent.Reconnected, r3), this.off(e.RoomEvent.Connected, r3), this.off(e.RoomEvent.Disconnected, a3);
            };
            return this.once(e.RoomEvent.Reconnected, r3), this.once(e.RoomEvent.Connected, r3), void this.once(e.RoomEvent.Disconnected, a3);
          }
          if (this.state === e.ConnectionState.Disconnected) return void this.log.warn("skipping incoming track after Room disconnected");
          if ("ended" === t2.readyState) return void this.log.debug("skipping incoming track as it already ended");
          const r2 = (function(e2) {
            const t3 = e2.split("|");
            return t3.length > 1 ? [t3[0], e2.substr(t3[0].length + 1)] : [e2, ""];
          })(n2.id), a2 = r2[0];
          let s2 = r2[1], o2 = t2.id;
          if (s2 && s2.startsWith("TR") && (o2 = s2), a2 === this.localParticipant.sid) return void this.log.warn("tried to create RemoteParticipant for local participant");
          const c2 = Array.from(this.remoteParticipants.values()).find(((e2) => e2.sid === a2));
          if (!c2) return void (a2.startsWith("PA") && this.log.error("Tried to add a track for a participant, that's not present. Sid: ".concat(a2)));
          if (!o2.startsWith("TR")) {
            const e2 = this.engine.getTrackIdForReceiver(i2);
            if (!e2) return void this.log.error("Tried to add a track whose 'sid' could not be found for a participant, that's not present. Sid: ".concat(a2));
            o2 = e2;
          }
          let d2;
          o2.startsWith("TR") || this.log.warn("Tried to add a track whose 'sid' could not be determined for a participant, that's not present. Sid: ".concat(a2, ", streamId: ").concat(s2, ", trackId: ").concat(o2), { remoteParticipantID: a2, streamId: s2, trackId: o2 }), this.options.adaptiveStream && (d2 = "object" == typeof this.options.adaptiveStream ? this.options.adaptiveStream : {});
          const l2 = c2.addSubscribedMediaTrack(t2, o2, n2, i2, d2);
          (null == l2 ? void 0 : l2.isEncrypted) && !this.e2eeManager && this.emit(e.RoomEvent.EncryptionError, new Error("Encrypted ".concat(l2.source, " track received from participant ").concat(c2.sid, ", but room does not have encryption enabled!")));
        }
        handleLocalTrackSubscribed(t2) {
          const n2 = () => this.localParticipant.getTrackPublications().find(((e2) => e2.trackSid === t2)), i2 = n2();
          if (i2) return void this.emitLocalTrackSubscribed(i2);
          this.log.debug("deferring LocalTrackSubscribed, publication not yet available", { subscribedSid: t2 });
          let r2;
          const a2 = (e2) => {
            e2.trackSid === t2 && (s2(), this.emitLocalTrackSubscribed(e2));
          }, s2 = () => {
            clearTimeout(r2), this.localParticipant.off(e.ParticipantEvent.LocalTrackPublished, a2), this.off(e.RoomEvent.Disconnected, s2);
          };
          this.localParticipant.on(e.ParticipantEvent.LocalTrackPublished, a2), this.once(e.RoomEvent.Disconnected, s2), r2 = setTimeout((() => {
            s2();
            const e2 = n2();
            e2 ? this.emitLocalTrackSubscribed(e2) : this.log.warn("could not find local track publication for LocalTrackSubscribed event after timeout", { subscribedSid: t2 });
          }), 1e4);
        }
        emitLocalTrackSubscribed(t2) {
          this.localParticipant.emit(e.ParticipantEvent.LocalTrackSubscribed, t2), this.emitWhenConnected(e.RoomEvent.LocalTrackSubscribed, t2, this.localParticipant);
        }
        handleDisconnect() {
          let t2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], n2 = arguments.length > 1 ? arguments[1] : void 0;
          var i2, r2;
          if (this.clearConnectionReconcile(), this.isResuming = false, this.bufferedEvents = [], this.transcriptionReceivedTimes.clear(), this.incomingDataStreamManager.clearControllers(), this.incomingDataTrackManager.reset(), this.outgoingDataTrackManager.reset(), this.state !== e.ConnectionState.Disconnected) {
            this.regionUrl = void 0, this.regionUrlProvider && this.regionUrlProvider.notifyDisconnected();
            try {
              this.remoteParticipants.forEach(((e2) => {
                e2.trackPublications.forEach(((t3) => {
                  e2.unpublishTrack(t3.trackSid);
                }));
              })), this.localParticipant.trackPublications.forEach(((e2) => {
                var n3, i3, r3;
                e2.track && this.localParticipant.unpublishTrack(e2.track, t2), t2 ? (null === (n3 = e2.track) || void 0 === n3 || n3.detach(), null === (i3 = e2.track) || void 0 === i3 || i3.stop()) : null === (r3 = e2.track) || void 0 === r3 || r3.stopMonitor();
              })), this.localParticipant.off(e.ParticipantEvent.ParticipantMetadataChanged, this.onLocalParticipantMetadataChanged).off(e.ParticipantEvent.ParticipantNameChanged, this.onLocalParticipantNameChanged).off(e.ParticipantEvent.AttributesChanged, this.onLocalAttributesChanged).off(e.ParticipantEvent.TrackMuted, this.onLocalTrackMuted).off(e.ParticipantEvent.TrackUnmuted, this.onLocalTrackUnmuted).off(e.ParticipantEvent.LocalTrackPublished, this.onLocalTrackPublished).off(e.ParticipantEvent.LocalTrackUnpublished, this.onLocalTrackUnpublished).off(e.ParticipantEvent.ConnectionQualityChanged, this.onLocalConnectionQualityChanged).off(e.ParticipantEvent.MediaDevicesError, this.onMediaDevicesError).off(e.ParticipantEvent.AudioStreamAcquired, this.startAudio).off(e.ParticipantEvent.ChatMessage, this.onLocalChatMessageSent).off(e.ParticipantEvent.ParticipantPermissionsChanged, this.onLocalParticipantPermissionsChanged), this.localParticipant.trackPublications.clear(), this.localParticipant.videoTrackPublications.clear(), this.localParticipant.audioTrackPublications.clear(), this.remoteParticipants.clear(), this.sidToIdentity.clear(), this.activeSpeakers = [], this.audioContext && "boolean" == typeof this.options.webAudioMix && (this.audioContext.close(), this.audioContext = void 0), _s() && (window.removeEventListener("beforeunload", this.onPageLeave), window.removeEventListener("pagehide", this.onPageLeave), window.removeEventListener("freeze", this.onPageLeave), null === (r2 = null === (i2 = navigator.mediaDevices) || void 0 === i2 ? void 0 : i2.removeEventListener) || void 0 === r2 || r2.call(i2, "devicechange", this.handleDeviceChange));
            } finally {
              this.setAndEmitConnectionState(e.ConnectionState.Disconnected), this.emit(e.RoomEvent.Disconnected, n2);
            }
          }
        }
        handleParticipantDisconnected(t2, n2) {
          this.remoteParticipants.delete(t2), n2 && (this.incomingDataStreamManager.validateParticipantHasNoActiveDataStreams(t2), this.incomingDataTrackManager.handleRemoteParticipantDisconnected(t2), n2.trackPublications.forEach(((e2) => {
            n2.unpublishTrack(e2.trackSid, true);
          })), this.emit(e.RoomEvent.ParticipantDisconnected, n2), n2.setDisconnected(), this.rpcClientManager.handleParticipantDisconnected(n2.identity));
        }
        selectDefaultDevices() {
          return Yi(this, void 0, void 0, (function* () {
            var t2, n2, i2;
            const r2 = Go.getInstance().previousDevices, a2 = yield Go.getInstance().getDevices(void 0, false), s2 = ga();
            if ("Chrome" === (null == s2 ? void 0 : s2.name) && "iOS" !== s2.os) for (let t3 of a2) {
              const n3 = r2.find(((e2) => e2.deviceId === t3.deviceId));
              n3 && "" !== n3.label && n3.kind === t3.kind && n3.label !== t3.label && "default" === this.getActiveDevice(t3.kind) && this.emit(e.RoomEvent.ActiveDeviceChanged, t3.kind, t3.deviceId);
            }
            const o2 = ["audiooutput", "audioinput", "videoinput"];
            for (let e2 of o2) {
              const s3 = is(e2), o3 = this.localParticipant.getTrackPublication(s3);
              if (o3 && (null === (t2 = o3.track) || void 0 === t2 ? void 0 : t2.isUserProvided)) continue;
              const c2 = a2.filter(((t3) => t3.kind === e2)), d2 = this.getActiveDevice(e2);
              d2 === (null === (n2 = r2.filter(((t3) => t3.kind === e2))[0]) || void 0 === n2 ? void 0 : n2.deviceId) && c2.length > 0 && (null === (i2 = c2[0]) || void 0 === i2 ? void 0 : i2.deviceId) !== d2 ? yield this.switchActiveDevice(e2, c2[0].deviceId) : "audioinput" === e2 && !Is() || "videoinput" === e2 || !(c2.length > 0) || c2.find(((t3) => t3.deviceId === this.getActiveDevice(e2))) || "audiooutput" === e2 && Is() || (yield this.switchActiveDevice(e2, c2[0].deviceId));
            }
          }));
        }
        acquireAudioContext() {
          return Yi(this, void 0, void 0, (function* () {
            var t2, n2;
            if ("boolean" != typeof this.options.webAudioMix && this.options.webAudioMix.audioContext ? this.audioContext = this.options.webAudioMix.audioContext : this.audioContext && "closed" !== this.audioContext.state || (this.audioContext = null !== (t2 = ns()) && void 0 !== t2 ? t2 : void 0), this.options.webAudioMix && this.remoteParticipants.forEach(((e2) => e2.setAudioContext(this.audioContext))), this.localParticipant.setAudioContext(this.audioContext), this.audioContext && "suspended" === this.audioContext.state) try {
              yield Promise.race([this.audioContext.resume(), fs(200)]);
            } catch (e2) {
              this.log.warn("Could not resume audio context", { error: e2 });
            }
            const i2 = "running" === (null === (n2 = this.audioContext) || void 0 === n2 ? void 0 : n2.state);
            i2 !== this.canPlaybackAudio && (this.audioEnabled = i2, this.emit(e.RoomEvent.AudioPlaybackStatusChanged, i2));
          }));
        }
        createParticipant(e2, t2) {
          var n2;
          let i2;
          return i2 = t2 ? Bl.fromParticipantInfo(this.engine.client, t2, { loggerContextCb: () => this.logContext, loggerName: this.options.loggerName }, this.incomingDataTrackManager) : new Bl(this.engine.client, "", e2, void 0, void 0, void 0, { loggerContextCb: () => this.logContext, loggerName: this.options.loggerName }), this.options.webAudioMix && i2.setAudioContext(this.audioContext), (null === (n2 = this.options.audioOutput) || void 0 === n2 ? void 0 : n2.deviceId) && i2.setAudioOutput(this.options.audioOutput).catch(((e3) => this.log.warn("Could not set audio output: ".concat(e3.message)))), i2;
        }
        getOrCreateParticipant(t2, n2) {
          if (this.remoteParticipants.has(t2)) {
            const e2 = this.remoteParticipants.get(t2);
            if (n2) {
              e2.updateInfo(n2) && this.sidToIdentity.set(n2.sid, n2.identity);
            }
            return e2;
          }
          const i2 = this.createParticipant(t2, n2);
          return this.remoteParticipants.set(t2, i2), this.sidToIdentity.set(n2.sid, n2.identity), this.emitWhenConnected(e.RoomEvent.ParticipantConnected, i2), i2.on(e.ParticipantEvent.TrackPublished, ((t3) => {
            this.emitWhenConnected(e.RoomEvent.TrackPublished, t3, i2);
          })).on(e.ParticipantEvent.TrackSubscribed, ((t3, n3) => {
            t3.kind === ps.Kind.Audio ? (t3.on(e.TrackEvent.AudioPlaybackStarted, this.handleAudioPlaybackStarted), t3.on(e.TrackEvent.AudioPlaybackFailed, this.handleAudioPlaybackFailed)) : t3.kind === ps.Kind.Video && (t3.on(e.TrackEvent.VideoPlaybackFailed, this.handleVideoPlaybackFailed), t3.on(e.TrackEvent.VideoPlaybackStarted, this.handleVideoPlaybackStarted)), this.emitWhenConnected(e.RoomEvent.TrackSubscribed, t3, n3, i2);
          })).on(e.ParticipantEvent.TrackUnpublished, ((t3) => {
            this.emit(e.RoomEvent.TrackUnpublished, t3, i2);
          })).on(e.ParticipantEvent.TrackUnsubscribed, ((t3, n3) => {
            this.emit(e.RoomEvent.TrackUnsubscribed, t3, n3, i2);
          })).on(e.ParticipantEvent.TrackMuted, ((t3) => {
            this.emitWhenConnected(e.RoomEvent.TrackMuted, t3, i2);
          })).on(e.ParticipantEvent.TrackUnmuted, ((t3) => {
            this.emitWhenConnected(e.RoomEvent.TrackUnmuted, t3, i2);
          })).on(e.ParticipantEvent.ParticipantMetadataChanged, ((t3) => {
            this.emitWhenConnected(e.RoomEvent.ParticipantMetadataChanged, t3, i2);
          })).on(e.ParticipantEvent.ParticipantNameChanged, ((t3) => {
            this.emitWhenConnected(e.RoomEvent.ParticipantNameChanged, t3, i2);
          })).on(e.ParticipantEvent.AttributesChanged, ((t3) => {
            this.emitWhenConnected(e.RoomEvent.ParticipantAttributesChanged, t3, i2);
          })).on(e.ParticipantEvent.ConnectionQualityChanged, ((t3) => {
            this.emitWhenConnected(e.RoomEvent.ConnectionQualityChanged, t3, i2);
          })).on(e.ParticipantEvent.ParticipantPermissionsChanged, ((t3) => {
            this.emitWhenConnected(e.RoomEvent.ParticipantPermissionsChanged, t3, i2);
          })).on(e.ParticipantEvent.TrackSubscriptionStatusChanged, ((t3, n3) => {
            this.emitWhenConnected(e.RoomEvent.TrackSubscriptionStatusChanged, t3, n3, i2);
          })).on(e.ParticipantEvent.TrackSubscriptionFailed, ((t3, n3) => {
            this.emit(e.RoomEvent.TrackSubscriptionFailed, t3, i2, n3);
          })).on(e.ParticipantEvent.TrackSubscriptionPermissionChanged, ((t3, n3) => {
            this.emitWhenConnected(e.RoomEvent.TrackSubscriptionPermissionChanged, t3, n3, i2);
          })).on(e.ParticipantEvent.Active, (() => {
            this.emitWhenConnected(e.RoomEvent.ParticipantActive, i2), i2.kind === lt.AGENT && this.localParticipant.setActiveAgent(i2);
          })), n2 && i2.updateInfo(n2), i2;
        }
        sendSyncState() {
          const e2 = Array.from(this.remoteParticipants.values()).reduce(((e3, t3) => (e3.push(...t3.getTrackPublications()), e3)), []), t2 = this.localParticipant.getTrackPublications(), n2 = this.outgoingDataTrackManager.queryPublished();
          this.engine.sendSyncState(e2, t2, n2);
        }
        updateSubscriptions() {
          for (const e2 of this.remoteParticipants.values()) for (const t2 of e2.videoTrackPublications.values()) t2.isSubscribed && co(t2) && t2.emitTrackUpdate();
        }
        getRemoteParticipantBySid(e2) {
          const t2 = this.sidToIdentity.get(e2);
          if (t2) return this.remoteParticipants.get(t2);
        }
        registerRpcDataStreamHandler() {
          this.incomingDataStreamManager.registerTextStreamHandler(yl, ((e2, t2) => Yi(this, [e2, t2], void 0, (function(e3, t3) {
            var n2 = this;
            let i2 = t3.identity;
            return (function* () {
              var t4;
              const r2 = null !== (t4 = e3.info.attributes) && void 0 !== t4 ? t4 : {};
              yield n2.rpcServerManager.handleIncomingDataStream(e3, i2, r2);
            })();
          })))), this.incomingDataStreamManager.registerTextStreamHandler(bl, ((e2, t2) => Yi(this, [e2, t2], void 0, (function(e3, t3) {
            var n2 = this;
            let i2 = t3.identity;
            return (function* () {
              var t4;
              const r2 = null !== (t4 = e3.info.attributes) && void 0 !== t4 ? t4 : {};
              yield n2.rpcClientManager.handleIncomingDataStream(e3, i2, r2);
            })();
          }))));
        }
        registerConnectionReconcile() {
          this.clearConnectionReconcile();
          let e2 = 0;
          this.connectionReconcileInterval = ja.setInterval((() => {
            this.engine && !this.engine.isClosed && this.engine.verifyTransport() ? e2 = 0 : (e2++, this.log.warn("detected connection state mismatch", { numFailures: e2, engine: this.engine ? { closed: this.engine.isClosed, transportsConnectedOrConnecting: this.engine.verifyTransport() } : void 0 }), e2 >= 3 && (this.recreateEngine(), this.handleDisconnect(this.options.stopLocalTrackOnUnpublish, et.STATE_MISMATCH)));
          }), 4e3);
        }
        clearConnectionReconcile() {
          this.connectionReconcileInterval && ja.clearInterval(this.connectionReconcileInterval);
        }
        setAndEmitConnectionState(t2) {
          return t2 !== this.state && (this.log.info("connection state changed: ".concat(this.state, " -> ").concat(t2)), this.state = t2, this.incomingDataStreamManager.setConnected(t2 === e.ConnectionState.Connected), this.emit(e.RoomEvent.ConnectionStateChanged, this.state), true);
        }
        emitBufferedEvents() {
          this.bufferedEvents.forEach(((e2) => {
            let t2 = x(e2, 2), n2 = t2[0], i2 = t2[1];
            this.emit(n2, ...i2);
          })), this.bufferedEvents = [];
        }
        emitWhenConnected(t2) {
          for (var n2 = arguments.length, i2 = new Array(n2 > 1 ? n2 - 1 : 0), r2 = 1; r2 < n2; r2++) i2[r2 - 1] = arguments[r2];
          if (this.state === e.ConnectionState.Reconnecting || this.isResuming || !this.engine || this.engine.pendingReconnect) this.bufferedEvents.push([t2, i2]);
          else if (this.state === e.ConnectionState.Connected) return this.emit(t2, ...i2);
          return false;
        }
        simulateParticipants(t2) {
          return Yi(this, void 0, void 0, (function* () {
            var n2, i2, r2, a2;
            const s2 = Object.assign({ audio: true, video: true, useRealTracks: false }, t2.publish), o2 = Object.assign({ count: 9, audio: false, video: true, aspectRatios: [1.66, 1.7, 1.3] }, t2.participants);
            if (this.handleDisconnect(), this.roomInfo = new at({ sid: "RM_SIMULATED", name: "simulated-room", emptyTimeout: 0, maxParticipants: 0, creationTime: R.parse((/* @__PURE__ */ new Date()).getTime()), metadata: "", numParticipants: 1, numPublishers: 1, turnPassword: "", enabledCodecs: [], activeRecording: false }), this.localParticipant.updateInfo(new ct({ identity: "simulated-local", name: "local-name" })), this.setupLocalParticipantEvents(), this.emit(e.RoomEvent.SignalConnected), this.emit(e.RoomEvent.Connected), this.setAndEmitConnectionState(e.ConnectionState.Connected), s2.video) {
              const t3 = new Il(ps.Kind.Video, new mt({ source: Ye.CAMERA, sid: Math.floor(1e4 * Math.random()).toString(), type: Qe.AUDIO, name: "video-dummy" }), new od(s2.useRealTracks && (null === (n2 = window.navigator.mediaDevices) || void 0 === n2 ? void 0 : n2.getUserMedia) ? (yield window.navigator.mediaDevices.getUserMedia({ video: true })).getVideoTracks()[0] : Js(160 * (null !== (i2 = o2.aspectRatios[0]) && void 0 !== i2 ? i2 : 1), 160, true, true), void 0, false, { loggerName: this.options.loggerName, loggerContextCb: () => this.logContext }), { loggerName: this.options.loggerName, loggerContextCb: () => this.logContext });
              this.localParticipant.addTrackPublication(t3), this.localParticipant.emit(e.ParticipantEvent.LocalTrackPublished, t3);
            }
            if (s2.audio) {
              const t3 = new Il(ps.Kind.Audio, new mt({ source: Ye.MICROPHONE, sid: Math.floor(1e4 * Math.random()).toString(), type: Qe.AUDIO }), new Gc(s2.useRealTracks && (null === (r2 = navigator.mediaDevices) || void 0 === r2 ? void 0 : r2.getUserMedia) ? (yield navigator.mediaDevices.getUserMedia({ audio: true })).getAudioTracks()[0] : Gs(), void 0, false, this.audioContext, { loggerName: this.options.loggerName, loggerContextCb: () => this.logContext }), { loggerName: this.options.loggerName, loggerContextCb: () => this.logContext });
              this.localParticipant.addTrackPublication(t3), this.localParticipant.emit(e.ParticipantEvent.LocalTrackPublished, t3);
            }
            for (let e2 = 0; e2 < o2.count - 1; e2 += 1) {
              let t3 = new ct({ sid: Math.floor(1e4 * Math.random()).toString(), identity: "simulated-".concat(e2), state: dt.ACTIVE, tracks: [], joinedAt: R.parse(Date.now()) });
              const n3 = this.getOrCreateParticipant(t3.identity, t3);
              if (o2.video) {
                const i3 = Js(160 * (null !== (a2 = o2.aspectRatios[e2 % o2.aspectRatios.length]) && void 0 !== a2 ? a2 : 1), 160, false, true), r3 = new mt({ source: Ye.CAMERA, sid: Math.floor(1e4 * Math.random()).toString(), type: Qe.AUDIO });
                n3.addSubscribedMediaTrack(i3, r3.sid, new MediaStream([i3]), new RTCRtpReceiver()), t3.tracks = [...t3.tracks, r3];
              }
              if (o2.audio) {
                const e3 = Gs(), i3 = new mt({ source: Ye.MICROPHONE, sid: Math.floor(1e4 * Math.random()).toString(), type: Qe.AUDIO });
                n3.addSubscribedMediaTrack(e3, i3.sid, new MediaStream([e3]), new RTCRtpReceiver()), t3.tracks = [...t3.tracks, i3];
              }
              n3.updateInfo(t3);
            }
          }));
        }
        emit(t2) {
          for (var n2 = arguments.length, i2 = new Array(n2 > 1 ? n2 - 1 : 0), r2 = 1; r2 < n2; r2++) i2[r2 - 1] = arguments[r2];
          if (t2 !== e.RoomEvent.ActiveSpeakersChanged && t2 !== e.RoomEvent.TranscriptionReceived) {
            const n3 = ql(i2).filter(((e2) => void 0 !== e2));
            t2 !== e.RoomEvent.TrackSubscribed && t2 !== e.RoomEvent.TrackUnsubscribed || this.log.trace("subscribe trace: ".concat(t2), { event: t2, args: n3 }), this.log.debug("room event ".concat(t2), { event: t2, args: n3 });
          }
          return super.emit(t2, ...i2);
        }
      }
      function ql(e2) {
        return e2.map(((e3) => {
          if (e3) return Array.isArray(e3) ? ql(e3) : "object" == typeof e3 ? "logContext" in e3 ? e3.logContext : void 0 : e3;
        }));
      }
      jl.cleanupRegistry = "undefined" != typeof FinalizationRegistry && "undefined" != typeof WeakRef && new FinalizationRegistry(((e2) => {
        e2();
      }));
      var Vl, Hl = Object.freeze({ __proto__: null, Convert: class {
        static toAgentAttributes(e2) {
          return JSON.parse(e2);
        }
        static agentAttributesToJson(e2) {
          return JSON.stringify(e2);
        }
        static toTranscriptionAttributes(e2) {
          return JSON.parse(e2);
        }
        static transcriptionAttributesToJson(e2) {
          return JSON.stringify(e2);
        }
      } });
      e.CheckStatus = void 0, (Vl = e.CheckStatus || (e.CheckStatus = {}))[Vl.IDLE = 0] = "IDLE", Vl[Vl.RUNNING = 1] = "RUNNING", Vl[Vl.SKIPPED = 2] = "SKIPPED", Vl[Vl.SUCCESS = 3] = "SUCCESS", Vl[Vl.FAILED = 4] = "FAILED";
      class Wl extends ir.EventEmitter {
        constructor(t2, n2) {
          let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          super(), this.status = e.CheckStatus.IDLE, this.logs = [], this.options = {}, this.url = t2, this.token = n2, this.name = this.constructor.name, this.room = new jl(i2.roomOptions), this.connectOptions = i2.connectOptions, this.options = i2;
        }
        run(t2) {
          return Yi(this, void 0, void 0, (function* () {
            if (this.status !== e.CheckStatus.IDLE) throw Error("check is running already");
            this.setStatus(e.CheckStatus.RUNNING);
            try {
              yield this.perform();
            } catch (e2) {
              e2 instanceof Error && (this.options.errorsAsWarnings ? this.appendWarning(e2.message) : this.appendError(e2.message));
            }
            return yield this.disconnect(), yield new Promise(((e2) => setTimeout(e2, 500))), this.status !== e.CheckStatus.SKIPPED && this.setStatus(this.isSuccess() ? e.CheckStatus.SUCCESS : e.CheckStatus.FAILED), t2 && t2(), this.getInfo();
          }));
        }
        isSuccess() {
          return !this.logs.some(((e2) => "error" === e2.level));
        }
        connect(t2) {
          return Yi(this, void 0, void 0, (function* () {
            return this.room.state === e.ConnectionState.Connected || (t2 || (t2 = this.url), yield this.room.connect(t2, this.token, this.connectOptions)), this.room;
          }));
        }
        disconnect() {
          return Yi(this, void 0, void 0, (function* () {
            this.room && this.room.state !== e.ConnectionState.Disconnected && (yield this.room.disconnect(), yield new Promise(((e2) => setTimeout(e2, 500))));
          }));
        }
        skip() {
          this.setStatus(e.CheckStatus.SKIPPED);
        }
        switchProtocol(t2) {
          return Yi(this, void 0, void 0, (function* () {
            let n2 = false, i2 = false;
            if (this.room.on(e.RoomEvent.Reconnecting, (() => {
              n2 = true;
            })), this.room.once(e.RoomEvent.Reconnected, (() => {
              i2 = true;
            })), this.room.simulateScenario("force-".concat(t2)), yield new Promise(((e2) => setTimeout(e2, 1e3))), !n2) return;
            const r2 = Date.now() + 1e4;
            for (; Date.now() < r2; ) {
              if (i2) return;
              yield fs(100);
            }
            throw new Error("Could not reconnect using ".concat(t2, " protocol after 10 seconds"));
          }));
        }
        appendMessage(e2) {
          this.logs.push({ level: "info", message: e2 }), this.emit("update", this.getInfo());
        }
        appendWarning(e2) {
          this.logs.push({ level: "warning", message: e2 }), this.emit("update", this.getInfo());
        }
        appendError(e2) {
          this.logs.push({ level: "error", message: e2 }), this.emit("update", this.getInfo());
        }
        setStatus(e2) {
          this.status = e2, this.emit("update", this.getInfo());
        }
        get engine() {
          var e2;
          return null === (e2 = this.room) || void 0 === e2 ? void 0 : e2.engine;
        }
        getInfo() {
          return { logs: this.logs, name: this.name, status: this.status, description: this.description };
        }
      }
      class Kl extends Wl {
        get description() {
          return "Cloud regions";
        }
        perform() {
          return Yi(this, void 0, void 0, (function* () {
            const e2 = new bd(this.url, this.token);
            if (!e2.isCloud()) return void this.skip();
            const t2 = [], n2 = /* @__PURE__ */ new Set();
            for (let i3 = 0; i3 < 3; i3++) {
              const i4 = yield e2.getNextBestRegionUrl();
              if (!i4) break;
              if (n2.has(i4)) continue;
              n2.add(i4);
              const r2 = yield this.checkCloudRegion(i4);
              this.appendMessage("".concat(r2.region, " RTT: ").concat(r2.rtt, "ms, duration: ").concat(r2.duration, "ms")), t2.push(r2);
            }
            t2.sort(((e3, t3) => 0.5 * (e3.duration - t3.duration) + 0.5 * (e3.rtt - t3.rtt)));
            const i2 = t2[0];
            this.bestStats = i2, this.appendMessage("best Cloud region: ".concat(i2.region));
          }));
        }
        getInfo() {
          const e2 = super.getInfo();
          return e2.data = this.bestStats, e2;
        }
        checkCloudRegion(e2) {
          return Yi(this, void 0, void 0, (function* () {
            var t2, n2;
            yield this.connect(e2), "tcp" === this.options.protocol && (yield this.switchProtocol("tcp"));
            const i2 = null === (t2 = this.room.serverInfo) || void 0 === t2 ? void 0 : t2.region;
            if (!i2) throw new Error("Region not found");
            const r2 = yield this.room.localParticipant.streamText({ topic: "test" }), a2 = "A".repeat(1e3), s2 = Date.now();
            for (let e3 = 0; e3 < 1e3; e3++) yield r2.write(a2);
            yield r2.close();
            const o2 = Date.now(), c2 = yield null === (n2 = this.room.engine.pcManager) || void 0 === n2 ? void 0 : n2.publisher.getStats(), d2 = { region: i2, rtt: 1e4, duration: o2 - s2 };
            return null == c2 || c2.forEach(((e3) => {
              "candidate-pair" === e3.type && e3.nominated && (d2.rtt = 1e3 * e3.currentRoundTripTime);
            })), yield this.disconnect(), d2;
          }));
        }
      }
      const zl = 1e4;
      class Jl extends Wl {
        get description() {
          return "Connection via UDP vs TCP";
        }
        perform() {
          return Yi(this, void 0, void 0, (function* () {
            const e2 = yield this.checkConnectionProtocol("udp"), t2 = yield this.checkConnectionProtocol("tcp");
            this.bestStats = e2, e2.qualityLimitationDurations.bandwidth - t2.qualityLimitationDurations.bandwidth > 0.5 || (e2.packetsLost - t2.packetsLost) / e2.packetsSent > 0.01 ? (this.appendMessage("best connection quality via tcp"), this.bestStats = t2) : this.appendMessage("best connection quality via udp");
            const n2 = this.bestStats;
            this.appendMessage("upstream bitrate: ".concat((n2.bitrateTotal / n2.count / 1e3 / 1e3).toFixed(2), " mbps")), this.appendMessage("RTT: ".concat((n2.rttTotal / n2.count * 1e3).toFixed(2), " ms")), this.appendMessage("jitter: ".concat((n2.jitterTotal / n2.count * 1e3).toFixed(2), " ms")), n2.packetsLost > 0 && this.appendWarning("packets lost: ".concat((n2.packetsLost / n2.packetsSent * 100).toFixed(2), "%")), n2.qualityLimitationDurations.bandwidth > 1 && this.appendWarning("bandwidth limited ".concat((n2.qualityLimitationDurations.bandwidth / 10 * 100).toFixed(2), "%")), n2.qualityLimitationDurations.cpu > 0 && this.appendWarning("cpu limited ".concat((n2.qualityLimitationDurations.cpu / 10 * 100).toFixed(2), "%"));
          }));
        }
        getInfo() {
          const e2 = super.getInfo();
          return e2.data = this.bestStats, e2;
        }
        checkConnectionProtocol(e2) {
          return Yi(this, void 0, void 0, (function* () {
            yield this.connect(), "tcp" === e2 ? yield this.switchProtocol("tcp") : yield this.switchProtocol("udp");
            const t2 = document.createElement("canvas");
            t2.width = 1280, t2.height = 720;
            const n2 = t2.getContext("2d");
            if (!n2) throw new Error("Could not get canvas context");
            let i2 = 0;
            const r2 = () => {
              i2 = (i2 + 1) % 360, n2.fillStyle = "hsl(".concat(i2, ", 100%, 50%)"), n2.fillRect(0, 0, t2.width, t2.height), requestAnimationFrame(r2);
            };
            r2();
            const a2 = t2.captureStream(30).getVideoTracks()[0], s2 = (yield this.room.localParticipant.publishTrack(a2, { simulcast: false, degradationPreference: "maintain-resolution", videoEncoding: { maxBitrate: 2e6 } })).track, o2 = { protocol: e2, packetsLost: 0, packetsSent: 0, qualityLimitationDurations: {}, rttTotal: 0, jitterTotal: 0, bitrateTotal: 0, count: 0 }, c2 = setInterval((() => Yi(this, void 0, void 0, (function* () {
              const e3 = yield s2.getRTCStatsReport();
              null == e3 || e3.forEach(((e4) => {
                "outbound-rtp" === e4.type ? (o2.packetsSent = e4.packetsSent, o2.qualityLimitationDurations = e4.qualityLimitationDurations, o2.bitrateTotal += e4.targetBitrate, o2.count++) : "remote-inbound-rtp" === e4.type && (o2.packetsLost = e4.packetsLost, o2.rttTotal += e4.roundTripTime, o2.jitterTotal += e4.jitter);
              }));
            }))), 1e3);
            return yield new Promise(((e3) => setTimeout(e3, zl))), clearInterval(c2), a2.stop(), t2.remove(), yield this.disconnect(), o2;
          }));
        }
      }
      class Gl extends Wl {
        get description() {
          return "Can publish audio";
        }
        perform() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            const t2 = yield this.connect(), n2 = yield _l();
            if (yield ts(n2, 1e3)) throw new Error("unable to detect audio from microphone");
            this.appendMessage("detected audio from microphone"), t2.localParticipant.publishTrack(n2), yield new Promise(((e3) => setTimeout(e3, 3e3)));
            const i2 = yield null === (e2 = n2.sender) || void 0 === e2 ? void 0 : e2.getStats();
            if (!i2) throw new Error("Could not get RTCStats");
            let r2 = 0;
            if (i2.forEach(((e3) => {
              "outbound-rtp" !== e3.type || "audio" !== e3.kind && (e3.kind || "audio" !== e3.mediaType) || (r2 = e3.packetsSent);
            })), 0 === r2) throw new Error("Could not determine packets are sent");
            this.appendMessage("published ".concat(r2, " audio packets"));
          }));
        }
      }
      class Ql extends Wl {
        get description() {
          return "Can publish video";
        }
        perform() {
          return Yi(this, void 0, void 0, (function* () {
            var e2;
            const t2 = yield this.connect(), n2 = yield Ml();
            yield this.checkForVideo(n2.mediaStreamTrack), t2.localParticipant.publishTrack(n2), yield new Promise(((e3) => setTimeout(e3, 5e3)));
            const i2 = yield null === (e2 = n2.sender) || void 0 === e2 ? void 0 : e2.getStats();
            if (!i2) throw new Error("Could not get RTCStats");
            let r2 = 0;
            if (i2.forEach(((e3) => {
              "outbound-rtp" !== e3.type || "video" !== e3.kind && (e3.kind || "video" !== e3.mediaType) || (r2 += e3.packetsSent);
            })), 0 === r2) throw new Error("Could not determine packets are sent");
            this.appendMessage("published ".concat(r2, " video packets"));
          }));
        }
        checkForVideo(e2) {
          return Yi(this, void 0, void 0, (function* () {
            const t2 = new MediaStream();
            t2.addTrack(e2.clone());
            const n2 = document.createElement("video");
            n2.srcObject = t2, n2.muted = true, n2.autoplay = true, n2.playsInline = true, n2.setAttribute("playsinline", "true"), document.body.appendChild(n2), yield new Promise(((t3) => {
              n2.onplay = () => {
                setTimeout((() => {
                  var i2, r2, a2, s2;
                  const o2 = document.createElement("canvas"), c2 = e2.getSettings(), d2 = null !== (r2 = null !== (i2 = c2.width) && void 0 !== i2 ? i2 : n2.videoWidth) && void 0 !== r2 ? r2 : 1280, l2 = null !== (s2 = null !== (a2 = c2.height) && void 0 !== a2 ? a2 : n2.videoHeight) && void 0 !== s2 ? s2 : 720;
                  o2.width = d2, o2.height = l2;
                  const u2 = o2.getContext("2d");
                  u2.drawImage(n2, 0, 0);
                  const h2 = u2.getImageData(0, 0, o2.width, o2.height).data;
                  let p2 = true;
                  for (let e3 = 0; e3 < h2.length; e3 += 4) if (0 !== h2[e3] || 0 !== h2[e3 + 1] || 0 !== h2[e3 + 2]) {
                    p2 = false;
                    break;
                  }
                  p2 ? this.appendError("camera appears to be producing only black frames") : this.appendMessage("received video frames"), t3();
                }), 1e3);
              }, n2.play();
            })), t2.getTracks().forEach(((e3) => e3.stop())), n2.remove();
          }));
        }
      }
      class Yl extends Wl {
        get description() {
          return "Resuming connection after interruption";
        }
        perform() {
          return Yi(this, void 0, void 0, (function* () {
            var t2;
            const n2 = yield this.connect();
            let i2, r2 = false, a2 = false;
            const s2 = new Promise(((e2) => {
              setTimeout(e2, 5e3), i2 = e2;
            })), o2 = () => {
              r2 = true;
            };
            n2.on(e.RoomEvent.SignalReconnecting, o2).on(e.RoomEvent.Reconnecting, o2).on(e.RoomEvent.Reconnected, (() => {
              a2 = true, i2(true);
            })), null === (t2 = n2.engine.client.ws) || void 0 === t2 || t2.close();
            const c2 = n2.engine.client.onClose;
            if (c2 && c2(""), yield s2, !r2) throw new Error("Did not attempt to reconnect");
            if (!a2 || n2.state !== e.ConnectionState.Connected) throw this.appendWarning("reconnection is only possible in Redis-based configurations"), new Error("Not able to reconnect");
          }));
        }
      }
      class Xl extends Wl {
        get description() {
          return "Can connect via TURN";
        }
        perform() {
          return Yi(this, void 0, void 0, (function* () {
            var e2, t2, n2;
            As(new URL(this.url)) && (this.appendMessage("Using region specific url"), this.url = null !== (e2 = yield new bd(this.url, this.token).getNextBestRegionUrl()) && void 0 !== e2 ? e2 : this.url);
            const i2 = new uc(), r2 = yield i2.join(this.url, this.token, { autoSubscribe: true, maxRetries: 0, e2eeEnabled: false, websocketTimeout: 15e3 }, void 0, true);
            let a2 = false, s2 = false, o2 = false;
            for (let e3 of r2.iceServers) for (let t3 of e3.urls) t3.startsWith("turn:") ? (s2 = true, o2 = true) : t3.startsWith("turns:") && (s2 = true, o2 = true, a2 = true), t3.startsWith("stun:") && (o2 = true);
            o2 ? s2 && !a2 && this.appendWarning("TURN is configured server side, but TURN/TLS is unavailable.") : this.appendWarning("No STUN servers configured on server side."), yield i2.close(), (null === (n2 = null === (t2 = this.connectOptions) || void 0 === t2 ? void 0 : t2.rtcConfig) || void 0 === n2 ? void 0 : n2.iceServers) || s2 ? yield this.room.connect(this.url, this.token, { rtcConfig: { iceTransportPolicy: "relay" } }) : (this.appendWarning("No TURN servers configured."), this.skip(), yield new Promise(((e3) => setTimeout(e3, 0))));
          }));
        }
      }
      class Zl extends Wl {
        get description() {
          return "Establishing WebRTC connection";
        }
        perform() {
          return Yi(this, void 0, void 0, (function* () {
            let t2 = false, n2 = false;
            this.room.on(e.RoomEvent.SignalConnected, (() => {
              var e2;
              const i2 = this.room.engine.client.onTrickle;
              this.room.engine.client.onTrickle = (e3, r2) => {
                if (e3.candidate) {
                  const i3 = new RTCIceCandidate(e3);
                  let r3 = "".concat(i3.protocol, " ").concat(i3.address, ":").concat(i3.port, " ").concat(i3.type);
                  i3.address && (!(function(e4) {
                    const t3 = e4.split(".");
                    if (4 === t3.length) {
                      if ("10" === t3[0]) return true;
                      if ("192" === t3[0] && "168" === t3[1]) return true;
                      if ("172" === t3[0]) {
                        const e5 = parseInt(t3[1], 10);
                        if (e5 >= 16 && e5 <= 31) return true;
                      }
                    }
                    return false;
                  })(i3.address) ? "tcp" === i3.protocol && "passive" === i3.tcpType ? (t2 = true, r3 += " (passive)") : "udp" === i3.protocol && (n2 = true) : r3 += " (private)"), this.appendMessage(r3);
                }
                i2 && i2(e3, r2);
              }, (null === (e2 = this.room.engine.pcManager) || void 0 === e2 ? void 0 : e2.subscriber) && (this.room.engine.pcManager.subscriber.onIceCandidateError = (e3) => {
                e3 instanceof RTCPeerConnectionIceErrorEvent && this.appendWarning("error with ICE candidate: ".concat(e3.errorCode, " ").concat(e3.errorText, " ").concat(e3.url));
              });
            }));
            try {
              yield this.connect(), Vi.info("now the room is connected");
            } catch (e2) {
              throw this.appendWarning("ports need to be open on firewall in order to connect."), e2;
            }
            t2 || this.appendWarning("Server is not configured for ICE/TCP"), n2 || this.appendWarning("No public IPv4 UDP candidates were found. Your server is likely not configured correctly");
          }));
        }
      }
      class $l extends Wl {
        get description() {
          return "Connecting to signal connection via WebSocket";
        }
        perform() {
          return Yi(this, void 0, void 0, (function* () {
            var e2, t2, n2;
            (this.url.startsWith("ws:") || this.url.startsWith("http:")) && this.appendWarning("Server is insecure, clients may block connections to it");
            let i2, r2 = new uc();
            try {
              i2 = yield r2.join(this.url, this.token, { autoSubscribe: true, maxRetries: 0, e2eeEnabled: false, websocketTimeout: 15e3 }, void 0, true);
            } catch (e3) {
              if (As(new URL(this.url))) {
                this.appendMessage("Initial connection failed with error ".concat(e3.message, ". Retrying with region fallback"));
                const t3 = new bd(this.url, this.token), n3 = yield t3.getNextBestRegionUrl();
                n3 && (i2 = yield r2.join(n3, this.token, { autoSubscribe: true, maxRetries: 0, e2eeEnabled: false, websocketTimeout: 15e3 }, void 0, true), this.appendMessage("Fallback to region worked. To avoid initial connections failing, ensure you're calling room.prepareConnection() ahead of time"));
              }
            }
            i2 ? (this.appendMessage("Connected to server, version ".concat(i2.serverVersion, ".")), (null === (e2 = i2.serverInfo) || void 0 === e2 ? void 0 : e2.edition) === Lt.Cloud && (null === (t2 = i2.serverInfo) || void 0 === t2 ? void 0 : t2.region) && this.appendMessage("LiveKit Cloud: ".concat(null === (n2 = i2.serverInfo) || void 0 === n2 ? void 0 : n2.region))) : this.appendError("Websocket connection could not be established"), yield r2.close();
          }));
        }
      }
      class eu extends ir.EventEmitter {
        constructor(e2, t2) {
          let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          super(), this.options = {}, this.checkResults = /* @__PURE__ */ new Map(), this.url = e2, this.token = t2, this.options = n2;
        }
        getNextCheckId() {
          const t2 = this.checkResults.size;
          return this.checkResults.set(t2, { logs: [], status: e.CheckStatus.IDLE, name: "", description: "" }), t2;
        }
        updateCheck(e2, t2) {
          this.checkResults.set(e2, t2), this.emit("checkUpdate", e2, t2);
        }
        isSuccess() {
          return Array.from(this.checkResults.values()).every(((t2) => t2.status !== e.CheckStatus.FAILED));
        }
        getResults() {
          return Array.from(this.checkResults.values());
        }
        createAndRunCheck(e2) {
          return Yi(this, void 0, void 0, (function* () {
            const t2 = this.getNextCheckId(), n2 = new e2(this.url, this.token, this.options), i2 = (e3) => {
              this.updateCheck(t2, e3);
            };
            n2.on("update", i2);
            const r2 = yield n2.run();
            return n2.off("update", i2), r2;
          }));
        }
        checkWebsocket() {
          return Yi(this, void 0, void 0, (function* () {
            return this.createAndRunCheck($l);
          }));
        }
        checkWebRTC() {
          return Yi(this, void 0, void 0, (function* () {
            return this.createAndRunCheck(Zl);
          }));
        }
        checkTURN() {
          return Yi(this, void 0, void 0, (function* () {
            return this.createAndRunCheck(Xl);
          }));
        }
        checkReconnect() {
          return Yi(this, void 0, void 0, (function* () {
            return this.createAndRunCheck(Yl);
          }));
        }
        checkPublishAudio() {
          return Yi(this, void 0, void 0, (function* () {
            return this.createAndRunCheck(Gl);
          }));
        }
        checkPublishVideo() {
          return Yi(this, void 0, void 0, (function* () {
            return this.createAndRunCheck(Ql);
          }));
        }
        checkConnectionProtocol() {
          return Yi(this, void 0, void 0, (function* () {
            const e2 = yield this.createAndRunCheck(Jl);
            if (e2.data && "protocol" in e2.data) {
              const t2 = e2.data;
              this.options.protocol = t2.protocol;
            }
            return e2;
          }));
        }
        checkCloudRegion() {
          return Yi(this, void 0, void 0, (function* () {
            return this.createAndRunCheck(Kl);
          }));
        }
      }
      class tu {
      }
      class nu {
      }
      new TextEncoder();
      const iu = new TextDecoder();
      function ru(e2) {
        if (Uint8Array.fromBase64) return Uint8Array.fromBase64("string" == typeof e2 ? e2 : iu.decode(e2), { alphabet: "base64url" });
        let t2 = e2;
        t2 instanceof Uint8Array && (t2 = iu.decode(t2)), t2 = t2.replace(/-/g, "+").replace(/_/g, "/");
        try {
          return (function(e3) {
            if (Uint8Array.fromBase64) return Uint8Array.fromBase64(e3);
            const t3 = atob(e3), n2 = new Uint8Array(t3.length);
            for (let e4 = 0; e4 < t3.length; e4++) n2[e4] = t3.charCodeAt(e4);
            return n2;
          })(t2);
        } catch (e3) {
          throw new TypeError("The input to be decoded is not correctly encoded.");
        }
      }
      class au extends Error {
        constructor(e2, t2) {
          var n2;
          super(e2, t2), N(this, "code", "ERR_JOSE_GENERIC"), this.name = this.constructor.name, null === (n2 = Error.captureStackTrace) || void 0 === n2 || n2.call(Error, this, this.constructor);
        }
      }
      N(au, "code", "ERR_JOSE_GENERIC");
      N(class extends au {
        constructor(e2, t2) {
          let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "unspecified", i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "unspecified";
          super(e2, { cause: { claim: n2, reason: i2, payload: t2 } }), N(this, "code", "ERR_JWT_CLAIM_VALIDATION_FAILED"), N(this, "claim", void 0), N(this, "reason", void 0), N(this, "payload", void 0), this.claim = n2, this.reason = i2, this.payload = t2;
        }
      }, "code", "ERR_JWT_CLAIM_VALIDATION_FAILED");
      N(class extends au {
        constructor(e2, t2) {
          let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "unspecified", i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "unspecified";
          super(e2, { cause: { claim: n2, reason: i2, payload: t2 } }), N(this, "code", "ERR_JWT_EXPIRED"), N(this, "claim", void 0), N(this, "reason", void 0), N(this, "payload", void 0), this.claim = n2, this.reason = i2, this.payload = t2;
        }
      }, "code", "ERR_JWT_EXPIRED");
      N(class extends au {
        constructor() {
          super(...arguments), N(this, "code", "ERR_JOSE_ALG_NOT_ALLOWED");
        }
      }, "code", "ERR_JOSE_ALG_NOT_ALLOWED");
      N(class extends au {
        constructor() {
          super(...arguments), N(this, "code", "ERR_JOSE_NOT_SUPPORTED");
        }
      }, "code", "ERR_JOSE_NOT_SUPPORTED");
      N(class extends au {
        constructor() {
          super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "decryption operation failed", arguments.length > 1 ? arguments[1] : void 0), N(this, "code", "ERR_JWE_DECRYPTION_FAILED");
        }
      }, "code", "ERR_JWE_DECRYPTION_FAILED");
      N(class extends au {
        constructor() {
          super(...arguments), N(this, "code", "ERR_JWE_INVALID");
        }
      }, "code", "ERR_JWE_INVALID");
      N(class extends au {
        constructor() {
          super(...arguments), N(this, "code", "ERR_JWS_INVALID");
        }
      }, "code", "ERR_JWS_INVALID");
      class su extends au {
        constructor() {
          super(...arguments), N(this, "code", "ERR_JWT_INVALID");
        }
      }
      N(su, "code", "ERR_JWT_INVALID");
      N(class extends au {
        constructor() {
          super(...arguments), N(this, "code", "ERR_JWK_INVALID");
        }
      }, "code", "ERR_JWK_INVALID");
      N(class extends au {
        constructor() {
          super(...arguments), N(this, "code", "ERR_JWKS_INVALID");
        }
      }, "code", "ERR_JWKS_INVALID");
      N(class extends au {
        constructor() {
          super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "no applicable key found in the JSON Web Key Set", arguments.length > 1 ? arguments[1] : void 0), N(this, "code", "ERR_JWKS_NO_MATCHING_KEY");
        }
      }, "code", "ERR_JWKS_NO_MATCHING_KEY");
      N(class extends au {
        constructor() {
          super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "multiple matching keys found in the JSON Web Key Set", arguments.length > 1 ? arguments[1] : void 0), N(this, Symbol.asyncIterator, void 0), N(this, "code", "ERR_JWKS_MULTIPLE_MATCHING_KEYS");
        }
      }, "code", "ERR_JWKS_MULTIPLE_MATCHING_KEYS");
      N(class extends au {
        constructor() {
          super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "request timed out", arguments.length > 1 ? arguments[1] : void 0), N(this, "code", "ERR_JWKS_TIMEOUT");
        }
      }, "code", "ERR_JWKS_TIMEOUT");
      N(class extends au {
        constructor() {
          super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "signature verification failed", arguments.length > 1 ? arguments[1] : void 0), N(this, "code", "ERR_JWS_SIGNATURE_VERIFICATION_FAILED");
        }
      }, "code", "ERR_JWS_SIGNATURE_VERIFICATION_FAILED");
      function ou(e2) {
        if ("string" != typeof e2) throw new su("JWTs must use Compact JWS serialization, JWT must be a string");
        const t2 = e2.split("."), n2 = t2[1], i2 = t2.length;
        if (5 === i2) throw new su("Only JWTs using Compact JWS serialization can be decoded");
        if (3 !== i2) throw new su("Invalid JWT");
        if (!n2) throw new su("JWTs must contain a payload");
        let r2, a2;
        try {
          r2 = ru(n2);
        } catch (e3) {
          throw new su("Failed to base64url decode the payload");
        }
        try {
          a2 = JSON.parse(iu.decode(r2));
        } catch (e3) {
          throw new su("Failed to parse the decoded payload as JSON");
        }
        if (!(function(e3) {
          if ("object" != typeof (t3 = e3) || null === t3 || "[object Object]" !== Object.prototype.toString.call(e3)) return false;
          var t3;
          if (null === Object.getPrototypeOf(e3)) return true;
          let n3 = e3;
          for (; null !== Object.getPrototypeOf(n3); ) n3 = Object.getPrototypeOf(n3);
          return Object.getPrototypeOf(e3) === n3;
        })(a2)) throw new su("Invalid JWT Claims Set");
        return a2;
      }
      const cu = 1e3;
      function du(e2) {
        const t2 = ou(e2);
        t2.roomConfig;
        const n2 = Qi(t2, ["roomConfig"]);
        return Object.assign(Object.assign({}, n2), { roomConfig: t2.roomConfig ? En.fromJson(t2.roomConfig, { ignoreUnknownFields: true }) : void 0 });
      }
      function lu(e2, t2) {
        const n2 = /* @__PURE__ */ new Set([...Object.keys(e2), ...Object.keys(t2)]);
        for (const i2 of n2) switch (i2) {
          case "roomName":
          case "participantName":
          case "participantIdentity":
          case "participantMetadata":
          case "participantAttributes":
          case "agentName":
          case "agentMetadata":
          case "deployment":
            if (e2[i2] !== t2[i2]) return false;
            break;
          default:
            throw new Error("Options key ".concat(i2, " not being checked for equality!"));
        }
        return true;
      }
      class uu extends nu {
        constructor() {
          super(...arguments), this.cachedFetchOptions = null, this.cachedResponse = null, this.fetchMutex = new r();
        }
        isSameAsCachedFetchOptions(e2) {
          return !!this.cachedFetchOptions && lu(e2, this.cachedFetchOptions);
        }
        shouldReturnCachedValueFromFetch(e2) {
          return !!this.cachedResponse && (!!(function(e3) {
            const t2 = du(e3.participantToken);
            if (!(null == t2 ? void 0 : t2.nbf) || !(null == t2 ? void 0 : t2.exp)) return true;
            const n2 = /* @__PURE__ */ new Date(), i2 = t2.nbf * cu, r2 = new Date(i2), a2 = t2.exp * cu, s2 = new Date(a2 - 6e4);
            return r2 <= n2 && s2 > n2;
          })(this.cachedResponse) && !!this.isSameAsCachedFetchOptions(e2));
        }
        getCachedResponseJwtPayload() {
          return this.cachedResponse ? du(this.cachedResponse.participantToken) : null;
        }
        fetch(e2, t2) {
          return Yi(this, void 0, void 0, (function* () {
            const n2 = yield this.fetchMutex.lock();
            try {
              if (t2 && (this.cachedResponse = null), this.shouldReturnCachedValueFromFetch(e2)) return this.cachedResponse.toJson();
              this.cachedFetchOptions = e2;
              const n3 = yield this.update(e2);
              return this.cachedResponse = n3, n3.toJson();
            } finally {
              n2();
            }
          }));
        }
      }
      class hu extends tu {
        constructor(e2) {
          super(), this.literalOrFn = e2;
        }
        fetch() {
          return Yi(this, void 0, void 0, (function* () {
            return "function" == typeof this.literalOrFn ? this.literalOrFn() : this.literalOrFn;
          }));
        }
      }
      class pu extends uu {
        constructor(e2) {
          super(), this.customFn = e2;
        }
        update(e2) {
          return Yi(this, void 0, void 0, (function* () {
            const t2 = this.customFn(e2);
            let n2;
            return n2 = t2 instanceof Promise ? yield t2 : t2, Ni.fromJson(n2, { ignoreUnknownFields: true });
          }));
        }
      }
      class mu extends uu {
        constructor(e2) {
          let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(), this.url = e2, this.endpointOptions = t2;
        }
        createRequestFromOptions(e2) {
          var t2, n2, i2, r2;
          const a2 = new Ai();
          for (const s2 of Object.keys(e2)) switch (s2) {
            case "roomName":
            case "participantName":
            case "participantIdentity":
            case "participantMetadata":
              a2[s2] = e2[s2];
              break;
            case "participantAttributes":
              a2.participantAttributes = null !== (t2 = e2.participantAttributes) && void 0 !== t2 ? t2 : {};
              break;
            case "agentName":
              a2.roomConfig = null !== (n2 = a2.roomConfig) && void 0 !== n2 ? n2 : new En(), 0 === a2.roomConfig.agents.length && a2.roomConfig.agents.push(new en()), a2.roomConfig.agents[0].agentName = e2.agentName;
              break;
            case "agentMetadata":
              a2.roomConfig = null !== (i2 = a2.roomConfig) && void 0 !== i2 ? i2 : new En(), 0 === a2.roomConfig.agents.length && a2.roomConfig.agents.push(new en()), a2.roomConfig.agents[0].metadata = e2.agentMetadata;
              break;
            case "deployment":
              a2.roomConfig = null !== (r2 = a2.roomConfig) && void 0 !== r2 ? r2 : new En(), 0 === a2.roomConfig.agents.length && a2.roomConfig.agents.push(new en()), a2.roomConfig.agents[0].deployment = e2.deployment;
              break;
            default:
              throw new Error("Options key ".concat(s2, " not being included in forming request!"));
          }
          return a2;
        }
        update(e2) {
          return Yi(this, void 0, void 0, (function* () {
            var t2;
            const n2 = this.createRequestFromOptions(e2), i2 = yield fetch(this.url, Object.assign(Object.assign({}, this.endpointOptions), { method: null !== (t2 = this.endpointOptions.method) && void 0 !== t2 ? t2 : "POST", headers: Object.assign({ "Content-Type": "application/json" }, this.endpointOptions.headers), body: n2.toJsonString({ useProtoFieldName: true }) }));
            if (!i2.ok) throw new Error("Error generating token from endpoint ".concat(this.url, ": received ").concat(i2.status, " / ").concat(yield i2.text()));
            const r2 = yield i2.json();
            return Ni.fromJson(r2, { ignoreUnknownFields: true });
          }));
        }
      }
      class gu extends mu {
        constructor(e2, t2) {
          const n2 = t2.baseUrl, i2 = void 0 === n2 ? "https://cloud-api.livekit.io" : n2, r2 = Qi(t2, ["baseUrl"]);
          super("".concat(i2, "/api/v2/sandbox/connection-details"), Object.assign(Object.assign({}, r2), { headers: { "X-Sandbox-ID": e2 } }));
        }
      }
      const vu = { literal: (e2) => new hu(e2), custom: (e2) => new pu(e2), endpoint(e2) {
        return new mu(e2, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
      }, sandboxTokenServer(e2) {
        return new gu(e2, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
      } };
      const fu = /* @__PURE__ */ new Map([["obs virtual camera", { facingMode: "environment", confidence: "medium" }]]), ku = /* @__PURE__ */ new Map([["iphone", { facingMode: "environment", confidence: "medium" }], ["ipad", { facingMode: "environment", confidence: "medium" }]]);
      function yu(e2) {
        var t2;
        const n2 = e2.trim().toLowerCase();
        if ("" !== n2) return fu.has(n2) ? fu.get(n2) : null === (t2 = Array.from(ku.entries()).find(((e3) => {
          let t3 = x(e3, 1)[0];
          return n2.includes(t3);
        }))) || void 0 === t2 ? void 0 : t2[1];
      }
      const bu = /* @__PURE__ */ Symbol.for("lk.serializer");
      function Tu(e2) {
        return Object.assign(Object.assign({}, e2), { symbol: bu });
      }
      const Su = { json: function() {
        return Tu({ parse: (e2) => JSON.parse(e2), serialize: (e2) => JSON.stringify(e2) });
      }, raw: function() {
        return Tu({ parse: (e2) => e2, serialize: (e2) => e2 });
      }, custom: function(e2) {
        return Tu(e2);
      } };
      e.BaseKeyProvider = Do, e.CLIENT_PROTOCOL_DATA_STREAM_RPC = 1, e.CLIENT_PROTOCOL_DEFAULT = 0, e.Checker = Wl, e.ConnectionCheck = eu, e.ConnectionError = Da, e.CriticalTimers = ja, e.CryptorError = class extends ba {
        constructor(t2) {
          let n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.CryptorErrorReason.InternalError, i2 = arguments.length > 2 ? arguments[2] : void 0;
          super(40, t2), this.reason = n2, this.participantIdentity = i2;
        }
      }, e.DataPacket_Kind = bt, e.DataStreamError = Fa, e.DataTrackPacket = Jd, e.DefaultReconnectPolicy = Gi, e.DeviceUnsupportedError = Ma, e.DisconnectReason = et, e.Encryption_Type = ht, e.ExternalE2EEKeyProvider = class extends Do {
        constructor() {
          let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super(Object.assign(Object.assign({}, e2), { sharedKey: true, ratchetWindowSize: 0, failureTolerance: -1 }));
        }
        setKey(e2) {
          return Yi(this, void 0, void 0, (function* () {
            const t2 = "string" == typeof e2 ? yield wo(e2) : yield Ro(e2);
            this.onSetEncryptionKey(t2);
          }));
        }
      }, e.FrameMetadataManager = Wo, e.LivekitError = ba, e.LivekitReasonedError = Ta, e.LocalAudioTrack = Gc, e.LocalDataTrack = pl, e.LocalParticipant = xl, e.LocalTrack = Jc, e.LocalTrackPublication = Il, e.LocalTrackRecorder = zc, e.LocalVideoTrack = od, e.Mutex = r, e.NegotiationError = Na, e.PacketTrailerManager = Ko, e.Participant = Nl, e.ParticipantKind = lt, e.PublishDataError = xa, e.PublishTrackError = La, e.RemoteAudioTrack = Rl, e.RemoteDataTrack = Wd, e.RemoteParticipant = Bl, e.RemoteTrack = Uo, e.RemoteTrackPublication = Fl, e.RemoteVideoTrack = Fo, e.Room = jl, e.RpcError = kl, e.ScreenSharePresets = Xa, e.SignalReconnectError = Ba, e.SignalRequestError = Ua, e.SimulatedError = class extends ba {
        constructor() {
          super(-1, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Simulated failure"), this.name = "simulated";
        }
      }, e.SubscriptionError = nt, e.TokenSource = vu, e.TokenSourceConfigurable = nu, e.TokenSourceFixed = tu, e.Track = ps, e.TrackInvalidError = _a, e.TrackPublication = Pl, e.TrackType = Qe, e.UnexpectedConnectionState = Aa, e.UnsupportedServer = Oa, e.VideoPreset = qa, e.VideoPresets = Qa, e.VideoPresets43 = Ya, e.areTokenSourceFetchOptionsEqual = lu, e.asEncryptablePacket = Io, e.attachToElement = ms, e.attributes = Hl, e.audioCodecs = Va, e.clientProtocol = 1, e.compareVersions = Fs, e.createAudioAnalyser = function(e2, t2) {
        const n2 = Object.assign({ cloneTrack: false, fftSize: 2048, smoothingTimeConstant: 0.8, minDecibels: -100, maxDecibels: -80 }, t2), i2 = ns();
        if (!i2) throw new Error("Audio Context not supported on this browser");
        const r2 = n2.cloneTrack ? e2.mediaStreamTrack.clone() : e2.mediaStreamTrack, a2 = i2.createMediaStreamSource(new MediaStream([r2])), s2 = i2.createAnalyser();
        s2.minDecibels = n2.minDecibels, s2.maxDecibels = n2.maxDecibels, s2.fftSize = n2.fftSize, s2.smoothingTimeConstant = n2.smoothingTimeConstant, a2.connect(s2);
        const o2 = new Uint8Array(s2.frequencyBinCount);
        return { calculateVolume: () => {
          s2.getByteFrequencyData(o2);
          let e3 = 0;
          for (const t3 of o2) e3 += Math.pow(t3 / 255, 2);
          return Math.sqrt(e3 / o2.length);
        }, analyser: s2, cleanup: () => Yi(this, void 0, void 0, (function* () {
          yield i2.close(), n2.cloneTrack && r2.stop();
        })) };
      }, e.createE2EEKey = function() {
        return window.crypto.getRandomValues(new Uint8Array(32));
      }, e.createKeyMaterialFromBuffer = Ro, e.createKeyMaterialFromString = wo, e.createLocalAudioTrack = _l, e.createLocalScreenTracks = function(e2) {
        return Yi(this, void 0, void 0, (function* () {
          if (void 0 === e2 && (e2 = {}), void 0 !== e2.resolution || Ds() || (e2.resolution = Xa.h1080fps30.resolution), void 0 === navigator.mediaDevices.getDisplayMedia) throw new Ma("getDisplayMedia not supported");
          const t2 = as(e2), n2 = yield navigator.mediaDevices.getDisplayMedia(t2), i2 = n2.getVideoTracks();
          if (0 === i2.length) throw new _a("no video track found");
          const r2 = new od(i2[0], void 0, false);
          r2.source = ps.Source.ScreenShare;
          const a2 = [r2];
          if (n2.getAudioTracks().length > 0) {
            const e3 = new Gc(n2.getAudioTracks()[0], void 0, false);
            e3.source = ps.Source.ScreenShareAudio, a2.push(e3);
          }
          return a2;
        }));
      }, e.createLocalTracks = Dl, e.createLocalVideoTrack = Ml, e.decodeTokenPayload = du, e.deriveKeys = function(e2, t2) {
        return Yi(this, void 0, void 0, (function* () {
          const n2 = Po(e2.algorithm.name, t2.ratchetSalt), i2 = yield crypto.subtle.deriveKey(n2, e2, { name: fo, length: t2.keySize }, false, ["encrypt", "decrypt"]);
          return { material: e2, encryptionKey: i2 };
        }));
      }, e.detachTrack = gs, e.facingModeFromDeviceLabel = yu, e.facingModeFromLocalTrack = function(e2) {
        let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var n2;
        const i2 = no(e2) ? e2.mediaStreamTrack : e2, r2 = i2.getSettings();
        let a2 = { facingMode: null !== (n2 = t2.defaultFacingMode) && void 0 !== n2 ? n2 : "user", confidence: "low" };
        if ("facingMode" in r2) {
          const e3 = r2.facingMode;
          Vi.trace("rawFacingMode", { rawFacingMode: e3 }), e3 && "string" == typeof e3 && (function(e4) {
            const t3 = ["user", "environment", "left", "right"];
            return void 0 === e4 || t3.includes(e4);
          })(e3) && (a2 = { facingMode: e3, confidence: "high" });
        }
        if (["low", "medium"].includes(a2.confidence)) {
          Vi.trace("Try to get facing mode from device label: (".concat(i2.label, ")"));
          const e3 = yu(i2.label);
          void 0 !== e3 && (a2 = e3);
        }
        return a2;
      }, e.getBrowser = ga, e.getEmptyAudioStreamTrack = Gs, e.getEmptyVideoStreamTrack = function() {
        return Ks || (Ks = Js()), Ks.clone();
      }, e.getLogger = Wi, e.importKey = function(e2) {
        return Yi(this, arguments, void 0, (function(e3) {
          let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { name: fo }, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "encrypt";
          return (function* () {
            return crypto.subtle.importKey("raw", e3, t2, false, "derive" === n2 ? ["deriveBits", "deriveKey"] : ["encrypt", "decrypt"]);
          })();
        }));
      }, e.isAudioCodec = function(e2) {
        return Va.includes(e2);
      }, e.isAudioTrack = io, e.isBackupCodec = za, e.isBackupVideoCodec = Ka, e.isBrowserSupported = Cs, e.isE2EESupported = So, e.isInsertableStreamSupported = Co, e.isLocalParticipant = uo, e.isLocalTrack = no, e.isRemoteParticipant = function(e2) {
        return !e2.isLocal;
      }, e.isRemoteTrack = oo, e.isScriptTransformSupported = Eo, e.isSerializer = function(e2) {
        return "object" == typeof e2 && null !== e2 && "symbol" in e2 && e2.symbol === bu;
      }, e.isVideoCodec = Ys, e.isVideoFrame = function(e2) {
        return "type" in e2;
      }, e.isVideoTrack = ro, e.needsRbspUnescaping = function(e2) {
        for (var t2 = 0; t2 < e2.length - 3; t2++) if (0 == e2[t2] && 0 == e2[t2 + 1] && 3 == e2[t2 + 2]) return true;
        return false;
      }, e.parseRbsp = function(e2) {
        const t2 = [];
        for (var n2 = e2.length, i2 = 0; i2 < e2.length; ) n2 - i2 >= 3 && !e2[i2] && !e2[i2 + 1] && 3 == e2[i2 + 2] ? (t2.push(e2[i2++]), t2.push(e2[i2++]), i2++) : t2.push(e2[i2++]);
        return new Uint8Array(t2);
      }, e.protocolVersion = 17, e.ratchet = function(e2, t2) {
        return Yi(this, void 0, void 0, (function* () {
          const n2 = Po(e2.algorithm.name, t2);
          return crypto.subtle.deriveBits(n2, e2, 256);
        }));
      }, e.serializers = Su, e.setLogExtension = function(t2, n2) {
        (n2 ? [n2] : Hi).forEach(((n3) => {
          const i2 = n3.methodFactory;
          n3.methodFactory = (n4, r2, a2) => {
            const s2 = i2(n4, r2, a2), o2 = e.LogLevel[n4], c2 = o2 >= r2 && o2 < e.LogLevel.silent;
            return (e2, n5) => {
              n5 ? s2(e2, n5) : s2(e2), c2 && t2(o2, e2, n5);
            };
          }, n3.setLevel(n3.getLevel());
        }));
      }, e.setLogLevel = function(e2, t2) {
        if (t2) qi.getLogger(t2).setLevel(e2);
        else for (const t3 of Hi) t3.setLevel(e2);
      }, e.supportsAV1 = bs, e.supportsAdaptiveStream = function() {
        return void 0 !== typeof ResizeObserver && void 0 !== typeof IntersectionObserver;
      }, e.supportsAudioOutputSelection = function() {
        return Es();
      }, e.supportsDynacast = function() {
        return ks();
      }, e.supportsVP9 = Ts, e.version = ya, e.videoCodecs = Wa, e.writeRbsp = function(e2) {
        const t2 = [];
        for (var n2 = 0, i2 = 0; i2 < e2.length; ++i2) {
          var r2 = e2[i2];
          r2 <= 3 && n2 >= 2 && (t2.push(3), n2 = 0), t2.push(r2), 0 == r2 ? ++n2 : n2 = 0;
        }
        return new Uint8Array(t2);
      };
    }));
  }
});

// node_modules/simli-client/dist/Logger.js
var require_Logger = __commonJS({
  "node_modules/simli-client/dist/Logger.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Logger = exports.LogLevel = void 0;
    var LogLevel2;
    (function(LogLevel3) {
      LogLevel3[LogLevel3["DEBUG"] = 0] = "DEBUG";
      LogLevel3[LogLevel3["INFO"] = 1] = "INFO";
      LogLevel3[LogLevel3["ERROR"] = 2] = "ERROR";
      LogLevel3[LogLevel3["CRITICAL"] = 3] = "CRITICAL";
    })(LogLevel2 || (exports.LogLevel = LogLevel2 = {}));
    var Logger = class {
      currentLevel;
      destination;
      session_id;
      constructor(level = LogLevel2.INFO) {
        this.currentLevel = level;
        this.destination = null;
        this.session_id = null;
      }
      formatMessage(level, message) {
        const timestamp = (/* @__PURE__ */ new Date()).toISOString();
        const destination = this.destination ?? "not_received";
        const sessionId = this.session_id ?? "not_received";
        return `SimliClient | ${timestamp} | ${level} | ${destination}/${sessionId} | ${message}`;
      }
      log(level, levelName, message, ...args) {
        if (level < this.currentLevel) {
          return;
        }
        const formattedMessage = this.formatMessage(levelName, message);
        switch (level) {
          case LogLevel2.DEBUG:
          case LogLevel2.INFO:
            console.log(formattedMessage, ...args);
            break;
          case LogLevel2.ERROR:
          case LogLevel2.CRITICAL:
            console.error(formattedMessage, ...args);
            break;
        }
      }
      debug(message, ...args) {
        this.log(LogLevel2.DEBUG, "DEBUG", message, ...args);
      }
      info(message, ...args) {
        this.log(LogLevel2.INFO, "INFO", message, ...args);
      }
      error(message, ...args) {
        this.log(LogLevel2.ERROR, "ERROR", message, ...args);
      }
      critical(message, ...args) {
        this.log(LogLevel2.CRITICAL, "CRITICAL", message, ...args);
      }
      setLevel(level) {
        this.currentLevel = level;
      }
      getLevel() {
        return this.currentLevel;
      }
    };
    exports.Logger = Logger;
  }
});

// node_modules/simli-client/dist/Signaling/WebSocketSignaling.js
var require_WebSocketSignaling = __commonJS({
  "node_modules/simli-client/dist/Signaling/WebSocketSignaling.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebSocketSignaling = void 0;
    var Logger_1 = require_Logger();
    var WebSocketSignaling = class {
      wsURL;
      wsConnection;
      logger;
      constructor(wsURL, logger) {
        this.wsURL = wsURL;
        this.wsConnection = new WebSocket(this.wsURL);
        this.wsConnection.addEventListener("message", (message) => this.logger.debug(message.data));
        this.logger = logger;
      }
      async connect(connected) {
        this.wsConnection.onopen = connected;
      }
      disconnect() {
        this.wsConnection.close();
      }
      send(data) {
        if (this.wsConnection.readyState != WebSocket.OPEN) {
          throw `Invalid State, WS Connection ${this.wsConnection.readyState.toString()}`;
        }
        this.wsConnection.send(data);
      }
      sendOffer(offer) {
        this.send(JSON.stringify(offer));
      }
      sendSignal(data) {
        this.send(data);
      }
      sendAudioData(audioData) {
        if (this.logger.getLevel() === Logger_1.LogLevel.DEBUG)
          this.logger.debug("Sent Audio of length: " + (audioData.length / 32e3).toString());
        this.send(audioData);
      }
      sendAudioDataImmediate(audioData) {
        if (this.logger.getLevel() === Logger_1.LogLevel.DEBUG)
          this.logger.debug("Sent Audio of length for immediate playback: " + (audioData.length / 32e3).toString());
        const asciiStr = "PLAY_IMMEDIATE";
        const encoder = new TextEncoder();
        const strBytes = encoder.encode(asciiStr);
        const buffer = new Uint8Array(strBytes.length + audioData.length);
        buffer.set(strBytes, 0);
        buffer.set(audioData, strBytes.length);
        this.send(buffer);
      }
    };
    exports.WebSocketSignaling = WebSocketSignaling;
  }
});

// node_modules/simli-client/dist/Transports/BaseTransport.js
var require_BaseTransport = __commonJS({
  "node_modules/simli-client/dist/Transports/BaseTransport.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.handleMessage = handleMessage;
    exports.register_destination = register_destination;
    function register_destination(logger, serialized_info) {
      const parsed = JSON.parse(serialized_info);
      logger.destination = parsed.destination;
      logger.session_id = parsed.session_id;
    }
    async function handleMessage(transport, message) {
      const firstToken = message.data.toUpperCase().split(" ")[0];
      switch (firstToken) {
        case "START": {
          break;
        }
        case "ACK": {
          transport.emit("ack");
          break;
        }
        case "STOP": {
          transport.disconnect();
          transport.emit("stop");
          break;
        }
        case "CLOSING":
        case "RATE":
        case "ERROR":
        case "ERROR:": {
          transport.disconnect();
          transport.emit("error", message.data);
        }
        case "SPEAK": {
          transport.emit("speaking");
          break;
        }
        case "SILENT": {
          transport.emit("silent");
          break;
        }
        default: {
          if (firstToken.includes("SDP") || firstToken.includes("LIVEKIT")) {
            transport.emit("connection_info", message.data);
          } else if (firstToken.includes("VIDEO_METADATA")) {
            transport.emit("video_info", message.data);
          } else if (firstToken.includes("ENDFRAME")) {
            transport.emit("stop");
            transport.disconnect();
          } else if (firstToken.includes("DESTINATION")) {
            transport.emit("destination", message.data);
          } else {
            transport.emit("unknown", message.data);
          }
        }
      }
    }
  }
});

// node_modules/simli-client/dist/Transports/LivekitTransport.js
var require_LivekitTransport = __commonJS({
  "node_modules/simli-client/dist/Transports/LivekitTransport.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LivekitTransport = void 0;
    var livekit_client_1 = require_livekit_client_umd();
    var WebSocketSignaling_1 = require_WebSocketSignaling();
    var BaseTransport_1 = require_BaseTransport();
    var LivekitTransport = class {
      videoElementAnchor;
      audioElementAnchor;
      signalingConnection;
      session_token;
      pc;
      logger;
      events = /* @__PURE__ */ new Map();
      websocketPromise;
      websocketReject = null;
      constructor(simliBaseWSURL, session_token, videoElementAnchor, audioElementAnchor, logger, failSignal) {
        this.logger = logger;
        this.on("startup_error", failSignal);
        this.session_token = session_token;
        const wsURL = new URL(simliBaseWSURL + "/compose/webrtc/livekit");
        wsURL.searchParams.set("session_token", session_token);
        this.signalingConnection = new WebSocketSignaling_1.WebSocketSignaling(wsURL, this.logger);
        this.on("destination", (serilized_info) => (0, BaseTransport_1.register_destination)(this.logger, serilized_info));
        this.websocketPromise = new Promise((resolve, reject) => {
          this.websocketReject = reject;
          this.signalingConnection.connect(() => {
            resolve("success");
            this.logger.debug("LK WebSocket Connected");
          });
        });
        this.signalingConnection.wsConnection.onmessage = (message) => {
          (0, BaseTransport_1.handleMessage)(this, message);
        };
        this.signalingConnection.wsConnection.onerror = (evt) => {
          this.emit("startup_error", "Websocket Failed");
          if (this.websocketReject) {
            this.websocketReject("Websocket Failed");
            this.websocketReject = null;
          }
        };
        const options = { adaptiveStream: false, dynacast: true };
        this.pc = new livekit_client_1.Room(options);
        this.on("connection_info", (serialized_info) => this.join_lk_room(serialized_info));
        this.videoElementAnchor = videoElementAnchor;
        this.audioElementAnchor = audioElementAnchor;
      }
      on(event, callback) {
        if (!this.events.has(event)) {
          this.events.set(event, /* @__PURE__ */ new Set());
        }
        this.events.get(event)?.add(callback);
        this.logger.debug("Registered Callback for Event: " + event);
      }
      off(event, callback) {
        if (!this.events.has(event)) {
          throw "Event Not Regsitered";
        }
        this.events.get(event)?.delete(callback);
      }
      emit(event, ...args) {
        this.logger.debug("Event: " + event);
        this.events.get(event)?.forEach((callback) => {
          callback(...args);
        });
      }
      async connect() {
        this.logger.info("Connecting");
        this.setupConnectionStateHandler();
        await this.websocketPromise;
      }
      async disconnect() {
        this.logger.info("Disconnecting");
        try {
          this.signalingConnection.sendSignal("DONE");
        } catch {
          this.logger.error("FAILED TO SEND FINAL MESSAGE");
        }
        try {
          this.signalingConnection.disconnect();
        } catch {
          this.logger.error("SIGNALING ALREADY DISCONNECTED");
        }
        try {
          await this.pc.disconnect();
        } catch {
          this.logger.error("LOCAL PEER ALREADY CLOSED");
        }
      }
      async join_lk_room(serialized_info) {
        const info = JSON.parse(serialized_info);
        this.logger.debug(info);
        if (info.livekit_url && info.livekit_token) {
          await this.pc.connect(info.livekit_url, info.livekit_token);
        } else {
          this.disconnect();
          this.emit("error", "Invalid Join Info, Contact Simli For Support");
        }
      }
      setupConnectionStateHandler() {
        this.pc.on(livekit_client_1.RoomEvent.Disconnected, () => {
          this.disconnect();
        });
        this.pc.on(livekit_client_1.RoomEvent.Connected, () => {
        });
        this.pc.on(livekit_client_1.RoomEvent.TrackSubscribed, (track, publication, participant) => {
          this.logger.debug("Track Received: " + track.kind);
          if (track.kind === livekit_client_1.Track.Kind.Video) {
            track.attach(this.videoElementAnchor);
            this.videoElementAnchor.requestVideoFrameCallback(() => {
              this.emit("start");
            });
          } else if (track.kind === livekit_client_1.Track.Kind.Audio) {
            track.attach(this.audioElementAnchor);
          }
        });
      }
    };
    exports.LivekitTransport = LivekitTransport;
  }
});

// node_modules/simli-client/dist/Transports/P2PTransport.js
var require_P2PTransport = __commonJS({
  "node_modules/simli-client/dist/Transports/P2PTransport.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.P2PTransport = void 0;
    var WebSocketSignaling_1 = require_WebSocketSignaling();
    var BaseTransport_1 = require_BaseTransport();
    var P2PTransport = class {
      videoElementAnchor;
      audioElementAnchor;
      signalingConnection;
      session_token;
      pc;
      events = /* @__PURE__ */ new Map();
      logger;
      iceCandidateCount;
      previousIceCandidateCount;
      iceTimeout = null;
      websocketPromise;
      websocketReject = null;
      constructor(simliBaseWSURL, session_token, enableSFU, iceServers, videoElementAnchor, audioElementAnchor, logger, failSignal) {
        this.logger = logger;
        this.on("startup_error", failSignal);
        this.session_token = session_token;
        const wsURL = new URL(simliBaseWSURL + "/compose/webrtc/p2p");
        wsURL.searchParams.set("session_token", session_token);
        wsURL.searchParams.set("enableSFU", String(enableSFU));
        this.on("destination", (serilized_info) => (0, BaseTransport_1.register_destination)(this.logger, serilized_info));
        this.signalingConnection = new WebSocketSignaling_1.WebSocketSignaling(wsURL, this.logger);
        this.websocketPromise = new Promise((resolve, reject) => {
          this.websocketReject = reject;
          this.signalingConnection.connect(() => {
            resolve("success");
            this.logger.debug("P2P WebSocket Connected");
          });
        });
        this.signalingConnection.wsConnection.onmessage = (message) => {
          (0, BaseTransport_1.handleMessage)(this, message);
        };
        this.signalingConnection.wsConnection.onerror = (evt) => {
          this.emit("startup_error", "Websocket Failed");
          if (this.websocketReject) {
            this.websocketReject("Websocket Failed");
            this.websocketReject = null;
          }
        };
        this.on("connection_info", (serialized_info) => this.registerPeerInfo(serialized_info));
        this.videoElementAnchor = videoElementAnchor;
        this.audioElementAnchor = audioElementAnchor;
        this.iceCandidateCount = 0;
        this.previousIceCandidateCount = 0;
        const config = {
          sdpSemantics: "unified-plan",
          iceServers
        };
        this.pc = new window.RTCPeerConnection(config);
        this.pc.addTransceiver("audio", {
          direction: "recvonly"
        });
        this.pc.addTransceiver("video", {
          direction: "recvonly"
        });
      }
      on(event, callback) {
        if (!this.events.has(event)) {
          this.events.set(event, /* @__PURE__ */ new Set());
        }
        this.events.get(event)?.add(callback);
      }
      off(event, callback) {
        this.events.get(event)?.delete(callback);
      }
      emit(event, ...args) {
        this.events.get(event)?.forEach((callback) => {
          try {
            callback(...args);
          } catch {
            this.logger.error("CALLBACK FAILED: " + callback.name);
          }
        });
      }
      async connect() {
        const offer = await this.pc.createOffer();
        await this.pc.setLocalDescription(offer);
        await this.waitForIceGathering();
        this.setupPeerConnectionListeners();
        await this.websocketPromise;
        if (this.pc.localDescription) {
          this.signalingConnection.sendOffer(this.pc.localDescription);
        }
      }
      async disconnect() {
        this.logger.info("Disconnecting");
        try {
          this.signalingConnection.sendSignal("DONE");
        } catch {
          this.logger.error("FAILED TO SEND FINAL MESSAGE");
        }
        try {
          this.signalingConnection.disconnect();
        } catch {
          this.logger.error("SIGNALING ALREADY DISCONNECTED");
        }
        try {
          this.pc.close();
        } catch {
          this.logger.error("LOCAL PEER ALREADY CLOSED");
        }
      }
      async registerPeerInfo(serialized_info) {
        const info = JSON.parse(serialized_info);
        if (info.sdp && info.type == "answer") {
          await this.pc.setRemoteDescription(new RTCSessionDescription(info));
        } else {
          this.disconnect();
          this.emit("error", "Invalid Join Info, Contact Simli For Support");
        }
      }
      async waitForIceGathering() {
        this.iceCandidateCount = 0;
        this.previousIceCandidateCount = 0;
        if (this.pc.iceGatheringState === "complete") {
          return;
        }
        return new Promise((resolve, reject) => {
          if (!this.iceTimeout) {
            this.iceTimeout = setTimeout(() => {
              reject(new Error("ICE gathering timeout"));
            }, 1e4);
          }
          const checkIceCandidates = () => {
            if (this.pc.iceGatheringState === "complete" || this.iceCandidateCount === this.previousIceCandidateCount) {
              if (this.iceTimeout) {
                clearTimeout(this.iceTimeout);
              }
              resolve();
            } else {
              this.previousIceCandidateCount = this.iceCandidateCount;
              setTimeout(checkIceCandidates, 150);
            }
          };
          checkIceCandidates();
        });
      }
      setupPeerConnectionListeners() {
        this.pc.addEventListener("track", (evt) => {
          if (evt.track.kind === "video") {
            this.videoElementAnchor.srcObject = evt.streams[0];
            this.videoElementAnchor.requestVideoFrameCallback(() => {
              this.emit("start");
            });
          } else if (evt.track.kind === "audio" && this.audioElementAnchor) {
            this.audioElementAnchor.srcObject = evt.streams[0];
          }
        });
        this.pc.onicecandidate = (event) => {
          if (event.candidate !== null) {
            this.iceCandidateCount += 1;
          }
        };
      }
    };
    exports.P2PTransport = P2PTransport;
  }
});

// node_modules/simli-client/dist/Client.js
var require_Client = __commonJS({
  "node_modules/simli-client/dist/Client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogLevel = exports.Logger = exports.SimliClient = void 0;
    exports.generateSimliSessionToken = generateSimliSessionToken;
    exports.generateIceServers = generateIceServers;
    var LivekitTransport_1 = require_LivekitTransport();
    var P2PTransport_1 = require_P2PTransport();
    var Logger_1 = require_Logger();
    Object.defineProperty(exports, "Logger", { enumerable: true, get: function() {
      return Logger_1.Logger;
    } });
    Object.defineProperty(exports, "LogLevel", { enumerable: true, get: function() {
      return Logger_1.LogLevel;
    } });
    var AudioProcessor = (buffer) => {
      if (buffer <= 0) {
        throw "Invalid Buffer Size, Can't be negative";
      }
      if (Math.floor(buffer) - buffer != 0) {
        throw "Invalid Buffer Size, Can't be a float";
      }
      return `
        class AudioProcessor extends AudioWorkletProcessor {
          constructor() {
            super();
            this.buffer = new Int16Array(${buffer});
            this.bufferIndex = 0;
        }

          process(inputs, outputs, parameters) {
            const input = inputs[0];
            const inputChannel = input[0];
            if (inputChannel) {
              for (let i = 0; i < inputChannel.length; i++) {
                this.buffer[this.bufferIndex] = Math.max(-32768, Math.min(32767, Math.round(inputChannel[i] * 32767)));
                this.bufferIndex++;

                if (this.bufferIndex === this.buffer.length){
                  this.port.postMessage({type: 'audioData', data: this.buffer.slice(0, this.bufferIndex)});
                  this.bufferIndex = 0;
                }
              }
            }
            return true;
          }
        }

        registerProcessor('audio-processor', AudioProcessor);
      `;
    };
    async function generateSimliSessionToken(request, SimliURL = "https://api.simli.ai") {
      const url = `${SimliURL}/compose/token`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(request.config),
        headers: {
          "Content-Type": "application/json",
          "x-simli-api-key": request.apiKey
        }
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw errorText;
      }
      const resJSON = await response.json();
      return resJSON;
    }
    async function generateIceServers(apiKey, SimliURL = "https://api.simli.ai") {
      try {
        const url = `${SimliURL}/compose/ice`;
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            "x-simli-api-key": apiKey
          },
          method: "GET"
        });
        if (!response.ok) {
          throw new Error(`SIMLI: HTTP error! status: ${response.status}`);
        }
        const iceServers = await response.json();
        if (!iceServers || iceServers.length === 0) {
          throw new Error("SIMLI: No ICE servers returned");
        }
        return iceServers;
      } catch (error) {
        return [{ urls: ["stun:stun.l.google.com:19302"] }];
      }
    }
    var SimliClient2 = class {
      session_token;
      transport = "livekit";
      signaling = "websockets";
      videoElement;
      audioElement;
      audioBufferSize = 3e3;
      connection;
      connectionTimeout;
      connectionResolve;
      connectionReject;
      connectionPromise;
      sourceNode = null;
      audioWorklet = null;
      MAX_RETRY_ATTEMPTS = 10;
      RETRY_DELAY = 2e3;
      CONNECTION_TIMEOUT_MS = 15e3;
      retryAttempt = 0;
      SimliWSURL = "wss://api.simli.ai";
      audioContext = new (window.AudioContext || window.webkitAudioContext)({
        sampleRate: 16e3
      });
      logger;
      iceServers;
      persistent_events;
      failReason = null;
      shouldStop = false;
      // Type-safe event methods
      on(event, callback) {
        if (!this.persistent_events.has(event)) {
          this.persistent_events.set(event, /* @__PURE__ */ new Set());
        }
        this.persistent_events.get(event)?.add(callback);
        this.logger.debug("Registered Callback for Event: " + event);
        this.connection.on(event, callback);
      }
      off(event, callback) {
        if (!this.persistent_events.has(event)) {
          throw "Event Not Regsitered";
        }
        this.persistent_events.get(event)?.delete(callback);
        this.connection.off(event, callback);
      }
      constructor(session_token, videoElement, audioElement, iceServers, logLevel = Logger_1.LogLevel.DEBUG, transport_mode = "p2p", signaling = "websockets", SimliWSURL = "wss://api.simli.ai", audioBufferSize = 3e3) {
        if (audioBufferSize <= 0) {
          throw "Invalid Buffer Size, Can't be negative";
        }
        if (Math.floor(audioBufferSize) - audioBufferSize != 0) {
          throw "Invalid Buffer Size, Can't be a float";
        }
        if (!(SimliWSURL.startsWith("ws://") || SimliWSURL.startsWith("wss://")) || SimliWSURL.endsWith("/")) {
          throw "Invalid Simli WS URL";
        }
        this.audioBufferSize = audioBufferSize;
        this.session_token = session_token;
        this.transport = transport_mode;
        this.signaling = signaling;
        this.SimliWSURL = SimliWSURL;
        this.videoElement = videoElement;
        this.audioElement = audioElement;
        this.iceServers = iceServers;
        this.logger = new Logger_1.Logger(logLevel);
        let resolveFn;
        let rejectFn;
        this.connectionPromise = new Promise((resolve, reject) => {
          resolveFn = resolve;
          rejectFn = reject;
        });
        this.connectionResolve = resolveFn;
        this.connectionReject = rejectFn;
        this.persistent_events = /* @__PURE__ */ new Map();
        this.connectionTimeout = setTimeout(() => this.connectionReject("CONNECTION TIMED OUT"), this.CONNECTION_TIMEOUT_MS);
        switch (this.transport) {
          case "livekit":
            this.connection = new LivekitTransport_1.LivekitTransport(this.SimliWSURL, this.session_token, videoElement, audioElement, this.logger, this.connectionReject);
            break;
          case "p2p":
            if (!iceServers || iceServers.length == 0) {
              throw "Ice Servers Required for P2P Mode";
            }
            this.connection = new P2PTransport_1.P2PTransport(this.SimliWSURL, this.session_token, true, iceServers, videoElement, audioElement, this.logger, this.connectionReject);
            break;
          default:
            throw new Error("Not Implemented Yet");
        }
        this.connection.on("start", () => {
          this.connectionResolve();
          clearTimeout(this.connectionTimeout);
        });
        this.connection.on("unknown", (message) => this.logger.debug("UNKOWN MESSAGE FROM SERVER: " + message));
        this.connection.on("error", (message) => {
          this.failReason = message;
          this.connectionReject(message);
        });
      }
      resetConnections(videoElement, audioElement, iceServers) {
        this.failReason = null;
        let resolveFn;
        let rejectFn;
        this.connectionPromise = new Promise((resolve, reject) => {
          resolveFn = resolve;
          rejectFn = reject;
        });
        this.connectionResolve = resolveFn;
        this.connectionReject = rejectFn;
        this.connectionTimeout = setTimeout(() => this.connectionReject("Connection Timed Out"), this.CONNECTION_TIMEOUT_MS);
        switch (this.transport) {
          case "livekit":
            this.connection = new LivekitTransport_1.LivekitTransport(this.SimliWSURL, this.session_token, videoElement, audioElement, this.logger, this.connectionReject);
            break;
          case "p2p":
            if (!iceServers || iceServers.length == 0) {
              throw "Ice Servers Required for P2P Mode";
            }
            this.connection = new P2PTransport_1.P2PTransport(this.SimliWSURL, this.session_token, true, iceServers, videoElement, audioElement, this.logger, this.connectionReject);
            break;
          default:
            throw new Error("Not Implemented Yet");
        }
        this.connection.on("start", () => {
          this.connectionResolve();
          clearTimeout(this.connectionTimeout);
        });
        this.connection.on("error", (message) => {
          this.retryAttempt = this.MAX_RETRY_ATTEMPTS;
          this.connectionReject(message);
        });
        this.connection.on("unknown", (message) => this.logger.debug("UNKOWN MESSAGE FROM SERVER: " + message));
        this.persistent_events.forEach((callbacks, event) => {
          callbacks.forEach((callback) => {
            this.connection.on(event, callback);
          });
        });
      }
      async start() {
        if (this.shouldStop) {
          throw new Error("Disconnect Already Called, Can't reuse same SimliClient multiple times create a new SimliClient Object");
        }
        try {
          await this.connection.connect();
          await this.connectionPromise;
          this.retryAttempt = 0;
        } catch (error) {
          if (this.failReason) {
            throw error;
          }
          if (this.retryAttempt >= this.MAX_RETRY_ATTEMPTS)
            throw new Error("Too Many Retry Attempts Failed to connect");
          if (this.shouldStop) {
            this.shouldStop = false;
            throw new Error("Called Disconnect Before A Connecction succeeded");
          }
          this.logger.error("FAILED: " + error);
          await this.connection.disconnect();
          await new Promise((resolve) => setTimeout(resolve, this.RETRY_DELAY));
          this.retryAttempt += 1;
          if (this.retryAttempt > 2)
            this.transport = "livekit";
          this.resetConnections(this.videoElement, this.audioElement, this.iceServers);
          await this.start();
        }
      }
      async stop() {
        this.shouldStop = true;
        await this.connection.disconnect();
      }
      listenToMediastreamTrack(stream) {
        const source = this.audioContext.createMediaStreamSource(new MediaStream([stream]));
        this.sourceNode = source;
        this.attachSourceToWorklet(this.audioContext, source);
      }
      listenToAudioElement(audioEl) {
        const source = this.audioContext.createMediaElementSource(audioEl);
        this.attachSourceToWorklet(this.audioContext, source);
      }
      attachSourceToWorklet(audioContext, source) {
        audioContext.audioWorklet.addModule(URL.createObjectURL(new Blob([AudioProcessor(this.audioBufferSize)], {
          type: "application/javascript"
        }))).then(() => {
          this.audioWorklet = new AudioWorkletNode(audioContext, "audio-processor");
          if (this.audioWorklet === null) {
            throw new Error("SIMLI: AudioWorklet not initialized");
          }
          source.connect(this.audioWorklet);
          this.audioWorklet.port.onmessage = (event) => {
            if (event.data.type === "audioData") {
              this.connection.signalingConnection.sendAudioData(new Uint8Array(event.data.data.buffer));
            }
          };
        });
      }
      ClearBuffer = () => {
        this.connection.signalingConnection.sendSignal("SKIP");
      };
      sendAudioData(audioData) {
        this.connection.signalingConnection.sendAudioData(audioData);
      }
      sendAudioDataImmediate(audioData) {
        this.connection.signalingConnection.sendAudioDataImmediate(audioData);
      }
    };
    exports.SimliClient = SimliClient2;
  }
});

// node_modules/simli-client/dist/index.js
var require_dist = __commonJS({
  "node_modules/simli-client/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogLevel = exports.generateIceServers = exports.generateSimliSessionToken = exports.SimliClient = void 0;
    var Client_1 = require_Client();
    Object.defineProperty(exports, "SimliClient", { enumerable: true, get: function() {
      return Client_1.SimliClient;
    } });
    Object.defineProperty(exports, "generateSimliSessionToken", { enumerable: true, get: function() {
      return Client_1.generateSimliSessionToken;
    } });
    Object.defineProperty(exports, "generateIceServers", { enumerable: true, get: function() {
      return Client_1.generateIceServers;
    } });
    Object.defineProperty(exports, "LogLevel", { enumerable: true, get: function() {
      return Client_1.LogLevel;
    } });
  }
});

// entry.js
var import_simli_client = __toESM(require_dist());
var export_LogLevel = import_simli_client.LogLevel;
var export_SimliClient = import_simli_client.SimliClient;
export {
  export_LogLevel as LogLevel,
  export_SimliClient as SimliClient
};
