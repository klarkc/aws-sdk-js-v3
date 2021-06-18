import { __extends } from "tslib";
import { DescribeWarmPoolAnswer, DescribeWarmPoolType } from "../models/models_0";
import {
  deserializeAws_queryDescribeWarmPoolCommand,
  serializeAws_queryDescribeWarmPoolCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a warm pool and its instances.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for
 *             Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeWarmPoolCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeWarmPoolCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeWarmPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWarmPoolCommandInput} for command's `input` shape.
 * @see {@link DescribeWarmPoolCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWarmPoolCommand = /** @class */ (function (_super) {
  __extends(DescribeWarmPoolCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeWarmPoolCommand(input) {
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
  DescribeWarmPoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DescribeWarmPoolCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeWarmPoolType.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeWarmPoolAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeWarmPoolCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeWarmPoolCommand(input, context);
  };
  DescribeWarmPoolCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeWarmPoolCommand(output, context);
  };
  return DescribeWarmPoolCommand;
})($Command);
export { DescribeWarmPoolCommand };
//# sourceMappingURL=DescribeWarmPoolCommand.js.map
