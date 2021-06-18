import { __extends } from "tslib";
import { PutScalingPolicyRequest, PutScalingPolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutScalingPolicyCommand,
  serializeAws_json1_1PutScalingPolicyCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates a scaling policy for an Application Auto Scaling scalable target.</p>
 *          <p>Each scalable target is identified by a service namespace, resource ID, and scalable
 *          dimension. A scaling policy applies to the scalable target identified by those three
 *          attributes. You cannot create a scaling policy until you have registered the resource as a
 *          scalable target.</p>
 *          <p>Multiple scaling policies can be in force at the same time for the same scalable target.
 *          You can have one or more target tracking scaling policies, one or more step scaling
 *          policies, or both. However, there is a chance that multiple policies could conflict,
 *          instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives
 *          precedence to the policy that provides the largest capacity for both scale out and scale
 *          in. For example, if one policy increases capacity by 3, another policy increases capacity
 *          by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest
 *          calculated capacity (200% of 10 = 20) and scales out to 30. </p>
 *          <p>We recommend caution, however, when using target tracking scaling policies with step
 *          scaling policies because conflicts between these policies can cause undesirable behavior.
 *          For example, if the step scaling policy initiates a scale-in activity before the target
 *          tracking policy is ready to scale in, the scale-in activity will not be blocked. After the
 *          scale-in activity completes, the target tracking policy could instruct the scalable target
 *          to scale out again. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
 *          <note>
 *             <p>If a scalable target is deregistered, the scalable target is no longer available to
 *             execute scaling policies. Any scaling policies that were specified for the scalable
 *             target are deleted.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, PutScalingPolicyCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, PutScalingPolicyCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const command = new PutScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link PutScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutScalingPolicyCommand = /** @class */ (function (_super) {
  __extends(PutScalingPolicyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutScalingPolicyCommand(input) {
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
  PutScalingPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationAutoScalingClient";
    var commandName = "PutScalingPolicyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutScalingPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutScalingPolicyResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutScalingPolicyCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1PutScalingPolicyCommand(input, context);
  };
  PutScalingPolicyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1PutScalingPolicyCommand(output, context);
  };
  return PutScalingPolicyCommand;
})($Command);
export { PutScalingPolicyCommand };
//# sourceMappingURL=PutScalingPolicyCommand.js.map
