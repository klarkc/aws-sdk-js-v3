import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { DetectEntitiesV2Request, DetectEntitiesV2Response } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetectEntitiesV2CommandInput extends DetectEntitiesV2Request {
}
export interface DetectEntitiesV2CommandOutput extends DetectEntitiesV2Response, __MetadataBearer {
}
/**
 * <p>Inspects the clinical text for a variety of medical entities and returns specific
 *       information about them such as entity category, location, and confidence score on that
 *       information. Amazon Comprehend Medical only detects medical entities in English language
 *       texts.</p>
 *          <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a>
 *       operation. This new action uses a different model for determining the entities in your medical
 *       text and changes the way that some entities are returned in the output. You should use the
 *         <code>DetectEntitiesV2</code> operation in all new applications.</p>
 *          <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and
 *         <code>Direction</code> entities as attributes instead of types. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DetectEntitiesV2Command } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DetectEntitiesV2Command } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new DetectEntitiesV2Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectEntitiesV2CommandInput} for command's `input` shape.
 * @see {@link DetectEntitiesV2CommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetectEntitiesV2Command extends $Command<DetectEntitiesV2CommandInput, DetectEntitiesV2CommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: DetectEntitiesV2CommandInput;
    constructor(input: DetectEntitiesV2CommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectEntitiesV2CommandInput, DetectEntitiesV2CommandOutput>;
    private serialize;
    private deserialize;
}
