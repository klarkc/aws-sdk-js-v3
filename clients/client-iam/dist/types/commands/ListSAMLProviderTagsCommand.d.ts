import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListSAMLProviderTagsRequest, ListSAMLProviderTagsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSAMLProviderTagsCommandInput extends ListSAMLProviderTagsRequest {
}
export interface ListSAMLProviderTagsCommandOutput extends ListSAMLProviderTagsResponse, __MetadataBearer {
}
/**
 * <p>Lists the tags that are attached to the specified Security Assertion Markup Language
 *       (SAML) identity provider. The returned list of tags is sorted by tag key. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based
 *       federation</a>.</p>
 *          <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListSAMLProviderTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListSAMLProviderTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListSAMLProviderTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSAMLProviderTagsCommandInput} for command's `input` shape.
 * @see {@link ListSAMLProviderTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSAMLProviderTagsCommand extends $Command<ListSAMLProviderTagsCommandInput, ListSAMLProviderTagsCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListSAMLProviderTagsCommandInput;
    constructor(input: ListSAMLProviderTagsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSAMLProviderTagsCommandInput, ListSAMLProviderTagsCommandOutput>;
    private serialize;
    private deserialize;
}
