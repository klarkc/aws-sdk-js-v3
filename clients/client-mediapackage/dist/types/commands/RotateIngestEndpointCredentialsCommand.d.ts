import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { RotateIngestEndpointCredentialsRequest, RotateIngestEndpointCredentialsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RotateIngestEndpointCredentialsCommandInput extends RotateIngestEndpointCredentialsRequest {
}
export interface RotateIngestEndpointCredentialsCommandOutput extends RotateIngestEndpointCredentialsResponse, __MetadataBearer {
}
/**
 * Rotate the IngestEndpoint's username and password, as specified by the IngestEndpoint's id.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, RotateIngestEndpointCredentialsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, RotateIngestEndpointCredentialsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new RotateIngestEndpointCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RotateIngestEndpointCredentialsCommandInput} for command's `input` shape.
 * @see {@link RotateIngestEndpointCredentialsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RotateIngestEndpointCredentialsCommand extends $Command<RotateIngestEndpointCredentialsCommandInput, RotateIngestEndpointCredentialsCommandOutput, MediaPackageClientResolvedConfig> {
    readonly input: RotateIngestEndpointCredentialsCommandInput;
    constructor(input: RotateIngestEndpointCredentialsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaPackageClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RotateIngestEndpointCredentialsCommandInput, RotateIngestEndpointCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}
