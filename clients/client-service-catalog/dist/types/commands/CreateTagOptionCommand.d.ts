import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CreateTagOptionInput, CreateTagOptionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTagOptionCommandInput extends CreateTagOptionInput {
}
export interface CreateTagOptionCommandOutput extends CreateTagOptionOutput, __MetadataBearer {
}
/**
 * <p>Creates a TagOption.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateTagOptionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateTagOptionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreateTagOptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTagOptionCommandInput} for command's `input` shape.
 * @see {@link CreateTagOptionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTagOptionCommand extends $Command<CreateTagOptionCommandInput, CreateTagOptionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: CreateTagOptionCommandInput;
    constructor(input: CreateTagOptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTagOptionCommandInput, CreateTagOptionCommandOutput>;
    private serialize;
    private deserialize;
}
