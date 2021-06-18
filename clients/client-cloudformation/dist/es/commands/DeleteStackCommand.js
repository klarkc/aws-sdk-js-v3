import { __extends } from "tslib";
import { DeleteStackInput } from "../models/models_0";
import { deserializeAws_queryDeleteStackCommand, serializeAws_queryDeleteStackCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified stack. Once the call completes successfully, stack deletion
 *          starts. Deleted stacks do not show up in the <a>DescribeStacks</a> API if the
 *          deletion has been completed successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeleteStackCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeleteStackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DeleteStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStackCommandInput} for command's `input` shape.
 * @see {@link DeleteStackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteStackCommand = /** @class */ (function (_super) {
  __extends(DeleteStackCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteStackCommand(input) {
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
  DeleteStackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DeleteStackCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteStackInput.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteStackCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDeleteStackCommand(input, context);
  };
  DeleteStackCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDeleteStackCommand(output, context);
  };
  return DeleteStackCommand;
})($Command);
export { DeleteStackCommand };
//# sourceMappingURL=DeleteStackCommand.js.map
