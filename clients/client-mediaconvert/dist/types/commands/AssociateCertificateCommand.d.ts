import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { AssociateCertificateRequest, AssociateCertificateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateCertificateCommandInput extends AssociateCertificateRequest {
}
export interface AssociateCertificateCommandOutput extends AssociateCertificateResponse, __MetadataBearer {
}
/**
 * Associates an AWS Certificate Manager (ACM) Amazon Resource Name (ARN) with AWS Elemental MediaConvert.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, AssociateCertificateCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, AssociateCertificateCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new AssociateCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateCertificateCommandInput} for command's `input` shape.
 * @see {@link AssociateCertificateCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateCertificateCommand extends $Command<AssociateCertificateCommandInput, AssociateCertificateCommandOutput, MediaConvertClientResolvedConfig> {
    readonly input: AssociateCertificateCommandInput;
    constructor(input: AssociateCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConvertClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateCertificateCommandInput, AssociateCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
