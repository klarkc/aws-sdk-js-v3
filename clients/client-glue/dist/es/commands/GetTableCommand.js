import { __extends } from "tslib";
import { GetTableRequest, GetTableResponse } from "../models/models_1";
import { deserializeAws_json1_1GetTableCommand, serializeAws_json1_1GetTableCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the <code>Table</code> definition in a Data Catalog for
 *       a specified table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTableCommandInput} for command's `input` shape.
 * @see {@link GetTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTableCommand = /** @class */ (function (_super) {
    __extends(GetTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTableCommand(input) {
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
    GetTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTableResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTableCommand(input, context);
    };
    GetTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTableCommand(output, context);
    };
    return GetTableCommand;
}($Command));
export { GetTableCommand };
//# sourceMappingURL=GetTableCommand.js.map