"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Forecastquery = void 0;
const ForecastqueryClient_1 = require("./ForecastqueryClient");
const QueryForecastCommand_1 = require("./commands/QueryForecastCommand");
/**
 * <p>Provides APIs for creating and managing Amazon Forecast resources.</p>
 */
class Forecastquery extends ForecastqueryClient_1.ForecastqueryClient {
    queryForecast(args, optionsOrCb, cb) {
        const command = new QueryForecastCommand_1.QueryForecastCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.Forecastquery = Forecastquery;
//# sourceMappingURL=Forecastquery.js.map