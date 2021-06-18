import { __extends } from "tslib";
import { BatchReadRequest, BatchReadResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchReadCommand,
  serializeAws_restJson1BatchReadCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Performs all the read operations in a batch. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, BatchReadCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, BatchReadCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new BatchReadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchReadCommandInput} for command's `input` shape.
 * @see {@link BatchReadCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchReadCommand = /** @class */ (function (_super) {
  __extends(BatchReadCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchReadCommand(input) {
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
  BatchReadCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "BatchReadCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchReadRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchReadResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchReadCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1BatchReadCommand(input, context);
  };
  BatchReadCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1BatchReadCommand(output, context);
  };
  return BatchReadCommand;
})($Command);
export { BatchReadCommand };
//# sourceMappingURL=BatchReadCommand.js.map
