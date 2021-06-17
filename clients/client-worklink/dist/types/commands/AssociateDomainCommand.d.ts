import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { AssociateDomainRequest, AssociateDomainResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateDomainCommandInput extends AssociateDomainRequest {
}
export interface AssociateDomainCommandOutput extends AssociateDomainResponse, __MetadataBearer {
}
/**
 * <p>Specifies a domain to be associated to Amazon WorkLink.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, AssociateDomainCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, AssociateDomainCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new AssociateDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDomainCommandInput} for command's `input` shape.
 * @see {@link AssociateDomainCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateDomainCommand extends $Command<AssociateDomainCommandInput, AssociateDomainCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: AssociateDomainCommandInput;
    constructor(input: AssociateDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateDomainCommandInput, AssociateDomainCommandOutput>;
    private serialize;
    private deserialize;
}
