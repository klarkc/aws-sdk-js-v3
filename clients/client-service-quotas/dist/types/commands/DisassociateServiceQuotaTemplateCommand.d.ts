import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { DisassociateServiceQuotaTemplateRequest, DisassociateServiceQuotaTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateServiceQuotaTemplateCommandInput extends DisassociateServiceQuotaTemplateRequest {
}
export interface DisassociateServiceQuotaTemplateCommandOutput extends DisassociateServiceQuotaTemplateResponse, __MetadataBearer {
}
/**
 * <p>Disables your quota request template. After a template is disabled, the quota increase
 *       requests in the template are not applied to new accounts in your organization. Disabling a
 *       quota request template does not apply its quota increase requests.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, DisassociateServiceQuotaTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, DisassociateServiceQuotaTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new DisassociateServiceQuotaTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateServiceQuotaTemplateCommandInput} for command's `input` shape.
 * @see {@link DisassociateServiceQuotaTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateServiceQuotaTemplateCommand extends $Command<DisassociateServiceQuotaTemplateCommandInput, DisassociateServiceQuotaTemplateCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: DisassociateServiceQuotaTemplateCommandInput;
    constructor(input: DisassociateServiceQuotaTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateServiceQuotaTemplateCommandInput, DisassociateServiceQuotaTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
