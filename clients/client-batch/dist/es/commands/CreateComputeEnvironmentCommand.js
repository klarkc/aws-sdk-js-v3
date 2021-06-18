import { __extends } from "tslib";
import { CreateComputeEnvironmentRequest, CreateComputeEnvironmentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateComputeEnvironmentCommand,
  serializeAws_restJson1CreateComputeEnvironmentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateComputeEnvironmentCommand = /** @class */ (function (_super) {
  __extends(CreateComputeEnvironmentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateComputeEnvironmentCommand(input) {
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
  CreateComputeEnvironmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BatchClient";
    var commandName = "CreateComputeEnvironmentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateComputeEnvironmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateComputeEnvironmentResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateComputeEnvironmentCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateComputeEnvironmentCommand(input, context);
  };
  CreateComputeEnvironmentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateComputeEnvironmentCommand(output, context);
  };
  return CreateComputeEnvironmentCommand;
})($Command);
export { CreateComputeEnvironmentCommand };
//# sourceMappingURL=CreateComputeEnvironmentCommand.js.map
