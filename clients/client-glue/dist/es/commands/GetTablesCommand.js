import { __extends } from "tslib";
import { GetTablesRequest, GetTablesResponse } from "../models/models_1";
import { deserializeAws_json1_1GetTablesCommand, serializeAws_json1_1GetTablesCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the definitions of some or all of the tables in a given
 *       <code>Database</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTablesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTablesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTablesCommandInput} for command's `input` shape.
 * @see {@link GetTablesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTablesCommand = /** @class */ (function (_super) {
    __extends(GetTablesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTablesCommand(input) {
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
    GetTablesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetTablesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTablesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTablesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTablesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTablesCommand(input, context);
    };
    GetTablesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTablesCommand(output, context);
    };
    return GetTablesCommand;
}($Command));
export { GetTablesCommand };
//# sourceMappingURL=GetTablesCommand.js.map