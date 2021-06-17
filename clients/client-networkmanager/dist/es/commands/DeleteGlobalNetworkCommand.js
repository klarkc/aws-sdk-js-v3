import { __extends } from "tslib";
import { DeleteGlobalNetworkRequest, DeleteGlobalNetworkResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteGlobalNetworkCommand, serializeAws_restJson1DeleteGlobalNetworkCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing global network. You must first delete all global network objects
 *             (devices, links, and sites) and deregister all transit gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteGlobalNetworkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteGlobalNetworkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DeleteGlobalNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGlobalNetworkCommandInput} for command's `input` shape.
 * @see {@link DeleteGlobalNetworkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteGlobalNetworkCommand = /** @class */ (function (_super) {
    __extends(DeleteGlobalNetworkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteGlobalNetworkCommand(input) {
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
    DeleteGlobalNetworkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "DeleteGlobalNetworkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteGlobalNetworkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteGlobalNetworkResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteGlobalNetworkCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteGlobalNetworkCommand(input, context);
    };
    DeleteGlobalNetworkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteGlobalNetworkCommand(output, context);
    };
    return DeleteGlobalNetworkCommand;
}($Command));
export { DeleteGlobalNetworkCommand };
//# sourceMappingURL=DeleteGlobalNetworkCommand.js.map