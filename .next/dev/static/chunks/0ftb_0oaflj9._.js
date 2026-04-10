(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/audio-processor/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/audio-processor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/audio-processor/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/const.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CORE_URL",
    ()=>CORE_URL,
    "CORE_VERSION",
    ()=>CORE_VERSION,
    "FFMessageType",
    ()=>FFMessageType,
    "MIME_TYPE_JAVASCRIPT",
    ()=>MIME_TYPE_JAVASCRIPT,
    "MIME_TYPE_WASM",
    ()=>MIME_TYPE_WASM
]);
const MIME_TYPE_JAVASCRIPT = "text/javascript";
const MIME_TYPE_WASM = "application/wasm";
const CORE_VERSION = "0.12.9";
const CORE_URL = `https://unpkg.com/@ffmpeg/core@${CORE_VERSION}/dist/umd/ffmpeg-core.js`;
var FFMessageType;
(function(FFMessageType) {
    FFMessageType["LOAD"] = "LOAD";
    FFMessageType["EXEC"] = "EXEC";
    FFMessageType["FFPROBE"] = "FFPROBE";
    FFMessageType["WRITE_FILE"] = "WRITE_FILE";
    FFMessageType["READ_FILE"] = "READ_FILE";
    FFMessageType["DELETE_FILE"] = "DELETE_FILE";
    FFMessageType["RENAME"] = "RENAME";
    FFMessageType["CREATE_DIR"] = "CREATE_DIR";
    FFMessageType["LIST_DIR"] = "LIST_DIR";
    FFMessageType["DELETE_DIR"] = "DELETE_DIR";
    FFMessageType["ERROR"] = "ERROR";
    FFMessageType["DOWNLOAD"] = "DOWNLOAD";
    FFMessageType["PROGRESS"] = "PROGRESS";
    FFMessageType["LOG"] = "LOG";
    FFMessageType["MOUNT"] = "MOUNT";
    FFMessageType["UNMOUNT"] = "UNMOUNT";
})(FFMessageType || (FFMessageType = {}));
}),
"[project]/audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generate an unique message ID.
 */ __turbopack_context__.s([
    "getMessageID",
    ()=>getMessageID
]);
const getMessageID = (()=>{
    let messageID = 0;
    return ()=>messageID++;
})();
}),
"[project]/audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERROR_IMPORT_FAILURE",
    ()=>ERROR_IMPORT_FAILURE,
    "ERROR_NOT_LOADED",
    ()=>ERROR_NOT_LOADED,
    "ERROR_TERMINATED",
    ()=>ERROR_TERMINATED,
    "ERROR_UNKNOWN_MESSAGE_TYPE",
    ()=>ERROR_UNKNOWN_MESSAGE_TYPE
]);
const ERROR_UNKNOWN_MESSAGE_TYPE = new Error("unknown message type");
const ERROR_NOT_LOADED = new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first");
const ERROR_TERMINATED = new Error("called FFmpeg.terminate()");
const ERROR_IMPORT_FAILURE = new Error("failed to import ffmpeg-core.js");
}),
"[project]/audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/worker.js (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/worker.0_quke8v7qnww.js");}),
"[project]/audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/worker.js [app-client] (ecmascript, worker loader)", ((__turbopack_context__) => {

__turbopack_context__.v(function(Ctor, opts) {
    return __turbopack_context__.b(Ctor, "static/chunks/turbopack-worker-[client-fs]__next_static_chunks_12ee_mp._.js", ["static/chunks/0ftb_@ffmpeg_ffmpeg_dist_esm_073tb73._.js","static/chunks/0ftb_@ffmpeg_ffmpeg_dist_esm_worker_0u_uju3.js","static/chunks/0u10_@ffmpeg_ffmpeg_dist_esm_worker_0jfrpgb.js"], opts);
});
}),
"[project]/audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/classes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FFmpeg",
    ()=>FFmpeg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/const.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/errors.js [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/classes.js")}`;
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
;
;
class FFmpeg {
    #worker = null;
    /**
     * #resolves and #rejects tracks Promise resolves and rejects to
     * be called when we receive message from web worker.
     */ #resolves = {};
    #rejects = {};
    #logEventCallbacks = [];
    #progressEventCallbacks = [];
    loaded = false;
    /**
     * register worker message event handlers.
     */ #registerHandlers = ()=>{
        if (this.#worker) {
            this.#worker.onmessage = ({ data: { id, type, data } })=>{
                switch(type){
                    case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].LOAD:
                        this.loaded = true;
                        this.#resolves[id](data);
                        break;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].MOUNT:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].UNMOUNT:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].EXEC:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].FFPROBE:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].WRITE_FILE:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].READ_FILE:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].DELETE_FILE:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].RENAME:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].CREATE_DIR:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].LIST_DIR:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].DELETE_DIR:
                        this.#resolves[id](data);
                        break;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].LOG:
                        this.#logEventCallbacks.forEach((f)=>f(data));
                        break;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].PROGRESS:
                        this.#progressEventCallbacks.forEach((f)=>f(data));
                        break;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].ERROR:
                        this.#rejects[id](data);
                        break;
                }
                delete this.#resolves[id];
                delete this.#rejects[id];
            };
        }
    };
    /**
     * Generic function to send messages to web worker.
     */ #send = ({ type, data }, trans = [], signal)=>{
        if (!this.#worker) {
            return Promise.reject(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_NOT_LOADED"]);
        }
        return new Promise((resolve, reject)=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMessageID"])();
            this.#worker && this.#worker.postMessage({
                id,
                type,
                data
            }, trans);
            this.#resolves[id] = resolve;
            this.#rejects[id] = reject;
            signal?.addEventListener("abort", ()=>{
                reject(new DOMException(`Message # ${id} was aborted`, "AbortError"));
            }, {
                once: true
            });
        });
    };
    on(event, callback) {
        if (event === "log") {
            this.#logEventCallbacks.push(callback);
        } else if (event === "progress") {
            this.#progressEventCallbacks.push(callback);
        }
    }
    off(event, callback) {
        if (event === "log") {
            this.#logEventCallbacks = this.#logEventCallbacks.filter((f)=>f !== callback);
        } else if (event === "progress") {
            this.#progressEventCallbacks = this.#progressEventCallbacks.filter((f)=>f !== callback);
        }
    }
    /**
     * Loads ffmpeg-core inside web worker. It is required to call this method first
     * as it initializes WebAssembly and other essential variables.
     *
     * @category FFmpeg
     * @returns `true` if ffmpeg core is loaded for the first time.
     */ load = ({ classWorkerURL, ...config } = {}, { signal } = {})=>{
        if (!this.#worker) {
            this.#worker = classWorkerURL ? new Worker(new URL(classWorkerURL, __TURBOPACK__import$2e$meta__.url), {
                type: "module"
            }) : // We need to duplicated the code here to enable webpack
            // to bundle worekr.js here.
            __turbopack_context__.r("[project]/audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/worker.js [app-client] (ecmascript, worker loader)")(Worker, {
                type: "module"
            });
            this.#registerHandlers();
        }
        return this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].LOAD,
            data: config
        }, undefined, signal);
    };
    /**
     * Execute ffmpeg command.
     *
     * @remarks
     * To avoid common I/O issues, ["-nostdin", "-y"] are prepended to the args
     * by default.
     *
     * @example
     * ```ts
     * const ffmpeg = new FFmpeg();
     * await ffmpeg.load();
     * await ffmpeg.writeFile("video.avi", ...);
     * // ffmpeg -i video.avi video.mp4
     * await ffmpeg.exec(["-i", "video.avi", "video.mp4"]);
     * const data = ffmpeg.readFile("video.mp4");
     * ```
     *
     * @returns `0` if no error, `!= 0` if timeout (1) or error.
     * @category FFmpeg
     */ exec = (/** ffmpeg command line args */ args, /**
     * milliseconds to wait before stopping the command execution.
     *
     * @defaultValue -1
     */ timeout = -1, { signal } = {})=>this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].EXEC,
            data: {
                args,
                timeout
            }
        }, undefined, signal);
    /**
     * Execute ffprobe command.
     *
     * @example
     * ```ts
     * const ffmpeg = new FFmpeg();
     * await ffmpeg.load();
     * await ffmpeg.writeFile("video.avi", ...);
     * // Getting duration of a video in seconds: ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 video.avi -o output.txt
     * await ffmpeg.ffprobe(["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", "video.avi", "-o", "output.txt"]);
     * const data = ffmpeg.readFile("output.txt");
     * ```
     *
     * @returns `0` if no error, `!= 0` if timeout (1) or error.
     * @category FFmpeg
     */ ffprobe = (/** ffprobe command line args */ args, /**
     * milliseconds to wait before stopping the command execution.
     *
     * @defaultValue -1
     */ timeout = -1, { signal } = {})=>this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].FFPROBE,
            data: {
                args,
                timeout
            }
        }, undefined, signal);
    /**
     * Terminate all ongoing API calls and terminate web worker.
     * `FFmpeg.load()` must be called again before calling any other APIs.
     *
     * @category FFmpeg
     */ terminate = ()=>{
        const ids = Object.keys(this.#rejects);
        // rejects all incomplete Promises.
        for (const id of ids){
            this.#rejects[id](__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_TERMINATED"]);
            delete this.#rejects[id];
            delete this.#resolves[id];
        }
        if (this.#worker) {
            this.#worker.terminate();
            this.#worker = null;
            this.loaded = false;
        }
    };
    /**
     * Write data to ffmpeg.wasm.
     *
     * @example
     * ```ts
     * const ffmpeg = new FFmpeg();
     * await ffmpeg.load();
     * await ffmpeg.writeFile("video.avi", await fetchFile("../video.avi"));
     * await ffmpeg.writeFile("text.txt", "hello world");
     * ```
     *
     * @category File System
     */ writeFile = (path, data, { signal } = {})=>{
        const trans = [];
        if (data instanceof Uint8Array) {
            trans.push(data.buffer);
        }
        return this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].WRITE_FILE,
            data: {
                path,
                data
            }
        }, trans, signal);
    };
    mount = (fsType, options, mountPoint)=>{
        const trans = [];
        return this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].MOUNT,
            data: {
                fsType,
                options,
                mountPoint
            }
        }, trans);
    };
    unmount = (mountPoint)=>{
        const trans = [];
        return this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].UNMOUNT,
            data: {
                mountPoint
            }
        }, trans);
    };
    /**
     * Read data from ffmpeg.wasm.
     *
     * @example
     * ```ts
     * const ffmpeg = new FFmpeg();
     * await ffmpeg.load();
     * const data = await ffmpeg.readFile("video.mp4");
     * ```
     *
     * @category File System
     */ readFile = (path, /**
     * File content encoding, supports two encodings:
     * - utf8: read file as text file, return data in string type.
     * - binary: read file as binary file, return data in Uint8Array type.
     *
     * @defaultValue binary
     */ encoding = "binary", { signal } = {})=>this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].READ_FILE,
            data: {
                path,
                encoding
            }
        }, undefined, signal);
    /**
     * Delete a file.
     *
     * @category File System
     */ deleteFile = (path, { signal } = {})=>this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].DELETE_FILE,
            data: {
                path
            }
        }, undefined, signal);
    /**
     * Rename a file or directory.
     *
     * @category File System
     */ rename = (oldPath, newPath, { signal } = {})=>this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].RENAME,
            data: {
                oldPath,
                newPath
            }
        }, undefined, signal);
    /**
     * Create a directory.
     *
     * @category File System
     */ createDir = (path, { signal } = {})=>this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].CREATE_DIR,
            data: {
                path
            }
        }, undefined, signal);
    /**
     * List directory contents.
     *
     * @category File System
     */ listDir = (path, { signal } = {})=>this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].LIST_DIR,
            data: {
                path
            }
        }, undefined, signal);
    /**
     * Delete an empty directory.
     *
     * @category File System
     */ deleteDir = (path, { signal } = {})=>this.#send({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFMessageType"].DELETE_DIR,
            data: {
                path
            }
        }, undefined, signal);
}
}),
"[project]/audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FFFSType",
    ()=>FFFSType
]);
var FFFSType;
(function(FFFSType) {
    FFFSType["MEMFS"] = "MEMFS";
    FFFSType["NODEFS"] = "NODEFS";
    FFFSType["NODERAWFS"] = "NODERAWFS";
    FFFSType["IDBFS"] = "IDBFS";
    FFFSType["WORKERFS"] = "WORKERFS";
    FFFSType["PROXYFS"] = "PROXYFS";
})(FFFSType || (FFFSType = {}));
}),
"[project]/audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$classes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/classes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/types.js [app-client] (ecmascript)");
;
;
}),
"[project]/audio-processor/node_modules/@ffmpeg/util/dist/esm/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERROR_INCOMPLETED_DOWNLOAD",
    ()=>ERROR_INCOMPLETED_DOWNLOAD,
    "ERROR_RESPONSE_BODY_READER",
    ()=>ERROR_RESPONSE_BODY_READER
]);
const ERROR_RESPONSE_BODY_READER = new Error("failed to get response body reader");
const ERROR_INCOMPLETED_DOWNLOAD = new Error("failed to complete download");
}),
"[project]/audio-processor/node_modules/@ffmpeg/util/dist/esm/const.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderContentLength",
    ()=>HeaderContentLength
]);
const HeaderContentLength = "Content-Length";
}),
"[project]/audio-processor/node_modules/@ffmpeg/util/dist/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadWithProgress",
    ()=>downloadWithProgress,
    "fetchFile",
    ()=>fetchFile,
    "importScript",
    ()=>importScript,
    "toBlobURL",
    ()=>toBlobURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@ffmpeg/util/dist/esm/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@ffmpeg/util/dist/esm/const.js [app-client] (ecmascript)");
;
;
const readFromBlobOrFile = (blob)=>new Promise((resolve, reject)=>{
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
            const { result } = fileReader;
            if (result instanceof ArrayBuffer) {
                resolve(new Uint8Array(result));
            } else {
                resolve(new Uint8Array());
            }
        };
        fileReader.onerror = (event)=>{
            reject(Error(`File could not be read! Code=${event?.target?.error?.code || -1}`));
        };
        fileReader.readAsArrayBuffer(blob);
    });
const fetchFile = async (file)=>{
    let data;
    if (typeof file === "string") {
        /* From base64 format */ if (/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(file)) {
            data = atob(file.split(",")[1]).split("").map((c)=>c.charCodeAt(0));
        /* From remote server/URL */ } else {
            data = await (await fetch(file)).arrayBuffer();
        }
    } else if (file instanceof URL) {
        data = await (await fetch(file)).arrayBuffer();
    } else if (file instanceof File || file instanceof Blob) {
        data = await readFromBlobOrFile(file);
    } else {
        return new Uint8Array();
    }
    return new Uint8Array(data);
};
const importScript = async (url)=>new Promise((resolve)=>{
        const script = document.createElement("script");
        const eventHandler = ()=>{
            script.removeEventListener("load", eventHandler);
            resolve();
        };
        script.src = url;
        script.type = "text/javascript";
        script.addEventListener("load", eventHandler);
        document.getElementsByTagName("head")[0].appendChild(script);
    });
