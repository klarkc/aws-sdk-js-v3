import { __extends } from "tslib";
import { CreateSchemaInput, CreateSchemaResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateSchemaCommand, serializeAws_json1_1CreateSchemaCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new schema set and registers the schema definition. Returns an error if the schema set already exists without actually registering the version.</p>
 *          <p>When the schema set is created, a version checkpoint will be set to the first version. Compatibility mode "DISABLED" restricts any additional schema versions from being added after the first schema version. For all other compatibility modes, validation of compatibility settings will be applied only from the second version onwards when the <code>RegisterSchemaVersion</code> API is used.</p>
 *          <p>When this API is called without a <code>RegistryId</code>, this will create an entry for a "default-registry" in the registry database tables, if it is not already present.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateSchemaCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateSchemaCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSchemaCommandInput} for command's `input` shape.
 * @see {@link CreateSchemaCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSchemaCommand = /** @class */ (function (_super) {
    __extends(CreateSchemaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSchemaCommand(input) {
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
    CreateSchemaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "CreateSchemaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSchemaInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSchemaResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSchemaCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateSchemaCommand(input, context);
    };
    CreateSchemaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateSchemaCommand(output, context);
    };
    return CreateSchemaCommand;
}($Command));
export { CreateSchemaCommand };
//# sourceMappingURL=CreateSchemaCommand.js.map