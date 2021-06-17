import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListInstanceProfileTagsRequest, ListInstanceProfileTagsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListInstanceProfileTagsCommandInput extends ListInstanceProfileTagsRequest {
}
export interface ListInstanceProfileTagsCommandOutput extends ListInstanceProfileTagsResponse, __MetadataBearer {
}
/**
 * <p>Lists the tags that are attached to the specified IAM instance profile. The returned list of tags is sorted by tag key.
 *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListInstanceProfileTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListInstanceProfileTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListInstanceProfileTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceProfileTagsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceProfileTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListInstanceProfileTagsCommand extends $Command<ListInstanceProfileTagsCommandInput, ListInstanceProfileTagsCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListInstanceProfileTagsCommandInput;
    constructor(input: ListInstanceProfileTagsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInstanceProfileTagsCommandInput, ListInstanceProfileTagsCommandOutput>;
    private serialize;
    private deserialize;
}
