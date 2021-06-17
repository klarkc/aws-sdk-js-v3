import { __extends } from "tslib";
import { DescribeBotLocaleRequest, DescribeBotLocaleResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeBotLocaleCommand, serializeAws_restJson1DescribeBotLocaleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the settings that a bot has for a specific locale. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotLocaleCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotLocaleCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeBotLocaleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBotLocaleCommandInput} for command's `input` shape.
 * @see {@link DescribeBotLocaleCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBotLocaleCommand = /** @class */ (function (_super) {
    __extends(DescribeBotLocaleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBotLocaleCommand(input) {
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
    DescribeBotLocaleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DescribeBotLocaleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBotLocaleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBotLocaleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBotLocaleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeBotLocaleCommand(input, context);
    };
    DescribeBotLocaleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeBotLocaleCommand(output, context);
    };
    return DescribeBotLocaleCommand;
}($Command));
export { DescribeBotLocaleCommand };
//# sourceMappingURL=DescribeBotLocaleCommand.js.map