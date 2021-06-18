import { __extends } from "tslib";
import { DescribeStackResourceDriftsInput, DescribeStackResourceDriftsOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeStackResourceDriftsCommand,
  serializeAws_queryDescribeStackResourceDriftsCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns drift information for the resources that have been checked for drift in the
 *          specified stack. This includes actual and expected configuration values for resources where
 *          AWS CloudFormation detects configuration drift.</p>
 *          <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack
 *          resource that has been checked for drift. Resources that have not yet been checked for
 *          drift are not included. Resources that do not currently support drift detection are not
 *          checked, and so not included. For a list of resources that support drift detection, see
 *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
 *          <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual
 *          resources, or <a>DetectStackDrift</a> to detect drift on all supported resources
 *          for a given stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackResourceDriftsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackResourceDriftsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackResourceDriftsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackResourceDriftsCommandInput} for command's `input` shape.
 * @see {@link DescribeStackResourceDriftsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStackResourceDriftsCommand = /** @class */ (function (_super) {
  __extends(DescribeStackResourceDriftsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeStackResourceDriftsCommand(input) {
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
  DescribeStackResourceDriftsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DescribeStackResourceDriftsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeStackResourceDriftsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeStackResourceDriftsOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeStackResourceDriftsCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDescribeStackResourceDriftsCommand(input, context);
  };
  DescribeStackResourceDriftsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDescribeStackResourceDriftsCommand(output, context);
  };
  return DescribeStackResourceDriftsCommand;
})($Command);
export { DescribeStackResourceDriftsCommand };
//# sourceMappingURL=DescribeStackResourceDriftsCommand.js.map
