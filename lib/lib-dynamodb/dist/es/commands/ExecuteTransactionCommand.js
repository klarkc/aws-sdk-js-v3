import { __assign, __awaiter, __extends, __generator } from "tslib";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import { ExecuteTransactionCommand as __ExecuteTransactionCommand, } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * ExecuteTransactionCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
var ExecuteTransactionCommand = /** @class */ (function (_super) {
    __extends(ExecuteTransactionCommand, _super);
    function ExecuteTransactionCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        _this.inputKeyNodes = [{ key: "TransactStatements", children: [{ key: "Parameters" }] }];
        _this.outputKeyNodes = [{ key: "Responses", children: [{ key: "Item" }] }];
        return _this;
    }
    /**
     * @internal
     */
    ExecuteTransactionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        var _this = this;
        var _a = configuration.translateConfig || {}, marshallOptions = _a.marshallOptions, unmarshallOptions = _a.unmarshallOptions;
        var command = new __ExecuteTransactionCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
        var handler = command.resolveMiddleware(clientStack, configuration, options);
        return function () { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, handler(command)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, __assign(__assign({}, data), { output: unmarshallOutput(data.output, this.outputKeyNodes, unmarshallOptions) })];
                }
            });
        }); };
    };
    return ExecuteTransactionCommand;
}($Command));
export { ExecuteTransactionCommand };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhlY3V0ZVRyYW5zYWN0aW9uQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9FeGVjdXRlVHJhbnNhY3Rpb25Db21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEUsT0FBTyxFQUdMLHlCQUF5QixJQUFJLDJCQUEyQixHQUd6RCxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFrQjdEOzs7Ozs7R0FNRztBQUNIO0lBQStDLDZDQUk5QztJQUlDLG1DQUFxQixLQUFxQztRQUExRCxZQUNFLGlCQUFPLFNBQ1I7UUFGb0IsV0FBSyxHQUFMLEtBQUssQ0FBZ0M7UUFIekMsbUJBQWEsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLG9CQUFjLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7O0lBSXRGLENBQUM7SUFFRDs7T0FFRztJQUNILHFEQUFpQixHQUFqQixVQUNFLFdBQW1FLEVBQ25FLGFBQW1ELEVBQ25ELE9BQThCO1FBSGhDLGlCQWdCQztRQVhPLElBQUEsS0FBeUMsYUFBYSxDQUFDLGVBQWUsSUFBSSxFQUFFLEVBQTFFLGVBQWUscUJBQUEsRUFBRSxpQkFBaUIsdUJBQXdDLENBQUM7UUFDbkYsSUFBTSxPQUFPLEdBQUcsSUFBSSwyQkFBMkIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDaEgsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFL0UsT0FBTzs7Ozs0QkFDUSxxQkFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUE7O3dCQUE3QixJQUFJLEdBQUcsU0FBc0I7d0JBQ25DLDRDQUNLLElBQUksS0FDUCxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLEtBQzdFOzs7YUFDSCxDQUFDO0lBQ0osQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0FBQyxBQWhDRCxDQUErQyxRQUFRLEdBZ0N0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtb0RCRG9jdW1lbnRDbGllbnRSZXNvbHZlZENvbmZpZywgU2VydmljZUlucHV0VHlwZXMsIFNlcnZpY2VPdXRwdXRUeXBlcyB9IGZyb20gXCIuLi9EeW5hbW9EQkRvY3VtZW50Q2xpZW50XCI7XG5pbXBvcnQgeyBtYXJzaGFsbElucHV0LCB1bm1hcnNoYWxsT3V0cHV0IH0gZnJvbSBcIi4uL2NvbW1hbmRzL3V0aWxzXCI7XG5pbXBvcnQge1xuICBJdGVtUmVzcG9uc2UsXG4gIFBhcmFtZXRlcml6ZWRTdGF0ZW1lbnQsXG4gIEV4ZWN1dGVUcmFuc2FjdGlvbkNvbW1hbmQgYXMgX19FeGVjdXRlVHJhbnNhY3Rpb25Db21tYW5kLFxuICBFeGVjdXRlVHJhbnNhY3Rpb25Db21tYW5kSW5wdXQgYXMgX19FeGVjdXRlVHJhbnNhY3Rpb25Db21tYW5kSW5wdXQsXG4gIEV4ZWN1dGVUcmFuc2FjdGlvbkNvbW1hbmRPdXRwdXQgYXMgX19FeGVjdXRlVHJhbnNhY3Rpb25Db21tYW5kT3V0cHV0LFxufSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LWR5bmFtb2RiXCI7XG5pbXBvcnQgeyBDb21tYW5kIGFzICRDb21tYW5kIH0gZnJvbSBcIkBhd3Mtc2RrL3NtaXRoeS1jbGllbnRcIjtcbmltcG9ydCB7IEhhbmRsZXIsIE1pZGRsZXdhcmVTdGFjaywgSHR0cEhhbmRsZXJPcHRpb25zIGFzIF9fSHR0cEhhbmRsZXJPcHRpb25zIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9IGZyb20gXCJAYXdzLXNkay91dGlsLWR5bmFtb2RiXCI7XG5cbmV4cG9ydCB0eXBlIEV4ZWN1dGVUcmFuc2FjdGlvbkNvbW1hbmRJbnB1dCA9IE9taXQ8X19FeGVjdXRlVHJhbnNhY3Rpb25Db21tYW5kSW5wdXQsIFwiVHJhbnNhY3RTdGF0ZW1lbnRzXCI+ICYge1xuICBUcmFuc2FjdFN0YXRlbWVudHM6XG4gICAgfCAoT21pdDxQYXJhbWV0ZXJpemVkU3RhdGVtZW50LCBcIlBhcmFtZXRlcnNcIj4gJiB7XG4gICAgICAgIFBhcmFtZXRlcnM/OiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZVtdO1xuICAgICAgfSlbXVxuICAgIHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IHR5cGUgRXhlY3V0ZVRyYW5zYWN0aW9uQ29tbWFuZE91dHB1dCA9IE9taXQ8X19FeGVjdXRlVHJhbnNhY3Rpb25Db21tYW5kT3V0cHV0LCBcIlJlc3BvbnNlc1wiPiAmIHtcbiAgUmVzcG9uc2VzPzogKE9taXQ8SXRlbVJlc3BvbnNlLCBcIkl0ZW1cIj4gJiB7XG4gICAgSXRlbT86IHsgW2tleTogc3RyaW5nXTogTmF0aXZlQXR0cmlidXRlVmFsdWUgfTtcbiAgfSlbXTtcbn07XG5cbi8qKlxuICogQWNjZXB0cyBuYXRpdmUgSmF2YVNjcmlwdCB0eXBlcyBpbnN0ZWFkIG9mIGBBdHRyaWJ1dGVWYWx1ZWBzLCBhbmQgY2FsbHNcbiAqIEV4ZWN1dGVUcmFuc2FjdGlvbkNvbW1hbmQgb3BlcmF0aW9uIGZyb20ge0BsaW5rIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL0Bhd3Mtc2RrL2NsaWVudC1keW5hbW9kYiBAYXdzLXNkay9jbGllbnQtZHluYW1vZGJ9LlxuICpcbiAqIEphdmFTY3JpcHQgb2JqZWN0cyBwYXNzZWQgaW4gYXMgcGFyYW1ldGVycyBhcmUgbWFyc2hhbGxlZCBpbnRvIGBBdHRyaWJ1dGVWYWx1ZWAgc2hhcGVzXG4gKiByZXF1aXJlZCBieSBBbWF6b24gRHluYW1vREIuIFJlc3BvbnNlcyBmcm9tIER5bmFtb0RCIGFyZSB1bm1hcnNoYWxsZWQgaW50byBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGVjdXRlVHJhbnNhY3Rpb25Db21tYW5kIGV4dGVuZHMgJENvbW1hbmQ8XG4gIEV4ZWN1dGVUcmFuc2FjdGlvbkNvbW1hbmRJbnB1dCxcbiAgRXhlY3V0ZVRyYW5zYWN0aW9uQ29tbWFuZE91dHB1dCxcbiAgRHluYW1vREJEb2N1bWVudENsaWVudFJlc29sdmVkQ29uZmlnXG4+IHtcbiAgcHJpdmF0ZSByZWFkb25seSBpbnB1dEtleU5vZGVzID0gW3sga2V5OiBcIlRyYW5zYWN0U3RhdGVtZW50c1wiLCBjaGlsZHJlbjogW3sga2V5OiBcIlBhcmFtZXRlcnNcIiB9XSB9XTtcbiAgcHJpdmF0ZSByZWFkb25seSBvdXRwdXRLZXlOb2RlcyA9IFt7IGtleTogXCJSZXNwb25zZXNcIiwgY2hpbGRyZW46IFt7IGtleTogXCJJdGVtXCIgfV0gfV07XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgaW5wdXQ6IEV4ZWN1dGVUcmFuc2FjdGlvbkNvbW1hbmRJbnB1dCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICByZXNvbHZlTWlkZGxld2FyZShcbiAgICBjbGllbnRTdGFjazogTWlkZGxld2FyZVN0YWNrPFNlcnZpY2VJbnB1dFR5cGVzLCBTZXJ2aWNlT3V0cHV0VHlwZXM+LFxuICAgIGNvbmZpZ3VyYXRpb246IER5bmFtb0RCRG9jdW1lbnRDbGllbnRSZXNvbHZlZENvbmZpZyxcbiAgICBvcHRpb25zPzogX19IdHRwSGFuZGxlck9wdGlvbnNcbiAgKTogSGFuZGxlcjxFeGVjdXRlVHJhbnNhY3Rpb25Db21tYW5kSW5wdXQsIEV4ZWN1dGVUcmFuc2FjdGlvbkNvbW1hbmRPdXRwdXQ+IHtcbiAgICBjb25zdCB7IG1hcnNoYWxsT3B0aW9ucywgdW5tYXJzaGFsbE9wdGlvbnMgfSA9IGNvbmZpZ3VyYXRpb24udHJhbnNsYXRlQ29uZmlnIHx8IHt9O1xuICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgX19FeGVjdXRlVHJhbnNhY3Rpb25Db21tYW5kKG1hcnNoYWxsSW5wdXQodGhpcy5pbnB1dCwgdGhpcy5pbnB1dEtleU5vZGVzLCBtYXJzaGFsbE9wdGlvbnMpKTtcbiAgICBjb25zdCBoYW5kbGVyID0gY29tbWFuZC5yZXNvbHZlTWlkZGxld2FyZShjbGllbnRTdGFjaywgY29uZmlndXJhdGlvbiwgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGhhbmRsZXIoY29tbWFuZCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kYXRhLFxuICAgICAgICBvdXRwdXQ6IHVubWFyc2hhbGxPdXRwdXQoZGF0YS5vdXRwdXQsIHRoaXMub3V0cHV0S2V5Tm9kZXMsIHVubWFyc2hhbGxPcHRpb25zKSxcbiAgICAgIH07XG4gICAgfTtcbiAgfVxufVxuIl19