import { __extends } from "tslib";
import { DescribeVpcEndpointServiceConfigurationsRequest, DescribeVpcEndpointServiceConfigurationsResult, } from "../models/models_3";
import { deserializeAws_ec2DescribeVpcEndpointServiceConfigurationsCommand, serializeAws_ec2DescribeVpcEndpointServiceConfigurationsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the VPC endpoint service configurations in your account (your services).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointServiceConfigurationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointServiceConfigurationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcEndpointServiceConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcEndpointServiceConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointServiceConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVpcEndpointServiceConfigurationsCommand = /** @class */ (function (_super) {
    __extends(DescribeVpcEndpointServiceConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVpcEndpointServiceConfigurationsCommand(input) {
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
    DescribeVpcEndpointServiceConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeVpcEndpointServiceConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVpcEndpointServiceConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVpcEndpointServiceConfigurationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVpcEndpointServiceConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeVpcEndpointServiceConfigurationsCommand(input, context);
    };
    DescribeVpcEndpointServiceConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeVpcEndpointServiceConfigurationsCommand(output, context);
    };
    return DescribeVpcEndpointServiceConfigurationsCommand;
}($Command));
export { DescribeVpcEndpointServiceConfigurationsCommand };
//# sourceMappingURL=DescribeVpcEndpointServiceConfigurationsCommand.js.map