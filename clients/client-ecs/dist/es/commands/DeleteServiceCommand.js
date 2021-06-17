import { __extends } from "tslib";
import { DeleteServiceRequest, DeleteServiceResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteServiceCommand, serializeAws_json1_1DeleteServiceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DeleteServiceCommand = /** @class */ (function (_super) {
    __extends(DeleteServiceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteServiceCommand(input) {
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
    DeleteServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "DeleteServiceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteServiceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteServiceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteServiceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteServiceCommand(input, context);
    };
    DeleteServiceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteServiceCommand(output, context);
    };
    return DeleteServiceCommand;
}($Command));
export { DeleteServiceCommand };
//# sourceMappingURL=DeleteServiceCommand.js.map