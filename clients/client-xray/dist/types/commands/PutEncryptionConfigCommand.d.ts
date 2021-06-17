import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { PutEncryptionConfigRequest, PutEncryptionConfigResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutEncryptionConfigCommandInput extends PutEncryptionConfigRequest {
}
export interface PutEncryptionConfigCommandOutput extends PutEncryptionConfigResult, __MetadataBearer {
}
/**
 * <p>Updates the encryption configuration for X-Ray data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, PutEncryptionConfigCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, PutEncryptionConfigCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new PutEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link PutEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutEncryptionConfigCommand extends $Command<PutEncryptionConfigCommandInput, PutEncryptionConfigCommandOutput, XRayClientResolvedConfig> {
    readonly input: PutEncryptionConfigCommandInput;
    constructor(input: PutEncryptionConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: XRayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutEncryptionConfigCommandInput, PutEncryptionConfigCommandOutput>;
    private serialize;
    private deserialize;
}
