import { __extends } from "tslib";
import { DescribeIpv6PoolsRequest, DescribeIpv6PoolsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeIpv6PoolsCommand, serializeAws_ec2DescribeIpv6PoolsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes your IPv6 address pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpv6PoolsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpv6PoolsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeIpv6PoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIpv6PoolsCommandInput} for command's `input` shape.
 * @see {@link DescribeIpv6PoolsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeIpv6PoolsCommand = /** @class */ (function (_super) {
    __extends(DescribeIpv6PoolsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeIpv6PoolsCommand(input) {
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
    DescribeIpv6PoolsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeIpv6PoolsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeIpv6PoolsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeIpv6PoolsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeIpv6PoolsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeIpv6PoolsCommand(input, context);
    };
    DescribeIpv6PoolsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeIpv6PoolsCommand(output, context);
    };
    return DescribeIpv6PoolsCommand;
}($Command));
export { DescribeIpv6PoolsCommand };
//# sourceMappingURL=DescribeIpv6PoolsCommand.js.map