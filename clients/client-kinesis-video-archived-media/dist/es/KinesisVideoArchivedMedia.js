import { __extends } from "tslib";
import { KinesisVideoArchivedMediaClient } from "./KinesisVideoArchivedMediaClient";
import { GetClipCommand } from "./commands/GetClipCommand";
import { GetDASHStreamingSessionURLCommand, } from "./commands/GetDASHStreamingSessionURLCommand";
import { GetHLSStreamingSessionURLCommand, } from "./commands/GetHLSStreamingSessionURLCommand";
import { GetMediaForFragmentListCommand, } from "./commands/GetMediaForFragmentListCommand";
import { ListFragmentsCommand, } from "./commands/ListFragmentsCommand";
/**
 * <p></p>
 */
var KinesisVideoArchivedMedia = /** @class */ (function (_super) {
    __extends(KinesisVideoArchivedMedia, _super);
    function KinesisVideoArchivedMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KinesisVideoArchivedMedia.prototype.getClip = function (args, optionsOrCb, cb) {
        var command = new GetClipCommand(args);
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
    KinesisVideoArchivedMedia.prototype.getDASHStreamingSessionURL = function (args, optionsOrCb, cb) {
        var command = new GetDASHStreamingSessionURLCommand(args);
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
    KinesisVideoArchivedMedia.prototype.getHLSStreamingSessionURL = function (args, optionsOrCb, cb) {
        var command = new GetHLSStreamingSessionURLCommand(args);
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
    KinesisVideoArchivedMedia.prototype.getMediaForFragmentList = function (args, optionsOrCb, cb) {
        var command = new GetMediaForFragmentListCommand(args);
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
    KinesisVideoArchivedMedia.prototype.listFragments = function (args, optionsOrCb, cb) {
        var command = new ListFragmentsCommand(args);
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
    return KinesisVideoArchivedMedia;
}(KinesisVideoArchivedMediaClient));
export { KinesisVideoArchivedMedia };
//# sourceMappingURL=KinesisVideoArchivedMedia.js.map