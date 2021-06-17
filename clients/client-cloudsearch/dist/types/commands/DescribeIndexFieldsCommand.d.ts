import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeIndexFieldsRequest, DescribeIndexFieldsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeIndexFieldsCommandInput extends DescribeIndexFieldsRequest {
}
export interface DescribeIndexFieldsCommandOutput extends DescribeIndexFieldsResponse, __MetadataBearer {
}
/**
 * <p>Gets information about the index fields configured for the search domain.
 *       Can be limited to specific fields by name.  By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information,
 *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeIndexFieldsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeIndexFieldsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DescribeIndexFieldsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIndexFieldsCommandInput} for command's `input` shape.
 * @see {@link DescribeIndexFieldsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeIndexFieldsCommand extends $Command<DescribeIndexFieldsCommandInput, DescribeIndexFieldsCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DescribeIndexFieldsCommandInput;
    constructor(input: DescribeIndexFieldsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIndexFieldsCommandInput, DescribeIndexFieldsCommandOutput>;
    private serialize;
    private deserialize;
}
