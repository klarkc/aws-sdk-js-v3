import { __extends } from "tslib";
import { UpdateDirectConnectGatewayAssociationRequest, UpdateDirectConnectGatewayAssociationResult, } from "../models/models_0";
import { deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand, serializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified attributes of the Direct Connect gateway association.</p>
 *          <p>Add or remove prefixes from the association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, UpdateDirectConnectGatewayAssociationCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, UpdateDirectConnectGatewayAssociationCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new UpdateDirectConnectGatewayAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDirectConnectGatewayAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateDirectConnectGatewayAssociationCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDirectConnectGatewayAssociationCommand = /** @class */ (function (_super) {
    __extends(UpdateDirectConnectGatewayAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDirectConnectGatewayAssociationCommand(input) {
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
    UpdateDirectConnectGatewayAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "UpdateDirectConnectGatewayAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDirectConnectGatewayAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDirectConnectGatewayAssociationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDirectConnectGatewayAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand(input, context);
    };
    UpdateDirectConnectGatewayAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDirectConnectGatewayAssociationCommand(output, context);
    };
    return UpdateDirectConnectGatewayAssociationCommand;
}($Command));
export { UpdateDirectConnectGatewayAssociationCommand };
//# sourceMappingURL=UpdateDirectConnectGatewayAssociationCommand.js.map