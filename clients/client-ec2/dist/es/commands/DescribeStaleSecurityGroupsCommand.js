import { __extends } from "tslib";
import { DescribeStaleSecurityGroupsRequest, DescribeStaleSecurityGroupsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeStaleSecurityGroupsCommand, serializeAws_ec2DescribeStaleSecurityGroupsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>[VPC only] Describes the stale security group rules for security groups in a specified VPC. Rules are stale when they reference a deleted security group in a peer VPC, or a security group in a peer VPC for which the VPC peering connection has been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeStaleSecurityGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeStaleSecurityGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeStaleSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStaleSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeStaleSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStaleSecurityGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeStaleSecurityGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeStaleSecurityGroupsCommand(input) {
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
    DescribeStaleSecurityGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeStaleSecurityGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeStaleSecurityGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeStaleSecurityGroupsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeStaleSecurityGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeStaleSecurityGroupsCommand(input, context);
    };
    DescribeStaleSecurityGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeStaleSecurityGroupsCommand(output, context);
    };
    return DescribeStaleSecurityGroupsCommand;
}($Command));
export { DescribeStaleSecurityGroupsCommand };
//# sourceMappingURL=DescribeStaleSecurityGroupsCommand.js.map