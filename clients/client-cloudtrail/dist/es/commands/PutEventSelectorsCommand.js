import { __extends } from "tslib";
import { PutEventSelectorsRequest, PutEventSelectorsResponse } from "../models/models_0";
import { deserializeAws_json1_1PutEventSelectorsCommand, serializeAws_json1_1PutEventSelectorsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Configures an event selector or advanced event selectors for your trail.
 *          Use event selectors or advanced event selectors to specify management and data event settings for your trail. By
 *          default, trails created without specific event selectors are configured to log all read and
 *          write management events, and no data events.</p>
 *          <p>When an event occurs in your account, CloudTrail
 *          evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches
 *          any event selector, the trail processes and logs the event. If the event doesn't match any event
 *          selector, the trail doesn't log the event. </p>
 *          <p>Example</p>
 *          <ol>
 *             <li>
 *                <p>You create an event selector for a trail and specify that you want
 *                write-only events.</p>
 *             </li>
 *             <li>
 *                <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API
 *                operations occur in your account.</p>
 *             </li>
 *             <li>
 *                <p>CloudTrail evaluates whether the events match your event
 *                selectors.</p>
 *             </li>
 *             <li>
 *                <p>The <code>RunInstances</code> is a write-only event and it matches your
 *                event selector. The trail logs the event.</p>
 *             </li>
 *             <li>
 *                <p>The <code>GetConsoleOutput</code> is a read-only event that doesn't
 *                match your event selector. The trail doesn't log the event.
 *          </p>
 *             </li>
 *          </ol>
 *          <p>The <code>PutEventSelectors</code> operation must be called from the region in which
 *          the trail was created; otherwise, an <code>InvalidHomeRegionException</code> exception is
 *          thrown.</p>
 *          <p>You can configure up to five event selectors for each trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html">Logging data and management events for trails
 *       </a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Quotas in AWS CloudTrail</a>
 *          in the <i>AWS CloudTrail User Guide</i>.</p>
 *          <p>You can add advanced event selectors, and conditions for your advanced
 *          event selectors, up to a maximum of 500 values for all conditions and selectors on a trail.
 *          You can use either <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you apply <code>AdvancedEventSelectors</code>
 *          to a trail, any existing <code>EventSelectors</code> are overwritten. For more information about
 *          advanced event selectors, see
 *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging
 *             data events for trails</a> in the <i>AWS CloudTrail User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, PutEventSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, PutEventSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new PutEventSelectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEventSelectorsCommandInput} for command's `input` shape.
 * @see {@link PutEventSelectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutEventSelectorsCommand = /** @class */ (function (_super) {
    __extends(PutEventSelectorsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutEventSelectorsCommand(input) {
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
    PutEventSelectorsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudTrailClient";
        var commandName = "PutEventSelectorsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutEventSelectorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutEventSelectorsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutEventSelectorsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutEventSelectorsCommand(input, context);
    };
    PutEventSelectorsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutEventSelectorsCommand(output, context);
    };
    return PutEventSelectorsCommand;
}($Command));
export { PutEventSelectorsCommand };
//# sourceMappingURL=PutEventSelectorsCommand.js.map