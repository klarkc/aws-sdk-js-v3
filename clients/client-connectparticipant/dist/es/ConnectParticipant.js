import { __extends } from "tslib";
import { ConnectParticipantClient } from "./ConnectParticipantClient";
import { CompleteAttachmentUploadCommand, } from "./commands/CompleteAttachmentUploadCommand";
import { CreateParticipantConnectionCommand, } from "./commands/CreateParticipantConnectionCommand";
import { DisconnectParticipantCommand, } from "./commands/DisconnectParticipantCommand";
import { GetAttachmentCommand, } from "./commands/GetAttachmentCommand";
import { GetTranscriptCommand, } from "./commands/GetTranscriptCommand";
import { SendEventCommand } from "./commands/SendEventCommand";
import { SendMessageCommand } from "./commands/SendMessageCommand";
import { StartAttachmentUploadCommand, } from "./commands/StartAttachmentUploadCommand";
/**
 * <p>Amazon Connect is a cloud-based contact center solution that makes it easy to set up and manage
 *             a customer contact center and provide reliable customer engagement at any scale.</p>
 *         <p>Amazon Connect enables customer contacts through voice or chat.</p>
 *
 *         <p>The APIs described here are used by chat participants, such as agents and
 *             customers.</p>
 */
var ConnectParticipant = /** @class */ (function (_super) {
    __extends(ConnectParticipant, _super);
    function ConnectParticipant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectParticipant.prototype.completeAttachmentUpload = function (args, optionsOrCb, cb) {
        var command = new CompleteAttachmentUploadCommand(args);
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
    ConnectParticipant.prototype.createParticipantConnection = function (args, optionsOrCb, cb) {
        var command = new CreateParticipantConnectionCommand(args);
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
    ConnectParticipant.prototype.disconnectParticipant = function (args, optionsOrCb, cb) {
        var command = new DisconnectParticipantCommand(args);
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
    ConnectParticipant.prototype.getAttachment = function (args, optionsOrCb, cb) {
        var command = new GetAttachmentCommand(args);
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
    ConnectParticipant.prototype.getTranscript = function (args, optionsOrCb, cb) {
        var command = new GetTranscriptCommand(args);
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
    ConnectParticipant.prototype.sendEvent = function (args, optionsOrCb, cb) {
        var command = new SendEventCommand(args);
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
    ConnectParticipant.prototype.sendMessage = function (args, optionsOrCb, cb) {
        var command = new SendMessageCommand(args);
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
    ConnectParticipant.prototype.startAttachmentUpload = function (args, optionsOrCb, cb) {
        var command = new StartAttachmentUploadCommand(args);
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
    return ConnectParticipant;
}(ConnectParticipantClient));
export { ConnectParticipant };
//# sourceMappingURL=ConnectParticipant.js.map