const downloadWithProgress = async (url, cb)=>{
    const resp = await fetch(url);
    let buf;
    try {
        // Set total to -1 to indicate that there is not Content-Type Header.
        const total = parseInt(resp.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderContentLength"]) || "-1");
        const reader = resp.body?.getReader();
        if (!reader) throw __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_RESPONSE_BODY_READER"];
        const chunks = [];
        let received = 0;
        for(;;){
            const { done, value } = await reader.read();
            const delta = value ? value.length : 0;
            if (done) {
                if (total != -1 && total !== received) throw __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_INCOMPLETED_DOWNLOAD"];
                cb && cb({
                    url,
                    total,
                    received,
                    delta,
                    done
                });
                break;
            }
            chunks.push(value);
            received += delta;
            cb && cb({
                url,
                total,
                received,
                delta,
                done
            });
        }
        const data = new Uint8Array(received);
        let position = 0;
        for (const chunk of chunks){
            data.set(chunk, position);
            position += chunk.length;
        }
        buf = data.buffer;
    } catch (e) {
        console.log(`failed to send download progress event: `, e);
        // Fetch arrayBuffer directly when it is not possible to get progress.
        buf = await resp.arrayBuffer();
        cb && cb({
            url,
            total: buf.byteLength,
            received: buf.byteLength,
            delta: 0,
            done: true
        });
    }
    return buf;
};
const toBlobURL = async (url, mimeType, progress = false, cb)=>{
    const buf = progress ? await downloadWithProgress(url, cb) : await (await fetch(url)).arrayBuffer();
    const blob = new Blob([
        buf
    ], {
        type: mimeType
    });
    return URL.createObjectURL(blob);
};
}),
"[project]/audio-processor/node_modules/wavesurfer.js/dist/wavesurfer.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>P
]);
function t(t, e, i, n) {
    return new (i || (i = Promise))(function(s, r) {
        function o(t) {
            try {
                l(n.next(t));
            } catch (t) {
                r(t);
            }
        }
        function a(t) {
            try {
                l(n.throw(t));
            } catch (t) {
                r(t);
            }
        }
        function l(t) {
            var e;
            t.done ? s(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
                t(e);
            })).then(o, a);
        }
        l((n = n.apply(t, e || [])).next());
    });
}
"function" == typeof SuppressedError && SuppressedError;
class e {
    constructor(){
        this.listeners = {};
    }
    on(t, e, i) {
        if (this.listeners[t] || (this.listeners[t] = new Set), null == i ? void 0 : i.once) {
            const i = (...n)=>{
                this.un(t, i), e(...n);
            };
            return this.listeners[t].add(i), ()=>this.un(t, i);
        }
        return this.listeners[t].add(e), ()=>this.un(t, e);
    }
    un(t, e) {
        var i;
        null === (i = this.listeners[t]) || void 0 === i || i.delete(e);
    }
    once(t, e) {
        return this.on(t, e, {
            once: !0
        });
    }
    unAll() {
        this.listeners = {};
    }
    emit(t, ...e) {
        this.listeners[t] && this.listeners[t].forEach((t)=>t(...e));
    }
}
const i = {
    decode: function(e, i) {
        return t(this, void 0, void 0, function*() {
            const t = new AudioContext({
                sampleRate: i
            });
            try {
                return yield t.decodeAudioData(e);
            } finally{
                t.close();
            }
        });
    },
    createBuffer: function(t, e) {
        if (!t || 0 === t.length) throw new Error("channelData must be a non-empty array");
        if (e <= 0) throw new Error("duration must be greater than 0");
        if ("number" == typeof t[0] && (t = [
            t
        ]), !t[0] || 0 === t[0].length) throw new Error("channelData must contain non-empty channel arrays");
        !function(t) {
            const e = t[0];
            if (e.some((t)=>t > 1 || t < -1)) {
                const i = e.length;
                let n = 0;
                for(let t = 0; t < i; t++){
                    const i = Math.abs(e[t]);
                    i > n && (n = i);
                }
                for (const e of t)for(let t = 0; t < i; t++)e[t] /= n;
            }
        }(t);
        const i = t.map((t)=>t instanceof Float32Array ? t : Float32Array.from(t));
        return {
            duration: e,
            length: i[0].length,
            sampleRate: i[0].length / e,
            numberOfChannels: i.length,
            getChannelData: (t)=>{
                const e = i[t];
                if (!e) throw new Error(`Channel ${t} not found`);
                return e;
            },
            copyFromChannel: AudioBuffer.prototype.copyFromChannel,
            copyToChannel: AudioBuffer.prototype.copyToChannel
        };
    }
};
function n(t, e) {
    const i = e.xmlns ? document.createElementNS(e.xmlns, t) : document.createElement(t);
    for (const [t, s] of Object.entries(e))if ("children" === t && s) for (const [t, e] of Object.entries(s))e instanceof Node ? i.appendChild(e) : "string" == typeof e ? i.appendChild(document.createTextNode(e)) : i.appendChild(n(t, e));
    else "style" === t ? Object.assign(i.style, s) : "textContent" === t ? i.textContent = s : i.setAttribute(t, s.toString());
    return i;
}
function s(t, e, i) {
    const s = n(t, e || {});
    return null == i || i.appendChild(s), s;
}
var r = Object.freeze({
    __proto__: null,
    createElement: s,
    default: s
});
const o = {
    fetchBlob: function(e, i, n) {
        return t(this, void 0, void 0, function*() {
            const s = yield fetch(e, n);
            if (s.status >= 400) throw new Error(`Failed to fetch ${e}: ${s.status} (${s.statusText})`);
            return function(e, i) {
                t(this, void 0, void 0, function*() {
                    if (!e.body || !e.headers) return;
                    const t = e.body.getReader(), n = Number(e.headers.get("Content-Length")) || 0;
                    let s = 0;
                    const r = (t)=>{
                        s += (null == t ? void 0 : t.length) || 0;
                        const e = Math.round(s / n * 100);
                        i(e);
                    };
                    try {
                        for(;;){
                            const e = yield t.read();
                            if (e.done) break;
                            r(e.value);
                        }
                    } catch (t) {
                        console.warn("Progress tracking error:", t);
                    }
                });
            }(s.clone(), i), s.blob();
        });
    }
};
function a(t) {
    let e = t;
    const i = new Set;
    return {
        get value () {
            return e;
        },
        set (t) {
            Object.is(e, t) || (e = t, i.forEach((t)=>t(e)));
        },
        update (t) {
            this.set(t(e));
        },
        subscribe: (t)=>(i.add(t), ()=>i.delete(t))
    };
}
function l(t, e) {
    const i = a(t());
    return e.forEach((e)=>e.subscribe(()=>{
            const e = t();
            Object.is(i.value, e) || i.set(e);
        })), {
        get value () {
            return i.value;
        },
        subscribe: (t)=>i.subscribe(t)
    };
}
function h(t, e) {
    let i;
    const n = ()=>{
        i && (i(), i = void 0), i = t();
    }, s = e.map((t)=>t.subscribe(n));
    return n(), ()=>{
        i && (i(), i = void 0), s.forEach((t)=>t());
    };
}
class c extends e {
    get isPlayingSignal() {
        return this._isPlaying;
    }
    get currentTimeSignal() {
        return this._currentTime;
    }
    get durationSignal() {
        return this._duration;
    }
    get volumeSignal() {
        return this._volume;
    }
    get mutedSignal() {
        return this._muted;
    }
    get playbackRateSignal() {
        return this._playbackRate;
    }
    get seekingSignal() {
        return this._seeking;
    }
    constructor(t){
        super(), this.isExternalMedia = !1, this.reactiveMediaEventCleanups = [], t.media ? (this.media = t.media, this.isExternalMedia = !0) : this.media = document.createElement("audio"), this._isPlaying = a(!1), this._currentTime = a(0), this._duration = a(0), this._volume = a(this.media.volume), this._muted = a(this.media.muted), this._playbackRate = a(this.media.playbackRate || 1), this._seeking = a(!1), this.setupReactiveMediaEvents(), t.mediaControls && (this.media.controls = !0), t.autoplay && (this.media.autoplay = !0), null != t.playbackRate && this.onMediaEvent("canplay", ()=>{
            null != t.playbackRate && (this.media.playbackRate = t.playbackRate);
        }, {
            once: !0
        });
    }
    setupReactiveMediaEvents() {
        this.reactiveMediaEventCleanups.push(this.onMediaEvent("play", ()=>{
            this._isPlaying.set(!0);
        })), this.reactiveMediaEventCleanups.push(this.onMediaEvent("pause", ()=>{
            this._isPlaying.set(!1);
        })), this.reactiveMediaEventCleanups.push(this.onMediaEvent("ended", ()=>{
            this._isPlaying.set(!1);
        })), this.reactiveMediaEventCleanups.push(this.onMediaEvent("timeupdate", ()=>{
            this._currentTime.set(this.media.currentTime);
        })), this.reactiveMediaEventCleanups.push(this.onMediaEvent("durationchange", ()=>{
            this._duration.set(this.media.duration || 0);
        })), this.reactiveMediaEventCleanups.push(this.onMediaEvent("loadedmetadata", ()=>{
            this._duration.set(this.media.duration || 0);
        })), this.reactiveMediaEventCleanups.push(this.onMediaEvent("seeking", ()=>{
            this._seeking.set(!0);
        })), this.reactiveMediaEventCleanups.push(this.onMediaEvent("seeked", ()=>{
            this._seeking.set(!1);
        })), this.reactiveMediaEventCleanups.push(this.onMediaEvent("volumechange", ()=>{
            this._volume.set(this.media.volume), this._muted.set(this.media.muted);
        })), this.reactiveMediaEventCleanups.push(this.onMediaEvent("ratechange", ()=>{
            this._playbackRate.set(this.media.playbackRate);
        }));
    }
    onMediaEvent(t, e, i) {
        return this.media.addEventListener(t, e, i), ()=>this.media.removeEventListener(t, e, i);
    }
    getSrc() {
        return this.media.currentSrc || this.media.src || "";
    }
    revokeSrc() {
        const t = this.getSrc();
        t.startsWith("blob:") && URL.revokeObjectURL(t);
    }
    canPlayType(t) {
        return "" !== this.media.canPlayType(t);
    }
    setSrc(t, e) {
        const i = this.getSrc();
        if (t && i === t) return;
        this.revokeSrc();
        const n = e instanceof Blob && (this.canPlayType(e.type) || !t) ? URL.createObjectURL(e) : t;
        if (i && this.media.removeAttribute("src"), n || t) try {
            this.media.src = n;
        } catch (e) {
            this.media.src = t;
        }
    }
    destroy() {
        this.reactiveMediaEventCleanups.forEach((t)=>t()), this.reactiveMediaEventCleanups = [], this.isExternalMedia || (this.media.pause(), this.revokeSrc(), this.media.removeAttribute("src"), this.media.load(), this.media.remove());
    }
    setMediaElement(t) {
        this.reactiveMediaEventCleanups.forEach((t)=>t()), this.reactiveMediaEventCleanups = [], this.media = t, this.setupReactiveMediaEvents();
    }
    play() {
        return t(this, void 0, void 0, function*() {
            try {
                return yield this.media.play();
            } catch (t) {
                if (t instanceof DOMException && "AbortError" === t.name) return;
                throw t;
            }
        });
    }
    pause() {
        this.media.pause();
    }
    isPlaying() {
        return !this.media.paused && !this.media.ended;
    }
    setTime(t) {
        this.media.currentTime = Math.max(0, Math.min(t, this.getDuration()));
    }
    getDuration() {
        return this.media.duration;
    }
    getCurrentTime() {
        return this.media.currentTime;
    }
    getVolume() {
        return this.media.volume;
    }
    setVolume(t) {
        this.media.volume = t;
    }
    getMuted() {
        return this.media.muted;
    }
    setMuted(t) {
        this.media.muted = t;
    }
    getPlaybackRate() {
        return this.media.playbackRate;
    }
    isSeeking() {
        return this.media.seeking;
    }
    setPlaybackRate(t, e) {
        null != e && (this.media.preservesPitch = e), this.media.playbackRate = t;
    }
    getMediaElement() {
        return this.media;
    }
    setSinkId(t) {
        return this.media.setSinkId(t);
    }
}
function u({ maxTop: t, maxBottom: e, halfHeight: i, vScale: n, barMinHeight: s = 0, barAlign: r }) {
    let o = Math.round(t * i * n);
    let a = o + Math.round(e * i * n) || 1;
    return a < s && (a = s, r || (o = a / 2)), {
        topHeight: o,
        totalHeight: a
    };
}
function d({ barAlign: t, halfHeight: e, topHeight: i, totalHeight: n, canvasHeight: s }) {
    return "top" === t ? 0 : "bottom" === t ? s - n : e - i;
}
function p(t, e, i) {
    const n = e - t.left, s = i - t.top;
    return [
        n / t.width,
        s / t.height
    ];
}
function m(t) {
    return Boolean(t.barWidth || t.barGap || t.barAlign);
}
function g(t, e) {
    if (!m(e)) return t;
    const i = e.barWidth || .5, n = i + (e.barGap || i / 2);
    return 0 === n ? t : Math.floor(t / n) * n;
}
function v({ scrollLeft: t, totalWidth: e, numCanvases: i }) {
    if (0 === e) return [
        0
    ];
    const n = t / e, s = Math.floor(n * i);
    return [
        s - 1,
        s,
        s + 1
    ];
}
function f(t) {
    const e = t._cleanup;
    "function" == typeof e && e();
}
function b(t) {
    const e = a({
        scrollLeft: t.scrollLeft,
        scrollWidth: t.scrollWidth,
        clientWidth: t.clientWidth
    }), i = l(()=>(function(t) {
            const { scrollLeft: e, scrollWidth: i, clientWidth: n } = t;
            if (0 === i) return {
                startX: 0,
                endX: 1
            };
            const s = e / i, r = (e + n) / i;
            return {
                startX: Math.max(0, Math.min(1, s)),
                endX: Math.max(0, Math.min(1, r))
            };
        })(e.value), [
        e
    ]), n = l(()=>(function(t) {
            return {
                left: t.scrollLeft,
                right: t.scrollLeft + t.clientWidth
            };
        })(e.value), [
        e
    ]), s = ()=>{
        e.set({
            scrollLeft: t.scrollLeft,
            scrollWidth: t.scrollWidth,
            clientWidth: t.clientWidth
        });
    };
    t.addEventListener("scroll", s, {
        passive: !0
    });
    return {
        scrollData: e,
        percentages: i,
        bounds: n,
        cleanup: ()=>{
            t.removeEventListener("scroll", s), f(e);
        }
    };
}
class y extends e {
    constructor(t, e){
        super(), this.timeouts = [], this.isScrollable = !1, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = !1, this.subscriptions = [], this.unsubscribeOnScroll = [], this.dragStream = null, this.scrollStream = null, this.subscriptions = [], this.options = t;
        const i = this.parentFromOptionsContainer(t.container);
        this.parent = i;
        const [n, s] = this.initHtml();
        i.appendChild(n), this.container = n, this.scrollContainer = s.querySelector(".scroll"), this.wrapper = s.querySelector(".wrapper"), this.canvasWrapper = s.querySelector(".canvases"), this.progressWrapper = s.querySelector(".progress"), this.cursor = s.querySelector(".cursor"), e && s.appendChild(e), this.initEvents();
    }
    parentFromOptionsContainer(t) {
        let e;
        if ("string" == typeof t ? e = document.querySelector(t) : t instanceof HTMLElement && (e = t), !e) throw new Error("Container not found");
        return e;
    }
    initEvents() {
        this.wrapper.addEventListener("click", (t)=>{
            const e = this.wrapper.getBoundingClientRect(), [i, n] = p(e, t.clientX, t.clientY);
            this.emit("click", i, n);
        }), this.wrapper.addEventListener("dblclick", (t)=>{
            const e = this.wrapper.getBoundingClientRect(), [i, n] = p(e, t.clientX, t.clientY);
            this.emit("dblclick", i, n);
        }), !0 !== this.options.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.scrollStream = b(this.scrollContainer);
        const t = h(()=>{
            const { startX: t, endX: e } = this.scrollStream.percentages.value, { left: i, right: n } = this.scrollStream.bounds.value;
            this.emit("scroll", t, e, i, n);
        }, [
            this.scrollStream.percentages,
            this.scrollStream.bounds
        ]);
        if (this.subscriptions.push(t), "function" == typeof ResizeObserver) {
            const t = this.createDelay(100);
            this.resizeObserver = new ResizeObserver(()=>{
                t().then(()=>this.onContainerResize()).catch(()=>{});
            }), this.resizeObserver.observe(this.scrollContainer);
        }
    }
    onContainerResize() {
        const t = this.parent.clientWidth;
        t === this.lastContainerWidth && "auto" !== this.options.height || (this.lastContainerWidth = t, this.reRender(), this.emit("resize"));
    }
    initDrag() {
        if (this.dragStream) return;
        this.dragStream = function(t, e = {}) {
            const { threshold: i = 3, mouseButton: n = 0, touchDelay: s = 100 } = e, r = a(null), o = new Map, l = matchMedia("(pointer: coarse)").matches;
            let h = ()=>{};
            const c = (e)=>{
                if (e.button !== n) return;
                if (o.set(e.pointerId, e), o.size > 1) return;
                let a = e.clientX, c = e.clientY, u = !1;
                const d = Date.now(), p = t.getBoundingClientRect(), { left: m, top: g } = p, v = (t)=>{
                    if (t.defaultPrevented || o.size > 1) return;
                    if (l && Date.now() - d < s) return;
                    const e = t.clientX, n = t.clientY, h = e - a, p = n - c;
                    (u || Math.abs(h) > i || Math.abs(p) > i) && (t.preventDefault(), t.stopPropagation(), u || (r.set({
                        type: "start",
                        x: a - m,
                        y: c - g
                    }), u = !0), r.set({
                        type: "move",
                        x: e - m,
                        y: n - g,
                        deltaX: h,
                        deltaY: p
                    }), a = e, c = n);
                }, f = (t)=>{
                    if (o.delete(t.pointerId), u) {
                        const e = t.clientX, i = t.clientY;
                        r.set({
                            type: "end",
                            x: e - m,
                            y: i - g
                        });
                    }
                    h();
                }, b = (t)=>{
                    o.delete(t.pointerId), t.relatedTarget && t.relatedTarget !== document.documentElement || f(t);
                }, y = (t)=>{
                    u && (t.stopPropagation(), t.preventDefault());
                }, C = (t)=>{
                    t.defaultPrevented || o.size > 1 || u && t.preventDefault();
                };
                document.addEventListener("pointermove", v), document.addEventListener("pointerup", f), document.addEventListener("pointerout", b), document.addEventListener("pointercancel", b), document.addEventListener("touchmove", C, {
                    passive: !1
                }), document.addEventListener("click", y, {
                    capture: !0
                }), h = ()=>{
                    document.removeEventListener("pointermove", v), document.removeEventListener("pointerup", f), document.removeEventListener("pointerout", b), document.removeEventListener("pointercancel", b), document.removeEventListener("touchmove", C), setTimeout(()=>{
                        document.removeEventListener("click", y, {
                            capture: !0
                        });
                    }, 10);
                };
            };
            return t.addEventListener("pointerdown", c), {
                signal: r,
                cleanup: ()=>{
                    h(), t.removeEventListener("pointerdown", c), o.clear(), f(r);
                }
            };
        }(this.wrapper);
        const t = h(()=>{
            const t = this.dragStream.signal.value;
            if (!t) return;
            const e = this.wrapper.getBoundingClientRect().width, i = (n = t.x / e) < 0 ? 0 : n > 1 ? 1 : n;
            var n;
            "start" === t.type ? (this.isDragging = !0, this.emit("dragstart", i)) : "move" === t.type ? this.emit("drag", i) : "end" === t.type && (this.isDragging = !1, this.emit("dragend", i));
        }, [
            this.dragStream.signal
        ]);
        this.subscriptions.push(t);
    }
    initHtml() {
        const t = document.createElement("div"), e = t.attachShadow({
            mode: "open"
        }), i = this.options.cspNonce && "string" == typeof this.options.cspNonce ? this.options.cspNonce.replace(/"/g, "") : "";
        return e.innerHTML = `\n      <style${i ? ` nonce="${i}"` : ""}>\n        :host {\n          user-select: none;\n          min-width: 1px;\n        }\n        :host audio {\n          display: block;\n          width: 100%;\n        }\n        :host .scroll {\n          overflow-x: auto;\n          overflow-y: hidden;\n          width: 100%;\n          position: relative;\n        }\n        :host .noScrollbar {\n          scrollbar-color: transparent;\n          scrollbar-width: none;\n        }\n        :host .noScrollbar::-webkit-scrollbar {\n          display: none;\n          -webkit-appearance: none;\n        }\n        :host .wrapper {\n          position: relative;\n          overflow: visible;\n          z-index: 2;\n        }\n        :host .canvases {\n          min-height: ${this.getHeight(this.options.height, this.options.splitChannels)}px;\n          pointer-events: none;\n        }\n        :host .canvases > div {\n          position: relative;\n        }\n        :host canvas {\n          display: block;\n          position: absolute;\n          top: 0;\n          image-rendering: pixelated;\n        }\n        :host .progress {\n          pointer-events: none;\n          position: absolute;\n          z-index: 2;\n          top: 0;\n          left: 0;\n          width: 0;\n          height: 100%;\n          overflow: hidden;\n        }\n        :host .progress > div {\n          position: relative;\n        }\n        :host .cursor {\n          pointer-events: none;\n          position: absolute;\n          z-index: 5;\n          top: 0;\n          left: 0;\n          height: 100%;\n          border-radius: 2px;\n        }\n      </style>\n\n      <div class="scroll" part="scroll">\n        <div class="wrapper" part="wrapper">\n          <div class="canvases" part="canvases"></div>\n          <div class="progress" part="progress"></div>\n          <div class="cursor" part="cursor"></div>\n        </div>\n      </div>\n    `, [
            t,
            e
        ];
    }
    setOptions(t) {
        var e;
        if (this.options.container !== t.container) {
            const e = this.parentFromOptionsContainer(t.container);
            e.appendChild(this.container), this.parent = e;
        }
        !0 === t.dragToSeek || "object" == typeof this.options.dragToSeek ? this.initDrag() : (null === (e = this.dragStream) || void 0 === e || e.cleanup(), this.dragStream = null), this.options = t, this.reRender();
    }
    getWrapper() {
        return this.wrapper;
    }
    getWidth() {
        return this.scrollContainer.clientWidth;
    }
    getScroll() {
        return this.scrollContainer.scrollLeft;
    }
    setScroll(t) {
        this.scrollContainer.scrollLeft = t;
    }
    setScrollPercentage(t) {
        const { scrollWidth: e } = this.scrollContainer, i = e * t;
        this.setScroll(i);
    }
    destroy() {
        var t;
        this.subscriptions.forEach((t)=>t()), this.container.remove(), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null), null === (t = this.unsubscribeOnScroll) || void 0 === t || t.forEach((t)=>t()), this.unsubscribeOnScroll = [], this.dragStream && (this.dragStream.cleanup(), this.dragStream = null), this.scrollStream && (this.scrollStream.cleanup(), this.scrollStream = null);
    }
    createDelay(t = 10) {
        let e, i;
        const n = ()=>{
            e && (clearTimeout(e), e = void 0), i && (i(), i = void 0);
        };
        return this.timeouts.push(n), ()=>new Promise((s, r)=>{
                n(), i = r, e = setTimeout(()=>{
                    e = void 0, i = void 0, s();
                }, t);
            });
    }
    getHeight(t, e) {
        var i;
        const n = (null === (i = this.audioData) || void 0 === i ? void 0 : i.numberOfChannels) || 1;
        return function({ optionsHeight: t, optionsSplitChannels: e, parentHeight: i, numberOfChannels: n, defaultHeight: s = 128 }) {
            if (null == t) return s;
            const r = Number(t);
            if (!isNaN(r)) return r;
            if ("auto" === t) {
                const t = i || s;
                return (null == e ? void 0 : e.every((t)=>!t.overlay)) ? t / n : t;
            }
            return s;
        }({
            optionsHeight: t,
            optionsSplitChannels: e,
            parentHeight: this.parent.clientHeight,
            numberOfChannels: n,
            defaultHeight: 128
        });
    }
    convertColorValues(t, e) {
        return function(t, e, i) {
            if (!Array.isArray(t)) return t || "";
            if (0 === t.length) return "#999";
            if (t.length < 2) return t[0] || "";
            const n = document.createElement("canvas"), s = n.getContext("2d"), r = null != i ? i : n.height * e, o = s.createLinearGradient(0, 0, 0, r || e), a = 1 / (t.length - 1);
            return t.forEach((t, e)=>{
                o.addColorStop(e * a, t);
            }), o;
        }(t, this.getPixelRatio(), null == e ? void 0 : e.canvas.height);
    }
    getPixelRatio() {
        return t = window.devicePixelRatio, Math.max(1, t || 1);
        //TURBOPACK unreachable
        ;
        var t;
    }
    renderBarWaveform(t, e, i, n) {
        const { width: s, height: r } = i.canvas, { halfHeight: o, barWidth: a, barRadius: l, barIndexScale: h, barSpacing: c, barMinHeight: p } = function({ width: t, height: e, length: i, options: n, pixelRatio: s }) {
            const r = e / 2, o = n.barWidth ? n.barWidth * s : 1, a = n.barGap ? n.barGap * s : n.barWidth ? o / 2 : 0, l = o + a || 1;
            return {
                halfHeight: r,
                barWidth: o,
                barGap: a,
                barRadius: n.barRadius || 0,
                barMinHeight: n.barMinHeight ? n.barMinHeight * s : 0,
                barIndexScale: i > 0 ? t / l / i : 0,
                barSpacing: l
            };
        }({
            width: s,
            height: r,
            length: (t[0] || []).length,
            options: e,
            pixelRatio: this.getPixelRatio()
        }), m = function({ channelData: t, barIndexScale: e, barSpacing: i, barWidth: n, halfHeight: s, vScale: r, canvasHeight: o, barAlign: a, barMinHeight: l }) {
            const h = t[0] || [], c = t[1] || h, p = h.length, m = [];
            let g = 0, v = 0, f = 0;
            for(let t = 0; t <= p; t++){
                const p = Math.round(t * e);
                if (p > g) {
                    const { topHeight: t, totalHeight: e } = u({
                        maxTop: v,
                        maxBottom: f,
                        halfHeight: s,
                        vScale: r,
                        barMinHeight: l,
                        barAlign: a
                    }), h = d({
                        barAlign: a,
                        halfHeight: s,
                        topHeight: t,
                        totalHeight: e,
                        canvasHeight: o
                    });
                    m.push({
                        x: g * i,
                        y: h,
                        width: n,
                        height: e
                    }), g = p, v = 0, f = 0;
                }
                const b = Math.abs(h[t] || 0), y = Math.abs(c[t] || 0);
                b > v && (v = b), y > f && (f = y);
            }
            return m;
        }({
            channelData: t,
            barIndexScale: h,
            barSpacing: c,
            barWidth: a,
            halfHeight: o,
            vScale: n,
            canvasHeight: r,
            barAlign: e.barAlign,
            barMinHeight: p
        });
        i.beginPath();
        for (const t of m)l && "roundRect" in i ? i.roundRect(t.x, t.y, t.width, t.height, l) : i.rect(t.x, t.y, t.width, t.height);
        i.fill(), i.closePath();
    }
    renderLineWaveform(t, e, i, n) {
        const { width: s, height: r } = i.canvas, o = function({ channelData: t, width: e, height: i, vScale: n }) {
            const s = i / 2, r = t[0] || [];
            return [
                r,
                t[1] || r
            ].map((t, i)=>{
                const r = t.length, o = r ? e / r : 0, a = s, l = 0 === i ? -1 : 1, h = [
                    {
                        x: 0,
                        y: a
                    }
                ];
                let c = 0, u = 0;
                for(let e = 0; e <= r; e++){
                    const i = Math.round(e * o);
                    if (i > c) {
                        const t = a + (Math.round(u * s * n) || 1) * l;
                        h.push({
                            x: c,
                            y: t
                        }), c = i, u = 0;
                    }
                    const r = Math.abs(t[e] || 0);
                    r > u && (u = r);
                }
                return h.push({
                    x: c,
                    y: a
                }), h;
            });
        }({
            channelData: t,
            width: s,
            height: r,
            vScale: n
        });
        i.beginPath();
        for (const t of o)if (t.length) {
            i.moveTo(t[0].x, t[0].y);
            for(let e = 1; e < t.length; e++){
                const n = t[e];
                i.lineTo(n.x, n.y);
            }
        }
        i.fill(), i.closePath();
    }
    renderWaveform(t, e, i) {
        if (i.fillStyle = this.convertColorValues(e.waveColor, i), e.renderFunction) return void e.renderFunction(t, i);
        const n = function({ channelData: t, barHeight: e, normalize: i, maxPeak: n }) {
            var s;
            const r = e || 1;
            if (!i) return r;
            const o = t[0];
            if (!o || 0 === o.length) return r;
            let a = null != n ? n : 0;
            if (!n) for(let t = 0; t < o.length; t++){
                const e = null !== (s = o[t]) && void 0 !== s ? s : 0, i = Math.abs(e);
                i > a && (a = i);
            }
            return a ? r / a : r;
        }({
            channelData: t,
            barHeight: e.barHeight,
            normalize: e.normalize,
            maxPeak: e.maxPeak
        });
        m(e) ? this.renderBarWaveform(t, e, i, n) : this.renderLineWaveform(t, e, i, n);
    }
    renderSingleCanvas(t, e, i, n, s, r, o) {
        const a = this.getPixelRatio(), l = document.createElement("canvas");
        l.width = Math.round(i * a), l.height = Math.round(n * a), l.style.width = `${i}px`, l.style.height = `${n}px`, l.style.left = `${Math.round(s)}px`, r.appendChild(l);
        const h = l.getContext("2d");
        if (e.renderFunction ? (h.fillStyle = this.convertColorValues(e.waveColor, h), e.renderFunction(t, h)) : this.renderWaveform(t, e, h), l.width > 0 && l.height > 0) {
            const t = l.cloneNode(), i = t.getContext("2d");
            i.drawImage(l, 0, 0), i.globalCompositeOperation = "source-in", i.fillStyle = this.convertColorValues(e.progressColor, i), i.fillRect(0, 0, l.width, l.height), o.appendChild(t);
        }
    }
    renderMultiCanvas(t, e, i, n, s, r) {
        const o = this.getPixelRatio(), { clientWidth: a } = this.scrollContainer, l = i / o, h = function({ clientWidth: t, totalWidth: e, options: i }) {
            return g(Math.min(8e3, t, e), i);
        }({
            clientWidth: a,
            totalWidth: l,
            options: e
        });
        let c = {};
        if (0 === h) return;
        const u = (i)=>{
            if (i < 0 || i >= d) return;
            if (c[i]) return;
            c[i] = !0;
            const o = i * h;
            let a = Math.min(l - o, h);
            if (a = g(a, e), a <= 0) return;
            const u = function({ channelData: t, offset: e, clampedWidth: i, totalWidth: n }) {
                return t.map((t)=>{
                    const s = Math.floor(e / n * t.length), r = Math.floor((e + i) / n * t.length);
                    return t.slice(s, r);
                });
            }({
                channelData: t,
                offset: o,
                clampedWidth: a,
                totalWidth: l
            });
            this.renderSingleCanvas(u, e, a, n, o, s, r);
        }, d = Math.ceil(l / h);
        if (!this.isScrollable) {
            for(let t = 0; t < d; t++)u(t);
            return;
        }
        if (v({
            scrollLeft: this.scrollContainer.scrollLeft,
            totalWidth: l,
            numCanvases: d
        }).forEach((t)=>u(t)), d > 1) {
            const t = this.on("scroll", ()=>{
                const { scrollLeft: t } = this.scrollContainer;
                Object.keys(c).length > 10 && (s.innerHTML = "", r.innerHTML = "", c = {}), v({
                    scrollLeft: t,
                    totalWidth: l,
                    numCanvases: d
                }).forEach((t)=>u(t));
            });
            this.unsubscribeOnScroll.push(t);
        }
    }
    renderChannel(t, e, i, n) {
        var { overlay: s } = e, r = function(t, e) {
            var i = {};
            for(var n in t)Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for(n = Object.getOwnPropertySymbols(t); s < n.length; s++)e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (i[n[s]] = t[n[s]]);
            }
            return i;
        }(e, [
            "overlay"
        ]);
        const o = document.createElement("div"), a = this.getHeight(r.height, r.splitChannels);
        o.style.height = `${a}px`, s && n > 0 && (o.style.marginTop = `-${a}px`), this.canvasWrapper.style.minHeight = `${a}px`, this.canvasWrapper.appendChild(o);
        const l = o.cloneNode();
        this.progressWrapper.appendChild(l), this.renderMultiCanvas(t, r, i, a, o, l);
    }
    render(e) {
        return t(this, void 0, void 0, function*() {
            var t;
            this.timeouts.forEach((t)=>t()), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", null != this.options.width && (this.scrollContainer.style.width = "number" == typeof this.options.width ? `${this.options.width}px` : this.options.width);
            const i = this.getPixelRatio(), n = this.scrollContainer.clientWidth, { scrollWidth: s, isScrollable: r, useParentWidth: o, width: a } = function({ duration: t, minPxPerSec: e = 0, parentWidth: i, fillParent: n, pixelRatio: s }) {
                const r = Math.ceil(t * e), o = r > i, a = Boolean(n && !o);
                return {
                    scrollWidth: r,
                    isScrollable: o,
                    useParentWidth: a,
                    width: (a ? i : r) * s
                };
            }({
                duration: e.duration,
                minPxPerSec: this.options.minPxPerSec || 0,
                parentWidth: n,
                fillParent: this.options.fillParent,
                pixelRatio: i
            });
            if (this.isScrollable = r, this.wrapper.style.width = o ? "100%" : `${s}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = e, this.emit("render"), this.options.splitChannels) for(let i = 0; i < e.numberOfChannels; i++){
                const n = Object.assign(Object.assign({}, this.options), null === (t = this.options.splitChannels) || void 0 === t ? void 0 : t[i]);
                this.renderChannel([
                    e.getChannelData(i)
                ], n, a, i);
            }
            else {
                const t = [
                    e.getChannelData(0)
                ];
                e.numberOfChannels > 1 && t.push(e.getChannelData(1)), this.renderChannel(t, this.options, a, 0);
            }
            Promise.resolve().then(()=>this.emit("rendered"));
        });
    }
    reRender() {
        if (this.unsubscribeOnScroll.forEach((t)=>t()), this.unsubscribeOnScroll = [], !this.audioData) return;
        const { scrollWidth: t } = this.scrollContainer, { right: e } = this.progressWrapper.getBoundingClientRect();
        if (this.render(this.audioData), this.isScrollable && t !== this.scrollContainer.scrollWidth) {
            const { right: t } = this.progressWrapper.getBoundingClientRect(), i = function(t) {
                const e = 2 * t;
                return (e < 0 ? Math.floor(e) : Math.ceil(e)) / 2;
            }(t - e);
            this.scrollContainer.scrollLeft += i;
        }
    }
    zoom(t) {
        this.options.minPxPerSec = t, this.reRender();
    }
    scrollIntoView(t, e = !1) {
        var i;
        const { scrollLeft: n, scrollWidth: s, clientWidth: r } = this.scrollContainer, o = t * s, a = n, l = n + r, h = r / 2;
        if (this.isDragging) {
            const t = 30;
            o + t > l ? this.scrollContainer.scrollLeft += t : o - t < a && (this.scrollContainer.scrollLeft -= t);
        } else {
            (o < a || o > l) && (this.scrollContainer.scrollLeft = o - (this.options.autoCenter ? h : 0));
            const t = o - n - h;
            if (e && this.options.autoCenter && t > 0) {
                const e = null === (i = this.audioData) || void 0 === i ? void 0 : i.duration;
                if (void 0 === e || e <= 0) return void (this.scrollContainer.scrollLeft += t);
                const n = s / e;
                this.scrollContainer.scrollLeft += n <= 600 ? Math.min(t, 10) : t;
            }
        }
    }
    renderProgress(t, e) {
        if (isNaN(t)) return;
        const i = 100 * t;
        this.canvasWrapper.style.clipPath = `polygon(${i}% 0%, 100% 0%, 100% 100%, ${i}% 100%)`, this.progressWrapper.style.width = `${i}%`, this.cursor.style.left = `${i}%`, this.cursor.style.transform = this.options.cursorWidth ? `translateX(-${t * this.options.cursorWidth}px)` : "", this.isScrollable && this.options.autoScroll && this.audioData && this.audioData.duration > 0 && this.scrollIntoView(t, e);
    }
    exportImage(e, i, n) {
        return t(this, void 0, void 0, function*() {
            const t = this.canvasWrapper.querySelectorAll("canvas");
            if (!t.length) throw new Error("No waveform data");
            if ("dataURL" === n) {
                const n = Array.from(t).map((t)=>t.toDataURL(e, i));
                return Promise.resolve(n);
            }
            return Promise.all(Array.from(t).map((t)=>new Promise((n, s)=>{
                    t.toBlob((t)=>{
                        t ? n(t) : s(new Error("Could not export image"));
                    }, e, i);
                })));
        });
    }
}
class C extends e {
    constructor(){
        super(...arguments), this.animationFrameId = null, this.isRunning = !1;
    }
    start() {
        if (this.isRunning) return;
        this.isRunning = !0;
        const t = ()=>{
            this.isRunning && (this.emit("tick"), this.animationFrameId = requestAnimationFrame(t));
        };
        t();
    }
    stop() {
        this.isRunning = !1, null !== this.animationFrameId && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null);
    }
    destroy() {
        this.stop();
    }
}
class S extends e {
    constructor(t = new AudioContext){
        super(), this.bufferNode = null, this.playStartTime = 0, this.playbackPosition = 0, this._muted = !1, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = !0, this.crossOrigin = null, this.seeking = !1, this.autoplay = !1, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = t, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
    }
    load() {
        return t(this, void 0, void 0, function*() {});
    }
    get src() {
        return this.currentSrc;
    }
    set src(t) {
        if (this.currentSrc = t, this._duration = void 0, !t) return this.buffer = null, void this.emit("emptied");
        fetch(t).then((e)=>{
            if (e.status >= 400) throw new Error(`Failed to fetch ${t}: ${e.status} (${e.statusText})`);
            return e.arrayBuffer();
        }).then((e)=>this.currentSrc !== t ? null : this.audioContext.decodeAudioData(e)).then((e)=>{
            this.currentSrc === t && (this.buffer = e, this.emit("loadedmetadata"), this.emit("canplay"), this.autoplay && this.play());
        }).catch((t)=>{
            console.error("WebAudioPlayer load error:", t);
        });
    }
    _play() {
        if (!this.paused) return;
        this.paused = !1, this.bufferNode && (this.bufferNode.onended = null, this.bufferNode.disconnect()), this.bufferNode = this.audioContext.createBufferSource(), this.buffer && (this.bufferNode.buffer = this.buffer), this.bufferNode.playbackRate.value = this._playbackRate, this.bufferNode.connect(this.gainNode);
        let t = this.playbackPosition;
        (t >= this.duration || t < 0) && (t = 0, this.playbackPosition = 0), this.bufferNode.start(this.audioContext.currentTime, t), this.playStartTime = this.audioContext.currentTime, this.bufferNode.onended = ()=>{
            this.currentTime >= this.duration && (this.pause(), this.emit("ended"));
        };
    }
    _pause() {
        var t;
        this.paused = !0, null === (t = this.bufferNode) || void 0 === t || t.stop(), this.playbackPosition += (this.audioContext.currentTime - this.playStartTime) * this._playbackRate;
    }
    play() {
        return t(this, void 0, void 0, function*() {
            this.paused && (this._play(), this.emit("play"));
        });
    }
    pause() {
        this.paused || (this._pause(), this.emit("pause"));
    }
    stopAt(t) {
        const e = t - this.currentTime, i = this.bufferNode;
        null == i || i.stop(this.audioContext.currentTime + e), null == i || i.addEventListener("ended", ()=>{
            i === this.bufferNode && (this.bufferNode = null, this.pause());
        }, {
            once: !0
        });
    }
    setSinkId(e) {
        return t(this, void 0, void 0, function*() {
            return this.audioContext.setSinkId(e);
        });
    }
    get playbackRate() {
        return this._playbackRate;
    }
    set playbackRate(t) {
        const e = !this.paused;
        e && this._pause(), this._playbackRate = t, e && this._play(), this.bufferNode && (this.bufferNode.playbackRate.value = t);
    }
    get currentTime() {
        return this.paused ? this.playbackPosition : this.playbackPosition + (this.audioContext.currentTime - this.playStartTime) * this._playbackRate;
    }
    set currentTime(t) {
        const e = !this.paused;
        e && this._pause(), this.playbackPosition = t, e && this._play(), this.emit("seeking"), this.emit("timeupdate");
    }
    get duration() {
        var t, e;
        return null !== (t = this._duration) && void 0 !== t ? t : (null === (e = this.buffer) || void 0 === e ? void 0 : e.duration) || 0;
    }
    set duration(t) {
        this._duration = t;
    }
    get volume() {
        return this.gainNode.gain.value;
    }
    set volume(t) {
        this.gainNode.gain.value = t, this.emit("volumechange");
    }
    get muted() {
        return this._muted;
    }
    set muted(t) {
        this._muted !== t && (this._muted = t, this._muted ? this.gainNode.disconnect() : this.gainNode.connect(this.audioContext.destination));
    }
    canPlayType(t) {
        return /^(audio|video)\//.test(t);
    }
    getGainNode() {
        return this.gainNode;
    }
    getChannelData() {
        const t = [];
        if (!this.buffer) return t;
        const e = this.buffer.numberOfChannels;
        for(let i = 0; i < e; i++)t.push(this.buffer.getChannelData(i));
        return t;
    }
    removeAttribute(t) {
        switch(t){
            case "src":
                this.src = "";
                break;
            case "playbackRate":
                this.playbackRate = 0;
                break;
            case "currentTime":
                this.currentTime = 0;
                break;
            case "duration":
                this.duration = 0;
                break;
            case "volume":
                this.volume = 0;
                break;
            case "muted":
                this.muted = !1;
        }
    }
}
const E = {
    waveColor: "#999",
    progressColor: "#555",
    cursorWidth: 1,
    minPxPerSec: 0,
    fillParent: !0,
    interact: !0,
    dragToSeek: !1,
    autoScroll: !0,
    autoCenter: !0,
    sampleRate: 8e3
};
class P extends c {
    static create(t) {
        return new P(t);
    }
    getState() {
        return this.wavesurferState;
    }
    getRenderer() {
        return this.renderer;
    }
    constructor(t){
        const e = t.media || ("WebAudio" === t.backend ? new S : void 0);
        super({
            media: e,
            mediaControls: t.mediaControls,
            autoplay: t.autoplay,
            playbackRate: t.audioRate
        }), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.reactiveCleanups = [], this.options = Object.assign({}, E, t);
        const { state: i, actions: n } = function(t) {
            var e, i, n, s, r, o;
            const h = null !== (e = null == t ? void 0 : t.currentTime) && void 0 !== e ? e : a(0), c = null !== (i = null == t ? void 0 : t.duration) && void 0 !== i ? i : a(0), u = null !== (n = null == t ? void 0 : t.isPlaying) && void 0 !== n ? n : a(!1), d = null !== (s = null == t ? void 0 : t.isSeeking) && void 0 !== s ? s : a(!1), p = null !== (r = null == t ? void 0 : t.volume) && void 0 !== r ? r : a(1), m = null !== (o = null == t ? void 0 : t.playbackRate) && void 0 !== o ? o : a(1), g = a(null), v = a(null), f = a(""), b = a(0), y = a(0), C = l(()=>!u.value, [
                u
            ]), S = l(()=>null !== g.value, [
                g
            ]), E = l(()=>S.value && c.value > 0, [
                S,
                c
            ]), P = l(()=>h.value, [
                h
            ]), w = l(()=>c.value > 0 ? h.value / c.value : 0, [
                h,
                c
            ]);
            return {
                state: {
                    currentTime: h,
                    duration: c,
                    isPlaying: u,
                    isPaused: C,
                    isSeeking: d,
                    volume: p,
                    playbackRate: m,
                    audioBuffer: g,
                    peaks: v,
                    url: f,
                    zoom: b,
                    scrollPosition: y,
                    canPlay: S,
                    isReady: E,
                    progress: P,
                    progressPercent: w
                },
                actions: {
                    setCurrentTime: (t)=>{
                        const e = Math.max(0, Math.min(c.value || 1 / 0, t));
                        h.set(e);
                    },
                    setDuration: (t)=>{
                        c.set(Math.max(0, t));
                    },
                    setPlaying: (t)=>{
                        u.set(t);
                    },
                    setSeeking: (t)=>{
                        d.set(t);
                    },
                    setVolume: (t)=>{
                        const e = Math.max(0, Math.min(1, t));
                        p.set(e);
                    },
                    setPlaybackRate: (t)=>{
                        const e = Math.max(.1, Math.min(16, t));
                        m.set(e);
                    },
                    setAudioBuffer: (t)=>{
                        g.set(t), t && c.set(t.duration);
                    },
                    setPeaks: (t)=>{
                        v.set(t);
                    },
                    setUrl: (t)=>{
                        f.set(t);
                    },
                    setZoom: (t)=>{
                        b.set(Math.max(0, t));
                    },
                    setScrollPosition: (t)=>{
                        y.set(Math.max(0, t));
                    }
                }
            };
        }({
            isPlaying: this.isPlayingSignal,
            currentTime: this.currentTimeSignal,
            duration: this.durationSignal,
            volume: this.volumeSignal,
            playbackRate: this.playbackRateSignal,
            isSeeking: this.seekingSignal
        });
        this.wavesurferState = i, this.wavesurferActions = n, this.timer = new C;
        const s = e ? void 0 : this.getMediaElement();
        this.renderer = new y(this.options, s), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initReactiveState(), this.initPlugins();
        const r = this.options.url || this.getSrc() || "";
        Promise.resolve().then(()=>{
            this.emit("init");
            const { peaks: t, duration: e } = this.options;
            (r || t && e) && this.load(r, t, e).catch((t)=>{
                this.emit("error", t instanceof Error ? t : new Error(String(t)));
            });
        });
    }
    updateProgress(t = this.getCurrentTime()) {
        return this.renderer.renderProgress(t / this.getDuration(), this.isPlaying()), t;
    }
    initTimerEvents() {
        this.subscriptions.push(this.timer.on("tick", ()=>{
            if (!this.isSeeking()) {
                const t = this.updateProgress();
                this.emit("timeupdate", t), this.emit("audioprocess", t), null != this.stopAtPosition && this.isPlaying() && t >= this.stopAtPosition && this.pause();
            }
        }));
    }
    initReactiveState() {
        this.reactiveCleanups.push(function(t, e) {
            const i = [];
            i.push(h(()=>{
                const i = t.isPlaying.value;
                e.emit(i ? "play" : "pause");
            }, [
                t.isPlaying
            ])), i.push(h(()=>{
                const i = t.currentTime.value;
                e.emit("timeupdate", i), t.isPlaying.value && e.emit("audioprocess", i);
            }, [
                t.currentTime,
                t.isPlaying
            ])), i.push(h(()=>{
                t.isSeeking.value && e.emit("seeking", t.currentTime.value);
            }, [
                t.isSeeking,
                t.currentTime
            ]));
            let n = !1;
            i.push(h(()=>{
                t.isReady.value && !n && (n = !0, e.emit("ready", t.duration.value));
            }, [
                t.isReady,
                t.duration
            ]));
            let s = !1;
            return i.push(h(()=>{
                const i = t.isPlaying.value, n = t.currentTime.value, r = t.duration.value, o = r > 0 && n >= r;
                s && !i && o && e.emit("finish"), s = i && o;
            }, [
                t.isPlaying,
                t.currentTime,
                t.duration
            ])), i.push(h(()=>{
                const i = t.zoom.value;
                i > 0 && e.emit("zoom", i);
            }, [
                t.zoom
            ])), ()=>{
                i.forEach((t)=>t());
            };
        }(this.wavesurferState, {
            emit: this.emit.bind(this)
        }));
    }
    initPlayerEvents() {
        this.isPlaying() && (this.emit("play"), this.timer.start()), this.mediaSubscriptions.push(this.onMediaEvent("timeupdate", ()=>{
            const t = this.updateProgress();
            this.emit("timeupdate", t);
        }), this.onMediaEvent("play", ()=>{
            this.emit("play"), this.timer.start();
        }), this.onMediaEvent("pause", ()=>{
            this.emit("pause"), this.timer.stop(), this.stopAtPosition = null;
        }), this.onMediaEvent("emptied", ()=>{
            this.timer.stop(), this.stopAtPosition = null;
        }), this.onMediaEvent("ended", ()=>{
            this.emit("timeupdate", this.getDuration()), this.emit("finish"), this.stopAtPosition = null;
        }), this.onMediaEvent("seeking", ()=>{
            this.emit("seeking", this.getCurrentTime());
        }), this.onMediaEvent("error", ()=>{
            var t;
            this.emit("error", null !== (t = this.getMediaElement().error) && void 0 !== t ? t : new Error("Media error")), this.stopAtPosition = null;
        }));
    }
    initRendererEvents() {
        this.subscriptions.push(this.renderer.on("click", (t, e)=>{
            this.options.interact && (this.seekTo(t), this.emit("interaction", t * this.getDuration()), this.emit("click", t, e));
        }), this.renderer.on("dblclick", (t, e)=>{
            this.emit("dblclick", t, e);
        }), this.renderer.on("scroll", (t, e, i, n)=>{
            const s = this.getDuration();
            this.emit("scroll", t * s, e * s, i, n);
        }), this.renderer.on("render", ()=>{
            this.emit("redraw");
        }), this.renderer.on("rendered", ()=>{
            this.emit("redrawcomplete");
        }), this.renderer.on("dragstart", (t)=>{
            this.emit("dragstart", t);
        }), this.renderer.on("dragend", (t)=>{
            this.emit("dragend", t);
        }), this.renderer.on("resize", ()=>{
            this.emit("resize");
        }));
        {
            let t;
            const e = this.renderer.on("drag", (e)=>{
                var i;
                if (!this.options.interact) return;
                this.renderer.renderProgress(e), clearTimeout(t);
                let n = 0;
                const s = this.options.dragToSeek;
                this.isPlaying() ? n = 0 : !0 === s ? n = 200 : s && "object" == typeof s && (n = null !== (i = s.debounceTime) && void 0 !== i ? i : 200), t = setTimeout(()=>{
                    this.seekTo(e);
                }, n), this.emit("interaction", e * this.getDuration()), this.emit("drag", e);
            });
            this.subscriptions.push(()=>{
                clearTimeout(t), e();
            });
        }
    }
    initPlugins() {
        var t;
        (null === (t = this.options.plugins) || void 0 === t ? void 0 : t.length) && this.options.plugins.forEach((t)=>{
            this.registerPlugin(t);
        });
    }
    unsubscribePlayerEvents() {
        this.mediaSubscriptions.forEach((t)=>t()), this.mediaSubscriptions = [];
    }
    setOptions(t) {
        this.options = Object.assign({}, this.options, t), t.duration && !t.peaks && (this.decodedData = i.createBuffer(this.exportPeaks(), t.duration)), t.peaks && t.duration && (this.decodedData = i.createBuffer(t.peaks, t.duration)), this.renderer.setOptions(this.options), t.audioRate && this.setPlaybackRate(t.audioRate), null != t.mediaControls && (this.getMediaElement().controls = t.mediaControls);
    }
    registerPlugin(t) {
        if (this.plugins.includes(t)) return t;
        t._init(this), this.plugins.push(t);
        const e = t.once("destroy", ()=>{
            this.plugins = this.plugins.filter((e)=>e !== t), this.subscriptions = this.subscriptions.filter((t)=>t !== e);
        });
        return this.subscriptions.push(e), t;
    }
    unregisterPlugin(t) {
        this.plugins = this.plugins.filter((e)=>e !== t), t.destroy();
    }
    getWrapper() {
        return this.renderer.getWrapper();
    }
    getWidth() {
        return this.renderer.getWidth();
    }
    getScroll() {
        return this.renderer.getScroll();
    }
    setScroll(t) {
        return this.renderer.setScroll(t);
    }
    setScrollTime(t) {
        const e = t / this.getDuration();
        this.renderer.setScrollPercentage(e);
    }
    getActivePlugins() {
        return this.plugins;
    }
    loadAudio(e, n, s, r) {
        return t(this, void 0, void 0, function*() {
            var t;
            if (this.emit("load", e), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, null === (t = this.abortController) || void 0 === t || t.abort(), this.abortController = null, !n && !s) {
                const t = this.options.fetchParams || {};
                window.AbortController && !t.signal && (this.abortController = new AbortController, t.signal = this.abortController.signal);
                const i = (t)=>this.emit("loading", t);
                n = yield o.fetchBlob(e, i, t);
                const s = this.options.blobMimeType;
                s && (n = new Blob([
                    n
                ], {
                    type: s
                }));
            }
            this.setSrc(e, n);
            const a = yield new Promise((t)=>{
                const e = r || this.getDuration();
                e ? t(e) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", ()=>t(this.getDuration()), {
                    once: !0
                }));
            });
            if (!e && !n) {
                const t = this.getMediaElement();
                t instanceof S && (t.duration = a);
            }
            if (s) this.decodedData = i.createBuffer(s, a || 0);
            else if (n) {
                const t = yield n.arrayBuffer();
                this.decodedData = yield i.decode(t, this.options.sampleRate);
            }
            this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
        });
    }
    load(e, i, n) {
        return t(this, void 0, void 0, function*() {
            try {
                return yield this.loadAudio(e, void 0, i, n);
            } catch (t) {
                throw this.emit("error", t), t;
            }
        });
    }
    loadBlob(e, i, n) {
        return t(this, void 0, void 0, function*() {
            try {
                return yield this.loadAudio("", e, i, n);
            } catch (t) {
                throw this.emit("error", t), t;
            }
        });
    }
    zoom(t) {
        if (!this.decodedData) throw new Error("No audio loaded");
        this.renderer.zoom(t), this.emit("zoom", t);
    }
    getDecodedData() {
        return this.decodedData;
    }
    exportPeaks({ channels: t = 2, maxLength: e = 8e3, precision: i = 1e4 } = {}) {
        if (!this.decodedData) throw new Error("The audio has not been decoded yet");
        const n = Math.min(t, this.decodedData.numberOfChannels), s = [];
        for(let t = 0; t < n; t++){
            const n = this.decodedData.getChannelData(t), r = [], o = n.length / e;
            for(let t = 0; t < e; t++){
                const e = n.slice(Math.floor(t * o), Math.ceil((t + 1) * o));
                let s = 0;
                for(let t = 0; t < e.length; t++){
                    const i = e[t];
                    Math.abs(i) > Math.abs(s) && (s = i);
                }
                r.push(Math.round(s * i) / i);
            }
            s.push(r);
        }
        return s;
    }
    getDuration() {
        let t = super.getDuration() || 0;
        return 0 !== t && t !== 1 / 0 || !this.decodedData || (t = this.decodedData.duration), t;
    }
    toggleInteraction(t) {
        this.options.interact = t;
    }
    setTime(t) {
        this.stopAtPosition = null, super.setTime(t), this.updateProgress(t), this.emit("timeupdate", t);
    }
    seekTo(t) {
        const e = this.getDuration() * t;
        this.setTime(e);
    }
    play(e, i) {
        const n = Object.create(null, {
            play: {
                get: ()=>super.play
            }
        });
        return t(this, void 0, void 0, function*() {
            null != e && this.setTime(e);
            const t = yield n.play.call(this);
            return null != i && (this.media instanceof S ? this.media.stopAt(i) : this.stopAtPosition = i), t;
        });
    }
    playPause() {
        return t(this, void 0, void 0, function*() {
            return this.isPlaying() ? this.pause() : this.play();
        });
    }
    stop() {
        this.pause(), this.setTime(0);
    }
    skip(t) {
        this.setTime(this.getCurrentTime() + t);
    }
    empty() {
        this.load("", [
            [
                0
            ]
        ], .001);
    }
    setMediaElement(t) {
        this.unsubscribePlayerEvents(), super.setMediaElement(t), this.initPlayerEvents();
    }
    exportImage() {
        return t(this, arguments, void 0, function*(t = "image/png", e = 1, i = "dataURL") {
            return this.renderer.exportImage(t, e, i);
        });
    }
    destroy() {
        var t;
        this.emit("destroy"), null === (t = this.abortController) || void 0 === t || t.abort(), this.plugins.forEach((t)=>t.destroy()), this.subscriptions.forEach((t)=>t()), this.unsubscribePlayerEvents(), this.reactiveCleanups.forEach((t)=>t()), this.reactiveCleanups = [], this.timer.destroy(), this.renderer.destroy(), super.destroy();
    }
}
P.BasePlugin = class extends e {
    constructor(t){
        super(), this.subscriptions = [], this.isDestroyed = !1, this.options = t;
    }
    onInit() {}
    _init(t) {
        this.isDestroyed && (this.subscriptions = [], this.isDestroyed = !1), this.wavesurfer = t, this.onInit();
    }
    destroy() {
        this.emit("destroy"), this.subscriptions.forEach((t)=>t()), this.subscriptions = [], this.isDestroyed = !0, this.wavesurfer = void 0;
    }
}, P.dom = r;
;
}),
"[project]/audio-processor/node_modules/wavesurfer.js/dist/plugins/regions.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>d
]);
class t {
    constructor(){
        this.listeners = {};
    }
    on(t, e, i) {
        if (this.listeners[t] || (this.listeners[t] = new Set), null == i ? void 0 : i.once) {
            const i = (...n)=>{
                this.un(t, i), e(...n);
            };
            return this.listeners[t].add(i), ()=>this.un(t, i);
        }
        return this.listeners[t].add(e), ()=>this.un(t, e);
    }
    un(t, e) {
        var i;
        null === (i = this.listeners[t]) || void 0 === i || i.delete(e);
    }
    once(t, e) {
        return this.on(t, e, {
            once: !0
        });
    }
    unAll() {
        this.listeners = {};
    }
    emit(t, ...e) {
        this.listeners[t] && this.listeners[t].forEach((t)=>t(...e));
    }
}
class e extends t {
    constructor(t){
        super(), this.subscriptions = [], this.isDestroyed = !1, this.options = t;
    }
    onInit() {}
    _init(t) {
        this.isDestroyed && (this.subscriptions = [], this.isDestroyed = !1), this.wavesurfer = t, this.onInit();
    }
    destroy() {
        this.emit("destroy"), this.subscriptions.forEach((t)=>t()), this.subscriptions = [], this.isDestroyed = !0, this.wavesurfer = void 0;
    }
}
function i(t, e) {
    const n = e.xmlns ? document.createElementNS(e.xmlns, t) : document.createElement(t);
    for (const [t, s] of Object.entries(e))if ("children" === t && s) for (const [t, e] of Object.entries(s))e instanceof Node ? n.appendChild(e) : "string" == typeof e ? n.appendChild(document.createTextNode(e)) : n.appendChild(i(t, e));
    else "style" === t ? Object.assign(n.style, s) : "textContent" === t ? n.textContent = s : n.setAttribute(t, s.toString());
    return n;
}
function n(t, e, n) {
    const s = i(t, e || {});
    return null == n || n.appendChild(s), s;
}
function s(t) {
    let e = t;
    const i = new Set;
    return {
        get value () {
            return e;
        },
        set (t) {
            Object.is(e, t) || (e = t, i.forEach((t)=>t(e)));
        },
        update (t) {
            this.set(t(e));
        },
        subscribe: (t)=>(i.add(t), ()=>i.delete(t))
    };
}
function r(t, e) {
    let i;
    const n = ()=>{
        i && (i(), i = void 0), i = t();
    }, s = e.map((t)=>t.subscribe(n));
    return n(), ()=>{
        i && (i(), i = void 0), s.forEach((t)=>t());
    };
}
function o(t, e) {
    const i = s(null), n = (t)=>{
        i.set(t);
    };
    return t.addEventListener(e, n), i._cleanup = ()=>{
        t.removeEventListener(e, n);
    }, i;
}
function l(t) {
    const e = t._cleanup;
    "function" == typeof e && e();
}
function h(t, e = {}) {
    const { threshold: i = 3, mouseButton: n = 0, touchDelay: r = 100 } = e, o = s(null), h1 = new Map, a = matchMedia("(pointer: coarse)").matches;
    let d = ()=>{};
    const c = (e)=>{
        if (e.button !== n) return;
        if (h1.set(e.pointerId, e), h1.size > 1) return;
        let s = e.clientX, l = e.clientY, c = !1;
        const u = Date.now(), v = t.getBoundingClientRect(), { left: p, top: g } = v, m = (t)=>{
            if (t.defaultPrevented || h1.size > 1) return;
            if (a && Date.now() - u < r) return;
            const e = t.clientX, n = t.clientY, d = e - s, v = n - l;
            (c || Math.abs(d) > i || Math.abs(v) > i) && (t.preventDefault(), t.stopPropagation(), c || (o.set({
                type: "start",
                x: s - p,
                y: l - g
            }), c = !0), o.set({
                type: "move",
                x: e - p,
                y: n - g,
                deltaX: d,
                deltaY: v
            }), s = e, l = n);
        }, f = (t)=>{
            if (h1.delete(t.pointerId), c) {
                const e = t.clientX, i = t.clientY;
                o.set({
                    type: "end",
                    x: e - p,
                    y: i - g
                });
            }
            d();
        }, b = (t)=>{
            h1.delete(t.pointerId), t.relatedTarget && t.relatedTarget !== document.documentElement || f(t);
        }, E = (t)=>{
            c && (t.stopPropagation(), t.preventDefault());
        }, C = (t)=>{
            t.defaultPrevented || h1.size > 1 || c && t.preventDefault();
        };
        document.addEventListener("pointermove", m), document.addEventListener("pointerup", f), document.addEventListener("pointerout", b), document.addEventListener("pointercancel", b), document.addEventListener("touchmove", C, {
            passive: !1
        }), document.addEventListener("click", E, {
            capture: !0
        }), d = ()=>{
            document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", f), document.removeEventListener("pointerout", b), document.removeEventListener("pointercancel", b), document.removeEventListener("touchmove", C), setTimeout(()=>{
                document.removeEventListener("click", E, {
                    capture: !0
                });
            }, 10);
        };
    };
    t.addEventListener("pointerdown", c);
    return {
        signal: o,
        cleanup: ()=>{
            d(), t.removeEventListener("pointerdown", c), h1.clear(), l(o);
        }
    };
}
class a extends t {
    constructor(t, e, i = 0){
        var n, s, r, o, l, h, a, d, c, u;
        super(), this.totalDuration = e, this.numberOfChannels = i, this.element = null, this.minLength = 0, this.maxLength = 1 / 0, this.contentEditable = !1, this.subscriptions = [], this.updatingSide = void 0, this.isRemoved = !1, this.subscriptions = [], this.id = t.id || `region-${Math.random().toString(32).slice(2)}`, this.start = this.clampPosition(t.start), this.end = this.clampPosition(null !== (n = t.end) && void 0 !== n ? n : t.start), this.drag = null === (s = t.drag) || void 0 === s || s, this.resize = null === (r = t.resize) || void 0 === r || r, this.resizeStart = null === (o = t.resizeStart) || void 0 === o || o, this.resizeEnd = null === (l = t.resizeEnd) || void 0 === l || l, this.color = null !== (h = t.color) && void 0 !== h ? h : "rgba(0, 0, 0, 0.1)", this.minLength = null !== (a = t.minLength) && void 0 !== a ? a : this.minLength, this.maxLength = null !== (d = t.maxLength) && void 0 !== d ? d : this.maxLength, this.channelIdx = null !== (c = t.channelIdx) && void 0 !== c ? c : -1, this.contentEditable = null !== (u = t.contentEditable) && void 0 !== u ? u : this.contentEditable, this.element = this.initElement(), this.setContent(t.content), this.setPart(), this.renderPosition(), this.initMouseEvents();
    }
    clampPosition(t) {
        return Math.max(0, Math.min(this.totalDuration, t));
    }
    setPart() {
        var t;
        const e = this.start === this.end;
        null === (t = this.element) || void 0 === t || t.setAttribute("part", `${e ? "marker" : "region"} ${this.id}`);
    }
    addResizeHandles(t) {
        const e = {
            position: "absolute",
            zIndex: "2",
            width: "6px",
            height: "100%",
            top: "0",
            cursor: "ew-resize",
            wordBreak: "keep-all"
        }, i = n("div", {
            part: "region-handle region-handle-left",
            style: Object.assign(Object.assign({}, e), {
                left: "0",
                borderLeft: "2px solid rgba(0, 0, 0, 0.5)",
                borderRadius: "2px 0 0 2px"
            })
        }, t), s = n("div", {
            part: "region-handle region-handle-right",
            style: Object.assign(Object.assign({}, e), {
                right: "0",
                borderRight: "2px solid rgba(0, 0, 0, 0.5)",
                borderRadius: "0 2px 2px 0"
            })
        }, t), o = h(i, {
            threshold: 1
        }), l = h(s, {
            threshold: 1
        }), a = r(()=>{
            const t = o.signal.value;
            t && ("move" === t.type && void 0 !== t.deltaX ? this.onResize(t.deltaX, "start") : "end" === t.type && this.onEndResizing("start"));
        }, [
            o.signal
        ]), d = r(()=>{
            const t = l.signal.value;
            t && ("move" === t.type && void 0 !== t.deltaX ? this.onResize(t.deltaX, "end") : "end" === t.type && this.onEndResizing("end"));
        }, [
            l.signal
        ]);
        this.subscriptions.push(()=>{
            a(), d(), o.cleanup(), l.cleanup();
        });
    }
    removeResizeHandles(t) {
        const e = t.querySelector('[part*="region-handle-left"]'), i = t.querySelector('[part*="region-handle-right"]');
        e && t.removeChild(e), i && t.removeChild(i);
    }
    initElement() {
        if (this.isRemoved) return null;
        const t = this.start === this.end;
        let e = 0, i = 100;
        this.channelIdx >= 0 && this.numberOfChannels > 0 && this.channelIdx < this.numberOfChannels && (i = 100 / this.numberOfChannels, e = i * this.channelIdx);
        const s = n("div", {
            style: {
                position: "absolute",
                top: `${e}%`,
                height: `${i}%`,
                backgroundColor: t ? "none" : this.color,
                borderLeft: t ? "2px solid " + this.color : "none",
                borderRadius: "2px",
                boxSizing: "border-box",
                transition: "background-color 0.2s ease",
                cursor: this.drag ? "grab" : "default",
                pointerEvents: "all"
            }
        });
        return !t && this.resize && this.addResizeHandles(s), s;
    }
    renderPosition() {
        if (!this.element) return;
        const t = this.start / this.totalDuration, e = (this.totalDuration - this.end) / this.totalDuration;
        this.element.style.left = 100 * t + "%", this.element.style.right = 100 * e + "%";
    }
    toggleCursor(t) {
        var e;
        this.drag && (null === (e = this.element) || void 0 === e ? void 0 : e.style) && (this.element.style.cursor = t ? "grabbing" : "grab");
    }
    initMouseEvents() {
        const { element: t } = this;
        if (!t) return;
        const e = o(t, "click"), i = o(t, "mouseenter"), n = o(t, "mouseleave"), s = o(t, "dblclick"), a = o(t, "pointerdown"), d = o(t, "pointerup"), c = e.subscribe((t)=>t && this.emit("click", t)), u = i.subscribe((t)=>t && this.emit("over", t)), v = n.subscribe((t)=>t && this.emit("leave", t)), p = s.subscribe((t)=>t && this.emit("dblclick", t)), g = a.subscribe((t)=>t && this.toggleCursor(!0)), m = d.subscribe((t)=>t && this.toggleCursor(!1));
        this.subscriptions.push(()=>{
            c(), u(), v(), p(), g(), m(), l(e), l(i), l(n), l(s), l(a), l(d);
        });
        const f = h(t), b = r(()=>{
            const t = f.signal.value;
            t && ("start" === t.type ? this.toggleCursor(!0) : "move" === t.type && void 0 !== t.deltaX ? this.onMove(t.deltaX) : "end" === t.type && (this.toggleCursor(!1), this.drag && this.emit("update-end")));
        }, [
            f.signal
        ]);
        this.subscriptions.push(()=>{
            b(), f.cleanup();
        }), this.contentEditable && this.content && (this.contentClickListener = (t)=>this.onContentClick(t), this.contentBlurListener = ()=>this.onContentBlur(), this.content.addEventListener("click", this.contentClickListener), this.content.addEventListener("blur", this.contentBlurListener));
    }
    _onUpdate(t, e, i) {
        var n;
        if (!(null === (n = this.element) || void 0 === n ? void 0 : n.parentElement)) return;
        const { width: s } = this.element.parentElement.getBoundingClientRect(), r = t / s * this.totalDuration;
        let o = e && "start" !== e ? this.start : this.start + r, l = e && "end" !== e ? this.end : this.end + r;
        const h = void 0 !== i;
        h && this.updatingSide && this.updatingSide !== e && ("start" === this.updatingSide ? o = i : l = i), o = Math.max(0, o), l = Math.min(this.totalDuration, l);
        const a = l - o;
        this.updatingSide = e;
        const d = a >= this.minLength && a <= this.maxLength;
        o <= l && (d || h) && (this.start = o, this.end = l, this.renderPosition(), this.emit("update", e));
    }
    onMove(t) {
        this.drag && this._onUpdate(t);
    }
    onResize(t, e) {
        this.resize && (this.resizeStart || "start" !== e) && (this.resizeEnd || "end" !== e) && this._onUpdate(t, e);
    }
    onEndResizing(t) {
        this.resize && (this.emit("update-end", t), this.updatingSide = void 0);
    }
    onContentClick(t) {
        t.stopPropagation();
        t.target.focus(), this.emit("click", t);
    }
    onContentBlur() {
        this.emit("update-end");
    }
    _setTotalDuration(t) {
        this.totalDuration = t, this.renderPosition();
    }
    play(t) {
        this.emit("play", t && this.end !== this.start ? this.end : void 0);
    }
    getContent(t = !1) {
        var e;
        return t ? this.content || void 0 : this.element instanceof HTMLElement ? (null === (e = this.content) || void 0 === e ? void 0 : e.innerHTML) || void 0 : "";
    }
    setContent(t) {
        var e;
        if (this.element) if (this.content && this.contentEditable && (this.contentClickListener && this.content.removeEventListener("click", this.contentClickListener), this.contentBlurListener && this.content.removeEventListener("blur", this.contentBlurListener)), null === (e = this.content) || void 0 === e || e.remove(), t) {
            if ("string" == typeof t) {
                const e = this.start === this.end;
                this.content = n("div", {
                    style: {
                        padding: `0.2em ${e ? .2 : .4}em`,
                        display: "inline-block"
                    },
                    textContent: t
                });
            } else this.content = t;
            this.contentEditable && (this.content.contentEditable = "true", this.contentClickListener = (t)=>this.onContentClick(t), this.contentBlurListener = ()=>this.onContentBlur(), this.content.addEventListener("click", this.contentClickListener), this.content.addEventListener("blur", this.contentBlurListener)), this.content.setAttribute("part", "region-content"), this.element.appendChild(this.content), this.emit("content-changed");
        } else this.content = void 0;
    }
    setOptions(t) {
        var e, i;
        if (this.element) {
            if (t.color && (this.color = t.color, this.element.style.backgroundColor = this.color), void 0 !== t.drag && (this.drag = t.drag, this.element.style.cursor = this.drag ? "grab" : "default"), void 0 !== t.start || void 0 !== t.end) {
                const n = this.start === this.end;
                this.start = this.clampPosition(null !== (e = t.start) && void 0 !== e ? e : this.start), this.end = this.clampPosition(null !== (i = t.end) && void 0 !== i ? i : n ? this.start : this.end), this.renderPosition(), this.setPart(), this.emit("render");
            }
            if (t.content && this.setContent(t.content), t.id && (this.id = t.id, this.setPart()), void 0 !== t.resize && t.resize !== this.resize) {
                const e = this.start === this.end;
                this.resize = t.resize, this.resize && !e ? this.addResizeHandles(this.element) : this.removeResizeHandles(this.element);
            }
            void 0 !== t.resizeStart && (this.resizeStart = t.resizeStart), void 0 !== t.resizeEnd && (this.resizeEnd = t.resizeEnd);
        }
    }
    remove() {
        this.isRemoved = !0, this.emit("remove"), this.subscriptions.forEach((t)=>t()), this.subscriptions = [], this.content && this.contentEditable && (this.contentClickListener && (this.content.removeEventListener("click", this.contentClickListener), this.contentClickListener = void 0), this.contentBlurListener && (this.content.removeEventListener("blur", this.contentBlurListener), this.contentBlurListener = void 0)), this.element && (this.element.remove(), this.element = null), this.unAll();
    }
}
class d extends e {
    constructor(t){
        super(t), this.regions = [], this.regionsContainer = this.initRegionsContainer();
    }
    static create(t) {
        return new d(t);
    }
    onInit() {
        if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
        this.wavesurfer.getWrapper().appendChild(this.regionsContainer), this.subscriptions.push(this.wavesurfer.on("ready", (t)=>{
            this.regions.forEach((e)=>e._setTotalDuration(t));
        }));
        let t = [];
        this.subscriptions.push(this.wavesurfer.on("timeupdate", (e)=>{
            const i = this.regions.filter((t)=>t.start <= e && (t.end === t.start ? t.start + .05 : t.end) >= e);
            i.forEach((e)=>{
                t.includes(e) || this.emit("region-in", e);
            }), t.forEach((t)=>{
                i.includes(t) || this.emit("region-out", t);
            }), t = i;
        }));
    }
    initRegionsContainer() {
        return n("div", {
            part: "regions-container",
            style: {
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                zIndex: "5",
                pointerEvents: "none"
            }
        });
    }
    getRegions() {
        return this.regions;
    }
    avoidOverlapping(t) {
        t.content && !t.isRemoved && setTimeout(()=>{
            const e = t.content, i = e.getBoundingClientRect(), n = this.regions.indexOf(t), s = this.regions.slice(0, n).filter((t)=>!t.isRemoved).map((e)=>{
                if (e === t || !e.content) return 0;
                const n = e.content.getBoundingClientRect();
                return i.left < n.left + n.width && n.left < i.left + i.width ? n.height + 2 : 0;
            }).reduce((t, e)=>t + e, 0);
            e.style.marginTop = `${s}px`;
        }, 10);
    }
    adjustScroll(t) {
        var e, i;
        if (!t.element) return;
        const n = null === (i = null === (e = this.wavesurfer) || void 0 === e ? void 0 : e.getWrapper()) || void 0 === i ? void 0 : i.parentElement;
        if (!n) return;
        const { clientWidth: s, scrollWidth: r } = n;
        if (r <= s) return;
        const o = n.getBoundingClientRect(), l = t.element.getBoundingClientRect(), h = l.left - o.left, a = l.right - o.left;
        h < 0 ? n.scrollLeft += h : a > s && (n.scrollLeft += a - s);
    }
    virtualAppend(t, e, i) {
        const n = ()=>{
            if (!this.wavesurfer) return;
            const n = this.wavesurfer.getWidth(), s = this.wavesurfer.getScroll(), r = e.clientWidth, o = this.wavesurfer.getDuration(), l = Math.round(t.start / o * r), h = l + (Math.round((t.end - t.start) / o * r) || 1) > s && l < s + n;
            h && !i.parentElement ? e.appendChild(i) : !h && i.parentElement && i.remove();
        };
        setTimeout(()=>{
            if (!this.wavesurfer || !t.element) return;
            n();
            const e = this.wavesurfer.on("scroll", n), i = this.wavesurfer.on("zoom", n), s = this.wavesurfer.on("resize", n), r = t.on("render", n);
            this.subscriptions.push(e, i, s, r), t.once("remove", ()=>{
                e(), i(), s(), r();
            });
        }, 0);
    }
    saveRegion(t) {
        if (!t.element) return;
        this.virtualAppend(t, this.regionsContainer, t.element), this.avoidOverlapping(t), this.regions.push(t);
        const e = [
            t.on("update", (e)=>{
                e || this.adjustScroll(t), this.emit("region-update", t, e);
            }),
            t.on("update-end", (e)=>{
                this.avoidOverlapping(t), this.emit("region-updated", t, e);
            }),
            t.on("play", (e)=>{
                var i;
                null === (i = this.wavesurfer) || void 0 === i || i.play(t.start, e);
            }),
            t.on("click", (e)=>{
                this.emit("region-clicked", t, e);
            }),
            t.on("dblclick", (e)=>{
                this.emit("region-double-clicked", t, e);
            }),
            t.on("content-changed", ()=>{
                this.emit("region-content-changed", t);
            }),
            t.once("remove", ()=>{
                e.forEach((t)=>t()), this.regions = this.regions.filter((e)=>e !== t), this.emit("region-removed", t);
            })
        ];
        this.subscriptions.push(...e), this.emit("region-created", t);
    }
    addRegion(t) {
        var e, i;
        if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
        const n = this.wavesurfer.getDuration(), s = null === (i = null === (e = this.wavesurfer) || void 0 === e ? void 0 : e.getDecodedData()) || void 0 === i ? void 0 : i.numberOfChannels, r = new a(t, n, s);
        return this.emit("region-initialized", r), n ? this.saveRegion(r) : this.subscriptions.push(this.wavesurfer.once("ready", (t)=>{
            r._setTotalDuration(t), this.saveRegion(r);
        })), r;
    }
    enableDragSelection(t, e = 3) {
        var i;
        const n = null === (i = this.wavesurfer) || void 0 === i ? void 0 : i.getWrapper();
        if (!(n && n instanceof HTMLElement)) return ()=>{};
        let s = null, o = 0, l = 0;
        const d = h(n, {
            threshold: e
        }), c = r(()=>{
            var e, i;
            const n = d.signal.value;
            if (n) if ("start" === n.type) {
                if (o = n.x, !this.wavesurfer) return;
                const r = this.wavesurfer.getDuration(), h = null === (i = null === (e = this.wavesurfer) || void 0 === e ? void 0 : e.getDecodedData()) || void 0 === i ? void 0 : i.numberOfChannels, { width: d } = this.wavesurfer.getWrapper().getBoundingClientRect();
                l = o / d * r;
                const c = n.x / d * r, u = (n.x + 5) / d * r;
                s = new a(Object.assign(Object.assign({}, t), {
                    start: c,
                    end: u
                }), r, h), this.emit("region-initialized", s), s.element && this.regionsContainer.appendChild(s.element);
            } else "move" === n.type && void 0 !== n.deltaX ? s && s._onUpdate(n.deltaX, n.x > o ? "end" : "start", l) : "end" === n.type && s && (this.saveRegion(s), s.updatingSide = void 0, s = null);
        }, [
            d.signal
        ]);
        return ()=>{
            c(), d.cleanup();
        };
    }
    clearRegions() {
        this.regions.slice().forEach((t)=>t.remove()), this.regions = [];
    }
    destroy() {
        this.clearRegions(), super.destroy(), this.regionsContainer.remove();
    }
}
;
}),
"[project]/audio-processor/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getComputedStyle",
    ()=>getComputedStyle,
    "getContainingBlock",
    ()=>getContainingBlock,
    "getDocumentElement",
    ()=>getDocumentElement,
    "getFrameElement",
    ()=>getFrameElement,
    "getNearestOverflowAncestor",
    ()=>getNearestOverflowAncestor,
    "getNodeName",
    ()=>getNodeName,
    "getNodeScroll",
    ()=>getNodeScroll,
    "getOverflowAncestors",
    ()=>getOverflowAncestors,
    "getParentNode",
    ()=>getParentNode,
    "getWindow",
    ()=>getWindow,
    "isContainingBlock",
    ()=>isContainingBlock,
    "isElement",
    ()=>isElement,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isLastTraversableNode",
    ()=>isLastTraversableNode,
    "isNode",
    ()=>isNode,
    "isOverflowElement",
    ()=>isOverflowElement,
    "isShadowRoot",
    ()=>isShadowRoot,
    "isTableElement",
    ()=>isTableElement,
    "isTopLayer",
    ()=>isTopLayer,
    "isWebKit",
    ()=>isWebKit
]);
function hasWindow() {
    return typeof window !== 'undefined';
}
function getNodeName(node) {
    if (isNode(node)) {
        return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
}
function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === 'undefined') {
        return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
    const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== 'inline' && display !== 'contents';
}
function isTableElement(element) {
    return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
    try {
        if (element.matches(':popover-open')) {
            return true;
        }
    } catch (_e) {
    // no-op
    }
    try {
        return element.matches(':modal');
    } catch (_e) {
        return false;
    }
}
const willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
const containRe = /paint|layout|strict|content/;
const isNotNone = (value)=>!!value && value !== 'none';
let isWebKitValue;
function isContainingBlock(elementOrCss) {
    const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    // https://drafts.csswg.org/css-transforms-2/#individual-transforms
    return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || '') || containRe.test(css.contain || '');
}
function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while(isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)){
        if (isContainingBlock(currentNode)) {
            return currentNode;
        } else if (isTopLayer(currentNode)) {
            return null;
        }
        currentNode = getParentNode(currentNode);
    }
    return null;
}
function isWebKit() {
    if (isWebKitValue == null) {
        isWebKitValue = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('-webkit-backdrop-filter', 'none');
    }
    return isWebKitValue;
}
function isLastTraversableNode(node) {
    return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
    if (isElement(element)) {
        return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
        };
    }
    return {
        scrollLeft: element.scrollX,
        scrollTop: element.scrollY
    };
}
function getParentNode(node) {
    if (getNodeName(node) === 'html') {
        return node;
    }
    const result = // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
        return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
        return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
        list = [];
    }
    if (traverseIframes === void 0) {
        traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
        const frameElement = getFrameElement(win);
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    } else {
        return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
    }
}
function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
;
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRefWithInit",
    ()=>useRefWithInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const UNINITIALIZED = {};
function useRefWithInit(init, initArg) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
        ref.current = init(initArg);
    }
    return ref;
}
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStableCallback",
    ()=>useStableCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-client] (ecmascript)");
'use client';
;
;
// https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379
const useInsertionEffect = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)];
const useSafeInsertionEffect = // React 17 doesn't have useInsertionEffect.
useInsertionEffect && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
useInsertionEffect !== __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useLayoutEffect ? useInsertionEffect : (fn)=>fn();
function useStableCallback(callback) {
    const stable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])(createStableCallback).current;
    stable.next = callback;
    useSafeInsertionEffect(stable.effect);
    return stable.trampoline;
}
function createStableCallback() {
    const stable = {
        next: undefined,
        callback: assertNotCalled,
        trampoline: (...args)=>stable.callback?.(...args),
        effect: ()=>{
            stable.callback = stable.next;
        }
    };
    return stable;
}
function assertNotCalled() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw /* minify-error-disabled */ new Error('Base UI: Cannot call an event handler while rendering.');
    }
}
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/error.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "error",
    ()=>error,
    "reset",
    ()=>reset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
let set;
if ("TURBOPACK compile-time truthy", 1) {
    set = new Set();
}
function error(...messages) {
    if ("TURBOPACK compile-time truthy", 1) {
        const messageKey = messages.join(' ');
        if (!set.has(messageKey)) {
            set.add(messageKey);
            console.error(`Base UI: ${messageKey}`);
        }
    }
}
function reset() {
    set?.clear();
}
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/safeReact.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SafeReact",
    ()=>SafeReact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const SafeReact = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
};
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsoLayoutEffect",
    ()=>useIsoLayoutEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const noop = ()=>{};
const useIsoLayoutEffect = typeof document !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : noop;
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/mergeObjects.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeObjects",
    ()=>mergeObjects
]);
function mergeObjects(a, b) {
    if (a && !b) {
        return a;
    }
    if (!a && b) {
        return b;
    }
    if (a || b) {
        return {
            ...a,
            ...b
        };
    }
    return undefined;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeEventPreventable",
    ()=>makeEventPreventable,
    "mergeClassNames",
    ()=>mergeClassNames,
    "mergeProps",
    ()=>mergeProps,
    "mergePropsN",
    ()=>mergePropsN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$mergeObjects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/mergeObjects.js [app-client] (ecmascript)");
;
const EMPTY_PROPS = {};
function mergeProps(a, b, c, d, e) {
    // We need to mutably own `merged`
    let merged = {
        ...resolvePropsGetter(a, EMPTY_PROPS)
    };
    if (b) {
        merged = mergeOne(merged, b);
    }
    if (c) {
        merged = mergeOne(merged, c);
    }
    if (d) {
        merged = mergeOne(merged, d);
    }
    if (e) {
        merged = mergeOne(merged, e);
    }
    return merged;
}
function mergePropsN(props) {
    if (props.length === 0) {
        return EMPTY_PROPS;
    }
    if (props.length === 1) {
        return resolvePropsGetter(props[0], EMPTY_PROPS);
    }
    // We need to mutably own `merged`
    let merged = {
        ...resolvePropsGetter(props[0], EMPTY_PROPS)
    };
    for(let i = 1; i < props.length; i += 1){
        merged = mergeOne(merged, props[i]);
    }
    return merged;
}
function mergeOne(merged, inputProps) {
    if (isPropsGetter(inputProps)) {
        return inputProps(merged);
    }
    return mutablyMergeInto(merged, inputProps);
}
/**
 * Merges two sets of props. In case of conflicts, the external props take precedence.
 */ function mutablyMergeInto(mergedProps, externalProps) {
    if (!externalProps) {
        return mergedProps;
    }
    // eslint-disable-next-line guard-for-in
    for(const propName in externalProps){
        const externalPropValue = externalProps[propName];
        switch(propName){
            case 'style':
                {
                    mergedProps[propName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$mergeObjects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeObjects"])(mergedProps.style, externalPropValue);
                    break;
                }
            case 'className':
                {
                    mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
                    break;
                }
            default:
                {
                    if (isEventHandler(propName, externalPropValue)) {
                        mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
                    } else {
                        mergedProps[propName] = externalPropValue;
                    }
                }
        }
    }
    return mergedProps;
}
function isEventHandler(key, value) {
    // This approach is more efficient than using a regex.
    const code0 = key.charCodeAt(0);
    const code1 = key.charCodeAt(1);
    const code2 = key.charCodeAt(2);
    return code0 === 111 /* o */  && code1 === 110 /* n */  && code2 >= 65 /* A */  && code2 <= 90 /* Z */  && (typeof value === 'function' || typeof value === 'undefined');
}
function isPropsGetter(inputProps) {
    return typeof inputProps === 'function';
}
function resolvePropsGetter(inputProps, previousProps) {
    if (isPropsGetter(inputProps)) {
        return inputProps(previousProps);
    }
    return inputProps ?? EMPTY_PROPS;
}
function mergeEventHandlers(ourHandler, theirHandler) {
    if (!theirHandler) {
        return ourHandler;
    }
    if (!ourHandler) {
        return theirHandler;
    }
    return (event)=>{
        if (isSyntheticEvent(event)) {
            const baseUIEvent = event;
            makeEventPreventable(baseUIEvent);
            const result = theirHandler(baseUIEvent);
            if (!baseUIEvent.baseUIHandlerPrevented) {
                ourHandler?.(baseUIEvent);
            }
            return result;
        }
        const result = theirHandler(event);
        ourHandler?.(event);
        return result;
    };
}
function makeEventPreventable(event) {
    event.preventBaseUIHandler = ()=>{
        event.baseUIHandlerPrevented = true;
    };
    return event;
}
function mergeClassNames(ourClassName, theirClassName) {
    if (theirClassName) {
        if (ourClassName) {
            // eslint-disable-next-line prefer-template
            return theirClassName + ' ' + ourClassName;
        }
        return theirClassName;
    }
    return ourClassName;
}
function isSyntheticEvent(event) {
    return event != null && typeof event === 'object' && 'nativeEvent' in event;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/composite/root/CompositeRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompositeRootContext",
    ()=>CompositeRootContext,
    "useCompositeRootContext",
    ()=>useCompositeRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const CompositeRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) CompositeRootContext.displayName = "CompositeRootContext";
function useCompositeRootContext(optional = false) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CompositeRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useFocusableWhenDisabled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFocusableWhenDisabled",
    ()=>useFocusableWhenDisabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useFocusableWhenDisabled(parameters) {
    const { focusableWhenDisabled, disabled, composite = false, tabIndex: tabIndexProp = 0, isNativeButton } = parameters;
    const isFocusableComposite = composite && focusableWhenDisabled !== false;
    const isNonFocusableComposite = composite && focusableWhenDisabled === false;
    // we can't explicitly assign `undefined` to any of these props because it
    // would otherwise prevent subsequently merged props from setting them
    const props = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFocusableWhenDisabled.useMemo[props]": ()=>{
            const additionalProps = {
                // allow Tabbing away from focusableWhenDisabled elements
                onKeyDown (event) {
                    if (disabled && focusableWhenDisabled && event.key !== 'Tab') {
                        event.preventDefault();
                    }
                }
            };
            if (!composite) {
                additionalProps.tabIndex = tabIndexProp;
                if (!isNativeButton && disabled) {
                    additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
                }
            }
            if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled) {
                additionalProps['aria-disabled'] = disabled;
            }
            if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
                additionalProps.disabled = disabled;
            }
            return additionalProps;
        }
    }["useFocusableWhenDisabled.useMemo[props]"], [
        composite,
        disabled,
        focusableWhenDisabled,
        isFocusableComposite,
        isNonFocusableComposite,
        isNativeButton,
        tabIndexProp
    ]);
    return {
        props
    };
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/use-button/useButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useButton",
    ()=>useButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/safeReact.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$CompositeRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/composite/root/CompositeRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useFocusableWhenDisabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useFocusableWhenDisabled.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function useButton(parameters = {}) {
    const { disabled = false, focusableWhenDisabled, tabIndex = 0, native: isNativeButton = true, composite: compositeProp } = parameters;
    const elementRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const compositeRootContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$root$2f$CompositeRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompositeRootContext"])(true);
    const isCompositeItem = compositeProp ?? compositeRootContext !== undefined;
    const { props: focusableWhenDisabledProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useFocusableWhenDisabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusableWhenDisabled"])({
        focusableWhenDisabled,
        disabled,
        composite: isCompositeItem,
        tabIndex,
        isNativeButton
    });
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "useButton.useEffect": ()=>{
                if (!elementRef.current) {
                    return;
                }
                const isButtonTag = isButtonElement(elementRef.current);
                if (isNativeButton) {
                    if (!isButtonTag) {
                        const ownerStackMessage = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeReact"].captureOwnerStack?.() || '';
                        const message = 'A component that acts as a button expected a native <button> because the ' + '`nativeButton` prop is true. Rendering a non-<button> removes native button ' + 'semantics, which can impact forms and accessibility. Use a real <button> in the ' + '`render` prop, or set `nativeButton` to `false`.';
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])(`${message}${ownerStackMessage}`);
                    }
                } else if (isButtonTag) {
                    const ownerStackMessage = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeReact"].captureOwnerStack?.() || '';
                    const message = 'A component that acts as a button expected a non-<button> because the `nativeButton` ' + 'prop is false. Rendering a <button> keeps native behavior while Base UI applies ' + 'non-native attributes and handlers, which can add unintended extra attributes (such ' + 'as `role` or `aria-disabled`). Use a non-<button> in the `render` prop, or set ' + '`nativeButton` to `true`.';
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])(`${message}${ownerStackMessage}`);
                }
            }
        }["useButton.useEffect"], [
            isNativeButton
        ]);
    }
    // handles a disabled composite button rendering another button, e.g.
    // <Toolbar.Button disabled render={<Menu.Trigger />} />
    // the `disabled` prop needs to pass through 2 `useButton`s then finally
    // delete the `disabled` attribute from DOM
    const updateDisabled = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useButton.useCallback[updateDisabled]": ()=>{
            const element = elementRef.current;
            if (!isButtonElement(element)) {
                return;
            }
            if (isCompositeItem && disabled && focusableWhenDisabledProps.disabled === undefined && element.disabled) {
                element.disabled = false;
            }
        }
    }["useButton.useCallback[updateDisabled]"], [
        disabled,
        focusableWhenDisabledProps.disabled,
        isCompositeItem
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(updateDisabled, [
        updateDisabled
    ]);
    const getButtonProps = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useButton.useCallback[getButtonProps]": (externalProps = {})=>{
            const { onClick: externalOnClick, onMouseDown: externalOnMouseDown, onKeyUp: externalOnKeyUp, onKeyDown: externalOnKeyDown, onPointerDown: externalOnPointerDown, ...otherExternalProps } = externalProps;
            const type = isNativeButton ? 'button' : undefined;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
                type,
                onClick (event) {
                    if (disabled) {
                        event.preventDefault();
                        return;
                    }
                    externalOnClick?.(event);
                },
                onMouseDown (event) {
                    if (!disabled) {
                        externalOnMouseDown?.(event);
                    }
                },
                onKeyDown (event) {
                    if (disabled) {
                        return;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeEventPreventable"])(event);
                    externalOnKeyDown?.(event);
                    if (event.baseUIHandlerPrevented) {
                        return;
                    }
                    const isCurrentTarget = event.target === event.currentTarget;
                    const currentTarget = event.currentTarget;
                    const isButton = isButtonElement(currentTarget);
                    const isLink = !isNativeButton && isValidLinkElement(currentTarget);
                    const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
                    const isEnterKey = event.key === 'Enter';
                    const isSpaceKey = event.key === ' ';
                    const role = currentTarget.getAttribute('role');
                    const isTextNavigationRole = role?.startsWith('menuitem') || role === 'option' || role === 'gridcell';
                    if (isCurrentTarget && isCompositeItem && isSpaceKey) {
                        if (event.defaultPrevented && isTextNavigationRole) {
                            return;
                        }
                        event.preventDefault();
                        if (isLink || isNativeButton && isButton) {
                            currentTarget.click();
                            event.preventBaseUIHandler();
                        } else if (shouldClick) {
                            externalOnClick?.(event);
                            event.preventBaseUIHandler();
                        }
                        return;
                    }
                    // Keyboard accessibility for native and non-native elements.
                    if (shouldClick) {
                        if (!isNativeButton && (isSpaceKey || isEnterKey)) {
                            event.preventDefault();
                        }
                        if (!isNativeButton && isEnterKey) {
                            externalOnClick?.(event);
                        }
                    }
                },
                onKeyUp (event) {
                    if (disabled) {
                        return;
                    }
                    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
                    // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeEventPreventable"])(event);
                    externalOnKeyUp?.(event);
                    if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === ' ') {
                        event.preventDefault();
                        return;
                    }
                    if (event.baseUIHandlerPrevented) {
                        return;
                    }
                    // Keyboard accessibility for non interactive elements
                    if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && event.key === ' ') {
                        externalOnClick?.(event);
                    }
                },
                onPointerDown (event) {
                    if (disabled) {
                        event.preventDefault();
                        return;
                    }
                    externalOnPointerDown?.(event);
                }
            }, !isNativeButton ? {
                role: 'button'
            } : undefined, focusableWhenDisabledProps, otherExternalProps);
        }
    }["useButton.useCallback[getButtonProps]"], [
        disabled,
        focusableWhenDisabledProps,
        isCompositeItem,
        isNativeButton
    ]);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useButton.useStableCallback[buttonRef]": (element)=>{
            elementRef.current = element;
            updateDisabled();
        }
    }["useButton.useStableCallback[buttonRef]"]);
    return {
        getButtonProps,
        buttonRef
    };
}
function isButtonElement(elem) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(elem) && elem.tagName === 'BUTTON';
}
function isValidLinkElement(elem) {
    return Boolean(elem?.tagName === 'A' && elem?.href);
}
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/useMergedRefs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMergedRefs",
    ()=>useMergedRefs,
    "useMergedRefsN",
    ()=>useMergedRefsN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-client] (ecmascript)");
;
function useMergedRefs(a, b, c, d) {
    const forkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])(createForkRef).current;
    if (didChange(forkRef, a, b, c, d)) {
        update(forkRef, [
            a,
            b,
            c,
            d
        ]);
    }
    return forkRef.callback;
}
function useMergedRefsN(refs) {
    const forkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])(createForkRef).current;
    if (didChangeN(forkRef, refs)) {
        update(forkRef, refs);
    }
    return forkRef.callback;
}
function createForkRef() {
    return {
        callback: null,
        cleanup: null,
        refs: []
    };
}
function didChange(forkRef, a, b, c, d) {
    // prettier-ignore
    return forkRef.refs[0] !== a || forkRef.refs[1] !== b || forkRef.refs[2] !== c || forkRef.refs[3] !== d;
}
function didChangeN(forkRef, newRefs) {
    return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index)=>ref !== newRefs[index]);
}
function update(forkRef, refs) {
    forkRef.refs = refs;
    if (refs.every((ref)=>ref == null)) {
        forkRef.callback = null;
        return;
    }
    forkRef.callback = (instance)=>{
        if (forkRef.cleanup) {
            forkRef.cleanup();
            forkRef.cleanup = null;
        }
        if (instance != null) {
            const cleanupCallbacks = Array(refs.length).fill(null);
            for(let i = 0; i < refs.length; i += 1){
                const ref = refs[i];
                if (ref == null) {
                    continue;
                }
                switch(typeof ref){
                    case 'function':
                        {
                            const refCleanup = ref(instance);
                            if (typeof refCleanup === 'function') {
                                cleanupCallbacks[i] = refCleanup;
                            }
                            break;
                        }
                    case 'object':
                        {
                            ref.current = instance;
                            break;
                        }
                    default:
                }
            }
            forkRef.cleanup = ()=>{
                for(let i = 0; i < refs.length; i += 1){
                    const ref = refs[i];
                    if (ref == null) {
                        continue;
                    }
                    switch(typeof ref){
                        case 'function':
                            {
                                const cleanupCallback = cleanupCallbacks[i];
                                if (typeof cleanupCallback === 'function') {
                                    cleanupCallback();
                                } else {
                                    ref(null);
                                }
                                break;
                            }
                        case 'object':
                            {
                                ref.current = null;
                                break;
                            }
                        default:
                    }
                }
            };
        }
    };
}
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/reactVersion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isReactVersionAtLeast",
    ()=>isReactVersionAtLeast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const majorVersion = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"], 10);
function isReactVersionAtLeast(reactVersionToCheck) {
    return majorVersion >= reactVersionToCheck;
}
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/getReactElementRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getReactElementRef",
    ()=>getReactElementRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$reactVersion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/reactVersion.js [app-client] (ecmascript)");
;
;
function getReactElementRef(element) {
    if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](element)) {
        return null;
    }
    const reactElement = element;
    const propsWithRef = reactElement.props;
    return ((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$reactVersion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactVersionAtLeast"])(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
}
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/warn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "warn",
    ()=>warn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
let set;
if ("TURBOPACK compile-time truthy", 1) {
    set = new Set();
}
function warn(...messages) {
    if ("TURBOPACK compile-time truthy", 1) {
        const messageKey = messages.join(' ');
        if (!set.has(messageKey)) {
            set.add(messageKey);
            console.warn(`Base UI: ${messageKey}`);
        }
    }
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/utils/getStateAttributesProps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStateAttributesProps",
    ()=>getStateAttributesProps
]);
function getStateAttributesProps(state, customMapping) {
    const props = {};
    /* eslint-disable-next-line guard-for-in */ for(const key in state){
        const value = state[key];
        if (customMapping?.hasOwnProperty(key)) {
            const customProps = customMapping[key](value);
            if (customProps != null) {
                Object.assign(props, customProps);
            }
            continue;
        }
        if (value === true) {
            props[`data-${key.toLowerCase()}`] = '';
        } else if (value) {
            props[`data-${key.toLowerCase()}`] = value.toString();
        }
    }
    return props;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/utils/resolveClassName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * If the provided className is a string, it will be returned as is.
 * Otherwise, the function will call the className function with the state as the first argument.
 *
 * @param className
 * @param state
 */ __turbopack_context__.s([
    "resolveClassName",
    ()=>resolveClassName
]);
function resolveClassName(className, state) {
    return typeof className === 'function' ? className(state) : className;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/utils/resolveStyle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * If the provided style is an object, it will be returned as is.
 * Otherwise, the function will call the style function with the state as the first argument.
 *
 * @param style
 * @param state
 */ __turbopack_context__.s([
    "resolveStyle",
    ()=>resolveStyle
]);
function resolveStyle(style, state) {
    return typeof style === 'function' ? style(state) : style;
}
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMPTY_ARRAY",
    ()=>EMPTY_ARRAY,
    "EMPTY_OBJECT",
    ()=>EMPTY_OBJECT,
    "NOOP",
    ()=>NOOP
]);
function NOOP() {}
const EMPTY_ARRAY = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRenderElement",
    ()=>useRenderElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useMergedRefs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$getReactElementRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/getReactElementRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$mergeObjects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/mergeObjects.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$warn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/warn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getStateAttributesProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/getStateAttributesProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveClassName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/resolveClassName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/resolveStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function useRenderElement(element, componentProps, params = {}) {
    const renderProp = componentProps.render;
    const outProps = useRenderElementProps(componentProps, params);
    if (params.enabled === false) {
        return null;
    }
    const state = params.state ?? __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"];
    return evaluateRenderProp(element, renderProp, outProps, state);
}
/**
 * Computes render element final props.
 */ function useRenderElementProps(componentProps, params = {}) {
    const { className: classNameProp, style: styleProp, render: renderProp } = componentProps;
    const { state = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"], ref, props, stateAttributesMapping, enabled = true } = params;
    const className = enabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveClassName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveClassName"])(classNameProp, state) : undefined;
    const style = enabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyle"])(styleProp, state) : undefined;
    const stateProps = enabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$getStateAttributesProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStateAttributesProps"])(state, stateAttributesMapping) : __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"];
    const outProps = enabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$mergeObjects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeObjects"])(stateProps, Array.isArray(props) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergePropsN"])(props) : props) ?? __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"] : __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"];
    // SAFETY: The `useMergedRefs` functions use a single hook to store the same value,
    // switching between them at runtime is safe. If this assertion fails, React will
    // throw at runtime anyway.
    // This also skips the `useMergedRefs` call on the server, which is fine because
    // refs are not used on the server side.
    /* eslint-disable react-hooks/rules-of-hooks */ if (typeof document !== 'undefined') {
        if (!enabled) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRefs"])(null, null);
        } else if (Array.isArray(ref)) {
            outProps.ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRefsN"])([
                outProps.ref,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$getReactElementRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReactElementRef"])(renderProp),
                ...ref
            ]);
        } else {
            outProps.ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRefs"])(outProps.ref, (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$getReactElementRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReactElementRef"])(renderProp), ref);
        }
    }
    if (!enabled) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"];
    }
    if (className !== undefined) {
        outProps.className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClassNames"])(outProps.className, className);
    }
    if (style !== undefined) {
        outProps.style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$mergeObjects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeObjects"])(outProps.style, style);
    }
    return outProps;
}
// The symbol React uses internally for lazy components
// https://github.com/facebook/react/blob/a0566250b210499b4c5677f5ac2eedbd71d51a1b/packages/shared/ReactSymbols.js#L31
//
// TODO delete once https://github.com/facebook/react/issues/32392 is fixed
const REACT_LAZY_TYPE = Symbol.for('react.lazy');
function evaluateRenderProp(element, render, props, state) {
    if (render) {
        if (typeof render === 'function') {
            if ("TURBOPACK compile-time truthy", 1) {
                warnIfRenderPropLooksLikeComponent(render);
            }
            return render(props, state);
        }
        const mergedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(props, render.props);
        mergedProps.ref = props.ref;
        let newElement = render;
        // Workaround for https://github.com/facebook/react/issues/32392
        // This works because the toArray() logic unwrap lazy element type in
        // https://github.com/facebook/react/blob/a0566250b210499b4c5677f5ac2eedbd71d51a1b/packages/react/src/ReactChildren.js#L186
        if (newElement?.$$typeof === REACT_LAZY_TYPE) {
            const children = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(render);
            newElement = children[0];
        }
        // There is a high number of indirections, the error message thrown by React.cloneElement() is
        // hard to use for developers, this logic provides a better context.
        //
        // Our general guideline is to never change the control flow depending on the environment.
        // However, React.cloneElement() throws if React.isValidElement() is false,
        // so we can throw before with custom message.
        if ("TURBOPACK compile-time truthy", 1) {
            if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement)) {
                throw new Error([
                    'Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.',
                    'A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.',
                    'https://base-ui.com/r/invalid-render-prop'
                ].join('\n'));
            }
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](newElement, mergedProps);
    }
    if (element) {
        if (typeof element === 'string') {
            return renderTag(element, props);
        }
    }
    // Unreachable, but the typings on `useRenderElement` need to be reworked
    // to annotate it correctly.
    throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: Render element or function are not defined.' : "TURBOPACK unreachable");
}
function warnIfRenderPropLooksLikeComponent(renderFn) {
    const functionName = renderFn.name;
    if (functionName.length === 0) {
        return;
    }
    const firstCharacterCode = functionName.charCodeAt(0);
    if (firstCharacterCode < 65 || firstCharacterCode > 90) {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$warn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])(`The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`, 'This usually means a React component was passed directly as `render={Component}`.', 'Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.', 'If this is an intentional render callback, rename it to start with a lowercase letter.', 'Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.', 'https://base-ui.com/r/invalid-render-prop');
}
function renderTag(Tag, props) {
    if (Tag === 'button') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("button", {
            type: "button",
            ...props,
            key: props.key
        });
    }
    if (Tag === 'img') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("img", {
            alt: "",
            ...props,
            key: props.key
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Tag, props);
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/button/Button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/use-button/useButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
'use client';
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Button(componentProps, forwardedRef) {
    const { render, className, disabled = false, focusableWhenDisabled = false, nativeButton = true, ...elementProps } = componentProps;
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$button$2f$useButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        focusableWhenDisabled,
        native: nativeButton
    });
    const state = {
        disabled
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        state,
        ref: [
            forwardedRef,
            buttonRef
        ],
        props: [
            elementProps,
            getButtonProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) Button.displayName = "Button";
}),
"[project]/audio-processor/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/audio-processor/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/audio-processor/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTailwindMerge",
    ()=>createTailwindMerge,
    "extendTailwindMerge",
    ()=>extendTailwindMerge,
    "fromTheme",
    ()=>fromTheme,
    "getDefaultConfig",
    ()=>getDefaultConfig,
    "mergeConfigs",
    ()=>mergeConfigs,
    "twJoin",
    ()=>twJoin,
    "twMerge",
    ()=>twMerge,
    "validators",
    ()=>validators
]);
/**
 * Concatenates two arrays faster than the array spread operator.
 */ const concatArrays = (array1, array2)=>{
    // Pre-allocate for better V8 optimization
    const combinedArray = new Array(array1.length + array2.length);
    for(let i = 0; i < array1.length; i++){
        combinedArray[i] = array1[i];
    }
    for(let i = 0; i < array2.length; i++){
        combinedArray[array1.length + i] = array2[i];
    }
    return combinedArray;
};
// Factory function ensures consistent object shapes
const createClassValidatorObject = (classGroupId, validator)=>({
        classGroupId,
        validator
    });
// Factory ensures consistent ClassPartObject shape
const createClassPartObject = (nextPart = new Map(), validators = null, classGroupId)=>({
        nextPart,
        validators,
        classGroupId
    });
const CLASS_PART_SEPARATOR = '-';
const EMPTY_CONFLICTS = [];
// I use two dots here because one dot is used as prefix for class groups in plugins
const ARBITRARY_PROPERTY_PREFIX = 'arbitrary..';
const createClassGroupUtils = (config)=>{
    const classMap = createClassMap(config);
    const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
    const getClassGroupId = (className)=>{
        if (className.startsWith('[') && className.endsWith(']')) {
            return getGroupIdForArbitraryProperty(className);
        }
        const classParts = className.split(CLASS_PART_SEPARATOR);
        // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and skip it.
        const startIndex = classParts[0] === '' && classParts.length > 1 ? 1 : 0;
        return getGroupRecursive(classParts, startIndex, classMap);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier)=>{
        if (hasPostfixModifier) {
            const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
            const baseConflicts = conflictingClassGroups[classGroupId];
            if (modifierConflicts) {
                if (baseConflicts) {
                    // Merge base conflicts with modifier conflicts
                    return concatArrays(baseConflicts, modifierConflicts);
                }
                // Only modifier conflicts
                return modifierConflicts;
            }
            // Fall back to without postfix if no modifier conflicts
            return baseConflicts || EMPTY_CONFLICTS;
        }
        return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
    };
    return {
        getClassGroupId,
        getConflictingClassGroupIds
    };
};
const getGroupRecursive = (classParts, startIndex, classPartObject)=>{
    const classPathsLength = classParts.length - startIndex;
    if (classPathsLength === 0) {
        return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[startIndex];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    if (nextClassPartObject) {
        const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
        if (result) return result;
    }
    const validators = classPartObject.validators;
    if (validators === null) {
        return undefined;
    }
    // Build classRest string efficiently by joining from startIndex onwards
    const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
    const validatorsLength = validators.length;
    for(let i = 0; i < validatorsLength; i++){
        const validatorObj = validators[i];
        if (validatorObj.validator(classRest)) {
            return validatorObj.classGroupId;
        }
    }
    return undefined;
};
/**
 * Get the class group ID for an arbitrary property.
 *
 * @param className - The class name to get the group ID for. Is expected to be string starting with `[` and ending with `]`.
 */ const getGroupIdForArbitraryProperty = (className)=>className.slice(1, -1).indexOf(':') === -1 ? undefined : (()=>{
        const content = className.slice(1, -1);
        const colonIndex = content.indexOf(':');
        const property = content.slice(0, colonIndex);
        return property ? ARBITRARY_PROPERTY_PREFIX + property : undefined;
    })();
/**
 * Exported for testing only
 */ const createClassMap = (config)=>{
    const { theme, classGroups } = config;
    return processClassGroups(classGroups, theme);
};
// Split into separate functions to maintain monomorphic call sites
const processClassGroups = (classGroups, theme)=>{
    const classMap = createClassPartObject();
    for(const classGroupId in classGroups){
        const group = classGroups[classGroupId];
        processClassesRecursively(group, classMap, classGroupId, theme);
    }
    return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme)=>{
    const len = classGroup.length;
    for(let i = 0; i < len; i++){
        const classDefinition = classGroup[i];
        processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
    }
};
// Split into separate functions for each type to maintain monomorphic call sites
const processClassDefinition = (classDefinition, classPartObject, classGroupId, theme)=>{
    if (typeof classDefinition === 'string') {
        processStringDefinition(classDefinition, classPartObject, classGroupId);
        return;
    }
    if (typeof classDefinition === 'function') {
        processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
        return;
    }
    processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
const processStringDefinition = (classDefinition, classPartObject, classGroupId)=>{
    const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
    classPartObjectToEdit.classGroupId = classGroupId;
};
const processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme)=>{
    if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
    }
    if (classPartObject.validators === null) {
        classPartObject.validators = [];
    }
    classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
const processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme)=>{
    const entries = Object.entries(classDefinition);
    const len = entries.length;
    for(let i = 0; i < len; i++){
        const [key, value] = entries[i];
        processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
    }
};
const getPart = (classPartObject, path)=>{
    let current = classPartObject;
    const parts = path.split(CLASS_PART_SEPARATOR);
    const len = parts.length;
    for(let i = 0; i < len; i++){
        const part = parts[i];
        let next = current.nextPart.get(part);
        if (!next) {
            next = createClassPartObject();
            current.nextPart.set(part, next);
        }
        current = next;
    }
    return current;
};
// Type guard maintains monomorphic check
const isThemeGetter = (func)=>'isThemeGetter' in func && func.isThemeGetter === true;
// LRU cache implementation using plain objects for simplicity
const createLruCache = (maxCacheSize)=>{
    if (maxCacheSize < 1) {
        return {
            get: ()=>undefined,
            set: ()=>{}
        };
    }
    let cacheSize = 0;
    let cache = Object.create(null);
    let previousCache = Object.create(null);
    const update = (key, value)=>{
        cache[key] = value;
        cacheSize++;
        if (cacheSize > maxCacheSize) {
            cacheSize = 0;
            previousCache = cache;
            cache = Object.create(null);
        }
    };
    return {
        get (key) {
            let value = cache[key];
            if (value !== undefined) {
                return value;
            }
            if ((value = previousCache[key]) !== undefined) {
                update(key, value);
                return value;
            }
        },
        set (key, value) {
            if (key in cache) {
                cache[key] = value;
            } else {
                update(key, value);
            }
        }
    };
};
const IMPORTANT_MODIFIER = '!';
const MODIFIER_SEPARATOR = ':';
const EMPTY_MODIFIERS = [];
// Pre-allocated result object shape for consistency
const createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal)=>({
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition,
        isExternal
    });
const createParseClassName = (config)=>{
    const { prefix, experimentalParseClassName } = config;
    /**
   * Parse class name into parts.
   *
   * Inspired by `splitAtTopLevelOnly` used in Tailwind CSS
   * @see https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
   */ let parseClassName = (className)=>{
        // Use simple array with push for better performance
        const modifiers = [];
        let bracketDepth = 0;
        let parenDepth = 0;
        let modifierStart = 0;
        let postfixModifierPosition;
        const len = className.length;
        for(let index = 0; index < len; index++){
            const currentCharacter = className[index];
            if (bracketDepth === 0 && parenDepth === 0) {
                if (currentCharacter === MODIFIER_SEPARATOR) {
                    modifiers.push(className.slice(modifierStart, index));
                    modifierStart = index + 1;
                    continue;
                }
                if (currentCharacter === '/') {
                    postfixModifierPosition = index;
                    continue;
                }
            }
            if (currentCharacter === '[') bracketDepth++;
            else if (currentCharacter === ']') bracketDepth--;
            else if (currentCharacter === '(') parenDepth++;
            else if (currentCharacter === ')') parenDepth--;
        }
        const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
        // Inline important modifier check
        let baseClassName = baseClassNameWithImportantModifier;
        let hasImportantModifier = false;
        if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
            baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
            hasImportantModifier = true;
        } else if (/**
     * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
     * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
     */ baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)) {
            baseClassName = baseClassNameWithImportantModifier.slice(1);
            hasImportantModifier = true;
        }
        const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
        return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
    };
    if (prefix) {
        const fullPrefix = prefix + MODIFIER_SEPARATOR;
        const parseClassNameOriginal = parseClassName;
        parseClassName = (className)=>className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, undefined, true);
    }
    if (experimentalParseClassName) {
        const parseClassNameOriginal = parseClassName;
        parseClassName = (className)=>experimentalParseClassName({
                className,
                parseClassName: parseClassNameOriginal
            });
    }
    return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */ const createSortModifiers = (config)=>{
    // Pre-compute weights for all known modifiers for O(1) comparison
    const modifierWeights = new Map();
    // Assign weights to sensitive modifiers (highest priority, but preserve order)
    config.orderSensitiveModifiers.forEach((mod, index)=>{
        modifierWeights.set(mod, 1000000 + index); // High weights for sensitive mods
    });
    return (modifiers)=>{
        const result = [];
        let currentSegment = [];
        // Process modifiers in one pass
        for(let i = 0; i < modifiers.length; i++){
            const modifier = modifiers[i];
            // Check if modifier is sensitive (starts with '[' or in orderSensitiveModifiers)
            const isArbitrary = modifier[0] === '[';
            const isOrderSensitive = modifierWeights.has(modifier);
            if (isArbitrary || isOrderSensitive) {
                // Sort and flush current segment alphabetically
                if (currentSegment.length > 0) {
                    currentSegment.sort();
                    result.push(...currentSegment);
                    currentSegment = [];
                }
                result.push(modifier);
            } else {
                // Regular modifier - add to current segment for batch sorting
                currentSegment.push(modifier);
            }
        }
        // Sort and add any remaining segment items
        if (currentSegment.length > 0) {
            currentSegment.sort();
            result.push(...currentSegment);
        }
        return result;
    };
};
const createConfigUtils = (config)=>({
        cache: createLruCache(config.cacheSize),
        parseClassName: createParseClassName(config),
        sortModifiers: createSortModifiers(config),
        ...createClassGroupUtils(config)
    });
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils)=>{
    const { parseClassName, getClassGroupId, getConflictingClassGroupIds, sortModifiers } = configUtils;
    /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */ const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = '';
    for(let index = classNames.length - 1; index >= 0; index -= 1){
        const originalClassName = classNames[index];
        const { isExternal, modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
        if (isExternal) {
            result = originalClassName + (result.length > 0 ? ' ' + result : result);
            continue;
        }
        let hasPostfixModifier = !!maybePostfixModifierPosition;
        let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        if (!classGroupId) {
            if (!hasPostfixModifier) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            classGroupId = getClassGroupId(baseClassName);
            if (!classGroupId) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            hasPostfixModifier = false;
        }
        // Fast path: skip sorting for empty or single modifier
        const variantModifier = modifiers.length === 0 ? '' : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(':');
        const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        const classId = modifierId + classGroupId;
        if (classGroupsInConflict.indexOf(classId) > -1) {
            continue;
        }
        classGroupsInConflict.push(classId);
        const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
        for(let i = 0; i < conflictGroups.length; ++i){
            const group = conflictGroups[i];
            classGroupsInConflict.push(modifierId + group);
        }
        // Tailwind class not in conflict
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
    }
    return result;
};
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */ const twJoin = (...classLists)=>{
    let index = 0;
    let argument;
    let resolvedValue;
    let string = '';
    while(index < classLists.length){
        if (argument = classLists[index++]) {
            if (resolvedValue = toValue(argument)) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
};
const toValue = (mix)=>{
    // Fast path for strings
    if (typeof mix === 'string') {
        return mix;
    }
    let resolvedValue;
    let string = '';
    for(let k = 0; k < mix.length; k++){
        if (mix[k]) {
            if (resolvedValue = toValue(mix[k])) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
};
const createTailwindMerge = (createConfigFirst, ...createConfigRest)=>{
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall;
    const initTailwindMerge = (classList)=>{
        const config = createConfigRest.reduce((previousConfig, createConfigCurrent)=>createConfigCurrent(previousConfig), createConfigFirst());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
    };
    const tailwindMerge = (classList)=>{
        const cachedResult = cacheGet(classList);
        if (cachedResult) {
            return cachedResult;
        }
        const result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
    };
    functionToCall = initTailwindMerge;
    return (...args)=>functionToCall(twJoin(...args));
};
const fallbackThemeArr = [];
const fromTheme = (key)=>{
    const themeGetter = (theme)=>theme[key] || fallbackThemeArr;
    themeGetter.isThemeGetter = true;
    return themeGetter;
};
const arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
const arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
const fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isFraction = (value)=>fractionRegex.test(value);
const isNumber = (value)=>!!value && !Number.isNaN(Number(value));
const isInteger = (value)=>!!value && Number.isInteger(Number(value));
const isPercent = (value)=>value.endsWith('%') && isNumber(value.slice(0, -1));
const isTshirtSize = (value)=>tshirtUnitRegex.test(value);
const isAny = ()=>true;
const isLengthOnly = (value)=>// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = ()=>false;
const isShadow = (value)=>shadowRegex.test(value);
const isImage = (value)=>imageRegex.test(value);
const isAnyNonArbitrary = (value)=>!isArbitraryValue(value) && !isArbitraryVariable(value);
const isArbitrarySize = (value)=>getIsArbitraryValue(value, isLabelSize, isNever);
const isArbitraryValue = (value)=>arbitraryValueRegex.test(value);
const isArbitraryLength = (value)=>getIsArbitraryValue(value, isLabelLength, isLengthOnly);
const isArbitraryNumber = (value)=>getIsArbitraryValue(value, isLabelNumber, isNumber);
const isArbitraryWeight = (value)=>getIsArbitraryValue(value, isLabelWeight, isAny);
const isArbitraryFamilyName = (value)=>getIsArbitraryValue(value, isLabelFamilyName, isNever);
const isArbitraryPosition = (value)=>getIsArbitraryValue(value, isLabelPosition, isNever);
const isArbitraryImage = (value)=>getIsArbitraryValue(value, isLabelImage, isImage);
const isArbitraryShadow = (value)=>getIsArbitraryValue(value, isLabelShadow, isShadow);
const isArbitraryVariable = (value)=>arbitraryVariableRegex.test(value);
const isArbitraryVariableLength = (value)=>getIsArbitraryVariable(value, isLabelLength);
const isArbitraryVariableFamilyName = (value)=>getIsArbitraryVariable(value, isLabelFamilyName);
const isArbitraryVariablePosition = (value)=>getIsArbitraryVariable(value, isLabelPosition);
const isArbitraryVariableSize = (value)=>getIsArbitraryVariable(value, isLabelSize);
const isArbitraryVariableImage = (value)=>getIsArbitraryVariable(value, isLabelImage);
const isArbitraryVariableShadow = (value)=>getIsArbitraryVariable(value, isLabelShadow, true);
const isArbitraryVariableWeight = (value)=>getIsArbitraryVariable(value, isLabelWeight, true);
// Helpers
const getIsArbitraryValue = (value, testLabel, testValue)=>{
    const result = arbitraryValueRegex.exec(value);
    if (result) {
        if (result[1]) {
            return testLabel(result[1]);
        }
        return testValue(result[2]);
    }
    return false;
};
const getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false)=>{
    const result = arbitraryVariableRegex.exec(value);
    if (result) {
        if (result[1]) {
            return testLabel(result[1]);
        }
        return shouldMatchNoLabel;
    }
    return false;
};
// Labels
const isLabelPosition = (label)=>label === 'position' || label === 'percentage';
const isLabelImage = (label)=>label === 'image' || label === 'url';
const isLabelSize = (label)=>label === 'length' || label === 'size' || label === 'bg-size';
const isLabelLength = (label)=>label === 'length';
const isLabelNumber = (label)=>label === 'number';
const isLabelFamilyName = (label)=>label === 'family-name';
const isLabelWeight = (label)=>label === 'number' || label === 'weight';
const isLabelShadow = (label)=>label === 'shadow';
const validators = /*#__PURE__*/ Object.defineProperty({
    __proto__: null,
    isAny,
    isAnyNonArbitrary,
    isArbitraryFamilyName,
    isArbitraryImage,
    isArbitraryLength,
    isArbitraryNumber,
    isArbitraryPosition,
    isArbitraryShadow,
    isArbitrarySize,
    isArbitraryValue,
    isArbitraryVariable,
    isArbitraryVariableFamilyName,
    isArbitraryVariableImage,
    isArbitraryVariableLength,
    isArbitraryVariablePosition,
    isArbitraryVariableShadow,
    isArbitraryVariableSize,
    isArbitraryVariableWeight,
    isArbitraryWeight,
    isFraction,
    isInteger,
    isNumber,
    isPercent,
    isTshirtSize
}, Symbol.toStringTag, {
    value: 'Module'
});
const getDefaultConfig = ()=>{
    /**
   * Theme getters for theme variable namespaces
   * @see https://tailwindcss.com/docs/theme#theme-variable-namespaces
   */ /***/ const themeColor = fromTheme('color');
    const themeFont = fromTheme('font');
    const themeText = fromTheme('text');
    const themeFontWeight = fromTheme('font-weight');
    const themeTracking = fromTheme('tracking');
    const themeLeading = fromTheme('leading');
    const themeBreakpoint = fromTheme('breakpoint');
    const themeContainer = fromTheme('container');
    const themeSpacing = fromTheme('spacing');
    const themeRadius = fromTheme('radius');
    const themeShadow = fromTheme('shadow');
    const themeInsetShadow = fromTheme('inset-shadow');
    const themeTextShadow = fromTheme('text-shadow');
    const themeDropShadow = fromTheme('drop-shadow');
    const themeBlur = fromTheme('blur');
    const themePerspective = fromTheme('perspective');
    const themeAspect = fromTheme('aspect');
    const themeEase = fromTheme('ease');
    const themeAnimate = fromTheme('animate');
    /**
   * Helpers to avoid repeating the same scales
   *
   * We use functions that create a new array every time they're called instead of static arrays.
   * This ensures that users who modify any scale by mutating the array (e.g. with `array.push(element)`) don't accidentally mutate arrays in other parts of the config.
   */ /***/ const scaleBreak = ()=>[
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column'
        ];
    const scalePosition = ()=>[
            'center',
            'top',
            'bottom',
            'left',
            'right',
            'top-left',
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            'left-top',
            'top-right',
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            'right-top',
            'bottom-right',
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            'right-bottom',
            'bottom-left',
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            'left-bottom'
        ];
    const scalePositionWithArbitrary = ()=>[
            ...scalePosition(),
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleOverflow = ()=>[
            'auto',
            'hidden',
            'clip',
            'visible',
            'scroll'
        ];
    const scaleOverscroll = ()=>[
            'auto',
            'contain',
            'none'
        ];
    const scaleUnambiguousSpacing = ()=>[
            isArbitraryVariable,
            isArbitraryValue,
            themeSpacing
        ];
    const scaleInset = ()=>[
            isFraction,
            'full',
            'auto',
            ...scaleUnambiguousSpacing()
        ];
    const scaleGridTemplateColsRows = ()=>[
            isInteger,
            'none',
            'subgrid',
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleGridColRowStartAndEnd = ()=>[
            'auto',
            {
                span: [
                    'full',
                    isInteger,
                    isArbitraryVariable,
                    isArbitraryValue
                ]
            },
            isInteger,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleGridColRowStartOrEnd = ()=>[
            isInteger,
            'auto',
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleGridAutoColsRows = ()=>[
            'auto',
            'min',
            'max',
            'fr',
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleAlignPrimaryAxis = ()=>[
            'start',
            'end',
            'center',
            'between',
            'around',
            'evenly',
            'stretch',
            'baseline',
            'center-safe',
            'end-safe'
        ];
    const scaleAlignSecondaryAxis = ()=>[
            'start',
            'end',
            'center',
            'stretch',
            'center-safe',
            'end-safe'
        ];
    const scaleMargin = ()=>[
            'auto',
            ...scaleUnambiguousSpacing()
        ];
    const scaleSizing = ()=>[
            isFraction,
            'auto',
            'full',
            'dvw',
            'dvh',
            'lvw',
            'lvh',
            'svw',
            'svh',
            'min',
            'max',
            'fit',
            ...scaleUnambiguousSpacing()
        ];
    const scaleSizingInline = ()=>[
            isFraction,
            'screen',
            'full',
            'dvw',
            'lvw',
            'svw',
            'min',
            'max',
            'fit',
            ...scaleUnambiguousSpacing()
        ];
    const scaleSizingBlock = ()=>[
            isFraction,
            'screen',
            'full',
            'lh',
            'dvh',
            'lvh',
            'svh',
            'min',
            'max',
            'fit',
            ...scaleUnambiguousSpacing()
        ];
    const scaleColor = ()=>[
            themeColor,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleBgPosition = ()=>[
            ...scalePosition(),
            isArbitraryVariablePosition,
            isArbitraryPosition,
            {
                position: [
                    isArbitraryVariable,
                    isArbitraryValue
                ]
            }
        ];
    const scaleBgRepeat = ()=>[
            'no-repeat',
            {
                repeat: [
                    '',
                    'x',
                    'y',
                    'space',
                    'round'
                ]
            }
        ];
    const scaleBgSize = ()=>[
            'auto',
            'cover',
            'contain',
            isArbitraryVariableSize,
            isArbitrarySize,
            {
                size: [
                    isArbitraryVariable,
                    isArbitraryValue
                ]
            }
        ];
    const scaleGradientStopPosition = ()=>[
            isPercent,
            isArbitraryVariableLength,
            isArbitraryLength
        ];
    const scaleRadius = ()=>[
            // Deprecated since Tailwind CSS v4.0.0
            '',
            'none',
            'full',
            themeRadius,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleBorderWidth = ()=>[
            '',
            isNumber,
            isArbitraryVariableLength,
            isArbitraryLength
        ];
    const scaleLineStyle = ()=>[
            'solid',
            'dashed',
            'dotted',
            'double'
        ];
    const scaleBlendMode = ()=>[
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity'
        ];
    const scaleMaskImagePosition = ()=>[
            isNumber,
            isPercent,
            isArbitraryVariablePosition,
            isArbitraryPosition
        ];
    const scaleBlur = ()=>[
            // Deprecated since Tailwind CSS v4.0.0
            '',
            'none',
            themeBlur,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleRotate = ()=>[
            'none',
            isNumber,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleScale = ()=>[
            'none',
            isNumber,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleSkew = ()=>[
            isNumber,
            isArbitraryVariable,
            isArbitraryValue
        ];
    const scaleTranslate = ()=>[
            isFraction,
            'full',
            ...scaleUnambiguousSpacing()
        ];
    return {
        cacheSize: 500,
        theme: {
            animate: [
                'spin',
                'ping',
                'pulse',
                'bounce'
            ],
            aspect: [
                'video'
            ],
            blur: [
                isTshirtSize
            ],
            breakpoint: [
                isTshirtSize
            ],
            color: [
                isAny
            ],
            container: [
                isTshirtSize
            ],
            'drop-shadow': [
                isTshirtSize
            ],
            ease: [
                'in',
                'out',
                'in-out'
            ],
            font: [
                isAnyNonArbitrary
            ],
            'font-weight': [
                'thin',
                'extralight',
                'light',
                'normal',
                'medium',
                'semibold',
                'bold',
                'extrabold',
                'black'
            ],
            'inset-shadow': [
                isTshirtSize
            ],
            leading: [
                'none',
                'tight',
                'snug',
                'normal',
                'relaxed',
                'loose'
            ],
            perspective: [
                'dramatic',
                'near',
                'normal',
                'midrange',
                'distant',
                'none'
            ],
            radius: [
                isTshirtSize
            ],
            shadow: [
                isTshirtSize
            ],
            spacing: [
                'px',
                isNumber
            ],
            text: [
                isTshirtSize
            ],
            'text-shadow': [
                isTshirtSize
            ],
            tracking: [
                'tighter',
                'tight',
                'normal',
                'wide',
                'wider',
                'widest'
            ]
        },
        classGroups: {
            // --------------
            // --- Layout ---
            // --------------
            /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */ aspect: [
                {
                    aspect: [
                        'auto',
                        'square',
                        isFraction,
                        isArbitraryValue,
                        isArbitraryVariable,
                        themeAspect
                    ]
                }
            ],
            /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */ container: [
                'container'
            ],
            /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */ columns: [
                {
                    columns: [
                        isNumber,
                        isArbitraryValue,
                        isArbitraryVariable,
                        themeContainer
                    ]
                }
            ],
            /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */ 'break-after': [
                {
                    'break-after': scaleBreak()
                }
            ],
            /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */ 'break-before': [
                {
                    'break-before': scaleBreak()
                }
            ],
            /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */ 'break-inside': [
                {
                    'break-inside': [
                        'auto',
                        'avoid',
                        'avoid-page',
                        'avoid-column'
                    ]
                }
            ],
            /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */ 'box-decoration': [
                {
                    'box-decoration': [
                        'slice',
                        'clone'
                    ]
                }
            ],
            /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */ box: [
                {
                    box: [
                        'border',
                        'content'
                    ]
                }
            ],
            /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */ display: [
                'block',
                'inline-block',
                'inline',
                'flex',
                'inline-flex',
                'table',
                'inline-table',
                'table-caption',
                'table-cell',
                'table-column',
                'table-column-group',
                'table-footer-group',
                'table-header-group',
                'table-row-group',
                'table-row',
                'flow-root',
                'grid',
                'inline-grid',
                'contents',
                'list-item',
                'hidden'
            ],
            /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */ sr: [
                'sr-only',
                'not-sr-only'
            ],
            /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */ float: [
                {
                    float: [
                        'right',
                        'left',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */ clear: [
                {
                    clear: [
                        'left',
                        'right',
                        'both',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */ isolation: [
                'isolate',
                'isolation-auto'
            ],
            /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */ 'object-fit': [
                {
                    object: [
                        'contain',
                        'cover',
                        'fill',
                        'none',
                        'scale-down'
                    ]
                }
            ],
            /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */ 'object-position': [
                {
                    object: scalePositionWithArbitrary()
                }
            ],
            /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */ overflow: [
                {
                    overflow: scaleOverflow()
                }
            ],
            /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-x': [
                {
                    'overflow-x': scaleOverflow()
                }
            ],
            /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-y': [
                {
                    'overflow-y': scaleOverflow()
                }
            ],
            /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ overscroll: [
                {
                    overscroll: scaleOverscroll()
                }
            ],
            /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-x': [
                {
                    'overscroll-x': scaleOverscroll()
                }
            ],
            /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-y': [
                {
                    'overscroll-y': scaleOverscroll()
                }
            ],
            /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */ position: [
                'static',
                'fixed',
                'absolute',
                'relative',
                'sticky'
            ],
            /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ inset: [
                {
                    inset: scaleInset()
                }
            ],
            /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-x': [
                {
                    'inset-x': scaleInset()
                }
            ],
            /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-y': [
                {
                    'inset-y': scaleInset()
                }
            ],
            /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */ start: [
                {
                    'inset-s': scaleInset(),
                    /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */ start: scaleInset()
                }
            ],
            /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */ end: [
                {
                    'inset-e': scaleInset(),
                    /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */ end: scaleInset()
                }
            ],
            /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-bs': [
                {
                    'inset-bs': scaleInset()
                }
            ],
            /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-be': [
                {
                    'inset-be': scaleInset()
                }
            ],
            /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ top: [
                {
                    top: scaleInset()
                }
            ],
            /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ right: [
                {
                    right: scaleInset()
                }
            ],
            /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ bottom: [
                {
                    bottom: scaleInset()
                }
            ],
            /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ left: [
                {
                    left: scaleInset()
                }
            ],
            /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */ visibility: [
                'visible',
                'invisible',
                'collapse'
            ],
            /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */ z: [
                {
                    z: [
                        isInteger,
                        'auto',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // ------------------------
            // --- Flexbox and Grid ---
            // ------------------------
            /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */ basis: [
                {
                    basis: [
                        isFraction,
                        'full',
                        'auto',
                        themeContainer,
                        ...scaleUnambiguousSpacing()
                    ]
                }
            ],
            /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */ 'flex-direction': [
                {
                    flex: [
                        'row',
                        'row-reverse',
                        'col',
                        'col-reverse'
                    ]
                }
            ],
            /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */ 'flex-wrap': [
                {
                    flex: [
                        'nowrap',
                        'wrap',
                        'wrap-reverse'
                    ]
                }
            ],
            /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */ flex: [
                {
                    flex: [
                        isNumber,
                        isFraction,
                        'auto',
                        'initial',
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */ grow: [
                {
                    grow: [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */ shrink: [
                {
                    shrink: [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */ order: [
                {
                    order: [
                        isInteger,
                        'first',
                        'last',
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */ 'grid-cols': [
                {
                    'grid-cols': scaleGridTemplateColsRows()
                }
            ],
            /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start-end': [
                {
                    col: scaleGridColRowStartAndEnd()
                }
            ],
            /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start': [
                {
                    'col-start': scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-end': [
                {
                    'col-end': scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */ 'grid-rows': [
                {
                    'grid-rows': scaleGridTemplateColsRows()
                }
            ],
            /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start-end': [
                {
                    row: scaleGridColRowStartAndEnd()
                }
            ],
            /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start': [
                {
                    'row-start': scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-end': [
                {
                    'row-end': scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */ 'grid-flow': [
                {
                    'grid-flow': [
                        'row',
                        'col',
                        'dense',
                        'row-dense',
                        'col-dense'
                    ]
                }
            ],
            /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */ 'auto-cols': [
                {
                    'auto-cols': scaleGridAutoColsRows()
                }
            ],
            /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */ 'auto-rows': [
                {
                    'auto-rows': scaleGridAutoColsRows()
                }
            ],
            /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */ gap: [
                {
                    gap: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-x': [
                {
                    'gap-x': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-y': [
                {
                    'gap-y': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */ 'justify-content': [
                {
                    justify: [
                        ...scaleAlignPrimaryAxis(),
                        'normal'
                    ]
                }
            ],
            /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */ 'justify-items': [
                {
                    'justify-items': [
                        ...scaleAlignSecondaryAxis(),
                        'normal'
                    ]
                }
            ],
            /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */ 'justify-self': [
                {
                    'justify-self': [
                        'auto',
                        ...scaleAlignSecondaryAxis()
                    ]
                }
            ],
            /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */ 'align-content': [
                {
                    content: [
                        'normal',
                        ...scaleAlignPrimaryAxis()
                    ]
                }
            ],
            /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */ 'align-items': [
                {
                    items: [
                        ...scaleAlignSecondaryAxis(),
                        {
                            baseline: [
                                '',
                                'last'
                            ]
                        }
                    ]
                }
            ],
            /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */ 'align-self': [
                {
                    self: [
                        'auto',
                        ...scaleAlignSecondaryAxis(),
                        {
                            baseline: [
                                '',
                                'last'
                            ]
                        }
                    ]
                }
            ],
            /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */ 'place-content': [
                {
                    'place-content': scaleAlignPrimaryAxis()
                }
            ],
            /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */ 'place-items': [
                {
                    'place-items': [
                        ...scaleAlignSecondaryAxis(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */ 'place-self': [
                {
                    'place-self': [
                        'auto',
                        ...scaleAlignSecondaryAxis()
                    ]
                }
            ],
            // Spacing
            /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */ p: [
                {
                    p: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */ px: [
                {
                    px: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */ py: [
                {
                    py: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */ ps: [
                {
                    ps: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */ pe: [
                {
                    pe: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */ pbs: [
                {
                    pbs: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */ pbe: [
                {
                    pbe: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */ pt: [
                {
                    pt: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */ pr: [
                {
                    pr: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */ pb: [
                {
                    pb: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */ pl: [
                {
                    pl: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */ m: [
                {
                    m: scaleMargin()
                }
            ],
            /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */ mx: [
                {
                    mx: scaleMargin()
                }
            ],
            /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */ my: [
                {
                    my: scaleMargin()
                }
            ],
            /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */ ms: [
                {
                    ms: scaleMargin()
                }
            ],
            /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */ me: [
                {
                    me: scaleMargin()
                }
            ],
            /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */ mbs: [
                {
                    mbs: scaleMargin()
                }
            ],
            /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */ mbe: [
                {
                    mbe: scaleMargin()
                }
            ],
            /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */ mt: [
                {
                    mt: scaleMargin()
                }
            ],
            /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */ mr: [
                {
                    mr: scaleMargin()
                }
            ],
            /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */ mb: [
                {
                    mb: scaleMargin()
                }
            ],
            /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ ml: [
                {
                    ml: scaleMargin()
                }
            ],
            /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ 'space-x': [
                {
                    'space-x': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ 'space-x-reverse': [
                'space-x-reverse'
            ],
            /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ 'space-y': [
                {
                    'space-y': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ 'space-y-reverse': [
                'space-y-reverse'
            ],
            // --------------
            // --- Sizing ---
            // --------------
            /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */ size: [
                {
                    size: scaleSizing()
                }
            ],
            /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */ 'inline-size': [
                {
                    inline: [
                        'auto',
                        ...scaleSizingInline()
                    ]
                }
            ],
            /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */ 'min-inline-size': [
                {
                    'min-inline': [
                        'auto',
                        ...scaleSizingInline()
                    ]
                }
            ],
            /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */ 'max-inline-size': [
                {
                    'max-inline': [
                        'none',
                        ...scaleSizingInline()
                    ]
                }
            ],
            /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */ 'block-size': [
                {
                    block: [
                        'auto',
                        ...scaleSizingBlock()
                    ]
                }
            ],
            /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */ 'min-block-size': [
                {
                    'min-block': [
                        'auto',
                        ...scaleSizingBlock()
                    ]
                }
            ],
            /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */ 'max-block-size': [
                {
                    'max-block': [
                        'none',
                        ...scaleSizingBlock()
                    ]
                }
            ],
            /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */ w: [
                {
                    w: [
                        themeContainer,
                        'screen',
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */ 'min-w': [
                {
                    'min-w': [
                        themeContainer,
                        'screen',
                        /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ 'none',
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */ 'max-w': [
                {
                    'max-w': [
                        themeContainer,
                        'screen',
                        'none',
                        /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ 'prose',
                        /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ {
                            screen: [
                                themeBreakpoint
                            ]
                        },
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */ h: [
                {
                    h: [
                        'screen',
                        'lh',
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */ 'min-h': [
                {
                    'min-h': [
                        'screen',
                        'lh',
                        'none',
                        ...scaleSizing()
                    ]
                }
            ],
            /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */ 'max-h': [
                {
                    'max-h': [
                        'screen',
                        'lh',
                        ...scaleSizing()
                    ]
                }
            ],
            // ------------------
            // --- Typography ---
            // ------------------
            /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */ 'font-size': [
                {
                    text: [
                        'base',
                        themeText,
                        isArbitraryVariableLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */ 'font-smoothing': [
                'antialiased',
                'subpixel-antialiased'
            ],
            /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */ 'font-style': [
                'italic',
                'not-italic'
            ],
            /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */ 'font-weight': [
                {
                    font: [
                        themeFontWeight,
                        isArbitraryVariableWeight,
                        isArbitraryWeight
                    ]
                }
            ],
            /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */ 'font-stretch': [
                {
                    'font-stretch': [
                        'ultra-condensed',
                        'extra-condensed',
                        'condensed',
                        'semi-condensed',
                        'normal',
                        'semi-expanded',
                        'expanded',
                        'extra-expanded',
                        'ultra-expanded',
                        isPercent,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */ 'font-family': [
                {
                    font: [
                        isArbitraryVariableFamilyName,
                        isArbitraryFamilyName,
                        themeFont
                    ]
                }
            ],
            /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */ 'font-features': [
                {
                    'font-features': [
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-normal': [
                'normal-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-ordinal': [
                'ordinal'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-slashed-zero': [
                'slashed-zero'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-figure': [
                'lining-nums',
                'oldstyle-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-spacing': [
                'proportional-nums',
                'tabular-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-fraction': [
                'diagonal-fractions',
                'stacked-fractions'
            ],
            /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */ tracking: [
                {
                    tracking: [
                        themeTracking,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */ 'line-clamp': [
                {
                    'line-clamp': [
                        isNumber,
                        'none',
                        isArbitraryVariable,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */ leading: [
                {
                    leading: [
                        /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ themeLeading,
                        ...scaleUnambiguousSpacing()
                    ]
                }
            ],
            /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */ 'list-image': [
                {
                    'list-image': [
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */ 'list-style-position': [
                {
                    list: [
                        'inside',
                        'outside'
                    ]
                }
            ],
            /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */ 'list-style-type': [
                {
                    list: [
                        'disc',
                        'decimal',
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */ 'text-alignment': [
                {
                    text: [
                        'left',
                        'center',
                        'right',
                        'justify',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */ 'placeholder-color': [
                {
                    placeholder: scaleColor()
                }
            ],
            /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */ 'text-color': [
                {
                    text: scaleColor()
                }
            ],
            /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */ 'text-decoration': [
                'underline',
                'overline',
                'line-through',
                'no-underline'
            ],
            /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */ 'text-decoration-style': [
                {
                    decoration: [
                        ...scaleLineStyle(),
                        'wavy'
                    ]
                }
            ],
            /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */ 'text-decoration-thickness': [
                {
                    decoration: [
                        isNumber,
                        'from-font',
                        'auto',
                        isArbitraryVariable,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */ 'text-decoration-color': [
                {
                    decoration: scaleColor()
                }
            ],
            /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */ 'underline-offset': [
                {
                    'underline-offset': [
                        isNumber,
                        'auto',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */ 'text-transform': [
                'uppercase',
                'lowercase',
                'capitalize',
                'normal-case'
            ],
            /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */ 'text-overflow': [
                'truncate',
                'text-ellipsis',
                'text-clip'
            ],
            /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */ 'text-wrap': [
                {
                    text: [
                        'wrap',
                        'nowrap',
                        'balance',
                        'pretty'
                    ]
                }
            ],
            /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */ indent: [
                {
                    indent: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */ 'vertical-align': [
                {
                    align: [
                        'baseline',
                        'top',
                        'middle',
                        'bottom',
                        'text-top',
                        'text-bottom',
                        'sub',
                        'super',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */ whitespace: [
                {
                    whitespace: [
                        'normal',
                        'nowrap',
                        'pre',
                        'pre-line',
                        'pre-wrap',
                        'break-spaces'
                    ]
                }
            ],
            /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */ break: [
                {
                    break: [
                        'normal',
                        'words',
                        'all',
                        'keep'
                    ]
                }
            ],
            /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */ wrap: [
                {
                    wrap: [
                        'break-word',
                        'anywhere',
                        'normal'
                    ]
                }
            ],
            /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */ hyphens: [
                {
                    hyphens: [
                        'none',
                        'manual',
                        'auto'
                    ]
                }
            ],
            /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */ content: [
                {
                    content: [
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // -------------------
            // --- Backgrounds ---
            // -------------------
            /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */ 'bg-attachment': [
                {
                    bg: [
                        'fixed',
                        'local',
                        'scroll'
                    ]
                }
            ],
            /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */ 'bg-clip': [
                {
                    'bg-clip': [
                        'border',
                        'padding',
                        'content',
                        'text'
                    ]
                }
            ],
            /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */ 'bg-origin': [
                {
                    'bg-origin': [
                        'border',
                        'padding',
                        'content'
                    ]
                }
            ],
            /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */ 'bg-position': [
                {
                    bg: scaleBgPosition()
                }
            ],
            /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */ 'bg-repeat': [
                {
                    bg: scaleBgRepeat()
                }
            ],
            /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */ 'bg-size': [
                {
                    bg: scaleBgSize()
                }
            ],
            /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */ 'bg-image': [
                {
                    bg: [
                        'none',
                        {
                            linear: [
                                {
                                    to: [
                                        't',
                                        'tr',
                                        'r',
                                        'br',
                                        'b',
                                        'bl',
                                        'l',
                                        'tl'
                                    ]
                                },
                                isInteger,
                                isArbitraryVariable,
                                isArbitraryValue
                            ],
                            radial: [
                                '',
                                isArbitraryVariable,
                                isArbitraryValue
                            ],
                            conic: [
                                isInteger,
                                isArbitraryVariable,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryVariableImage,
                        isArbitraryImage
                    ]
                }
            ],
            /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */ 'bg-color': [
                {
                    bg: scaleColor()
                }
            ],
            /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from-pos': [
                {
                    from: scaleGradientStopPosition()
                }
            ],
            /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via-pos': [
                {
                    via: scaleGradientStopPosition()
                }
            ],
            /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to-pos': [
                {
                    to: scaleGradientStopPosition()
                }
            ],
            /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from': [
                {
                    from: scaleColor()
                }
            ],
            /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via': [
                {
                    via: scaleColor()
                }
            ],
            /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to': [
                {
                    to: scaleColor()
                }
            ],
            // ---------------
            // --- Borders ---
            // ---------------
            /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */ rounded: [
                {
                    rounded: scaleRadius()
                }
            ],
            /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-s': [
                {
                    'rounded-s': scaleRadius()
                }
            ],
            /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-e': [
                {
                    'rounded-e': scaleRadius()
                }
            ],
            /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-t': [
                {
                    'rounded-t': scaleRadius()
                }
            ],
            /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-r': [
                {
                    'rounded-r': scaleRadius()
                }
            ],
            /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-b': [
                {
                    'rounded-b': scaleRadius()
                }
            ],
            /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-l': [
                {
                    'rounded-l': scaleRadius()
                }
            ],
            /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ss': [
                {
                    'rounded-ss': scaleRadius()
                }
            ],
            /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-se': [
                {
                    'rounded-se': scaleRadius()
                }
            ],
            /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ee': [
                {
                    'rounded-ee': scaleRadius()
                }
            ],
            /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-es': [
                {
                    'rounded-es': scaleRadius()
                }
            ],
            /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tl': [
                {
                    'rounded-tl': scaleRadius()
                }
            ],
            /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tr': [
                {
                    'rounded-tr': scaleRadius()
                }
            ],
            /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-br': [
                {
                    'rounded-br': scaleRadius()
                }
            ],
            /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-bl': [
                {
                    'rounded-bl': scaleRadius()
                }
            ],
            /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w': [
                {
                    border: scaleBorderWidth()
                }
            ],
            /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-x': [
                {
                    'border-x': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-y': [
                {
                    'border-y': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-s': [
                {
                    'border-s': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-e': [
                {
                    'border-e': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-bs': [
                {
                    'border-bs': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-be': [
                {
                    'border-be': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-t': [
                {
                    'border-t': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-r': [
                {
                    'border-r': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-b': [
                {
                    'border-b': scaleBorderWidth()
                }
            ],
            /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-l': [
                {
                    'border-l': scaleBorderWidth()
                }
            ],
            /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ 'divide-x': [
                {
                    'divide-x': scaleBorderWidth()
                }
            ],
            /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ 'divide-x-reverse': [
                'divide-x-reverse'
            ],
            /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ 'divide-y': [
                {
                    'divide-y': scaleBorderWidth()
                }
            ],
            /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ 'divide-y-reverse': [
                'divide-y-reverse'
            ],
            /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */ 'border-style': [
                {
                    border: [
                        ...scaleLineStyle(),
                        'hidden',
                        'none'
                    ]
                }
            ],
            /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */ 'divide-style': [
                {
                    divide: [
                        ...scaleLineStyle(),
                        'hidden',
                        'none'
                    ]
                }
            ],
            /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color': [
                {
                    border: scaleColor()
                }
            ],
            /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-x': [
                {
                    'border-x': scaleColor()
                }
            ],
            /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-y': [
                {
                    'border-y': scaleColor()
                }
            ],
            /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-s': [
                {
                    'border-s': scaleColor()
                }
            ],
            /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-e': [
                {
                    'border-e': scaleColor()
                }
            ],
            /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-bs': [
                {
                    'border-bs': scaleColor()
                }
            ],
            /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-be': [
                {
                    'border-be': scaleColor()
                }
            ],
            /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-t': [
                {
                    'border-t': scaleColor()
                }
            ],
            /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-r': [
                {
                    'border-r': scaleColor()
                }
            ],
            /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-b': [
                {
                    'border-b': scaleColor()
                }
            ],
            /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-l': [
                {
                    'border-l': scaleColor()
                }
            ],
            /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */ 'divide-color': [
                {
                    divide: scaleColor()
                }
            ],
            /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */ 'outline-style': [
                {
                    outline: [
                        ...scaleLineStyle(),
                        'none',
                        'hidden'
                    ]
                }
            ],
            /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */ 'outline-offset': [
                {
                    'outline-offset': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */ 'outline-w': [
                {
                    outline: [
                        '',
                        isNumber,
                        isArbitraryVariableLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */ 'outline-color': [
                {
                    outline: scaleColor()
                }
            ],
            // ---------------
            // --- Effects ---
            // ---------------
            /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */ shadow: [
                {
                    shadow: [
                        // Deprecated since Tailwind CSS v4.0.0
                        '',
                        'none',
                        themeShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */ 'shadow-color': [
                {
                    shadow: scaleColor()
                }
            ],
            /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */ 'inset-shadow': [
                {
                    'inset-shadow': [
                        'none',
                        themeInsetShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */ 'inset-shadow-color': [
                {
                    'inset-shadow': scaleColor()
                }
            ],
            /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */ 'ring-w': [
                {
                    ring: scaleBorderWidth()
                }
            ],
            /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */ 'ring-w-inset': [
                'ring-inset'
            ],
            /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */ 'ring-color': [
                {
                    ring: scaleColor()
                }
            ],
            /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */ 'ring-offset-w': [
                {
                    'ring-offset': [
                        isNumber,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */ 'ring-offset-color': [
                {
                    'ring-offset': scaleColor()
                }
            ],
            /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */ 'inset-ring-w': [
                {
                    'inset-ring': scaleBorderWidth()
                }
            ],
            /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */ 'inset-ring-color': [
                {
                    'inset-ring': scaleColor()
                }
            ],
            /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */ 'text-shadow': [
                {
                    'text-shadow': [
                        'none',
                        themeTextShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */ 'text-shadow-color': [
                {
                    'text-shadow': scaleColor()
                }
            ],
            /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */ opacity: [
                {
                    opacity: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */ 'mix-blend': [
                {
                    'mix-blend': [
                        ...scaleBlendMode(),
                        'plus-darker',
                        'plus-lighter'
                    ]
                }
            ],
            /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */ 'bg-blend': [
                {
                    'bg-blend': scaleBlendMode()
                }
            ],
            /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */ 'mask-clip': [
                {
                    'mask-clip': [
                        'border',
                        'padding',
                        'content',
                        'fill',
                        'stroke',
                        'view'
                    ]
                },
                'mask-no-clip'
            ],
            /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */ 'mask-composite': [
                {
                    mask: [
                        'add',
                        'subtract',
                        'intersect',
                        'exclude'
                    ]
                }
            ],
            /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */ 'mask-image-linear-pos': [
                {
                    'mask-linear': [
                        isNumber
                    ]
                }
            ],
            'mask-image-linear-from-pos': [
                {
                    'mask-linear-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-linear-to-pos': [
                {
                    'mask-linear-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-linear-from-color': [
                {
                    'mask-linear-from': scaleColor()
                }
            ],
            'mask-image-linear-to-color': [
                {
                    'mask-linear-to': scaleColor()
                }
            ],
            'mask-image-t-from-pos': [
                {
                    'mask-t-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-t-to-pos': [
                {
                    'mask-t-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-t-from-color': [
                {
                    'mask-t-from': scaleColor()
                }
            ],
            'mask-image-t-to-color': [
                {
                    'mask-t-to': scaleColor()
                }
            ],
            'mask-image-r-from-pos': [
                {
                    'mask-r-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-r-to-pos': [
                {
                    'mask-r-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-r-from-color': [
                {
                    'mask-r-from': scaleColor()
                }
            ],
            'mask-image-r-to-color': [
                {
                    'mask-r-to': scaleColor()
                }
            ],
            'mask-image-b-from-pos': [
                {
                    'mask-b-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-b-to-pos': [
                {
                    'mask-b-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-b-from-color': [
                {
                    'mask-b-from': scaleColor()
                }
            ],
            'mask-image-b-to-color': [
                {
                    'mask-b-to': scaleColor()
                }
            ],
            'mask-image-l-from-pos': [
                {
                    'mask-l-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-l-to-pos': [
                {
                    'mask-l-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-l-from-color': [
                {
                    'mask-l-from': scaleColor()
                }
            ],
            'mask-image-l-to-color': [
                {
                    'mask-l-to': scaleColor()
                }
            ],
            'mask-image-x-from-pos': [
                {
                    'mask-x-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-x-to-pos': [
                {
                    'mask-x-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-x-from-color': [
                {
                    'mask-x-from': scaleColor()
                }
            ],
            'mask-image-x-to-color': [
                {
                    'mask-x-to': scaleColor()
                }
            ],
            'mask-image-y-from-pos': [
                {
                    'mask-y-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-y-to-pos': [
                {
                    'mask-y-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-y-from-color': [
                {
                    'mask-y-from': scaleColor()
                }
            ],
            'mask-image-y-to-color': [
                {
                    'mask-y-to': scaleColor()
                }
            ],
            'mask-image-radial': [
                {
                    'mask-radial': [
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            'mask-image-radial-from-pos': [
                {
                    'mask-radial-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-radial-to-pos': [
                {
                    'mask-radial-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-radial-from-color': [
                {
                    'mask-radial-from': scaleColor()
                }
            ],
            'mask-image-radial-to-color': [
                {
                    'mask-radial-to': scaleColor()
                }
            ],
            'mask-image-radial-shape': [
                {
                    'mask-radial': [
                        'circle',
                        'ellipse'
                    ]
                }
            ],
            'mask-image-radial-size': [
                {
                    'mask-radial': [
                        {
                            closest: [
                                'side',
                                'corner'
                            ],
                            farthest: [
                                'side',
                                'corner'
                            ]
                        }
                    ]
                }
            ],
            'mask-image-radial-pos': [
                {
                    'mask-radial-at': scalePosition()
                }
            ],
            'mask-image-conic-pos': [
                {
                    'mask-conic': [
                        isNumber
                    ]
                }
            ],
            'mask-image-conic-from-pos': [
                {
                    'mask-conic-from': scaleMaskImagePosition()
                }
            ],
            'mask-image-conic-to-pos': [
                {
                    'mask-conic-to': scaleMaskImagePosition()
                }
            ],
            'mask-image-conic-from-color': [
                {
                    'mask-conic-from': scaleColor()
                }
            ],
            'mask-image-conic-to-color': [
                {
                    'mask-conic-to': scaleColor()
                }
            ],
            /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */ 'mask-mode': [
                {
                    mask: [
                        'alpha',
                        'luminance',
                        'match'
                    ]
                }
            ],
            /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */ 'mask-origin': [
                {
                    'mask-origin': [
                        'border',
                        'padding',
                        'content',
                        'fill',
                        'stroke',
                        'view'
                    ]
                }
            ],
            /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */ 'mask-position': [
                {
                    mask: scaleBgPosition()
                }
            ],
            /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */ 'mask-repeat': [
                {
                    mask: scaleBgRepeat()
                }
            ],
            /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */ 'mask-size': [
                {
                    mask: scaleBgSize()
                }
            ],
            /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */ 'mask-type': [
                {
                    'mask-type': [
                        'alpha',
                        'luminance'
                    ]
                }
            ],
            /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */ 'mask-image': [
                {
                    mask: [
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // ---------------
            // --- Filters ---
            // ---------------
            /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */ filter: [
                {
                    filter: [
                        // Deprecated since Tailwind CSS v3.0.0
                        '',
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */ blur: [
                {
                    blur: scaleBlur()
                }
            ],
            /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */ brightness: [
                {
                    brightness: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */ contrast: [
                {
                    contrast: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */ 'drop-shadow': [
                {
                    'drop-shadow': [
                        // Deprecated since Tailwind CSS v4.0.0
                        '',
                        'none',
                        themeDropShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */ 'drop-shadow-color': [
                {
                    'drop-shadow': scaleColor()
                }
            ],
            /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */ grayscale: [
                {
                    grayscale: [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */ 'hue-rotate': [
                {
                    'hue-rotate': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */ invert: [
                {
                    invert: [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */ saturate: [
                {
                    saturate: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */ sepia: [
                {
                    sepia: [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */ 'backdrop-filter': [
                {
                    'backdrop-filter': [
                        // Deprecated since Tailwind CSS v3.0.0
                        '',
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */ 'backdrop-blur': [
                {
                    'backdrop-blur': scaleBlur()
                }
            ],
            /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */ 'backdrop-brightness': [
                {
                    'backdrop-brightness': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */ 'backdrop-contrast': [
                {
                    'backdrop-contrast': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */ 'backdrop-grayscale': [
                {
                    'backdrop-grayscale': [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */ 'backdrop-hue-rotate': [
                {
                    'backdrop-hue-rotate': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */ 'backdrop-invert': [
                {
                    'backdrop-invert': [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */ 'backdrop-opacity': [
                {
                    'backdrop-opacity': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */ 'backdrop-saturate': [
                {
                    'backdrop-saturate': [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */ 'backdrop-sepia': [
                {
                    'backdrop-sepia': [
                        '',
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // --------------
            // --- Tables ---
            // --------------
            /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */ 'border-collapse': [
                {
                    border: [
                        'collapse',
                        'separate'
                    ]
                }
            ],
            /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing': [
                {
                    'border-spacing': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-x': [
                {
                    'border-spacing-x': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-y': [
                {
                    'border-spacing-y': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */ 'table-layout': [
                {
                    table: [
                        'auto',
                        'fixed'
                    ]
                }
            ],
            /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */ caption: [
                {
                    caption: [
                        'top',
                        'bottom'
                    ]
                }
            ],
            // ---------------------------------
            // --- Transitions and Animation ---
            // ---------------------------------
            /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */ transition: [
                {
                    transition: [
                        '',
                        'all',
                        'colors',
                        'opacity',
                        'shadow',
                        'transform',
                        'none',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */ 'transition-behavior': [
                {
                    transition: [
                        'normal',
                        'discrete'
                    ]
                }
            ],
            /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */ duration: [
                {
                    duration: [
                        isNumber,
                        'initial',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ ease: [
                {
                    ease: [
                        'linear',
                        'initial',
                        themeEase,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */ delay: [
                {
                    delay: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */ animate: [
                {
                    animate: [
                        'none',
                        themeAnimate,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // ------------------
            // --- Transforms ---
            // ------------------
            /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */ backface: [
                {
                    backface: [
                        'hidden',
                        'visible'
                    ]
                }
            ],
            /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */ perspective: [
                {
                    perspective: [
                        themePerspective,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */ 'perspective-origin': [
                {
                    'perspective-origin': scalePositionWithArbitrary()
                }
            ],
            /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */ rotate: [
                {
                    rotate: scaleRotate()
                }
            ],
            /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */ 'rotate-x': [
                {
                    'rotate-x': scaleRotate()
                }
            ],
            /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */ 'rotate-y': [
                {
                    'rotate-y': scaleRotate()
                }
            ],
            /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */ 'rotate-z': [
                {
                    'rotate-z': scaleRotate()
                }
            ],
            /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */ scale: [
                {
                    scale: scaleScale()
                }
            ],
            /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-x': [
                {
                    'scale-x': scaleScale()
                }
            ],
            /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-y': [
                {
                    'scale-y': scaleScale()
                }
            ],
            /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-z': [
                {
                    'scale-z': scaleScale()
                }
            ],
            /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-3d': [
                'scale-3d'
            ],
            /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */ skew: [
                {
                    skew: scaleSkew()
                }
            ],
            /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-x': [
                {
                    'skew-x': scaleSkew()
                }
            ],
            /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-y': [
                {
                    'skew-y': scaleSkew()
                }
            ],
            /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */ transform: [
                {
                    transform: [
                        isArbitraryVariable,
                        isArbitraryValue,
                        '',
                        'none',
                        'gpu',
                        'cpu'
                    ]
                }
            ],
            /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */ 'transform-origin': [
                {
                    origin: scalePositionWithArbitrary()
                }
            ],
            /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */ 'transform-style': [
                {
                    transform: [
                        '3d',
                        'flat'
                    ]
                }
            ],
            /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */ translate: [
                {
                    translate: scaleTranslate()
                }
            ],
            /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-x': [
                {
                    'translate-x': scaleTranslate()
                }
            ],
            /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-y': [
                {
                    'translate-y': scaleTranslate()
                }
            ],
            /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-z': [
                {
                    'translate-z': scaleTranslate()
                }
            ],
            /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-none': [
                'translate-none'
            ],
            // ---------------------
            // --- Interactivity ---
            // ---------------------
            /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */ accent: [
                {
                    accent: scaleColor()
                }
            ],
            /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */ appearance: [
                {
                    appearance: [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */ 'caret-color': [
                {
                    caret: scaleColor()
                }
            ],
            /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */ 'color-scheme': [
                {
                    scheme: [
                        'normal',
                        'dark',
                        'light',
                        'light-dark',
                        'only-dark',
                        'only-light'
                    ]
                }
            ],
            /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */ cursor: [
                {
                    cursor: [
                        'auto',
                        'default',
                        'pointer',
                        'wait',
                        'text',
                        'move',
                        'help',
                        'not-allowed',
                        'none',
                        'context-menu',
                        'progress',
                        'cell',
                        'crosshair',
                        'vertical-text',
                        'alias',
                        'copy',
                        'no-drop',
                        'grab',
                        'grabbing',
                        'all-scroll',
                        'col-resize',
                        'row-resize',
                        'n-resize',
                        'e-resize',
                        's-resize',
                        'w-resize',
                        'ne-resize',
                        'nw-resize',
                        'se-resize',
                        'sw-resize',
                        'ew-resize',
                        'ns-resize',
                        'nesw-resize',
                        'nwse-resize',
                        'zoom-in',
                        'zoom-out',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */ 'field-sizing': [
                {
                    'field-sizing': [
                        'fixed',
                        'content'
                    ]
                }
            ],
            /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */ 'pointer-events': [
                {
                    'pointer-events': [
                        'auto',
                        'none'
                    ]
                }
            ],
            /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */ resize: [
                {
                    resize: [
                        'none',
                        '',
                        'y',
                        'x'
                    ]
                }
            ],
            /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */ 'scroll-behavior': [
                {
                    scroll: [
                        'auto',
                        'smooth'
                    ]
                }
            ],
            /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-m': [
                {
                    'scroll-m': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mx': [
                {
                    'scroll-mx': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-my': [
                {
                    'scroll-my': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ms': [
                {
                    'scroll-ms': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-me': [
                {
                    'scroll-me': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mbs': [
                {
                    'scroll-mbs': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mbe': [
                {
                    'scroll-mbe': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mt': [
                {
                    'scroll-mt': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mr': [
                {
                    'scroll-mr': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mb': [
                {
                    'scroll-mb': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ml': [
                {
                    'scroll-ml': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-p': [
                {
                    'scroll-p': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-px': [
                {
                    'scroll-px': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-py': [
                {
                    'scroll-py': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-ps': [
                {
                    'scroll-ps': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pe': [
                {
                    'scroll-pe': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pbs': [
                {
                    'scroll-pbs': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pbe': [
                {
                    'scroll-pbe': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pt': [
                {
                    'scroll-pt': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pr': [
                {
                    'scroll-pr': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pb': [
                {
                    'scroll-pb': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pl': [
                {
                    'scroll-pl': scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */ 'snap-align': [
                {
                    snap: [
                        'start',
                        'end',
                        'center',
                        'align-none'
                    ]
                }
            ],
            /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */ 'snap-stop': [
                {
                    snap: [
                        'normal',
                        'always'
                    ]
                }
            ],
            /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-type': [
                {
                    snap: [
                        'none',
                        'x',
                        'y',
                        'both'
                    ]
                }
            ],
            /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-strictness': [
                {
                    snap: [
                        'mandatory',
                        'proximity'
                    ]
                }
            ],
            /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */ touch: [
                {
                    touch: [
                        'auto',
                        'none',
                        'manipulation'
                    ]
                }
            ],
            /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-x': [
                {
                    'touch-pan': [
                        'x',
                        'left',
                        'right'
                    ]
                }
            ],
            /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-y': [
                {
                    'touch-pan': [
                        'y',
                        'up',
                        'down'
                    ]
                }
            ],
            /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-pz': [
                'touch-pinch-zoom'
            ],
            /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */ select: [
                {
                    select: [
                        'none',
                        'text',
                        'all',
                        'auto'
                    ]
                }
            ],
            /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */ 'will-change': [
                {
                    'will-change': [
                        'auto',
                        'scroll',
                        'contents',
                        'transform',
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // -----------
            // --- SVG ---
            // -----------
            /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */ fill: [
                {
                    fill: [
                        'none',
                        ...scaleColor()
                    ]
                }
            ],
            /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */ 'stroke-w': [
                {
                    stroke: [
                        isNumber,
                        isArbitraryVariableLength,
                        isArbitraryLength,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */ stroke: [
                {
                    stroke: [
                        'none',
                        ...scaleColor()
                    ]
                }
            ],
            // ---------------------
            // --- Accessibility ---
            // ---------------------
            /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */ 'forced-color-adjust': [
                {
                    'forced-color-adjust': [
                        'auto',
                        'none'
                    ]
                }
            ]
        },
        conflictingClassGroups: {
            overflow: [
                'overflow-x',
                'overflow-y'
            ],
            overscroll: [
                'overscroll-x',
                'overscroll-y'
            ],
            inset: [
                'inset-x',
                'inset-y',
                'inset-bs',
                'inset-be',
                'start',
                'end',
                'top',
                'right',
                'bottom',
                'left'
            ],
            'inset-x': [
                'right',
                'left'
            ],
            'inset-y': [
                'top',
                'bottom'
            ],
            flex: [
                'basis',
                'grow',
                'shrink'
            ],
            gap: [
                'gap-x',
                'gap-y'
            ],
            p: [
                'px',
                'py',
                'ps',
                'pe',
                'pbs',
                'pbe',
                'pt',
                'pr',
                'pb',
                'pl'
            ],
            px: [
                'pr',
                'pl'
            ],
            py: [
                'pt',
                'pb'
            ],
            m: [
                'mx',
                'my',
                'ms',
                'me',
                'mbs',
                'mbe',
                'mt',
                'mr',
                'mb',
                'ml'
            ],
            mx: [
                'mr',
                'ml'
            ],
            my: [
                'mt',
                'mb'
            ],
            size: [
                'w',
                'h'
            ],
            'font-size': [
                'leading'
            ],
            'fvn-normal': [
                'fvn-ordinal',
                'fvn-slashed-zero',
                'fvn-figure',
                'fvn-spacing',
                'fvn-fraction'
            ],
            'fvn-ordinal': [
                'fvn-normal'
            ],
            'fvn-slashed-zero': [
                'fvn-normal'
            ],
            'fvn-figure': [
                'fvn-normal'
            ],
            'fvn-spacing': [
                'fvn-normal'
            ],
            'fvn-fraction': [
                'fvn-normal'
            ],
            'line-clamp': [
                'display',
                'overflow'
            ],
            rounded: [
                'rounded-s',
                'rounded-e',
                'rounded-t',
                'rounded-r',
                'rounded-b',
                'rounded-l',
                'rounded-ss',
                'rounded-se',
                'rounded-ee',
                'rounded-es',
                'rounded-tl',
                'rounded-tr',
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-s': [
                'rounded-ss',
                'rounded-es'
            ],
            'rounded-e': [
                'rounded-se',
                'rounded-ee'
            ],
            'rounded-t': [
                'rounded-tl',
                'rounded-tr'
            ],
            'rounded-r': [
                'rounded-tr',
                'rounded-br'
            ],
            'rounded-b': [
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-l': [
                'rounded-tl',
                'rounded-bl'
            ],
            'border-spacing': [
                'border-spacing-x',
                'border-spacing-y'
            ],
            'border-w': [
                'border-w-x',
                'border-w-y',
                'border-w-s',
                'border-w-e',
                'border-w-bs',
                'border-w-be',
                'border-w-t',
                'border-w-r',
                'border-w-b',
                'border-w-l'
            ],
            'border-w-x': [
                'border-w-r',
                'border-w-l'
            ],
            'border-w-y': [
                'border-w-t',
                'border-w-b'
            ],
            'border-color': [
                'border-color-x',
                'border-color-y',
                'border-color-s',
                'border-color-e',
                'border-color-bs',
                'border-color-be',
                'border-color-t',
                'border-color-r',
                'border-color-b',
                'border-color-l'
            ],
            'border-color-x': [
                'border-color-r',
                'border-color-l'
            ],
            'border-color-y': [
                'border-color-t',
                'border-color-b'
            ],
            translate: [
                'translate-x',
                'translate-y',
                'translate-none'
            ],
            'translate-none': [
                'translate',
                'translate-x',
                'translate-y',
                'translate-z'
            ],
            'scroll-m': [
                'scroll-mx',
                'scroll-my',
                'scroll-ms',
                'scroll-me',
                'scroll-mbs',
                'scroll-mbe',
                'scroll-mt',
                'scroll-mr',
                'scroll-mb',
                'scroll-ml'
            ],
            'scroll-mx': [
                'scroll-mr',
                'scroll-ml'
            ],
            'scroll-my': [
                'scroll-mt',
                'scroll-mb'
            ],
            'scroll-p': [
                'scroll-px',
                'scroll-py',
                'scroll-ps',
                'scroll-pe',
                'scroll-pbs',
                'scroll-pbe',
                'scroll-pt',
                'scroll-pr',
                'scroll-pb',
                'scroll-pl'
            ],
            'scroll-px': [
                'scroll-pr',
                'scroll-pl'
            ],
            'scroll-py': [
                'scroll-pt',
                'scroll-pb'
            ],
            touch: [
                'touch-x',
                'touch-y',
                'touch-pz'
            ],
            'touch-x': [
                'touch'
            ],
            'touch-y': [
                'touch'
            ],
            'touch-pz': [
                'touch'
            ]
        },
        conflictingClassGroupModifiers: {
            'font-size': [
                'leading'
            ]
        },
        orderSensitiveModifiers: [
            '*',
            '**',
            'after',
            'backdrop',
            'before',
            'details-content',
            'file',
            'first-letter',
            'first-line',
            'marker',
            'placeholder',
            'selection'
        ]
    };
};
/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */ const mergeConfigs = (baseConfig, { cacheSize, prefix, experimentalParseClassName, extend = {}, override = {} })=>{
    overrideProperty(baseConfig, 'cacheSize', cacheSize);
    overrideProperty(baseConfig, 'prefix', prefix);
    overrideProperty(baseConfig, 'experimentalParseClassName', experimentalParseClassName);
    overrideConfigProperties(baseConfig.theme, override.theme);
    overrideConfigProperties(baseConfig.classGroups, override.classGroups);
    overrideConfigProperties(baseConfig.conflictingClassGroups, override.conflictingClassGroups);
    overrideConfigProperties(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers);
    overrideProperty(baseConfig, 'orderSensitiveModifiers', override.orderSensitiveModifiers);
    mergeConfigProperties(baseConfig.theme, extend.theme);
    mergeConfigProperties(baseConfig.classGroups, extend.classGroups);
    mergeConfigProperties(baseConfig.conflictingClassGroups, extend.conflictingClassGroups);
    mergeConfigProperties(baseConfig.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers);
    mergeArrayProperties(baseConfig, extend, 'orderSensitiveModifiers');
    return baseConfig;
};
const overrideProperty = (baseObject, overrideKey, overrideValue)=>{
    if (overrideValue !== undefined) {
        baseObject[overrideKey] = overrideValue;
    }
};
const overrideConfigProperties = (baseObject, overrideObject)=>{
    if (overrideObject) {
        for(const key in overrideObject){
            overrideProperty(baseObject, key, overrideObject[key]);
        }
    }
};
const mergeConfigProperties = (baseObject, mergeObject)=>{
    if (mergeObject) {
        for(const key in mergeObject){
            mergeArrayProperties(baseObject, mergeObject, key);
        }
    }
};
const mergeArrayProperties = (baseObject, mergeObject, key)=>{
    const mergeValue = mergeObject[key];
    if (mergeValue !== undefined) {
        baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue;
    }
};
const extendTailwindMerge = (configExtension, ...createConfig)=>typeof configExtension === 'function' ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(()=>mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
const twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
;
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/index.parts.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/owner.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ownerDocument",
    ()=>ownerDocument
]);
;
function ownerDocument(node) {
    return node?.ownerDocument || document;
}
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/useControlled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useControlled",
    ()=>useControlled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes, dependency arrays are intentionally ignored
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */ var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useControlled({ controlled, default: defaultProp, name, state = 'value' }) {
    // isControlled is ignored in the hook dependency lists as it should never change.
    const { current: isControlled } = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](controlled !== undefined);
    const [valueState, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](defaultProp);
    const value = isControlled ? controlled : valueState;
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "useControlled.useEffect": ()=>{
                if (isControlled !== (controlled !== undefined)) {
                    console.error([
                        `Base UI: A component is changing the ${isControlled ? '' : 'un'}controlled ${state} state of ${name} to be ${isControlled ? 'un' : ''}controlled.`,
                        'Elements should not switch from uncontrolled to controlled (or vice versa).',
                        `Decide between using a controlled or uncontrolled ${name} ` + 'element for the lifetime of the component.',
                        "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
                        'More info: https://fb.me/react-controlled-components'
                    ].join('\n'));
                }
            }
        }["useControlled.useEffect"], [
            state,
            name,
            controlled
        ]);
        const { current: defaultValue } = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](defaultProp);
        __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "useControlled.useEffect": ()=>{
                // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is for more details.
                if (!isControlled && JSON.stringify(defaultValue) !== JSON.stringify(defaultProp)) {
                    console.error([
                        `Base UI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` + `To suppress this warning opt to use a controlled ${name}.`
                    ].join('\n'));
                }
            }
        }["useControlled.useEffect"], [
            JSON.stringify(defaultProp)
        ]);
    }
    const setValueIfUncontrolled = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useControlled.useCallback[setValueIfUncontrolled]": (newValue)=>{
            if (!isControlled) {
                setValue(newValue);
            }
        }
    }["useControlled.useCallback[setValueIfUncontrolled]"], []);
    return [
        value,
        setValueIfUncontrolled
    ];
}
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/useValueAsRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useValueAsRef",
    ()=>useValueAsRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-client] (ecmascript)");
'use client';
;
;
function useValueAsRef(value) {
    const latest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])(createLatestRef, value).current;
    latest.next = value;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])(latest.effect);
    return latest;
}
function createLatestRef(value) {
    const latest = {
        current: value,
        next: value,
        effect: ()=>{
            latest.current = latest.next;
        }
    };
    return latest;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createChangeEventDetails",
    ()=>createChangeEventDetails,
    "createGenericEventDetails",
    ()=>createGenericEventDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
;
;
function createChangeEventDetails(reason, event, trigger, customProperties) {
    let canceled = false;
    let allowPropagation = false;
    const custom = customProperties ?? __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"];
    const details = {
        reason,
        event: event ?? new Event('base-ui'),
        cancel () {
            canceled = true;
        },
        allowPropagation () {
            allowPropagation = true;
        },
        get isCanceled () {
            return canceled;
        },
        get isPropagationAllowed () {
            return allowPropagation;
        },
        trigger,
        ...custom
    };
    return details;
}
function createGenericEventDetails(reason, event, customProperties) {
    const custom = customProperties ?? __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"];
    const details = {
        reason,
        event: event ?? new Event('base-ui'),
        ...custom
    };
    return details;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useValueChanged.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useValueChanged",
    ()=>useValueChanged
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
'use client';
;
;
;
function useValueChanged(value, onChange) {
    const valueRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](value);
    const onChangeCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])(onChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useValueChanged.useIsoLayoutEffect": ()=>{
            if (valueRef.current === value) {
                return;
            }
            onChangeCallback(valueRef.current);
        }
    }["useValueChanged.useIsoLayoutEffect"], [
        value,
        onChangeCallback
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useValueChanged.useIsoLayoutEffect": ()=>{
            valueRef.current = value;
        }
    }["useValueChanged.useIsoLayoutEffect"], [
        value
    ]);
}
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/useId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useId",
    ()=>useId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/safeReact.js [app-client] (ecmascript)");
'use client';
;
;
let globalId = 0;
// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride, prefix = 'mui') {
    const [defaultId, setDefaultId] = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](idOverride);
    const id = idOverride || defaultId;
    __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useGlobalId.useEffect": ()=>{
            if (defaultId == null) {
                // Fallback to this default id when possible.
                // Use the incrementing value for client-side rendering only.
                // We can't use it server-side.
                // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
                globalId += 1;
                setDefaultId(`${prefix}-${globalId}`);
            }
        }
    }["useGlobalId.useEffect"], [
        defaultId,
        prefix
    ]);
    return id;
}
const maybeReactUseId = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$safeReact$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SafeReact"].useId;
function useId(idOverride, prefix) {
    // React.useId() is only available from React 17.0.0.
    if (maybeReactUseId !== undefined) {
        const reactId = maybeReactUseId();
        return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
    }
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
    return useGlobalId(idOverride, prefix);
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseUiId",
    ()=>useBaseUiId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useId.js [app-client] (ecmascript)");
'use client';
;
function useBaseUiId(idOverride) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(idOverride, 'base-ui');
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/utils/clamp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    return Math.max(min, Math.min(val, max));
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/utils/areArraysEqual.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areArraysEqual",
    ()=>areArraysEqual
]);
function areArraysEqual(array1, array2, itemComparer = (a, b)=>a === b) {
    return array1.length === array2.length && array1.every((value, index)=>itemComparer(value, array2[index]));
}
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/detectBrowser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAndroid",
    ()=>isAndroid,
    "isEdge",
    ()=>isEdge,
    "isFirefox",
    ()=>isFirefox,
    "isIOS",
    ()=>isIOS,
    "isJSDOM",
    ()=>isJSDOM,
    "isMac",
    ()=>isMac,
    "isSafari",
    ()=>isSafari,
    "isWebKit",
    ()=>isWebKit
]);
const hasNavigator = typeof navigator !== 'undefined';
const nav = getNavigatorData();
const platform = getPlatform();
const userAgent = getUserAgent();
const isWebKit = typeof CSS === 'undefined' || !CSS.supports ? false : CSS.supports('-webkit-backdrop-filter:none');
const isIOS = // iPads can claim to be MacIntel
nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 ? true : /iP(hone|ad|od)|iOS/.test(nav.platform);
const isFirefox = hasNavigator && /firefox/i.test(userAgent);
const isSafari = hasNavigator && /apple/i.test(navigator.vendor);
const isEdge = hasNavigator && /Edg/i.test(userAgent);
const isAndroid = hasNavigator && /android/i.test(platform) || /android/i.test(userAgent);
const isMac = hasNavigator && platform.toLowerCase().startsWith('mac') && !navigator.maxTouchPoints;
const isJSDOM = userAgent.includes('jsdom/');
// Avoid Chrome DevTools blue warning.
function getNavigatorData() {
    if (!hasNavigator) {
        return {
            platform: '',
            maxTouchPoints: -1
        };
    }
    const uaData = navigator.userAgentData;
    if (uaData?.platform) {
        return {
            platform: uaData.platform,
            maxTouchPoints: navigator.maxTouchPoints
        };
    }
    return {
        platform: navigator.platform ?? '',
        maxTouchPoints: navigator.maxTouchPoints ?? -1
    };
}
function getUserAgent() {
    if (!hasNavigator) {
        return '';
    }
    const uaData = navigator.userAgentData;
    if (uaData && Array.isArray(uaData.brands)) {
        return uaData.brands.map(({ brand, version })=>`${brand}/${version}`).join(' ');
    }
    return navigator.userAgent;
}
function getPlatform() {
    if (!hasNavigator) {
        return '';
    }
    const uaData = navigator.userAgentData;
    if (uaData?.platform) {
        return uaData.platform;
    }
    return navigator.platform ?? '';
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/floating-ui-react/utils/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTIVE_KEY",
    ()=>ACTIVE_KEY,
    "ARROW_DOWN",
    ()=>ARROW_DOWN,
    "ARROW_LEFT",
    ()=>ARROW_LEFT,
    "ARROW_RIGHT",
    ()=>ARROW_RIGHT,
    "ARROW_UP",
    ()=>ARROW_UP,
    "FOCUSABLE_ATTRIBUTE",
    ()=>FOCUSABLE_ATTRIBUTE,
    "SELECTED_KEY",
    ()=>SELECTED_KEY,
    "TYPEABLE_SELECTOR",
    ()=>TYPEABLE_SELECTOR
]);
const FOCUSABLE_ATTRIBUTE = 'data-base-ui-focusable';
const ACTIVE_KEY = 'active';
const SELECTED_KEY = 'selected';
const TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled])," + "[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activeElement",
    ()=>activeElement,
    "contains",
    ()=>contains,
    "getFloatingFocusElement",
    ()=>getFloatingFocusElement,
    "getTarget",
    ()=>getTarget,
    "isEventTargetWithin",
    ()=>isEventTargetWithin,
    "isRootElement",
    ()=>isRootElement,
    "isTargetInsideEnabledTrigger",
    ()=>isTargetInsideEnabledTrigger,
    "isTypeableCombobox",
    ()=>isTypeableCombobox,
    "isTypeableElement",
    ()=>isTypeableElement,
    "matchesFocusVisible",
    ()=>matchesFocusVisible
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$detectBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/detectBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/floating-ui-react/utils/constants.js [app-client] (ecmascript)");
;
;
;
function activeElement(doc) {
    let element = doc.activeElement;
    while(element?.shadowRoot?.activeElement != null){
        element = element.shadowRoot.activeElement;
    }
    return element;
}
function contains(parent, child) {
    if (!parent || !child) {
        return false;
    }
    const rootNode = child.getRootNode?.();
    // First, attempt with faster native method
    if (parent.contains(child)) {
        return true;
    }
    // then fallback to custom implementation with Shadow DOM support
    if (rootNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isShadowRoot"])(rootNode)) {
        let next = child;
        while(next){
            if (parent === next) {
                return true;
            }
            next = next.parentNode || next.host;
        }
    }
    // Give up, the result is false
    return false;
}
function isTargetInsideEnabledTrigger(target, triggerElements) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(target)) {
        return false;
    }
    const targetElement = target;
    if (triggerElements.hasElement(targetElement)) {
        return !targetElement.hasAttribute('data-trigger-disabled');
    }
    for (const [, trigger] of triggerElements.entries()){
        if (contains(trigger, targetElement)) {
            return !trigger.hasAttribute('data-trigger-disabled');
        }
    }
    return false;
}
function getTarget(event) {
    if ('composedPath' in event) {
        return event.composedPath()[0];
    }
    // TS thinks `event` is of type never as it assumes all browsers support
    // `composedPath()`, but browsers without shadow DOM don't.
    return event.target;
}
function isEventTargetWithin(event, node) {
    if (node == null) {
        return false;
    }
    if ('composedPath' in event) {
        return event.composedPath().includes(node);
    }
    // TS thinks `event` is of type never as it assumes all browsers support composedPath, but browsers without shadow dom don't
    const eventAgain = event;
    return eventAgain.target != null && node.contains(eventAgain.target);
}
function isRootElement(element) {
    return element.matches('html,body');
}
function isTypeableElement(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) && element.matches(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TYPEABLE_SELECTOR"]);
}
function isTypeableCombobox(element) {
    if (!element) {
        return false;
    }
    return element.getAttribute('role') === 'combobox' && isTypeableElement(element);
}
function matchesFocusVisible(element) {
    // We don't want to block focus from working with `visibleOnly`
    // (JSDOM doesn't match `:focus-visible` when the element has `:focus`)
    if (!element || __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$detectBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJSDOM"]) {
        return true;
    }
    try {
        return element.matches(':focus-visible');
    } catch (_e) {
        return true;
    }
}
function getFloatingFocusElement(floatingElement) {
    if (!floatingElement) {
        return null;
    }
    // Try to find the element that has `{...getFloatingProps()}` spread on it.
    // This indicates the floating element is acting as a positioning wrapper, and
    // so focus should be managed on the child element with the event handlers and
    // aria props.
    return floatingElement.hasAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOCUSABLE_ATTRIBUTE"]) ? floatingElement : floatingElement.querySelector(`[${__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOCUSABLE_ATTRIBUTE"]}]`) || floatingElement;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/composite/list/CompositeListContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompositeListContext",
    ()=>CompositeListContext,
    "useCompositeListContext",
    ()=>useCompositeListContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const CompositeListContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    register: ()=>{},
    unregister: ()=>{},
    subscribeMapChange: ()=>{
        return ()=>{};
    },
    elementsRef: {
        current: []
    },
    nextIndexRef: {
        current: 0
    }
});
if ("TURBOPACK compile-time truthy", 1) CompositeListContext.displayName = "CompositeListContext";
function useCompositeListContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CompositeListContext);
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/composite/list/CompositeList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompositeList",
    ()=>CompositeList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/composite/list/CompositeListContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
/* eslint-disable no-bitwise */ 'use client';
;
;
;
;
;
;
function CompositeList(props) {
    const { children, elementsRef, labelsRef, onMapChange: onMapChangeProp } = props;
    const onMapChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])(onMapChangeProp);
    const nextIndexRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const listeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])(createListeners).current;
    // We use a stable `map` to avoid O(n^2) re-allocation costs for large lists.
    // `mapTick` is our re-render trigger mechanism. We also need to update the
    // elements and label refs, but there's a lot of async work going on and sometimes
    // the effect that handles `onMapChange` gets called after those refs have been
    // filled, and we don't want to lose those values by setting their lengths to `0`.
    // We also need to have them at the proper length because floating-ui uses that
    // information for list navigation.
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])(createMap).current;
    // `mapTick` uses a counter rather than objects for low precision-loss risk and better memory efficiency
    const [mapTick, setMapTick] = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const lastTickRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](mapTick);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "CompositeList.useStableCallback[register]": (node, metadata)=>{
            map.set(node, metadata ?? null);
            lastTickRef.current += 1;
            setMapTick(lastTickRef.current);
        }
    }["CompositeList.useStableCallback[register]"]);
    const unregister = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "CompositeList.useStableCallback[unregister]": (node)=>{
            map.delete(node);
            lastTickRef.current += 1;
            setMapTick(lastTickRef.current);
        }
    }["CompositeList.useStableCallback[unregister]"]);
    const sortedMap = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "CompositeList.useMemo[sortedMap]": ()=>{
            // `mapTick` is the `useMemo` trigger as `map` is stable.
            disableEslintWarning(mapTick);
            const newMap = new Map();
            // Filter out disconnected elements before sorting to avoid inconsistent
            // compareDocumentPosition results when elements are detached from the DOM.
            const sortedNodes = Array.from(map.keys()).filter({
                "CompositeList.useMemo[sortedMap].sortedNodes": (node)=>node.isConnected
            }["CompositeList.useMemo[sortedMap].sortedNodes"]).sort(sortByDocumentPosition);
            sortedNodes.forEach({
                "CompositeList.useMemo[sortedMap]": (node, index)=>{
                    const metadata = map.get(node) ?? {};
                    newMap.set(node, {
                        ...metadata,
                        index
                    });
                }
            }["CompositeList.useMemo[sortedMap]"]);
            return newMap;
        }
    }["CompositeList.useMemo[sortedMap]"], [
        map,
        mapTick
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "CompositeList.useIsoLayoutEffect": ()=>{
            if (typeof MutationObserver !== 'function' || sortedMap.size === 0) {
                return undefined;
            }
            const mutationObserver = new MutationObserver({
                "CompositeList.useIsoLayoutEffect": (entries)=>{
                    const diff = new Set();
                    const updateDiff = {
                        "CompositeList.useIsoLayoutEffect.updateDiff": (node)=>diff.has(node) ? diff.delete(node) : diff.add(node)
                    }["CompositeList.useIsoLayoutEffect.updateDiff"];
                    entries.forEach({
                        "CompositeList.useIsoLayoutEffect": (entry)=>{
                            entry.removedNodes.forEach(updateDiff);
                            entry.addedNodes.forEach(updateDiff);
                        }
                    }["CompositeList.useIsoLayoutEffect"]);
                    if (diff.size === 0) {
                        lastTickRef.current += 1;
                        setMapTick(lastTickRef.current);
                    }
                }
            }["CompositeList.useIsoLayoutEffect"]);
            sortedMap.forEach({
                "CompositeList.useIsoLayoutEffect": (_, node)=>{
                    if (node.parentElement) {
                        mutationObserver.observe(node.parentElement, {
                            childList: true
                        });
                    }
                }
            }["CompositeList.useIsoLayoutEffect"]);
            return ({
                "CompositeList.useIsoLayoutEffect": ()=>{
                    mutationObserver.disconnect();
                }
            })["CompositeList.useIsoLayoutEffect"];
        }
    }["CompositeList.useIsoLayoutEffect"], [
        sortedMap
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "CompositeList.useIsoLayoutEffect": ()=>{
            const shouldUpdateLengths = lastTickRef.current === mapTick;
            if (shouldUpdateLengths) {
                if (elementsRef.current.length !== sortedMap.size) {
                    elementsRef.current.length = sortedMap.size;
                }
                if (labelsRef && labelsRef.current.length !== sortedMap.size) {
                    labelsRef.current.length = sortedMap.size;
                }
                nextIndexRef.current = sortedMap.size;
            }
            onMapChange(sortedMap);
        }
    }["CompositeList.useIsoLayoutEffect"], [
        onMapChange,
        sortedMap,
        elementsRef,
        labelsRef,
        mapTick
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "CompositeList.useIsoLayoutEffect": ()=>{
            return ({
                "CompositeList.useIsoLayoutEffect": ()=>{
                    elementsRef.current = [];
                }
            })["CompositeList.useIsoLayoutEffect"];
        }
    }["CompositeList.useIsoLayoutEffect"], [
        elementsRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "CompositeList.useIsoLayoutEffect": ()=>{
            return ({
                "CompositeList.useIsoLayoutEffect": ()=>{
                    if (labelsRef) {
                        labelsRef.current = [];
                    }
                }
            })["CompositeList.useIsoLayoutEffect"];
        }
    }["CompositeList.useIsoLayoutEffect"], [
        labelsRef
    ]);
    const subscribeMapChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "CompositeList.useStableCallback[subscribeMapChange]": (fn)=>{
            listeners.add(fn);
            return ({
                "CompositeList.useStableCallback[subscribeMapChange]": ()=>{
                    listeners.delete(fn);
                }
            })["CompositeList.useStableCallback[subscribeMapChange]"];
        }
    }["CompositeList.useStableCallback[subscribeMapChange]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "CompositeList.useIsoLayoutEffect": ()=>{
            listeners.forEach({
                "CompositeList.useIsoLayoutEffect": (l)=>l(sortedMap)
            }["CompositeList.useIsoLayoutEffect"]);
        }
    }["CompositeList.useIsoLayoutEffect"], [
        listeners,
        sortedMap
    ]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "CompositeList.useMemo[contextValue]": ()=>({
                register,
                unregister,
                subscribeMapChange,
                elementsRef,
                labelsRef,
                nextIndexRef
            })
    }["CompositeList.useMemo[contextValue]"], [
        register,
        unregister,
        subscribeMapChange,
        elementsRef,
        labelsRef,
        nextIndexRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompositeListContext"].Provider, {
        value: contextValue,
        children: children
    });
}
function createMap() {
    return new Map();
}
function createListeners() {
    return new Set();
}
function sortByDocumentPosition(a, b) {
    const position = a.compareDocumentPosition(b);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        return -1;
    }
    if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
        return 1;
    }
    return 0;
}
function disableEslintWarning(_) {}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Combines the field's client-side, stateful validity data with the external invalid state to
 * determine the field's true validity.
 */ __turbopack_context__.s([
    "getCombinedFieldValidityData",
    ()=>getCombinedFieldValidityData
]);
function getCombinedFieldValidityData(validityData, invalid) {
    return {
        ...validityData,
        state: {
            ...validityData.state,
            valid: !invalid && validityData.state.valid
        }
    };
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/form/FormContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormContext",
    ()=>FormContext,
    "useFormContext",
    ()=>useFormContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
'use client';
;
;
const FormContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    formRef: {
        current: {
            fields: new Map()
        }
    },
    errors: {},
    clearErrors: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    validationMode: 'onSubmit',
    submitAttemptedRef: {
        current: false
    }
});
if ("TURBOPACK compile-time truthy", 1) FormContext.displayName = "FormContext";
function useFormContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FormContext);
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/field/control/FieldControlDataAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldControlDataAttributes",
    ()=>FieldControlDataAttributes
]);
let FieldControlDataAttributes = /*#__PURE__*/ function(FieldControlDataAttributes) {
    /**
   * Present when the field is disabled.
   */ FieldControlDataAttributes["disabled"] = "data-disabled";
    /**
   * Present when the field is in valid state.
   */ FieldControlDataAttributes["valid"] = "data-valid";
    /**
   * Present when the field is in invalid state.
   */ FieldControlDataAttributes["invalid"] = "data-invalid";
    /**
   * Present when the field has been touched.
   */ FieldControlDataAttributes["touched"] = "data-touched";
    /**
   * Present when the field's value has changed.
   */ FieldControlDataAttributes["dirty"] = "data-dirty";
    /**
   * Present when the field is filled.
   */ FieldControlDataAttributes["filled"] = "data-filled";
    /**
   * Present when the field control is focused.
   */ FieldControlDataAttributes["focused"] = "data-focused";
    return FieldControlDataAttributes;
}({});
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_FIELD_ROOT_STATE",
    ()=>DEFAULT_FIELD_ROOT_STATE,
    "DEFAULT_FIELD_STATE_ATTRIBUTES",
    ()=>DEFAULT_FIELD_STATE_ATTRIBUTES,
    "DEFAULT_VALIDITY_STATE",
    ()=>DEFAULT_VALIDITY_STATE,
    "fieldValidityMapping",
    ()=>fieldValidityMapping
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$control$2f$FieldControlDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/field/control/FieldControlDataAttributes.js [app-client] (ecmascript)");
;
const DEFAULT_VALIDITY_STATE = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: null,
    valueMissing: false
};
const DEFAULT_FIELD_STATE_ATTRIBUTES = {
    valid: null,
    touched: false,
    dirty: false,
    filled: false,
    focused: false
};
const DEFAULT_FIELD_ROOT_STATE = {
    disabled: false,
    ...DEFAULT_FIELD_STATE_ATTRIBUTES
};
const fieldValidityMapping = {
    valid (value) {
        if (value === null) {
            return null;
        }
        if (value) {
            return {
                [__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$control$2f$FieldControlDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldControlDataAttributes"].valid]: ''
            };
        }
        return {
            [__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$control$2f$FieldControlDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldControlDataAttributes"].invalid]: ''
        };
    }
};
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldRootContext",
    ()=>FieldRootContext,
    "useFieldRootContext",
    ()=>useFieldRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const FieldRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    invalid: undefined,
    name: undefined,
    validityData: {
        state: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_VALIDITY_STATE"],
        errors: [],
        error: '',
        value: '',
        initialValue: null
    },
    setValidityData: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    disabled: undefined,
    touched: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FIELD_STATE_ATTRIBUTES"].touched,
    setTouched: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    dirty: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FIELD_STATE_ATTRIBUTES"].dirty,
    setDirty: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    filled: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FIELD_STATE_ATTRIBUTES"].filled,
    setFilled: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    focused: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FIELD_STATE_ATTRIBUTES"].focused,
    setFocused: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    validate: ()=>null,
    validationMode: 'onSubmit',
    validationDebounceTime: 0,
    shouldValidateOnChange: ()=>false,
    state: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FIELD_ROOT_STATE"],
    markedDirtyRef: {
        current: false
    },
    validation: {
        getValidationProps: (props = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"])=>props,
        getInputValidationProps: (props = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"])=>props,
        inputRef: {
            current: null
        },
        commit: async ()=>{}
    }
});
if ("TURBOPACK compile-time truthy", 1) FieldRootContext.displayName = "FieldRootContext";
function useFieldRootContext(optional = true) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FieldRootContext);
    if (context.setValidityData === __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"] && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/field/useField.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useField",
    ()=>useField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/form/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function useField(params) {
    const { enabled = true, value, id, name, controlRef, commit } = params;
    const { formRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { invalid, markedDirtyRef, validityData, setValidityData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])();
    const getValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])(params.getValue);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useField.useIsoLayoutEffect": ()=>{
            if (!enabled) {
                return;
            }
            let initialValue = value;
            if (initialValue === undefined) {
                initialValue = getValue();
            }
            if (validityData.initialValue === null && initialValue !== null) {
                setValidityData({
                    "useField.useIsoLayoutEffect": (prev)=>({
                            ...prev,
                            initialValue
                        })
                }["useField.useIsoLayoutEffect"]);
            }
        }
    }["useField.useIsoLayoutEffect"], [
        enabled,
        setValidityData,
        value,
        validityData.initialValue,
        getValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useField.useIsoLayoutEffect": ()=>{
            if (!enabled || !id) {
                return;
            }
            formRef.current.fields.set(id, {
                getValue,
                name,
                controlRef,
                validityData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$getCombinedFieldValidityData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCombinedFieldValidityData"])(validityData, invalid),
                validate (flushSync = true) {
                    let nextValue = value;
                    if (nextValue === undefined) {
                        nextValue = getValue();
                    }
                    markedDirtyRef.current = true;
                    if (!flushSync) {
                        commit(nextValue);
                    } else {
                        // Synchronously update the validity state so the submit event can be prevented.
                        __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"]({
                            "useField.useIsoLayoutEffect": ()=>commit(nextValue)
                        }["useField.useIsoLayoutEffect"]);
                    }
                }
            });
        }
    }["useField.useIsoLayoutEffect"], [
        commit,
        controlRef,
        enabled,
        formRef,
        getValue,
        id,
        invalid,
        markedDirtyRef,
        name,
        validityData,
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useField.useIsoLayoutEffect": ()=>{
            const fields = formRef.current.fields;
            return ({
                "useField.useIsoLayoutEffect": ()=>{
                    if (id) {
                        fields.delete(id);
                    }
                }
            })["useField.useIsoLayoutEffect"];
        }
    }["useField.useIsoLayoutEffect"], [
        formRef,
        id
    ]);
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LabelableContext",
    ()=>LabelableContext,
    "useLabelableContext",
    ()=>useLabelableContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
