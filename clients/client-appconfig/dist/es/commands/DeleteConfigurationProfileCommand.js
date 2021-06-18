import { __extends } from "tslib";
import { DeleteConfigurationProfileRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteConfigurationProfileCommand,
  serializeAws_restJson1DeleteConfigurationProfileCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete a configuration profile. Deleting a configuration profile does not delete a
 *          configuration from a host.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, DeleteConfigurationProfileCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, DeleteConfigurationProfileCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new DeleteConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigurationProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationProfileCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConfigurationProfileCommand = /** @class */ (function (_super) {
  __extends(DeleteConfigurationProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteConfigurationProfileCommand(input) {
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
  DeleteConfigurationProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "DeleteConfigurationProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteConfigurationProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteConfigurationProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteConfigurationProfileCommand(input, context);
  };
  DeleteConfigurationProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteConfigurationProfileCommand(output, context);
  };
  return DeleteConfigurationProfileCommand;
})($Command);
export { DeleteConfigurationProfileCommand };
//# sourceMappingURL=DeleteConfigurationProfileCommand.js.map
