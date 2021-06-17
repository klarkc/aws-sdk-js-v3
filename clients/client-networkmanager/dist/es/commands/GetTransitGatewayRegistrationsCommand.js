import { __extends } from "tslib";
import { GetTransitGatewayRegistrationsRequest, GetTransitGatewayRegistrationsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetTransitGatewayRegistrationsCommand, serializeAws_restJson1GetTransitGatewayRegistrationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the transit gateway registrations in a specified
 *             global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetTransitGatewayRegistrationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetTransitGatewayRegistrationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetTransitGatewayRegistrationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayRegistrationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayRegistrationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTransitGatewayRegistrationsCommand = /** @class */ (function (_super) {
    __extends(GetTransitGatewayRegistrationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTransitGatewayRegistrationsCommand(input) {
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
    GetTransitGatewayRegistrationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "GetTransitGatewayRegistrationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTransitGatewayRegistrationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTransitGatewayRegistrationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTransitGatewayRegistrationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetTransitGatewayRegistrationsCommand(input, context);
    };
    GetTransitGatewayRegistrationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetTransitGatewayRegistrationsCommand(output, context);
    };
    return GetTransitGatewayRegistrationsCommand;
}($Command));
export { GetTransitGatewayRegistrationsCommand };
//# sourceMappingURL=GetTransitGatewayRegistrationsCommand.js.map