import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { ListServiceQuotaIncreaseRequestsInTemplateRequest, ListServiceQuotaIncreaseRequestsInTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListServiceQuotaIncreaseRequestsInTemplateCommandInput extends ListServiceQuotaIncreaseRequestsInTemplateRequest {
}
export interface ListServiceQuotaIncreaseRequestsInTemplateCommandOutput extends ListServiceQuotaIncreaseRequestsInTemplateResponse, __MetadataBearer {
}
/**
 * <p>Lists the quota increase requests in the specified quota request template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListServiceQuotaIncreaseRequestsInTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListServiceQuotaIncreaseRequestsInTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new ListServiceQuotaIncreaseRequestsInTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceQuotaIncreaseRequestsInTemplateCommandInput} for command's `input` shape.
 * @see {@link ListServiceQuotaIncreaseRequestsInTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListServiceQuotaIncreaseRequestsInTemplateCommand extends $Command<ListServiceQuotaIncreaseRequestsInTemplateCommandInput, ListServiceQuotaIncreaseRequestsInTemplateCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput;
    constructor(input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListServiceQuotaIncreaseRequestsInTemplateCommandInput, ListServiceQuotaIncreaseRequestsInTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
