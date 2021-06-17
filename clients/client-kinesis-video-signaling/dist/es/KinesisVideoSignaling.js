import { __extends } from "tslib";
import { KinesisVideoSignalingClient } from "./KinesisVideoSignalingClient";
import { GetIceServerConfigCommand, } from "./commands/GetIceServerConfigCommand";
import { SendAlexaOfferToMasterCommand, } from "./commands/SendAlexaOfferToMasterCommand";
/**
 * <p>Kinesis Video Streams Signaling Service is a intermediate service that establishes a
 *             communication channel for discovering peers, transmitting offers and answers in order to
 *             establish peer-to-peer connection in webRTC technology.</p>
 */
var KinesisVideoSignaling = /** @class */ (function (_super) {
    __extends(KinesisVideoSignaling, _super);
    function KinesisVideoSignaling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KinesisVideoSignaling.prototype.getIceServerConfig = function (args, optionsOrCb, cb) {
        var command = new GetIceServerConfigCommand(args);
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
    KinesisVideoSignaling.prototype.sendAlexaOfferToMaster = function (args, optionsOrCb, cb) {
        var command = new SendAlexaOfferToMasterCommand(args);
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
    return KinesisVideoSignaling;
}(KinesisVideoSignalingClient));
export { KinesisVideoSignaling };
//# sourceMappingURL=KinesisVideoSignaling.js.map