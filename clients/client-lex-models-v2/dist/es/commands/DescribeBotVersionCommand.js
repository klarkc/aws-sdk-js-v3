import { __extends } from "tslib";
import { DescribeBotVersionRequest, DescribeBotVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeBotVersionCommand, serializeAws_restJson1DescribeBotVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides metadata about a version of a bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotVersionCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotVersionCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeBotVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBotVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeBotVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBotVersionCommand = /** @class */ (function (_super) {
    __extends(DescribeBotVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBotVersionCommand(input) {
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
    DescribeBotVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DescribeBotVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBotVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBotVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBotVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeBotVersionCommand(input, context);
    };
    DescribeBotVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeBotVersionCommand(output, context);
    };
    return DescribeBotVersionCommand;
}($Command));
export { DescribeBotVersionCommand };
//# sourceMappingURL=DescribeBotVersionCommand.js.map