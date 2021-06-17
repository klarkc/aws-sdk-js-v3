import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { CertificateMessage, DescribeCertificatesMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCertificatesCommandInput extends DescribeCertificatesMessage {
}
export interface DescribeCertificatesCommandOutput extends CertificateMessage, __MetadataBearer {
}
/**
 * <p>Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for
 *             this AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeCertificatesCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeCertificatesCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DescribeCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificatesCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCertificatesCommand extends $Command<DescribeCertificatesCommandInput, DescribeCertificatesCommandOutput, DocDBClientResolvedConfig> {
    readonly input: DescribeCertificatesCommandInput;
    constructor(input: DescribeCertificatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCertificatesCommandInput, DescribeCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
