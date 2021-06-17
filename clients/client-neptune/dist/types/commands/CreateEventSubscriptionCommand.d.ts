import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { CreateEventSubscriptionMessage, CreateEventSubscriptionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateEventSubscriptionCommandInput extends CreateEventSubscriptionMessage {
}
export interface CreateEventSubscriptionCommandOutput extends CreateEventSubscriptionResult, __MetadataBearer {
}
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
export declare class CreateEventSubscriptionCommand extends $Command<CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: CreateEventSubscriptionCommandInput;
    constructor(input: CreateEventSubscriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEventSubscriptionCommandInput, CreateEventSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
