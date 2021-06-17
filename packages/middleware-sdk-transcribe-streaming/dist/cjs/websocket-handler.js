"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketHandler = void 0;
const eventstream_serde_browser_1 = require("@aws-sdk/eventstream-serde-browser");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const util_format_url_1 = require("@aws-sdk/util-format-url");
/**
 * Base handler for websocket requests. By default, the request input and output
 * body will be in a ReadableStream, because of interface consistency among middleware.
 * If ReadableStream is not available, like in React-Native, the response body
 * will be an async iterable.
 */
class WebSocketHandler {
    constructor({ connectionTimeout } = {}) {
        this.metadata = {
            handlerProtocol: "websocket",
        };
        this.connectionTimeout = connectionTimeout || 2000;
    }
    destroy() { }
    async handle(request) {
        const url = util_format_url_1.formatUrl(request);
        const socket = new WebSocket(url);
        socket.binaryType = "arraybuffer";
        await waitForReady(socket, this.connectionTimeout);
        const { body } = request;
        const bodyStream = getIterator(body);
        const asyncIterable = connect(socket, bodyStream);
        const outputPayload = toReadableStream(asyncIterable);
        return {
            response: new protocol_http_1.HttpResponse({
                statusCode: 200,
                body: outputPayload,
            }),
        };
    }
}
exports.WebSocketHandler = WebSocketHandler;
const waitForReady = (socket, connectionTimeout) => new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
        reject({
            $metadata: {
                httpStatusCode: 500,
            },
        });
    }, connectionTimeout);
    socket.onopen = () => {
        clearTimeout(timeout);
        resolve();
    };
});
const connect = (socket, data) => {
    // To notify output stream any error thrown after response
    // is returned while data keeps streaming.
    let streamError = undefined;
    const outputStream = {
        [Symbol.asyncIterator]: () => ({
            next: () => {
                return new Promise((resolve, reject) => {
                    socket.onerror = (error) => {
                        socket.onclose = null;
                        socket.close();
                        reject(error);
                    };
                    socket.onclose = () => {
                        if (streamError) {
                            reject(streamError);
                        }
                        else {
                            resolve({
                                done: true,
                                value: undefined,
                            });
                        }
                    };
                    socket.onmessage = (event) => {
                        resolve({
                            done: false,
                            value: new Uint8Array(event.data),
                        });
                    };
                });
            },
        }),
    };
    const send = async () => {
        try {
            for await (const inputChunk of data) {
                socket.send(inputChunk);
            }
        }
        catch (err) {
            // We don't throw the error here because the send()'s returned
            // would already be settled by the time sending chunk throws error.
            // Instead, the notify the output stream to throw if there's
            // exceptions
            streamError = err;
        }
        finally {
            // WS status code: https://tools.ietf.org/html/rfc6455#section-7.4
            socket.close(1000);
        }
    };
    send();
    return outputStream;
};
/**
 * Transfer payload data to an AsyncIterable.
 * When the ReadableStream API is available in the runtime(e.g. browser), and
 * the request body is ReadableStream, so we need to transfer it to AsyncIterable
 * to make the stream consumable by WebSocket.
 */
const getIterator = (stream) => {
    // Noop if stream is already an async iterable
    if (stream[Symbol.asyncIterator])
        return stream;
    else if (isReadableStream(stream)) {
        //If stream is a ReadableStream, transfer the ReadableStream to async iterable.
        return eventstream_serde_browser_1.readableStreamtoIterable(stream);
    }
    else {
        //For other types, just wrap them with an async iterable.
        return {
            [Symbol.asyncIterator]: async function* () {
                yield stream;
            },
        };
    }
};
/**
 * Convert async iterable to a ReadableStream when ReadableStream API
 * is available(browsers). Otherwise, leave as it is(ReactNative).
 */
