import { __extends } from "tslib";
import { ConfigurationProfile, UpdateConfigurationProfileRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateConfigurationProfileCommand,
  serializeAws_restJson1UpdateConfigurationProfileCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a configuration profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, UpdateConfigurationProfileCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, UpdateConfigurationProfileCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new UpdateConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConfigurationProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationProfileCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateConfigurationProfileCommand = /** @class */ (function (_super) {
  __extends(UpdateConfigurationProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateConfigurationProfileCommand(input) {
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
  UpdateConfigurationProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "UpdateConfigurationProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateConfigurationProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfigurationProfile.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateConfigurationProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateConfigurationProfileCommand(input, context);
  };
  UpdateConfigurationProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateConfigurationProfileCommand(output, context);
  };
  return UpdateConfigurationProfileCommand;
})($Command);
export { UpdateConfigurationProfileCommand };
//# sourceMappingURL=UpdateConfigurationProfileCommand.js.map
