import { __extends } from "tslib";
import { LexRuntimeServiceClient } from "./LexRuntimeServiceClient";
import { DeleteSessionCommand, } from "./commands/DeleteSessionCommand";
import { GetSessionCommand } from "./commands/GetSessionCommand";
import { PostContentCommand } from "./commands/PostContentCommand";
import { PostTextCommand } from "./commands/PostTextCommand";
import { PutSessionCommand } from "./commands/PutSessionCommand";
/**
 * <p>Amazon Lex provides both build and runtime endpoints. Each endpoint
 *       provides a set of operations (API). Your conversational bot uses the
 *       runtime API to understand user utterances (user input text or voice). For
 *       example, suppose a user says "I want pizza", your bot sends this input to
 *       Amazon Lex using the runtime API. Amazon Lex recognizes that the user
 *       request is for the OrderPizza intent (one of the intents defined in the
 *       bot). Then Amazon Lex engages in user conversation on behalf of the bot to
 *       elicit required information (slot values, such as pizza size and crust
 *       type), and then performs fulfillment activity (that you configured when
 *       you created the bot). You use the build-time API to create and manage your
 *       Amazon Lex bot. For a list of build-time operations, see the build-time
 *       API, . </p>
 */
var LexRuntimeService = /** @class */ (function (_super) {
    __extends(LexRuntimeService, _super);
    function LexRuntimeService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LexRuntimeService.prototype.deleteSession = function (args, optionsOrCb, cb) {
        var command = new DeleteSessionCommand(args);
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
    LexRuntimeService.prototype.getSession = function (args, optionsOrCb, cb) {
        var command = new GetSessionCommand(args);
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
    LexRuntimeService.prototype.postContent = function (args, optionsOrCb, cb) {
        var command = new PostContentCommand(args);
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
    LexRuntimeService.prototype.postText = function (args, optionsOrCb, cb) {
        var command = new PostTextCommand(args);
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
    LexRuntimeService.prototype.putSession = function (args, optionsOrCb, cb) {
        var command = new PutSessionCommand(args);
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
    return LexRuntimeService;
}(LexRuntimeServiceClient));
export { LexRuntimeService };
//# sourceMappingURL=LexRuntimeService.js.map