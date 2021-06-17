import { __extends } from "tslib";
import { DescribeClientVpnAuthorizationRulesRequest, DescribeClientVpnAuthorizationRulesResult, } from "../models/models_2";
import { deserializeAws_ec2DescribeClientVpnAuthorizationRulesCommand, serializeAws_ec2DescribeClientVpnAuthorizationRulesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the authorization rules for a specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnAuthorizationRulesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnAuthorizationRulesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeClientVpnAuthorizationRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClientVpnAuthorizationRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnAuthorizationRulesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeClientVpnAuthorizationRulesCommand = /** @class */ (function (_super) {
    __extends(DescribeClientVpnAuthorizationRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeClientVpnAuthorizationRulesCommand(input) {
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
    DescribeClientVpnAuthorizationRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeClientVpnAuthorizationRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeClientVpnAuthorizationRulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeClientVpnAuthorizationRulesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeClientVpnAuthorizationRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeClientVpnAuthorizationRulesCommand(input, context);
    };
    DescribeClientVpnAuthorizationRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeClientVpnAuthorizationRulesCommand(output, context);
    };
    return DescribeClientVpnAuthorizationRulesCommand;
}($Command));
export { DescribeClientVpnAuthorizationRulesCommand };
//# sourceMappingURL=DescribeClientVpnAuthorizationRulesCommand.js.map