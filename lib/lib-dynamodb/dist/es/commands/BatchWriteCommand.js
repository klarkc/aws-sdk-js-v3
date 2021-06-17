import { __assign, __awaiter, __extends, __generator } from "tslib";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import { BatchWriteItemCommand as __BatchWriteItemCommand, } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * BatchWriteItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
var BatchWriteCommand = /** @class */ (function (_super) {
    __extends(BatchWriteCommand, _super);
    function BatchWriteCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        _this.inputKeyNodes = [
            {
                key: "RequestItems",
                children: {
                    children: [
                        { key: "PutRequest", children: [{ key: "Item" }] },
                        { key: "DeleteRequest", children: [{ key: "Key" }] },
                    ],
                },
            },
        ];
        _this.outputKeyNodes = [
            {
                key: "UnprocessedItems",
                children: {
                    children: [
                        { key: "PutRequest", children: [{ key: "Item" }] },
                        { key: "DeleteRequest", children: [{ key: "Key" }] },
                    ],
                },
            },
            {
                key: "ItemCollectionMetrics",
                children: {
                    children: [{ key: "ItemCollectionKey" }],
                },
            },
        ];
        return _this;
    }
    /**
     * @internal
     */
    BatchWriteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        var _this = this;
        var _a = configuration.translateConfig || {}, marshallOptions = _a.marshallOptions, unmarshallOptions = _a.unmarshallOptions;
        var command = new __BatchWriteItemCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
    return BatchWriteCommand;
}($Command));
export { BatchWriteCommand };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmF0Y2hXcml0ZUNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvQmF0Y2hXcml0ZUNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRSxPQUFPLEVBS0wscUJBQXFCLElBQUksdUJBQXVCLEdBR2pELE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLE9BQU8sSUFBSSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQXdDN0Q7Ozs7OztHQU1HO0FBQ0g7SUFBdUMscUNBSXRDO0lBOEJDLDJCQUFxQixLQUE2QjtRQUFsRCxZQUNFLGlCQUFPLFNBQ1I7UUFGb0IsV0FBSyxHQUFMLEtBQUssQ0FBd0I7UUE3QmpDLG1CQUFhLEdBQUc7WUFDL0I7Z0JBQ0UsR0FBRyxFQUFFLGNBQWM7Z0JBQ25CLFFBQVEsRUFBRTtvQkFDUixRQUFRLEVBQUU7d0JBQ1IsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7d0JBQ2xELEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO3FCQUNyRDtpQkFDRjthQUNGO1NBQ0YsQ0FBQztRQUNlLG9CQUFjLEdBQUc7WUFDaEM7Z0JBQ0UsR0FBRyxFQUFFLGtCQUFrQjtnQkFDdkIsUUFBUSxFQUFFO29CQUNSLFFBQVEsRUFBRTt3QkFDUixFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTt3QkFDbEQsRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7cUJBQ3JEO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxHQUFHLEVBQUUsdUJBQXVCO2dCQUM1QixRQUFRLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQztpQkFDekM7YUFDRjtTQUNGLENBQUM7O0lBSUYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsNkNBQWlCLEdBQWpCLFVBQ0UsV0FBbUUsRUFDbkUsYUFBbUQsRUFDbkQsT0FBOEI7UUFIaEMsaUJBZ0JDO1FBWE8sSUFBQSxLQUF5QyxhQUFhLENBQUMsZUFBZSxJQUFJLEVBQUUsRUFBMUUsZUFBZSxxQkFBQSxFQUFFLGlCQUFpQix1QkFBd0MsQ0FBQztRQUNuRixJQUFNLE9BQU8sR0FBRyxJQUFJLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUM1RyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUvRSxPQUFPOzs7OzRCQUNRLHFCQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQTs7d0JBQTdCLElBQUksR0FBRyxTQUFzQjt3QkFDbkMsNENBQ0ssSUFBSSxLQUNQLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsS0FDN0U7OzthQUNILENBQUM7SUFDSixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBMURELENBQXVDLFFBQVEsR0EwRDlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1vREJEb2N1bWVudENsaWVudFJlc29sdmVkQ29uZmlnLCBTZXJ2aWNlSW5wdXRUeXBlcywgU2VydmljZU91dHB1dFR5cGVzIH0gZnJvbSBcIi4uL0R5bmFtb0RCRG9jdW1lbnRDbGllbnRcIjtcbmltcG9ydCB7IG1hcnNoYWxsSW5wdXQsIHVubWFyc2hhbGxPdXRwdXQgfSBmcm9tIFwiLi4vY29tbWFuZHMvdXRpbHNcIjtcbmltcG9ydCB7XG4gIERlbGV0ZVJlcXVlc3QsXG4gIEl0ZW1Db2xsZWN0aW9uTWV0cmljcyxcbiAgUHV0UmVxdWVzdCxcbiAgV3JpdGVSZXF1ZXN0LFxuICBCYXRjaFdyaXRlSXRlbUNvbW1hbmQgYXMgX19CYXRjaFdyaXRlSXRlbUNvbW1hbmQsXG4gIEJhdGNoV3JpdGVJdGVtQ29tbWFuZElucHV0IGFzIF9fQmF0Y2hXcml0ZUl0ZW1Db21tYW5kSW5wdXQsXG4gIEJhdGNoV3JpdGVJdGVtQ29tbWFuZE91dHB1dCBhcyBfX0JhdGNoV3JpdGVJdGVtQ29tbWFuZE91dHB1dCxcbn0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1keW5hbW9kYlwiO1xuaW1wb3J0IHsgQ29tbWFuZCBhcyAkQ29tbWFuZCB9IGZyb20gXCJAYXdzLXNkay9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBIYW5kbGVyLCBNaWRkbGV3YXJlU3RhY2ssIEh0dHBIYW5kbGVyT3B0aW9ucyBhcyBfX0h0dHBIYW5kbGVyT3B0aW9ucyB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgTmF0aXZlQXR0cmlidXRlVmFsdWUgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1keW5hbW9kYlwiO1xuXG5leHBvcnQgdHlwZSBCYXRjaFdyaXRlQ29tbWFuZElucHV0ID0gT21pdDxfX0JhdGNoV3JpdGVJdGVtQ29tbWFuZElucHV0LCBcIlJlcXVlc3RJdGVtc1wiPiAmIHtcbiAgUmVxdWVzdEl0ZW1zOlxuICAgIHwge1xuICAgICAgICBba2V5OiBzdHJpbmddOiAoT21pdDxXcml0ZVJlcXVlc3QsIFwiUHV0UmVxdWVzdFwiIHwgXCJEZWxldGVSZXF1ZXN0XCI+ICYge1xuICAgICAgICAgIFB1dFJlcXVlc3Q/OiBPbWl0PFB1dFJlcXVlc3QsIFwiSXRlbVwiPiAmIHtcbiAgICAgICAgICAgIEl0ZW06IHsgW2tleTogc3RyaW5nXTogTmF0aXZlQXR0cmlidXRlVmFsdWUgfSB8IHVuZGVmaW5lZDtcbiAgICAgICAgICB9O1xuICAgICAgICAgIERlbGV0ZVJlcXVlc3Q/OiBPbWl0PERlbGV0ZVJlcXVlc3QsIFwiS2V5XCI+ICYge1xuICAgICAgICAgICAgS2V5OiB7IFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH0gfCB1bmRlZmluZWQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSlbXTtcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCB0eXBlIEJhdGNoV3JpdGVDb21tYW5kT3V0cHV0ID0gT21pdDxcbiAgX19CYXRjaFdyaXRlSXRlbUNvbW1hbmRPdXRwdXQsXG4gIFwiVW5wcm9jZXNzZWRJdGVtc1wiIHwgXCJJdGVtQ29sbGVjdGlvbk1ldHJpY3NcIlxuPiAmIHtcbiAgVW5wcm9jZXNzZWRJdGVtcz86IHtcbiAgICBba2V5OiBzdHJpbmddOiAoT21pdDxXcml0ZVJlcXVlc3QsIFwiUHV0UmVxdWVzdFwiIHwgXCJEZWxldGVSZXF1ZXN0XCI+ICYge1xuICAgICAgUHV0UmVxdWVzdD86IE9taXQ8UHV0UmVxdWVzdCwgXCJJdGVtXCI+ICYge1xuICAgICAgICBJdGVtOiB7IFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH0gfCB1bmRlZmluZWQ7XG4gICAgICB9O1xuICAgICAgRGVsZXRlUmVxdWVzdD86IE9taXQ8RGVsZXRlUmVxdWVzdCwgXCJLZXlcIj4gJiB7XG4gICAgICAgIEtleTogeyBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9IHwgdW5kZWZpbmVkO1xuICAgICAgfTtcbiAgICB9KVtdO1xuICB9O1xuICBJdGVtQ29sbGVjdGlvbk1ldHJpY3M/OiB7XG4gICAgW2tleTogc3RyaW5nXTogKE9taXQ8SXRlbUNvbGxlY3Rpb25NZXRyaWNzLCBcIkl0ZW1Db2xsZWN0aW9uS2V5XCI+ICYge1xuICAgICAgSXRlbUNvbGxlY3Rpb25LZXk/OiB7IFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH07XG4gICAgfSlbXTtcbiAgfTtcbn07XG5cbi8qKlxuICogQWNjZXB0cyBuYXRpdmUgSmF2YVNjcmlwdCB0eXBlcyBpbnN0ZWFkIG9mIGBBdHRyaWJ1dGVWYWx1ZWBzLCBhbmQgY2FsbHNcbiAqIEJhdGNoV3JpdGVJdGVtQ29tbWFuZCBvcGVyYXRpb24gZnJvbSB7QGxpbmsgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvQGF3cy1zZGsvY2xpZW50LWR5bmFtb2RiIEBhd3Mtc2RrL2NsaWVudC1keW5hbW9kYn0uXG4gKlxuICogSmF2YVNjcmlwdCBvYmplY3RzIHBhc3NlZCBpbiBhcyBwYXJhbWV0ZXJzIGFyZSBtYXJzaGFsbGVkIGludG8gYEF0dHJpYnV0ZVZhbHVlYCBzaGFwZXNcbiAqIHJlcXVpcmVkIGJ5IEFtYXpvbiBEeW5hbW9EQi4gUmVzcG9uc2VzIGZyb20gRHluYW1vREIgYXJlIHVubWFyc2hhbGxlZCBpbnRvIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIEJhdGNoV3JpdGVDb21tYW5kIGV4dGVuZHMgJENvbW1hbmQ8XG4gIEJhdGNoV3JpdGVDb21tYW5kSW5wdXQsXG4gIEJhdGNoV3JpdGVDb21tYW5kT3V0cHV0LFxuICBEeW5hbW9EQkRvY3VtZW50Q2xpZW50UmVzb2x2ZWRDb25maWdcbj4ge1xuICBwcml2YXRlIHJlYWRvbmx5IGlucHV0S2V5Tm9kZXMgPSBbXG4gICAge1xuICAgICAga2V5OiBcIlJlcXVlc3RJdGVtc1wiLFxuICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IGtleTogXCJQdXRSZXF1ZXN0XCIsIGNoaWxkcmVuOiBbeyBrZXk6IFwiSXRlbVwiIH1dIH0sXG4gICAgICAgICAgeyBrZXk6IFwiRGVsZXRlUmVxdWVzdFwiLCBjaGlsZHJlbjogW3sga2V5OiBcIktleVwiIH1dIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIF07XG4gIHByaXZhdGUgcmVhZG9ubHkgb3V0cHV0S2V5Tm9kZXMgPSBbXG4gICAge1xuICAgICAga2V5OiBcIlVucHJvY2Vzc2VkSXRlbXNcIixcbiAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyBrZXk6IFwiUHV0UmVxdWVzdFwiLCBjaGlsZHJlbjogW3sga2V5OiBcIkl0ZW1cIiB9XSB9LFxuICAgICAgICAgIHsga2V5OiBcIkRlbGV0ZVJlcXVlc3RcIiwgY2hpbGRyZW46IFt7IGtleTogXCJLZXlcIiB9XSB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogXCJJdGVtQ29sbGVjdGlvbk1ldHJpY3NcIixcbiAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgIGNoaWxkcmVuOiBbeyBrZXk6IFwiSXRlbUNvbGxlY3Rpb25LZXlcIiB9XSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBpbnB1dDogQmF0Y2hXcml0ZUNvbW1hbmRJbnB1dCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICByZXNvbHZlTWlkZGxld2FyZShcbiAgICBjbGllbnRTdGFjazogTWlkZGxld2FyZVN0YWNrPFNlcnZpY2VJbnB1dFR5cGVzLCBTZXJ2aWNlT3V0cHV0VHlwZXM+LFxuICAgIGNvbmZpZ3VyYXRpb246IER5bmFtb0RCRG9jdW1lbnRDbGllbnRSZXNvbHZlZENvbmZpZyxcbiAgICBvcHRpb25zPzogX19IdHRwSGFuZGxlck9wdGlvbnNcbiAgKTogSGFuZGxlcjxCYXRjaFdyaXRlQ29tbWFuZElucHV0LCBCYXRjaFdyaXRlQ29tbWFuZE91dHB1dD4ge1xuICAgIGNvbnN0IHsgbWFyc2hhbGxPcHRpb25zLCB1bm1hcnNoYWxsT3B0aW9ucyB9ID0gY29uZmlndXJhdGlvbi50cmFuc2xhdGVDb25maWcgfHwge307XG4gICAgY29uc3QgY29tbWFuZCA9IG5ldyBfX0JhdGNoV3JpdGVJdGVtQ29tbWFuZChtYXJzaGFsbElucHV0KHRoaXMuaW5wdXQsIHRoaXMuaW5wdXRLZXlOb2RlcywgbWFyc2hhbGxPcHRpb25zKSk7XG4gICAgY29uc3QgaGFuZGxlciA9IGNvbW1hbmQucmVzb2x2ZU1pZGRsZXdhcmUoY2xpZW50U3RhY2ssIGNvbmZpZ3VyYXRpb24sIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBoYW5kbGVyKGNvbW1hbmQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgb3V0cHV0OiB1bm1hcnNoYWxsT3V0cHV0KGRhdGEub3V0cHV0LCB0aGlzLm91dHB1dEtleU5vZGVzLCB1bm1hcnNoYWxsT3B0aW9ucyksXG4gICAgICB9O1xuICAgIH07XG4gIH1cbn1cbiJdfQ==