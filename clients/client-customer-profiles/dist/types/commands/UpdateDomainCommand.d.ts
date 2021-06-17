import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { UpdateDomainRequest, UpdateDomainResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDomainCommandInput extends UpdateDomainRequest {
}
export interface UpdateDomainCommandOutput extends UpdateDomainResponse, __MetadataBearer {
}
/**
 * <p>Updates the properties of a domain, including creating or selecting a dead letter queue
 *          or an encryption key.</p>
 *          <p>After a domain is created, the name can’t be changed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, UpdateDomainCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, UpdateDomainCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new UpdateDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDomainCommand extends $Command<UpdateDomainCommandInput, UpdateDomainCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: UpdateDomainCommandInput;
    constructor(input: UpdateDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDomainCommandInput, UpdateDomainCommandOutput>;
    private serialize;
    private deserialize;
}
