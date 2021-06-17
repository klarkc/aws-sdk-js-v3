import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DeleteAssessmentTargetRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAssessmentTargetCommandInput extends DeleteAssessmentTargetRequest {
}
export interface DeleteAssessmentTargetCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the assessment target that is specified by the ARN of the assessment
 *          target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DeleteAssessmentTargetCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DeleteAssessmentTargetCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DeleteAssessmentTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssessmentTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentTargetCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAssessmentTargetCommand extends $Command<DeleteAssessmentTargetCommandInput, DeleteAssessmentTargetCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DeleteAssessmentTargetCommandInput;
    constructor(input: DeleteAssessmentTargetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAssessmentTargetCommandInput, DeleteAssessmentTargetCommandOutput>;
    private serialize;
    private deserialize;
}
