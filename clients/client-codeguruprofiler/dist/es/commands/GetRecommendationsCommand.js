import { __extends } from "tslib";
import { GetRecommendationsRequest, GetRecommendationsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetRecommendationsCommand, serializeAws_restJson1GetRecommendationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             Returns a list of
 *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html">
 *                <code>Recommendation</code>
 *             </a>
 *             objects that contain recommendations for a profiling group for a given time period. A list of
 *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html">
 *                <code>Anomaly</code>
 *             </a>
 *             objects that contains details about anomalies detected in the profiling group for the same time period is also
 *             returned.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, GetRecommendationsCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, GetRecommendationsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new GetRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRecommendationsCommand = /** @class */ (function (_super) {
    __extends(GetRecommendationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRecommendationsCommand(input) {
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
    GetRecommendationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruProfilerClient";
        var commandName = "GetRecommendationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRecommendationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRecommendationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRecommendationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetRecommendationsCommand(input, context);
    };
    GetRecommendationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetRecommendationsCommand(output, context);
    };
    return GetRecommendationsCommand;
}($Command));
export { GetRecommendationsCommand };
//# sourceMappingURL=GetRecommendationsCommand.js.map