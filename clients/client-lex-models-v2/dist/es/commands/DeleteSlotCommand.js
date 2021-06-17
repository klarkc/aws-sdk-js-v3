import { __extends } from "tslib";
import { DeleteSlotRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteSlotCommand, serializeAws_restJson1DeleteSlotCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified slot from an intent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteSlotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteSlotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteSlotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSlotCommandInput} for command's `input` shape.
 * @see {@link DeleteSlotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSlotCommand = /** @class */ (function (_super) {
    __extends(DeleteSlotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSlotCommand(input) {
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
    DeleteSlotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DeleteSlotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSlotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSlotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSlotCommand(input, context);
    };
    DeleteSlotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSlotCommand(output, context);
    };
    return DeleteSlotCommand;
}($Command));
export { DeleteSlotCommand };
//# sourceMappingURL=DeleteSlotCommand.js.map