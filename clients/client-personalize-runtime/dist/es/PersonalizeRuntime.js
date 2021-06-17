import { __extends } from "tslib";
import { PersonalizeRuntimeClient } from "./PersonalizeRuntimeClient";
import { GetPersonalizedRankingCommand, } from "./commands/GetPersonalizedRankingCommand";
import { GetRecommendationsCommand, } from "./commands/GetRecommendationsCommand";
/**
 * <p></p>
 */
var PersonalizeRuntime = /** @class */ (function (_super) {
    __extends(PersonalizeRuntime, _super);
    function PersonalizeRuntime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonalizeRuntime.prototype.getPersonalizedRanking = function (args, optionsOrCb, cb) {
        var command = new GetPersonalizedRankingCommand(args);
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
    PersonalizeRuntime.prototype.getRecommendations = function (args, optionsOrCb, cb) {
        var command = new GetRecommendationsCommand(args);
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
    return PersonalizeRuntime;
}(PersonalizeRuntimeClient));
export { PersonalizeRuntime };
//# sourceMappingURL=PersonalizeRuntime.js.map