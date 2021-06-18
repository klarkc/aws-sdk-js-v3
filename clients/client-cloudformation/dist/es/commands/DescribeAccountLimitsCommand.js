import { __extends } from "tslib";
import { DescribeAccountLimitsInput, DescribeAccountLimitsOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeAccountLimitsCommand,
  serializeAws_queryDescribeAccountLimitsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves your account's AWS CloudFormation limits, such as the maximum number of
 *          stacks that you can create in your account. For more information about account limits, see
 *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">AWS CloudFormation
 *             Limits</a> in the <i>AWS CloudFormation User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeAccountLimitsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeAccountLimitsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeAccountLimitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountLimitsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAccountLimitsCommand = /** @class */ (function (_super) {
  __extends(DescribeAccountLimitsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeAccountLimitsCommand(input) {
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
  DescribeAccountLimitsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DescribeAccountLimitsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeAccountLimitsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountLimitsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeAccountLimitsCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeAccountLimitsCommand(input, context);
  };
  DescribeAccountLimitsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeAccountLimitsCommand(output, context);
  };
  return DescribeAccountLimitsCommand;
})($Command);
export { DescribeAccountLimitsCommand };
//# sourceMappingURL=DescribeAccountLimitsCommand.js.map
