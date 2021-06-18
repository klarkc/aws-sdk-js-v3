import { __extends } from "tslib";
import { AttachLoadBalancersResultType, AttachLoadBalancersType } from "../models/models_0";
import {
  deserializeAws_queryAttachLoadBalancersCommand,
  serializeAws_queryAttachLoadBalancersCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>To attach an Application Load Balancer, Network Load Balancer, or Gateway Load
 *                 Balancer, use the <a>AttachLoadBalancerTargetGroups</a> API operation
 *                 instead.</p>
 *         </note>
 *         <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling
 *             registers the running instances with these Classic Load Balancers.</p>
 *         <p>To describe the load balancers for an Auto Scaling group, call the <a>DescribeLoadBalancers</a> API. To detach the load balancer from the Auto Scaling
 *             group, call the <a>DetachLoadBalancers</a> API.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Elastic Load Balancing and
 *                 Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, AttachLoadBalancersCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, AttachLoadBalancersCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new AttachLoadBalancersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link AttachLoadBalancersCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachLoadBalancersCommand = /** @class */ (function (_super) {
  __extends(AttachLoadBalancersCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AttachLoadBalancersCommand(input) {
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
  AttachLoadBalancersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "AttachLoadBalancersCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AttachLoadBalancersType.filterSensitiveLog,
      outputFilterSensitiveLog: AttachLoadBalancersResultType.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AttachLoadBalancersCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryAttachLoadBalancersCommand(input, context);
  };
  AttachLoadBalancersCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryAttachLoadBalancersCommand(output, context);
  };
  return AttachLoadBalancersCommand;
})($Command);
export { AttachLoadBalancersCommand };
//# sourceMappingURL=AttachLoadBalancersCommand.js.map
