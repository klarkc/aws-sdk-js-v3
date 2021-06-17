import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { GetAttributeValuesRequest, GetAttributeValuesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAttributeValuesCommandInput extends GetAttributeValuesRequest {
}
export interface GetAttributeValuesCommandOutput extends GetAttributeValuesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of attribute values. Attibutes are similar to the details
 *           in a Price List API offer file. For a list of available attributes, see
 *          <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a>
 *          in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">AWS Billing and Cost Management User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, GetAttributeValuesCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, GetAttributeValuesCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * const client = new PricingClient(config);
 * const command = new GetAttributeValuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAttributeValuesCommandInput} for command's `input` shape.
 * @see {@link GetAttributeValuesCommandOutput} for command's `response` shape.
 * @see {@link PricingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAttributeValuesCommand extends $Command<GetAttributeValuesCommandInput, GetAttributeValuesCommandOutput, PricingClientResolvedConfig> {
    readonly input: GetAttributeValuesCommandInput;
    constructor(input: GetAttributeValuesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PricingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAttributeValuesCommandInput, GetAttributeValuesCommandOutput>;
    private serialize;
    private deserialize;
}
