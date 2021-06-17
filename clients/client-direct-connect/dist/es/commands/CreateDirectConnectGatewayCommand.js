import { __extends } from "tslib";
import { CreateDirectConnectGatewayRequest, CreateDirectConnectGatewayResult } from "../models/models_0";
import { deserializeAws_json1_1CreateDirectConnectGatewayCommand, serializeAws_json1_1CreateDirectConnectGatewayCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set
 *       of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any
 *       AWS Region after it is created. The virtual interfaces and virtual private gateways that
 *       are connected through a Direct Connect gateway can be in different AWS Regions. This enables you to
 *       connect to a VPC in any Region, regardless of the Region in which the virtual interfaces
 *       are located, and pass traffic between them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateDirectConnectGatewayCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateDirectConnectGatewayCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreateDirectConnectGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDirectConnectGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateDirectConnectGatewayCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDirectConnectGatewayCommand = /** @class */ (function (_super) {
    __extends(CreateDirectConnectGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDirectConnectGatewayCommand(input) {
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
    CreateDirectConnectGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "CreateDirectConnectGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDirectConnectGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDirectConnectGatewayResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDirectConnectGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDirectConnectGatewayCommand(input, context);
    };
    CreateDirectConnectGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDirectConnectGatewayCommand(output, context);
    };
    return CreateDirectConnectGatewayCommand;
}($Command));
export { CreateDirectConnectGatewayCommand };
//# sourceMappingURL=CreateDirectConnectGatewayCommand.js.map