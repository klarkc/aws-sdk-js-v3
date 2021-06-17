import { __extends } from "tslib";
import { TranscribeStreamingClient } from "./TranscribeStreamingClient";
import { StartMedicalStreamTranscriptionCommand, } from "./commands/StartMedicalStreamTranscriptionCommand";
import { StartStreamTranscriptionCommand, } from "./commands/StartStreamTranscriptionCommand";
/**
 * <p>Operations and objects for transcribing streaming speech to text.</p>
 */
var TranscribeStreaming = /** @class */ (function (_super) {
    __extends(TranscribeStreaming, _super);
    function TranscribeStreaming() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TranscribeStreaming.prototype.startMedicalStreamTranscription = function (args, optionsOrCb, cb) {
        var command = new StartMedicalStreamTranscriptionCommand(args);
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
    TranscribeStreaming.prototype.startStreamTranscription = function (args, optionsOrCb, cb) {
        var command = new StartStreamTranscriptionCommand(args);
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
    return TranscribeStreaming;
}(TranscribeStreamingClient));
export { TranscribeStreaming };
//# sourceMappingURL=TranscribeStreaming.js.map