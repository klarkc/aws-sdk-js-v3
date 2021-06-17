"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSignedUrl = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const signature_v4_1 = require("@aws-sdk/signature-v4");
const util_format_url_1 = require("@aws-sdk/util-format-url");
const getSignedUrl = async (client, command, options = {}) => {
    const signer = new signature_v4_1.SignatureV4({
        service: options.service || "polly",
        uriEscapePath: options.uriEscapePath || false,
        ...client.config,
    });
    const presignInterceptMiddleware = (next, context) => async (args) => {
        var _a, _b;
        const { request } = args;
        if (!protocol_http_1.HttpRequest.isInstance(request)) {
            throw new Error("Request to be presigned is not an valid HTTP request.");
        }
        // Modify the request so the presigner signs correctly
        request.method = "GET";
        delete request.headers["amz-sdk-invocation-id"];
        delete request.headers["amz-sdk-request"];
        delete request.headers["content-length"];
        request.body = "";
        request.query = {
            ...request.query,
            ...args.input,
        };
        const unsignableHeaders = new Set();
        unsignableHeaders.add("content-type");
        const presigned = await signer.presign(request, {
            expiresIn: 3600,
            unsignableHeaders,
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
    client.middlewareStack.addRelativeTo(presignInterceptMiddleware, {
        name: "presignInterceptMiddleware",
        relation: "before",
        toMiddleware: "awsAuthMiddleware",
    });
    let presigned;
    try {
        const output = await client.send(command);
        //@ts-ignore the output is faked, so it's not actually OutputType
        presigned = output.presigned;
    }
    finally {
        client.middlewareStack.remove("presignInterceptMiddleware");
    }
    return util_format_url_1.formatUrl(presigned);
};
exports.getSignedUrl = getSignedUrl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2lnbmVkVXJscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nZXRTaWduZWRVcmxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBEQUFxRDtBQUNyRCx3REFBb0Q7QUFDcEQsOERBQXFEO0FBRTlDLE1BQU0sWUFBWSxHQUFHLEtBQUssRUFDL0IsTUFBbUIsRUFDbkIsT0FBZ0MsRUFDaEMsVUFBZSxFQUFFLEVBQ0EsRUFBRTtJQUNuQixNQUFNLE1BQU0sR0FBRyxJQUFJLDBCQUFXLENBQUM7UUFDN0IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTztRQUNuQyxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxLQUFLO1FBQzdDLEdBQUcsTUFBTSxDQUFDLE1BQU07S0FDakIsQ0FBQyxDQUFDO0lBRUgsTUFBTSwwQkFBMEIsR0FBRyxDQUFDLElBQVMsRUFBRSxPQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFTLEVBQUUsRUFBRTs7UUFDbEYsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsMkJBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDcEMsTUFBTSxJQUFJLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1NBQzFFO1FBRUQsc0RBQXNEO1FBQ3RELE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxLQUFLLEdBQUc7WUFDZCxHQUFHLE9BQU8sQ0FBQyxLQUFLO1lBQ2hCLEdBQUcsSUFBSSxDQUFDLEtBQUs7U0FDZCxDQUFDO1FBRUYsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0QyxNQUFNLFNBQVMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQzlDLFNBQVMsRUFBRSxJQUFJO1lBQ2YsaUJBQWlCO1lBQ2pCLEdBQUcsT0FBTztZQUNWLGFBQWEsRUFBRSxNQUFBLE9BQU8sQ0FBQyxhQUFhLG1DQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztZQUNqRSxjQUFjLEVBQUUsTUFBQSxPQUFPLENBQUMsY0FBYyxtQ0FBSSxPQUFPLENBQUMsaUJBQWlCLENBQUM7U0FDckUsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNMLDREQUE0RDtZQUM1RCxRQUFRLEVBQUUsRUFBRTtZQUNaLE1BQU0sRUFBRTtnQkFDTixTQUFTLEVBQUUsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFO2dCQUNsQyxTQUFTO2FBQ1Y7U0FDSyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0lBRUYsTUFBTSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLEVBQUU7UUFDL0QsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQyxRQUFRLEVBQUUsUUFBUTtRQUNsQixZQUFZLEVBQUUsbUJBQW1CO0tBQ2xDLENBQUMsQ0FBQztJQUVILElBQUksU0FBc0IsQ0FBQztJQUMzQixJQUFJO1FBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLGlFQUFpRTtRQUNqRSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztLQUM5QjtZQUFTO1FBQ1IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FBQztLQUM3RDtJQUVELE9BQU8sMkJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUM7QUFoRVcsUUFBQSxZQUFZLGdCQWdFdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2xseUNsaWVudCwgU3ludGhlc2l6ZVNwZWVjaENvbW1hbmQgfSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LXBvbGx5XCI7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQgeyBTaWduYXR1cmVWNCB9IGZyb20gXCJAYXdzLXNkay9zaWduYXR1cmUtdjRcIjtcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gXCJAYXdzLXNkay91dGlsLWZvcm1hdC11cmxcIjtcblxuZXhwb3J0IGNvbnN0IGdldFNpZ25lZFVybCA9IGFzeW5jIChcbiAgY2xpZW50OiBQb2xseUNsaWVudCxcbiAgY29tbWFuZDogU3ludGhlc2l6ZVNwZWVjaENvbW1hbmQsXG4gIG9wdGlvbnM6IGFueSA9IHt9XG4pOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICBjb25zdCBzaWduZXIgPSBuZXcgU2lnbmF0dXJlVjQoe1xuICAgIHNlcnZpY2U6IG9wdGlvbnMuc2VydmljZSB8fCBcInBvbGx5XCIsXG4gICAgdXJpRXNjYXBlUGF0aDogb3B0aW9ucy51cmlFc2NhcGVQYXRoIHx8IGZhbHNlLFxuICAgIC4uLmNsaWVudC5jb25maWcsXG4gIH0pO1xuXG4gIGNvbnN0IHByZXNpZ25JbnRlcmNlcHRNaWRkbGV3YXJlID0gKG5leHQ6IGFueSwgY29udGV4dDogYW55KSA9PiBhc3luYyAoYXJnczogYW55KSA9PiB7XG4gICAgY29uc3QgeyByZXF1ZXN0IH0gPSBhcmdzO1xuICAgIGlmICghSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShyZXF1ZXN0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWVzdCB0byBiZSBwcmVzaWduZWQgaXMgbm90IGFuIHZhbGlkIEhUVFAgcmVxdWVzdC5cIik7XG4gICAgfVxuXG4gICAgLy8gTW9kaWZ5IHRoZSByZXF1ZXN0IHNvIHRoZSBwcmVzaWduZXIgc2lnbnMgY29ycmVjdGx5XG4gICAgcmVxdWVzdC5tZXRob2QgPSBcIkdFVFwiO1xuICAgIGRlbGV0ZSByZXF1ZXN0LmhlYWRlcnNbXCJhbXotc2RrLWludm9jYXRpb24taWRcIl07XG4gICAgZGVsZXRlIHJlcXVlc3QuaGVhZGVyc1tcImFtei1zZGstcmVxdWVzdFwiXTtcbiAgICBkZWxldGUgcmVxdWVzdC5oZWFkZXJzW1wiY29udGVudC1sZW5ndGhcIl07XG4gICAgcmVxdWVzdC5ib2R5ID0gXCJcIjtcbiAgICByZXF1ZXN0LnF1ZXJ5ID0ge1xuICAgICAgLi4ucmVxdWVzdC5xdWVyeSxcbiAgICAgIC4uLmFyZ3MuaW5wdXQsXG4gICAgfTtcblxuICAgIGNvbnN0IHVuc2lnbmFibGVIZWFkZXJzID0gbmV3IFNldCgpO1xuICAgIHVuc2lnbmFibGVIZWFkZXJzLmFkZChcImNvbnRlbnQtdHlwZVwiKTtcbiAgICBjb25zdCBwcmVzaWduZWQgPSBhd2FpdCBzaWduZXIucHJlc2lnbihyZXF1ZXN0LCB7XG4gICAgICBleHBpcmVzSW46IDM2MDAsXG4gICAgICB1bnNpZ25hYmxlSGVhZGVycyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBzaWduaW5nUmVnaW9uOiBvcHRpb25zLnNpZ25pbmdSZWdpb24gPz8gY29udGV4dFtcInNpZ25pbmdfcmVnaW9uXCJdLFxuICAgICAgc2lnbmluZ1NlcnZpY2U6IG9wdGlvbnMuc2lnbmluZ1NlcnZpY2UgPz8gY29udGV4dFtcInNpZ25pbmdfc2VydmljZVwiXSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAvLyBJbnRlcmNlcHQgdGhlIG1pZGRsZXdhcmUgc3RhY2sgYnkgcmV0dXJuaW5nIGZha2UgcmVzcG9uc2VcbiAgICAgIHJlc3BvbnNlOiB7fSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAkbWV0YWRhdGE6IHsgaHR0cFN0YXR1c0NvZGU6IDIwMCB9LFxuICAgICAgICBwcmVzaWduZWQsXG4gICAgICB9LFxuICAgIH0gYXMgYW55O1xuICB9O1xuXG4gIGNsaWVudC5taWRkbGV3YXJlU3RhY2suYWRkUmVsYXRpdmVUbyhwcmVzaWduSW50ZXJjZXB0TWlkZGxld2FyZSwge1xuICAgIG5hbWU6IFwicHJlc2lnbkludGVyY2VwdE1pZGRsZXdhcmVcIixcbiAgICByZWxhdGlvbjogXCJiZWZvcmVcIixcbiAgICB0b01pZGRsZXdhcmU6IFwiYXdzQXV0aE1pZGRsZXdhcmVcIixcbiAgfSk7XG5cbiAgbGV0IHByZXNpZ25lZDogSHR0cFJlcXVlc3Q7XG4gIHRyeSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgY2xpZW50LnNlbmQoY29tbWFuZCk7XG4gICAgLy9AdHMtaWdub3JlIHRoZSBvdXRwdXQgaXMgZmFrZWQsIHNvIGl0J3Mgbm90IGFjdHVhbGx5IE91dHB1dFR5cGVcbiAgICBwcmVzaWduZWQgPSBvdXRwdXQucHJlc2lnbmVkO1xuICB9IGZpbmFsbHkge1xuICAgIGNsaWVudC5taWRkbGV3YXJlU3RhY2sucmVtb3ZlKFwicHJlc2lnbkludGVyY2VwdE1pZGRsZXdhcmVcIik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHByZXNpZ25lZCk7XG59O1xuIl19