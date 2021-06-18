import { __extends } from "tslib";
import { BatchPutScheduledUpdateGroupActionAnswer, BatchPutScheduledUpdateGroupActionType } from "../models/models_0";
import {
  deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand,
  serializeAws_queryBatchPutScheduledUpdateGroupActionCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates one or more scheduled scaling actions for an Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, BatchPutScheduledUpdateGroupActionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, BatchPutScheduledUpdateGroupActionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new BatchPutScheduledUpdateGroupActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchPutScheduledUpdateGroupActionCommandInput} for command's `input` shape.
 * @see {@link BatchPutScheduledUpdateGroupActionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchPutScheduledUpdateGroupActionCommand = /** @class */ (function (_super) {
  __extends(BatchPutScheduledUpdateGroupActionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchPutScheduledUpdateGroupActionCommand(input) {
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
  BatchPutScheduledUpdateGroupActionCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "BatchPutScheduledUpdateGroupActionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchPutScheduledUpdateGroupActionType.filterSensitiveLog,
      outputFilterSensitiveLog: BatchPutScheduledUpdateGroupActionAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchPutScheduledUpdateGroupActionCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryBatchPutScheduledUpdateGroupActionCommand(input, context);
  };
  BatchPutScheduledUpdateGroupActionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand(output, context);
  };
  return BatchPutScheduledUpdateGroupActionCommand;
})($Command);
export { BatchPutScheduledUpdateGroupActionCommand };
//# sourceMappingURL=BatchPutScheduledUpdateGroupActionCommand.js.map
