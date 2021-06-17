import { __extends } from "tslib";
import { DeleteDirectConnectGatewayAssociationRequest, DeleteDirectConnectGatewayAssociationResult, } from "../models/models_0";
import { deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand, serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p>
 *          <p>We recommend that you specify the <code>associationID</code> to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the <code>virtualGatewayId</code> and <code>directConnectGatewayId</code> to delete an association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteDirectConnectGatewayAssociationCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteDirectConnectGatewayAssociationCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DeleteDirectConnectGatewayAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDirectConnectGatewayAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectConnectGatewayAssociationCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDirectConnectGatewayAssociationCommand = /** @class */ (function (_super) {
    __extends(DeleteDirectConnectGatewayAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDirectConnectGatewayAssociationCommand(input) {
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
    DeleteDirectConnectGatewayAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DeleteDirectConnectGatewayAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDirectConnectGatewayAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDirectConnectGatewayAssociationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDirectConnectGatewayAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand(input, context);
    };
    DeleteDirectConnectGatewayAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand(output, context);
    };
    return DeleteDirectConnectGatewayAssociationCommand;
}($Command));
export { DeleteDirectConnectGatewayAssociationCommand };
//# sourceMappingURL=DeleteDirectConnectGatewayAssociationCommand.js.map