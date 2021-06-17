import { MediaStoreDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreDataClient";
import { DescribeObjectRequest, DescribeObjectResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeObjectCommandInput extends DescribeObjectRequest {
}
export interface DescribeObjectCommandOutput extends DescribeObjectResponse, __MetadataBearer {
}
/**
 * <p>Gets the headers for an object at the specified path.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreDataClient, DescribeObjectCommand } from "@aws-sdk/client-mediastore-data"; // ES Modules import
 * // const { MediaStoreDataClient, DescribeObjectCommand } = require("@aws-sdk/client-mediastore-data"); // CommonJS import
 * const client = new MediaStoreDataClient(config);
 * const command = new DescribeObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeObjectCommandInput} for command's `input` shape.
 * @see {@link DescribeObjectCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeObjectCommand extends $Command<DescribeObjectCommandInput, DescribeObjectCommandOutput, MediaStoreDataClientResolvedConfig> {
    readonly input: DescribeObjectCommandInput;
    constructor(input: DescribeObjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeObjectCommandInput, DescribeObjectCommandOutput>;
    private serialize;
    private deserialize;
}
