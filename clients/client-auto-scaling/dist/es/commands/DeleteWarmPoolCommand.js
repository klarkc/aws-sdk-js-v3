import { __extends } from "tslib";
import { DeleteWarmPoolAnswer, DeleteWarmPoolType } from "../models/models_0";
import {
  deserializeAws_queryDeleteWarmPoolCommand,
  serializeAws_queryDeleteWarmPoolCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the warm pool for the specified Auto Scaling group.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for
 *                 Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DeleteWarmPoolCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DeleteWarmPoolCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DeleteWarmPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWarmPoolCommandInput} for command's `input` shape.
 * @see {@link DeleteWarmPoolCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteWarmPoolCommand = /** @class */ (function (_super) {
  __extends(DeleteWarmPoolCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteWarmPoolCommand(input) {
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
  DeleteWarmPoolCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DeleteWarmPoolCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteWarmPoolType.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteWarmPoolAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteWarmPoolCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDeleteWarmPoolCommand(input, context);
  };
  DeleteWarmPoolCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDeleteWarmPoolCommand(output, context);
  };
  return DeleteWarmPoolCommand;
})($Command);
export { DeleteWarmPoolCommand };
//# sourceMappingURL=DeleteWarmPoolCommand.js.map
