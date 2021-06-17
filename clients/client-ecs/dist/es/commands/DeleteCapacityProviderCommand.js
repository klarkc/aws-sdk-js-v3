import { __extends } from "tslib";
import { DeleteCapacityProviderRequest, DeleteCapacityProviderResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteCapacityProviderCommand, serializeAws_json1_1DeleteCapacityProviderCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified capacity provider.</p>
 * 		       <note>
 * 			         <p>The <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers are
 * 				reserved and cannot be deleted. You can disassociate them from a cluster using
 * 				either the <a>PutClusterCapacityProviders</a> API or by deleting the
 * 				cluster.</p>
 * 		       </note>
 * 		       <p>Prior to a capacity provider being deleted, the capacity provider must be removed from
 * 			the capacity provider strategy from all services. The <a>UpdateService</a>
 * 			API can be used to remove a capacity provider from a service's capacity provider
 * 			strategy. When updating a service, the <code>forceNewDeployment</code> option can be
 * 			used to ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity
 * 			provider are transitioned to use the capacity from the remaining capacity providers.
 * 			Only capacity providers that are not associated with a cluster can be deleted. To remove
 * 			a capacity provider from a cluster, you can either use <a>PutClusterCapacityProviders</a> or delete the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteCapacityProviderCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteCapacityProviderCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeleteCapacityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteCapacityProviderCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCapacityProviderCommand = /** @class */ (function (_super) {
    __extends(DeleteCapacityProviderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCapacityProviderCommand(input) {
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
    DeleteCapacityProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "DeleteCapacityProviderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCapacityProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCapacityProviderResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCapacityProviderCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteCapacityProviderCommand(input, context);
    };
    DeleteCapacityProviderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteCapacityProviderCommand(output, context);
    };
    return DeleteCapacityProviderCommand;
}($Command));
export { DeleteCapacityProviderCommand };
//# sourceMappingURL=DeleteCapacityProviderCommand.js.map