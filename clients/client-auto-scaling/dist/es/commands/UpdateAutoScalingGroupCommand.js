import { __extends } from "tslib";
import { UpdateAutoScalingGroupType } from "../models/models_0";
import {
  deserializeAws_queryUpdateAutoScalingGroupCommand,
  serializeAws_queryUpdateAutoScalingGroupCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <b>We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b>
 *          </p>
 *          <p>Updates the configuration for
 *             the specified Auto Scaling group.</p>
 *         <p>To update an Auto Scaling group, specify the name of the group and the parameter that you want
 *             to change. Any parameters that you don't specify are not changed by this update request.
 *             The new settings take effect on any scaling activities after this call returns.
 *             </p>
 *         <p>If you associate a new launch configuration or template with an Auto Scaling group, all new
 *             instances will get the updated configuration. Existing instances continue to run with
 *             the configuration that they were originally launched with. When you update a group to
 *             specify a mixed instances policy instead of a launch configuration or template, existing
 *             instances may be replaced to match the new purchasing options that you specified in the
 *             policy. For example, if the group currently has 100% On-Demand capacity and the policy
 *             specifies 50% Spot capacity, this means that half of your instances will be gradually
 *             terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches
 *             new instances before terminating the old ones, so that updating your group does not
 *             compromise the performance or availability of your application.</p>
 *         <p>Note the following about changing <code>DesiredCapacity</code>, <code>MaxSize</code>,
 *             or <code>MinSize</code>:</p>
 *         <ul>
 *             <li>
 *                 <p>If a scale-in activity occurs as a result of a new
 *                         <code>DesiredCapacity</code> value that is lower than the current size of
 *                     the group, the Auto Scaling group uses its termination policy to determine which
 *                     instances to terminate.</p>
 *             </li>
 *             <li>
 *                 <p>If you specify a new value for <code>MinSize</code> without specifying a value
 *                     for <code>DesiredCapacity</code>, and the new <code>MinSize</code> is larger
 *                     than the current size of the group, this sets the group's
 *                         <code>DesiredCapacity</code> to the new <code>MinSize</code> value.</p>
 *             </li>
 *             <li>
 *                 <p>If you specify a new value for <code>MaxSize</code> without specifying a value
 *                     for <code>DesiredCapacity</code>, and the new <code>MaxSize</code> is smaller
 *                     than the current size of the group, this sets the group's
 *                         <code>DesiredCapacity</code> to the new <code>MaxSize</code> value.</p>
 *             </li>
 *          </ul>
 *         <p>To see which parameters have been set, call the <a>DescribeAutoScalingGroups</a> API. To view the scaling policies for an Auto Scaling
 *             group, call the <a>DescribePolicies</a> API. If the group has scaling
 *             policies, you can update them by calling the <a>PutScalingPolicy</a>
 *             API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, UpdateAutoScalingGroupCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, UpdateAutoScalingGroupCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new UpdateAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAutoScalingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateAutoScalingGroupCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAutoScalingGroupCommand = /** @class */ (function (_super) {
  __extends(UpdateAutoScalingGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateAutoScalingGroupCommand(input) {
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
  UpdateAutoScalingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "UpdateAutoScalingGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateAutoScalingGroupType.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateAutoScalingGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryUpdateAutoScalingGroupCommand(input, context);
  };
  UpdateAutoScalingGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryUpdateAutoScalingGroupCommand(output, context);
  };
  return UpdateAutoScalingGroupCommand;
})($Command);
export { UpdateAutoScalingGroupCommand };
//# sourceMappingURL=UpdateAutoScalingGroupCommand.js.map
