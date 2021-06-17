import { __extends } from "tslib";
import { AliasConfiguration, GetAliasRequest } from "../models/models_0";
import { deserializeAws_restJson1GetAliasCommand, serializeAws_restJson1GetAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetAliasCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetAliasCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAliasCommandInput} for command's `input` shape.
 * @see {@link GetAliasCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAliasCommand = /** @class */ (function (_super) {
    __extends(GetAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAliasCommand(input) {
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
    GetAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "GetAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AliasConfiguration.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetAliasCommand(input, context);
    };
    GetAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetAliasCommand(output, context);
    };
    return GetAliasCommand;
}($Command));
export { GetAliasCommand };
//# sourceMappingURL=GetAliasCommand.js.map