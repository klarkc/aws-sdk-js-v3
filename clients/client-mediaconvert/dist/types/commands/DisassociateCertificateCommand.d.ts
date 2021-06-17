import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { DisassociateCertificateRequest, DisassociateCertificateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateCertificateCommandInput extends DisassociateCertificateRequest {
}
export interface DisassociateCertificateCommandOutput extends DisassociateCertificateResponse, __MetadataBearer {
}
/**
 * Removes an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, DisassociateCertificateCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, DisassociateCertificateCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new DisassociateCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateCertificateCommandInput} for command's `input` shape.
 * @see {@link DisassociateCertificateCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateCertificateCommand extends $Command<DisassociateCertificateCommandInput, DisassociateCertificateCommandOutput, MediaConvertClientResolvedConfig> {
    readonly input: DisassociateCertificateCommandInput;
    constructor(input: DisassociateCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConvertClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateCertificateCommandInput, DisassociateCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
