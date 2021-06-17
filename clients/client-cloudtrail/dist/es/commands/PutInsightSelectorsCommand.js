import { __extends } from "tslib";
import { PutInsightSelectorsRequest, PutInsightSelectorsResponse } from "../models/models_0";
import { deserializeAws_json1_1PutInsightSelectorsCommand, serializeAws_json1_1PutInsightSelectorsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lets you enable Insights event logging by specifying the Insights
 *          selectors that you want to enable on an existing trail. You also use
 *          <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types.
 *          In this release, only <code>ApiCallRateInsight</code> is supported as an Insights selector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, PutInsightSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, PutInsightSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new PutInsightSelectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInsightSelectorsCommandInput} for command's `input` shape.
 * @see {@link PutInsightSelectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutInsightSelectorsCommand = /** @class */ (function (_super) {
    __extends(PutInsightSelectorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutInsightSelectorsCommand(input) {
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
    PutInsightSelectorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudTrailClient";
        var commandName = "PutInsightSelectorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutInsightSelectorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutInsightSelectorsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutInsightSelectorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutInsightSelectorsCommand(input, context);
    };
    PutInsightSelectorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutInsightSelectorsCommand(output, context);
    };
    return PutInsightSelectorsCommand;
}($Command));
export { PutInsightSelectorsCommand };
//# sourceMappingURL=PutInsightSelectorsCommand.js.map