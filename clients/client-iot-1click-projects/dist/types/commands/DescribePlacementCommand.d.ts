import { IoT1ClickProjectsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickProjectsClient";
import { DescribePlacementRequest, DescribePlacementResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePlacementCommandInput extends DescribePlacementRequest {
}
export interface DescribePlacementCommandOutput extends DescribePlacementResponse, __MetadataBearer {
}
/**
 * <p>Describes a placement in a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, DescribePlacementCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, DescribePlacementCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new DescribePlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePlacementCommandInput} for command's `input` shape.
 * @see {@link DescribePlacementCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePlacementCommand extends $Command<DescribePlacementCommandInput, DescribePlacementCommandOutput, IoT1ClickProjectsClientResolvedConfig> {
    readonly input: DescribePlacementCommandInput;
    constructor(input: DescribePlacementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickProjectsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePlacementCommandInput, DescribePlacementCommandOutput>;
    private serialize;
    private deserialize;
}
