import { __extends } from "tslib";
import { DisassociateCustomerGatewayRequest, DisassociateCustomerGatewayResponse } from "../models/models_0";
import { deserializeAws_restJson1DisassociateCustomerGatewayCommand, serializeAws_restJson1DisassociateCustomerGatewayCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a customer gateway from a device and a link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DisassociateCustomerGatewayCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DisassociateCustomerGatewayCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DisassociateCustomerGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateCustomerGatewayCommandInput} for command's `input` shape.
 * @see {@link DisassociateCustomerGatewayCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateCustomerGatewayCommand = /** @class */ (function (_super) {
    __extends(DisassociateCustomerGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateCustomerGatewayCommand(input) {
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
    DisassociateCustomerGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "DisassociateCustomerGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateCustomerGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateCustomerGatewayResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateCustomerGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateCustomerGatewayCommand(input, context);
    };
    DisassociateCustomerGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateCustomerGatewayCommand(output, context);
    };
    return DisassociateCustomerGatewayCommand;
}($Command));
export { DisassociateCustomerGatewayCommand };
//# sourceMappingURL=DisassociateCustomerGatewayCommand.js.map