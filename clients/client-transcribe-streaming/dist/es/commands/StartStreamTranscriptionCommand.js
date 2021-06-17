import { __extends } from "tslib";
import { StartStreamTranscriptionRequest, StartStreamTranscriptionResponse } from "../models/models_0";
import { deserializeAws_restJson1StartStreamTranscriptionCommand, serializeAws_restJson1StartStreamTranscriptionCommand, } from "../protocols/Aws_restJson1";
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a bidirectional HTTP2 stream where audio is streamed to Amazon Transcribe and the transcription
 *       results are streamed to your application.</p>
 *          <p>The following are encoded as HTTP2 headers:</p>
 *          <ul>
 *             <li>
 *                <p>x-amzn-transcribe-language-code</p>
 *             </li>
 *             <li>
 *                <p>x-amzn-transcribe-media-encoding</p>
 *             </li>
 *             <li>
 *                <p>x-amzn-transcribe-sample-rate</p>
 *             </li>
 *             <li>
 *                <p>x-amzn-transcribe-session-id</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeStreamingClient, StartStreamTranscriptionCommand } from "@aws-sdk/client-transcribe-streaming"; // ES Modules import
 * // const { TranscribeStreamingClient, StartStreamTranscriptionCommand } = require("@aws-sdk/client-transcribe-streaming"); // CommonJS import
 * const client = new TranscribeStreamingClient(config);
 * const command = new StartStreamTranscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartStreamTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StartStreamTranscriptionCommandOutput} for command's `response` shape.
 * @see {@link TranscribeStreamingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartStreamTranscriptionCommand = /** @class */ (function (_super) {
    __extends(StartStreamTranscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartStreamTranscriptionCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    StartStreamTranscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEventStreamPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeStreamingClient";
        var commandName = "StartStreamTranscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartStreamTranscriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartStreamTranscriptionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartStreamTranscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartStreamTranscriptionCommand(input, context);
    };
    StartStreamTranscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartStreamTranscriptionCommand(output, context);
    };
    return StartStreamTranscriptionCommand;
}($Command));
export { StartStreamTranscriptionCommand };
//# sourceMappingURL=StartStreamTranscriptionCommand.js.map