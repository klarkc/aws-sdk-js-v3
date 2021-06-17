import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeAnalysisSchemesRequest, DescribeAnalysisSchemesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAnalysisSchemesCommandInput extends DescribeAnalysisSchemesRequest {
}
export interface DescribeAnalysisSchemesCommandOutput extends DescribeAnalysisSchemesResponse, __MetadataBearer {
}
/**
 * <p>Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name.  By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes.  For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeAnalysisSchemesCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeAnalysisSchemesCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DescribeAnalysisSchemesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAnalysisSchemesCommandInput} for command's `input` shape.
 * @see {@link DescribeAnalysisSchemesCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAnalysisSchemesCommand extends $Command<DescribeAnalysisSchemesCommandInput, DescribeAnalysisSchemesCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DescribeAnalysisSchemesCommandInput;
    constructor(input: DescribeAnalysisSchemesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAnalysisSchemesCommandInput, DescribeAnalysisSchemesCommandOutput>;
    private serialize;
    private deserialize;
}
