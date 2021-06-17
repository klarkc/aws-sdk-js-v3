import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { formatUrl } from "@aws-sdk/util-format-url";
export var getSignedUrl = function (client, command, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var signer, presignInterceptMiddleware, presigned, output;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    signer = new SignatureV4(__assign({ service: options.service || "polly", uriEscapePath: options.uriEscapePath || false }, client.config));
                    presignInterceptMiddleware = function (next, context) { return function (args) { return __awaiter(void 0, void 0, void 0, function () {
                        var request, unsignableHeaders, presigned;
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    request = args.request;
                                    if (!HttpRequest.isInstance(request)) {
                                        throw new Error("Request to be presigned is not an valid HTTP request.");
                                    }
                                    // Modify the request so the presigner signs correctly
                                    request.method = "GET";
                                    delete request.headers["amz-sdk-invocation-id"];
                                    delete request.headers["amz-sdk-request"];
                                    delete request.headers["content-length"];
                                    request.body = "";
                                    request.query = __assign(__assign({}, request.query), args.input);
                                    unsignableHeaders = new Set();
                                    unsignableHeaders.add("content-type");
                                    return [4 /*yield*/, signer.presign(request, __assign(__assign({ expiresIn: 3600, unsignableHeaders: unsignableHeaders }, options), { signingRegion: (_a = options.signingRegion) !== null && _a !== void 0 ? _a : context["signing_region"], signingService: (_b = options.signingService) !== null && _b !== void 0 ? _b : context["signing_service"] }))];
                                case 1:
                                    presigned = _c.sent();
                                    return [2 /*return*/, {
                                            // Intercept the middleware stack by returning fake response
                                            response: {},
                                            output: {
                                                $metadata: { httpStatusCode: 200 },
                                                presigned: presigned,
                                            },
                                        }];
                            }
                        });
                    }); }; };
                    client.middlewareStack.addRelativeTo(presignInterceptMiddleware, {
                        name: "presignInterceptMiddleware",
                        relation: "before",
                        toMiddleware: "awsAuthMiddleware",
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 3, 4]);
                    return [4 /*yield*/, client.send(command)];
                case 2:
                    output = _a.sent();
                    //@ts-ignore the output is faked, so it's not actually OutputType
                    presigned = output.presigned;
                    return [3 /*break*/, 4];
                case 3:
                    client.middlewareStack.remove("presignInterceptMiddleware");
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/, formatUrl(presigned)];
            }
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2lnbmVkVXJscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nZXRTaWduZWRVcmxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVyRCxNQUFNLENBQUMsSUFBTSxZQUFZLEdBQUcsVUFDMUIsTUFBbUIsRUFDbkIsT0FBZ0MsRUFDaEMsT0FBaUI7SUFBakIsd0JBQUEsRUFBQSxZQUFpQjs7Ozs7O29CQUVYLE1BQU0sR0FBRyxJQUFJLFdBQVcsWUFDNUIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxFQUNuQyxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxLQUFLLElBQzFDLE1BQU0sQ0FBQyxNQUFNLEVBQ2hCLENBQUM7b0JBRUcsMEJBQTBCLEdBQUcsVUFBQyxJQUFTLEVBQUUsT0FBWSxJQUFLLE9BQUEsVUFBTyxJQUFTOzs7Ozs7b0NBQ3RFLE9BQU8sR0FBSyxJQUFJLFFBQVQsQ0FBVTtvQ0FDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7d0NBQ3BDLE1BQU0sSUFBSSxLQUFLLENBQUMsdURBQXVELENBQUMsQ0FBQztxQ0FDMUU7b0NBRUQsc0RBQXNEO29DQUN0RCxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQ0FDdkIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7b0NBQ2hELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29DQUMxQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQ0FDekMsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7b0NBQ2xCLE9BQU8sQ0FBQyxLQUFLLHlCQUNSLE9BQU8sQ0FBQyxLQUFLLEdBQ2IsSUFBSSxDQUFDLEtBQUssQ0FDZCxDQUFDO29DQUVJLGlCQUFpQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7b0NBQ3BDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQ0FDcEIscUJBQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLHNCQUM1QyxTQUFTLEVBQUUsSUFBSSxFQUNmLGlCQUFpQixtQkFBQSxJQUNkLE9BQU8sS0FDVixhQUFhLEVBQUUsTUFBQSxPQUFPLENBQUMsYUFBYSxtQ0FBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFDakUsY0FBYyxFQUFFLE1BQUEsT0FBTyxDQUFDLGNBQWMsbUNBQUksT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQ3BFLEVBQUE7O29DQU5JLFNBQVMsR0FBRyxTQU1oQjtvQ0FFRixzQkFBTzs0Q0FDTCw0REFBNEQ7NENBQzVELFFBQVEsRUFBRSxFQUFFOzRDQUNaLE1BQU0sRUFBRTtnREFDTixTQUFTLEVBQUUsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFO2dEQUNsQyxTQUFTLFdBQUE7NkNBQ1Y7eUNBQ0ssRUFBQzs7O3lCQUNWLEVBbkMrRCxDQW1DL0QsQ0FBQztvQkFFRixNQUFNLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsRUFBRTt3QkFDL0QsSUFBSSxFQUFFLDRCQUE0Qjt3QkFDbEMsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFlBQVksRUFBRSxtQkFBbUI7cUJBQ2xDLENBQUMsQ0FBQzs7OztvQkFJYyxxQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFBOztvQkFBbkMsTUFBTSxHQUFHLFNBQTBCO29CQUN6QyxpRUFBaUU7b0JBQ2pFLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDOzs7b0JBRTdCLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLDRCQUE0QixDQUFDLENBQUM7O3dCQUc5RCxzQkFBTyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUM7Ozs7Q0FDN0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvbGx5Q2xpZW50LCBTeW50aGVzaXplU3BlZWNoQ29tbWFuZCB9IGZyb20gXCJAYXdzLXNkay9jbGllbnQtcG9sbHlcIjtcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7IFNpZ25hdHVyZVY0IH0gZnJvbSBcIkBhd3Mtc2RrL3NpZ25hdHVyZS12NFwiO1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtZm9ybWF0LXVybFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U2lnbmVkVXJsID0gYXN5bmMgKFxuICBjbGllbnQ6IFBvbGx5Q2xpZW50LFxuICBjb21tYW5kOiBTeW50aGVzaXplU3BlZWNoQ29tbWFuZCxcbiAgb3B0aW9uczogYW55ID0ge31cbik6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIGNvbnN0IHNpZ25lciA9IG5ldyBTaWduYXR1cmVWNCh7XG4gICAgc2VydmljZTogb3B0aW9ucy5zZXJ2aWNlIHx8IFwicG9sbHlcIixcbiAgICB1cmlFc2NhcGVQYXRoOiBvcHRpb25zLnVyaUVzY2FwZVBhdGggfHwgZmFsc2UsXG4gICAgLi4uY2xpZW50LmNvbmZpZyxcbiAgfSk7XG5cbiAgY29uc3QgcHJlc2lnbkludGVyY2VwdE1pZGRsZXdhcmUgPSAobmV4dDogYW55LCBjb250ZXh0OiBhbnkpID0+IGFzeW5jIChhcmdzOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IHJlcXVlc3QgfSA9IGFyZ3M7XG4gICAgaWYgKCFIdHRwUmVxdWVzdC5pc0luc3RhbmNlKHJlcXVlc3QpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1ZXN0IHRvIGJlIHByZXNpZ25lZCBpcyBub3QgYW4gdmFsaWQgSFRUUCByZXF1ZXN0LlwiKTtcbiAgICB9XG5cbiAgICAvLyBNb2RpZnkgdGhlIHJlcXVlc3Qgc28gdGhlIHByZXNpZ25lciBzaWducyBjb3JyZWN0bHlcbiAgICByZXF1ZXN0Lm1ldGhvZCA9IFwiR0VUXCI7XG4gICAgZGVsZXRlIHJlcXVlc3QuaGVhZGVyc1tcImFtei1zZGstaW52b2NhdGlvbi1pZFwiXTtcbiAgICBkZWxldGUgcmVxdWVzdC5oZWFkZXJzW1wiYW16LXNkay1yZXF1ZXN0XCJdO1xuICAgIGRlbGV0ZSByZXF1ZXN0LmhlYWRlcnNbXCJjb250ZW50LWxlbmd0aFwiXTtcbiAgICByZXF1ZXN0LmJvZHkgPSBcIlwiO1xuICAgIHJlcXVlc3QucXVlcnkgPSB7XG4gICAgICAuLi5yZXF1ZXN0LnF1ZXJ5LFxuICAgICAgLi4uYXJncy5pbnB1dCxcbiAgICB9O1xuXG4gICAgY29uc3QgdW5zaWduYWJsZUhlYWRlcnMgPSBuZXcgU2V0KCk7XG4gICAgdW5zaWduYWJsZUhlYWRlcnMuYWRkKFwiY29udGVudC10eXBlXCIpO1xuICAgIGNvbnN0IHByZXNpZ25lZCA9IGF3YWl0IHNpZ25lci5wcmVzaWduKHJlcXVlc3QsIHtcbiAgICAgIGV4cGlyZXNJbjogMzYwMCxcbiAgICAgIHVuc2lnbmFibGVIZWFkZXJzLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIHNpZ25pbmdSZWdpb246IG9wdGlvbnMuc2lnbmluZ1JlZ2lvbiA/PyBjb250ZXh0W1wic2lnbmluZ19yZWdpb25cIl0sXG4gICAgICBzaWduaW5nU2VydmljZTogb3B0aW9ucy5zaWduaW5nU2VydmljZSA/PyBjb250ZXh0W1wic2lnbmluZ19zZXJ2aWNlXCJdLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIEludGVyY2VwdCB0aGUgbWlkZGxld2FyZSBzdGFjayBieSByZXR1cm5pbmcgZmFrZSByZXNwb25zZVxuICAgICAgcmVzcG9uc2U6IHt9LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgICRtZXRhZGF0YTogeyBodHRwU3RhdHVzQ29kZTogMjAwIH0sXG4gICAgICAgIHByZXNpZ25lZCxcbiAgICAgIH0sXG4gICAgfSBhcyBhbnk7XG4gIH07XG5cbiAgY2xpZW50Lm1pZGRsZXdhcmVTdGFjay5hZGRSZWxhdGl2ZVRvKHByZXNpZ25JbnRlcmNlcHRNaWRkbGV3YXJlLCB7XG4gICAgbmFtZTogXCJwcmVzaWduSW50ZXJjZXB0TWlkZGxld2FyZVwiLFxuICAgIHJlbGF0aW9uOiBcImJlZm9yZVwiLFxuICAgIHRvTWlkZGxld2FyZTogXCJhd3NBdXRoTWlkZGxld2FyZVwiLFxuICB9KTtcblxuICBsZXQgcHJlc2lnbmVkOiBIdHRwUmVxdWVzdDtcbiAgdHJ5IHtcbiAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCBjbGllbnQuc2VuZChjb21tYW5kKTtcbiAgICAvL0B0cy1pZ25vcmUgdGhlIG91dHB1dCBpcyBmYWtlZCwgc28gaXQncyBub3QgYWN0dWFsbHkgT3V0cHV0VHlwZVxuICAgIHByZXNpZ25lZCA9IG91dHB1dC5wcmVzaWduZWQ7XG4gIH0gZmluYWxseSB7XG4gICAgY2xpZW50Lm1pZGRsZXdhcmVTdGFjay5yZW1vdmUoXCJwcmVzaWduSW50ZXJjZXB0TWlkZGxld2FyZVwiKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwocHJlc2lnbmVkKTtcbn07XG4iXX0=