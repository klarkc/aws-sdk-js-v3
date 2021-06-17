import { __extends } from "tslib";
import { UpdateConnectionRequest, UpdateConnectionResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateConnectionCommand, serializeAws_restJson1UpdateConnectionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the information for an existing connection. To remove information for any of the parameters,
 *             specify an empty string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateConnectionCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateConnectionCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new UpdateConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConnectionCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectionCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateConnectionCommand = /** @class */ (function (_super) {
    __extends(UpdateConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateConnectionCommand(input) {
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
    UpdateConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "UpdateConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateConnectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateConnectionCommand(input, context);
    };
    UpdateConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateConnectionCommand(output, context);
    };
    return UpdateConnectionCommand;
}($Command));
export { UpdateConnectionCommand };
//# sourceMappingURL=UpdateConnectionCommand.js.map