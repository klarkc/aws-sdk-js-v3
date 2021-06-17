import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { DescribeServicesRequest, DescribeServicesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeServicesCommandInput extends DescribeServicesRequest {
}
export interface DescribeServicesCommandOutput extends DescribeServicesResponse, __MetadataBearer {
}
/**
 * <p>Returns the metadata for one service or a list of the metadata for all services. Use
 *          this without a service code to get the service codes for all services.
 *          Use it with a service code, such as <code>AmazonEC2</code>, to get information specific to
 *          that service, such as the attribute
 *          names available for that service. For example, some of the attribute names available for EC2 are
 *          <code>volumeType</code>, <code>maxIopsVolume</code>, <code>operation</code>,
 *          <code>locationType</code>, and <code>instanceCapacity10xlarge</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, DescribeServicesCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, DescribeServicesCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * const client = new PricingClient(config);
 * const command = new DescribeServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServicesCommandInput} for command's `input` shape.
 * @see {@link DescribeServicesCommandOutput} for command's `response` shape.
 * @see {@link PricingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeServicesCommand extends $Command<DescribeServicesCommandInput, DescribeServicesCommandOutput, PricingClientResolvedConfig> {
    readonly input: DescribeServicesCommandInput;
    constructor(input: DescribeServicesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PricingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeServicesCommandInput, DescribeServicesCommandOutput>;
    private serialize;
    private deserialize;
}
