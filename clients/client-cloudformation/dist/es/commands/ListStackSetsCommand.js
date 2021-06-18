import { __extends } from "tslib";
import { ListStackSetsInput, ListStackSetsOutput } from "../models/models_0";
import {
  deserializeAws_queryListStackSetsCommand,
  serializeAws_queryListStackSetsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns summary information about stack sets that are associated with the
 *          user.</p>
 *          <ul>
 *             <li>
 *                <p>[Self-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to your AWS account, <code>ListStackSets</code> returns all self-managed stack sets in your AWS account.</p>
 *             </li>
 *             <li>
 *                <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>SELF</code> while signed in to the organization's management account, <code>ListStackSets</code> returns all stack sets in the management account.</p>
 *             </li>
 *             <li>
 *                <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to <code>DELEGATED_ADMIN</code> while signed in to your member account, <code>ListStackSets</code> returns all stack sets with service-managed permissions in the management account.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackSetsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackSetsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ListStackSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStackSetsCommandInput} for command's `input` shape.
 * @see {@link ListStackSetsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStackSetsCommand = /** @class */ (function (_super) {
  __extends(ListStackSetsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListStackSetsCommand(input) {
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
  ListStackSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "ListStackSetsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListStackSetsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListStackSetsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListStackSetsCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryListStackSetsCommand(input, context);
  };
  ListStackSetsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryListStackSetsCommand(output, context);
  };
  return ListStackSetsCommand;
})($Command);
export { ListStackSetsCommand };
//# sourceMappingURL=ListStackSetsCommand.js.map
