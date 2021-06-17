import { __extends } from "tslib";
import { DescribePublicIpv4PoolsRequest, DescribePublicIpv4PoolsResult } from "../models/models_3";
import { deserializeAws_ec2DescribePublicIpv4PoolsCommand, serializeAws_ec2DescribePublicIpv4PoolsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified IPv4 address pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePublicIpv4PoolsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePublicIpv4PoolsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribePublicIpv4PoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePublicIpv4PoolsCommandInput} for command's `input` shape.
 * @see {@link DescribePublicIpv4PoolsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePublicIpv4PoolsCommand = /** @class */ (function (_super) {
    __extends(DescribePublicIpv4PoolsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePublicIpv4PoolsCommand(input) {
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
    DescribePublicIpv4PoolsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribePublicIpv4PoolsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePublicIpv4PoolsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePublicIpv4PoolsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePublicIpv4PoolsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribePublicIpv4PoolsCommand(input, context);
    };
    DescribePublicIpv4PoolsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribePublicIpv4PoolsCommand(output, context);
    };
    return DescribePublicIpv4PoolsCommand;
}($Command));
export { DescribePublicIpv4PoolsCommand };
//# sourceMappingURL=DescribePublicIpv4PoolsCommand.js.map