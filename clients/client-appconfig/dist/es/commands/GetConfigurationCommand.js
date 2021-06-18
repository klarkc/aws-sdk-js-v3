import { __extends } from "tslib";
import { Configuration, GetConfigurationRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetConfigurationCommand,
  serializeAws_restJson1GetConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Receive information about a configuration.</p>
 *          <important>
 *             <p>AWS AppConfig uses the value of the <code>ClientConfigurationVersion</code> parameter
 *             to identify the configuration version on your clients. If you don’t send
 *                <code>ClientConfigurationVersion</code> with each call to
 *                <code>GetConfiguration</code>, your clients receive the current configuration. You
 *             are charged each time your clients receive a configuration.</p>
 *             <p>To avoid excess charges, we recommend that you include the
 *                <code>ClientConfigurationVersion</code> value with every call to
 *                <code>GetConfiguration</code>. This value must be saved on your client. Subsequent
 *             calls to <code>GetConfiguration</code> must pass this value by using the
 *                <code>ClientConfigurationVersion</code> parameter. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetConfigurationCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetConfigurationCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new GetConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConfigurationCommand = /** @class */ (function (_super) {
  __extends(GetConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetConfigurationCommand(input) {
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
  GetConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "GetConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Configuration.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetConfigurationCommand(input, context);
  };
  GetConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetConfigurationCommand(output, context);
  };
  return GetConfigurationCommand;
})($Command);
export { GetConfigurationCommand };
//# sourceMappingURL=GetConfigurationCommand.js.map
