import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { CreateLongTermPricingRequest, CreateLongTermPricingResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLongTermPricingCommandInput extends CreateLongTermPricingRequest {
}
export interface CreateLongTermPricingCommandOutput extends CreateLongTermPricingResult, __MetadataBearer {
}
/**
 * <p>Creates a job with long term usage option for a device. The long term usage is a one year or three year long term pricing type for the device.
 *       You are billed upfront and AWS give discounts for long term pricing. For detailed information see XXXXXXXX</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateLongTermPricingCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateLongTermPricingCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new CreateLongTermPricingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLongTermPricingCommandInput} for command's `input` shape.
 * @see {@link CreateLongTermPricingCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLongTermPricingCommand extends $Command<CreateLongTermPricingCommandInput, CreateLongTermPricingCommandOutput, SnowballClientResolvedConfig> {
    readonly input: CreateLongTermPricingCommandInput;
    constructor(input: CreateLongTermPricingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLongTermPricingCommandInput, CreateLongTermPricingCommandOutput>;
    private serialize;
    private deserialize;
}
