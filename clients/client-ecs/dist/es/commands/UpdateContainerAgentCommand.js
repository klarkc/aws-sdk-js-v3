import { __extends } from "tslib";
import { UpdateContainerAgentRequest, UpdateContainerAgentResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateContainerAgentCommand, serializeAws_json1_1UpdateContainerAgentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var UpdateContainerAgentCommand = /** @class */ (function (_super) {
    __extends(UpdateContainerAgentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateContainerAgentCommand(input) {
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
    UpdateContainerAgentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "UpdateContainerAgentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateContainerAgentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateContainerAgentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateContainerAgentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateContainerAgentCommand(input, context);
    };
    UpdateContainerAgentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateContainerAgentCommand(output, context);
    };
    return UpdateContainerAgentCommand;
}($Command));
export { UpdateContainerAgentCommand };
//# sourceMappingURL=UpdateContainerAgentCommand.js.map