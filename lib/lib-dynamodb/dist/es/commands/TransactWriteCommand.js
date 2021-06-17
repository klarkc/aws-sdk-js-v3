import { __assign, __awaiter, __extends, __generator } from "tslib";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import { TransactWriteItemsCommand as __TransactWriteItemsCommand, } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * TransactWriteItemsCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
var TransactWriteCommand = /** @class */ (function (_super) {
    __extends(TransactWriteCommand, _super);
    function TransactWriteCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        _this.inputKeyNodes = [
            {
                key: "TransactItems",
                children: [
                    { key: "ConditionCheck", children: [{ key: "Key" }, { key: "ExpressionAttributeValues" }] },
                    { key: "Put", children: [{ key: "Item" }, { key: "ExpressionAttributeValues" }] },
                    { key: "Delete", children: [{ key: "Key" }, { key: "ExpressionAttributeValues" }] },
                    { key: "Update", children: [{ key: "Key" }, { key: "ExpressionAttributeValues" }] },
                ],
            },
        ];
        _this.outputKeyNodes = [
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
    TransactWriteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        var _this = this;
        var _a = configuration.translateConfig || {}, marshallOptions = _a.marshallOptions, unmarshallOptions = _a.unmarshallOptions;
        var command = new __TransactWriteItemsCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
    return TransactWriteCommand;
}($Command));
export { TransactWriteCommand };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3RXcml0ZUNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvVHJhbnNhY3RXcml0ZUNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRSxPQUFPLEVBT0wseUJBQXlCLElBQUksMkJBQTJCLEdBR3pELE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLE9BQU8sSUFBSSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQW1DN0Q7Ozs7OztHQU1HO0FBQ0g7SUFBMEMsd0NBSXpDO0lBcUJDLDhCQUFxQixLQUFnQztRQUFyRCxZQUNFLGlCQUFPLFNBQ1I7UUFGb0IsV0FBSyxHQUFMLEtBQUssQ0FBMkI7UUFwQnBDLG1CQUFhLEdBQUc7WUFDL0I7Z0JBQ0UsR0FBRyxFQUFFLGVBQWU7Z0JBQ3BCLFFBQVEsRUFBRTtvQkFDUixFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSwyQkFBMkIsRUFBRSxDQUFDLEVBQUU7b0JBQzNGLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSwyQkFBMkIsRUFBRSxDQUFDLEVBQUU7b0JBQ2pGLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSwyQkFBMkIsRUFBRSxDQUFDLEVBQUU7b0JBQ25GLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSwyQkFBMkIsRUFBRSxDQUFDLEVBQUU7aUJBQ3BGO2FBQ0Y7U0FDRixDQUFDO1FBQ2Usb0JBQWMsR0FBRztZQUNoQztnQkFDRSxHQUFHLEVBQUUsdUJBQXVCO2dCQUM1QixRQUFRLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQztpQkFDekM7YUFDRjtTQUNGLENBQUM7O0lBSUYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0RBQWlCLEdBQWpCLFVBQ0UsV0FBbUUsRUFDbkUsYUFBbUQsRUFDbkQsT0FBOEI7UUFIaEMsaUJBZ0JDO1FBWE8sSUFBQSxLQUF5QyxhQUFhLENBQUMsZUFBZSxJQUFJLEVBQUUsRUFBMUUsZUFBZSxxQkFBQSxFQUFFLGlCQUFpQix1QkFBd0MsQ0FBQztRQUNuRixJQUFNLE9BQU8sR0FBRyxJQUFJLDJCQUEyQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNoSCxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUvRSxPQUFPOzs7OzRCQUNRLHFCQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQTs7d0JBQTdCLElBQUksR0FBRyxTQUFzQjt3QkFDbkMsNENBQ0ssSUFBSSxLQUNQLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsS0FDN0U7OzthQUNILENBQUM7SUFDSixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBakRELENBQTBDLFFBQVEsR0FpRGpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1vREJEb2N1bWVudENsaWVudFJlc29sdmVkQ29uZmlnLCBTZXJ2aWNlSW5wdXRUeXBlcywgU2VydmljZU91dHB1dFR5cGVzIH0gZnJvbSBcIi4uL0R5bmFtb0RCRG9jdW1lbnRDbGllbnRcIjtcbmltcG9ydCB7IG1hcnNoYWxsSW5wdXQsIHVubWFyc2hhbGxPdXRwdXQgfSBmcm9tIFwiLi4vY29tbWFuZHMvdXRpbHNcIjtcbmltcG9ydCB7XG4gIENvbmRpdGlvbkNoZWNrLFxuICBEZWxldGUsXG4gIEl0ZW1Db2xsZWN0aW9uTWV0cmljcyxcbiAgUHV0LFxuICBUcmFuc2FjdFdyaXRlSXRlbSxcbiAgVXBkYXRlLFxuICBUcmFuc2FjdFdyaXRlSXRlbXNDb21tYW5kIGFzIF9fVHJhbnNhY3RXcml0ZUl0ZW1zQ29tbWFuZCxcbiAgVHJhbnNhY3RXcml0ZUl0ZW1zQ29tbWFuZElucHV0IGFzIF9fVHJhbnNhY3RXcml0ZUl0ZW1zQ29tbWFuZElucHV0LFxuICBUcmFuc2FjdFdyaXRlSXRlbXNDb21tYW5kT3V0cHV0IGFzIF9fVHJhbnNhY3RXcml0ZUl0ZW1zQ29tbWFuZE91dHB1dCxcbn0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1keW5hbW9kYlwiO1xuaW1wb3J0IHsgQ29tbWFuZCBhcyAkQ29tbWFuZCB9IGZyb20gXCJAYXdzLXNkay9zbWl0aHktY2xpZW50XCI7XG5pbXBvcnQgeyBIYW5kbGVyLCBNaWRkbGV3YXJlU3RhY2ssIEh0dHBIYW5kbGVyT3B0aW9ucyBhcyBfX0h0dHBIYW5kbGVyT3B0aW9ucyB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgTmF0aXZlQXR0cmlidXRlVmFsdWUgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1keW5hbW9kYlwiO1xuXG5leHBvcnQgdHlwZSBUcmFuc2FjdFdyaXRlQ29tbWFuZElucHV0ID0gT21pdDxfX1RyYW5zYWN0V3JpdGVJdGVtc0NvbW1hbmRJbnB1dCwgXCJUcmFuc2FjdEl0ZW1zXCI+ICYge1xuICBUcmFuc2FjdEl0ZW1zOlxuICAgIHwgKE9taXQ8VHJhbnNhY3RXcml0ZUl0ZW0sIFwiQ29uZGl0aW9uQ2hlY2tcIiB8IFwiUHV0XCIgfCBcIkRlbGV0ZVwiIHwgXCJVcGRhdGVcIj4gJiB7XG4gICAgICAgIENvbmRpdGlvbkNoZWNrPzogT21pdDxDb25kaXRpb25DaGVjaywgXCJLZXlcIiB8IFwiRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlc1wiPiAmIHtcbiAgICAgICAgICBLZXk6IHsgW2tleTogc3RyaW5nXTogTmF0aXZlQXR0cmlidXRlVmFsdWUgfSB8IHVuZGVmaW5lZDtcbiAgICAgICAgICBFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzPzogeyBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9O1xuICAgICAgICB9O1xuICAgICAgICBQdXQ/OiBPbWl0PFB1dCwgXCJJdGVtXCIgfCBcIkV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXNcIj4gJiB7XG4gICAgICAgICAgSXRlbTogeyBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9IHwgdW5kZWZpbmVkO1xuICAgICAgICAgIEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM/OiB7IFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH07XG4gICAgICAgIH07XG4gICAgICAgIERlbGV0ZT86IE9taXQ8RGVsZXRlLCBcIktleVwiIHwgXCJFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzXCI+ICYge1xuICAgICAgICAgIEtleTogeyBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9IHwgdW5kZWZpbmVkO1xuICAgICAgICAgIEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM/OiB7IFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH07XG4gICAgICAgIH07XG4gICAgICAgIFVwZGF0ZT86IE9taXQ8VXBkYXRlLCBcIktleVwiIHwgXCJFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzXCI+ICYge1xuICAgICAgICAgIEtleTogeyBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9IHwgdW5kZWZpbmVkO1xuICAgICAgICAgIEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM/OiB7IFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH07XG4gICAgICAgIH07XG4gICAgICB9KVtdXG4gICAgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgdHlwZSBUcmFuc2FjdFdyaXRlQ29tbWFuZE91dHB1dCA9IE9taXQ8X19UcmFuc2FjdFdyaXRlSXRlbXNDb21tYW5kT3V0cHV0LCBcIkl0ZW1Db2xsZWN0aW9uTWV0cmljc1wiPiAmIHtcbiAgSXRlbUNvbGxlY3Rpb25NZXRyaWNzPzoge1xuICAgIFtrZXk6IHN0cmluZ106IChPbWl0PEl0ZW1Db2xsZWN0aW9uTWV0cmljcywgXCJJdGVtQ29sbGVjdGlvbktleVwiPiAmIHtcbiAgICAgIEl0ZW1Db2xsZWN0aW9uS2V5PzogeyBba2V5OiBzdHJpbmddOiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZSB9O1xuICAgIH0pW107XG4gIH07XG59O1xuXG4vKipcbiAqIEFjY2VwdHMgbmF0aXZlIEphdmFTY3JpcHQgdHlwZXMgaW5zdGVhZCBvZiBgQXR0cmlidXRlVmFsdWVgcywgYW5kIGNhbGxzXG4gKiBUcmFuc2FjdFdyaXRlSXRlbXNDb21tYW5kIG9wZXJhdGlvbiBmcm9tIHtAbGluayBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9AYXdzLXNkay9jbGllbnQtZHluYW1vZGIgQGF3cy1zZGsvY2xpZW50LWR5bmFtb2RifS5cbiAqXG4gKiBKYXZhU2NyaXB0IG9iamVjdHMgcGFzc2VkIGluIGFzIHBhcmFtZXRlcnMgYXJlIG1hcnNoYWxsZWQgaW50byBgQXR0cmlidXRlVmFsdWVgIHNoYXBlc1xuICogcmVxdWlyZWQgYnkgQW1hem9uIER5bmFtb0RCLiBSZXNwb25zZXMgZnJvbSBEeW5hbW9EQiBhcmUgdW5tYXJzaGFsbGVkIGludG8gcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNhY3RXcml0ZUNvbW1hbmQgZXh0ZW5kcyAkQ29tbWFuZDxcbiAgVHJhbnNhY3RXcml0ZUNvbW1hbmRJbnB1dCxcbiAgVHJhbnNhY3RXcml0ZUNvbW1hbmRPdXRwdXQsXG4gIER5bmFtb0RCRG9jdW1lbnRDbGllbnRSZXNvbHZlZENvbmZpZ1xuPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5wdXRLZXlOb2RlcyA9IFtcbiAgICB7XG4gICAgICBrZXk6IFwiVHJhbnNhY3RJdGVtc1wiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgeyBrZXk6IFwiQ29uZGl0aW9uQ2hlY2tcIiwgY2hpbGRyZW46IFt7IGtleTogXCJLZXlcIiB9LCB7IGtleTogXCJFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzXCIgfV0gfSxcbiAgICAgICAgeyBrZXk6IFwiUHV0XCIsIGNoaWxkcmVuOiBbeyBrZXk6IFwiSXRlbVwiIH0sIHsga2V5OiBcIkV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXNcIiB9XSB9LFxuICAgICAgICB7IGtleTogXCJEZWxldGVcIiwgY2hpbGRyZW46IFt7IGtleTogXCJLZXlcIiB9LCB7IGtleTogXCJFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzXCIgfV0gfSxcbiAgICAgICAgeyBrZXk6IFwiVXBkYXRlXCIsIGNoaWxkcmVuOiBbeyBrZXk6IFwiS2V5XCIgfSwgeyBrZXk6IFwiRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlc1wiIH1dIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG4gIHByaXZhdGUgcmVhZG9ubHkgb3V0cHV0S2V5Tm9kZXMgPSBbXG4gICAge1xuICAgICAga2V5OiBcIkl0ZW1Db2xsZWN0aW9uTWV0cmljc1wiLFxuICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgY2hpbGRyZW46IFt7IGtleTogXCJJdGVtQ29sbGVjdGlvbktleVwiIH1dLFxuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGlucHV0OiBUcmFuc2FjdFdyaXRlQ29tbWFuZElucHV0KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHJlc29sdmVNaWRkbGV3YXJlKFxuICAgIGNsaWVudFN0YWNrOiBNaWRkbGV3YXJlU3RhY2s8U2VydmljZUlucHV0VHlwZXMsIFNlcnZpY2VPdXRwdXRUeXBlcz4sXG4gICAgY29uZmlndXJhdGlvbjogRHluYW1vREJEb2N1bWVudENsaWVudFJlc29sdmVkQ29uZmlnLFxuICAgIG9wdGlvbnM/OiBfX0h0dHBIYW5kbGVyT3B0aW9uc1xuICApOiBIYW5kbGVyPFRyYW5zYWN0V3JpdGVDb21tYW5kSW5wdXQsIFRyYW5zYWN0V3JpdGVDb21tYW5kT3V0cHV0PiB7XG4gICAgY29uc3QgeyBtYXJzaGFsbE9wdGlvbnMsIHVubWFyc2hhbGxPcHRpb25zIH0gPSBjb25maWd1cmF0aW9uLnRyYW5zbGF0ZUNvbmZpZyB8fCB7fTtcbiAgICBjb25zdCBjb21tYW5kID0gbmV3IF9fVHJhbnNhY3RXcml0ZUl0ZW1zQ29tbWFuZChtYXJzaGFsbElucHV0KHRoaXMuaW5wdXQsIHRoaXMuaW5wdXRLZXlOb2RlcywgbWFyc2hhbGxPcHRpb25zKSk7XG4gICAgY29uc3QgaGFuZGxlciA9IGNvbW1hbmQucmVzb2x2ZU1pZGRsZXdhcmUoY2xpZW50U3RhY2ssIGNvbmZpZ3VyYXRpb24sIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBoYW5kbGVyKGNvbW1hbmQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgb3V0cHV0OiB1bm1hcnNoYWxsT3V0cHV0KGRhdGEub3V0cHV0LCB0aGlzLm91dHB1dEtleU5vZGVzLCB1bm1hcnNoYWxsT3B0aW9ucyksXG4gICAgICB9O1xuICAgIH07XG4gIH1cbn1cbiJdfQ==