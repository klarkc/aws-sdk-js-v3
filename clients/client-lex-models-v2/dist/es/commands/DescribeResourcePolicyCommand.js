import { __extends } from "tslib";
import { DescribeResourcePolicyRequest, DescribeResourcePolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeResourcePolicyCommand, serializeAws_restJson1DescribeResourcePolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the resource policy and policy revision for a bot or bot
 *          alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeResourcePolicyCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeResourcePolicyCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DescribeResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeResourcePolicyCommand = /** @class */ (function (_super) {
    __extends(DescribeResourcePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeResourcePolicyCommand(input) {
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
    DescribeResourcePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DescribeResourcePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeResourcePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeResourcePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeResourcePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeResourcePolicyCommand(input, context);
    };
    DescribeResourcePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeResourcePolicyCommand(output, context);
    };
    return DescribeResourcePolicyCommand;
}($Command));
export { DescribeResourcePolicyCommand };
//# sourceMappingURL=DescribeResourcePolicyCommand.js.map