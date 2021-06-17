import { __extends } from "tslib";
import { DescribeHostsRequest, DescribeHostsResult } from "../models/models_2";
import { deserializeAws_ec2DescribeHostsCommand, serializeAws_ec2DescribeHostsCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified Dedicated Hosts or all your Dedicated Hosts.</p>
 *         <p>The results describe only the Dedicated Hosts in the Region you're currently using.
 *             All listed instances consume capacity on your Dedicated Host. Dedicated Hosts that have
 *             recently been released are listed with the state <code>released</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeHostsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeHostsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeHostsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHostsCommandInput} for command's `input` shape.
 * @see {@link DescribeHostsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeHostsCommand = /** @class */ (function (_super) {
    __extends(DescribeHostsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeHostsCommand(input) {
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
    DescribeHostsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeHostsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeHostsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeHostsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeHostsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeHostsCommand(input, context);
    };
    DescribeHostsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeHostsCommand(output, context);
    };
    return DescribeHostsCommand;
}($Command));
export { DescribeHostsCommand };
//# sourceMappingURL=DescribeHostsCommand.js.map