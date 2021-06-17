"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStreamPayloadHandler = void 0;
const eventstream_marshaller_1 = require("@aws-sdk/eventstream-marshaller");
const stream_1 = require("stream");
const EventSigningStream_1 = require("./EventSigningStream");
/**
 * A handler that control the eventstream payload flow:
 * 1. Pause stream for initial attempt.
 * 2. Close the stream is attempt fails.
 * 3. Start piping payload when connection is established.
 * 4. Sign the payload after payload stream starting to flow.
 */
class EventStreamPayloadHandler {
    constructor(options) {
        this.eventSigner = options.eventSigner;
        this.eventMarshaller = new eventstream_marshaller_1.EventStreamMarshaller(options.utf8Encoder, options.utf8Decoder);
    }
    async handle(next, args, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context = {}) {
        const request = args.request;
        const { body: payload } = request;
        if (!(payload instanceof stream_1.Readable)) {
            throw new Error("Eventstream payload must be a Readable stream.");
        }
        const payloadStream = payload;
        request.body = new stream_1.PassThrough({
            objectMode: true,
        });
        let result;
        try {
            result = await next(args);
        }
        catch (e) {
            // Close the payload stream otherwise the retry would hang
            // because of the previous connection.
            request.body.end();
            throw e;
        }
        // If response is successful, start piping the payload stream
        const match = (request.headers["authorization"] || "").match(/Signature=([\w]+)$/);
        // Sign the eventstream based on the signature from initial request.
        const priorSignature = (match || [])[1];
        const signingStream = new EventSigningStream_1.EventSigningStream({
            priorSignature,
            eventMarshaller: this.eventMarshaller,
            eventSigner: await this.eventSigner(),
        });
        stream_1.pipeline(payloadStream, signingStream, request.body, (err) => {
            if (err) {
                throw err;
            }
        });
        return result;
    }
}
exports.EventStreamPayloadHandler = EventStreamPayloadHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRTdHJlYW1QYXlsb2FkSGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FdmVudFN0cmVhbVBheWxvYWRIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRFQUEyRjtBQWMzRixtQ0FBeUQ7QUFFekQsNkRBQTBEO0FBUTFEOzs7Ozs7R0FNRztBQUNILE1BQWEseUJBQXlCO0lBR3BDLFlBQVksT0FBeUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSw4Q0FBZSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTSxDQUNWLElBQTZCLEVBQzdCLElBQW1DO0lBQ25DLDZEQUE2RDtJQUM3RCxVQUFtQyxFQUFTO1FBRTVDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFzQixDQUFDO1FBQzVDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxDQUFDLE9BQU8sWUFBWSxpQkFBUSxDQUFDLEVBQUU7WUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1NBQ25FO1FBQ0QsTUFBTSxhQUFhLEdBQUcsT0FBbUIsQ0FBQztRQUMxQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksb0JBQVcsQ0FBQztZQUM3QixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7UUFDSCxJQUFJLE1BQWtDLENBQUM7UUFDdkMsSUFBSTtZQUNGLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsMERBQTBEO1lBQzFELHNDQUFzQztZQUN0QyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7UUFDRCw2REFBNkQ7UUFDN0QsTUFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25GLG9FQUFvRTtRQUNwRSxNQUFNLGNBQWMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLGFBQWEsR0FBRyxJQUFJLHVDQUFrQixDQUFDO1lBQzNDLGNBQWM7WUFDZCxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsV0FBVyxFQUFFLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRTtTQUN0QyxDQUFDLENBQUM7UUFDSCxpQkFBUSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzNELElBQUksR0FBRyxFQUFFO2dCQUNQLE1BQU0sR0FBRyxDQUFDO2FBQ1g7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQWhERCw4REFnREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudFN0cmVhbU1hcnNoYWxsZXIgYXMgRXZlbnRNYXJzaGFsbGVyIH0gZnJvbSBcIkBhd3Mtc2RrL2V2ZW50c3RyZWFtLW1hcnNoYWxsZXJcIjtcbmltcG9ydCB7XG4gIERlY29kZXIsXG4gIEVuY29kZXIsXG4gIEV2ZW50U2lnbmVyLFxuICBFdmVudFN0cmVhbVBheWxvYWRIYW5kbGVyIGFzIElFdmVudFN0cmVhbVBheWxvYWRIYW5kbGVyLFxuICBGaW5hbGl6ZUhhbmRsZXIsXG4gIEZpbmFsaXplSGFuZGxlckFyZ3VtZW50cyxcbiAgRmluYWxpemVIYW5kbGVyT3V0cHV0LFxuICBIYW5kbGVyRXhlY3V0aW9uQ29udGV4dCxcbiAgSHR0cFJlcXVlc3QsXG4gIE1ldGFkYXRhQmVhcmVyLFxuICBQcm92aWRlcixcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBQYXNzVGhyb3VnaCwgcGlwZWxpbmUsIFJlYWRhYmxlIH0gZnJvbSBcInN0cmVhbVwiO1xuXG5pbXBvcnQgeyBFdmVudFNpZ25pbmdTdHJlYW0gfSBmcm9tIFwiLi9FdmVudFNpZ25pbmdTdHJlYW1cIjtcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudFN0cmVhbVBheWxvYWRIYW5kbGVyT3B0aW9ucyB7XG4gIGV2ZW50U2lnbmVyOiBQcm92aWRlcjxFdmVudFNpZ25lcj47XG4gIHV0ZjhFbmNvZGVyOiBFbmNvZGVyO1xuICB1dGY4RGVjb2RlcjogRGVjb2Rlcjtcbn1cblxuLyoqXG4gKiBBIGhhbmRsZXIgdGhhdCBjb250cm9sIHRoZSBldmVudHN0cmVhbSBwYXlsb2FkIGZsb3c6XG4gKiAxLiBQYXVzZSBzdHJlYW0gZm9yIGluaXRpYWwgYXR0ZW1wdC5cbiAqIDIuIENsb3NlIHRoZSBzdHJlYW0gaXMgYXR0ZW1wdCBmYWlscy5cbiAqIDMuIFN0YXJ0IHBpcGluZyBwYXlsb2FkIHdoZW4gY29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZC5cbiAqIDQuIFNpZ24gdGhlIHBheWxvYWQgYWZ0ZXIgcGF5bG9hZCBzdHJlYW0gc3RhcnRpbmcgdG8gZmxvdy5cbiAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50U3RyZWFtUGF5bG9hZEhhbmRsZXIgaW1wbGVtZW50cyBJRXZlbnRTdHJlYW1QYXlsb2FkSGFuZGxlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRTaWduZXI6IFByb3ZpZGVyPEV2ZW50U2lnbmVyPjtcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudE1hcnNoYWxsZXI6IEV2ZW50TWFyc2hhbGxlcjtcbiAgY29uc3RydWN0b3Iob3B0aW9uczogRXZlbnRTdHJlYW1QYXlsb2FkSGFuZGxlck9wdGlvbnMpIHtcbiAgICB0aGlzLmV2ZW50U2lnbmVyID0gb3B0aW9ucy5ldmVudFNpZ25lcjtcbiAgICB0aGlzLmV2ZW50TWFyc2hhbGxlciA9IG5ldyBFdmVudE1hcnNoYWxsZXIob3B0aW9ucy51dGY4RW5jb2Rlciwgb3B0aW9ucy51dGY4RGVjb2Rlcik7XG4gIH1cblxuICBhc3luYyBoYW5kbGU8VCBleHRlbmRzIE1ldGFkYXRhQmVhcmVyPihcbiAgICBuZXh0OiBGaW5hbGl6ZUhhbmRsZXI8YW55LCBUPixcbiAgICBhcmdzOiBGaW5hbGl6ZUhhbmRsZXJBcmd1bWVudHM8YW55PixcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgY29udGV4dDogSGFuZGxlckV4ZWN1dGlvbkNvbnRleHQgPSB7fSBhcyBhbnlcbiAgKTogUHJvbWlzZTxGaW5hbGl6ZUhhbmRsZXJPdXRwdXQ8VD4+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXJncy5yZXF1ZXN0IGFzIEh0dHBSZXF1ZXN0O1xuICAgIGNvbnN0IHsgYm9keTogcGF5bG9hZCB9ID0gcmVxdWVzdDtcbiAgICBpZiAoIShwYXlsb2FkIGluc3RhbmNlb2YgUmVhZGFibGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFdmVudHN0cmVhbSBwYXlsb2FkIG11c3QgYmUgYSBSZWFkYWJsZSBzdHJlYW0uXCIpO1xuICAgIH1cbiAgICBjb25zdCBwYXlsb2FkU3RyZWFtID0gcGF5bG9hZCBhcyBSZWFkYWJsZTtcbiAgICByZXF1ZXN0LmJvZHkgPSBuZXcgUGFzc1Rocm91Z2goe1xuICAgICAgb2JqZWN0TW9kZTogdHJ1ZSxcbiAgICB9KTtcbiAgICBsZXQgcmVzdWx0OiBGaW5hbGl6ZUhhbmRsZXJPdXRwdXQ8YW55PjtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgbmV4dChhcmdzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBDbG9zZSB0aGUgcGF5bG9hZCBzdHJlYW0gb3RoZXJ3aXNlIHRoZSByZXRyeSB3b3VsZCBoYW5nXG4gICAgICAvLyBiZWNhdXNlIG9mIHRoZSBwcmV2aW91cyBjb25uZWN0aW9uLlxuICAgICAgcmVxdWVzdC5ib2R5LmVuZCgpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gICAgLy8gSWYgcmVzcG9uc2UgaXMgc3VjY2Vzc2Z1bCwgc3RhcnQgcGlwaW5nIHRoZSBwYXlsb2FkIHN0cmVhbVxuICAgIGNvbnN0IG1hdGNoID0gKHJlcXVlc3QuaGVhZGVyc1tcImF1dGhvcml6YXRpb25cIl0gfHwgXCJcIikubWF0Y2goL1NpZ25hdHVyZT0oW1xcd10rKSQvKTtcbiAgICAvLyBTaWduIHRoZSBldmVudHN0cmVhbSBiYXNlZCBvbiB0aGUgc2lnbmF0dXJlIGZyb20gaW5pdGlhbCByZXF1ZXN0LlxuICAgIGNvbnN0IHByaW9yU2lnbmF0dXJlID0gKG1hdGNoIHx8IFtdKVsxXTtcbiAgICBjb25zdCBzaWduaW5nU3RyZWFtID0gbmV3IEV2ZW50U2lnbmluZ1N0cmVhbSh7XG4gICAgICBwcmlvclNpZ25hdHVyZSxcbiAgICAgIGV2ZW50TWFyc2hhbGxlcjogdGhpcy5ldmVudE1hcnNoYWxsZXIsXG4gICAgICBldmVudFNpZ25lcjogYXdhaXQgdGhpcy5ldmVudFNpZ25lcigpLFxuICAgIH0pO1xuICAgIHBpcGVsaW5lKHBheWxvYWRTdHJlYW0sIHNpZ25pbmdTdHJlYW0sIHJlcXVlc3QuYm9keSwgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl19