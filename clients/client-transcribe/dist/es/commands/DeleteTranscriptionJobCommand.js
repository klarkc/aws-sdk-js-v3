import { __extends } from "tslib";
import { DeleteTranscriptionJobRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteTranscriptionJobCommand, serializeAws_json1_1DeleteTranscriptionJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a previously submitted transcription job along with any other generated
 *             results such as the transcription, models, and so on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DeleteTranscriptionJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DeleteTranscriptionJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new DeleteTranscriptionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTranscriptionJobCommandInput} for command's `input` shape.
 * @see {@link DeleteTranscriptionJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTranscriptionJobCommand = /** @class */ (function (_super) {
    __extends(DeleteTranscriptionJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTranscriptionJobCommand(input) {
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
    DeleteTranscriptionJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "DeleteTranscriptionJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTranscriptionJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTranscriptionJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteTranscriptionJobCommand(input, context);
    };
    DeleteTranscriptionJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteTranscriptionJobCommand(output, context);
    };
    return DeleteTranscriptionJobCommand;
}($Command));
export { DeleteTranscriptionJobCommand };
//# sourceMappingURL=DeleteTranscriptionJobCommand.js.map