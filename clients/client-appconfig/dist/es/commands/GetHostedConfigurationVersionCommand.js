import { __extends } from "tslib";
import { GetHostedConfigurationVersionRequest, HostedConfigurationVersion } from "../models/models_0";
import {
  deserializeAws_restJson1GetHostedConfigurationVersionCommand,
  serializeAws_restJson1GetHostedConfigurationVersionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get information about a specific configuration version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetHostedConfigurationVersionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetHostedConfigurationVersionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new GetHostedConfigurationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostedConfigurationVersionCommandInput} for command's `input` shape.
 * @see {@link GetHostedConfigurationVersionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetHostedConfigurationVersionCommand = /** @class */ (function (_super) {
  __extends(GetHostedConfigurationVersionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetHostedConfigurationVersionCommand(input) {
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
  GetHostedConfigurationVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "GetHostedConfigurationVersionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetHostedConfigurationVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: HostedConfigurationVersion.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetHostedConfigurationVersionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetHostedConfigurationVersionCommand(input, context);
  };
  GetHostedConfigurationVersionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetHostedConfigurationVersionCommand(output, context);
  };
  return GetHostedConfigurationVersionCommand;
})($Command);
export { GetHostedConfigurationVersionCommand };
//# sourceMappingURL=GetHostedConfigurationVersionCommand.js.map
