import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { GetIntegrationRequest, GetIntegrationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetIntegrationCommandInput extends GetIntegrationRequest {
}
export interface GetIntegrationCommandOutput extends GetIntegrationResponse, __MetadataBearer {
}
/**
 * <p>Returns an integration for a domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetIntegrationCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetIntegrationCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new GetIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIntegrationCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetIntegrationCommand extends $Command<GetIntegrationCommandInput, GetIntegrationCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: GetIntegrationCommandInput;
    constructor(input: GetIntegrationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIntegrationCommandInput, GetIntegrationCommandOutput>;
    private serialize;
    private deserialize;
}
