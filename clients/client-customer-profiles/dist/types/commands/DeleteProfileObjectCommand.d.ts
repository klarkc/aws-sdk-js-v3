import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { DeleteProfileObjectRequest, DeleteProfileObjectResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteProfileObjectCommandInput extends DeleteProfileObjectRequest {
}
export interface DeleteProfileObjectCommandOutput extends DeleteProfileObjectResponse, __MetadataBearer {
}
/**
 * <p>Removes an object associated with a profile of a given ProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteProfileObjectCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteProfileObjectCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new DeleteProfileObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProfileObjectCommandInput} for command's `input` shape.
 * @see {@link DeleteProfileObjectCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProfileObjectCommand extends $Command<DeleteProfileObjectCommandInput, DeleteProfileObjectCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: DeleteProfileObjectCommandInput;
    constructor(input: DeleteProfileObjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProfileObjectCommandInput, DeleteProfileObjectCommandOutput>;
    private serialize;
    private deserialize;
}
