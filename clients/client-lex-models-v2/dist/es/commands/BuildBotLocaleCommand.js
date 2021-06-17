import { __extends } from "tslib";
import { BuildBotLocaleRequest, BuildBotLocaleResponse } from "../models/models_0";
import { deserializeAws_restJson1BuildBotLocaleCommand, serializeAws_restJson1BuildBotLocaleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Builds a bot, its intents, and its slot types into a specific
 *          locale. A bot can be built into multiple locales. At runtime the locale
 *          is used to choose a specific build of the bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, BuildBotLocaleCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, BuildBotLocaleCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new BuildBotLocaleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BuildBotLocaleCommandInput} for command's `input` shape.
 * @see {@link BuildBotLocaleCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BuildBotLocaleCommand = /** @class */ (function (_super) {
    __extends(BuildBotLocaleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BuildBotLocaleCommand(input) {
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
    BuildBotLocaleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "BuildBotLocaleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BuildBotLocaleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BuildBotLocaleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BuildBotLocaleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BuildBotLocaleCommand(input, context);
    };
    BuildBotLocaleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BuildBotLocaleCommand(output, context);
    };
    return BuildBotLocaleCommand;
}($Command));
export { BuildBotLocaleCommand };
//# sourceMappingURL=BuildBotLocaleCommand.js.map