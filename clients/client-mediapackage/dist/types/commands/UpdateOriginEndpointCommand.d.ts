import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { UpdateOriginEndpointRequest, UpdateOriginEndpointResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateOriginEndpointCommandInput extends UpdateOriginEndpointRequest {
}
export interface UpdateOriginEndpointCommandOutput extends UpdateOriginEndpointResponse, __MetadataBearer {
}
/**
 * Updates an existing OriginEndpoint.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, UpdateOriginEndpointCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, UpdateOriginEndpointCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new UpdateOriginEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateOriginEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateOriginEndpointCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateOriginEndpointCommand extends $Command<UpdateOriginEndpointCommandInput, UpdateOriginEndpointCommandOutput, MediaPackageClientResolvedConfig> {
    readonly input: UpdateOriginEndpointCommandInput;
    constructor(input: UpdateOriginEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaPackageClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateOriginEndpointCommandInput, UpdateOriginEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
