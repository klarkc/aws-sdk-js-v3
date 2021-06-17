import { __extends } from "tslib";
import { DescribeTrafficMirrorTargetsRequest, DescribeTrafficMirrorTargetsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeTrafficMirrorTargetsCommand, serializeAws_ec2DescribeTrafficMirrorTargetsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Information about one or more Traffic Mirror targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTrafficMirrorTargetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTrafficMirrorTargetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTrafficMirrorTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrafficMirrorTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrafficMirrorTargetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTrafficMirrorTargetsCommand = /** @class */ (function (_super) {
    __extends(DescribeTrafficMirrorTargetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTrafficMirrorTargetsCommand(input) {
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
    DescribeTrafficMirrorTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeTrafficMirrorTargetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTrafficMirrorTargetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTrafficMirrorTargetsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTrafficMirrorTargetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeTrafficMirrorTargetsCommand(input, context);
    };
    DescribeTrafficMirrorTargetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeTrafficMirrorTargetsCommand(output, context);
    };
    return DescribeTrafficMirrorTargetsCommand;
}($Command));
export { DescribeTrafficMirrorTargetsCommand };
//# sourceMappingURL=DescribeTrafficMirrorTargetsCommand.js.map