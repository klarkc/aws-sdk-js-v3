import { __extends } from "tslib";
import { DeleteUserDefinedFunctionRequest, DeleteUserDefinedFunctionResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteUserDefinedFunctionCommand, serializeAws_json1_1DeleteUserDefinedFunctionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing function definition from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteUserDefinedFunctionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteUserDefinedFunctionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteUserDefinedFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserDefinedFunctionCommandInput} for command's `input` shape.
 * @see {@link DeleteUserDefinedFunctionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUserDefinedFunctionCommand = /** @class */ (function (_super) {
    __extends(DeleteUserDefinedFunctionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteUserDefinedFunctionCommand(input) {
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
    DeleteUserDefinedFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "DeleteUserDefinedFunctionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteUserDefinedFunctionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteUserDefinedFunctionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteUserDefinedFunctionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteUserDefinedFunctionCommand(input, context);
    };
    DeleteUserDefinedFunctionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteUserDefinedFunctionCommand(output, context);
    };
    return DeleteUserDefinedFunctionCommand;
}($Command));
export { DeleteUserDefinedFunctionCommand };
//# sourceMappingURL=DeleteUserDefinedFunctionCommand.js.map