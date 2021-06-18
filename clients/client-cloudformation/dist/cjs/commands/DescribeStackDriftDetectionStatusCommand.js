"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeStackDriftDetectionStatusCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class DescribeStackDriftDetectionStatusCommand extends smithy_client_1.Command {
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
    const commandName = "DescribeStackDriftDetectionStatusCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DescribeStackDriftDetectionStatusInput.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DescribeStackDriftDetectionStatusOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryDescribeStackDriftDetectionStatusCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryDescribeStackDriftDetectionStatusCommand(output, context);
  }
}
exports.DescribeStackDriftDetectionStatusCommand = DescribeStackDriftDetectionStatusCommand;
//# sourceMappingURL=DescribeStackDriftDetectionStatusCommand.js.map
