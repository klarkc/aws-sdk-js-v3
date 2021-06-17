import { __extends } from "tslib";
import { DescribeDhcpOptionsRequest, DescribeDhcpOptionsResult } from "../models/models_2";
import { deserializeAws_ec2DescribeDhcpOptionsCommand, serializeAws_ec2DescribeDhcpOptionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your DHCP options sets.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP Options Sets</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeDhcpOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeDhcpOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeDhcpOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDhcpOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDhcpOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDhcpOptionsCommand = /** @class */ (function (_super) {
    __extends(DescribeDhcpOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDhcpOptionsCommand(input) {
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
    DescribeDhcpOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeDhcpOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDhcpOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDhcpOptionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDhcpOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeDhcpOptionsCommand(input, context);
    };
    DescribeDhcpOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeDhcpOptionsCommand(output, context);
    };
    return DescribeDhcpOptionsCommand;
}($Command));
export { DescribeDhcpOptionsCommand };
//# sourceMappingURL=DescribeDhcpOptionsCommand.js.map