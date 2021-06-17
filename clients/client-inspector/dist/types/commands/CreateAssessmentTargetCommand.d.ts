import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { CreateAssessmentTargetRequest, CreateAssessmentTargetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAssessmentTargetCommandInput extends CreateAssessmentTargetRequest {
}
export interface CreateAssessmentTargetCommandOutput extends CreateAssessmentTargetResponse, __MetadataBearer {
}
/**
 * <p>Creates a new assessment target using the ARN of the resource group that is generated
 *          by <a>CreateResourceGroup</a>. If resourceGroupArn is not specified, all EC2
 *          instances in the current AWS account and region are included in the assessment target. If
 *          the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and
 *          registers a service-linked role to grant Amazon Inspector access to AWS Services needed to
 *          perform security assessments. You can create up to 50 assessment targets per AWS account.
 *          You can run up to 500 concurrent agents per AWS account. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">
 *             Amazon Inspector Assessment Targets</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, CreateAssessmentTargetCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, CreateAssessmentTargetCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new CreateAssessmentTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssessmentTargetCommandInput} for command's `input` shape.
 * @see {@link CreateAssessmentTargetCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAssessmentTargetCommand extends $Command<CreateAssessmentTargetCommandInput, CreateAssessmentTargetCommandOutput, InspectorClientResolvedConfig> {
    readonly input: CreateAssessmentTargetCommandInput;
    constructor(input: CreateAssessmentTargetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAssessmentTargetCommandInput, CreateAssessmentTargetCommandOutput>;
    private serialize;
    private deserialize;
}
