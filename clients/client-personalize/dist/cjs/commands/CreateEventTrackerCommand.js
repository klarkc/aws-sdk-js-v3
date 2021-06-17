"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventTrackerCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateEventTrackerCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PersonalizeClient";
        const commandName = "CreateEventTrackerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateEventTrackerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateEventTrackerResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateEventTrackerCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateEventTrackerCommand(output, context);
    }
}
exports.CreateEventTrackerCommand = CreateEventTrackerCommand;
//# sourceMappingURL=CreateEventTrackerCommand.js.map