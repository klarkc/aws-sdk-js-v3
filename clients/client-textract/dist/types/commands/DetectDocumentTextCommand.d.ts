import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";
import { DetectDocumentTextRequest, DetectDocumentTextResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetectDocumentTextCommandInput extends DetectDocumentTextRequest {
}
export interface DetectDocumentTextCommandOutput extends DetectDocumentTextResponse, __MetadataBearer {
}
/**
 * <p>Detects text in the input document. Amazon Textract can detect lines of text and the
 *          words that make up a line of text. The input document must be an image in JPEG or PNG
 *          format. <code>DetectDocumentText</code> returns the detected text in an array of <a>Block</a> objects. </p>
 *          <p>Each document page has as an associated <code>Block</code> of type PAGE. Each PAGE <code>Block</code> object
 *          is the parent of LINE <code>Block</code> objects that represent the lines of detected text on a page. A LINE <code>Block</code> object is
 *          a parent for each word that makes up the line. Words are represented by <code>Block</code> objects of type WORD.</p>
 *
 *          <p>
 *             <code>DetectDocumentText</code> is a synchronous operation. To analyze documents
 *          asynchronously, use <a>StartDocumentTextDetection</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-detecting.html">Document Text Detection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, DetectDocumentTextCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, DetectDocumentTextCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const command = new DetectDocumentTextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectDocumentTextCommandInput} for command's `input` shape.
 * @see {@link DetectDocumentTextCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetectDocumentTextCommand extends $Command<DetectDocumentTextCommandInput, DetectDocumentTextCommandOutput, TextractClientResolvedConfig> {
    readonly input: DetectDocumentTextCommandInput;
    constructor(input: DetectDocumentTextCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TextractClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectDocumentTextCommandInput, DetectDocumentTextCommandOutput>;
    private serialize;
    private deserialize;
}
