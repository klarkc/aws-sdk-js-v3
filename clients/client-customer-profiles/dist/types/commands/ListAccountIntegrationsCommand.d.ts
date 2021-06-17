import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { ListAccountIntegrationsRequest, ListAccountIntegrationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAccountIntegrationsCommandInput extends ListAccountIntegrationsRequest {
}
export interface ListAccountIntegrationsCommandOutput extends ListAccountIntegrationsResponse, __MetadataBearer {
}
/**
 * <p>Lists all of the integrations associated to a specific URI in the AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListAccountIntegrationsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListAccountIntegrationsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new ListAccountIntegrationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountIntegrationsCommandInput} for command's `input` shape.
 * @see {@link ListAccountIntegrationsCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAccountIntegrationsCommand extends $Command<ListAccountIntegrationsCommandInput, ListAccountIntegrationsCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: ListAccountIntegrationsCommandInput;
    constructor(input: ListAccountIntegrationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAccountIntegrationsCommandInput, ListAccountIntegrationsCommandOutput>;
    private serialize;
    private deserialize;
}
