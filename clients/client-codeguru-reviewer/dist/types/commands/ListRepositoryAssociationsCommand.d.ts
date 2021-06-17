import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { ListRepositoryAssociationsRequest, ListRepositoryAssociationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRepositoryAssociationsCommandInput extends ListRepositoryAssociationsRequest {
}
export interface ListRepositoryAssociationsCommandOutput extends ListRepositoryAssociationsResponse, __MetadataBearer {
}
/**
 * <p>
 *          Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">
 *                <code>RepositoryAssociationSummary</code>
 *             </a> objects that
 *          contain summary information about a repository association. You can filter the returned list by
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">
 *                <code>ProviderType</code>
 *             </a>,
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">
 *                <code>Name</code>
 *             </a>,
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">
 *                <code>State</code>
 *             </a>, and
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">
 *                <code>Owner</code>
 *             </a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, ListRepositoryAssociationsCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, ListRepositoryAssociationsCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new ListRepositoryAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRepositoryAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListRepositoryAssociationsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRepositoryAssociationsCommand extends $Command<ListRepositoryAssociationsCommandInput, ListRepositoryAssociationsCommandOutput, CodeGuruReviewerClientResolvedConfig> {
    readonly input: ListRepositoryAssociationsCommandInput;
    constructor(input: ListRepositoryAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruReviewerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRepositoryAssociationsCommandInput, ListRepositoryAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
