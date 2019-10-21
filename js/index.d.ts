declare module "versions.static" {
    var _default: {
        "@a/b": string;
        "@a/c": string;
    };
    export default _default;
}
declare module "index" {
    export { versions };
    import versions from "versions.static.js";
}
