import { __assign, __awaiter, __extends, __generator } from "tslib";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import { DeleteItemCommand as __DeleteItemCommand, } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * DeleteItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
var DeleteCommand = /** @class */ (function (_super) {
    __extends(DeleteCommand, _super);
    function DeleteCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        _this.inputKeyNodes = [
            { key: "Key" },
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
    DeleteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        var _this = this;
        var _a = configuration.translateConfig || {}, marshallOptions = _a.marshallOptions, unmarshallOptions = _a.unmarshallOptions;
        var command = new __DeleteItemCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
    return DeleteCommand;
}($Command));
export { DeleteCommand };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZXRlQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9EZWxldGVDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEUsT0FBTyxFQUdMLGlCQUFpQixJQUFJLG1CQUFtQixHQUd6QyxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFzQjdEOzs7Ozs7R0FNRztBQUNIO0lBQW1DLGlDQUlsQztJQWdCQyx1QkFBcUIsS0FBeUI7UUFBOUMsWUFDRSxpQkFBTyxTQUNSO1FBRm9CLFdBQUssR0FBTCxLQUFLLENBQW9CO1FBZjdCLG1CQUFhLEdBQUc7WUFDL0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO1lBQ2Q7Z0JBQ0UsR0FBRyxFQUFFLFVBQVU7Z0JBQ2YsUUFBUSxFQUFFO29CQUNSLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLENBQUM7aUJBQzVEO2FBQ0Y7WUFDRCxFQUFFLEdBQUcsRUFBRSwyQkFBMkIsRUFBRTtTQUNyQyxDQUFDO1FBQ2Usb0JBQWMsR0FBRztZQUNoQyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUU7WUFDckIsRUFBRSxHQUFHLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxFQUFFO1NBQzNFLENBQUM7O0lBSUYsQ0FBQztJQUVEOztPQUVHO0lBQ0gseUNBQWlCLEdBQWpCLFVBQ0UsV0FBbUUsRUFDbkUsYUFBbUQsRUFDbkQsT0FBOEI7UUFIaEMsaUJBZ0JDO1FBWE8sSUFBQSxLQUF5QyxhQUFhLENBQUMsZUFBZSxJQUFJLEVBQUUsRUFBMUUsZUFBZSxxQkFBQSxFQUFFLGlCQUFpQix1QkFBd0MsQ0FBQztRQUNuRixJQUFNLE9BQU8sR0FBRyxJQUFJLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUN4RyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUvRSxPQUFPOzs7OzRCQUNRLHFCQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQTs7d0JBQTdCLElBQUksR0FBRyxTQUFzQjt3QkFDbkMsNENBQ0ssSUFBSSxLQUNQLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsS0FDN0U7OzthQUNILENBQUM7SUFDSixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBNUNELENBQW1DLFFBQVEsR0E0QzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1vREJEb2N1bWVudENsaWVudFJlc29sdmVkQ29uZmlnLCBTZXJ2aWNlSW5wdXRUeXBlcywgU2VydmljZU91dHB1dFR5cGVzIH0gZnJvbSBcIi4uL0R5bmFtb0RCRG9jdW1lbnRDbGllbnRcIjtcbmltcG9ydCB7IG1hcnNoYWxsSW5wdXQsIHVubWFyc2hhbGxPdXRwdXQgfSBmcm9tIFwiLi4vY29tbWFuZHMvdXRpbHNcIjtcbmltcG9ydCB7XG4gIEV4cGVjdGVkQXR0cmlidXRlVmFsdWUsXG4gIEl0ZW1Db2xsZWN0aW9uTWV0cmljcyxcbiAgRGVsZXRlSXRlbUNvbW1hbmQgYXMgX19EZWxldGVJdGVtQ29tbWFuZCxcbiAgRGVsZXRlSXRlbUNvbW1hbmRJbnB1dCBhcyBfX0RlbGV0ZUl0ZW1Db21tYW5kSW5wdXQsXG4gIERlbGV0ZUl0ZW1Db21tYW5kT3V0cHV0IGFzIF9fRGVsZXRlSXRlbUNvbW1hbmRPdXRwdXQsXG59IGZyb20gXCJAYXdzLXNkay9jbGllbnQtZHluYW1vZGJcIjtcbmltcG9ydCB7IENvbW1hbmQgYXMgJENvbW1hbmQgfSBmcm9tIFwiQGF3cy1zZGsvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgSGFuZGxlciwgTWlkZGxld2FyZVN0YWNrLCBIdHRwSGFuZGxlck9wdGlvbnMgYXMgX19IdHRwSGFuZGxlck9wdGlvbnMgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtZHluYW1vZGJcIjtcblxuZXhwb3J0IHR5cGUgRGVsZXRlQ29tbWFuZElucHV0ID0gT21pdDxfX0RlbGV0ZUl0ZW1Db21tYW5kSW5wdXQsIFwiS2V5XCIgfCBcIkV4cGVjdGVkXCIgfCBcIkV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXNcIj4gJiB7XG4gIEtleTogeyBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9IHwgdW5kZWZpbmVkO1xuICBFeHBlY3RlZD86IHtcbiAgICBba2V5OiBzdHJpbmddOiBPbWl0PEV4cGVjdGVkQXR0cmlidXRlVmFsdWUsIFwiVmFsdWVcIiB8IFwiQXR0cmlidXRlVmFsdWVMaXN0XCI+ICYge1xuICAgICAgVmFsdWU/OiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZTtcbiAgICAgIEF0dHJpYnV0ZVZhbHVlTGlzdD86IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlW107XG4gICAgfTtcbiAgfTtcbiAgRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlcz86IHsgW2tleTogc3RyaW5nXTogTmF0aXZlQXR0cmlidXRlVmFsdWUgfTtcbn07XG5cbmV4cG9ydCB0eXBlIERlbGV0ZUNvbW1hbmRPdXRwdXQgPSBPbWl0PF9fRGVsZXRlSXRlbUNvbW1hbmRPdXRwdXQsIFwiQXR0cmlidXRlc1wiIHwgXCJJdGVtQ29sbGVjdGlvbk1ldHJpY3NcIj4gJiB7XG4gIEF0dHJpYnV0ZXM/OiB7IFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH07XG4gIEl0ZW1Db2xsZWN0aW9uTWV0cmljcz86IE9taXQ8SXRlbUNvbGxlY3Rpb25NZXRyaWNzLCBcIkl0ZW1Db2xsZWN0aW9uS2V5XCI+ICYge1xuICAgIEl0ZW1Db2xsZWN0aW9uS2V5PzogeyBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9O1xuICB9O1xufTtcblxuLyoqXG4gKiBBY2NlcHRzIG5hdGl2ZSBKYXZhU2NyaXB0IHR5cGVzIGluc3RlYWQgb2YgYEF0dHJpYnV0ZVZhbHVlYHMsIGFuZCBjYWxsc1xuICogRGVsZXRlSXRlbUNvbW1hbmQgb3BlcmF0aW9uIGZyb20ge0BsaW5rIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL0Bhd3Mtc2RrL2NsaWVudC1keW5hbW9kYiBAYXdzLXNkay9jbGllbnQtZHluYW1vZGJ9LlxuICpcbiAqIEphdmFTY3JpcHQgb2JqZWN0cyBwYXNzZWQgaW4gYXMgcGFyYW1ldGVycyBhcmUgbWFyc2hhbGxlZCBpbnRvIGBBdHRyaWJ1dGVWYWx1ZWAgc2hhcGVzXG4gKiByZXF1aXJlZCBieSBBbWF6b24gRHluYW1vREIuIFJlc3BvbnNlcyBmcm9tIER5bmFtb0RCIGFyZSB1bm1hcnNoYWxsZWQgaW50byBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWxldGVDb21tYW5kIGV4dGVuZHMgJENvbW1hbmQ8XG4gIERlbGV0ZUNvbW1hbmRJbnB1dCxcbiAgRGVsZXRlQ29tbWFuZE91dHB1dCxcbiAgRHluYW1vREJEb2N1bWVudENsaWVudFJlc29sdmVkQ29uZmlnXG4+IHtcbiAgcHJpdmF0ZSByZWFkb25seSBpbnB1dEtleU5vZGVzID0gW1xuICAgIHsga2V5OiBcIktleVwiIH0sXG4gICAge1xuICAgICAga2V5OiBcIkV4cGVjdGVkXCIsXG4gICAgICBjaGlsZHJlbjoge1xuICAgICAgICBjaGlsZHJlbjogW3sga2V5OiBcIlZhbHVlXCIgfSwgeyBrZXk6IFwiQXR0cmlidXRlVmFsdWVMaXN0XCIgfV0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgeyBrZXk6IFwiRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlc1wiIH0sXG4gIF07XG4gIHByaXZhdGUgcmVhZG9ubHkgb3V0cHV0S2V5Tm9kZXMgPSBbXG4gICAgeyBrZXk6IFwiQXR0cmlidXRlc1wiIH0sXG4gICAgeyBrZXk6IFwiSXRlbUNvbGxlY3Rpb25NZXRyaWNzXCIsIGNoaWxkcmVuOiBbeyBrZXk6IFwiSXRlbUNvbGxlY3Rpb25LZXlcIiB9XSB9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGlucHV0OiBEZWxldGVDb21tYW5kSW5wdXQpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcmVzb2x2ZU1pZGRsZXdhcmUoXG4gICAgY2xpZW50U3RhY2s6IE1pZGRsZXdhcmVTdGFjazxTZXJ2aWNlSW5wdXRUeXBlcywgU2VydmljZU91dHB1dFR5cGVzPixcbiAgICBjb25maWd1cmF0aW9uOiBEeW5hbW9EQkRvY3VtZW50Q2xpZW50UmVzb2x2ZWRDb25maWcsXG4gICAgb3B0aW9ucz86IF9fSHR0cEhhbmRsZXJPcHRpb25zXG4gICk6IEhhbmRsZXI8RGVsZXRlQ29tbWFuZElucHV0LCBEZWxldGVDb21tYW5kT3V0cHV0PiB7XG4gICAgY29uc3QgeyBtYXJzaGFsbE9wdGlvbnMsIHVubWFyc2hhbGxPcHRpb25zIH0gPSBjb25maWd1cmF0aW9uLnRyYW5zbGF0ZUNvbmZpZyB8fCB7fTtcbiAgICBjb25zdCBjb21tYW5kID0gbmV3IF9fRGVsZXRlSXRlbUNvbW1hbmQobWFyc2hhbGxJbnB1dCh0aGlzLmlucHV0LCB0aGlzLmlucHV0S2V5Tm9kZXMsIG1hcnNoYWxsT3B0aW9ucykpO1xuICAgIGNvbnN0IGhhbmRsZXIgPSBjb21tYW5kLnJlc29sdmVNaWRkbGV3YXJlKGNsaWVudFN0YWNrLCBjb25maWd1cmF0aW9uLCBvcHRpb25zKTtcblxuICAgIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgaGFuZGxlcihjb21tYW5kKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIG91dHB1dDogdW5tYXJzaGFsbE91dHB1dChkYXRhLm91dHB1dCwgdGhpcy5vdXRwdXRLZXlOb2RlcywgdW5tYXJzaGFsbE9wdGlvbnMpLFxuICAgICAgfTtcbiAgICB9O1xuICB9XG59XG4iXX0=