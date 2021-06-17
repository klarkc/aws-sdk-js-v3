import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetEncryptionConfigRequest, GetEncryptionConfigResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEncryptionConfigCommandInput extends GetEncryptionConfigRequest {
}
export interface GetEncryptionConfigCommandOutput extends GetEncryptionConfigResult, __MetadataBearer {
}
/**
 * <p>Retrieves the current encryption configuration for X-Ray data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetEncryptionConfigCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetEncryptionConfigCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link GetEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEncryptionConfigCommand extends $Command<GetEncryptionConfigCommandInput, GetEncryptionConfigCommandOutput, XRayClientResolvedConfig> {
    readonly input: GetEncryptionConfigCommandInput;
    constructor(input: GetEncryptionConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEncryptionConfigCommandInput, GetEncryptionConfigCommandOutput>;
    private serialize;
    private deserialize;
}
