import { __extends } from "tslib";
import { DeleteAutoScalingGroupType } from "../models/models_0";
import {
  deserializeAws_queryDeleteAutoScalingGroupCommand,
  serializeAws_queryDeleteAutoScalingGroupCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified Auto Scaling group.</p>
 *         <p>If the group has instances or scaling activities in progress, you must specify the
 *             option to force the deletion in order for it to succeed.</p>
 *         <p>If the group has policies, deleting the group deletes the policies, the underlying
 *             alarm actions, and any alarm that no longer has an associated action.</p>
 *         <p>To remove instances from the Auto Scaling group before deleting it, call the <a>DetachInstances</a> API with the list of instances and the option to
 *             decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement
 *             instances.</p>
 *         <p>To terminate all instances before deleting the Auto Scaling group, call the <a>UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity
 *             of the Auto Scaling group to zero.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DeleteAutoScalingGroupCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DeleteAutoScalingGroupCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DeleteAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAutoScalingGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteAutoScalingGroupCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAutoScalingGroupCommand = /** @class */ (function (_super) {
  __extends(DeleteAutoScalingGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteAutoScalingGroupCommand(input) {
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
  DeleteAutoScalingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DeleteAutoScalingGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteAutoScalingGroupType.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteAutoScalingGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDeleteAutoScalingGroupCommand(input, context);
  };
  DeleteAutoScalingGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDeleteAutoScalingGroupCommand(output, context);
  };
  return DeleteAutoScalingGroupCommand;
})($Command);
export { DeleteAutoScalingGroupCommand };
//# sourceMappingURL=DeleteAutoScalingGroupCommand.js.map
