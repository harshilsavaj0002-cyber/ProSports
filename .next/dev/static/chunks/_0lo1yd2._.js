(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
// import Link from 'next/link';
// import { Search, Menu } from 'lucide-react';
// export function Header() {
//   return (
//     <header className="sticky top-0 z-50 bg-background border-b border-border">
//       <div className="max-w-7xl mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           <Link href="/" className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
//               <span className="text-primary-foreground font-bold text-lg">⚡</span>
//             </div>
//             <span className="text-xl font-bold text-foreground hidden sm:inline">ProSports</span>
//           </Link>
//         <nav className="hidden md:flex gap-8">
//   <Link href="/">Home</Link>
//   <Link href="/blog">Blog</Link>
//   <Link href="/news">News</Link>
//   <Link href="/stories">Stories</Link>
//   <Link href="/match-analysis">Analysis</Link>
//   <Link href="/categories">Categories</Link>
//   <Link href="/authors">Authors</Link>
//   <Link href="/archive">Archive</Link>
//   <Link href="/about">About</Link>
//   <Link href="/contact">Contact</Link>
// </nav>
//           <div className="flex items-center gap-4">
//             <button className="p-2 hover:bg-card rounded-lg transition hidden sm:block">
//               <Search className="w-5 h-5 text-foreground" />
//             </button>
//             <button className="md:hidden p-2 hover:bg-card rounded-lg transition">
//               <Menu className="w-5 h-5 text-foreground" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
"use client";
;
;
;
function Header() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Blog",
            href: "/blog"
        },
        {
            name: "News",
            href: "/news"
        },
        {
            name: "Stories",
            href: "/stories"
        },
        {
            name: "Analysis",
            href: "/match-analysis"
        },
        {
            name: "Categories",
            href: "/categories"
        },
        {
            name: "Authors",
            href: "/authors"
        },
        {
            name: "Archive",
            href: "/archive"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Contact",
            href: "/contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-background border-b border-border shadow-sm relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-9 h-9 rounded bg-red-600 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold text-lg",
                                        children: "⚡"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:block text-xl font-bold",
                                    children: "ProSports"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden xl:flex items-center gap-6",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "font-medium hover:text-blue-600 transition",
                                    children: item.name
                                }, item.name, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "hidden sm:flex p-2 rounded hover:bg-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "xl:hidden p-2 rounded hover:bg-gray-100",
                                    onClick: ()=>setIsOpen(!isOpen),
                                    children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/header.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "xl:hidden bg-background border-t border-border shadow-lg absolute top-full left-0 w-full z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-col",
                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            onClick: ()=>setIsOpen(false),
                            className: "px-5 py-4 border-b hover:bg-gray-100",
                            children: item.name
                        }, item.name, false, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 126,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/header.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/header.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(Header, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// export function Footer() {
//   return (
//     <footer className="bg-card border-t border-border">
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
//                 <span className="text-primary-foreground font-bold">⚡</span>
//               </div>
//               <span className="text-lg font-bold">ProSports</span>
//             </div>
//             <p className="text-muted-foreground text-sm">
//               Your go-to source for breaking sports news and in-depth analysis.
//             </p>
//           </div>
//           <div>
//             <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
//             <ul className="space-y-2 text-muted-foreground text-sm">
//               <li><a href="/" className="hover:text-primary transition">Home</a></li>
//               <li><a href="/news" className="hover:text-primary transition">News</a></li>
//               <li><a href="/stories" className="hover:text-primary transition">Stories</a></li>
//               <li><a href="/about" className="hover:text-primary transition">About</a></li>
//               <li><a href="/players" className="hover:text-primary transition">Players</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold mb-4 text-foreground">Resources</h4>
//             <ul className="space-y-2 text-muted-foreground text-sm">
//               <li><a href="/match-analysis" className="hover:text-primary transition">Match Analysis</a></li>
//               <li><a href="/tournaments" className="hover:text-primary transition">Tournaments</a></li>
//               <li><a href="/contact" className="hover:text-primary transition">Contact</a></li>
//               <li><a href="/privacy" className="hover:text-primary transition">Privacy</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold mb-4 text-foreground">Newsletter</h4>
//             <p className="text-muted-foreground text-sm mb-3">
//               Get the latest sports updates delivered to your inbox.
//             </p>
//             <form className="flex flex-col gap-2">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="px-3 py-2 bg-background text-foreground rounded text-sm border border-border focus:outline-none focus:border-primary transition"
//               />
//               <button
//                 type="submit"
//                 className="px-3 py-2 bg-primary text-primary-foreground rounded text-sm font-semibold hover:bg-primary/90 transition"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//         <div className="border-t border-border pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-muted-foreground text-sm">
//               © 2025 ProSports Blog. All rights reserved.
//             </p>
//             <div className="flex gap-6 text-sm flex-wrap">
//               <a href="/privacy" className="text-muted-foreground hover:text-primary transition">Privacy</a>
//               <a href="/terms" className="text-muted-foreground hover:text-primary transition">Terms</a>
//               <a href="/disclaimer" className="text-muted-foreground hover:text-primary transition">Disclaimer</a>
//               <a href="/cookies" className="text-muted-foreground hover:text-primary transition">Cookies</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-card border-t border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-primary rounded flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-primary-foreground font-bold",
                                                children: "⚡"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-bold",
                                            children: "ProSports"
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-sm",
                                    children: "Your trusted source for sports news, match analysis, player stories, and tournament updates."
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold mb-4",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blog",
                                                children: "Blog"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/news",
                                                children: "News"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/stories",
                                                children: "Stories"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/match-analysis",
                                                children: "Analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/players",
                                                children: "Players"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold mb-4",
                                    children: "Resources"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/categories",
                                                children: "Categories"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/authors",
                                                children: "Authors"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/archive",
                                                children: "Archive"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/tournaments",
                                                children: "Tournaments"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/sitemap",
                                                children: "Sitemap"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold mb-4",
                                    children: "Policies"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/privacy",
                                                children: "Privacy Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/terms",
                                                children: "Terms & Conditions"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/cookies",
                                                children: "Cookie Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/disclaimer",
                                                children: "Disclaimer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/editorial-policy",
                                                children: "Editorial Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/fact-checking-policy",
                                                children: "Fact Check Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/corrections-policy",
                                                children: "Corrections Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/our-mission",
                                                children: "Our Mission"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: "© 2025 ProSports. All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 text-sm mt-4 md:mt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/privacy",
                                    children: "Privacy"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/terms",
                                    children: "Terms"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/disclaimer",
                                    children: "Disclaimer"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/cookies",
                                    children: "Cookies"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/footer.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { Article } from '@/lib/articles';
// import Link from 'next/link';
// interface HeroProps {
//   article: Article;
// }
// export function Hero({ article }: HeroProps) {
//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `linear-gradient(135deg, #ff6b35 0%, #004e89 50%, #1a1a1a 100%)`,
//           backgroundAttachment: 'fixed'
//         }}
//       >
//         <div className="absolute inset-0 bg-black/40" />
//       </div>
//       <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
//         <div className="mb-6">
//           <span className="inline-block bg-primary/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
//             Featured Story
//           </span>
//         </div>
//         <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
//           {article.title}
//         </h1>
//         <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto text-balance">
//           {article.excerpt}
//         </p>
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
//           <Link 
//             href={`/article/${article.id}`}
//             className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded font-bold transition-all duration-200 transform hover:scale-105"
//           >
//             Read Full Story
//           </Link>
//           <div className="flex items-center gap-4 text-gray-300">
//             <span>{article.author}</span>
//             <span>•</span>
//             <span>{article.date}</span>
//           </div>
//         </div>
//         <div className="flex justify-center animate-bounce">
//           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// }
__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
function Hero({ article }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full h-screen flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: article.image,
                        alt: article.title,
                        fill: true,
                        priority: true,
                        className: "object-cover object-center",
                        sizes: "100vw"
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/55"
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-4xl mx-auto px-4 text-center text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block bg-primary/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider",
                            children: article.category
                        }, void 0, false, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance drop-shadow-lg",
                        children: article.title
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto text-balance drop-shadow",
                        children: article.excerpt
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/article/${article.id}`,
                                className: "bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded font-bold transition-all duration-200 transform hover:scale-105 shadow-lg",
                                children: "Read Full Story"
                            }, void 0, false, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 text-gray-300 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: article.author
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: article.date
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            article.readTime,
                                            " min read"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center animate-bounce",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6 text-white/70",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                            }, void 0, false, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-6 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-white/60 uppercase tracking-widest font-semibold",
                    children: "Featured Story"
                }, void 0, false, {
                    fileName: "[project]/components/hero.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 right-6 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-white/60 uppercase tracking-widest font-semibold",
                    children: [
                        article.readTime,
                        " min read"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/hero.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/article-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleCard",
    ()=>ArticleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
;
function ArticleCard({ article, featured = false }) {
    if (featured) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/article/${article.id}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "group relative bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-96",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: article.image,
                                alt: article.title,
                                fill: true,
                                className: "object-cover",
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/components/article-card.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/50"
                            }, void 0, false, {
                                fileName: "[project]/components/article-card.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/article-card.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex flex-col justify-end p-6 z-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-semibold",
                                    children: article.category
                                }, void 0, false, {
                                    fileName: "[project]/components/article-card.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/article-card.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition",
                                children: article.title
                            }, void 0, false, {
                                fileName: "[project]/components/article-card.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-4",
                                children: article.excerpt
                            }, void 0, false, {
                                fileName: "[project]/components/article-card.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 text-sm text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: article.author
                                    }, void 0, false, {
                                        fileName: "[project]/components/article-card.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/components/article-card.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: article.date
                                    }, void 0, false, {
                                        fileName: "[project]/components/article-card.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/article-card.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/article-card.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/article-card.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/article-card.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/article/${article.id}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "group bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-48",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: article.image,
                        alt: article.title,
                        fill: true,
                        className: "object-cover",
                        unoptimized: true
                    }, void 0, false, {
                        fileName: "[project]/components/article-card.tsx",
                        lineNumber: 51,
                        columnNumber: 3
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/article-card.tsx",
                    lineNumber: 50,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 flex-1 flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary font-semibold text-sm uppercase tracking-wide",
                                    children: article.category
                                }, void 0, false, {
                                    fileName: "[project]/components/article-card.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 text-muted-foreground text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/article-card.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                article.readTime,
                                                " min"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/article-card.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/article-card.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/article-card.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-foreground mb-2 group-hover:text-primary transition line-clamp-2",
                            children: article.title
                        }, void 0, false, {
                            fileName: "[project]/components/article-card.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-sm mb-4 flex-1 line-clamp-2",
                            children: article.excerpt
                        }, void 0, false, {
                            fileName: "[project]/components/article-card.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pt-4 border-t border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: article.date
                                }, void 0, false, {
                                    fileName: "[project]/components/article-card.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4 text-primary group-hover:translate-x-1 transition"
                                }, void 0, false, {
                                    fileName: "[project]/components/article-card.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/article-card.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/article-card.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/article-card.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/article-card.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c = ArticleCard;
var _c;
__turbopack_context__.k.register(_c, "ArticleCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/articles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "articles",
    ()=>articles,
    "categories",
    ()=>categories,
    "getAllArticles",
    ()=>getAllArticles,
    "getArticleById",
    ()=>getArticleById,
    "getArticlesByCategory",
    ()=>getArticlesByCategory,
    "getFeaturedArticles",
    ()=>getFeaturedArticles
]);
const articles = [
    {
        id: '1',
        title: 'How Basketball Scoring Works: Points, Fouls and the Shot Clock',
        excerpt: 'New to basketball? Here is a clear guide to how points are scored, how fouls work, and why there is a clock ticking on every possession.',
        content: `Basketball is fast, high-scoring, and easy to enjoy, but a few core rules explain almost everything you see on court. Once you understand scoring, fouls, and the shot clock, the game becomes far easier to follow.

Scoring is built on three values. A regular field goal is worth 2 points when a player scores from inside the three-point line. A shot made from behind the three-point arc is worth 3 points, which is why long-range shooting has become so valuable. A free throw, an unopposed shot taken from the free-throw line after certain fouls, is worth 1 point. Add these together and you have every score in the game: a "three" plus a "two" plus a free throw is a six-point swing built from those three simple values.

The three-point line is set at a fixed distance from the basket (about 23 feet 9 inches at the top of the arc in the NBA, and shorter in college and international play). Stepping on or over the line turns a "three" into a "two," which is why footwork matters so much for shooters.

Fouls are the game's main form of contact control. A personal foul is called for illegal contact such as pushing, holding, or hitting a shooter's arm. In the NBA, a player who commits six personal fouls is disqualified for the rest of the game (five fouls in college and international basketball), so managing fouls is a real tactical concern. When a team commits too many fouls in a period, the other team enters the "bonus" and is awarded free throws even on non-shooting fouls. If a player is fouled while shooting, they get free throws: two if they were attempting a two-pointer, three if attempting a three, and if the shot still goes in, the basket counts plus one free throw (the famous "and-one").

The shot clock is what keeps basketball relentless. A team has a limited time to attempt a shot once it gains possession, 24 seconds in the NBA. The shot must at least hit the rim within that time or possession is lost. This rule, introduced in the 1950s, transformed basketball from a slow, stalling game into the fast, continuous sport it is today. After an offensive rebound, the clock typically resets to a shorter period rather than the full 24.

Game length varies by level. The NBA plays four 12-minute quarters, international (FIBA) games use four 10-minute quarters, and US college basketball uses two 20-minute halves. If the score is tied at the end, the game goes to overtime periods until a winner emerges.

A handful of other rules shape play. Traveling is called when a player moves their feet illegally without dribbling. A double dribble occurs if a player dribbles, stops, and dribbles again, or uses two hands at once. The offensive team generally has a few seconds to advance the ball past half court and cannot camp in the painted area near the basket for too long (the "three-second" rule). Goaltending prevents defenders from swatting a shot on its downward path to the rim.

Understanding these fundamentals changes how you watch. You start to see why a team races up the court with the shot clock winding down, why coaches worry about a star player's foul count, and why a single deep three can shift momentum instantly. Basketball's beauty is in that constant tension between the clock, the contact rules, and the simple math of two points, three points, and one.`,
        category: 'Basketball',
        author: 'James Carter',
        date: '2025-06-20',
        image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '2',
        title: 'The Offside Rule in Football, Explained Simply',
        excerpt: 'The offside rule confuses millions of fans. Here is a plain-English explanation of how it actually works and why it exists.',
        content: `Few rules in sport are as famous, or as misunderstood, as football's offside rule. It is often joked about as impossible to grasp, but the core idea is actually simple once broken down. Understanding it will transform how you watch the game.

The purpose of the offside rule is to stop attackers from simply loitering next to the opponent's goal, waiting for a long pass. Without it, football would become a game of hopeful balls launched toward players standing by the goalkeeper. The rule forces attackers to time their runs and keeps the game flowing as a genuine contest of movement and defending.

Here is the heart of it. A player is in an offside position if, at the moment a teammate plays the ball to them, they are nearer to the opponent's goal line than both the ball and the second-to-last opponent. In practice, the "second-to-last opponent" is usually the last outfield defender, because the goalkeeper is normally the last player. So the simple version is: when the ball is passed, an attacker must not be behind the last defender.

Crucially, being in an offside position is not automatically an offence. A player is only penalised if they are in that position and then become involved in active play, for example by receiving the ball, interfering with an opponent, or gaining an advantage from being there. This is why you sometimes see a player standing in an offside position but play continues, because they did not touch the ball or affect the action.

Timing is everything. What matters is the position of the attacker at the exact instant the ball is played by their teammate, not when they receive it. A striker can be level with the defenders, then sprint past them the moment the pass is struck, and be perfectly onside, because they were level at the point of the pass. This is why offside decisions are often so tight and why replays freeze the frame at the moment the ball is kicked.

There are important exceptions. A player cannot be offside if they receive the ball directly from a throw-in, a goal kick, or a corner kick. There is also no offside if the player is in their own half of the pitch when the ball is played. And being level with the second-to-last opponent counts as onside, since the rule requires the attacker to be strictly nearer the goal line.

To help with the closest calls, top competitions now use video review and semi-automated technology that tracks the exact positions of players and the ball. These systems can detect offsides by margins of just a few centimetres, decisions the human eye could never make in real time. This precision has reduced clear errors but also sparked debate, since a goal can now be disallowed for an attacker's shoulder or toe being fractionally ahead.

A useful way to internalise the rule is to watch the defensive line rather than the attacker. Defenders often step forward together at the crucial moment to "play an attacker offside," deliberately leaving them behind the line as the pass is made. This coordinated movement, called the offside trap, is a genuine defensive art.

So the next time you hear a crowd groan at a raised flag, you will know exactly what happened: at the instant the ball was played, an attacker involved in the move was closer to goal than the last defender and the ball. Simple in principle, endlessly dramatic in practice.`,
        category: 'Football',
        author: 'Priya Sharma',
        date: '2025-06-18',
        image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1200&auto=format&fit=crop',
        readTime: 4
    },
    {
        id: '3',
        title: 'Inside Usain Bolt\'s Record-Breaking Stride',
        excerpt: 'The biomechanics and sheer brilliance behind the fastest human ever recorded, and why his records still stand.',
        content: `Usain Bolt's 9.58-second 100-metre world record, set in Berlin on 16 August 2009, remains the gold standard of human sprinting. More than fifteen years later, no athlete has come close to breaking it. Sports scientists and coaches have studied that run in extraordinary detail, and what they found reveals a rare combination of physical gifts and technical mastery.

The first thing analysts point to is Bolt's height. At roughly 1.95 metres (6 feet 5 inches), he was long considered too tall to be a world-class sprinter, because taller athletes typically struggle with the explosive acceleration needed out of the blocks. Bolt overturned that assumption. His height, combined with unusual flexibility and coordination, gave him a stride length that shorter rivals simply could not match. While most elite sprinters take around 44 to 45 strides to cover 100 metres, Bolt completed the Berlin race in about 41 strides, each covering an enormous amount of ground.

His start was better than his reputation suggested. In the Berlin final his reaction time was 0.146 seconds, comfortably within elite range. Because his limbs were long, he took slightly longer to unfold to full speed, but once he reached his top gear through the middle of the race, nobody could stay with him. By the 60-metre mark he was clearly ahead of one of the greatest 100-metre fields ever assembled.

The most striking feature of Bolt's running was his top-end speed. During his peak phase he was measured moving at more than 12 metres per second, the fastest any human has been recorded travelling under their own power. This came from a combination of long strides and short ground-contact time, meaning each foot spent only a fraction of a second on the track before driving him forward again. That efficiency, multiplied over dozens of strides, is what produced such a staggering time.

Muscle composition played its part too. Elite sprinters carry a high proportion of fast-twitch muscle fibres, which generate explosive power but tire quickly. Bolt appeared to combine exceptional power with the rare ability to hold his form deep into the race. Where many sprinters visibly tighten and slow over the final 20 metres, Bolt often looked relaxed, even easing down before the line, most famously at the 2008 Beijing Olympics where he celebrated before finishing and still set a world record.

Bolt's dominance was not limited to the 100 metres. He also holds the 200-metre world record of 19.19 seconds, also set in Berlin in 2009, and anchored Jamaica to world records in the sprint relay. Across three Olympic Games he won multiple sprint gold medals, cementing a case as the greatest sprinter in history.

Beyond the numbers, Bolt brought a sense of joy that transcended athletics. His lightning-bolt pose, his showmanship, and his obvious love of racing made sprinting must-watch television and inspired a generation of young athletes around the world.

The records still stand, and the question lingers beautifully over the sport: will anyone ever run that fast again? For now, Bolt's stride remains the benchmark against which every sprinter is measured.`,
        category: 'Athletics',
        author: 'Daniel Osei',
        date: '2025-06-15',
        image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&auto=format&fit=crop',
        readTime: 4
    },
    {
        id: '4',
        title: 'How Formula 1 Works: Race Weekends, Points and Pit Stops Explained',
        excerpt: 'F1 can look complicated from the outside. Here is a clear guide to how a Grand Prix weekend works and how the championship is won.',
        content: `Formula 1 is the pinnacle of motorsport, a global championship contested by the fastest road-course racing cars in the world. For a newcomer, the jargon of qualifying, DRS, and pit strategy can be bewildering, but the structure of the sport is logical once you break it down.

An F1 season is made up of many races, called Grands Prix, held at circuits around the world. Each event takes place over a weekend with a clear sequence. Practice sessions come first, giving teams time to test setups and let drivers learn the track. Then comes qualifying, which sets the starting order for the race. Qualifying is split into three knockout segments: the slowest cars are eliminated in the first and second segments, and the fastest ten fight for pole position, the coveted first place on the starting grid, in the final segment. Some weekends also feature a shorter "sprint" race that awards points of its own.

The main event is the Grand Prix itself, run over a set distance of roughly 305 kilometres. Cars line up on the grid in qualifying order and race for position. The championship is decided by points awarded to the top ten finishers on a sliding scale, with the winner receiving the most and tenth place receiving a single point. Those points feed two separate titles: the Drivers' Championship, won by the individual driver with the most points across the season, and the Constructors' Championship, won by the team whose two cars score the most combined points. This is why teamwork and reliability matter as much as raw speed.

Pit stops are central to F1 strategy. During the race, cars must stop at least once to change tyres, and a well-drilled crew can complete a full tyre change in around two to three seconds. Teams choose between tyre compounds that trade grip for durability: softer tyres are faster but wear out quickly, while harder tyres last longer but offer less grip. Deciding when to pit, and which tyres to fit, is a constant chess match, and a clever strategy can win a race even without the fastest car.

Overtaking is aided by a system called DRS (Drag Reduction System), which lets a chasing driver open a flap in their rear wing to reduce drag and gain a speed boost on designated straights, but only when they are within one second of the car ahead. This helps produce closer racing on tracks where passing would otherwise be very difficult.

The cars themselves are engineering marvels, powered by hybrid engines that combine a turbocharged internal combustion engine with electrical energy recovery systems. Aerodynamics generate enormous downforce, effectively sucking the car to the track and allowing cornering speeds that feel impossible. Every part is developed to strict technical regulations designed to keep competition fair and costs in check.

Safety has been transformed over the decades. Advances such as the "halo" cockpit protection device, strong survival cells, and run-off areas have made modern F1 vastly safer than in earlier eras, allowing drivers to race on the limit with far better protection.

Once you understand the weekend structure, the two championships, and the role of pit strategy and tyres, Formula 1 opens up. A race becomes not just a test of speed but a layered contest of qualifying position, tyre management, pit timing, and split-second overtaking, all playing out at more than 300 kilometres per hour.`,
        category: 'Motorsport',
        author: 'Elena Marchetti',
        date: '2025-06-12',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop',
        readTime: 4
    },
    {
        id: '5',
        title: 'How the NBA Playoffs Work: Seeding, Series and the Finals',
        excerpt: 'From the play-in tournament to the Finals, here is a clear guide to how the NBA crowns its champion each year.',
        content: `The NBA regular season is a long marathon, but the championship is decided in the playoffs, an intense knockout tournament that stretches across two months of high-stakes basketball. Understanding how it is structured makes the drama far easier to follow.

The NBA is split into two conferences, the Eastern and the Western, each containing fifteen teams. Throughout the regular season, teams compete for the best records, and those records determine "seeding," or ranking, within each conference. The higher a team's seed, the easier its early path is designed to be, and the more home games it earns in the rounds ahead.

Before the main bracket begins, there is a play-in tournament. The teams finishing seventh through tenth in each conference play a short series of elimination games to claim the final two playoff spots (the seventh and eighth seeds). This rewards teams that just miss automatic qualification with a second chance and keeps more teams competitive late in the season.

Once the sixteen playoff teams are set (eight from each conference), the main bracket begins. The playoffs are contested as a series of best-of-seven matchups, meaning the first team to win four games advances and the loser is eliminated. This long format rewards depth, adaptability, and coaching, because teams face the same opponent repeatedly and must adjust their tactics game by game. A single hot shooting night is rarely enough; a team must prove itself over up to seven games.

There are four rounds. The first round pits the top seeds against the lower seeds within each conference. Winners advance to the conference semifinals, then the conference finals, which decide the champions of the East and West. Finally, those two conference champions meet in the NBA Finals, also a best-of-seven series, to decide the overall champion. The winning team is awarded the Larry O'Brien Championship Trophy, and a Finals Most Valuable Player is named for the standout performer.

Home-court advantage runs through the whole tournament. In each series, the team with the better regular-season record hosts more games, following a 2-2-1-1-1 pattern: the higher seed hosts games one and two, the lower seed hosts games three and four, and the venues then alternate. Playing in front of a home crowd, especially in a decisive game seven, can be a genuine edge.

The best-of-seven format produces some of the sport's greatest storylines. A team can fall behind and mount a comeback, adjustments between games become a tactical battle between coaching staffs, and role players can emerge as heroes under pressure. Because series are long, injuries, fatigue, and depth all become decisive, which is why the eventual champion has usually proven itself as the most complete team, not just the most talented.

The journey is grueling: a team must win four best-of-seven series, up to 28 games, against the toughest opponents in the world to lift the trophy. That difficulty is exactly what makes an NBA championship so respected. Once you understand seeding, the play-in, and the best-of-seven rounds leading to the Finals, the postseason becomes a gripping, two-month test of the very best basketball has to offer.`,
        category: 'Basketball',
        author: 'Marcus Williams',
        date: '2025-06-10',
        image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1200&auto=format&fit=crop',
        readTime: 4
    },
    {
        id: '6',
        title: 'Mental Health in Elite Sport: Why It Finally Matters',
        excerpt: 'Once a taboo subject, athlete mental health is now taken seriously across professional sport. Here is why the shift happened and what it means.',
        content: `For most of sporting history, mental health was the great unspoken subject. Athletes were expected to be tough, to push through pain of every kind, and to treat psychological struggle as weakness. In recent years that culture has changed dramatically, and mental health is now recognised as a central part of athletic wellbeing and performance.

The change has been driven partly by prominent athletes speaking openly about their own experiences. When elite competitors at the very top of their sports have talked publicly about anxiety, depression, and burnout, it has helped dismantle the stigma that kept so many silent. If the best in the world can struggle and seek help, the reasoning goes, then anyone can, and there is no shame in it. These conversations have given permission to athletes at every level to acknowledge what they are feeling.

There are good reasons elite sport can be hard on mental health. Athletes face relentless pressure to perform, intense public scrutiny, the fear of injury, and the knowledge that careers are short and success is fragile. Many devote their entire lives to a single pursuit from childhood, which can leave their sense of identity dangerously tied to results. Losing, being dropped, or getting injured can therefore feel like far more than a sporting setback. The isolation of constant travel and the loneliness of individual sports add further strain.

Injury deserves special mention. A serious injury not only causes physical pain but can trigger a genuine psychological crisis: loss of routine, separation from teammates, uncertainty about recovery, and fear about the future. Sports psychologists increasingly treat the mental side of rehabilitation as being just as important as the physical, helping athletes stay motivated and emotionally stable while they heal.

The response across professional sport has been to build genuine support systems. Many teams and governing bodies now employ sports psychologists and mental health professionals, provide confidential counselling, and train coaches to recognise warning signs. There is growing acceptance that looking after an athlete's mind is not a distraction from performance but a foundation of it. A calm, resilient, mentally healthy athlete is better able to focus, recover, and compete.

Importantly, the emphasis has shifted from simply reacting to crises toward prevention and everyday wellbeing. Techniques such as mindfulness, structured rest, managing social media exposure, and maintaining interests and relationships outside sport are increasingly encouraged. The goal is to help athletes build lives that are not entirely defined by winning and losing, which makes them both healthier people and, often, more durable competitors.

There is also a broader cultural benefit. Because athletes are role models watched by millions, their openness about mental health ripples out into society, encouraging ordinary people, especially young men who traditionally seek help least, to take their own wellbeing seriously and reach out when they are struggling.

Challenges remain. Stigma has not disappeared entirely, support varies widely between sports and countries, and the pressures of professional competition are not going away. But the direction of travel is clear and positive. Mental health is no longer treated as a weakness to hide but as a vital part of an athlete's overall health, deserving the same attention as fitness, nutrition, and recovery. That shift is one of the most important and humane developments in modern sport.

If you or someone you know is struggling with mental health, it is worth reaching out to a qualified professional or a trusted person for support.`,
        category: 'Wellness',
        author: 'Sarah Thompson',
        date: '2025-06-08',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&auto=format&fit=crop',
        readTime: 4
    },
    {
        id: '7',
        title: 'Cricket Formats Explained: Test, ODI and T20',
        excerpt: 'Cricket is played in three very different formats. Here is a clear guide to how Test, One Day, and Twenty20 cricket each work.',
        content: `Cricket is unusual among major sports in that it is played in several distinct formats, each with its own rhythm, strategy, and appeal. A newcomer can be forgiven for confusion when one match lasts five days and another is over in an evening. Understanding the three main formats, Test, One Day International, and Twenty20, unlocks the whole sport.

First, the shared basics. Cricket is played between two teams of eleven players on a large oval field with a rectangular strip in the middle called the pitch. One team bats, trying to score runs, while the other bowls and fields, trying to dismiss the batters and limit runs. A "run" is scored when batters run between the wickets or when the ball is hit to the boundary, worth four runs along the ground or six in the air. The bowling is delivered in sets of six balls called "overs." The key difference between formats is largely how many overs are played and how much time the match lasts.

Test cricket is the oldest and longest format, and many consider it the ultimate examination of skill. A Test match is played over up to five days, with each team batting twice (two "innings" each). There is no limit on overs per innings; a team bats until it is bowled out or chooses to declare. This length allows for extraordinary tactical depth, shifting momentum, and the influence of changing weather and pitch conditions. Players wear traditional white clothing and use a red ball. A Test can even end in a draw if neither side achieves victory in the time available, which sounds strange but produces some of the sport's most gripping tension as a team battles to survive.

One Day International cricket, or ODI, was created to deliver a guaranteed result in a single day. Each team faces a fixed limit of 50 overs, so the match has a natural time frame of several hours. Because batting time is limited, ODIs are more aggressive than Tests, with teams balancing the need to score quickly against the risk of losing wickets. Players typically wear coloured clothing and use a white ball. The Cricket World Cup, one of the sport's showpiece events, is contested in this format.

Twenty20, or T20, is the shortest and most explosive format. Each team faces just 20 overs, so an entire match is often completed in around three hours, similar to an evening at other major sports. With so little time, batting is relentlessly attacking, big hitting is prized, and every ball carries weight. T20's fast, entertaining nature has fuelled hugely popular franchise leagues around the world and helped cricket reach new, younger audiences. There are also international T20 tournaments that crown world champions in the format.

Each format rewards different skills. Test cricket favours patience, technique, and stamina. ODIs demand a blend of caution and aggression and the ability to build an innings. T20 prizes power, improvisation, and nerve under pressure. Many players specialise, while the greatest all-format cricketers are celebrated precisely because excelling across all three is so difficult.

Understanding these three formats is the key to enjoying cricket. Whether you are drawn to the slow-burning drama of a five-day Test, the balanced contest of a one-day match, or the fireworks of a T20, they are all recognisably cricket, just played at very different speeds.`,
        category: 'Cricket',
        author: 'Rohit Patel',
        date: '2025-06-05',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&auto=format&fit=crop',
        readTime: 4
    },
    {
        id: '8',
        title: 'How Tennis Scoring Works: Points, Games, Sets and Tiebreaks',
        excerpt: 'Why is the score 15, 30, 40? What is deuce? Here is a complete, clear guide to how tennis scoring actually works.',
        content: `Tennis has one of the most distinctive and, at first, confusing scoring systems in sport. Numbers like 15, 30, and 40 seem to appear from nowhere, and terms like "deuce" and "love" puzzle newcomers. But the system is logical, and once you learn it, following a match becomes effortless.

Tennis is scored in a nested structure: points make up games, games make up sets, and sets decide the match. You have to understand each layer in turn.

The smallest unit is the point. Within a game, the score climbs through a peculiar sequence. Zero points is called "love." The first point won takes a player to 15, the second to 30, and the third to 40. The fourth point normally wins the game, provided the player is ahead by at least two points. So a clean game might run 15, 30, 40, game. The odd numbering is a historical quirk with no impact on how the game is played; you simply memorise the ladder of love, 15, 30, 40.

Complications arise when both players reach 40, which is called "deuce." From deuce, a player must win two points in a row to take the game. Winning the first point from deuce gives that player the "advantage." If they win the next point too, they win the game; if they lose it, the score returns to deuce. This can continue for many exchanges, which is why a single game can become a long, tense battle.

The next layer is the set. To win a set, a player must win six games, and, just like points within a game, they must be ahead by at least two games. So 6-4 wins a set, but 6-5 does not; the players continue. If the set reaches 6-6, it is usually decided by a tiebreak. In a tiebreak, players compete to reach seven points (again winning by two), and here the scoring reverts to normal counting, 1, 2, 3, and so on. The tiebreak is a neat way to settle an otherwise deadlocked set without it running on indefinitely.

The final layer is the match. Matches are played as best of three sets or best of five sets. In a best-of-three match, the first player to win two sets wins the match; in best of five, they must win three. Most professional matches use best of three, while the men's singles at the four Grand Slam tournaments is traditionally best of five, which is why those matches can last several hours.

Serving adds another rhythm to the scoring. Players alternate who serves each game, and the server is generally expected to win their service game. When a player wins a game against the opponent's serve, it is called a "break of serve," a pivotal moment because it disrupts the expected pattern and often decides sets.

There are small variations between tournaments, such as different rules for deciding the final set, and doubles has its own tweaks, but the core structure is universal. Points to 40 and beyond, six games to a set, best of three or five sets to a match.

Once this clicks, the drama makes sense. You understand why breaking serve matters so much, why deuce games are so tense, and why a tiebreak feels like sudden-death pressure. The strange numbers stop being a barrier and become part of tennis's unique character.`,
        category: 'Tennis',
        author: 'Anna Kowalski',
        date: '2025-06-03',
        image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1200&auto=format&fit=crop',
        readTime: 4
    },
    {
        id: '9',
        title: 'The Four Competitive Swimming Strokes Explained',
        excerpt: 'Freestyle, backstroke, breaststroke and butterfly each have their own rules and technique. Here is how they differ.',
        content: `Competitive swimming is contested using four distinct strokes, each with its own technique, rules, and character. Whether you are watching an Olympic final or learning to swim yourself, understanding the four strokes, freestyle, backstroke, breaststroke, and butterfly, is the foundation for appreciating the sport.

Freestyle is the fastest and most familiar stroke. In races, "freestyle" technically means the swimmer may use any style they wish, but in practice everyone swims the front crawl because it is the quickest. The swimmer lies face down, pulls alternately with each arm in a windmill motion, and kicks continuously with a flutter kick, turning the head to the side to breathe. Because it is the fastest stroke, freestyle features in many of the sport's marquee events across a range of distances, from short sprints to long-distance races.

Backstroke is essentially freestyle performed on the back. The swimmer lies face up and uses a similar alternating arm pull and flutter kick, but facing the sky. This makes breathing easy, since the face stays out of the water, but it introduces a unique challenge: swimmers cannot see where they are going and must judge the approaching wall using markers and backstroke flags strung across the pool. Backstroke is also the only stroke that starts in the water, with swimmers gripping the starting blocks and launching backward, rather than diving from above.

Breaststroke is the slowest of the four and the most technical. Swimmers face down and perform a symmetrical, frog-like movement: the arms sweep out and back together while the legs perform a "whip kick," snapping outward and together. The stroke has a distinctive glide phase, and strict rules govern the timing, requiring the arm pull and leg kick to be simultaneous and symmetrical. Because so much depends on precise technique and timing rather than raw power, breaststroke is often described as the hardest stroke to master.

Butterfly is the most physically demanding stroke and one of the most spectacular to watch. Both arms move together in a powerful over-the-water recovery, while the legs perform a "dolphin kick," undulating together like a single fin. The whole body ripples in a wave-like motion, and the stroke demands enormous strength, rhythm, and coordination. When done well it looks graceful; done poorly it is exhausting and awkward, which is why butterfly is usually the last stroke swimmers learn.

Beyond the individual stroke races, two events combine all four. In the individual medley, a single swimmer performs all four strokes in a set order: butterfly, backstroke, breaststroke, and finally freestyle. This tests a swimmer's all-round ability and is a true examination of complete skill. In the medley relay, four different swimmers each swim one stroke, but in a slightly different order, backstroke, breaststroke, butterfly, then freestyle, because the backstroke leg starts in the water and therefore goes first.

Races are held over various distances, and swimmers must obey the specific rules of each stroke, including how they touch the wall and how they turn. Breaststroke and butterfly, for example, require a two-hand touch, while freestyle and backstroke allow a one-hand touch.

Once you can recognise the four strokes and understand their differences, competitive swimming becomes far richer to watch. You can appreciate the raw speed of freestyle, the hidden difficulty of breaststroke, the sheer power of butterfly, and the complete athleticism required to master all four in a medley.`,
        category: 'Swimming',
        author: 'Claire Bennett',
        date: '2025-06-01',
        image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=1200&auto=format&fit=crop',
        readTime: 4
    },
    {
        id: '10',
        title: 'Football Formations Explained: From 4-4-2 to 4-3-3',
        excerpt: 'What do those strings of numbers actually mean? A clear guide to football formations and the ideas behind them.',
        content: `When football commentators talk about a team playing "4-4-2" or "4-3-3," they are describing the team's formation, the basic arrangement of players on the pitch. These numbers can seem like code to newcomers, but they follow a simple logic, and understanding them reveals the tactical heart of the game.

Every team has eleven players, one of whom is the goalkeeper. A formation describes how the ten outfield players are arranged, read from the back of the pitch to the front. The numbers always add up to ten, because the goalkeeper is a given and is not included. So "4-4-2" means four defenders, four midfielders, and two forwards. "4-3-3" means four defenders, three midfielders, and three forwards. Once you know to read them back to front and that they total ten, the code makes sense.

The defenders are the players positioned closest to their own goal, tasked with stopping the opposition and protecting the goalkeeper. A back four typically consists of two central defenders and two full-backs on the wings. Some teams use a back three instead, which changes the whole shape and often pushes the wide players higher up.

The midfielders occupy the centre of the pitch and are often called the engine room of the team. They link defence and attack, win and keep possession, and dictate the tempo of the game. Midfielders can be defensive (shielding the back line), central (controlling play), or attacking (supporting the forwards). The number of midfielders and how they are arranged has a huge influence on whether a team controls games or sits back and counter-attacks.

The forwards are the players highest up the pitch, whose primary job is to score goals. A team might play with a lone striker, a pair of strikers, or a front three that includes wingers who attack from wide areas. More forwards generally means a more attacking approach, but it can leave fewer players to defend.

Each formation carries trade-offs. The classic 4-4-2 is balanced and easy to organise, with two banks of four providing solid defensive structure, but it can be outnumbered in central midfield by teams with three midfielders. The 4-3-3 has become extremely popular because three central midfielders can dominate possession while three attackers stretch the opposition, though it demands hard-working forwards who also defend. Other common shapes include the 3-5-2, which uses wing-backs to provide width, and the 4-2-3-1, which balances a solid defensive base with an attacking band behind a lone striker.

Crucially, formations are not rigid. A team's shape constantly shifts between attacking and defending. The same side might look like a 4-3-3 when they have the ball and a 4-5-1 when defending, as wingers drop back to help. Modern coaches value flexibility, and players are increasingly expected to understand multiple roles and adjust their positions fluidly through a match.

Formations also interact tactically. Coaches often choose their shape specifically to counter the opponent, for example matching up in midfield to avoid being overrun, or exploiting space the opposition's formation leaves open. Watching how two formations clash, and where the space appears as a result, is one of the deeper pleasures of following football.

So the next time you hear a team described by a string of numbers, you will know exactly what it means: a blueprint for balancing defence, midfield, and attack, read from back to front, adding up to ten, and adjusted constantly as the game unfolds.`,
        category: 'Football',
        author: 'Marco Rossi',
        date: '2025-05-28',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&auto=format&fit=crop',
        readTime: 4
    },
    {
        id: '11',
        title: 'How Football Transfers Work: Fees, Contracts and Windows Explained',
        excerpt: 'Transfer fees, contracts, free agents and deadline day. Here is a clear guide to how players actually move between clubs.',
        content: `Every year, football fans are gripped by the drama of the transfer market, the buying and selling of players between clubs. Headlines about enormous fees and dramatic deadline-day moves can be exciting but confusing. Understanding how transfers actually work makes the whole spectacle far easier to follow.

At its core, a transfer is the movement of a player from one club to another. When a player is under contract with a club, that club effectively holds their registration, and any other club wanting to sign them must usually agree to pay a transfer fee. This fee is a payment from the buying club to the selling club to release the player from the remainder of their contract. Fees can range from modest sums to enormous, record-breaking amounts for the world's best players, driven by talent, age, potential, and how much time is left on the existing contract.

Contracts are central to everything. A player signs a contract with a club for a fixed number of years, setting out their wages and the length of their commitment. The longer and more secure a contract, the more negotiating power the selling club has, because the buyer must persuade them to give up a player they are not obliged to sell. As a contract runs down toward its final year, the selling club's leverage weakens, because the player is closer to being able to leave for nothing.

That leads to one of the most important concepts: the free transfer. When a player's contract expires, they become a free agent and can join a new club without any transfer fee being paid, with only wages and signing terms to negotiate. This principle was cemented by a landmark legal case in the 1990s, often called the Bosman ruling, which established that players are free to move at the end of their contracts. Clubs therefore face a constant balancing act: sell a player while they still have value, or risk losing them for free later.

Transfers can only happen during set periods called transfer windows. Most leagues operate two windows, a longer one in the summer between seasons and a shorter one in the middle of the season, often in winter. Outside these windows, clubs generally cannot register new signings. The closing of a window, "deadline day," often produces a frenzy of last-minute deals as clubs scramble to complete business before the cutoff.

There are other ways players move too. A loan allows a club to send a player to another club temporarily, often to gain experience or playing time, with the player returning at the end of the loan period. Some contracts contain a release clause, a pre-agreed fee that, if met by another club, allows the player to leave. Player agents, who represent the players in negotiations, also play a significant and sometimes controversial role, earning commissions on deals.

Behind every high-profile transfer is a web of negotiation: the two clubs must agree a fee, and the buying club must separately agree personal terms, wages and contract length, with the player. A deal can collapse if either part fails, which is why so many rumoured moves never happen.

Once you understand fees, contracts, free transfers, and windows, the transfer market stops being a mystery. You can see why a club rushes to sell a star entering his final contract year, why deadline day is so chaotic, and why the biggest fees go to young players with long contracts and huge potential. The transfer market is, in its way, a sport of its own.`,
        category: 'Football',
        author: 'Carlos Mendoza',
        date: '2025-06-21',
        image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '12',
        title: 'Why Sleep Is Crucial for Athletic Performance',
        excerpt: 'Sleep has become one of sport\'s most valued tools. Here is what happens when athletes rest, and why it matters so much.',
        content: `For a long time, training and diet were seen as the two pillars of athletic performance. In recent years a third has taken its place alongside them: sleep. Once dismissed as simply time spent doing nothing, sleep is now understood to be one of the most powerful tools available to any athlete, and it costs nothing.

The reason sleep matters so much is that the body does much of its most important recovery work while we rest. During deep sleep, the body repairs muscle tissue damaged by training, releases hormones important for growth and recovery, and replenishes energy stores. In effect, the adaptations that make an athlete stronger and fitter happen not during the workout itself but during the recovery that follows, and sleep is when much of that recovery occurs. Train hard but sleep poorly, and the body cannot fully turn that effort into improvement.

Sleep also has a profound effect on the brain and nervous system, which matters enormously in sport. Reaction time, decision-making, coordination, and focus all depend on a well-rested brain. Studies have consistently shown that sleep deprivation slows reaction times and impairs judgement, effects that can be the difference between success and failure in fast-moving sports. A fatigued athlete is not only physically weaker but mentally slower, more error-prone, and more likely to make poor split-second decisions.

There is a clear link between sleep and injury risk too. Tired athletes are more prone to mistakes and lapses in concentration, and their bodies are less able to recover between sessions, which can lead to overuse injuries. Adequate sleep supports the immune system as well, helping athletes avoid the illnesses that can derail training and competition. Chronic lack of sleep leaves the body more vulnerable on multiple fronts.

Most adults need somewhere in the range of seven to nine hours of quality sleep per night, and many elite athletes aim for the upper end of that range or more, given the physical demands they place on their bodies. Some incorporate short naps into their routines to top up rest, particularly around heavy training loads or competition. Just as important as quantity is consistency: going to bed and waking at regular times helps stabilise the body's internal clock and improves sleep quality.

This growing understanding has changed how professional sport approaches rest. Many teams now treat sleep as a serious performance factor, employing sleep specialists, adjusting travel and training schedules to protect rest, and educating athletes on good sleep habits. These include limiting screen exposure before bed, keeping bedrooms cool and dark, avoiding heavy meals and stimulants late in the day, and building a calming wind-down routine.

Travel presents a particular challenge, especially in sports with international schedules. Crossing time zones disrupts the body clock and causes jet lag, which can undermine performance for days. Teams increasingly plan travel carefully and use strategies such as adjusting sleep times in advance and managing light exposure to help athletes adapt more quickly.

The lesson is simple but powerful. An athlete who trains intelligently, eats well, and sleeps properly gives their body the best possible chance to recover, adapt, and perform. In a world where competitors search for every marginal gain, sleep has emerged as perhaps the most accessible advantage of all, available to everyone, requiring no special equipment, and yet frequently overlooked. Rest, it turns out, is not the opposite of training. It is part of it.`,
        category: 'Wellness',
        author: 'Dr. Sarah Mitchell',
        date: '2025-06-19',
        image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '13',
        title: 'The Four Tennis Grand Slams Explained',
        excerpt: 'The Australian Open, French Open, Wimbledon and US Open are tennis\'s biggest events. Here is what makes each one unique.',
        content: `In tennis, four tournaments stand above all others: the Australian Open, the French Open, Wimbledon, and the US Open. Together they are known as the Grand Slams, or the majors, and winning them is the ultimate measure of greatness in the sport. Each has its own history, surface, and character, and understanding them is key to following the tennis calendar.

The Grand Slams are the four most prestigious tournaments of the year, offering the most ranking points, the largest prize money, and the greatest prestige. They are spread across the season, one roughly every few months, giving the tennis year a natural rhythm as players build toward each major.

The season's first major is the Australian Open, held in Melbourne in January. Played on hard courts in the middle of the southern-hemisphere summer, it is famous for its sometimes extreme heat and its lively, festive atmosphere. As the first big event of the year, it often sets the tone for the season and can produce surprising early results as players find their form.

Next comes the French Open, played in late May and early June in Paris at the Roland Garros complex. It is the only major contested on clay, a slow surface that produces long, gruelling rallies and rewards patience, stamina, and topspin. Clay is the most physically demanding surface, and the French Open is widely regarded as a test of endurance and mental toughness as much as pure shot-making. Specialists who thrive on clay can dominate here even if they struggle elsewhere.

Then comes Wimbledon, held in London in late June and early July. It is the oldest and most traditional of the four, first played in the 1870s, and the only major still contested on grass. Grass is a fast, low-bouncing surface that historically favoured big servers and attacking players. Wimbledon is steeped in tradition, from its strict all-white dress code for players to its famous strawberries and cream, and it carries a unique aura of history and prestige.

The final major of the year is the US Open, played in New York in late August and September. Returning to hard courts, it is known for its loud, energetic crowds, its bright lights, and its willingness to embrace spectacle. As the last major, it often carries season-defining significance, and its electric night sessions have produced some of the sport's most memorable dramas.

The variety of surfaces, hard, clay, and grass, is a defining feature of the majors and one of the things that makes tennis so demanding. Each surface changes the speed and bounce of the ball and rewards different styles of play, so excelling across all four requires extraordinary versatility.

That difficulty gives rise to two celebrated achievements. Winning all four majors over the course of a career is known as a Career Grand Slam, a rare feat reserved for the sport's true greats. Winning all four in a single calendar year, the "Grand Slam" itself, is rarer still and stands as one of the most extraordinary accomplishments in all of sport.

Once you know the four majors, when they fall, and what surfaces they are played on, the tennis season comes into focus. Each Grand Slam becomes a distinct challenge, and the players who conquer all of them earn their place among the legends of the game.`,
        category: 'Tennis',
        author: 'Anna Kowalski',
        date: '2025-06-17',
        image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '14',
        title: 'How the Tour de France Works: Jerseys, Stages and Rules Explained',
        excerpt: 'The Tour de France is cycling\'s greatest race. Here is a clear guide to how it is structured and what those coloured jerseys mean.',
        content: `The Tour de France is the most famous cycling race in the world, a gruelling three-week test of endurance, strategy, and teamwork across the roads of France and neighbouring countries. To a newcomer it can look chaotic, a huge pack of riders covering vast distances, but the race follows a clear structure, and its coloured jerseys tell a fascinating story.

The Tour is a stage race, meaning it is not a single event but a series of individual races, called stages, held on consecutive days. There are typically 21 stages spread over about three weeks, with a couple of rest days built in. Each day's stage covers a different route and terrain, and the total distance ridden across the whole Tour is roughly 3,500 kilometres. The rider who completes all the stages in the lowest combined time is the overall winner.

That combined-time competition is called the general classification, and it is the heart of the Tour. Every rider's finishing time is added up day after day, and the rider with the lowest cumulative time leads the race. This is why the Tour rewards consistency and endurance above all: a rider must perform across flat sprints, brutal mountain climbs, and time trials, day after day, for three weeks.

The stages themselves come in different types. Flat stages usually end in dramatic mass sprints, where fast finishers battle for the line at high speed. Mountain stages, through ranges like the Alps and Pyrenees, are where the overall race is often won and lost, as climbers attack on steep ascents and gaps in time open up. Time trials are raced individually against the clock, testing raw power and aerodynamics without the tactics of the pack.

The famous coloured jerseys are the key to following the competition. The yellow jersey (the maillot jaune) is worn by the overall race leader, the rider with the lowest cumulative time, and it is the prize every contender dreams of wearing in Paris. The green jersey rewards the best sprinter, awarded through a points system that favours high finishes on flatter stages. The polka-dot jersey, white with red spots, goes to the "King of the Mountains," the rider who accumulates the most points on categorised climbs. The white jersey is worn by the best young rider, the highest-placed competitor under the age of 26.

Teamwork is a crucial and often underappreciated part of the Tour. Riders compete in teams, and while only one rider can win the overall title, teammates known as "domestiques" sacrifice their own chances to support their leader, shielding them from the wind, fetching food and water, and pacing them up climbs. The peloton, the main pack of riders, moves as a strategic mass, and understanding when teams push the pace or allow a breakaway to escape is central to the tactics.

The race famously finishes in Paris, traditionally with a ceremonial final stage ending on the Champs-Élysées, where the overall winner is celebrated even though the general classification is usually decided the day before. Crossing that finish line in the yellow jersey is the pinnacle of the sport.

Once you understand the stage-race format, the all-important general classification, and what each coloured jersey represents, the Tour de France transforms from a confusing blur into a rich, multi-layered contest, part individual battle, part team strategy, played out over three of the most demanding weeks in sport.`,
        category: 'Cycling',
        author: 'Pierre Dubois',
        date: '2025-06-14',
        image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '15',
        title: 'How American Football Works: A Beginner\'s Guide to the Rules',
        excerpt: 'Downs, touchdowns and field goals explained. A clear introduction to how American football is actually played.',
        content: `American football is one of the most popular sports in the United States, but to newcomers it can look like a bewildering series of stops, starts, and huddles. Beneath the surface, though, is a game of clear objectives and elegant strategy. Learn a few core concepts and it quickly makes sense.

Each team has eleven players on the field at a time, and the goal is simple: move an oval ball down a 100-yard field and into the opponent's end zone to score, while the defense tries to stop them. One team is on offense, trying to advance and score, while the other is on defense, trying to prevent it. Teams switch between offense and defense depending on who has the ball.

The single most important concept for a beginner is the system of downs. When a team has the ball, it is given a set of four attempts, called downs, to advance the ball at least ten yards. If it succeeds, it earns a fresh set of four downs and continues its drive toward the end zone. If it fails to gain ten yards within four downs, possession passes to the other team. This is why you will constantly hear phrases like "third and five," meaning it is the third down with five yards still needed. Because of this, teams usually use their fourth down to punt (kick the ball far downfield to the opponent) rather than risk turning it over, unless they are close to scoring or desperate.

Scoring comes in several forms. The biggest prize is the touchdown, worth six points, scored by getting the ball into the opponent's end zone. After a touchdown, the scoring team can kick the ball through the goalposts for one extra point, or attempt a riskier play from close range for two points. A field goal, worth three points, is kicked through the goalposts and is often attempted when a team has advanced close to scoring range but stalled. Finally, a safety, worth two points, is a rarer score awarded to the defense when they tackle an offensive player in his own end zone.

Advancing the ball happens in two main ways: running with it or passing it. On a running play, a player carries the ball forward through the defense. On a passing play, the quarterback, the offense's key decision-maker, throws the ball to a receiver downfield. The defense tries to stop these plays by tackling the ball carrier, breaking up passes, or, most dramatically, forcing a turnover by intercepting a pass or recovering a fumbled ball.

The game is divided into four quarters, each fifteen minutes of playing time, with a longer break at halftime. The clock stops frequently, for incomplete passes, players going out of bounds, and other situations, which is why a game takes much longer than an hour to complete and why clock management becomes a strategy of its own late in games.

Teams are highly specialised. Beyond the offense and defense, there are "special teams" units that handle kicking situations such as field goals, punts, and kickoffs. Players are often experts in narrow roles, which is part of why American football rosters are so large.

Once you grasp the four-downs system, the ways to score, and the basic split between running and passing, American football reveals itself as a deeply strategic game, often compared to chess, where every play is a planned battle for a few precious yards, and field position and clock management can matter as much as raw athleticism.`,
        category: 'American Football',
        author: 'Tyler Johnson',
        date: '2025-06-11',
        image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '16',
        title: 'How Artistic Gymnastics Is Scored: The Code of Points Explained',
        excerpt: 'Whatever happened to the perfect 10? Here is how modern gymnastics scoring actually works, with difficulty and execution.',
        content: `For decades, the "perfect 10" was the iconic image of gymnastics, the flawless routine that could not be bettered. Today, gymnasts routinely score above 10, which understandably confuses casual viewers. The scoring system has changed, and understanding it reveals how the modern sport rewards both daring and precision.

Artistic gymnastics is judged, not timed or measured, which means the score reflects expert assessment of a routine's difficulty and how well it is performed. Since a major overhaul in the mid-2000s, the sport moved away from the old perfect-10 system to a two-part score that separates what a gymnast attempts from how well they execute it.

The first component is the difficulty score, often called the D-score. This measures how hard the routine is. Judges add up the values of the skills a gymnast performs, with harder elements worth more, along with bonus points for connecting difficult skills together and for meeting specific requirements of the apparatus. Crucially, the difficulty score is open-ended: there is no upper limit. A gymnast who attempts more and harder skills can build a higher D-score, which is precisely why total scores can now exceed 10. This rewards ambition and innovation, encouraging gymnasts to push the boundaries of what is possible.

The second component is the execution score, or E-score. This measures how well the routine is performed, and it works in the opposite direction. It starts at a perfect 10.0, and judges deduct points for every error: bent knees, poor form, wobbles, steps on landing, falls, and lack of control or artistry. A small flaw might cost a tenth of a point; a fall costs a full point and interrupts the flow of the routine. The cleaner and more controlled the performance, the closer the execution score stays to 10.

The two scores are then added together to produce the gymnast's total. So a routine's final mark reflects both the difficulty attempted (D-score) and the quality of the performance (E-score). This is the essence of modern gymnastics scoring: a gymnast must balance risk and reliability. Attempting an extremely difficult routine raises the potential score, but harder skills are more likely to produce execution errors, so there is a constant strategic trade-off between ambition and consistency.

The specific skills and requirements vary by apparatus. In men's gymnastics, athletes compete on six pieces: floor exercise, pommel horse, still rings, vault, parallel bars, and horizontal (high) bar. In women's gymnastics, there are four: vault, uneven bars, balance beam, and floor exercise. Each apparatus demands different strengths, from the explosive power of vault to the balance and nerve required on the beam, and each has its own particular elements and rules that judges assess.

Judging is done by panels, with separate judges assessing difficulty and execution, and systems are in place to average scores and reduce the influence of any single judge, aiming for fairness and consistency. Even so, because the sport is subjectively judged, scoring can occasionally be controversial, and small deductions can decide medals.

Understanding the two-part system transforms how you watch gymnastics. A high difficulty routine performed slightly untidily might still beat a clean but simpler one, or it might not, depending on how the numbers fall. Once you know to look for both the daring of the difficulty and the polish of the execution, you can appreciate the extraordinary balance of courage and control that defines elite gymnastics.`,
        category: 'Gymnastics',
        author: 'Jessica Park',
        date: '2025-06-09',
        image: 'https://images.pexels.com/photos/3621185/pexels-photo-3621185.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '17',
        title: 'The Goalkeeper in Football: Rules, Skills and the Modern Role',
        excerpt: 'The only player allowed to use their hands has one of football\'s most demanding and evolving jobs. Here is how the position works.',
        content: `The goalkeeper is football's most unusual and specialised position, the last line of defence and the only player permitted to handle the ball. Often misunderstood and endlessly scrutinised, the modern goalkeeper's role has evolved into something far more complex than simply stopping shots. Understanding it deepens your appreciation of the whole game.

The defining feature of the goalkeeper is the handling privilege, but it comes with strict limits. A goalkeeper may only use their hands within their own penalty area, the large marked box in front of their goal. Step outside it, and they are treated like any other player and must not handle the ball. This single rule shapes everything about how the position is played and why goalkeepers must judge so carefully when to stay on their line and when to come off it.

There are further restrictions designed to keep the game flowing and fair. Under the "back-pass rule," a goalkeeper cannot pick up the ball with their hands if a teammate has deliberately kicked it back to them; they must play it with their feet. This rule, introduced in the early 1990s, was a turning point, because it forced goalkeepers to become comfortable receiving and passing the ball under pressure, laying the groundwork for the modern game. A goalkeeper also cannot hold the ball indefinitely; they must release it within a reasonable time.

The core skills of shot-stopping remain fundamental. A top goalkeeper needs lightning reflexes, positioning, and the courage to dive at the feet of onrushing attackers. Positioning is often more important than raw athleticism: a well-positioned keeper cuts down the angles available to a shooter, making the goal appear smaller and forcing more difficult attempts. Reading the game to anticipate where a shot or cross will go is a subtle skill that separates the best from the merely good.

Dealing with crosses is another crucial part of the job. When the ball is delivered into the penalty area from wide, the goalkeeper must decide whether to come and claim it, punch it clear, or stay on their line. Commanding the area confidently, and communicating with defenders, is a vital leadership function, since the goalkeeper has the best view of the whole pitch and is expected to organise the defence in front of them.

In the modern game, the goalkeeper has also become a key part of building attacks. Many teams now use a "sweeper-keeper," a goalkeeper comfortable playing well outside the penalty area, acting almost like an extra defender to intercept through-balls and start moves. Distribution, the ability to pass accurately with both feet and to launch attacks with throws or kicks, is now considered an essential goalkeeping skill, not an optional extra. A keeper who is calm and skilful in possession gives the whole team a huge advantage.

Goalkeeping also carries a unique psychological burden. An outfield player can make several mistakes in a match with little consequence, but a single goalkeeping error often leads directly to a goal, and can decide a game. This means goalkeepers must be exceptionally mentally resilient, able to recover from errors instantly and maintain concentration through long periods with little to do, then produce a decisive save in a split second.

Once you understand the handling rules, the back-pass law, and the blend of shot-stopping, command of the area, distribution, and mental strength the job demands, the goalkeeper stops being a mysterious loner in a different-coloured shirt. Instead you see one of the most challenging and increasingly influential roles on the pitch.`,
        category: 'Football',
        author: 'Marco Rossi',
        date: '2025-06-07',
        image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '18',
        title: 'Track and Field Explained: The Events That Make Up Athletics',
        excerpt: 'Athletics packs dozens of events into one sport. Here is a clear guide to the running, jumping and throwing disciplines.',
        content: `Athletics, often called track and field, is one of the oldest and most fundamental of all sports, built on the simple human acts of running, jumping, and throwing. At a major championship or the Olympic Games, dozens of different events unfold at once, which can be overwhelming. Breaking athletics into its main categories makes the whole sport easy to understand.

The events divide broadly into three groups: track events (running), field events (jumping and throwing), and combined events that mix the two. Each rewards very different physical qualities, from explosive speed to raw strength to all-round athleticism.

The track events are the running races, held on the oval track, and they range from flat-out sprints to gruelling distance races. The sprints are the shortest and fastest, contested over 100, 200, and 400 metres, and are all about explosive power and top-end speed. The middle-distance events, such as the 800 and 1500 metres, demand a blend of speed and endurance along with clever tactics, as runners jostle for position and time their finishing kick. The long-distance events, like the 5,000 and 10,000 metres, are tests of stamina and pace judgement. There are also hurdle races, where runners must clear a series of barriers, and relay races, in which teams of four pass a baton, adding the drama of exchanges where races can be won or lost.

The field events take place on the infield and are divided into jumps and throws. The jumping events include the long jump and triple jump, which measure horizontal distance from a running start, and the high jump and pole vault, which measure vertical height cleared over a bar. The pole vault in particular is a spectacular blend of speed, strength, and gymnastic skill, as athletes use a flexible pole to launch themselves several metres into the air. The throwing events test power and technique: the shot put (heaving a heavy metal ball), the discus (spinning to hurl a heavy disc), the javelin (throwing a spear for distance), and the hammer (whirling and releasing a heavy ball on a wire). Each requires a distinctive combination of strength, timing, and coordination.

The combined events are the ultimate test of all-round athleticism. The decathlon, contested by men, packs ten different track and field events into two days, while the heptathlon, contested by women, comprises seven events. Athletes earn points for their performance in each event, and the winner is the one with the highest points total across all of them. Because competitors must excel at running, jumping, and throwing alike, the winners are often regarded as among the most complete athletes in the world.

Athletics is also the backbone of the Olympic Games and has its own World Championships, and it is a sport defined by records. Because performances are measured precisely in time and distance, athletes are constantly chasing world records, and every hundredth of a second or centimetre matters. This objectivity is part of the sport's enduring appeal: there is no judging panel to argue with, only the clock and the tape measure.

Once you know to sort the many events into track, field, and combined, and understand what each rewards, a championship stops being a confusing swirl of activity. Instead you can follow the specific dramas within it, the sprinter chasing a record, the vaulter clearing a new height, the thrower unleashing a monster effort, all part of the rich, varied world of athletics.`,
        category: 'Athletics',
        author: 'Daniel Osei',
        date: '2025-06-04',
        image: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '19',
        title: 'The Three-Point Revolution: How One Line Reshaped Basketball',
        excerpt: 'The three-point line was once a gimmick. Now it defines modern basketball. Here is the story of how the game transformed.',
        content: `Few rule changes have transformed a sport as completely as the three-point line reshaped basketball. What began as an experiment, even dismissed by some as a gimmick, has become the defining feature of the modern game. Understanding the three-point revolution is understanding how basketball is played today.

The concept is simple: a shot made from behind an arc drawn a set distance from the basket is worth three points, rather than the two points awarded for shots inside it. The line sits at a fixed distance from the hoop (about 23 feet 9 inches at the top of the arc in the NBA, and closer in the corners). The idea rewards longer, more difficult shots with an extra point, changing the fundamental math of scoring.

When the three-pointer was introduced to the NBA at the end of the 1970s, it was used sparingly. For years, teams treated the long shot as a niche weapon, something for specialists or desperate situations at the end of a game. Conventional wisdom held that the highest-percentage shots came from close to the basket, so teams focused their attacks inside. The three-point line existed, but it did not yet define strategy.

That gradually changed, and then changed dramatically, as teams began to embrace statistical analysis. Analysts pointed out a basic but powerful truth: a three-point shot made at a reasonable rate produces more points on average than a mid-range two-point shot, simply because each make is worth 50 percent more. If a team could shoot threes efficiently, the extra point stacked up over a game into a significant advantage. This insight, part of a broader movement toward data-driven decision-making in sport, pushed teams to prioritise three-pointers and shots close to the rim, while abandoning the once-common mid-range jumper.

The style of play that followed looked radically different from earlier eras. Teams began attempting far more three-pointers than ever before, spreading players around the arc to create space, and prizing shooting ability in players of all sizes. Even big men, who once camped near the basket, were increasingly expected to shoot from distance. The sight of a team launching dozens of three-point attempts in a single game, once unthinkable, became normal.

The revolution was accelerated by a generation of extraordinary long-range shooters who demonstrated just how devastating the weapon could be. Players capable of making three-pointers from well beyond the line, at high volume and with remarkable accuracy, stretched defences to breaking point and rewrote expectations of what was possible. Their success inspired young players everywhere to develop their shooting from an early age, ensuring the trend would continue.

The three-point emphasis has changed defence too. Defenders must now guard players far from the basket, opening up driving lanes and forcing constant difficult choices about whether to protect the rim or chase shooters. The geometry of the whole court has effectively expanded.

Not everyone loves the change. Some argue the modern game has become too reliant on the three-pointer, reducing variety and pushing aside the mid-range artistry of earlier eras. Others counter that it has made basketball faster, more skilful, and more exciting, rewarding precision shooting and clever spacing.

Whatever your view, the impact is undeniable. A single line on the court, once treated as a novelty, reorganised how basketball is played, coached, and valued. The three-point revolution stands as one of the clearest examples of how a simple rule, combined with new thinking, can utterly transform a sport.`,
        category: 'Basketball',
        author: 'Marcus Williams',
        date: '2025-06-02',
        image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '20',
        title: 'How Competitive Surfing Is Judged and Scored',
        excerpt: 'Surfing looks free and spontaneous, but competition follows clear rules. Here is how heats, priority, and scoring work.',
        content: `Surfing might look like the freest sport imaginable, a lone rider dancing across a moving wall of water, but competitive surfing is governed by a clear and surprisingly strategic set of rules. Understanding how heats, priority, and scoring work reveals the hidden structure beneath the spectacle, especially now that surfing has become an Olympic sport.

Competitive surfing is organised into heats, short head-to-head contests, usually between two surfers (or sometimes more), lasting a set amount of time, often around 20 to 35 minutes. During a heat, surfers paddle out and attempt to catch and ride waves, performing manoeuvres to impress a panel of judges. When the time expires, the surfer with the higher score advances, and the other is eliminated, in a knockout format that continues through rounds until a champion emerges.

The scoring is based on the quality of the waves surfers ride, not the number. Each ride is scored by a panel of judges, typically five, who each award a score from 0 to 10 based on the surfer's performance on that wave. To keep scoring fair, the highest and lowest of the five judges' scores are usually discarded, and the remaining scores are averaged to produce the score for that ride. This reduces the impact of any single judge being too generous or too harsh.

Crucially, only a surfer's two highest-scoring waves count toward their heat total. So a surfer's result is the sum of their two best rides, each out of 10, giving a maximum possible heat score of 20. This rule shapes strategy enormously: a surfer does not need to ride many waves well, but must produce two excellent rides. Choosing which waves to commit to becomes a vital skill, since energy and time are limited and only the best two count.

Judges assess each ride against established criteria. They reward the difficulty and variety of manoeuvres, the innovation and progression of the surfing, and the combination of speed, power, and flow with which the surfer links moves together across the wave. A ride that features difficult, committed manoeuvres performed with control and style on a challenging part of the wave will score highly; a tentative ride on an easy section will not. Falling off, or failing to complete a manoeuvre, costs valuable score.

One of the most important tactical elements is the priority rule. Because two surfers share the same limited supply of waves, there must be a system to decide who has the right to a given wave. Priority determines which surfer gets first choice on an incoming wave, and it shifts between competitors based on who has recently caught waves. This creates a genuine cat-and-mouse battle: surfers manoeuvre for position, try to force opponents into poor waves, and time their selections carefully. Interfering with a rider who has priority results in a penalty.

Conditions add a layer of unpredictability that makes surfing unique among judged sports. Unlike a gymnastics floor or a diving pool, the ocean is constantly changing. The size, shape, and frequency of waves vary throughout a heat, so surfers must read the ocean, position themselves well, and sometimes gamble on whether a better wave will come. Two competitors in the same heat may face very different waves, and part of the skill is making the most of what the sea offers.

Once you understand heats, the two-best-waves scoring, the judging criteria, and the priority system, competitive surfing reveals itself as a compelling blend of athletic performance, artistry, and ocean-reading strategy, far more structured than its free-flowing appearance suggests.`,
        category: 'Surfing',
        author: 'Kai Nakamura',
        date: '2025-05-30',
        image: 'https://images.pexels.com/photos/1654489/pexels-photo-1654489.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '21',
        title: 'The FIFA World Cup: History and How the Tournament Works',
        excerpt: 'The World Cup is the biggest event in football. Here is a factual guide to its history, format, and how a champion is crowned.',
        content: `The FIFA World Cup is the most-watched sporting event on the planet, a tournament contested by national teams that captures the attention of billions. Understanding its history and format is the key to appreciating why it holds such a special place in global sport.

The World Cup was first held in 1930 in Uruguay, which also became the first champion. Since then it has been staged roughly every four years, with only the years around the Second World War interrupting the sequence. Over the decades it has grown from a modest gathering of a handful of nations into a vast global tournament involving qualification campaigns on every continent. It is organised by FIFA, football's international governing body.

Getting to the World Cup is itself a major achievement. In the years before each tournament, national teams compete in regional qualifying competitions across Europe, South America, Africa, Asia, North and Central America, and Oceania. Only a limited number of teams from each region earn a place at the finals, so qualification can be as dramatic as the tournament itself, with footballing giants occasionally missing out.

The finals tournament has traditionally featured 32 teams, though the competition is expanding to 48 teams from the 2026 edition onward, reflecting football's global growth. The format has generally worked in two phases. First comes the group stage, in which teams are drawn into small groups and play each other, earning points for wins and draws. The best-performing teams in each group advance. Then comes the knockout stage, a series of single-elimination matches, round of 16, quarter-finals, semi-finals, and the final, in which the loser of each match is eliminated. This structure rewards both consistency in the group stage and nerve in the knockouts.

Knockout matches cannot end in a draw. If the scores are level after 90 minutes, the game goes to 30 minutes of extra time, and if still tied, to a penalty shootout, one of the most tense and dramatic ways to decide a match in all of sport. Many of the World Cup's most unforgettable moments have come from these shootouts.

Certain nations have made the World Cup their stage. Brazil is the most successful country in the tournament's history with five titles, followed by nations such as Germany and Italy with four each. These footballing powers have produced many of the game's greatest players and most iconic teams, and the World Cup has been the setting for legendary performances that defined careers and eras.

The tournament is also a showcase for the host nation, which is chosen years in advance through a FIFA selection process. Hosting brings enormous prestige, investment, and global attention, and host countries build or upgrade stadiums and infrastructure for the occasion. The 2026 tournament will be jointly hosted by the United States, Canada, and Mexico, the first World Cup shared across three nations.

Beyond the football, the World Cup carries a cultural significance that few events can match. It unites countries behind their national teams, produces heroes celebrated for generations, and creates shared moments experienced simultaneously by people all over the world.

Once you understand its history, the qualification process, and the group-then-knockout format leading to the final, the World Cup reveals itself not just as a football tournament but as a global celebration, held every four years, that crowns the champions of the world's most popular sport.`,
        category: 'FIFA',
        author: 'Carlos Mendoza',
        date: '2026-06-20',
        image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '22',
        title: 'Lionel Messi: A Career of Football Greatness',
        excerpt: 'One of the greatest footballers of all time, Lionel Messi\'s career is a story of records, trophies and a long-awaited World Cup. Here are the facts.',
        content: `Lionel Messi is widely regarded as one of the greatest footballers in the history of the sport. Born in Rosario, Argentina, in 1987, he rose from a small boy with a growth-hormone condition to a global icon whose career has rewritten the record books. His story is one of extraordinary talent, relentless consistency, and a long journey to the ultimate prize.

Messi's rise began at Barcelona, the Spanish club he joined as a teenager after moving to Europe. Barcelona's famous youth academy, known as La Masia, helped nurture his gifts, and he broke into the first team as a young player in the mid-2000s. What followed was one of the most remarkable club careers ever seen. Over more than a decade and a half at Barcelona, Messi became the club's all-time leading scorer and won numerous league titles and Champions League trophies, dazzling fans with his dribbling, vision, and an uncanny ability to score and create goals in equal measure.

His individual accolades are staggering. Messi has won the Ballon d'Or, awarded to the world's best player, a record number of times, a testament to his sustained brilliance across many seasons. His combination of close control, balance, acceleration, and footballing intelligence made him almost impossible to stop at his peak, and he set scoring records that once seemed unbreakable.

For much of his career, however, one prize eluded him: the World Cup. Playing for Argentina, Messi carried the hopes of his football-mad nation through several tournaments. He came agonisingly close, reaching the World Cup final in 2014, only to fall short. Critics unfairly questioned whether he could deliver the biggest international trophy, comparing him to past Argentine heroes who had.

That narrative changed dramatically at the 2022 World Cup in Qatar. Leading his national team with a series of brilliant performances, Messi finally lifted the trophy as Argentina were crowned world champions after a dramatic final. For many, it was the crowning moment of his career, cementing his place among the very greatest and completing a collection of honours few players in history can match.

Off the pitch, Messi is known for a relatively quiet, understated personality, letting his football do the talking. His longevity has been remarkable; he has remained among the world's best players well beyond the age at which many stars decline. In the later stage of his career he moved on from Barcelona, continuing to compete at a high level and bringing his talents to new audiences.

Messi's influence extends far beyond trophies. He has inspired a generation of young players and is frequently discussed in the eternal debate over the greatest footballer of all time, alongside a small handful of legendary names. His style of play, graceful, creative, and devastatingly effective, has become a benchmark against which attacking players are measured.

Whatever one's view of the greatest-of-all-time debate, the facts of Messi's career speak for themselves: a record haul of individual awards, a mountain of club trophies, countless records, and, finally, the World Cup. His journey from a small child in Rosario to a global sporting icon is one of football's defining stories, and a reminder of what talent, dedication, and perseverance can achieve.`,
        category: 'FIFA',
        author: 'Carlos Mendoza',
        date: '2026-06-19',
        image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '23',
        title: 'Kylian Mbappé: Profile of a Modern Superstar',
        excerpt: 'Fast, prolific and a World Cup winner before turning 20, Kylian Mbappé is one of football\'s biggest stars. Here is his story.',
        content: `Kylian Mbappé is one of the brightest stars in modern football, a forward whose blistering pace, composure, and goal-scoring have made him one of the most recognisable athletes in the world. Born in France in 1998, he achieved at a remarkably young age what most players only dream of, and he continues to shape the direction of the global game.

Mbappé emerged as a teenage sensation at Monaco, a French club known for developing young talent. His explosive speed and maturity beyond his years quickly attracted attention across Europe, and he helped Monaco to notable success before making a high-profile move to Paris Saint-Germain, one of the biggest clubs in France. There he became a central figure, scoring prolifically and winning numerous domestic honours while developing into a complete forward.

It was on the international stage, however, that Mbappé truly announced himself to the world. Representing France at the 2018 World Cup, he became one of the tournament's standout performers despite being just a teenager. His pace terrorised defences, and he scored in the final as France were crowned world champions, making him one of the youngest players ever to score in a World Cup final. Overnight, he was established as a global superstar and the face of a new generation.

Four years later, at the 2022 World Cup, Mbappé delivered one of the greatest individual performances in the history of the tournament's final. He scored a hat-trick, an extraordinarily rare feat in a World Cup final, and dragged France back into a match that seemed lost. Although France ultimately lost the final in a penalty shootout, Mbappé's display cemented his reputation as one of the finest players of his era and earned him the tournament's top-scorer award.

What sets Mbappé apart is a rare combination of attributes. His acceleration and top speed are among the best in the game, allowing him to run past defenders with ease. But he pairs that pace with excellent finishing, close control, and an increasingly sophisticated understanding of how to lead an attack. He is equally dangerous running in behind defences or receiving the ball to feet, which makes him extremely difficult to defend against.

His career has continued at the highest level, including a major move to Real Madrid, one of the most storied clubs in world football, a transfer long anticipated by fans and observers. Wherever he plays, he commands attention and carries the expectations that come with being considered a potential all-time great.

Off the pitch, Mbappé is known for his professionalism and his engagement with social causes, and he has become a role model for young players around the world. Still relatively young by the standards of a footballer's career, he has already achieved an enormous amount, and much of his story remains to be written.

For fans and analysts, one of the great questions of modern football is just how much Mbappé can accomplish before he is finished. With a World Cup winner's medal, individual honours, and years still ahead of him, he stands as one of the defining talents of his generation, a player whose speed and skill have made him a symbol of football's exciting future.`,
        category: 'FIFA',
        author: 'Pierre Dubois',
        date: '2026-06-18',
        image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '24',
        title: 'The USA and World Cup Football: History and the 2026 Hosts',
        excerpt: 'American soccer has grown enormously, and the country will co-host the 2026 World Cup. Here is a factual look at its football journey.',
        content: `Football, known in the United States as soccer, has undergone a remarkable transformation in America over the past few decades, growing from a niche interest into a major sport with a passionate following. With the United States set to co-host the 2026 World Cup, it is a fitting moment to look at the country's football history and its rising place in the global game.

The United States actually has a longer World Cup history than many realise. The national team competed in the very first World Cup in 1930, where it achieved a strong result, reaching the semi-finals, still the country's best men's finish in the tournament. After that early promise, however, American men's soccer entered a long quiet period, overshadowed domestically by other sports.

A major turning point came when the United States hosted the World Cup in 1994. The tournament was a huge success, drawing large crowds and helping to spark greater interest in the sport across the country. In its wake, a new professional league was established, providing a domestic stage for the game to grow. Over the following decades, that league expanded steadily, attracting greater investment, better players, and larger audiences, and helping to develop homegrown talent.

The American men's national team became a regular participant at World Cups through the late twentieth and early twenty-first centuries, competing in the qualification region of North and Central America and the Caribbean. While it has not matched its 1930 semi-final run, it has produced competitive teams and memorable moments, and a steady stream of American players have moved abroad to compete in Europe's top leagues, raising the standard of the national side.

It is worth noting that the story of American soccer's global success is led in large part by the women's game. The United States women's national team is one of the most successful in the history of international football, having won multiple Women's World Cup titles and Olympic gold medals. Its stars have become household names and powerful advocates for the sport, and its sustained excellence has been a source of national pride and a driver of soccer's popularity in the country.

Looking ahead, the biggest moment in American soccer history may be on the horizon. The 2026 World Cup will be jointly hosted by the United States, Canada, and Mexico, the first time three nations have shared hosting duties, and the first men's World Cup held in the United States since 1994. The tournament will also be the first to feature an expanded field of 48 teams. Matches will be spread across numerous cities in the three countries, with many of the games, including some of the biggest, taking place on American soil.

Hosting the tournament is expected to give the sport another significant boost in the United States, showcasing world-class football to enormous audiences and inspiring a new generation of players and fans. The infrastructure, interest, and investment surrounding the event reflect just how far the game has come in the country.

From an early semi-final in 1930, through the landmark 1994 tournament, to co-hosting the expanded 2026 event, the United States has steadily grown into a significant football nation. With a thriving domestic league, a world-leading women's team, and the world's biggest tournament arriving on its shores, the future of American soccer looks brighter than ever.`,
        category: 'FIFA',
        author: 'Tyler Johnson',
        date: '2026-06-17',
        image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '25',
        title: 'Brazil\'s World Cup History: The Five-Time Champions',
        excerpt: 'No nation has won the World Cup more often than Brazil. Here is a factual look at their five titles and footballing legacy.',
        content: `When it comes to the World Cup, no nation stands taller than Brazil. The South American country is the most successful in the tournament's history, having won the trophy a record five times. Brazilian football is synonymous with flair, creativity, and joy, and the national team's story is woven through the very fabric of the World Cup itself.

Brazil's tally of five World Cup titles came in 1958, 1962, 1970, 1994, and 2002, a span of more than four decades that reflects a sustained excellence unmatched by any other nation. Brazil is also the only country to have qualified for every single World Cup finals ever held, a testament to its enduring strength and depth of talent.

The first golden era arrived in the late 1950s and 1960s, powered by one of the most famous footballers of all time, Pelé. He burst onto the scene as a teenager at the 1958 World Cup, helping Brazil to victory, and went on to win the tournament again in 1962 and 1970. Winning three World Cups is an achievement no other player has matched, and Pelé became a global symbol of the sport. The 1970 Brazil team, in particular, is often celebrated as one of the greatest sides ever assembled, playing an attacking, beautiful style of football that captivated the world.

After a long wait, Brazil returned to the top in 1994, winning the World Cup held in the United States. That triumph, secured in a tense final decided by a penalty shootout, ended a 24-year title drought and reignited national pride. The team blended defensive solidity with attacking talent, and its success helped launch or cement the careers of several star players.

The fifth and most recent title came in 2002, at the tournament co-hosted by South Korea and Japan. That Brazil side featured a formidable attacking trio and was led by a prolific striker who finished as the tournament's top scorer and produced decisive performances in the knockout rounds, including the final. It remains, so far, Brazil's most recent World Cup crown.

Brazilian football's influence extends far beyond its trophy count. The country has produced an extraordinary conveyor belt of gifted players over the generations, many of whom have starred for the biggest clubs in Europe. The Brazilian style, often associated with skilful dribbling, inventive attacking play, and individual brilliance, has shaped how the game is played and admired worldwide. The yellow shirt of the national team is one of the most recognisable symbols in all of sport.

Of course, expectations in Brazil are immense, and the years since 2002 have brought disappointment as well as hope, with the team falling short of adding to its collection despite continuing to produce world-class talent. In a nation where football is close to a religion, anything less than winning can feel like failure, which speaks to the extraordinarily high standard Brazil has set for itself.

Still, the record stands: five World Cups, more than any other country, and a footballing heritage rich with legendary players and unforgettable teams. For anyone learning about the World Cup, Brazil is the essential starting point, the five-time champions whose love of the beautiful game has left an indelible mark on its history.`,
        category: 'FIFA',
        author: 'Marco Rossi',
        date: '2026-06-16',
        image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '26',
        title: 'England\'s Football History: 1966 and the Long Wait',
        excerpt: 'England invented modern football and won the World Cup in 1966, but has chased a second title ever since. Here is the story.',
        content: `England holds a unique place in the story of football. Widely regarded as the birthplace of the modern game, where its rules were codified in the nineteenth century, the country has a deep and passionate footballing culture. Yet at international level, England's history is defined by a single, celebrated triumph and a long, often painful wait to repeat it.

That defining triumph came in 1966, when England hosted the World Cup and went on to win it, the only time the nation has lifted the trophy. Playing on home soil, England reached the final and faced West Germany in a dramatic match at Wembley Stadium in London. The game finished level in normal time and went to extra time, where England prevailed to win 4-2. A forward named Geoff Hurst made history by scoring a hat-trick in the final, the only player ever to do so in a World Cup final. It remains one of the most cherished moments in English sporting history.

In the decades since, England has consistently qualified for major tournaments and produced many talented players, but the second title has proved elusive. The national team has experienced a series of near-misses and heartbreaks, often at the semi-final stage or in tense penalty shootouts, which for many years became a recurring source of national frustration. The phrase "years of hurt" entered the country's football vocabulary to describe the long drought.

Penalty shootouts, in particular, became an emotional theme in England's story. The team suffered several painful exits from major tournaments in shootouts, contests that hinge on nerve and fine margins. These experiences shaped a national narrative of hope followed by disappointment, and generations of English fans grew up longing to see their team reach the heights of 1966 once more.

More recently, England has enjoyed a resurgence, reaching the latter stages of major tournaments with a younger, talented squad and rediscovering a sense of optimism. Runs to a World Cup semi-final and a European Championship final rekindled belief and showed that the team could compete with the best, even if the ultimate prize has continued to just elude them.

England's footballing culture is one of the richest in the world, home to a domestic league that is among the most popular and widely watched globally, attracting top players from every corner of the planet. This club success, however, has not always translated into international glory, an intriguing contrast that fuels endless debate among fans and pundits about why the national team has not won more.

Part of what makes England's football story so compelling is exactly this tension between heritage and expectation. As the birthplace of the game, with a fervent fan base and a powerful domestic league, the country carries enormous hopes into every tournament. The weight of 1966, now generations in the past, hangs over each new squad, both as inspiration and as a benchmark that has proved extraordinarily hard to match.

For anyone following international football, England is one of the sport's great stories: a founding nation with a single, glorious World Cup triumph, a passionate footballing public, and an enduring quest to end the long wait and win the trophy for a second time.`,
        category: 'FIFA',
        author: 'James Carter',
        date: '2026-06-15',
        image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '27',
        title: 'World Cup Dark Horses: When Underdogs Shocked the World',
        excerpt: 'The World Cup\'s greatest charm is its surprises. Here is a look at the underdog nations that have stunned football\'s giants.',
        content: `One of the enduring joys of the World Cup is its capacity for surprise. While footballing giants like Brazil, Germany, and Argentina dominate the record books, the tournament's history is also rich with stories of underdogs, the so-called "dark horses," who defied expectations and captured the imagination of fans around the world. These upsets are part of what makes the World Cup so unpredictable and beloved.

A dark horse is a team that is not among the favourites but performs far better than anyone expected, often knocking out much stronger nations along the way. These runs remind everyone that on a given day, organisation, spirit, and belief can overcome reputation and star power. The World Cup has produced many such stories across its history.

One of the most famous examples came in 2002, when South Korea, co-hosting the tournament, went on an astonishing run all the way to the semi-finals. Roared on by passionate home crowds, the team eliminated several established European sides and became the first team from Asia to reach the last four of a World Cup. It was a landmark moment for Asian football and a classic example of a host nation exceeding all expectations.

Africa has produced its own memorable underdog tales. Cameroon captured hearts in 1990 with a spirited run to the quarter-finals, becoming one of the first African teams to reach that stage and announcing the continent's growing strength. Senegal made a similar impact in 2002, stunning the reigning champions in the opening match on their way to the quarter-finals. Ghana came agonisingly close to becoming the first African semi-finalist in 2010, falling just short in a dramatic quarter-final. Then, in 2022, Morocco made history by reaching the semi-finals, the furthest any African or Arab nation had ever gone, thrilling supporters across the continent and the wider region.

Europe, too, has had its surprises. Croatia, a relatively small nation, has repeatedly punched above its weight, most remarkably by reaching the World Cup final in 2018, a stunning achievement for a country of its size and a reward for a golden generation of talented players. Their run captured the romance of the tournament, showing that determination and quality could carry a smaller footballing nation to the very brink of glory.

What unites these dark-horse stories is a set of common ingredients. Strong team spirit and unity often allow such sides to perform greater than the sum of their parts. Tactical discipline and defensive organisation can frustrate more talented opponents. A talismanic player or an inspired goalkeeper can make the difference in tight matches. And the momentum of an unexpected win can build belief that carries a team further than anyone imagined. The knockout format, where a single match can end a favourite's tournament, gives underdogs their opening.

These upsets matter beyond the tournament itself. They inspire footballing nations to believe that they, too, can compete on the biggest stage, and they help spread the game's development to new regions. Many of the sport's most treasured memories come not from the expected champions but from the outsiders who dared to dream.

For any World Cup fan, the dark horses are a huge part of the appeal. As each new tournament approaches, one of the great pleasures is wondering which unfancied nation might catch fire, topple a giant, and write the next great underdog story in the World Cup's endlessly surprising history.`,
        category: 'FIFA',
        author: 'Priya Sharma',
        date: '2026-06-14',
        image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '28',
        title: 'How World Cup Hosts Are Chosen and What Hosting Means',
        excerpt: 'Hosting the World Cup is a huge honour and a massive undertaking. Here is how host nations are selected and what it involves.',
        content: `Every World Cup needs a home, and being chosen to host football's greatest tournament is one of the most sought-after honours in global sport. The process of selecting a host nation, and the enormous task of staging the event, are fascinating aspects of the World Cup that unfold years before a ball is kicked.

The right to host the World Cup is awarded by FIFA, football's international governing body, through a bidding process that takes place well in advance, often around a decade before the tournament itself. Countries, or in some cases groups of countries bidding jointly, put forward detailed proposals setting out how they would stage the event. These bids cover stadiums, transport, accommodation, security, and the broader ability to welcome huge numbers of teams, officials, media, and travelling fans.

FIFA evaluates the competing bids against a range of criteria and ultimately selects the host. Historically, this decision was made by a vote among senior football officials, though the process has evolved over time amid efforts to improve transparency. The selection is a major moment, instantly transforming the chosen nation's football landscape and setting in motion years of preparation.

Hosting the World Cup is an immense undertaking. The host nation typically needs a collection of large, modern stadiums spread across several cities, often requiring the construction of brand-new venues or the significant upgrading of existing ones. Beyond the stadiums themselves, hosts must invest in the surrounding infrastructure: airports, roads, public transport, hotels, and training facilities capable of handling a global influx of visitors over the course of the tournament, which lasts about a month.

The scale of the event is staggering. Dozens of national teams and their entourages must be accommodated, thousands of journalists provided for, and vast television and digital broadcasts coordinated to reach a worldwide audience of billions. Security is a major consideration, as is the logistical challenge of moving teams and supporters between host cities for matches. Staging the World Cup is, in effect, running one of the largest peacetime operations a country can undertake.

In return, hosting offers significant potential rewards. The tournament brings global attention and prestige, showcasing the host nation to the world. It can stimulate tourism and investment, and the infrastructure built for the event may benefit the country for years afterward. There is also a powerful intangible benefit: the pride and excitement of staging the world's biggest sporting event, and the boost it can give to the popularity of football domestically. Host nations also qualify automatically for the tournament, guaranteeing their team a place on the biggest stage.

Hosting is not without its debates, however. The huge costs involved, and questions over the long-term use of newly built stadiums, have prompted discussion about whether the investment always pays off. Partly in response, recent and future tournaments have embraced the idea of co-hosting, with several nations sharing the burden and the benefits. The 2026 World Cup, for example, will be staged jointly across three countries, spreading matches over a wide area and making use of existing infrastructure.

Understanding how hosts are chosen and what hosting entails adds a rich layer to following the World Cup. Long before the football begins, the story of each tournament is already being written, in the bids, the building, and the years of preparation that turn a nation into the temporary capital of the sporting world.`,
        category: 'FIFA',
        author: 'Tyler Johnson',
        date: '2026-06-13',
        image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '29',
        title: 'The Goalkeeper\'s Role at the World Cup',
        excerpt: 'Goalkeepers can become World Cup heroes or villains in an instant. Here is why the position is so crucial on football\'s biggest stage.',
        content: `At the World Cup, where the finest footballers compete under the most intense pressure imaginable, few positions are as scrutinised or as decisive as the goalkeeper. The last line of defence can become a national hero or, in an instant, the source of heartbreak. Understanding the goalkeeper's role illuminates one of the most dramatic aspects of football's greatest tournament.

The goalkeeper is the only player permitted to handle the ball, and only within their own penalty area. This unique role makes them the final barrier between the opposition and the goal. In the tight, high-stakes matches of a World Cup, where a single goal can decide a nation's fate, the goalkeeper's ability to make crucial saves can be the difference between glory and elimination.

World Cup history is filled with goalkeepers whose performances defined tournaments. A brilliant save at a decisive moment, a string of stops in a tense knockout match, or a commanding presence that reassures an entire defence can lift a team far beyond expectations. Great tournament goalkeepers combine sharp reflexes, intelligent positioning, and the composure to remain calm when the pressure is at its highest. Because the margins are so fine, a goalkeeper in top form can carry a team through rounds it might otherwise not survive.

Nowhere is the goalkeeper's importance clearer than in the penalty shootout, one of the most nerve-wracking ways to decide a knockout match. When 90 minutes and extra time cannot separate two teams, the contest comes down to a series of penalty kicks, and here the goalkeeper takes centre stage. Saving even a single penalty can win a shootout and send a nation into raptures. Goalkeepers study opposing players, try to read their intentions, and rely on a mixture of preparation, instinct, and psychology to gain an edge. Many of the World Cup's most iconic images are of goalkeepers celebrating a decisive shootout save.

The role also carries a heavy psychological burden. An outfield player can make several mistakes with limited consequences, but a goalkeeping error often leads directly to a goal, and on the World Cup stage, such moments are replayed and remembered for years. This means goalkeepers must possess exceptional mental strength, the ability to recover instantly from a setback, maintain concentration through long periods of inactivity, and then produce a match-defining save when called upon. The best combine talent with remarkable resilience.

In the modern game, the goalkeeper's responsibilities have expanded well beyond shot-stopping. Today's top goalkeepers are expected to be comfortable with the ball at their feet, helping their team build attacks from the back and acting almost as an additional outfield player when their side has possession. They must also command their penalty area on crosses and organise the defenders in front of them, using their clear view of the pitch to direct play. At a World Cup, where teams are highly organised and chances are scarce, these all-round qualities are increasingly valuable.

Goalkeeping greatness at the World Cup is also about leadership. A calm, authoritative goalkeeper can steady a nervous team, communicate constantly with defenders, and set a tone of confidence that spreads through the side. In a tournament where tension is everywhere, that reassuring presence is invaluable.

For all these reasons, the goalkeeper occupies a special place in World Cup lore. Capable of winning matches single-handedly and of becoming an enduring hero, yet always just one moment away from heartbreak, the goalkeeper embodies the drama, pressure, and fine margins that make the World Cup the extraordinary spectacle it is.`,
        category: 'FIFA',
        author: 'Marco Rossi',
        date: '2026-06-12',
        image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '30',
        title: 'African Football\'s Rise on the World Stage',
        excerpt: 'African teams have gone from outsiders to genuine contenders at the World Cup. Here is the story of the continent\'s football rise.',
        content: `African football has undergone a remarkable rise on the global stage over the past few decades, evolving from a group of nations viewed as outsiders into genuine competitors capable of challenging the world's best. The story of African teams at the World Cup is one of steady progress, memorable breakthroughs, and enormous, still-growing potential.

For much of the World Cup's early history, African nations were underrepresented, with only a small number of qualifying places allocated to the continent. As African football developed and FIFA expanded the tournament, more places became available, giving the continent's teams greater opportunity to test themselves against the traditional powers. That increased presence set the stage for a series of landmark moments.

A major breakthrough came in 1990, when Cameroon captured the world's imagination with a spirited run to the quarter-finals. Their success, built on flair, physical power, and an infectious spirit, was one of the first times an African team had gone so deep in the tournament, and it announced the continent's rising quality to a global audience. The team's charismatic performances made them one of the most beloved sides of that World Cup.

The momentum continued into the new century. In 2002, Senegal made a stunning debut at the World Cup, defeating the reigning champions in the opening match and advancing to the quarter-finals, echoing Cameroon's earlier achievement. In 2010, when the World Cup was held on African soil in South Africa, for the first time ever, Ghana came within a whisker of making history, reaching the quarter-finals and coming agonisingly close to becoming the first African team to reach the semi-finals, only to fall short in dramatic fashion.

That elusive milestone was finally reached in 2022, when Morocco produced one of the great World Cup stories by reaching the semi-finals, the furthest any African or Arab nation had ever advanced. Their run, built on outstanding organisation, defensive resilience, and unity, thrilled supporters across Africa and the Arab world and shattered the ceiling that had long limited African teams. It was a defining moment, proof that an African nation could compete at the very highest level of the tournament.

Several factors have driven this rise. The globalisation of football means that many of Africa's best players now compete for top clubs in Europe's leading leagues, gaining experience at the highest level and raising the standard of their national teams. Improved coaching, organisation, and investment have also played a part, as has the passion and depth of footballing talent across the continent. African players have become some of the biggest stars in the world game.

Challenges remain. African football has at times been held back by issues around funding, administration, and infrastructure, and the continent's teams have sometimes struggled to translate individual talent into sustained collective success. But the trajectory is unmistakably upward, and each tournament brings fresh evidence of the continent's growing strength.

The rise of African football is one of the most inspiring narratives in the modern game. From the joyful breakthrough of Cameroon in 1990 to the historic semi-final run of Morocco in 2022, African teams have steadily rewritten what is possible. With a huge population, deep reserves of talent, and ever-improving structures, many believe it is only a matter of time before an African nation goes even further, and perhaps one day lifts the World Cup itself.`,
        category: 'FIFA',
        author: 'Daniel Osei',
        date: '2026-06-11',
        image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '31',
        title: 'VAR at the World Cup: How Video Review Changed the Tournament',
        excerpt: 'Video Assistant Referee technology arrived at the World Cup in 2018. Here is how it works and how it has changed the game.',
        content: `The introduction of Video Assistant Referee technology, universally known as VAR, marked one of the most significant changes to football in generations, and the World Cup played a central role in bringing it to global prominence. Understanding how VAR works at the tournament, and the debate it has sparked, is key to following the modern game.

VAR was used at the World Cup for the first time at the 2018 tournament in Russia, a landmark moment that introduced the technology to the sport's biggest audience. Its purpose is to help the on-field referee make correct decisions by using video replays to review certain key incidents. The core principle is that VAR exists to correct clear and obvious errors, not to re-referee every marginal moment of a match.

VAR does not review everything that happens on the pitch. It is limited to four specific match-changing situations. The first is goals, checking whether an infringement such as offside, a foul, or a handball occurred in the build-up. The second is penalty decisions, checking whether a penalty was correctly awarded or wrongly denied. The third is direct red cards, reviewing whether a sending-off was justified. The fourth is mistaken identity, ensuring the referee disciplines the correct player. Outside these areas, VAR stays out of the game.

The process works through a team of officials watching the match from a video operations room, with access to numerous camera angles. When they spot a possible clear error in one of the reviewable categories, they alert the referee, who can then either accept the recommendation or review the footage personally on a pitchside monitor before making a final decision. This on-field review has become a familiar sight at the World Cup, with players and fans waiting anxiously as the referee consults the screen.

For factual matters such as offside, the technology can be extremely precise. At recent tournaments, semi-automated systems have been used to track the exact positions of players and the ball, allowing officials to judge offside decisions by very fine margins that the human eye could never detect in real time. This has helped resolve situations that were previously the subject of guesswork and controversy.

The impact of VAR at the World Cup has been significant. Supporters argue that it has made the tournament fairer by eliminating many of the clear, game-changing errors that once decided crucial matches unjustly, the wrongly disallowed goals and missed penalties that could shape a nation's fate. In a competition where a single decision can end a World Cup dream, that added accuracy carries real weight.

Yet VAR has also generated intense debate. Critics contend that it interrupts the natural flow of the game, creates delays and uncertainty, and can dampen the spontaneous joy of celebrating a goal that might later be ruled out. The precision of offside technology, in particular, has drawn complaints when goals are disallowed for the smallest of margins. And because many decisions, such as whether a challenge is a foul, remain subjective, disagreements have not disappeared, they have simply shifted.

Football's authorities have continued to refine how VAR is used at the World Cup, seeking to speed up reviews, improve communication with fans in the stadium, and strike a better balance between accuracy and the flow of the game. Some tournaments have experimented with announcing decisions to the crowd to increase transparency.

Whatever one's view, VAR is now firmly part of the World Cup experience. Understanding that it covers only four types of incident, that it exists to fix clear errors rather than perfect every call, and that final decisions still rest with the referee, helps make sense of both what the technology delivers and why it remains one of football's most talked-about innovations.`,
        category: 'FIFA',
        author: 'Anna Kowalski',
        date: '2026-06-10',
        image: 'https://images.pexels.com/photos/1652351/pexels-photo-1652351.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '32',
        title: 'Germany\'s World Cup Pedigree: The Four-Time Champions',
        excerpt: 'Consistent, resilient and hugely successful, Germany is one of the World Cup\'s greatest nations. Here is a factual look at their record.',
        content: `Few nations command as much respect at the World Cup as Germany. Renowned for their consistency, organisation, and mental toughness, German teams have been a fixture near the top of international football for generations. With four World Cup titles to their name, Germany stands among the most successful countries in the tournament's history.

Germany has won the World Cup four times, in 1954, 1974, 1990, and 2014. The first three of these came when the country competed as West Germany, during the era when the nation was divided, while the most recent title in 2014 was won by a reunified Germany. This sustained success across different eras is a testament to a footballing culture built on strong structures, tactical discipline, and a remarkable ability to perform when it matters most.

The 1954 triumph is one of the most famous stories in football history. West Germany, considered underdogs, defeated a heavily favoured Hungary side in the final in a match so surprising it became known as a sporting miracle. It was a defining moment for German football and, for the nation, a powerful symbol of renewal in the years after the Second World War.

The 1974 title was won on home soil, as West Germany hosted and won the tournament, led by some of the greatest players the country has ever produced. In 1990, West Germany claimed its third crown with a team known for its efficiency and strength, shortly before the country's reunification, adding historical resonance to the achievement.

The most recent title, in 2014, saw Germany win the World Cup in Brazil with a side widely admired for its blend of technical skill, tactical intelligence, and teamwork. That tournament included one of the most extraordinary results in World Cup history, a stunning semi-final victory over the host nation by a remarkable scoreline that shocked the football world. The triumph was seen as the reward for a long-term investment in youth development and coaching that had transformed German football in the preceding years.

Germany's reputation at the World Cup rests not only on its titles but on its extraordinary consistency. For decades, the team could be relied upon to reach the latter stages of the tournament, earning a reputation as a "tournament team" that raised its level when the stakes were highest. This durability, the sense that Germany should never be underestimated in a knockout match, became one of the defining features of its footballing identity.

Underpinning this success is a strong football infrastructure. Germany has a highly regarded domestic league, a deep commitment to developing young players through well-organised academies, and a culture that values collective effort and tactical understanding. When German football went through a difficult period, the response was a thorough overhaul of youth development, which helped produce the golden generation that won in 2014.

Like all great footballing nations, Germany has experienced disappointments too, including early exits that prompted reflection and rebuilding. But the overall record, four World Cups, countless deep tournament runs, and a reputation for resilience, places Germany firmly among the elite.

For anyone learning about the World Cup, Germany is essential to understand: a four-time champion whose consistency, organisation, and big-match temperament have made it one of the tournament's defining powers, and a benchmark for how a football nation can build lasting success.`,
        category: 'FIFA',
        author: 'Elena Marchetti',
        date: '2026-06-09',
        image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '33',
        title: 'World Cup Breakout Stars: Players Who Announced Themselves',
        excerpt: 'The World Cup has a habit of turning young talents into global icons overnight. Here is how the tournament makes stars.',
        content: `The World Cup is not only a contest between nations; it is also the greatest stage on which an individual footballer can announce themselves to the world. Throughout the tournament's history, young or previously little-known players have produced performances so dazzling that they became global stars overnight. This phenomenon of the "breakout star" is one of the most exciting aspects of every World Cup.

The reason the World Cup is such a powerful springboard is simple: it commands the attention of billions of people across the globe simultaneously. A player who shines here is seen by an audience far larger than any club match could ever reach. A few weeks of brilliant football on this stage can transform a promising talent into a household name, attract the interest of the biggest clubs, and define the trajectory of an entire career.

History offers many famous examples of this pattern. Perhaps the most iconic came in 1958, when a teenage Brazilian forward burst onto the scene, scoring crucial goals and helping his country to the title while still just seventeen years old. That tournament launched one of the greatest careers the sport has ever seen and set the template for the World Cup breakout star. Over the decades, other young players have followed in those footsteps, using the tournament to introduce themselves as the next generation of superstars.

These breakout moments often share common features. Frequently the player is young, competing at their first major tournament, and unburdened by the weight of expectation, which can free them to play with fearlessness and joy. Sometimes it is an unexpected goal in a crucial match, a moment of individual brilliance that captures the world's imagination, or a series of consistent, mature performances that reveal a talent ready for the highest level. In each case, the global spotlight amplifies the achievement enormously.

The World Cup also creates breakout stars from more established players who had not yet received worldwide recognition. A talented performer known within their own country or league can use the tournament to demonstrate their quality on the biggest stage, elevating their reputation dramatically. In this way, the World Cup acts as a great revealer, showing the world exactly who the finest players are.

For the players themselves, a breakout tournament can be life-changing. Beyond the fame, it often leads to lucrative moves to bigger clubs and a central role in their national team for years to come. It can also, however, bring immense pressure, as expectations soar and every subsequent performance is measured against that initial explosion of brilliance. Handling that new level of scrutiny becomes part of the challenge of stardom.

For fans, the emergence of a new star is one of the great pleasures of following the World Cup. Part of the anticipation of each tournament is wondering which young talent will seize the moment, produce something unforgettable, and step into the global spotlight for the first time. These stories add a powerful human dimension to the competition, reminding us that behind the flags and anthems are individuals chasing the defining moment of their careers.

The breakout star is woven into the very fabric of the World Cup. As long as the tournament continues to gather the world's attention every four years, it will keep providing the stage on which the next generation of footballing icons steps forward and announces itself to the world.`,
        category: 'FIFA',
        author: 'Priya Sharma',
        date: '2026-06-08',
        image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '34',
        title: 'The Growth of Women\'s World Cup Football',
        excerpt: 'The Women\'s World Cup has become one of the biggest events in sport. Here is a factual look at its remarkable growth.',
        content: `Women's football has experienced an extraordinary rise over the past few decades, and nowhere is this transformation more visible than in the Women's World Cup. Once a modest competition, it has grown into one of the biggest and most celebrated events in all of sport, reflecting the surging global popularity of the women's game.

The FIFA Women's World Cup was first held in 1991, a landmark moment that gave the women's game its own global showpiece. In its early editions, the tournament received relatively little attention compared with the men's competition, and women's football as a whole often lacked investment, professional structures, and media coverage. But the foundations laid by those early tournaments proved crucial, providing a stage on which the game could grow.

Since then, the growth has been remarkable. The tournament has expanded to include more teams, reflecting the spread of women's football to new countries and the rising standard of play worldwide. Crowds have swelled, television audiences have grown enormously, and the event now draws hundreds of millions of viewers around the globe. Recent editions have set attendance and viewership records, demonstrating that appetite for women's football has reached unprecedented levels.

On the pitch, the quality of the football has risen dramatically. Increased investment in professional leagues, coaching, and youth development has produced generations of highly skilled players, and the standard of competition at the World Cup has become genuinely elite. Matches are faster, more tactical, and more technically accomplished than ever before, and the gap between the leading nations has narrowed, making tournaments more competitive and unpredictable.

The United States women's national team has been the dominant force in the tournament's history, winning multiple titles and setting a standard of excellence that others have chased. But the success of the women's game is increasingly global. European nations have invested heavily and become powerful contenders, and teams from other regions have made significant strides, ensuring that the World Cup showcases talent from around the world. This broadening of competitiveness is a healthy sign of the game's deepening roots.

The rise of the Women's World Cup has been driven in part by star players who have become household names and powerful role models. Their skill, personalities, and advocacy have helped attract new fans and inspire young girls to take up the sport, knowing that a professional career and global recognition are genuinely achievable. Representation matters, and the visibility of these athletes has had a profound impact on participation and ambition.

Challenges do remain. Issues around pay, resources, and investment relative to the men's game continue to be the subject of important discussion, and campaigners have pushed for greater equality and support. Infrastructure and professional opportunities still vary considerably between countries. But the direction of travel is clearly positive, and each tournament brings fresh progress and greater recognition.

The Women's World Cup today stands as a symbol of how far women's football has come. From its modest beginnings in 1991 to record-breaking modern tournaments watched by huge global audiences, it reflects a sport that has claimed its rightful place on the world stage. For anyone following football, the Women's World Cup is no longer a side story but a major event in its own right, and one that continues to grow in stature, quality, and importance with every edition.`,
        category: 'FIFA',
        author: 'Jessica Park',
        date: '2026-06-07',
        image: 'https://images.pexels.com/photos/1652351/pexels-photo-1652351.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '35',
        title: 'How the World Cup Final Works: Format, Extra Time and Penalties',
        excerpt: 'The World Cup final is the biggest match in football. Here is exactly how it is played and how a champion is decided.',
        content: `The World Cup final is the single biggest match in football, the climax of a month-long tournament and, for the players involved, the most important 90 minutes of their careers. Watched by well over a billion people around the world, it is a match unlike any other. Understanding exactly how the final works, and how a champion is decided, deepens the drama of the occasion.

The two teams that reach the final are the winners of the two semi-finals, having navigated a gruelling path through the group stage and the knockout rounds to get there. Only these two nations, out of all those that began the tournament, remain, which is what gives the final its extraordinary weight. The winner is crowned world champion, the highest honour in the sport, and gets to lift the famous trophy.

The final itself is played, like other matches, over 90 minutes, divided into two halves of 45 minutes each, with a halftime break. The team that scores more goals in this time wins the match and the World Cup. In many finals, this is how the destiny of the trophy is settled, in regulation time, sometimes comfortably and sometimes by the narrowest of margins.

But the final, being a knockout match, cannot end in a draw. If the two teams are level after 90 minutes, the match goes to extra time. Extra time consists of two further periods of 15 minutes each, played in full regardless of when goals are scored. These 30 additional minutes are a test of stamina, nerve, and composure, as exhausted players push themselves further in pursuit of a decisive goal. Many of the World Cup's most dramatic finals have been settled during this tense extra period.

If the scores remain level even after extra time, the final is decided by a penalty shootout, one of the most nerve-shredding spectacles in all of sport. In a shootout, the teams take turns to attempt penalty kicks from the penalty spot against the opposing goalkeeper. Each side takes a set number of kicks, and the team that scores more wins. If they are still level after the initial round, the shootout proceeds to sudden death, where a single missed kick can decide the world champion. The pressure on the players stepping up to take these penalties, with a nation's hopes resting on each kick, is almost unimaginable, and goalkeepers can become instant heroes by making a decisive save.

This structure, 90 minutes, then extra time, then penalties, ensures that the World Cup final always produces a winner on the day, no matter how closely matched the two teams are. It also builds tension in stages, with each phase raising the stakes and the drama, which is part of why the final is such compelling viewing.

Beyond the rules, the final is wrapped in ritual and significance. There is the pageantry of the occasion, the presence of the sport's most important figures, and the awarding of individual honours alongside the team triumph. For the winning players, lifting the World Cup is the pinnacle of a footballing life; for the losing finalists, defeat at the final hurdle can be a source of lasting heartbreak.

Understanding the format, regulation time, extra time, and the penalty shootout, allows you to follow the final's escalating drama with full appreciation. It is a match built to deliver tension and resolution on the grandest possible scale, the fitting conclusion to football's greatest tournament and the moment a new world champion is born.`,
        category: 'FIFA',
        author: 'Carlos Mendoza',
        date: '2026-06-21',
        image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '37',
        title: 'The Beautiful Game Reborn: How Tiki-Taka Evolved Into Total Football',
        excerpt: 'Tactical revolution on the pitch — how modern football philosophy is reshaping the global game.',
        content: `Football has always been a sport of constant evolution. From the rigid formations of the early twentieth century to the fluid, pressing systems that dominate the modern era, the beautiful game reinvents itself with every generation. But few tactical revolutions have been as profound, as aesthetically breathtaking, or as globally influential as the fusion of tiki-taka and total football that has emerged over the past decade.

The roots of this philosophy trace back to the legendary Johan Cruyff, whose vision of football as a spatial puzzle — a constant battle for positional superiority — laid the intellectual groundwork for everything that followed. Cruyff believed that possession was not merely a statistic but a weapon. To control the ball was to control time, space, and ultimately the opponent's will to resist. His ideas, planted first at Ajax and later at Barcelona, grew into a footballing tree whose branches now shade every major league on earth.

Tiki-taka, as it became known, reached its zenith with the Spanish national team and FC Barcelona in the late 2000s and early 2010s. Short passes, high pressing, numerical overloads in central zones — the system was beautiful to watch and devastatingly effective. Spain won three consecutive major tournaments. Barcelona dismantled opponents with a combination of technical brilliance and tactical intelligence that left pundits reaching for new superlatives.

But football, ever restless, demanded more. Critics began to note that pure tiki-taka, stripped of defensive purpose, could become sterile possession — impressive in statistics but lacking penetration. The response from elite coaches was to graft the pressing intensity of Jürgen Klopp's gegenpressing philosophy onto the positional principles of the Spanish school. The result was something entirely new: a system that combined the ball retention of tiki-taka with the vertical aggression of direct football and the space-creation of total football.

The modern manifestation of this hybrid is most visible in the best teams of the current era. Fullbacks become auxiliary wingers, inverting into midfield when the team attacks and forming a back-three defensively. Central midfielders are expected to press high, recover quickly, and still contribute to build-up play. The demands on players have never been higher — physically, technically, or tactically.

Data analytics has accelerated this evolution at an extraordinary pace. Every team now employs a full analytics department that tracks expected goals, pressing intensity metrics, space creation indices, and dozens of other variables that would have been unimaginable even twenty years ago. Coaches can now identify the precise moment in a game when the opponent's defensive block becomes vulnerable to a switch of play, or when a specific pressing trigger should be activated.

Youth development has transformed in response. The elite academies of Europe now produce players who are fully fluent in multiple positional roles before they turn eighteen. The days of a player being simply a striker or simply a left back are giving way to multifunctional footballers who can seamlessly adapt to different shapes within a single match. This flexibility is the hallmark of the modern game's tactical richness.

The global spread of this philosophy has democratized football in remarkable ways. Nations that were once considered technically inferior to the traditional powers now produce players of exceptional quality, schooled in the same positional and pressing principles. South American academies, African youth systems, and Asian development programs have all absorbed and adapted these ideas to produce football that is genuinely competitive at the highest international level.

What makes this moment in football history so fascinating is that the game has never been more intellectually rich. Tactical debates that once took place only in coaching manuals now fill mainstream media. Supporters have become students of the game, dissecting formations, analysing pressing maps, and debating the merits of a high defensive line with a sophistication that would astonish the football fans of previous generations.

The next evolution is already taking shape. Artificial intelligence tools are beginning to provide real-time tactical guidance during matches. Wearable technology is giving coaches instant physiological data that influences substitution decisions. The beautiful game is becoming a beautiful science, and its capacity to surprise, delight, and inspire shows absolutely no sign of diminishing.`,
        category: 'Football',
        author: 'Maria Gonzalez',
        date: '2025-06-18',
        image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?w=1200',
        readTime: 10
    },
    {
        id: '38',
        title: 'Wimbledon Wonder: The Grass Court Battle That Defined a Generation',
        excerpt: 'Five sets, five hours, and a performance that cemented a legend s place in tennis history',
        content: `Centre Court was hushed in the way that only Wimbledon can produce — a reverence born of tradition, of decades of great moments compressed into that single rectangle of immaculate grass. Then the first serve thundered down at 140 miles per hour, and the match that tennis fans had waited all year to witness exploded into life.

The rivalry that defined this Wimbledon was built over years of encounters that consistently delivered drama beyond reasonable expectation. These two players represented genuinely contrasting philosophies of tennis. One was a serve-and-volley purist, a throwback to the grass-court masters of a previous era, a player who treated the net as his natural habitat and the volley as his finest brushstroke. The other was a baseline tactician of extraordinary athleticism, a player who had systematically demolished every vulnerability in the traditional grass-court game and rebuilt it as a surface that rewarded patience and punished risk.

The first two sets were won in contrasting fashions that set the narrative perfectly. The serve-and-volley master took the first set with a virtuoso display of touch, anticipation, and placement. His approach shots were works of geometrical precision, angles calculated to force the baseline player out of position and leave the court open for crisp volleys that skimmed the tape. The second set went to the baseliner, who weathered the net attacks with extraordinary defensive retrieval and began to find the passes that would become increasingly important as the match wore on.

By the third set, both players were performing at a level that left the commentary team repeatedly exhausted of adjectives. Every game seemed to distil the entire history of tennis tactics into a microcosm. The server produced an ace that made a ball-boy flinch. The retriever launched a running forehand down the line that hit the corner with a thump audible three rows back. Tiebreaks were contested with a ferocity that made the crowd forget to breathe.

The physical demands became visible in the fourth set. Both players were moving with the slightly deliberate quality of men managing their resources carefully, choosing moments to surge and moments to conserve. Strapping appeared on one knee. A trainer visit addressed cramping in a forearm. But these are the moments that separate Wimbledon from every other tournament — the capacity of great players to transcend physical limitation when the occasion demands it.

The fifth set was played in near-silence broken by eruptions of applause that rolled around the stadium like thunder. Every point felt weighted with meaning. The break of serve that eventually decided the match came on a point that lasted forty-three shots — a rally that swung momentum back and forth so many times that the crowd seemed uncertain whether to commit to excitement or brace for disappointment.

When it finally ended, the champion sank to his knees on the grass in a posture that has become one of sport's most recognizable gestures of release. Five sets, five hours and fourteen minutes, and a performance that will be shown to future generations as the definitive argument for what makes tennis the most psychologically demanding sport in the world.

The post-match press conference was extraordinary in its own right. Both players spoke with a generosity and mutual admiration that reflected the bond formed through years of shared combat at the highest level. The loser acknowledged that he had played as well as he was capable of playing and had still lost. The winner said, simply, that he had never felt more alive on a tennis court. Centre Court, still faintly warm from the afternoon sun, had produced another chapter in its endless, magnificent story.

The implications for the rankings, the Grand Slam count, and the broader conversation about the greatest of all time were immediate and loud. But the players themselves seemed uninterested in legacy in that moment. They were two men who had given everything to a tennis match, and who understood, better than anyone, what a privilege that is.`,
        category: 'Tennis',
        author: 'Sophie Williams',
        date: '2025-06-15',
        image: 'https://images.pexels.com/photos/2277980/pexels-photo-2277980.jpeg?w=1200',
        readTime: 9
    },
    {
        id: '39',
        title: 'Breaking the Tape: Inside the World Record 100m Sprint at the World Championships',
        excerpt: 'A new world record, a nation s tears, and the fastest 9.7 seconds in human history.',
        content: `The start line of the 100 metres at a World Athletics Championship is the loneliest and most electric place in sport. Eight athletes, the fastest human beings on Earth, crouch in their blocks and face the simplest, most brutal test that athletics offers: run as fast as you possibly can, in a straight line, for one hundred metres. No tactics, no teammates, no time-outs. Just you, the track, and the air resistance that every tenth of a second spent training has been dedicated to defeating.

The morning of the final had been charged with anticipation in a way that even veteran athletics journalists found unusual. The qualifying rounds had produced times that suggested the world record — one of sport's most storied and psychologically formidable barriers — was genuinely under threat. Weather conditions were close to ideal: warm, with a legal tail wind measured at 1.6 metres per second. Track temperature was optimal for maximum energy return from the surface. And the athlete who would ultimately make history had been in a form that his coach described, with careful understatement, as the best of his life.

The blocks phase of the race, invisible to the naked eye but forensically analysed by biomechanics experts in the seconds after the gun fired, was exceptional. His reaction time — 0.101 seconds — was among the fastest ever recorded in a major championship final. But reaction time alone does not make world records. It is the acceleration phase, from zero to maximum velocity, where champions are separated from the merely extraordinary, and here the eventual record-breaker produced something that will be studied in sports science institutions for years.

His drive phase lasted an unusually long forty-three metres, maintaining acceleration beyond the point where most sprinters begin to transition into maximum velocity running. His stride rate during this phase was measured at 4.6 strides per second — extraordinary for an athlete of his height and leg length. By the sixty-metre mark, when the biomechanical analysis was later published, he was already 0.04 seconds ahead of the previous world record split at that point.

The roar from the stadium began building before the finish line was crossed, as spectators began to sense from the visual cues alone — the gap to the field, the clock visible on the stadium screens — that something historic was happening. When the time flashed on the board, the roar became something physical, a pressure wave that athletes in the warm-up area half a kilometre away later described as audible and distinct.

The post-race scenes unfolded with the particular combination of euphoria and disbelief that accompanies sporting history. The champion ran a victory lap holding his nation's flag, tears streaming freely, occasionally stopping to embrace officials, volunteers, and opponents who had crossed the line behind him. His competitors, themselves among the fastest men in history, formed a guard of honour that spoke to the universal recognition among athletes of what they had witnessed.

The press conference lasted ninety minutes and produced enough material for a season of documentary filmmaking. He spoke about the decade of work that had preceded this moment — the dawn training sessions, the injuries that had required complete rebuilding of his sprinting mechanics, the mental health struggles that he chose to discuss with unusual candour for a high-profile athlete. He thanked his mother, his coach, his physio, and his training group with specificity and warmth. He said that the world record felt, in that moment, less like an achievement and more like a responsibility — a new standard that he was now obliged to defend and extend.

Athletics observers noted that the record, while extraordinary, had been achieved by an athlete who had not yet reached the age typically associated with peak sprinting performance. The conversation about what might still be possible, about how fast a human being can theoretically run one hundred metres, had been reopened with a force that the sport had not felt since the golden age of the late twentieth century.

The track itself has become something of a pilgrimage site in the days since. Spectators have been photographed pointing at the finish line with the particular reverence usually reserved for historical monuments. Which, in a very real sense, it now is.`,
        category: 'Athletics',
        author: 'David Okafor',
        date: '2025-06-10',
        image: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?w=1200',
        readTime: 9
    },
    {
        id: '40',
        title: 'Monaco Magic: The Strategy That Rewrote Formula 1 History',
        excerpt: 'An underdog team, a genius pit-wall call, and a race result nobody saw coming.',
        content: `Monaco has always been Formula 1's most unforgiving theatre. The barriers are close, the escape roads nonexistent, and the margin for error so thin that hundredths of a second can be the difference between triumph and catastrophe. It is the race that every driver wants to win above all others, the circuit where reputation is forged or destroyed within the span of a single afternoon. And this year's Monaco Grand Prix delivered something that even the most seasoned paddock veterans struggled to find adequate words for.

The race weekend had begun conventionally enough. The dominant team of recent seasons arrived with the fastest car, as expected, and set pole position with the kind of controlled, clinical lap that has come to define their era of supremacy. The paddock anticipated a procession. Monaco's narrow layout makes overtaking extraordinarily difficult, and a car that qualifies first at this circuit converts pole to victory at a rate that renders the race almost academic in most years.

What the dominant team did not anticipate was the strategic masterstroke that their rivals had been developing in their simulator for three months. The underdog team had identified, through exhaustive data analysis, a narrow window in which a very late safety car — triggered by one of the inevitable minor incidents that Monaco produces — combined with a specific tyre compound combination, could create an opportunity for an undercut of breathtaking audacity.

The safety car appeared on lap forty-one of seventy-eight, triggered by a barrier contact that scattered carbon fibre across the Nouvelle Chicane. In the split second that the safety car signal appeared on timing screens, the underdog team's strategy director made the call that would be replayed and debated for years. Instead of the conventional response — pitting immediately to take the free stop — he gambled on staying out, calculating that the leader would pit and that his driver could take the lead by simply staying on track for one additional lap before pitting for fresh tyres.

The pit stop his driver subsequently produced, at 2.1 seconds, was the fastest in the team's history. And when the field reorganised after the safety car period ended, the leaderboard showed an arrangement that made the entire paddock perform a collective double-take. The underdog driver was in the lead. The dominant team, their strategy undone by the single call they had not modelled, were fifth and seventh.

What followed was a defensive masterclass. The lead driver protected his position with an intelligence and precision that belied his relative youth. He placed his car on the racing line with millimetric accuracy at every corner, denying overtaking opportunities in a circuit that offers almost none anyway. His tyre management, critical given that he was now running the harder compound on a circuit where the softer tyre is conventionally preferred, was exceptional. Lap after lap, his pace control was perfect — fast enough to maintain the gap, conservative enough to avoid the degradation that would have handed the lead back.

The final ten laps were watched in near silence in the team's hospitality suite, in the manner of people who dare not speak in case they disturb something fragile and precious. When the chequered flag fell, the scenes were of the kind that make motorsport worth everything it costs — engineers weeping, mechanics punching the air, a team principal who had spent fifteen years building this operation simply sitting with his face in his hands.

The champion's radio message as he crossed the line contained a single word, a word that has subsequently been printed on merchandise, tattooed on forearms, and used as the caption beneath the photograph that now hangs in the team's factory: "Unbelievable." And the precise, technical, unsentimental world of Formula 1 — a world of aerodynamic coefficients and pit-stop drill repetitions — agreed, for once, that unbelievable was exactly the right word.`,
        category: 'Motorsport',
        author: 'Luca Ferrari',
        date: '2025-06-05',
        image: 'https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg?w=1200',
        readTime: 9
    },
    {
        id: '41',
        title: 'Test Cricket\'s Greatest Week: The Ashes Thriller That Restored Faith in the Long Game',
        excerpt: 'Five days, two incredible batting collapses, and a finish that left grown men in tears.',
        content: `There is a particular kind of time in Test cricket that exists nowhere else in sport. The game unfolds across five days and six hours of scheduled play per day, which means that a Test match can contain literally thousands of deliveries, hundreds of decisions, dozens of mini-dramas, and entire psychological arcs that last longer than some people's working weeks. It is this temporal depth that allows Test cricket to produce the kind of narrative richness that the Ashes series delivered in the most extraordinary Test match played in a generation.

The surface at the ground on the first morning was a greenish-tinged pitch that made both captains thoughtful during the toss. The captain who won it chose to field, a decision that would be second-guessed and then vindicated and then second-guessed again across the five days that followed. The opening bowling spell from the home side was seam bowling at its most potent — the ball swinging late, cutting off the surface, finding edges with a regularity that reduced the tourists to four wickets for twenty-three runs in the first session.

That the touring side recovered to reach 187 all out was a testament to a lower-order partnership that lasted forty-two overs and required the home side to summon reserves of patience and variation that they had not anticipated needing quite so early. The tail-enders batted with an obduracy that gradually shifted the psychological momentum, and when the home side came to bat on the first afternoon, they found themselves navigating conditions that had settled into something much more benign than the morning had suggested.

Day two produced one of the great individual batting performances in Ashes history. The number four batsman for the home side constructed an innings that moved through phases like a symphony — cautious and probing in its opening passages, increasingly assured through the middle movement, and finally dominant and free in its final expression. His century came from 167 balls; his second century came from 88 more. By the time he was dismissed for 211 in the final session of the day, he had placed his team in a position of such commanding authority that the match seemed, to most observers, effectively decided.

It was not decided. Test cricket resists simple conclusions with a stubbornness that borders on the wilful. Day three was interrupted by rain, which meant that the pitch, already showing signs of wear, was exposed to moisture that altered its character completely when play resumed. Overnight, the cracks that had been forming since the first day deepened and widened, and the rough outside the left-hander's off stump became a minefield that the touring spinners would exploit with devastating effect.

The home side's second innings collapse was one of the most extraordinary batting failures in recent memory. From a position of apparent safety, requiring only 187 runs from a minimum of ninety overs to win the match, they lost their first six wickets for thirty-one runs in a period of play so nightmarish that the dressing room television was reportedly switched off by the batting coach who could not bear to watch. The spinning ball defied both reason and physics, turning sharply from the rough and finding edges and pads with a capricious cruelty that seemed to be enjoyed by nobody except the fielding side and approximately half the crowd.

The final session of day five — contested, ultimately, between two genuinely possible outcomes — is already legendary. The last pair batted for eleven overs to save the match for the home side. Both players had career Test averages that made their presence at the crease in this situation somewhere between desperate and absurd. But cricket, more than any other game, rewards courage over calculation when calculation has run out of options, and these two players batted with a fierce, uncomplicated bravery that gradually silenced the partisan crowd and earned the grudging admiration of the fielding side. When stumps were drawn with the match drawn, the standing ovation lasted four minutes.`,
        category: 'Cricket',
        author: 'Priya Sharma',
        date: '2025-06-01',
        image: 'https://images.pexels.com/photos/29949985/pexels-photo-29949985.jpeg?w=1200',
        readTime: 10
    },
    {
        id: '42',
        title: 'Into the Deep End: How Elite Swimmers Are Pushing Human Limits at the World Aquatics Championship',
        excerpt: 'Records fall, barriers shatter, and a new generation of swimmers redefines what is possible in the pool.',
        content: `Water is indifferent to human ambition. It does not applaud, does not respond to determination, and does not distinguish between the world champion and the novice splashing in a public lane. It simply resists, with the same specific gravity and viscosity that it has always had, against every body that moves through it. Which is what makes the margins by which elite swimmers continue to improve so breathtaking — they are winning an argument with physics itself, and the physics keeps losing.

The World Aquatics Championship pool in its current incarnation is a technical marvel. The lane ropes are engineered to absorb turbulence rather than reflect it, reducing the interference between competitors' wake patterns to near zero. The pool depth maximises the downwash effect — the way that water displaced by a swimmer's stroke disperses downward rather than backward, reducing drag. The filtration and temperature systems maintain conditions to tolerances that would have seemed impossibly precise to the swimmers of even twenty years ago. This is sport as an engineering project, and the results are visible in the record books.

The 200-metre butterfly final produced the most discussed performance of the championship. The gold medallist's stroke, analysed frame by frame in the broadcast technology suite, showed a kinetic chain from fingertip to hip rotation that biomechanists described as approaching the theoretical optimum for the human body structure. His underwater phases were of a length and power that exceeded by measurable margins the models that had been considered the ceiling of what was biomechanically achievable. He is not a larger person than his rivals. He is not measurably stronger. What he possesses, according to the scientists who have studied him, is an unusual neuromuscular efficiency — the ability to convert metabolic energy into propulsion with a minimum of wasteful movement that remains inexplicable even to the experts who identify it.

The women's 400 individual medley told a different story — one about tactical intelligence rather than pure physicists' elegance. The race began with a field that was, on paper, the most competitive in the event's history, with six swimmers capable of gold and three with genuine world-record ambitions. The first 100 metres, contested on butterfly, saw a tactical surprise: the eventual winner chose a pace that was deliberately conservative, sitting third and allowing the field to set a tempo that she had calculated, on the evidence of her rivals' recent performances, was unsustainable for the full 400.

Her butterfly split was not her strength. Her backstroke split, the second leg, was competent. But the breaststroke leg — the third 100 metres, the one that almost always decides this event — was where she made her move, and the move was so decisive that three other swimmers who had been in medal contention simply couldn't respond. By the time the field turned for the final freestyle leg, the race was hers to lose, and losing is not something she has recently made a habit of.

The mixed 4x100 medley relay produced the most noise the aquatics centre has experienced since its opening. Four swimmers from four different backgrounds, unified by a flag and four months of intensive relay-specific training that included thousands of hours of synchronised changeover practice. The baton exchange between the backstroke and breaststroke legs — a moment lasting perhaps 0.8 seconds — was executed with a technical precision that the relay coaches described as the best they had ever seen. The final freestyle swimmer hit the wall with a split that would have been a world-class time in an individual event, and the scoreboard confirmed a world record by 0.46 seconds.

The post-race conversation among coaches and sports scientists returned repeatedly to one theme: the next generation. The athletes who came second and third in these events, in many cases setting personal bests and national records despite the bronze or silver, were in many cases under twenty-two years old. The performance curve of elite swimming has not flattened. If anything, access to better sports science, improved nutrition protocols, more sophisticated training periodisation, and a global talent pool that is widening with every passing decade, suggests that the records set this week will not survive the next four years. The water, for its part, remains indifferent. The swimmers are not.`,
        category: 'Swimming',
        author: 'Clara Jensen',
        date: '2025-05-28',
        image: 'https://images.pexels.com/photos/73760/swimming-swimmer-female-race-73760.jpeg?w=1200',
        readTime: 9
    },
    {
        id: '43',
        title: 'The Iron Distance: Inside the Mind of an Ironman World Champion',
        excerpt: 'Swimming, cycling, running — and the extraordinary mental architecture that makes champions.',
        content: `The alarm sounds at 4:15 AM in the darkness of a hotel room in Kailua-Kona, Hawaii. Outside, the Pacific Ocean is already warm and black, and the town is beginning its extraordinary annual transformation into the global headquarters of human endurance. For the athlete who is about to become world champion, this morning is the culmination of eleven months of preparation so comprehensive and so consuming that describing it as training understates the total reorganisation of life that it requires.

Ironman triathlon demands a unique form of athletic intelligence. Unlike single-discipline sports, where the preparation can be beautifully focused, the Ironman athlete must become three things simultaneously: a swimmer capable of covering 3.8 kilometres of open water without significant fatigue, a cyclist who can produce sustained power over 180 kilometres in conditions that vary from headwind to crosswind to sun exposure, and a runner who, after all of that, can still run a marathon with enough control to negative-split the final ten kilometres. The training load to achieve competence in all three disciplines is immense. The art of balancing them without overtraining any one of them is genuinely scientific.

The swim at Kona begins in the peculiar organised chaos of a mass start — approximately two thousand athletes entering the ocean simultaneously, and spending the first ten minutes in a churning mass of arms, legs, and turbulence that bears some resemblance to a washing machine. Elite athletes need to position themselves at the front of this melee without losing energy to the jostling, and without compromising the relaxed, sustainable stroke mechanics that will be necessary if they are to exit the water in a state that allows them to ride effectively. Our champion exited the water in the lead pack, a position achieved not through exceptional swimming speed but through exceptional positioning intelligence.

The bike course at Kona is among the most demanding in triathlon for a reason that has nothing to do with gradient: it is the wind. The lava fields that make up much of the course funnel and amplify trade winds into gusts that can exceed sixty kilometres per hour, creating conditions where power output varies enormously from one kilometre to the next and where aerodynamic positioning must be continuously adjusted. The data file from a champion's power meter at Kona looks like an irregular heartbeat — a constant negotiation between the watt targets set by physiology and the reality imposed by conditions.

At kilometre 120, the eventual champion made the decision that won the race. His power meter showed that his rivals were beginning to push harder — a collective surge that had the hallmarks of a tactical attack designed to open a gap before the run. He chose not to respond. His heart rate monitor, rigorously studied in the months of preparation, told him that matching the surge would cost him something he couldn't afford to spend before the marathon. He let the group go, maintained his own pace, and trusted the data over the instinct to chase.

The marathon began at kilometre 181, in heat that the race medical team had recorded at 36 degrees Celsius on the road surface. Every runner in the field was managing the same physiological reality: glycogen depleted, legs pre-loaded with eleven hours of fatigue, the target of 26.2 miles requiring a mental reconstruction of reality that training can approximate but never fully replicate. The champion's run began conservatively and accelerated through each successive 10-kilometre segment in a display of pacing mastery that his coach would later describe as the best execution of a run strategy he had ever seen from any athlete.

By the time he crossed the finish line on Ali'i Drive, with the traditional lei placed around his shoulders and the crowd erupting into the specific euphoria that Kona reserves for its finishers, he had been in motion for just under eight hours. The journey from 4:15 AM to this moment had involved 226 kilometres of racing and eleven months of preparation. His face, as the broadcast cameras found it, was not quite the expression of triumph that sports photography typically captures. It was something quieter and deeper — the expression of a person who has been inside something very large and has come safely through the other side.

In the press conference that followed, he was asked what he thinks about in the final ten kilometres of the marathon. He paused for a long time before answering. "I try not to think about anything," he said. "The point of all the training is to make it so that the body knows what to do. In those last kilometres, I try to stay out of its way."`,
        category: 'Wellness',
        author: 'Nathan Brooks',
        date: '2025-05-22',
        image: 'https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?w=1200',
        readTime: 10
    },
    {
        id: '44',
        title: 'Tour de France Preview: The Mountain Stages That Will Crown a Champion',
        excerpt: 'As the peloton rolls out, three climbers, two sprinters, and one undiscovered talent hold the key.',
        content: `The Tour de France begins, as it always does, with a grand declaration of intent — a prologue time trial in which the world's best cyclists announce themselves, measure their condition against each other, and set the psychological tone for three weeks of racing that will consume them entirely. But the Tour is not won in the prologue. It is won in the mountains, and specifically in a handful of mountain stages that compress the entire race into decisive hours where champions separate themselves from contenders with a finality that no subsequent result can entirely reverse.

This year's route committee has produced a parcours of particular malice. The Alpine stages in week two include three summit finishes in four days — a sequence that will test the recovery capacity of every general classification contender to its absolute limit. The Pyrénean stages in week three offer a mountaintop finale at altitude, on a road so steep and so long that its gradient profile, when plotted on a graph, looks more like a wall than a climb. These are stages designed to make the race dramatic, and they will succeed.

The favourites going into this edition are a familiar cast with unfamiliar dynamics. The reigning champion arrives with the strongest support team in professional cycling, a squad so deep and so experienced that even their domestiques — the riders whose function is to sacrifice their own race for their leader's benefit — have resumes that would make them contenders on many other teams. His climbing is exceptional, his time-trial capacity is underrated, and his tactical intelligence has grown with every grand tour he has completed. The question mark against him is not ability but appetite: there are whispers in the peloton that the mental cost of defending a title through three more weeks of total commitment may be higher than even he can readily bear.

His principal rival is a climber of the pure, rapturous kind that the Tour seems to produce once in a generation — a rider so light and so powerful on steep gradients that the normal rules of competitive cycling seem to bend around him. His recent form in preparation races has been quietly extraordinary: he has been winning not by large margins but with a precision and control that suggests reserves being carefully preserved for the weeks ahead. His weakness, which his rivals' teams have mapped in exhaustive detail, is the time trial. If the race arrives at the final weekend with marginal time differences, the specialists against the clock will have an opportunity.

The undiscovered talent — a rider who turned twenty-three last February and who has not previously featured in the favourites conversation for a three-week race — has produced a build-up to this Tour that has made the peloton's talent scouts revise their projections with unusual speed. His VO2 max, tested in the controlled environment of a sports science laboratory, falls within the range associated historically with grand tour winners. His climbing data from this spring's race programme shows a power-to-weight ratio that is comparable to, and in some individual stage profiles superior to, both of the acknowledged favourites. What is unknown is whether he has the tactical experience to navigate three weeks of racing without making the kind of mistake that inexperience tends to produce under the specific pressures of the Tour.

The sprint stages — the flat days that bookend the mountain blocks and give the peloton's fastest men their opportunities — will provide context and points of interest between the decisive moments. The sprinter's competition this year is as strong as any in recent memory, with four riders capable of winning on any given day and team sprint train formations of increasing sophistication that make the final kilometre of a flat stage a tactical set piece as complex as anything in the mountains.

But it is in the mountains where the Tour finds its soul, and where its history accumulates with each passing July. The great climbs — the names that are as much a part of the sport's mythology as the champions who conquered them — will play their familiar roles in the drama. The crowds that line these roads, sometimes five deep for hours before the race arrives, represent a connection between sport and landscape that is unique to cycling. The Tour de France is not merely a sporting event; it is an annual negotiation between human aspiration and the indifferent grandeur of the Alps and Pyrenees. That negotiation begins again this Sunday.`,
        category: 'Cycling',
        author: 'Pierre Dubois',
        date: '2025-05-18',
        image: 'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?w=1200',
        readTime: 9
    },
    {
        id: '45',
        title: 'Super Bowl Sunday: How the Underdog Defense Dismantled the Greatest Offense in NFL History',
        excerpt: 'Blitzes, coverages, and a fourth-quarter stand for the ages — inside the game plan that shocked the football world.',
        content: `The narrative going into this Super Bowl was so comprehensively dominated by one team's offense that the game-plan analysis published in the week before kickoff read less like balanced previews and more like an extended meditation on how many points a single football team could possibly score. The starting quarterback had thrown for 4,847 yards during the regular season. His two primary receivers had combined for 187 receptions. The running back had topped 1,600 yards. Every measurable indicator pointed to an offensive juggernaut that would make history, and the only real question — so the consensus suggested — was whether the defensive team on the other side of the line of scrimmage could at least make it competitive before the inevitable conclusion.

The defensive team had a different perspective. Their defensive coordinator, a figure who has been described variously as a chess grandmaster, a philosopher, and an obsessive, had spent three months building a game plan that his team practised in secret, executing it in scrimmage sessions that were closed to media in a way that prompted speculation about what, exactly, was being prepared. What was being prepared, it turned out, was a defensive scheme of such specific brilliance that it rendered the most statistically devastating offense in NFL history almost completely inoperative for three of the four quarters.

The key insight of the defensive game plan was not the blitz, though the blitz was part of it. It was the combination of a zone coverage shell — a Cover 2 variant that the coordinator had modified at a structural level — with a pass-rush built around specific personnel matchups that targeted the offensive line's most vulnerable pairings. The starting quarterback, accustomed to processing coverages with machine-like efficiency, was confronted with a defensive presentation that changed the principles of what he was looking at at the line of scrimmage. And when the picture changes on an elite quarterback, the time required to re-read and re-process that picture is measured in fractions of a second that a well-designed pass rush can exploit with devastating consistency.

The first half ended with the offensive juggernaut having produced 7 points. Seven. Against a defense that had allowed an average of 24 points per game during the regular season. The sports media infrastructure, having prepared its output for a different kind of evening, scrambled to recalibrate. The halftime show, performed with its usual spectacle, barely registered in the sports conversations happening simultaneously across the country. Everyone wanted to talk about what they had just seen, and no one quite had the vocabulary for it yet.

The second half adjustment was where the offensive team displayed the resilience that great organisations produce. The coordinator changed three fundamental aspects of the game plan simultaneously, installing new route combinations and adjusting the protection schemes in ways that the defence could not immediately counter. For twelve minutes of the third quarter, the previously dysfunctional offense found rhythm, and it felt briefly as though the normal order was reasserting itself. Two touchdowns narrowed the deficit to three points.

The fourth-quarter defensive stand that ended the game will be discussed in coaching clinics, analysis sessions, and sports bars for years. Backed up to their own goal line, needing a stop with two minutes and twelve seconds remaining, the defense produced three consecutive plays that collectively required the kind of execution under pressure that justifies the entire enterprise of professional sport. A blitz that arrived a tenth of a second faster than the quarterback's internal clock expected. A coverage rotation that took away the safety valve route that had been the offense's answer to pressure all season. And a final play, a fourth-and-goal from the two-yard line, on which every member of the defensive unit arrived at the correct assignment simultaneously and did not flinch.

The final score — 17-14 — will not be recognised by the casual observer as the magnitude of upset it represents. The margin of three points disguises the completeness of the defensive achievement. The box score shows a quarterback who threw for 187 yards; his season average was 332. It shows zero touchdowns and one interception for an offense that had averaged three touchdowns per game. Statistics that would, on any other day, signal something gone profoundly wrong. On this day, they were the fingerprints of a masterpiece.`,
        category: 'American Football',
        author: 'Tyler Johnson',
        date: '2025-05-10',
        image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?w=1200',
        readTime: 10
    },
    {
        id: '46',
        title: 'Perfect Ten Revisited: The Gymnast Who Redefined What the Human Body Can Do',
        excerpt: 'New skills, impossible landings, and a scoring system struggling to keep pace with one athlete\'s genius.',
        content: `There is a specific silence in a gymnastics arena at the moment when an athlete launches from the vault, or releases from the high bar, or begins the tumbling run that will either confirm or destroy the routine they have been preparing for four years. It is not quite the silence of anticipation; it is more like the silence of collective held breath, of an audience that understands, at some level below conscious thought, that it is witnessing an attempt on something that the human body was not obviously designed to do.

Gymnastics is unusual among Olympic sports in that its scoring system is, in a technical sense, unbounded. Unlike running or swimming, where the stopwatch provides an objective and unchallengeable verdict, gymnastics is evaluated by judges applying a code that assigns difficulty values to skills and deduction values to errors. The difficulty side of this equation has been continuously revised upward as athletes produce skills that were not in the code when it was written, requiring the governing body to add new entries and new scores to accommodate what their athletes are actually doing.

The gymnast who has dominated women's artistic gymnastics for the past four years has personally driven several revisions to the code of points. She is the reason that four specific skills have been named after her in the official rulebook — a distinction that requires not merely performing a skill that no one has performed competitively before, but performing it to a standard sufficient for judges to confirm its execution in a competition context. Most elite gymnasts complete their careers without their name attached to a single skill. She has four named skills and is working on a fifth.

Her competitive programme at this World Championship contained a vault that the difficulty panel had assigned a value of 6.6 — the highest start value for any vault in the women's code. To understand what this number represents, it is necessary to know that a vault with a 5.0 start value is considered extremely difficult by any standard other than hers. The vault she performs involves a hand placement on the table, a half twist in the first flight phase, a two-and-a-half twist in the second flight phase, and a landing with sufficient height and distance from the table to allow the rotation to complete before the floor arrives. She has performed this vault 847 times in training. She has competed it successfully on 34 competitive occasions. Her coaches have her landing data mapped to the millimetre.

The floor exercise, which closes the competition and which she uses as an opportunity for the most personal expression in her competitive repertoire, contained four tumbling passes. The difficulty of each pass individually would have won medals in previous world championships. Combined into a single routine with the choreographic flair and apparent ease that she brings to even her most technically demanding moments, they created something that the head judge, in post-competition remarks released to the official media pool, described as the most complete floor exercise she had witnessed in twenty-five years of international judging.

The score the judges produced was, predictably, a new competition record. It was also a personal best by 0.15 points, which in a sport where margins of 0.001 points have decided World Championship medals, is a margin of almost absurd magnitude. Her reaction to seeing the score was entirely characteristic of the athlete she is: a brief smile, a quiet word to her coach, and then the specific focused quality that she carries through competition, like a state of heightened awareness that processes everything and reveals very little.

The conversation about where she ranks historically is a genuine sporting debate, uncorrupted by sentiment or nostalgia, because the evidence is too compelling to be easily dismissed. The skills she performs today were not considered biomechanically achievable by the previous generation of elite athletes. The scores she produces under competition pressure continue to revise upward the definition of what excellence in gymnastics means. The question of whether her performances represent the ceiling of what human gymnastics can achieve is one that coaches and scientists have been quietly debating — and quietly concluding, given the trajectory, is probably not yet answered.`,
        category: 'Gymnastics',
        author: 'Yuki Tanaka',
        date: '2025-05-05',
        image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?w=1200',
        readTime: 9
    },
    {
        id: '47',
        title: 'Riding the Century Wave: How Big Wave Surfing Conquered the Unrideable',
        excerpt: 'A 30-metre wave, a surfer who refused to retreat, and the most dangerous ride in sport\'s history.',
        content: `The ocean does not negotiate. It does not adjust its power to accommodate human capability or human courage. When a wave of thirty metres approaches the rocky headland at Nazaré in Portugal, it does so with the same absolute indifference to everything in its path that it has exercised for the entire geological history of the Atlantic. The surfer who chose to drop into it on a Tuesday morning in February did so in full knowledge of what the ocean is, and in full knowledge of the consequences of error, and paddled over the lip anyway.

Big wave surfing exists in a category of extreme sport that occasionally produces outcomes so extreme that they require the entire category to be reconsidered. The performance at Nazaré this February was such an outcome. The wave, subsequently measured by the World Surf League's standardised panel at 29.7 metres — accepted as a minimum and typically reported as thirty — exceeded by four metres the previous world record for the largest wave ever surfed. To communicate what four metres means in this context: four metres is approximately the height of a two-storey building. The previous record was itself an achievement that the surfing community had considered close to the limit of what was humanly survivable.

The conditions that produce a wave of this size at Nazaré are specific and understood. An underwater canyon of exceptional depth — the Nazaré Canyon, which runs for 170 kilometres offshore and reaches a depth of 5,000 metres — focuses and amplifies swell energy in a way that allows waves to grow to sizes that simply do not occur in other environments. When the North Atlantic produces the right combination of swell height, period, and wind direction, Nazaré becomes a place where the rules of the ocean are, briefly, different from everywhere else.

The surfer himself had spent fifteen years building toward a wave of this magnitude. His preparation regime is, by any measure, extraordinary. He trains in a pool twice weekly to improve breath-hold capacity, which now extends to six and a half minutes. He works with a psychologist on the specific challenge of managing fear in an environment where the stimuli for fear are entirely rational — the threat is real, the consequences of error are severe, and the body's instinctive responses are designed for self-preservation rather than the pursuit of large waves. He has survived three hold-downs — the term for the experience of being submerged by a wave and unable to surface — that his analysis team, reviewing the footage, have classified as potentially lethal.

The ride itself lasted approximately twenty-two seconds from the moment he dropped into the wave to the moment he pulled off its face. Twenty-two seconds during which he reached a speed of approximately 85 kilometres per hour, maintained contact with the wave's face through three significant buckles in the surface — distortions in the wave's shape that can throw a rider off trajectory with no warning — and pulled into a bottom turn at the base of the wave that placed him precisely in the channel where his safety team was waiting.

The safety team is part of what makes modern big wave surfing survivable in ways that it was not a generation ago. Jet ski rescue craft, inflatable impact vests that deploy automatically on submersion, communication equipment, and coordinated protocols for wave sets have professionalised the management of rescue in a sport where rescue was previously improvised and unpredictable. The surfer's safety team includes a former military diver and a specialist in ocean survival medicine, facts that communicate something about the level of hazard that the sport's practitioners consider normal.

The footage of the ride, released to a global audience within hours of the event, accumulated the kind of views that the internet reserves for moments that strike some fundamental chord. Comments sections across multiple platforms displayed a convergence of emotional responses — amazement, disbelief, respect, and a particular response that appeared repeatedly and that might best be described as the recognition of something that was not previously known to be possible. That recognition — the moment when human limits are publicly revised — is what sport, at its highest expression, most reliably produces. The ocean remains indifferent. The surfer has added his name to the list of people who chose to meet it anyway.`,
        category: 'Surfing',
        author: 'Kai Nakamura',
        date: '2025-04-28',
        image: 'https://images.pexels.com/photos/1654484/pexels-photo-1654484.jpeg?w=1200',
        readTime: 9
    },
    {
        id: '48',
        title: 'FIFA World Cup Qualifier Chaos: Last-Minute Drama Sends Three Nations to the Finals',
        excerpt: 'Three simultaneous matches, three stunning late goals, and the most dramatic qualification night in World Cup history.',
        content: `There are evenings in football that the sport seems to produce as if deliberately — evenings where the simultaneous running of multiple decisive matches creates a narrative architecture of almost theatrical perfection, where goals scored thousands of kilometres apart are linked by consequence into a single story that no individual match could contain. The FIFA World Cup qualification playoff night that delivered three late, decisive goals in three venues across two continents in a thirty-seven-minute window is the most extraordinary such evening in the history of the competition.

The qualification format that produced this evening requires some explanation for context. Three nations were competing for two remaining spots in the World Cup finals. The permutations entering the final round of matches were so complex that the major football media outlets had commissioned probability models, simulation tools, and interactivity graphics to help their audiences understand the range of possible outcomes. In simplified terms: any of the three nations could qualify, depending on the results in all three simultaneous matches, and there were several scenarios in which the final standings would be decided by goal difference, or by goals scored, or by the results of head-to-head meetings — a layered set of contingencies that the sporting world would not need to fully navigate, as it turned out, because the evening produced clarity of the most dramatic possible kind.

The first of the three decisive goals arrived in the seventy-eighth minute of what had been a tense and mostly goalless match at a mountain-altitude stadium in South America. The home team's striker, who had been peripheral for most of the contest, received a long ball over the defensive line and finished with a composure that seemed to belong to a different match — a calmer, less pressurised contest than the one that had preceded it. The goal sent his nation into qualification. It also, via the permutations, changed the requirement for the other two matches still in progress.

In Europe, at a stadium where the hosts needed at least a draw to maintain their qualification hopes, the goal changed everything. Teams trailing by a single goal to the north, who had been playing for the draw that would send them to the finals, now needed to score. The tactical shift that followed was immediate and visible — a team that had been defending with discipline and patience became a team throwing bodies forward with the desperate urgency that changed requirements produce. Fifteen minutes of sustained pressure followed, and it was during this period that the most aesthetically extraordinary goal of the evening was scored.

A counter-attack, launched from a defensive clearance, covered sixty metres of pitch in twelve seconds and ended with a finish of such casual, cruel precision that the goalkeeper barely moved. The striker who scored it ran to the corner flag and simply stood there, arms outstretched, as if the geometry of the moment required him to be physically present in it. His team's supporters in the away end, who had made an eight-hour journey to this match, became briefly incoherent. The goalkeeper, retrieving the ball from his net, stared at the scoreboard for long enough to constitute a moment in itself.

The third decisive goal came at a Central American venue where a nation needed to score twice in the final fifteen minutes to qualify. One goal had already arrived, reducing a two-goal deficit to one, and the stadium — hosting the largest crowd in its history — had achieved a noise level that the broadcast microphones were unable to fully capture without distortion. When the equaliser came, in the eighty-ninth minute, off a defensive error that involved a miscommunication between goalkeeper and centre-back that will haunt both players for years, the crowd response was of the kind that transforms a sound into a physical force.

The final whistle signals across all three venues arrived within ninety seconds of each other. In the four minutes while the permutations were processed and the outcomes confirmed, the football world existed in a state of collective suspended breath. The two nations who had qualified discovered their status via different routes — one from the stadium tannoy, one from a television visible in the dressing room, one from a phone alert that a staff member received and immediately announced. Three different moments of the same information, producing three versions of the same scene of release.`,
        category: 'FIFA',
        author: 'Carlos Mendez',
        date: '2025-04-20',
        image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?w=1200',
        readTime: 10
    },
    {
        id: '49',
        title: 'How Boxing Scoring Works: The 10-Point Must System Explained',
        excerpt: 'Confused by split decisions and 10-8 rounds? Here is a clear, complete guide to how professional boxing is actually scored.',
        content: `If you have ever watched a boxing match go the distance and wondered how the judges arrived at their numbers, you are not alone. Boxing scoring looks mysterious from the outside, but it follows a consistent set of rules. Once you understand the 10-point must system, every scorecard starts to make sense.

In professional boxing, three ringside judges score the fight independently, one round at a time. The system is called the "10-point must" because the judge must award 10 points to the boxer who wins the round. The boxer who loses the round almost always receives 9 points, which is why the most common round score you will see is 10-9.

Judges decide who won a round using four main criteria: clean punching (landing scoring blows on the target area), effective aggression (pressing forward in a way that actually works), ring generalship (controlling the pace and location of the fight), and defense (making the opponent miss). Clean, effective punching carries the most weight. A fighter who lands the harder, cleaner shots usually takes the round even if the opponent throws more.

When a boxer is knocked down, the round score typically becomes 10-8 instead of 10-9. Two knockdowns in a single round can produce a 10-7. A judge can also score a dominant round 10-8 without a knockdown if one fighter is completely overwhelmed. In the rare event that a round is genuinely even, a judge may score it 10-10, though most judges avoid even rounds. Points can also be deducted by the referee (not the judges) for fouls such as low blows, holding, or hitting after the bell, and those deductions are subtracted from the round total.

At the end of the fight, each judge's round scores are added into a total. Because judges score independently, they can disagree, and that produces the different types of decisions. A unanimous decision means all three judges scored the same fighter as the winner. A split decision means two judges favored one boxer and the third favored the other. A majority decision means two judges picked the same winner while the third scored it a draw. Fights can also end in a draw of various kinds if the scorecards balance out.

Of course, not every fight reaches the judges. A fight can end early by knockout (KO), when a fighter is down and cannot beat the referee's ten-count, or by technical knockout (TKO), when the referee, a fighter's corner, or the ringside doctor decides a boxer can no longer safely continue. A fighter can also be disqualified for repeated or serious fouls.

Professional championship fights are scheduled for 12 rounds of three minutes each, with a one-minute rest between rounds. Non-title fights are often shorter, commonly four, six, eight, or ten rounds. This structure traces back to the Marquess of Queensberry rules published in the 1860s, which introduced gloved fighting, three-minute rounds, and the ten-count that still defines the sport today.

Boxers compete within weight classes so that fights are contested between athletes of similar size, from the lightest divisions such as flyweight up through the heavyweights. Fighters must "make weight" at an official weigh-in, usually the day before the bout.

Understanding all of this changes how you watch a fight. Instead of simply reacting to big moments, you can track the fight round by round, notice when a boxer is quietly banking rounds with a busy jab, and understand why a fight that felt close can still produce a clear decision. The scorecards are not random. They are the sum of many small, judged moments, and once you know the system, you can keep your own running tally right alongside the professionals at ringside.`,
        category: 'Boxing',
        author: 'Marcus Webb',
        date: '2025-04-14',
        image: 'https://images.pexels.com/photos/4754147/pexels-photo-4754147.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '50',
        title: 'Rugby Union Explained: A Beginner\'s Guide to the Rules and Scoring',
        excerpt: 'New to rugby? This plain-English guide covers the basics: how points are scored, what a scrum is, and how the game actually flows.',
        content: `Rugby union can look like controlled chaos to a newcomer, but underneath the collisions is a game with clear structure and logic. If you learn a handful of core ideas, the sport quickly becomes one of the most rewarding to watch.

A rugby union match is played by two teams of 15 players each over 80 minutes, split into two 40-minute halves. The objective is to score more points than the opposition by carrying, passing, and kicking an oval ball into the opponent's territory and ultimately over their goal line.

The single most important rule for beginners to understand is that the ball cannot be passed forward. Every pass must travel sideways or backward. Teams therefore make ground by running the ball forward while passing it laterally, or by kicking it downfield. This backward-passing rule is what gives rugby its distinctive diagonal, interlocking style of attack.

There are four ways to score. A try, worth 5 points, is the main prize and is scored by grounding the ball over the opponent's goal line. After a try, the scoring team gets a conversion, a kick at the goalposts worth 2 more points, taken in line with where the try was scored (which is why teams try to score closer to the middle). A penalty kick, awarded after the other team commits an offense, is worth 3 points if kicked through the posts. Finally, a drop goal, worth 3 points, is scored when a player drop-kicks the ball over the crossbar during open play.

When play stops, the game restarts with one of two set pieces. A scrum is used to restart play after a minor infringement, such as a forward pass. Eight players from each team bind together and push against each other to contest possession of the ball, which is fed into the middle. A lineout restarts play after the ball goes out of bounds. Players line up perpendicular to the touchline, and one team throws the ball in straight down the middle, often lifting a teammate high to catch it.

During open play, when a ball carrier is tackled to the ground, a ruck usually forms as players from both sides bind over the ball and try to secure it for their team. If the ball carrier stays on their feet and teammates and opponents bind on, it is called a maul. Learning to spot rucks and mauls is key to following where possession is going.

The tackle itself is governed by strict safety rules. Tackles must be made below the shoulders, and dangerous high tackles are penalized heavily, often with a yellow card (ten minutes in the "sin bin") or a red card (permanent removal). Player welfare, especially around head contact, has become central to how the modern game is refereed.

Positions fall into two groups. The eight forwards (numbers 1 to 8) are generally the larger players who contest scrums, lineouts, and rucks and do much of the close-quarters work. The seven backs (numbers 9 to 15) are typically faster and handle much of the running, passing, and kicking that turns possession into points. The scrum-half (9) and fly-half (10) are the key decision-makers who link the forwards and backs.

At the top level, the sport's showcase is the Rugby World Cup, held every four years, alongside major annual competitions such as the Six Nations in the northern hemisphere and the Rugby Championship in the south. Rugby union is also distinct from rugby league, a related but separate 13-a-side code with different rules.

Once you understand backward passing, the four ways to score, and the basic set pieces, the game opens up. What first looks like a pile-up becomes a contest for possession, and every kick, pass, and tackle starts to carry clear meaning.`,
        category: 'Rugby',
        author: 'Sian Edwards',
        date: '2025-04-08',
        image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '51',
        title: 'How Horse Racing Works: A Beginner\'s Guide to the Sport of Kings',
        excerpt: 'From furlongs to the Triple Crown, here is a clear introduction to how horse racing is structured and how to follow it.',
        content: `Horse racing is one of the oldest organized sports in the world, and while its traditions run deep, the basics are easy to grasp. Understanding a few key terms turns a confusing blur of horses and numbers into a sport you can genuinely follow.

There are two main types of horse racing. Flat racing is run on level ground over a set distance, with no obstacles, and is all about speed and stamina. Jump racing, also called National Hunt racing, sends horses over hurdles or larger fences and tests jumping ability and endurance as well as pace. The Thoroughbred is the breed most associated with elite racing, bred over centuries specifically for speed.

Race distances are measured in furlongs. One furlong equals 220 yards, and eight furlongs make one mile. Short races of five or six furlongs are sprints that reward raw speed, while longer races of a mile and a half or more test stamina and tactical judgment. When you see a race listed as "six furlongs" or "a mile and a quarter," that is simply telling you how far the horses must run.

Every horse carries a jockey, the rider whose job is to manage the horse's energy, find the best position, and time a run to the finish. Behind each horse is a trainer, responsible for the animal's fitness and race preparation, and an owner. Horses are assigned to races based on age, sex, and ability, and many races are handicaps, in which better horses carry more weight to give the field a fairer chance.

Some of the sport's most famous events form the American Triple Crown: the Kentucky Derby, run over a mile and a quarter at Churchill Downs in Louisville; the Preakness Stakes; and the Belmont Stakes. Winning all three in a single season is one of the rarest achievements in sport. Britain and Ireland have their own classics, including the Derby at Epsom and the Grand National, a marathon jump race at Aintree.

Betting has always been woven into racing, and the odds you see reflect how likely the public and bookmakers think each horse is to win. Odds of 2-1 mean a winning bet returns two units of profit for every one staked, plus your stake back. Favorites have short odds; long shots have big odds and bigger potential payouts. You do not need to bet to enjoy racing, but understanding odds helps you read which horses are fancied.

A race unfolds in recognizable phases. Horses load into the starting gate (or, in jump racing, line up behind a starting tape), break at the start, settle into position during the middle of the race to conserve energy, and then make their move as the field turns for home. The finish is judged at the line, and in extremely close races, officials use a photo finish camera to determine the winner by a nose, a head, or a neck.

Track conditions matter more than newcomers expect. The "going" describes how firm or soft the ground is, ranging from firm to heavy. Some horses handle soft, wet ground well; others need firm footing to run their best. Reading the going, the distance, and a horse's past form together is the heart of handicapping.

Whether you are drawn to the pageantry of a big race day, the athleticism of the horses, or the puzzle of picking a winner, horse racing rewards a little knowledge enormously. Learn the distances, the roles of jockey and trainer, and the major races, and you will find a centuries-old sport that suddenly makes sense.`,
        category: 'Horse Racing',
        author: 'Eleanor Pierce',
        date: '2025-04-02',
        image: 'https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '52',
        title: 'Alpine Ski Racing Explained: The Disciplines and How They Work',
        excerpt: 'Downhill, Super-G, Giant Slalom and Slalom look similar at speed but are very different events. Here is how to tell them apart.',
        content: `Alpine ski racing is a test of nerve, precision, and raw speed down a snow-covered mountain, but it is not a single event. It is a family of disciplines, each with its own character. Once you know how they differ, watching a World Cup weekend or an Olympic program becomes far more rewarding.

At its core, alpine racing is simple: skiers descend a marked course as fast as possible, passing through pairs of gates on the way down. Miss a gate and you are disqualified. The clock decides everything, often by hundredths of a second. But the balance between pure speed and technical turning changes dramatically from one discipline to the next.

The disciplines are usually grouped into speed events and technical events. The two speed events are downhill and Super-G. Downhill is the fastest and most dramatic discipline, with long, steep courses, big jumps, and speeds that can exceed 130 kilometers per hour. Gates are set far apart, so the challenge is holding a fast line and staying in control rather than making frequent turns. Racers get training runs to learn the course before the single timed run that decides the result.

Super-G, short for Super Giant Slalom, blends the speed of downhill with more frequent turning. The gates are closer together than in downhill but farther apart than in the technical events, and racers do not get practice runs down the full course. They inspect it visually beforehand and must commit on their first and only descent, which makes it a discipline of both courage and quick reading of terrain.

The two technical events are giant slalom and slalom. Giant slalom (often called "GS") features gates set closer together, demanding a rhythmic series of carved turns at high but controlled speed. Slalom is the most technical of all, with the tightest gate spacing, forcing rapid, sharp turns down a shorter, steeper course. Both giant slalom and slalom are decided over two runs on two different courses, with the times added together, so consistency across both runs is essential.

Some competitions also include combined events, which pair a speed run and a slalom run to reward the most complete all-around skier, as well as parallel formats in which two racers go head-to-head on side-by-side courses in a knockout bracket.

Equipment reflects these differences. Speed skiers use longer skis and adopt an aerodynamic tuck to minimize drag, while slalom skiers use shorter, more maneuverable skis and wear guards on their shins and hands to knock gates out of the way as they cut the tightest possible line.

The sport's premier circuit is the FIS Alpine Ski World Cup, a season-long series of races held at classic venues across the Alps and beyond, with the overall title going to the skier who accumulates the most points across all disciplines. The Winter Olympics and the World Championships provide the sport's biggest one-off stages.

Weather and course conditions play an enormous role. Fresh snow, ice, fog, and changing light can transform a course between the first and last racer, and start order can become a genuine advantage or disadvantage. This is why you will often hear commentators discuss how the course is "holding up" as more racers carve ruts into it.

Knowing whether you are watching a flat-out downhill or a twisting slalom completely changes what to look for. In the speed events, admire the line and the bravery. In the technical events, watch the rhythm and precision of the turns. Either way, the margins are astonishingly small, and the drama is enormous.`,
        category: 'Skiing',
        author: 'Anders Lindqvist',
        date: '2025-03-27',
        image: 'https://images.pexels.com/photos/848622/pexels-photo-848622.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '53',
        title: 'Volleyball Rules Explained: Scoring, Rotations and Positions',
        excerpt: 'A clear beginner\'s guide to how volleyball works, from the three-touch rule to rotations and the mysterious libero.',
        content: `Volleyball is fast, tactical, and surprisingly easy to follow once you understand a few core rules. Whether you are watching an Olympic final or a local match, the same fundamentals apply, and learning them makes every rally more exciting.

Each team has six players on the court at a time, separated by a net. The basic goal is to send the ball over the net and have it land in the opponent's court, while preventing them from doing the same to you. A team is allowed a maximum of three touches to return the ball over the net, and no single player may touch the ball twice in a row (except immediately after a block). This three-touch structure is why you so often see the same pattern: a first touch to control the ball (the "dig" or "pass"), a second touch to position it (the "set"), and a third touch to attack (the "spike" or "hit").

Modern volleyball uses rally scoring, which means a point is scored on every single rally regardless of which team served. Matches are played as a best of five sets. The first four sets are played to 25 points, and a team must win by at least two points, so a set can extend beyond 25 if the score is close. If the match reaches a deciding fifth set, that set is played to 15 points, again with a two-point margin required to win.

Play begins with a serve, struck from behind the back line, and the two teams then rally until the ball hits the floor, goes out of bounds, or a team commits a fault. Common faults include hitting the ball out, touching the net, stepping over the center line, contacting the ball four times, or a player touching the ball twice consecutively.

Rotation is one of the concepts that confuses newcomers most. Each time a team wins back the serve from the opponent, its players rotate one position clockwise. This ensures every player serves in turn and takes a turn in both the front row and the back row. Because back-row players face restrictions on attacking near the net, rotation constantly changes who can do what, and teams design their strategies around it.

Positions have specialized roles. The setter is the playmaker who takes the crucial second touch and decides which attacker to feed, much like a quarterback or point guard. Outside hitters attack from the left side and are often the main scorers. The opposite hitter attacks from the right and also helps block the opponent's outside hitter. Middle blockers play in the center of the net, specializing in quick attacks and forming the first line of defense against spikes. Finally, the libero is a defensive specialist who wears a different-colored jersey, plays only in the back row, cannot attack the ball above the net, and can substitute freely without counting against normal substitution limits. The libero's job is to receive serves and dig hard-driven spikes.

At the net, blocking is a key defensive weapon: front-row players jump with their hands above the net to stop or slow an attacker's spike. A successful block that sends the ball straight down is one of the most emphatic ways to win a point.

The sport also has a hugely popular two-player variant, beach volleyball, played on sand with a smaller court, no rotation positions in the same sense, and sets played to 21 points. It is an Olympic sport in its own right.

Once you can recognize the pass-set-spike rhythm, understand rally scoring, and know why players keep rotating, volleyball transforms from a blur of jumping and diving into a fast chess match. Every rally becomes a small story of setup, execution, and the constant battle at the net.`,
        category: 'Volleyball',
        author: 'Helena Kovač',
        date: '2025-03-20',
        image: 'https://images.pexels.com/photos/8224723/pexels-photo-8224723.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '54',
        title: 'How Olympic Rowing Works: Boat Classes, Rules and Racing Explained',
        excerpt: 'Sweep or scull? Coxed or coxless? A clear guide to how rowing races are structured and what all the numbers mean.',
        content: `Rowing is one of the most physically demanding endurance sports in the world, and its races are a gripping test of power, rhythm, and teamwork. The terminology can seem intimidating at first, but the underlying system is logical and easy to learn.

The first thing to understand is the difference between the two styles of rowing. In sweep rowing, each rower holds a single oar with both hands, and rowers are arranged so their oars alternate on opposite sides of the boat. In sculling, each rower holds two oars, one in each hand. This single distinction explains most of the boat classes you will encounter.

Boats are described by the number of rowers and their style. In sculling, you have the single scull (one rower, written 1x), the double scull (two rowers, 2x), and the quadruple scull or "quad" (four rowers, 4x). In sweep rowing, you have the pair (two rowers, written 2-), the four (four rowers, 4-), and the eight (eight rowers, 8+). Those small symbols carry real meaning: the "x" indicates sculling, and the plus or minus sign tells you whether the boat carries a coxswain.

The coxswain, or "cox," is a crucial non-rowing crew member who steers the boat, controls the race strategy, and calls instructions to keep the rowers in sync. The eight always has a coxswain (hence 8+), while pairs and fours are usually coxless (the minus sign). In a coxless boat, one rower steers using a small rudder connected to their foot.

Olympic and World Championship rowing races are contested over a straight 2,000-meter course, typically with up to six or more lanes so crews race side by side. The crew that crosses the line first wins. Because the course is fixed and the format is a direct race, tactics revolve around pacing: crews often start fast, settle into a strong sustainable rhythm through the middle, and then push for a sprint finish in the final 500 meters.

A rowing stroke has two main phases. The drive is the powerful part, where rowers push with their legs, swing their bodies, and pull the oar through the water to propel the boat. The recovery is the controlled slide back to the start of the next stroke. The rate of strokes per minute, called the stroke rate, is a key tactical variable: crews raise it for starts and sprints and lower it to conserve energy while maintaining boat speed.

The magic of rowing lies in synchronization. In a well-drilled eight, all eight rowers must move in perfect unison so that their combined power drives the boat efficiently and it runs smoothly between strokes. Even small timing errors cause the boat to check and lose speed, which is why crews spend enormous amounts of time training together to row as a single unit.

Rowing also exists in a hugely popular non-Olympic form called indoor rowing, performed on ergometer machines, which many athletes use for training and testing. And beyond the sprint-distance Olympic format, there are longer "head" races, time trials rowed over several kilometers on rivers, popular in the traditional rowing calendars of countries like Britain.

Once you know whether a crew is sculling or sweeping, how many rowers are aboard, and whether there is a cox calling the shots, a rowing race stops being a mystery. You can appreciate the pacing decisions, the synchronization, and the brutal final sprint that so often decides these races by less than a second.`,
        category: 'Rowing',
        author: 'Oliver Bennett',
        date: '2025-03-14',
        image: 'https://images.pexels.com/photos/8224724/pexels-photo-8224724.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '55',
        title: 'Badminton Rules and Scoring Explained: A Complete Beginner\'s Guide',
        excerpt: 'Badminton is the fastest racket sport in the world. Here is how the scoring, serving, and court rules actually work.',
        content: `Badminton is often underestimated by people who have only played it casually in a backyard. At the competitive level, it is one of the fastest and most demanding racket sports in the world, with shuttlecocks smashed at extraordinary speeds. Understanding the rules reveals just how much strategy sits beneath that speed.

The game is played either as singles (one player per side) or doubles (two players per side), on a rectangular court divided by a net. Players use lightweight rackets to hit a shuttlecock, also called a "birdie," back and forth over the net. Unlike a ball, the shuttlecock has feathers or a plastic skirt that create heavy air resistance, causing it to decelerate rapidly. This gives badminton its unique rhythm of explosive smashes followed by delicate, floating shots.

The objective is simple: hit the shuttlecock over the net so it lands inside the opponent's court, or force the opponent to hit it out or into the net. Crucially, the shuttlecock may only be struck once per side before it must cross the net; there is no equivalent of volleyball's multiple touches.

Modern badminton uses rally point scoring, meaning a point is won on every rally no matter who served. A game is played to 21 points, and a player or pair must win by two clear points. If the score reaches 20-20, play continues until one side leads by two, such as 22-20. There is also a hard cap: at 29-29, the very next point at 30 wins the game. A match is decided as the best of three games, so the first side to win two games wins the match.

Serving has specific rules that trip up beginners. The serve must be hit underhand, with the shuttlecock struck below the server's waist, and it must travel diagonally into the opposite service box. The score determines which side you serve from: when the server's score is even, they serve from the right service court, and when it is odd, they serve from the left. In doubles, the serving rules about court position follow the same even-odd logic, which helps players and officials keep track of who should be where.

The court itself has an important quirk: its boundaries change between singles and doubles. The court is narrower for singles and wider for doubles, using the outer side tramlines. The service boundaries also differ, with the doubles service court being shorter at the back. This is why you will see different lines marked on a badminton court, each defining the "in" area for a particular format.

Strategy in badminton revolves around moving your opponent around the court and creating openings. Attacking players look to hit the shuttlecock downward with powerful smashes, while defenders try to lift it high to the back of the court to buy time and reset the rally. Deceptive shots, drop shots that barely clear the net, and quick net play are all part of the tactical arsenal. In doubles, teamwork and rapid reflexes at the net become even more important, with pairs often adopting an attacking front-and-back formation or a defensive side-by-side formation depending on the situation.

Badminton is an Olympic sport with a passionate global following, especially strong in countries across Asia and northern Europe. The top international events feature athletes with remarkable speed, stamina, and shot precision.

Once you understand rally scoring to 21, the diagonal underhand serve, and how the court lines change between singles and doubles, badminton becomes far more than a casual garden game. It reveals itself as a lightning-fast contest of power, touch, and tactical cat-and-mouse.`,
        category: 'Badminton',
        author: 'Mei Lin Chao',
        date: '2025-03-08',
        image: 'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '56',
        title: 'What Is Esports? A Beginner\'s Guide to Competitive Gaming',
        excerpt: 'Esports fills arenas and awards millions in prize money. Here is a clear explanation of what it is and how it works.',
        content: `Esports, short for electronic sports, refers to organized competitive video gaming in which professional players and teams compete against each other, often in front of large live and online audiences. What was once a niche hobby has grown into a global industry that fills arenas, draws millions of online viewers, and offers prize pools worth many millions of dollars.

At its simplest, esports takes the structure of traditional sports and applies it to video games. There are professional players who train full-time, teams and organizations that sign and support them, leagues and tournaments with schedules and standings, coaches and analysts, and dedicated broadcasts complete with commentators, often called "casters." The main difference is that the field of play is a video game rather than a physical pitch or court.

Esports is not a single game but a collection of competitive titles, usually grouped by genre. Multiplayer online battle arena (MOBA) games, such as League of Legends and Dota 2, feature two teams of five battling to destroy each other's base. First-person shooter (FPS) games, such as Counter-Strike and Valorant, pit teams against each other in tactical gun battles built around precise aim and coordination. Other major categories include fighting games (one-on-one combat titles), real-time strategy games, sports simulations like the football video game series, and battle royale games where many players fight to be the last one standing.

The competitive calendar is built around leagues and tournaments. Some titles run season-long professional leagues, similar to a traditional sports season, culminating in playoffs and a championship. Others are built around large standalone tournaments. Dota 2's premier event, The International, became famous for prize pools that grew into the tens of millions of dollars, funded partly by the game's own community. League of Legends holds an annual World Championship that draws enormous global viewership and sells out major arenas.

A professional esports team usually fields a roster of players who specialize in particular roles within their game, supported by a coaching staff that studies strategy, reviews recorded matches, and prepares game plans against specific opponents, exactly as a traditional sports team would. Top players train for many hours a day to sharpen their mechanics, reaction times, and teamwork, and careers can be intense but relatively short, with many players peaking in their late teens and early twenties.

Broadcasting is central to esports. Matches are streamed live on platforms dedicated to gaming, where viewers can watch for free, follow their favorite teams, and interact through live chat. This accessibility is a big reason the audience has grown so quickly. Major events are also produced with the polish of a television sports broadcast, featuring pre-match analysis, replays, player interviews, and elaborate stage productions.

Revenue in esports comes from familiar sources: sponsorships, advertising, media rights, ticket sales for live events, and merchandise, along with in-game purchases tied to competitions. Established brands from outside gaming have increasingly invested in teams and events, a sign of how seriously the industry is now taken.

There is ongoing debate about whether esports counts as a "real" sport, but that argument is largely semantic. What is clear is that competitive gaming demands elite reflexes, deep strategic knowledge, teamwork, and the ability to perform under intense pressure. Whether or not it fits a traditional definition, esports has built a genuine, global competitive ecosystem, and its audience continues to grow year after year.`,
        category: 'Esports',
        author: 'Jordan Park',
        date: '2025-03-02',
        image: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '57',
        title: 'The Marathon Explained: Distance, History and How the Race Works',
        excerpt: 'Why is a marathon 26.2 miles? Here is the history, the science, and the structure behind the world\'s most famous race.',
        content: `The marathon is the ultimate endurance running event, a race of 26.2 miles that has become a bucket-list challenge for amateurs and the pinnacle of distance running for elites. Behind its familiar name lies a fascinating history and a precise structure worth understanding.

The exact distance of a marathon is 42.195 kilometers, or 26.219 miles. That oddly specific number has a genuine historical explanation. The event is named after the ancient Greek legend of Pheidippides, a messenger said to have run from the battlefield of Marathon to Athens to announce a Greek victory, roughly 40 kilometers, before collapsing. When the modern Olympic Games were revived in 1896, they included a marathon race inspired by this story. The distance was not standardized at first, and early marathons varied in length. The now-official 26.2-mile distance was fixed at the 1908 London Olympics, reportedly to allow the race to start at Windsor Castle and finish in front of the royal box in the stadium. That figure was later formally adopted as the standard.

A marathon is run on roads over a certified course, and the winner is simply the first runner to cross the finish line. Elite races often feature "pacemakers," runners who set a fast, even pace for part of the race to help the top athletes chase fast times before dropping out. Behind the elites, thousands of amateur runners of all abilities take part in major public marathons, many raising money for charity, making these events part elite competition and part mass celebration.

The most prestigious marathons in the world form a series known as the World Marathon Majors, which includes the Boston, London, Berlin, Chicago, New York City, and Tokyo marathons. Each has its own character: Boston is famous for its history and its qualifying-time entry standard, Berlin for its flat, fast course where many world records have been set, and New York for its huge, festival-like atmosphere across the city's five boroughs.

Running a marathon is as much about strategy and preparation as raw speed. A key concept is pacing: because the distance is so long, running too fast early almost always leads to a dramatic slowdown later, often called "hitting the wall." This wall typically strikes around the 20-mile mark, when the body's stored carbohydrate (glycogen) runs low and runners must rely more on fat for fuel, which the body burns less efficiently. Managing energy, hydration, and fueling with drinks and gels along the route is central to finishing strong.

Training for a marathon usually takes months and involves gradually increasing weekly mileage, including a weekly "long run" that builds the endurance needed to keep going for hours. Even elite athletes structure their entire seasons around just a small number of marathons per year, because the race takes such a heavy toll on the body and requires long recovery.

At the very top, the marathon has seen astonishing progress. Elite men now complete the distance in a little over two hours, and elite women not far behind, times that represent sustained paces most recreational runners could not hold for even a single mile. The dream of a sub-two-hour marathon in official competition has become one of the sport's great frontiers, with a famous special-event run dipping under that barrier in controlled conditions that did not count as an official record.

Whether you are watching the leaders glide through the streets or cheering on a first-timer determined simply to finish, the marathon is a uniquely human drama. It rewards patience, planning, and sheer will, and its 26.2 miles remain one of the most respected distances in all of sport.`,
        category: 'Athletics',
        author: 'David Okafor',
        date: '2025-02-24',
        image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '58',
        title: 'How Ice Hockey Works: Rules, Positions and Scoring Explained',
        excerpt: 'Fast, physical and full of jargon, ice hockey is easy to love once you know the basics. Here is a clear beginner\'s guide.',
        content: `Ice hockey is one of the fastest team sports on the planet, a blur of speed, skill, and physical contact played on a sheet of ice. For a newcomer it can be hard to follow the puck, let alone the rules, but a few key concepts make the whole game click into place.

Each team has six players on the ice at a time: five skaters and one goaltender. The skaters are usually arranged as three forwards and two defensemen. The forwards are typically a center, who plays through the middle and takes face-offs, and two wingers on the left and right. The defensemen play behind the forwards, focused on stopping the opposition and protecting their own goal. The goaltender, or "goalie," guards the net and is the last line of defense, wearing heavy specialized padding.

The object is simple: use a stick to shoot a small, hard rubber disc called the puck into the opponent's net. Each goal is worth one point, and the team with more goals at the end wins. A standard professional game is divided into three periods of 20 minutes each, with intermissions between them. If the score is tied at the end of regulation, games go to overtime and, in many competitions, a shootout to determine a winner.

Two rules cause the most confusion for beginners: offside and icing. Offside means an attacking player cannot cross the blue line into the opponent's zone before the puck does; the puck must enter the attacking zone first. This prevents players from simply camping near the opposing goal. Icing is called when a team shoots the puck from behind the center line all the way across the opponent's goal line without it being touched; play is stopped and the puck is brought back, which stops teams from just flinging it down the ice to relieve pressure.

Physical contact is a legal and central part of the game. Players are allowed to "check" opponents, using the body to separate them from the puck, though there are strict rules against dangerous hits. When a player breaks the rules, they are sent to the penalty box for a set time, usually two minutes for a minor penalty, leaving their team short-handed. The team with the extra skater is then on a "power play," a major scoring opportunity, while the penalized team tries to survive on the "penalty kill."

Play is frequently restarted with a face-off, in which an official drops the puck between two opposing players who battle to win possession. Face-offs happen at the start of each period, after goals, and after most stoppages, and winning them is a genuine skill, especially for centers.

The flow of the game is relentless, and one distinctive feature is that teams change players "on the fly," swapping tired skaters for fresh ones while play continues, without stopping the game. This is why you will see players hopping over the boards mid-action; shifts on the ice are short and intense, often lasting less than a minute, because skating at full speed is exhausting.

At the top professional level, the sport's most famous prize is the Stanley Cup, awarded to the champion of the National Hockey League in North America after a grueling playoff tournament. Ice hockey is also a marquee event at the Winter Olympics and enjoys deep popularity across Canada, the northern United States, and much of northern and eastern Europe.

Once you understand the six positions, the offside and icing rules, and the drama of power plays, ice hockey becomes far easier to follow. What first looks like chaos on ice turns into a fast, strategic contest where a single goal, or a single penalty, can decide everything.`,
        category: 'Ice Hockey',
        author: 'Connor Mackenzie',
        date: '2025-02-16',
        image: 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?w=1200',
        readTime: 4
    },
    {
        id: '59',
        title: 'How Golf Scoring Works: Par, Birdies and Handicaps Explained',
        excerpt: 'Par, birdie, bogey and handicaps can baffle new golf fans. Here is a clear guide to how the game is actually scored.',
        content: `Golf has a language all its own, full of terms like par, birdie, bogey, and handicap that can leave newcomers baffled. But golf scoring is actually built on one beautifully simple idea: the fewer strokes you take, the better. Once you understand that, and the vocabulary around it, following the sport becomes easy.

A round of golf is normally played over 18 holes. On each hole, the player tries to hit a small ball from the starting area (the tee) into a hole in the ground, marked by a flag, using as few strokes as possible. A "stroke" is simply one swing at the ball. Add up the strokes across all 18 holes, and, in the most common format, the player with the lowest total wins. This format is called stroke play, and it is what most professional tournaments use.

The key reference point is "par." Every hole is assigned a par, the number of strokes an expert golfer would be expected to need to complete it. Par is usually 3, 4, or 5, depending on the length of the hole. A full course typically has a total par around 70 to 72. Par is the benchmark against which every score is measured, which is why golf scores are so often described in relation to it rather than as raw numbers.

From par comes golf's colourful scoring vocabulary. Completing a hole in one stroke fewer than par is a "birdie," a good result. Two strokes under par is an "eagle," and the rare three under is an "albatross." On the other side, one stroke over par is a "bogey," two over is a "double bogey," and so on. Completing a hole in exactly par is simply called making par. So when you hear a golfer is "three under," it means their total score across the holes played is three strokes better than the combined par.

Not every competition uses stroke play. In match play, players or teams compete hole by hole, and the winner of each hole (the one who takes fewer strokes on it) goes one "up." The overall winner is decided by who wins more holes, not by total strokes. This format, used in some famous team events, produces a very different, more tactical kind of drama, since a disastrous hole costs only that one hole rather than wrecking a whole round.

One of golf's most distinctive features is the handicap system, which allows players of very different abilities to compete fairly. A handicap is a number representing a golfer's ability, roughly how many strokes above par they typically play. In a handicap competition, each player's handicap is subtracted from their raw score, so a weaker player receives a head start of extra strokes. This means a beginner and an experienced club player can enjoy a genuinely competitive match, a rare and wonderful feature that helps explain golf's broad appeal as a lifelong game.

At the professional level, the sport's most prestigious events are its four major championships, and winning them is the ultimate measure of a golfer's career. Professionals do not use handicaps, competing instead purely on total strokes over four days of play.

Once you understand par as the benchmark, the birdie-and-bogey vocabulary built around it, the difference between stroke play and match play, and the clever handicap system, golf's scoring reveals itself as both simple at heart and rich in nuance, a game where the goal is always, elegantly, to do more with less.`,
        category: 'Golf',
        author: 'James Carter',
        date: '2025-06-25',
        image: 'https://images.pexels.com/photos/114972/pexels-photo-114972.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '60',
        title: 'What Is VAR? The Video Assistant Referee Explained',
        excerpt: 'VAR has changed football and sparked endless debate. Here is a clear explanation of what it is and how it actually works.',
        content: `Few innovations have changed football, or divided its fans, as much as VAR, the Video Assistant Referee. Introduced to top-level football in recent years, it uses video replay to help referees make correct decisions. Loved by some for improving accuracy and criticised by others for disrupting the game's flow, VAR is now a central part of the modern sport. Understanding how it works helps make sense of the controversy.

VAR is, at its simplest, a team of officials in a video room who assist the on-field referee by reviewing footage of key incidents. The main referee still runs the game and makes the decisions, but VAR acts as a safety net, checking for clear and obvious errors that the referee, watching in real time from one angle, might have missed. The guiding principle is important: VAR is meant to correct clear mistakes, not to re-referee every marginal decision.

Crucially, VAR does not review everything that happens on the pitch. It is limited to four specific match-changing situations. The first is goals, checking whether an infringement such as offside, a foul, or a handball occurred in the build-up before the ball crossed the line. The second is penalty decisions, checking whether a penalty was correctly awarded or wrongly denied. The third is direct red cards, reviewing whether a sending-off (but not a second yellow card) was justified. The fourth is mistaken identity, ensuring the referee cautions or dismisses the correct player. Outside these four categories, VAR stays silent.

The review process follows a set procedure. The VAR official continuously checks incidents in the background. If they spot a possible clear error in one of the four reviewable areas, they recommend that the referee take a closer look. The referee can then either accept the VAR's advice or, more commonly for subjective calls, go to the pitchside monitor to watch a replay themselves before making a final decision. This "on-field review," where the referee jogs to a screen at the side of the pitch, has become one of the sport's familiar new rituals.

For factual decisions, such as whether a player was offside, technology can be highly precise. Offside in particular is now often assisted by semi-automated systems that track the exact positions of players and the ball, allowing officials to judge margins of just a few centimetres. For subjective decisions, such as whether a challenge was a foul or a red card, VAR provides the referee with better footage but the judgement still rests with a human, which is why disagreements persist.

The debate around VAR is fierce and ongoing. Supporters argue it has eliminated many clear, game-changing errors, the blatant offside goals and missed penalties that once decided matches unjustly, making football fairer. Critics counter that it interrupts the natural rhythm of the game, creates long delays, dampens the spontaneous joy of celebrating a goal (which may later be disallowed), and that its precision on tight offsides can feel harsh, ruling out goals for a toe or shoulder. There are also complaints about inconsistency in how subjective calls are handled.

Football's authorities continue to refine how VAR is used, aiming to speed up reviews, improve communication with fans in the stadium, and strike a better balance between accuracy and flow. Some competitions have experimented with announcing decisions to the crowd to increase transparency.

Whatever your opinion, VAR is now woven into the fabric of top-level football. Understanding that it covers only four types of incident, that it exists to correct clear errors rather than perfect every call, and that final decisions still rest with the referee, helps cut through the noise and see both what the technology can do and why it remains so hotly debated.`,
        category: 'Football',
        author: 'Priya Sharma',
        date: '2025-06-24',
        image: 'https://images.pexels.com/photos/46798/pexels-photo-46798.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '61',
        title: 'Clay, Grass and Hard Courts: How Tennis Surfaces Change the Game',
        excerpt: 'Tennis is played on three very different surfaces, and each one transforms the sport. Here is how clay, grass and hard courts differ.',
        content: `One of the things that makes tennis so fascinating is that it is played on several different surfaces, and each one dramatically changes how the game is played. A match on clay can look almost like a different sport from a match on grass. Understanding the three main surfaces, clay, grass, and hard court, deepens your appreciation of the sport and explains why some players thrive in one setting and struggle in another.

The surface matters because it affects two crucial things: the speed of the ball after it bounces, and the height of the bounce. A fast surface sends the ball skidding through quickly and low, giving players less time to react and rewarding powerful, aggressive play. A slow surface grips the ball, slowing it down and making it bounce higher, which gives players more time and tends to produce longer rallies. These physical differences ripple out into completely different styles and strategies.

Clay is the slowest of the three surfaces, made from crushed brick or stone. When the ball lands, the clay grips it, slowing it down and kicking it up into a high bounce. This gives players plenty of time to run down shots, which makes it very hard to hit outright winners. As a result, clay-court tennis is defined by long, gruelling rallies, patience, and physical endurance. Players who use heavy topspin, move well, and can grind out points for hours excel here. Clay also allows players to slide into their shots, a distinctive skill. The most famous clay tournament is the French Open, and clay specialists can dominate it even if they are less successful elsewhere.

Grass is the fastest surface and the most traditional, the surface on which tennis was originally played. The ball skids off the smooth, low grass and stays low, moving quickly and giving opponents very little time to respond. This historically rewarded aggressive, attacking tennis: big serves, quick points, and rushing to the net. Rallies tend to be short and sharp. Grass is also the most demanding surface to maintain and can change as a tournament progresses and the turf wears. Wimbledon, the oldest and most prestigious tournament, is played on grass, and its fast, low-bouncing courts have a character all their own.

Hard courts sit in between, made from a rigid surface like concrete or asphalt topped with an acrylic layer. They offer a medium pace and a true, predictable bounce, which is why they are considered the most balanced and neutral surface. Because they do not heavily favour either grinding defence or all-out attack, hard courts tend to reward all-round players. They are also the most common surface worldwide, used at courts everywhere from public parks to Grand Slam stadiums. Two of the four majors, the Australian Open and the US Open, are played on hard courts.

This variety poses a unique challenge that sets tennis apart from many sports: a truly great player must be able to adapt their game to conditions that are constantly changing across the season. The calendar moves through hard-court, clay, and grass seasons, and each demands different tactics, movement, and shot selection. A player might have to grind through five-hour clay battles one month and play lightning-fast grass points the next.

That is why the players celebrated as the very best are often those who can win on all three surfaces, a mark of complete mastery. Once you understand how clay slows and lifts the ball, how grass speeds and flattens it, and how hard courts sit in between, you can see why the surface is not just a backdrop but a central character in every tennis match.`,
        category: 'Tennis',
        author: 'Daniel Osei',
        date: '2025-06-23',
        image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '62',
        title: 'How to Read a Cricket Scorecard',
        excerpt: 'A cricket scorecard is packed with numbers and abbreviations. Here is how to decode batting figures, bowling figures, and the total.',
        content: `To the uninitiated, a cricket scorecard can look like an intimidating grid of numbers and cryptic abbreviations. But it is really a clear, logical summary of everything that happened in a match, and learning to read one unlocks a much deeper understanding of the game. Let us decode it piece by piece.

A scorecard is divided into two main sections for each team's innings: the batting and the bowling. The batting section lists every player in the team, in the order they batted, alongside how many runs they scored and how they were dismissed (got out). The bowling section shows the performance of the fielding team's bowlers.

Start with the batting figures. Next to each batter's name, you will see how they were out, described in cricket's traditional shorthand. "b Smith" means they were bowled by a bowler named Smith (the ball hit the stumps). "c Jones b Smith" means they were caught by a fielder named Jones off the bowling of Smith. "lbw b Smith" means leg before wicket, out because the ball would have hit the stumps but struck their leg first. If a batter is still in at the end, their score is marked "not out," often shown with an asterisk. Alongside the dismissal is the number of runs that batter scored, and often the number of balls they faced, which tells you how quickly they scored.

Then comes the team total, usually the most important number. It is typically written as runs for wickets, for example "250 for 6" (sometimes written 250/6). The first number is the total runs the team scored, and the second is how many batters have been dismissed (out of a possible ten, since the innings ends when ten wickets fall). So "250 for 6" means the team has scored 250 runs and lost six wickets, with four batters still to be dismissed. In limited-overs cricket, the total is also shown alongside the number of overs bowled.

You will also see "extras," runs added to the team total that were not scored off the bat. These include byes and leg byes (runs taken when the ball passes the batter), wides (deliveries bowled too far from the batter), and no-balls (illegal deliveries). Extras count toward the team's total but are not credited to any individual batter.

Now the bowling figures. Each bowler's line typically shows four key numbers, often in the order overs, maidens, runs, wickets. "Overs" is how many overs (sets of six legal balls) they bowled. "Maidens" is the number of overs in which they conceded no runs at all, a mark of tight, accurate bowling. "Runs" is how many runs were scored off their bowling. "Wickets" is how many batters they dismissed. So a bowling figure of "10-2-30-3" means the bowler bowled 10 overs, of which 2 were maidens, conceded 30 runs, and took 3 wickets, a strong performance.

Putting it together, a scorecard tells the whole story of an innings at a glance. You can see who scored the most runs and how, which bowlers were most effective, how many extras leaked away, and the crucial bottom line of runs and wickets. In a completed match, comparing both teams' totals tells you who won and by how much, whether by runs (if the team batting first defended their total) or by wickets (if the chasing team overhauled it with batters to spare).

Once you can read dismissals, the runs-for-wickets total, extras, and bowling figures, the scorecard stops being a wall of numbers and becomes a rich, readable summary, the box score of one of the world's most statistically fascinating sports.`,
        category: 'Cricket',
        author: 'Priya Sharma',
        date: '2025-06-22',
        image: 'https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '63',
        title: 'Basketball Positions Explained: From Point Guard to Center',
        excerpt: 'Point guard, center and everything between. Here is a clear guide to the five traditional basketball positions and what each one does.',
        content: `Basketball is played with five players per team on the court, and traditionally each has a distinct role and position. While the modern game has blurred these lines considerably, understanding the five classic positions is still the best way to grasp how a team is structured and how it works together. Let us go through them from the smallest, quickest players to the tallest.

The point guard, often called the "one," is typically the shortest player on the team but one of the most important. The point guard is the team's floor general, responsible for bringing the ball up the court, organising the offense, and setting up teammates with passes. A great point guard has excellent ball-handling, court vision, and decision-making, seeing plays develop before they happen and delivering the ball to the right player at the right moment. Think of the point guard as the quarterback of the basketball team, the primary playmaker who controls the tempo of the game.

The shooting guard, or "two," is usually a bit taller than the point guard and, as the name suggests, is often one of the team's best outside shooters and scorers. Shooting guards are relied upon to score points, particularly from mid-range and beyond the three-point line, and to help create their own shots. Many of the most famous scorers in basketball history have played this position. A good shooting guard combines shooting accuracy with the athleticism to attack the basket and the ability to defend the opponent's perimeter players.

The small forward, or "three," is one of the most versatile positions on the court, often requiring a blend of the skills of both guards and bigger players. Small forwards are typically strong, athletic, and capable of scoring in many ways, shooting from outside, driving to the basket, and finishing near the rim, while also contributing on defense and rebounding. Because they must do a bit of everything, small forwards are often among a team's most complete and valuable players.

The power forward, or "four," is one of the two "big men," taller and stronger players who operate closer to the basket. Traditionally, power forwards did much of their work in the painted area near the hoop, scoring on close-range shots, grabbing rebounds, setting screens, and defending the interior. In the modern game, however, many power forwards have developed the ability to shoot from long range too, stretching the defense and adding a new dimension to the role.

The center, or "five," is usually the tallest player on the team and plays closest to the basket. Centers are the anchors of both offense and defense in the paint. On offense, they score on close shots, catch passes near the rim, and use their size to overpower defenders. On defense, they are the last line of protection, blocking shots, contesting drives, and dominating the boards with rebounds. A commanding center can control the area around the basket at both ends of the court.

In recent years, the sport has moved toward "positionless" basketball, where the rigid boundaries between these roles have softened. Tall players are now often expected to shoot from distance and handle the ball, while guards may be asked to rebound and defend bigger opponents. Versatility is prized, and many stars comfortably play several positions.

Still, the five traditional positions remain the essential framework for understanding the game. Once you know the playmaking point guard, the scoring shooting guard, the all-round small forward, the strong power forward, and the towering center, you can see how a basketball team fits together, and appreciate how modern players are increasingly breaking those moulds.`,
        category: 'Basketball',
        author: 'James Carter',
        date: '2025-06-21',
        image: 'https://images.pexels.com/photos/1080882/pexels-photo-1080882.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '64',
        title: 'F1, IndyCar and NASCAR: How the Big Racing Series Differ',
        excerpt: 'Three of the world\'s biggest motorsport series look similar to newcomers but are very different. Here is how to tell them apart.',
        content: `To someone new to motorsport, all car racing can look broadly the same: fast cars going around a track. But the three biggest racing series in the world, Formula 1, IndyCar, and NASCAR, are strikingly different in their cars, their circuits, and their character. Understanding what sets them apart makes each far more enjoyable to watch.

The most fundamental difference is the type of car each series uses. Formula 1 and IndyCar both feature "open-wheel" cars, meaning the wheels are exposed outside the bodywork, and the driver sits in a single-seat cockpit in a low, aerodynamic machine that looks almost like a jet fighter on wheels. NASCAR, by contrast, races "stock cars," which are heavier vehicles with enclosed wheels and bodies that resemble (in silhouette, at least) ordinary road cars. This basic distinction in car design shapes almost everything else about how the three series race.

Formula 1 is the global pinnacle of open-wheel racing and, many would argue, of motorsport technology overall. It is an international championship, travelling to countries across the world, and races primarily on road courses and street circuits, twisting tracks with a mixture of corners and straights. F1 places enormous emphasis on cutting-edge engineering, aerodynamics, and hybrid engine technology, with teams spending vast sums to develop their cars. The result is the fastest cars in the world through corners and a sport where technology and strategy are as important as driving skill.

IndyCar is the premier open-wheel series in the United States, and while its cars look somewhat similar to F1's, the series has a very different flavour. A defining feature of IndyCar is its variety of tracks: over a season, it races on a mixture of superspeedway ovals, permanent road courses, and temporary street circuits. Racing on high-speed ovals, where cars run flat out around banked turns in close packs, requires a completely different set of skills from twisting road courses. The series is also known for closer competition between teams, since the cars are more standardised than in F1. Its crown jewel is the Indianapolis 500, one of the most famous races in all of motorsport, a 500-mile test of speed and endurance on the legendary Indianapolis oval.

NASCAR is America's most popular stock-car series and has a character all its own. Its heavy, powerful cars race predominantly on oval tracks, often in enormous packs running just inches apart at high speed. This produces a distinctive style of racing built around "drafting," where cars run nose-to-tail to reduce air resistance and gain speed, leading to constant jockeying, dramatic overtakes, and the ever-present risk of large multi-car crashes. NASCAR races tend to be long, and the close-quarters, contact-tolerant nature of stock-car racing gives it a raw, gladiatorial appeal. Its most famous event is the Daytona 500.

The three series also differ in their traditions and fan cultures. F1 has a glamorous, international, technology-focused image. IndyCar blends the drama of ovals with road-course skill and is proudly American while attracting drivers worldwide. NASCAR is deeply rooted in American culture, with passionate fans and a heritage tied to its origins in the southern United States.

None of these series is objectively "better", they simply offer different kinds of racing. F1 rewards engineering brilliance and precision on complex circuits, IndyCar prizes versatility across wildly different tracks, and NASCAR delivers the thunderous spectacle of stock cars battling in a pack. Once you understand the differences in cars, circuits, and culture, you can appreciate each on its own terms, and perhaps discover which style of racing speaks to you most.`,
        category: 'Motorsport',
        author: 'Marcus Webb',
        date: '2025-06-20',
        image: 'https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '65',
        title: 'The Decathlon and Heptathlon: Inside the Ultimate All-Round Test',
        excerpt: 'Winners of these multi-event competitions are often called the world\'s greatest athletes. Here is how the decathlon and heptathlon work.',
        content: `In athletics, most competitors specialise, dedicating themselves to a single event like the 100 metres or the long jump. But two events reward the opposite: complete, all-round athletic ability across many disciplines. These are the decathlon and the heptathlon, and their winners are often described, with good reason, as the greatest all-around athletes in the world.

The idea behind both events is the same: to find the athlete who is best not at one thing, but at many. Competitors must run, jump, and throw, testing speed, strength, endurance, technique, and stamina all in a single competition spread over two days. Excelling requires a rare combination of physical gifts and the mental toughness to perform in event after event, even when tired.

The decathlon, contested by men, is made up of ten events held over two days. On the first day, athletes compete in the 100 metres, the long jump, the shot put, the high jump, and the 400 metres. On the second day, they take on the 110-metre hurdles, the discus, the pole vault, the javelin, and finally, the gruelling 1500 metres. The sequence is demanding by design, mixing explosive sprints and jumps with technical throws and ending with a punishing distance race that tests whatever energy the athletes have left. Because it demands mastery of so many different skills, the decathlon has long been regarded as the ultimate test of athletic versatility, and its champion has historically been informally hailed as "the world's greatest athlete."

The heptathlon, contested by women, follows the same philosophy across seven events, also held over two days. The first day comprises the 100-metre hurdles, the high jump, the shot put, and the 200 metres. The second day features the long jump, the javelin, and the concluding 800 metres. Like the decathlon, it blends speed, power, technique, and endurance, and rewards the athlete who is strong across the board rather than dominant in any single discipline.

What makes these events fair and fascinating is the scoring system. Athletes do not simply win or lose each event; instead, their performance in every individual event, their time, distance, or height, is converted into points using established scoring tables. Better performances earn more points. After all the events are completed, the points from each are added together, and the athlete with the highest total wins. This means a competitor can have an average day in one discipline and make up for it with an excellent result in another. Success comes from consistency and the absence of weaknesses, since a single very poor event can be difficult to recover from over the full competition.

This scoring structure creates a unique kind of drama. The lead can change repeatedly over the two days as different athletes shine in their stronger events, and the competition often comes down to the final event, the 1500 metres in the decathlon or the 800 metres in the heptathlon, where athletes must dig deep in an exhausting race with the overall title on the line. Watching a leader cling on, or a challenger charge through, in that last event is one of athletics' great spectacles.

The athletes who take on these events must train across an enormous range of disciplines, an immense challenge given that specialists devote their entire careers to just one. That breadth of ability is exactly why decathletes and heptathletes are so admired. Once you understand the ten and seven events, the two-day format, and the points-based scoring that rewards all-round excellence, you can appreciate why winning these competitions is one of the most complete achievements in all of sport.`,
        category: 'Athletics',
        author: 'Daniel Osei',
        date: '2025-06-19',
        image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '66',
        title: 'Sports Nutrition Basics: How Athletes Fuel Performance',
        excerpt: 'What athletes eat and drink can make or break performance. Here is a clear guide to the fundamentals of sports nutrition.',
        content: `Training and talent take an athlete far, but what they eat and drink can be the difference between performing at their best and falling short. Sports nutrition, the science of fuelling the body for exercise and recovery, has become a central part of modern athletic preparation. Understanding its fundamentals reveals why nutrition is treated so seriously at every level of sport.

The starting point is understanding the body's main fuel sources, which come from three groups of nutrients: carbohydrates, proteins, and fats. Each plays a distinct role, and balancing them is the foundation of good sports nutrition.

Carbohydrates are the body's primary and most efficient source of energy for exercise. When we eat carbohydrates, the body converts them into glucose, which is used immediately for energy or stored in the muscles and liver as glycogen. During exercise, especially intense or prolonged effort, the body draws heavily on these glycogen stores. When they run low, fatigue sets in, which is why endurance athletes talk about "hitting the wall." For this reason, athletes in demanding sports prioritise carbohydrates, and endurance competitors sometimes practise "carb-loading," eating extra carbohydrates in the days before a long event to maximise their glycogen stores.

Protein is essential for building and repairing muscle. Exercise, particularly strength training, causes tiny amounts of damage to muscle fibres, and protein provides the building blocks (amino acids) the body uses to repair and strengthen them. Consuming adequate protein, spread through the day and often including some after training, supports recovery and helps athletes adapt and grow stronger. Protein is especially important for athletes focused on power and muscle development, but it matters for endurance athletes too.

Fats, often unfairly demonised, are also an important energy source, particularly for lower-intensity, longer-duration activity, and they support many essential bodily functions. Healthy fats are a valuable part of a balanced athletic diet, providing a dense source of energy and helping the body absorb certain vitamins.

Beyond these three fuels, hydration is absolutely critical and often underestimated. Even mild dehydration can impair performance, reducing endurance, slowing reaction times, and increasing the risk of cramps and heat-related illness. Athletes need to drink enough fluid before, during, and after exercise, and in longer or hotter sessions they must also replace electrolytes, minerals like sodium lost through sweat, which is why sports drinks exist. Getting hydration right is one of the simplest yet most powerful ways to protect performance.

Timing matters as much as content. Eating the right things at the right times, having enough fuel before training or competition, taking on energy during long events, and refuelling with carbohydrates and protein afterward to aid recovery, helps athletes get the most from every session. The window after exercise is particularly valuable for replenishing glycogen and beginning muscle repair.

Different sports have different nutritional demands. An endurance runner, a sprinter, a weightlifter, and a team-sport player all have distinct energy needs, and nutrition is increasingly tailored to the individual athlete, their sport, their body, and their goals. Many professional teams employ nutritionists to design personalised plans.

The core principles, though, apply to everyone: fuel with enough carbohydrate for your activity, get sufficient protein to recover, include healthy fats, stay well hydrated, and pay attention to timing. Sports nutrition is not about fad diets or magic supplements; it is about consistently giving the body the fuel it needs to train hard, recover well, and perform at its peak. For any athlete serious about improving, it is a foundation as important as the training itself.`,
        category: 'Wellness',
        author: 'Priya Sharma',
        date: '2025-06-18',
        image: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '67',
        title: 'Road, Track and Mountain Biking: Cycling\'s Main Disciplines',
        excerpt: 'Cycling is not one sport but several. Here is a clear guide to road racing, track cycling, mountain biking and more.',
        content: `When people think of competitive cycling, many picture the great road races winding through mountains. But cycling is not a single sport; it is a whole family of disciplines, each with its own terrain, bikes, tactics, and skills. Understanding the main branches, road, track, and mountain biking, along with a few others, reveals just how varied and rich the world of competitive cycling really is.

Road cycling is the most familiar and widely followed discipline, contested on paved roads over varying distances and terrain. Its most famous form is the multi-stage race, epitomised by the great tours held over several weeks, but road cycling also includes single-day "classics" and time trials. Road racing is defined by endurance, tactics, and teamwork. Riders compete in teams, and much of the drama lies in the interplay of the peloton (the main pack), breakaways, and the sacrifices teammates make to support their leader. Success requires the stamina to ride for hours, the climbing ability to conquer mountains, and the tactical intelligence to be in the right place at the right time.

Track cycling takes place indoors (or on outdoor tracks) on a steeply banked oval called a velodrome. The bikes used are highly specialised: they have no brakes and a single fixed gear, meaning the pedals turn whenever the wheels do. Track cycling includes a variety of events, some based on pure speed over short distances, where riders reach astonishing velocities and tactical sprints erupt in the final metres, and others based on endurance or teamwork, where riders or teams cover set distances or chase each other around the track. The banked track allows riders to carry enormous speed through the turns, producing a fast, intense, and often tactical form of racing quite different from the open road.

Mountain biking, as the name suggests, takes cycling off-road onto rough, natural terrain, using sturdy bikes with thick, knobbly tyres and suspension to absorb the shocks of rocks, roots, and drops. It comes in several forms. Cross-country mountain biking involves racing over hilly, off-road courses that test endurance and bike-handling skill. Downhill mountain biking, by contrast, sends riders hurtling down steep, technical descents against the clock, demanding nerve, precision, and split-second reactions as they navigate jumps and obstacles at high speed. Mountain biking rewards a very different skill set from road racing, prizing balance, control, and the ability to read rough ground.

Beyond these three main branches, there are other notable disciplines. BMX racing features short, intense races over dirt tracks packed with jumps and berms, emphasising explosive power and bike control, and it is an Olympic event. Cyclo-cross is a muddy, autumn-and-winter discipline in which riders race laps of a course that mixes rideable terrain with obstacles that force them to dismount and carry their bikes. There are also indoor and gravel disciplines that continue to grow in popularity.

Each discipline demands its own equipment, physical attributes, and skills, which is why most competitive cyclists specialise. A track sprinter is built for explosive power over seconds, a mountain climber on the road for sustained effort over hours, and a downhill mountain biker for fearless technical control. The bikes themselves are purpose-built for their terrain and rules.

Once you understand that cycling encompasses the endurance and tactics of the road, the speed and precision of the velodrome, and the rugged skill of off-road riding, you can appreciate the sport's remarkable breadth. Whether you are drawn to a three-week mountain epic, a thrilling track sprint, or a white-knuckle downhill run, they are all part of the diverse and fascinating world of competitive cycling.`,
        category: 'Cycling',
        author: 'Daniel Osei',
        date: '2025-06-17',
        image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    },
    {
        id: '68',
        title: 'How Olympic Swimming Events Work: Distances and Formats',
        excerpt: 'From 50-metre sprints to gruelling distance races, here is a clear guide to how Olympic swimming events are organised.',
        content: `Olympic swimming is one of the highlights of the Games, packed with dozens of races across different strokes and distances. To a newcomer, the programme can seem like a confusing list of numbers and stroke names. But the events follow a clear logic, organised by stroke, by distance, and by format. Understanding how they fit together makes the sport far easier and more thrilling to follow.

First, the pool itself. Olympic swimming is contested in a "long course" pool, which is 50 metres in length. This standard distance shapes everything: a 100-metre race means two lengths of the pool, a 200-metre race four lengths, and so on. Knowing the pool is 50 metres long lets you instantly picture how many lengths any race involves.

The events are organised around the four competitive strokes, freestyle, backstroke, breaststroke, and butterfly, plus combined-stroke events. Freestyle, the fastest stroke, is contested over the widest range of distances, from short sprints all the way up to long-distance races. The other three strokes, backstroke, breaststroke, and butterfly, are typically raced over shorter distances. This is why the swimming programme features many freestyle events of varying lengths but fewer, shorter races in the other strokes.

Distances define the character of each race. The shortest sprints, such as the 50-metre freestyle, are explosive, all-out dashes decided in around twenty seconds, where a single mistake off the start or at the finish can cost a medal. Middle-distance races, like the 100 and 200 metres, blend speed with the ability to sustain a fast pace and manage turns. The longer freestyle events, stretching to 800 and 1500 metres, are gruelling tests of endurance and pacing, where swimmers must judge their effort carefully over many lengths rather than sprinting from the start. Each distance rewards a different balance of speed, stamina, and race craft, and swimmers often specialise accordingly.

Then there are the combined events. In the individual medley, a single swimmer must perform all four strokes within one race, in a set order: butterfly, backstroke, breaststroke, and finally freestyle. Contested over 200 and 400 metres, it is a demanding test of all-round ability, since a swimmer must be proficient in every stroke rather than just one. The relays add a team dimension: four swimmers each swim a leg, and the exchanges between them, where the next swimmer dives in as the previous one touches, become moments of high drama. Freestyle relays have all four swimmers swimming freestyle, while the medley relay has each of the four swimmers perform a different stroke, in the order backstroke, breaststroke, butterfly, and freestyle.

The competition itself is usually structured in rounds to whittle a large field down to the best. Swimmers first compete in heats, and the fastest times advance to the next stage. In many events, this leads to semifinals and then a final, where the top eight swimmers race for the medals. Because only times matter, and the margins are often astonishingly small, this format ensures that the swimmers who reach the final are those in the best form, and that the medals are decided in a single climactic race.

Beyond the pool, the Olympic swimming programme also includes marathon swimming, a long-distance race held in open water such as a lake or the sea, testing endurance and navigation over a far greater distance than any pool event.

Once you understand the 50-metre pool, the four strokes and the distances they are raced over, the all-round challenge of the medley, the drama of the relays, and the heats-to-final format, Olympic swimming comes into focus. What first looks like an overwhelming list of events becomes a well-organised programme, each race a distinct test of speed, endurance, technique, or teamwork.`,
        category: 'Swimming',
        author: 'James Carter',
        date: '2025-06-16',
        image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1200',
        readTime: 4
    }
];
const categories = [
    'All',
    'Basketball',
    'Football',
    'Tennis',
    'Athletics',
    'Motorsport',
    'Cricket',
    'Swimming',
    'Wellness',
    'Cycling',
    'American Football',
    'Gymnastics',
    'Surfing',
    'FIFA',
    'Golf',
    'Boxing',
    'Rugby',
    'Horse Racing',
    'Skiing',
    'Volleyball',
    'Rowing',
    'Badminton',
    'Esports',
    'Ice Hockey'
];
function getArticleById(id) {
    return articles.find((article)=>article.id === id);
}
function getArticlesByCategory(category) {
    if (category === 'All') {
        return articles;
    }
    return articles.filter((article)=>article.category === category);
}
function getFeaturedArticles(count = 3) {
    return articles.slice(0, count);
}
function getAllArticles() {
    return articles;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/schema-markup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BreadcrumbSchema",
    ()=>BreadcrumbSchema,
    "FAQSchema",
    ()=>FAQSchema,
    "NewsArticleSchema",
    ()=>NewsArticleSchema,
    "OrganizationSchema",
    ()=>OrganizationSchema,
    "WebSiteSchema",
    ()=>WebSiteSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function OrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ProSports',
        url: 'https://sportsoffer.shop',
        logo: 'https://sportsoffer.shop/logo.png',
        description: 'Your go-to source for sports news, expert analysis, and in-depth guides across all major sports.',
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'contact@sportsoffer.shop',
            contactType: 'Customer Service'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        }
    }, void 0, false, {
        fileName: "[project]/components/schema-markup.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = OrganizationSchema;
function NewsArticleSchema({ headline, description, image, datePublished, dateModified, author }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline,
        description,
        image,
        datePublished,
        dateModified: dateModified || datePublished,
        author: {
            '@type': 'Person',
            name: author
        },
        publisher: {
            '@type': 'Organization',
            name: 'ProSports',
            logo: {
                '@type': 'ImageObject',
                url: 'https://sportsoffer.shop/logo.png'
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        }
    }, void 0, false, {
        fileName: "[project]/components/schema-markup.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c1 = NewsArticleSchema;
function WebSiteSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'ProSports',
        url: 'https://sportsoffer.shop',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://sportsoffer.shop/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        }
    }, void 0, false, {
        fileName: "[project]/components/schema-markup.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c2 = WebSiteSchema;
function BreadcrumbSchema({ items }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index)=>({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: item.url
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        }
    }, void 0, false, {
        fileName: "[project]/components/schema-markup.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_c3 = BreadcrumbSchema;
function FAQSchema({ faqs }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq)=>({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                }
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        }
    }, void 0, false, {
        fileName: "[project]/components/schema-markup.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_c4 = FAQSchema;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "OrganizationSchema");
__turbopack_context__.k.register(_c1, "NewsArticleSchema");
__turbopack_context__.k.register(_c2, "WebSiteSchema");
__turbopack_context__.k.register(_c3, "BreadcrumbSchema");
__turbopack_context__.k.register(_c4, "FAQSchema");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/article-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/articles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$schema$2d$markup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/schema-markup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-client] (ecmascript) <export default as TrendingUp>");
;
var _s = __turbopack_context__.k.signature();
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
function Home() {
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const featured = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeaturedArticles"])(1)[0];
    const latestArticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllArticles"])().slice(0, 8);
    const trendingArticles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllArticles"])().slice(0, 5);
    const filteredArticles = selectedCategory === 'All' ? latestArticles : latestArticles.filter((article)=>article.category === selectedCategory);
    const categoryStats = [
        'Basketball',
        'Football',
        'Tennis'
    ].map((category)=>({
            category,
            count: latestArticles.filter((article)=>article.category === category).length
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background text-foreground flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$schema$2d$markup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrganizationSchema"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$schema$2d$markup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebSiteSchema"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1",
                children: [
                    featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {
                        article: featured
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 34,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 bg-background border-b border-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-bold mb-4",
                                            children: "Your Ultimate Sports News Destination"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-muted-foreground",
                                            children: "Stay informed with breaking sports news, match reports, player updates, tournament coverage, and expert analysis."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 44,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 text-muted-foreground leading-8 text-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Welcome to All Sports Offer, your trusted source for the latest developments from the world of sports. We provide comprehensive coverage across football, basketball, tennis, cricket, and major international sporting events."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Our editorial team works to deliver accurate news, detailed match analysis, player performance reviews, tournament previews, transfer updates, and expert commentary. Whether you are following domestic leagues or global championships, we aim to keep you informed with reliable and engaging content."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Sports fans deserve more than headlines. That's why we focus on providing deeper insights into games, teams, athletes, and emerging stories. Our content is designed to help readers understand the context behind the news while staying connected to their favorite sports."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Alongside the news, we publish plain-English explainers that make sport easier to understand: how boxing's 10-point scoring system works, the rules of rugby union and volleyball, why a marathon is 26.2 miles, how alpine ski racing disciplines differ, and much more. Whether you are a lifelong fan or just getting started, our guides are written to be genuinely useful, accurate, and easy to read."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 5
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 39,
                            columnNumber: 3
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 38,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16 bg-background border-b border-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-xl bg-primary/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "w-5 h-5 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-3xl font-bold tracking-tight",
                                                        children: "Trending Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Most popular articles this week"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 7
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
                                    children: trendingArticles.map((article, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/article/${article.id}`,
                                            className: "group",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "relative h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-lg",
                                                        children: [
                                                            "#",
                                                            index + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4 pt-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
                                                            children: article.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 15
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "line-clamp-3 text-lg font-semibold leading-snug transition-colors group-hover:text-primary",
                                                        children: article.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 11
                                            }, this)
                                        }, article.id, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 9
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 5
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 90,
                            columnNumber: 3
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16 bg-background",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-bold mb-4",
                                            children: "Latest Stories"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground text-lg",
                                            children: "Stay updated with the hottest sports news and exclusive coverage."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: latestArticles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArticleCard"], {
                                            article: article
                                        }, article.id, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16 bg-card border-b border-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-bold mb-2",
                                            children: "Major Tournaments"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground",
                                            children: "The biggest competitions in world sport, explained"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-4 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/tournaments",
                                            className: "bg-background rounded-lg p-6 hover:shadow-lg transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl mb-3",
                                                    children: "⚽"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold mb-2",
                                                    children: "FIFA World Cup"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-sm mb-4",
                                                    children: "Football · Every 4 years"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary font-semibold text-sm",
                                                    children: "Learn More →"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/tournaments",
                                            className: "bg-background rounded-lg p-6 hover:shadow-lg transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl mb-3",
                                                    children: "🏅"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold mb-2",
                                                    children: "The Olympic Games"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-sm mb-4",
                                                    children: "Multi-sport · Every 4 years"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary font-semibold text-sm",
                                                    children: "Learn More →"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/tournaments",
                                            className: "bg-background rounded-lg p-6 hover:shadow-lg transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl mb-3",
                                                    children: "🎾"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold mb-2",
                                                    children: "Tennis Grand Slams"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-sm mb-4",
                                                    children: "Tennis · Four majors a year"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary font-semibold text-sm",
                                                    children: "Learn More →"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/tournaments",
                                            className: "bg-background rounded-lg p-6 hover:shadow-lg transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl mb-3",
                                                    children: "🏏"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold mb-2",
                                                    children: "Cricket World Cup"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-sm mb-4",
                                                    children: "Cricket · Every 4 years"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary font-semibold text-sm",
                                                    children: "Learn More →"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16 bg-background",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold mb-12",
                                    children: "Popular Categories"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: categoryStats.map(({ category, count })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-card rounded-lg p-6 hover:shadow-lg transition cursor-pointer",
                                            onClick: ()=>setSelectedCategory(category),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl",
                                                        children: "🏆"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold mb-2",
                                                    children: category
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground mb-4",
                                                    children: [
                                                        count,
                                                        " articles"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-primary font-semibold hover:text-primary/80 transition",
                                                    children: "Explore →"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, category, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Home, "GJyJoXpi2ajXoAHNvbhzt/lrQyM=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0lo1yd2._.js.map