import { __assign, __awaiter, __extends, __generator } from "tslib";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import { TransactGetItemsCommand as __TransactGetItemsCommand, } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * TransactGetItemsCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
var TransactGetCommand = /** @class */ (function (_super) {
    __extends(TransactGetCommand, _super);
    function TransactGetCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        _this.inputKeyNodes = [{ key: "TransactItems", children: [{ key: "Get", children: [{ key: "Key" }] }] }];
        _this.outputKeyNodes = [{ key: "Responses", children: [{ key: "Item" }] }];
        return _this;
    }
    /**
     * @internal
     */
    TransactGetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        var _this = this;
        var _a = configuration.translateConfig || {}, marshallOptions = _a.marshallOptions, unmarshallOptions = _a.unmarshallOptions;
        var command = new __TransactGetItemsCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
    return TransactGetCommand;
}($Command));
export { TransactGetCommand };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3RHZXRDb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL1RyYW5zYWN0R2V0Q29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BFLE9BQU8sRUFJTCx1QkFBdUIsSUFBSSx5QkFBeUIsR0FHckQsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsT0FBTyxJQUFJLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBc0I3RDs7Ozs7O0dBTUc7QUFDSDtJQUF3QyxzQ0FJdkM7SUFJQyw0QkFBcUIsS0FBOEI7UUFBbkQsWUFDRSxpQkFBTyxTQUNSO1FBRm9CLFdBQUssR0FBTCxLQUFLLENBQXlCO1FBSGxDLG1CQUFhLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuRyxvQkFBYyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztJQUl0RixDQUFDO0lBRUQ7O09BRUc7SUFDSCw4Q0FBaUIsR0FBakIsVUFDRSxXQUFtRSxFQUNuRSxhQUFtRCxFQUNuRCxPQUE4QjtRQUhoQyxpQkFnQkM7UUFYTyxJQUFBLEtBQXlDLGFBQWEsQ0FBQyxlQUFlLElBQUksRUFBRSxFQUExRSxlQUFlLHFCQUFBLEVBQUUsaUJBQWlCLHVCQUF3QyxDQUFDO1FBQ25GLElBQU0sT0FBTyxHQUFHLElBQUkseUJBQXlCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQzlHLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRS9FLE9BQU87Ozs7NEJBQ1EscUJBQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBN0IsSUFBSSxHQUFHLFNBQXNCO3dCQUNuQyw0Q0FDSyxJQUFJLEtBQ1AsTUFBTSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxLQUM3RTs7O2FBQ0gsQ0FBQztJQUNKLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFoQ0QsQ0FBd0MsUUFBUSxHQWdDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbW9EQkRvY3VtZW50Q2xpZW50UmVzb2x2ZWRDb25maWcsIFNlcnZpY2VJbnB1dFR5cGVzLCBTZXJ2aWNlT3V0cHV0VHlwZXMgfSBmcm9tIFwiLi4vRHluYW1vREJEb2N1bWVudENsaWVudFwiO1xuaW1wb3J0IHsgbWFyc2hhbGxJbnB1dCwgdW5tYXJzaGFsbE91dHB1dCB9IGZyb20gXCIuLi9jb21tYW5kcy91dGlsc1wiO1xuaW1wb3J0IHtcbiAgR2V0LFxuICBJdGVtUmVzcG9uc2UsXG4gIFRyYW5zYWN0R2V0SXRlbSxcbiAgVHJhbnNhY3RHZXRJdGVtc0NvbW1hbmQgYXMgX19UcmFuc2FjdEdldEl0ZW1zQ29tbWFuZCxcbiAgVHJhbnNhY3RHZXRJdGVtc0NvbW1hbmRJbnB1dCBhcyBfX1RyYW5zYWN0R2V0SXRlbXNDb21tYW5kSW5wdXQsXG4gIFRyYW5zYWN0R2V0SXRlbXNDb21tYW5kT3V0cHV0IGFzIF9fVHJhbnNhY3RHZXRJdGVtc0NvbW1hbmRPdXRwdXQsXG59IGZyb20gXCJAYXdzLXNkay9jbGllbnQtZHluYW1vZGJcIjtcbmltcG9ydCB7IENvbW1hbmQgYXMgJENvbW1hbmQgfSBmcm9tIFwiQGF3cy1zZGsvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgSGFuZGxlciwgTWlkZGxld2FyZVN0YWNrLCBIdHRwSGFuZGxlck9wdGlvbnMgYXMgX19IdHRwSGFuZGxlck9wdGlvbnMgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtZHluYW1vZGJcIjtcblxuZXhwb3J0IHR5cGUgVHJhbnNhY3RHZXRDb21tYW5kSW5wdXQgPSBPbWl0PF9fVHJhbnNhY3RHZXRJdGVtc0NvbW1hbmRJbnB1dCwgXCJUcmFuc2FjdEl0ZW1zXCI+ICYge1xuICBUcmFuc2FjdEl0ZW1zOlxuICAgIHwgKE9taXQ8VHJhbnNhY3RHZXRJdGVtLCBcIkdldFwiPiAmIHtcbiAgICAgICAgR2V0OlxuICAgICAgICAgIHwgKE9taXQ8R2V0LCBcIktleVwiPiAmIHtcbiAgICAgICAgICAgICAgS2V5OiB7IFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH0gfCB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIHwgdW5kZWZpbmVkO1xuICAgICAgfSlbXVxuICAgIHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IHR5cGUgVHJhbnNhY3RHZXRDb21tYW5kT3V0cHV0ID0gT21pdDxfX1RyYW5zYWN0R2V0SXRlbXNDb21tYW5kT3V0cHV0LCBcIlJlc3BvbnNlc1wiPiAmIHtcbiAgUmVzcG9uc2VzPzogKE9taXQ8SXRlbVJlc3BvbnNlLCBcIkl0ZW1cIj4gJiB7XG4gICAgSXRlbT86IHsgW2tleTogc3RyaW5nXTogTmF0aXZlQXR0cmlidXRlVmFsdWUgfTtcbiAgfSlbXTtcbn07XG5cbi8qKlxuICogQWNjZXB0cyBuYXRpdmUgSmF2YVNjcmlwdCB0eXBlcyBpbnN0ZWFkIG9mIGBBdHRyaWJ1dGVWYWx1ZWBzLCBhbmQgY2FsbHNcbiAqIFRyYW5zYWN0R2V0SXRlbXNDb21tYW5kIG9wZXJhdGlvbiBmcm9tIHtAbGluayBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9AYXdzLXNkay9jbGllbnQtZHluYW1vZGIgQGF3cy1zZGsvY2xpZW50LWR5bmFtb2RifS5cbiAqXG4gKiBKYXZhU2NyaXB0IG9iamVjdHMgcGFzc2VkIGluIGFzIHBhcmFtZXRlcnMgYXJlIG1hcnNoYWxsZWQgaW50byBgQXR0cmlidXRlVmFsdWVgIHNoYXBlc1xuICogcmVxdWlyZWQgYnkgQW1hem9uIER5bmFtb0RCLiBSZXNwb25zZXMgZnJvbSBEeW5hbW9EQiBhcmUgdW5tYXJzaGFsbGVkIGludG8gcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNhY3RHZXRDb21tYW5kIGV4dGVuZHMgJENvbW1hbmQ8XG4gIFRyYW5zYWN0R2V0Q29tbWFuZElucHV0LFxuICBUcmFuc2FjdEdldENvbW1hbmRPdXRwdXQsXG4gIER5bmFtb0RCRG9jdW1lbnRDbGllbnRSZXNvbHZlZENvbmZpZ1xuPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5wdXRLZXlOb2RlcyA9IFt7IGtleTogXCJUcmFuc2FjdEl0ZW1zXCIsIGNoaWxkcmVuOiBbeyBrZXk6IFwiR2V0XCIsIGNoaWxkcmVuOiBbeyBrZXk6IFwiS2V5XCIgfV0gfV0gfV07XG4gIHByaXZhdGUgcmVhZG9ubHkgb3V0cHV0S2V5Tm9kZXMgPSBbeyBrZXk6IFwiUmVzcG9uc2VzXCIsIGNoaWxkcmVuOiBbeyBrZXk6IFwiSXRlbVwiIH1dIH1dO1xuXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGlucHV0OiBUcmFuc2FjdEdldENvbW1hbmRJbnB1dCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICByZXNvbHZlTWlkZGxld2FyZShcbiAgICBjbGllbnRTdGFjazogTWlkZGxld2FyZVN0YWNrPFNlcnZpY2VJbnB1dFR5cGVzLCBTZXJ2aWNlT3V0cHV0VHlwZXM+LFxuICAgIGNvbmZpZ3VyYXRpb246IER5bmFtb0RCRG9jdW1lbnRDbGllbnRSZXNvbHZlZENvbmZpZyxcbiAgICBvcHRpb25zPzogX19IdHRwSGFuZGxlck9wdGlvbnNcbiAgKTogSGFuZGxlcjxUcmFuc2FjdEdldENvbW1hbmRJbnB1dCwgVHJhbnNhY3RHZXRDb21tYW5kT3V0cHV0PiB7XG4gICAgY29uc3QgeyBtYXJzaGFsbE9wdGlvbnMsIHVubWFyc2hhbGxPcHRpb25zIH0gPSBjb25maWd1cmF0aW9uLnRyYW5zbGF0ZUNvbmZpZyB8fCB7fTtcbiAgICBjb25zdCBjb21tYW5kID0gbmV3IF9fVHJhbnNhY3RHZXRJdGVtc0NvbW1hbmQobWFyc2hhbGxJbnB1dCh0aGlzLmlucHV0LCB0aGlzLmlucHV0S2V5Tm9kZXMsIG1hcnNoYWxsT3B0aW9ucykpO1xuICAgIGNvbnN0IGhhbmRsZXIgPSBjb21tYW5kLnJlc29sdmVNaWRkbGV3YXJlKGNsaWVudFN0YWNrLCBjb25maWd1cmF0aW9uLCBvcHRpb25zKTtcblxuICAgIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgaGFuZGxlcihjb21tYW5kKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIG91dHB1dDogdW5tYXJzaGFsbE91dHB1dChkYXRhLm91dHB1dCwgdGhpcy5vdXRwdXRLZXlOb2RlcywgdW5tYXJzaGFsbE9wdGlvbnMpLFxuICAgICAgfTtcbiAgICB9O1xuICB9XG59XG4iXX0=