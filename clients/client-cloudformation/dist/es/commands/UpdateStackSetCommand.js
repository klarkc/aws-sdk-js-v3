import { __extends } from "tslib";
import { UpdateStackSetInput, UpdateStackSetOutput } from "../models/models_0";
import {
  deserializeAws_queryUpdateStackSetCommand,
  serializeAws_queryUpdateStackSetCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the stack set, and associated stack instances in the specified accounts and
 *          Regions.</p>
 *          <p>Even if the stack set operation created by updating the stack set fails (completely
 *          or partially, below or above a specified failure tolerance), the stack set is updated with
 *          your changes. Subsequent <a>CreateStackInstances</a> calls on the specified
 *          stack set use the updated stack set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, UpdateStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, UpdateStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new UpdateStackSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStackSetCommandInput} for command's `input` shape.
 * @see {@link UpdateStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateStackSetCommand = /** @class */ (function (_super) {
  __extends(UpdateStackSetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateStackSetCommand(input) {
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
  UpdateStackSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "UpdateStackSetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateStackSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateStackSetOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateStackSetCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryUpdateStackSetCommand(input, context);
  };
  UpdateStackSetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryUpdateStackSetCommand(output, context);
  };
  return UpdateStackSetCommand;
})($Command);
export { UpdateStackSetCommand };
//# sourceMappingURL=UpdateStackSetCommand.js.map
