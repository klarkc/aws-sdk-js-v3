import { __extends } from "tslib";
import { UpdateVocabularyFilterRequest, UpdateVocabularyFilterResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateVocabularyFilterCommand, serializeAws_json1_1UpdateVocabularyFilterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a vocabulary filter with a new list of filtered words.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, UpdateVocabularyFilterCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, UpdateVocabularyFilterCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new UpdateVocabularyFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVocabularyFilterCommandInput} for command's `input` shape.
 * @see {@link UpdateVocabularyFilterCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateVocabularyFilterCommand = /** @class */ (function (_super) {
    __extends(UpdateVocabularyFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateVocabularyFilterCommand(input) {
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
    UpdateVocabularyFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "UpdateVocabularyFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateVocabularyFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateVocabularyFilterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateVocabularyFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateVocabularyFilterCommand(input, context);
    };
    UpdateVocabularyFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateVocabularyFilterCommand(output, context);
    };
    return UpdateVocabularyFilterCommand;
}($Command));
export { UpdateVocabularyFilterCommand };
//# sourceMappingURL=UpdateVocabularyFilterCommand.js.map