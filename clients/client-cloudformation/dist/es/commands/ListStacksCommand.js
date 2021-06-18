import { __extends } from "tslib";
import { ListStacksInput, ListStacksOutput } from "../models/models_0";
import { deserializeAws_queryListStacksCommand, serializeAws_queryListStacksCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the summary information for stacks whose status matches the specified
 *          StackStatusFilter. Summary information for stacks that have been deleted is kept for 90
 *          days after the stack is deleted. If no StackStatusFilter is specified, summary information
 *          for all stacks is returned (including existing stacks and stacks that have been
 *          deleted).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStacksCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStacksCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListStacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStacksCommandInput} for command's `input` shape.
 * @see {@link ListStacksCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStacksCommand = /** @class */ (function (_super) {
  __extends(ListStacksCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListStacksCommand(input) {
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
  ListStacksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "ListStacksCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListStacksInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListStacksOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListStacksCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryListStacksCommand(input, context);
  };
  ListStacksCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryListStacksCommand(output, context);
  };
  return ListStacksCommand;
})($Command);
export { ListStacksCommand };
//# sourceMappingURL=ListStacksCommand.js.map
