import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import { GetAssociationForServiceQuotaTemplateRequest, GetAssociationForServiceQuotaTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAssociationForServiceQuotaTemplateCommandInput extends GetAssociationForServiceQuotaTemplateRequest {
}
export interface GetAssociationForServiceQuotaTemplateCommandOutput extends GetAssociationForServiceQuotaTemplateResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the status of the association for the quota request template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetAssociationForServiceQuotaTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetAssociationForServiceQuotaTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new GetAssociationForServiceQuotaTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssociationForServiceQuotaTemplateCommandInput} for command's `input` shape.
 * @see {@link GetAssociationForServiceQuotaTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAssociationForServiceQuotaTemplateCommand extends $Command<GetAssociationForServiceQuotaTemplateCommandInput, GetAssociationForServiceQuotaTemplateCommandOutput, ServiceQuotasClientResolvedConfig> {
    readonly input: GetAssociationForServiceQuotaTemplateCommandInput;
    constructor(input: GetAssociationForServiceQuotaTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceQuotasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAssociationForServiceQuotaTemplateCommandInput, GetAssociationForServiceQuotaTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
