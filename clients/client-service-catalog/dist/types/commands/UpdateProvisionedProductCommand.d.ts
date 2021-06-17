import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { UpdateProvisionedProductInput, UpdateProvisionedProductOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateProvisionedProductCommandInput extends UpdateProvisionedProductInput {
}
export interface UpdateProvisionedProductCommandOutput extends UpdateProvisionedProductOutput, __MetadataBearer {
}
/**
 * <p>Requests updates to the configuration of the specified provisioned product.</p>
 *          <p>If there are tags associated with the object, they cannot be updated or added.
 *          Depending on the specific updates requested, this operation can update with no
 *          interruption, with some interruption, or replace the provisioned product entirely.</p>
 *          <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateProvisionedProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateProvisionedProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdateProvisionedProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProvisionedProductCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisionedProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateProvisionedProductCommand extends $Command<UpdateProvisionedProductCommandInput, UpdateProvisionedProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: UpdateProvisionedProductCommandInput;
    constructor(input: UpdateProvisionedProductCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateProvisionedProductCommandInput, UpdateProvisionedProductCommandOutput>;
    private serialize;
    private deserialize;
}
