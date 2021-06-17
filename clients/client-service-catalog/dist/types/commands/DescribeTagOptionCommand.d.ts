import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeTagOptionInput, DescribeTagOptionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTagOptionCommandInput extends DescribeTagOptionInput {
}
export interface DescribeTagOptionCommandOutput extends DescribeTagOptionOutput, __MetadataBearer {
}
/**
 * <p>Gets information about the specified TagOption.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeTagOptionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeTagOptionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeTagOptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTagOptionCommandInput} for command's `input` shape.
 * @see {@link DescribeTagOptionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTagOptionCommand extends $Command<DescribeTagOptionCommandInput, DescribeTagOptionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeTagOptionCommandInput;
    constructor(input: DescribeTagOptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTagOptionCommandInput, DescribeTagOptionCommandOutput>;
    private serialize;
    private deserialize;
}
