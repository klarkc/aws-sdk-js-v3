import { __extends } from "tslib";
import { DeploymentStrategies, ListDeploymentStrategiesRequest } from "../models/models_0";
import {
  deserializeAws_restJson1ListDeploymentStrategiesCommand,
  serializeAws_restJson1ListDeploymentStrategiesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List deployment strategies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListDeploymentStrategiesCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListDeploymentStrategiesCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new ListDeploymentStrategiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeploymentStrategiesCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentStrategiesCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDeploymentStrategiesCommand = /** @class */ (function (_super) {
  __extends(ListDeploymentStrategiesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListDeploymentStrategiesCommand(input) {
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
  ListDeploymentStrategiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "ListDeploymentStrategiesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListDeploymentStrategiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeploymentStrategies.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListDeploymentStrategiesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListDeploymentStrategiesCommand(input, context);
  };
  ListDeploymentStrategiesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListDeploymentStrategiesCommand(output, context);
  };
  return ListDeploymentStrategiesCommand;
})($Command);
export { ListDeploymentStrategiesCommand };
//# sourceMappingURL=ListDeploymentStrategiesCommand.js.map
