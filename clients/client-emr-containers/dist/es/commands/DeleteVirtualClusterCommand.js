import { __extends } from "tslib";
import { DeleteVirtualClusterRequest, DeleteVirtualClusterResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteVirtualClusterCommand, serializeAws_restJson1DeleteVirtualClusterCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DeleteVirtualClusterCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DeleteVirtualClusterCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new DeleteVirtualClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVirtualClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteVirtualClusterCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVirtualClusterCommand = /** @class */ (function (_super) {
    __extends(DeleteVirtualClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVirtualClusterCommand(input) {
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
    DeleteVirtualClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRContainersClient";
        var commandName = "DeleteVirtualClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVirtualClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteVirtualClusterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVirtualClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteVirtualClusterCommand(input, context);
    };
    DeleteVirtualClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteVirtualClusterCommand(output, context);
    };
    return DeleteVirtualClusterCommand;
}($Command));
export { DeleteVirtualClusterCommand };
//# sourceMappingURL=DeleteVirtualClusterCommand.js.map