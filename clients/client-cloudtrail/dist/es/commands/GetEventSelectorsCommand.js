import { __extends } from "tslib";
import { GetEventSelectorsRequest, GetEventSelectorsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetEventSelectorsCommand, serializeAws_json1_1GetEventSelectorsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the settings for the event selectors that you configured for your trail.
 *          The information returned for your event selectors includes the following:</p>
 *          <ul>
 *             <li>
 *                <p>If your event selector includes read-only events, write-only events, or
 *             all events. This applies to both management events and data events.</p>
 *             </li>
 *             <li>
 *                <p>If your event selector includes management events.</p>
 *             </li>
 *             <li>
 *                <p>If your event selector includes data events, the Amazon S3 objects or AWS Lambda functions
 *             that you are logging for data events.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html">Logging Data and Management Events for Trails
 *       </a> in the <i>AWS CloudTrail User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetEventSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetEventSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new GetEventSelectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventSelectorsCommandInput} for command's `input` shape.
 * @see {@link GetEventSelectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEventSelectorsCommand = /** @class */ (function (_super) {
    __extends(GetEventSelectorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEventSelectorsCommand(input) {
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
    GetEventSelectorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudTrailClient";
        var commandName = "GetEventSelectorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEventSelectorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEventSelectorsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEventSelectorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetEventSelectorsCommand(input, context);
    };
    GetEventSelectorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetEventSelectorsCommand(output, context);
    };
    return GetEventSelectorsCommand;
}($Command));
export { GetEventSelectorsCommand };
//# sourceMappingURL=GetEventSelectorsCommand.js.map