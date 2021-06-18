import { __extends } from "tslib";
import { ExecuteChangeSetInput, ExecuteChangeSetOutput } from "../models/models_0";
import {
  deserializeAws_queryExecuteChangeSetCommand,
  serializeAws_queryExecuteChangeSetCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a stack using the input information that was provided when the specified
 *          change set was created. After the call successfully completes, AWS CloudFormation starts
 *          updating the stack. Use the <a>DescribeStacks</a> action to view the status of
 *          the update.</p>
 *          <p>When you execute a change set, AWS CloudFormation deletes all other change sets
 *          associated with the stack because they aren't valid for the updated stack.</p>
 *          <p>If a stack policy is associated with the stack, AWS CloudFormation enforces the
 *          policy during the update. You can't specify a temporary stack policy that overrides the
 *          current policy.</p>
 *          <p>To create a change set for the entire stack hierachy, <code>IncludeNestedStacks</code>
 *          must have been set to <code>True</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ExecuteChangeSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ExecuteChangeSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new ExecuteChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteChangeSetCommandInput} for command's `input` shape.
 * @see {@link ExecuteChangeSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExecuteChangeSetCommand = /** @class */ (function (_super) {
  __extends(ExecuteChangeSetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ExecuteChangeSetCommand(input) {
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
  ExecuteChangeSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "ExecuteChangeSetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ExecuteChangeSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: ExecuteChangeSetOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ExecuteChangeSetCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryExecuteChangeSetCommand(input, context);
  };
  ExecuteChangeSetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryExecuteChangeSetCommand(output, context);
  };
  return ExecuteChangeSetCommand;
})($Command);
export { ExecuteChangeSetCommand };
//# sourceMappingURL=ExecuteChangeSetCommand.js.map
