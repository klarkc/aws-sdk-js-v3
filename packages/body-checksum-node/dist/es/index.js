import { __awaiter, __generator } from "tslib";
import { streamReader } from "@aws-sdk/chunked-stream-reader-node";
import { isArrayBuffer } from "@aws-sdk/is-array-buffer";
import { TreeHash } from "@aws-sdk/sha256-tree-hash";
import { toHex } from "@aws-sdk/util-hex-encoding";
import { createReadStream } from "fs";
export function bodyChecksumGenerator(request, options) {
    return __awaiter(this, void 0, void 0, function () {
        var contentHash, treeHash, body, bodyTee, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    contentHash = new options.sha256();
                    treeHash = new TreeHash(options.sha256, options.utf8Decoder);
                    body = request.body;
                    if (!(typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body))) return [3 /*break*/, 1];
                    contentHash === null || contentHash === void 0 ? void 0 : contentHash.update(body);
                    treeHash === null || treeHash === void 0 ? void 0 : treeHash.update(body);
                    return [3 /*break*/, 3];
                case 1:
                    if (typeof body.path !== "string") {
                        throw new Error("Unable to calculate checksums for non-file streams.");
                    }
                    bodyTee = createReadStream(body.path, {
                        start: body.start,
                        end: body.end,
                    });
                    return [4 /*yield*/, streamReader(bodyTee, function (chunk) {
                            contentHash === null || contentHash === void 0 ? void 0 : contentHash.update(chunk);
                            treeHash === null || treeHash === void 0 ? void 0 : treeHash.update(chunk);
                        })];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _a = toHex;
                    return [4 /*yield*/, contentHash.digest()];
                case 4:
                    _b = [_a.apply(void 0, [_d.sent()])];
                    _c = toHex;
                    return [4 /*yield*/, treeHash.digest()];
                case 5: return [2 /*return*/, _b.concat([_c.apply(void 0, [_d.sent()])])];
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFFdEMsTUFBTSxVQUFnQixxQkFBcUIsQ0FDekMsT0FBb0IsRUFDcEIsT0FHQzs7Ozs7O29CQUVLLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDbkMsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLEdBQUssT0FBTyxLQUFaLENBQWE7eUJBQ3JCLENBQUEsT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBLEVBQTNFLHdCQUEyRTtvQkFDN0UsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDMUIsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7O29CQUV2QixJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7d0JBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztxQkFDeEU7b0JBQ0ssT0FBTyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQzFDLEtBQUssRUFBRyxJQUFZLENBQUMsS0FBSzt3QkFDMUIsR0FBRyxFQUFHLElBQVksQ0FBQyxHQUFHO3FCQUN2QixDQUFDLENBQUM7b0JBRUgscUJBQU0sWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQVU7NEJBQ3JDLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQzNCLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzFCLENBQUMsQ0FBQyxFQUFBOztvQkFIRixTQUdFLENBQUM7OztvQkFHRyxLQUFBLEtBQUssQ0FBQTtvQkFBQyxxQkFBTSxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUE7OzBCQUFoQyxrQkFBTSxTQUEwQixFQUFDO29CQUFFLEtBQUEsS0FBSyxDQUFBO29CQUFDLHFCQUFNLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBQTt3QkFBeEUsaUNBQTJDLGtCQUFNLFNBQXVCLEVBQUMsSUFBRTs7OztDQUM1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmVhbVJlYWRlciB9IGZyb20gXCJAYXdzLXNkay9jaHVua2VkLXN0cmVhbS1yZWFkZXItbm9kZVwiO1xuaW1wb3J0IHsgaXNBcnJheUJ1ZmZlciB9IGZyb20gXCJAYXdzLXNkay9pcy1hcnJheS1idWZmZXJcIjtcbmltcG9ydCB7IFRyZWVIYXNoIH0gZnJvbSBcIkBhd3Mtc2RrL3NoYTI1Ni10cmVlLWhhc2hcIjtcbmltcG9ydCB7IERlY29kZXIsIEhhc2hDb25zdHJ1Y3RvciwgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IHRvSGV4IH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtaGV4LWVuY29kaW5nXCI7XG5pbXBvcnQgeyBjcmVhdGVSZWFkU3RyZWFtIH0gZnJvbSBcImZzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBib2R5Q2hlY2tzdW1HZW5lcmF0b3IoXG4gIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0LFxuICBvcHRpb25zOiB7XG4gICAgc2hhMjU2OiBIYXNoQ29uc3RydWN0b3I7XG4gICAgdXRmOERlY29kZXI6IERlY29kZXI7XG4gIH1cbik6IFByb21pc2U8W3N0cmluZywgc3RyaW5nXT4ge1xuICBjb25zdCBjb250ZW50SGFzaCA9IG5ldyBvcHRpb25zLnNoYTI1NigpO1xuICBjb25zdCB0cmVlSGFzaCA9IG5ldyBUcmVlSGFzaChvcHRpb25zLnNoYTI1Niwgb3B0aW9ucy51dGY4RGVjb2Rlcik7XG4gIGNvbnN0IHsgYm9keSB9ID0gcmVxdWVzdDtcbiAgaWYgKHR5cGVvZiBib2R5ID09PSBcInN0cmluZ1wiIHx8IEFycmF5QnVmZmVyLmlzVmlldyhib2R5KSB8fCBpc0FycmF5QnVmZmVyKGJvZHkpKSB7XG4gICAgY29udGVudEhhc2g/LnVwZGF0ZShib2R5KTtcbiAgICB0cmVlSGFzaD8udXBkYXRlKGJvZHkpO1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgYm9keS5wYXRoICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gY2FsY3VsYXRlIGNoZWNrc3VtcyBmb3Igbm9uLWZpbGUgc3RyZWFtcy5cIik7XG4gICAgfVxuICAgIGNvbnN0IGJvZHlUZWUgPSBjcmVhdGVSZWFkU3RyZWFtKGJvZHkucGF0aCwge1xuICAgICAgc3RhcnQ6IChib2R5IGFzIGFueSkuc3RhcnQsXG4gICAgICBlbmQ6IChib2R5IGFzIGFueSkuZW5kLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgc3RyZWFtUmVhZGVyKGJvZHlUZWUsIChjaHVuazogYW55KSA9PiB7XG4gICAgICBjb250ZW50SGFzaD8udXBkYXRlKGNodW5rKTtcbiAgICAgIHRyZWVIYXNoPy51cGRhdGUoY2h1bmspO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIFt0b0hleChhd2FpdCBjb250ZW50SGFzaC5kaWdlc3QoKSksIHRvSGV4KGF3YWl0IHRyZWVIYXNoLmRpZ2VzdCgpKV07XG59XG4iXX0=