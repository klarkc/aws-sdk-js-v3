import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { PutServiceQuotaIncreaseRequestIntoTemplateRequest, PutServiceQuotaIncreaseRequestIntoTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutServiceQuotaIncreaseRequestIntoTemplateCommandInput extends PutServiceQuotaIncreaseRequestIntoTemplateRequest {
}
export interface PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput extends PutServiceQuotaIncreaseRequestIntoTemplateResponse, __MetadataBearer {
}
/**
 * <p>Adds a quota increase request to your quota request template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, PutServiceQuotaIncreaseRequestIntoTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, PutServiceQuotaIncreaseRequestIntoTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new PutServiceQuotaIncreaseRequestIntoTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutServiceQuotaIncreaseRequestIntoTemplateCommandInput} for command's `input` shape.
 * @see {@link PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutServiceQuotaIncreaseRequestIntoTemplateCommand extends $Command<PutServiceQuotaIncreaseRequestIntoTemplateCommandInput, PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput;
    constructor(input: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutServiceQuotaIncreaseRequestIntoTemplateCommandInput, PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
