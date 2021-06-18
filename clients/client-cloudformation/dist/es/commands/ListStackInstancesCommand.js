import { __extends } from "tslib";
import { ListStackInstancesInput, ListStackInstancesOutput } from "../models/models_0";
import {
  deserializeAws_queryListStackInstancesCommand,
  serializeAws_queryListStackInstancesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns summary information about stack instances that are associated with the
 *          specified stack set. You can filter for stack instances that are associated with a specific
 *          AWS account name or Region, or that have a specific status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackInstancesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackInstancesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListStackInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStackInstancesCommandInput} for command's `input` shape.
 * @see {@link ListStackInstancesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStackInstancesCommand = /** @class */ (function (_super) {
  __extends(ListStackInstancesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListStackInstancesCommand(input) {
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
  ListStackInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "ListStackInstancesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListStackInstancesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListStackInstancesOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListStackInstancesCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryListStackInstancesCommand(input, context);
  };
  ListStackInstancesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryListStackInstancesCommand(output, context);
  };
  return ListStackInstancesCommand;
})($Command);
export { ListStackInstancesCommand };
//# sourceMappingURL=ListStackInstancesCommand.js.map
