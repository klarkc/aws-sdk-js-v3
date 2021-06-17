import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { DisassociateWebsiteAuthorizationProviderRequest, DisassociateWebsiteAuthorizationProviderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateWebsiteAuthorizationProviderCommandInput extends DisassociateWebsiteAuthorizationProviderRequest {
}
export interface DisassociateWebsiteAuthorizationProviderCommandOutput extends DisassociateWebsiteAuthorizationProviderResponse, __MetadataBearer {
}
/**
 * <p>Disassociates a website authorization provider from a specified fleet. After the
 *             disassociation, users can't load any associated websites that require this authorization
 *             provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DisassociateWebsiteAuthorizationProviderCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DisassociateWebsiteAuthorizationProviderCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DisassociateWebsiteAuthorizationProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateWebsiteAuthorizationProviderCommandInput} for command's `input` shape.
 * @see {@link DisassociateWebsiteAuthorizationProviderCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateWebsiteAuthorizationProviderCommand extends $Command<DisassociateWebsiteAuthorizationProviderCommandInput, DisassociateWebsiteAuthorizationProviderCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: DisassociateWebsiteAuthorizationProviderCommandInput;
    constructor(input: DisassociateWebsiteAuthorizationProviderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateWebsiteAuthorizationProviderCommandInput, DisassociateWebsiteAuthorizationProviderCommandOutput>;
    private serialize;
    private deserialize;
}
