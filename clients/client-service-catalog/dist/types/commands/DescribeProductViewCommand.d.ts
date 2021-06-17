import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeProductViewInput, DescribeProductViewOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeProductViewCommandInput extends DescribeProductViewInput {
}
export interface DescribeProductViewCommandOutput extends DescribeProductViewOutput, __MetadataBearer {
}
/**
 * <p>Gets information about the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProductViewCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProductViewCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeProductViewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProductViewCommandInput} for command's `input` shape.
 * @see {@link DescribeProductViewCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeProductViewCommand extends $Command<DescribeProductViewCommandInput, DescribeProductViewCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeProductViewCommandInput;
    constructor(input: DescribeProductViewCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProductViewCommandInput, DescribeProductViewCommandOutput>;
    private serialize;
    private deserialize;
}
