import { __extends } from "tslib";
import { DescribeClientVpnRoutesRequest, DescribeClientVpnRoutesResult } from "../models/models_2";
import { deserializeAws_ec2DescribeClientVpnRoutesCommand, serializeAws_ec2DescribeClientVpnRoutesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the routes for the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeClientVpnRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClientVpnRoutesCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeClientVpnRoutesCommand = /** @class */ (function (_super) {
    __extends(DescribeClientVpnRoutesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeClientVpnRoutesCommand(input) {
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
    DescribeClientVpnRoutesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeClientVpnRoutesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeClientVpnRoutesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeClientVpnRoutesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeClientVpnRoutesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeClientVpnRoutesCommand(input, context);
    };
    DescribeClientVpnRoutesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeClientVpnRoutesCommand(output, context);
    };
    return DescribeClientVpnRoutesCommand;
}($Command));
export { DescribeClientVpnRoutesCommand };
//# sourceMappingURL=DescribeClientVpnRoutesCommand.js.map