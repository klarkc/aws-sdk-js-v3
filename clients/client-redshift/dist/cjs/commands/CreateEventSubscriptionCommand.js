"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventSubscriptionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an Amazon Redshift event notification subscription. This action requires an ARN
 *             (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console,
 *             the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you
 *             must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in
 *             the SNS console.</p>
 *         <p>You can specify the source type, and lists of Amazon Redshift source IDs, event
 *             categories, and event severities. Notifications will be sent for all events you want
 *             that match those criteria. For example, you can specify source type = cluster, source ID
 *             = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity =
 *             ERROR. The subscription will only send notifications for those ERROR events in the
 *             Availability and Backup categories for the specified clusters.</p>
 *         <p>If you specify both the source type and source IDs, such as source type = cluster
 *             and source identifier = my-cluster-1, notifications will be sent for all the cluster
 *             events for my-cluster-1. If you specify a source type but do not specify a source
 *             identifier, you will receive notice of the events for the objects of that type in your
 *             AWS account. If you do not specify either the SourceType nor the SourceIdentifier, you
 *             will be notified of events generated from all Amazon Redshift sources belonging to your AWS
 *             account. You must specify a source type if you specify a source ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateEventSubscriptionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateEventSubscriptionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
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
        const clientName = "RedshiftClient";
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