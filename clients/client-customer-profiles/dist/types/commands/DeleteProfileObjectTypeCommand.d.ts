import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { DeleteProfileObjectTypeRequest, DeleteProfileObjectTypeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteProfileObjectTypeCommandInput extends DeleteProfileObjectTypeRequest {
}
export interface DeleteProfileObjectTypeCommandOutput extends DeleteProfileObjectTypeResponse, __MetadataBearer {
}
/**
 * <p>Removes a ProfileObjectType from a specific domain as well as removes all the
 *          ProfileObjects of that type. It also disables integrations from this specific
 *          ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that
 *          were populated from this ProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteProfileObjectTypeCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteProfileObjectTypeCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new DeleteProfileObjectTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProfileObjectTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteProfileObjectTypeCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProfileObjectTypeCommand extends $Command<DeleteProfileObjectTypeCommandInput, DeleteProfileObjectTypeCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: DeleteProfileObjectTypeCommandInput;
    constructor(input: DeleteProfileObjectTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProfileObjectTypeCommandInput, DeleteProfileObjectTypeCommandOutput>;
    private serialize;
    private deserialize;
}
