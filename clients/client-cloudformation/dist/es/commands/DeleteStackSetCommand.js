import { __extends } from "tslib";
import { DeleteStackSetInput, DeleteStackSetOutput } from "../models/models_0";
import {
  deserializeAws_queryDeleteStackSetCommand,
  serializeAws_queryDeleteStackSetCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a stack set. Before you can delete a stack set, all of its member stack
 *          instances must be deleted. For more information about how to do this, see <a>DeleteStackInstances</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeleteStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeleteStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DeleteStackSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStackSetCommandInput} for command's `input` shape.
 * @see {@link DeleteStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteStackSetCommand = /** @class */ (function (_super) {
  __extends(DeleteStackSetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteStackSetCommand(input) {
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
  DeleteStackSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DeleteStackSetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteStackSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteStackSetOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteStackSetCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDeleteStackSetCommand(input, context);
  };
  DeleteStackSetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDeleteStackSetCommand(output, context);
  };
  return DeleteStackSetCommand;
})($Command);
export { DeleteStackSetCommand };
//# sourceMappingURL=DeleteStackSetCommand.js.map
