import { __extends } from "tslib";
import { DescribeEndPointStateInput, DescribeEndPointStateOutput } from "../models/models_0";
import { deserializeAws_queryDescribeInstanceHealthCommand, serializeAws_queryDescribeInstanceHealthCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeInstanceHealthCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeInstanceHealthCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DescribeInstanceHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceHealthCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInstanceHealthCommand = /** @class */ (function (_super) {
    __extends(DescribeInstanceHealthCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInstanceHealthCommand(input) {
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
    DescribeInstanceHealthCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "DescribeInstanceHealthCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEndPointStateInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEndPointStateOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInstanceHealthCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeInstanceHealthCommand(input, context);
    };
    DescribeInstanceHealthCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeInstanceHealthCommand(output, context);
    };
    return DescribeInstanceHealthCommand;
}($Command));
export { DescribeInstanceHealthCommand };
//# sourceMappingURL=DescribeInstanceHealthCommand.js.map