import { __extends } from "tslib";
import { DeleteClusterRequest, DeleteClusterResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteClusterCommand, serializeAws_json1_1DeleteClusterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified cluster. The cluster will transition to the
 * 				<code>INACTIVE</code> state. Clusters with an <code>INACTIVE</code> status may
 * 			remain discoverable in your account for a period of time. However, this behavior is
 * 			subject to change in the future, so you should not rely on <code>INACTIVE</code>
 * 			clusters persisting.</p>
 * 		       <p>You must deregister all container instances from this cluster before you may delete
 * 			it. You can list the container instances in a cluster with <a>ListContainerInstances</a> and deregister them with <a>DeregisterContainerInstance</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteClusterCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteClusterCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeleteClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteClusterCommand = /** @class */ (function (_super) {
    __extends(DeleteClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteClusterCommand(input) {
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
    DeleteClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "DeleteClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteClusterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteClusterCommand(input, context);
    };
    DeleteClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteClusterCommand(output, context);
    };
    return DeleteClusterCommand;
}($Command));
export { DeleteClusterCommand };
//# sourceMappingURL=DeleteClusterCommand.js.map