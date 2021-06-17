"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpointDiscoveryMiddleware = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const getCacheKey_1 = require("./getCacheKey");
const updateDiscoveredEndpointInCache_1 = require("./updateDiscoveredEndpointInCache");
const endpointDiscoveryMiddleware = (config, middlewareConfig) => (next, context) => async (args) => {
    if (config.isCustomEndpoint) {
        if (config.isClientEndpointDiscoveryEnabled) {
            throw new Error(`Custom endpoint is supplied; endpointDiscoveryEnabled must not be true.`);
        }
        return next(args);
    }
    const { endpointDiscoveryCommandCtor } = config;
    const { isDiscoveredEndpointRequired, identifiers } = middlewareConfig;
    const { clientName, commandName } = context;
    const isEndpointDiscoveryEnabled = await config.endpointDiscoveryEnabled();
    const cacheKey = await getCacheKey_1.getCacheKey(commandName, config, { identifiers });
    if (isDiscoveredEndpointRequired) {
        // throw error if endpoint discovery is required, and it's explicitly disabled.
        if (isEndpointDiscoveryEnabled === false) {
            throw new Error(`Endpoint Discovery is disabled but ${commandName} on ${clientName} requires it.` +
                ` Please check your configurations.`);
        }
        // call await on Endpoint Discovery API utility so that function blocks
        // till discovered endpoint is updated in cache
        await updateDiscoveredEndpointInCache_1.updateDiscoveredEndpointInCache(config, {
            ...middlewareConfig,
            commandName,
            cacheKey,
            endpointDiscoveryCommandCtor,
        });
    }
    else if (isEndpointDiscoveryEnabled) {
        // Discover endpoints only if endpoint discovery is explicitly enabled.
        // Do not call await await on Endpoint Discovery API utility so that function
        // does not block, the command will use discovered endpoint, if available.
        updateDiscoveredEndpointInCache_1.updateDiscoveredEndpointInCache(config, {
            ...middlewareConfig,
            commandName,
            cacheKey,
            endpointDiscoveryCommandCtor,
        });
    }
    const { request } = args;
    if (cacheKey && protocol_http_1.HttpRequest.isInstance(request)) {
        const endpoint = config.endpointCache.getEndpoint(cacheKey);
        if (endpoint) {
            request.hostname = endpoint;
        }
    }
    return next(args);
};
exports.endpointDiscoveryMiddleware = endpointDiscoveryMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kcG9pbnREaXNjb3ZlcnlNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VuZHBvaW50RGlzY292ZXJ5TWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBcUQ7QUFTckQsK0NBQTRDO0FBRzVDLHVGQUFvRjtBQUU3RSxNQUFNLDJCQUEyQixHQUN0QyxDQUFDLE1BQTRELEVBQUUsZ0JBQW1ELEVBQUUsRUFBRSxDQUN0SCxDQUNFLElBQStCLEVBQy9CLE9BQWdDLEVBQ0wsRUFBRSxDQUMvQixLQUFLLEVBQUUsSUFBZ0MsRUFBdUMsRUFBRTtJQUM5RSxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRTtRQUMzQixJQUFJLE1BQU0sQ0FBQyxnQ0FBZ0MsRUFBRTtZQUMzQyxNQUFNLElBQUksS0FBSyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7U0FDNUY7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQjtJQUVELE1BQU0sRUFBRSw0QkFBNEIsRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUNoRCxNQUFNLEVBQUUsNEJBQTRCLEVBQUUsV0FBVyxFQUFFLEdBQUcsZ0JBQWdCLENBQUM7SUFDdkUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLENBQUM7SUFDNUMsTUFBTSwwQkFBMEIsR0FBRyxNQUFNLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQzNFLE1BQU0sUUFBUSxHQUFHLE1BQU0seUJBQVcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUV6RSxJQUFJLDRCQUE0QixFQUFFO1FBQ2hDLCtFQUErRTtRQUMvRSxJQUFJLDBCQUEwQixLQUFLLEtBQUssRUFBRTtZQUN4QyxNQUFNLElBQUksS0FBSyxDQUNiLHNDQUFzQyxXQUFXLE9BQU8sVUFBVSxlQUFlO2dCQUMvRSxvQ0FBb0MsQ0FDdkMsQ0FBQztTQUNIO1FBQ0QsdUVBQXVFO1FBQ3ZFLCtDQUErQztRQUMvQyxNQUFNLGlFQUErQixDQUFDLE1BQU0sRUFBRTtZQUM1QyxHQUFHLGdCQUFnQjtZQUNuQixXQUFXO1lBQ1gsUUFBUTtZQUNSLDRCQUE0QjtTQUM3QixDQUFDLENBQUM7S0FDSjtTQUFNLElBQUksMEJBQTBCLEVBQUU7UUFDckMsdUVBQXVFO1FBQ3ZFLDZFQUE2RTtRQUM3RSwwRUFBMEU7UUFDMUUsaUVBQStCLENBQUMsTUFBTSxFQUFFO1lBQ3RDLEdBQUcsZ0JBQWdCO1lBQ25CLFdBQVc7WUFDWCxRQUFRO1lBQ1IsNEJBQTRCO1NBQzdCLENBQUMsQ0FBQztLQUNKO0lBRUQsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztJQUN6QixJQUFJLFFBQVEsSUFBSSwyQkFBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUMvQyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxJQUFJLFFBQVEsRUFBRTtZQUNaLE9BQU8sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzdCO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUM7QUF6RFMsUUFBQSwyQkFBMkIsK0JBeURwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7XG4gIEJ1aWxkSGFuZGxlcixcbiAgQnVpbGRIYW5kbGVyQXJndW1lbnRzLFxuICBCdWlsZEhhbmRsZXJPdXRwdXQsXG4gIEhhbmRsZXJFeGVjdXRpb25Db250ZXh0LFxuICBNZXRhZGF0YUJlYXJlcixcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmltcG9ydCB7IGdldENhY2hlS2V5IH0gZnJvbSBcIi4vZ2V0Q2FjaGVLZXlcIjtcbmltcG9ydCB7IEVuZHBvaW50RGlzY292ZXJ5TWlkZGxld2FyZUNvbmZpZyB9IGZyb20gXCIuL2dldEVuZHBvaW50RGlzY292ZXJ5UGx1Z2luXCI7XG5pbXBvcnQgeyBFbmRwb2ludERpc2NvdmVyeVJlc29sdmVkQ29uZmlnLCBQcmV2aW91c2x5UmVzb2x2ZWQgfSBmcm9tIFwiLi9yZXNvbHZlRW5kcG9pbnREaXNjb3ZlcnlDb25maWdcIjtcbmltcG9ydCB7IHVwZGF0ZURpc2NvdmVyZWRFbmRwb2ludEluQ2FjaGUgfSBmcm9tIFwiLi91cGRhdGVEaXNjb3ZlcmVkRW5kcG9pbnRJbkNhY2hlXCI7XG5cbmV4cG9ydCBjb25zdCBlbmRwb2ludERpc2NvdmVyeU1pZGRsZXdhcmUgPVxuICAoY29uZmlnOiBFbmRwb2ludERpc2NvdmVyeVJlc29sdmVkQ29uZmlnICYgUHJldmlvdXNseVJlc29sdmVkLCBtaWRkbGV3YXJlQ29uZmlnOiBFbmRwb2ludERpc2NvdmVyeU1pZGRsZXdhcmVDb25maWcpID0+XG4gIDxPdXRwdXQgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlciA9IE1ldGFkYXRhQmVhcmVyPihcbiAgICBuZXh0OiBCdWlsZEhhbmRsZXI8YW55LCBPdXRwdXQ+LFxuICAgIGNvbnRleHQ6IEhhbmRsZXJFeGVjdXRpb25Db250ZXh0XG4gICk6IEJ1aWxkSGFuZGxlcjxhbnksIE91dHB1dD4gPT5cbiAgYXN5bmMgKGFyZ3M6IEJ1aWxkSGFuZGxlckFyZ3VtZW50czxhbnk+KTogUHJvbWlzZTxCdWlsZEhhbmRsZXJPdXRwdXQ8T3V0cHV0Pj4gPT4ge1xuICAgIGlmIChjb25maWcuaXNDdXN0b21FbmRwb2ludCkge1xuICAgICAgaWYgKGNvbmZpZy5pc0NsaWVudEVuZHBvaW50RGlzY292ZXJ5RW5hYmxlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEN1c3RvbSBlbmRwb2ludCBpcyBzdXBwbGllZDsgZW5kcG9pbnREaXNjb3ZlcnlFbmFibGVkIG11c3Qgbm90IGJlIHRydWUuYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dChhcmdzKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGVuZHBvaW50RGlzY292ZXJ5Q29tbWFuZEN0b3IgfSA9IGNvbmZpZztcbiAgICBjb25zdCB7IGlzRGlzY292ZXJlZEVuZHBvaW50UmVxdWlyZWQsIGlkZW50aWZpZXJzIH0gPSBtaWRkbGV3YXJlQ29uZmlnO1xuICAgIGNvbnN0IHsgY2xpZW50TmFtZSwgY29tbWFuZE5hbWUgfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgaXNFbmRwb2ludERpc2NvdmVyeUVuYWJsZWQgPSBhd2FpdCBjb25maWcuZW5kcG9pbnREaXNjb3ZlcnlFbmFibGVkKCk7XG4gICAgY29uc3QgY2FjaGVLZXkgPSBhd2FpdCBnZXRDYWNoZUtleShjb21tYW5kTmFtZSwgY29uZmlnLCB7IGlkZW50aWZpZXJzIH0pO1xuXG4gICAgaWYgKGlzRGlzY292ZXJlZEVuZHBvaW50UmVxdWlyZWQpIHtcbiAgICAgIC8vIHRocm93IGVycm9yIGlmIGVuZHBvaW50IGRpc2NvdmVyeSBpcyByZXF1aXJlZCwgYW5kIGl0J3MgZXhwbGljaXRseSBkaXNhYmxlZC5cbiAgICAgIGlmIChpc0VuZHBvaW50RGlzY292ZXJ5RW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBFbmRwb2ludCBEaXNjb3ZlcnkgaXMgZGlzYWJsZWQgYnV0ICR7Y29tbWFuZE5hbWV9IG9uICR7Y2xpZW50TmFtZX0gcmVxdWlyZXMgaXQuYCArXG4gICAgICAgICAgICBgIFBsZWFzZSBjaGVjayB5b3VyIGNvbmZpZ3VyYXRpb25zLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIC8vIGNhbGwgYXdhaXQgb24gRW5kcG9pbnQgRGlzY292ZXJ5IEFQSSB1dGlsaXR5IHNvIHRoYXQgZnVuY3Rpb24gYmxvY2tzXG4gICAgICAvLyB0aWxsIGRpc2NvdmVyZWQgZW5kcG9pbnQgaXMgdXBkYXRlZCBpbiBjYWNoZVxuICAgICAgYXdhaXQgdXBkYXRlRGlzY292ZXJlZEVuZHBvaW50SW5DYWNoZShjb25maWcsIHtcbiAgICAgICAgLi4ubWlkZGxld2FyZUNvbmZpZyxcbiAgICAgICAgY29tbWFuZE5hbWUsXG4gICAgICAgIGNhY2hlS2V5LFxuICAgICAgICBlbmRwb2ludERpc2NvdmVyeUNvbW1hbmRDdG9yLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc0VuZHBvaW50RGlzY292ZXJ5RW5hYmxlZCkge1xuICAgICAgLy8gRGlzY292ZXIgZW5kcG9pbnRzIG9ubHkgaWYgZW5kcG9pbnQgZGlzY292ZXJ5IGlzIGV4cGxpY2l0bHkgZW5hYmxlZC5cbiAgICAgIC8vIERvIG5vdCBjYWxsIGF3YWl0IGF3YWl0IG9uIEVuZHBvaW50IERpc2NvdmVyeSBBUEkgdXRpbGl0eSBzbyB0aGF0IGZ1bmN0aW9uXG4gICAgICAvLyBkb2VzIG5vdCBibG9jaywgdGhlIGNvbW1hbmQgd2lsbCB1c2UgZGlzY292ZXJlZCBlbmRwb2ludCwgaWYgYXZhaWxhYmxlLlxuICAgICAgdXBkYXRlRGlzY292ZXJlZEVuZHBvaW50SW5DYWNoZShjb25maWcsIHtcbiAgICAgICAgLi4ubWlkZGxld2FyZUNvbmZpZyxcbiAgICAgICAgY29tbWFuZE5hbWUsXG4gICAgICAgIGNhY2hlS2V5LFxuICAgICAgICBlbmRwb2ludERpc2NvdmVyeUNvbW1hbmRDdG9yLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgeyByZXF1ZXN0IH0gPSBhcmdzO1xuICAgIGlmIChjYWNoZUtleSAmJiBIdHRwUmVxdWVzdC5pc0luc3RhbmNlKHJlcXVlc3QpKSB7XG4gICAgICBjb25zdCBlbmRwb2ludCA9IGNvbmZpZy5lbmRwb2ludENhY2hlLmdldEVuZHBvaW50KGNhY2hlS2V5KTtcbiAgICAgIGlmIChlbmRwb2ludCkge1xuICAgICAgICByZXF1ZXN0Lmhvc3RuYW1lID0gZW5kcG9pbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoYXJncyk7XG4gIH07XG4iXX0=