import { __extends } from "tslib";
import { CreateClientVpnEndpointRequest, CreateClientVpnEndpointResult } from "../models/models_0";
import { deserializeAws_ec2CreateClientVpnEndpointCommand, serializeAws_ec2CreateClientVpnEndpointCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Client VPN endpoint. A Client VPN endpoint is the resource you create and configure to
 * 			enable and manage client VPN sessions. It is the destination endpoint at which all client VPN sessions
 * 			are terminated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateClientVpnEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateClientVpnEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateClientVpnEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClientVpnEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateClientVpnEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateClientVpnEndpointCommand = /** @class */ (function (_super) {
    __extends(CreateClientVpnEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateClientVpnEndpointCommand(input) {
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
    CreateClientVpnEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateClientVpnEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateClientVpnEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateClientVpnEndpointResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateClientVpnEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateClientVpnEndpointCommand(input, context);
    };
    CreateClientVpnEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateClientVpnEndpointCommand(output, context);
    };
    return CreateClientVpnEndpointCommand;
}($Command));
export { CreateClientVpnEndpointCommand };
//# sourceMappingURL=CreateClientVpnEndpointCommand.js.map