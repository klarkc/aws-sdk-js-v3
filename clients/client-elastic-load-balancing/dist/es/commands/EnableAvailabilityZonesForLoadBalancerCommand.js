import { __extends } from "tslib";
import { AddAvailabilityZonesInput, AddAvailabilityZonesOutput } from "../models/models_0";
import { deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand, serializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer
 *             in EC2-Classic or a default VPC.</p>
 *         <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p>
 *         <p>The load balancer evenly distributes requests across all its registered Availability Zones
 *             that contain instances. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, EnableAvailabilityZonesForLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, EnableAvailabilityZonesForLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new EnableAvailabilityZonesForLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableAvailabilityZonesForLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link EnableAvailabilityZonesForLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableAvailabilityZonesForLoadBalancerCommand = /** @class */ (function (_super) {
    __extends(EnableAvailabilityZonesForLoadBalancerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableAvailabilityZonesForLoadBalancerCommand(input) {
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
    EnableAvailabilityZonesForLoadBalancerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingClient";
        var commandName = "EnableAvailabilityZonesForLoadBalancerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddAvailabilityZonesInput.filterSensitiveLog,
            outputFilterSensitiveLog: AddAvailabilityZonesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableAvailabilityZonesForLoadBalancerCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand(input, context);
    };
    EnableAvailabilityZonesForLoadBalancerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand(output, context);
    };
    return EnableAvailabilityZonesForLoadBalancerCommand;
}($Command));
export { EnableAvailabilityZonesForLoadBalancerCommand };
//# sourceMappingURL=EnableAvailabilityZonesForLoadBalancerCommand.js.map