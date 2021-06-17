import { __extends } from "tslib";
import { ConnectContactLensClient } from "./ConnectContactLensClient";
import { ListRealtimeContactAnalysisSegmentsCommand, } from "./commands/ListRealtimeContactAnalysisSegmentsCommand";
/**
 * <p>Contact Lens for Amazon Connect enables you to analyze conversations between customer and agents,
 *       by using speech transcription, natural language processing, and intelligent search
 *       capabilities. It performs sentiment analysis, detects issues, and enables you to automatically
 *       categorize contacts.</p>
 *          <p>Contact Lens for Amazon Connect provides both real-time and post-call analytics of customer-agent
 *       conversations. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/analyze-conversations.html">Analyze conversations using
 *         Contact Lens</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
 */
var ConnectContactLens = /** @class */ (function (_super) {
    __extends(ConnectContactLens, _super);
    function ConnectContactLens() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectContactLens.prototype.listRealtimeContactAnalysisSegments = function (args, optionsOrCb, cb) {
        var command = new ListRealtimeContactAnalysisSegmentsCommand(args);
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
    return ConnectContactLens;
}(ConnectContactLensClient));
export { ConnectContactLens };
//# sourceMappingURL=ConnectContactLens.js.map