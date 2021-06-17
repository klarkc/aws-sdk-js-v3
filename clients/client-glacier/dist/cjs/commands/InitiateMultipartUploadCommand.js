"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitiateMultipartUploadCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>This operation initiates a multipart upload. Amazon S3 Glacier creates a multipart
 *          upload resource and returns its ID in the response. The multipart upload ID is used in
 *          subsequent requests to upload parts of an archive (see <a>UploadMultipartPart</a>).</p>
 *
 *          <p>When you initiate a multipart upload, you specify the part size in number of bytes.
 *          The part size must be a megabyte (1024 KB) multiplied by a power of 2-for example, 1048576
 *          (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable
 *          part size is 1 MB, and the maximum is 4 GB.</p>
 *
 *          <p>Every part you upload to this resource (see <a>UploadMultipartPart</a>),
 *          except the last one, must have the same size. The last one can be the same size or smaller.
 *          For example, suppose you want to upload a 16.2 MB file. If you initiate the multipart
 *          upload with a part size of 4 MB, you will upload four parts of 4 MB each and one part of
 *          0.2 MB. </p>
 *
 *          <note>
 *             <p>You don't need to know the size of the archive when you start a multipart upload
 *             because Amazon S3 Glacier does not require you to specify the overall archive
 *             size.</p>
 *          </note>
 *
 *          <p>After you complete the multipart upload, Amazon S3 Glacier (Glacier) removes the multipart upload
 *          resource referenced by the ID. Glacier also removes the multipart upload resource if
 *          you cancel the multipart upload or it may be removed if there is no activity for a period
 *          of 24 hours.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in
 *             Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-initiate-upload.html">Initiate Multipart
 *             Upload</a> in the <i>Amazon Glacier Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, InitiateMultipartUploadCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, InitiateMultipartUploadCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new InitiateMultipartUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitiateMultipartUploadCommandInput} for command's `input` shape.
 * @see {@link InitiateMultipartUploadCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
class InitiateMultipartUploadCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "GlacierClient";
        const commandName = "InitiateMultipartUploadCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.InitiateMultipartUploadInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.InitiateMultipartUploadOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1InitiateMultipartUploadCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1InitiateMultipartUploadCommand(output, context);
    }
}
exports.InitiateMultipartUploadCommand = InitiateMultipartUploadCommand;
//# sourceMappingURL=InitiateMultipartUploadCommand.js.map