import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeServiceActionInput, DescribeServiceActionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeServiceActionCommandInput extends DescribeServiceActionInput {
}
export interface DescribeServiceActionCommandOutput extends DescribeServiceActionOutput, __MetadataBearer {
}
/**
 * <p>Describes a self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeServiceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceActionCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeServiceActionCommand extends $Command<DescribeServiceActionCommandInput, DescribeServiceActionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeServiceActionCommandInput;
    constructor(input: DescribeServiceActionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeServiceActionCommandInput, DescribeServiceActionCommandOutput>;
    private serialize;
    private deserialize;
}
