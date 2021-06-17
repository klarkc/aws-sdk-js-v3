import { SavingsplansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SavingsplansClient";
import { DescribeSavingsPlansOfferingRatesRequest, DescribeSavingsPlansOfferingRatesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSavingsPlansOfferingRatesCommandInput extends DescribeSavingsPlansOfferingRatesRequest {
}
export interface DescribeSavingsPlansOfferingRatesCommandOutput extends DescribeSavingsPlansOfferingRatesResponse, __MetadataBearer {
}
/**
 * <p>Describes the specified Savings Plans offering rates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, DescribeSavingsPlansOfferingRatesCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, DescribeSavingsPlansOfferingRatesCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const command = new DescribeSavingsPlansOfferingRatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSavingsPlansOfferingRatesCommandInput} for command's `input` shape.
 * @see {@link DescribeSavingsPlansOfferingRatesCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSavingsPlansOfferingRatesCommand extends $Command<DescribeSavingsPlansOfferingRatesCommandInput, DescribeSavingsPlansOfferingRatesCommandOutput, SavingsplansClientResolvedConfig> {
    readonly input: DescribeSavingsPlansOfferingRatesCommandInput;
    constructor(input: DescribeSavingsPlansOfferingRatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SavingsplansClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSavingsPlansOfferingRatesCommandInput, DescribeSavingsPlansOfferingRatesCommandOutput>;
    private serialize;
    private deserialize;
}
