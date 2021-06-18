"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetectStackSetDriftCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Detect drift on a stack set. When CloudFormation performs drift detection on a stack
 *          set, it performs drift detection on the stack associated with each stack instance in the
 *          stack set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">How CloudFormation
 *             Performs Drift Detection on a Stack Set</a>.</p>
 *          <p>
 *             <code>DetectStackSetDrift</code> returns the <code>OperationId</code> of the stack set
 *          drift detection operation. Use this operation id with <code>
 *                <a>DescribeStackSetOperation</a>
 *             </code> to monitor the progress of the drift
 *          detection operation. The drift detection operation may take some time, depending on the
 *          number of stack instances included in the stack set, as well as the number of resources
 *          included in each stack.</p>
 *          <p>Once the operation has completed, use the following actions to return drift
 *          information:</p>
 *          <ul>
 *             <li>
 *                <p>Use <code>
 *                      <a>DescribeStackSet</a>
 *                   </code> to return detailed information
 *                about the stack set, including detailed information about the last
 *                <i>completed</i> drift operation performed on the stack set.
 *                (Information about drift operations that are in progress is not included.)</p>
 *             </li>
 *             <li>
 *                <p>Use <code>
 *                      <a>ListStackInstances</a>
 *                   </code> to return a list of stack
 *                instances belonging to the stack set, including the drift status and last drift time
 *                checked of each instance.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>
 *                      <a>DescribeStackInstance</a>
 *                   </code> to return detailed
 *                information about a specific stack instance, including its drift status and last
 *                drift time checked.</p>
 *             </li>
 *          </ul>
 *          <p>For more information on performing a drift detection operation on a stack set, see
 *          <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged
 *             Changes in Stack Sets</a>. </p>
 *          <p>You can only run a single drift detection operation on a given stack set at one time. </p>
 *          <p>To stop a drift detection stack set operation, use <code>
 *                <a>StopStackSetOperation</a>
 *             </code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DetectStackSetDriftCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DetectStackSetDriftCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DetectStackSetDriftCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectStackSetDriftCommandInput} for command's `input` shape.
 * @see {@link DetectStackSetDriftCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DetectStackSetDriftCommand extends smithy_client_1.Command {
  // Start section: command_properties
  // End section: command_properties
  constructor(input) {
    // Start section: command_constructor
    super();
    this.input = input;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DetectStackSetDriftCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DetectStackSetDriftInput.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DetectStackSetDriftOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryDetectStackSetDriftCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryDetectStackSetDriftCommand(output, context);
  }
}
exports.DetectStackSetDriftCommand = DetectStackSetDriftCommand;
//# sourceMappingURL=DetectStackSetDriftCommand.js.map
