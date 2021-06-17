import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";
import { StartDocumentAnalysisRequest, StartDocumentAnalysisResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartDocumentAnalysisCommandInput extends StartDocumentAnalysisRequest {
}
export interface StartDocumentAnalysisCommandOutput extends StartDocumentAnalysisResponse, __MetadataBearer {
}
/**
 * <p>Starts the asynchronous analysis of an input document for relationships between detected
 *          items such as key-value pairs, tables, and selection elements.</p>
 *
 *          <p>
 *             <code>StartDocumentAnalysis</code> can analyze text in documents that are in JPEG, PNG, and PDF format. The
 *          documents are stored in an Amazon S3 bucket. Use <a>DocumentLocation</a> to specify the bucket name and file name
 *          of the document.
 *          </p>
 *          <p>
 *             <code>StartDocumentAnalysis</code> returns a job identifier
 *             (<code>JobId</code>) that you use to get the results of the operation. When text
 *          analysis is finished, Amazon Textract publishes a completion status to the Amazon Simple Notification Service (Amazon SNS)
 *          topic that you specify in <code>NotificationChannel</code>. To get the results of the text
 *          analysis operation, first check that the status value published to the Amazon SNS topic is
 *             <code>SUCCEEDED</code>. If so, call <a>GetDocumentAnalysis</a>, and pass
 *          the job identifier (<code>JobId</code>) from the initial call to
 *             <code>StartDocumentAnalysis</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works-analyzing.html">Document Text Analysis</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TextractClient, StartDocumentAnalysisCommand } from "@aws-sdk/client-textract"; // ES Modules import
 * // const { TextractClient, StartDocumentAnalysisCommand } = require("@aws-sdk/client-textract"); // CommonJS import
 * const client = new TextractClient(config);
 * const command = new StartDocumentAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDocumentAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartDocumentAnalysisCommandOutput} for command's `response` shape.
 * @see {@link TextractClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartDocumentAnalysisCommand extends $Command<StartDocumentAnalysisCommandInput, StartDocumentAnalysisCommandOutput, TextractClientResolvedConfig> {
    readonly input: StartDocumentAnalysisCommandInput;
    constructor(input: StartDocumentAnalysisCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TextractClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDocumentAnalysisCommandInput, StartDocumentAnalysisCommandOutput>;
    private serialize;
    private deserialize;
}
