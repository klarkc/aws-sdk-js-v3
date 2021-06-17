import { __extends } from "tslib";
import { DescribeNetworkInterfacesRequest, DescribeNetworkInterfacesResult } from "../models/models_3";
import { deserializeAws_ec2DescribeNetworkInterfacesCommand, serializeAws_ec2DescribeNetworkInterfacesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your network interfaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInterfacesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInterfacesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeNetworkInterfacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNetworkInterfacesCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInterfacesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNetworkInterfacesCommand = /** @class */ (function (_super) {
    __extends(DescribeNetworkInterfacesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNetworkInterfacesCommand(input) {
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
    DescribeNetworkInterfacesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeNetworkInterfacesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNetworkInterfacesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNetworkInterfacesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNetworkInterfacesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeNetworkInterfacesCommand(input, context);
    };
    DescribeNetworkInterfacesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeNetworkInterfacesCommand(output, context);
    };
    return DescribeNetworkInterfacesCommand;
}($Command));
export { DescribeNetworkInterfacesCommand };
//# sourceMappingURL=DescribeNetworkInterfacesCommand.js.map