import { __extends } from "tslib";
import { GetSchemaByDefinitionInput, GetSchemaByDefinitionResponse } from "../models/models_1";
import { deserializeAws_json1_1GetSchemaByDefinitionCommand, serializeAws_json1_1GetSchemaByDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a schema by the <code>SchemaDefinition</code>. The schema definition is sent to the Schema Registry, canonicalized, and hashed. If the hash is matched within the scope of the <code>SchemaName</code> or ARN (or the default registry, if none is supplied), that schema’s metadata is returned. Otherwise, a 404 or NotFound error is returned. Schema versions in <code>Deleted</code> statuses will not be included in the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSchemaByDefinitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSchemaByDefinitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetSchemaByDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSchemaByDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetSchemaByDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSchemaByDefinitionCommand = /** @class */ (function (_super) {
    __extends(GetSchemaByDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSchemaByDefinitionCommand(input) {
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
    GetSchemaByDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetSchemaByDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSchemaByDefinitionInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetSchemaByDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSchemaByDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSchemaByDefinitionCommand(input, context);
    };
    GetSchemaByDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSchemaByDefinitionCommand(output, context);
    };
    return GetSchemaByDefinitionCommand;
}($Command));
export { GetSchemaByDefinitionCommand };
//# sourceMappingURL=GetSchemaByDefinitionCommand.js.map