import { __extends } from "tslib";
import { DeleteDeploymentStrategyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDeploymentStrategyCommand,
  serializeAws_restJson1DeleteDeploymentStrategyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete a deployment strategy. Deleting a deployment strategy does not delete a
 *          configuration from a host.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, DeleteDeploymentStrategyCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, DeleteDeploymentStrategyCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new DeleteDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeploymentStrategyCommandInput} for command's `input` shape.
 * @see {@link DeleteDeploymentStrategyCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDeploymentStrategyCommand = /** @class */ (function (_super) {
  __extends(DeleteDeploymentStrategyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteDeploymentStrategyCommand(input) {
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
  DeleteDeploymentStrategyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "DeleteDeploymentStrategyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteDeploymentStrategyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteDeploymentStrategyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteDeploymentStrategyCommand(input, context);
  };
  DeleteDeploymentStrategyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteDeploymentStrategyCommand(output, context);
  };
  return DeleteDeploymentStrategyCommand;
})($Command);
export { DeleteDeploymentStrategyCommand };
//# sourceMappingURL=DeleteDeploymentStrategyCommand.js.map
