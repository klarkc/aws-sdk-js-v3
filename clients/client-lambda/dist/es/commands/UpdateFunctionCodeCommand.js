import { __extends } from "tslib";
import { FunctionConfiguration, UpdateFunctionCodeRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateFunctionCodeCommand, serializeAws_restJson1UpdateFunctionCodeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed
 *       by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-trustedcode.html">Configuring code signing</a>.</p>
 *
 *          <p>The function's code is locked when you publish a version. You can't modify the code of a published version,
 *       only the unpublished version.</p>
 *          <note>
 *             <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if
 *         you update the image tag to a new image, Lambda does not automatically update the function.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateFunctionCodeCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateFunctionCodeCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new UpdateFunctionCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFunctionCodeCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionCodeCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFunctionCodeCommand = /** @class */ (function (_super) {
    __extends(UpdateFunctionCodeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFunctionCodeCommand(input) {
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
    UpdateFunctionCodeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "UpdateFunctionCodeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFunctionCodeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: FunctionConfiguration.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFunctionCodeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateFunctionCodeCommand(input, context);
    };
    UpdateFunctionCodeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateFunctionCodeCommand(output, context);
    };
    return UpdateFunctionCodeCommand;
}($Command));
export { UpdateFunctionCodeCommand };
//# sourceMappingURL=UpdateFunctionCodeCommand.js.map