import { __assign, __awaiter, __extends, __generator } from "tslib";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import { QueryCommand as __QueryCommand, } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * QueryCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
var QueryCommand = /** @class */ (function (_super) {
    __extends(QueryCommand, _super);
    function QueryCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        _this.inputKeyNodes = [
            {
                key: "KeyConditions",
                children: {
                    children: [{ key: "AttributeValueList" }],
                },
            },
            {
                key: "QueryFilter",
                children: {
                    children: [{ key: "AttributeValueList" }],
                },
            },
            { key: "ExclusiveStartKey" },
            { key: "ExpressionAttributeValues" },
        ];
        _this.outputKeyNodes = [{ key: "Items" }, { key: "LastEvaluatedKey" }];
        return _this;
    }
    /**
     * @internal
     */
    QueryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        var _this = this;
        var _a = configuration.translateConfig || {}, marshallOptions = _a.marshallOptions, unmarshallOptions = _a.unmarshallOptions;
        var command = new __QueryCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
    return QueryCommand;
}($Command));
export { QueryCommand };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlcnlDb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL1F1ZXJ5Q29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BFLE9BQU8sRUFFTCxZQUFZLElBQUksY0FBYyxHQUcvQixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUE2QjdEOzs7Ozs7R0FNRztBQUNIO0lBQWtDLGdDQUlqQztJQW1CQyxzQkFBcUIsS0FBd0I7UUFBN0MsWUFDRSxpQkFBTyxTQUNSO1FBRm9CLFdBQUssR0FBTCxLQUFLLENBQW1CO1FBbEI1QixtQkFBYSxHQUFHO1lBQy9CO2dCQUNFLEdBQUcsRUFBRSxlQUFlO2dCQUNwQixRQUFRLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztpQkFDMUM7YUFDRjtZQUNEO2dCQUNFLEdBQUcsRUFBRSxhQUFhO2dCQUNsQixRQUFRLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztpQkFDMUM7YUFDRjtZQUNELEVBQUUsR0FBRyxFQUFFLG1CQUFtQixFQUFFO1lBQzVCLEVBQUUsR0FBRyxFQUFFLDJCQUEyQixFQUFFO1NBQ3JDLENBQUM7UUFDZSxvQkFBYyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDOztJQUlsRixDQUFDO0lBRUQ7O09BRUc7SUFDSCx3Q0FBaUIsR0FBakIsVUFDRSxXQUFtRSxFQUNuRSxhQUFtRCxFQUNuRCxPQUE4QjtRQUhoQyxpQkFnQkM7UUFYTyxJQUFBLEtBQXlDLGFBQWEsQ0FBQyxlQUFlLElBQUksRUFBRSxFQUExRSxlQUFlLHFCQUFBLEVBQUUsaUJBQWlCLHVCQUF3QyxDQUFDO1FBQ25GLElBQU0sT0FBTyxHQUFHLElBQUksY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNuRyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUvRSxPQUFPOzs7OzRCQUNRLHFCQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQTs7d0JBQTdCLElBQUksR0FBRyxTQUFzQjt3QkFDbkMsNENBQ0ssSUFBSSxLQUNQLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsS0FDN0U7OzthQUNILENBQUM7SUFDSixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBL0NELENBQWtDLFFBQVEsR0ErQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1vREJEb2N1bWVudENsaWVudFJlc29sdmVkQ29uZmlnLCBTZXJ2aWNlSW5wdXRUeXBlcywgU2VydmljZU91dHB1dFR5cGVzIH0gZnJvbSBcIi4uL0R5bmFtb0RCRG9jdW1lbnRDbGllbnRcIjtcbmltcG9ydCB7IG1hcnNoYWxsSW5wdXQsIHVubWFyc2hhbGxPdXRwdXQgfSBmcm9tIFwiLi4vY29tbWFuZHMvdXRpbHNcIjtcbmltcG9ydCB7XG4gIENvbmRpdGlvbixcbiAgUXVlcnlDb21tYW5kIGFzIF9fUXVlcnlDb21tYW5kLFxuICBRdWVyeUNvbW1hbmRJbnB1dCBhcyBfX1F1ZXJ5Q29tbWFuZElucHV0LFxuICBRdWVyeUNvbW1hbmRPdXRwdXQgYXMgX19RdWVyeUNvbW1hbmRPdXRwdXQsXG59IGZyb20gXCJAYXdzLXNkay9jbGllbnQtZHluYW1vZGJcIjtcbmltcG9ydCB7IENvbW1hbmQgYXMgJENvbW1hbmQgfSBmcm9tIFwiQGF3cy1zZGsvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgSGFuZGxlciwgTWlkZGxld2FyZVN0YWNrLCBIdHRwSGFuZGxlck9wdGlvbnMgYXMgX19IdHRwSGFuZGxlck9wdGlvbnMgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtZHluYW1vZGJcIjtcblxuZXhwb3J0IHR5cGUgUXVlcnlDb21tYW5kSW5wdXQgPSBPbWl0PFxuICBfX1F1ZXJ5Q29tbWFuZElucHV0LFxuICBcIktleUNvbmRpdGlvbnNcIiB8IFwiUXVlcnlGaWx0ZXJcIiB8IFwiRXhjbHVzaXZlU3RhcnRLZXlcIiB8IFwiRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlc1wiXG4+ICYge1xuICBLZXlDb25kaXRpb25zPzoge1xuICAgIFtrZXk6IHN0cmluZ106IE9taXQ8Q29uZGl0aW9uLCBcIkF0dHJpYnV0ZVZhbHVlTGlzdFwiPiAmIHtcbiAgICAgIEF0dHJpYnV0ZVZhbHVlTGlzdD86IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlW107XG4gICAgfTtcbiAgfTtcbiAgUXVlcnlGaWx0ZXI/OiB7XG4gICAgW2tleTogc3RyaW5nXTogT21pdDxDb25kaXRpb24sIFwiQXR0cmlidXRlVmFsdWVMaXN0XCI+ICYge1xuICAgICAgQXR0cmlidXRlVmFsdWVMaXN0PzogTmF0aXZlQXR0cmlidXRlVmFsdWVbXTtcbiAgICB9O1xuICB9O1xuICBFeGNsdXNpdmVTdGFydEtleT86IHsgW2tleTogc3RyaW5nXTogTmF0aXZlQXR0cmlidXRlVmFsdWUgfTtcbiAgRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlcz86IHsgW2tleTogc3RyaW5nXTogTmF0aXZlQXR0cmlidXRlVmFsdWUgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5Q29tbWFuZE91dHB1dCA9IE9taXQ8X19RdWVyeUNvbW1hbmRPdXRwdXQsIFwiSXRlbXNcIiB8IFwiTGFzdEV2YWx1YXRlZEtleVwiPiAmIHtcbiAgSXRlbXM/OiB7XG4gICAgW2tleTogc3RyaW5nXTogTmF0aXZlQXR0cmlidXRlVmFsdWU7XG4gIH1bXTtcbiAgTGFzdEV2YWx1YXRlZEtleT86IHsgW2tleTogc3RyaW5nXTogTmF0aXZlQXR0cmlidXRlVmFsdWUgfTtcbn07XG5cbi8qKlxuICogQWNjZXB0cyBuYXRpdmUgSmF2YVNjcmlwdCB0eXBlcyBpbnN0ZWFkIG9mIGBBdHRyaWJ1dGVWYWx1ZWBzLCBhbmQgY2FsbHNcbiAqIFF1ZXJ5Q29tbWFuZCBvcGVyYXRpb24gZnJvbSB7QGxpbmsgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvQGF3cy1zZGsvY2xpZW50LWR5bmFtb2RiIEBhd3Mtc2RrL2NsaWVudC1keW5hbW9kYn0uXG4gKlxuICogSmF2YVNjcmlwdCBvYmplY3RzIHBhc3NlZCBpbiBhcyBwYXJhbWV0ZXJzIGFyZSBtYXJzaGFsbGVkIGludG8gYEF0dHJpYnV0ZVZhbHVlYCBzaGFwZXNcbiAqIHJlcXVpcmVkIGJ5IEFtYXpvbiBEeW5hbW9EQi4gUmVzcG9uc2VzIGZyb20gRHluYW1vREIgYXJlIHVubWFyc2hhbGxlZCBpbnRvIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFF1ZXJ5Q29tbWFuZCBleHRlbmRzICRDb21tYW5kPFxuICBRdWVyeUNvbW1hbmRJbnB1dCxcbiAgUXVlcnlDb21tYW5kT3V0cHV0LFxuICBEeW5hbW9EQkRvY3VtZW50Q2xpZW50UmVzb2x2ZWRDb25maWdcbj4ge1xuICBwcml2YXRlIHJlYWRvbmx5IGlucHV0S2V5Tm9kZXMgPSBbXG4gICAge1xuICAgICAga2V5OiBcIktleUNvbmRpdGlvbnNcIixcbiAgICAgIGNoaWxkcmVuOiB7XG4gICAgICAgIGNoaWxkcmVuOiBbeyBrZXk6IFwiQXR0cmlidXRlVmFsdWVMaXN0XCIgfV0sXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiBcIlF1ZXJ5RmlsdGVyXCIsXG4gICAgICBjaGlsZHJlbjoge1xuICAgICAgICBjaGlsZHJlbjogW3sga2V5OiBcIkF0dHJpYnV0ZVZhbHVlTGlzdFwiIH1dLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHsga2V5OiBcIkV4Y2x1c2l2ZVN0YXJ0S2V5XCIgfSxcbiAgICB7IGtleTogXCJFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzXCIgfSxcbiAgXTtcbiAgcHJpdmF0ZSByZWFkb25seSBvdXRwdXRLZXlOb2RlcyA9IFt7IGtleTogXCJJdGVtc1wiIH0sIHsga2V5OiBcIkxhc3RFdmFsdWF0ZWRLZXlcIiB9XTtcblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBpbnB1dDogUXVlcnlDb21tYW5kSW5wdXQpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcmVzb2x2ZU1pZGRsZXdhcmUoXG4gICAgY2xpZW50U3RhY2s6IE1pZGRsZXdhcmVTdGFjazxTZXJ2aWNlSW5wdXRUeXBlcywgU2VydmljZU91dHB1dFR5cGVzPixcbiAgICBjb25maWd1cmF0aW9uOiBEeW5hbW9EQkRvY3VtZW50Q2xpZW50UmVzb2x2ZWRDb25maWcsXG4gICAgb3B0aW9ucz86IF9fSHR0cEhhbmRsZXJPcHRpb25zXG4gICk6IEhhbmRsZXI8UXVlcnlDb21tYW5kSW5wdXQsIFF1ZXJ5Q29tbWFuZE91dHB1dD4ge1xuICAgIGNvbnN0IHsgbWFyc2hhbGxPcHRpb25zLCB1bm1hcnNoYWxsT3B0aW9ucyB9ID0gY29uZmlndXJhdGlvbi50cmFuc2xhdGVDb25maWcgfHwge307XG4gICAgY29uc3QgY29tbWFuZCA9IG5ldyBfX1F1ZXJ5Q29tbWFuZChtYXJzaGFsbElucHV0KHRoaXMuaW5wdXQsIHRoaXMuaW5wdXRLZXlOb2RlcywgbWFyc2hhbGxPcHRpb25zKSk7XG4gICAgY29uc3QgaGFuZGxlciA9IGNvbW1hbmQucmVzb2x2ZU1pZGRsZXdhcmUoY2xpZW50U3RhY2ssIGNvbmZpZ3VyYXRpb24sIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBoYW5kbGVyKGNvbW1hbmQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgb3V0cHV0OiB1bm1hcnNoYWxsT3V0cHV0KGRhdGEub3V0cHV0LCB0aGlzLm91dHB1dEtleU5vZGVzLCB1bm1hcnNoYWxsT3B0aW9ucyksXG4gICAgICB9O1xuICAgIH07XG4gIH1cbn1cbiJdfQ==