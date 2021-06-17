import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { ListStreamProcessorsRequest, ListStreamProcessorsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListStreamProcessorsCommandInput extends ListStreamProcessorsRequest {
}
export interface ListStreamProcessorsCommandOutput extends ListStreamProcessorsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of stream processors that you have created with <a>CreateStreamProcessor</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, ListStreamProcessorsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, ListStreamProcessorsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new ListStreamProcessorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStreamProcessorsCommandInput} for command's `input` shape.
 * @see {@link ListStreamProcessorsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStreamProcessorsCommand extends $Command<ListStreamProcessorsCommandInput, ListStreamProcessorsCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: ListStreamProcessorsCommandInput;
    constructor(input: ListStreamProcessorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStreamProcessorsCommandInput, ListStreamProcessorsCommandOutput>;
    private serialize;
    private deserialize;
}
