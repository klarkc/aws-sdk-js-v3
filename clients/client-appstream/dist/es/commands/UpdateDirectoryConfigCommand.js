import { __extends } from "tslib";
import { UpdateDirectoryConfigRequest, UpdateDirectoryConfigResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDirectoryConfigCommand,
  serializeAws_json1_1UpdateDirectoryConfigCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateDirectoryConfigCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateDirectoryConfigCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new UpdateDirectoryConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDirectoryConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateDirectoryConfigCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDirectoryConfigCommand = /** @class */ (function (_super) {
  __extends(UpdateDirectoryConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateDirectoryConfigCommand(input) {
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
  UpdateDirectoryConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "UpdateDirectoryConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateDirectoryConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDirectoryConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateDirectoryConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateDirectoryConfigCommand(input, context);
  };
  UpdateDirectoryConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateDirectoryConfigCommand(output, context);
  };
  return UpdateDirectoryConfigCommand;
})($Command);
export { UpdateDirectoryConfigCommand };
//# sourceMappingURL=UpdateDirectoryConfigCommand.js.map
