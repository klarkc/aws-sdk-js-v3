import { __extends } from "tslib";
import { DeprovisionByoipCidrRequest, DeprovisionByoipCidrResult } from "../models/models_2";
import { deserializeAws_ec2DeprovisionByoipCidrCommand, serializeAws_ec2DeprovisionByoipCidrCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Releases the specified address range that you provisioned for use with your AWS resources
 *          through bring your own IP addresses (BYOIP) and deletes the corresponding address pool.</p>
 *          <p>Before you can release an address range, you must stop advertising it using <a>WithdrawByoipCidr</a> and you must not have any IP addresses allocated from its
 *          address range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeprovisionByoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeprovisionByoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeprovisionByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeprovisionByoipCidrCommandInput} for command's `input` shape.
 * @see {@link DeprovisionByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeprovisionByoipCidrCommand = /** @class */ (function (_super) {
    __extends(DeprovisionByoipCidrCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeprovisionByoipCidrCommand(input) {
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
    DeprovisionByoipCidrCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeprovisionByoipCidrCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeprovisionByoipCidrRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeprovisionByoipCidrResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeprovisionByoipCidrCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeprovisionByoipCidrCommand(input, context);
    };
    DeprovisionByoipCidrCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeprovisionByoipCidrCommand(output, context);
    };
    return DeprovisionByoipCidrCommand;
}($Command));
export { DeprovisionByoipCidrCommand };
//# sourceMappingURL=DeprovisionByoipCidrCommand.js.map