import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DeleteStreamProcessorRequest, DeleteStreamProcessorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteStreamProcessorCommandInput extends DeleteStreamProcessorRequest {
}
export interface DeleteStreamProcessorCommandOutput extends DeleteStreamProcessorResponse, __MetadataBearer {
}
/**
 * <p>Deletes the stream processor identified by <code>Name</code>. You assign the value for <code>Name</code> when you create the stream processor with
 *             <a>CreateStreamProcessor</a>. You might not be able to use the same name for a stream processor for a few seconds after calling <code>DeleteStreamProcessor</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DeleteStreamProcessorCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DeleteStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DeleteStreamProcessorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamProcessorCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteStreamProcessorCommand extends $Command<DeleteStreamProcessorCommandInput, DeleteStreamProcessorCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DeleteStreamProcessorCommandInput;
    constructor(input: DeleteStreamProcessorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStreamProcessorCommandInput, DeleteStreamProcessorCommandOutput>;
    private serialize;
    private deserialize;
}
