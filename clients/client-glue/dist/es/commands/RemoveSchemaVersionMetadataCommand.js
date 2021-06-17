import { __extends } from "tslib";
import { RemoveSchemaVersionMetadataInput, RemoveSchemaVersionMetadataResponse } from "../models/models_1";
import { deserializeAws_json1_1RemoveSchemaVersionMetadataCommand, serializeAws_json1_1RemoveSchemaVersionMetadataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a key value pair from the schema version metadata for the specified schema version ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, RemoveSchemaVersionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, RemoveSchemaVersionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new RemoveSchemaVersionMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveSchemaVersionMetadataCommandInput} for command's `input` shape.
 * @see {@link RemoveSchemaVersionMetadataCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveSchemaVersionMetadataCommand = /** @class */ (function (_super) {
    __extends(RemoveSchemaVersionMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveSchemaVersionMetadataCommand(input) {
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
    RemoveSchemaVersionMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "RemoveSchemaVersionMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveSchemaVersionMetadataInput.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveSchemaVersionMetadataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveSchemaVersionMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RemoveSchemaVersionMetadataCommand(input, context);
    };
    RemoveSchemaVersionMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RemoveSchemaVersionMetadataCommand(output, context);
    };
    return RemoveSchemaVersionMetadataCommand;
}($Command));
export { RemoveSchemaVersionMetadataCommand };
//# sourceMappingURL=RemoveSchemaVersionMetadataCommand.js.map