import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { GetProfileObjectTypeRequest, GetProfileObjectTypeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetProfileObjectTypeCommandInput extends GetProfileObjectTypeRequest {
}
export interface GetProfileObjectTypeCommandOutput extends GetProfileObjectTypeResponse, __MetadataBearer {
}
/**
 * <p>Returns the object types for a specific domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetProfileObjectTypeCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetProfileObjectTypeCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new GetProfileObjectTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProfileObjectTypeCommandInput} for command's `input` shape.
 * @see {@link GetProfileObjectTypeCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetProfileObjectTypeCommand extends $Command<GetProfileObjectTypeCommandInput, GetProfileObjectTypeCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: GetProfileObjectTypeCommandInput;
    constructor(input: GetProfileObjectTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetProfileObjectTypeCommandInput, GetProfileObjectTypeCommandOutput>;
    private serialize;
    private deserialize;
}
