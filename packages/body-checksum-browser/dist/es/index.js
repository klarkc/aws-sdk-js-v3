import { __awaiter, __generator } from "tslib";
import { blobReader } from "@aws-sdk/chunked-blob-reader";
import { TreeHash } from "@aws-sdk/sha256-tree-hash";
import { toHex } from "@aws-sdk/util-hex-encoding";
var MiB = 1024 * 1024;
export function bodyChecksumGenerator(request, options) {
    return __awaiter(this, void 0, void 0, function () {
        var contentHash, treeHash, body, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    contentHash = new options.sha256();
                    treeHash = new TreeHash(options.sha256, options.utf8Decoder);
                    body = request.body;
                    if (!(typeof body === "string")) return [3 /*break*/, 1];
                    contentHash.update(body);
                    treeHash.update(body);
                    return [3 /*break*/, 4];
                case 1:
                    if (!(Boolean(body) && Object.prototype.toString.call(body) === "[object Blob]")) return [3 /*break*/, 3];
                    return [4 /*yield*/, blobReader(body, function (chunk) {
                            treeHash === null || treeHash === void 0 ? void 0 : treeHash.update(chunk);
                            contentHash === null || contentHash === void 0 ? void 0 : contentHash.update(chunk);
                        }, MiB)];
                case 2:
                    _d.sent();
                    return [3 /*break*/, 4];
                case 3: throw new Error("Unable to calculate checksums for non-blob streams.");
                case 4:
                    _a = toHex;
                    return [4 /*yield*/, contentHash.digest()];
                case 5:
                    _b = [_a.apply(void 0, [_d.sent()])];
                    _c = toHex;
                    return [4 /*yield*/, treeHash.digest()];
                case 6: return [2 /*return*/, _b.concat([_c.apply(void 0, [_d.sent()])])];
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFckQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5ELElBQU0sR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFFeEIsTUFBTSxVQUFnQixxQkFBcUIsQ0FDekMsT0FBb0IsRUFDcEIsT0FHQzs7Ozs7O29CQUVLLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDbkMsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLEdBQUssT0FBTyxLQUFaLENBQWE7eUJBQ3JCLENBQUEsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFBLEVBQXhCLHdCQUF3QjtvQkFDMUIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7O3lCQUVsQixDQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssZUFBZSxDQUFBLEVBQXpFLHdCQUF5RTtvQkFDM0UscUJBQU0sVUFBVSxDQUNkLElBQUksRUFDSixVQUFDLEtBQVU7NEJBQ1QsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDeEIsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDN0IsQ0FBQyxFQUNELEdBQUcsQ0FDSixFQUFBOztvQkFQRCxTQU9DLENBQUM7O3dCQUVGLE1BQU0sSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQzs7b0JBSW5FLEtBQUEsS0FBSyxDQUFBO29CQUFDLHFCQUFNLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBQTs7MEJBQWhDLGtCQUFNLFNBQTBCLEVBQUM7b0JBQUUsS0FBQSxLQUFLLENBQUE7b0JBQUMscUJBQU0sUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFBO3dCQUF4RSxpQ0FBMkMsa0JBQU0sU0FBdUIsRUFBQyxJQUFFOzs7O0NBQzVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmxvYlJlYWRlciB9IGZyb20gXCJAYXdzLXNkay9jaHVua2VkLWJsb2ItcmVhZGVyXCI7XG5pbXBvcnQgeyBUcmVlSGFzaCB9IGZyb20gXCJAYXdzLXNkay9zaGEyNTYtdHJlZS1oYXNoXCI7XG5pbXBvcnQgeyBEZWNvZGVyLCBIYXNoQ29uc3RydWN0b3IsIEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyB0b0hleCB9IGZyb20gXCJAYXdzLXNkay91dGlsLWhleC1lbmNvZGluZ1wiO1xuXG5jb25zdCBNaUIgPSAxMDI0ICogMTAyNDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJvZHlDaGVja3N1bUdlbmVyYXRvcihcbiAgcmVxdWVzdDogSHR0cFJlcXVlc3QsXG4gIG9wdGlvbnM6IHtcbiAgICBzaGEyNTY6IEhhc2hDb25zdHJ1Y3RvcjtcbiAgICB1dGY4RGVjb2RlcjogRGVjb2RlcjtcbiAgfVxuKTogUHJvbWlzZTxbc3RyaW5nLCBzdHJpbmddPiB7XG4gIGNvbnN0IGNvbnRlbnRIYXNoID0gbmV3IG9wdGlvbnMuc2hhMjU2KCk7XG4gIGNvbnN0IHRyZWVIYXNoID0gbmV3IFRyZWVIYXNoKG9wdGlvbnMuc2hhMjU2LCBvcHRpb25zLnV0ZjhEZWNvZGVyKTtcbiAgY29uc3QgeyBib2R5IH0gPSByZXF1ZXN0O1xuICBpZiAodHlwZW9mIGJvZHkgPT09IFwic3RyaW5nXCIpIHtcbiAgICBjb250ZW50SGFzaC51cGRhdGUoYm9keSk7XG4gICAgdHJlZUhhc2gudXBkYXRlKGJvZHkpO1xuICB9IGVsc2Uge1xuICAgIGlmIChCb29sZWFuKGJvZHkpICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChib2R5KSA9PT0gXCJbb2JqZWN0IEJsb2JdXCIpIHtcbiAgICAgIGF3YWl0IGJsb2JSZWFkZXIoXG4gICAgICAgIGJvZHksXG4gICAgICAgIChjaHVuazogYW55KSA9PiB7XG4gICAgICAgICAgdHJlZUhhc2g/LnVwZGF0ZShjaHVuayk7XG4gICAgICAgICAgY29udGVudEhhc2g/LnVwZGF0ZShjaHVuayk7XG4gICAgICAgIH0sXG4gICAgICAgIE1pQlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGNhbGN1bGF0ZSBjaGVja3N1bXMgZm9yIG5vbi1ibG9iIHN0cmVhbXMuXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbdG9IZXgoYXdhaXQgY29udGVudEhhc2guZGlnZXN0KCkpLCB0b0hleChhd2FpdCB0cmVlSGFzaC5kaWdlc3QoKSldO1xufVxuIl19