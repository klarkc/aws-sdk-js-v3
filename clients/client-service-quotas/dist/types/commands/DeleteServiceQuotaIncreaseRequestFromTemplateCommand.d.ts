import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { DeleteServiceQuotaIncreaseRequestFromTemplateRequest, DeleteServiceQuotaIncreaseRequestFromTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput extends DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
}
export interface DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput extends DeleteServiceQuotaIncreaseRequestFromTemplateResponse, __MetadataBearer {
}
/**
 * <p>Deletes the quota increase request for the specified quota from your quota request
 *       template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, DeleteServiceQuotaIncreaseRequestFromTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, DeleteServiceQuotaIncreaseRequestFromTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new DeleteServiceQuotaIncreaseRequestFromTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteServiceQuotaIncreaseRequestFromTemplateCommand extends $Command<DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput, DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput;
    constructor(input: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput, DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
