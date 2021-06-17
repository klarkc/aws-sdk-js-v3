"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCopySnapshotPresignedUrlPlugin = exports.copySnapshotPresignedUrlMiddlewareOptions = exports.copySnapshotPresignedUrlMiddleware = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const signature_v4_1 = require("@aws-sdk/signature-v4");
const util_format_url_1 = require("@aws-sdk/util-format-url");
const util_uri_escape_1 = require("@aws-sdk/util-uri-escape");
const version = "2016-11-15";
//an initialize middleware to add PresignUrl to input
function copySnapshotPresignedUrlMiddleware(options) {
    return (next) => async (args) => {
        const { input } = args;
        if (!input.PresignedUrl) {
            const region = await options.region();
            const resolvedEndpoint = await options.endpoint();
            resolvedEndpoint.hostname = `ec2.${input.SourceRegion}.amazonaws.com`;
            const request = new protocol_http_1.HttpRequest({
                ...resolvedEndpoint,
                protocol: "https",
                headers: {
                    host: resolvedEndpoint.hostname,
                },
                query: {
                    Action: "CopySnapshot",
                    Version: version,
                    SourceRegion: input.SourceRegion,
                    SourceSnapshotId: input.SourceSnapshotId,
                    DestinationRegion: region,
                },
            });
            const signer = new signature_v4_1.SignatureV4({
                credentials: options.credentials,
                region: input.SourceRegion,
                service: "ec2",
                sha256: options.sha256,
                uriEscapePath: options.signingEscapePath,
            });
            const presignedRequest = await signer.presign(request, {
                expiresIn: 3600,
            });
            args = {
                ...args,
                input: {
                    ...args.input,
                    DestinationRegion: region,
                    PresignedUrl: util_uri_escape_1.escapeUri(util_format_url_1.formatUrl(presignedRequest)),
                },
            };
        }
        return next(args);
    };
}
exports.copySnapshotPresignedUrlMiddleware = copySnapshotPresignedUrlMiddleware;
exports.copySnapshotPresignedUrlMiddlewareOptions = {
    step: "initialize",
    tags: ["CROSS_REGION_PRESIGNED_URL"],
    name: "crossRegionPresignedUrlMiddleware",
    override: true,
};
const getCopySnapshotPresignedUrlPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.add(copySnapshotPresignedUrlMiddleware(config), exports.copySnapshotPresignedUrlMiddlewareOptions);
    },
});
exports.getCopySnapshotPresignedUrlPlugin = getCopySnapshotPresignedUrlPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMERBQXFEO0FBQ3JELHdEQUFvRDtBQWNwRCw4REFBcUQ7QUFDckQsOERBQXFEO0FBVXJELE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQztBQUU3QixxREFBcUQ7QUFDckQsU0FBZ0Isa0NBQWtDLENBQUMsT0FBMkI7SUFDNUUsT0FBTyxDQUFnQyxJQUFvQyxFQUFrQyxFQUFFLENBQzdHLEtBQUssRUFBRSxJQUFxQyxFQUE0QyxFQUFFO1FBQ3hGLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7WUFDdkIsTUFBTSxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEMsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsRCxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsT0FBTyxLQUFLLENBQUMsWUFBWSxnQkFBZ0IsQ0FBQztZQUN0RSxNQUFNLE9BQU8sR0FBRyxJQUFJLDJCQUFXLENBQUM7Z0JBQzlCLEdBQUcsZ0JBQWdCO2dCQUNuQixRQUFRLEVBQUUsT0FBTztnQkFDakIsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRO2lCQUNoQztnQkFDRCxLQUFLLEVBQUU7b0JBQ0wsTUFBTSxFQUFFLGNBQWM7b0JBQ3RCLE9BQU8sRUFBRSxPQUFPO29CQUNoQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7b0JBQ2hDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7b0JBQ3hDLGlCQUFpQixFQUFFLE1BQU07aUJBQzFCO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxNQUFNLEdBQUcsSUFBSSwwQkFBVyxDQUFDO2dCQUM3QixXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7Z0JBQ2hDLE1BQU0sRUFBRSxLQUFLLENBQUMsWUFBWTtnQkFDMUIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2dCQUN0QixhQUFhLEVBQUUsT0FBTyxDQUFDLGlCQUFpQjthQUN6QyxDQUFDLENBQUM7WUFDSCxNQUFNLGdCQUFnQixHQUFHLE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQ3JELFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztZQUVILElBQUksR0FBRztnQkFDTCxHQUFHLElBQUk7Z0JBQ1AsS0FBSyxFQUFFO29CQUNMLEdBQUcsSUFBSSxDQUFDLEtBQUs7b0JBQ2IsaUJBQWlCLEVBQUUsTUFBTTtvQkFDekIsWUFBWSxFQUFFLDJCQUFTLENBQUMsMkJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUNyRDthQUNGLENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUMsQ0FBQztBQUNOLENBQUM7QUE3Q0QsZ0ZBNkNDO0FBRVksUUFBQSx5Q0FBeUMsR0FBNkI7SUFDakYsSUFBSSxFQUFFLFlBQVk7SUFDbEIsSUFBSSxFQUFFLENBQUMsNEJBQTRCLENBQUM7SUFDcEMsSUFBSSxFQUFFLG1DQUFtQztJQUN6QyxRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFSyxNQUFNLGlDQUFpQyxHQUFHLENBQUMsTUFBMEIsRUFBdUIsRUFBRSxDQUFDLENBQUM7SUFDckcsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUU7UUFDNUIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxNQUFNLENBQUMsRUFBRSxpREFBeUMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7Q0FDRixDQUFDLENBQUM7QUFKVSxRQUFBLGlDQUFpQyxxQ0FJM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQgeyBTaWduYXR1cmVWNCB9IGZyb20gXCJAYXdzLXNkay9zaWduYXR1cmUtdjRcIjtcbmltcG9ydCB7XG4gIENyZWRlbnRpYWxzLFxuICBFbmRwb2ludCxcbiAgSGFzaENvbnN0cnVjdG9yLFxuICBJbml0aWFsaXplSGFuZGxlcixcbiAgSW5pdGlhbGl6ZUhhbmRsZXJBcmd1bWVudHMsXG4gIEluaXRpYWxpemVIYW5kbGVyT3B0aW9ucyxcbiAgSW5pdGlhbGl6ZUhhbmRsZXJPdXRwdXQsXG4gIEluaXRpYWxpemVNaWRkbGV3YXJlLFxuICBNZXRhZGF0YUJlYXJlcixcbiAgUGx1Z2dhYmxlLFxuICBQcm92aWRlcixcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1mb3JtYXQtdXJsXCI7XG5pbXBvcnQgeyBlc2NhcGVVcmkgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC11cmktZXNjYXBlXCI7XG5cbmludGVyZmFjZSBQcmV2aW91c2x5UmVzb2x2ZWQge1xuICBjcmVkZW50aWFsczogUHJvdmlkZXI8Q3JlZGVudGlhbHM+O1xuICBlbmRwb2ludDogUHJvdmlkZXI8RW5kcG9pbnQ+O1xuICByZWdpb246IFByb3ZpZGVyPHN0cmluZz47XG4gIHNoYTI1NjogSGFzaENvbnN0cnVjdG9yO1xuICBzaWduaW5nRXNjYXBlUGF0aDogYm9vbGVhbjtcbn1cblxuY29uc3QgdmVyc2lvbiA9IFwiMjAxNi0xMS0xNVwiO1xuXG4vL2FuIGluaXRpYWxpemUgbWlkZGxld2FyZSB0byBhZGQgUHJlc2lnblVybCB0byBpbnB1dFxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlTbmFwc2hvdFByZXNpZ25lZFVybE1pZGRsZXdhcmUob3B0aW9uczogUHJldmlvdXNseVJlc29sdmVkKTogSW5pdGlhbGl6ZU1pZGRsZXdhcmU8YW55LCBhbnk+IHtcbiAgcmV0dXJuIDxPdXRwdXQgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlcj4obmV4dDogSW5pdGlhbGl6ZUhhbmRsZXI8YW55LCBPdXRwdXQ+KTogSW5pdGlhbGl6ZUhhbmRsZXI8YW55LCBPdXRwdXQ+ID0+XG4gICAgYXN5bmMgKGFyZ3M6IEluaXRpYWxpemVIYW5kbGVyQXJndW1lbnRzPGFueT4pOiBQcm9taXNlPEluaXRpYWxpemVIYW5kbGVyT3V0cHV0PE91dHB1dD4+ID0+IHtcbiAgICAgIGNvbnN0IHsgaW5wdXQgfSA9IGFyZ3M7XG4gICAgICBpZiAoIWlucHV0LlByZXNpZ25lZFVybCkge1xuICAgICAgICBjb25zdCByZWdpb24gPSBhd2FpdCBvcHRpb25zLnJlZ2lvbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZEVuZHBvaW50ID0gYXdhaXQgb3B0aW9ucy5lbmRwb2ludCgpO1xuICAgICAgICByZXNvbHZlZEVuZHBvaW50Lmhvc3RuYW1lID0gYGVjMi4ke2lucHV0LlNvdXJjZVJlZ2lvbn0uYW1hem9uYXdzLmNvbWA7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgSHR0cFJlcXVlc3Qoe1xuICAgICAgICAgIC4uLnJlc29sdmVkRW5kcG9pbnQsXG4gICAgICAgICAgcHJvdG9jb2w6IFwiaHR0cHNcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBob3N0OiByZXNvbHZlZEVuZHBvaW50Lmhvc3RuYW1lLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIEFjdGlvbjogXCJDb3B5U25hcHNob3RcIixcbiAgICAgICAgICAgIFZlcnNpb246IHZlcnNpb24sXG4gICAgICAgICAgICBTb3VyY2VSZWdpb246IGlucHV0LlNvdXJjZVJlZ2lvbixcbiAgICAgICAgICAgIFNvdXJjZVNuYXBzaG90SWQ6IGlucHV0LlNvdXJjZVNuYXBzaG90SWQsXG4gICAgICAgICAgICBEZXN0aW5hdGlvblJlZ2lvbjogcmVnaW9uLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzaWduZXIgPSBuZXcgU2lnbmF0dXJlVjQoe1xuICAgICAgICAgIGNyZWRlbnRpYWxzOiBvcHRpb25zLmNyZWRlbnRpYWxzLFxuICAgICAgICAgIHJlZ2lvbjogaW5wdXQuU291cmNlUmVnaW9uLFxuICAgICAgICAgIHNlcnZpY2U6IFwiZWMyXCIsXG4gICAgICAgICAgc2hhMjU2OiBvcHRpb25zLnNoYTI1NixcbiAgICAgICAgICB1cmlFc2NhcGVQYXRoOiBvcHRpb25zLnNpZ25pbmdFc2NhcGVQYXRoLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcHJlc2lnbmVkUmVxdWVzdCA9IGF3YWl0IHNpZ25lci5wcmVzaWduKHJlcXVlc3QsIHtcbiAgICAgICAgICBleHBpcmVzSW46IDM2MDAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFyZ3MgPSB7XG4gICAgICAgICAgLi4uYXJncyxcbiAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgLi4uYXJncy5pbnB1dCxcbiAgICAgICAgICAgIERlc3RpbmF0aW9uUmVnaW9uOiByZWdpb24sXG4gICAgICAgICAgICBQcmVzaWduZWRVcmw6IGVzY2FwZVVyaShmb3JtYXRVcmwocHJlc2lnbmVkUmVxdWVzdCkpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0KGFyZ3MpO1xuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCBjb3B5U25hcHNob3RQcmVzaWduZWRVcmxNaWRkbGV3YXJlT3B0aW9uczogSW5pdGlhbGl6ZUhhbmRsZXJPcHRpb25zID0ge1xuICBzdGVwOiBcImluaXRpYWxpemVcIixcbiAgdGFnczogW1wiQ1JPU1NfUkVHSU9OX1BSRVNJR05FRF9VUkxcIl0sXG4gIG5hbWU6IFwiY3Jvc3NSZWdpb25QcmVzaWduZWRVcmxNaWRkbGV3YXJlXCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldENvcHlTbmFwc2hvdFByZXNpZ25lZFVybFBsdWdpbiA9IChjb25maWc6IFByZXZpb3VzbHlSZXNvbHZlZCk6IFBsdWdnYWJsZTxhbnksIGFueT4gPT4gKHtcbiAgYXBwbHlUb1N0YWNrOiAoY2xpZW50U3RhY2spID0+IHtcbiAgICBjbGllbnRTdGFjay5hZGQoY29weVNuYXBzaG90UHJlc2lnbmVkVXJsTWlkZGxld2FyZShjb25maWcpLCBjb3B5U25hcHNob3RQcmVzaWduZWRVcmxNaWRkbGV3YXJlT3B0aW9ucyk7XG4gIH0sXG59KTtcbiJdfQ==