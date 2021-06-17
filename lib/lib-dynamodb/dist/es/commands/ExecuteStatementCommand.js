import { __assign, __awaiter, __extends, __generator } from "tslib";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import { ExecuteStatementCommand as __ExecuteStatementCommand, } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * ExecuteStatementCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
var ExecuteStatementCommand = /** @class */ (function (_super) {
    __extends(ExecuteStatementCommand, _super);
    function ExecuteStatementCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        _this.inputKeyNodes = [{ key: "Parameters" }];
        _this.outputKeyNodes = [{ key: "Items" }];
        return _this;
    }
    /**
     * @internal
     */
    ExecuteStatementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        var _this = this;
        var _a = configuration.translateConfig || {}, marshallOptions = _a.marshallOptions, unmarshallOptions = _a.unmarshallOptions;
        var command = new __ExecuteStatementCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
    return ExecuteStatementCommand;
}($Command));
export { ExecuteStatementCommand };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhlY3V0ZVN0YXRlbWVudENvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvRXhlY3V0ZVN0YXRlbWVudENvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsdUJBQXVCLElBQUkseUJBQXlCLEdBR3JELE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLE9BQU8sSUFBSSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQWM3RDs7Ozs7O0dBTUc7QUFDSDtJQUE2QywyQ0FJNUM7SUFJQyxpQ0FBcUIsS0FBbUM7UUFBeEQsWUFDRSxpQkFBTyxTQUNSO1FBRm9CLFdBQUssR0FBTCxLQUFLLENBQThCO1FBSHZDLG1CQUFhLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLG9CQUFjLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDOztJQUlyRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxtREFBaUIsR0FBakIsVUFDRSxXQUFtRSxFQUNuRSxhQUFtRCxFQUNuRCxPQUE4QjtRQUhoQyxpQkFnQkM7UUFYTyxJQUFBLEtBQXlDLGFBQWEsQ0FBQyxlQUFlLElBQUksRUFBRSxFQUExRSxlQUFlLHFCQUFBLEVBQUUsaUJBQWlCLHVCQUF3QyxDQUFDO1FBQ25GLElBQU0sT0FBTyxHQUFHLElBQUkseUJBQXlCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQzlHLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRS9FLE9BQU87Ozs7NEJBQ1EscUJBQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBN0IsSUFBSSxHQUFHLFNBQXNCO3dCQUNuQyw0Q0FDSyxJQUFJLEtBQ1AsTUFBTSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxLQUM3RTs7O2FBQ0gsQ0FBQztJQUNKLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFoQ0QsQ0FBNkMsUUFBUSxHQWdDcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbW9EQkRvY3VtZW50Q2xpZW50UmVzb2x2ZWRDb25maWcsIFNlcnZpY2VJbnB1dFR5cGVzLCBTZXJ2aWNlT3V0cHV0VHlwZXMgfSBmcm9tIFwiLi4vRHluYW1vREJEb2N1bWVudENsaWVudFwiO1xuaW1wb3J0IHsgbWFyc2hhbGxJbnB1dCwgdW5tYXJzaGFsbE91dHB1dCB9IGZyb20gXCIuLi9jb21tYW5kcy91dGlsc1wiO1xuaW1wb3J0IHtcbiAgRXhlY3V0ZVN0YXRlbWVudENvbW1hbmQgYXMgX19FeGVjdXRlU3RhdGVtZW50Q29tbWFuZCxcbiAgRXhlY3V0ZVN0YXRlbWVudENvbW1hbmRJbnB1dCBhcyBfX0V4ZWN1dGVTdGF0ZW1lbnRDb21tYW5kSW5wdXQsXG4gIEV4ZWN1dGVTdGF0ZW1lbnRDb21tYW5kT3V0cHV0IGFzIF9fRXhlY3V0ZVN0YXRlbWVudENvbW1hbmRPdXRwdXQsXG59IGZyb20gXCJAYXdzLXNkay9jbGllbnQtZHluYW1vZGJcIjtcbmltcG9ydCB7IENvbW1hbmQgYXMgJENvbW1hbmQgfSBmcm9tIFwiQGF3cy1zZGsvc21pdGh5LWNsaWVudFwiO1xuaW1wb3J0IHsgSGFuZGxlciwgTWlkZGxld2FyZVN0YWNrLCBIdHRwSGFuZGxlck9wdGlvbnMgYXMgX19IdHRwSGFuZGxlck9wdGlvbnMgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtZHluYW1vZGJcIjtcblxuZXhwb3J0IHR5cGUgRXhlY3V0ZVN0YXRlbWVudENvbW1hbmRJbnB1dCA9IE9taXQ8X19FeGVjdXRlU3RhdGVtZW50Q29tbWFuZElucHV0LCBcIlBhcmFtZXRlcnNcIj4gJiB7XG4gIFBhcmFtZXRlcnM/OiBOYXRpdmVBdHRyaWJ1dGVWYWx1ZVtdO1xufTtcblxuZXhwb3J0IHR5cGUgRXhlY3V0ZVN0YXRlbWVudENvbW1hbmRPdXRwdXQgPSBPbWl0PF9fRXhlY3V0ZVN0YXRlbWVudENvbW1hbmRPdXRwdXQsIFwiSXRlbXNcIj4gJiB7XG4gIEl0ZW1zPzoge1xuICAgIFtrZXk6IHN0cmluZ106IE5hdGl2ZUF0dHJpYnV0ZVZhbHVlO1xuICB9W107XG59O1xuXG4vKipcbiAqIEFjY2VwdHMgbmF0aXZlIEphdmFTY3JpcHQgdHlwZXMgaW5zdGVhZCBvZiBgQXR0cmlidXRlVmFsdWVgcywgYW5kIGNhbGxzXG4gKiBFeGVjdXRlU3RhdGVtZW50Q29tbWFuZCBvcGVyYXRpb24gZnJvbSB7QGxpbmsgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvQGF3cy1zZGsvY2xpZW50LWR5bmFtb2RiIEBhd3Mtc2RrL2NsaWVudC1keW5hbW9kYn0uXG4gKlxuICogSmF2YVNjcmlwdCBvYmplY3RzIHBhc3NlZCBpbiBhcyBwYXJhbWV0ZXJzIGFyZSBtYXJzaGFsbGVkIGludG8gYEF0dHJpYnV0ZVZhbHVlYCBzaGFwZXNcbiAqIHJlcXVpcmVkIGJ5IEFtYXpvbiBEeW5hbW9EQi4gUmVzcG9uc2VzIGZyb20gRHluYW1vREIgYXJlIHVubWFyc2hhbGxlZCBpbnRvIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4ZWN1dGVTdGF0ZW1lbnRDb21tYW5kIGV4dGVuZHMgJENvbW1hbmQ8XG4gIEV4ZWN1dGVTdGF0ZW1lbnRDb21tYW5kSW5wdXQsXG4gIEV4ZWN1dGVTdGF0ZW1lbnRDb21tYW5kT3V0cHV0LFxuICBEeW5hbW9EQkRvY3VtZW50Q2xpZW50UmVzb2x2ZWRDb25maWdcbj4ge1xuICBwcml2YXRlIHJlYWRvbmx5IGlucHV0S2V5Tm9kZXMgPSBbeyBrZXk6IFwiUGFyYW1ldGVyc1wiIH1dO1xuICBwcml2YXRlIHJlYWRvbmx5IG91dHB1dEtleU5vZGVzID0gW3sga2V5OiBcIkl0ZW1zXCIgfV07XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgaW5wdXQ6IEV4ZWN1dGVTdGF0ZW1lbnRDb21tYW5kSW5wdXQpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcmVzb2x2ZU1pZGRsZXdhcmUoXG4gICAgY2xpZW50U3RhY2s6IE1pZGRsZXdhcmVTdGFjazxTZXJ2aWNlSW5wdXRUeXBlcywgU2VydmljZU91dHB1dFR5cGVzPixcbiAgICBjb25maWd1cmF0aW9uOiBEeW5hbW9EQkRvY3VtZW50Q2xpZW50UmVzb2x2ZWRDb25maWcsXG4gICAgb3B0aW9ucz86IF9fSHR0cEhhbmRsZXJPcHRpb25zXG4gICk6IEhhbmRsZXI8RXhlY3V0ZVN0YXRlbWVudENvbW1hbmRJbnB1dCwgRXhlY3V0ZVN0YXRlbWVudENvbW1hbmRPdXRwdXQ+IHtcbiAgICBjb25zdCB7IG1hcnNoYWxsT3B0aW9ucywgdW5tYXJzaGFsbE9wdGlvbnMgfSA9IGNvbmZpZ3VyYXRpb24udHJhbnNsYXRlQ29uZmlnIHx8IHt9O1xuICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgX19FeGVjdXRlU3RhdGVtZW50Q29tbWFuZChtYXJzaGFsbElucHV0KHRoaXMuaW5wdXQsIHRoaXMuaW5wdXRLZXlOb2RlcywgbWFyc2hhbGxPcHRpb25zKSk7XG4gICAgY29uc3QgaGFuZGxlciA9IGNvbW1hbmQucmVzb2x2ZU1pZGRsZXdhcmUoY2xpZW50U3RhY2ssIGNvbmZpZ3VyYXRpb24sIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBoYW5kbGVyKGNvbW1hbmQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgb3V0cHV0OiB1bm1hcnNoYWxsT3V0cHV0KGRhdGEub3V0cHV0LCB0aGlzLm91dHB1dEtleU5vZGVzLCB1bm1hcnNoYWxsT3B0aW9ucyksXG4gICAgICB9O1xuICAgIH07XG4gIH1cbn1cbiJdfQ==