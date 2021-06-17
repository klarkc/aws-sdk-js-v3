import { __extends } from "tslib";
import { DescribeTrafficMirrorSessionsRequest, DescribeTrafficMirrorSessionsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeTrafficMirrorSessionsCommand, serializeAws_ec2DescribeTrafficMirrorSessionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more Traffic Mirror sessions. By default, all Traffic Mirror sessions are described. Alternatively, you can filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTrafficMirrorSessionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTrafficMirrorSessionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTrafficMirrorSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrafficMirrorSessionsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrafficMirrorSessionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTrafficMirrorSessionsCommand = /** @class */ (function (_super) {
    __extends(DescribeTrafficMirrorSessionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTrafficMirrorSessionsCommand(input) {
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
    DescribeTrafficMirrorSessionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeTrafficMirrorSessionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTrafficMirrorSessionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTrafficMirrorSessionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTrafficMirrorSessionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeTrafficMirrorSessionsCommand(input, context);
    };
    DescribeTrafficMirrorSessionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeTrafficMirrorSessionsCommand(output, context);
    };
    return DescribeTrafficMirrorSessionsCommand;
}($Command));
export { DescribeTrafficMirrorSessionsCommand };
//# sourceMappingURL=DescribeTrafficMirrorSessionsCommand.js.map