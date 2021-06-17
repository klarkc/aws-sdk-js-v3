import { __extends } from "tslib";
import { DescribeVpcPeeringConnectionsRequest, DescribeVpcPeeringConnectionsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeVpcPeeringConnectionsCommand, serializeAws_ec2DescribeVpcPeeringConnectionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your VPC peering connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcPeeringConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcPeeringConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcPeeringConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcPeeringConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcPeeringConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVpcPeeringConnectionsCommand = /** @class */ (function (_super) {
    __extends(DescribeVpcPeeringConnectionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVpcPeeringConnectionsCommand(input) {
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
    DescribeVpcPeeringConnectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeVpcPeeringConnectionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVpcPeeringConnectionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVpcPeeringConnectionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVpcPeeringConnectionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeVpcPeeringConnectionsCommand(input, context);
    };
    DescribeVpcPeeringConnectionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeVpcPeeringConnectionsCommand(output, context);
    };
    return DescribeVpcPeeringConnectionsCommand;
}($Command));
export { DescribeVpcPeeringConnectionsCommand };
//# sourceMappingURL=DescribeVpcPeeringConnectionsCommand.js.map