'use client';
;
;
const LabelableContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    controlId: undefined,
    registerControlId: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    labelId: undefined,
    setLabelId: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    messageIds: [],
    setMessageIds: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    getDescriptionProps: (externalProps)=>externalProps
});
if ("TURBOPACK compile-time truthy", 1) LabelableContext.displayName = "LabelableContext";
function useLabelableContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](LabelableContext);
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/utils/resolveAriaLabelledBy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultLabelId",
    ()=>getDefaultLabelId,
    "resolveAriaLabelledBy",
    ()=>resolveAriaLabelledBy
]);
'use client';
function getDefaultLabelId(id) {
    return id == null ? undefined : `${id}-label`;
}
function resolveAriaLabelledBy(fieldLabelId, localLabelId) {
    return fieldLabelId ?? localLabelId;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/asc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asc",
    ()=>asc
]);
function asc(a, b) {
    return a - b;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/replaceArrayItemAtIndex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "replaceArrayItemAtIndex",
    ()=>replaceArrayItemAtIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$asc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/asc.js [app-client] (ecmascript)");
;
function replaceArrayItemAtIndex(array, index, newValue) {
    const output = array.slice();
    output[index] = newValue;
    return output.sort(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$asc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asc"]);
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/getSliderValue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSliderValue",
    ()=>getSliderValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/clamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$replaceArrayItemAtIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/replaceArrayItemAtIndex.js [app-client] (ecmascript)");
;
;
function getSliderValue(valueInput, index, min, max, range, values) {
    let newValue = valueInput;
    newValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(newValue, min, max);
    if (range) {
        newValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$replaceArrayItemAtIndex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceArrayItemAtIndex"])(values, index, // Bound the new value to the thumb's neighbours.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity));
    }
    return newValue;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/validateMinimumDistance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateMinimumDistance",
    ()=>validateMinimumDistance
]);
function validateMinimumDistance(values, step, minStepsBetweenValues) {
    if (!Array.isArray(values)) {
        return true;
    }
    const distances = values.reduce((acc, val, index, vals)=>{
        if (index === vals.length - 1) {
            return acc;
        }
        acc.push(Math.abs(val - vals[index + 1]));
        return acc;
    }, []);
    return Math.min(...distances) >= step * minStepsBetweenValues;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/stateAttributesMapping.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sliderStateAttributesMapping",
    ()=>sliderStateAttributesMapping
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/field/utils/constants.js [app-client] (ecmascript)");
;
const sliderStateAttributesMapping = {
    activeThumbIndex: ()=>null,
    max: ()=>null,
    min: ()=>null,
    minStepsBetweenValues: ()=>null,
    step: ()=>null,
    values: ()=>null,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$utils$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldValidityMapping"]
};
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/SliderRootContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SliderRootContext",
    ()=>SliderRootContext,
    "useSliderRootContext",
    ()=>useSliderRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const SliderRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) SliderRootContext.displayName = "SliderRootContext";
function useSliderRootContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](SliderRootContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: SliderRootContext is missing. Slider parts must be placed within <Slider.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cancelOpen",
    ()=>cancelOpen,
    "chipRemovePress",
    ()=>chipRemovePress,
    "clearPress",
    ()=>clearPress,
    "closePress",
    ()=>closePress,
    "closeWatcher",
    ()=>closeWatcher,
    "decrementPress",
    ()=>decrementPress,
    "disabled",
    ()=>disabled,
    "drag",
    ()=>drag,
    "escapeKey",
    ()=>escapeKey,
    "focusOut",
    ()=>focusOut,
    "imperativeAction",
    ()=>imperativeAction,
    "incrementPress",
    ()=>incrementPress,
    "inputBlur",
    ()=>inputBlur,
    "inputChange",
    ()=>inputChange,
    "inputClear",
    ()=>inputClear,
    "inputPaste",
    ()=>inputPaste,
    "inputPress",
    ()=>inputPress,
    "itemPress",
    ()=>itemPress,
    "keyboard",
    ()=>keyboard,
    "linkPress",
    ()=>linkPress,
    "listNavigation",
    ()=>listNavigation,
    "none",
    ()=>none,
    "outsidePress",
    ()=>outsidePress,
    "pointer",
    ()=>pointer,
    "scrub",
    ()=>scrub,
    "siblingOpen",
    ()=>siblingOpen,
    "swipe",
    ()=>swipe,
    "trackPress",
    ()=>trackPress,
    "triggerFocus",
    ()=>triggerFocus,
    "triggerHover",
    ()=>triggerHover,
    "triggerPress",
    ()=>triggerPress,
    "wheel",
    ()=>wheel,
    "windowResize",
    ()=>windowResize
]);
const none = 'none';
const triggerPress = 'trigger-press';
const triggerHover = 'trigger-hover';
const triggerFocus = 'trigger-focus';
const outsidePress = 'outside-press';
const itemPress = 'item-press';
const closePress = 'close-press';
const linkPress = 'link-press';
const clearPress = 'clear-press';
const chipRemovePress = 'chip-remove-press';
const trackPress = 'track-press';
const incrementPress = 'increment-press';
const decrementPress = 'decrement-press';
const inputChange = 'input-change';
const inputClear = 'input-clear';
const inputBlur = 'input-blur';
const inputPaste = 'input-paste';
const inputPress = 'input-press';
const focusOut = 'focus-out';
const escapeKey = 'escape-key';
const closeWatcher = 'close-watcher';
const listNavigation = 'list-navigation';
const keyboard = 'keyboard';
const pointer = 'pointer';
const drag = 'drag';
const wheel = 'wheel';
const scrub = 'scrub';
const cancelOpen = 'cancel-open';
const siblingOpen = 'sibling-open';
const disabled = 'disabled';
const imperativeAction = 'imperative-action';
const swipe = 'swipe';
const windowResize = 'window-resize';
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REASONS",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript)");
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/SliderRoot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SliderRoot",
    ()=>SliderRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/owner.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useControlled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useValueAsRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$warn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/warn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useValueChanged$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useValueChanged.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/clamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$areArraysEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/areArraysEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/composite/list/CompositeList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$useField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/field/useField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/form/FormContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveAriaLabelledBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/resolveAriaLabelledBy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$asc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/asc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$getSliderValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/getSliderValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$validateMinimumDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/validateMinimumDistance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/stateAttributesMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$SliderRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/SliderRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function getSliderChangeEventReason(event) {
    return 'key' in event ? __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].keyboard : __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].inputChange;
}
function areValuesEqual(newValue, oldValue) {
    if (typeof newValue === 'number' && typeof oldValue === 'number') {
        return newValue === oldValue;
    }
    if (Array.isArray(newValue) && Array.isArray(oldValue)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$areArraysEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areArraysEqual"])(newValue, oldValue);
    }
    return false;
}
const SliderRoot = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SliderRoot(componentProps, forwardedRef) {
    const { 'aria-labelledby': ariaLabelledByProp, className, defaultValue, disabled: disabledProp = false, id: idProp, format, largeStep = 10, locale, render, max = 100, min = 0, minStepsBetweenValues = 0, name: nameProp, onValueChange: onValueChangeProp, onValueCommitted: onValueCommittedProp, orientation = 'horizontal', step = 1, thumbCollisionBehavior = 'push', thumbAlignment = 'center', value: valueProp, ...elementProps } = componentProps;
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    const defaultLabelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveAriaLabelledBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultLabelId"])(id);
    const onValueChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])(onValueChangeProp);
    const onValueCommitted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])(onValueCommittedProp);
    const { clearErrors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$form$2f$FormContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const { state: fieldState, disabled: fieldDisabled, name: fieldName, setTouched, setDirty, validityData, shouldValidateOnChange, validation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])();
    const { labelId: fieldLabelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const [labelId, setLabelId] = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const ariaLabelledby = ariaLabelledByProp ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$resolveAriaLabelledBy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveAriaLabelledBy"])(fieldLabelId, labelId);
    const disabled = fieldDisabled || disabledProp;
    const name = fieldName ?? nameProp;
    // The internal value is potentially unsorted, e.g. to support frozen arrays
    // https://github.com/mui/material-ui/pull/28472
    const [valueUnwrapped, setValueUnwrapped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useControlled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlled"])({
        controlled: valueProp,
        default: defaultValue ?? min,
        name: 'Slider'
    });
    const sliderRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const controlRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const thumbRefs = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([]);
    // The input element nested in the pressed thumb.
    const pressedInputRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // The px distance between the pointer and the center of a pressed thumb.
    const pressedThumbCenterOffsetRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // The index of the pressed thumb, or the closest thumb if the `Control` was pressed.
    // This is updated on pointerdown, which is sooner than the `active/activeIndex`
    // state which is updated later when the nested `input` receives focus.
    const pressedThumbIndexRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](-1);
    // The values when the current drag interaction started.
    const pressedValuesRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const lastChangedValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const lastChangeReasonRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]('none');
    const formatOptionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueAsRef"])(format);
    // We can't use the :active browser pseudo-classes.
    // - The active state isn't triggered when clicking on the rail.
    // - The active state isn't transferred when inversing a range slider.
    const [active, setActiveState] = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](-1);
    const [lastUsedThumbIndex, setLastUsedThumbIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](-1);
    const [dragging, setDragging] = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [thumbMap, setThumbMap] = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "SliderRoot.SliderRoot.useState": ()=>new Map()
    }["SliderRoot.SliderRoot.useState"]);
    const [indicatorPosition, setIndicatorPosition] = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([
        undefined,
        undefined
    ]);
    const setActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SliderRoot.SliderRoot.useStableCallback[setActive]": (value)=>{
            setActiveState(value);
            if (value !== -1) {
                setLastUsedThumbIndex(value);
            }
        }
    }["SliderRoot.SliderRoot.useStableCallback[setActive]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$useField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useField"])({
        id,
        commit: validation.commit,
        value: valueUnwrapped,
        controlRef,
        name,
        getValue: {
            "SliderRoot.SliderRoot.useField": ()=>valueUnwrapped
        }["SliderRoot.SliderRoot.useField"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useValueChanged$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueChanged"])(valueUnwrapped, {
        "SliderRoot.SliderRoot.useValueChanged": ()=>{
            clearErrors(name);
            if (shouldValidateOnChange()) {
                validation.commit(valueUnwrapped);
            } else {
                validation.commit(valueUnwrapped, true);
            }
            const initialValue = validityData.initialValue;
            let isDirty;
            if (Array.isArray(valueUnwrapped) && Array.isArray(initialValue)) {
                isDirty = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$areArraysEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areArraysEqual"])(valueUnwrapped, initialValue);
            } else {
                isDirty = valueUnwrapped !== initialValue;
            }
            setDirty(isDirty);
        }
    }["SliderRoot.SliderRoot.useValueChanged"]);
    const registerFieldControlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SliderRoot.SliderRoot.useStableCallback[registerFieldControlRef]": (element)=>{
            if (element) {
                controlRef.current = element;
            }
        }
    }["SliderRoot.SliderRoot.useStableCallback[registerFieldControlRef]"]);
    const range = Array.isArray(valueUnwrapped);
    const values = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SliderRoot.SliderRoot.useMemo[values]": ()=>{
            if (!range) {
                return [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(valueUnwrapped, min, max)
                ];
            }
            return valueUnwrapped.slice().sort(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$asc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asc"]);
        }
    }["SliderRoot.SliderRoot.useMemo[values]"], [
        max,
        min,
        range,
        valueUnwrapped
    ]);
    const setValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SliderRoot.SliderRoot.useStableCallback[setValue]": (newValue, details)=>{
            if (Number.isNaN(newValue) || areValuesEqual(newValue, valueUnwrapped)) {
                return;
            }
            const changeDetails = details ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].none, undefined, undefined, {
                activeThumbIndex: -1
            });
            lastChangeReasonRef.current = changeDetails.reason;
            // Redefine target to allow name and value to be read.
            // This allows seamless integration with the most popular form libraries.
            // https://github.com/mui/material-ui/issues/13485#issuecomment-676048492
            // Clone the event to not override `target` of the original event.
            const nativeEvent = changeDetails.event;
            const EventConstructor = nativeEvent.constructor ?? Event;
            const clonedEvent = new EventConstructor(nativeEvent.type, nativeEvent);
            Object.defineProperty(clonedEvent, 'target', {
                writable: true,
                value: {
                    value: newValue,
                    name
                }
            });
            changeDetails.event = clonedEvent;
            lastChangedValueRef.current = newValue;
            onValueChange(newValue, changeDetails);
            if (changeDetails.isCanceled) {
                return;
            }
            setValueUnwrapped(newValue);
        }
    }["SliderRoot.SliderRoot.useStableCallback[setValue]"]);
    const handleInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SliderRoot.SliderRoot.useStableCallback[handleInputChange]": (valueInput, index, event)=>{
            const newValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$getSliderValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSliderValue"])(valueInput, index, min, max, range, values);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$validateMinimumDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateMinimumDistance"])(newValue, step, minStepsBetweenValues)) {
                const reason = getSliderChangeEventReason(event);
                setValue(newValue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(reason, event.nativeEvent, undefined, {
                    activeThumbIndex: index
                }));
                setTouched(true);
                const nextValue = lastChangedValueRef.current ?? newValue;
                onValueCommitted(nextValue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGenericEventDetails"])(reason, event.nativeEvent));
            }
        }
    }["SliderRoot.SliderRoot.useStableCallback[handleInputChange]"]);
    if ("TURBOPACK compile-time truthy", 1) {
        if (min >= max) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$warn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])('Slider `max` must be greater than `min`.');
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "SliderRoot.SliderRoot.useIsoLayoutEffect": ()=>{
            const activeEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(sliderRef.current));
            if (disabled && activeEl && sliderRef.current?.contains(activeEl)) {
                // This is necessary because Firefox and Safari will keep focus
                // on a disabled element:
                // https://codesandbox.io/p/sandbox/mui-pr-22247-forked-h151h?file=/src/App.js
                activeEl.blur();
            }
        }
    }["SliderRoot.SliderRoot.useIsoLayoutEffect"], [
        disabled
    ]);
    if (disabled && active !== -1) {
        setActive(-1);
    }
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SliderRoot.SliderRoot.useMemo[state]": ()=>({
                ...fieldState,
                activeThumbIndex: active,
                disabled,
                dragging,
                orientation,
                max,
                min,
                minStepsBetweenValues,
                step,
                values
            })
    }["SliderRoot.SliderRoot.useMemo[state]"], [
        fieldState,
        active,
        disabled,
        dragging,
        max,
        min,
        minStepsBetweenValues,
        orientation,
        step,
        values
    ]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SliderRoot.SliderRoot.useMemo[contextValue]": ()=>({
                active,
                controlRef,
                disabled,
                dragging,
                validation,
                formatOptionsRef,
                handleInputChange,
                indicatorPosition,
                inset: thumbAlignment !== 'center',
                labelId: ariaLabelledby,
                rootLabelId: defaultLabelId,
                largeStep,
                lastUsedThumbIndex,
                lastChangedValueRef,
                lastChangeReasonRef,
                locale,
                max,
                min,
                minStepsBetweenValues,
                name,
                onValueCommitted,
                orientation,
                pressedInputRef,
                pressedThumbCenterOffsetRef,
                pressedThumbIndexRef,
                pressedValuesRef,
                registerFieldControlRef,
                renderBeforeHydration: thumbAlignment === 'edge',
                setActive,
                setDragging,
                setIndicatorPosition,
                setLabelId,
                setValue,
                state,
                step,
                thumbCollisionBehavior,
                thumbMap,
                thumbRefs,
                values
            })
    }["SliderRoot.SliderRoot.useMemo[contextValue]"], [
        active,
        controlRef,
        ariaLabelledby,
        defaultLabelId,
        disabled,
        dragging,
        validation,
        formatOptionsRef,
        handleInputChange,
        indicatorPosition,
        largeStep,
        lastUsedThumbIndex,
        lastChangedValueRef,
        lastChangeReasonRef,
        locale,
        max,
        min,
        minStepsBetweenValues,
        name,
        onValueCommitted,
        orientation,
        pressedInputRef,
        pressedThumbCenterOffsetRef,
        pressedThumbIndexRef,
        pressedValuesRef,
        registerFieldControlRef,
        setActive,
        setDragging,
        setIndicatorPosition,
        setLabelId,
        setValue,
        state,
        step,
        thumbCollisionBehavior,
        thumbAlignment,
        thumbMap,
        thumbRefs,
        values
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: [
            forwardedRef,
            sliderRef
        ],
        props: [
            {
                'aria-labelledby': ariaLabelledby,
                id,
                role: 'group'
            },
            validation.getValidationProps,
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliderStateAttributesMapping"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$SliderRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliderRootContext"].Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompositeList"], {
            elementsRef: thumbRefs,
            onMapChange: setThumbMap,
            children: element
        })
    });
});
if ("TURBOPACK compile-time truthy", 1) SliderRoot.displayName = "SliderRoot";
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useRegisteredLabelId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRegisteredLabelId",
    ()=>useRegisteredLabelId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
