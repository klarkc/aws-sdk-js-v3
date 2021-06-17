import { __extends } from "tslib";
import { DescribeLoadBalancerAttributesInput, DescribeLoadBalancerAttributesOutput } from "../models/models_0";
import { deserializeAws_queryDescribeLoadBalancerAttributesCommand, serializeAws_queryDescribeLoadBalancerAttributesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the attributes for the specified load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeLoadBalancerAttributesCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeLoadBalancerAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DescribeLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoadBalancerAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancerAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLoadBalancerAttributesCommand = /** @class */ (function (_super) {
    __extends(DescribeLoadBalancerAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLoadBalancerAttributesCommand(input) {
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
    DescribeLoadBalancerAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "DescribeLoadBalancerAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLoadBalancerAttributesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeLoadBalancerAttributesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLoadBalancerAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeLoadBalancerAttributesCommand(input, context);
    };
    DescribeLoadBalancerAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeLoadBalancerAttributesCommand(output, context);
    };
    return DescribeLoadBalancerAttributesCommand;
}($Command));
export { DescribeLoadBalancerAttributesCommand };
//# sourceMappingURL=DescribeLoadBalancerAttributesCommand.js.map