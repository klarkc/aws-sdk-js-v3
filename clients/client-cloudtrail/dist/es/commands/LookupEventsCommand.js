import { __extends } from "tslib";
import { LookupEventsRequest, LookupEventsResponse } from "../models/models_0";
import { deserializeAws_json1_1LookupEventsCommand, serializeAws_json1_1LookupEventsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> or
 *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events">CloudTrail Insights events</a> that are captured by CloudTrail.
 *          You can look up events that occurred in a region within the last 90 days. Lookup supports the following attributes for management events:</p>
 *          <ul>
 *             <li>
 *                <p>AWS access key</p>
 *             </li>
 *             <li>
 *                <p>Event ID</p>
 *             </li>
 *             <li>
 *                <p>Event name</p>
 *             </li>
 *             <li>
 *                <p>Event source</p>
 *             </li>
 *             <li>
 *                <p>Read only</p>
 *             </li>
 *             <li>
 *                <p>Resource name</p>
 *             </li>
 *             <li>
 *                <p>Resource type</p>
 *             </li>
 *             <li>
 *                <p>User name</p>
 *             </li>
 *          </ul>
 *          <p>Lookup supports the following attributes for Insights events:</p>
 *          <ul>
 *             <li>
 *                <p>Event ID</p>
 *             </li>
 *             <li>
 *                <p>Event name</p>
 *             </li>
 *             <li>
 *                <p>Event source</p>
 *             </li>
 *          </ul>
 *          <p>All attributes are optional. The default number of results returned is 50, with a
 *          maximum of 50 possible. The response includes a token that you can use to get the next page
 *          of results.</p>
 *          <important>
 *             <p>The rate of lookup requests is limited to two per second, per account, per region. If this
 *             limit is exceeded, a throttling error occurs.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, LookupEventsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, LookupEventsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new LookupEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LookupEventsCommandInput} for command's `input` shape.
 * @see {@link LookupEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var LookupEventsCommand = /** @class */ (function (_super) {
    __extends(LookupEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function LookupEventsCommand(input) {
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
    LookupEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudTrailClient";
        var commandName = "LookupEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: LookupEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: LookupEventsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    LookupEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1LookupEventsCommand(input, context);
    };
    LookupEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1LookupEventsCommand(output, context);
    };
    return LookupEventsCommand;
}($Command));
export { LookupEventsCommand };
//# sourceMappingURL=LookupEventsCommand.js.map