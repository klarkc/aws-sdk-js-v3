import { __extends } from "tslib";
import { DeleteBotRequest, DeleteBotResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteBotCommand, serializeAws_restJson1DeleteBotCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes all versions of a bot, including the <code>Draft</code>
 *          version. To delete a specific version, use the
 *             <code>DeleteBotVersion</code> operation.</p>
 *          <p>When you delete a bot, all of the resources contained in the bot are
 *          also deleted. Deleting a bot removes all locales, intents, slot, and
 *          slot types defined for the bot.</p>
 *          <p>If a bot has an alias, the <code>DeleteBot</code> operation returns
 *          a <code>ResourceInUseException</code> exception. If you want to delete
 *          the bot and the alias, set the <code>skipResourceInUseCheck</code>
 *          parameter to <code>true</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteBotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteBotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBotCommandInput} for command's `input` shape.
 * @see {@link DeleteBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBotCommand = /** @class */ (function (_super) {
    __extends(DeleteBotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteBotCommand(input) {
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
    DeleteBotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DeleteBotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteBotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteBotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteBotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteBotCommand(input, context);
    };
    DeleteBotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteBotCommand(output, context);
    };
    return DeleteBotCommand;
}($Command));
export { DeleteBotCommand };
//# sourceMappingURL=DeleteBotCommand.js.map