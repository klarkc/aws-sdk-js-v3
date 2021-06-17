import { __extends } from "tslib";
import { RegisterSchemaVersionInput, RegisterSchemaVersionResponse } from "../models/models_1";
import { deserializeAws_json1_1RegisterSchemaVersionCommand, serializeAws_json1_1RegisterSchemaVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry.</p>
 *          <p>If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the <code>GetSchemaVersion</code> API with the <code>SchemaVersionId</code> to check compatibility modes.</p>
 * 	        <p>If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, RegisterSchemaVersionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, RegisterSchemaVersionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new RegisterSchemaVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterSchemaVersionCommandInput} for command's `input` shape.
 * @see {@link RegisterSchemaVersionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterSchemaVersionCommand = /** @class */ (function (_super) {
    __extends(RegisterSchemaVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterSchemaVersionCommand(input) {
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
    RegisterSchemaVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "RegisterSchemaVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterSchemaVersionInput.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterSchemaVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterSchemaVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterSchemaVersionCommand(input, context);
    };
    RegisterSchemaVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterSchemaVersionCommand(output, context);
    };
    return RegisterSchemaVersionCommand;
}($Command));
export { RegisterSchemaVersionCommand };
//# sourceMappingURL=RegisterSchemaVersionCommand.js.map