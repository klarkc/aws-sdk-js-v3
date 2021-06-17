"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePresignedNotebookInstanceUrlCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreatePresignedNotebookInstanceUrlCommand extends smithy_client_1.Command {
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
        const clientName = "SageMakerClient";
        const commandName = "CreatePresignedNotebookInstanceUrlCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.CreatePresignedNotebookInstanceUrlInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.CreatePresignedNotebookInstanceUrlOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand(output, context);
    }
}
exports.CreatePresignedNotebookInstanceUrlCommand = CreatePresignedNotebookInstanceUrlCommand;
//# sourceMappingURL=CreatePresignedNotebookInstanceUrlCommand.js.map