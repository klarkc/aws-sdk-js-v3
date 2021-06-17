import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DeleteAssessmentRunRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAssessmentRunCommandInput extends DeleteAssessmentRunRequest {
}
export interface DeleteAssessmentRunCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the assessment run that is specified by the ARN of the assessment
 *          run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DeleteAssessmentRunCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DeleteAssessmentRunCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DeleteAssessmentRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link DeleteAssessmentRunCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAssessmentRunCommand extends $Command<DeleteAssessmentRunCommandInput, DeleteAssessmentRunCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DeleteAssessmentRunCommandInput;
    constructor(input: DeleteAssessmentRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAssessmentRunCommandInput, DeleteAssessmentRunCommandOutput>;
    private serialize;
    private deserialize;
}
