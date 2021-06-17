import { __extends } from "tslib";
import { StartMedicalStreamTranscriptionRequest, StartMedicalStreamTranscriptionResponse } from "../models/models_0";
import { deserializeAws_restJson1StartMedicalStreamTranscriptionCommand, serializeAws_restJson1StartMedicalStreamTranscriptionCommand, } from "../protocols/Aws_restJson1";
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a bidirectional HTTP/2 stream where audio is streamed to Amazon Transcribe Medical and the
 *             transcription results are streamed to your application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeStreamingClient, StartMedicalStreamTranscriptionCommand } from "@aws-sdk/client-transcribe-streaming"; // ES Modules import
 * // const { TranscribeStreamingClient, StartMedicalStreamTranscriptionCommand } = require("@aws-sdk/client-transcribe-streaming"); // CommonJS import
 * const client = new TranscribeStreamingClient(config);
 * const command = new StartMedicalStreamTranscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMedicalStreamTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StartMedicalStreamTranscriptionCommandOutput} for command's `response` shape.
 * @see {@link TranscribeStreamingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartMedicalStreamTranscriptionCommand = /** @class */ (function (_super) {
    __extends(StartMedicalStreamTranscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartMedicalStreamTranscriptionCommand(input) {
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
    StartMedicalStreamTranscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEventStreamPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeStreamingClient";
        var commandName = "StartMedicalStreamTranscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartMedicalStreamTranscriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartMedicalStreamTranscriptionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartMedicalStreamTranscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartMedicalStreamTranscriptionCommand(input, context);
    };
    StartMedicalStreamTranscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartMedicalStreamTranscriptionCommand(output, context);
    };
    return StartMedicalStreamTranscriptionCommand;
}($Command));
export { StartMedicalStreamTranscriptionCommand };
//# sourceMappingURL=StartMedicalStreamTranscriptionCommand.js.map