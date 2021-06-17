import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { ListRequestedServiceQuotaChangeHistoryByQuotaRequest, ListRequestedServiceQuotaChangeHistoryByQuotaResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput extends ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
}
export interface ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput extends ListRequestedServiceQuotaChangeHistoryByQuotaResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the quota increase requests for the specified quota.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListRequestedServiceQuotaChangeHistoryByQuotaCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListRequestedServiceQuotaChangeHistoryByQuotaCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new ListRequestedServiceQuotaChangeHistoryByQuotaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput} for command's `input` shape.
 * @see {@link ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRequestedServiceQuotaChangeHistoryByQuotaCommand extends $Command<ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput, ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput;
    constructor(input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput, ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput>;
    private serialize;
    private deserialize;
}
