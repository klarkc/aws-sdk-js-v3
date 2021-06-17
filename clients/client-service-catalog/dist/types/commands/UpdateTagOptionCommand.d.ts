import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { UpdateTagOptionInput, UpdateTagOptionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateTagOptionCommandInput extends UpdateTagOptionInput {
}
export interface UpdateTagOptionCommandOutput extends UpdateTagOptionOutput, __MetadataBearer {
}
/**
 * <p>Updates the specified TagOption.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateTagOptionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateTagOptionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdateTagOptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTagOptionCommandInput} for command's `input` shape.
 * @see {@link UpdateTagOptionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTagOptionCommand extends $Command<UpdateTagOptionCommandInput, UpdateTagOptionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: UpdateTagOptionCommandInput;
    constructor(input: UpdateTagOptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTagOptionCommandInput, UpdateTagOptionCommandOutput>;
    private serialize;
    private deserialize;
}
