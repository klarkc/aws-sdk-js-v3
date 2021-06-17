import { __extends } from "tslib";
import { DeleteCustomRoutingEndpointGroupRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand, serializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete an endpoint group from a listener for a custom routing accelerator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeleteCustomRoutingEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeleteCustomRoutingEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DeleteCustomRoutingEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomRoutingEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomRoutingEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCustomRoutingEndpointGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteCustomRoutingEndpointGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCustomRoutingEndpointGroupCommand(input) {
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
    DeleteCustomRoutingEndpointGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "DeleteCustomRoutingEndpointGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCustomRoutingEndpointGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCustomRoutingEndpointGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand(input, context);
    };
    DeleteCustomRoutingEndpointGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand(output, context);
    };
    return DeleteCustomRoutingEndpointGroupCommand;
}($Command));
export { DeleteCustomRoutingEndpointGroupCommand };
//# sourceMappingURL=DeleteCustomRoutingEndpointGroupCommand.js.map