"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeStackResourcesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns AWS resource descriptions for running and deleted stacks. If
 *             <code>StackName</code> is specified, all the associated resources that are part of the
 *          stack are returned. If <code>PhysicalResourceId</code> is specified, the associated
 *          resources of the stack that the resource belongs to are returned.</p>
 *          <note>
 *             <p>Only the first 100 resources will be returned. If your stack has more resources
 *             than this, you should use <code>ListStackResources</code> instead.</p>
 *          </note>
 *          <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information
 *          for up to 90 days after the stack has been deleted.</p>
 *          <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>,
 *          but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the
 *          returned result. For more information about resources, the <code>LogicalResourceId</code>
 *          and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">AWS CloudFormation User
 *          Guide</a>.</p>
 *          <note>
 *             <p>A <code>ValidationError</code> is returned if you specify both
 *                <code>StackName</code> and <code>PhysicalResourceId</code> in the same
 *             request.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackResourcesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackResourcesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackResourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeStackResourcesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeStackResourcesCommand extends smithy_client_1.Command {
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
    const commandName = "DescribeStackResourcesCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DescribeStackResourcesInput.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DescribeStackResourcesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryDescribeStackResourcesCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryDescribeStackResourcesCommand(output, context);
  }
}
exports.DescribeStackResourcesCommand = DescribeStackResourcesCommand;
//# sourceMappingURL=DescribeStackResourcesCommand.js.map
