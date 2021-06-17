import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeRecordInput, DescribeRecordOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRecordCommandInput extends DescribeRecordInput {
}
export interface DescribeRecordCommandOutput extends DescribeRecordOutput, __MetadataBearer {
}
/**
 * <p>Gets information about the specified request operation.</p>
 *          <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>,
 *          <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>).
 *       </p>
 *          <note>
 *             <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner
 *       will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to
 *       use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeRecordCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeRecordCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRecordCommandInput} for command's `input` shape.
 * @see {@link DescribeRecordCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRecordCommand extends $Command<DescribeRecordCommandInput, DescribeRecordCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeRecordCommandInput;
    constructor(input: DescribeRecordCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRecordCommandInput, DescribeRecordCommandOutput>;
    private serialize;
    private deserialize;
}
