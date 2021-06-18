import { __extends } from "tslib";
import { DeleteDirectoryConfigRequest, DeleteDirectoryConfigResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDirectoryConfigCommand,
  serializeAws_json1_1DeleteDirectoryConfigCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteDirectoryConfigCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteDirectoryConfigCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DeleteDirectoryConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDirectoryConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectoryConfigCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDirectoryConfigCommand = /** @class */ (function (_super) {
  __extends(DeleteDirectoryConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteDirectoryConfigCommand(input) {
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
  DeleteDirectoryConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "DeleteDirectoryConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteDirectoryConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDirectoryConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteDirectoryConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteDirectoryConfigCommand(input, context);
  };
  DeleteDirectoryConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteDirectoryConfigCommand(output, context);
  };
  return DeleteDirectoryConfigCommand;
})($Command);
export { DeleteDirectoryConfigCommand };
//# sourceMappingURL=DeleteDirectoryConfigCommand.js.map
