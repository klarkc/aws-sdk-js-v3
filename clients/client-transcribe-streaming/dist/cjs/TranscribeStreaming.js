"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranscribeStreaming = void 0;
const TranscribeStreamingClient_1 = require("./TranscribeStreamingClient");
const StartMedicalStreamTranscriptionCommand_1 = require("./commands/StartMedicalStreamTranscriptionCommand");
const StartStreamTranscriptionCommand_1 = require("./commands/StartStreamTranscriptionCommand");
/**
 * <p>Operations and objects for transcribing streaming speech to text.</p>
 */
class TranscribeStreaming extends TranscribeStreamingClient_1.TranscribeStreamingClient {
    startMedicalStreamTranscription(args, optionsOrCb, cb) {
        const command = new StartMedicalStreamTranscriptionCommand_1.StartMedicalStreamTranscriptionCommand(args);
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
    startStreamTranscription(args, optionsOrCb, cb) {
        const command = new StartStreamTranscriptionCommand_1.StartStreamTranscriptionCommand(args);
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
exports.TranscribeStreaming = TranscribeStreaming;
//# sourceMappingURL=TranscribeStreaming.js.map