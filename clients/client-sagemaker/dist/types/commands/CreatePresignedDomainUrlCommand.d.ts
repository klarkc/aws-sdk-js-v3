import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreatePresignedDomainUrlRequest, CreatePresignedDomainUrlResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePresignedDomainUrlCommandInput extends CreatePresignedDomainUrlRequest {
}
export interface CreatePresignedDomainUrlCommandOutput extends CreatePresignedDomainUrlResponse, __MetadataBearer {
}
/**
 * <p>Creates a URL for a specified UserProfile in a Domain.  When accessed in a web browser,
 *        the user will be automatically signed in to Amazon SageMaker Studio, and granted access to all of
 *        the Apps and files associated with the Domain's Amazon Elastic File System (EFS) volume.
 *        This operation can only be called when the authentication mode equals IAM.
 *    </p>
 *          <note>
 *             <p>The URL that you get from a call to <code>CreatePresignedDomainUrl</code> has a default timeout of 5 minutes. You can configure this value using <code>ExpiresInSeconds</code>. If you try to use the URL after the timeout limit expires, you
 *             are directed to the AWS console sign-in page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreatePresignedDomainUrlCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreatePresignedDomainUrlCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreatePresignedDomainUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePresignedDomainUrlCommandInput} for command's `input` shape.
 * @see {@link CreatePresignedDomainUrlCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePresignedDomainUrlCommand extends $Command<CreatePresignedDomainUrlCommandInput, CreatePresignedDomainUrlCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreatePresignedDomainUrlCommandInput;
    constructor(input: CreatePresignedDomainUrlCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePresignedDomainUrlCommandInput, CreatePresignedDomainUrlCommandOutput>;
    private serialize;
    private deserialize;
}
