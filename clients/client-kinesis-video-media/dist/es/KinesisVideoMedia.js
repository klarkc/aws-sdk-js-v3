import { __extends } from "tslib";
import { KinesisVideoMediaClient } from "./KinesisVideoMediaClient";
import { GetMediaCommand } from "./commands/GetMediaCommand";
/**
 * <p></p>
 */
var KinesisVideoMedia = /** @class */ (function (_super) {
    __extends(KinesisVideoMedia, _super);
    function KinesisVideoMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KinesisVideoMedia.prototype.getMedia = function (args, optionsOrCb, cb) {
        var command = new GetMediaCommand(args);
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
    return KinesisVideoMedia;
}(KinesisVideoMediaClient));
export { KinesisVideoMedia };
//# sourceMappingURL=KinesisVideoMedia.js.map