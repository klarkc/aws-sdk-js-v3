import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { DeleteProfileKeyRequest, DeleteProfileKeyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteProfileKeyCommandInput extends DeleteProfileKeyRequest {
}
export interface DeleteProfileKeyCommandOutput extends DeleteProfileKeyResponse, __MetadataBearer {
}
/**
 * <p>Removes a searchable key from a customer profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteProfileKeyCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteProfileKeyCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new DeleteProfileKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProfileKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteProfileKeyCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProfileKeyCommand extends $Command<DeleteProfileKeyCommandInput, DeleteProfileKeyCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: DeleteProfileKeyCommandInput;
    constructor(input: DeleteProfileKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProfileKeyCommandInput, DeleteProfileKeyCommandOutput>;
    private serialize;
    private deserialize;
}