'use client';
;
;
function useRegisteredLabelId(idProp, setLabelId) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useRegisteredLabelId.useIsoLayoutEffect": ()=>{
            setLabelId(id);
            return ({
                "useRegisteredLabelId.useIsoLayoutEffect": ()=>{
                    setLabelId(undefined);
                }
            })["useRegisteredLabelId.useIsoLayoutEffect"];
        }
    }["useRegisteredLabelId.useIsoLayoutEffect"], [
        id,
        setLabelId
    ]);
    return id;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/labelable-provider/useLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "focusElementWithVisible",
    ()=>focusElementWithVisible,
    "useLabel",
    ()=>useLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/owner.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRegisteredLabelId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useRegisteredLabelId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function useLabel(params = {}) {
    const { id: idProp, fallbackControlId, native = false, setLabelId: setLabelIdProp, focusControl: focusControlProp } = params;
    const { controlId: contextControlId, setLabelId: setContextLabelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const syncLabelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useLabel.useStableCallback[syncLabelId]": (nextLabelId)=>{
            setContextLabelId(nextLabelId);
            setLabelIdProp?.(nextLabelId);
        }
    }["useLabel.useStableCallback[syncLabelId]"]);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRegisteredLabelId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRegisteredLabelId"])(idProp, syncLabelId);
    const resolvedControlId = contextControlId ?? fallbackControlId;
    function focusControl(event) {
        if (focusControlProp) {
            focusControlProp(event, resolvedControlId);
            return;
        }
        if (!resolvedControlId) {
            return;
        }
        const controlElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(event.currentTarget).getElementById(resolvedControlId);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(controlElement)) {
            focusElementWithVisible(controlElement);
        }
    }
    function handleInteraction(event) {
        const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTarget"])(event.nativeEvent);
        if (target?.closest('button,input,select,textarea')) {
            return;
        }
        // Prevent text selection when double clicking label.
        if (!event.defaultPrevented && event.detail > 1) {
            event.preventDefault();
        }
        if (native) {
            return;
        }
        focusControl(event);
    }
    return native ? {
        id,
        htmlFor: resolvedControlId ?? undefined,
        onMouseDown: handleInteraction
    } : {
        id,
        onClick: handleInteraction,
        onPointerDown (event) {
            event.preventDefault();
        }
    };
}
function focusElementWithVisible(element) {
    element.focus({
        // Available from Chrome 144+ (January 2026).
        // Safari and Firefox already support it.
        // @ts-expect-error not available in types yet
        focusVisible: true
    });
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/label/SliderLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SliderLabel",
    ()=>SliderLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/owner.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/labelable-provider/useLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$SliderRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/SliderRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/stateAttributesMapping.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const SliderLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SliderLabel(componentProps, forwardedRef) {
    const { render, className, ...elementProps } = componentProps;
    // Keep label id derived from the root and ignore runtime `id` overrides from untyped consumers.
    const elementPropsWithoutId = elementProps;
    delete elementPropsWithoutId.id;
    const { state, setLabelId, controlRef, rootLabelId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$SliderRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSliderRootContext"])();
    function focusControl(event, controlId) {
        if (controlId) {
            const controlElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(event.currentTarget).getElementById(controlId);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(controlElement)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusElementWithVisible"])(controlElement);
                return;
            }
        }
        const fallbackInputs = controlRef.current?.querySelectorAll('input[type="range"]');
        const fallbackInput = fallbackInputs?.length === 1 ? fallbackInputs[0] : null;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(fallbackInput)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusElementWithVisible"])(fallbackInput);
        }
    }
    const labelProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabel"])({
        id: rootLabelId,
        setLabelId,
        focusControl
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        state,
        props: [
            labelProps,
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliderStateAttributesMapping"]
    });
});
if ("TURBOPACK compile-time truthy", 1) SliderLabel.displayName = "SliderLabel";
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/utils/formatNumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cache",
    ()=>cache,
    "formatNumber",
    ()=>formatNumber,
    "formatNumberMaxPrecision",
    ()=>formatNumberMaxPrecision,
    "formatNumberValue",
    ()=>formatNumberValue,
    "getFormatter",
    ()=>getFormatter
]);
const cache = new Map();
function getFormatter(locale, options) {
    const optionsString = JSON.stringify({
        locale,
        options
    });
    const cachedFormatter = cache.get(optionsString);
    if (cachedFormatter) {
        return cachedFormatter;
    }
    const formatter = new Intl.NumberFormat(locale, options);
    cache.set(optionsString, formatter);
    return formatter;
}
function formatNumber(value, locale, options) {
    if (value == null) {
        return '';
    }
    return getFormatter(locale, options).format(value);
}
function formatNumberMaxPrecision(value, locale, options) {
    return formatNumber(value, locale, {
        ...options,
        maximumFractionDigits: 20
    });
}
function formatNumberValue(value, locale, format) {
    if (value == null) {
        return '';
    }
    if (!format) {
        return formatNumber(value / 100, locale, {
            style: 'percent'
        });
    }
    return formatNumber(value, locale, format);
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/value/SliderValue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SliderValue",
    ()=>SliderValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$formatNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/formatNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$SliderRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/SliderRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/stateAttributesMapping.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const SliderValue = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SliderValue(componentProps, forwardedRef) {
    const { 'aria-live': ariaLive = 'off', render, className, children, ...elementProps } = componentProps;
    const { thumbMap, state, values, formatOptionsRef, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$SliderRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSliderRootContext"])();
    const outputFor = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SliderValue.SliderValue.useMemo[outputFor]": ()=>{
            let htmlFor = '';
            for (const thumbMetadata of thumbMap.values()){
                if (thumbMetadata?.inputId) {
                    htmlFor += `${thumbMetadata.inputId} `;
                }
            }
            return htmlFor.trim() === '' ? undefined : htmlFor.trim();
        }
    }["SliderValue.SliderValue.useMemo[outputFor]"], [
        thumbMap
    ]);
    const formattedValues = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SliderValue.SliderValue.useMemo[formattedValues]": ()=>{
            const arr = [];
            for(let i = 0; i < values.length; i += 1){
                arr.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$formatNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(values[i], locale, formatOptionsRef.current ?? undefined));
            }
            return arr;
        }
    }["SliderValue.SliderValue.useMemo[formattedValues]"], [
        formatOptionsRef,
        locale,
        values
    ]);
    const defaultDisplayValue = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SliderValue.SliderValue.useMemo[defaultDisplayValue]": ()=>{
            const arr = [];
            for(let i = 0; i < values.length; i += 1){
                arr.push(formattedValues[i] || values[i]);
            }
            return arr.join(' – ');
        }
    }["SliderValue.SliderValue.useMemo[defaultDisplayValue]"], [
        values,
        formattedValues
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('output', componentProps, {
        state,
        ref: forwardedRef,
        props: [
            {
                // off by default because it will keep announcing when the slider is being dragged
                // and also when the value is changing (but not yet committed)
                'aria-live': ariaLive,
                children: typeof children === 'function' ? children(formattedValues, values) : defaultDisplayValue,
                htmlFor: outputFor
            },
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliderStateAttributesMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SliderValue.displayName = "SliderValue";
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/useOnMount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOnMount",
    ()=>useOnMount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const EMPTY = [];
function useOnMount(fn) {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
    /* eslint-disable react-hooks/exhaustive-deps */ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](fn, EMPTY);
/* eslint-enable react-hooks/exhaustive-deps */ }
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/useAnimationFrame.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimationFrame",
    ()=>AnimationFrame,
    "useAnimationFrame",
    ()=>useAnimationFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnMount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useOnMount.js [app-client] (ecmascript)");
'use client';
;
;
/** Unlike `setTimeout`, rAF doesn't guarantee a positive integer return value, so we can't have
 * a monomorphic `uint` type with `0` meaning empty.
 * See warning note at:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame#return_value */ const EMPTY = null;
let LAST_RAF = globalThis.requestAnimationFrame;
class Scheduler {
    /* This implementation uses an array as a backing data-structure for frame callbacks.
   * It allows `O(1)` callback cancelling by inserting a `null` in the array, though it
   * never calls the native `cancelAnimationFrame` if there are no frames left. This can
   * be much more efficient if there is a call pattern that alterns as
   * "request-cancel-request-cancel-…".
   * But in the case of "request-request-…-cancel-cancel-…", it leaves the final animation
   * frame to run anyway. We turn that frame into a `O(1)` no-op via `callbacksCount`. */ callbacks = [];
    callbacksCount = 0;
    nextId = 1;
    startId = 1;
    isScheduled = false;
    tick = (timestamp)=>{
        this.isScheduled = false;
        const currentCallbacks = this.callbacks;
        const currentCallbacksCount = this.callbacksCount;
        // Update these before iterating, callbacks could call `requestAnimationFrame` again.
        this.callbacks = [];
        this.callbacksCount = 0;
        this.startId = this.nextId;
        if (currentCallbacksCount > 0) {
            for(let i = 0; i < currentCallbacks.length; i += 1){
                currentCallbacks[i]?.(timestamp);
            }
        }
    };
    request(fn) {
        const id = this.nextId;
        this.nextId += 1;
        this.callbacks.push(fn);
        this.callbacksCount += 1;
        /* In a test environment with fake timers, a fake `requestAnimationFrame` can be called
     * but there's no guarantee that the animation frame will actually run before the fake
     * timers are teared, which leaves `isScheduled` set, but won't run our `tick()`. */ const didRAFChange = ("TURBOPACK compile-time value", "development") !== 'production' && LAST_RAF !== requestAnimationFrame && (LAST_RAF = requestAnimationFrame, true);
        if (!this.isScheduled || didRAFChange) {
            requestAnimationFrame(this.tick);
            this.isScheduled = true;
        }
        return id;
    }
    cancel(id) {
        const index = id - this.startId;
        if (index < 0 || index >= this.callbacks.length) {
            return;
        }
        this.callbacks[index] = null;
        this.callbacksCount -= 1;
    }
}
const scheduler = new Scheduler();
class AnimationFrame {
    static create() {
        return new AnimationFrame();
    }
    static request(fn) {
        return scheduler.request(fn);
    }
    static cancel(id) {
        return scheduler.cancel(id);
    }
    currentId = EMPTY;
    /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */ request(fn) {
        this.cancel();
        this.currentId = scheduler.request(()=>{
            this.currentId = EMPTY;
            fn();
        });
    }
    cancel = ()=>{
        if (this.currentId !== EMPTY) {
            scheduler.cancel(this.currentId);
            this.currentId = EMPTY;
        }
    };
    disposeEffect = ()=>{
        return this.cancel;
    };
}
function useAnimationFrame() {
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])(AnimationFrame.create).current;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnMount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnMount"])(timeout.disposeEffect);
    return timeout;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/direction-provider/DirectionContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DirectionContext",
    ()=>DirectionContext,
    "useDirection",
    ()=>useDirection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const DirectionContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) DirectionContext.displayName = "DirectionContext";
function useDirection() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DirectionContext);
    return context?.direction ?? 'ltr';
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/getMidpoint.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMidpoint",
    ()=>getMidpoint
]);
function getMidpoint(element) {
    const rect = element.getBoundingClientRect();
    return {
        x: (rect.left + rect.right) / 2,
        y: (rect.top + rect.bottom) / 2
    };
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/roundValueToStep.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "roundValueToStep",
    ()=>roundValueToStep
]);
function getDecimalPrecision(num) {
    // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
    // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
    if (Math.abs(num) < 1) {
        const parts = num.toExponential().split('e-');
        const matissaDecimalPart = parts[0].split('.')[1];
        return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
    }
    const decimalPart = num.toString().split('.')[1];
    return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min) {
    const nearest = Math.round((value - min) / step) * step + min;
    return Number(nearest.toFixed(getDecimalPrecision(step)));
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/getPushedThumbValues.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPushedThumbValues",
    ()=>getPushedThumbValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/clamp.js [app-client] (ecmascript)");
;
function getPushedThumbValues({ values, index, nextValue, min, max, step, minStepsBetweenValues, initialValues }) {
    if (values.length === 0) {
        return [];
    }
    const nextValues = values.slice();
    const minValueDifference = step * minStepsBetweenValues;
    const lastIndex = nextValues.length - 1;
    const baseInitialValues = initialValues ?? values;
    const indexMin = min + index * minValueDifference;
    const indexMax = max - (lastIndex - index) * minValueDifference;
    nextValues[index] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(nextValue, indexMin, indexMax);
    for(let i = index + 1; i <= lastIndex; i += 1){
        const minAllowed = nextValues[i - 1] + minValueDifference;
        const maxAllowed = max - (lastIndex - i) * minValueDifference;
        const initialValue = baseInitialValues[i] ?? nextValues[i];
        let candidate = Math.max(nextValues[i], minAllowed);
        if (initialValue < candidate) {
            candidate = Math.max(initialValue, minAllowed);
        }
        nextValues[i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(candidate, minAllowed, maxAllowed);
    }
    for(let i = index - 1; i >= 0; i -= 1){
        const maxAllowed = nextValues[i + 1] - minValueDifference;
        const minAllowed = min + i * minValueDifference;
        const initialValue = baseInitialValues[i] ?? nextValues[i];
        let candidate = Math.min(nextValues[i], maxAllowed);
        if (initialValue > candidate) {
            candidate = Math.min(initialValue, maxAllowed);
        }
        nextValues[i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(candidate, minAllowed, maxAllowed);
    }
    for(let i = 0; i <= lastIndex; i += 1){
        nextValues[i] = Number(nextValues[i].toFixed(12));
    }
    return nextValues;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/resolveThumbCollision.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveThumbCollision",
    ()=>resolveThumbCollision
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/clamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$getPushedThumbValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/getPushedThumbValues.js [app-client] (ecmascript)");
;
;
function resolveThumbCollision({ behavior, values, currentValues, initialValues, pressedIndex, nextValue, min, max, step, minStepsBetweenValues }) {
    const activeValues = currentValues ?? values;
    const baselineValues = initialValues ?? values;
    const range = activeValues.length > 1;
    if (!range) {
        return {
            value: nextValue,
            thumbIndex: 0,
            didSwap: false
        };
    }
    const minValueDifference = step * minStepsBetweenValues;
    switch(behavior){
        case 'swap':
            {
                const pressedInitialValue = activeValues[pressedIndex];
                const epsilon = 1e-7;
                const candidateValues = activeValues.slice();
                const previousNeighbor = candidateValues[pressedIndex - 1];
                const nextNeighbor = candidateValues[pressedIndex + 1];
                const lowerBound = previousNeighbor != null ? previousNeighbor + minValueDifference : min;
                const upperBound = nextNeighbor != null ? nextNeighbor - minValueDifference : max;
                const constrainedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(nextValue, lowerBound, upperBound);
                const pressedValueAfterClamp = Number(constrainedValue.toFixed(12));
                candidateValues[pressedIndex] = pressedValueAfterClamp;
                const movingForward = nextValue > pressedInitialValue;
                const movingBackward = nextValue < pressedInitialValue;
                const shouldSwapForward = movingForward && nextNeighbor != null && nextValue >= nextNeighbor - epsilon;
                const shouldSwapBackward = movingBackward && previousNeighbor != null && nextValue <= previousNeighbor + epsilon;
                if (!shouldSwapForward && !shouldSwapBackward) {
                    return {
                        value: candidateValues,
                        thumbIndex: pressedIndex,
                        didSwap: false
                    };
                }
                const targetIndex = shouldSwapForward ? pressedIndex + 1 : pressedIndex - 1;
                const initialValuesForPush = candidateValues.map((_, index)=>{
                    if (index === pressedIndex) {
                        return pressedValueAfterClamp;
                    }
                    const baseline = baselineValues[index];
                    if (baseline != null) {
                        return baseline;
                    }
                    return activeValues[index];
                });
                let nextValueForTarget = nextValue;
                if (shouldSwapForward) {
                    nextValueForTarget = Math.max(nextValue, candidateValues[targetIndex]);
                } else {
                    nextValueForTarget = Math.min(nextValue, candidateValues[targetIndex]);
                }
                const adjustedValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$getPushedThumbValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPushedThumbValues"])({
                    values: candidateValues,
                    index: targetIndex,
                    nextValue: nextValueForTarget,
                    min,
                    max,
                    step,
                    minStepsBetweenValues,
                    initialValues: initialValuesForPush
                });
                const neighborIndex = shouldSwapForward ? targetIndex - 1 : targetIndex + 1;
                if (neighborIndex >= 0 && neighborIndex < adjustedValues.length) {
                    const previousValue = adjustedValues[neighborIndex - 1];
                    const nextValueAfter = adjustedValues[neighborIndex + 1];
                    let neighborLowerBound = previousValue != null ? previousValue + minValueDifference : min;
                    neighborLowerBound = Math.max(neighborLowerBound, min + neighborIndex * minValueDifference);
                    let neighborUpperBound = nextValueAfter != null ? nextValueAfter - minValueDifference : max;
                    neighborUpperBound = Math.min(neighborUpperBound, max - (adjustedValues.length - 1 - neighborIndex) * minValueDifference);
                    const restoredValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(pressedValueAfterClamp, neighborLowerBound, neighborUpperBound);
                    adjustedValues[neighborIndex] = Number(restoredValue.toFixed(12));
                }
                return {
                    value: adjustedValues,
                    thumbIndex: targetIndex,
                    didSwap: true
                };
            }
        case 'push':
            {
                const nextValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$getPushedThumbValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPushedThumbValues"])({
                    values: activeValues,
                    index: pressedIndex,
                    nextValue,
                    min,
                    max,
                    step,
                    minStepsBetweenValues
                });
                return {
                    value: nextValues,
                    thumbIndex: pressedIndex,
                    didSwap: false
                };
            }
        case 'none':
        default:
            {
                const candidateValues = activeValues.slice();
                const previousNeighbor = candidateValues[pressedIndex - 1];
                const nextNeighbor = candidateValues[pressedIndex + 1];
                const lowerBound = previousNeighbor != null ? previousNeighbor + minValueDifference : min;
                const upperBound = nextNeighbor != null ? nextNeighbor - minValueDifference : max;
                const constrainedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(nextValue, lowerBound, upperBound);
                candidateValues[pressedIndex] = Number(constrainedValue.toFixed(12));
                return {
                    value: candidateValues,
                    thumbIndex: pressedIndex,
                    didSwap: false
                };
            }
    }
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/control/SliderControl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SliderControl",
    ()=>SliderControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/owner.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useAnimationFrame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useAnimationFrame.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useValueAsRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/clamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/createBaseUIEventDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/reason-parts.js [app-client] (ecmascript) <export * as REASONS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$direction$2d$provider$2f$DirectionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/direction-provider/DirectionContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$SliderRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/SliderRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/stateAttributesMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$getMidpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/getMidpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$roundValueToStep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/roundValueToStep.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$validateMinimumDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/validateMinimumDistance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$resolveThumbCollision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/resolveThumbCollision.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
function getControlOffset(styles, vertical) {
    if (!styles) {
        return {
            start: 0,
            end: 0
        };
    }
    function parseSize(value) {
        const parsed = value != null ? parseFloat(value) : 0;
        return Number.isNaN(parsed) ? 0 : parsed;
    }
    const start = !vertical ? 'InlineStart' : 'Top';
    const end = !vertical ? 'InlineEnd' : 'Bottom';
    return {
        start: parseSize(styles[`border${start}Width`]) + parseSize(styles[`padding${start}`]),
        end: parseSize(styles[`border${end}Width`]) + parseSize(styles[`padding${end}`])
    };
}
function getFingerCoords(event, touchIdRef) {
    // The event is TouchEvent
    if (touchIdRef.current != null && event.changedTouches) {
        const touchEvent = event;
        for(let i = 0; i < touchEvent.changedTouches.length; i += 1){
            const touch = touchEvent.changedTouches[i];
            if (touch.identifier === touchIdRef.current) {
                return {
                    x: touch.clientX,
                    y: touch.clientY
                };
            }
        }
        return null;
    }
    // The event is PointerEvent
    return {
        x: event.clientX,
        y: event.clientY
    };
}
const SliderControl = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SliderControl(componentProps, forwardedRef) {
    const { render: renderProp, className, ...elementProps } = componentProps;
    const { disabled, dragging, inset, lastChangedValueRef, lastChangeReasonRef, max, min, minStepsBetweenValues, onValueCommitted, orientation, pressedInputRef, pressedThumbCenterOffsetRef, pressedThumbIndexRef, pressedValuesRef, registerFieldControlRef, renderBeforeHydration, setActive, setDragging, setValue, state, step, thumbCollisionBehavior, thumbRefs, values } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$SliderRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSliderRootContext"])();
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$direction$2d$provider$2f$DirectionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"])();
    const range = values.length > 1;
    const vertical = orientation === 'vertical';
    const controlRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const stylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const setStylesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SliderControl.SliderControl.useStableCallback[setStylesRef]": (element)=>{
            if (element && stylesRef.current == null) {
                if (stylesRef.current == null) {
                    stylesRef.current = getComputedStyle(element);
                }
            }
        }
    }["SliderControl.SliderControl.useStableCallback[setStylesRef]"]);
    // A number that uniquely identifies the current finger in the touch session.
    const touchIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    // The number of touch/pointermove events that have fired.
    const moveCountRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    // The offset amount to each side of the control for inset sliders.
    // This value should be equal to the radius or half the width/height of the thumb.
    const insetThumbOffsetRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const latestValuesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useValueAsRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueAsRef"])(values);
    const updatePressedThumb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SliderControl.SliderControl.useStableCallback[updatePressedThumb]": (nextIndex)=>{
            if (pressedThumbIndexRef.current !== nextIndex) {
                pressedThumbIndexRef.current = nextIndex;
            }
            const thumbElement = thumbRefs.current[nextIndex];
            if (!thumbElement) {
                pressedThumbCenterOffsetRef.current = null;
                pressedInputRef.current = null;
                return;
            }
            pressedInputRef.current = thumbElement.querySelector('input[type="range"]');
        }
    }["SliderControl.SliderControl.useStableCallback[updatePressedThumb]"]);
    const getFingerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SliderControl.SliderControl.useStableCallback[getFingerState]": (fingerCoords)=>{
            const control = controlRef.current;
            if (!control) {
                return null;
            }
            const { width, height, bottom, left, right } = control.getBoundingClientRect();
            const controlOffset = getControlOffset(stylesRef.current, vertical);
            const insetThumbOffset = insetThumbOffsetRef.current;
            const controlSize = (vertical ? height : width) - controlOffset.start - controlOffset.end - insetThumbOffset * 2;
            const thumbCenterOffset = pressedThumbCenterOffsetRef.current ?? 0;
            const fingerX = fingerCoords.x - thumbCenterOffset;
            const fingerY = fingerCoords.y - thumbCenterOffset;
            const valueSize = vertical ? bottom - fingerY - controlOffset.end : (direction === 'rtl' ? right - fingerX : fingerX - left) - controlOffset.start;
            // the value at the finger origin scaled down to fit the range [0, 1]
            const valueRescaled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((valueSize - insetThumbOffset) / controlSize, 0, 1);
            let newValue = (max - min) * valueRescaled + min;
            newValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$roundValueToStep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundValueToStep"])(newValue, step, min);
            newValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$clamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(newValue, min, max);
            if (!range) {
                return {
                    value: newValue,
                    thumbIndex: 0,
                    didSwap: false
                };
            }
            const thumbIndex = pressedThumbIndexRef.current;
            if (thumbIndex < 0) {
                return null;
            }
            const collisionResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$resolveThumbCollision$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveThumbCollision"])({
                behavior: thumbCollisionBehavior,
                values,
                currentValues: latestValuesRef.current ?? values,
                initialValues: pressedValuesRef.current,
                pressedIndex: thumbIndex,
                nextValue: newValue,
                min,
                max,
                step,
                minStepsBetweenValues
            });
            if (thumbCollisionBehavior === 'swap' && collisionResult.didSwap) {
                updatePressedThumb(collisionResult.thumbIndex);
            } else {
                pressedThumbIndexRef.current = collisionResult.thumbIndex;
            }
            return collisionResult;
        }
    }["SliderControl.SliderControl.useStableCallback[getFingerState]"]);
    const startPressing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SliderControl.SliderControl.useStableCallback[startPressing]": (fingerCoords)=>{
            pressedValuesRef.current = range ? values.slice() : null;
            latestValuesRef.current = values;
            const pressedThumbIndex = pressedThumbIndexRef.current;
            let closestThumbIndex = pressedThumbIndex;
            if (pressedThumbIndex > -1 && pressedThumbIndex < values.length) {
                if (values[pressedThumbIndex] === max) {
                    let candidateIndex = pressedThumbIndex;
                    while(candidateIndex > 0 && values[candidateIndex - 1] === max){
                        candidateIndex -= 1;
                    }
                    closestThumbIndex = candidateIndex;
                }
            } else {
                // pressed on control
                const axis = !vertical ? 'x' : 'y';
                let minDistance;
                closestThumbIndex = -1;
                for(let i = 0; i < thumbRefs.current.length; i += 1){
                    const thumbEl = thumbRefs.current[i];
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(thumbEl)) {
                        const midpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$getMidpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMidpoint"])(thumbEl);
                        const distance = Math.abs(fingerCoords[axis] - midpoint[axis]);
                        if (minDistance === undefined || distance <= minDistance) {
                            closestThumbIndex = i;
                            minDistance = distance;
                        }
                    }
                }
            }
            if (closestThumbIndex > -1 && closestThumbIndex !== pressedThumbIndex) {
                updatePressedThumb(closestThumbIndex);
            }
            if (inset) {
                const thumbEl = thumbRefs.current[closestThumbIndex];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(thumbEl)) {
                    const thumbRect = thumbEl.getBoundingClientRect();
                    const side = !vertical ? 'width' : 'height';
                    insetThumbOffsetRef.current = thumbRect[side] / 2;
                }
            }
        }
    }["SliderControl.SliderControl.useStableCallback[startPressing]"]);
    const focusThumb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SliderControl.SliderControl.useStableCallback[focusThumb]": (thumbIndex)=>{
            thumbRefs.current?.[thumbIndex]?.querySelector('input[type="range"]')?.focus({
                preventScroll: true
            });
        }
    }["SliderControl.SliderControl.useStableCallback[focusThumb]"]);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SliderControl.SliderControl.useStableCallback[handleTouchMove]": (nativeEvent)=>{
            const fingerCoords = getFingerCoords(nativeEvent, touchIdRef);
            if (fingerCoords == null) {
                return;
            }
            moveCountRef.current += 1;
            // Cancel move in case some other element consumed a pointerup event and it was not fired.
            if (nativeEvent.type === 'pointermove' && nativeEvent.buttons === 0) {
                handleTouchEnd(nativeEvent);
                return;
            }
            const finger = getFingerState(fingerCoords);
            if (finger == null) {
                return;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$validateMinimumDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateMinimumDistance"])(finger.value, step, minStepsBetweenValues)) {
                if (!dragging && moveCountRef.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
                    setDragging(true);
                }
                setValue(finger.value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].drag, nativeEvent, undefined, {
                    activeThumbIndex: finger.thumbIndex
                }));
                latestValuesRef.current = Array.isArray(finger.value) ? finger.value : [
                    finger.value
                ];
                if (finger.didSwap) {
                    focusThumb(finger.thumbIndex);
                }
            }
        }
    }["SliderControl.SliderControl.useStableCallback[handleTouchMove]"]);
    function handleTouchEnd(nativeEvent) {
        setActive(-1);
        setDragging(false);
        pressedInputRef.current = null;
        pressedThumbCenterOffsetRef.current = null;
        const fingerCoords = getFingerCoords(nativeEvent, touchIdRef);
        const finger = fingerCoords != null ? getFingerState(fingerCoords) : null;
        if (finger != null) {
            const commitReason = lastChangeReasonRef.current;
            onValueCommitted(lastChangedValueRef.current ?? finger.value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGenericEventDetails"])(commitReason, nativeEvent));
        }
        if ('pointerType' in nativeEvent && controlRef.current?.hasPointerCapture(nativeEvent.pointerId)) {
            controlRef.current?.releasePointerCapture(nativeEvent.pointerId);
        }
        pressedThumbIndexRef.current = -1;
        touchIdRef.current = null;
        pressedValuesRef.current = null;
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        stopListening();
    }
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SliderControl.SliderControl.useStableCallback[handleTouchStart]": (nativeEvent)=>{
            if (disabled) {
                return;
            }
            const touch = nativeEvent.changedTouches[0];
            if (touch != null) {
                touchIdRef.current = touch.identifier;
            }
            const fingerCoords = getFingerCoords(nativeEvent, touchIdRef);
            if (fingerCoords != null) {
                startPressing(fingerCoords);
                const finger = getFingerState(fingerCoords);
                if (finger == null) {
                    return;
                }
                focusThumb(finger.thumbIndex);
                setValue(finger.value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].trackPress, nativeEvent, undefined, {
                    activeThumbIndex: finger.thumbIndex
                }));
                latestValuesRef.current = Array.isArray(finger.value) ? finger.value : [
                    finger.value
                ];
                if (finger.didSwap) {
                    focusThumb(finger.thumbIndex);
                }
            }
            moveCountRef.current = 0;
            const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(controlRef.current);
            doc.addEventListener('touchmove', handleTouchMove, {
                passive: true
            });
            doc.addEventListener('touchend', handleTouchEnd, {
                passive: true
            });
        }
    }["SliderControl.SliderControl.useStableCallback[handleTouchStart]"]);
    const stopListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SliderControl.SliderControl.useStableCallback[stopListening]": ()=>{
            const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(controlRef.current);
            doc.removeEventListener('pointermove', handleTouchMove);
            doc.removeEventListener('pointerup', handleTouchEnd);
            doc.removeEventListener('touchmove', handleTouchMove);
            doc.removeEventListener('touchend', handleTouchEnd);
            pressedValuesRef.current = null;
        }
    }["SliderControl.SliderControl.useStableCallback[stopListening]"]);
    const focusFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useAnimationFrame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SliderControl.SliderControl.useEffect": ()=>{
            const control = controlRef.current;
            if (!control) {
                return ({
                    "SliderControl.SliderControl.useEffect": ()=>stopListening()
                })["SliderControl.SliderControl.useEffect"];
            }
            control.addEventListener('touchstart', handleTouchStart, {
                passive: true
            });
            return ({
                "SliderControl.SliderControl.useEffect": ()=>{
                    control.removeEventListener('touchstart', handleTouchStart);
                    focusFrame.cancel();
                    stopListening();
                }
            })["SliderControl.SliderControl.useEffect"];
        }
    }["SliderControl.SliderControl.useEffect"], [
        stopListening,
        handleTouchStart,
        controlRef,
        focusFrame
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "SliderControl.SliderControl.useEffect": ()=>{
            if (disabled) {
                stopListening();
            }
        }
    }["SliderControl.SliderControl.useEffect"], [
        disabled,
        stopListening
    ]);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: [
            forwardedRef,
            registerFieldControlRef,
            controlRef,
            setStylesRef
        ],
        props: [
            {
                ['data-base-ui-slider-control']: renderBeforeHydration ? '' : undefined,
                onPointerDown (event) {
                    const control = controlRef.current;
                    if (!control || disabled || event.defaultPrevented || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(event.target) || // Only handle left clicks
                    event.button !== 0) {
                        return;
                    }
                    const fingerCoords = getFingerCoords(event, touchIdRef);
                    if (fingerCoords != null) {
                        startPressing(fingerCoords);
                        const finger = getFingerState(fingerCoords);
                        if (finger == null) {
                            return;
                        }
                        const pressedOnFocusedThumb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(thumbRefs.current[finger.thumbIndex], (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$floating$2d$ui$2d$react$2f$utils$2f$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(control)));
                        if (pressedOnFocusedThumb) {
                            event.preventDefault();
                        } else {
                            focusFrame.request({
                                "SliderControl.SliderControl.useRenderElement[element]": ()=>{
                                    focusThumb(finger.thumbIndex);
                                }
                            }["SliderControl.SliderControl.useRenderElement[element]"]);
                        }
                        setDragging(true);
                        const pressedOnAnyThumb = pressedThumbCenterOffsetRef.current != null;
                        if (!pressedOnAnyThumb) {
                            setValue(finger.value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$createBaseUIEventDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$reason$2d$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS$3e$__["REASONS"].trackPress, event.nativeEvent, undefined, {
                                activeThumbIndex: finger.thumbIndex
                            }));
                            latestValuesRef.current = Array.isArray(finger.value) ? finger.value : [
                                finger.value
                            ];
                            if (finger.didSwap) {
                                focusThumb(finger.thumbIndex);
                            }
                        }
                    }
                    if (event.nativeEvent.pointerId) {
                        control.setPointerCapture(event.nativeEvent.pointerId);
                    }
                    moveCountRef.current = 0;
                    const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ownerDocument"])(controlRef.current);
                    doc.addEventListener('pointermove', handleTouchMove, {
                        passive: true
                    });
                    doc.addEventListener('pointerup', handleTouchEnd, {
                        once: true
                    });
                },
                tabIndex: -1
            },
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliderStateAttributesMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SliderControl.displayName = "SliderControl";
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/track/SliderTrack.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SliderTrack",
    ()=>SliderTrack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$SliderRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/SliderRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/stateAttributesMapping.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const SliderTrack = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SliderTrack(componentProps, forwardedRef) {
    const { render, className, ...elementProps } = componentProps;
    const { state } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$SliderRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSliderRootContext"])();
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: forwardedRef,
        props: [
            {
                style: {
                    position: 'relative'
                }
            },
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliderStateAttributesMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SliderTrack.displayName = "SliderTrack";
}),
"[project]/audio-processor/node_modules/@base-ui/utils/esm/visuallyHidden.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "visuallyHidden",
    ()=>visuallyHidden,
    "visuallyHiddenInput",
    ()=>visuallyHiddenInput
]);
const visuallyHiddenBase = {
    clipPath: 'inset(50%)',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    border: 0,
    padding: 0,
    width: 1,
    height: 1,
    margin: -1
};
const visuallyHidden = {
    ...visuallyHiddenBase,
    position: 'fixed',
    top: 0,
    left: 0
};
const visuallyHiddenInput = {
    ...visuallyHiddenBase,
    position: 'absolute'
};
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/utils/valueToPercent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "valueToPercent",
    ()=>valueToPercent
]);
function valueToPercent(value, min, max) {
    return (value - min) * 100 / (max - min);
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/composite/composite.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_KEYS",
    ()=>ALL_KEYS,
    "ALT",
    ()=>ALT,
    "ARROW_DOWN",
    ()=>ARROW_DOWN,
    "ARROW_KEYS",
    ()=>ARROW_KEYS,
    "ARROW_LEFT",
    ()=>ARROW_LEFT,
    "ARROW_RIGHT",
    ()=>ARROW_RIGHT,
    "ARROW_UP",
    ()=>ARROW_UP,
    "COMPOSITE_KEYS",
    ()=>COMPOSITE_KEYS,
    "CONTROL",
    ()=>CONTROL,
    "END",
    ()=>END,
    "HOME",
    ()=>HOME,
    "HORIZONTAL_KEYS",
    ()=>HORIZONTAL_KEYS,
    "HORIZONTAL_KEYS_WITH_EXTRA_KEYS",
    ()=>HORIZONTAL_KEYS_WITH_EXTRA_KEYS,
    "META",
    ()=>META,
    "MODIFIER_KEYS",
    ()=>MODIFIER_KEYS,
    "SHIFT",
    ()=>SHIFT,
    "VERTICAL_KEYS",
    ()=>VERTICAL_KEYS,
    "VERTICAL_KEYS_WITH_EXTRA_KEYS",
    ()=>VERTICAL_KEYS_WITH_EXTRA_KEYS,
    "isNativeInput",
    ()=>isNativeInput,
    "scrollIntoViewIfNeeded",
    ()=>scrollIntoViewIfNeeded
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
;
;
const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
const HOME = 'Home';
const END = 'End';
const HORIZONTAL_KEYS = new Set([
    ARROW_LEFT,
    ARROW_RIGHT
]);
const HORIZONTAL_KEYS_WITH_EXTRA_KEYS = new Set([
    ARROW_LEFT,
    ARROW_RIGHT,
    HOME,
    END
]);
const VERTICAL_KEYS = new Set([
    ARROW_UP,
    ARROW_DOWN
]);
const VERTICAL_KEYS_WITH_EXTRA_KEYS = new Set([
    ARROW_UP,
    ARROW_DOWN,
    HOME,
    END
]);
const ARROW_KEYS = new Set([
    ...HORIZONTAL_KEYS,
    ...VERTICAL_KEYS
]);
const ALL_KEYS = new Set([
    ...ARROW_KEYS,
    HOME,
    END
]);
const COMPOSITE_KEYS = new Set([
    ARROW_UP,
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT,
    HOME,
    END
]);
const SHIFT = 'Shift';
const CONTROL = 'Control';
const ALT = 'Alt';
const META = 'Meta';
const MODIFIER_KEYS = new Set([
    SHIFT,
    CONTROL,
    ALT,
    META
]);
function isInputElement(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) && element.tagName === 'INPUT';
}
function isNativeInput(element) {
    if (isInputElement(element) && element.selectionStart != null) {
        return true;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) && element.tagName === 'TEXTAREA') {
        return true;
    }
    return false;
}
function scrollIntoViewIfNeeded(scrollContainer, element, direction, orientation) {
    if (!scrollContainer || !element || !element.scrollTo) {
        return;
    }
    let targetX = scrollContainer.scrollLeft;
    let targetY = scrollContainer.scrollTop;
    const isOverflowingX = scrollContainer.clientWidth < scrollContainer.scrollWidth;
    const isOverflowingY = scrollContainer.clientHeight < scrollContainer.scrollHeight;
    if (isOverflowingX && orientation !== 'vertical') {
        const elementOffsetLeft = getOffset(scrollContainer, element, 'left');
        const containerStyles = getStyles(scrollContainer);
        const elementStyles = getStyles(element);
        if (direction === 'ltr') {
            if (elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight > scrollContainer.scrollLeft + scrollContainer.clientWidth - containerStyles.scrollPaddingRight) {
                // overflow to the right, scroll to align right edges
                targetX = elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight - scrollContainer.clientWidth + containerStyles.scrollPaddingRight;
            } else if (elementOffsetLeft - elementStyles.scrollMarginLeft < scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft) {
                // overflow to the left, scroll to align left edges
                targetX = elementOffsetLeft - elementStyles.scrollMarginLeft - containerStyles.scrollPaddingLeft;
            }
        }
        if (direction === 'rtl') {
            if (elementOffsetLeft - elementStyles.scrollMarginRight < scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft) {
                // overflow to the left, scroll to align left edges
                targetX = elementOffsetLeft - elementStyles.scrollMarginLeft - containerStyles.scrollPaddingLeft;
            } else if (elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight > scrollContainer.scrollLeft + scrollContainer.clientWidth - containerStyles.scrollPaddingRight) {
                // overflow to the right, scroll to align right edges
                targetX = elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight - scrollContainer.clientWidth + containerStyles.scrollPaddingRight;
            }
        }
    }
    if (isOverflowingY && orientation !== 'horizontal') {
        const elementOffsetTop = getOffset(scrollContainer, element, 'top');
        const containerStyles = getStyles(scrollContainer);
        const elementStyles = getStyles(element);
        if (elementOffsetTop - elementStyles.scrollMarginTop < scrollContainer.scrollTop + containerStyles.scrollPaddingTop) {
            // overflow upwards, align top edges
            targetY = elementOffsetTop - elementStyles.scrollMarginTop - containerStyles.scrollPaddingTop;
        } else if (elementOffsetTop + element.offsetHeight + elementStyles.scrollMarginBottom > scrollContainer.scrollTop + scrollContainer.clientHeight - containerStyles.scrollPaddingBottom) {
            // overflow downwards, align bottom edges
            targetY = elementOffsetTop + element.offsetHeight + elementStyles.scrollMarginBottom - scrollContainer.clientHeight + containerStyles.scrollPaddingBottom;
        }
    }
    scrollContainer.scrollTo({
        left: targetX,
        top: targetY,
        behavior: 'auto'
    });
}
function getOffset(ancestor, element, side) {
    const propName = side === 'left' ? 'offsetLeft' : 'offsetTop';
    let result = 0;
    while(element.offsetParent){
        result += element[propName];
        if (element.offsetParent === ancestor) {
            break;
        }
        element = element.offsetParent;
    }
    return result;
}
function getStyles(element) {
    const styles = getComputedStyle(element);
    return {
        scrollMarginTop: parseFloat(styles.scrollMarginTop) || 0,
        scrollMarginRight: parseFloat(styles.scrollMarginRight) || 0,
        scrollMarginBottom: parseFloat(styles.scrollMarginBottom) || 0,
        scrollMarginLeft: parseFloat(styles.scrollMarginLeft) || 0,
        scrollPaddingTop: parseFloat(styles.scrollPaddingTop) || 0,
        scrollPaddingRight: parseFloat(styles.scrollPaddingRight) || 0,
        scrollPaddingBottom: parseFloat(styles.scrollPaddingBottom) || 0,
        scrollPaddingLeft: parseFloat(styles.scrollPaddingLeft) || 0
    };
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/composite/list/useCompositeListItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndexGuessBehavior",
    ()=>IndexGuessBehavior,
    "useCompositeListItem",
    ()=>useCompositeListItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/composite/list/CompositeListContext.js [app-client] (ecmascript)");
'use client';
;
;
;
let IndexGuessBehavior = /*#__PURE__*/ function(IndexGuessBehavior) {
    IndexGuessBehavior[IndexGuessBehavior["None"] = 0] = "None";
    IndexGuessBehavior[IndexGuessBehavior["GuessFromOrder"] = 1] = "GuessFromOrder";
    return IndexGuessBehavior;
}({});
function useCompositeListItem(params = {}) {
    const { label, metadata, textRef, indexGuessBehavior, index: externalIndex } = params;
    const { register, unregister, subscribeMapChange, elementsRef, labelsRef, nextIndexRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$CompositeListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompositeListContext"])();
    const indexRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](-1);
    const [index, setIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](externalIndex ?? (indexGuessBehavior === IndexGuessBehavior.GuessFromOrder ? ({
        "useCompositeListItem.useState": ()=>{
            if (indexRef.current === -1) {
                const newIndex = nextIndexRef.current;
                nextIndexRef.current += 1;
                indexRef.current = newIndex;
            }
            return indexRef.current;
        }
    })["useCompositeListItem.useState"] : -1));
    const componentRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useCompositeListItem.useCallback[ref]": (node)=>{
            componentRef.current = node;
            if (index !== -1 && node !== null) {
                elementsRef.current[index] = node;
                if (labelsRef) {
                    const isLabelDefined = label !== undefined;
                    labelsRef.current[index] = isLabelDefined ? label : textRef?.current?.textContent ?? node.textContent;
                }
            }
        }
    }["useCompositeListItem.useCallback[ref]"], [
        index,
        elementsRef,
        labelsRef,
        label,
        textRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useCompositeListItem.useIsoLayoutEffect": ()=>{
            if (externalIndex != null) {
                return undefined;
            }
            const node = componentRef.current;
            if (node) {
                register(node, metadata);
                return ({
                    "useCompositeListItem.useIsoLayoutEffect": ()=>{
                        unregister(node);
                    }
                })["useCompositeListItem.useIsoLayoutEffect"];
            }
            return undefined;
        }
    }["useCompositeListItem.useIsoLayoutEffect"], [
        externalIndex,
        register,
        unregister,
        metadata
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useCompositeListItem.useIsoLayoutEffect": ()=>{
            if (externalIndex != null) {
                return undefined;
            }
            return subscribeMapChange({
                "useCompositeListItem.useIsoLayoutEffect": (map)=>{
                    const i = componentRef.current ? map.get(componentRef.current)?.index : null;
                    if (i != null) {
                        setIndex(i);
                    }
                }
            }["useCompositeListItem.useIsoLayoutEffect"]);
        }
    }["useCompositeListItem.useIsoLayoutEffect"], [
        externalIndex,
        subscribeMapChange,
        setIndex
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useCompositeListItem.useMemo": ()=>({
                ref,
                index
            })
    }["useCompositeListItem.useMemo"], [
        index,
        ref
    ]);
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/csp-provider/CSPContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSPContext",
    ()=>CSPContext,
    "useCSPContext",
    ()=>useCSPContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const CSPContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) CSPContext.displayName = "CSPContext";
