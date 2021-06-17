import { __extends } from "tslib";
import { QuerySchemaVersionMetadataInput, QuerySchemaVersionMetadataResponse } from "../models/models_1";
import { deserializeAws_json1_1QuerySchemaVersionMetadataCommand, serializeAws_json1_1QuerySchemaVersionMetadataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Queries for the schema version metadata information. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, QuerySchemaVersionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, QuerySchemaVersionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new QuerySchemaVersionMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QuerySchemaVersionMetadataCommandInput} for command's `input` shape.
 * @see {@link QuerySchemaVersionMetadataCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var QuerySchemaVersionMetadataCommand = /** @class */ (function (_super) {
    __extends(QuerySchemaVersionMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function QuerySchemaVersionMetadataCommand(input) {
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
    QuerySchemaVersionMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "QuerySchemaVersionMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: QuerySchemaVersionMetadataInput.filterSensitiveLog,
            outputFilterSensitiveLog: QuerySchemaVersionMetadataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    QuerySchemaVersionMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1QuerySchemaVersionMetadataCommand(input, context);
    };
    QuerySchemaVersionMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1QuerySchemaVersionMetadataCommand(output, context);
    };
    return QuerySchemaVersionMetadataCommand;
}($Command));
export { QuerySchemaVersionMetadataCommand };
//# sourceMappingURL=QuerySchemaVersionMetadataCommand.js.map