import { __extends } from "tslib";
import { DisassociateAddressRequest } from "../models/models_4";
import { deserializeAws_ec2DisassociateAddressCommand, serializeAws_ec2DisassociateAddressCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates an Elastic IP address from the instance or network interface it's associated with.</p>
 * 			      <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP
 * 				Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateAddressCommandInput} for command's `input` shape.
 * @see {@link DisassociateAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateAddressCommand = /** @class */ (function (_super) {
    __extends(DisassociateAddressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateAddressCommand(input) {
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
    DisassociateAddressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DisassociateAddressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateAddressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateAddressCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DisassociateAddressCommand(input, context);
    };
    DisassociateAddressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DisassociateAddressCommand(output, context);
    };
    return DisassociateAddressCommand;
}($Command));
export { DisassociateAddressCommand };
//# sourceMappingURL=DisassociateAddressCommand.js.map