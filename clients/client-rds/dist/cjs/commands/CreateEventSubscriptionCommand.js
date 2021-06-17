"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventSubscriptionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an RDS event notification subscription. This action requires a topic Amazon
 *             Resource Name (ARN) created by either the RDS console, the SNS console, or the SNS API.
 *             To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the
 *             topic. The ARN is displayed in the SNS console.</p>
 *          <p>You can specify the type of source (<code>SourceType</code>) that you want to be
 *             notified of and provide a list of RDS sources (<code>SourceIds</code>) that triggers the
 *             events. You can also provide a list of event categories (<code>EventCategories</code>)
 *             for events that you want to be notified of. For example, you can specify
 *                 <code>SourceType</code> = <code>db-instance</code>, <code>SourceIds</code> =
 *                 <code>mydbinstance1</code>, <code>mydbinstance2</code> and
 *                 <code>EventCategories</code> = <code>Availability</code>,
 *             <code>Backup</code>.</p>
 *
 *          <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType</code> = <code>db-instance</code>
 *           and <code>SourceIdentifier</code> = <code>myDBInstance1</code>, you are notified of all the <code>db-instance</code> events for
 *           the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>,
 *           you receive notice of the events for that source type for all your RDS sources. If you
 *           don't specify either the SourceType or the <code>SourceIdentifier</code>, you are notified of events
 *           generated from all RDS sources belonging to your customer account.</p>
 *          <note>
 *             <p>RDS event notification is only available for unencrypted SNS topics. If you specify an
 *               encrypted SNS topic, event notifications aren't sent for the topic.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateEventSubscriptionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateEventSubscriptionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
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
        const clientName = "RDSClient";
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