"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureV4 = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
class SignatureV4 {
    constructor(options) {
        this.signer = options.signer;
    }
    presign(originalRequest, options = {}) {
        return this.signer.presign(originalRequest, options);
    }
    async sign(toSign, options) {
        if (protocol_http_1.HttpRequest.isInstance(toSign)) {
            // Presign the endpoint url with empty body, otherwise
            // the payload hash would be UNSINGED-PAYLOAD
            const signedRequest = await this.signer.presign({ ...toSign, body: "" }, {
                // presigned url must be expired within 5 mins.
                expiresIn: 5 * 60,
                // Not to sign headers. Transcribe-streaming WebSocket
                // request omits headers except for required 'host' header. If we sign
                // the other headers, the signature could be mismatch.
                unsignableHeaders: new Set(Object.keys(toSign.headers).filter((header) => header !== "host")),
            });
            return {
                ...signedRequest,
                body: toSign.body,
            };
        }
        else {
            return this.signer.sign(toSign, options);
        }
    }
}
exports.SignatureV4 = SignatureV4;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NpZ25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBcUQ7QUFVckQsTUFBYSxXQUFXO0lBRXRCLFlBQVksT0FBb0M7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFTSxPQUFPLENBQUMsZUFBNkIsRUFBRSxVQUFzQyxFQUFFO1FBQ3BGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQW9CLEVBQUUsT0FBaUM7UUFDdkUsSUFBSSwyQkFBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQyxzREFBc0Q7WUFDdEQsNkNBQTZDO1lBQzdDLE1BQU0sYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzdDLEVBQUUsR0FBRyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUN2QjtnQkFDRSwrQ0FBK0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRTtnQkFDakIsc0RBQXNEO2dCQUN0RCxzRUFBc0U7Z0JBQ3RFLHNEQUFzRDtnQkFDdEQsaUJBQWlCLEVBQUUsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUM7YUFDOUYsQ0FDRixDQUFDO1lBQ0YsT0FBTztnQkFDTCxHQUFHLGFBQWE7Z0JBQ2hCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTthQUNsQixDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztDQUNGO0FBakNELGtDQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7IFNpZ25hdHVyZVY0IGFzIEJhc2VTaWduYXR1cmVWNCB9IGZyb20gXCJAYXdzLXNkay9zaWduYXR1cmUtdjRcIjtcbmltcG9ydCB7XG4gIEh0dHBSZXF1ZXN0IGFzIElIdHRwUmVxdWVzdCxcbiAgUmVxdWVzdFByZXNpZ25lcixcbiAgUmVxdWVzdFByZXNpZ25pbmdBcmd1bWVudHMsXG4gIFJlcXVlc3RTaWduZXIsXG4gIFJlcXVlc3RTaWduaW5nQXJndW1lbnRzLFxufSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZVY0IGltcGxlbWVudHMgUmVxdWVzdFNpZ25lciwgUmVxdWVzdFByZXNpZ25lciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2lnbmVyOiBCYXNlU2lnbmF0dXJlVjQ7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IHsgc2lnbmVyOiBCYXNlU2lnbmF0dXJlVjQgfSkge1xuICAgIHRoaXMuc2lnbmVyID0gb3B0aW9ucy5zaWduZXI7XG4gIH1cblxuICBwdWJsaWMgcHJlc2lnbihvcmlnaW5hbFJlcXVlc3Q6IElIdHRwUmVxdWVzdCwgb3B0aW9uczogUmVxdWVzdFByZXNpZ25pbmdBcmd1bWVudHMgPSB7fSk6IFByb21pc2U8SUh0dHBSZXF1ZXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmVyLnByZXNpZ24ob3JpZ2luYWxSZXF1ZXN0LCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzaWduKHRvU2lnbjogSUh0dHBSZXF1ZXN0LCBvcHRpb25zPzogUmVxdWVzdFNpZ25pbmdBcmd1bWVudHMpOiBQcm9taXNlPElIdHRwUmVxdWVzdD4ge1xuICAgIGlmIChIdHRwUmVxdWVzdC5pc0luc3RhbmNlKHRvU2lnbikpIHtcbiAgICAgIC8vIFByZXNpZ24gdGhlIGVuZHBvaW50IHVybCB3aXRoIGVtcHR5IGJvZHksIG90aGVyd2lzZVxuICAgICAgLy8gdGhlIHBheWxvYWQgaGFzaCB3b3VsZCBiZSBVTlNJTkdFRC1QQVlMT0FEXG4gICAgICBjb25zdCBzaWduZWRSZXF1ZXN0ID0gYXdhaXQgdGhpcy5zaWduZXIucHJlc2lnbihcbiAgICAgICAgeyAuLi50b1NpZ24sIGJvZHk6IFwiXCIgfSxcbiAgICAgICAge1xuICAgICAgICAgIC8vIHByZXNpZ25lZCB1cmwgbXVzdCBiZSBleHBpcmVkIHdpdGhpbiA1IG1pbnMuXG4gICAgICAgICAgZXhwaXJlc0luOiA1ICogNjAsXG4gICAgICAgICAgLy8gTm90IHRvIHNpZ24gaGVhZGVycy4gVHJhbnNjcmliZS1zdHJlYW1pbmcgV2ViU29ja2V0XG4gICAgICAgICAgLy8gcmVxdWVzdCBvbWl0cyBoZWFkZXJzIGV4Y2VwdCBmb3IgcmVxdWlyZWQgJ2hvc3QnIGhlYWRlci4gSWYgd2Ugc2lnblxuICAgICAgICAgIC8vIHRoZSBvdGhlciBoZWFkZXJzLCB0aGUgc2lnbmF0dXJlIGNvdWxkIGJlIG1pc21hdGNoLlxuICAgICAgICAgIHVuc2lnbmFibGVIZWFkZXJzOiBuZXcgU2V0KE9iamVjdC5rZXlzKHRvU2lnbi5oZWFkZXJzKS5maWx0ZXIoKGhlYWRlcikgPT4gaGVhZGVyICE9PSBcImhvc3RcIikpLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2lnbmVkUmVxdWVzdCxcbiAgICAgICAgYm9keTogdG9TaWduLmJvZHksXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zaWduZXIuc2lnbih0b1NpZ24sIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxufVxuIl19