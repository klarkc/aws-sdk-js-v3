import { __extends } from "tslib";
import { DescribeNatGatewaysRequest, DescribeNatGatewaysResult } from "../models/models_3";
import { deserializeAws_ec2DescribeNatGatewaysCommand, serializeAws_ec2DescribeNatGatewaysCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your NAT gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNatGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNatGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeNatGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNatGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeNatGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNatGatewaysCommand = /** @class */ (function (_super) {
    __extends(DescribeNatGatewaysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNatGatewaysCommand(input) {
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
    DescribeNatGatewaysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeNatGatewaysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNatGatewaysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNatGatewaysResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNatGatewaysCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeNatGatewaysCommand(input, context);
    };
    DescribeNatGatewaysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeNatGatewaysCommand(output, context);
    };
    return DescribeNatGatewaysCommand;
}($Command));
export { DescribeNatGatewaysCommand };
//# sourceMappingURL=DescribeNatGatewaysCommand.js.map