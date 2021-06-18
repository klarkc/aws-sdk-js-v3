import { __extends } from "tslib";
import { DescribeStackDriftDetectionStatusInput, DescribeStackDriftDetectionStatusOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeStackDriftDetectionStatusCommand,
  serializeAws_queryDescribeStackDriftDetectionStatusCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a stack drift detection operation. A stack drift detection
 *          operation detects whether a stack's actual configuration differs, or has
 *             <i>drifted</i>, from it's expected configuration, as defined in the stack
 *          template and any values specified as template parameters. A stack is considered to have
 *          drifted if one or more of its resources have drifted. For more information on stack and
 *          resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
 *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
 *          <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation.
 *             <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use
 *          to monitor the progress of the operation using
 *             <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has
 *          completed, use <a>DescribeStackResourceDrifts</a> to return drift information
 *          about the stack and its resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackDriftDetectionStatusCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackDriftDetectionStatusCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackDriftDetectionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackDriftDetectionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeStackDriftDetectionStatusCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStackDriftDetectionStatusCommand = /** @class */ (function (_super) {
  __extends(DescribeStackDriftDetectionStatusCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeStackDriftDetectionStatusCommand(input) {
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
  DescribeStackDriftDetectionStatusCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DescribeStackDriftDetectionStatusCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeStackDriftDetectionStatusInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStackDriftDetectionStatusOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeStackDriftDetectionStatusCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeStackDriftDetectionStatusCommand(input, context);
  };
  DescribeStackDriftDetectionStatusCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeStackDriftDetectionStatusCommand(output, context);
  };
  return DescribeStackDriftDetectionStatusCommand;
})($Command);
export { DescribeStackDriftDetectionStatusCommand };
//# sourceMappingURL=DescribeStackDriftDetectionStatusCommand.js.map
