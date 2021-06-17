import { __extends } from "tslib";
import { StartNetworkInsightsAnalysisRequest, StartNetworkInsightsAnalysisResult } from "../models/models_5";
import { deserializeAws_ec2StartNetworkInsightsAnalysisCommand, serializeAws_ec2StartNetworkInsightsAnalysisCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts analyzing the specified path. If the path is reachable, the
 *          operation returns the shortest feasible path.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, StartNetworkInsightsAnalysisCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, StartNetworkInsightsAnalysisCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new StartNetworkInsightsAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartNetworkInsightsAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartNetworkInsightsAnalysisCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartNetworkInsightsAnalysisCommand = /** @class */ (function (_super) {
    __extends(StartNetworkInsightsAnalysisCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartNetworkInsightsAnalysisCommand(input) {
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
    StartNetworkInsightsAnalysisCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "StartNetworkInsightsAnalysisCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartNetworkInsightsAnalysisRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartNetworkInsightsAnalysisResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartNetworkInsightsAnalysisCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2StartNetworkInsightsAnalysisCommand(input, context);
    };
    StartNetworkInsightsAnalysisCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2StartNetworkInsightsAnalysisCommand(output, context);
    };
    return StartNetworkInsightsAnalysisCommand;
}($Command));
export { StartNetworkInsightsAnalysisCommand };
//# sourceMappingURL=StartNetworkInsightsAnalysisCommand.js.map