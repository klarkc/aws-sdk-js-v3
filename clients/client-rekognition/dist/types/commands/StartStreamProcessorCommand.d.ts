import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StartStreamProcessorRequest, StartStreamProcessorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartStreamProcessorCommandInput extends StartStreamProcessorRequest {
}
export interface StartStreamProcessorCommandOutput extends StartStreamProcessorResponse, __MetadataBearer {
}
/**
 * <p>Starts processing a stream processor. You create a stream processor by calling <a>CreateStreamProcessor</a>.
 *             To tell <code>StartStreamProcessor</code> which stream processor to start, use the value of the <code>Name</code> field specified in the call to
 *             <code>CreateStreamProcessor</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartStreamProcessorCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StartStreamProcessorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link StartStreamProcessorCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartStreamProcessorCommand extends $Command<StartStreamProcessorCommandInput, StartStreamProcessorCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StartStreamProcessorCommandInput;
    constructor(input: StartStreamProcessorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartStreamProcessorCommandInput, StartStreamProcessorCommandOutput>;
    private serialize;
    private deserialize;
}
