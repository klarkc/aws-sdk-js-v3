import { __extends } from "tslib";
import { ListStackResourcesInput, ListStackResourcesOutput } from "../models/models_0";
import {
  deserializeAws_queryListStackResourcesCommand,
  serializeAws_queryListStackResourcesCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns descriptions of all resources of the specified stack.</p>
 *          <p>For deleted stacks, ListStackResources returns resource information for up to 90 days
 *          after the stack has been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackResourcesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackResourcesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListStackResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStackResourcesCommandInput} for command's `input` shape.
 * @see {@link ListStackResourcesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStackResourcesCommand = /** @class */ (function (_super) {
  __extends(ListStackResourcesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListStackResourcesCommand(input) {
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
  ListStackResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "ListStackResourcesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListStackResourcesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListStackResourcesOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListStackResourcesCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryListStackResourcesCommand(input, context);
  };
  ListStackResourcesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryListStackResourcesCommand(output, context);
  };
  return ListStackResourcesCommand;
})($Command);
export { ListStackResourcesCommand };
//# sourceMappingURL=ListStackResourcesCommand.js.map
