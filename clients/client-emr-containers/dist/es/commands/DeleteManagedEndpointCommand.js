import { __extends } from "tslib";
import { DeleteManagedEndpointRequest, DeleteManagedEndpointResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteManagedEndpointCommand, serializeAws_restJson1DeleteManagedEndpointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DeleteManagedEndpointCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DeleteManagedEndpointCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new DeleteManagedEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteManagedEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteManagedEndpointCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteManagedEndpointCommand = /** @class */ (function (_super) {
    __extends(DeleteManagedEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteManagedEndpointCommand(input) {
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
    DeleteManagedEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRContainersClient";
        var commandName = "DeleteManagedEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteManagedEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteManagedEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteManagedEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteManagedEndpointCommand(input, context);
    };
    DeleteManagedEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteManagedEndpointCommand(output, context);
    };
    return DeleteManagedEndpointCommand;
}($Command));
export { DeleteManagedEndpointCommand };
//# sourceMappingURL=DeleteManagedEndpointCommand.js.map