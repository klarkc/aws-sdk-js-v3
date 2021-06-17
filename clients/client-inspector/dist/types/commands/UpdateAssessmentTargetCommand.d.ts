import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { UpdateAssessmentTargetRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAssessmentTargetCommandInput extends UpdateAssessmentTargetRequest {
}
export interface UpdateAssessmentTargetCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates the assessment target that is specified by the ARN of the assessment
 *          target.</p>
 *          <p>If resourceGroupArn is not specified, all EC2 instances in the current AWS account
 *          and region are included in the assessment target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, UpdateAssessmentTargetCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, UpdateAssessmentTargetCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new UpdateAssessmentTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssessmentTargetCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentTargetCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAssessmentTargetCommand extends $Command<UpdateAssessmentTargetCommandInput, UpdateAssessmentTargetCommandOutput, InspectorClientResolvedConfig> {
    readonly input: UpdateAssessmentTargetCommandInput;
    constructor(input: UpdateAssessmentTargetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAssessmentTargetCommandInput, UpdateAssessmentTargetCommandOutput>;
    private serialize;
    private deserialize;
}
