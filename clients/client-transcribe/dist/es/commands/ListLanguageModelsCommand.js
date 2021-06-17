import { __extends } from "tslib";
import { ListLanguageModelsRequest, ListLanguageModelsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListLanguageModelsCommand, serializeAws_json1_1ListLanguageModelsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides more information about the custom language models you've created. You can use
 *             the information in this list to find a specific custom language model. You can then use
 *             the  operation to get more information about
 *             it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListLanguageModelsCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListLanguageModelsCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new ListLanguageModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLanguageModelsCommandInput} for command's `input` shape.
 * @see {@link ListLanguageModelsCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLanguageModelsCommand = /** @class */ (function (_super) {
    __extends(ListLanguageModelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLanguageModelsCommand(input) {
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
    ListLanguageModelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "ListLanguageModelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLanguageModelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLanguageModelsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLanguageModelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListLanguageModelsCommand(input, context);
    };
    ListLanguageModelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListLanguageModelsCommand(output, context);
    };
    return ListLanguageModelsCommand;
}($Command));
export { ListLanguageModelsCommand };
//# sourceMappingURL=ListLanguageModelsCommand.js.map