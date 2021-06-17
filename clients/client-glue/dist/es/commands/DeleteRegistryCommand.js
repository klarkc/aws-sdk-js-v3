import { __extends } from "tslib";
import { DeleteRegistryInput, DeleteRegistryResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteRegistryCommand, serializeAws_json1_1DeleteRegistryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete the entire registry including schema and all of its versions. To get the status of the delete operation, you can call the <code>GetRegistry</code> API after the asynchronous call. Deleting a registry will disable all online operations for the registry such as the <code>UpdateRegistry</code>, <code>CreateSchema</code>, <code>UpdateSchema</code>, and <code>RegisterSchemaVersion</code> APIs. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteRegistryCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteRegistryCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteRegistryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRegistryCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistryCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRegistryCommand = /** @class */ (function (_super) {
    __extends(DeleteRegistryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRegistryCommand(input) {
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
    DeleteRegistryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "DeleteRegistryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRegistryInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRegistryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRegistryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteRegistryCommand(input, context);
    };
    DeleteRegistryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteRegistryCommand(output, context);
    };
    return DeleteRegistryCommand;
}($Command));
export { DeleteRegistryCommand };
//# sourceMappingURL=DeleteRegistryCommand.js.map