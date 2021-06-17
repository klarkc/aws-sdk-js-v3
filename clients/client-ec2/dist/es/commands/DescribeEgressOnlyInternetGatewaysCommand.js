import { __extends } from "tslib";
import { DescribeEgressOnlyInternetGatewaysRequest, DescribeEgressOnlyInternetGatewaysResult, } from "../models/models_2";
import { deserializeAws_ec2DescribeEgressOnlyInternetGatewaysCommand, serializeAws_ec2DescribeEgressOnlyInternetGatewaysCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your egress-only internet gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeEgressOnlyInternetGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeEgressOnlyInternetGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeEgressOnlyInternetGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEgressOnlyInternetGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeEgressOnlyInternetGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEgressOnlyInternetGatewaysCommand = /** @class */ (function (_super) {
    __extends(DescribeEgressOnlyInternetGatewaysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEgressOnlyInternetGatewaysCommand(input) {
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
    DescribeEgressOnlyInternetGatewaysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeEgressOnlyInternetGatewaysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEgressOnlyInternetGatewaysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEgressOnlyInternetGatewaysResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEgressOnlyInternetGatewaysCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeEgressOnlyInternetGatewaysCommand(input, context);
    };
    DescribeEgressOnlyInternetGatewaysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeEgressOnlyInternetGatewaysCommand(output, context);
    };
    return DescribeEgressOnlyInternetGatewaysCommand;
}($Command));
export { DescribeEgressOnlyInternetGatewaysCommand };
//# sourceMappingURL=DescribeEgressOnlyInternetGatewaysCommand.js.map