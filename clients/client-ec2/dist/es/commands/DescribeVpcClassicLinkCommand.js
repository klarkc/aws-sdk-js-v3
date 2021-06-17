import { __extends } from "tslib";
import { DescribeVpcClassicLinkRequest, DescribeVpcClassicLinkResult } from "../models/models_3";
import { deserializeAws_ec2DescribeVpcClassicLinkCommand, serializeAws_ec2DescribeVpcClassicLinkCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the ClassicLink status of one or more VPCs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcClassicLinkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcClassicLinkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcClassicLinkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcClassicLinkCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcClassicLinkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVpcClassicLinkCommand = /** @class */ (function (_super) {
    __extends(DescribeVpcClassicLinkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVpcClassicLinkCommand(input) {
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
    DescribeVpcClassicLinkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeVpcClassicLinkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVpcClassicLinkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVpcClassicLinkResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVpcClassicLinkCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeVpcClassicLinkCommand(input, context);
    };
    DescribeVpcClassicLinkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeVpcClassicLinkCommand(output, context);
    };
    return DescribeVpcClassicLinkCommand;
}($Command));
export { DescribeVpcClassicLinkCommand };
//# sourceMappingURL=DescribeVpcClassicLinkCommand.js.map