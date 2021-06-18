import { __extends } from "tslib";
import { DeleteScalingPolicyRequest, DeleteScalingPolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteScalingPolicyCommand,
  serializeAws_json1_1DeleteScalingPolicyCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified scaling policy for an Application Auto Scaling scalable target.</p>
 *          <p>Deleting a step scaling policy deletes the underlying alarm action, but does not delete
 *          the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated
 *          action.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html#delete-step-scaling-policy">Delete a step scaling policy</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html#delete-target-tracking-policy">Delete a target tracking scaling policy</a> in the
 *             <i>Application Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, DeleteScalingPolicyCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, DeleteScalingPolicyCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const command = new DeleteScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteScalingPolicyCommand = /** @class */ (function (_super) {
  __extends(DeleteScalingPolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteScalingPolicyCommand(input) {
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
  DeleteScalingPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationAutoScalingClient";
    var commandName = "DeleteScalingPolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteScalingPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteScalingPolicyResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteScalingPolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteScalingPolicyCommand(input, context);
  };
  DeleteScalingPolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteScalingPolicyCommand(output, context);
  };
  return DeleteScalingPolicyCommand;
})($Command);
export { DeleteScalingPolicyCommand };
//# sourceMappingURL=DeleteScalingPolicyCommand.js.map
