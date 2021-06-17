import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeCopyProductStatusInput, DescribeCopyProductStatusOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCopyProductStatusCommandInput extends DescribeCopyProductStatusInput {
}
export interface DescribeCopyProductStatusCommandOutput extends DescribeCopyProductStatusOutput, __MetadataBearer {
}
/**
 * <p>Gets the status of the specified copy product operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeCopyProductStatusCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeCopyProductStatusCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeCopyProductStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCopyProductStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeCopyProductStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCopyProductStatusCommand extends $Command<DescribeCopyProductStatusCommandInput, DescribeCopyProductStatusCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeCopyProductStatusCommandInput;
    constructor(input: DescribeCopyProductStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCopyProductStatusCommandInput, DescribeCopyProductStatusCommandOutput>;
    private serialize;
    private deserialize;
}
