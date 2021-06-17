import { __extends } from "tslib";
import { DescribeSecurityGroupsRequest, DescribeSecurityGroupsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeSecurityGroupsCommand, serializeAws_ec2DescribeSecurityGroupsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified security groups or all of your security groups.</p>
 *          <p>A security group is for use with instances either in the EC2-Classic platform
 * 				or in a specific VPC. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 Security Groups</a> in
 * 				the <i>Amazon Elastic Compute Cloud User Guide</i> and
 * 				<a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Security Groups for Your VPC</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSecurityGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSecurityGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSecurityGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeSecurityGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSecurityGroupsCommand(input) {
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
    DescribeSecurityGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeSecurityGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSecurityGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSecurityGroupsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSecurityGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeSecurityGroupsCommand(input, context);
    };
    DescribeSecurityGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeSecurityGroupsCommand(output, context);
    };
    return DescribeSecurityGroupsCommand;
}($Command));
export { DescribeSecurityGroupsCommand };
//# sourceMappingURL=DescribeSecurityGroupsCommand.js.map