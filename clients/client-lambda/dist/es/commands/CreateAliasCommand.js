import { __extends } from "tslib";
import { AliasConfiguration, CreateAliasRequest } from "../models/models_0";
import { deserializeAws_restJson1CreateAliasCommand, serializeAws_restJson1CreateAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a> for a
 *       Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a
 *       different version.</p>
 *          <p>You can also map an alias to split invocation requests between two versions. Use the
 *         <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that
 *       it receives.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, CreateAliasCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, CreateAliasCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new CreateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAliasCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAliasCommand = /** @class */ (function (_super) {
    __extends(CreateAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAliasCommand(input) {
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
    CreateAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "CreateAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AliasConfiguration.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateAliasCommand(input, context);
    };
    CreateAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateAliasCommand(output, context);
    };
    return CreateAliasCommand;
}($Command));
export { CreateAliasCommand };
//# sourceMappingURL=CreateAliasCommand.js.map