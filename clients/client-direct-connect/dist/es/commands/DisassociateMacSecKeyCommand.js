import { __extends } from "tslib";
import { DisassociateMacSecKeyRequest, DisassociateMacSecKeyResponse } from "../models/models_0";
import { deserializeAws_json1_1DisassociateMacSecKeyCommand, serializeAws_json1_1DisassociateMacSecKeyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the association between a MAC Security (MACsec) security key and an AWS Direct Connect dedicated connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DisassociateMacSecKeyCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DisassociateMacSecKeyCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DisassociateMacSecKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMacSecKeyCommandInput} for command's `input` shape.
 * @see {@link DisassociateMacSecKeyCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateMacSecKeyCommand = /** @class */ (function (_super) {
    __extends(DisassociateMacSecKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateMacSecKeyCommand(input) {
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
    DisassociateMacSecKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DisassociateMacSecKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateMacSecKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateMacSecKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateMacSecKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateMacSecKeyCommand(input, context);
    };
    DisassociateMacSecKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateMacSecKeyCommand(output, context);
    };
    return DisassociateMacSecKeyCommand;
}($Command));
export { DisassociateMacSecKeyCommand };
//# sourceMappingURL=DisassociateMacSecKeyCommand.js.map