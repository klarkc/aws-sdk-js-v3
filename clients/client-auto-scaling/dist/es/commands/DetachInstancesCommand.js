import { __extends } from "tslib";
import { DetachInstancesAnswer, DetachInstancesQuery } from "../models/models_0";
import {
  deserializeAws_queryDetachInstancesCommand,
  serializeAws_queryDetachInstancesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes one or more instances from the specified Auto Scaling group.</p>
 *         <p>After the instances are detached, you can manage them independent of the Auto Scaling
 *             group.</p>
 *         <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches
 *             instances to replace the ones that are detached.</p>
 *         <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are
 *             deregistered from the load balancer. If there are target groups attached to the Auto Scaling
 *             group, the instances are deregistered from the target groups.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 instances from
 *                 your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DetachInstancesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DetachInstancesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DetachInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachInstancesCommandInput} for command's `input` shape.
 * @see {@link DetachInstancesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachInstancesCommand = /** @class */ (function (_super) {
  __extends(DetachInstancesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DetachInstancesCommand(input) {
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
  DetachInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DetachInstancesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DetachInstancesQuery.filterSensitiveLog,
      outputFilterSensitiveLog: DetachInstancesAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetachInstancesCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDetachInstancesCommand(input, context);
  };
  DetachInstancesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDetachInstancesCommand(output, context);
  };
  return DetachInstancesCommand;
})($Command);
export { DetachInstancesCommand };
//# sourceMappingURL=DetachInstancesCommand.js.map
