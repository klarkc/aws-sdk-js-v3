import { __awaiter, __generator } from "tslib";
import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";
import { PassThrough, pipeline, Readable } from "stream";
import { EventSigningStream } from "./EventSigningStream";
/**
 * A handler that control the eventstream payload flow:
 * 1. Pause stream for initial attempt.
 * 2. Close the stream is attempt fails.
 * 3. Start piping payload when connection is established.
 * 4. Sign the payload after payload stream starting to flow.
 */
var EventStreamPayloadHandler = /** @class */ (function () {
    function EventStreamPayloadHandler(options) {
        this.eventSigner = options.eventSigner;
        this.eventMarshaller = new EventMarshaller(options.utf8Encoder, options.utf8Decoder);
    }
    EventStreamPayloadHandler.prototype.handle = function (next, args, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var request, payload, payloadStream, result, e_1, match, priorSignature, signingStream, _a;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        request = args.request;
                        payload = request.body;
                        if (!(payload instanceof Readable)) {
                            throw new Error("Eventstream payload must be a Readable stream.");
                        }
                        payloadStream = payload;
                        request.body = new PassThrough({
                            objectMode: true,
                        });
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, next(args)];
                    case 2:
                        result = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _c.sent();
                        // Close the payload stream otherwise the retry would hang
                        // because of the previous connection.
                        request.body.end();
                        throw e_1;
                    case 4:
                        match = (request.headers["authorization"] || "").match(/Signature=([\w]+)$/);
                        priorSignature = (match || [])[1];
                        _a = EventSigningStream.bind;
                        _b = {
                            priorSignature: priorSignature,
                            eventMarshaller: this.eventMarshaller
                        };
                        return [4 /*yield*/, this.eventSigner()];
                    case 5:
                        signingStream = new (_a.apply(EventSigningStream, [void 0, (_b.eventSigner = _c.sent(),
                                _b)]))();
                        pipeline(payloadStream, signingStream, request.body, function (err) {
                            if (err) {
                                throw err;
                            }
                        });
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return EventStreamPayloadHandler;
}());
export { EventStreamPayloadHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRTdHJlYW1QYXlsb2FkSGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FdmVudFN0cmVhbVBheWxvYWRIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUscUJBQXFCLElBQUksZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFjM0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBUTFEOzs7Ozs7R0FNRztBQUNIO0lBR0UsbUNBQVksT0FBeUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVLLDBDQUFNLEdBQVosVUFDRSxJQUE2QixFQUM3QixJQUFtQztJQUNuQyw2REFBNkQ7SUFDN0QsT0FBNEM7UUFBNUMsd0JBQUEsRUFBQSxVQUFtQyxFQUFTOzs7Ozs7O3dCQUV0QyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQXNCLENBQUM7d0JBQzlCLE9BQU8sR0FBSyxPQUFPLEtBQVosQ0FBYTt3QkFDbEMsSUFBSSxDQUFDLENBQUMsT0FBTyxZQUFZLFFBQVEsQ0FBQyxFQUFFOzRCQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7eUJBQ25FO3dCQUNLLGFBQWEsR0FBRyxPQUFtQixDQUFDO3dCQUMxQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksV0FBVyxDQUFDOzRCQUM3QixVQUFVLEVBQUUsSUFBSTt5QkFDakIsQ0FBQyxDQUFDOzs7O3dCQUdRLHFCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXpCLE1BQU0sR0FBRyxTQUFnQixDQUFDOzs7O3dCQUUxQiwwREFBMEQ7d0JBQzFELHNDQUFzQzt3QkFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDbkIsTUFBTSxHQUFDLENBQUM7O3dCQUdKLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7d0JBRTdFLGNBQWMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFDZCxrQkFBa0I7OzRCQUMxQyxjQUFjLGdCQUFBOzRCQUNkLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTs7d0JBQ3hCLHFCQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBSGpDLGFBQWEsR0FBRyxjQUFJLGtCQUFrQixZQUcxQyxjQUFXLEdBQUUsU0FBd0I7d0NBQ3JDO3dCQUNGLFFBQVEsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHOzRCQUN2RCxJQUFJLEdBQUcsRUFBRTtnQ0FDUCxNQUFNLEdBQUcsQ0FBQzs2QkFDWDt3QkFDSCxDQUFDLENBQUMsQ0FBQzt3QkFDSCxzQkFBTyxNQUFNLEVBQUM7Ozs7S0FDZjtJQUNILGdDQUFDO0FBQUQsQ0FBQyxBQWhERCxJQWdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50U3RyZWFtTWFyc2hhbGxlciBhcyBFdmVudE1hcnNoYWxsZXIgfSBmcm9tIFwiQGF3cy1zZGsvZXZlbnRzdHJlYW0tbWFyc2hhbGxlclwiO1xuaW1wb3J0IHtcbiAgRGVjb2RlcixcbiAgRW5jb2RlcixcbiAgRXZlbnRTaWduZXIsXG4gIEV2ZW50U3RyZWFtUGF5bG9hZEhhbmRsZXIgYXMgSUV2ZW50U3RyZWFtUGF5bG9hZEhhbmRsZXIsXG4gIEZpbmFsaXplSGFuZGxlcixcbiAgRmluYWxpemVIYW5kbGVyQXJndW1lbnRzLFxuICBGaW5hbGl6ZUhhbmRsZXJPdXRwdXQsXG4gIEhhbmRsZXJFeGVjdXRpb25Db250ZXh0LFxuICBIdHRwUmVxdWVzdCxcbiAgTWV0YWRhdGFCZWFyZXIsXG4gIFByb3ZpZGVyLFxufSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IFBhc3NUaHJvdWdoLCBwaXBlbGluZSwgUmVhZGFibGUgfSBmcm9tIFwic3RyZWFtXCI7XG5cbmltcG9ydCB7IEV2ZW50U2lnbmluZ1N0cmVhbSB9IGZyb20gXCIuL0V2ZW50U2lnbmluZ1N0cmVhbVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50U3RyZWFtUGF5bG9hZEhhbmRsZXJPcHRpb25zIHtcbiAgZXZlbnRTaWduZXI6IFByb3ZpZGVyPEV2ZW50U2lnbmVyPjtcbiAgdXRmOEVuY29kZXI6IEVuY29kZXI7XG4gIHV0ZjhEZWNvZGVyOiBEZWNvZGVyO1xufVxuXG4vKipcbiAqIEEgaGFuZGxlciB0aGF0IGNvbnRyb2wgdGhlIGV2ZW50c3RyZWFtIHBheWxvYWQgZmxvdzpcbiAqIDEuIFBhdXNlIHN0cmVhbSBmb3IgaW5pdGlhbCBhdHRlbXB0LlxuICogMi4gQ2xvc2UgdGhlIHN0cmVhbSBpcyBhdHRlbXB0IGZhaWxzLlxuICogMy4gU3RhcnQgcGlwaW5nIHBheWxvYWQgd2hlbiBjb25uZWN0aW9uIGlzIGVzdGFibGlzaGVkLlxuICogNC4gU2lnbiB0aGUgcGF5bG9hZCBhZnRlciBwYXlsb2FkIHN0cmVhbSBzdGFydGluZyB0byBmbG93LlxuICovXG5leHBvcnQgY2xhc3MgRXZlbnRTdHJlYW1QYXlsb2FkSGFuZGxlciBpbXBsZW1lbnRzIElFdmVudFN0cmVhbVBheWxvYWRIYW5kbGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudFNpZ25lcjogUHJvdmlkZXI8RXZlbnRTaWduZXI+O1xuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50TWFyc2hhbGxlcjogRXZlbnRNYXJzaGFsbGVyO1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBFdmVudFN0cmVhbVBheWxvYWRIYW5kbGVyT3B0aW9ucykge1xuICAgIHRoaXMuZXZlbnRTaWduZXIgPSBvcHRpb25zLmV2ZW50U2lnbmVyO1xuICAgIHRoaXMuZXZlbnRNYXJzaGFsbGVyID0gbmV3IEV2ZW50TWFyc2hhbGxlcihvcHRpb25zLnV0ZjhFbmNvZGVyLCBvcHRpb25zLnV0ZjhEZWNvZGVyKTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZTxUIGV4dGVuZHMgTWV0YWRhdGFCZWFyZXI+KFxuICAgIG5leHQ6IEZpbmFsaXplSGFuZGxlcjxhbnksIFQ+LFxuICAgIGFyZ3M6IEZpbmFsaXplSGFuZGxlckFyZ3VtZW50czxhbnk+LFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICBjb250ZXh0OiBIYW5kbGVyRXhlY3V0aW9uQ29udGV4dCA9IHt9IGFzIGFueVxuICApOiBQcm9taXNlPEZpbmFsaXplSGFuZGxlck91dHB1dDxUPj4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBhcmdzLnJlcXVlc3QgYXMgSHR0cFJlcXVlc3Q7XG4gICAgY29uc3QgeyBib2R5OiBwYXlsb2FkIH0gPSByZXF1ZXN0O1xuICAgIGlmICghKHBheWxvYWQgaW5zdGFuY2VvZiBSZWFkYWJsZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkV2ZW50c3RyZWFtIHBheWxvYWQgbXVzdCBiZSBhIFJlYWRhYmxlIHN0cmVhbS5cIik7XG4gICAgfVxuICAgIGNvbnN0IHBheWxvYWRTdHJlYW0gPSBwYXlsb2FkIGFzIFJlYWRhYmxlO1xuICAgIHJlcXVlc3QuYm9keSA9IG5ldyBQYXNzVGhyb3VnaCh7XG4gICAgICBvYmplY3RNb2RlOiB0cnVlLFxuICAgIH0pO1xuICAgIGxldCByZXN1bHQ6IEZpbmFsaXplSGFuZGxlck91dHB1dDxhbnk+O1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBuZXh0KGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIENsb3NlIHRoZSBwYXlsb2FkIHN0cmVhbSBvdGhlcndpc2UgdGhlIHJldHJ5IHdvdWxkIGhhbmdcbiAgICAgIC8vIGJlY2F1c2Ugb2YgdGhlIHByZXZpb3VzIGNvbm5lY3Rpb24uXG4gICAgICByZXF1ZXN0LmJvZHkuZW5kKCk7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgICAvLyBJZiByZXNwb25zZSBpcyBzdWNjZXNzZnVsLCBzdGFydCBwaXBpbmcgdGhlIHBheWxvYWQgc3RyZWFtXG4gICAgY29uc3QgbWF0Y2ggPSAocmVxdWVzdC5oZWFkZXJzW1wiYXV0aG9yaXphdGlvblwiXSB8fCBcIlwiKS5tYXRjaCgvU2lnbmF0dXJlPShbXFx3XSspJC8pO1xuICAgIC8vIFNpZ24gdGhlIGV2ZW50c3RyZWFtIGJhc2VkIG9uIHRoZSBzaWduYXR1cmUgZnJvbSBpbml0aWFsIHJlcXVlc3QuXG4gICAgY29uc3QgcHJpb3JTaWduYXR1cmUgPSAobWF0Y2ggfHwgW10pWzFdO1xuICAgIGNvbnN0IHNpZ25pbmdTdHJlYW0gPSBuZXcgRXZlbnRTaWduaW5nU3RyZWFtKHtcbiAgICAgIHByaW9yU2lnbmF0dXJlLFxuICAgICAgZXZlbnRNYXJzaGFsbGVyOiB0aGlzLmV2ZW50TWFyc2hhbGxlcixcbiAgICAgIGV2ZW50U2lnbmVyOiBhd2FpdCB0aGlzLmV2ZW50U2lnbmVyKCksXG4gICAgfSk7XG4gICAgcGlwZWxpbmUocGF5bG9hZFN0cmVhbSwgc2lnbmluZ1N0cmVhbSwgcmVxdWVzdC5ib2R5LCAoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=