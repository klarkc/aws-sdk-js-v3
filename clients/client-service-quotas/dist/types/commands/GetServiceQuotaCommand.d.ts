import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { GetServiceQuotaRequest, GetServiceQuotaResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetServiceQuotaCommandInput extends GetServiceQuotaRequest {
}
export interface GetServiceQuotaCommandOutput extends GetServiceQuotaResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the applied quota value for the specified quota. For some quotas, only the
 *       default values are available. If the applied quota value is not available for a quota, the
 *       quota is not retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetServiceQuotaCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetServiceQuotaCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new GetServiceQuotaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceQuotaCommandInput} for command's `input` shape.
 * @see {@link GetServiceQuotaCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetServiceQuotaCommand extends $Command<GetServiceQuotaCommandInput, GetServiceQuotaCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: GetServiceQuotaCommandInput;
    constructor(input: GetServiceQuotaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServiceQuotaCommandInput, GetServiceQuotaCommandOutput>;
    private serialize;
    private deserialize;
}
