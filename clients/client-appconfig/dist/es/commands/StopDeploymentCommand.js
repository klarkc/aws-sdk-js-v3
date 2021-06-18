import { __extends } from "tslib";
import { Deployment, StopDeploymentRequest } from "../models/models_0";
import {
  deserializeAws_restJson1StopDeploymentCommand,
  serializeAws_restJson1StopDeploymentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a deployment. This API action works only on deployments that have a status of
 *             <code>DEPLOYING</code>. This action moves the deployment to a status of
 *             <code>ROLLED_BACK</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, StopDeploymentCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, StopDeploymentCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new StopDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDeploymentCommandInput} for command's `input` shape.
 * @see {@link StopDeploymentCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopDeploymentCommand = /** @class */ (function (_super) {
  __extends(StopDeploymentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StopDeploymentCommand(input) {
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
  StopDeploymentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "StopDeploymentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StopDeploymentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Deployment.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StopDeploymentCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1StopDeploymentCommand(input, context);
  };
  StopDeploymentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1StopDeploymentCommand(output, context);
  };
  return StopDeploymentCommand;
})($Command);
export { StopDeploymentCommand };
//# sourceMappingURL=StopDeploymentCommand.js.map
