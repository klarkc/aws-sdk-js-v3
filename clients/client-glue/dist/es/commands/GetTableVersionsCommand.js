import { __extends } from "tslib";
import { GetTableVersionsRequest, GetTableVersionsResponse } from "../models/models_1";
import { deserializeAws_json1_1GetTableVersionsCommand, serializeAws_json1_1GetTableVersionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of strings that identify available versions of
 *       a specified table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTableVersionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTableVersionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetTableVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTableVersionsCommandInput} for command's `input` shape.
 * @see {@link GetTableVersionsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTableVersionsCommand = /** @class */ (function (_super) {
    __extends(GetTableVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTableVersionsCommand(input) {
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
    GetTableVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetTableVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTableVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTableVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTableVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTableVersionsCommand(input, context);
    };
    GetTableVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTableVersionsCommand(output, context);
    };
    return GetTableVersionsCommand;
}($Command));
export { GetTableVersionsCommand };
//# sourceMappingURL=GetTableVersionsCommand.js.map