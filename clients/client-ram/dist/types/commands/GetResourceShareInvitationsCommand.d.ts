import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { GetResourceShareInvitationsRequest, GetResourceShareInvitationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResourceShareInvitationsCommandInput extends GetResourceShareInvitationsRequest {
}
export interface GetResourceShareInvitationsCommandOutput extends GetResourceShareInvitationsResponse, __MetadataBearer {
}
/**
 * <p>Gets the invitations for resource sharing that you've received.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourceShareInvitationsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourceShareInvitationsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new GetResourceShareInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceShareInvitationsCommandInput} for command's `input` shape.
 * @see {@link GetResourceShareInvitationsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResourceShareInvitationsCommand extends $Command<GetResourceShareInvitationsCommandInput, GetResourceShareInvitationsCommandOutput, RAMClientResolvedConfig> {
    readonly input: GetResourceShareInvitationsCommandInput;
    constructor(input: GetResourceShareInvitationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourceShareInvitationsCommandInput, GetResourceShareInvitationsCommandOutput>;
    private serialize;
    private deserialize;
}
