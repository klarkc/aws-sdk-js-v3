import { __extends } from "tslib";
import { Deployment, StartDeploymentRequest } from "../models/models_0";
import {
  deserializeAws_restJson1StartDeploymentCommand,
  serializeAws_restJson1StartDeploymentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, StartDeploymentCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, StartDeploymentCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new StartDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDeploymentCommandInput} for command's `input` shape.
 * @see {@link StartDeploymentCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartDeploymentCommand = /** @class */ (function (_super) {
  __extends(StartDeploymentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StartDeploymentCommand(input) {
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
  StartDeploymentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "StartDeploymentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StartDeploymentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Deployment.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StartDeploymentCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1StartDeploymentCommand(input, context);
  };
  StartDeploymentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1StartDeploymentCommand(output, context);
  };
  return StartDeploymentCommand;
})($Command);
export { StartDeploymentCommand };
//# sourceMappingURL=StartDeploymentCommand.js.map
