import { __extends } from "tslib";
import { DescribeClientVpnConnectionsRequest, DescribeClientVpnConnectionsResult } from "../models/models_2";
import { deserializeAws_ec2DescribeClientVpnConnectionsCommand, serializeAws_ec2DescribeClientVpnConnectionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes active client connections and connections that have been terminated within the last 60
 * 			minutes for the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeClientVpnConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClientVpnConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeClientVpnConnectionsCommand = /** @class */ (function (_super) {
    __extends(DescribeClientVpnConnectionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeClientVpnConnectionsCommand(input) {
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
    DescribeClientVpnConnectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeClientVpnConnectionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeClientVpnConnectionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeClientVpnConnectionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeClientVpnConnectionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeClientVpnConnectionsCommand(input, context);
    };
    DescribeClientVpnConnectionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeClientVpnConnectionsCommand(output, context);
    };
    return DescribeClientVpnConnectionsCommand;
}($Command));
export { DescribeClientVpnConnectionsCommand };
//# sourceMappingURL=DescribeClientVpnConnectionsCommand.js.map