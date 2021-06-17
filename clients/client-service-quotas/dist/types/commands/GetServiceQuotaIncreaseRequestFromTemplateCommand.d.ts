import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { GetServiceQuotaIncreaseRequestFromTemplateRequest, GetServiceQuotaIncreaseRequestFromTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetServiceQuotaIncreaseRequestFromTemplateCommandInput extends GetServiceQuotaIncreaseRequestFromTemplateRequest {
}
export interface GetServiceQuotaIncreaseRequestFromTemplateCommandOutput extends GetServiceQuotaIncreaseRequestFromTemplateResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the specified quota increase request in your quota request
 *       template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetServiceQuotaIncreaseRequestFromTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetServiceQuotaIncreaseRequestFromTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new GetServiceQuotaIncreaseRequestFromTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceQuotaIncreaseRequestFromTemplateCommandInput} for command's `input` shape.
 * @see {@link GetServiceQuotaIncreaseRequestFromTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetServiceQuotaIncreaseRequestFromTemplateCommand extends $Command<GetServiceQuotaIncreaseRequestFromTemplateCommandInput, GetServiceQuotaIncreaseRequestFromTemplateCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: GetServiceQuotaIncreaseRequestFromTemplateCommandInput;
    constructor(input: GetServiceQuotaIncreaseRequestFromTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServiceQuotaIncreaseRequestFromTemplateCommandInput, GetServiceQuotaIncreaseRequestFromTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
