import { __extends } from "tslib";
import { DescribeTransitGatewaysRequest, DescribeTransitGatewaysResult } from "../models/models_3";
import { deserializeAws_ec2DescribeTransitGatewaysCommand, serializeAws_ec2DescribeTransitGatewaysCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more transit gateways. By default, all transit gateways are described. Alternatively, you can
 *          filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTransitGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTransitGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTransitGatewaysCommand = /** @class */ (function (_super) {
    __extends(DescribeTransitGatewaysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTransitGatewaysCommand(input) {
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
    DescribeTransitGatewaysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeTransitGatewaysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTransitGatewaysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTransitGatewaysResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTransitGatewaysCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeTransitGatewaysCommand(input, context);
    };
    DescribeTransitGatewaysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeTransitGatewaysCommand(output, context);
    };
    return DescribeTransitGatewaysCommand;
}($Command));
export { DescribeTransitGatewaysCommand };
//# sourceMappingURL=DescribeTransitGatewaysCommand.js.map