import { __extends } from "tslib";
import { DeregisterContainerInstanceRequest, DeregisterContainerInstanceResponse } from "../models/models_0";
import { deserializeAws_json1_1DeregisterContainerInstanceCommand, serializeAws_json1_1DeregisterContainerInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deregisters an Amazon ECS container instance from the specified cluster. This instance is
 * 			no longer available to run tasks.</p>
 * 		       <p>If you intend to use the container instance for some other purpose after
 * 			deregistration, you should stop all of the tasks running on the container instance
 * 			before deregistration. That prevents any orphaned tasks from consuming resources.</p>
 * 		       <p>Deregistering a container instance removes the instance from a cluster, but it does
 * 			not terminate the EC2 instance. If you are finished using the instance, be sure to
 * 			terminate it in the Amazon EC2 console to stop billing.</p>
 * 		       <note>
 * 			         <p>If you terminate a running container instance, Amazon ECS automatically deregisters the
 * 				instance from your cluster (stopped container instances or instances with
 * 				disconnected agents are not automatically deregistered when terminated).</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeregisterContainerInstanceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeregisterContainerInstanceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeregisterContainerInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterContainerInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterContainerInstanceCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterContainerInstanceCommand = /** @class */ (function (_super) {
    __extends(DeregisterContainerInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterContainerInstanceCommand(input) {
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
    DeregisterContainerInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "DeregisterContainerInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterContainerInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterContainerInstanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterContainerInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeregisterContainerInstanceCommand(input, context);
    };
    DeregisterContainerInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeregisterContainerInstanceCommand(output, context);
    };
    return DeregisterContainerInstanceCommand;
}($Command));
export { DeregisterContainerInstanceCommand };
//# sourceMappingURL=DeregisterContainerInstanceCommand.js.map