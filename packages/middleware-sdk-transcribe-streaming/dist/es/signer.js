import { __awaiter } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
export class SignatureV4 {
    constructor(options) {
        this.signer = options.signer;
    }
    presign(originalRequest, options = {}) {
        return this.signer.presign(originalRequest, options);
    }
    sign(toSign, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (HttpRequest.isInstance(toSign)) {
                // Presign the endpoint url with empty body, otherwise
                // the payload hash would be UNSINGED-PAYLOAD
                const signedRequest = yield this.signer.presign(Object.assign(Object.assign({}, toSign), { body: "" }), {
                    // presigned url must be expired within 5 mins.
                    expiresIn: 5 * 60,
                    // Not to sign headers. Transcribe-streaming WebSocket
                    // request omits headers except for required 'host' header. If we sign
                    // the other headers, the signature could be mismatch.
                    unsignableHeaders: new Set(Object.keys(toSign.headers).filter((header) => header !== "host")),
                });
                return Object.assign(Object.assign({}, signedRequest), { body: toSign.body });
            }
            else {
                return this.signer.sign(toSign, options);
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NpZ25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBVXJELE1BQU0sT0FBTyxXQUFXO0lBRXRCLFlBQVksT0FBb0M7UUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFTSxPQUFPLENBQUMsZUFBNkIsRUFBRSxVQUFzQyxFQUFFO1FBQ3BGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFWSxJQUFJLENBQUMsTUFBb0IsRUFBRSxPQUFpQzs7WUFDdkUsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNsQyxzREFBc0Q7Z0JBQ3RELDZDQUE2QztnQkFDN0MsTUFBTSxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8saUNBQ3hDLE1BQU0sS0FBRSxJQUFJLEVBQUUsRUFBRSxLQUNyQjtvQkFDRSwrQ0FBK0M7b0JBQy9DLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRTtvQkFDakIsc0RBQXNEO29CQUN0RCxzRUFBc0U7b0JBQ3RFLHNEQUFzRDtvQkFDdEQsaUJBQWlCLEVBQUUsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUM7aUJBQzlGLENBQ0YsQ0FBQztnQkFDRix1Q0FDSyxhQUFhLEtBQ2hCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxJQUNqQjthQUNIO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzFDO1FBQ0gsQ0FBQztLQUFBO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQgeyBTaWduYXR1cmVWNCBhcyBCYXNlU2lnbmF0dXJlVjQgfSBmcm9tIFwiQGF3cy1zZGsvc2lnbmF0dXJlLXY0XCI7XG5pbXBvcnQge1xuICBIdHRwUmVxdWVzdCBhcyBJSHR0cFJlcXVlc3QsXG4gIFJlcXVlc3RQcmVzaWduZXIsXG4gIFJlcXVlc3RQcmVzaWduaW5nQXJndW1lbnRzLFxuICBSZXF1ZXN0U2lnbmVyLFxuICBSZXF1ZXN0U2lnbmluZ0FyZ3VtZW50cyxcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVWNCBpbXBsZW1lbnRzIFJlcXVlc3RTaWduZXIsIFJlcXVlc3RQcmVzaWduZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHNpZ25lcjogQmFzZVNpZ25hdHVyZVY0O1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiB7IHNpZ25lcjogQmFzZVNpZ25hdHVyZVY0IH0pIHtcbiAgICB0aGlzLnNpZ25lciA9IG9wdGlvbnMuc2lnbmVyO1xuICB9XG5cbiAgcHVibGljIHByZXNpZ24ob3JpZ2luYWxSZXF1ZXN0OiBJSHR0cFJlcXVlc3QsIG9wdGlvbnM6IFJlcXVlc3RQcmVzaWduaW5nQXJndW1lbnRzID0ge30pOiBQcm9taXNlPElIdHRwUmVxdWVzdD4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25lci5wcmVzaWduKG9yaWdpbmFsUmVxdWVzdCwgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2lnbih0b1NpZ246IElIdHRwUmVxdWVzdCwgb3B0aW9ucz86IFJlcXVlc3RTaWduaW5nQXJndW1lbnRzKTogUHJvbWlzZTxJSHR0cFJlcXVlc3Q+IHtcbiAgICBpZiAoSHR0cFJlcXVlc3QuaXNJbnN0YW5jZSh0b1NpZ24pKSB7XG4gICAgICAvLyBQcmVzaWduIHRoZSBlbmRwb2ludCB1cmwgd2l0aCBlbXB0eSBib2R5LCBvdGhlcndpc2VcbiAgICAgIC8vIHRoZSBwYXlsb2FkIGhhc2ggd291bGQgYmUgVU5TSU5HRUQtUEFZTE9BRFxuICAgICAgY29uc3Qgc2lnbmVkUmVxdWVzdCA9IGF3YWl0IHRoaXMuc2lnbmVyLnByZXNpZ24oXG4gICAgICAgIHsgLi4udG9TaWduLCBib2R5OiBcIlwiIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBwcmVzaWduZWQgdXJsIG11c3QgYmUgZXhwaXJlZCB3aXRoaW4gNSBtaW5zLlxuICAgICAgICAgIGV4cGlyZXNJbjogNSAqIDYwLFxuICAgICAgICAgIC8vIE5vdCB0byBzaWduIGhlYWRlcnMuIFRyYW5zY3JpYmUtc3RyZWFtaW5nIFdlYlNvY2tldFxuICAgICAgICAgIC8vIHJlcXVlc3Qgb21pdHMgaGVhZGVycyBleGNlcHQgZm9yIHJlcXVpcmVkICdob3N0JyBoZWFkZXIuIElmIHdlIHNpZ25cbiAgICAgICAgICAvLyB0aGUgb3RoZXIgaGVhZGVycywgdGhlIHNpZ25hdHVyZSBjb3VsZCBiZSBtaXNtYXRjaC5cbiAgICAgICAgICB1bnNpZ25hYmxlSGVhZGVyczogbmV3IFNldChPYmplY3Qua2V5cyh0b1NpZ24uaGVhZGVycykuZmlsdGVyKChoZWFkZXIpID0+IGhlYWRlciAhPT0gXCJob3N0XCIpKSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnNpZ25lZFJlcXVlc3QsXG4gICAgICAgIGJvZHk6IHRvU2lnbi5ib2R5LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2lnbmVyLnNpZ24odG9TaWduLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==