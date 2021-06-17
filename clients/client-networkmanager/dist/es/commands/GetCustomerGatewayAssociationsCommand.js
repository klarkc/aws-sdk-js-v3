import { __extends } from "tslib";
import { GetCustomerGatewayAssociationsRequest, GetCustomerGatewayAssociationsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCustomerGatewayAssociationsCommand, serializeAws_restJson1GetCustomerGatewayAssociationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the association information for customer gateways that are associated with
 *             devices and links in your global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetCustomerGatewayAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetCustomerGatewayAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetCustomerGatewayAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCustomerGatewayAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetCustomerGatewayAssociationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCustomerGatewayAssociationsCommand = /** @class */ (function (_super) {
    __extends(GetCustomerGatewayAssociationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCustomerGatewayAssociationsCommand(input) {
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
    GetCustomerGatewayAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "GetCustomerGatewayAssociationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCustomerGatewayAssociationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCustomerGatewayAssociationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCustomerGatewayAssociationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCustomerGatewayAssociationsCommand(input, context);
    };
    GetCustomerGatewayAssociationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCustomerGatewayAssociationsCommand(output, context);
    };
    return GetCustomerGatewayAssociationsCommand;
}($Command));
export { GetCustomerGatewayAssociationsCommand };
//# sourceMappingURL=GetCustomerGatewayAssociationsCommand.js.map