import { __extends } from "tslib";
import { AttachLoadBalancerTargetGroupsResultType, AttachLoadBalancerTargetGroupsType } from "../models/models_0";
import {
  deserializeAws_queryAttachLoadBalancerTargetGroupsCommand,
  serializeAws_queryAttachLoadBalancerTargetGroupsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches one or more target groups to the specified Auto Scaling group.</p>
 *         <p>This operation is used with the following load balancer types: </p>
 *         <ul>
 *             <li>
 *                 <p> Application Load Balancer - Operates at the application layer (layer 7) and
 *                     supports HTTP and HTTPS. </p>
 *             </li>
 *             <li>
 *                 <p> Network Load Balancer - Operates at the transport layer (layer 4) and
 *                     supports TCP, TLS, and UDP. </p>
 *             </li>
 *             <li>
 *                 <p> Gateway Load Balancer - Operates at the network layer (layer 3).</p>
 *             </li>
 *          </ul>
 *         <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from
 *             the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Elastic Load Balancing and
 *                 Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, AttachLoadBalancerTargetGroupsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, AttachLoadBalancerTargetGroupsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new AttachLoadBalancerTargetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachLoadBalancerTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link AttachLoadBalancerTargetGroupsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachLoadBalancerTargetGroupsCommand = /** @class */ (function (_super) {
  __extends(AttachLoadBalancerTargetGroupsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AttachLoadBalancerTargetGroupsCommand(input) {
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
  AttachLoadBalancerTargetGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "AttachLoadBalancerTargetGroupsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AttachLoadBalancerTargetGroupsType.filterSensitiveLog,
      outputFilterSensitiveLog: AttachLoadBalancerTargetGroupsResultType.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AttachLoadBalancerTargetGroupsCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryAttachLoadBalancerTargetGroupsCommand(input, context);
  };
  AttachLoadBalancerTargetGroupsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryAttachLoadBalancerTargetGroupsCommand(output, context);
  };
  return AttachLoadBalancerTargetGroupsCommand;
})($Command);
export { AttachLoadBalancerTargetGroupsCommand };
//# sourceMappingURL=AttachLoadBalancerTargetGroupsCommand.js.map
