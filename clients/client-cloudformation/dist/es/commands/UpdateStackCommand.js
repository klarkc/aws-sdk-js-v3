import { __extends } from "tslib";
import { UpdateStackInput, UpdateStackOutput } from "../models/models_0";
import { deserializeAws_queryUpdateStackCommand, serializeAws_queryUpdateStackCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a stack as specified in the template. After the call completes successfully,
 *          the stack update starts. You can check the status of the stack via the <a>DescribeStacks</a> action.</p>
 *          <p>To get a copy of the template for an existing stack, you can use the <a>GetTemplate</a> action.</p>
 *          <p>For more information about creating an update template, updating a stack, and
 *          monitoring the progress of the update, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html">Updating a
 *             Stack</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, UpdateStackCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, UpdateStackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new UpdateStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStackCommandInput} for command's `input` shape.
 * @see {@link UpdateStackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateStackCommand = /** @class */ (function (_super) {
  __extends(UpdateStackCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateStackCommand(input) {
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
  UpdateStackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "UpdateStackCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateStackInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateStackOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateStackCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryUpdateStackCommand(input, context);
  };
  UpdateStackCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryUpdateStackCommand(output, context);
  };
  return UpdateStackCommand;
})($Command);
export { UpdateStackCommand };
//# sourceMappingURL=UpdateStackCommand.js.map
