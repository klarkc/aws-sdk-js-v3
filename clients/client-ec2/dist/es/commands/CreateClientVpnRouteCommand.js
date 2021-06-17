import { __extends } from "tslib";
import { CreateClientVpnRouteRequest, CreateClientVpnRouteResult } from "../models/models_0";
import { deserializeAws_ec2CreateClientVpnRouteCommand, serializeAws_ec2CreateClientVpnRouteCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a route to a network to a Client VPN endpoint. Each Client VPN endpoint has a route table that describes the
 * 			available destination network routes. Each route in the route table specifies the path for traﬃc to speciﬁc resources or networks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateClientVpnRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateClientVpnRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateClientVpnRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClientVpnRouteCommandInput} for command's `input` shape.
 * @see {@link CreateClientVpnRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateClientVpnRouteCommand = /** @class */ (function (_super) {
    __extends(CreateClientVpnRouteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateClientVpnRouteCommand(input) {
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
    CreateClientVpnRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateClientVpnRouteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateClientVpnRouteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateClientVpnRouteResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateClientVpnRouteCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateClientVpnRouteCommand(input, context);
    };
    CreateClientVpnRouteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateClientVpnRouteCommand(output, context);
    };
    return CreateClientVpnRouteCommand;
}($Command));
export { CreateClientVpnRouteCommand };
//# sourceMappingURL=CreateClientVpnRouteCommand.js.map