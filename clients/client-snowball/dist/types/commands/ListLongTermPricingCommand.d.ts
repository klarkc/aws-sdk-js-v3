import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { ListLongTermPricingRequest, ListLongTermPricingResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLongTermPricingCommandInput extends ListLongTermPricingRequest {
}
export interface ListLongTermPricingCommandOutput extends ListLongTermPricingResult, __MetadataBearer {
}
/**
 * <p>Lists all long term pricing types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListLongTermPricingCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListLongTermPricingCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new ListLongTermPricingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLongTermPricingCommandInput} for command's `input` shape.
 * @see {@link ListLongTermPricingCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLongTermPricingCommand extends $Command<ListLongTermPricingCommandInput, ListLongTermPricingCommandOutput, SnowballClientResolvedConfig> {
    readonly input: ListLongTermPricingCommandInput;
    constructor(input: ListLongTermPricingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLongTermPricingCommandInput, ListLongTermPricingCommandOutput>;
    private serialize;
    private deserialize;
}
