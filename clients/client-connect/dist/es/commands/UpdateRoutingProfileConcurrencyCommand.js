import { __extends } from "tslib";
import { UpdateRoutingProfileConcurrencyRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommand, serializeAws_restJson1UpdateRoutingProfileConcurrencyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the channels that agents can handle in the Contact Control Panel (CCP) for a routing
 *    profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRoutingProfileConcurrencyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRoutingProfileConcurrencyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateRoutingProfileConcurrencyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoutingProfileConcurrencyCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingProfileConcurrencyCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRoutingProfileConcurrencyCommand = /** @class */ (function (_super) {
    __extends(UpdateRoutingProfileConcurrencyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRoutingProfileConcurrencyCommand(input) {
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
    UpdateRoutingProfileConcurrencyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateRoutingProfileConcurrencyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRoutingProfileConcurrencyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRoutingProfileConcurrencyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateRoutingProfileConcurrencyCommand(input, context);
    };
    UpdateRoutingProfileConcurrencyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommand(output, context);
    };
    return UpdateRoutingProfileConcurrencyCommand;
}($Command));
export { UpdateRoutingProfileConcurrencyCommand };
//# sourceMappingURL=UpdateRoutingProfileConcurrencyCommand.js.map