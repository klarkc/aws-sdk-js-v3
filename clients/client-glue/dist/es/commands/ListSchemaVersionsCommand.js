import { __extends } from "tslib";
import { ListSchemaVersionsInput, ListSchemaVersionsResponse } from "../models/models_1";
import { deserializeAws_json1_1ListSchemaVersionsCommand, serializeAws_json1_1ListSchemaVersionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of schema versions that you have created, with minimal information. Schema versions in Deleted status will not be included in the results. Empty results will be returned if there are no schema versions available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListSchemaVersionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListSchemaVersionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ListSchemaVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSchemaVersionsCommandInput} for command's `input` shape.
 * @see {@link ListSchemaVersionsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSchemaVersionsCommand = /** @class */ (function (_super) {
    __extends(ListSchemaVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSchemaVersionsCommand(input) {
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
    ListSchemaVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "ListSchemaVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSchemaVersionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListSchemaVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSchemaVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListSchemaVersionsCommand(input, context);
    };
    ListSchemaVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListSchemaVersionsCommand(output, context);
    };
    return ListSchemaVersionsCommand;
}($Command));
export { ListSchemaVersionsCommand };
//# sourceMappingURL=ListSchemaVersionsCommand.js.map