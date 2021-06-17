import { __extends } from "tslib";
import { DescribeVpcEndpointConnectionsRequest, DescribeVpcEndpointConnectionsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeVpcEndpointConnectionsCommand, serializeAws_ec2DescribeVpcEndpointConnectionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the VPC endpoint connections to your VPC endpoint services, including any
 *             endpoints that are pending your acceptance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcEndpointConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcEndpointConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVpcEndpointConnectionsCommand = /** @class */ (function (_super) {
    __extends(DescribeVpcEndpointConnectionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVpcEndpointConnectionsCommand(input) {
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
    DescribeVpcEndpointConnectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeVpcEndpointConnectionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVpcEndpointConnectionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVpcEndpointConnectionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVpcEndpointConnectionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeVpcEndpointConnectionsCommand(input, context);
    };
    DescribeVpcEndpointConnectionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeVpcEndpointConnectionsCommand(output, context);
    };
    return DescribeVpcEndpointConnectionsCommand;
}($Command));
export { DescribeVpcEndpointConnectionsCommand };
//# sourceMappingURL=DescribeVpcEndpointConnectionsCommand.js.map