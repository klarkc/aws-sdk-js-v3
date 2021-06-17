"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompleteMultipartUploadCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>You call this operation to inform Amazon S3 Glacier (Glacier) that all the archive parts have been
 *          uploaded and that Glacier can now assemble the archive from the uploaded parts.
 *          After assembling and saving the archive to the vault, Glacier returns the URI path
 *          of the newly created archive resource. Using the URI path, you can then access the archive.
 *          After you upload an archive, you should save the archive ID returned to retrieve the
 *          archive at a later point. You can also get the vault inventory to obtain a list of archive
 *          IDs in a vault. For more information, see <a>InitiateJob</a>.</p>
 *
 *          <p>In the request, you must include the computed SHA256 tree hash of the entire archive
 *          you have uploaded. For information about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing
 *             Checksums</a>. On the server side, Glacier also constructs the SHA256 tree
 *          hash of the assembled archive. If the values match, Glacier saves the archive to the
 *          vault; otherwise, it returns an error, and the operation fails. The <a>ListParts</a> operation returns a list of parts uploaded for a specific
 *          multipart upload. It includes checksum information for each uploaded part that can be used
 *          to debug a bad checksum issue.</p>
 *
 *          <p>Additionally, Glacier also checks for any missing content ranges when
 *          assembling the archive, if missing content ranges are found, Glacier returns an
 *          error and the operation fails.</p>
 *
 *          <p>Complete Multipart Upload is an idempotent operation. After your first successful
 *          complete multipart upload, if you call the operation again within a short period, the
 *          operation will succeed and return the same archive ID. This is useful in the event you
 *          experience a network issue that causes an aborted connection or receive a 500 server error,
 *          in which case you can repeat your Complete Multipart Upload request and get the same
 *          archive ID without creating duplicate archives. Note, however, that after the multipart
 *          upload completes, you cannot call the List Parts operation and the multipart upload will
 *          not appear in List Multipart Uploads response, even if idempotent complete is
 *          possible.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in
 *             Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-complete-upload.html">Complete Multipart
 *             Upload</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, CompleteMultipartUploadCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, CompleteMultipartUploadCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new CompleteMultipartUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteMultipartUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteMultipartUploadCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CompleteMultipartUploadCommand extends smithy_client_1.Command {
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
        const commandName = "CompleteMultipartUploadCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CompleteMultipartUploadInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ArchiveCreationOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CompleteMultipartUploadCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CompleteMultipartUploadCommand(output, context);
    }
}
exports.CompleteMultipartUploadCommand = CompleteMultipartUploadCommand;
//# sourceMappingURL=CompleteMultipartUploadCommand.js.map