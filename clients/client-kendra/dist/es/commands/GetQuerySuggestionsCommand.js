import { __extends } from "tslib";
import { GetQuerySuggestionsRequest, GetQuerySuggestionsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetQuerySuggestionsCommand, serializeAws_json1_1GetQuerySuggestionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Fetches the queries that are suggested to your users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, GetQuerySuggestionsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, GetQuerySuggestionsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new GetQuerySuggestionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQuerySuggestionsCommandInput} for command's `input` shape.
 * @see {@link GetQuerySuggestionsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetQuerySuggestionsCommand = /** @class */ (function (_super) {
    __extends(GetQuerySuggestionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetQuerySuggestionsCommand(input) {
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
    GetQuerySuggestionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "GetQuerySuggestionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetQuerySuggestionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetQuerySuggestionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetQuerySuggestionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetQuerySuggestionsCommand(input, context);
    };
    GetQuerySuggestionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetQuerySuggestionsCommand(output, context);
    };
    return GetQuerySuggestionsCommand;
}($Command));
export { GetQuerySuggestionsCommand };
//# sourceMappingURL=GetQuerySuggestionsCommand.js.map