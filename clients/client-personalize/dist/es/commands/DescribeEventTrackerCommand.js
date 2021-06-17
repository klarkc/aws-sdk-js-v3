import { __extends } from "tslib";
import { DescribeEventTrackerRequest, DescribeEventTrackerResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeEventTrackerCommand, serializeAws_json1_1DescribeEventTrackerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an event tracker. The response includes the <code>trackingId</code> and
 *       <code>status</code> of the event tracker.
 *       For more information on event trackers, see <a>CreateEventTracker</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeEventTrackerCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeEventTrackerCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeEventTrackerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventTrackerCommandInput} for command's `input` shape.
 * @see {@link DescribeEventTrackerCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEventTrackerCommand = /** @class */ (function (_super) {
    __extends(DescribeEventTrackerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEventTrackerCommand(input) {
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
    DescribeEventTrackerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "DescribeEventTrackerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEventTrackerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEventTrackerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEventTrackerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEventTrackerCommand(input, context);
    };
    DescribeEventTrackerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEventTrackerCommand(output, context);
    };
    return DescribeEventTrackerCommand;
}($Command));
export { DescribeEventTrackerCommand };
//# sourceMappingURL=DescribeEventTrackerCommand.js.map