import { __extends } from "tslib";
import { RegisterTransitGatewayRequest, RegisterTransitGatewayResponse } from "../models/models_0";
import { deserializeAws_restJson1RegisterTransitGatewayCommand, serializeAws_restJson1RegisterTransitGatewayCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers a transit gateway in your global network. The transit gateway can be in any
 *             AWS Region, but it must be owned by the same AWS account that owns the global network.
 *             You cannot register a transit gateway in more than one global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, RegisterTransitGatewayCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, RegisterTransitGatewayCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new RegisterTransitGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link RegisterTransitGatewayCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterTransitGatewayCommand = /** @class */ (function (_super) {
    __extends(RegisterTransitGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterTransitGatewayCommand(input) {
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
    RegisterTransitGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "RegisterTransitGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterTransitGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterTransitGatewayResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterTransitGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RegisterTransitGatewayCommand(input, context);
    };
    RegisterTransitGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RegisterTransitGatewayCommand(output, context);
    };
    return RegisterTransitGatewayCommand;
}($Command));
export { RegisterTransitGatewayCommand };
//# sourceMappingURL=RegisterTransitGatewayCommand.js.map