import { __extends } from "tslib";
import { DeleteEndpointRequest, DeleteEndpointResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteEndpointCommand, serializeAws_restJson1DeleteEndpointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an endpoint from an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteEndpointCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteEndpointCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEndpointCommand = /** @class */ (function (_super) {
    __extends(DeleteEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEndpointCommand(input) {
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
    DeleteEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteEndpointCommand(input, context);
    };
    DeleteEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteEndpointCommand(output, context);
    };
    return DeleteEndpointCommand;
}($Command));
export { DeleteEndpointCommand };
//# sourceMappingURL=DeleteEndpointCommand.js.map