const DEFAULT_CSP_CONTEXT_VALUE = {
    disableStyleElements: false
};
function useCSPContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CSPContext) ?? DEFAULT_CSP_CONTEXT_VALUE;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/labelable-provider/useLabelableId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLabelableId",
    ()=>useLabelableId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/labelable-provider/LabelableContext.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function useLabelableId(params = {}) {
    const { id, implicit = false, controlRef } = params;
    const { controlId, registerControlId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$LabelableContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableContext"])();
    const defaultId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(id);
    const controlIdForEffect = implicit ? controlId : undefined;
    const controlSourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useRefWithInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])({
        "useLabelableId.useRefWithInit[controlSourceRef]": ()=>Symbol('labelable-control')
    }["useLabelableId.useRefWithInit[controlSourceRef]"]);
    const hasRegisteredRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const hadExplicitIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](id != null);
    const unregisterControlId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "useLabelableId.useStableCallback[unregisterControlId]": ()=>{
            if (!hasRegisteredRef.current || registerControlId === __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"]) {
                return;
            }
            hasRegisteredRef.current = false;
            registerControlId(controlSourceRef.current, undefined);
        }
    }["useLabelableId.useStableCallback[unregisterControlId]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useLabelableId.useIsoLayoutEffect": ()=>{
            if (registerControlId === __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"]) {
                return undefined;
            }
            let nextId;
            if (implicit) {
                const elem = controlRef?.current;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(elem) && elem.closest('label') != null) {
                    nextId = id ?? null;
                } else {
                    nextId = controlIdForEffect ?? defaultId;
                }
            } else if (id != null) {
                hadExplicitIdRef.current = true;
                nextId = id;
            } else if (hadExplicitIdRef.current) {
                nextId = defaultId;
            } else {
                unregisterControlId();
                return undefined;
            }
            if (nextId === undefined) {
                unregisterControlId();
                return undefined;
            }
            hasRegisteredRef.current = true;
            registerControlId(controlSourceRef.current, nextId);
            return undefined;
        }
    }["useLabelableId.useIsoLayoutEffect"], [
        id,
        controlRef,
        controlIdForEffect,
        registerControlId,
        implicit,
        defaultId,
        controlSourceRef,
        unregisterControlId
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useLabelableId.useEffect": ()=>{
            return unregisterControlId;
        }
    }["useLabelableId.useEffect"], [
        unregisterControlId
    ]);
    return controlId ?? defaultId;
}
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/thumb/SliderThumbDataAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SliderThumbDataAttributes",
    ()=>SliderThumbDataAttributes
]);
let SliderThumbDataAttributes = /*#__PURE__*/ function(SliderThumbDataAttributes) {
    /**
   * Indicates the index of the thumb in range sliders.
   */ SliderThumbDataAttributes["index"] = "data-index";
    /**
   * Present while the user is dragging.
   */ SliderThumbDataAttributes["dragging"] = "data-dragging";
    /**
   * Indicates the orientation of the slider.
   * @type {'horizontal' | 'vertical'}
   */ SliderThumbDataAttributes["orientation"] = "data-orientation";
    /**
   * Present when the slider is disabled.
   */ SliderThumbDataAttributes["disabled"] = "data-disabled";
    /**
   * Present when the slider is in valid state (when wrapped in Field.Root).
   */ SliderThumbDataAttributes["valid"] = "data-valid";
    /**
   * Present when the slider is in invalid state (when wrapped in Field.Root).
   */ SliderThumbDataAttributes["invalid"] = "data-invalid";
    /**
   * Present when the slider has been touched (when wrapped in Field.Root).
   */ SliderThumbDataAttributes["touched"] = "data-touched";
    /**
   * Present when the slider's value has changed (when wrapped in Field.Root).
   */ SliderThumbDataAttributes["dirty"] = "data-dirty";
    /**
   * Present when the slider is focused (when wrapped in Field.Root).
   */ SliderThumbDataAttributes["focused"] = "data-focused";
    return SliderThumbDataAttributes;
}({});
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/thumb/prehydrationScript.min.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file is autogenerated. Do not edit it directly.
// To update it, modify the corresponding source file and run `pnpm inline-scripts`.
// prettier-ignore
__turbopack_context__.s([
    "script",
    ()=>script
]);
const script = '!function(){const t=document.currentScript?.parentElement;if(!t)return;const e=t.closest("[data-base-ui-slider-control]");if(!e)return;const r=e.querySelector("[data-base-ui-slider-indicator]"),i=e.getBoundingClientRect(),n="vertical"===e.getAttribute("data-orientation")?"height":"width",o=e.querySelectorAll(\'input[type="range"]\'),l=o.length>1,s=o.length-1;let a=null,u=null;for(let t=0;t<o.length;t+=1){const e=o[t],y=parseFloat(e.getAttribute("value")??"");if(Number.isNaN(y))return;const c=e.parentElement;if(!c)return;const p=parseFloat(e.getAttribute("max")??"100"),g=parseFloat(e.getAttribute("min")??"0"),b=c?.getBoundingClientRect(),d=i[n]-b[n],m=100*(y-g)/(p-g),v=(b[n]/2+d*m/100)/i[n]*100;c.style.setProperty("--position",`${v}%`),Number.isFinite(v)&&(c.style.removeProperty("visibility"),r&&(0===t?(a=v,r.style.setProperty("--start-position",`${v}%`),l||r.style.removeProperty("visibility")):t===s&&(u=v-(a??0),r.style.setProperty("--end-position",`${v}%`),r.style.setProperty("--relative-size",`${u}%`),r.style.removeProperty("visibility"))))}}();';
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/thumb/SliderThumb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SliderThumb",
    ()=>SliderThumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnMount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useOnMount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useMergedRefs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$visuallyHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/visuallyHidden.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$formatNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/formatNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useBaseUiId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$valueToPercent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/valueToPercent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/composite/composite.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$useCompositeListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/composite/list/useCompositeListItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$direction$2d$provider$2f$DirectionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/direction-provider/DirectionContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$csp$2d$provider$2f$CSPContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/csp-provider/CSPContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/field/root/FieldRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabelableId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/labelable-provider/useLabelableId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$getMidpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/getMidpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$getSliderValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/getSliderValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$roundValueToStep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/utils/roundValueToStep.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$SliderRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/SliderRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/stateAttributesMapping.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$thumb$2f$SliderThumbDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/thumb/SliderThumbDataAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$thumb$2f$prehydrationScript$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/thumb/prehydrationScript.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const PAGE_UP = 'PageUp';
