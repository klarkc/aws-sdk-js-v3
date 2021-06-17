import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutKMSEncryptionKeyRequest, PutKMSEncryptionKeyResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutKMSEncryptionKeyCommandInput extends PutKMSEncryptionKeyRequest {
}
export interface PutKMSEncryptionKeyCommandOutput extends PutKMSEncryptionKeyResult, __MetadataBearer {
}
/**
 * <p>Specifies the Key Management Service (KMS) customer master key (CMK) to be used to encrypt content in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutKMSEncryptionKeyCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutKMSEncryptionKeyCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new PutKMSEncryptionKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutKMSEncryptionKeyCommandInput} for command's `input` shape.
 * @see {@link PutKMSEncryptionKeyCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutKMSEncryptionKeyCommand extends $Command<PutKMSEncryptionKeyCommandInput, PutKMSEncryptionKeyCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: PutKMSEncryptionKeyCommandInput;
    constructor(input: PutKMSEncryptionKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutKMSEncryptionKeyCommandInput, PutKMSEncryptionKeyCommandOutput>;
    private serialize;
    private deserialize;
}
