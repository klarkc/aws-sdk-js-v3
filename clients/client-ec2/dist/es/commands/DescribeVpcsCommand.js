import { __extends } from "tslib";
import { DescribeVpcsRequest, DescribeVpcsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeVpcsCommand, serializeAws_ec2DescribeVpcsCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your VPCs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVpcsCommand = /** @class */ (function (_super) {
    __extends(DescribeVpcsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVpcsCommand(input) {
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
    DescribeVpcsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeVpcsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVpcsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVpcsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVpcsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeVpcsCommand(input, context);
    };
    DescribeVpcsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeVpcsCommand(output, context);
    };
    return DescribeVpcsCommand;
}($Command));
export { DescribeVpcsCommand };
//# sourceMappingURL=DescribeVpcsCommand.js.map