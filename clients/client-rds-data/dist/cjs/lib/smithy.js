"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isa = void 0;
/**
 * Checks if the given value is a Smithy structure of the given type.
 */
function isa(o, ...ids) {
    return typeof o === "object" && "__type" in o && ids.indexOf(o["__type"]) > -1;
}
exports.isa = isa;
//# sourceMappingURL=smithy.js.map