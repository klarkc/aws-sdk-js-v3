import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { GetComponentVersionArtifactRequest, GetComponentVersionArtifactResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetComponentVersionArtifactCommandInput extends GetComponentVersionArtifactRequest {
}
export interface GetComponentVersionArtifactCommandOutput extends GetComponentVersionArtifactResponse, __MetadataBearer {
}
/**
 * <p>Gets the pre-signed URL to download a public component artifact. Core devices call this
 *       operation to identify the URL that they can use to download an artifact to install.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, GetComponentVersionArtifactCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, GetComponentVersionArtifactCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new GetComponentVersionArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComponentVersionArtifactCommandInput} for command's `input` shape.
 * @see {@link GetComponentVersionArtifactCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetComponentVersionArtifactCommand extends $Command<GetComponentVersionArtifactCommandInput, GetComponentVersionArtifactCommandOutput, GreengrassV2ClientResolvedConfig> {
    readonly input: GetComponentVersionArtifactCommandInput;
    constructor(input: GetComponentVersionArtifactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetComponentVersionArtifactCommandInput, GetComponentVersionArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
