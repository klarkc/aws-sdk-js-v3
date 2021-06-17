import { __extends } from "tslib";
import { ReleaseHostsRequest, ReleaseHostsResult } from "../models/models_4";
import { deserializeAws_ec2ReleaseHostsCommand, serializeAws_ec2ReleaseHostsCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>When you no longer want to use an On-Demand Dedicated Host it can be released.
 *             On-Demand billing is stopped and the host goes into <code>released</code> state. The
 *             host ID of Dedicated Hosts that have been released can no longer be specified in another
 *             request, for example, to modify the host. You must stop or terminate all instances on a
 *             host before it can be released.</p>
 *         <p>When Dedicated Hosts are released, it may take some time for them to stop counting
 *             toward your limit and you may receive capacity errors when trying to allocate new
 *             Dedicated Hosts. Wait a few minutes and then try again.</p>
 *         <p>Released hosts still appear in a <a>DescribeHosts</a> response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReleaseHostsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReleaseHostsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReleaseHostsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReleaseHostsCommandInput} for command's `input` shape.
 * @see {@link ReleaseHostsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ReleaseHostsCommand = /** @class */ (function (_super) {
    __extends(ReleaseHostsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ReleaseHostsCommand(input) {
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
    ReleaseHostsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ReleaseHostsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ReleaseHostsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ReleaseHostsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ReleaseHostsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ReleaseHostsCommand(input, context);
    };
    ReleaseHostsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ReleaseHostsCommand(output, context);
    };
    return ReleaseHostsCommand;
}($Command));
export { ReleaseHostsCommand };
//# sourceMappingURL=ReleaseHostsCommand.js.map