import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { PartnerIntegrationOutputMessage } from "../models/models_0";
import { UpdatePartnerStatusInputMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePartnerStatusCommandInput extends UpdatePartnerStatusInputMessage {
}
export interface UpdatePartnerStatusCommandOutput extends PartnerIntegrationOutputMessage, __MetadataBearer {
}
/**
 * <p>Updates the status of a partner integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, UpdatePartnerStatusCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, UpdatePartnerStatusCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new UpdatePartnerStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePartnerStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePartnerStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePartnerStatusCommand extends $Command<UpdatePartnerStatusCommandInput, UpdatePartnerStatusCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: UpdatePartnerStatusCommandInput;
    constructor(input: UpdatePartnerStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePartnerStatusCommandInput, UpdatePartnerStatusCommandOutput>;
    private serialize;
    private deserialize;
}
