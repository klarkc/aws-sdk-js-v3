import { __extends } from "tslib";
import { DescribeVpcEndpointsRequest, DescribeVpcEndpointsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeVpcEndpointsCommand, serializeAws_ec2DescribeVpcEndpointsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your VPC endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVpcEndpointsCommand = /** @class */ (function (_super) {
    __extends(DescribeVpcEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVpcEndpointsCommand(input) {
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
    DescribeVpcEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeVpcEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVpcEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVpcEndpointsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVpcEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeVpcEndpointsCommand(input, context);
    };
    DescribeVpcEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeVpcEndpointsCommand(output, context);
    };
    return DescribeVpcEndpointsCommand;
}($Command));
export { DescribeVpcEndpointsCommand };
//# sourceMappingURL=DescribeVpcEndpointsCommand.js.map