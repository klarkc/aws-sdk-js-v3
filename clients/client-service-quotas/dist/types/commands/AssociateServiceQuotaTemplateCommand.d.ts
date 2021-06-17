import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { AssociateServiceQuotaTemplateRequest, AssociateServiceQuotaTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateServiceQuotaTemplateCommandInput extends AssociateServiceQuotaTemplateRequest {
}
export interface AssociateServiceQuotaTemplateCommandOutput extends AssociateServiceQuotaTemplateResponse, __MetadataBearer {
}
/**
 * <p>Associates your quota request template with your organization. When a new account is
 *       created in your organization, the quota increase requests in the template are automatically
 *       applied to the account. You can add a quota increase request for any adjustable quota to your
 *       template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, AssociateServiceQuotaTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, AssociateServiceQuotaTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new AssociateServiceQuotaTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateServiceQuotaTemplateCommandInput} for command's `input` shape.
 * @see {@link AssociateServiceQuotaTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateServiceQuotaTemplateCommand extends $Command<AssociateServiceQuotaTemplateCommandInput, AssociateServiceQuotaTemplateCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: AssociateServiceQuotaTemplateCommandInput;
    constructor(input: AssociateServiceQuotaTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateServiceQuotaTemplateCommandInput, AssociateServiceQuotaTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
