"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvokeEndpointCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>After you deploy a model into production using Amazon SageMaker hosting services, your
 *             client applications use this API to get inferences from the model hosted at the
 *             specified endpoint. </p>
 *         <p>For an overview of Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
 *         <p>Amazon SageMaker strips all POST headers except those supported by the API. Amazon SageMaker might add
 *             additional headers. You should not rely on the behavior of headers outside those
 *             enumerated in the request syntax. </p>
 *         <p>Calls to <code>InvokeEndpoint</code> are authenticated by using AWS Signature Version
 *             4. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating
 *                 Requests (AWS Signature Version 4)</a> in the <i>Amazon S3 API
 *                 Reference</i>.</p>
 *         <p>A customer's model containers must respond to requests within 60 seconds. The model
 *             itself can have a maximum processing time of 60 seconds before responding to
 *             invocations. If your model is going to take 50-60 seconds of processing time, the SDK
 *             socket timeout should be set to be 70 seconds.</p>
 *         <note>
 *             <p>Endpoints are scoped to an individual account, and are not public. The URL does
 *                 not contain the account ID, but Amazon SageMaker determines the account ID from the
 *                 authentication token that is supplied by the caller.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerRuntimeClient, InvokeEndpointCommand } from "@aws-sdk/client-sagemaker-runtime"; // ES Modules import
 * // const { SageMakerRuntimeClient, InvokeEndpointCommand } = require("@aws-sdk/client-sagemaker-runtime"); // CommonJS import
 * const client = new SageMakerRuntimeClient(config);
 * const command = new InvokeEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvokeEndpointCommandInput} for command's `input` shape.
 * @see {@link InvokeEndpointCommandOutput} for command's `response` shape.
 * @see {@link SageMakerRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class InvokeEndpointCommand extends smithy_client_1.Command {
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
        const clientName = "SageMakerRuntimeClient";
        const commandName = "InvokeEndpointCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.InvokeEndpointInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.InvokeEndpointOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1InvokeEndpointCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1InvokeEndpointCommand(output, context);
    }
}
exports.InvokeEndpointCommand = InvokeEndpointCommand;
//# sourceMappingURL=InvokeEndpointCommand.js.map