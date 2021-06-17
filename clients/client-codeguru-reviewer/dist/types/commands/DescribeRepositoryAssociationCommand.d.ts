import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { DescribeRepositoryAssociationRequest, DescribeRepositoryAssociationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRepositoryAssociationCommandInput extends DescribeRepositoryAssociationRequest {
}
export interface DescribeRepositoryAssociationCommandOutput extends DescribeRepositoryAssociationResponse, __MetadataBearer {
}
/**
 * <p>
 *          Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">
 *                <code>RepositoryAssociation</code>
 *             </a> object
 *          that contains information about the requested repository association.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, DescribeRepositoryAssociationCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, DescribeRepositoryAssociationCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new DescribeRepositoryAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRepositoryAssociationCommandInput} for command's `input` shape.
 * @see {@link DescribeRepositoryAssociationCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRepositoryAssociationCommand extends $Command<DescribeRepositoryAssociationCommandInput, DescribeRepositoryAssociationCommandOutput, CodeGuruReviewerClientResolvedConfig> {
    readonly input: DescribeRepositoryAssociationCommandInput;
    constructor(input: DescribeRepositoryAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruReviewerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRepositoryAssociationCommandInput, DescribeRepositoryAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
