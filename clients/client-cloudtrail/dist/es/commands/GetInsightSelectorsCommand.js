import { __extends } from "tslib";
import { GetInsightSelectorsRequest, GetInsightSelectorsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetInsightSelectorsCommand, serializeAws_json1_1GetInsightSelectorsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the settings for the Insights event selectors that you configured for your trail. <code>GetInsightSelectors</code> shows
 *          if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled.
 *          If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception
 *          <code>InsightNotEnabledException</code>
 *          </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging CloudTrail Insights Events for Trails
 *       </a> in the <i>AWS CloudTrail User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetInsightSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetInsightSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new GetInsightSelectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightSelectorsCommandInput} for command's `input` shape.
 * @see {@link GetInsightSelectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInsightSelectorsCommand = /** @class */ (function (_super) {
    __extends(GetInsightSelectorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInsightSelectorsCommand(input) {
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
    GetInsightSelectorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudTrailClient";
        var commandName = "GetInsightSelectorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInsightSelectorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInsightSelectorsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInsightSelectorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetInsightSelectorsCommand(input, context);
    };
    GetInsightSelectorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetInsightSelectorsCommand(output, context);
    };
    return GetInsightSelectorsCommand;
}($Command));
export { GetInsightSelectorsCommand };
//# sourceMappingURL=GetInsightSelectorsCommand.js.map