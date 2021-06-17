import { __extends } from "tslib";
import { GetTranscriptionJobRequest, GetTranscriptionJobResponse } from "../models/models_0";
import { deserializeAws_json1_1GetTranscriptionJobCommand, serializeAws_json1_1GetTranscriptionJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a transcription job. To see the status of the job, check the
 *                 <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>,
 *             the job is finished and you can find the results at the location specified in the
 *                 <code>TranscriptFileUri</code> field. If you enable content redaction, the redacted
 *             transcript appears in <code>RedactedTranscriptFileUri</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetTranscriptionJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, GetTranscriptionJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new GetTranscriptionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTranscriptionJobCommandInput} for command's `input` shape.
 * @see {@link GetTranscriptionJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTranscriptionJobCommand = /** @class */ (function (_super) {
    __extends(GetTranscriptionJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTranscriptionJobCommand(input) {
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
    GetTranscriptionJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "GetTranscriptionJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTranscriptionJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTranscriptionJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTranscriptionJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTranscriptionJobCommand(input, context);
    };
    GetTranscriptionJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTranscriptionJobCommand(output, context);
    };
    return GetTranscriptionJobCommand;
}($Command));
export { GetTranscriptionJobCommand };
//# sourceMappingURL=GetTranscriptionJobCommand.js.map