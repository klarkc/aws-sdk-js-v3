import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { DeleteIntegrationRequest, DeleteIntegrationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteIntegrationCommandInput extends DeleteIntegrationRequest {
}
export interface DeleteIntegrationCommandOutput extends DeleteIntegrationResponse, __MetadataBearer {
}
/**
 * <p>Removes an integration from a specific domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteIntegrationCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteIntegrationCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new DeleteIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIntegrationCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteIntegrationCommand extends $Command<DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: DeleteIntegrationCommandInput;
    constructor(input: DeleteIntegrationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput>;
    private serialize;
    private deserialize;
}
