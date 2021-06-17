import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { UpdateLongTermPricingRequest, UpdateLongTermPricingResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLongTermPricingCommandInput extends UpdateLongTermPricingRequest {
}
export interface UpdateLongTermPricingCommandOutput extends UpdateLongTermPricingResult, __MetadataBearer {
}
/**
 * <p>Updates the long term pricing type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, UpdateLongTermPricingCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, UpdateLongTermPricingCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new UpdateLongTermPricingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLongTermPricingCommandInput} for command's `input` shape.
 * @see {@link UpdateLongTermPricingCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLongTermPricingCommand extends $Command<UpdateLongTermPricingCommandInput, UpdateLongTermPricingCommandOutput, SnowballClientResolvedConfig> {
    readonly input: UpdateLongTermPricingCommandInput;
    constructor(input: UpdateLongTermPricingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLongTermPricingCommandInput, UpdateLongTermPricingCommandOutput>;
    private serialize;
    private deserialize;
}
