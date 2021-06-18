import { __extends } from "tslib";
import { DescribeChangeSetInput, DescribeChangeSetOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeChangeSetCommand,
  serializeAws_queryDescribeChangeSetCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the inputs for the change set and a list of changes that AWS CloudFormation
 *          will make if you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change Sets</a> in the AWS CloudFormation User
 *          Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeChangeSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeChangeSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeChangeSetCommandInput} for command's `input` shape.
 * @see {@link DescribeChangeSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeChangeSetCommand = /** @class */ (function (_super) {
  __extends(DescribeChangeSetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeChangeSetCommand(input) {
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
  DescribeChangeSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DescribeChangeSetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeChangeSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeChangeSetOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeChangeSetCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeChangeSetCommand(input, context);
  };
  DescribeChangeSetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeChangeSetCommand(output, context);
  };
  return DescribeChangeSetCommand;
})($Command);
export { DescribeChangeSetCommand };
//# sourceMappingURL=DescribeChangeSetCommand.js.map
