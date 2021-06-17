"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteServiceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a specified service within a cluster. You can delete a service if you have no
 * 			running tasks in it and the desired task count is zero. If the service is actively
 * 			maintaining tasks, you cannot delete it, and you must update the service to a desired
 * 			task count of zero. For more information, see <a>UpdateService</a>.</p>
 * 		       <note>
 * 			         <p>When you delete a service, if there are still running tasks that require cleanup,
 * 				the service status moves from <code>ACTIVE</code> to <code>DRAINING</code>, and the
 * 				service is no longer visible in the console or in the <a>ListServices</a>
 * 				API operation. After all tasks have transitioned to either <code>STOPPING</code> or
 * 					<code>STOPPED</code> status, the service status moves from <code>DRAINING</code>
 * 				to <code>INACTIVE</code>. Services in the <code>DRAINING</code> or
 * 					<code>INACTIVE</code> status can still be viewed with the <a>DescribeServices</a> API operation. However, in the future,
 * 					<code>INACTIVE</code> services may be cleaned up and purged from Amazon ECS record
 * 				keeping, and <a>DescribeServices</a> calls on those services return a
 * 					<code>ServiceNotFoundException</code> error.</p>
 * 		       </note>
 * 		       <important>
 * 			         <p>If you attempt to create a new service with the same name as an existing service
 * 				in either <code>ACTIVE</code> or <code>DRAINING</code> status, you receive an
 * 				error.</p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteServiceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteServiceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeleteServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServiceCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteServiceCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteServiceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteServiceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteServiceResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteServiceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteServiceCommand(output, context);
    }
}
exports.DeleteServiceCommand = DeleteServiceCommand;
//# sourceMappingURL=DeleteServiceCommand.js.map