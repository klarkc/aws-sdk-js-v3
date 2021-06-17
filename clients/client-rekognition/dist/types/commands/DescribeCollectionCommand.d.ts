import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DescribeCollectionRequest, DescribeCollectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCollectionCommandInput extends DescribeCollectionRequest {
}
export interface DescribeCollectionCommandOutput extends DescribeCollectionResponse, __MetadataBearer {
}
/**
 * <p>Describes the specified collection. You can use <code>DescribeCollection</code> to get
 *          information, such as the number of faces indexed into a collection and the version of the
 *          model used by the collection for face detection.</p>
 *
 *          <p>For more information, see Describing a Collection in the
 *      Amazon Rekognition Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DescribeCollectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DescribeCollectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DescribeCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCollectionCommandInput} for command's `input` shape.
 * @see {@link DescribeCollectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCollectionCommand extends $Command<DescribeCollectionCommandInput, DescribeCollectionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DescribeCollectionCommandInput;
    constructor(input: DescribeCollectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCollectionCommandInput, DescribeCollectionCommandOutput>;
    private serialize;
    private deserialize;
}
