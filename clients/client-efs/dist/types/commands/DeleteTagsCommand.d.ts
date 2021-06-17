import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DeleteTagsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTagsCommandInput extends DeleteTagsRequest {
}
export interface DeleteTagsCommandOutput extends __MetadataBearer {
}
/**
 * @deprecated
 *
 * <note>
 *             <p>DEPRECATED - DeleteTags is deprecated and not maintained. Please use the
 *        API action to remove tags from EFS resources.</p>
 *          </note>
 *          <p>Deletes the specified tags from a file system. If the <code>DeleteTags</code> request
 *       includes a tag key that doesn't exist, Amazon EFS ignores it and doesn't cause an
 *       error. For more information about tags and related restrictions, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Tag Restrictions</a> in the
 *         <i>AWS Billing and Cost Management User Guide</i>.</p>
 *
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DeleteTags</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DeleteTagsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DeleteTagsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DeleteTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTagsCommandInput} for command's `input` shape.
 * @see {@link DeleteTagsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTagsCommand extends $Command<DeleteTagsCommandInput, DeleteTagsCommandOutput, EFSClientResolvedConfig> {
    readonly input: DeleteTagsCommandInput;
    constructor(input: DeleteTagsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EFSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTagsCommandInput, DeleteTagsCommandOutput>;
    private serialize;
    private deserialize;
}
