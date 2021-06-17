import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { ListCertificatesRequest, ListCertificatesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCertificatesCommandInput extends ListCertificatesRequest {
}
export interface ListCertificatesCommandOutput extends ListCertificatesResult, __MetadataBearer {
}
/**
 * <p>For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ListCertificatesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ListCertificatesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new ListCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListCertificatesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCertificatesCommand extends $Command<ListCertificatesCommandInput, ListCertificatesCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: ListCertificatesCommandInput;
    constructor(input: ListCertificatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCertificatesCommandInput, ListCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
