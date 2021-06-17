import { __extends } from "tslib";
import { DescribeCarrierGatewaysRequest, DescribeCarrierGatewaysResult } from "../models/models_2";
import { deserializeAws_ec2DescribeCarrierGatewaysCommand, serializeAws_ec2DescribeCarrierGatewaysCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your carrier gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCarrierGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCarrierGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeCarrierGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCarrierGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeCarrierGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCarrierGatewaysCommand = /** @class */ (function (_super) {
    __extends(DescribeCarrierGatewaysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCarrierGatewaysCommand(input) {
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
    DescribeCarrierGatewaysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeCarrierGatewaysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCarrierGatewaysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCarrierGatewaysResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCarrierGatewaysCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeCarrierGatewaysCommand(input, context);
    };
    DescribeCarrierGatewaysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeCarrierGatewaysCommand(output, context);
    };
    return DescribeCarrierGatewaysCommand;
}($Command));
export { DescribeCarrierGatewaysCommand };
//# sourceMappingURL=DescribeCarrierGatewaysCommand.js.map