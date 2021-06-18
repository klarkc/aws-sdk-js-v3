import { __extends } from "tslib";
import { DetachFromIndexRequest, DetachFromIndexResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DetachFromIndexCommand,
  serializeAws_restJson1DetachFromIndexCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detaches the specified object from the specified index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, DetachFromIndexCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, DetachFromIndexCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new DetachFromIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachFromIndexCommandInput} for command's `input` shape.
 * @see {@link DetachFromIndexCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachFromIndexCommand = /** @class */ (function (_super) {
  __extends(DetachFromIndexCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DetachFromIndexCommand(input) {
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
  DetachFromIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "DetachFromIndexCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DetachFromIndexRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetachFromIndexResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetachFromIndexCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DetachFromIndexCommand(input, context);
  };
  DetachFromIndexCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DetachFromIndexCommand(output, context);
  };
  return DetachFromIndexCommand;
})($Command);
export { DetachFromIndexCommand };
//# sourceMappingURL=DetachFromIndexCommand.js.map
