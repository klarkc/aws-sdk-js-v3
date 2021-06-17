import { __extends } from "tslib";
import { DescribeTrafficMirrorFiltersRequest, DescribeTrafficMirrorFiltersResult } from "../models/models_3";
import { deserializeAws_ec2DescribeTrafficMirrorFiltersCommand, serializeAws_ec2DescribeTrafficMirrorFiltersCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more Traffic Mirror filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTrafficMirrorFiltersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTrafficMirrorFiltersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeTrafficMirrorFiltersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrafficMirrorFiltersCommandInput} for command's `input` shape.
 * @see {@link DescribeTrafficMirrorFiltersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTrafficMirrorFiltersCommand = /** @class */ (function (_super) {
    __extends(DescribeTrafficMirrorFiltersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTrafficMirrorFiltersCommand(input) {
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
    DescribeTrafficMirrorFiltersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeTrafficMirrorFiltersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTrafficMirrorFiltersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTrafficMirrorFiltersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTrafficMirrorFiltersCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeTrafficMirrorFiltersCommand(input, context);
    };
    DescribeTrafficMirrorFiltersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeTrafficMirrorFiltersCommand(output, context);
    };
    return DescribeTrafficMirrorFiltersCommand;
}($Command));
export { DescribeTrafficMirrorFiltersCommand };
//# sourceMappingURL=DescribeTrafficMirrorFiltersCommand.js.map