import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { RotateEncryptionKeyMessage, RotateEncryptionKeyResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RotateEncryptionKeyCommandInput extends RotateEncryptionKeyMessage {
}
export interface RotateEncryptionKeyCommandOutput extends RotateEncryptionKeyResult, __MetadataBearer {
}
/**
 * <p>Rotates the encryption keys for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RotateEncryptionKeyCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RotateEncryptionKeyCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RotateEncryptionKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RotateEncryptionKeyCommandInput} for command's `input` shape.
 * @see {@link RotateEncryptionKeyCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RotateEncryptionKeyCommand extends $Command<RotateEncryptionKeyCommandInput, RotateEncryptionKeyCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: RotateEncryptionKeyCommandInput;
    constructor(input: RotateEncryptionKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RotateEncryptionKeyCommandInput, RotateEncryptionKeyCommandOutput>;
    private serialize;
    private deserialize;
}
