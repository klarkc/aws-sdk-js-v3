import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { ListPagesByEngagementRequest, ListPagesByEngagementResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPagesByEngagementCommandInput extends ListPagesByEngagementRequest {
}
export interface ListPagesByEngagementCommandOutput extends ListPagesByEngagementResult, __MetadataBearer {
}
/**
 * <p>Lists the engagements to contact channels that occurred by engaging a contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPagesByEngagementCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListPagesByEngagementCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ListPagesByEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPagesByEngagementCommandInput} for command's `input` shape.
 * @see {@link ListPagesByEngagementCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPagesByEngagementCommand extends $Command<ListPagesByEngagementCommandInput, ListPagesByEngagementCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: ListPagesByEngagementCommandInput;
    constructor(input: ListPagesByEngagementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPagesByEngagementCommandInput, ListPagesByEngagementCommandOutput>;
    private serialize;
    private deserialize;
}
