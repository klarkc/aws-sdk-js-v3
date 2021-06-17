import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { DisassociateDomainRequest, DisassociateDomainResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateDomainCommandInput extends DisassociateDomainRequest {
}
export interface DisassociateDomainCommandOutput extends DisassociateDomainResponse, __MetadataBearer {
}
/**
 * <p>Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DisassociateDomainCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DisassociateDomainCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DisassociateDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDomainCommandInput} for command's `input` shape.
 * @see {@link DisassociateDomainCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateDomainCommand extends $Command<DisassociateDomainCommandInput, DisassociateDomainCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: DisassociateDomainCommandInput;
    constructor(input: DisassociateDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateDomainCommandInput, DisassociateDomainCommandOutput>;
    private serialize;
    private deserialize;
}
