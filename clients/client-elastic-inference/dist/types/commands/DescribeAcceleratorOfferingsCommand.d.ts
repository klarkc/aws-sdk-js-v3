import { ElasticInferenceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticInferenceClient";
import { DescribeAcceleratorOfferingsRequest, DescribeAcceleratorOfferingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAcceleratorOfferingsCommandInput extends DescribeAcceleratorOfferingsRequest {
}
export interface DescribeAcceleratorOfferingsCommandOutput extends DescribeAcceleratorOfferingsResponse, __MetadataBearer {
}
/**
 * <p>
 *             Describes the locations in which a given accelerator type or set of types is present in a given region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticInferenceClient, DescribeAcceleratorOfferingsCommand } from "@aws-sdk/client-elastic-inference"; // ES Modules import
 * // const { ElasticInferenceClient, DescribeAcceleratorOfferingsCommand } = require("@aws-sdk/client-elastic-inference"); // CommonJS import
 * const client = new ElasticInferenceClient(config);
 * const command = new DescribeAcceleratorOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAcceleratorOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorOfferingsCommandOutput} for command's `response` shape.
 * @see {@link ElasticInferenceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAcceleratorOfferingsCommand extends $Command<DescribeAcceleratorOfferingsCommandInput, DescribeAcceleratorOfferingsCommandOutput, ElasticInferenceClientResolvedConfig> {
    readonly input: DescribeAcceleratorOfferingsCommandInput;
    constructor(input: DescribeAcceleratorOfferingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticInferenceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAcceleratorOfferingsCommandInput, DescribeAcceleratorOfferingsCommandOutput>;
    private serialize;
    private deserialize;
}
