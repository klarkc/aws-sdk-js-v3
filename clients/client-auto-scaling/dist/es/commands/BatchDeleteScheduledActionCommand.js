import { __extends } from "tslib";
import { BatchDeleteScheduledActionAnswer, BatchDeleteScheduledActionType } from "../models/models_0";
import {
  deserializeAws_queryBatchDeleteScheduledActionCommand,
  serializeAws_queryBatchDeleteScheduledActionCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes one or more scheduled actions for the specified Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, BatchDeleteScheduledActionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, BatchDeleteScheduledActionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new BatchDeleteScheduledActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteScheduledActionCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteScheduledActionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDeleteScheduledActionCommand = /** @class */ (function (_super) {
  __extends(BatchDeleteScheduledActionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchDeleteScheduledActionCommand(input) {
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
  BatchDeleteScheduledActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "BatchDeleteScheduledActionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchDeleteScheduledActionType.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteScheduledActionAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchDeleteScheduledActionCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryBatchDeleteScheduledActionCommand(input, context);
  };
  BatchDeleteScheduledActionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryBatchDeleteScheduledActionCommand(output, context);
  };
  return BatchDeleteScheduledActionCommand;
})($Command);
export { BatchDeleteScheduledActionCommand };
//# sourceMappingURL=BatchDeleteScheduledActionCommand.js.map
