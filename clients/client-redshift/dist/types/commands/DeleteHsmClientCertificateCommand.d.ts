import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteHsmClientCertificateMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteHsmClientCertificateCommandInput extends DeleteHsmClientCertificateMessage {
}
export interface DeleteHsmClientCertificateCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified HSM client certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteHsmClientCertificateCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteHsmClientCertificateCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteHsmClientCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHsmClientCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteHsmClientCertificateCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteHsmClientCertificateCommand extends $Command<DeleteHsmClientCertificateCommandInput, DeleteHsmClientCertificateCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteHsmClientCertificateCommandInput;
    constructor(input: DeleteHsmClientCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteHsmClientCertificateCommandInput, DeleteHsmClientCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
