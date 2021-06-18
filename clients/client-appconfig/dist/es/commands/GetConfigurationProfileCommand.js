import { __extends } from "tslib";
import { ConfigurationProfile, GetConfigurationProfileRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetConfigurationProfileCommand,
  serializeAws_restJson1GetConfigurationProfileCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve information about a configuration profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetConfigurationProfileCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetConfigurationProfileCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new GetConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConfigurationProfileCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationProfileCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConfigurationProfileCommand = /** @class */ (function (_super) {
  __extends(GetConfigurationProfileCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetConfigurationProfileCommand(input) {
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
  GetConfigurationProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "GetConfigurationProfileCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetConfigurationProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfigurationProfile.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetConfigurationProfileCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetConfigurationProfileCommand(input, context);
  };
  GetConfigurationProfileCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetConfigurationProfileCommand(output, context);
  };
  return GetConfigurationProfileCommand;
})($Command);
export { GetConfigurationProfileCommand };
//# sourceMappingURL=GetConfigurationProfileCommand.js.map
