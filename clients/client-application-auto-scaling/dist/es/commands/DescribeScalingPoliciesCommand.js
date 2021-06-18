import { __extends } from "tslib";
import { DescribeScalingPoliciesRequest, DescribeScalingPoliciesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeScalingPoliciesCommand,
  serializeAws_json1_1DescribeScalingPoliciesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the Application Auto Scaling scaling policies for the specified service namespace.</p>
 *          <p>You can filter the results using <code>ResourceId</code>,
 *          <code>ScalableDimension</code>, and <code>PolicyNames</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, DescribeScalingPoliciesCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, DescribeScalingPoliciesCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const command = new DescribeScalingPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScalingPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingPoliciesCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeScalingPoliciesCommand = /** @class */ (function (_super) {
  __extends(DescribeScalingPoliciesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeScalingPoliciesCommand(input) {
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
  DescribeScalingPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationAutoScalingClient";
    var commandName = "DescribeScalingPoliciesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeScalingPoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeScalingPoliciesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeScalingPoliciesCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeScalingPoliciesCommand(input, context);
  };
  DescribeScalingPoliciesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeScalingPoliciesCommand(output, context);
  };
  return DescribeScalingPoliciesCommand;
})($Command);
export { DescribeScalingPoliciesCommand };
//# sourceMappingURL=DescribeScalingPoliciesCommand.js.map
