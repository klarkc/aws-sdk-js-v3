import { __extends } from "tslib";
import { DisableDirectoryRequest, DisableDirectoryResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DisableDirectoryCommand,
  serializeAws_restJson1DisableDirectoryCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the specified directory. Disabled directories cannot be read or written to.
 *       Only enabled directories can be disabled. Disabled directories may be reenabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, DisableDirectoryCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, DisableDirectoryCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new DisableDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableDirectoryCommandInput} for command's `input` shape.
 * @see {@link DisableDirectoryCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableDirectoryCommand = /** @class */ (function (_super) {
  __extends(DisableDirectoryCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DisableDirectoryCommand(input) {
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
  DisableDirectoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "DisableDirectoryCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DisableDirectoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisableDirectoryResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DisableDirectoryCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DisableDirectoryCommand(input, context);
  };
  DisableDirectoryCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DisableDirectoryCommand(output, context);
  };
  return DisableDirectoryCommand;
})($Command);
export { DisableDirectoryCommand };
//# sourceMappingURL=DisableDirectoryCommand.js.map
