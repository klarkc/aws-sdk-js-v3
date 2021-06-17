import { __extends } from "tslib";
import { DescribeVpcAttributeRequest, DescribeVpcAttributeResult } from "../models/models_3";
import { deserializeAws_ec2DescribeVpcAttributeCommand, serializeAws_ec2DescribeVpcAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified attribute of the specified VPC. You can specify only one attribute at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVpcAttributeCommand = /** @class */ (function (_super) {
    __extends(DescribeVpcAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVpcAttributeCommand(input) {
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
    DescribeVpcAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeVpcAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVpcAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVpcAttributeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVpcAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeVpcAttributeCommand(input, context);
    };
    DescribeVpcAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeVpcAttributeCommand(output, context);
    };
    return DescribeVpcAttributeCommand;
}($Command));
export { DescribeVpcAttributeCommand };
//# sourceMappingURL=DescribeVpcAttributeCommand.js.map