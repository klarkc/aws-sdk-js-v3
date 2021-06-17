import { __asyncGenerator, __asyncValues, __await, __awaiter } from "tslib";
import { iterableToReadableStream, readableStreamtoIterable } from "@aws-sdk/eventstream-serde-browser";
import { HttpResponse } from "@aws-sdk/protocol-http";
import { formatUrl } from "@aws-sdk/util-format-url";
/**
 * Base handler for websocket requests. By default, the request input and output
 * body will be in a ReadableStream, because of interface consistency among middleware.
 * If ReadableStream is not available, like in React-Native, the response body
 * will be an async iterable.
 */
export class WebSocketHandler {
    constructor({ connectionTimeout } = {}) {
        this.metadata = {
            handlerProtocol: "websocket",
        };
        this.connectionTimeout = connectionTimeout || 2000;
    }
    destroy() { }
    handle(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = formatUrl(request);
            const socket = new WebSocket(url);
            socket.binaryType = "arraybuffer";
            yield waitForReady(socket, this.connectionTimeout);
            const { body } = request;
            const bodyStream = getIterator(body);
            const asyncIterable = connect(socket, bodyStream);
            const outputPayload = toReadableStream(asyncIterable);
            return {
                response: new HttpResponse({
                    statusCode: 200,
                    body: outputPayload,
                }),
            };
        });
    }
}
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
    const send = () => __awaiter(void 0, void 0, void 0, function* () {
        var e_1, _a;
        try {
            try {
                for (var data_1 = __asyncValues(data), data_1_1; data_1_1 = yield data_1.next(), !data_1_1.done;) {
                    const inputChunk = data_1_1.value;
                    socket.send(inputChunk);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) yield _a.call(data_1);
                }
                finally { if (e_1) throw e_1.error; }
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
    });
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
        return readableStreamtoIterable(stream);
    }
    else {
        //For other types, just wrap them with an async iterable.
        return {
            [Symbol.asyncIterator]: function () {
                return __asyncGenerator(this, arguments, function* () {
                    yield yield __await(stream);
                });
            },
        };
    }
};
/**
 * Convert async iterable to a ReadableStream when ReadableStream API
 * is available(browsers). Otherwise, leave as it is(ReactNative).
 */
