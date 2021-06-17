import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ListResourceTagsRequest, ListResourceTagsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResourceTagsCommandInput extends ListResourceTagsRequest {
}
export interface ListResourceTagsCommandOutput extends ListResourceTagsResponse, __MetadataBearer {
}
/**
 * <p>Returns all tags on the specified customer master key (CMK).</p>
 *          <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS resources</a> in
 *       the <i>Amazon Web Services General Reference</i>. For information about using
 *       tags in AWS KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html">Tagging
 *         keys</a>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a CMK in a different AWS account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListResourceTags</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>TagResource</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListResourceTagsCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListResourceTagsCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new ListResourceTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceTagsCommandInput} for command's `input` shape.
 * @see {@link ListResourceTagsCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResourceTagsCommand extends $Command<ListResourceTagsCommandInput, ListResourceTagsCommandOutput, KMSClientResolvedConfig> {
    readonly input: ListResourceTagsCommandInput;
    constructor(input: ListResourceTagsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceTagsCommandInput, ListResourceTagsCommandOutput>;
    private serialize;
    private deserialize;
}
