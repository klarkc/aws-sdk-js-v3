import { __extends } from "tslib";
import { ApplySecurityGroupsToClientVpnTargetNetworkRequest, ApplySecurityGroupsToClientVpnTargetNetworkResult, } from "../models/models_0";
import { deserializeAws_ec2ApplySecurityGroupsToClientVpnTargetNetworkCommand, serializeAws_ec2ApplySecurityGroupsToClientVpnTargetNetworkCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Applies a security group to the association between the target network and the Client VPN endpoint. This action replaces the existing
 * 			security groups with the specified security groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ApplySecurityGroupsToClientVpnTargetNetworkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ApplySecurityGroupsToClientVpnTargetNetworkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ApplySecurityGroupsToClientVpnTargetNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApplySecurityGroupsToClientVpnTargetNetworkCommandInput} for command's `input` shape.
 * @see {@link ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ApplySecurityGroupsToClientVpnTargetNetworkCommand = /** @class */ (function (_super) {
    __extends(ApplySecurityGroupsToClientVpnTargetNetworkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ApplySecurityGroupsToClientVpnTargetNetworkCommand(input) {
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
    ApplySecurityGroupsToClientVpnTargetNetworkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ApplySecurityGroupsToClientVpnTargetNetworkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ApplySecurityGroupsToClientVpnTargetNetworkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ApplySecurityGroupsToClientVpnTargetNetworkResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ApplySecurityGroupsToClientVpnTargetNetworkCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ApplySecurityGroupsToClientVpnTargetNetworkCommand(input, context);
    };
    ApplySecurityGroupsToClientVpnTargetNetworkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ApplySecurityGroupsToClientVpnTargetNetworkCommand(output, context);
    };
    return ApplySecurityGroupsToClientVpnTargetNetworkCommand;
}($Command));
export { ApplySecurityGroupsToClientVpnTargetNetworkCommand };
//# sourceMappingURL=ApplySecurityGroupsToClientVpnTargetNetworkCommand.js.map