import { __extends } from "tslib";
import { FunctionConfiguration, PublishVersionRequest } from "../models/models_0";
import { deserializeAws_restJson1PublishVersionCommand, serializeAws_restJson1PublishVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version</a> from the
 *       current code and configuration of a function. Use versions to create a snapshot of your function code and
 *       configuration that doesn't change.</p>
 *
 *          <p>AWS Lambda doesn't publish a version if the function's configuration and code haven't changed since the last
 *       version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the
 *       function before publishing a version.</p>
 *
 *          <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PublishVersionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PublishVersionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new PublishVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishVersionCommandInput} for command's `input` shape.
 * @see {@link PublishVersionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PublishVersionCommand = /** @class */ (function (_super) {
    __extends(PublishVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PublishVersionCommand(input) {
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
    PublishVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "PublishVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PublishVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: FunctionConfiguration.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PublishVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PublishVersionCommand(input, context);
    };
    PublishVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PublishVersionCommand(output, context);
    };
    return PublishVersionCommand;
}($Command));
export { PublishVersionCommand };
//# sourceMappingURL=PublishVersionCommand.js.map