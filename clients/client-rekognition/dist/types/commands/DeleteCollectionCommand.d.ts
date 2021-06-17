import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DeleteCollectionRequest, DeleteCollectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCollectionCommandInput extends DeleteCollectionRequest {
}
export interface DeleteCollectionCommandOutput extends DeleteCollectionResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified collection. Note that this operation
 *       removes all faces in the collection. For an example, see <a>delete-collection-procedure</a>.</p>
 *
 *          <p>This operation requires permissions to perform the
 *         <code>rekognition:DeleteCollection</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DeleteCollectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DeleteCollectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DeleteCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCollectionCommandInput} for command's `input` shape.
 * @see {@link DeleteCollectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCollectionCommand extends $Command<DeleteCollectionCommandInput, DeleteCollectionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DeleteCollectionCommandInput;
    constructor(input: DeleteCollectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCollectionCommandInput, DeleteCollectionCommandOutput>;
    private serialize;
    private deserialize;
}
