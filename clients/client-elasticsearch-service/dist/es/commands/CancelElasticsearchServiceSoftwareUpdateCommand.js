import { __extends } from "tslib";
import { CancelElasticsearchServiceSoftwareUpdateRequest, CancelElasticsearchServiceSoftwareUpdateResponse, } from "../models/models_0";
import { deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand, serializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the <code>AutomatedUpdateDate</code> and when the <code>UpdateStatus</code> is in the <code>PENDING_UPDATE</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, CancelElasticsearchServiceSoftwareUpdateCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, CancelElasticsearchServiceSoftwareUpdateCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new CancelElasticsearchServiceSoftwareUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelElasticsearchServiceSoftwareUpdateCommandInput} for command's `input` shape.
 * @see {@link CancelElasticsearchServiceSoftwareUpdateCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelElasticsearchServiceSoftwareUpdateCommand = /** @class */ (function (_super) {
    __extends(CancelElasticsearchServiceSoftwareUpdateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelElasticsearchServiceSoftwareUpdateCommand(input) {
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
    CancelElasticsearchServiceSoftwareUpdateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "CancelElasticsearchServiceSoftwareUpdateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelElasticsearchServiceSoftwareUpdateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelElasticsearchServiceSoftwareUpdateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelElasticsearchServiceSoftwareUpdateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand(input, context);
    };
    CancelElasticsearchServiceSoftwareUpdateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand(output, context);
    };
    return CancelElasticsearchServiceSoftwareUpdateCommand;
}($Command));
export { CancelElasticsearchServiceSoftwareUpdateCommand };
//# sourceMappingURL=CancelElasticsearchServiceSoftwareUpdateCommand.js.map