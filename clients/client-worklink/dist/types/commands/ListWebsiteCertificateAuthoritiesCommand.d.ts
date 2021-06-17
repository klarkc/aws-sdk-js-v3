import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { ListWebsiteCertificateAuthoritiesRequest, ListWebsiteCertificateAuthoritiesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListWebsiteCertificateAuthoritiesCommandInput extends ListWebsiteCertificateAuthoritiesRequest {
}
export interface ListWebsiteCertificateAuthoritiesCommandOutput extends ListWebsiteCertificateAuthoritiesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a list of certificate authorities added for the current account and
 *             Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, ListWebsiteCertificateAuthoritiesCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, ListWebsiteCertificateAuthoritiesCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new ListWebsiteCertificateAuthoritiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWebsiteCertificateAuthoritiesCommandInput} for command's `input` shape.
 * @see {@link ListWebsiteCertificateAuthoritiesCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListWebsiteCertificateAuthoritiesCommand extends $Command<ListWebsiteCertificateAuthoritiesCommandInput, ListWebsiteCertificateAuthoritiesCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: ListWebsiteCertificateAuthoritiesCommandInput;
    constructor(input: ListWebsiteCertificateAuthoritiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWebsiteCertificateAuthoritiesCommandInput, ListWebsiteCertificateAuthoritiesCommandOutput>;
    private serialize;
    private deserialize;
}
