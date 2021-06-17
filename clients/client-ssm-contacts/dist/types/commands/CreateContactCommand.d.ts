import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { CreateContactRequest, CreateContactResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateContactCommandInput extends CreateContactRequest {
}
export interface CreateContactCommandOutput extends CreateContactResult, __MetadataBearer {
}
/**
 * <p>Contacts are either the contacts that Incident Manager engages during an incident or the
 *          escalation plans that Incident Manager uses to engage contacts in phases during an
 *          incident. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, CreateContactCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, CreateContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new CreateContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContactCommandInput} for command's `input` shape.
 * @see {@link CreateContactCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateContactCommand extends $Command<CreateContactCommandInput, CreateContactCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: CreateContactCommandInput;
    constructor(input: CreateContactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateContactCommandInput, CreateContactCommandOutput>;
    private serialize;
    private deserialize;
}
