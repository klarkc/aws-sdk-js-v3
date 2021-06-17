"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventSubscriptionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an event notification subscription. This action requires a topic ARN (Amazon
 *       Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To
 *       obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The
 *       ARN is displayed in the SNS console.</p>
 *          <p>You can specify the type of source (SourceType) you want to be notified of, provide a list
 *       of Neptune sources (SourceIds) that triggers the events, and provide a list of event
 *       categories (EventCategories) for events you want to be notified of. For example, you can
 *       specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories
 *       = Availability, Backup.</p>
 *          <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and
 *       SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the
 *       specified source. If you specify a SourceType but do not specify a SourceIdentifier, you
 *       receive notice of the events for that source type for all your Neptune sources. If you do not
 *       specify either the SourceType nor the SourceIdentifier, you are notified of events generated
 *       from all Neptune sources belonging to your customer account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateEventSubscriptionCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateEventSubscriptionCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new CreateEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateEventSubscriptionCommand extends smithy_client_1.Command {
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
        const clientName = "NeptuneClient";
        const commandName = "CreateEventSubscriptionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateEventSubscriptionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateEventSubscriptionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCreateEventSubscriptionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCreateEventSubscriptionCommand(output, context);
    }
}
exports.CreateEventSubscriptionCommand = CreateEventSubscriptionCommand;
//# sourceMappingURL=CreateEventSubscriptionCommand.js.map