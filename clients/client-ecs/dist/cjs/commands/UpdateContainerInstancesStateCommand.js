"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContainerInstancesStateCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the status of an Amazon ECS container instance.</p>
 * 		       <p>Once a container instance has reached an <code>ACTIVE</code> state, you can change the
 * 			status of a container instance to <code>DRAINING</code> to manually remove an instance
 * 			from a cluster, for example to perform system updates, update the Docker daemon, or
 * 			scale down the cluster size.</p>
 * 		       <important>
 * 			         <p>A container instance cannot be changed to <code>DRAINING</code> until it has
 * 				reached an <code>ACTIVE</code> status. If the instance is in any other status, an
 * 				error will be received.</p>
 * 		       </important>
 * 		       <p>When you set a container instance to <code>DRAINING</code>, Amazon ECS prevents new tasks
 * 			from being scheduled for placement on the container instance and replacement service
 * 			tasks are started on other container instances in the cluster if the resources are
 * 			available. Service tasks on the container instance that are in the <code>PENDING</code>
 * 			state are stopped immediately.</p>
 * 		       <p>Service tasks on the container instance that are in the <code>RUNNING</code> state are
 * 			stopped and replaced according to the service's deployment configuration parameters,
 * 				<code>minimumHealthyPercent</code> and <code>maximumPercent</code>. You can change
 * 			the deployment configuration of your service using <a>UpdateService</a>.</p>
 * 		       <ul>
 *             <li>
 * 				           <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore
 * 						<code>desiredCount</code> temporarily during task replacement. For example,
 * 						<code>desiredCount</code> is four tasks, a minimum of 50% allows the
 * 					scheduler to stop two existing tasks before starting two new tasks. If the
 * 					minimum is 100%, the service scheduler can't remove existing tasks until the
 * 					replacement tasks are considered healthy. Tasks for services that do not use a
 * 					load balancer are considered healthy if they are in the <code>RUNNING</code>
 * 					state. Tasks for services that use a load balancer are considered healthy if
 * 					they are in the <code>RUNNING</code> state and the container instance they are
 * 					hosted on is reported as healthy by the load balancer.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The <code>maximumPercent</code> parameter represents an upper limit on the
 * 					number of running tasks during task replacement, which enables you to define the
 * 					replacement batch size. For example, if <code>desiredCount</code> is four tasks,
 * 					a maximum of 200% starts four new tasks before stopping the four tasks to be
 * 					drained, provided that the cluster resources required to do this are available.
 * 					If the maximum is 100%, then replacement tasks can't start until the draining
 * 					tasks have stopped.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>Any <code>PENDING</code> or <code>RUNNING</code> tasks that do not belong to a service
 * 			are not affected. You must wait for them to finish or stop them manually.</p>
 * 		       <p>A container instance has completed draining when it has no more <code>RUNNING</code>
 * 			tasks. You can verify this using <a>ListTasks</a>.</p>
 * 		       <p>When a container instance has been drained, you can set a container instance to
 * 				<code>ACTIVE</code> status and once it has reached that status the Amazon ECS scheduler
 * 			can begin scheduling tasks on the instance again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateContainerInstancesStateCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateContainerInstancesStateCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new UpdateContainerInstancesStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContainerInstancesStateCommandInput} for command's `input` shape.
 * @see {@link UpdateContainerInstancesStateCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateContainerInstancesStateCommand extends smithy_client_1.Command {
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
        const clientName = "ECSClient";
        const commandName = "UpdateContainerInstancesStateCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateContainerInstancesStateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateContainerInstancesStateResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateContainerInstancesStateCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateContainerInstancesStateCommand(output, context);
    }
}
exports.UpdateContainerInstancesStateCommand = UpdateContainerInstancesStateCommand;
//# sourceMappingURL=UpdateContainerInstancesStateCommand.js.map