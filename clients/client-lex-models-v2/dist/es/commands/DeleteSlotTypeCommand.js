import { __extends } from "tslib";
import { DeleteSlotTypeRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteSlotTypeCommand, serializeAws_restJson1DeleteSlotTypeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a slot type from a bot locale.</p>
 *          <p>If a slot is using the slot type, Amazon Lex throws a
 *             <code>ResourceInUseException</code> exception. To avoid the
 *          exception, set the <code>skipResourceInUseCheck</code> parameter to
 *             <code>true</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteSlotTypeCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteSlotTypeCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteSlotTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSlotTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSlotTypeCommand = /** @class */ (function (_super) {
    __extends(DeleteSlotTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSlotTypeCommand(input) {
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
    DeleteSlotTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DeleteSlotTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSlotTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSlotTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSlotTypeCommand(input, context);
    };
    DeleteSlotTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSlotTypeCommand(output, context);
    };
    return DeleteSlotTypeCommand;
}($Command));
export { DeleteSlotTypeCommand };
//# sourceMappingURL=DeleteSlotTypeCommand.js.map