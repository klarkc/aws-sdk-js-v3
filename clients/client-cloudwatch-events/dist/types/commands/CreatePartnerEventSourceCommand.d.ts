import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { CreatePartnerEventSourceRequest, CreatePartnerEventSourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePartnerEventSourceCommandInput extends CreatePartnerEventSourceRequest {
}
export interface CreatePartnerEventSourceCommandOutput extends CreatePartnerEventSourceResponse, __MetadataBearer {
}
/**
 * <p>Called by an SaaS partner to create a partner event source. This operation is not used by
 *       AWS customers.</p>
 *          <p>Each partner event source can be used by one AWS account to create a matching partner
 *       event bus in that AWS account. A SaaS partner must create one partner event source for each
 *       AWS account that wants to receive those event types. </p>
 *          <p>A partner event source creates events based on resources within the SaaS partner's service
 *       or application.</p>
 *          <p>An AWS account that creates a partner event bus that matches the partner event source can
 *       use that event bus to receive events from the partner, and then process them using AWS Events
 *       rules and targets.</p>
 *          <p>Partner event source names follow this format:</p>
 *          <p>
 *             <code>
 *                <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i>
 *             </code>
 *          </p>
 *          <p>
 *             <i>partner_name</i> is determined during partner registration and identifies
 *       the partner to AWS customers. <i>event_namespace</i> is determined by the
 *       partner and is a way for the partner to categorize their events.
 *         <i>event_name</i> is determined by the partner, and should uniquely identify
 *       an event-generating resource within the partner system. The combination of
 *         <i>event_namespace</i> and <i>event_name</i> should help AWS
 *       customers decide whether to create an event bus to receive these events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, CreatePartnerEventSourceCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, CreatePartnerEventSourceCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new CreatePartnerEventSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePartnerEventSourceCommandInput} for command's `input` shape.
 * @see {@link CreatePartnerEventSourceCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePartnerEventSourceCommand extends $Command<CreatePartnerEventSourceCommandInput, CreatePartnerEventSourceCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: CreatePartnerEventSourceCommandInput;
    constructor(input: CreatePartnerEventSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePartnerEventSourceCommandInput, CreatePartnerEventSourceCommandOutput>;
    private serialize;
    private deserialize;
}
