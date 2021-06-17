import { __extends } from "tslib";
import { GetCodeBindingSourceRequest, GetCodeBindingSourceResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCodeBindingSourceCommand, serializeAws_restJson1GetCodeBindingSourceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get the code binding source URI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, GetCodeBindingSourceCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, GetCodeBindingSourceCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new GetCodeBindingSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCodeBindingSourceCommandInput} for command's `input` shape.
 * @see {@link GetCodeBindingSourceCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCodeBindingSourceCommand = /** @class */ (function (_super) {
    __extends(GetCodeBindingSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCodeBindingSourceCommand(input) {
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
    GetCodeBindingSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "GetCodeBindingSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCodeBindingSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCodeBindingSourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCodeBindingSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCodeBindingSourceCommand(input, context);
    };
    GetCodeBindingSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCodeBindingSourceCommand(output, context);
    };
    return GetCodeBindingSourceCommand;
}($Command));
export { GetCodeBindingSourceCommand };
//# sourceMappingURL=GetCodeBindingSourceCommand.js.map