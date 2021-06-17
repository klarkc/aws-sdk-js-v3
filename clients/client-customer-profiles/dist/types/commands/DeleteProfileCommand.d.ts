import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { DeleteProfileRequest, DeleteProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteProfileCommandInput extends DeleteProfileRequest {
}
export interface DeleteProfileCommandOutput extends DeleteProfileResponse, __MetadataBearer {
}
/**
 * <p>Deletes the standard customer profile and all data pertaining to the profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteProfileCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteProfileCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new DeleteProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteProfileCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProfileCommand extends $Command<DeleteProfileCommandInput, DeleteProfileCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: DeleteProfileCommandInput;
    constructor(input: DeleteProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProfileCommandInput, DeleteProfileCommandOutput>;
    private serialize;
    private deserialize;
}
