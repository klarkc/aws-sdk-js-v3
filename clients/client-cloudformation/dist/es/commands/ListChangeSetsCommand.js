import { __extends } from "tslib";
import { ListChangeSetsInput, ListChangeSetsOutput } from "../models/models_0";
import {
  deserializeAws_queryListChangeSetsCommand,
  serializeAws_queryListChangeSetsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the ID and status of each active change set for a stack. For example, AWS
 *          CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or
 *             <code>CREATE_PENDING</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListChangeSetsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListChangeSetsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListChangeSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChangeSetsCommandInput} for command's `input` shape.
 * @see {@link ListChangeSetsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListChangeSetsCommand = /** @class */ (function (_super) {
  __extends(ListChangeSetsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListChangeSetsCommand(input) {
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
  ListChangeSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "ListChangeSetsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListChangeSetsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListChangeSetsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListChangeSetsCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryListChangeSetsCommand(input, context);
  };
  ListChangeSetsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryListChangeSetsCommand(output, context);
  };
  return ListChangeSetsCommand;
})($Command);
export { ListChangeSetsCommand };
//# sourceMappingURL=ListChangeSetsCommand.js.map
