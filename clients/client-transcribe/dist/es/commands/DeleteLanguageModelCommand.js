import { __extends } from "tslib";
import { DeleteLanguageModelRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteLanguageModelCommand, serializeAws_json1_1DeleteLanguageModelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a custom language model using its name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DeleteLanguageModelCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DeleteLanguageModelCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new DeleteLanguageModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLanguageModelCommandInput} for command's `input` shape.
 * @see {@link DeleteLanguageModelCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLanguageModelCommand = /** @class */ (function (_super) {
    __extends(DeleteLanguageModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLanguageModelCommand(input) {
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
    DeleteLanguageModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "DeleteLanguageModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLanguageModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLanguageModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteLanguageModelCommand(input, context);
    };
    DeleteLanguageModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteLanguageModelCommand(output, context);
    };
    return DeleteLanguageModelCommand;
}($Command));
export { DeleteLanguageModelCommand };
//# sourceMappingURL=DeleteLanguageModelCommand.js.map