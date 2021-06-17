import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListPolicyTagsRequest, ListPolicyTagsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPolicyTagsCommandInput extends ListPolicyTagsRequest {
}
export interface ListPolicyTagsCommandOutput extends ListPolicyTagsResponse, __MetadataBearer {
}
/**
 * <p>Lists the tags that are attached to the specified IAM customer managed policy.
 *       The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListPolicyTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListPolicyTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListPolicyTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPolicyTagsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPolicyTagsCommand extends $Command<ListPolicyTagsCommandInput, ListPolicyTagsCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListPolicyTagsCommandInput;
    constructor(input: ListPolicyTagsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPolicyTagsCommandInput, ListPolicyTagsCommandOutput>;
    private serialize;
    private deserialize;
}
