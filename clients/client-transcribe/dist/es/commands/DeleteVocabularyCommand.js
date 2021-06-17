import { __extends } from "tslib";
import { DeleteVocabularyRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteVocabularyCommand, serializeAws_json1_1DeleteVocabularyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a vocabulary from Amazon Transcribe. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DeleteVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DeleteVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new DeleteVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVocabularyCommandInput} for command's `input` shape.
 * @see {@link DeleteVocabularyCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVocabularyCommand = /** @class */ (function (_super) {
    __extends(DeleteVocabularyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVocabularyCommand(input) {
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
    DeleteVocabularyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "DeleteVocabularyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVocabularyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVocabularyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteVocabularyCommand(input, context);
    };
    DeleteVocabularyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteVocabularyCommand(output, context);
    };
    return DeleteVocabularyCommand;
}($Command));
export { DeleteVocabularyCommand };
//# sourceMappingURL=DeleteVocabularyCommand.js.map