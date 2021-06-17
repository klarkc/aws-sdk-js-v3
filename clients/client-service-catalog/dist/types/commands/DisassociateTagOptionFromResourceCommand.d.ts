import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DisassociateTagOptionFromResourceInput, DisassociateTagOptionFromResourceOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateTagOptionFromResourceCommandInput extends DisassociateTagOptionFromResourceInput {
}
export interface DisassociateTagOptionFromResourceCommandOutput extends DisassociateTagOptionFromResourceOutput, __MetadataBearer {
}
/**
 * <p>Disassociates the specified TagOption from the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociateTagOptionFromResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisassociateTagOptionFromResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DisassociateTagOptionFromResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTagOptionFromResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateTagOptionFromResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateTagOptionFromResourceCommand extends $Command<DisassociateTagOptionFromResourceCommandInput, DisassociateTagOptionFromResourceCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DisassociateTagOptionFromResourceCommandInput;
    constructor(input: DisassociateTagOptionFromResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateTagOptionFromResourceCommandInput, DisassociateTagOptionFromResourceCommandOutput>;
    private serialize;
    private deserialize;
}
