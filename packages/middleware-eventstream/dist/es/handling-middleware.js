import { __awaiter, __generator } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
export var eventStreamHandlingMiddleware = function (options) {
    return function (next, context) {
        return function (args) { return __awaiter(void 0, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = args.request;
                if (!HttpRequest.isInstance(request))
                    return [2 /*return*/, next(args)];
                return [2 /*return*/, options.eventStreamPayloadHandler.handle(next, args, context)];
            });
        }); };
    };
};
export var eventStreamHandlingMiddlewareOptions = {
    tags: ["EVENT_STREAM", "SIGNATURE", "HANDLE"],
    name: "eventStreamHandlingMiddleware",
    relation: "after",
    toMiddleware: "awsAuthMiddleware",
    override: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxpbmctbWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oYW5kbGluZy1taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLckQsTUFBTSxDQUFDLElBQU0sNkJBQTZCLEdBQ3hDLFVBQUMsT0FBa0M7SUFDbkMsT0FBQSxVQUFDLElBQUksRUFBRSxPQUFPO1FBQ2QsT0FBQSxVQUFPLElBQUk7OztnQkFDRCxPQUFPLEdBQUssSUFBSSxRQUFULENBQVU7Z0JBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztvQkFBRSxzQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUM7Z0JBQ3hELHNCQUFPLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsRUFBQzs7YUFDdEU7SUFKRCxDQUlDO0FBTEQsQ0FLQyxDQUFDO0FBRUosTUFBTSxDQUFDLElBQU0sb0NBQW9DLEdBQThCO0lBQzdFLElBQUksRUFBRSxDQUFDLGNBQWMsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDO0lBQzdDLElBQUksRUFBRSwrQkFBK0I7SUFDckMsUUFBUSxFQUFFLE9BQU87SUFDakIsWUFBWSxFQUFFLG1CQUFtQjtJQUNqQyxRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQgeyBGaW5hbGl6ZVJlcXVlc3RNaWRkbGV3YXJlLCBSZWxhdGl2ZU1pZGRsZXdhcmVPcHRpb25zIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmltcG9ydCB7IEV2ZW50U3RyZWFtUmVzb2x2ZWRDb25maWcgfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBldmVudFN0cmVhbUhhbmRsaW5nTWlkZGxld2FyZSA9XG4gIChvcHRpb25zOiBFdmVudFN0cmVhbVJlc29sdmVkQ29uZmlnKTogRmluYWxpemVSZXF1ZXN0TWlkZGxld2FyZTxhbnksIGFueT4gPT5cbiAgKG5leHQsIGNvbnRleHQpID0+XG4gIGFzeW5jIChhcmdzKSA9PiB7XG4gICAgY29uc3QgeyByZXF1ZXN0IH0gPSBhcmdzO1xuICAgIGlmICghSHR0cFJlcXVlc3QuaXNJbnN0YW5jZShyZXF1ZXN0KSkgcmV0dXJuIG5leHQoYXJncyk7XG4gICAgcmV0dXJuIG9wdGlvbnMuZXZlbnRTdHJlYW1QYXlsb2FkSGFuZGxlci5oYW5kbGUobmV4dCwgYXJncywgY29udGV4dCk7XG4gIH07XG5cbmV4cG9ydCBjb25zdCBldmVudFN0cmVhbUhhbmRsaW5nTWlkZGxld2FyZU9wdGlvbnM6IFJlbGF0aXZlTWlkZGxld2FyZU9wdGlvbnMgPSB7XG4gIHRhZ3M6IFtcIkVWRU5UX1NUUkVBTVwiLCBcIlNJR05BVFVSRVwiLCBcIkhBTkRMRVwiXSxcbiAgbmFtZTogXCJldmVudFN0cmVhbUhhbmRsaW5nTWlkZGxld2FyZVwiLFxuICByZWxhdGlvbjogXCJhZnRlclwiLFxuICB0b01pZGRsZXdhcmU6IFwiYXdzQXV0aE1pZGRsZXdhcmVcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59O1xuIl19