const toReadableStream = (asyncIterable) => typeof ReadableStream === "function" ? eventstream_serde_browser_1.iterableToReadableStream(asyncIterable) : asyncIterable;
const isReadableStream = (payload) => typeof ReadableStream === "function" && payload instanceof ReadableStream;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29ja2V0LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd2Vic29ja2V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0ZBQXdHO0FBQ3hHLDBEQUFnRjtBQUVoRiw4REFBcUQ7QUFVckQ7Ozs7O0dBS0c7QUFDSCxNQUFhLGdCQUFnQjtJQUszQixZQUFZLEVBQUUsaUJBQWlCLEtBQThCLEVBQUU7UUFKL0MsYUFBUSxHQUEyQjtZQUNqRCxlQUFlLEVBQUUsV0FBVztTQUM3QixDQUFDO1FBR0EsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixJQUFJLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQsT0FBTyxLQUFVLENBQUM7SUFFbEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFvQjtRQUMvQixNQUFNLEdBQUcsR0FBRywyQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLE1BQU0sTUFBTSxHQUFjLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDO1FBQ2xDLE1BQU0sWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuRCxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sYUFBYSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RELE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSw0QkFBWSxDQUFDO2dCQUN6QixVQUFVLEVBQUUsR0FBRztnQkFDZixJQUFJLEVBQUUsYUFBYTthQUNwQixDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQTNCRCw0Q0EyQkM7QUFFRCxNQUFNLFlBQVksR0FBRyxDQUFDLE1BQWlCLEVBQUUsaUJBQXlCLEVBQWlCLEVBQUUsQ0FDbkYsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDOUIsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUM5QixNQUFNLENBQUM7WUFDTCxTQUFTLEVBQUU7Z0JBQ1QsY0FBYyxFQUFFLEdBQUc7YUFDcEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUN0QixNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUNuQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEIsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVMLE1BQU0sT0FBTyxHQUFHLENBQUMsTUFBaUIsRUFBRSxJQUErQixFQUE2QixFQUFFO0lBQ2hHLDBEQUEwRDtJQUMxRCwwQ0FBMEM7SUFDMUMsSUFBSSxXQUFXLEdBQXNCLFNBQVMsQ0FBQztJQUMvQyxNQUFNLFlBQVksR0FBOEI7UUFDOUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM3QixJQUFJLEVBQUUsR0FBRyxFQUFFO2dCQUNULE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQ3JDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTt3QkFDekIsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBQ3RCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDZixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2hCLENBQUMsQ0FBQztvQkFDRixNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTt3QkFDcEIsSUFBSSxXQUFXLEVBQUU7NEJBQ2YsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3lCQUNyQjs2QkFBTTs0QkFDTCxPQUFPLENBQUM7Z0NBQ04sSUFBSSxFQUFFLElBQUk7Z0NBQ1YsS0FBSyxFQUFFLFNBQVM7NkJBQ2pCLENBQUMsQ0FBQzt5QkFDSjtvQkFDSCxDQUFDLENBQUM7b0JBQ0YsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO3dCQUMzQixPQUFPLENBQUM7NEJBQ04sSUFBSSxFQUFFLEtBQUs7NEJBQ1gsS0FBSyxFQUFFLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7eUJBQ2xDLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQztLQUNILENBQUM7SUFFRixNQUFNLElBQUksR0FBRyxLQUFLLElBQW1CLEVBQUU7UUFDckMsSUFBSTtZQUNGLElBQUksS0FBSyxFQUFFLE1BQU0sVUFBVSxJQUFJLElBQUksRUFBRTtnQkFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN6QjtTQUNGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWiw4REFBOEQ7WUFDOUQsbUVBQW1FO1lBQ25FLDREQUE0RDtZQUM1RCxhQUFhO1lBQ2IsV0FBVyxHQUFHLEdBQUcsQ0FBQztTQUNuQjtnQkFBUztZQUNSLGtFQUFrRTtZQUNsRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxFQUFFLENBQUM7SUFDUCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBVyxFQUFzQixFQUFFO0lBQ3RELDhDQUE4QztJQUM5QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQUUsT0FBTyxNQUFNLENBQUM7U0FDM0MsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNqQywrRUFBK0U7UUFDL0UsT0FBTyxvREFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6QztTQUFNO1FBQ0wseURBQXlEO1FBQ3pELE9BQU87WUFDTCxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQztnQkFDckMsTUFBTSxNQUFNLENBQUM7WUFDZixDQUFDO1NBQ0YsQ0FBQztLQUNIO0FBQ0gsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ0gsTUFBTSxnQkFBZ0IsR0FBRyxDQUFJLGFBQStCLEVBQUUsRUFBRSxDQUM5RCxPQUFPLGNBQWMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLG9EQUF3QixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7QUFFakcsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLE9BQVksRUFBNkIsRUFBRSxDQUNuRSxPQUFPLGNBQWMsS0FBSyxVQUFVLElBQUksT0FBTyxZQUFZLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXJhYmxlVG9SZWFkYWJsZVN0cmVhbSwgcmVhZGFibGVTdHJlYW10b0l0ZXJhYmxlIH0gZnJvbSBcIkBhd3Mtc2RrL2V2ZW50c3RyZWFtLXNlcmRlLWJyb3dzZXJcIjtcbmltcG9ydCB7IEh0dHBIYW5kbGVyLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7IFJlcXVlc3RIYW5kbGVyTWV0YWRhdGEgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gXCJAYXdzLXNkay91dGlsLWZvcm1hdC11cmxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRIYW5kbGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSB0aW1lIGluIG1pbGxpc2Vjb25kcyB0aGF0IHRoZSBjb25uZWN0aW9uIHBoYXNlIG9mIGEgcmVxdWVzdFxuICAgKiBtYXkgdGFrZSBiZWZvcmUgdGhlIGNvbm5lY3Rpb24gYXR0ZW1wdCBpcyBhYmFuZG9uZWQuXG4gICAqL1xuICBjb25uZWN0aW9uVGltZW91dD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCYXNlIGhhbmRsZXIgZm9yIHdlYnNvY2tldCByZXF1ZXN0cy4gQnkgZGVmYXVsdCwgdGhlIHJlcXVlc3QgaW5wdXQgYW5kIG91dHB1dFxuICogYm9keSB3aWxsIGJlIGluIGEgUmVhZGFibGVTdHJlYW0sIGJlY2F1c2Ugb2YgaW50ZXJmYWNlIGNvbnNpc3RlbmN5IGFtb25nIG1pZGRsZXdhcmUuXG4gKiBJZiBSZWFkYWJsZVN0cmVhbSBpcyBub3QgYXZhaWxhYmxlLCBsaWtlIGluIFJlYWN0LU5hdGl2ZSwgdGhlIHJlc3BvbnNlIGJvZHlcbiAqIHdpbGwgYmUgYW4gYXN5bmMgaXRlcmFibGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBXZWJTb2NrZXRIYW5kbGVyIGltcGxlbWVudHMgSHR0cEhhbmRsZXIge1xuICBwdWJsaWMgcmVhZG9ubHkgbWV0YWRhdGE6IFJlcXVlc3RIYW5kbGVyTWV0YWRhdGEgPSB7XG4gICAgaGFuZGxlclByb3RvY29sOiBcIndlYnNvY2tldFwiLFxuICB9O1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbm5lY3Rpb25UaW1lb3V0OiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHsgY29ubmVjdGlvblRpbWVvdXQgfTogV2ViU29ja2V0SGFuZGxlck9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuY29ubmVjdGlvblRpbWVvdXQgPSBjb25uZWN0aW9uVGltZW91dCB8fCAyMDAwO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHt9XG5cbiAgYXN5bmMgaGFuZGxlKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0KTogUHJvbWlzZTx7IHJlc3BvbnNlOiBIdHRwUmVzcG9uc2UgfT4ge1xuICAgIGNvbnN0IHVybCA9IGZvcm1hdFVybChyZXF1ZXN0KTtcbiAgICBjb25zdCBzb2NrZXQ6IFdlYlNvY2tldCA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICBzb2NrZXQuYmluYXJ5VHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICBhd2FpdCB3YWl0Rm9yUmVhZHkoc29ja2V0LCB0aGlzLmNvbm5lY3Rpb25UaW1lb3V0KTtcbiAgICBjb25zdCB7IGJvZHkgfSA9IHJlcXVlc3Q7XG4gICAgY29uc3QgYm9keVN0cmVhbSA9IGdldEl0ZXJhdG9yKGJvZHkpO1xuICAgIGNvbnN0IGFzeW5jSXRlcmFibGUgPSBjb25uZWN0KHNvY2tldCwgYm9keVN0cmVhbSk7XG4gICAgY29uc3Qgb3V0cHV0UGF5bG9hZCA9IHRvUmVhZGFibGVTdHJlYW0oYXN5bmNJdGVyYWJsZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3BvbnNlOiBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgICAgc3RhdHVzQ29kZTogMjAwLCAvLyBpbmRpY2F0ZXMgY29ubmVjdGlvbiBzdWNjZXNzXG4gICAgICAgIGJvZHk6IG91dHB1dFBheWxvYWQsXG4gICAgICB9KSxcbiAgICB9O1xuICB9XG59XG5cbmNvbnN0IHdhaXRGb3JSZWFkeSA9IChzb2NrZXQ6IFdlYlNvY2tldCwgY29ubmVjdGlvblRpbWVvdXQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlamVjdCh7XG4gICAgICAgICRtZXRhZGF0YToge1xuICAgICAgICAgIGh0dHBTdGF0dXNDb2RlOiA1MDAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LCBjb25uZWN0aW9uVGltZW91dCk7XG4gICAgc29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9O1xuICB9KTtcblxuY29uc3QgY29ubmVjdCA9IChzb2NrZXQ6IFdlYlNvY2tldCwgZGF0YTogQXN5bmNJdGVyYWJsZTxVaW50OEFycmF5Pik6IEFzeW5jSXRlcmFibGU8VWludDhBcnJheT4gPT4ge1xuICAvLyBUbyBub3RpZnkgb3V0cHV0IHN0cmVhbSBhbnkgZXJyb3IgdGhyb3duIGFmdGVyIHJlc3BvbnNlXG4gIC8vIGlzIHJldHVybmVkIHdoaWxlIGRhdGEga2VlcHMgc3RyZWFtaW5nLlxuICBsZXQgc3RyZWFtRXJyb3I6IEVycm9yIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBjb25zdCBvdXRwdXRTdHJlYW06IEFzeW5jSXRlcmFibGU8VWludDhBcnJheT4gPSB7XG4gICAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXTogKCkgPT4gKHtcbiAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBzb2NrZXQub25lcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgc29ja2V0Lm9uY2xvc2UgPSBudWxsO1xuICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgc29ja2V0Lm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RyZWFtRXJyb3IpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KHN0cmVhbUVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIGRvbmU6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBzb2NrZXQub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgICAgICAgIHZhbHVlOiBuZXcgVWludDhBcnJheShldmVudC5kYXRhKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KSxcbiAgfTtcblxuICBjb25zdCBzZW5kID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBmb3IgYXdhaXQgKGNvbnN0IGlucHV0Q2h1bmsgb2YgZGF0YSkge1xuICAgICAgICBzb2NrZXQuc2VuZChpbnB1dENodW5rKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIFdlIGRvbid0IHRocm93IHRoZSBlcnJvciBoZXJlIGJlY2F1c2UgdGhlIHNlbmQoKSdzIHJldHVybmVkXG4gICAgICAvLyB3b3VsZCBhbHJlYWR5IGJlIHNldHRsZWQgYnkgdGhlIHRpbWUgc2VuZGluZyBjaHVuayB0aHJvd3MgZXJyb3IuXG4gICAgICAvLyBJbnN0ZWFkLCB0aGUgbm90aWZ5IHRoZSBvdXRwdXQgc3RyZWFtIHRvIHRocm93IGlmIHRoZXJlJ3NcbiAgICAgIC8vIGV4Y2VwdGlvbnNcbiAgICAgIHN0cmVhbUVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAvLyBXUyBzdGF0dXMgY29kZTogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY0NTUjc2VjdGlvbi03LjRcbiAgICAgIHNvY2tldC5jbG9zZSgxMDAwKTtcbiAgICB9XG4gIH07XG4gIHNlbmQoKTtcbiAgcmV0dXJuIG91dHB1dFN0cmVhbTtcbn07XG5cbi8qKlxuICogVHJhbnNmZXIgcGF5bG9hZCBkYXRhIHRvIGFuIEFzeW5jSXRlcmFibGUuXG4gKiBXaGVuIHRoZSBSZWFkYWJsZVN0cmVhbSBBUEkgaXMgYXZhaWxhYmxlIGluIHRoZSBydW50aW1lKGUuZy4gYnJvd3NlciksIGFuZFxuICogdGhlIHJlcXVlc3QgYm9keSBpcyBSZWFkYWJsZVN0cmVhbSwgc28gd2UgbmVlZCB0byB0cmFuc2ZlciBpdCB0byBBc3luY0l0ZXJhYmxlXG4gKiB0byBtYWtlIHRoZSBzdHJlYW0gY29uc3VtYWJsZSBieSBXZWJTb2NrZXQuXG4gKi9cbmNvbnN0IGdldEl0ZXJhdG9yID0gKHN0cmVhbTogYW55KTogQXN5bmNJdGVyYWJsZTxhbnk+ID0+IHtcbiAgLy8gTm9vcCBpZiBzdHJlYW0gaXMgYWxyZWFkeSBhbiBhc3luYyBpdGVyYWJsZVxuICBpZiAoc3RyZWFtW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSkgcmV0dXJuIHN0cmVhbTtcbiAgZWxzZSBpZiAoaXNSZWFkYWJsZVN0cmVhbShzdHJlYW0pKSB7XG4gICAgLy9JZiBzdHJlYW0gaXMgYSBSZWFkYWJsZVN0cmVhbSwgdHJhbnNmZXIgdGhlIFJlYWRhYmxlU3RyZWFtIHRvIGFzeW5jIGl0ZXJhYmxlLlxuICAgIHJldHVybiByZWFkYWJsZVN0cmVhbXRvSXRlcmFibGUoc3RyZWFtKTtcbiAgfSBlbHNlIHtcbiAgICAvL0ZvciBvdGhlciB0eXBlcywganVzdCB3cmFwIHRoZW0gd2l0aCBhbiBhc3luYyBpdGVyYWJsZS5cbiAgICByZXR1cm4ge1xuICAgICAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXTogYXN5bmMgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgc3RyZWFtO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIENvbnZlcnQgYXN5bmMgaXRlcmFibGUgdG8gYSBSZWFkYWJsZVN0cmVhbSB3aGVuIFJlYWRhYmxlU3RyZWFtIEFQSVxuICogaXMgYXZhaWxhYmxlKGJyb3dzZXJzKS4gT3RoZXJ3aXNlLCBsZWF2ZSBhcyBpdCBpcyhSZWFjdE5hdGl2ZSkuXG4gKi9cbmNvbnN0IHRvUmVhZGFibGVTdHJlYW0gPSA8VD4oYXN5bmNJdGVyYWJsZTogQXN5bmNJdGVyYWJsZTxUPikgPT5cbiAgdHlwZW9mIFJlYWRhYmxlU3RyZWFtID09PSBcImZ1bmN0aW9uXCIgPyBpdGVyYWJsZVRvUmVhZGFibGVTdHJlYW0oYXN5bmNJdGVyYWJsZSkgOiBhc3luY0l0ZXJhYmxlO1xuXG5jb25zdCBpc1JlYWRhYmxlU3RyZWFtID0gKHBheWxvYWQ6IGFueSk6IHBheWxvYWQgaXMgUmVhZGFibGVTdHJlYW0gPT5cbiAgdHlwZW9mIFJlYWRhYmxlU3RyZWFtID09PSBcImZ1bmN0aW9uXCIgJiYgcGF5bG9hZCBpbnN0YW5jZW9mIFJlYWRhYmxlU3RyZWFtO1xuIl19