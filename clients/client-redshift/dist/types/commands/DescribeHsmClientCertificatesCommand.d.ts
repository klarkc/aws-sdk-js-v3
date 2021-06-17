import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeHsmClientCertificatesMessage, HsmClientCertificateMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeHsmClientCertificatesCommandInput extends DescribeHsmClientCertificatesMessage {
}
export interface DescribeHsmClientCertificatesCommandOutput extends HsmClientCertificateMessage, __MetadataBearer {
}
/**
 * <p>Returns information about the specified HSM client certificate. If no certificate
 *             ID is specified, returns information about all the HSM certificates owned by your AWS
 *             customer account.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all HSM client certificates that match any combination of the specified keys and values.
 *             For example, if you have <code>owner</code> and <code>environment</code> for tag keys,
 *             and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates
 *             that have any combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, HSM client certificates
 *             are returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeHsmClientCertificatesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeHsmClientCertificatesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeHsmClientCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHsmClientCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeHsmClientCertificatesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeHsmClientCertificatesCommand extends $Command<DescribeHsmClientCertificatesCommandInput, DescribeHsmClientCertificatesCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeHsmClientCertificatesCommandInput;
    constructor(input: DescribeHsmClientCertificatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHsmClientCertificatesCommandInput, DescribeHsmClientCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
