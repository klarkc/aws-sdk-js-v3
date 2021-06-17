import { __extends } from "tslib";
import { DescribeAccessPointsInput, DescribeAccessPointsOutput } from "../models/models_0";
import { deserializeAws_queryDescribeLoadBalancersCommand, serializeAws_queryDescribeLoadBalancersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeLoadBalancersCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeLoadBalancersCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DescribeLoadBalancersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancersCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLoadBalancersCommand = /** @class */ (function (_super) {
    __extends(DescribeLoadBalancersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLoadBalancersCommand(input) {
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
    DescribeLoadBalancersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "DescribeLoadBalancersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAccessPointsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAccessPointsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLoadBalancersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeLoadBalancersCommand(input, context);
    };
    DescribeLoadBalancersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeLoadBalancersCommand(output, context);
    };
    return DescribeLoadBalancersCommand;
}($Command));
export { DescribeLoadBalancersCommand };
//# sourceMappingURL=DescribeLoadBalancersCommand.js.map