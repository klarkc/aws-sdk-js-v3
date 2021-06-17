import { __extends } from "tslib";
import { DeleteEndpointGroupRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteEndpointGroupCommand, serializeAws_json1_1DeleteEndpointGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete an endpoint group from a listener.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeleteEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeleteEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DeleteEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEndpointGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteEndpointGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEndpointGroupCommand(input) {
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
    DeleteEndpointGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "DeleteEndpointGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEndpointGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEndpointGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteEndpointGroupCommand(input, context);
    };
    DeleteEndpointGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteEndpointGroupCommand(output, context);
    };
    return DeleteEndpointGroupCommand;
}($Command));
export { DeleteEndpointGroupCommand };
//# sourceMappingURL=DeleteEndpointGroupCommand.js.map