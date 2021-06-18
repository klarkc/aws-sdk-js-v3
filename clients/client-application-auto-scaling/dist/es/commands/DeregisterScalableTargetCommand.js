import { __extends } from "tslib";
import { DeregisterScalableTargetRequest, DeregisterScalableTargetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterScalableTargetCommand,
  serializeAws_json1_1DeregisterScalableTargetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which
 *          resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. </p>
 *          <note>
 *             <p>Deregistering a scalable target deletes the scaling policies and the scheduled
 *             actions that are associated with it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, DeregisterScalableTargetCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, DeregisterScalableTargetCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const command = new DeregisterScalableTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterScalableTargetCommandInput} for command's `input` shape.
 * @see {@link DeregisterScalableTargetCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterScalableTargetCommand = /** @class */ (function (_super) {
  __extends(DeregisterScalableTargetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeregisterScalableTargetCommand(input) {
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
  DeregisterScalableTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationAutoScalingClient";
    var commandName = "DeregisterScalableTargetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeregisterScalableTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterScalableTargetResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeregisterScalableTargetCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeregisterScalableTargetCommand(input, context);
  };
  DeregisterScalableTargetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeregisterScalableTargetCommand(output, context);
  };
  return DeregisterScalableTargetCommand;
})($Command);
export { DeregisterScalableTargetCommand };
//# sourceMappingURL=DeregisterScalableTargetCommand.js.map
