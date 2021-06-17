import { __extends } from "tslib";
import { GetSchemaVersionsDiffInput, GetSchemaVersionsDiffResponse } from "../models/models_1";
import { deserializeAws_json1_1GetSchemaVersionsDiffCommand, serializeAws_json1_1GetSchemaVersionsDiffCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry.</p>
 *          <p>This API allows you to compare two schema versions between two schema definitions under the same schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSchemaVersionsDiffCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSchemaVersionsDiffCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetSchemaVersionsDiffCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSchemaVersionsDiffCommandInput} for command's `input` shape.
 * @see {@link GetSchemaVersionsDiffCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSchemaVersionsDiffCommand = /** @class */ (function (_super) {
    __extends(GetSchemaVersionsDiffCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSchemaVersionsDiffCommand(input) {
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
    GetSchemaVersionsDiffCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetSchemaVersionsDiffCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSchemaVersionsDiffInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetSchemaVersionsDiffResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSchemaVersionsDiffCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSchemaVersionsDiffCommand(input, context);
    };
    GetSchemaVersionsDiffCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSchemaVersionsDiffCommand(output, context);
    };
    return GetSchemaVersionsDiffCommand;
}($Command));
export { GetSchemaVersionsDiffCommand };
//# sourceMappingURL=GetSchemaVersionsDiffCommand.js.map