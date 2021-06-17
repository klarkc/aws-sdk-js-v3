import { __extends } from "tslib";
import { GetUpgradeStatusRequest, GetUpgradeStatusResponse } from "../models/models_0";
import { deserializeAws_restJson1GetUpgradeStatusCommand, serializeAws_restJson1GetUpgradeStatusCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, GetUpgradeStatusCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, GetUpgradeStatusCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new GetUpgradeStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUpgradeStatusCommandInput} for command's `input` shape.
 * @see {@link GetUpgradeStatusCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUpgradeStatusCommand = /** @class */ (function (_super) {
    __extends(GetUpgradeStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetUpgradeStatusCommand(input) {
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
    GetUpgradeStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "GetUpgradeStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetUpgradeStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetUpgradeStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetUpgradeStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetUpgradeStatusCommand(input, context);
    };
    GetUpgradeStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetUpgradeStatusCommand(output, context);
    };
    return GetUpgradeStatusCommand;
}($Command));
export { GetUpgradeStatusCommand };
//# sourceMappingURL=GetUpgradeStatusCommand.js.map