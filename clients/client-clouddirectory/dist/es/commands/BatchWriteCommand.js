import { __extends } from "tslib";
import { BatchWriteRequest, BatchWriteResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchWriteCommand,
  serializeAws_restJson1BatchWriteCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Performs all the write operations in a batch. Either all the operations succeed or
 *       none.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, BatchWriteCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, BatchWriteCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new BatchWriteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchWriteCommandInput} for command's `input` shape.
 * @see {@link BatchWriteCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchWriteCommand = /** @class */ (function (_super) {
  __extends(BatchWriteCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchWriteCommand(input) {
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
  BatchWriteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "BatchWriteCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchWriteRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchWriteResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchWriteCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1BatchWriteCommand(input, context);
  };
  BatchWriteCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1BatchWriteCommand(output, context);
  };
  return BatchWriteCommand;
})($Command);
export { BatchWriteCommand };
//# sourceMappingURL=BatchWriteCommand.js.map
