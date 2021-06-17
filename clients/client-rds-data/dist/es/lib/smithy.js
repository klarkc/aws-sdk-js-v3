/**
 * Checks if the given value is a Smithy structure of the given type.
 */
export function isa(o) {
    var ids = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ids[_i - 1] = arguments[_i];
    }
    return typeof o === "object" && "__type" in o && ids.indexOf(o["__type"]) > -1;
}
//# sourceMappingURL=smithy.js.map