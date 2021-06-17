import { __extends } from "tslib";
import { DescribeByoipCidrsRequest, DescribeByoipCidrsResult } from "../models/models_2";
import { deserializeAws_ec2DescribeByoipCidrsCommand, serializeAws_ec2DescribeByoipCidrsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the IP address ranges that were specified in calls to <a>ProvisionByoipCidr</a>.</p>
 *          <p>To describe the address pools that were created when you provisioned the address
 *           ranges, use <a>DescribePublicIpv4Pools</a> or <a>DescribeIpv6Pools</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeByoipCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeByoipCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeByoipCidrsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeByoipCidrsCommandInput} for command's `input` shape.
 * @see {@link DescribeByoipCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeByoipCidrsCommand = /** @class */ (function (_super) {
    __extends(DescribeByoipCidrsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeByoipCidrsCommand(input) {
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
    DescribeByoipCidrsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeByoipCidrsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeByoipCidrsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeByoipCidrsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeByoipCidrsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeByoipCidrsCommand(input, context);
    };
    DescribeByoipCidrsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeByoipCidrsCommand(output, context);
    };
    return DescribeByoipCidrsCommand;
}($Command));
export { DescribeByoipCidrsCommand };
//# sourceMappingURL=DescribeByoipCidrsCommand.js.map