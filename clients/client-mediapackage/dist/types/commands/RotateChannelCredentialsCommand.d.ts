import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { RotateChannelCredentialsRequest, RotateChannelCredentialsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RotateChannelCredentialsCommandInput extends RotateChannelCredentialsRequest {
}
export interface RotateChannelCredentialsCommandOutput extends RotateChannelCredentialsResponse, __MetadataBearer {
}
/**
 * @deprecated
 *
 * Changes the Channel's first IngestEndpoint's username and password. WARNING - This API is deprecated. Please use RotateIngestEndpointCredentials instead
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, RotateChannelCredentialsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, RotateChannelCredentialsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new RotateChannelCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RotateChannelCredentialsCommandInput} for command's `input` shape.
 * @see {@link RotateChannelCredentialsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RotateChannelCredentialsCommand extends $Command<RotateChannelCredentialsCommandInput, RotateChannelCredentialsCommandOutput, MediaPackageClientResolvedConfig> {
    readonly input: RotateChannelCredentialsCommandInput;
    constructor(input: RotateChannelCredentialsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaPackageClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RotateChannelCredentialsCommandInput, RotateChannelCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}
