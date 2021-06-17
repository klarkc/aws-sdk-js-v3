import { __extends } from "tslib";
import { DescribeInternetGatewaysRequest, DescribeInternetGatewaysResult } from "../models/models_3";
import { deserializeAws_ec2DescribeInternetGatewaysCommand, serializeAws_ec2DescribeInternetGatewaysCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your internet gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInternetGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInternetGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInternetGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInternetGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeInternetGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInternetGatewaysCommand = /** @class */ (function (_super) {
    __extends(DescribeInternetGatewaysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInternetGatewaysCommand(input) {
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
    DescribeInternetGatewaysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeInternetGatewaysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInternetGatewaysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInternetGatewaysResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInternetGatewaysCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeInternetGatewaysCommand(input, context);
    };
    DescribeInternetGatewaysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeInternetGatewaysCommand(output, context);
    };
    return DescribeInternetGatewaysCommand;
}($Command));
export { DescribeInternetGatewaysCommand };
//# sourceMappingURL=DescribeInternetGatewaysCommand.js.map