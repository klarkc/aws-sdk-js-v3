import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { ListAWSDefaultServiceQuotasRequest, ListAWSDefaultServiceQuotasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAWSDefaultServiceQuotasCommandInput extends ListAWSDefaultServiceQuotasRequest {
}
export interface ListAWSDefaultServiceQuotasCommandOutput extends ListAWSDefaultServiceQuotasResponse, __MetadataBearer {
}
/**
 * <p>Lists the default values for the quotas for the specified AWS service. A default value
 *       does not reflect any quota increases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListAWSDefaultServiceQuotasCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListAWSDefaultServiceQuotasCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new ListAWSDefaultServiceQuotasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAWSDefaultServiceQuotasCommandInput} for command's `input` shape.
 * @see {@link ListAWSDefaultServiceQuotasCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAWSDefaultServiceQuotasCommand extends $Command<ListAWSDefaultServiceQuotasCommandInput, ListAWSDefaultServiceQuotasCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: ListAWSDefaultServiceQuotasCommandInput;
    constructor(input: ListAWSDefaultServiceQuotasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAWSDefaultServiceQuotasCommandInput, ListAWSDefaultServiceQuotasCommandOutput>;
    private serialize;
    private deserialize;
}
