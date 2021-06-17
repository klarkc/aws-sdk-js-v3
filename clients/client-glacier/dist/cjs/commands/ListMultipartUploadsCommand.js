"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListMultipartUploadsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>This operation lists in-progress multipart uploads for the specified vault. An
 *          in-progress multipart upload is a multipart upload that has been initiated by an <a>InitiateMultipartUpload</a> request, but has not yet been completed or aborted.
 *          The list returned in the List Multipart Upload response has no guaranteed order. </p>
 *
 *          <p>The List Multipart Uploads operation supports pagination. By default, this operation
 *          returns up to 50 multipart uploads in the response. You should always check the response
 *          for a <code>marker</code> at which to continue the list; if there are no more items the
 *             <code>marker</code> is <code>null</code>. To return a list of multipart uploads that
 *          begins at a specific upload, set the <code>marker</code> request parameter to the value you
 *          obtained from a previous List Multipart Upload request. You can also limit the number of
 *          uploads returned in the response by specifying the <code>limit</code> parameter in the
 *          request.</p>
 *
 *          <p>Note the difference between this operation and listing parts (<a>ListParts</a>). The List Multipart Uploads operation lists all multipart uploads
 *          for a vault and does not require a multipart upload ID. The List Parts operation requires a
 *          multipart upload ID since parts are associated with a single upload.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *
 *          <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working
 *             with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html">List Multipart Uploads
 *          </a> in the <i>Amazon Glacier Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListMultipartUploadsCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListMultipartUploadsCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new ListMultipartUploadsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMultipartUploadsCommandInput} for command's `input` shape.
 * @see {@link ListMultipartUploadsCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListMultipartUploadsCommand extends smithy_client_1.Command {
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
        const commandName = "ListMultipartUploadsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListMultipartUploadsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListMultipartUploadsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListMultipartUploadsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListMultipartUploadsCommand(output, context);
    }
}
exports.ListMultipartUploadsCommand = ListMultipartUploadsCommand;
//# sourceMappingURL=ListMultipartUploadsCommand.js.map