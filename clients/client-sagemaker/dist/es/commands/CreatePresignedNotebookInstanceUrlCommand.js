import { __extends } from "tslib";
import { CreatePresignedNotebookInstanceUrlInput, CreatePresignedNotebookInstanceUrlOutput } from "../models/models_1";
import { deserializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand, serializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a URL that you can use to connect to the Jupyter server from a notebook
 *             instance. In the Amazon SageMaker console, when you choose <code>Open</code> next to a notebook
 *             instance, Amazon SageMaker opens a new tab showing the Jupyter server home page from the notebook
 *             instance. The console uses this API to get the URL and show the page.</p>
 *         <p> The IAM role or user used to call this API defines the permissions to access the
 *             notebook instance. Once the presigned URL is created, no additional permission is
 *             required to access this URL. IAM authorization policies for this API are also enforced
 *             for every HTTP request and WebSocket frame that attempts to connect to the notebook
 *             instance.</p>
 *         <p>You can restrict access to this API and to the URL that it returns to a list of IP
 *             addresses that you specify. Use the <code>NotIpAddress</code> condition operator and the
 *                 <code>aws:SourceIP</code> condition context key to specify the list of IP addresses
 *             that you want to have access to the notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/security_iam_id-based-policy-examples.html#nbi-ip-filter">Limit Access to a Notebook Instance by IP Address</a>.</p>
 *         <note>
 *             <p>The URL that you get from a call to <a>CreatePresignedNotebookInstanceUrl</a> is valid only for 5 minutes. If
 *                 you try to use the URL after the 5-minute limit expires, you are directed to the
 *                 AWS console sign-in page.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreatePresignedNotebookInstanceUrlCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreatePresignedNotebookInstanceUrlCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreatePresignedNotebookInstanceUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePresignedNotebookInstanceUrlCommandInput} for command's `input` shape.
 * @see {@link CreatePresignedNotebookInstanceUrlCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePresignedNotebookInstanceUrlCommand = /** @class */ (function (_super) {
    __extends(CreatePresignedNotebookInstanceUrlCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePresignedNotebookInstanceUrlCommand(input) {
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
    CreatePresignedNotebookInstanceUrlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreatePresignedNotebookInstanceUrlCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePresignedNotebookInstanceUrlInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePresignedNotebookInstanceUrlOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePresignedNotebookInstanceUrlCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand(input, context);
    };
    CreatePresignedNotebookInstanceUrlCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand(output, context);
    };
    return CreatePresignedNotebookInstanceUrlCommand;
}($Command));
export { CreatePresignedNotebookInstanceUrlCommand };
//# sourceMappingURL=CreatePresignedNotebookInstanceUrlCommand.js.map