import { __extends } from "tslib";
import { DisassociateClientVpnTargetNetworkRequest, DisassociateClientVpnTargetNetworkResult, } from "../models/models_4";
import { deserializeAws_ec2DisassociateClientVpnTargetNetworkCommand, serializeAws_ec2DisassociateClientVpnTargetNetworkCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a target network from the specified Client VPN endpoint. When you disassociate the
 * 			last target network from a Client VPN, the following happens:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The route that was automatically added for the VPC is deleted</p>
 * 			         </li>
 *             <li>
 * 				           <p>All active client connections are terminated</p>
 * 			         </li>
 *             <li>
 * 				           <p>New client connections are disallowed</p>
 * 			         </li>
 *             <li>
 * 				           <p>The Client VPN endpoint's status changes to <code>pending-associate</code>
 *                </p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateClientVpnTargetNetworkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateClientVpnTargetNetworkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateClientVpnTargetNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateClientVpnTargetNetworkCommandInput} for command's `input` shape.
 * @see {@link DisassociateClientVpnTargetNetworkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateClientVpnTargetNetworkCommand = /** @class */ (function (_super) {
    __extends(DisassociateClientVpnTargetNetworkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateClientVpnTargetNetworkCommand(input) {
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
    DisassociateClientVpnTargetNetworkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DisassociateClientVpnTargetNetworkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateClientVpnTargetNetworkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateClientVpnTargetNetworkResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateClientVpnTargetNetworkCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DisassociateClientVpnTargetNetworkCommand(input, context);
    };
    DisassociateClientVpnTargetNetworkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DisassociateClientVpnTargetNetworkCommand(output, context);
    };
    return DisassociateClientVpnTargetNetworkCommand;
}($Command));
export { DisassociateClientVpnTargetNetworkCommand };
//# sourceMappingURL=DisassociateClientVpnTargetNetworkCommand.js.map