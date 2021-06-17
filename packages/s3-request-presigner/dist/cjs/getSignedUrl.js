"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSignedUrl = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const util_format_url_1 = require("@aws-sdk/util-format-url");
const presigner_1 = require("./presigner");
const getSignedUrl = async (client, command, options = {}) => {
    const s3Presigner = new presigner_1.S3RequestPresigner({ ...client.config });
    const presignInterceptMiddleware = (next, context) => async (args) => {
        var _a, _b;
        const { request } = args;
        if (!protocol_http_1.HttpRequest.isInstance(request)) {
            throw new Error("Request to be presigned is not an valid HTTP request.");
        }
        // Retry information headers are not meaningful in presigned URLs
        delete request.headers["amz-sdk-invocation-id"];
        delete request.headers["amz-sdk-request"];
        const presigned = await s3Presigner.presign(request, {
            ...options,
            signingRegion: (_a = options.signingRegion) !== null && _a !== void 0 ? _a : context["signing_region"],
            signingService: (_b = options.signingService) !== null && _b !== void 0 ? _b : context["signing_service"],
        });
        return {
            // Intercept the middleware stack by returning fake response
            response: {},
            output: {
                $metadata: { httpStatusCode: 200 },
                presigned,
            },
        };
    };
    const middlewareName = "presignInterceptMiddleware";
    client.middlewareStack.addRelativeTo(presignInterceptMiddleware, {
        name: middlewareName,
        relation: "before",
        toMiddleware: "awsAuthMiddleware",
        override: true,
    });
    let presigned;
    try {
        const output = await client.send(command);
        //@ts-ignore the output is faked, so it's not actually OutputType
        presigned = output.presigned;
    }
    finally {
        client.middlewareStack.remove(middlewareName);
    }
    return util_format_url_1.formatUrl(presigned);
};
exports.getSignedUrl = getSignedUrl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2lnbmVkVXJsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dldFNpZ25lZFVybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBcUQ7QUFHckQsOERBQXFEO0FBRXJELDJDQUFpRDtBQUUxQyxNQUFNLFlBQVksR0FBRyxLQUFLLEVBSy9CLE1BQXlELEVBQ3pELE9BQTZFLEVBQzdFLFVBQXNDLEVBQUUsRUFDdkIsRUFBRTtJQUNuQixNQUFNLFdBQVcsR0FBRyxJQUFJLDhCQUFrQixDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNqRSxNQUFNLDBCQUEwQixHQUM5QixDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTs7UUFDaEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsMkJBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDcEMsTUFBTSxJQUFJLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1NBQzFFO1FBQ0QsaUVBQWlFO1FBQ2pFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTFDLE1BQU0sU0FBUyxHQUFHLE1BQU0sV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkQsR0FBRyxPQUFPO1lBQ1YsYUFBYSxFQUFFLE1BQUEsT0FBTyxDQUFDLGFBQWEsbUNBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDO1lBQ2pFLGNBQWMsRUFBRSxNQUFBLE9BQU8sQ0FBQyxjQUFjLG1DQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztTQUNyRSxDQUFDLENBQUM7UUFDSCxPQUFPO1lBQ0wsNERBQTREO1lBQzVELFFBQVEsRUFBRSxFQUFFO1lBQ1osTUFBTSxFQUFFO2dCQUNOLFNBQVMsRUFBRSxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUU7Z0JBQ2xDLFNBQVM7YUFDVjtTQUNLLENBQUM7SUFDWCxDQUFDLENBQUM7SUFDSixNQUFNLGNBQWMsR0FBRyw0QkFBNEIsQ0FBQztJQUNwRCxNQUFNLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsRUFBRTtRQUMvRCxJQUFJLEVBQUUsY0FBYztRQUNwQixRQUFRLEVBQUUsUUFBUTtRQUNsQixZQUFZLEVBQUUsbUJBQW1CO1FBQ2pDLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQyxDQUFDO0lBRUgsSUFBSSxTQUFzQixDQUFDO0lBQzNCLElBQUk7UUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsaUVBQWlFO1FBQ2pFLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0tBQzlCO1lBQVM7UUFDUixNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUMvQztJQUVELE9BQU8sMkJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUM7QUFwRFcsUUFBQSxZQUFZLGdCQW9EdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQgeyBDbGllbnQsIENvbW1hbmQgfSBmcm9tIFwiQGF3cy1zZGsvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgQnVpbGRNaWRkbGV3YXJlLCBNZXRhZGF0YUJlYXJlciwgUmVxdWVzdFByZXNpZ25pbmdBcmd1bWVudHMgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gXCJAYXdzLXNkay91dGlsLWZvcm1hdC11cmxcIjtcblxuaW1wb3J0IHsgUzNSZXF1ZXN0UHJlc2lnbmVyIH0gZnJvbSBcIi4vcHJlc2lnbmVyXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTaWduZWRVcmwgPSBhc3luYyA8XG4gIElucHV0VHlwZXNVbmlvbiBleHRlbmRzIG9iamVjdCxcbiAgSW5wdXRUeXBlIGV4dGVuZHMgSW5wdXRUeXBlc1VuaW9uLFxuICBPdXRwdXRUeXBlIGV4dGVuZHMgTWV0YWRhdGFCZWFyZXIgPSBNZXRhZGF0YUJlYXJlclxuPihcbiAgY2xpZW50OiBDbGllbnQ8YW55LCBJbnB1dFR5cGVzVW5pb24sIE1ldGFkYXRhQmVhcmVyLCBhbnk+LFxuICBjb21tYW5kOiBDb21tYW5kPElucHV0VHlwZSwgT3V0cHV0VHlwZSwgYW55LCBJbnB1dFR5cGVzVW5pb24sIE1ldGFkYXRhQmVhcmVyPixcbiAgb3B0aW9uczogUmVxdWVzdFByZXNpZ25pbmdBcmd1bWVudHMgPSB7fVxuKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgY29uc3QgczNQcmVzaWduZXIgPSBuZXcgUzNSZXF1ZXN0UHJlc2lnbmVyKHsgLi4uY2xpZW50LmNvbmZpZyB9KTtcbiAgY29uc3QgcHJlc2lnbkludGVyY2VwdE1pZGRsZXdhcmU6IEJ1aWxkTWlkZGxld2FyZTxJbnB1dFR5cGVzVW5pb24sIE1ldGFkYXRhQmVhcmVyPiA9XG4gICAgKG5leHQsIGNvbnRleHQpID0+IGFzeW5jIChhcmdzKSA9PiB7XG4gICAgICBjb25zdCB7IHJlcXVlc3QgfSA9IGFyZ3M7XG4gICAgICBpZiAoIUh0dHBSZXF1ZXN0LmlzSW5zdGFuY2UocmVxdWVzdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWVzdCB0byBiZSBwcmVzaWduZWQgaXMgbm90IGFuIHZhbGlkIEhUVFAgcmVxdWVzdC5cIik7XG4gICAgICB9XG4gICAgICAvLyBSZXRyeSBpbmZvcm1hdGlvbiBoZWFkZXJzIGFyZSBub3QgbWVhbmluZ2Z1bCBpbiBwcmVzaWduZWQgVVJMc1xuICAgICAgZGVsZXRlIHJlcXVlc3QuaGVhZGVyc1tcImFtei1zZGstaW52b2NhdGlvbi1pZFwiXTtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0LmhlYWRlcnNbXCJhbXotc2RrLXJlcXVlc3RcIl07XG5cbiAgICAgIGNvbnN0IHByZXNpZ25lZCA9IGF3YWl0IHMzUHJlc2lnbmVyLnByZXNpZ24ocmVxdWVzdCwge1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBzaWduaW5nUmVnaW9uOiBvcHRpb25zLnNpZ25pbmdSZWdpb24gPz8gY29udGV4dFtcInNpZ25pbmdfcmVnaW9uXCJdLFxuICAgICAgICBzaWduaW5nU2VydmljZTogb3B0aW9ucy5zaWduaW5nU2VydmljZSA/PyBjb250ZXh0W1wic2lnbmluZ19zZXJ2aWNlXCJdLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBJbnRlcmNlcHQgdGhlIG1pZGRsZXdhcmUgc3RhY2sgYnkgcmV0dXJuaW5nIGZha2UgcmVzcG9uc2VcbiAgICAgICAgcmVzcG9uc2U6IHt9LFxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAkbWV0YWRhdGE6IHsgaHR0cFN0YXR1c0NvZGU6IDIwMCB9LFxuICAgICAgICAgIHByZXNpZ25lZCxcbiAgICAgICAgfSxcbiAgICAgIH0gYXMgYW55O1xuICAgIH07XG4gIGNvbnN0IG1pZGRsZXdhcmVOYW1lID0gXCJwcmVzaWduSW50ZXJjZXB0TWlkZGxld2FyZVwiO1xuICBjbGllbnQubWlkZGxld2FyZVN0YWNrLmFkZFJlbGF0aXZlVG8ocHJlc2lnbkludGVyY2VwdE1pZGRsZXdhcmUsIHtcbiAgICBuYW1lOiBtaWRkbGV3YXJlTmFtZSxcbiAgICByZWxhdGlvbjogXCJiZWZvcmVcIixcbiAgICB0b01pZGRsZXdhcmU6IFwiYXdzQXV0aE1pZGRsZXdhcmVcIixcbiAgICBvdmVycmlkZTogdHJ1ZSxcbiAgfSk7XG5cbiAgbGV0IHByZXNpZ25lZDogSHR0cFJlcXVlc3Q7XG4gIHRyeSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgY2xpZW50LnNlbmQoY29tbWFuZCk7XG4gICAgLy9AdHMtaWdub3JlIHRoZSBvdXRwdXQgaXMgZmFrZWQsIHNvIGl0J3Mgbm90IGFjdHVhbGx5IE91dHB1dFR5cGVcbiAgICBwcmVzaWduZWQgPSBvdXRwdXQucHJlc2lnbmVkO1xuICB9IGZpbmFsbHkge1xuICAgIGNsaWVudC5taWRkbGV3YXJlU3RhY2sucmVtb3ZlKG1pZGRsZXdhcmVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwocHJlc2lnbmVkKTtcbn07XG4iXX0=