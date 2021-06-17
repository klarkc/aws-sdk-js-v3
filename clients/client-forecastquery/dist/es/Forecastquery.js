import { __extends } from "tslib";
import { ForecastqueryClient } from "./ForecastqueryClient";
import { QueryForecastCommand, } from "./commands/QueryForecastCommand";
/**
 * <p>Provides APIs for creating and managing Amazon Forecast resources.</p>
 */
var Forecastquery = /** @class */ (function (_super) {
    __extends(Forecastquery, _super);
    function Forecastquery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Forecastquery.prototype.queryForecast = function (args, optionsOrCb, cb) {
        var command = new QueryForecastCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return Forecastquery;
}(ForecastqueryClient));
export { Forecastquery };
//# sourceMappingURL=Forecastquery.js.map