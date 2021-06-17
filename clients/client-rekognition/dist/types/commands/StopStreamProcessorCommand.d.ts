import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StopStreamProcessorRequest, StopStreamProcessorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopStreamProcessorCommandInput extends StopStreamProcessorRequest {
}
export interface StopStreamProcessorCommandOutput extends StopStreamProcessorResponse, __MetadataBearer {
}
/**
 * <p>Stops a running stream processor that was created by <a>CreateStreamProcessor</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StopStreamProcessorCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StopStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StopStreamProcessorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link StopStreamProcessorCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopStreamProcessorCommand extends $Command<StopStreamProcessorCommandInput, StopStreamProcessorCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StopStreamProcessorCommandInput;
    constructor(input: StopStreamProcessorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopStreamProcessorCommandInput, StopStreamProcessorCommandOutput>;
    private serialize;
    private deserialize;
}
