import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { PutProfileObjectTypeRequest, PutProfileObjectTypeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutProfileObjectTypeCommandInput extends PutProfileObjectTypeRequest {
}
export interface PutProfileObjectTypeCommandOutput extends PutProfileObjectTypeResponse, __MetadataBearer {
}
/**
 * <p>Defines a ProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, PutProfileObjectTypeCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, PutProfileObjectTypeCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new PutProfileObjectTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutProfileObjectTypeCommandInput} for command's `input` shape.
 * @see {@link PutProfileObjectTypeCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutProfileObjectTypeCommand extends $Command<PutProfileObjectTypeCommandInput, PutProfileObjectTypeCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: PutProfileObjectTypeCommandInput;
    constructor(input: PutProfileObjectTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutProfileObjectTypeCommandInput, PutProfileObjectTypeCommandOutput>;
    private serialize;
    private deserialize;
}
