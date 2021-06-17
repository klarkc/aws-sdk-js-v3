import { __extends } from "tslib";
import { DescribeVpcEndpointServicePermissionsRequest, DescribeVpcEndpointServicePermissionsResult, } from "../models/models_3";
import { deserializeAws_ec2DescribeVpcEndpointServicePermissionsCommand, serializeAws_ec2DescribeVpcEndpointServicePermissionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the principals (service consumers) that are permitted to discover your VPC
 *             endpoint service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointServicePermissionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointServicePermissionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcEndpointServicePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcEndpointServicePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointServicePermissionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVpcEndpointServicePermissionsCommand = /** @class */ (function (_super) {
    __extends(DescribeVpcEndpointServicePermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVpcEndpointServicePermissionsCommand(input) {
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
    DescribeVpcEndpointServicePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeVpcEndpointServicePermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVpcEndpointServicePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVpcEndpointServicePermissionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVpcEndpointServicePermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeVpcEndpointServicePermissionsCommand(input, context);
    };
    DescribeVpcEndpointServicePermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeVpcEndpointServicePermissionsCommand(output, context);
    };
    return DescribeVpcEndpointServicePermissionsCommand;
}($Command));
export { DescribeVpcEndpointServicePermissionsCommand };
//# sourceMappingURL=DescribeVpcEndpointServicePermissionsCommand.js.map