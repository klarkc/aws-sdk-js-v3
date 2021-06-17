import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { formatUrl } from "@aws-sdk/util-format-url";
import { S3RequestPresigner } from "./presigner";
export var getSignedUrl = function (client, command, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var s3Presigner, presignInterceptMiddleware, middlewareName, presigned, output;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    s3Presigner = new S3RequestPresigner(__assign({}, client.config));
                    presignInterceptMiddleware = function (next, context) { return function (args) { return __awaiter(void 0, void 0, void 0, function () {
                        var request, presigned;
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    request = args.request;
                                    if (!HttpRequest.isInstance(request)) {
                                        throw new Error("Request to be presigned is not an valid HTTP request.");
                                    }
                                    // Retry information headers are not meaningful in presigned URLs
                                    delete request.headers["amz-sdk-invocation-id"];
                                    delete request.headers["amz-sdk-request"];
                                    return [4 /*yield*/, s3Presigner.presign(request, __assign(__assign({}, options), { signingRegion: (_a = options.signingRegion) !== null && _a !== void 0 ? _a : context["signing_region"], signingService: (_b = options.signingService) !== null && _b !== void 0 ? _b : context["signing_service"] }))];
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
                    middlewareName = "presignInterceptMiddleware";
                    client.middlewareStack.addRelativeTo(presignInterceptMiddleware, {
                        name: middlewareName,
                        relation: "before",
                        toMiddleware: "awsAuthMiddleware",
                        override: true,
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
                    client.middlewareStack.remove(middlewareName);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/, formatUrl(presigned)];
            }
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2lnbmVkVXJsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dldFNpZ25lZFVybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFakQsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUFHLFVBSzFCLE1BQXlELEVBQ3pELE9BQTZFLEVBQzdFLE9BQXdDO0lBQXhDLHdCQUFBLEVBQUEsWUFBd0M7Ozs7OztvQkFFbEMsV0FBVyxHQUFHLElBQUksa0JBQWtCLGNBQU0sTUFBTSxDQUFDLE1BQU0sRUFBRyxDQUFDO29CQUMzRCwwQkFBMEIsR0FDOUIsVUFBQyxJQUFJLEVBQUUsT0FBTyxJQUFLLE9BQUEsVUFBTyxJQUFJOzs7Ozs7b0NBQ3BCLE9BQU8sR0FBSyxJQUFJLFFBQVQsQ0FBVTtvQ0FDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7d0NBQ3BDLE1BQU0sSUFBSSxLQUFLLENBQUMsdURBQXVELENBQUMsQ0FBQztxQ0FDMUU7b0NBQ0QsaUVBQWlFO29DQUNqRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztvQ0FDaEQsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0NBRXhCLHFCQUFNLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyx3QkFDOUMsT0FBTyxLQUNWLGFBQWEsRUFBRSxNQUFBLE9BQU8sQ0FBQyxhQUFhLG1DQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNqRSxjQUFjLEVBQUUsTUFBQSxPQUFPLENBQUMsY0FBYyxtQ0FBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFDcEUsRUFBQTs7b0NBSkksU0FBUyxHQUFHLFNBSWhCO29DQUNGLHNCQUFPOzRDQUNMLDREQUE0RDs0Q0FDNUQsUUFBUSxFQUFFLEVBQUU7NENBQ1osTUFBTSxFQUFFO2dEQUNOLFNBQVMsRUFBRSxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUU7Z0RBQ2xDLFNBQVMsV0FBQTs2Q0FDVjt5Q0FDSyxFQUFDOzs7eUJBQ1YsRUF0QmtCLENBc0JsQixDQUFDO29CQUNFLGNBQWMsR0FBRyw0QkFBNEIsQ0FBQztvQkFDcEQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLEVBQUU7d0JBQy9ELElBQUksRUFBRSxjQUFjO3dCQUNwQixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsWUFBWSxFQUFFLG1CQUFtQjt3QkFDakMsUUFBUSxFQUFFLElBQUk7cUJBQ2YsQ0FBQyxDQUFDOzs7O29CQUljLHFCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUE7O29CQUFuQyxNQUFNLEdBQUcsU0FBMEI7b0JBQ3pDLGlFQUFpRTtvQkFDakUsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7OztvQkFFN0IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7O3dCQUdoRCxzQkFBTyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUM7Ozs7Q0FDN0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7IENsaWVudCwgQ29tbWFuZCB9IGZyb20gXCJAYXdzLXNkay9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBCdWlsZE1pZGRsZXdhcmUsIE1ldGFkYXRhQmVhcmVyLCBSZXF1ZXN0UHJlc2lnbmluZ0FyZ3VtZW50cyB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtZm9ybWF0LXVybFwiO1xuXG5pbXBvcnQgeyBTM1JlcXVlc3RQcmVzaWduZXIgfSBmcm9tIFwiLi9wcmVzaWduZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdldFNpZ25lZFVybCA9IGFzeW5jIDxcbiAgSW5wdXRUeXBlc1VuaW9uIGV4dGVuZHMgb2JqZWN0LFxuICBJbnB1dFR5cGUgZXh0ZW5kcyBJbnB1dFR5cGVzVW5pb24sXG4gIE91dHB1dFR5cGUgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlciA9IE1ldGFkYXRhQmVhcmVyXG4+KFxuICBjbGllbnQ6IENsaWVudDxhbnksIElucHV0VHlwZXNVbmlvbiwgTWV0YWRhdGFCZWFyZXIsIGFueT4sXG4gIGNvbW1hbmQ6IENvbW1hbmQ8SW5wdXRUeXBlLCBPdXRwdXRUeXBlLCBhbnksIElucHV0VHlwZXNVbmlvbiwgTWV0YWRhdGFCZWFyZXI+LFxuICBvcHRpb25zOiBSZXF1ZXN0UHJlc2lnbmluZ0FyZ3VtZW50cyA9IHt9XG4pOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICBjb25zdCBzM1ByZXNpZ25lciA9IG5ldyBTM1JlcXVlc3RQcmVzaWduZXIoeyAuLi5jbGllbnQuY29uZmlnIH0pO1xuICBjb25zdCBwcmVzaWduSW50ZXJjZXB0TWlkZGxld2FyZTogQnVpbGRNaWRkbGV3YXJlPElucHV0VHlwZXNVbmlvbiwgTWV0YWRhdGFCZWFyZXI+ID1cbiAgICAobmV4dCwgY29udGV4dCkgPT4gYXN5bmMgKGFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IHsgcmVxdWVzdCB9ID0gYXJncztcbiAgICAgIGlmICghSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShyZXF1ZXN0KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1ZXN0IHRvIGJlIHByZXNpZ25lZCBpcyBub3QgYW4gdmFsaWQgSFRUUCByZXF1ZXN0LlwiKTtcbiAgICAgIH1cbiAgICAgIC8vIFJldHJ5IGluZm9ybWF0aW9uIGhlYWRlcnMgYXJlIG5vdCBtZWFuaW5nZnVsIGluIHByZXNpZ25lZCBVUkxzXG4gICAgICBkZWxldGUgcmVxdWVzdC5oZWFkZXJzW1wiYW16LXNkay1pbnZvY2F0aW9uLWlkXCJdO1xuICAgICAgZGVsZXRlIHJlcXVlc3QuaGVhZGVyc1tcImFtei1zZGstcmVxdWVzdFwiXTtcblxuICAgICAgY29uc3QgcHJlc2lnbmVkID0gYXdhaXQgczNQcmVzaWduZXIucHJlc2lnbihyZXF1ZXN0LCB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHNpZ25pbmdSZWdpb246IG9wdGlvbnMuc2lnbmluZ1JlZ2lvbiA/PyBjb250ZXh0W1wic2lnbmluZ19yZWdpb25cIl0sXG4gICAgICAgIHNpZ25pbmdTZXJ2aWNlOiBvcHRpb25zLnNpZ25pbmdTZXJ2aWNlID8/IGNvbnRleHRbXCJzaWduaW5nX3NlcnZpY2VcIl0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIEludGVyY2VwdCB0aGUgbWlkZGxld2FyZSBzdGFjayBieSByZXR1cm5pbmcgZmFrZSByZXNwb25zZVxuICAgICAgICByZXNwb25zZToge30sXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICRtZXRhZGF0YTogeyBodHRwU3RhdHVzQ29kZTogMjAwIH0sXG4gICAgICAgICAgcHJlc2lnbmVkLFxuICAgICAgICB9LFxuICAgICAgfSBhcyBhbnk7XG4gICAgfTtcbiAgY29uc3QgbWlkZGxld2FyZU5hbWUgPSBcInByZXNpZ25JbnRlcmNlcHRNaWRkbGV3YXJlXCI7XG4gIGNsaWVudC5taWRkbGV3YXJlU3RhY2suYWRkUmVsYXRpdmVUbyhwcmVzaWduSW50ZXJjZXB0TWlkZGxld2FyZSwge1xuICAgIG5hbWU6IG1pZGRsZXdhcmVOYW1lLFxuICAgIHJlbGF0aW9uOiBcImJlZm9yZVwiLFxuICAgIHRvTWlkZGxld2FyZTogXCJhd3NBdXRoTWlkZGxld2FyZVwiLFxuICAgIG92ZXJyaWRlOiB0cnVlLFxuICB9KTtcblxuICBsZXQgcHJlc2lnbmVkOiBIdHRwUmVxdWVzdDtcbiAgdHJ5IHtcbiAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCBjbGllbnQuc2VuZChjb21tYW5kKTtcbiAgICAvL0B0cy1pZ25vcmUgdGhlIG91dHB1dCBpcyBmYWtlZCwgc28gaXQncyBub3QgYWN0dWFsbHkgT3V0cHV0VHlwZVxuICAgIHByZXNpZ25lZCA9IG91dHB1dC5wcmVzaWduZWQ7XG4gIH0gZmluYWxseSB7XG4gICAgY2xpZW50Lm1pZGRsZXdhcmVTdGFjay5yZW1vdmUobWlkZGxld2FyZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybChwcmVzaWduZWQpO1xufTtcbiJdfQ==