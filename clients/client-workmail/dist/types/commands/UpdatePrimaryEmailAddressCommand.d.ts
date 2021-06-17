import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { UpdatePrimaryEmailAddressRequest, UpdatePrimaryEmailAddressResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePrimaryEmailAddressCommandInput extends UpdatePrimaryEmailAddressRequest {
}
export interface UpdatePrimaryEmailAddressCommandOutput extends UpdatePrimaryEmailAddressResponse, __MetadataBearer {
}
/**
 * <p>Updates the primary email for a user, group, or resource. The current email is moved
 *          into the list of aliases (or swapped between an existing alias and the current primary
 *          email), and the email provided in the input is promoted as the primary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdatePrimaryEmailAddressCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdatePrimaryEmailAddressCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new UpdatePrimaryEmailAddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePrimaryEmailAddressCommandInput} for command's `input` shape.
 * @see {@link UpdatePrimaryEmailAddressCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePrimaryEmailAddressCommand extends $Command<UpdatePrimaryEmailAddressCommandInput, UpdatePrimaryEmailAddressCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: UpdatePrimaryEmailAddressCommandInput;
    constructor(input: UpdatePrimaryEmailAddressCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePrimaryEmailAddressCommandInput, UpdatePrimaryEmailAddressCommandOutput>;
    private serialize;
    private deserialize;
}
