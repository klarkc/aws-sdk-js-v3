import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { PutPartnerEventsRequest, PutPartnerEventsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutPartnerEventsCommandInput extends PutPartnerEventsRequest {
}
export interface PutPartnerEventsCommandOutput extends PutPartnerEventsResponse, __MetadataBearer {
}
/**
 * <p>This is used by SaaS partners to write events to a customer's partner event bus. AWS
 *       customers do not use this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, PutPartnerEventsCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, PutPartnerEventsCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new PutPartnerEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPartnerEventsCommandInput} for command's `input` shape.
 * @see {@link PutPartnerEventsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutPartnerEventsCommand extends $Command<PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: PutPartnerEventsCommandInput;
    constructor(input: PutPartnerEventsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput>;
    private serialize;
    private deserialize;
}
