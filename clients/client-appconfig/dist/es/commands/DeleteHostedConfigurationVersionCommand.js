import { __extends } from "tslib";
import { DeleteHostedConfigurationVersionRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteHostedConfigurationVersionCommand,
  serializeAws_restJson1DeleteHostedConfigurationVersionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete a version of a configuration from the AppConfig configuration store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, DeleteHostedConfigurationVersionCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, DeleteHostedConfigurationVersionCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new DeleteHostedConfigurationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHostedConfigurationVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteHostedConfigurationVersionCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteHostedConfigurationVersionCommand = /** @class */ (function (_super) {
  __extends(DeleteHostedConfigurationVersionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteHostedConfigurationVersionCommand(input) {
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
  DeleteHostedConfigurationVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "DeleteHostedConfigurationVersionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteHostedConfigurationVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteHostedConfigurationVersionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteHostedConfigurationVersionCommand(input, context);
  };
  DeleteHostedConfigurationVersionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteHostedConfigurationVersionCommand(output, context);
  };
  return DeleteHostedConfigurationVersionCommand;
})($Command);
export { DeleteHostedConfigurationVersionCommand };
//# sourceMappingURL=DeleteHostedConfigurationVersionCommand.js.map
