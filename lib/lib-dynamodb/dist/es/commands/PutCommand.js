import { __assign, __awaiter, __extends, __generator } from "tslib";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import { PutItemCommand as __PutItemCommand, } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * PutItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
var PutCommand = /** @class */ (function (_super) {
    __extends(PutCommand, _super);
    function PutCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        _this.inputKeyNodes = [
            { key: "Item" },
            {
                key: "Expected",
                children: {
                    children: [{ key: "Value" }, { key: "AttributeValueList" }],
                },
            },
            { key: "ExpressionAttributeValues" },
        ];
        _this.outputKeyNodes = [
            { key: "Attributes" },
            { key: "ItemCollectionMetrics", children: [{ key: "ItemCollectionKey" }] },
        ];
        return _this;
    }
    /**
     * @internal
     */
    PutCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        var _this = this;
        var _a = configuration.translateConfig || {}, marshallOptions = _a.marshallOptions, unmarshallOptions = _a.unmarshallOptions;
        var command = new __PutItemCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
    return PutCommand;
}($Command));
export { PutCommand };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHV0Q29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9QdXRDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEUsT0FBTyxFQUdMLGNBQWMsSUFBSSxnQkFBZ0IsR0FHbkMsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsT0FBTyxJQUFJLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBc0I3RDs7Ozs7O0dBTUc7QUFDSDtJQUFnQyw4QkFBaUY7SUFnQi9HLG9CQUFxQixLQUFzQjtRQUEzQyxZQUNFLGlCQUFPLFNBQ1I7UUFGb0IsV0FBSyxHQUFMLEtBQUssQ0FBaUI7UUFmMUIsbUJBQWEsR0FBRztZQUMvQixFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7WUFDZjtnQkFDRSxHQUFHLEVBQUUsVUFBVTtnQkFDZixRQUFRLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztpQkFDNUQ7YUFDRjtZQUNELEVBQUUsR0FBRyxFQUFFLDJCQUEyQixFQUFFO1NBQ3JDLENBQUM7UUFDZSxvQkFBYyxHQUFHO1lBQ2hDLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRTtZQUNyQixFQUFFLEdBQUcsRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLEVBQUU7U0FDM0UsQ0FBQzs7SUFJRixDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQ0FBaUIsR0FBakIsVUFDRSxXQUFtRSxFQUNuRSxhQUFtRCxFQUNuRCxPQUE4QjtRQUhoQyxpQkFnQkM7UUFYTyxJQUFBLEtBQXlDLGFBQWEsQ0FBQyxlQUFlLElBQUksRUFBRSxFQUExRSxlQUFlLHFCQUFBLEVBQUUsaUJBQWlCLHVCQUF3QyxDQUFDO1FBQ25GLElBQU0sT0FBTyxHQUFHLElBQUksZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ3JHLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRS9FLE9BQU87Ozs7NEJBQ1EscUJBQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBN0IsSUFBSSxHQUFHLFNBQXNCO3dCQUNuQyw0Q0FDSyxJQUFJLEtBQ1AsTUFBTSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxLQUM3RTs7O2FBQ0gsQ0FBQztJQUNKLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUF4Q0QsQ0FBZ0MsUUFBUSxHQXdDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbW9EQkRvY3VtZW50Q2xpZW50UmVzb2x2ZWRDb25maWcsIFNlcnZpY2VJbnB1dFR5cGVzLCBTZXJ2aWNlT3V0cHV0VHlwZXMgfSBmcm9tIFwiLi4vRHluYW1vREJEb2N1bWVudENsaWVudFwiO1xuaW1wb3J0IHsgbWFyc2hhbGxJbnB1dCwgdW5tYXJzaGFsbE91dHB1dCB9IGZyb20gXCIuLi9jb21tYW5kcy91dGlsc1wiO1xuaW1wb3J0IHtcbiAgRXhwZWN0ZWRBdHRyaWJ1dGVWYWx1ZSxcbiAgSXRlbUNvbGxlY3Rpb25NZXRyaWNzLFxuICBQdXRJdGVtQ29tbWFuZCBhcyBfX1B1dEl0ZW1Db21tYW5kLFxuICBQdXRJdGVtQ29tbWFuZElucHV0IGFzIF9fUHV0SXRlbUNvbW1hbmRJbnB1dCxcbiAgUHV0SXRlbUNvbW1hbmRPdXRwdXQgYXMgX19QdXRJdGVtQ29tbWFuZE91dHB1dCxcbn0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1keW5hbW9kYlwiO1xuaW1wb3J0IHsgQ29tbWFuZCBhcyAkQ29tbWFuZCB9IGZyb20gXCJAYXdzLXNkay9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBIYW5kbGVyLCBNaWRkbGV3YXJlU3RhY2ssIEh0dHBIYW5kbGVyT3B0aW9ucyBhcyBfX0h0dHBIYW5kbGVyT3B0aW9ucyB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgTmF0aXZlQXR0cmlidXRlVmFsdWUgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1keW5hbW9kYlwiO1xuXG5leHBvcnQgdHlwZSBQdXRDb21tYW5kSW5wdXQgPSBPbWl0PF9fUHV0SXRlbUNvbW1hbmRJbnB1dCwgXCJJdGVtXCIgfCBcIkV4cGVjdGVkXCIgfCBcIkV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXNcIj4gJiB7XG4gIEl0ZW06IHsgW2tleTogc3RyaW5nXTogTmF0aXZlQXR0cmlidXRlVmFsdWUgfSB8IHVuZGVmaW5lZDtcbiAgRXhwZWN0ZWQ/OiB7XG4gICAgW2tleTogc3RyaW5nXTogT21pdDxFeHBlY3RlZEF0dHJpYnV0ZVZhbHVlLCBcIlZhbHVlXCIgfCBcIkF0dHJpYnV0ZVZhbHVlTGlzdFwiPiAmIHtcbiAgICAgIFZhbHVlPzogTmF0aXZlQXR0cmlidXRlVmFsdWU7XG4gICAgICBBdHRyaWJ1dGVWYWx1ZUxpc3Q/OiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZVtdO1xuICAgIH07XG4gIH07XG4gIEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM/OiB7IFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH07XG59O1xuXG5leHBvcnQgdHlwZSBQdXRDb21tYW5kT3V0cHV0ID0gT21pdDxfX1B1dEl0ZW1Db21tYW5kT3V0cHV0LCBcIkF0dHJpYnV0ZXNcIiB8IFwiSXRlbUNvbGxlY3Rpb25NZXRyaWNzXCI+ICYge1xuICBBdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9O1xuICBJdGVtQ29sbGVjdGlvbk1ldHJpY3M/OiBPbWl0PEl0ZW1Db2xsZWN0aW9uTWV0cmljcywgXCJJdGVtQ29sbGVjdGlvbktleVwiPiAmIHtcbiAgICBJdGVtQ29sbGVjdGlvbktleT86IHsgW2tleTogc3RyaW5nXTogTmF0aXZlQXR0cmlidXRlVmFsdWUgfTtcbiAgfTtcbn07XG5cbi8qKlxuICogQWNjZXB0cyBuYXRpdmUgSmF2YVNjcmlwdCB0eXBlcyBpbnN0ZWFkIG9mIGBBdHRyaWJ1dGVWYWx1ZWBzLCBhbmQgY2FsbHNcbiAqIFB1dEl0ZW1Db21tYW5kIG9wZXJhdGlvbiBmcm9tIHtAbGluayBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9AYXdzLXNkay9jbGllbnQtZHluYW1vZGIgQGF3cy1zZGsvY2xpZW50LWR5bmFtb2RifS5cbiAqXG4gKiBKYXZhU2NyaXB0IG9iamVjdHMgcGFzc2VkIGluIGFzIHBhcmFtZXRlcnMgYXJlIG1hcnNoYWxsZWQgaW50byBgQXR0cmlidXRlVmFsdWVgIHNoYXBlc1xuICogcmVxdWlyZWQgYnkgQW1hem9uIER5bmFtb0RCLiBSZXNwb25zZXMgZnJvbSBEeW5hbW9EQiBhcmUgdW5tYXJzaGFsbGVkIGludG8gcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICovXG5leHBvcnQgY2xhc3MgUHV0Q29tbWFuZCBleHRlbmRzICRDb21tYW5kPFB1dENvbW1hbmRJbnB1dCwgUHV0Q29tbWFuZE91dHB1dCwgRHluYW1vREJEb2N1bWVudENsaWVudFJlc29sdmVkQ29uZmlnPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5wdXRLZXlOb2RlcyA9IFtcbiAgICB7IGtleTogXCJJdGVtXCIgfSxcbiAgICB7XG4gICAgICBrZXk6IFwiRXhwZWN0ZWRcIixcbiAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgIGNoaWxkcmVuOiBbeyBrZXk6IFwiVmFsdWVcIiB9LCB7IGtleTogXCJBdHRyaWJ1dGVWYWx1ZUxpc3RcIiB9XSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7IGtleTogXCJFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzXCIgfSxcbiAgXTtcbiAgcHJpdmF0ZSByZWFkb25seSBvdXRwdXRLZXlOb2RlcyA9IFtcbiAgICB7IGtleTogXCJBdHRyaWJ1dGVzXCIgfSxcbiAgICB7IGtleTogXCJJdGVtQ29sbGVjdGlvbk1ldHJpY3NcIiwgY2hpbGRyZW46IFt7IGtleTogXCJJdGVtQ29sbGVjdGlvbktleVwiIH1dIH0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgaW5wdXQ6IFB1dENvbW1hbmRJbnB1dCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICByZXNvbHZlTWlkZGxld2FyZShcbiAgICBjbGllbnRTdGFjazogTWlkZGxld2FyZVN0YWNrPFNlcnZpY2VJbnB1dFR5cGVzLCBTZXJ2aWNlT3V0cHV0VHlwZXM+LFxuICAgIGNvbmZpZ3VyYXRpb246IER5bmFtb0RCRG9jdW1lbnRDbGllbnRSZXNvbHZlZENvbmZpZyxcbiAgICBvcHRpb25zPzogX19IdHRwSGFuZGxlck9wdGlvbnNcbiAgKTogSGFuZGxlcjxQdXRDb21tYW5kSW5wdXQsIFB1dENvbW1hbmRPdXRwdXQ+IHtcbiAgICBjb25zdCB7IG1hcnNoYWxsT3B0aW9ucywgdW5tYXJzaGFsbE9wdGlvbnMgfSA9IGNvbmZpZ3VyYXRpb24udHJhbnNsYXRlQ29uZmlnIHx8IHt9O1xuICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgX19QdXRJdGVtQ29tbWFuZChtYXJzaGFsbElucHV0KHRoaXMuaW5wdXQsIHRoaXMuaW5wdXRLZXlOb2RlcywgbWFyc2hhbGxPcHRpb25zKSk7XG4gICAgY29uc3QgaGFuZGxlciA9IGNvbW1hbmQucmVzb2x2ZU1pZGRsZXdhcmUoY2xpZW50U3RhY2ssIGNvbmZpZ3VyYXRpb24sIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBoYW5kbGVyKGNvbW1hbmQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgb3V0cHV0OiB1bm1hcnNoYWxsT3V0cHV0KGRhdGEub3V0cHV0LCB0aGlzLm91dHB1dEtleU5vZGVzLCB1bm1hcnNoYWxsT3B0aW9ucyksXG4gICAgICB9O1xuICAgIH07XG4gIH1cbn1cbiJdfQ==