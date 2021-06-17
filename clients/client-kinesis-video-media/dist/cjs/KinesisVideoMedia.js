"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KinesisVideoMedia = void 0;
const KinesisVideoMediaClient_1 = require("./KinesisVideoMediaClient");
const GetMediaCommand_1 = require("./commands/GetMediaCommand");
/**
 * <p></p>
 */
class KinesisVideoMedia extends KinesisVideoMediaClient_1.KinesisVideoMediaClient {
    getMedia(args, optionsOrCb, cb) {
        const command = new GetMediaCommand_1.GetMediaCommand(args);
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
exports.KinesisVideoMedia = KinesisVideoMedia;
//# sourceMappingURL=KinesisVideoMedia.js.map