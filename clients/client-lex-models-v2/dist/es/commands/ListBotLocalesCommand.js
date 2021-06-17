import { __extends } from "tslib";
import { ListBotLocalesRequest, ListBotLocalesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListBotLocalesCommand, serializeAws_restJson1ListBotLocalesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of locales for the specified bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBotLocalesCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBotLocalesCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListBotLocalesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBotLocalesCommandInput} for command's `input` shape.
 * @see {@link ListBotLocalesCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBotLocalesCommand = /** @class */ (function (_super) {
    __extends(ListBotLocalesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBotLocalesCommand(input) {
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
    ListBotLocalesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "ListBotLocalesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBotLocalesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListBotLocalesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBotLocalesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListBotLocalesCommand(input, context);
    };
    ListBotLocalesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListBotLocalesCommand(output, context);
    };
    return ListBotLocalesCommand;
}($Command));
export { ListBotLocalesCommand };
//# sourceMappingURL=ListBotLocalesCommand.js.map