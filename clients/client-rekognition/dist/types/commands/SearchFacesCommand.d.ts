import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { SearchFacesRequest, SearchFacesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchFacesCommandInput extends SearchFacesRequest {
}
export interface SearchFacesCommandOutput extends SearchFacesResponse, __MetadataBearer {
}
/**
 * <p>For a given input face ID, searches for matching faces in the collection the face
 *       belongs to. You get a face ID when you add a face to the collection using the <a>IndexFaces</a> operation. The operation compares the features of the input face with
 *       faces in the specified collection. </p>
 *          <note>
 *             <p>You can also search faces without indexing faces by using the
 *           <code>SearchFacesByImage</code> operation.</p>
 *          </note>
 *
 *          <p>
 *      The operation response returns
 *       an array of faces that match, ordered by similarity score with the highest
 *       similarity first. More specifically, it is an
 *       array of metadata for each face match that is found. Along with the metadata, the response also
 *       includes a <code>confidence</code> value for each face match, indicating the confidence
 *       that the specific face matches the input face.
 *     </p>
 *
 *          <p>For an example, see Searching for a Face Using Its Face ID in the Amazon Rekognition Developer Guide.</p>
 *
 *          <p>This operation requires permissions to perform the <code>rekognition:SearchFaces</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, SearchFacesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, SearchFacesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new SearchFacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchFacesCommandInput} for command's `input` shape.
 * @see {@link SearchFacesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchFacesCommand extends $Command<SearchFacesCommandInput, SearchFacesCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: SearchFacesCommandInput;
    constructor(input: SearchFacesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchFacesCommandInput, SearchFacesCommandOutput>;
    private serialize;
    private deserialize;
}
