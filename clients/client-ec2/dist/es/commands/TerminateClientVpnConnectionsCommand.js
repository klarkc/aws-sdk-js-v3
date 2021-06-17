import { __extends } from "tslib";
import { TerminateClientVpnConnectionsRequest, TerminateClientVpnConnectionsResult } from "../models/models_5";
import { deserializeAws_ec2TerminateClientVpnConnectionsCommand, serializeAws_ec2TerminateClientVpnConnectionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Terminates active Client VPN endpoint connections. This action can be used to terminate a specific client connection, or up to five connections established by a specific user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, TerminateClientVpnConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, TerminateClientVpnConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new TerminateClientVpnConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateClientVpnConnectionsCommandInput} for command's `input` shape.
 * @see {@link TerminateClientVpnConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TerminateClientVpnConnectionsCommand = /** @class */ (function (_super) {
    __extends(TerminateClientVpnConnectionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TerminateClientVpnConnectionsCommand(input) {
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
    TerminateClientVpnConnectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "TerminateClientVpnConnectionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TerminateClientVpnConnectionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TerminateClientVpnConnectionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TerminateClientVpnConnectionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2TerminateClientVpnConnectionsCommand(input, context);
    };
    TerminateClientVpnConnectionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2TerminateClientVpnConnectionsCommand(output, context);
    };
    return TerminateClientVpnConnectionsCommand;
}($Command));
export { TerminateClientVpnConnectionsCommand };
//# sourceMappingURL=TerminateClientVpnConnectionsCommand.js.map