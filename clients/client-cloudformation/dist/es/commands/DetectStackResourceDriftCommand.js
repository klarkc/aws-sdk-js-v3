import { __extends } from "tslib";
import { DetectStackResourceDriftInput, DetectStackResourceDriftOutput } from "../models/models_0";
import {
  deserializeAws_queryDetectStackResourceDriftCommand,
  serializeAws_queryDetectStackResourceDriftCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about whether a resource's actual configuration differs, or has
 *             <i>drifted</i>, from it's expected configuration, as defined in the stack
 *          template and any values specified as template parameters. This information includes actual
 *          and expected property values for resources in which AWS CloudFormation detects drift. Only resource
 *          properties explicitly defined in the stack template are checked for drift. For more
 *          information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
 *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
 *          <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or
 *             <a>DetectStackDrift</a> to detect drift on all resources in a given stack
 *          that support drift detection.</p>
 *          <p>Resources that do not currently support drift detection cannot be checked. For a list
 *          of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DetectStackResourceDriftCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DetectStackResourceDriftCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DetectStackResourceDriftCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectStackResourceDriftCommandInput} for command's `input` shape.
 * @see {@link DetectStackResourceDriftCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetectStackResourceDriftCommand = /** @class */ (function (_super) {
  __extends(DetectStackResourceDriftCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DetectStackResourceDriftCommand(input) {
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
  DetectStackResourceDriftCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "DetectStackResourceDriftCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DetectStackResourceDriftInput.filterSensitiveLog,
      outputFilterSensitiveLog: DetectStackResourceDriftOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DetectStackResourceDriftCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDetectStackResourceDriftCommand(input, context);
  };
  DetectStackResourceDriftCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDetectStackResourceDriftCommand(output, context);
  };
  return DetectStackResourceDriftCommand;
})($Command);
export { DetectStackResourceDriftCommand };
//# sourceMappingURL=DetectStackResourceDriftCommand.js.map
