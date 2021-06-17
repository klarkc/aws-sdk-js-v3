import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { RevokeDomainAccessRequest, RevokeDomainAccessResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RevokeDomainAccessCommandInput extends RevokeDomainAccessRequest {
}
export interface RevokeDomainAccessCommandOutput extends RevokeDomainAccessResponse, __MetadataBearer {
}
/**
 * <p>Moves a domain to INACTIVE status if it was in the ACTIVE status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, RevokeDomainAccessCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, RevokeDomainAccessCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new RevokeDomainAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeDomainAccessCommandInput} for command's `input` shape.
 * @see {@link RevokeDomainAccessCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RevokeDomainAccessCommand extends $Command<RevokeDomainAccessCommandInput, RevokeDomainAccessCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: RevokeDomainAccessCommandInput;
    constructor(input: RevokeDomainAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeDomainAccessCommandInput, RevokeDomainAccessCommandOutput>;
    private serialize;
    private deserialize;
}
