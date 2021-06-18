import { __extends } from "tslib";
import { EnableDirectoryRequest, EnableDirectoryResponse } from "../models/models_0";
import {
  deserializeAws_restJson1EnableDirectoryCommand,
  serializeAws_restJson1EnableDirectoryCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the specified directory. Only disabled directories can be enabled. Once
 *       enabled, the directory can then be read and written to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, EnableDirectoryCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, EnableDirectoryCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new EnableDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableDirectoryCommandInput} for command's `input` shape.
 * @see {@link EnableDirectoryCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableDirectoryCommand = /** @class */ (function (_super) {
  __extends(EnableDirectoryCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function EnableDirectoryCommand(input) {
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
  EnableDirectoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "EnableDirectoryCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: EnableDirectoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableDirectoryResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  EnableDirectoryCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1EnableDirectoryCommand(input, context);
  };
  EnableDirectoryCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1EnableDirectoryCommand(output, context);
  };
  return EnableDirectoryCommand;
})($Command);
export { EnableDirectoryCommand };
//# sourceMappingURL=EnableDirectoryCommand.js.map
