import { __extends } from "tslib";
import { ListStoredQueriesRequest, ListStoredQueriesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListStoredQueriesCommand, serializeAws_json1_1ListStoredQueriesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the stored queries for a single AWS account and a single AWS Region. The default is 100. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, ListStoredQueriesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, ListStoredQueriesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new ListStoredQueriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStoredQueriesCommandInput} for command's `input` shape.
 * @see {@link ListStoredQueriesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStoredQueriesCommand = /** @class */ (function (_super) {
    __extends(ListStoredQueriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListStoredQueriesCommand(input) {
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
    ListStoredQueriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "ListStoredQueriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListStoredQueriesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListStoredQueriesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListStoredQueriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListStoredQueriesCommand(input, context);
    };
    ListStoredQueriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListStoredQueriesCommand(output, context);
    };
    return ListStoredQueriesCommand;
}($Command));
export { ListStoredQueriesCommand };
//# sourceMappingURL=ListStoredQueriesCommand.js.map