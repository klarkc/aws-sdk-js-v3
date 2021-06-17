import { __extends } from "tslib";
import { StartElasticsearchServiceSoftwareUpdateRequest, StartElasticsearchServiceSoftwareUpdateResponse, } from "../models/models_0";
import { deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand, serializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Schedules a service software update for an Amazon ES domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, StartElasticsearchServiceSoftwareUpdateCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, StartElasticsearchServiceSoftwareUpdateCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new StartElasticsearchServiceSoftwareUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartElasticsearchServiceSoftwareUpdateCommandInput} for command's `input` shape.
 * @see {@link StartElasticsearchServiceSoftwareUpdateCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartElasticsearchServiceSoftwareUpdateCommand = /** @class */ (function (_super) {
    __extends(StartElasticsearchServiceSoftwareUpdateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartElasticsearchServiceSoftwareUpdateCommand(input) {
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
    StartElasticsearchServiceSoftwareUpdateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "StartElasticsearchServiceSoftwareUpdateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartElasticsearchServiceSoftwareUpdateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartElasticsearchServiceSoftwareUpdateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartElasticsearchServiceSoftwareUpdateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand(input, context);
    };
    StartElasticsearchServiceSoftwareUpdateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand(output, context);
    };
    return StartElasticsearchServiceSoftwareUpdateCommand;
}($Command));
export { StartElasticsearchServiceSoftwareUpdateCommand };
//# sourceMappingURL=StartElasticsearchServiceSoftwareUpdateCommand.js.map