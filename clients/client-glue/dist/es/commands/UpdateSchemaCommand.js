import { __extends } from "tslib";
import { UpdateSchemaInput, UpdateSchemaResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateSchemaCommand, serializeAws_json1_1UpdateSchemaCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the description, compatibility setting, or version checkpoint for a schema set.</p>
 * 	        <p>For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for <code>Compatibility</code> is provided, the <code>VersionNumber</code> (a checkpoint) is also required. The API will validate the checkpoint version number for consistency.</p>
 *          <p>If the value for the <code>VersionNumber</code> (checkpoint) is provided, <code>Compatibility</code> is optional and this can be used to set/reset a checkpoint for the schema.</p>
 * 	        <p>This update will happen only if the schema is in the AVAILABLE state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateSchemaCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateSchemaCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSchemaCommandInput} for command's `input` shape.
 * @see {@link UpdateSchemaCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSchemaCommand = /** @class */ (function (_super) {
    __extends(UpdateSchemaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSchemaCommand(input) {
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
    UpdateSchemaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdateSchemaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSchemaInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSchemaResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSchemaCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateSchemaCommand(input, context);
    };
    UpdateSchemaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateSchemaCommand(output, context);
    };
    return UpdateSchemaCommand;
}($Command));
export { UpdateSchemaCommand };
//# sourceMappingURL=UpdateSchemaCommand.js.map