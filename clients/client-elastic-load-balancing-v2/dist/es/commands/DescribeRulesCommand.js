import { __extends } from "tslib";
import { DescribeRulesInput, DescribeRulesOutput } from "../models/models_0";
import { deserializeAws_queryDescribeRulesCommand, serializeAws_queryDescribeRulesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified rules or the rules for the specified listener. You must specify
 *       either a listener or one or more rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeRulesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeRulesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DescribeRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeRulesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRulesCommand = /** @class */ (function (_super) {
    __extends(DescribeRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRulesCommand(input) {
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
    DescribeRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "DescribeRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRulesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRulesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeRulesCommand(input, context);
    };
    DescribeRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeRulesCommand(output, context);
    };
    return DescribeRulesCommand;
}($Command));
export { DescribeRulesCommand };
//# sourceMappingURL=DescribeRulesCommand.js.map