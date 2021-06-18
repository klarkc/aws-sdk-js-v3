import { __extends } from "tslib";
import { PutWarmPoolAnswer, PutWarmPoolType } from "../models/models_0";
import { deserializeAws_queryPutWarmPoolCommand, serializeAws_queryPutWarmPoolCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates a warm pool for the specified Auto Scaling group. A warm pool is a pool of
 *             pre-initialized EC2 instances that sits alongside the Auto Scaling group. Whenever your
 *             application needs to scale out, the Auto Scaling group can draw on the warm pool to meet its new
 *             desired capacity. For more information and example configurations, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for
 *                 Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *         <p>This operation must be called from the Region in which the Auto Scaling group was created.
 *             This operation cannot be called on an Auto Scaling group that has a mixed instances policy or a
 *             launch template or launch configuration that requests Spot Instances.</p>
 *         <p>You can view the instances in the warm pool using the <a>DescribeWarmPool</a> API call. If you are no longer using a warm pool, you can delete it by calling the
 *                 <a>DeleteWarmPool</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutWarmPoolCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, PutWarmPoolCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new PutWarmPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutWarmPoolCommandInput} for command's `input` shape.
 * @see {@link PutWarmPoolCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutWarmPoolCommand = /** @class */ (function (_super) {
  __extends(PutWarmPoolCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutWarmPoolCommand(input) {
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
  PutWarmPoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "PutWarmPoolCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutWarmPoolType.filterSensitiveLog,
      outputFilterSensitiveLog: PutWarmPoolAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutWarmPoolCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryPutWarmPoolCommand(input, context);
  };
  PutWarmPoolCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryPutWarmPoolCommand(output, context);
  };
  return PutWarmPoolCommand;
})($Command);
export { PutWarmPoolCommand };
//# sourceMappingURL=PutWarmPoolCommand.js.map
