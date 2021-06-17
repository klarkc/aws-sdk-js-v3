import { __extends } from "tslib";
import { PinpointSMSVoiceClient } from "./PinpointSMSVoiceClient";
import { CreateConfigurationSetCommand, } from "./commands/CreateConfigurationSetCommand";
import { CreateConfigurationSetEventDestinationCommand, } from "./commands/CreateConfigurationSetEventDestinationCommand";
import { DeleteConfigurationSetCommand, } from "./commands/DeleteConfigurationSetCommand";
import { DeleteConfigurationSetEventDestinationCommand, } from "./commands/DeleteConfigurationSetEventDestinationCommand";
import { GetConfigurationSetEventDestinationsCommand, } from "./commands/GetConfigurationSetEventDestinationsCommand";
import { ListConfigurationSetsCommand, } from "./commands/ListConfigurationSetsCommand";
import { SendVoiceMessageCommand, } from "./commands/SendVoiceMessageCommand";
import { UpdateConfigurationSetEventDestinationCommand, } from "./commands/UpdateConfigurationSetEventDestinationCommand";
/**
 * Pinpoint SMS and Voice Messaging public facing APIs
 */
var PinpointSMSVoice = /** @class */ (function (_super) {
    __extends(PinpointSMSVoice, _super);
    function PinpointSMSVoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PinpointSMSVoice.prototype.createConfigurationSet = function (args, optionsOrCb, cb) {
        var command = new CreateConfigurationSetCommand(args);
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
    PinpointSMSVoice.prototype.createConfigurationSetEventDestination = function (args, optionsOrCb, cb) {
        var command = new CreateConfigurationSetEventDestinationCommand(args);
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
    PinpointSMSVoice.prototype.deleteConfigurationSet = function (args, optionsOrCb, cb) {
        var command = new DeleteConfigurationSetCommand(args);
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
    PinpointSMSVoice.prototype.deleteConfigurationSetEventDestination = function (args, optionsOrCb, cb) {
        var command = new DeleteConfigurationSetEventDestinationCommand(args);
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
    PinpointSMSVoice.prototype.getConfigurationSetEventDestinations = function (args, optionsOrCb, cb) {
        var command = new GetConfigurationSetEventDestinationsCommand(args);
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
    PinpointSMSVoice.prototype.listConfigurationSets = function (args, optionsOrCb, cb) {
        var command = new ListConfigurationSetsCommand(args);
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
    PinpointSMSVoice.prototype.sendVoiceMessage = function (args, optionsOrCb, cb) {
        var command = new SendVoiceMessageCommand(args);
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
    PinpointSMSVoice.prototype.updateConfigurationSetEventDestination = function (args, optionsOrCb, cb) {
        var command = new UpdateConfigurationSetEventDestinationCommand(args);
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
    return PinpointSMSVoice;
}(PinpointSMSVoiceClient));
export { PinpointSMSVoice };
//# sourceMappingURL=PinpointSMSVoice.js.map