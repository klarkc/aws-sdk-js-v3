"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectContactLens = void 0;
const ConnectContactLensClient_1 = require("./ConnectContactLensClient");
const ListRealtimeContactAnalysisSegmentsCommand_1 = require("./commands/ListRealtimeContactAnalysisSegmentsCommand");
/**
 * <p>Contact Lens for Amazon Connect enables you to analyze conversations between customer and agents,
 *       by using speech transcription, natural language processing, and intelligent search
 *       capabilities. It performs sentiment analysis, detects issues, and enables you to automatically
 *       categorize contacts.</p>
 *          <p>Contact Lens for Amazon Connect provides both real-time and post-call analytics of customer-agent
 *       conversations. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/analyze-conversations.html">Analyze conversations using
 *         Contact Lens</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
 */
class ConnectContactLens extends ConnectContactLensClient_1.ConnectContactLensClient {
    listRealtimeContactAnalysisSegments(args, optionsOrCb, cb) {
        const command = new ListRealtimeContactAnalysisSegmentsCommand_1.ListRealtimeContactAnalysisSegmentsCommand(args);
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
exports.ConnectContactLens = ConnectContactLens;
//# sourceMappingURL=ConnectContactLens.js.map