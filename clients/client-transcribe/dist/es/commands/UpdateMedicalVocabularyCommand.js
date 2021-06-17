import { __extends } from "tslib";
import { UpdateMedicalVocabularyRequest, UpdateMedicalVocabularyResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateMedicalVocabularyCommand, serializeAws_json1_1UpdateMedicalVocabularyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a vocabulary with new values that you provide in a different text file from
 *             the one you used to create the vocabulary. The <code>UpdateMedicalVocabulary</code>
 *             operation overwrites all of the existing information with the values that you provide in
 *             the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, UpdateMedicalVocabularyCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, UpdateMedicalVocabularyCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new UpdateMedicalVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMedicalVocabularyCommandInput} for command's `input` shape.
 * @see {@link UpdateMedicalVocabularyCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMedicalVocabularyCommand = /** @class */ (function (_super) {
    __extends(UpdateMedicalVocabularyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMedicalVocabularyCommand(input) {
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
    UpdateMedicalVocabularyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "UpdateMedicalVocabularyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMedicalVocabularyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMedicalVocabularyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMedicalVocabularyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateMedicalVocabularyCommand(input, context);
    };
    UpdateMedicalVocabularyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateMedicalVocabularyCommand(output, context);
    };
    return UpdateMedicalVocabularyCommand;
}($Command));
export { UpdateMedicalVocabularyCommand };
//# sourceMappingURL=UpdateMedicalVocabularyCommand.js.map