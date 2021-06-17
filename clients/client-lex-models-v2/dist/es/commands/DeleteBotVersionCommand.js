import { __extends } from "tslib";
import { DeleteBotVersionRequest, DeleteBotVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteBotVersionCommand, serializeAws_restJson1DeleteBotVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specific version of a bot. To delete all version of a bot,
 *          use the <a>DeleteBot</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteBotVersionCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteBotVersionCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteBotVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBotVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteBotVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBotVersionCommand = /** @class */ (function (_super) {
    __extends(DeleteBotVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteBotVersionCommand(input) {
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
    DeleteBotVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DeleteBotVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteBotVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteBotVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteBotVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteBotVersionCommand(input, context);
    };
    DeleteBotVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteBotVersionCommand(output, context);
    };
    return DeleteBotVersionCommand;
}($Command));
export { DeleteBotVersionCommand };
//# sourceMappingURL=DeleteBotVersionCommand.js.map