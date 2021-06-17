import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetKMSEncryptionKeyResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetKMSEncryptionKeyCommandInput {
}
export interface GetKMSEncryptionKeyCommandOutput extends GetKMSEncryptionKeyResult, __MetadataBearer {
}
/**
 * <p>Gets the encryption key if a Key Management Service (KMS) customer master key (CMK) has been specified to be used to encrypt content in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetKMSEncryptionKeyCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetKMSEncryptionKeyCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetKMSEncryptionKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKMSEncryptionKeyCommandInput} for command's `input` shape.
 * @see {@link GetKMSEncryptionKeyCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetKMSEncryptionKeyCommand extends $Command<GetKMSEncryptionKeyCommandInput, GetKMSEncryptionKeyCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetKMSEncryptionKeyCommandInput;
    constructor(input: GetKMSEncryptionKeyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetKMSEncryptionKeyCommandInput, GetKMSEncryptionKeyCommandOutput>;
    private serialize;
    private deserialize;
}
