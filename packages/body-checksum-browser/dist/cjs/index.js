"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyChecksumGenerator = void 0;
const chunked_blob_reader_1 = require("@aws-sdk/chunked-blob-reader");
const sha256_tree_hash_1 = require("@aws-sdk/sha256-tree-hash");
const util_hex_encoding_1 = require("@aws-sdk/util-hex-encoding");
const MiB = 1024 * 1024;
async function bodyChecksumGenerator(request, options) {
    const contentHash = new options.sha256();
    const treeHash = new sha256_tree_hash_1.TreeHash(options.sha256, options.utf8Decoder);
    const { body } = request;
    if (typeof body === "string") {
        contentHash.update(body);
        treeHash.update(body);
    }
    else {
        if (Boolean(body) && Object.prototype.toString.call(body) === "[object Blob]") {
            await chunked_blob_reader_1.blobReader(body, (chunk) => {
                treeHash === null || treeHash === void 0 ? void 0 : treeHash.update(chunk);
                contentHash === null || contentHash === void 0 ? void 0 : contentHash.update(chunk);
            }, MiB);
        }
        else {
            throw new Error("Unable to calculate checksums for non-blob streams.");
        }
    }
    return [util_hex_encoding_1.toHex(await contentHash.digest()), util_hex_encoding_1.toHex(await treeHash.digest())];
}
exports.bodyChecksumGenerator = bodyChecksumGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0VBQTBEO0FBQzFELGdFQUFxRDtBQUVyRCxrRUFBbUQ7QUFFbkQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUVqQixLQUFLLFVBQVUscUJBQXFCLENBQ3pDLE9BQW9CLEVBQ3BCLE9BR0M7SUFFRCxNQUFNLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN6QyxNQUFNLFFBQVEsR0FBRyxJQUFJLDJCQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUN6QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUM1QixXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkI7U0FBTTtRQUNMLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxlQUFlLEVBQUU7WUFDN0UsTUFBTSxnQ0FBVSxDQUNkLElBQUksRUFDSixDQUFDLEtBQVUsRUFBRSxFQUFFO2dCQUNiLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsQ0FBQyxFQUNELEdBQUcsQ0FDSixDQUFDO1NBQ0g7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztTQUN4RTtLQUNGO0lBRUQsT0FBTyxDQUFDLHlCQUFLLENBQUMsTUFBTSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSx5QkFBSyxDQUFDLE1BQU0sUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3RSxDQUFDO0FBN0JELHNEQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJsb2JSZWFkZXIgfSBmcm9tIFwiQGF3cy1zZGsvY2h1bmtlZC1ibG9iLXJlYWRlclwiO1xuaW1wb3J0IHsgVHJlZUhhc2ggfSBmcm9tIFwiQGF3cy1zZGsvc2hhMjU2LXRyZWUtaGFzaFwiO1xuaW1wb3J0IHsgRGVjb2RlciwgSGFzaENvbnN0cnVjdG9yLCBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgdG9IZXggfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1oZXgtZW5jb2RpbmdcIjtcblxuY29uc3QgTWlCID0gMTAyNCAqIDEwMjQ7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBib2R5Q2hlY2tzdW1HZW5lcmF0b3IoXG4gIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0LFxuICBvcHRpb25zOiB7XG4gICAgc2hhMjU2OiBIYXNoQ29uc3RydWN0b3I7XG4gICAgdXRmOERlY29kZXI6IERlY29kZXI7XG4gIH1cbik6IFByb21pc2U8W3N0cmluZywgc3RyaW5nXT4ge1xuICBjb25zdCBjb250ZW50SGFzaCA9IG5ldyBvcHRpb25zLnNoYTI1NigpO1xuICBjb25zdCB0cmVlSGFzaCA9IG5ldyBUcmVlSGFzaChvcHRpb25zLnNoYTI1Niwgb3B0aW9ucy51dGY4RGVjb2Rlcik7XG4gIGNvbnN0IHsgYm9keSB9ID0gcmVxdWVzdDtcbiAgaWYgKHR5cGVvZiBib2R5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgY29udGVudEhhc2gudXBkYXRlKGJvZHkpO1xuICAgIHRyZWVIYXNoLnVwZGF0ZShib2R5KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoQm9vbGVhbihib2R5KSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSkgPT09IFwiW29iamVjdCBCbG9iXVwiKSB7XG4gICAgICBhd2FpdCBibG9iUmVhZGVyKFxuICAgICAgICBib2R5LFxuICAgICAgICAoY2h1bms6IGFueSkgPT4ge1xuICAgICAgICAgIHRyZWVIYXNoPy51cGRhdGUoY2h1bmspO1xuICAgICAgICAgIGNvbnRlbnRIYXNoPy51cGRhdGUoY2h1bmspO1xuICAgICAgICB9LFxuICAgICAgICBNaUJcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBjYWxjdWxhdGUgY2hlY2tzdW1zIGZvciBub24tYmxvYiBzdHJlYW1zLlwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW3RvSGV4KGF3YWl0IGNvbnRlbnRIYXNoLmRpZ2VzdCgpKSwgdG9IZXgoYXdhaXQgdHJlZUhhc2guZGlnZXN0KCkpXTtcbn1cbiJdfQ==