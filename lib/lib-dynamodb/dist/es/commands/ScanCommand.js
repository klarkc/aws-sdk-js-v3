import { __assign, __awaiter, __extends, __generator } from "tslib";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import { ScanCommand as __ScanCommand, } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * ScanCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
var ScanCommand = /** @class */ (function (_super) {
    __extends(ScanCommand, _super);
    function ScanCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        _this.inputKeyNodes = [
            {
                key: "ScanFilter",
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
    ScanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        var _this = this;
        var _a = configuration.translateConfig || {}, marshallOptions = _a.marshallOptions, unmarshallOptions = _a.unmarshallOptions;
        var command = new __ScanCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
    return ScanCommand;
}($Command));
export { ScanCommand };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NhbkNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvU2NhbkNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRSxPQUFPLEVBRUwsV0FBVyxJQUFJLGFBQWEsR0FHN0IsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsT0FBTyxJQUFJLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBd0I3RDs7Ozs7O0dBTUc7QUFDSDtJQUFpQywrQkFBbUY7SUFhbEgscUJBQXFCLEtBQXVCO1FBQTVDLFlBQ0UsaUJBQU8sU0FDUjtRQUZvQixXQUFLLEdBQUwsS0FBSyxDQUFrQjtRQVozQixtQkFBYSxHQUFHO1lBQy9CO2dCQUNFLEdBQUcsRUFBRSxZQUFZO2dCQUNqQixRQUFRLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztpQkFDMUM7YUFDRjtZQUNELEVBQUUsR0FBRyxFQUFFLG1CQUFtQixFQUFFO1lBQzVCLEVBQUUsR0FBRyxFQUFFLDJCQUEyQixFQUFFO1NBQ3JDLENBQUM7UUFDZSxvQkFBYyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDOztJQUlsRixDQUFDO0lBRUQ7O09BRUc7SUFDSCx1Q0FBaUIsR0FBakIsVUFDRSxXQUFtRSxFQUNuRSxhQUFtRCxFQUNuRCxPQUE4QjtRQUhoQyxpQkFnQkM7UUFYTyxJQUFBLEtBQXlDLGFBQWEsQ0FBQyxlQUFlLElBQUksRUFBRSxFQUExRSxlQUFlLHFCQUFBLEVBQUUsaUJBQWlCLHVCQUF3QyxDQUFDO1FBQ25GLElBQU0sT0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNsRyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUvRSxPQUFPOzs7OzRCQUNRLHFCQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQTs7d0JBQTdCLElBQUksR0FBRyxTQUFzQjt3QkFDbkMsNENBQ0ssSUFBSSxLQUNQLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsS0FDN0U7OzthQUNILENBQUM7SUFDSixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBckNELENBQWlDLFFBQVEsR0FxQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1vREJEb2N1bWVudENsaWVudFJlc29sdmVkQ29uZmlnLCBTZXJ2aWNlSW5wdXRUeXBlcywgU2VydmljZU91dHB1dFR5cGVzIH0gZnJvbSBcIi4uL0R5bmFtb0RCRG9jdW1lbnRDbGllbnRcIjtcbmltcG9ydCB7IG1hcnNoYWxsSW5wdXQsIHVubWFyc2hhbGxPdXRwdXQgfSBmcm9tIFwiLi4vY29tbWFuZHMvdXRpbHNcIjtcbmltcG9ydCB7XG4gIENvbmRpdGlvbixcbiAgU2NhbkNvbW1hbmQgYXMgX19TY2FuQ29tbWFuZCxcbiAgU2NhbkNvbW1hbmRJbnB1dCBhcyBfX1NjYW5Db21tYW5kSW5wdXQsXG4gIFNjYW5Db21tYW5kT3V0cHV0IGFzIF9fU2NhbkNvbW1hbmRPdXRwdXQsXG59IGZyb20gXCJAYXdzLXNkay9jbGllbnQtZHluYW1vZGJcIjtcbmltcG9ydCB7IENvbW1hbmQgYXMgJENvbW1hbmQgfSBmcm9tIFwiQGF3cy1zZGsvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgSGFuZGxlciwgTWlkZGxld2FyZVN0YWNrLCBIdHRwSGFuZGxlck9wdGlvbnMgYXMgX19IdHRwSGFuZGxlck9wdGlvbnMgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtZHluYW1vZGJcIjtcblxuZXhwb3J0IHR5cGUgU2NhbkNvbW1hbmRJbnB1dCA9IE9taXQ8XG4gIF9fU2NhbkNvbW1hbmRJbnB1dCxcbiAgXCJTY2FuRmlsdGVyXCIgfCBcIkV4Y2x1c2l2ZVN0YXJ0S2V5XCIgfCBcIkV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXNcIlxuPiAmIHtcbiAgU2NhbkZpbHRlcj86IHtcbiAgICBba2V5OiBzdHJpbmddOiBPbWl0PENvbmRpdGlvbiwgXCJBdHRyaWJ1dGVWYWx1ZUxpc3RcIj4gJiB7XG4gICAgICBBdHRyaWJ1dGVWYWx1ZUxpc3Q/OiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZVtdO1xuICAgIH07XG4gIH07XG4gIEV4Y2x1c2l2ZVN0YXJ0S2V5PzogeyBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9O1xuICBFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzPzogeyBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9O1xufTtcblxuZXhwb3J0IHR5cGUgU2NhbkNvbW1hbmRPdXRwdXQgPSBPbWl0PF9fU2NhbkNvbW1hbmRPdXRwdXQsIFwiSXRlbXNcIiB8IFwiTGFzdEV2YWx1YXRlZEtleVwiPiAmIHtcbiAgSXRlbXM/OiB7XG4gICAgW2tleTogc3RyaW5nXTogTmF0aXZlQXR0cmlidXRlVmFsdWU7XG4gIH1bXTtcbiAgTGFzdEV2YWx1YXRlZEtleT86IHsgW2tleTogc3RyaW5nXTogTmF0aXZlQXR0cmlidXRlVmFsdWUgfTtcbn07XG5cbi8qKlxuICogQWNjZXB0cyBuYXRpdmUgSmF2YVNjcmlwdCB0eXBlcyBpbnN0ZWFkIG9mIGBBdHRyaWJ1dGVWYWx1ZWBzLCBhbmQgY2FsbHNcbiAqIFNjYW5Db21tYW5kIG9wZXJhdGlvbiBmcm9tIHtAbGluayBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9AYXdzLXNkay9jbGllbnQtZHluYW1vZGIgQGF3cy1zZGsvY2xpZW50LWR5bmFtb2RifS5cbiAqXG4gKiBKYXZhU2NyaXB0IG9iamVjdHMgcGFzc2VkIGluIGFzIHBhcmFtZXRlcnMgYXJlIG1hcnNoYWxsZWQgaW50byBgQXR0cmlidXRlVmFsdWVgIHNoYXBlc1xuICogcmVxdWlyZWQgYnkgQW1hem9uIER5bmFtb0RCLiBSZXNwb25zZXMgZnJvbSBEeW5hbW9EQiBhcmUgdW5tYXJzaGFsbGVkIGludG8gcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICovXG5leHBvcnQgY2xhc3MgU2NhbkNvbW1hbmQgZXh0ZW5kcyAkQ29tbWFuZDxTY2FuQ29tbWFuZElucHV0LCBTY2FuQ29tbWFuZE91dHB1dCwgRHluYW1vREJEb2N1bWVudENsaWVudFJlc29sdmVkQ29uZmlnPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5wdXRLZXlOb2RlcyA9IFtcbiAgICB7XG4gICAgICBrZXk6IFwiU2NhbkZpbHRlclwiLFxuICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgY2hpbGRyZW46IFt7IGtleTogXCJBdHRyaWJ1dGVWYWx1ZUxpc3RcIiB9XSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7IGtleTogXCJFeGNsdXNpdmVTdGFydEtleVwiIH0sXG4gICAgeyBrZXk6IFwiRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlc1wiIH0sXG4gIF07XG4gIHByaXZhdGUgcmVhZG9ubHkgb3V0cHV0S2V5Tm9kZXMgPSBbeyBrZXk6IFwiSXRlbXNcIiB9LCB7IGtleTogXCJMYXN0RXZhbHVhdGVkS2V5XCIgfV07XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgaW5wdXQ6IFNjYW5Db21tYW5kSW5wdXQpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcmVzb2x2ZU1pZGRsZXdhcmUoXG4gICAgY2xpZW50U3RhY2s6IE1pZGRsZXdhcmVTdGFjazxTZXJ2aWNlSW5wdXRUeXBlcywgU2VydmljZU91dHB1dFR5cGVzPixcbiAgICBjb25maWd1cmF0aW9uOiBEeW5hbW9EQkRvY3VtZW50Q2xpZW50UmVzb2x2ZWRDb25maWcsXG4gICAgb3B0aW9ucz86IF9fSHR0cEhhbmRsZXJPcHRpb25zXG4gICk6IEhhbmRsZXI8U2NhbkNvbW1hbmRJbnB1dCwgU2NhbkNvbW1hbmRPdXRwdXQ+IHtcbiAgICBjb25zdCB7IG1hcnNoYWxsT3B0aW9ucywgdW5tYXJzaGFsbE9wdGlvbnMgfSA9IGNvbmZpZ3VyYXRpb24udHJhbnNsYXRlQ29uZmlnIHx8IHt9O1xuICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgX19TY2FuQ29tbWFuZChtYXJzaGFsbElucHV0KHRoaXMuaW5wdXQsIHRoaXMuaW5wdXRLZXlOb2RlcywgbWFyc2hhbGxPcHRpb25zKSk7XG4gICAgY29uc3QgaGFuZGxlciA9IGNvbW1hbmQucmVzb2x2ZU1pZGRsZXdhcmUoY2xpZW50U3RhY2ssIGNvbmZpZ3VyYXRpb24sIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBoYW5kbGVyKGNvbW1hbmQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgb3V0cHV0OiB1bm1hcnNoYWxsT3V0cHV0KGRhdGEub3V0cHV0LCB0aGlzLm91dHB1dEtleU5vZGVzLCB1bm1hcnNoYWxsT3B0aW9ucyksXG4gICAgICB9O1xuICAgIH07XG4gIH1cbn1cbiJdfQ==