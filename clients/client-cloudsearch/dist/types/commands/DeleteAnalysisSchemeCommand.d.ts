import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DeleteAnalysisSchemeRequest, DeleteAnalysisSchemeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAnalysisSchemeCommandInput extends DeleteAnalysisSchemeRequest {
}
export interface DeleteAnalysisSchemeCommandOutput extends DeleteAnalysisSchemeResponse, __MetadataBearer {
}
/**
 * <p>Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DeleteAnalysisSchemeCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DeleteAnalysisSchemeCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DeleteAnalysisSchemeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAnalysisSchemeCommandInput} for command's `input` shape.
 * @see {@link DeleteAnalysisSchemeCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAnalysisSchemeCommand extends $Command<DeleteAnalysisSchemeCommandInput, DeleteAnalysisSchemeCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DeleteAnalysisSchemeCommandInput;
    constructor(input: DeleteAnalysisSchemeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAnalysisSchemeCommandInput, DeleteAnalysisSchemeCommandOutput>;
    private serialize;
    private deserialize;
}
