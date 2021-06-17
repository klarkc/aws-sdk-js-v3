import { __extends } from "tslib";
import { ListPartsInput, ListPartsOutput } from "../models/models_0";
import { deserializeAws_restJson1ListPartsCommand, serializeAws_restJson1ListPartsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation lists the parts of an archive that have been uploaded in a specific
 *          multipart upload. You can make this request at any time during an in-progress multipart
 *          upload before you complete the upload (see <a>CompleteMultipartUpload</a>. List
 *          Parts returns an error for completed uploads. The list returned in the List Parts response
 *          is sorted by part range. </p>
 *
 *          <p>The List Parts operation supports pagination. By default, this operation returns up
 *          to 50 uploaded parts in the response. You should always check the response for a
 *             <code>marker</code> at which to continue the list; if there are no more items the
 *             <code>marker</code> is <code>null</code>. To return a list of parts that begins at a
 *          specific part, set the <code>marker</code> request parameter to the value you obtained from
 *          a previous List Parts request. You can also limit the number of parts returned in the
 *          response by specifying the <code>limit</code> parameter in the request. </p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working
 *             with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-parts.html">List Parts</a> in the
 *             <i>Amazon Glacier Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListPartsCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListPartsCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new ListPartsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPartsCommandInput} for command's `input` shape.
 * @see {@link ListPartsCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPartsCommand = /** @class */ (function (_super) {
    __extends(ListPartsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPartsCommand(input) {
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
    ListPartsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlacierClient";
        var commandName = "ListPartsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPartsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListPartsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPartsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPartsCommand(input, context);
    };
    ListPartsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPartsCommand(output, context);
    };
    return ListPartsCommand;
}($Command));
export { ListPartsCommand };
//# sourceMappingURL=ListPartsCommand.js.map