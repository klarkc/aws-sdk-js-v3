import { __extends } from "tslib";
import { UpdateJobQueueRequest, UpdateJobQueueResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateJobQueueCommand,
  serializeAws_restJson1UpdateJobQueueCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a job queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, UpdateJobQueueCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, UpdateJobQueueCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new UpdateJobQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJobQueueCommandInput} for command's `input` shape.
 * @see {@link UpdateJobQueueCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateJobQueueCommand = /** @class */ (function (_super) {
  __extends(UpdateJobQueueCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateJobQueueCommand(input) {
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
  UpdateJobQueueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BatchClient";
    var commandName = "UpdateJobQueueCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateJobQueueRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateJobQueueResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateJobQueueCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateJobQueueCommand(input, context);
  };
  UpdateJobQueueCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateJobQueueCommand(output, context);
  };
  return UpdateJobQueueCommand;
})($Command);
export { UpdateJobQueueCommand };
//# sourceMappingURL=UpdateJobQueueCommand.js.map
