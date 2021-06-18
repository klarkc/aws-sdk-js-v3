import { __extends } from "tslib";
import { RegisterScalableTargetRequest, RegisterScalableTargetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RegisterScalableTargetCommand,
  serializeAws_json1_1RegisterScalableTargetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers or updates a scalable target. </p>
 *          <p>A scalable target is a resource that Application Auto Scaling can scale out and scale in. Scalable
 *          targets are uniquely identified by the combination of resource ID, scalable dimension, and
 *          namespace. </p>
 *          <p>When you register a new scalable target, you must specify values for minimum and maximum
 *          capacity. Current capacity will be adjusted within the specified range when scaling starts.
 *          Application Auto Scaling scaling policies will not scale capacity to values that are outside of this
 *          range.</p>
 *          <p>After you register a scalable target, you do not need to register it again to use other
 *          Application Auto Scaling operations. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. You can also view the scaling policies for a service
 *          namespace by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. If you no longer need a scalable target, you can
 *          deregister it by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html">DeregisterScalableTarget</a>.</p>
 *          <p>To update a scalable target, specify the parameters that you want to change. Include the
 *          parameters that identify the scalable target: resource ID, scalable dimension, and
 *          namespace. Any parameters that you don't specify are not changed by this update request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, RegisterScalableTargetCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, RegisterScalableTargetCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const command = new RegisterScalableTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterScalableTargetCommandInput} for command's `input` shape.
 * @see {@link RegisterScalableTargetCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterScalableTargetCommand = /** @class */ (function (_super) {
  __extends(RegisterScalableTargetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RegisterScalableTargetCommand(input) {
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
  RegisterScalableTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationAutoScalingClient";
    var commandName = "RegisterScalableTargetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RegisterScalableTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterScalableTargetResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RegisterScalableTargetCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1RegisterScalableTargetCommand(input, context);
  };
  RegisterScalableTargetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1RegisterScalableTargetCommand(output, context);
  };
  return RegisterScalableTargetCommand;
})($Command);
export { RegisterScalableTargetCommand };
//# sourceMappingURL=RegisterScalableTargetCommand.js.map
