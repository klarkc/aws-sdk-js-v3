import { __extends } from "tslib";
import { UpdateEndpointRequest, UpdateEndpointResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateEndpointCommand, serializeAws_restJson1UpdateEndpointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes for an endpoint. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateEndpointCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateEndpointCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateEndpointCommand = /** @class */ (function (_super) {
    __extends(UpdateEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateEndpointCommand(input) {
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
    UpdateEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateEndpointCommand(input, context);
    };
    UpdateEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateEndpointCommand(output, context);
    };
    return UpdateEndpointCommand;
}($Command));
export { UpdateEndpointCommand };
//# sourceMappingURL=UpdateEndpointCommand.js.map