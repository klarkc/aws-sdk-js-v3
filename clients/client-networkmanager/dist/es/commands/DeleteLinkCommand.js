import { __extends } from "tslib";
import { DeleteLinkRequest, DeleteLinkResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteLinkCommand, serializeAws_restJson1DeleteLinkCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing link. You must first disassociate the link from any devices and
 *             customer gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteLinkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteLinkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DeleteLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLinkCommandInput} for command's `input` shape.
 * @see {@link DeleteLinkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLinkCommand = /** @class */ (function (_super) {
    __extends(DeleteLinkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLinkCommand(input) {
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
    DeleteLinkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "DeleteLinkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLinkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLinkResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLinkCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteLinkCommand(input, context);
    };
    DeleteLinkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteLinkCommand(output, context);
    };
    return DeleteLinkCommand;
}($Command));
export { DeleteLinkCommand };
//# sourceMappingURL=DeleteLinkCommand.js.map