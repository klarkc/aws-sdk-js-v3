import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { CreateAssessmentTemplateRequest, CreateAssessmentTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAssessmentTemplateCommandInput extends CreateAssessmentTemplateRequest {
}
export interface CreateAssessmentTemplateCommandOutput extends CreateAssessmentTemplateResponse, __MetadataBearer {
}
/**
 * <p>Creates an assessment template for the assessment target that is specified by the ARN
 *          of the assessment target. If the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and
 *          registers a service-linked role to grant Amazon Inspector access to AWS Services needed to
 *          perform security assessments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, CreateAssessmentTemplateCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, CreateAssessmentTemplateCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new CreateAssessmentTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssessmentTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateAssessmentTemplateCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAssessmentTemplateCommand extends $Command<CreateAssessmentTemplateCommandInput, CreateAssessmentTemplateCommandOutput, InspectorClientResolvedConfig> {
    readonly input: CreateAssessmentTemplateCommandInput;
    constructor(input: CreateAssessmentTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAssessmentTemplateCommandInput, CreateAssessmentTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
