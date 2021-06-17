import { __extends } from "tslib";
import { DescribeTargetGroupAttributesInput, DescribeTargetGroupAttributesOutput } from "../models/models_0";
import { deserializeAws_queryDescribeTargetGroupAttributesCommand, serializeAws_queryDescribeTargetGroupAttributesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the attributes for the specified target group.</p>
 *          <p>For more information, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers
 *             Guide</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers
 *             Guide</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers
 *             Guide</i>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeTargetGroupAttributesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeTargetGroupAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DescribeTargetGroupAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTargetGroupAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeTargetGroupAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTargetGroupAttributesCommand = /** @class */ (function (_super) {
    __extends(DescribeTargetGroupAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTargetGroupAttributesCommand(input) {
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
    DescribeTargetGroupAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "DescribeTargetGroupAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTargetGroupAttributesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTargetGroupAttributesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTargetGroupAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeTargetGroupAttributesCommand(input, context);
    };
    DescribeTargetGroupAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeTargetGroupAttributesCommand(output, context);
    };
    return DescribeTargetGroupAttributesCommand;
}($Command));
export { DescribeTargetGroupAttributesCommand };
//# sourceMappingURL=DescribeTargetGroupAttributesCommand.js.map