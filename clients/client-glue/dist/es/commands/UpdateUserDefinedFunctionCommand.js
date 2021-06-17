import { __extends } from "tslib";
import { UpdateUserDefinedFunctionRequest, UpdateUserDefinedFunctionResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateUserDefinedFunctionCommand, serializeAws_json1_1UpdateUserDefinedFunctionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing function definition in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateUserDefinedFunctionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateUserDefinedFunctionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateUserDefinedFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserDefinedFunctionCommandInput} for command's `input` shape.
 * @see {@link UpdateUserDefinedFunctionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateUserDefinedFunctionCommand = /** @class */ (function (_super) {
    __extends(UpdateUserDefinedFunctionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateUserDefinedFunctionCommand(input) {
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
    UpdateUserDefinedFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdateUserDefinedFunctionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateUserDefinedFunctionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateUserDefinedFunctionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateUserDefinedFunctionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateUserDefinedFunctionCommand(input, context);
    };
    UpdateUserDefinedFunctionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateUserDefinedFunctionCommand(output, context);
    };
    return UpdateUserDefinedFunctionCommand;
}($Command));
export { UpdateUserDefinedFunctionCommand };
//# sourceMappingURL=UpdateUserDefinedFunctionCommand.js.map