import { __extends } from "tslib";
import { DeleteMedicalVocabularyRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteMedicalVocabularyCommand, serializeAws_json1_1DeleteMedicalVocabularyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a vocabulary from Amazon Transcribe Medical.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DeleteMedicalVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DeleteMedicalVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new DeleteMedicalVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMedicalVocabularyCommandInput} for command's `input` shape.
 * @see {@link DeleteMedicalVocabularyCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMedicalVocabularyCommand = /** @class */ (function (_super) {
    __extends(DeleteMedicalVocabularyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMedicalVocabularyCommand(input) {
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
    DeleteMedicalVocabularyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "DeleteMedicalVocabularyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMedicalVocabularyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMedicalVocabularyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteMedicalVocabularyCommand(input, context);
    };
    DeleteMedicalVocabularyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteMedicalVocabularyCommand(output, context);
    };
    return DeleteMedicalVocabularyCommand;
}($Command));
export { DeleteMedicalVocabularyCommand };
//# sourceMappingURL=DeleteMedicalVocabularyCommand.js.map