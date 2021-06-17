import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { ListPublishingDestinationsRequest, ListPublishingDestinationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPublishingDestinationsCommandInput extends ListPublishingDestinationsRequest {
}
export interface ListPublishingDestinationsCommandOutput extends ListPublishingDestinationsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of publishing destinations associated with the specified
 *         <code>dectectorId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListPublishingDestinationsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListPublishingDestinationsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ListPublishingDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPublishingDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListPublishingDestinationsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPublishingDestinationsCommand extends $Command<ListPublishingDestinationsCommandInput, ListPublishingDestinationsCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: ListPublishingDestinationsCommandInput;
    constructor(input: ListPublishingDestinationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPublishingDestinationsCommandInput, ListPublishingDestinationsCommandOutput>;
    private serialize;
    private deserialize;
}
