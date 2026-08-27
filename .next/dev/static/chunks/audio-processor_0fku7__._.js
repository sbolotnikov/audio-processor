(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/audio-processor/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/audio-processor/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@base-ui/react/esm/button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
            destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            icon: "size-8",
            "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
            "icon-lg": "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/audio-processor/components/ui/button.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/audio-processor/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/audio-processor/components/ui/card.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/audio-processor/components/ui/card.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/audio-processor/components/ui/card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/audio-processor/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/audio-processor/components/ui/card.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 group-data-[size=sm]/card:px-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/audio-processor/components/ui/card.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/audio-processor/components/ui/card.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/audio-processor/components/ui/slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>Slider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function Slider({ className, value, defaultValue, min = 0, max = 100, step = 1, onValueChange, ...props }) {
    const current = value?.[0] ?? defaultValue?.[0] ?? Number(min);
    const percentage = Number(max) === Number(min) ? 0 : (current - Number(min)) / (Number(max) - Number(min)) * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        ...props,
        type: "range",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-full cursor-pointer appearance-none rounded-full disabled:pointer-events-none disabled:opacity-50", "[&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent", "[&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-ring [&::-webkit-slider-thumb]:bg-white", "[&::-moz-range-track]:h-1 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-muted", "[&::-moz-range-progress]:h-1 [&::-moz-range-progress]:rounded-full [&::-moz-range-progress]:bg-primary", "[&::-moz-range-thumb]:size-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-ring [&::-moz-range-thumb]:bg-white", className),
        "data-slot": "slider",
        min: min,
        max: max,
        step: step,
        value: value?.[0],
        defaultValue: value ? undefined : defaultValue?.[0],
        onChange: (event)=>onValueChange?.([
                event.currentTarget.valueAsNumber
            ]),
        style: {
            ...props.style,
            background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${Math.max(0, Math.min(100, percentage))}%, var(--muted) ${Math.max(0, Math.min(100, percentage))}%, var(--muted) 100%)`
        }
    }, void 0, false, {
        fileName: "[project]/audio-processor/components/ui/slider.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Slider;
;
var _c;
__turbopack_context__.k.register(_c, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/audio-processor/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/lib/utils.ts [app-client] (ecmascript)");
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/audio-processor/components/ui/label.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/audio-processor/lib/midi-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderMidiToWav",
    ()=>renderMidiToWav
]);
function readVariableLength(data, cursor) {
    let value = 0;
    for(let count = 0; count < 4; count++){
        const byte = data[cursor.value++];
        value = value << 7 | byte & 0x7f;
        if (!(byte & 0x80)) break;
    }
    return value;
}
function readUint32(data, offset) {
    return (data[offset] << 24 | data[offset + 1] << 16 | data[offset + 2] << 8 | data[offset + 3]) >>> 0;
}
async function renderMidiToWav(file) {
    const data = new Uint8Array(await file.arrayBuffer());
    const text = (offset, length)=>String.fromCharCode(...data.slice(offset, offset + length));
    if (text(0, 4) !== 'MThd') throw new Error('This is not a valid Standard MIDI file.');
    const tracks = data[10] << 8 | data[11];
    const division = data[12] << 8 | data[13];
    if (division & 0x8000) throw new Error('SMPTE-timed MIDI files are not supported.');
    const events = [];
    const tempos = [
        {
            tick: 0,
            micros: 500000
        }
    ];
    let offset = 8 + readUint32(data, 4);
    for(let track = 0; track < tracks && offset + 8 <= data.length; track++){
        if (text(offset, 4) !== 'MTrk') throw new Error('The MIDI track data is malformed.');
        const end = offset + 8 + readUint32(data, offset + 4);
        const cursor = {
            value: offset + 8
        };
        let tick = 0;
        let runningStatus = 0;
        while(cursor.value < end){
            tick += readVariableLength(data, cursor);
            let status = data[cursor.value++];
            if (status < 0x80) {
                cursor.value--;
                status = runningStatus;
            } else if (status < 0xf0) runningStatus = status;
            if (status === 0xff) {
                const kind = data[cursor.value++];
                const length = readVariableLength(data, cursor);
                if (kind === 0x51 && length === 3) {
                    tempos.push({
                        tick,
                        micros: data[cursor.value] << 16 | data[cursor.value + 1] << 8 | data[cursor.value + 2]
                    });
                }
                cursor.value += length;
            } else if (status === 0xf0 || status === 0xf7) {
                cursor.value += readVariableLength(data, cursor);
            } else {
                const kind = status & 0xf0;
                const channel = status & 0x0f;
                const first = data[cursor.value++];
                const second = kind === 0xc0 || kind === 0xd0 ? 0 : data[cursor.value++];
                if (kind === 0x90) events.push({
                    tick,
                    type: second ? 'on' : 'off',
                    note: first,
                    velocity: second,
                    channel
                });
                if (kind === 0x80) events.push({
                    tick,
                    type: 'off',
                    note: first,
                    velocity: second,
                    channel
                });
            }
        }
        offset = end;
    }
    tempos.sort((a, b)=>a.tick - b.tick);
    const uniqueTempos = tempos.filter((tempo, index)=>index === tempos.length - 1 || tempos[index + 1].tick !== tempo.tick);
    const tickToSeconds = (tick)=>{
        let seconds = 0;
        let priorTick = 0;
        let micros = 500000;
        for (const tempo of uniqueTempos){
            if (tempo.tick > tick) break;
            seconds += (tempo.tick - priorTick) * micros / division / 1_000_000;
            priorTick = tempo.tick;
            micros = tempo.micros;
        }
        return seconds + (tick - priorTick) * micros / division / 1_000_000;
    };
    const active = new Map();
    const notes = [];
    for (const event of events.sort((a, b)=>a.tick - b.tick || (a.type === 'off' ? -1 : 1))){
        const key = `${event.channel}:${event.note}`;
        if (event.type === 'on') {
            const stack = active.get(key) || [];
            stack.push({
                tick: event.tick,
                velocity: event.velocity
            });
            active.set(key, stack);
        } else {
            const start = active.get(key)?.shift();
            if (start) notes.push({
                midi: event.note,
                start: tickToSeconds(start.tick),
                duration: Math.max(0.03, tickToSeconds(event.tick) - tickToSeconds(start.tick)),
                velocity: start.velocity / 127,
                channel: event.channel
            });
        }
    }
    if (!notes.length) throw new Error('No playable notes were found in this MIDI file.');
    if (notes.length > 25_000) throw new Error('This MIDI contains too many notes to render safely in the browser.');
    const fullDuration = Math.max(...notes.map((note)=>note.start + note.duration)) + 1;
    if (fullDuration > 10 * 60) throw new Error('MIDI files longer than 10 minutes are not supported.');
    const duration = fullDuration;
    const sampleRate = 32000;
    const context = new OfflineAudioContext(1, Math.ceil(duration * sampleRate), sampleRate);
    const master = context.createGain();
    master.gain.value = Math.min(0.8, 2.5 / Math.sqrt(Math.max(1, notes.length / duration)));
    master.connect(context.destination);
    for (const note of notes){
        if (note.start >= duration) continue;
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = note.channel === 9 ? 'square' : note.channel % 3 === 0 ? 'triangle' : 'sine';
        oscillator.frequency.value = 440 * Math.pow(2, (note.midi - 69) / 12);
        const end = Math.min(duration, note.start + note.duration);
        gain.gain.setValueAtTime(0.0001, note.start);
        gain.gain.exponentialRampToValueAtTime(Math.max(0.01, note.velocity * 0.3), note.start + 0.01);
        gain.gain.setValueAtTime(Math.max(0.01, note.velocity * 0.22), Math.max(note.start + 0.01, end - 0.04));
        gain.gain.exponentialRampToValueAtTime(0.0001, end);
        oscillator.connect(gain).connect(master);
        oscillator.start(note.start);
        oscillator.stop(end + 0.01);
    }
    return audioBufferToWav(await context.startRendering());
}
function audioBufferToWav(buffer) {
    const channels = buffer.numberOfChannels;
    const output = new ArrayBuffer(44 + buffer.length * channels * 2);
    const view = new DataView(output);
    const write = (offset, value)=>[
            ...value
        ].forEach((char, index)=>view.setUint8(offset + index, char.charCodeAt(0)));
    write(0, 'RIFF');
    view.setUint32(4, output.byteLength - 8, true);
    write(8, 'WAVE');
    write(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, channels, true);
    view.setUint32(24, buffer.sampleRate, true);
    view.setUint32(28, buffer.sampleRate * channels * 2, true);
    view.setUint16(32, channels * 2, true);
    view.setUint16(34, 16, true);
    write(36, 'data');
    view.setUint32(40, output.byteLength - 44, true);
    let position = 44;
    for(let sample = 0; sample < buffer.length; sample++)for(let channel = 0; channel < channels; channel++){
        const value = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[sample]));
        view.setInt16(position, value < 0 ? value * 0x8000 : value * 0x7fff, true);
        position += 2;
    }
    return new Blob([
        output
    ], {
        type: 'audio/wav'
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/audio-processor/components/SiteNavigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteNavigation",
    ()=>SiteNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SiteNavigation({ accent = 'green' }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const activeClasses = accent === 'orange' ? 'border-[#F27D26]/50 bg-[#F27D26]/15 text-[#FF944D] shadow-sm shadow-[#F27D26]/10' : 'border-[#00FF00]/40 bg-[#00FF00]/10 text-[#00FF00] shadow-sm shadow-[#00FF00]/10';
    const items = [
        {
            href: '/',
            label: 'Audio Editor',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"],
            active: pathname === '/'
        },
        {
            href: '/youtubelink',
            label: 'YouTube Converter',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"],
            active: pathname.startsWith('/youtubelink')
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Main navigation",
        className: "flex items-center rounded-xl border border-white/10 bg-black/25 p-1",
        children: items.map(({ href, label, icon: Icon, active })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                "aria-current": active ? 'page' : undefined,
                className: `flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${active ? activeClasses : 'border-transparent text-zinc-400 hover:bg-white/5 hover:text-white'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/audio-processor/components/SiteNavigation.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/audio-processor/components/SiteNavigation.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                ]
            }, href, true, {
                fileName: "[project]/audio-processor/components/SiteNavigation.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/audio-processor/components/SiteNavigation.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(SiteNavigation, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SiteNavigation;
var _c;
__turbopack_context__.k.register(_c, "SiteNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/audio-processor/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$classes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@ffmpeg/ffmpeg/dist/esm/classes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/@ffmpeg/util/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$wavesurfer$2e$js$2f$dist$2f$wavesurfer$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/wavesurfer.js/dist/wavesurfer.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$wavesurfer$2e$js$2f$dist$2f$plugins$2f$regions$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/wavesurfer.js/dist/plugins/regions.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/components/ui/slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$midi$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/lib/midi-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$SiteNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/audio-processor/components/SiteNavigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/scissors.js [app-client] (ecmascript) <export default as Scissors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fast$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FastForward$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/fast-forward.js [app-client] (ecmascript) <export default as FastForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rewind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rewind$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/rewind.js [app-client] (ecmascript) <export default as Rewind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListPlus$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/list-plus.js [app-client] (ecmascript) <export default as ListPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/audio-processor/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
function App() {
    _s();
    // --- State Management ---
    // FFmpeg Engine State
    const [isFfmpegLoaded, setIsFfmpegLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [engineError, setEngineError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingStep, setLoadingStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("INITIALIZING");
    // File & URL State
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [audioUrl, setAudioUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [processedUrl, setProcessedUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [youtubeUrl, setYoutubeUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isExtractingYoutube, setIsExtractingYoutube] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [youtubeError, setYoutubeError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRenderingMidi, setIsRenderingMidi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMidiSource, setIsMidiSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Playback & Processing State
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [processError, setProcessError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [wsError, setWsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Audio Processing Parameters
    const [lufs, setLufs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-27); // Target Integrated Loudness
    const [lra, setLra] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12); // Loudness Range
    const [tp, setTp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-2); // True Peak
    const [speed, setSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1.0); // Playback Speed Multiplier
    const [fadeIn, setFadeIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // Fade In duration (seconds)
    const [fadeOut, setFadeOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // Fade Out duration (seconds)
    // Region Selection (Cutting)
    const [cutStart, setCutStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cutEnd, setCutEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pieces, setPieces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Output Format
    const [outputFormat, setOutputFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('wav');
    // Playback Time Tracking
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Client-side mount detection (to avoid hydration mismatch)
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            setMounted(true);
        }
    }["App.useEffect"], []);
    // --- Refs ---
    const ffmpegRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // Persist FFmpeg instance across renders
    const waveformRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // Container for WaveSurfer
    const wavesurferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // Persist WaveSurfer instance
    const regionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // Persist Regions plugin instance
    // Initialization Locks (prevent double-loading in React Strict Mode)
    const isLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isLoadingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    /**
   * Initialize FFmpeg.wasm on component mount.
   * This downloads the WebAssembly core and sets up the worker.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const load = {
                "App.useEffect.load": async ()=>{
                    if (isLoadedRef.current || isLoadingRef.current) return;
                    isLoadingRef.current = true;
                    try {
                        // Check for SharedArrayBuffer support (required for multi-threaded FFmpeg)
                        if (("TURBOPACK compile-time value", "object") !== 'undefined' && !window.crossOriginIsolated) {
                            console.warn("SharedArrayBuffer is not available. FFmpeg may fail to load or be extremely slow.");
                        // We don't throw here to allow trying to load, but it's a common cause of hanging
                        }
                        if (!ffmpegRef.current) {
                            ffmpegRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$classes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFmpeg"]();
                        }
                        const ffmpeg = ffmpegRef.current;
                        // Track FFmpeg internal logs
                        ffmpeg.on('log', {
                            "App.useEffect.load": ({ message })=>{
                                console.log("FFmpeg Engine Log:", message);
                            }
                        }["App.useEffect.load"]);
                        // Track processing progress
                        ffmpeg.on('progress', {
                            "App.useEffect.load": ({ progress })=>{
                                setProgress(Math.round(progress * 100));
                            }
                        }["App.useEffect.load"]);
                        setLoadingStep("SETTING UP ENGINE");
                        // Using UMD version of core for better single-threaded compatibility
                        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.10/dist/umd';
                        console.log("FFmpeg: Fetching core JS...");
                        setLoadingStep("FETCHING CORE JS");
                        const coreURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBlobURL"])(`${baseURL}/ffmpeg-core.js`, 'text/javascript');
                        console.log("FFmpeg: Fetching core WASM...");
                        setLoadingStep("FETCHING CORE WASM");
                        const wasmURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBlobURL"])(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm');
                        console.log("FFmpeg: Starting load()...");
                        setLoadingStep("LOADING FFMPEG");
                        // Load the core and wasm files. 
                        // We omit classWorkerURL to let it use the default, 
                        // which is safer for the single-threaded core.
                        await ffmpeg.load({
                            coreURL,
                            wasmURL
                        });
                        console.log("FFmpeg: Load complete!");
                        setLoadingStep("READY");
                        setIsFfmpegLoaded(true);
                        isLoadedRef.current = true;
                    } catch (err) {
                        console.error("FFmpeg load error:", err);
                        setEngineError(err.message || "Failed to load FFmpeg");
                    } finally{
                        isLoadingRef.current = false;
                    }
                }
            }["App.useEffect.load"];
            load();
        }
    }["App.useEffect"], []);
    /**
   * Initialize WaveSurfer.js when an audio file is loaded.
   * Sets up the waveform visualization and region selection plugin.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (audioUrl && waveformRef.current) {
                try {
                    setWsError(null);
                    // Clean up previous instance if it exists
                    if (wavesurferRef.current) {
                        wavesurferRef.current.destroy();
                    }
                    // Create new WaveSurfer instance
                    const ws = __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$wavesurfer$2e$js$2f$dist$2f$wavesurfer$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
                        container: waveformRef.current,
                        waveColor: '#4a4a4a',
                        progressColor: '#00FF00',
                        cursorColor: '#00FF00',
                        barWidth: 2,
                        barGap: 1,
                        barRadius: 2,
                        height: 100
                    });
                    // Register Regions plugin for audio cutting
                    const wsRegions = ws.registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$wavesurfer$2e$js$2f$dist$2f$plugins$2f$regions$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create());
                    regionsRef.current = wsRegions;
                    ws.load(audioUrl);
                    // Set up initial region covering the entire audio file
                    ws.on('ready', {
                        "App.useEffect": ()=>{
                            const dur = ws.getDuration();
                            setDuration(dur);
                            setCurrentTime(0);
                            wsRegions.addRegion({
                                start: 0,
                                end: dur,
                                color: 'rgba(0, 255, 0, 0.1)',
                                drag: true,
                                resize: true
                            });
                            setCutStart(0);
                            setCutEnd(dur);
                        }
                    }["App.useEffect"]);
                    // Update cut boundaries when region is dragged/resized
                    wsRegions.on('region-updated', {
                        "App.useEffect": (region)=>{
                            setCutStart(region.start);
                            setCutEnd(region.end);
                        }
                    }["App.useEffect"]);
                    // Track playback time
                    ws.on('timeupdate', {
                        "App.useEffect": (time)=>{
                            setCurrentTime(time);
                        }
                    }["App.useEffect"]);
                    // Track play/pause state
                    ws.on('play', {
                        "App.useEffect": ()=>setIsPlaying(true)
                    }["App.useEffect"]);
                    ws.on('pause', {
                        "App.useEffect": ()=>setIsPlaying(false)
                    }["App.useEffect"]);
                    ws.on('error', {
                        "App.useEffect": (err)=>{
                            console.error("WaveSurfer error event:", err);
                            setWsError(err.message || "Error loading audio in WaveSurfer");
                        }
                    }["App.useEffect"]);
                    wavesurferRef.current = ws;
                } catch (err) {
                    console.error("WaveSurfer init error:", err);
                    setWsError(err.message || "Failed to initialize WaveSurfer");
                }
            }
        }
    }["App.useEffect"], [
        audioUrl
    ]);
    /**
   * Handle user file selection
   */ const loadAudioFile = (nextFile, fromMidi = false)=>{
        setFile(nextFile);
        setIsMidiSource(fromMidi);
        setAudioUrl(URL.createObjectURL(nextFile));
        setProcessedUrl(null);
        setPieces([]);
    };
    const handleFileUpload = async (e)=>{
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            const isMidi = /\.(?:mid|midi)$/i.test(selectedFile.name) || selectedFile.type === 'audio/midi';
            if (!isMidi) return loadAudioFile(selectedFile);
            setIsRenderingMidi(true);
            setProcessError(null);
            try {
                const wav = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$lib$2f$midi$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderMidiToWav"])(selectedFile);
                const baseName = selectedFile.name.replace(/\.(?:mid|midi)$/i, '');
                loadAudioFile(new File([
                    wav
                ], `${baseName}.wav`, {
                    type: 'audio/wav'
                }), true);
                setOutputFormat('mp3');
            } catch (error) {
                setProcessError(error instanceof Error ? error.message : 'Unable to render this MIDI file.');
            } finally{
                setIsRenderingMidi(false);
                e.target.value = '';
            }
        }
    };
    const importFromYoutube = async ()=>{
        if (!youtubeUrl.trim() || isExtractingYoutube) return;
        setIsExtractingYoutube(true);
        setYoutubeError(null);
        try {
            const response = await fetch('/api/youtube/extract', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    url: youtubeUrl
                })
            });
            if (!response.ok) {
                const data = await response.json().catch(()=>({}));
                throw new Error(data.error || 'YouTube extraction failed.');
            }
            const titleHeader = response.headers.get('X-Video-Title');
            const title = titleHeader ? decodeURIComponent(titleHeader) : 'youtube-audio';
            const extension = response.headers.get('X-Audio-Extension') || 'webm';
            const blob = await response.blob();
            const importedFile = new File([
                blob
            ], `${title.replace(/[<>:"/\\|?*]/g, '').slice(0, 120)}.${extension}`, {
                type: blob.type
            });
            loadAudioFile(importedFile);
        } catch (error) {
            setYoutubeError(error instanceof Error ? error.message : 'Unable to import this video.');
        } finally{
            setIsExtractingYoutube(false);
        }
    };
    const addSelectedPiece = ()=>{
        if (cutStart === null || cutEnd === null || cutEnd <= cutStart) return;
        setPieces((current)=>[
                ...current,
                {
                    id: crypto.randomUUID(),
                    start: cutStart,
                    end: cutEnd
                }
            ]);
        setProcessedUrl(null);
    };
    const movePiece = (index, direction)=>{
        setPieces((current)=>{
            const target = index + direction;
            if (target < 0 || target >= current.length) return current;
            const next = [
                ...current
            ];
            [next[index], next[target]] = [
                next[target],
                next[index]
            ];
            return next;
        });
        setProcessedUrl(null);
    };
    const removePiece = (id)=>{
        setPieces((current)=>current.filter((piece)=>piece.id !== id));
        setProcessedUrl(null);
    };
    // --- Playback Controls ---
    const togglePlay = ()=>{
        if (wavesurferRef.current) {
            wavesurferRef.current.playPause();
        }
    };
    const skipBackward = ()=>{
        if (wavesurferRef.current) {
            wavesurferRef.current.skip(-5);
        }
    };
    const skipForward = ()=>{
        if (wavesurferRef.current) {
            wavesurferRef.current.skip(5);
        }
    };
    /**
   * Main Audio Processing Logic
   * Constructs and executes the FFmpeg command based on user parameters.
   */ const processAudio = async ()=>{
        if (!file || !isFfmpegLoaded || !ffmpegRef.current) return;
        setIsProcessing(true);
        setProgress(0);
        setProcessError(null);
        try {
            const ffmpeg = ffmpegRef.current;
            const ext = file.name.split('.').pop() || 'wav';
            const inputName = `input.${ext}`;
            const outputName = `output.${outputFormat}`;
            // Write the input file to FFmpeg's virtual file system
            await ffmpeg.writeFile(inputName, await (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchFile"])(file));
            const args = [
                '-i',
                inputName
            ];
            const filters = [];
            // 2. Playback Speed (atempo)
            const safeSpeed = typeof speed === 'number' ? speed : 1.0;
            if (safeSpeed !== 1.0) {
                filters.push(`atempo=${safeSpeed}`);
            }
            // 3. Loudness Normalization (loudnorm)
            // EBU R128 standard normalization
            const safeLufs = typeof lufs === 'number' ? lufs : -27;
            const safeLra = typeof lra === 'number' ? lra : 12;
            const safeTp = typeof tp === 'number' ? tp : -2;
            // MIDI has already been rendered with controlled gain. Running loudnorm
            // over a synthesized WAV makes browser MP3 encoding unnecessarily slow.
            if (!isMidiSource) filters.push(`loudnorm=I=${safeLufs}:LRA=${safeLra}:TP=${safeTp}`);
            // 4. Fades (afade)
            // Calculate final duration to accurately place the fade-out
            const selectedPieces = pieces.length > 0 ? pieces : typeof cutStart === 'number' && typeof cutEnd === 'number' ? [
                {
                    id: 'selection',
                    start: cutStart,
                    end: cutEnd
                }
            ] : [
                {
                    id: 'full',
                    start: 0,
                    end: duration
                }
            ];
            const baseDuration = selectedPieces.reduce((total, piece)=>total + (piece.end - piece.start), 0);
            const finalDuration = baseDuration / safeSpeed;
            if (fadeIn > 0) {
                filters.push(`afade=t=in:ss=0:d=${fadeIn}`);
            }
            if (fadeOut > 0) {
                const fadeOutStart = Math.max(0, finalDuration - fadeOut);
                filters.push(`afade=t=out:st=${fadeOutStart}:d=${fadeOut}`);
            }
            // First trim each requested piece from the original input, then stitch the
            // ordered pieces into one stream. Existing manipulations run afterwards.
            const trimFilters = selectedPieces.map((piece, index)=>`[0:a]atrim=start=${piece.start}:end=${piece.end},asetpts=PTS-STARTPTS[p${index}]`);
            const pieceInputs = selectedPieces.map((_, index)=>`[p${index}]`).join('');
            const concatFilter = `${pieceInputs}concat=n=${selectedPieces.length}:v=0:a=1[stitched]`;
            const manipulationFilter = `[stitched]${filters.length ? filters.join(',') : 'anull'}[processed]`;
            args.push('-filter_complex', [
                ...trimFilters,
                concatFilter,
                manipulationFilter
            ].join(';'), '-map', '[processed]');
            // 5. Encoding Options
            if (outputFormat === 'mp3') {
                args.push('-c:a', 'libmp3lame', '-b:a', '320k'); // High quality MP3
            }
            args.push(outputName);
            // Execute FFmpeg command
            await ffmpeg.exec(args);
            // Read the output file from the virtual file system
            const data = await ffmpeg.readFile(outputName);
            const mimeType = outputFormat === 'mp3' ? 'audio/mpeg' : 'audio/wav';
            // Ensure the buffer is a standard ArrayBuffer for Blob compatibility
            const safeData = typeof data === 'string' ? new Uint8Array([
                ...data
            ].map((c)=>c.charCodeAt(0))) : new Uint8Array(data);
            const blob = new Blob([
                safeData
            ], {
                type: mimeType
            });
            const url = URL.createObjectURL(blob);
            setProcessedUrl(url);
        } catch (error) {
            console.error('Error processing audio:', error);
            setProcessError(error.message || "An error occurred during processing");
        } finally{
            setIsProcessing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#151619] text-white p-8 font-sans",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex flex-wrap items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold tracking-tight",
                                    children: "Audio Processor"
                                }, void 0, false, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 439,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-zinc-400 font-mono text-sm mt-1",
                                    children: "Loudness Normalization & Editing"
                                }, void 0, false, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 440,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/audio-processor/app/page.tsx",
                            lineNumber: 438,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$SiteNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteNavigation"], {}, void 0, false, {
                            fileName: "[project]/audio-processor/app/page.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this),
                        !isFfmpegLoaded && !engineError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center text-zinc-400 font-mono text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-4 h-4 mr-2 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this),
                                loadingStep,
                                "...",
                                loadingStep === "LOADING FFMPEG" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-1 opacity-50 hidden sm:inline",
                                    children: "(Check console if stuck)"
                                }, void 0, false, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 449,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/audio-processor/app/page.tsx",
                            lineNumber: 445,
                            columnNumber: 13
                        }, this),
                        engineError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-end text-red-400 font-mono text-xs max-w-xs text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold",
                                    children: "ENGINE ERROR:"
                                }, void 0, false, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 455,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: engineError
                                }, void 0, false, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 456,
                                    columnNumber: 15
                                }, this),
                                mounted && !window.crossOriginIsolated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] mt-1 opacity-80",
                                    children: "SharedArrayBuffer not enabled. Check COOP/COEP headers."
                                }, void 0, false, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 458,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/audio-processor/app/page.tsx",
                            lineNumber: 454,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/audio-processor/app/page.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "bg-[#1C1D21] border-zinc-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-6 space-y-6",
                        children: !file ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-zinc-700 bg-black/20 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 flex items-center gap-2 text-sm font-medium text-zinc-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                                    className: "h-5 w-5 text-red-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 21
                                                }, this),
                                                "Import audio from YouTube"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 472,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3 sm:flex-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "url",
                                                    value: youtubeUrl,
                                                    onChange: (event)=>setYoutubeUrl(event.target.value),
                                                    onKeyDown: (event)=>event.key === 'Enter' && importFromYoutube(),
                                                    placeholder: "Paste a YouTube, Shorts, or Music URL",
                                                    disabled: isExtractingYoutube,
                                                    className: "h-10 flex-1 rounded-md border border-zinc-700 bg-[#151619] px-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-zinc-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: importFromYoutube,
                                                    disabled: !youtubeUrl.trim() || isExtractingYoutube,
                                                    children: [
                                                        isExtractingYoutube ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "mr-2 h-4 w-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 46
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                            className: "mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 98
                                                        }, this),
                                                        isExtractingYoutube ? 'Extracting…' : 'Import audio'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 19
                                        }, this),
                                        youtubeError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-xs text-red-400",
                                            children: youtubeError
                                        }, void 0, false, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 491,
                                            columnNumber: 36
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-xs text-zinc-500",
                                            children: "Only download content you own or have permission to use."
                                        }, void 0, false, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 492,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 471,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 text-xs uppercase tracking-widest text-zinc-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-px flex-1 bg-zinc-800"
                                        }, void 0, false, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 496,
                                            columnNumber: 19
                                        }, this),
                                        "or upload a file",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-px flex-1 bg-zinc-800"
                                        }, void 0, false, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 496,
                                            columnNumber: 79
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 495,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-2 border-dashed border-zinc-700 rounded-lg p-12 text-center hover:border-zinc-500 transition-colors cursor-pointer relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: "audio/*,.mid,.midi,audio/midi,audio/x-midi",
                                            onChange: handleFileUpload,
                                            disabled: isRenderingMidi,
                                            className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 500,
                                            columnNumber: 19
                                        }, this),
                                        isRenderingMidi ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-12 h-12 mx-auto text-zinc-500 mb-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 507,
                                            columnNumber: 38
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                            className: "w-12 h-12 mx-auto text-zinc-500 mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 507,
                                            columnNumber: 114
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-zinc-300 font-medium",
                                            children: isRenderingMidi ? 'Rendering MIDI instruments…' : 'Drop audio or MIDI here, or click to browse'
                                        }, void 0, false, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 508,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-zinc-500 text-sm mt-2",
                                            children: "Supports WAV, MP3, AAC, FLAC, MID, MIDI"
                                        }, void 0, false, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 509,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 499,
                                    columnNumber: 17
                                }, this),
                                processError && !file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-red-400",
                                    children: processError
                                }, void 0, false, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 511,
                                    columnNumber: 43
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/audio-processor/app/page.tsx",
                            lineNumber: 470,
                            columnNumber: 15
                        }, this) : // Active Audio Player
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-mono text-sm text-zinc-400 truncate max-w-[300px]",
                                            children: file.name
                                        }, void 0, false, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 517,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: ()=>{
                                                setFile(null);
                                                setIsMidiSource(false);
                                                setAudioUrl(null);
                                                setProcessedUrl(null);
                                                setPieces([]);
                                            },
                                            children: "Change File"
                                        }, void 0, false, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 520,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 516,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-black/50 rounded-lg p-4",
                                    children: [
                                        wsError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-red-400 font-mono text-xs mb-4 p-2 bg-red-400/10 rounded",
                                            children: [
                                                "WAVESURFER ERROR: ",
                                                wsError
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 533,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: waveformRef,
                                            className: "w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 538,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            onClick: skipBackward,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rewind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rewind$3e$__["Rewind"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/audio-processor/app/page.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 543,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            onClick: togglePlay,
                                                            children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/audio-processor/app/page.tsx",
                                                                lineNumber: 547,
                                                                columnNumber: 38
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/audio-processor/app/page.tsx",
                                                                lineNumber: 547,
                                                                columnNumber: 70
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 546,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            onClick: skipForward,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fast$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FastForward$3e$__["FastForward"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/audio-processor/app/page.tsx",
                                                                lineNumber: 550,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-xs text-zinc-400 ml-2",
                                                            children: [
                                                                currentTime.toFixed(2),
                                                                "s / ",
                                                                duration.toFixed(2),
                                                                "s"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 552,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-mono text-xs text-zinc-500",
                                                    children: typeof cutStart === 'number' && typeof cutEnd === 'number' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "REGION: ",
                                                            cutStart.toFixed(2),
                                                            "s - ",
                                                            cutEnd.toFixed(2),
                                                            "s"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/audio-processor/app/page.tsx",
                                                        lineNumber: 558,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 556,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 541,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 531,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-zinc-800 bg-black/20 p-4 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-zinc-200",
                                                            children: "Stitch pieces"
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 567,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-zinc-500 mt-1",
                                                            children: "Adjust the green region, then add each piece in playback order."
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 568,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 566,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: addSelectedPiece,
                                                    disabled: cutStart === null || cutEnd === null || cutEnd <= cutStart,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListPlus$3e$__["ListPlus"], {
                                                            className: "w-4 h-4 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 571,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Add selected piece"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 565,
                                            columnNumber: 19
                                        }, this),
                                        pieces.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                pieces.map((piece, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-7 text-xs font-mono text-zinc-500",
                                                                children: [
                                                                    index + 1,
                                                                    "."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/audio-processor/app/page.tsx",
                                                                lineNumber: 580,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex-1 font-mono text-xs text-zinc-300",
                                                                children: [
                                                                    piece.start.toFixed(2),
                                                                    "s – ",
                                                                    piece.end.toFixed(2),
                                                                    "s",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-2 text-zinc-600",
                                                                        children: [
                                                                            "(",
                                                                            (piece.end - piece.start).toFixed(2),
                                                                            "s)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/audio-processor/app/page.tsx",
                                                                        lineNumber: 583,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/audio-processor/app/page.tsx",
                                                                lineNumber: 581,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "ghost",
                                                                size: "icon",
                                                                onClick: ()=>movePiece(index, -1),
                                                                disabled: index === 0,
                                                                "aria-label": "Move piece up",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                                    lineNumber: 586,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/audio-processor/app/page.tsx",
                                                                lineNumber: 585,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "ghost",
                                                                size: "icon",
                                                                onClick: ()=>movePiece(index, 1),
                                                                disabled: index === pieces.length - 1,
                                                                "aria-label": "Move piece down",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                                    lineNumber: 589,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/audio-processor/app/page.tsx",
                                                                lineNumber: 588,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "ghost",
                                                                size: "icon",
                                                                onClick: ()=>removePiece(piece.id),
                                                                "aria-label": "Remove piece",
                                                                className: "text-red-400 hover:text-red-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                                    lineNumber: 592,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/audio-processor/app/page.tsx",
                                                                lineNumber: 591,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, piece.id, true, {
                                                        fileName: "[project]/audio-processor/app/page.tsx",
                                                        lineNumber: 579,
                                                        columnNumber: 25
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between pt-1 text-xs font-mono text-zinc-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                pieces.length,
                                                                " ",
                                                                pieces.length === 1 ? 'piece' : 'pieces'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 597,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Total: ",
                                                                pieces.reduce((total, piece)=>total + piece.end - piece.start, 0).toFixed(2),
                                                                "s"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 598,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 596,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 577,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-mono text-zinc-600",
                                            children: "No stitch list yet. Processing will use the current green region as before."
                                        }, void 0, false, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 602,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 564,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/audio-processor/app/page.tsx",
                            lineNumber: 515,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/audio-processor/app/page.tsx",
                        lineNumber: 468,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/audio-processor/app/page.tsx",
                    lineNumber: 467,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-[#1C1D21] border-zinc-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-lg flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                                className: "w-5 h-5 mr-2 text-zinc-400"
                                            }, void 0, false, {
                                                fileName: "[project]/audio-processor/app/page.tsx",
                                                lineNumber: 616,
                                                columnNumber: 17
                                            }, this),
                                            "Loudness Targets"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/audio-processor/app/page.tsx",
                                        lineNumber: 615,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 614,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "text-zinc-300",
                                                            children: "Integrated Loudness (LUFS)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-xs text-zinc-400",
                                                            children: typeof lufs === 'number' ? lufs : -27
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 624,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 622,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                    value: [
                                                        typeof lufs === 'number' ? lufs : -27
                                                    ],
                                                    min: -70,
                                                    max: -5,
                                                    step: 1,
                                                    onValueChange: (v)=>setLufs(Array.isArray(v) ? v[0] : v)
                                                }, void 0, false, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 621,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "text-zinc-300",
                                                            children: "Loudness Range (LRA)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 637,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-xs text-zinc-400",
                                                            children: typeof lra === 'number' ? lra : 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 638,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 636,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                    value: [
                                                        typeof lra === 'number' ? lra : 12
                                                    ],
                                                    min: 1,
                                                    max: 20,
                                                    step: 1,
                                                    onValueChange: (v)=>setLra(Array.isArray(v) ? v[0] : v)
                                                }, void 0, false, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 635,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "text-zinc-300",
                                                            children: "True Peak (dBTP)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 651,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-xs text-zinc-400",
                                                            children: typeof tp === 'number' ? tp : -2
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 652,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                    value: [
                                                        typeof tp === 'number' ? tp : -2
                                                    ],
                                                    min: -9,
                                                    max: 0,
                                                    step: 0.1,
                                                    onValueChange: (v)=>setTp(Array.isArray(v) ? v[0] : v)
                                                }, void 0, false, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 654,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 620,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/audio-processor/app/page.tsx",
                            lineNumber: 613,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-[#1C1D21] border-zinc-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-lg flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"], {
                                                className: "w-5 h-5 mr-2 text-zinc-400"
                                            }, void 0, false, {
                                                fileName: "[project]/audio-processor/app/page.tsx",
                                                lineNumber: 669,
                                                columnNumber: 17
                                            }, this),
                                            "Time, Speed & Fades"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/audio-processor/app/page.tsx",
                                        lineNumber: 668,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 667,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "text-zinc-300",
                                                            children: "Playback Speed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 676,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-xs text-zinc-400",
                                                            children: [
                                                                typeof speed === 'number' ? speed.toFixed(2) : '1.00',
                                                                "x"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 677,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                    value: [
                                                        typeof speed === 'number' ? speed : 1.0
                                                    ],
                                                    min: 0.7,
                                                    max: 1.3,
                                                    step: 0.01,
                                                    onValueChange: (v)=>setSpeed(Array.isArray(v) ? v[0] : v)
                                                }, void 0, false, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 679,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-zinc-500 font-mono",
                                                    children: "Range: ±30%"
                                                }, void 0, false, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 686,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 674,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "text-zinc-300",
                                                            children: "Fade In"
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 691,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-xs text-zinc-400",
                                                            children: [
                                                                fadeIn.toFixed(1),
                                                                "s"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 692,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                    value: [
                                                        fadeIn
                                                    ],
                                                    min: 0,
                                                    max: 10,
                                                    step: 0.1,
                                                    onValueChange: (v)=>setFadeIn(Array.isArray(v) ? v[0] : v)
                                                }, void 0, false, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 694,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 689,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "text-zinc-300",
                                                            children: "Fade Out"
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 705,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-xs text-zinc-400",
                                                            children: [
                                                                fadeOut.toFixed(1),
                                                                "s"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 706,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 704,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                    value: [
                                                        fadeOut
                                                    ],
                                                    min: 0,
                                                    max: 10,
                                                    step: 0.1,
                                                    onValueChange: (v)=>setFadeOut(Array.isArray(v) ? v[0] : v)
                                                }, void 0, false, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 708,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 703,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-8 space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between pb-4 border-b border-zinc-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "text-zinc-300",
                                                            children: "Output Format"
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 720,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: outputFormat === 'wav' ? 'default' : 'outline',
                                                                    size: "sm",
                                                                    onClick: ()=>setOutputFormat('wav'),
                                                                    className: outputFormat === 'wav' ? 'bg-[#00FF00] text-black hover:bg-[#00CC00]' : '',
                                                                    children: "WAV"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                                    lineNumber: 722,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: outputFormat === 'mp3' ? 'default' : 'outline',
                                                                    size: "sm",
                                                                    onClick: ()=>setOutputFormat('mp3'),
                                                                    className: outputFormat === 'mp3' ? 'bg-[#00FF00] text-black hover:bg-[#00CC00]' : '',
                                                                    children: "MP3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                                    lineNumber: 730,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 721,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 719,
                                                    columnNumber: 17
                                                }, this),
                                                processError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-red-400 font-mono text-xs p-2 bg-red-400/10 rounded",
                                                    children: [
                                                        "PROCESSING ERROR: ",
                                                        processError
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 742,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    className: "w-full bg-[#00FF00] text-black hover:bg-[#00CC00] font-bold",
                                                    disabled: !file || !isFfmpegLoaded || isProcessing,
                                                    onClick: processAudio,
                                                    children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "w-5 h-5 mr-2 animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/audio-processor/app/page.tsx",
                                                                lineNumber: 753,
                                                                columnNumber: 23
                                                            }, this),
                                                            "PROCESSING ",
                                                            progress,
                                                            "%"
                                                        ]
                                                    }, void 0, true) : 'PROCESS AUDIO'
                                                }, void 0, false, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 746,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 718,
                                            columnNumber: 15
                                        }, this),
                                        processedUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-4 space-y-4 border-t border-zinc-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            className: "text-zinc-300",
                                                            children: "Output Ready"
                                                        }, void 0, false, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 766,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: processedUrl,
                                                            download: `processed_audio.${outputFormat}`,
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                                                variant: "outline",
                                                                size: "sm"
                                                            }),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                    className: "w-4 h-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                                    lineNumber: 772,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Download ",
                                                                outputFormat.toUpperCase()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/audio-processor/app/page.tsx",
                                                            lineNumber: 767,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 765,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$audio$2d$processor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                    controls: true,
                                                    src: processedUrl,
                                                    className: "w-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/audio-processor/app/page.tsx",
                                                    lineNumber: 776,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/audio-processor/app/page.tsx",
                                            lineNumber: 764,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/audio-processor/app/page.tsx",
                                    lineNumber: 673,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/audio-processor/app/page.tsx",
                            lineNumber: 666,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/audio-processor/app/page.tsx",
                    lineNumber: 611,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/audio-processor/app/page.tsx",
            lineNumber: 435,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/audio-processor/app/page.tsx",
        lineNumber: 434,
        columnNumber: 5
    }, this);
}
_s(App, "fpcw5a5YMai34t3x0qEhvJ1YrpU=");
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=audio-processor_0fku7__._.js.map