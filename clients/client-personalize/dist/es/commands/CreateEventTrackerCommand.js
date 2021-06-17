import { __extends } from "tslib";
import { CreateEventTrackerRequest, CreateEventTrackerResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateEventTrackerCommand, serializeAws_json1_1CreateEventTrackerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an event tracker that you use when adding event data to a specified dataset
 *       group using the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p>
 *          <note>
 *             <p>Only one event tracker can be associated with a dataset group. You will get
 *         an error if you call <code>CreateEventTracker</code> using the same dataset group as an
 *         existing event tracker.</p>
 *          </note>
 *          <p>When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> operation.
 *       Amazon Personalize then appends the event data to the Interactions dataset of the dataset group you specify
 *       in your event tracker.
 *     </p>
 *          <p>The event tracker can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the event tracker, call <a>DescribeEventTracker</a>.</p>
 *          <note>
 *             <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p>
 *          </note>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListEventTrackers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEventTracker</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteEventTracker</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateEventTrackerCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateEventTrackerCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateEventTrackerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEventTrackerCommandInput} for command's `input` shape.
 * @see {@link CreateEventTrackerCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateEventTrackerCommand = /** @class */ (function (_super) {
    __extends(CreateEventTrackerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateEventTrackerCommand(input) {
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
    CreateEventTrackerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "CreateEventTrackerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateEventTrackerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateEventTrackerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateEventTrackerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateEventTrackerCommand(input, context);
    };
    CreateEventTrackerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateEventTrackerCommand(output, context);
    };
    return CreateEventTrackerCommand;
}($Command));
export { CreateEventTrackerCommand };
//# sourceMappingURL=CreateEventTrackerCommand.js.map