import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { AssociateTagOptionWithResourceInput, AssociateTagOptionWithResourceOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateTagOptionWithResourceCommandInput extends AssociateTagOptionWithResourceInput {
}
export interface AssociateTagOptionWithResourceCommandOutput extends AssociateTagOptionWithResourceOutput, __MetadataBearer {
}
/**
 * <p>Associate the specified TagOption with the specified portfolio or product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AssociateTagOptionWithResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AssociateTagOptionWithResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new AssociateTagOptionWithResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTagOptionWithResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateTagOptionWithResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateTagOptionWithResourceCommand extends $Command<AssociateTagOptionWithResourceCommandInput, AssociateTagOptionWithResourceCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: AssociateTagOptionWithResourceCommandInput;
    constructor(input: AssociateTagOptionWithResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateTagOptionWithResourceCommandInput, AssociateTagOptionWithResourceCommandOutput>;
    private serialize;
    private deserialize;
}
