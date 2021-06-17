import { __extends } from "tslib";
import { DescribeNetworkInsightsAnalysesRequest, DescribeNetworkInsightsAnalysesResult } from "../models/models_3";
import { deserializeAws_ec2DescribeNetworkInsightsAnalysesCommand, serializeAws_ec2DescribeNetworkInsightsAnalysesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your network insights analyses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInsightsAnalysesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInsightsAnalysesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeNetworkInsightsAnalysesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNetworkInsightsAnalysesCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInsightsAnalysesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNetworkInsightsAnalysesCommand = /** @class */ (function (_super) {
    __extends(DescribeNetworkInsightsAnalysesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNetworkInsightsAnalysesCommand(input) {
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
    DescribeNetworkInsightsAnalysesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeNetworkInsightsAnalysesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNetworkInsightsAnalysesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNetworkInsightsAnalysesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNetworkInsightsAnalysesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeNetworkInsightsAnalysesCommand(input, context);
    };
    DescribeNetworkInsightsAnalysesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeNetworkInsightsAnalysesCommand(output, context);
    };
    return DescribeNetworkInsightsAnalysesCommand;
}($Command));
export { DescribeNetworkInsightsAnalysesCommand };
//# sourceMappingURL=DescribeNetworkInsightsAnalysesCommand.js.map