import { __extends } from "tslib";
import { DeleteLifecycleHookAnswer, DeleteLifecycleHookType } from "../models/models_0";
import {
  deserializeAws_queryDeleteLifecycleHookCommand,
  serializeAws_queryDeleteLifecycleHookCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified lifecycle hook.</p>
 *         <p>If there are any outstanding lifecycle actions, they are completed first
 *                 (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating
 *             instances).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DeleteLifecycleHookCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DeleteLifecycleHookCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DeleteLifecycleHookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLifecycleHookCommandInput} for command's `input` shape.
 * @see {@link DeleteLifecycleHookCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLifecycleHookCommand = /** @class */ (function (_super) {
  __extends(DeleteLifecycleHookCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteLifecycleHookCommand(input) {
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
  DeleteLifecycleHookCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DeleteLifecycleHookCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteLifecycleHookType.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLifecycleHookAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteLifecycleHookCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDeleteLifecycleHookCommand(input, context);
  };
  DeleteLifecycleHookCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDeleteLifecycleHookCommand(output, context);
  };
  return DeleteLifecycleHookCommand;
})($Command);
export { DeleteLifecycleHookCommand };
//# sourceMappingURL=DeleteLifecycleHookCommand.js.map
