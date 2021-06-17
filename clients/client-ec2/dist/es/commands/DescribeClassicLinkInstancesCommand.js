import { __extends } from "tslib";
import { DescribeClassicLinkInstancesRequest, DescribeClassicLinkInstancesResult } from "../models/models_2";
import { deserializeAws_ec2DescribeClassicLinkInstancesCommand, serializeAws_ec2DescribeClassicLinkInstancesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your linked EC2-Classic instances. This request only returns
 * 			information about EC2-Classic instances linked to a VPC through ClassicLink. You cannot
 * 			use this request to return information about other instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClassicLinkInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClassicLinkInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeClassicLinkInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClassicLinkInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeClassicLinkInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeClassicLinkInstancesCommand = /** @class */ (function (_super) {
    __extends(DescribeClassicLinkInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeClassicLinkInstancesCommand(input) {
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
    DescribeClassicLinkInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeClassicLinkInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeClassicLinkInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeClassicLinkInstancesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeClassicLinkInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeClassicLinkInstancesCommand(input, context);
    };
    DescribeClassicLinkInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeClassicLinkInstancesCommand(output, context);
    };
    return DescribeClassicLinkInstancesCommand;
}($Command));
export { DescribeClassicLinkInstancesCommand };
//# sourceMappingURL=DescribeClassicLinkInstancesCommand.js.map