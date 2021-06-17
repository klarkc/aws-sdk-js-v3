import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { formatUrl } from "@aws-sdk/util-format-url";
import { escapeUri } from "@aws-sdk/util-uri-escape";
var version = "2016-11-15";
//an initialize middleware to add PresignUrl to input
export function copySnapshotPresignedUrlMiddleware(options) {
    var _this = this;
    return function (next) {
        return function (args) { return __awaiter(_this, void 0, void 0, function () {
            var input, region, resolvedEndpoint, request, signer, presignedRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = args.input;
                        if (!!input.PresignedUrl) return [3 /*break*/, 4];
                        return [4 /*yield*/, options.region()];
                    case 1:
                        region = _a.sent();
                        return [4 /*yield*/, options.endpoint()];
                    case 2:
                        resolvedEndpoint = _a.sent();
                        resolvedEndpoint.hostname = "ec2." + input.SourceRegion + ".amazonaws.com";
                        request = new HttpRequest(__assign(__assign({}, resolvedEndpoint), { protocol: "https", headers: {
                                host: resolvedEndpoint.hostname,
                            }, query: {
                                Action: "CopySnapshot",
                                Version: version,
                                SourceRegion: input.SourceRegion,
                                SourceSnapshotId: input.SourceSnapshotId,
                                DestinationRegion: region,
                            } }));
                        signer = new SignatureV4({
                            credentials: options.credentials,
                            region: input.SourceRegion,
                            service: "ec2",
                            sha256: options.sha256,
                            uriEscapePath: options.signingEscapePath,
                        });
                        return [4 /*yield*/, signer.presign(request, {
                                expiresIn: 3600,
                            })];
                    case 3:
                        presignedRequest = _a.sent();
                        args = __assign(__assign({}, args), { input: __assign(__assign({}, args.input), { DestinationRegion: region, PresignedUrl: escapeUri(formatUrl(presignedRequest)) }) });
                        _a.label = 4;
                    case 4: return [2 /*return*/, next(args)];
                }
            });
        }); };
    };
}
export var copySnapshotPresignedUrlMiddlewareOptions = {
    step: "initialize",
    tags: ["CROSS_REGION_PRESIGNED_URL"],
    name: "crossRegionPresignedUrlMiddleware",
    override: true,
};
export var getCopySnapshotPresignedUrlPlugin = function (config) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(copySnapshotPresignedUrlMiddleware(config), copySnapshotPresignedUrlMiddlewareOptions);
    },
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFjcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVVyRCxJQUFNLE9BQU8sR0FBRyxZQUFZLENBQUM7QUFFN0IscURBQXFEO0FBQ3JELE1BQU0sVUFBVSxrQ0FBa0MsQ0FBQyxPQUEyQjtJQUE5RSxpQkE2Q0M7SUE1Q0MsT0FBTyxVQUFnQyxJQUFvQztRQUN6RSxPQUFBLFVBQU8sSUFBcUM7Ozs7O3dCQUNsQyxLQUFLLEdBQUssSUFBSSxNQUFULENBQVU7NkJBQ25CLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBbkIsd0JBQW1CO3dCQUNOLHFCQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBQTs7d0JBQS9CLE1BQU0sR0FBRyxTQUFzQjt3QkFDWixxQkFBTSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUE7O3dCQUEzQyxnQkFBZ0IsR0FBRyxTQUF3Qjt3QkFDakQsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLFNBQU8sS0FBSyxDQUFDLFlBQVksbUJBQWdCLENBQUM7d0JBQ2hFLE9BQU8sR0FBRyxJQUFJLFdBQVcsdUJBQzFCLGdCQUFnQixLQUNuQixRQUFRLEVBQUUsT0FBTyxFQUNqQixPQUFPLEVBQUU7Z0NBQ1AsSUFBSSxFQUFFLGdCQUFnQixDQUFDLFFBQVE7NkJBQ2hDLEVBQ0QsS0FBSyxFQUFFO2dDQUNMLE1BQU0sRUFBRSxjQUFjO2dDQUN0QixPQUFPLEVBQUUsT0FBTztnQ0FDaEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO2dDQUNoQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO2dDQUN4QyxpQkFBaUIsRUFBRSxNQUFNOzZCQUMxQixJQUNELENBQUM7d0JBQ0csTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDOzRCQUM3QixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7NEJBQ2hDLE1BQU0sRUFBRSxLQUFLLENBQUMsWUFBWTs0QkFDMUIsT0FBTyxFQUFFLEtBQUs7NEJBQ2QsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNOzRCQUN0QixhQUFhLEVBQUUsT0FBTyxDQUFDLGlCQUFpQjt5QkFDekMsQ0FBQyxDQUFDO3dCQUNzQixxQkFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtnQ0FDckQsU0FBUyxFQUFFLElBQUk7NkJBQ2hCLENBQUMsRUFBQTs7d0JBRkksZ0JBQWdCLEdBQUcsU0FFdkI7d0JBRUYsSUFBSSx5QkFDQyxJQUFJLEtBQ1AsS0FBSyx3QkFDQSxJQUFJLENBQUMsS0FBSyxLQUNiLGlCQUFpQixFQUFFLE1BQU0sRUFDekIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUV2RCxDQUFDOzs0QkFHSixzQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUM7OzthQUNuQjtJQTFDRCxDQTBDQyxDQUFDO0FBQ04sQ0FBQztBQUVELE1BQU0sQ0FBQyxJQUFNLHlDQUF5QyxHQUE2QjtJQUNqRixJQUFJLEVBQUUsWUFBWTtJQUNsQixJQUFJLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztJQUNwQyxJQUFJLEVBQUUsbUNBQW1DO0lBQ3pDLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLGlDQUFpQyxHQUFHLFVBQUMsTUFBMEIsSUFBMEIsT0FBQSxDQUFDO0lBQ3JHLFlBQVksRUFBRSxVQUFDLFdBQVc7UUFDeEIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxNQUFNLENBQUMsRUFBRSx5Q0FBeUMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7Q0FDRixDQUFDLEVBSm9HLENBSXBHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQgeyBTaWduYXR1cmVWNCB9IGZyb20gXCJAYXdzLXNkay9zaWduYXR1cmUtdjRcIjtcbmltcG9ydCB7XG4gIENyZWRlbnRpYWxzLFxuICBFbmRwb2ludCxcbiAgSGFzaENvbnN0cnVjdG9yLFxuICBJbml0aWFsaXplSGFuZGxlcixcbiAgSW5pdGlhbGl6ZUhhbmRsZXJBcmd1bWVudHMsXG4gIEluaXRpYWxpemVIYW5kbGVyT3B0aW9ucyxcbiAgSW5pdGlhbGl6ZUhhbmRsZXJPdXRwdXQsXG4gIEluaXRpYWxpemVNaWRkbGV3YXJlLFxuICBNZXRhZGF0YUJlYXJlcixcbiAgUGx1Z2dhYmxlLFxuICBQcm92aWRlcixcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1mb3JtYXQtdXJsXCI7XG5pbXBvcnQgeyBlc2NhcGVVcmkgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC11cmktZXNjYXBlXCI7XG5cbmludGVyZmFjZSBQcmV2aW91c2x5UmVzb2x2ZWQge1xuICBjcmVkZW50aWFsczogUHJvdmlkZXI8Q3JlZGVudGlhbHM+O1xuICBlbmRwb2ludDogUHJvdmlkZXI8RW5kcG9pbnQ+O1xuICByZWdpb246IFByb3ZpZGVyPHN0cmluZz47XG4gIHNoYTI1NjogSGFzaENvbnN0cnVjdG9yO1xuICBzaWduaW5nRXNjYXBlUGF0aDogYm9vbGVhbjtcbn1cblxuY29uc3QgdmVyc2lvbiA9IFwiMjAxNi0xMS0xNVwiO1xuXG4vL2FuIGluaXRpYWxpemUgbWlkZGxld2FyZSB0byBhZGQgUHJlc2lnblVybCB0byBpbnB1dFxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlTbmFwc2hvdFByZXNpZ25lZFVybE1pZGRsZXdhcmUob3B0aW9uczogUHJldmlvdXNseVJlc29sdmVkKTogSW5pdGlhbGl6ZU1pZGRsZXdhcmU8YW55LCBhbnk+IHtcbiAgcmV0dXJuIDxPdXRwdXQgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlcj4obmV4dDogSW5pdGlhbGl6ZUhhbmRsZXI8YW55LCBPdXRwdXQ+KTogSW5pdGlhbGl6ZUhhbmRsZXI8YW55LCBPdXRwdXQ+ID0+XG4gICAgYXN5bmMgKGFyZ3M6IEluaXRpYWxpemVIYW5kbGVyQXJndW1lbnRzPGFueT4pOiBQcm9taXNlPEluaXRpYWxpemVIYW5kbGVyT3V0cHV0PE91dHB1dD4+ID0+IHtcbiAgICAgIGNvbnN0IHsgaW5wdXQgfSA9IGFyZ3M7XG4gICAgICBpZiAoIWlucHV0LlByZXNpZ25lZFVybCkge1xuICAgICAgICBjb25zdCByZWdpb24gPSBhd2FpdCBvcHRpb25zLnJlZ2lvbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZEVuZHBvaW50ID0gYXdhaXQgb3B0aW9ucy5lbmRwb2ludCgpO1xuICAgICAgICByZXNvbHZlZEVuZHBvaW50Lmhvc3RuYW1lID0gYGVjMi4ke2lucHV0LlNvdXJjZVJlZ2lvbn0uYW1hem9uYXdzLmNvbWA7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgSHR0cFJlcXVlc3Qoe1xuICAgICAgICAgIC4uLnJlc29sdmVkRW5kcG9pbnQsXG4gICAgICAgICAgcHJvdG9jb2w6IFwiaHR0cHNcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBob3N0OiByZXNvbHZlZEVuZHBvaW50Lmhvc3RuYW1lLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIEFjdGlvbjogXCJDb3B5U25hcHNob3RcIixcbiAgICAgICAgICAgIFZlcnNpb246IHZlcnNpb24sXG4gICAgICAgICAgICBTb3VyY2VSZWdpb246IGlucHV0LlNvdXJjZVJlZ2lvbixcbiAgICAgICAgICAgIFNvdXJjZVNuYXBzaG90SWQ6IGlucHV0LlNvdXJjZVNuYXBzaG90SWQsXG4gICAgICAgICAgICBEZXN0aW5hdGlvblJlZ2lvbjogcmVnaW9uLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzaWduZXIgPSBuZXcgU2lnbmF0dXJlVjQoe1xuICAgICAgICAgIGNyZWRlbnRpYWxzOiBvcHRpb25zLmNyZWRlbnRpYWxzLFxuICAgICAgICAgIHJlZ2lvbjogaW5wdXQuU291cmNlUmVnaW9uLFxuICAgICAgICAgIHNlcnZpY2U6IFwiZWMyXCIsXG4gICAgICAgICAgc2hhMjU2OiBvcHRpb25zLnNoYTI1NixcbiAgICAgICAgICB1cmlFc2NhcGVQYXRoOiBvcHRpb25zLnNpZ25pbmdFc2NhcGVQYXRoLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcHJlc2lnbmVkUmVxdWVzdCA9IGF3YWl0IHNpZ25lci5wcmVzaWduKHJlcXVlc3QsIHtcbiAgICAgICAgICBleHBpcmVzSW46IDM2MDAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFyZ3MgPSB7XG4gICAgICAgICAgLi4uYXJncyxcbiAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgLi4uYXJncy5pbnB1dCxcbiAgICAgICAgICAgIERlc3RpbmF0aW9uUmVnaW9uOiByZWdpb24sXG4gICAgICAgICAgICBQcmVzaWduZWRVcmw6IGVzY2FwZVVyaShmb3JtYXRVcmwocHJlc2lnbmVkUmVxdWVzdCkpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0KGFyZ3MpO1xuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBjb3B5U25hcHNob3RQcmVzaWduZWRVcmxNaWRkbGV3YXJlT3B0aW9uczogSW5pdGlhbGl6ZUhhbmRsZXJPcHRpb25zID0ge1xuICBzdGVwOiBcImluaXRpYWxpemVcIixcbiAgdGFnczogW1wiQ1JPU1NfUkVHSU9OX1BSRVNJR05FRF9VUkxcIl0sXG4gIG5hbWU6IFwiY3Jvc3NSZWdpb25QcmVzaWduZWRVcmxNaWRkbGV3YXJlXCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldENvcHlTbmFwc2hvdFByZXNpZ25lZFVybFBsdWdpbiA9IChjb25maWc6IFByZXZpb3VzbHlSZXNvbHZlZCk6IFBsdWdnYWJsZTxhbnksIGFueT4gPT4gKHtcbiAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICBjbGllbnRTdGFjay5hZGQoY29weVNuYXBzaG90UHJlc2lnbmVkVXJsTWlkZGxld2FyZShjb25maWcpLCBjb3B5U25hcHNob3RQcmVzaWduZWRVcmxNaWRkbGV3YXJlT3B0aW9ucyk7XG4gIH0sXG59KTtcbiJdfQ==