import { __extends } from "tslib";
import { DeleteStackInstancesInput, DeleteStackInstancesOutput } from "../models/models_0";
import {
  deserializeAws_queryDeleteStackInstancesCommand,
  serializeAws_queryDeleteStackInstancesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes stack instances for the specified accounts, in the specified Regions. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeleteStackInstancesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeleteStackInstancesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DeleteStackInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStackInstancesCommandInput} for command's `input` shape.
 * @see {@link DeleteStackInstancesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteStackInstancesCommand = /** @class */ (function (_super) {
  __extends(DeleteStackInstancesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteStackInstancesCommand(input) {
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
  DeleteStackInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DeleteStackInstancesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteStackInstancesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteStackInstancesOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteStackInstancesCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDeleteStackInstancesCommand(input, context);
  };
  DeleteStackInstancesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDeleteStackInstancesCommand(output, context);
  };
  return DeleteStackInstancesCommand;
})($Command);
export { DeleteStackInstancesCommand };
//# sourceMappingURL=DeleteStackInstancesCommand.js.map
