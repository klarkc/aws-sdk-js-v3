import { __extends } from "tslib";
import { CreateDirectConnectGatewayAssociationRequest, CreateDirectConnectGatewayAssociationResult, } from "../models/models_0";
import { deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommand, serializeAws_json1_1CreateDirectConnectGatewayAssociationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual
 *       private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateDirectConnectGatewayAssociationCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateDirectConnectGatewayAssociationCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreateDirectConnectGatewayAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDirectConnectGatewayAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateDirectConnectGatewayAssociationCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDirectConnectGatewayAssociationCommand = /** @class */ (function (_super) {
    __extends(CreateDirectConnectGatewayAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDirectConnectGatewayAssociationCommand(input) {
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
    CreateDirectConnectGatewayAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "CreateDirectConnectGatewayAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDirectConnectGatewayAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDirectConnectGatewayAssociationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDirectConnectGatewayAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDirectConnectGatewayAssociationCommand(input, context);
    };
    CreateDirectConnectGatewayAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommand(output, context);
    };
    return CreateDirectConnectGatewayAssociationCommand;
}($Command));
export { CreateDirectConnectGatewayAssociationCommand };
//# sourceMappingURL=CreateDirectConnectGatewayAssociationCommand.js.map