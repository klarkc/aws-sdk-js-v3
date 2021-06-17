import { __extends } from "tslib";
import { DescribeBotRequest, DescribeBotResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeBotCommand, serializeAws_restJson1DescribeBotCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides metadata information about a bot. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBotCommandInput} for command's `input` shape.
 * @see {@link DescribeBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBotCommand = /** @class */ (function (_super) {
    __extends(DescribeBotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBotCommand(input) {
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
    DescribeBotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DescribeBotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeBotCommand(input, context);
    };
    DescribeBotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeBotCommand(output, context);
    };
    return DescribeBotCommand;
}($Command));
export { DescribeBotCommand };
//# sourceMappingURL=DescribeBotCommand.js.map