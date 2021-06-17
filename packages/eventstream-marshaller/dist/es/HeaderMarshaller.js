import { __values } from "tslib";
import { fromHex, toHex } from "@aws-sdk/util-hex-encoding";
import { Int64 } from "./Int64";
/**
 * @internal
 */
var HeaderMarshaller = /** @class */ (function () {
    function HeaderMarshaller(toUtf8, fromUtf8) {
        this.toUtf8 = toUtf8;
        this.fromUtf8 = fromUtf8;
    }
    HeaderMarshaller.prototype.format = function (headers) {
        var e_1, _a, e_2, _b;
        var chunks = [];
        try {
            for (var _c = __values(Object.keys(headers)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var headerName = _d.value;
                var bytes = this.fromUtf8(headerName);
                chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var out = new Uint8Array(chunks.reduce(function (carry, bytes) { return carry + bytes.byteLength; }, 0));
        var position = 0;
        try {
            for (var chunks_1 = __values(chunks), chunks_1_1 = chunks_1.next(); !chunks_1_1.done; chunks_1_1 = chunks_1.next()) {
                var chunk = chunks_1_1.value;
                out.set(chunk, position);
                position += chunk.byteLength;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (chunks_1_1 && !chunks_1_1.done && (_b = chunks_1.return)) _b.call(chunks_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return out;
    };
    HeaderMarshaller.prototype.formatHeaderValue = function (header) {
        switch (header.type) {
            case "boolean":
                return Uint8Array.from([header.value ? 0 /* boolTrue */ : 1 /* boolFalse */]);
            case "byte":
                return Uint8Array.from([2 /* byte */, header.value]);
            case "short":
                var shortView = new DataView(new ArrayBuffer(3));
                shortView.setUint8(0, 3 /* short */);
                shortView.setInt16(1, header.value, false);
                return new Uint8Array(shortView.buffer);
            case "integer":
                var intView = new DataView(new ArrayBuffer(5));
                intView.setUint8(0, 4 /* integer */);
                intView.setInt32(1, header.value, false);
                return new Uint8Array(intView.buffer);
            case "long":
                var longBytes = new Uint8Array(9);
                longBytes[0] = 5 /* long */;
                longBytes.set(header.value.bytes, 1);
                return longBytes;
            case "binary":
                var binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
                binView.setUint8(0, 6 /* byteArray */);
                binView.setUint16(1, header.value.byteLength, false);
                var binBytes = new Uint8Array(binView.buffer);
                binBytes.set(header.value, 3);
                return binBytes;
            case "string":
                var utf8Bytes = this.fromUtf8(header.value);
                var strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
                strView.setUint8(0, 7 /* string */);
                strView.setUint16(1, utf8Bytes.byteLength, false);
                var strBytes = new Uint8Array(strView.buffer);
                strBytes.set(utf8Bytes, 3);
                return strBytes;
            case "timestamp":
                var tsBytes = new Uint8Array(9);
                tsBytes[0] = 8 /* timestamp */;
                tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
                return tsBytes;
            case "uuid":
                if (!UUID_PATTERN.test(header.value)) {
                    throw new Error("Invalid UUID received: " + header.value);
                }
                var uuidBytes = new Uint8Array(17);
                uuidBytes[0] = 9 /* uuid */;
                uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
                return uuidBytes;
        }
    };
    HeaderMarshaller.prototype.parse = function (headers) {
        var out = {};
        var position = 0;
        while (position < headers.byteLength) {
            var nameLength = headers.getUint8(position++);
            var name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
            position += nameLength;
            switch (headers.getUint8(position++)) {
                case 0 /* boolTrue */:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: true,
                    };
                    break;
                case 1 /* boolFalse */:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: false,
                    };
                    break;
                case 2 /* byte */:
                    out[name] = {
                        type: BYTE_TAG,
                        value: headers.getInt8(position++),
                    };
                    break;
                case 3 /* short */:
                    out[name] = {
                        type: SHORT_TAG,
                        value: headers.getInt16(position, false),
                    };
                    position += 2;
                    break;
                case 4 /* integer */:
                    out[name] = {
                        type: INT_TAG,
                        value: headers.getInt32(position, false),
                    };
                    position += 4;
                    break;
                case 5 /* long */:
                    out[name] = {
                        type: LONG_TAG,
                        value: new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)),
                    };
                    position += 8;
                    break;
                case 6 /* byteArray */:
                    var binaryLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: BINARY_TAG,
                        value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength),
                    };
                    position += binaryLength;
                    break;
                case 7 /* string */:
                    var stringLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: STRING_TAG,
                        value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength)),
                    };
                    position += stringLength;
                    break;
                case 8 /* timestamp */:
                    out[name] = {
                        type: TIMESTAMP_TAG,
                        value: new Date(new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf()),
                    };
                    position += 8;
                    break;
                case 9 /* uuid */:
                    var uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
                    position += 16;
                    out[name] = {
                        type: UUID_TAG,
                        value: toHex(uuidBytes.subarray(0, 4)) + "-" + toHex(uuidBytes.subarray(4, 6)) + "-" + toHex(uuidBytes.subarray(6, 8)) + "-" + toHex(uuidBytes.subarray(8, 10)) + "-" + toHex(uuidBytes.subarray(10)),
                    };
                    break;
                default:
                    throw new Error("Unrecognized header type tag");
            }
        }
        return out;
    };
    return HeaderMarshaller;
}());
export { HeaderMarshaller };
var HEADER_VALUE_TYPE;
(function (HEADER_VALUE_TYPE) {
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["short"] = 3] = "short";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["long"] = 5] = "long";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["string"] = 7] = "string";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
var BOOLEAN_TAG = "boolean";
var BYTE_TAG = "byte";
var SHORT_TAG = "short";
var INT_TAG = "integer";
var LONG_TAG = "long";
var BINARY_TAG = "binary";
var STRING_TAG = "string";
var TIMESTAMP_TAG = "timestamp";
var UUID_TAG = "uuid";
var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyTWFyc2hhbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWFkZXJNYXJzaGFsbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTVELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFaEM7O0dBRUc7QUFDSDtJQUNFLDBCQUE2QixNQUFlLEVBQW1CLFFBQWlCO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQVM7UUFBbUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztJQUFHLENBQUM7SUFFcEYsaUNBQU0sR0FBTixVQUFPLE9BQXVCOztRQUM1QixJQUFNLE1BQU0sR0FBc0IsRUFBRSxDQUFDOztZQUVyQyxLQUF5QixJQUFBLEtBQUEsU0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO2dCQUExQyxJQUFNLFVBQVUsV0FBQTtnQkFDbkIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RHOzs7Ozs7Ozs7UUFFRCxJQUFNLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUssSUFBSyxPQUFBLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxFQUF4QixDQUF3QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekYsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDOztZQUNqQixLQUFvQixJQUFBLFdBQUEsU0FBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7Z0JBQXZCLElBQU0sS0FBSyxtQkFBQTtnQkFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDekIsUUFBUSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUM7YUFDOUI7Ozs7Ozs7OztRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVPLDRDQUFpQixHQUF6QixVQUEwQixNQUEwQjtRQUNsRCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDbkIsS0FBSyxTQUFTO2dCQUNaLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxrQkFBNEIsQ0FBQyxrQkFBNEIsQ0FBQyxDQUFDLENBQUM7WUFDcEcsS0FBSyxNQUFNO2dCQUNULE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxlQUF5QixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNqRSxLQUFLLE9BQU87Z0JBQ1YsSUFBTSxTQUFTLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUEwQixDQUFDO2dCQUMvQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMzQyxPQUFPLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxLQUFLLFNBQVM7Z0JBQ1osSUFBTSxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUE0QixDQUFDO2dCQUMvQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN6QyxPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxLQUFLLE1BQU07Z0JBQ1QsSUFBTSxTQUFTLEdBQUcsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZUFBeUIsQ0FBQztnQkFDdEMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDckMsT0FBTyxTQUFTLENBQUM7WUFDbkIsS0FBSyxRQUFRO2dCQUNYLElBQU0sT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBOEIsQ0FBQztnQkFDakQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3JELElBQU0sUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixPQUFPLFFBQVEsQ0FBQztZQUNsQixLQUFLLFFBQVE7Z0JBQ1gsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlDLElBQU0sT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDeEUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUEyQixDQUFDO2dCQUM5QyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNsRCxJQUFNLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2hELFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixPQUFPLFFBQVEsQ0FBQztZQUNsQixLQUFLLFdBQVc7Z0JBQ2QsSUFBTSxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLE9BQU8sQ0FBQyxDQUFDLENBQUMsb0JBQThCLENBQUM7Z0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvRCxPQUFPLE9BQU8sQ0FBQztZQUNqQixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNwQyxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUEwQixNQUFNLENBQUMsS0FBTyxDQUFDLENBQUM7aUJBQzNEO2dCQUVELElBQU0sU0FBUyxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQXlCLENBQUM7Z0JBQ3RDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxPQUFPLFNBQVMsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRCxnQ0FBSyxHQUFMLFVBQU0sT0FBaUI7UUFDckIsSUFBTSxHQUFHLEdBQW1CLEVBQUUsQ0FBQztRQUMvQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFFakIsT0FBTyxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUNwQyxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDaEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxVQUFVLEdBQUcsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEcsUUFBUSxJQUFJLFVBQVUsQ0FBQztZQUV2QixRQUFRLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRTtnQkFDcEM7b0JBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO3dCQUNWLElBQUksRUFBRSxXQUFXO3dCQUNqQixLQUFLLEVBQUUsSUFBSTtxQkFDWixDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO3dCQUNWLElBQUksRUFBRSxXQUFXO3dCQUNqQixLQUFLLEVBQUUsS0FBSztxQkFDYixDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO3dCQUNWLElBQUksRUFBRSxRQUFRO3dCQUNkLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUNuQyxDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO3dCQUNWLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7cUJBQ3pDLENBQUM7b0JBQ0YsUUFBUSxJQUFJLENBQUMsQ0FBQztvQkFDZCxNQUFNO2dCQUNSO29CQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRzt3QkFDVixJQUFJLEVBQUUsT0FBTzt3QkFDYixLQUFLLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO3FCQUN6QyxDQUFDO29CQUNGLFFBQVEsSUFBSSxDQUFDLENBQUM7b0JBQ2QsTUFBTTtnQkFDUjtvQkFDRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7d0JBQ1YsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFVBQVUsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ25GLENBQUM7b0JBQ0YsUUFBUSxJQUFJLENBQUMsQ0FBQztvQkFDZCxNQUFNO2dCQUNSO29CQUNFLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUN4RCxRQUFRLElBQUksQ0FBQyxDQUFDO29CQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRzt3QkFDVixJQUFJLEVBQUUsVUFBVTt3QkFDaEIsS0FBSyxFQUFFLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFVBQVUsR0FBRyxRQUFRLEVBQUUsWUFBWSxDQUFDO3FCQUNuRixDQUFDO29CQUNGLFFBQVEsSUFBSSxZQUFZLENBQUM7b0JBQ3pCLE1BQU07Z0JBQ1I7b0JBQ0UsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3hELFFBQVEsSUFBSSxDQUFDLENBQUM7b0JBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO3dCQUNWLElBQUksRUFBRSxVQUFVO3dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxVQUFVLEdBQUcsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO3FCQUNoRyxDQUFDO29CQUNGLFFBQVEsSUFBSSxZQUFZLENBQUM7b0JBQ3pCLE1BQU07Z0JBQ1I7b0JBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO3dCQUNWLElBQUksRUFBRSxhQUFhO3dCQUNuQixLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsVUFBVSxHQUFHLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUN2RyxDQUFDO29CQUNGLFFBQVEsSUFBSSxDQUFDLENBQUM7b0JBQ2QsTUFBTTtnQkFDUjtvQkFDRSxJQUFNLFNBQVMsR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxVQUFVLEdBQUcsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNwRixRQUFRLElBQUksRUFBRSxDQUFDO29CQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRzt3QkFDVixJQUFJLEVBQUUsUUFBUTt3QkFDZCxLQUFLLEVBQUssS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQUksS0FBSyxDQUNuRixTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDekIsU0FBSSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBSSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBRztxQkFDekUsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQzthQUNuRDtTQUNGO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBcktELElBcUtDOztBQUVELElBQVcsaUJBV1Y7QUFYRCxXQUFXLGlCQUFpQjtJQUMxQixpRUFBWSxDQUFBO0lBQ1osbUVBQVMsQ0FBQTtJQUNULHlEQUFJLENBQUE7SUFDSiwyREFBSyxDQUFBO0lBQ0wsK0RBQU8sQ0FBQTtJQUNQLHlEQUFJLENBQUE7SUFDSixtRUFBUyxDQUFBO0lBQ1QsNkRBQU0sQ0FBQTtJQUNOLG1FQUFTLENBQUE7SUFDVCx5REFBSSxDQUFBO0FBQ04sQ0FBQyxFQVhVLGlCQUFpQixLQUFqQixpQkFBaUIsUUFXM0I7QUFFRCxJQUFNLFdBQVcsR0FBRyxTQUFTLENBQUM7QUFDOUIsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUMxQixJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUM7QUFDMUIsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUM1QixJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFDNUIsSUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDO0FBQ2xDLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUV4QixJQUFNLFlBQVksR0FBRyxnRUFBZ0UsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY29kZXIsIEVuY29kZXIsIE1lc3NhZ2VIZWFkZXJzLCBNZXNzYWdlSGVhZGVyVmFsdWUgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IGZyb21IZXgsIHRvSGV4IH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtaGV4LWVuY29kaW5nXCI7XG5cbmltcG9ydCB7IEludDY0IH0gZnJvbSBcIi4vSW50NjRcIjtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNsYXNzIEhlYWRlck1hcnNoYWxsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHRvVXRmODogRW5jb2RlciwgcHJpdmF0ZSByZWFkb25seSBmcm9tVXRmODogRGVjb2Rlcikge31cblxuICBmb3JtYXQoaGVhZGVyczogTWVzc2FnZUhlYWRlcnMpOiBVaW50OEFycmF5IHtcbiAgICBjb25zdCBjaHVua3M6IEFycmF5PFVpbnQ4QXJyYXk+ID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGhlYWRlck5hbWUgb2YgT2JqZWN0LmtleXMoaGVhZGVycykpIHtcbiAgICAgIGNvbnN0IGJ5dGVzID0gdGhpcy5mcm9tVXRmOChoZWFkZXJOYW1lKTtcbiAgICAgIGNodW5rcy5wdXNoKFVpbnQ4QXJyYXkuZnJvbShbYnl0ZXMuYnl0ZUxlbmd0aF0pLCBieXRlcywgdGhpcy5mb3JtYXRIZWFkZXJWYWx1ZShoZWFkZXJzW2hlYWRlck5hbWVdKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3V0ID0gbmV3IFVpbnQ4QXJyYXkoY2h1bmtzLnJlZHVjZSgoY2FycnksIGJ5dGVzKSA9PiBjYXJyeSArIGJ5dGVzLmJ5dGVMZW5ndGgsIDApKTtcbiAgICBsZXQgcG9zaXRpb24gPSAwO1xuICAgIGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtzKSB7XG4gICAgICBvdXQuc2V0KGNodW5rLCBwb3NpdGlvbik7XG4gICAgICBwb3NpdGlvbiArPSBjaHVuay5ieXRlTGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdEhlYWRlclZhbHVlKGhlYWRlcjogTWVzc2FnZUhlYWRlclZhbHVlKTogVWludDhBcnJheSB7XG4gICAgc3dpdGNoIChoZWFkZXIudHlwZSkge1xuICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkuZnJvbShbaGVhZGVyLnZhbHVlID8gSEVBREVSX1ZBTFVFX1RZUEUuYm9vbFRydWUgOiBIRUFERVJfVkFMVUVfVFlQRS5ib29sRmFsc2VdKTtcbiAgICAgIGNhc2UgXCJieXRlXCI6XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LmZyb20oW0hFQURFUl9WQUxVRV9UWVBFLmJ5dGUsIGhlYWRlci52YWx1ZV0pO1xuICAgICAgY2FzZSBcInNob3J0XCI6XG4gICAgICAgIGNvbnN0IHNob3J0VmlldyA9IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMykpO1xuICAgICAgICBzaG9ydFZpZXcuc2V0VWludDgoMCwgSEVBREVSX1ZBTFVFX1RZUEUuc2hvcnQpO1xuICAgICAgICBzaG9ydFZpZXcuc2V0SW50MTYoMSwgaGVhZGVyLnZhbHVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShzaG9ydFZpZXcuYnVmZmVyKTtcbiAgICAgIGNhc2UgXCJpbnRlZ2VyXCI6XG4gICAgICAgIGNvbnN0IGludFZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDUpKTtcbiAgICAgICAgaW50Vmlldy5zZXRVaW50OCgwLCBIRUFERVJfVkFMVUVfVFlQRS5pbnRlZ2VyKTtcbiAgICAgICAgaW50Vmlldy5zZXRJbnQzMigxLCBoZWFkZXIudmFsdWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGludFZpZXcuYnVmZmVyKTtcbiAgICAgIGNhc2UgXCJsb25nXCI6XG4gICAgICAgIGNvbnN0IGxvbmdCeXRlcyA9IG5ldyBVaW50OEFycmF5KDkpO1xuICAgICAgICBsb25nQnl0ZXNbMF0gPSBIRUFERVJfVkFMVUVfVFlQRS5sb25nO1xuICAgICAgICBsb25nQnl0ZXMuc2V0KGhlYWRlci52YWx1ZS5ieXRlcywgMSk7XG4gICAgICAgIHJldHVybiBsb25nQnl0ZXM7XG4gICAgICBjYXNlIFwiYmluYXJ5XCI6XG4gICAgICAgIGNvbnN0IGJpblZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDMgKyBoZWFkZXIudmFsdWUuYnl0ZUxlbmd0aCkpO1xuICAgICAgICBiaW5WaWV3LnNldFVpbnQ4KDAsIEhFQURFUl9WQUxVRV9UWVBFLmJ5dGVBcnJheSk7XG4gICAgICAgIGJpblZpZXcuc2V0VWludDE2KDEsIGhlYWRlci52YWx1ZS5ieXRlTGVuZ3RoLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IGJpbkJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYmluVmlldy5idWZmZXIpO1xuICAgICAgICBiaW5CeXRlcy5zZXQoaGVhZGVyLnZhbHVlLCAzKTtcbiAgICAgICAgcmV0dXJuIGJpbkJ5dGVzO1xuICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICBjb25zdCB1dGY4Qnl0ZXMgPSB0aGlzLmZyb21VdGY4KGhlYWRlci52YWx1ZSk7XG4gICAgICAgIGNvbnN0IHN0clZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDMgKyB1dGY4Qnl0ZXMuYnl0ZUxlbmd0aCkpO1xuICAgICAgICBzdHJWaWV3LnNldFVpbnQ4KDAsIEhFQURFUl9WQUxVRV9UWVBFLnN0cmluZyk7XG4gICAgICAgIHN0clZpZXcuc2V0VWludDE2KDEsIHV0ZjhCeXRlcy5ieXRlTGVuZ3RoLCBmYWxzZSk7XG4gICAgICAgIGNvbnN0IHN0ckJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoc3RyVmlldy5idWZmZXIpO1xuICAgICAgICBzdHJCeXRlcy5zZXQodXRmOEJ5dGVzLCAzKTtcbiAgICAgICAgcmV0dXJuIHN0ckJ5dGVzO1xuICAgICAgY2FzZSBcInRpbWVzdGFtcFwiOlxuICAgICAgICBjb25zdCB0c0J5dGVzID0gbmV3IFVpbnQ4QXJyYXkoOSk7XG4gICAgICAgIHRzQnl0ZXNbMF0gPSBIRUFERVJfVkFMVUVfVFlQRS50aW1lc3RhbXA7XG4gICAgICAgIHRzQnl0ZXMuc2V0KEludDY0LmZyb21OdW1iZXIoaGVhZGVyLnZhbHVlLnZhbHVlT2YoKSkuYnl0ZXMsIDEpO1xuICAgICAgICByZXR1cm4gdHNCeXRlcztcbiAgICAgIGNhc2UgXCJ1dWlkXCI6XG4gICAgICAgIGlmICghVVVJRF9QQVRURVJOLnRlc3QoaGVhZGVyLnZhbHVlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBVVUlEIHJlY2VpdmVkOiAke2hlYWRlci52YWx1ZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHV1aWRCeXRlcyA9IG5ldyBVaW50OEFycmF5KDE3KTtcbiAgICAgICAgdXVpZEJ5dGVzWzBdID0gSEVBREVSX1ZBTFVFX1RZUEUudXVpZDtcbiAgICAgICAgdXVpZEJ5dGVzLnNldChmcm9tSGV4KGhlYWRlci52YWx1ZS5yZXBsYWNlKC9cXC0vZywgXCJcIikpLCAxKTtcbiAgICAgICAgcmV0dXJuIHV1aWRCeXRlcztcbiAgICB9XG4gIH1cblxuICBwYXJzZShoZWFkZXJzOiBEYXRhVmlldyk6IE1lc3NhZ2VIZWFkZXJzIHtcbiAgICBjb25zdCBvdXQ6IE1lc3NhZ2VIZWFkZXJzID0ge307XG4gICAgbGV0IHBvc2l0aW9uID0gMDtcblxuICAgIHdoaWxlIChwb3NpdGlvbiA8IGhlYWRlcnMuYnl0ZUxlbmd0aCkge1xuICAgICAgY29uc3QgbmFtZUxlbmd0aCA9IGhlYWRlcnMuZ2V0VWludDgocG9zaXRpb24rKyk7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy50b1V0ZjgobmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCBuYW1lTGVuZ3RoKSk7XG4gICAgICBwb3NpdGlvbiArPSBuYW1lTGVuZ3RoO1xuXG4gICAgICBzd2l0Y2ggKGhlYWRlcnMuZ2V0VWludDgocG9zaXRpb24rKykpIHtcbiAgICAgICAgY2FzZSBIRUFERVJfVkFMVUVfVFlQRS5ib29sVHJ1ZTpcbiAgICAgICAgICBvdXRbbmFtZV0gPSB7XG4gICAgICAgICAgICB0eXBlOiBCT09MRUFOX1RBRyxcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgSEVBREVSX1ZBTFVFX1RZUEUuYm9vbEZhbHNlOlxuICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgIHR5cGU6IEJPT0xFQU5fVEFHLFxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgSEVBREVSX1ZBTFVFX1RZUEUuYnl0ZTpcbiAgICAgICAgICBvdXRbbmFtZV0gPSB7XG4gICAgICAgICAgICB0eXBlOiBCWVRFX1RBRyxcbiAgICAgICAgICAgIHZhbHVlOiBoZWFkZXJzLmdldEludDgocG9zaXRpb24rKyksXG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBIRUFERVJfVkFMVUVfVFlQRS5zaG9ydDpcbiAgICAgICAgICBvdXRbbmFtZV0gPSB7XG4gICAgICAgICAgICB0eXBlOiBTSE9SVF9UQUcsXG4gICAgICAgICAgICB2YWx1ZTogaGVhZGVycy5nZXRJbnQxNihwb3NpdGlvbiwgZmFsc2UpLFxuICAgICAgICAgIH07XG4gICAgICAgICAgcG9zaXRpb24gKz0gMjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBIRUFERVJfVkFMVUVfVFlQRS5pbnRlZ2VyOlxuICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgIHR5cGU6IElOVF9UQUcsXG4gICAgICAgICAgICB2YWx1ZTogaGVhZGVycy5nZXRJbnQzMihwb3NpdGlvbiwgZmFsc2UpLFxuICAgICAgICAgIH07XG4gICAgICAgICAgcG9zaXRpb24gKz0gNDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBIRUFERVJfVkFMVUVfVFlQRS5sb25nOlxuICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgIHR5cGU6IExPTkdfVEFHLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBJbnQ2NChuZXcgVWludDhBcnJheShoZWFkZXJzLmJ1ZmZlciwgaGVhZGVycy5ieXRlT2Zmc2V0ICsgcG9zaXRpb24sIDgpKSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHBvc2l0aW9uICs9IDg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgSEVBREVSX1ZBTFVFX1RZUEUuYnl0ZUFycmF5OlxuICAgICAgICAgIGNvbnN0IGJpbmFyeUxlbmd0aCA9IGhlYWRlcnMuZ2V0VWludDE2KHBvc2l0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgcG9zaXRpb24gKz0gMjtcbiAgICAgICAgICBvdXRbbmFtZV0gPSB7XG4gICAgICAgICAgICB0eXBlOiBCSU5BUllfVEFHLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBVaW50OEFycmF5KGhlYWRlcnMuYnVmZmVyLCBoZWFkZXJzLmJ5dGVPZmZzZXQgKyBwb3NpdGlvbiwgYmluYXJ5TGVuZ3RoKSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHBvc2l0aW9uICs9IGJpbmFyeUxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBIRUFERVJfVkFMVUVfVFlQRS5zdHJpbmc6XG4gICAgICAgICAgY29uc3Qgc3RyaW5nTGVuZ3RoID0gaGVhZGVycy5nZXRVaW50MTYocG9zaXRpb24sIGZhbHNlKTtcbiAgICAgICAgICBwb3NpdGlvbiArPSAyO1xuICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgIHR5cGU6IFNUUklOR19UQUcsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy50b1V0ZjgobmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCBzdHJpbmdMZW5ndGgpKSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHBvc2l0aW9uICs9IHN0cmluZ0xlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBIRUFERVJfVkFMVUVfVFlQRS50aW1lc3RhbXA6XG4gICAgICAgICAgb3V0W25hbWVdID0ge1xuICAgICAgICAgICAgdHlwZTogVElNRVNUQU1QX1RBRyxcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0ZShuZXcgSW50NjQobmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCA4KSkudmFsdWVPZigpKSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHBvc2l0aW9uICs9IDg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgSEVBREVSX1ZBTFVFX1RZUEUudXVpZDpcbiAgICAgICAgICBjb25zdCB1dWlkQnl0ZXMgPSBuZXcgVWludDhBcnJheShoZWFkZXJzLmJ1ZmZlciwgaGVhZGVycy5ieXRlT2Zmc2V0ICsgcG9zaXRpb24sIDE2KTtcbiAgICAgICAgICBwb3NpdGlvbiArPSAxNjtcbiAgICAgICAgICBvdXRbbmFtZV0gPSB7XG4gICAgICAgICAgICB0eXBlOiBVVUlEX1RBRyxcbiAgICAgICAgICAgIHZhbHVlOiBgJHt0b0hleCh1dWlkQnl0ZXMuc3ViYXJyYXkoMCwgNCkpfS0ke3RvSGV4KHV1aWRCeXRlcy5zdWJhcnJheSg0LCA2KSl9LSR7dG9IZXgoXG4gICAgICAgICAgICAgIHV1aWRCeXRlcy5zdWJhcnJheSg2LCA4KVxuICAgICAgICAgICAgKX0tJHt0b0hleCh1dWlkQnl0ZXMuc3ViYXJyYXkoOCwgMTApKX0tJHt0b0hleCh1dWlkQnl0ZXMuc3ViYXJyYXkoMTApKX1gLFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgaGVhZGVyIHR5cGUgdGFnYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbiAgfVxufVxuXG5jb25zdCBlbnVtIEhFQURFUl9WQUxVRV9UWVBFIHtcbiAgYm9vbFRydWUgPSAwLFxuICBib29sRmFsc2UsXG4gIGJ5dGUsXG4gIHNob3J0LFxuICBpbnRlZ2VyLFxuICBsb25nLFxuICBieXRlQXJyYXksXG4gIHN0cmluZyxcbiAgdGltZXN0YW1wLFxuICB1dWlkLFxufVxuXG5jb25zdCBCT09MRUFOX1RBRyA9IFwiYm9vbGVhblwiO1xuY29uc3QgQllURV9UQUcgPSBcImJ5dGVcIjtcbmNvbnN0IFNIT1JUX1RBRyA9IFwic2hvcnRcIjtcbmNvbnN0IElOVF9UQUcgPSBcImludGVnZXJcIjtcbmNvbnN0IExPTkdfVEFHID0gXCJsb25nXCI7XG5jb25zdCBCSU5BUllfVEFHID0gXCJiaW5hcnlcIjtcbmNvbnN0IFNUUklOR19UQUcgPSBcInN0cmluZ1wiO1xuY29uc3QgVElNRVNUQU1QX1RBRyA9IFwidGltZXN0YW1wXCI7XG5jb25zdCBVVUlEX1RBRyA9IFwidXVpZFwiO1xuXG5jb25zdCBVVUlEX1BBVFRFUk4gPSAvXlthLWYwLTldezh9LVthLWYwLTldezR9LVthLWYwLTldezR9LVthLWYwLTldezR9LVthLWYwLTldezEyfSQvO1xuIl19