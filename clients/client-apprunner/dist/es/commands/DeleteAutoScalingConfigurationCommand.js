import { __extends } from "tslib";
import { DeleteAutoScalingConfigurationRequest, DeleteAutoScalingConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DeleteAutoScalingConfigurationCommand,
  serializeAws_json1_0DeleteAutoScalingConfigurationCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete an AWS App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a
 *       configuration that's used by one or more App Runner services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DeleteAutoScalingConfigurationCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DeleteAutoScalingConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new DeleteAutoScalingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAutoScalingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAutoScalingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAutoScalingConfigurationCommand = /** @class */ (function (_super) {
  __extends(DeleteAutoScalingConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteAutoScalingConfigurationCommand(input) {
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
  DeleteAutoScalingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppRunnerClient";
    var commandName = "DeleteAutoScalingConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteAutoScalingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAutoScalingConfigurationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteAutoScalingConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_0DeleteAutoScalingConfigurationCommand(input, context);
  };
  DeleteAutoScalingConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_0DeleteAutoScalingConfigurationCommand(output, context);
  };
  return DeleteAutoScalingConfigurationCommand;
})($Command);
export { DeleteAutoScalingConfigurationCommand };
//# sourceMappingURL=DeleteAutoScalingConfigurationCommand.js.map
