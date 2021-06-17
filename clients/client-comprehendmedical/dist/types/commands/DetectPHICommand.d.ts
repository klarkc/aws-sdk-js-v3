import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { DetectPHIRequest, DetectPHIResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetectPHICommandInput extends DetectPHIRequest {
}
export interface DetectPHICommandOutput extends DetectPHIResponse, __MetadataBearer {
}
/**
 * <p> Inspects the clinical text for protected health information (PHI) entities and returns
 *       the entity category, location, and confidence score for each entity. Amazon Comprehend Medical
 *       only detects entities in English language texts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DetectPHICommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DetectPHICommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new DetectPHICommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectPHICommandInput} for command's `input` shape.
 * @see {@link DetectPHICommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetectPHICommand extends $Command<DetectPHICommandInput, DetectPHICommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: DetectPHICommandInput;
    constructor(input: DetectPHICommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectPHICommandInput, DetectPHICommandOutput>;
    private serialize;
    private deserialize;
}
