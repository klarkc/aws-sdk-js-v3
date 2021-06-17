import { __extends } from "tslib";
import { DeleteDirectConnectGatewayRequest, DeleteDirectConnectGatewayResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteDirectConnectGatewayCommand, serializeAws_json1_1DeleteDirectConnectGatewayCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are
 *       attached to the Direct Connect gateway and disassociate all virtual private gateways associated
 *       with the Direct Connect gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteDirectConnectGatewayCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteDirectConnectGatewayCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DeleteDirectConnectGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDirectConnectGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectConnectGatewayCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDirectConnectGatewayCommand = /** @class */ (function (_super) {
    __extends(DeleteDirectConnectGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDirectConnectGatewayCommand(input) {
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
    DeleteDirectConnectGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DeleteDirectConnectGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDirectConnectGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDirectConnectGatewayResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDirectConnectGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDirectConnectGatewayCommand(input, context);
    };
    DeleteDirectConnectGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDirectConnectGatewayCommand(output, context);
    };
    return DeleteDirectConnectGatewayCommand;
}($Command));
export { DeleteDirectConnectGatewayCommand };
//# sourceMappingURL=DeleteDirectConnectGatewayCommand.js.map