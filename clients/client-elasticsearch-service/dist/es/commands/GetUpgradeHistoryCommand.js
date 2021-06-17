import { __extends } from "tslib";
import { GetUpgradeHistoryRequest, GetUpgradeHistoryResponse } from "../models/models_0";
import { deserializeAws_restJson1GetUpgradeHistoryCommand, serializeAws_restJson1GetUpgradeHistoryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the complete history of the last 10 upgrades that were performed on the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, GetUpgradeHistoryCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, GetUpgradeHistoryCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new GetUpgradeHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUpgradeHistoryCommandInput} for command's `input` shape.
 * @see {@link GetUpgradeHistoryCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUpgradeHistoryCommand = /** @class */ (function (_super) {
    __extends(GetUpgradeHistoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetUpgradeHistoryCommand(input) {
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
    GetUpgradeHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "GetUpgradeHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetUpgradeHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetUpgradeHistoryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetUpgradeHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetUpgradeHistoryCommand(input, context);
    };
    GetUpgradeHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetUpgradeHistoryCommand(output, context);
    };
    return GetUpgradeHistoryCommand;
}($Command));
export { GetUpgradeHistoryCommand };
//# sourceMappingURL=GetUpgradeHistoryCommand.js.map