"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalizeRuntime = void 0;
const PersonalizeRuntimeClient_1 = require("./PersonalizeRuntimeClient");
const GetPersonalizedRankingCommand_1 = require("./commands/GetPersonalizedRankingCommand");
const GetRecommendationsCommand_1 = require("./commands/GetRecommendationsCommand");
/**
 * <p></p>
 */
class PersonalizeRuntime extends PersonalizeRuntimeClient_1.PersonalizeRuntimeClient {
    getPersonalizedRanking(args, optionsOrCb, cb) {
        const command = new GetPersonalizedRankingCommand_1.GetPersonalizedRankingCommand(args);
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
    getRecommendations(args, optionsOrCb, cb) {
        const command = new GetRecommendationsCommand_1.GetRecommendationsCommand(args);
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
exports.PersonalizeRuntime = PersonalizeRuntime;
//# sourceMappingURL=PersonalizeRuntime.js.map