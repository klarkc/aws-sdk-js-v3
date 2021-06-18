import { __extends } from "tslib";
import { DetachLoadBalancerTargetGroupsResultType, DetachLoadBalancerTargetGroupsType } from "../models/models_0";
import {
  deserializeAws_queryDetachLoadBalancerTargetGroupsCommand,
  serializeAws_queryDetachLoadBalancerTargetGroupsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detaches one or more target groups from the specified Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DetachLoadBalancerTargetGroupsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DetachLoadBalancerTargetGroupsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DetachLoadBalancerTargetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachLoadBalancerTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link DetachLoadBalancerTargetGroupsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachLoadBalancerTargetGroupsCommand = /** @class */ (function (_super) {
  __extends(DetachLoadBalancerTargetGroupsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DetachLoadBalancerTargetGroupsCommand(input) {
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
  DetachLoadBalancerTargetGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DetachLoadBalancerTargetGroupsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DetachLoadBalancerTargetGroupsType.filterSensitiveLog,
      outputFilterSensitiveLog: DetachLoadBalancerTargetGroupsResultType.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetachLoadBalancerTargetGroupsCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDetachLoadBalancerTargetGroupsCommand(input, context);
  };
  DetachLoadBalancerTargetGroupsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDetachLoadBalancerTargetGroupsCommand(output, context);
  };
  return DetachLoadBalancerTargetGroupsCommand;
})($Command);
export { DetachLoadBalancerTargetGroupsCommand };
//# sourceMappingURL=DetachLoadBalancerTargetGroupsCommand.js.map
