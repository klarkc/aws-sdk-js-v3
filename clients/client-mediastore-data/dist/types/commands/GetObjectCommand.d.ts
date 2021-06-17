import { MediaStoreDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreDataClient";
import { GetObjectRequest, GetObjectResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetObjectCommandInput extends GetObjectRequest {
}
export interface GetObjectCommandOutput extends GetObjectResponse, __MetadataBearer {
}
/**
 * <p>Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreDataClient, GetObjectCommand } from "@aws-sdk/client-mediastore-data"; // ES Modules import
 * // const { MediaStoreDataClient, GetObjectCommand } = require("@aws-sdk/client-mediastore-data"); // CommonJS import
 * const client = new MediaStoreDataClient(config);
 * const command = new GetObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetObjectCommandInput} for command's `input` shape.
 * @see {@link GetObjectCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetObjectCommand extends $Command<GetObjectCommandInput, GetObjectCommandOutput, MediaStoreDataClientResolvedConfig> {
    readonly input: GetObjectCommandInput;
    constructor(input: GetObjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetObjectCommandInput, GetObjectCommandOutput>;
    private serialize;
    private deserialize;
}
