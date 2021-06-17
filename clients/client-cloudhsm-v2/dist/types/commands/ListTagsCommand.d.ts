import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { ListTagsRequest, ListTagsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTagsCommandInput extends ListTagsRequest {
}
export interface ListTagsCommandOutput extends ListTagsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of tags for the specified AWS CloudHSM cluster.</p>
 *          <p>This is a paginated operation, which means that each response might contain only a
 *       subset of all the tags. When the response contains only a subset of tags, it includes a
 *       <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to
 *       get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null
 *       value), that means there are no more tags to get.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, ListTagsCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, ListTagsCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new ListTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsCommandInput} for command's `input` shape.
 * @see {@link ListTagsCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTagsCommand extends $Command<ListTagsCommandInput, ListTagsCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: ListTagsCommandInput;
    constructor(input: ListTagsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsCommandInput, ListTagsCommandOutput>;
    private serialize;
    private deserialize;
}