const PAGE_DOWN = 'PageDown';
const ALL_KEYS = new Set([
    __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_UP"],
    __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_DOWN"],
    __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_LEFT"],
    __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_RIGHT"],
    __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HOME"],
    __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["END"],
    PAGE_UP,
    PAGE_DOWN
]);
function getDefaultAriaValueText(values, index, format, locale) {
    if (index < 0) {
        return undefined;
    }
    if (values.length === 2) {
        if (index === 0) {
            return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$formatNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(values[index], locale, format)} start range`;
        }
        return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$formatNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(values[index], locale, format)} end range`;
    }
    return format ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$formatNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(values[index], locale, format) : undefined;
}
function getNewValue(thumbValue, step, direction, min, max) {
    return direction === 1 ? Math.min(thumbValue + step, max) : Math.max(thumbValue - step, min);
}
const SliderThumb = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SliderThumb(componentProps, forwardedRef) {
    const { render, children: childrenProp, className, 'aria-describedby': ariaDescribedByProp, 'aria-label': ariaLabelProp, 'aria-labelledby': ariaLabelledByProp, disabled: disabledProp = false, getAriaLabel: getAriaLabelProp, getAriaValueText: getAriaValueTextProp, id: idProp, index: indexProp, inputRef: inputRefProp, onBlur: onBlurProp, onFocus: onFocusProp, onKeyDown: onKeyDownProp, tabIndex: tabIndexProp, ...elementProps } = componentProps;
    const { nonce } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$csp$2d$provider$2f$CSPContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCSPContext"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    const { active: activeIndex, lastUsedThumbIndex, controlRef, disabled: contextDisabled, validation, formatOptionsRef, handleInputChange, inset, labelId, largeStep, locale, max, min, minStepsBetweenValues, name, orientation, pressedInputRef, pressedThumbCenterOffsetRef, pressedThumbIndexRef, renderBeforeHydration, setActive, setIndicatorPosition, state, step, values: sliderValues } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$SliderRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSliderRootContext"])();
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$direction$2d$provider$2f$DirectionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"])();
    const disabled = disabledProp || contextDisabled;
    const range = sliderValues.length > 1;
    const vertical = orientation === 'vertical';
    const rtl = direction === 'rtl';
    const { setTouched, setFocused, validationMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$field$2f$root$2f$FieldRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldRootContext"])();
    const thumbRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const defaultInputId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useBaseUiId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])();
    const labelableId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$labelable$2d$provider$2f$useLabelableId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLabelableId"])();
    const inputId = range ? defaultInputId : labelableId;
    const thumbMetadata = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "SliderThumb.SliderThumb.useMemo[thumbMetadata]": ()=>({
                inputId
            })
    }["SliderThumb.SliderThumb.useMemo[thumbMetadata]"], [
        inputId
    ]);
    const { ref: listItemRef, index: compositeIndex } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$list$2f$useCompositeListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompositeListItem"])({
        metadata: thumbMetadata
    });
    const index = !range ? 0 : indexProp ?? compositeIndex;
    const last = index === sliderValues.length - 1;
    const thumbValue = sliderValues[index];
    const thumbValuePercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$valueToPercent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["valueToPercent"])(thumbValue, min, max);
    const [isMounted, setIsMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [positionPercent, setPositionPercent] = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnMount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnMount"])({
        "SliderThumb.SliderThumb.useOnMount": ()=>setIsMounted(true)
    }["SliderThumb.SliderThumb.useOnMount"]);
    const safeLastUsedThumbIndex = lastUsedThumbIndex >= 0 && lastUsedThumbIndex < sliderValues.length ? lastUsedThumbIndex : -1;
    const getInsetPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useStableCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "SliderThumb.SliderThumb.useStableCallback[getInsetPosition]": ()=>{
            const control = controlRef.current;
            const thumb = thumbRef.current;
            if (!control || !thumb) {
                return;
            }
            const thumbRect = thumb.getBoundingClientRect();
            const controlRect = control.getBoundingClientRect();
            const side = vertical ? 'height' : 'width';
            // the total travel distance adjusted to account for the thumb size
            const controlSize = controlRect[side] - thumbRect[side];
            // px distance from the starting edge (inline-start or bottom) to the thumb center
            const thumbOffsetFromControlEdge = thumbRect[side] / 2 + controlSize * thumbValuePercent / 100;
            const nextPositionPercent = thumbOffsetFromControlEdge / controlRect[side] * 100;
            setPositionPercent(nextPositionPercent);
            if (index === 0) {
                setIndicatorPosition({
                    "SliderThumb.SliderThumb.useStableCallback[getInsetPosition]": (prevPosition)=>[
                            nextPositionPercent,
                            prevPosition[1]
                        ]
                }["SliderThumb.SliderThumb.useStableCallback[getInsetPosition]"]);
            } else if (last) {
                setIndicatorPosition({
                    "SliderThumb.SliderThumb.useStableCallback[getInsetPosition]": (prevPosition)=>[
                            prevPosition[0],
                            nextPositionPercent
                        ]
                }["SliderThumb.SliderThumb.useStableCallback[getInsetPosition]"]);
            }
        }
    }["SliderThumb.SliderThumb.useStableCallback[getInsetPosition]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "SliderThumb.SliderThumb.useIsoLayoutEffect": ()=>{
            if (inset) {
                queueMicrotask(getInsetPosition);
            }
        }
    }["SliderThumb.SliderThumb.useIsoLayoutEffect"], [
        getInsetPosition,
        inset
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useIsoLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "SliderThumb.SliderThumb.useIsoLayoutEffect": ()=>{
            if (inset) {
                getInsetPosition();
            }
        }
    }["SliderThumb.SliderThumb.useIsoLayoutEffect"], [
        getInsetPosition,
        inset,
        thumbValuePercent
    ]);
    const getThumbStyle = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "SliderThumb.SliderThumb.useCallback[getThumbStyle]": ()=>{
            const startEdge = vertical ? 'bottom' : 'insetInlineStart';
            const crossOffsetProperty = vertical ? 'left' : 'top';
            let zIndex;
            if (range) {
                if (activeIndex === index) {
                    zIndex = 2;
                } else if (safeLastUsedThumbIndex === index) {
                    zIndex = 1;
                }
            } else if (activeIndex === index) {
                zIndex = 1;
            }
            if (!inset) {
                if (!Number.isFinite(thumbValuePercent)) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$visuallyHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visuallyHidden"];
                }
                return {
                    position: 'absolute',
                    [startEdge]: `${thumbValuePercent}%`,
                    [crossOffsetProperty]: '50%',
                    translate: `${(vertical || !rtl ? -1 : 1) * 50}% ${(vertical ? 1 : -1) * 50}%`,
                    zIndex
                };
            }
            return {
                ['--position']: `${positionPercent}%`,
                visibility: renderBeforeHydration && !isMounted || positionPercent === undefined ? 'hidden' : undefined,
                position: 'absolute',
                [startEdge]: 'var(--position)',
                [crossOffsetProperty]: '50%',
                translate: `${(vertical || !rtl ? -1 : 1) * 50}% ${(vertical ? 1 : -1) * 50}%`,
                zIndex
            };
        }
    }["SliderThumb.SliderThumb.useCallback[getThumbStyle]"], [
        activeIndex,
        index,
        inset,
        isMounted,
        positionPercent,
        range,
        renderBeforeHydration,
        rtl,
        safeLastUsedThumbIndex,
        thumbValuePercent,
        vertical
    ]);
    let cssWritingMode;
    if (orientation === 'vertical') {
        cssWritingMode = rtl ? 'vertical-rl' : 'vertical-lr';
    }
    const ariaLabel = typeof getAriaLabelProp === 'function' ? getAriaLabelProp(index) : ariaLabelProp;
    const inputProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledByProp ?? (ariaLabel == null ? labelId : undefined),
        'aria-describedby': ariaDescribedByProp,
        'aria-orientation': orientation,
        'aria-valuenow': thumbValue,
        'aria-valuetext': typeof getAriaValueTextProp === 'function' ? getAriaValueTextProp((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$formatNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(thumbValue, locale, formatOptionsRef.current ?? undefined), thumbValue, index) : getDefaultAriaValueText(sliderValues, index, formatOptionsRef.current ?? undefined, locale),
        disabled,
        id: inputId,
        max,
        min,
        name,
        onChange (event) {
            handleInputChange(event.target.valueAsNumber, index, event);
        },
        onFocus () {
            setActive(index);
            setFocused(true);
        },
        onBlur () {
            if (!thumbRef.current) {
                return;
            }
            setActive(-1);
            setTouched(true);
            setFocused(false);
            if (validationMode === 'onBlur') {
                validation.commit((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$getSliderValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSliderValue"])(thumbValue, index, min, max, range, sliderValues));
            }
        },
        onKeyDown (event) {
            if (!ALL_KEYS.has(event.key)) {
                return;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["COMPOSITE_KEYS"].has(event.key)) {
                event.stopPropagation();
            }
            let newValue = null;
            const roundedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$roundValueToStep$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundValueToStep"])(thumbValue, step, min);
            switch(event.key){
                case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_UP"]:
                    newValue = getNewValue(roundedValue, event.shiftKey ? largeStep : step, 1, min, max);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_RIGHT"]:
                    newValue = getNewValue(roundedValue, event.shiftKey ? largeStep : step, rtl ? -1 : 1, min, max);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_DOWN"]:
                    newValue = getNewValue(roundedValue, event.shiftKey ? largeStep : step, -1, min, max);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ARROW_LEFT"]:
                    newValue = getNewValue(roundedValue, event.shiftKey ? largeStep : step, rtl ? 1 : -1, min, max);
                    break;
                case PAGE_UP:
                    newValue = getNewValue(roundedValue, largeStep, 1, min, max);
                    break;
                case PAGE_DOWN:
                    newValue = getNewValue(roundedValue, largeStep, -1, min, max);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["END"]:
                    newValue = max;
                    if (range) {
                        newValue = Number.isFinite(sliderValues[index + 1]) ? sliderValues[index + 1] - step * minStepsBetweenValues : max;
                    }
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$composite$2f$composite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HOME"]:
                    newValue = min;
                    if (range) {
                        newValue = Number.isFinite(sliderValues[index - 1]) ? sliderValues[index - 1] + step * minStepsBetweenValues : min;
                    }
                    break;
                default:
                    break;
            }
            if (newValue !== null) {
                handleInputChange(newValue, index, event);
                event.preventDefault();
            }
        },
        step,
        style: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$visuallyHidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visuallyHidden"],
            // So that VoiceOver's focus indicator matches the thumb's dimensions
            width: '100%',
            height: '100%',
            writingMode: cssWritingMode
        },
        tabIndex: tabIndexProp ?? undefined,
        type: 'range',
        value: thumbValue ?? ''
    }, validation.getInputValidationProps);
    const mergedInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useMergedRefs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRefs"])(inputRef, validation.inputRef, inputRefProp);
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: [
            forwardedRef,
            listItemRef,
            thumbRef
        ],
        props: [
            {
                [__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$thumb$2f$SliderThumbDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliderThumbDataAttributes"].index]: index,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        childrenProp,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                            ref: mergedInputRef,
                            ...inputProps
                        }),
                        inset && !isMounted && renderBeforeHydration && // this must be rendered with the last thumb to ensure all
                        // preceding thumbs are already rendered in the DOM
                        last && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("script", {
                            nonce: nonce,
                            dangerouslySetInnerHTML: {
                                __html: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$thumb$2f$prehydrationScript$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["script"]
                            },
                            suppressHydrationWarning: true
                        })
                    ]
                }),
                id,
                onBlur: onBlurProp,
                onFocus: onFocusProp,
                onPointerDown (event) {
                    pressedThumbIndexRef.current = index;
                    if (thumbRef.current != null) {
                        const axis = orientation === 'horizontal' ? 'x' : 'y';
                        const midpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$utils$2f$getMidpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMidpoint"])(thumbRef.current);
                        const offset = (orientation === 'horizontal' ? event.clientX : event.clientY) - midpoint[axis];
                        pressedThumbCenterOffsetRef.current = offset;
                    }
                    if (inputRef.current != null && pressedInputRef.current !== inputRef.current) {
                        pressedInputRef.current = inputRef.current;
                    }
                },
                style: getThumbStyle(),
                suppressHydrationWarning: renderBeforeHydration || undefined,
                tabIndex: -1
            },
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliderStateAttributesMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SliderThumb.displayName = "SliderThumb";
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/indicator/SliderIndicator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SliderIndicator",
    ()=>SliderIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnMount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/utils/esm/useOnMount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$valueToPercent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/valueToPercent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/utils/useRenderElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$SliderRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/SliderRootContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/stateAttributesMapping.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function getInsetStyles(vertical, range, start, end, renderBeforeHydration, mounted) {
    const visibility = start === undefined || range && end === undefined ? 'hidden' : undefined;
    const startEdge = vertical ? 'bottom' : 'insetInlineStart';
    const mainSide = vertical ? 'height' : 'width';
    const crossSide = vertical ? 'width' : 'height';
    const styles = {
        visibility: renderBeforeHydration && !mounted ? 'hidden' : visibility,
        position: vertical ? 'absolute' : 'relative',
        [crossSide]: 'inherit'
    };
    styles['--start-position'] = `${start ?? 0}%`;
    if (!range) {
        styles[startEdge] = 0;
        styles[mainSide] = 'var(--start-position)';
        return styles;
    }
    styles['--relative-size'] = `${(end ?? 0) - (start ?? 0)}%`;
    styles[startEdge] = 'var(--start-position)';
    styles[mainSide] = 'var(--relative-size)';
    return styles;
}
function getCenteredStyles(vertical, range, start, end) {
    const startEdge = vertical ? 'bottom' : 'insetInlineStart';
    const mainSide = vertical ? 'height' : 'width';
    const crossSide = vertical ? 'width' : 'height';
    const styles = {
        position: vertical ? 'absolute' : 'relative',
        [crossSide]: 'inherit'
    };
    if (!range) {
        styles[startEdge] = 0;
        styles[mainSide] = `${start}%`;
        return styles;
    }
    const size = end - start;
    styles[startEdge] = `${start}%`;
    styles[mainSide] = `${size}%`;
    return styles;
}
const SliderIndicator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SliderIndicator(componentProps, forwardedRef) {
    const { render, className, ...elementProps } = componentProps;
    const { indicatorPosition, inset, max, min, orientation, renderBeforeHydration, state, values } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$SliderRootContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSliderRootContext"])();
    const [isMounted, setIsMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$esm$2f$useOnMount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnMount"])({
        "SliderIndicator.SliderIndicator.useOnMount": ()=>setIsMounted(true)
    }["SliderIndicator.SliderIndicator.useOnMount"]);
    const vertical = orientation === 'vertical';
    const range = values.length > 1;
    const style = inset ? getInsetStyles(vertical, range, indicatorPosition[0], indicatorPosition[1], renderBeforeHydration, isMounted) : getCenteredStyles(vertical, range, (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$valueToPercent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["valueToPercent"])(values[0], min, max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$valueToPercent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["valueToPercent"])(values[values.length - 1], min, max));
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$utils$2f$useRenderElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: forwardedRef,
        props: [
            {
                ['data-base-ui-slider-indicator']: renderBeforeHydration ? '' : undefined,
                style,
                suppressHydrationWarning: renderBeforeHydration || undefined
            },
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$stateAttributesMapping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliderStateAttributesMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) SliderIndicator.displayName = "SliderIndicator";
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/index.parts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Control",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$control$2f$SliderControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliderControl"],
    "Indicator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$indicator$2f$SliderIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliderIndicator"],
    "Label",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$label$2f$SliderLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliderLabel"],
    "Root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$SliderRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliderRoot"],
    "Thumb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$thumb$2f$SliderThumb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliderThumb"],
    "Track",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$track$2f$SliderTrack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliderTrack"],
    "Value",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$value$2f$SliderValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliderValue"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/index.parts.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$root$2f$SliderRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/root/SliderRoot.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$label$2f$SliderLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/label/SliderLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$value$2f$SliderValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/value/SliderValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$control$2f$SliderControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/control/SliderControl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$track$2f$SliderTrack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/track/SliderTrack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$thumb$2f$SliderThumb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/thumb/SliderThumb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$indicator$2f$SliderIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/indicator/SliderIndicator.js [app-client] (ecmascript)");
}),
"[project]/audio-processor/node_modules/@base-ui/react/esm/slider/index.parts.js [app-client] (ecmascript) <export * as Slider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$slider$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/slider/index.parts.js [app-client] (ecmascript)");
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Upload
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 3v12",
            key: "1x0j5s"
        }
    ],
    [
        "path",
        {
            d: "m17 8-5-5-5 5",
            key: "7q97r8"
        }
    ],
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ]
];
const Upload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("upload", __iconNode);
;
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Upload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript)");
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Play
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
            key: "10ikf1"
        }
    ]
];
const Play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("play", __iconNode);
;
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Play",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript)");
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Pause
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            x: "14",
            y: "3",
            width: "5",
            height: "18",
            rx: "1",
            key: "kaeet6"
        }
    ],
    [
        "rect",
        {
            x: "5",
            y: "3",
            width: "5",
            height: "18",
            rx: "1",
            key: "1wsw3u"
        }
    ]
];
const Pause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("pause", __iconNode);
;
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pause",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript)");
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Download
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 15V3",
            key: "m9g1x1"
        }
    ],
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "path",
        {
            d: "m7 10 5 5 5-5",
            key: "brsn70"
        }
    ]
];
const Download = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("download", __iconNode);
;
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Download",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript)");
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/scissors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Scissors
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }
    ],
    [
        "path",
        {
            d: "M8.12 8.12 12 12",
            key: "1alkpv"
        }
    ],
    [
        "path",
        {
            d: "M20 4 8.12 15.88",
            key: "xgtan2"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "18",
            r: "3",
            key: "fqmcym"
        }
    ],
    [
        "path",
        {
            d: "M14.8 14.8 20 20",
            key: "ptml3r"
        }
    ]
];
const Scissors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("scissors", __iconNode);
;
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/scissors.js [app-client] (ecmascript) <export default as Scissors>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scissors",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/scissors.js [app-client] (ecmascript)");
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LoaderCircle
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("loader-circle", __iconNode);
;
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Settings2
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14 17H5",
            key: "gfn3mx"
        }
    ],
    [
        "path",
        {
            d: "M19 7h-9",
            key: "6i9tg"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "17",
            r: "3",
            key: "18b49y"
        }
    ],
    [
        "circle",
        {
            cx: "7",
            cy: "7",
            r: "3",
            key: "dfmy0x"
        }
    ]
];
const Settings2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("settings-2", __iconNode);
;
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript)");
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/fast-forward.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>FastForward
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",
            key: "b19h5q"
        }
    ],
    [
        "path",
        {
            d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",
            key: "h7h5ge"
        }
    ]
];
const FastForward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("fast-forward", __iconNode);
;
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/fast-forward.js [app-client] (ecmascript) <export default as FastForward>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FastForward",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fast$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fast$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/fast-forward.js [app-client] (ecmascript)");
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/rewind.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Rewind
]);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z",
            key: "2a1g8i"
        }
    ],
    [
        "path",
        {
            d: "M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z",
            key: "rg3s36"
        }
    ]
];
const Rewind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("rewind", __iconNode);
;
}),
"[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/rewind.js [app-client] (ecmascript) <export default as Rewind>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Rewind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rewind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rewind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/rewind.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=0ftb_0oaflj9._.js.map