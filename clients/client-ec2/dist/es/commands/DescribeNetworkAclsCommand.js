import { __extends } from "tslib";
import { DescribeNetworkAclsRequest, DescribeNetworkAclsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeNetworkAclsCommand, serializeAws_ec2DescribeNetworkAclsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your network ACLs.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkAclsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkAclsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeNetworkAclsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNetworkAclsCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkAclsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNetworkAclsCommand = /** @class */ (function (_super) {
    __extends(DescribeNetworkAclsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNetworkAclsCommand(input) {
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
    DescribeNetworkAclsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeNetworkAclsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNetworkAclsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNetworkAclsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNetworkAclsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeNetworkAclsCommand(input, context);
    };
    DescribeNetworkAclsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeNetworkAclsCommand(output, context);
    };
    return DescribeNetworkAclsCommand;
}($Command));
export { DescribeNetworkAclsCommand };
//# sourceMappingURL=DescribeNetworkAclsCommand.js.map