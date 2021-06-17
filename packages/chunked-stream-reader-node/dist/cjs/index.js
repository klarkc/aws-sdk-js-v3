"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamReader = void 0;
function streamReader(stream, onChunk, chunkSize = 1048576 // 1 MiB
) {
    return new Promise((resolve, reject) => {
        let temporaryBuffer;
        stream.on("error", reject);
        stream.on("end", () => {
            if (temporaryBuffer === null || temporaryBuffer === void 0 ? void 0 : temporaryBuffer.byteLength) {
                for (let i = 0; i < temporaryBuffer.byteLength; i += chunkSize) {
                    onChunk(temporaryBuffer.subarray(i, Math.min(i + chunkSize, temporaryBuffer.byteLength)));
                }
                // clear the temporaryBuffer
                temporaryBuffer = void 0;
            }
            resolve();
        });
        stream.on("data", (chunk) => {
            if (!temporaryBuffer) {
                temporaryBuffer = chunk;
            }
            else {
                temporaryBuffer = mergeUint8Arrays(temporaryBuffer, chunk);
            }
            let pointer = 0;
            while (temporaryBuffer.byteLength - pointer >= chunkSize) {
                onChunk(temporaryBuffer.subarray(pointer, pointer + chunkSize));
                pointer += chunkSize;
            }
            temporaryBuffer = temporaryBuffer.subarray(pointer);
        });
        // ensure the stream isn't paused
        stream.resume();
    });
}
exports.streamReader = streamReader;
function mergeUint8Arrays(a, b) {
    const result = new Uint8Array(a.byteLength + b.byteLength);
    result.set(a);
    result.set(b, a.byteLength);
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsU0FBZ0IsWUFBWSxDQUMxQixNQUFnQixFQUNoQixPQUFvQyxFQUNwQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVE7O0lBRTVCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDckMsSUFBSSxlQUF1QyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUNwQixJQUFJLGVBQWUsYUFBZixlQUFlLHVCQUFmLGVBQWUsQ0FBRSxVQUFVLEVBQUU7Z0JBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxTQUFTLEVBQUU7b0JBQzlELE9BQU8sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLEVBQUUsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDM0Y7Z0JBQ0QsNEJBQTRCO2dCQUM1QixlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUM7YUFDMUI7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUNwQixlQUFlLEdBQUcsS0FBSyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDNUQ7WUFFRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDaEIsT0FBTyxlQUFlLENBQUMsVUFBVSxHQUFHLE9BQU8sSUFBSSxTQUFTLEVBQUU7Z0JBQ3hELE9BQU8sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDaEUsT0FBTyxJQUFJLFNBQVMsQ0FBQzthQUN0QjtZQUNELGVBQWUsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBRUgsaUNBQWlDO1FBQ2pDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFyQ0Qsb0NBcUNDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxDQUFhLEVBQUUsQ0FBYTtJQUNwRCxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkYWJsZSB9IGZyb20gXCJzdHJlYW1cIjtcbmV4cG9ydCBmdW5jdGlvbiBzdHJlYW1SZWFkZXIoXG4gIHN0cmVhbTogUmVhZGFibGUsXG4gIG9uQ2h1bms6IChjaHVuazogVWludDhBcnJheSkgPT4gdm9pZCxcbiAgY2h1bmtTaXplID0gMTA0ODU3NiAvLyAxIE1pQlxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IHRlbXBvcmFyeUJ1ZmZlcjogVWludDhBcnJheSB8IHVuZGVmaW5lZDtcblxuICAgIHN0cmVhbS5vbihcImVycm9yXCIsIHJlamVjdCk7XG4gICAgc3RyZWFtLm9uKFwiZW5kXCIsICgpID0+IHtcbiAgICAgIGlmICh0ZW1wb3JhcnlCdWZmZXI/LmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wb3JhcnlCdWZmZXIuYnl0ZUxlbmd0aDsgaSArPSBjaHVua1NpemUpIHtcbiAgICAgICAgICBvbkNodW5rKHRlbXBvcmFyeUJ1ZmZlci5zdWJhcnJheShpLCBNYXRoLm1pbihpICsgY2h1bmtTaXplLCB0ZW1wb3JhcnlCdWZmZXIuYnl0ZUxlbmd0aCkpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjbGVhciB0aGUgdGVtcG9yYXJ5QnVmZmVyXG4gICAgICAgIHRlbXBvcmFyeUJ1ZmZlciA9IHZvaWQgMDtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgICBzdHJlYW0ub24oXCJkYXRhXCIsIChjaHVuazogQnVmZmVyKSA9PiB7XG4gICAgICBpZiAoIXRlbXBvcmFyeUJ1ZmZlcikge1xuICAgICAgICB0ZW1wb3JhcnlCdWZmZXIgPSBjaHVuaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXBvcmFyeUJ1ZmZlciA9IG1lcmdlVWludDhBcnJheXModGVtcG9yYXJ5QnVmZmVyLCBjaHVuayk7XG4gICAgICB9XG5cbiAgICAgIGxldCBwb2ludGVyID0gMDtcbiAgICAgIHdoaWxlICh0ZW1wb3JhcnlCdWZmZXIuYnl0ZUxlbmd0aCAtIHBvaW50ZXIgPj0gY2h1bmtTaXplKSB7XG4gICAgICAgIG9uQ2h1bmsodGVtcG9yYXJ5QnVmZmVyLnN1YmFycmF5KHBvaW50ZXIsIHBvaW50ZXIgKyBjaHVua1NpemUpKTtcbiAgICAgICAgcG9pbnRlciArPSBjaHVua1NpemU7XG4gICAgICB9XG4gICAgICB0ZW1wb3JhcnlCdWZmZXIgPSB0ZW1wb3JhcnlCdWZmZXIuc3ViYXJyYXkocG9pbnRlcik7XG4gICAgfSk7XG5cbiAgICAvLyBlbnN1cmUgdGhlIHN0cmVhbSBpc24ndCBwYXVzZWRcbiAgICBzdHJlYW0ucmVzdW1lKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtZXJnZVVpbnQ4QXJyYXlzKGE6IFVpbnQ4QXJyYXksIGI6IFVpbnQ4QXJyYXkpOiBVaW50OEFycmF5IHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoYS5ieXRlTGVuZ3RoICsgYi5ieXRlTGVuZ3RoKTtcbiAgcmVzdWx0LnNldChhKTtcbiAgcmVzdWx0LnNldChiLCBhLmJ5dGVMZW5ndGgpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIl19