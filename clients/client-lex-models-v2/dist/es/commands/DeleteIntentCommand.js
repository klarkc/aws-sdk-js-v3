import { __extends } from "tslib";
import { DeleteIntentRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteIntentCommand, serializeAws_restJson1DeleteIntentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified intent.</p>
 *          <p>Deleting an intent also deletes the slots associated with the
 *          intent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteIntentCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteIntentCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteIntentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIntentCommandInput} for command's `input` shape.
 * @see {@link DeleteIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteIntentCommand = /** @class */ (function (_super) {
    __extends(DeleteIntentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteIntentCommand(input) {
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
    DeleteIntentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DeleteIntentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteIntentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteIntentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteIntentCommand(input, context);
    };
    DeleteIntentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteIntentCommand(output, context);
    };
    return DeleteIntentCommand;
}($Command));
export { DeleteIntentCommand };
//# sourceMappingURL=DeleteIntentCommand.js.map