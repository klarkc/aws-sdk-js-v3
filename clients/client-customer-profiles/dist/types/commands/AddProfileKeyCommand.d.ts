import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { AddProfileKeyRequest, AddProfileKeyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddProfileKeyCommandInput extends AddProfileKeyRequest {
}
export interface AddProfileKeyCommandOutput extends AddProfileKeyResponse, __MetadataBearer {
}
/**
 * <p>Associates a new key value with a specific profile, such as a Contact Trace Record (CTR)
 *          ContactId.</p>
 *          <p>A profile object can have a single unique key and any number of additional keys that can
 *          be used to identify the profile that it belongs to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, AddProfileKeyCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, AddProfileKeyCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new AddProfileKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddProfileKeyCommandInput} for command's `input` shape.
 * @see {@link AddProfileKeyCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddProfileKeyCommand extends $Command<AddProfileKeyCommandInput, AddProfileKeyCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: AddProfileKeyCommandInput;
    constructor(input: AddProfileKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddProfileKeyCommandInput, AddProfileKeyCommandOutput>;
    private serialize;
    private deserialize;
}
