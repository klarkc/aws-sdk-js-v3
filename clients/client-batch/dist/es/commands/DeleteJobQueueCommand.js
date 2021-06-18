import { __extends } from "tslib";
import { DeleteJobQueueRequest, DeleteJobQueueResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteJobQueueCommand,
  serializeAws_restJson1DeleteJobQueueCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are eventually terminated when you delete a job queue.
 *    The jobs are terminated at a rate of about 16 jobs each second.</p>
 *          <p>It's not necessary to disassociate compute environments from a queue before submitting a
 *     <code>DeleteJobQueue</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DeleteJobQueueCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DeleteJobQueueCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new DeleteJobQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJobQueueCommandInput} for command's `input` shape.
 * @see {@link DeleteJobQueueCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteJobQueueCommand = /** @class */ (function (_super) {
  __extends(DeleteJobQueueCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteJobQueueCommand(input) {
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
  DeleteJobQueueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BatchClient";
    var commandName = "DeleteJobQueueCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteJobQueueRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteJobQueueResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteJobQueueCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteJobQueueCommand(input, context);
  };
  DeleteJobQueueCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteJobQueueCommand(output, context);
  };
  return DeleteJobQueueCommand;
})($Command);
export { DeleteJobQueueCommand };
//# sourceMappingURL=DeleteJobQueueCommand.js.map
