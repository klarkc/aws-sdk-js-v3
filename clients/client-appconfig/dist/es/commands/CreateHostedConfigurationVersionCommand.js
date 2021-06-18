import { __extends } from "tslib";
import { CreateHostedConfigurationVersionRequest, HostedConfigurationVersion } from "../models/models_0";
import {
  deserializeAws_restJson1CreateHostedConfigurationVersionCommand,
  serializeAws_restJson1CreateHostedConfigurationVersionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a new configuration in the AppConfig configuration store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateHostedConfigurationVersionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateHostedConfigurationVersionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new CreateHostedConfigurationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHostedConfigurationVersionCommandInput} for command's `input` shape.
 * @see {@link CreateHostedConfigurationVersionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateHostedConfigurationVersionCommand = /** @class */ (function (_super) {
  __extends(CreateHostedConfigurationVersionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateHostedConfigurationVersionCommand(input) {
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
  CreateHostedConfigurationVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "CreateHostedConfigurationVersionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateHostedConfigurationVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: HostedConfigurationVersion.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateHostedConfigurationVersionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateHostedConfigurationVersionCommand(input, context);
  };
  CreateHostedConfigurationVersionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateHostedConfigurationVersionCommand(output, context);
  };
  return CreateHostedConfigurationVersionCommand;
})($Command);
export { CreateHostedConfigurationVersionCommand };
//# sourceMappingURL=CreateHostedConfigurationVersionCommand.js.map
