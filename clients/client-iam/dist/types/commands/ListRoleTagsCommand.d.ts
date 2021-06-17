import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListRoleTagsRequest, ListRoleTagsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRoleTagsCommandInput extends ListRoleTagsRequest {
}
export interface ListRoleTagsCommandOutput extends ListRoleTagsResponse, __MetadataBearer {
}
/**
 * <p>Lists the tags that are attached to the specified role. The returned list of tags is
 *       sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListRoleTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListRoleTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListRoleTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoleTagsCommandInput} for command's `input` shape.
 * @see {@link ListRoleTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRoleTagsCommand extends $Command<ListRoleTagsCommandInput, ListRoleTagsCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListRoleTagsCommandInput;
    constructor(input: ListRoleTagsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRoleTagsCommandInput, ListRoleTagsCommandOutput>;
    private serialize;
    private deserialize;
}
