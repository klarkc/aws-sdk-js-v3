import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { UpdatePublishingDestinationRequest, UpdatePublishingDestinationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePublishingDestinationCommandInput extends UpdatePublishingDestinationRequest {
}
export interface UpdatePublishingDestinationCommandOutput extends UpdatePublishingDestinationResponse, __MetadataBearer {
}
/**
 * <p>Updates information about the publishing destination specified by the
 *         <code>destinationId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdatePublishingDestinationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdatePublishingDestinationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UpdatePublishingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePublishingDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdatePublishingDestinationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePublishingDestinationCommand extends $Command<UpdatePublishingDestinationCommandInput, UpdatePublishingDestinationCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: UpdatePublishingDestinationCommandInput;
    constructor(input: UpdatePublishingDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePublishingDestinationCommandInput, UpdatePublishingDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
