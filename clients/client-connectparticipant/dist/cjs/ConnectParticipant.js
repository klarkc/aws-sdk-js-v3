"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectParticipant = void 0;
const ConnectParticipantClient_1 = require("./ConnectParticipantClient");
const CompleteAttachmentUploadCommand_1 = require("./commands/CompleteAttachmentUploadCommand");
const CreateParticipantConnectionCommand_1 = require("./commands/CreateParticipantConnectionCommand");
const DisconnectParticipantCommand_1 = require("./commands/DisconnectParticipantCommand");
const GetAttachmentCommand_1 = require("./commands/GetAttachmentCommand");
const GetTranscriptCommand_1 = require("./commands/GetTranscriptCommand");
const SendEventCommand_1 = require("./commands/SendEventCommand");
const SendMessageCommand_1 = require("./commands/SendMessageCommand");
const StartAttachmentUploadCommand_1 = require("./commands/StartAttachmentUploadCommand");
/**
 * <p>Amazon Connect is a cloud-based contact center solution that makes it easy to set up and manage
 *             a customer contact center and provide reliable customer engagement at any scale.</p>
 *         <p>Amazon Connect enables customer contacts through voice or chat.</p>
 *
 *         <p>The APIs described here are used by chat participants, such as agents and
 *             customers.</p>
 */
class ConnectParticipant extends ConnectParticipantClient_1.ConnectParticipantClient {
    completeAttachmentUpload(args, optionsOrCb, cb) {
        const command = new CompleteAttachmentUploadCommand_1.CompleteAttachmentUploadCommand(args);
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
    createParticipantConnection(args, optionsOrCb, cb) {
        const command = new CreateParticipantConnectionCommand_1.CreateParticipantConnectionCommand(args);
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
    disconnectParticipant(args, optionsOrCb, cb) {
        const command = new DisconnectParticipantCommand_1.DisconnectParticipantCommand(args);
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
    getAttachment(args, optionsOrCb, cb) {
        const command = new GetAttachmentCommand_1.GetAttachmentCommand(args);
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
    getTranscript(args, optionsOrCb, cb) {
        const command = new GetTranscriptCommand_1.GetTranscriptCommand(args);
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
    sendEvent(args, optionsOrCb, cb) {
        const command = new SendEventCommand_1.SendEventCommand(args);
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
    sendMessage(args, optionsOrCb, cb) {
        const command = new SendMessageCommand_1.SendMessageCommand(args);
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
    startAttachmentUpload(args, optionsOrCb, cb) {
        const command = new StartAttachmentUploadCommand_1.StartAttachmentUploadCommand(args);
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
exports.ConnectParticipant = ConnectParticipant;
//# sourceMappingURL=ConnectParticipant.js.map