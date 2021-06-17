import { __extends } from "tslib";
import { WithdrawByoipCidrRequest, WithdrawByoipCidrResult } from "../models/models_5";
import { deserializeAws_ec2WithdrawByoipCidrCommand, serializeAws_ec2WithdrawByoipCidrCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops advertising an address range that is provisioned as an address pool.</p>
 *          <p>You can perform this operation at most once every 10 seconds, even if you specify different
 *          address ranges each time.</p>
 *          <p>It can take a few minutes before traffic to the specified addresses stops routing to AWS
 *           because of BGP propagation delays.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, WithdrawByoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, WithdrawByoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new WithdrawByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link WithdrawByoipCidrCommandInput} for command's `input` shape.
 * @see {@link WithdrawByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var WithdrawByoipCidrCommand = /** @class */ (function (_super) {
    __extends(WithdrawByoipCidrCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function WithdrawByoipCidrCommand(input) {
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
    WithdrawByoipCidrCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "WithdrawByoipCidrCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: WithdrawByoipCidrRequest.filterSensitiveLog,
            outputFilterSensitiveLog: WithdrawByoipCidrResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    WithdrawByoipCidrCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2WithdrawByoipCidrCommand(input, context);
    };
    WithdrawByoipCidrCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2WithdrawByoipCidrCommand(output, context);
    };
    return WithdrawByoipCidrCommand;
}($Command));
export { WithdrawByoipCidrCommand };
//# sourceMappingURL=WithdrawByoipCidrCommand.js.map