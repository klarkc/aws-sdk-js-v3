import { __extends } from "tslib";
import { ListStackSetOperationsInput, ListStackSetOperationsOutput } from "../models/models_0";
import {
  deserializeAws_queryListStackSetOperationsCommand,
  serializeAws_queryListStackSetOperationsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns summary information about operations performed on a stack set. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackSetOperationsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackSetOperationsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListStackSetOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStackSetOperationsCommandInput} for command's `input` shape.
 * @see {@link ListStackSetOperationsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStackSetOperationsCommand = /** @class */ (function (_super) {
  __extends(ListStackSetOperationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListStackSetOperationsCommand(input) {
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
  ListStackSetOperationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "ListStackSetOperationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListStackSetOperationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListStackSetOperationsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListStackSetOperationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryListStackSetOperationsCommand(input, context);
  };
  ListStackSetOperationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryListStackSetOperationsCommand(output, context);
  };
  return ListStackSetOperationsCommand;
})($Command);
export { ListStackSetOperationsCommand };
//# sourceMappingURL=ListStackSetOperationsCommand.js.map
