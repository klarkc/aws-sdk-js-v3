import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { TagResourceRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TagResourceCommandInput extends TagResourceRequest {
}
export interface TagResourceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Attaches one or more tags, each consisting of a key name and a value, to the specified
 *       secret. Tags are part of the secret's overall metadata, and are not associated with any
 *       specific version of the secret. This operation only appends tags to the existing list of tags.
 *       To remove tags, you must use <a>UntagResource</a>.</p>
 *          <p>The following basic restrictions apply to tags:</p>
 *         <ul>
 *             <li>
 *                <p>Maximum number of tags per secret—50</p>
 *             </li>
 *             <li>
 *                <p>Maximum key length—127 Unicode characters in UTF-8</p>
 *             </li>
 *             <li>
 *                <p>Maximum value length—255 Unicode characters in UTF-8</p>
 *             </li>
 *             <li>
 *                <p>Tag keys and values are case sensitive.</p>
 *             </li>
 *             <li>
 *                <p>Do not use the <code>aws:</code> prefix in your tag names or values because AWS reserves it
 *             for AWS use. You can't edit or delete tag names or values with this
 *               prefix. Tags with this prefix do not count against your tags per secret limit.</p>
 *             </li>
 *             <li>
 *                <p>If you use your tagging schema across multiple services and resources,
 *               remember other services might have restrictions on allowed characters. Generally
 *               allowed characters: letters, spaces, and numbers representable in UTF-8, plus the
 *               following special characters: + - = . _ : / @.</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>If you use tags as part of your security strategy, then adding or removing a tag can
 *         change permissions. If successfully completing this operation would result in you losing
 *         your permissions for this secret, then the operation is blocked and returns an Access Denied
 *         error.</p>
 *          </important>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:TagResource</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To remove one or more tags from the collection attached to a secret, use <a>UntagResource</a>.</p>
 *             </li>
 *             <li>
 *                <p>To view the list of tags attached to a secret, use <a>DescribeSecret</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, TagResourceCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, TagResourceCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TagResourceCommand extends $Command<TagResourceCommandInput, TagResourceCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: TagResourceCommandInput;
    constructor(input: TagResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagResourceCommandInput, TagResourceCommandOutput>;
    private serialize;
    private deserialize;
}
