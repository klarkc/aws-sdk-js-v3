import { __extends } from "tslib";
import { CreateBotLocaleRequest, CreateBotLocaleResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateBotLocaleCommand, serializeAws_restJson1CreateBotLocaleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a locale in the bot. The locale contains the intents and
 *          slot types that the bot uses in conversations with users in the
 *          specified language and locale. You must add a locale to a bot before
 *          you can add intents and slot types to the bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateBotLocaleCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateBotLocaleCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateBotLocaleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBotLocaleCommandInput} for command's `input` shape.
 * @see {@link CreateBotLocaleCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBotLocaleCommand = /** @class */ (function (_super) {
    __extends(CreateBotLocaleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateBotLocaleCommand(input) {
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
    CreateBotLocaleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "CreateBotLocaleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateBotLocaleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateBotLocaleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateBotLocaleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateBotLocaleCommand(input, context);
    };
    CreateBotLocaleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateBotLocaleCommand(output, context);
    };
    return CreateBotLocaleCommand;
}($Command));
export { CreateBotLocaleCommand };
//# sourceMappingURL=CreateBotLocaleCommand.js.map