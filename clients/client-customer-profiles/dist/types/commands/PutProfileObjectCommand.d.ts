import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { PutProfileObjectRequest, PutProfileObjectResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutProfileObjectCommandInput extends PutProfileObjectRequest {
}
export interface PutProfileObjectCommandOutput extends PutProfileObjectResponse, __MetadataBearer {
}
/**
 * <p>Adds additional objects to customer profiles of a given ObjectType.</p>
 *          <p>When adding a specific profile object, like a Contact Trace Record (CTR), an inferred
 *          profile can get created if it is not mapped to an existing profile. The resulting profile
 *          will only have a phone number populated in the standard ProfileObject. Any additional CTRs
 *          with the same phone number will be mapped to the same inferred profile.</p>
 *          <p>When a ProfileObject is created and if a ProfileObjectType already exists for the
 *          ProfileObject, it will provide data to a standard profile depending on the
 *          ProfileObjectType definition.</p>
 *          <p>PutProfileObject needs an ObjectType, which can be created using
 *          PutProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, PutProfileObjectCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, PutProfileObjectCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new PutProfileObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutProfileObjectCommandInput} for command's `input` shape.
 * @see {@link PutProfileObjectCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutProfileObjectCommand extends $Command<PutProfileObjectCommandInput, PutProfileObjectCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: PutProfileObjectCommandInput;
    constructor(input: PutProfileObjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutProfileObjectCommandInput, PutProfileObjectCommandOutput>;
    private serialize;
    private deserialize;
}
