import { __extends } from "tslib";
import { DescribeNetworkInsightsPathsRequest, DescribeNetworkInsightsPathsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeNetworkInsightsPathsCommand, serializeAws_ec2DescribeNetworkInsightsPathsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your paths.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInsightsPathsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInsightsPathsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeNetworkInsightsPathsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNetworkInsightsPathsCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInsightsPathsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNetworkInsightsPathsCommand = /** @class */ (function (_super) {
    __extends(DescribeNetworkInsightsPathsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNetworkInsightsPathsCommand(input) {
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
    DescribeNetworkInsightsPathsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeNetworkInsightsPathsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNetworkInsightsPathsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNetworkInsightsPathsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNetworkInsightsPathsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeNetworkInsightsPathsCommand(input, context);
    };
    DescribeNetworkInsightsPathsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeNetworkInsightsPathsCommand(output, context);
    };
    return DescribeNetworkInsightsPathsCommand;
}($Command));
export { DescribeNetworkInsightsPathsCommand };
//# sourceMappingURL=DescribeNetworkInsightsPathsCommand.js.map