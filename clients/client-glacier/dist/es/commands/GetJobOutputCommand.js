import { __extends } from "tslib";
import { GetJobOutputInput, GetJobOutputOutput } from "../models/models_0";
import { deserializeAws_restJson1GetJobOutputCommand, serializeAws_restJson1GetJobOutputCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation downloads the output of the job you initiated using <a>InitiateJob</a>. Depending on the job type you specified when you initiated the
 *          job, the output will be either the content of an archive or a vault inventory.</p>
 *
 *          <p>You can download all the job output or download a portion of the output by specifying
 *          a byte range. In the case of an archive retrieval job, depending on the byte range you
 *          specify, Amazon S3 Glacier (Glacier) returns the checksum for the portion of the data. You can compute the
 *          checksum on the client and verify that the values match to ensure the portion you downloaded
 *          is the correct data.</p>
 *          <p>A job ID will not expire for at least 24 hours after Glacier completes the job. That
 *          a byte range. For both archive and inventory retrieval jobs, you should verify the downloaded
 *          size against the size returned in the headers from the
 *          <b>Get Job Output</b> response.</p>
 *          <p>For archive retrieval jobs, you should also verify that the size is what you expected. If
 *          you download a portion of the output, the expected size is based on the range of bytes
 *          you specified. For example, if you specify a range of <code>bytes=0-1048575</code>, you should
 *          verify your download size is 1,048,576 bytes. If you download an entire archive, the
 *          expected size is the size of the archive when you uploaded it to Amazon S3 Glacier
 *          The expected size is also returned in the headers from the
 *          <b>Get Job Output</b> response.</p>
 *          <p>In the case of an archive retrieval job, depending on the byte range you
 *          specify, Glacier returns the checksum for the portion of the data. To ensure the portion you downloaded
 *          is the correct data, compute the checksum on the client, verify that the values match,
 *          and verify that the size is what you expected.</p>
 *
 *          <p>A job ID does not expire for at least 24 hours after Glacier completes the
 *          job. That is, you can download the job output within the 24 hours period after Amazon
 *          Glacier completes the job.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html">Downloading a
 *             Vault Inventory</a>, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/downloading-an-archive.html">Downloading an
 *             Archive</a>, and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-job-output-get.html">Get Job Output </a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, GetJobOutputCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, GetJobOutputCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new GetJobOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobOutputCommandInput} for command's `input` shape.
 * @see {@link GetJobOutputCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetJobOutputCommand = /** @class */ (function (_super) {
    __extends(GetJobOutputCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetJobOutputCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    GetJobOutputCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "GetJobOutputCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetJobOutputInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetJobOutputOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetJobOutputCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetJobOutputCommand(input, context);
    };
    GetJobOutputCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetJobOutputCommand(output, context);
    };
    return GetJobOutputCommand;
}($Command));
export { GetJobOutputCommand };
//# sourceMappingURL=GetJobOutputCommand.js.map