import { __extends } from "tslib";
import { AuthorizeClientVpnIngressRequest, AuthorizeClientVpnIngressResult } from "../models/models_0";
import { deserializeAws_ec2AuthorizeClientVpnIngressCommand, serializeAws_ec2AuthorizeClientVpnIngressCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds an ingress authorization rule to a Client VPN endpoint. Ingress authorization rules act as
 * 			firewall rules that grant access to networks. You must configure ingress authorization rules to
 * 			enable clients to access resources in AWS or on-premises networks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AuthorizeClientVpnIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AuthorizeClientVpnIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AuthorizeClientVpnIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeClientVpnIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeClientVpnIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AuthorizeClientVpnIngressCommand = /** @class */ (function (_super) {
    __extends(AuthorizeClientVpnIngressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AuthorizeClientVpnIngressCommand(input) {
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
    AuthorizeClientVpnIngressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AuthorizeClientVpnIngressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AuthorizeClientVpnIngressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AuthorizeClientVpnIngressResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AuthorizeClientVpnIngressCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AuthorizeClientVpnIngressCommand(input, context);
    };
    AuthorizeClientVpnIngressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AuthorizeClientVpnIngressCommand(output, context);
    };
    return AuthorizeClientVpnIngressCommand;
}($Command));
export { AuthorizeClientVpnIngressCommand };
//# sourceMappingURL=AuthorizeClientVpnIngressCommand.js.map