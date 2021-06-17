import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { AssociateWebsiteAuthorizationProviderRequest, AssociateWebsiteAuthorizationProviderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateWebsiteAuthorizationProviderCommandInput extends AssociateWebsiteAuthorizationProviderRequest {
}
export interface AssociateWebsiteAuthorizationProviderCommandOutput extends AssociateWebsiteAuthorizationProviderResponse, __MetadataBearer {
}
/**
 * <p>Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, AssociateWebsiteAuthorizationProviderCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, AssociateWebsiteAuthorizationProviderCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new AssociateWebsiteAuthorizationProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateWebsiteAuthorizationProviderCommandInput} for command's `input` shape.
 * @see {@link AssociateWebsiteAuthorizationProviderCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateWebsiteAuthorizationProviderCommand extends $Command<AssociateWebsiteAuthorizationProviderCommandInput, AssociateWebsiteAuthorizationProviderCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: AssociateWebsiteAuthorizationProviderCommandInput;
    constructor(input: AssociateWebsiteAuthorizationProviderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateWebsiteAuthorizationProviderCommandInput, AssociateWebsiteAuthorizationProviderCommandOutput>;
    private serialize;
    private deserialize;
}
