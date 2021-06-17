import { __extends } from "tslib";
import { DeleteUserEndpointsRequest, DeleteUserEndpointsResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteUserEndpointsCommand, serializeAws_restJson1DeleteUserEndpointsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes all the endpoints that are associated with a specific user ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteUserEndpointsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteUserEndpointsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteUserEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserEndpointsCommandInput} for command's `input` shape.
 * @see {@link DeleteUserEndpointsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUserEndpointsCommand = /** @class */ (function (_super) {
    __extends(DeleteUserEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteUserEndpointsCommand(input) {
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
    DeleteUserEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteUserEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteUserEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteUserEndpointsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteUserEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteUserEndpointsCommand(input, context);
    };
    DeleteUserEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteUserEndpointsCommand(output, context);
    };
    return DeleteUserEndpointsCommand;
}($Command));
export { DeleteUserEndpointsCommand };
//# sourceMappingURL=DeleteUserEndpointsCommand.js.map