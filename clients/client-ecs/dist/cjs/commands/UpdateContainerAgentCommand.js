"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContainerAgentCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the Amazon ECS container agent on a specified container instance. Updating the
 * 			Amazon ECS container agent does not interrupt running tasks or services on the container
 * 			instance. The process for updating the agent differs depending on whether your container
 * 			instance was launched with the Amazon ECS-optimized AMI or another operating system.</p>
 * 		       <note>
 * 			         <p>The <code>UpdateContainerAgent</code> API isn't supported for container instances
 * 				using the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI. To update the container agent,
 * 				you can update the <code>ecs-init</code> package which will update the agent. For
 * 				more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/agent-update-ecs-ami.html">Updating the
 * 					Amazon ECS container agent</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       </note>
 * 		       <p>The <code>UpdateContainerAgent</code> API requires an Amazon ECS-optimized AMI or Amazon
 * 			Linux AMI with the <code>ecs-init</code> service installed and running. For help
 * 			updating the Amazon ECS container agent on other operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent">Manually updating the Amazon ECS container agent</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateContainerAgentCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateContainerAgentCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new UpdateContainerAgentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContainerAgentCommandInput} for command's `input` shape.
 * @see {@link UpdateContainerAgentCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateContainerAgentCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateContainerAgentCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateContainerAgentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateContainerAgentResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateContainerAgentCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateContainerAgentCommand(output, context);
    }
}
exports.UpdateContainerAgentCommand = UpdateContainerAgentCommand;
//# sourceMappingURL=UpdateContainerAgentCommand.js.map