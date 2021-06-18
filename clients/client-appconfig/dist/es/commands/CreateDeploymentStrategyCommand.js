import { __extends } from "tslib";
import { CreateDeploymentStrategyRequest, DeploymentStrategy } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDeploymentStrategyCommand,
  serializeAws_restJson1CreateDeploymentStrategyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A deployment strategy defines important criteria for rolling out your configuration to
 *          the designated targets. A deployment strategy includes: the overall duration required, a
 *          percentage of targets to receive the deployment during each interval, an algorithm that
 *          defines how percentage grows, and bake time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateDeploymentStrategyCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateDeploymentStrategyCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new CreateDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeploymentStrategyCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentStrategyCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDeploymentStrategyCommand = /** @class */ (function (_super) {
  __extends(CreateDeploymentStrategyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateDeploymentStrategyCommand(input) {
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
  CreateDeploymentStrategyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "CreateDeploymentStrategyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateDeploymentStrategyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeploymentStrategy.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateDeploymentStrategyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateDeploymentStrategyCommand(input, context);
  };
  CreateDeploymentStrategyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateDeploymentStrategyCommand(output, context);
  };
  return CreateDeploymentStrategyCommand;
})($Command);
export { CreateDeploymentStrategyCommand };
//# sourceMappingURL=CreateDeploymentStrategyCommand.js.map
