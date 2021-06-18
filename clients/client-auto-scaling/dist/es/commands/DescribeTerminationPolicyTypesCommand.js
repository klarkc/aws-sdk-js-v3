import { __extends } from "tslib";
import { DescribeTerminationPolicyTypesAnswer } from "../models/models_0";
import {
  deserializeAws_queryDescribeTerminationPolicyTypesCommand,
  serializeAws_queryDescribeTerminationPolicyTypesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html">Controlling which Auto Scaling
 *                 instances terminate during scale in</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeTerminationPolicyTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeTerminationPolicyTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeTerminationPolicyTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTerminationPolicyTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeTerminationPolicyTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTerminationPolicyTypesCommand = /** @class */ (function (_super) {
  __extends(DescribeTerminationPolicyTypesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeTerminationPolicyTypesCommand(input) {
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
  DescribeTerminationPolicyTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DescribeTerminationPolicyTypesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: function (input) {
        return input;
      },
      outputFilterSensitiveLog: DescribeTerminationPolicyTypesAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeTerminationPolicyTypesCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeTerminationPolicyTypesCommand(input, context);
  };
  DescribeTerminationPolicyTypesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeTerminationPolicyTypesCommand(output, context);
  };
  return DescribeTerminationPolicyTypesCommand;
})($Command);
export { DescribeTerminationPolicyTypesCommand };
//# sourceMappingURL=DescribeTerminationPolicyTypesCommand.js.map
