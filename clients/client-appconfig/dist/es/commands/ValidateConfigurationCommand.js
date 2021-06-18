import { __extends } from "tslib";
import { ValidateConfigurationRequest } from "../models/models_0";
import {
  deserializeAws_restJson1ValidateConfigurationCommand,
  serializeAws_restJson1ValidateConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Uses the validators in a configuration profile to validate a configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ValidateConfigurationCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ValidateConfigurationCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new ValidateConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateConfigurationCommandInput} for command's `input` shape.
 * @see {@link ValidateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ValidateConfigurationCommand = /** @class */ (function (_super) {
  __extends(ValidateConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ValidateConfigurationCommand(input) {
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
  ValidateConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "ValidateConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ValidateConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ValidateConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ValidateConfigurationCommand(input, context);
  };
  ValidateConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ValidateConfigurationCommand(output, context);
  };
  return ValidateConfigurationCommand;
})($Command);
export { ValidateConfigurationCommand };
//# sourceMappingURL=ValidateConfigurationCommand.js.map
