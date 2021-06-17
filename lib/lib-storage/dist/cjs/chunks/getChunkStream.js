"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChunkStream = void 0;
const buffer_1 = require("buffer");
async function* getChunkStream(data, partSize, getNextData) {
    let partNumber = 1;
    const currentBuffer = { chunks: [], length: 0 };
    for await (const datum of getNextData(data)) {
        currentBuffer.chunks.push(datum);
        currentBuffer.length += datum.length;
        while (currentBuffer.length >= partSize) {
            /**
             * Concat all the buffers together once if there is more than one to concat. Attempt
             * to minimize concats as Buffer.Concat is an extremely expensive operation.
             */
            const dataChunk = currentBuffer.chunks.length > 1 ? buffer_1.Buffer.concat(currentBuffer.chunks) : currentBuffer.chunks[0];
            yield {
                partNumber,
                data: dataChunk.slice(0, partSize),
            };
            // Reset the buffer.
            currentBuffer.chunks = [dataChunk.slice(partSize)];
            currentBuffer.length = currentBuffer.chunks[0].length;
            partNumber += 1;
        }
    }
    yield {
        partNumber,
        data: buffer_1.Buffer.concat(currentBuffer.chunks),
    };
}
exports.getChunkStream = getChunkStream;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q2h1bmtTdHJlYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2h1bmtzL2dldENodW5rU3RyZWFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1DQUFnQztBQU96QixLQUFLLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FDbkMsSUFBTyxFQUNQLFFBQWdCLEVBQ2hCLFdBQWdEO0lBRWhELElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztJQUNuQixNQUFNLGFBQWEsR0FBWSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBRXpELElBQUksS0FBSyxFQUFFLE1BQU0sS0FBSyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMzQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxhQUFhLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFckMsT0FBTyxhQUFhLENBQUMsTUFBTSxJQUFJLFFBQVEsRUFBRTtZQUN2Qzs7O2VBR0c7WUFDSCxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWxILE1BQU07Z0JBQ0osVUFBVTtnQkFDVixJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDO2FBQ25DLENBQUM7WUFFRixvQkFBb0I7WUFDcEIsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuRCxhQUFhLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3RELFVBQVUsSUFBSSxDQUFDLENBQUM7U0FDakI7S0FDRjtJQUNELE1BQU07UUFDSixVQUFVO1FBQ1YsSUFBSSxFQUFFLGVBQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztLQUMxQyxDQUFDO0FBQ0osQ0FBQztBQWxDRCx3Q0FrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYXdEYXRhUGFydCB9IGZyb20gXCIuLi9VcGxvYWRcIjtcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gXCJidWZmZXJcIjtcblxuaW50ZXJmYWNlIEJ1ZmZlcnMge1xuICBjaHVua3M6IEJ1ZmZlcltdO1xuICBsZW5ndGg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uKiBnZXRDaHVua1N0cmVhbTxUPihcbiAgZGF0YTogVCxcbiAgcGFydFNpemU6IG51bWJlcixcbiAgZ2V0TmV4dERhdGE6IChkYXRhOiBUKSA9PiBBc3luY0dlbmVyYXRvcjxCdWZmZXI+XG4pOiBBc3luY0dlbmVyYXRvcjxSYXdEYXRhUGFydCwgdm9pZCwgdW5kZWZpbmVkPiB7XG4gIGxldCBwYXJ0TnVtYmVyID0gMTtcbiAgY29uc3QgY3VycmVudEJ1ZmZlcjogQnVmZmVycyA9IHsgY2h1bmtzOiBbXSwgbGVuZ3RoOiAwIH07XG5cbiAgZm9yIGF3YWl0IChjb25zdCBkYXR1bSBvZiBnZXROZXh0RGF0YShkYXRhKSkge1xuICAgIGN1cnJlbnRCdWZmZXIuY2h1bmtzLnB1c2goZGF0dW0pO1xuICAgIGN1cnJlbnRCdWZmZXIubGVuZ3RoICs9IGRhdHVtLmxlbmd0aDtcblxuICAgIHdoaWxlIChjdXJyZW50QnVmZmVyLmxlbmd0aCA+PSBwYXJ0U2l6ZSkge1xuICAgICAgLyoqXG4gICAgICAgKiBDb25jYXQgYWxsIHRoZSBidWZmZXJzIHRvZ2V0aGVyIG9uY2UgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSB0byBjb25jYXQuIEF0dGVtcHRcbiAgICAgICAqIHRvIG1pbmltaXplIGNvbmNhdHMgYXMgQnVmZmVyLkNvbmNhdCBpcyBhbiBleHRyZW1lbHkgZXhwZW5zaXZlIG9wZXJhdGlvbi5cbiAgICAgICAqL1xuICAgICAgY29uc3QgZGF0YUNodW5rID0gY3VycmVudEJ1ZmZlci5jaHVua3MubGVuZ3RoID4gMSA/IEJ1ZmZlci5jb25jYXQoY3VycmVudEJ1ZmZlci5jaHVua3MpIDogY3VycmVudEJ1ZmZlci5jaHVua3NbMF07XG5cbiAgICAgIHlpZWxkIHtcbiAgICAgICAgcGFydE51bWJlcixcbiAgICAgICAgZGF0YTogZGF0YUNodW5rLnNsaWNlKDAsIHBhcnRTaXplKSxcbiAgICAgIH07XG5cbiAgICAgIC8vIFJlc2V0IHRoZSBidWZmZXIuXG4gICAgICBjdXJyZW50QnVmZmVyLmNodW5rcyA9IFtkYXRhQ2h1bmsuc2xpY2UocGFydFNpemUpXTtcbiAgICAgIGN1cnJlbnRCdWZmZXIubGVuZ3RoID0gY3VycmVudEJ1ZmZlci5jaHVua3NbMF0ubGVuZ3RoO1xuICAgICAgcGFydE51bWJlciArPSAxO1xuICAgIH1cbiAgfVxuICB5aWVsZCB7XG4gICAgcGFydE51bWJlcixcbiAgICBkYXRhOiBCdWZmZXIuY29uY2F0KGN1cnJlbnRCdWZmZXIuY2h1bmtzKSxcbiAgfTtcbn1cbiJdfQ==