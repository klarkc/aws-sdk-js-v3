import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { ListPartnerEventSourcesRequest, ListPartnerEventSourcesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPartnerEventSourcesCommandInput extends ListPartnerEventSourcesRequest {
}
export interface ListPartnerEventSourcesCommandOutput extends ListPartnerEventSourcesResponse, __MetadataBearer {
}
/**
 * <p>An SaaS partner can use this operation to list all the partner event source names that
 *       they have created. This operation is not used by AWS customers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListPartnerEventSourcesCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListPartnerEventSourcesCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new ListPartnerEventSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPartnerEventSourcesCommandInput} for command's `input` shape.
 * @see {@link ListPartnerEventSourcesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPartnerEventSourcesCommand extends $Command<ListPartnerEventSourcesCommandInput, ListPartnerEventSourcesCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: ListPartnerEventSourcesCommandInput;
    constructor(input: ListPartnerEventSourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPartnerEventSourcesCommandInput, ListPartnerEventSourcesCommandOutput>;
    private serialize;
    private deserialize;
}
