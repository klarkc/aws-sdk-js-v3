import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { TerminateProvisionedProductInput, TerminateProvisionedProductOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TerminateProvisionedProductCommandInput extends TerminateProvisionedProductInput {
}
export interface TerminateProvisionedProductCommandOutput extends TerminateProvisionedProductOutput, __MetadataBearer {
}
/**
 * <p>Terminates the specified provisioned product.</p>
 *          <p>This operation does not delete any records associated with the provisioned product.</p>
 *          <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, TerminateProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, TerminateProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new TerminateProvisionedProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link TerminateProvisionedProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TerminateProvisionedProductCommand extends $Command<TerminateProvisionedProductCommandInput, TerminateProvisionedProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: TerminateProvisionedProductCommandInput;
    constructor(input: TerminateProvisionedProductCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateProvisionedProductCommandInput, TerminateProvisionedProductCommandOutput>;
    private serialize;
    private deserialize;
}
