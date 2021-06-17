import { __extends } from "tslib";
import { AliasConfiguration, UpdateAliasRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateAliasCommand, serializeAws_restJson1UpdateAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the configuration of a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateAliasCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateAliasCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new UpdateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateAliasCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAliasCommand = /** @class */ (function (_super) {
    __extends(UpdateAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAliasCommand(input) {
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
    UpdateAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "UpdateAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AliasConfiguration.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateAliasCommand(input, context);
    };
    UpdateAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateAliasCommand(output, context);
    };
    return UpdateAliasCommand;
}($Command));
export { UpdateAliasCommand };
//# sourceMappingURL=UpdateAliasCommand.js.map