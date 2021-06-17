import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DefineAnalysisSchemeRequest, DefineAnalysisSchemeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DefineAnalysisSchemeCommandInput extends DefineAnalysisSchemeRequest {
}
export interface DefineAnalysisSchemeCommandOutput extends DefineAnalysisSchemeResponse, __MetadataBearer {
}
/**
 * <p>Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DefineAnalysisSchemeCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DefineAnalysisSchemeCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DefineAnalysisSchemeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DefineAnalysisSchemeCommandInput} for command's `input` shape.
 * @see {@link DefineAnalysisSchemeCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DefineAnalysisSchemeCommand extends $Command<DefineAnalysisSchemeCommandInput, DefineAnalysisSchemeCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DefineAnalysisSchemeCommandInput;
    constructor(input: DefineAnalysisSchemeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DefineAnalysisSchemeCommandInput, DefineAnalysisSchemeCommandOutput>;
    private serialize;
    private deserialize;
}
