import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { ListServiceQuotasRequest, ListServiceQuotasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListServiceQuotasCommandInput extends ListServiceQuotasRequest {
}
export interface ListServiceQuotasCommandOutput extends ListServiceQuotasResponse, __MetadataBearer {
}
/**
 * <p>Lists the applied quota values for the specified AWS service. For some quotas, only the
 *       default values are available. If the applied quota value is not available for a quota, the
 *       quota is not retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListServiceQuotasCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListServiceQuotasCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new ListServiceQuotasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceQuotasCommandInput} for command's `input` shape.
 * @see {@link ListServiceQuotasCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListServiceQuotasCommand extends $Command<ListServiceQuotasCommandInput, ListServiceQuotasCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: ListServiceQuotasCommandInput;
    constructor(input: ListServiceQuotasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListServiceQuotasCommandInput, ListServiceQuotasCommandOutput>;
    private serialize;
    private deserialize;
}
