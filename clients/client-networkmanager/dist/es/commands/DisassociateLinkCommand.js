import { __extends } from "tslib";
import { DisassociateLinkRequest, DisassociateLinkResponse } from "../models/models_0";
import { deserializeAws_restJson1DisassociateLinkCommand, serializeAws_restJson1DisassociateLinkCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates an existing device from a link. You must first disassociate any customer
 *             gateways that are associated with the link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DisassociateLinkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DisassociateLinkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DisassociateLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateLinkCommandInput} for command's `input` shape.
 * @see {@link DisassociateLinkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateLinkCommand = /** @class */ (function (_super) {
    __extends(DisassociateLinkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateLinkCommand(input) {
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
    DisassociateLinkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "DisassociateLinkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateLinkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateLinkResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateLinkCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateLinkCommand(input, context);
    };
    DisassociateLinkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateLinkCommand(output, context);
    };
    return DisassociateLinkCommand;
}($Command));
export { DisassociateLinkCommand };
//# sourceMappingURL=DisassociateLinkCommand.js.map