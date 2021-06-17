import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeDimensionRequest, DescribeDimensionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDimensionCommandInput extends DescribeDimensionRequest {
}
export interface DescribeDimensionCommandOutput extends DescribeDimensionResponse, __MetadataBearer {
}
/**
 * <p>Provides details about a dimension that is defined in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeDimensionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeDimensionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeDimensionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDimensionCommandInput} for command's `input` shape.
 * @see {@link DescribeDimensionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDimensionCommand extends $Command<DescribeDimensionCommandInput, DescribeDimensionCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeDimensionCommandInput;
    constructor(input: DescribeDimensionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDimensionCommandInput, DescribeDimensionCommandOutput>;
    private serialize;
    private deserialize;
}
