import { __assign, __awaiter, __extends, __generator } from "tslib";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import { UpdateItemCommand as __UpdateItemCommand, } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * UpdateItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
var UpdateCommand = /** @class */ (function (_super) {
    __extends(UpdateCommand, _super);
    function UpdateCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        _this.inputKeyNodes = [
            { key: "Key" },
            {
                key: "AttributeUpdates",
                children: {
                    children: [{ key: "Value" }],
                },
            },
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
    UpdateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        var _this = this;
        var _a = configuration.translateConfig || {}, marshallOptions = _a.marshallOptions, unmarshallOptions = _a.unmarshallOptions;
        var command = new __UpdateItemCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
    return UpdateCommand;
}($Command));
export { UpdateCommand };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBkYXRlQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9VcGRhdGVDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEUsT0FBTyxFQUlMLGlCQUFpQixJQUFJLG1CQUFtQixHQUd6QyxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUE4QjdEOzs7Ozs7R0FNRztBQUNIO0lBQW1DLGlDQUlsQztJQXNCQyx1QkFBcUIsS0FBeUI7UUFBOUMsWUFDRSxpQkFBTyxTQUNSO1FBRm9CLFdBQUssR0FBTCxLQUFLLENBQW9CO1FBckI3QixtQkFBYSxHQUFHO1lBQy9CLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtZQUNkO2dCQUNFLEdBQUcsRUFBRSxrQkFBa0I7Z0JBQ3ZCLFFBQVEsRUFBRTtvQkFDUixRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQztpQkFDN0I7YUFDRjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxVQUFVO2dCQUNmLFFBQVEsRUFBRTtvQkFDUixRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO2lCQUM1RDthQUNGO1lBQ0QsRUFBRSxHQUFHLEVBQUUsMkJBQTJCLEVBQUU7U0FDckMsQ0FBQztRQUNlLG9CQUFjLEdBQUc7WUFDaEMsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFO1lBQ3JCLEVBQUUsR0FBRyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLG1CQUFtQixFQUFFLENBQUMsRUFBRTtTQUMzRSxDQUFDOztJQUlGLENBQUM7SUFFRDs7T0FFRztJQUNILHlDQUFpQixHQUFqQixVQUNFLFdBQW1FLEVBQ25FLGFBQW1ELEVBQ25ELE9BQThCO1FBSGhDLGlCQWdCQztRQVhPLElBQUEsS0FBeUMsYUFBYSxDQUFDLGVBQWUsSUFBSSxFQUFFLEVBQTFFLGVBQWUscUJBQUEsRUFBRSxpQkFBaUIsdUJBQXdDLENBQUM7UUFDbkYsSUFBTSxPQUFPLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDeEcsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFL0UsT0FBTzs7Ozs0QkFDUSxxQkFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUE7O3dCQUE3QixJQUFJLEdBQUcsU0FBc0I7d0JBQ25DLDRDQUNLLElBQUksS0FDUCxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLEtBQzdFOzs7YUFDSCxDQUFDO0lBQ0osQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQWxERCxDQUFtQyxRQUFRLEdBa0QxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtb0RCRG9jdW1lbnRDbGllbnRSZXNvbHZlZENvbmZpZywgU2VydmljZUlucHV0VHlwZXMsIFNlcnZpY2VPdXRwdXRUeXBlcyB9IGZyb20gXCIuLi9EeW5hbW9EQkRvY3VtZW50Q2xpZW50XCI7XG5pbXBvcnQgeyBtYXJzaGFsbElucHV0LCB1bm1hcnNoYWxsT3V0cHV0IH0gZnJvbSBcIi4uL2NvbW1hbmRzL3V0aWxzXCI7XG5pbXBvcnQge1xuICBBdHRyaWJ1dGVWYWx1ZVVwZGF0ZSxcbiAgRXhwZWN0ZWRBdHRyaWJ1dGVWYWx1ZSxcbiAgSXRlbUNvbGxlY3Rpb25NZXRyaWNzLFxuICBVcGRhdGVJdGVtQ29tbWFuZCBhcyBfX1VwZGF0ZUl0ZW1Db21tYW5kLFxuICBVcGRhdGVJdGVtQ29tbWFuZElucHV0IGFzIF9fVXBkYXRlSXRlbUNvbW1hbmRJbnB1dCxcbiAgVXBkYXRlSXRlbUNvbW1hbmRPdXRwdXQgYXMgX19VcGRhdGVJdGVtQ29tbWFuZE91dHB1dCxcbn0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1keW5hbW9kYlwiO1xuaW1wb3J0IHsgQ29tbWFuZCBhcyAkQ29tbWFuZCB9IGZyb20gXCJAYXdzLXNkay9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBIYW5kbGVyLCBNaWRkbGV3YXJlU3RhY2ssIEh0dHBIYW5kbGVyT3B0aW9ucyBhcyBfX0h0dHBIYW5kbGVyT3B0aW9ucyB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgTmF0aXZlQXR0cmlidXRlVmFsdWUgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1keW5hbW9kYlwiO1xuXG5leHBvcnQgdHlwZSBVcGRhdGVDb21tYW5kSW5wdXQgPSBPbWl0PFxuICBfX1VwZGF0ZUl0ZW1Db21tYW5kSW5wdXQsXG4gIFwiS2V5XCIgfCBcIkF0dHJpYnV0ZVVwZGF0ZXNcIiB8IFwiRXhwZWN0ZWRcIiB8IFwiRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlc1wiXG4+ICYge1xuICBLZXk6IHsgW2tleTogc3RyaW5nXTogTmF0aXZlQXR0cmlidXRlVmFsdWUgfSB8IHVuZGVmaW5lZDtcbiAgQXR0cmlidXRlVXBkYXRlcz86IHtcbiAgICBba2V5OiBzdHJpbmddOiBPbWl0PEF0dHJpYnV0ZVZhbHVlVXBkYXRlLCBcIlZhbHVlXCI+ICYge1xuICAgICAgVmFsdWU/OiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZTtcbiAgICB9O1xuICB9O1xuICBFeHBlY3RlZD86IHtcbiAgICBba2V5OiBzdHJpbmddOiBPbWl0PEV4cGVjdGVkQXR0cmlidXRlVmFsdWUsIFwiVmFsdWVcIiB8IFwiQXR0cmlidXRlVmFsdWVMaXN0XCI+ICYge1xuICAgICAgVmFsdWU/OiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZTtcbiAgICAgIEF0dHJpYnV0ZVZhbHVlTGlzdD86IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlW107XG4gICAgfTtcbiAgfTtcbiAgRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlcz86IHsgW2tleTogc3RyaW5nXTogTmF0aXZlQXR0cmlidXRlVmFsdWUgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZUNvbW1hbmRPdXRwdXQgPSBPbWl0PF9fVXBkYXRlSXRlbUNvbW1hbmRPdXRwdXQsIFwiQXR0cmlidXRlc1wiIHwgXCJJdGVtQ29sbGVjdGlvbk1ldHJpY3NcIj4gJiB7XG4gIEF0dHJpYnV0ZXM/OiB7IFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH07XG4gIEl0ZW1Db2xsZWN0aW9uTWV0cmljcz86IE9taXQ8SXRlbUNvbGxlY3Rpb25NZXRyaWNzLCBcIkl0ZW1Db2xsZWN0aW9uS2V5XCI+ICYge1xuICAgIEl0ZW1Db2xsZWN0aW9uS2V5PzogeyBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9O1xuICB9O1xufTtcblxuLyoqXG4gKiBBY2NlcHRzIG5hdGl2ZSBKYXZhU2NyaXB0IHR5cGVzIGluc3RlYWQgb2YgYEF0dHJpYnV0ZVZhbHVlYHMsIGFuZCBjYWxsc1xuICogVXBkYXRlSXRlbUNvbW1hbmQgb3BlcmF0aW9uIGZyb20ge0BsaW5rIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL0Bhd3Mtc2RrL2NsaWVudC1keW5hbW9kYiBAYXdzLXNkay9jbGllbnQtZHluYW1vZGJ9LlxuICpcbiAqIEphdmFTY3JpcHQgb2JqZWN0cyBwYXNzZWQgaW4gYXMgcGFyYW1ldGVycyBhcmUgbWFyc2hhbGxlZCBpbnRvIGBBdHRyaWJ1dGVWYWx1ZWAgc2hhcGVzXG4gKiByZXF1aXJlZCBieSBBbWF6b24gRHluYW1vREIuIFJlc3BvbnNlcyBmcm9tIER5bmFtb0RCIGFyZSB1bm1hcnNoYWxsZWQgaW50byBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBVcGRhdGVDb21tYW5kIGV4dGVuZHMgJENvbW1hbmQ8XG4gIFVwZGF0ZUNvbW1hbmRJbnB1dCxcbiAgVXBkYXRlQ29tbWFuZE91dHB1dCxcbiAgRHluYW1vREJEb2N1bWVudENsaWVudFJlc29sdmVkQ29uZmlnXG4+IHtcbiAgcHJpdmF0ZSByZWFkb25seSBpbnB1dEtleU5vZGVzID0gW1xuICAgIHsga2V5OiBcIktleVwiIH0sXG4gICAge1xuICAgICAga2V5OiBcIkF0dHJpYnV0ZVVwZGF0ZXNcIixcbiAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgIGNoaWxkcmVuOiBbeyBrZXk6IFwiVmFsdWVcIiB9XSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6IFwiRXhwZWN0ZWRcIixcbiAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgIGNoaWxkcmVuOiBbeyBrZXk6IFwiVmFsdWVcIiB9LCB7IGtleTogXCJBdHRyaWJ1dGVWYWx1ZUxpc3RcIiB9XSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7IGtleTogXCJFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzXCIgfSxcbiAgXTtcbiAgcHJpdmF0ZSByZWFkb25seSBvdXRwdXRLZXlOb2RlcyA9IFtcbiAgICB7IGtleTogXCJBdHRyaWJ1dGVzXCIgfSxcbiAgICB7IGtleTogXCJJdGVtQ29sbGVjdGlvbk1ldHJpY3NcIiwgY2hpbGRyZW46IFt7IGtleTogXCJJdGVtQ29sbGVjdGlvbktleVwiIH1dIH0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgaW5wdXQ6IFVwZGF0ZUNvbW1hbmRJbnB1dCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICByZXNvbHZlTWlkZGxld2FyZShcbiAgICBjbGllbnRTdGFjazogTWlkZGxld2FyZVN0YWNrPFNlcnZpY2VJbnB1dFR5cGVzLCBTZXJ2aWNlT3V0cHV0VHlwZXM+LFxuICAgIGNvbmZpZ3VyYXRpb246IER5bmFtb0RCRG9jdW1lbnRDbGllbnRSZXNvbHZlZENvbmZpZyxcbiAgICBvcHRpb25zPzogX19IdHRwSGFuZGxlck9wdGlvbnNcbiAgKTogSGFuZGxlcjxVcGRhdGVDb21tYW5kSW5wdXQsIFVwZGF0ZUNvbW1hbmRPdXRwdXQ+IHtcbiAgICBjb25zdCB7IG1hcnNoYWxsT3B0aW9ucywgdW5tYXJzaGFsbE9wdGlvbnMgfSA9IGNvbmZpZ3VyYXRpb24udHJhbnNsYXRlQ29uZmlnIHx8IHt9O1xuICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgX19VcGRhdGVJdGVtQ29tbWFuZChtYXJzaGFsbElucHV0KHRoaXMuaW5wdXQsIHRoaXMuaW5wdXRLZXlOb2RlcywgbWFyc2hhbGxPcHRpb25zKSk7XG4gICAgY29uc3QgaGFuZGxlciA9IGNvbW1hbmQucmVzb2x2ZU1pZGRsZXdhcmUoY2xpZW50U3RhY2ssIGNvbmZpZ3VyYXRpb24sIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBoYW5kbGVyKGNvbW1hbmQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgb3V0cHV0OiB1bm1hcnNoYWxsT3V0cHV0KGRhdGEub3V0cHV0LCB0aGlzLm91dHB1dEtleU5vZGVzLCB1bm1hcnNoYWxsT3B0aW9ucyksXG4gICAgICB9O1xuICAgIH07XG4gIH1cbn1cbiJdfQ==