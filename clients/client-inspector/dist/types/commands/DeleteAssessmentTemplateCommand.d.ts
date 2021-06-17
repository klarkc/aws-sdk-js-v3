import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DeleteAssessmentTemplateRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAssessmentTemplateCommandInput extends DeleteAssessmentTemplateRequest {
}
export interface DeleteAssessmentTemplateCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the assessment template that is specified by the ARN of the assessment
 *          template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DeleteAssessmentTemplateCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DeleteAssessmentTemplateCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DeleteAssessmentTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssessmentTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentTemplateCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAssessmentTemplateCommand extends $Command<DeleteAssessmentTemplateCommandInput, DeleteAssessmentTemplateCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DeleteAssessmentTemplateCommandInput;
    constructor(input: DeleteAssessmentTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAssessmentTemplateCommandInput, DeleteAssessmentTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
