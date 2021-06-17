import { __extends } from "tslib";
import { DescribeBotAliasRequest, DescribeBotAliasResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeBotAliasCommand, serializeAws_restJson1DescribeBotAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get information about a specific bot alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotAliasCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotAliasCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeBotAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBotAliasCommandInput} for command's `input` shape.
 * @see {@link DescribeBotAliasCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBotAliasCommand = /** @class */ (function (_super) {
    __extends(DescribeBotAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBotAliasCommand(input) {
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
    DescribeBotAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DescribeBotAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBotAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBotAliasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBotAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeBotAliasCommand(input, context);
    };
    DescribeBotAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeBotAliasCommand(output, context);
    };
    return DescribeBotAliasCommand;
}($Command));
export { DescribeBotAliasCommand };
//# sourceMappingURL=DescribeBotAliasCommand.js.map