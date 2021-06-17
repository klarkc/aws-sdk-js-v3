import { __extends } from "tslib";
import { UpdateGlobalNetworkRequest, UpdateGlobalNetworkResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateGlobalNetworkCommand, serializeAws_restJson1UpdateGlobalNetworkCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing global network. To remove information for any of the parameters,
 *             specify an empty string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateGlobalNetworkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateGlobalNetworkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new UpdateGlobalNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGlobalNetworkCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalNetworkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGlobalNetworkCommand = /** @class */ (function (_super) {
    __extends(UpdateGlobalNetworkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateGlobalNetworkCommand(input) {
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
    UpdateGlobalNetworkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "UpdateGlobalNetworkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateGlobalNetworkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateGlobalNetworkResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateGlobalNetworkCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateGlobalNetworkCommand(input, context);
    };
    UpdateGlobalNetworkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateGlobalNetworkCommand(output, context);
    };
    return UpdateGlobalNetworkCommand;
}($Command));
export { UpdateGlobalNetworkCommand };
//# sourceMappingURL=UpdateGlobalNetworkCommand.js.map