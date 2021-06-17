import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { GetRequestedServiceQuotaChangeRequest, GetRequestedServiceQuotaChangeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRequestedServiceQuotaChangeCommandInput extends GetRequestedServiceQuotaChangeRequest {
}
export interface GetRequestedServiceQuotaChangeCommandOutput extends GetRequestedServiceQuotaChangeResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the specified quota increase request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetRequestedServiceQuotaChangeCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetRequestedServiceQuotaChangeCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new GetRequestedServiceQuotaChangeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRequestedServiceQuotaChangeCommandInput} for command's `input` shape.
 * @see {@link GetRequestedServiceQuotaChangeCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRequestedServiceQuotaChangeCommand extends $Command<GetRequestedServiceQuotaChangeCommandInput, GetRequestedServiceQuotaChangeCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: GetRequestedServiceQuotaChangeCommandInput;
    constructor(input: GetRequestedServiceQuotaChangeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRequestedServiceQuotaChangeCommandInput, GetRequestedServiceQuotaChangeCommandOutput>;
    private serialize;
    private deserialize;
}
