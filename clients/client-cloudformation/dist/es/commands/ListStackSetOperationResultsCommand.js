import { __extends } from "tslib";
import { ListStackSetOperationResultsInput, ListStackSetOperationResultsOutput } from "../models/models_0";
import {
  deserializeAws_queryListStackSetOperationResultsCommand,
  serializeAws_queryListStackSetOperationResultsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns summary information about the results of a stack set operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackSetOperationResultsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackSetOperationResultsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListStackSetOperationResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStackSetOperationResultsCommandInput} for command's `input` shape.
 * @see {@link ListStackSetOperationResultsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStackSetOperationResultsCommand = /** @class */ (function (_super) {
  __extends(ListStackSetOperationResultsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListStackSetOperationResultsCommand(input) {
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
  ListStackSetOperationResultsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "ListStackSetOperationResultsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListStackSetOperationResultsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListStackSetOperationResultsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListStackSetOperationResultsCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryListStackSetOperationResultsCommand(input, context);
  };
  ListStackSetOperationResultsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryListStackSetOperationResultsCommand(output, context);
  };
  return ListStackSetOperationResultsCommand;
})($Command);
export { ListStackSetOperationResultsCommand };
//# sourceMappingURL=ListStackSetOperationResultsCommand.js.map
