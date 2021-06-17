import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { PartnerIntegrationInputMessage, PartnerIntegrationOutputMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePartnerCommandInput extends PartnerIntegrationInputMessage {
}
export interface DeletePartnerCommandOutput extends PartnerIntegrationOutputMessage, __MetadataBearer {
}
/**
 * <p>Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeletePartnerCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeletePartnerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeletePartnerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePartnerCommandInput} for command's `input` shape.
 * @see {@link DeletePartnerCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePartnerCommand extends $Command<DeletePartnerCommandInput, DeletePartnerCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeletePartnerCommandInput;
    constructor(input: DeletePartnerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePartnerCommandInput, DeletePartnerCommandOutput>;
    private serialize;
    private deserialize;
}
