import { __extends } from "tslib";
import { DescribeIntentRequest, DescribeIntentResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeIntentCommand, serializeAws_restJson1DescribeIntentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns metadata about an intent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeIntentCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeIntentCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeIntentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIntentCommandInput} for command's `input` shape.
 * @see {@link DescribeIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeIntentCommand = /** @class */ (function (_super) {
    __extends(DescribeIntentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeIntentCommand(input) {
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
    DescribeIntentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DescribeIntentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeIntentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeIntentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeIntentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeIntentCommand(input, context);
    };
    DescribeIntentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeIntentCommand(output, context);
    };
    return DescribeIntentCommand;
}($Command));
export { DescribeIntentCommand };
//# sourceMappingURL=DescribeIntentCommand.js.map