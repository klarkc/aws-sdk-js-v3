import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetFileUploadURLRequest, GetFileUploadURLResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFileUploadURLCommandInput extends GetFileUploadURLRequest {
}
export interface GetFileUploadURLCommandOutput extends GetFileUploadURLResponse, __MetadataBearer {
}
/**
 * <p>
 *             The
 *             <code>GetFileUploadURL</code>
 *             operation generates and returns a temporary URL. You use the
 *             temporary URL to retrieve a file uploaded by a Worker as an answer to
 *             a FileUploadAnswer question for a HIT. The temporary URL is generated
 *             the instant the GetFileUploadURL operation is called, and is valid
 *             for 60 seconds. You can get a temporary file upload URL any time
 *             until the HIT is disposed. After the HIT is disposed, any uploaded
 *             files are deleted, and cannot be retrieved.
 *
 *             Pending Deprecation on December 12, 2017. The Answer Specification
 *             structure will no longer  support the <code>FileUploadAnswer</code>
 *             element to be used for the QuestionForm data structure.
 *             Instead, we recommend that Requesters who want to create HITs asking
 *             Workers to upload files to use Amazon S3.
 *
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetFileUploadURLCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetFileUploadURLCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new GetFileUploadURLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFileUploadURLCommandInput} for command's `input` shape.
 * @see {@link GetFileUploadURLCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFileUploadURLCommand extends $Command<GetFileUploadURLCommandInput, GetFileUploadURLCommandOutput, MTurkClientResolvedConfig> {
    readonly input: GetFileUploadURLCommandInput;
    constructor(input: GetFileUploadURLCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFileUploadURLCommandInput, GetFileUploadURLCommandOutput>;
    private serialize;
    private deserialize;
}
