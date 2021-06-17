import { __extends } from "tslib";
import { UpdateLinkRequest, UpdateLinkResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateLinkCommand, serializeAws_restJson1UpdateLinkCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the details for an existing link. To remove information for any of the
 *             parameters, specify an empty string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateLinkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateLinkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new UpdateLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLinkCommandInput} for command's `input` shape.
 * @see {@link UpdateLinkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLinkCommand = /** @class */ (function (_super) {
    __extends(UpdateLinkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLinkCommand(input) {
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
    UpdateLinkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "UpdateLinkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLinkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLinkResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLinkCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateLinkCommand(input, context);
    };
    UpdateLinkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateLinkCommand(output, context);
    };
    return UpdateLinkCommand;
}($Command));
export { UpdateLinkCommand };
//# sourceMappingURL=UpdateLinkCommand.js.map