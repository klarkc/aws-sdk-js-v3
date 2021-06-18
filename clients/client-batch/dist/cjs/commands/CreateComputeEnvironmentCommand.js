"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComputeEnvironmentCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an AWS Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute
 *    environments. <code>MANAGED</code> compute environments can use Amazon EC2 or AWS Fargate resources.
 *     <code>UNMANAGED</code> compute environments can only use EC2 resources.</p>
 *          <p>In a managed compute environment, AWS Batch manages the capacity and instance types of the compute resources
 *    within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you
 *    specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot
 *    Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can
 *    optionally set a maximum price so that Spot Instances only launch
 *    when
 *    the Spot Instance price is less than a specified percentage of the On-Demand price.</p>
 *
 *          <note>
 *             <p>Multi-node parallel jobs aren't supported on Spot Instances.</p>
 *          </note>
 *          <p>In an unmanaged compute environment, you can manage your own EC2 compute resources and have a lot of flexibility
 *    with how you configure your compute resources. For example, you can use custom AMIs. However, you must verify that
 *    each of your AMIs meet the Amazon ECS container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">container instance AMIs</a> in the
 *     <i>Amazon Elastic Container Service Developer Guide</i>. After you created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that's associated with it. Then, launch
 *    your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS container instance</a> in the
 *     <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <note>
 *             <p>AWS Batch doesn't upgrade the AMIs in a compute environment after the environment is created. For example, it
 *     doesn't update the AMIs when a newer version of the Amazon ECS optimized AMI is available. Therefore, you're responsible
 *     for managing the guest operating system (including its updates and security patches) and any additional application
 *     software or utilities that you install on the compute resources. To use a new AMI for your AWS Batch jobs, complete
 *     these steps:</p>
 *             <ol>
 *                <li>
 *                   <p>Create a new compute environment with the new AMI.</p>
 *                </li>
 *                <li>
 *                   <p>Add the compute environment to an existing job queue.</p>
 *                </li>
 *                <li>
 *                   <p>Remove the earlier compute environment from your job queue.</p>
 *                </li>
 *                <li>
 *                   <p>Delete the earlier compute environment.</p>
 *                </li>
 *             </ol>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, CreateComputeEnvironmentCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, CreateComputeEnvironmentCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new CreateComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateComputeEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateComputeEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateComputeEnvironmentCommand extends smithy_client_1.Command {
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
    const clientName = "BatchClient";
    const commandName = "CreateComputeEnvironmentCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.CreateComputeEnvironmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.CreateComputeEnvironmentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1CreateComputeEnvironmentCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1CreateComputeEnvironmentCommand(output, context);
  }
}
exports.CreateComputeEnvironmentCommand = CreateComputeEnvironmentCommand;
//# sourceMappingURL=CreateComputeEnvironmentCommand.js.map
