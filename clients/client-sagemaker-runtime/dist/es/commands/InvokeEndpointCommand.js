import { __extends } from "tslib";
import { InvokeEndpointInput, InvokeEndpointOutput } from "../models/models_0";
import { deserializeAws_restJson1InvokeEndpointCommand, serializeAws_restJson1InvokeEndpointCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var InvokeEndpointCommand = /** @class */ (function (_super) {
    __extends(InvokeEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function InvokeEndpointCommand(input) {
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
    InvokeEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerRuntimeClient";
        var commandName = "InvokeEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: InvokeEndpointInput.filterSensitiveLog,
            outputFilterSensitiveLog: InvokeEndpointOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    InvokeEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1InvokeEndpointCommand(input, context);
    };
    InvokeEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1InvokeEndpointCommand(output, context);
    };
    return InvokeEndpointCommand;
}($Command));
export { InvokeEndpointCommand };
//# sourceMappingURL=InvokeEndpointCommand.js.map