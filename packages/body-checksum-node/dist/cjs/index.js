"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyChecksumGenerator = void 0;
const chunked_stream_reader_node_1 = require("@aws-sdk/chunked-stream-reader-node");
const is_array_buffer_1 = require("@aws-sdk/is-array-buffer");
const sha256_tree_hash_1 = require("@aws-sdk/sha256-tree-hash");
const util_hex_encoding_1 = require("@aws-sdk/util-hex-encoding");
const fs_1 = require("fs");
async function bodyChecksumGenerator(request, options) {
    const contentHash = new options.sha256();
    const treeHash = new sha256_tree_hash_1.TreeHash(options.sha256, options.utf8Decoder);
    const { body } = request;
    if (typeof body === "string" || ArrayBuffer.isView(body) || is_array_buffer_1.isArrayBuffer(body)) {
        contentHash === null || contentHash === void 0 ? void 0 : contentHash.update(body);
        treeHash === null || treeHash === void 0 ? void 0 : treeHash.update(body);
    }
    else {
        if (typeof body.path !== "string") {
            throw new Error("Unable to calculate checksums for non-file streams.");
        }
        const bodyTee = fs_1.createReadStream(body.path, {
            start: body.start,
            end: body.end,
        });
        await chunked_stream_reader_node_1.streamReader(bodyTee, (chunk) => {
            contentHash === null || contentHash === void 0 ? void 0 : contentHash.update(chunk);
            treeHash === null || treeHash === void 0 ? void 0 : treeHash.update(chunk);
        });
    }
    return [util_hex_encoding_1.toHex(await contentHash.digest()), util_hex_encoding_1.toHex(await treeHash.digest())];
}
exports.bodyChecksumGenerator = bodyChecksumGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0ZBQW1FO0FBQ25FLDhEQUF5RDtBQUN6RCxnRUFBcUQ7QUFFckQsa0VBQW1EO0FBQ25ELDJCQUFzQztBQUUvQixLQUFLLFVBQVUscUJBQXFCLENBQ3pDLE9BQW9CLEVBQ3BCLE9BR0M7SUFFRCxNQUFNLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN6QyxNQUFNLFFBQVEsR0FBRyxJQUFJLDJCQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUN6QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDL0UsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3hCO1NBQU07UUFDTCxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsTUFBTSxPQUFPLEdBQUcscUJBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUMxQyxLQUFLLEVBQUcsSUFBWSxDQUFDLEtBQUs7WUFDMUIsR0FBRyxFQUFHLElBQVksQ0FBQyxHQUFHO1NBQ3ZCLENBQUMsQ0FBQztRQUVILE1BQU0seUNBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN6QyxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUVELE9BQU8sQ0FBQyx5QkFBSyxDQUFDLE1BQU0sV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUseUJBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0UsQ0FBQztBQTdCRCxzREE2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHJlYW1SZWFkZXIgfSBmcm9tIFwiQGF3cy1zZGsvY2h1bmtlZC1zdHJlYW0tcmVhZGVyLW5vZGVcIjtcbmltcG9ydCB7IGlzQXJyYXlCdWZmZXIgfSBmcm9tIFwiQGF3cy1zZGsvaXMtYXJyYXktYnVmZmVyXCI7XG5pbXBvcnQgeyBUcmVlSGFzaCB9IGZyb20gXCJAYXdzLXNkay9zaGEyNTYtdHJlZS1oYXNoXCI7XG5pbXBvcnQgeyBEZWNvZGVyLCBIYXNoQ29uc3RydWN0b3IsIEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyB0b0hleCB9IGZyb20gXCJAYXdzLXNkay91dGlsLWhleC1lbmNvZGluZ1wiO1xuaW1wb3J0IHsgY3JlYXRlUmVhZFN0cmVhbSB9IGZyb20gXCJmc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYm9keUNoZWNrc3VtR2VuZXJhdG9yKFxuICByZXF1ZXN0OiBIdHRwUmVxdWVzdCxcbiAgb3B0aW9uczoge1xuICAgIHNoYTI1NjogSGFzaENvbnN0cnVjdG9yO1xuICAgIHV0ZjhEZWNvZGVyOiBEZWNvZGVyO1xuICB9XG4pOiBQcm9taXNlPFtzdHJpbmcsIHN0cmluZ10+IHtcbiAgY29uc3QgY29udGVudEhhc2ggPSBuZXcgb3B0aW9ucy5zaGEyNTYoKTtcbiAgY29uc3QgdHJlZUhhc2ggPSBuZXcgVHJlZUhhc2gob3B0aW9ucy5zaGEyNTYsIG9wdGlvbnMudXRmOERlY29kZXIpO1xuICBjb25zdCB7IGJvZHkgfSA9IHJlcXVlc3Q7XG4gIGlmICh0eXBlb2YgYm9keSA9PT0gXCJzdHJpbmdcIiB8fCBBcnJheUJ1ZmZlci5pc1ZpZXcoYm9keSkgfHwgaXNBcnJheUJ1ZmZlcihib2R5KSkge1xuICAgIGNvbnRlbnRIYXNoPy51cGRhdGUoYm9keSk7XG4gICAgdHJlZUhhc2g/LnVwZGF0ZShib2R5KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGJvZHkucGF0aCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGNhbGN1bGF0ZSBjaGVja3N1bXMgZm9yIG5vbi1maWxlIHN0cmVhbXMuXCIpO1xuICAgIH1cbiAgICBjb25zdCBib2R5VGVlID0gY3JlYXRlUmVhZFN0cmVhbShib2R5LnBhdGgsIHtcbiAgICAgIHN0YXJ0OiAoYm9keSBhcyBhbnkpLnN0YXJ0LFxuICAgICAgZW5kOiAoYm9keSBhcyBhbnkpLmVuZCxcbiAgICB9KTtcblxuICAgIGF3YWl0IHN0cmVhbVJlYWRlcihib2R5VGVlLCAoY2h1bms6IGFueSkgPT4ge1xuICAgICAgY29udGVudEhhc2g/LnVwZGF0ZShjaHVuayk7XG4gICAgICB0cmVlSGFzaD8udXBkYXRlKGNodW5rKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBbdG9IZXgoYXdhaXQgY29udGVudEhhc2guZGlnZXN0KCkpLCB0b0hleChhd2FpdCB0cmVlSGFzaC5kaWdlc3QoKSldO1xufVxuIl19