import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DeletePublishingDestinationRequest, DeletePublishingDestinationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePublishingDestinationCommandInput extends DeletePublishingDestinationRequest {
}
export interface DeletePublishingDestinationCommandOutput extends DeletePublishingDestinationResponse, __MetadataBearer {
}
/**
 * <p>Deletes the publishing definition with the specified <code>destinationId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeletePublishingDestinationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeletePublishingDestinationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DeletePublishingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePublishingDestinationCommandInput} for command's `input` shape.
 * @see {@link DeletePublishingDestinationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePublishingDestinationCommand extends $Command<DeletePublishingDestinationCommandInput, DeletePublishingDestinationCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: DeletePublishingDestinationCommandInput;
    constructor(input: DeletePublishingDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePublishingDestinationCommandInput, DeletePublishingDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
