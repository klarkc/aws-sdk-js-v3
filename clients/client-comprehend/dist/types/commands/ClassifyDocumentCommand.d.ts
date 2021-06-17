import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ClassifyDocumentRequest, ClassifyDocumentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ClassifyDocumentCommandInput extends ClassifyDocumentRequest {
}
export interface ClassifyDocumentCommandOutput extends ClassifyDocumentResponse, __MetadataBearer {
}
/**
 * <p>Creates a new document classification request to analyze a single document in real-time,
 *       using a previously created and trained custom model and an endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ClassifyDocumentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ClassifyDocumentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ClassifyDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ClassifyDocumentCommandInput} for command's `input` shape.
 * @see {@link ClassifyDocumentCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ClassifyDocumentCommand extends $Command<ClassifyDocumentCommandInput, ClassifyDocumentCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ClassifyDocumentCommandInput;
    constructor(input: ClassifyDocumentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ClassifyDocumentCommandInput, ClassifyDocumentCommandOutput>;
    private serialize;
    private deserialize;
}