const toReadableStream = (asyncIterable) => typeof ReadableStream === "function" ? iterableToReadableStream(asyncIterable) : asyncIterable;
const isReadableStream = (payload) => typeof ReadableStream === "function" && payload instanceof ReadableStream;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29ja2V0LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd2Vic29ja2V0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hHLE9BQU8sRUFBNEIsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBVXJEOzs7OztHQUtHO0FBQ0gsTUFBTSxPQUFPLGdCQUFnQjtJQUszQixZQUFZLEVBQUUsaUJBQWlCLEtBQThCLEVBQUU7UUFKL0MsYUFBUSxHQUEyQjtZQUNqRCxlQUFlLEVBQUUsV0FBVztTQUM3QixDQUFDO1FBR0EsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixJQUFJLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQsT0FBTyxLQUFVLENBQUM7SUFFWixNQUFNLENBQUMsT0FBb0I7O1lBQy9CLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQixNQUFNLE1BQU0sR0FBYyxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxNQUFNLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztZQUNsQyxNQUFNLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDbkQsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQztZQUN6QixNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNsRCxNQUFNLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RCxPQUFPO2dCQUNMLFFBQVEsRUFB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O0lBQ3RELDhDQUE4QztJQUM5QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQUUsT0FBTyxNQUFNLENBQUM7U0FDM0MsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNqQywrRUFBK0U7UUFDL0UsT0FBTyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6QztTQUFNO1FBQ0wseURBQXlEO1FBQ3pELE9BQU87WUFDTCxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTs7b0JBQ3RCLG9CQUFNLE1BQU0sQ0FBQSxDQUFDO2dCQUNmLENBQUM7YUFBQTtTQUNGLENBQUM7S0FDSDtBQUNILENBQUMsQ0FBQztBQUVGOzs7R0FHRztBQUNILE1BQU0sZ0JBQWdCLEdBQUcsQ0FBSSxhQUErQixFQUFFLEVBQUUsQ0FDOUQsT0FBTyxjQUFjLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO0FBRWpHLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxPQUFZLEVBQTZCLEVBQUUsQ0FDbkUsT0FBTyxjQUFjLEtBQUssVUFBVSxJQUFJLE9BQU8sWUFBWSxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyYWJsZVRvUmVhZGFibGVTdHJlYW0sIHJlYWRhYmxlU3RyZWFtdG9JdGVyYWJsZSB9IGZyb20gXCJAYXdzLXNkay9ldmVudHN0cmVhbS1zZXJkZS1icm93c2VyXCI7XG5pbXBvcnQgeyBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQgeyBSZXF1ZXN0SGFuZGxlck1ldGFkYXRhIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1mb3JtYXQtdXJsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0SGFuZGxlck9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIG1heGltdW0gdGltZSBpbiBtaWxsaXNlY29uZHMgdGhhdCB0aGUgY29ubmVjdGlvbiBwaGFzZSBvZiBhIHJlcXVlc3RcbiAgICogbWF5IHRha2UgYmVmb3JlIHRoZSBjb25uZWN0aW9uIGF0dGVtcHQgaXMgYWJhbmRvbmVkLlxuICAgKi9cbiAgY29ubmVjdGlvblRpbWVvdXQ/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQmFzZSBoYW5kbGVyIGZvciB3ZWJzb2NrZXQgcmVxdWVzdHMuIEJ5IGRlZmF1bHQsIHRoZSByZXF1ZXN0IGlucHV0IGFuZCBvdXRwdXRcbiAqIGJvZHkgd2lsbCBiZSBpbiBhIFJlYWRhYmxlU3RyZWFtLCBiZWNhdXNlIG9mIGludGVyZmFjZSBjb25zaXN0ZW5jeSBhbW9uZyBtaWRkbGV3YXJlLlxuICogSWYgUmVhZGFibGVTdHJlYW0gaXMgbm90IGF2YWlsYWJsZSwgbGlrZSBpbiBSZWFjdC1OYXRpdmUsIHRoZSByZXNwb25zZSBib2R5XG4gKiB3aWxsIGJlIGFuIGFzeW5jIGl0ZXJhYmxlLlxuICovXG5leHBvcnQgY2xhc3MgV2ViU29ja2V0SGFuZGxlciBpbXBsZW1lbnRzIEh0dHBIYW5kbGVyIHtcbiAgcHVibGljIHJlYWRvbmx5IG1ldGFkYXRhOiBSZXF1ZXN0SGFuZGxlck1ldGFkYXRhID0ge1xuICAgIGhhbmRsZXJQcm90b2NvbDogXCJ3ZWJzb2NrZXRcIixcbiAgfTtcbiAgcHJpdmF0ZSByZWFkb25seSBjb25uZWN0aW9uVGltZW91dDogbnVtYmVyO1xuICBjb25zdHJ1Y3Rvcih7IGNvbm5lY3Rpb25UaW1lb3V0IH06IFdlYlNvY2tldEhhbmRsZXJPcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmNvbm5lY3Rpb25UaW1lb3V0ID0gY29ubmVjdGlvblRpbWVvdXQgfHwgMjAwMDtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIGFzeW5jIGhhbmRsZShyZXF1ZXN0OiBIdHRwUmVxdWVzdCk6IFByb21pc2U8eyByZXNwb25zZTogSHR0cFJlc3BvbnNlIH0+IHtcbiAgICBjb25zdCB1cmwgPSBmb3JtYXRVcmwocmVxdWVzdCk7XG4gICAgY29uc3Qgc29ja2V0OiBXZWJTb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCk7XG4gICAgc29ja2V0LmJpbmFyeVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgYXdhaXQgd2FpdEZvclJlYWR5KHNvY2tldCwgdGhpcy5jb25uZWN0aW9uVGltZW91dCk7XG4gICAgY29uc3QgeyBib2R5IH0gPSByZXF1ZXN0O1xuICAgIGNvbnN0IGJvZHlTdHJlYW0gPSBnZXRJdGVyYXRvcihib2R5KTtcbiAgICBjb25zdCBhc3luY0l0ZXJhYmxlID0gY29ubmVjdChzb2NrZXQsIGJvZHlTdHJlYW0pO1xuICAgIGNvbnN0IG91dHB1dFBheWxvYWQgPSB0b1JlYWRhYmxlU3RyZWFtKGFzeW5jSXRlcmFibGUpO1xuICAgIHJldHVybiB7XG4gICAgICByZXNwb25zZTogbmV3IEh0dHBSZXNwb25zZSh7XG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCwgLy8gaW5kaWNhdGVzIGNvbm5lY3Rpb24gc3VjY2Vzc1xuICAgICAgICBib2R5OiBvdXRwdXRQYXlsb2FkLFxuICAgICAgfSksXG4gICAgfTtcbiAgfVxufVxuXG5jb25zdCB3YWl0Rm9yUmVhZHkgPSAoc29ja2V0OiBXZWJTb2NrZXQsIGNvbm5lY3Rpb25UaW1lb3V0OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZWplY3Qoe1xuICAgICAgICAkbWV0YWRhdGE6IHtcbiAgICAgICAgICBodHRwU3RhdHVzQ29kZTogNTAwLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSwgY29ubmVjdGlvblRpbWVvdXQpO1xuICAgIHNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfTtcbiAgfSk7XG5cbmNvbnN0IGNvbm5lY3QgPSAoc29ja2V0OiBXZWJTb2NrZXQsIGRhdGE6IEFzeW5jSXRlcmFibGU8VWludDhBcnJheT4pOiBBc3luY0l0ZXJhYmxlPFVpbnQ4QXJyYXk+ID0+IHtcbiAgLy8gVG8gbm90aWZ5IG91dHB1dCBzdHJlYW0gYW55IGVycm9yIHRocm93biBhZnRlciByZXNwb25zZVxuICAvLyBpcyByZXR1cm5lZCB3aGlsZSBkYXRhIGtlZXBzIHN0cmVhbWluZy5cbiAgbGV0IHN0cmVhbUVycm9yOiBFcnJvciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgY29uc3Qgb3V0cHV0U3RyZWFtOiBBc3luY0l0ZXJhYmxlPFVpbnQ4QXJyYXk+ID0ge1xuICAgIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl06ICgpID0+ICh7XG4gICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgc29ja2V0Lm9uZXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHNvY2tldC5vbmNsb3NlID0gbnVsbDtcbiAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHNvY2tldC5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0cmVhbUVycm9yKSB7XG4gICAgICAgICAgICAgIHJlamVjdChzdHJlYW1FcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBkb25lOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgc29ja2V0Lm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICAgICAgICB2YWx1ZTogbmV3IFVpbnQ4QXJyYXkoZXZlbnQuZGF0YSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSksXG4gIH07XG5cbiAgY29uc3Qgc2VuZCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0cnkge1xuICAgICAgZm9yIGF3YWl0IChjb25zdCBpbnB1dENodW5rIG9mIGRhdGEpIHtcbiAgICAgICAgc29ja2V0LnNlbmQoaW5wdXRDaHVuayk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBXZSBkb24ndCB0aHJvdyB0aGUgZXJyb3IgaGVyZSBiZWNhdXNlIHRoZSBzZW5kKCkncyByZXR1cm5lZFxuICAgICAgLy8gd291bGQgYWxyZWFkeSBiZSBzZXR0bGVkIGJ5IHRoZSB0aW1lIHNlbmRpbmcgY2h1bmsgdGhyb3dzIGVycm9yLlxuICAgICAgLy8gSW5zdGVhZCwgdGhlIG5vdGlmeSB0aGUgb3V0cHV0IHN0cmVhbSB0byB0aHJvdyBpZiB0aGVyZSdzXG4gICAgICAvLyBleGNlcHRpb25zXG4gICAgICBzdHJlYW1FcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgLy8gV1Mgc3RhdHVzIGNvZGU6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NDU1I3NlY3Rpb24tNy40XG4gICAgICBzb2NrZXQuY2xvc2UoMTAwMCk7XG4gICAgfVxuICB9O1xuICBzZW5kKCk7XG4gIHJldHVybiBvdXRwdXRTdHJlYW07XG59O1xuXG4vKipcbiAqIFRyYW5zZmVyIHBheWxvYWQgZGF0YSB0byBhbiBBc3luY0l0ZXJhYmxlLlxuICogV2hlbiB0aGUgUmVhZGFibGVTdHJlYW0gQVBJIGlzIGF2YWlsYWJsZSBpbiB0aGUgcnVudGltZShlLmcuIGJyb3dzZXIpLCBhbmRcbiAqIHRoZSByZXF1ZXN0IGJvZHkgaXMgUmVhZGFibGVTdHJlYW0sIHNvIHdlIG5lZWQgdG8gdHJhbnNmZXIgaXQgdG8gQXN5bmNJdGVyYWJsZVxuICogdG8gbWFrZSB0aGUgc3RyZWFtIGNvbnN1bWFibGUgYnkgV2ViU29ja2V0LlxuICovXG5jb25zdCBnZXRJdGVyYXRvciA9IChzdHJlYW06IGFueSk6IEFzeW5jSXRlcmFibGU8YW55PiA9PiB7XG4gIC8vIE5vb3AgaWYgc3RyZWFtIGlzIGFscmVhZHkgYW4gYXN5bmMgaXRlcmFibGVcbiAgaWYgKHN0cmVhbVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pIHJldHVybiBzdHJlYW07XG4gIGVsc2UgaWYgKGlzUmVhZGFibGVTdHJlYW0oc3RyZWFtKSkge1xuICAgIC8vSWYgc3RyZWFtIGlzIGEgUmVhZGFibGVTdHJlYW0sIHRyYW5zZmVyIHRoZSBSZWFkYWJsZVN0cmVhbSB0byBhc3luYyBpdGVyYWJsZS5cbiAgICByZXR1cm4gcmVhZGFibGVTdHJlYW10b0l0ZXJhYmxlKHN0cmVhbSk7XG4gIH0gZWxzZSB7XG4gICAgLy9Gb3Igb3RoZXIgdHlwZXMsIGp1c3Qgd3JhcCB0aGVtIHdpdGggYW4gYXN5bmMgaXRlcmFibGUuXG4gICAgcmV0dXJuIHtcbiAgICAgIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl06IGFzeW5jIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIHN0cmVhbTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBDb252ZXJ0IGFzeW5jIGl0ZXJhYmxlIHRvIGEgUmVhZGFibGVTdHJlYW0gd2hlbiBSZWFkYWJsZVN0cmVhbSBBUElcbiAqIGlzIGF2YWlsYWJsZShicm93c2VycykuIE90aGVyd2lzZSwgbGVhdmUgYXMgaXQgaXMoUmVhY3ROYXRpdmUpLlxuICovXG5jb25zdCB0b1JlYWRhYmxlU3RyZWFtID0gPFQ+KGFzeW5jSXRlcmFibGU6IEFzeW5jSXRlcmFibGU8VD4pID0+XG4gIHR5cGVvZiBSZWFkYWJsZVN0cmVhbSA9PT0gXCJmdW5jdGlvblwiID8gaXRlcmFibGVUb1JlYWRhYmxlU3RyZWFtKGFzeW5jSXRlcmFibGUpIDogYXN5bmNJdGVyYWJsZTtcblxuY29uc3QgaXNSZWFkYWJsZVN0cmVhbSA9IChwYXlsb2FkOiBhbnkpOiBwYXlsb2FkIGlzIFJlYWRhYmxlU3RyZWFtID0+XG4gIHR5cGVvZiBSZWFkYWJsZVN0cmVhbSA9PT0gXCJmdW5jdGlvblwiICYmIHBheWxvYWQgaW5zdGFuY2VvZiBSZWFkYWJsZVN0cmVhbTtcbiJdfQ==