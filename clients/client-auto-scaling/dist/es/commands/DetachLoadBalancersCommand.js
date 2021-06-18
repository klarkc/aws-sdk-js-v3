import { __extends } from "tslib";
import { DetachLoadBalancersResultType, DetachLoadBalancersType } from "../models/models_0";
import {
  deserializeAws_queryDetachLoadBalancersCommand,
  serializeAws_queryDetachLoadBalancersCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p>
 *         <p>This operation detaches only Classic Load Balancers. If you have Application Load
 *             Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p>
 *         <p>When you detach a load balancer, it enters the <code>Removing</code> state while
 *             deregistering the instances in the group. When all instances are deregistered, then you
 *             can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DetachLoadBalancersCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DetachLoadBalancersCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DetachLoadBalancersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link DetachLoadBalancersCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachLoadBalancersCommand = /** @class */ (function (_super) {
  __extends(DetachLoadBalancersCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DetachLoadBalancersCommand(input) {
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
  DetachLoadBalancersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DetachLoadBalancersCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DetachLoadBalancersType.filterSensitiveLog,
      outputFilterSensitiveLog: DetachLoadBalancersResultType.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetachLoadBalancersCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDetachLoadBalancersCommand(input, context);
  };
  DetachLoadBalancersCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDetachLoadBalancersCommand(output, context);
  };
  return DetachLoadBalancersCommand;
})($Command);
export { DetachLoadBalancersCommand };
//# sourceMappingURL=DetachLoadBalancersCommand.js.map
