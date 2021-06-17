import { __extends } from "tslib";
import { ResetInstanceAttributeRequest } from "../models/models_5";
import { deserializeAws_ec2ResetInstanceAttributeCommand, serializeAws_ec2ResetInstanceAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resets an attribute of an instance to its default value. To reset the
 *                 <code>kernel</code> or <code>ramdisk</code>, the instance must be in a stopped
 *             state. To reset the <code>sourceDestCheck</code>, the instance can be either running or
 *             stopped.</p>
 *         <p>The <code>sourceDestCheck</code> attribute controls whether source/destination
 *             checking is enabled. The default value is <code>true</code>, which means checking is
 *             enabled. This value must be <code>false</code> for a NAT instance to perform NAT. For
 *             more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html">NAT Instances</a> in the
 *                 <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetInstanceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetInstanceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ResetInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetInstanceAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetInstanceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResetInstanceAttributeCommand = /** @class */ (function (_super) {
    __extends(ResetInstanceAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResetInstanceAttributeCommand(input) {
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
    ResetInstanceAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ResetInstanceAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetInstanceAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetInstanceAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ResetInstanceAttributeCommand(input, context);
    };
    ResetInstanceAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ResetInstanceAttributeCommand(output, context);
    };
    return ResetInstanceAttributeCommand;
}($Command));
export { ResetInstanceAttributeCommand };
//# sourceMappingURL=ResetInstanceAttributeCommand.js.map