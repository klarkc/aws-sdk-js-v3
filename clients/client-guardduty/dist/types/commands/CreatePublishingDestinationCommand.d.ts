import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { CreatePublishingDestinationRequest, CreatePublishingDestinationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePublishingDestinationCommandInput extends CreatePublishingDestinationRequest {
}
export interface CreatePublishingDestinationCommandOutput extends CreatePublishingDestinationResponse, __MetadataBearer {
}
/**
 * <p>Creates a publishing destination to export findings to. The resource to export findings to
 *       must exist before you use this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreatePublishingDestinationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreatePublishingDestinationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreatePublishingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePublishingDestinationCommandInput} for command's `input` shape.
 * @see {@link CreatePublishingDestinationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePublishingDestinationCommand extends $Command<CreatePublishingDestinationCommandInput, CreatePublishingDestinationCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: CreatePublishingDestinationCommandInput;
    constructor(input: CreatePublishingDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePublishingDestinationCommandInput, CreatePublishingDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
