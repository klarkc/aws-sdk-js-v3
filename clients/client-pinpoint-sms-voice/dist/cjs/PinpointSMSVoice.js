"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinpointSMSVoice = void 0;
const PinpointSMSVoiceClient_1 = require("./PinpointSMSVoiceClient");
const CreateConfigurationSetCommand_1 = require("./commands/CreateConfigurationSetCommand");
const CreateConfigurationSetEventDestinationCommand_1 = require("./commands/CreateConfigurationSetEventDestinationCommand");
const DeleteConfigurationSetCommand_1 = require("./commands/DeleteConfigurationSetCommand");
const DeleteConfigurationSetEventDestinationCommand_1 = require("./commands/DeleteConfigurationSetEventDestinationCommand");
const GetConfigurationSetEventDestinationsCommand_1 = require("./commands/GetConfigurationSetEventDestinationsCommand");
const ListConfigurationSetsCommand_1 = require("./commands/ListConfigurationSetsCommand");
const SendVoiceMessageCommand_1 = require("./commands/SendVoiceMessageCommand");
const UpdateConfigurationSetEventDestinationCommand_1 = require("./commands/UpdateConfigurationSetEventDestinationCommand");
/**
 * Pinpoint SMS and Voice Messaging public facing APIs
 */
class PinpointSMSVoice extends PinpointSMSVoiceClient_1.PinpointSMSVoiceClient {
    createConfigurationSet(args, optionsOrCb, cb) {
        const command = new CreateConfigurationSetCommand_1.CreateConfigurationSetCommand(args);
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
    createConfigurationSetEventDestination(args, optionsOrCb, cb) {
        const command = new CreateConfigurationSetEventDestinationCommand_1.CreateConfigurationSetEventDestinationCommand(args);
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
    deleteConfigurationSet(args, optionsOrCb, cb) {
        const command = new DeleteConfigurationSetCommand_1.DeleteConfigurationSetCommand(args);
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
    deleteConfigurationSetEventDestination(args, optionsOrCb, cb) {
        const command = new DeleteConfigurationSetEventDestinationCommand_1.DeleteConfigurationSetEventDestinationCommand(args);
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
    getConfigurationSetEventDestinations(args, optionsOrCb, cb) {
        const command = new GetConfigurationSetEventDestinationsCommand_1.GetConfigurationSetEventDestinationsCommand(args);
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
    listConfigurationSets(args, optionsOrCb, cb) {
        const command = new ListConfigurationSetsCommand_1.ListConfigurationSetsCommand(args);
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
    sendVoiceMessage(args, optionsOrCb, cb) {
        const command = new SendVoiceMessageCommand_1.SendVoiceMessageCommand(args);
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
    updateConfigurationSetEventDestination(args, optionsOrCb, cb) {
        const command = new UpdateConfigurationSetEventDestinationCommand_1.UpdateConfigurationSetEventDestinationCommand(args);
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
exports.PinpointSMSVoice = PinpointSMSVoice;
//# sourceMappingURL=PinpointSMSVoice.js.map