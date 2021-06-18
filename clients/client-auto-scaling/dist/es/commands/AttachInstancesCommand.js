import { __extends } from "tslib";
import { AttachInstancesQuery } from "../models/models_0";
import {
  deserializeAws_queryAttachInstancesCommand,
  serializeAws_queryAttachInstancesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p>
 *         <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the
 *             number of instances being attached. If the number of instances being attached plus the
 *             desired capacity of the group exceeds the maximum size of the group, the operation
 *             fails.</p>
 *         <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are
 *             also registered with the load balancer. If there are target groups attached to your Auto Scaling
 *             group, the instances are also registered with the target groups.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html">Attach EC2 instances to
 *                 your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, AttachInstancesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, AttachInstancesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new AttachInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachInstancesCommandInput} for command's `input` shape.
 * @see {@link AttachInstancesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachInstancesCommand = /** @class */ (function (_super) {
  __extends(AttachInstancesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function AttachInstancesCommand(input) {
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
  AttachInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "AttachInstancesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: AttachInstancesQuery.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  AttachInstancesCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryAttachInstancesCommand(input, context);
  };
  AttachInstancesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryAttachInstancesCommand(output, context);
  };
  return AttachInstancesCommand;
})($Command);
export { AttachInstancesCommand };
//# sourceMappingURL=AttachInstancesCommand.js.map
