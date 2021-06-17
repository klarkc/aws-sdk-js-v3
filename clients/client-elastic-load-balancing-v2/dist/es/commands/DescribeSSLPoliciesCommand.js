import { __extends } from "tslib";
import { DescribeSSLPoliciesInput, DescribeSSLPoliciesOutput } from "../models/models_0";
import { deserializeAws_queryDescribeSSLPoliciesCommand, serializeAws_queryDescribeSSLPoliciesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified policies or all policies used for SSL negotiation.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or
 *         <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeSSLPoliciesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeSSLPoliciesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DescribeSSLPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSSLPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeSSLPoliciesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSSLPoliciesCommand = /** @class */ (function (_super) {
    __extends(DescribeSSLPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSSLPoliciesCommand(input) {
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
    DescribeSSLPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "DescribeSSLPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSSLPoliciesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSSLPoliciesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSSLPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeSSLPoliciesCommand(input, context);
    };
    DescribeSSLPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeSSLPoliciesCommand(output, context);
    };
    return DescribeSSLPoliciesCommand;
}($Command));
export { DescribeSSLPoliciesCommand };
//# sourceMappingURL=DescribeSSLPoliciesCommand.js.map