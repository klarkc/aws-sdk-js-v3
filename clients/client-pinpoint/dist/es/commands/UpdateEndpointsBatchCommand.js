import { __extends } from "tslib";
import { UpdateEndpointsBatchRequest, UpdateEndpointsBatchResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateEndpointsBatchCommand, serializeAws_restJson1UpdateEndpointsBatchCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateEndpointsBatchCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateEndpointsBatchCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateEndpointsBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEndpointsBatchCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointsBatchCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateEndpointsBatchCommand = /** @class */ (function (_super) {
    __extends(UpdateEndpointsBatchCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateEndpointsBatchCommand(input) {
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
    UpdateEndpointsBatchCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateEndpointsBatchCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateEndpointsBatchRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateEndpointsBatchResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateEndpointsBatchCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateEndpointsBatchCommand(input, context);
    };
    UpdateEndpointsBatchCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateEndpointsBatchCommand(output, context);
    };
    return UpdateEndpointsBatchCommand;
}($Command));
export { UpdateEndpointsBatchCommand };
//# sourceMappingURL=UpdateEndpointsBatchCommand.js.map