import { __extends } from "tslib";
import { RevokeClientVpnIngressRequest, RevokeClientVpnIngressResult } from "../models/models_5";
import { deserializeAws_ec2RevokeClientVpnIngressCommand, serializeAws_ec2RevokeClientVpnIngressCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes an ingress authorization rule from a Client VPN endpoint. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RevokeClientVpnIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RevokeClientVpnIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RevokeClientVpnIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeClientVpnIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeClientVpnIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RevokeClientVpnIngressCommand = /** @class */ (function (_super) {
    __extends(RevokeClientVpnIngressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RevokeClientVpnIngressCommand(input) {
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
    RevokeClientVpnIngressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "RevokeClientVpnIngressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RevokeClientVpnIngressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RevokeClientVpnIngressResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RevokeClientVpnIngressCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2RevokeClientVpnIngressCommand(input, context);
    };
    RevokeClientVpnIngressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2RevokeClientVpnIngressCommand(output, context);
    };
    return RevokeClientVpnIngressCommand;
}($Command));
export { RevokeClientVpnIngressCommand };
//# sourceMappingURL=RevokeClientVpnIngressCommand.js.map