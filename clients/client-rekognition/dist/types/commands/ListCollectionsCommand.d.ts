import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { ListCollectionsRequest, ListCollectionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCollectionsCommandInput extends ListCollectionsRequest {
}
export interface ListCollectionsCommandOutput extends ListCollectionsResponse, __MetadataBearer {
}
/**
 * <p>Returns list of collection IDs in your account.
 *     If the result is truncated, the response also provides a <code>NextToken</code>
 *     that you can use in the subsequent request to fetch the next set of collection IDs.</p>
 *
 *          <p>For an example, see Listing Collections in the Amazon Rekognition Developer Guide.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:ListCollections</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, ListCollectionsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, ListCollectionsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new ListCollectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCollectionsCommandInput} for command's `input` shape.
 * @see {@link ListCollectionsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCollectionsCommand extends $Command<ListCollectionsCommandInput, ListCollectionsCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: ListCollectionsCommandInput;
    constructor(input: ListCollectionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCollectionsCommandInput, ListCollectionsCommandOutput>;
    private serialize;
    private deserialize;
}
