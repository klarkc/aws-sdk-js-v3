import { __extends } from "tslib";
import { CreateAnomalyMonitorRequest, CreateAnomalyMonitorResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateAnomalyMonitorCommand, serializeAws_json1_1CreateAnomalyMonitorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new cost anomaly detection monitor with the requested type and monitor
 *       specification. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, CreateAnomalyMonitorCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, CreateAnomalyMonitorCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new CreateAnomalyMonitorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAnomalyMonitorCommandInput} for command's `input` shape.
 * @see {@link CreateAnomalyMonitorCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAnomalyMonitorCommand = /** @class */ (function (_super) {
    __extends(CreateAnomalyMonitorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAnomalyMonitorCommand(input) {
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
    CreateAnomalyMonitorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostExplorerClient";
        var commandName = "CreateAnomalyMonitorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAnomalyMonitorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAnomalyMonitorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAnomalyMonitorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAnomalyMonitorCommand(input, context);
    };
    CreateAnomalyMonitorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAnomalyMonitorCommand(output, context);
    };
    return CreateAnomalyMonitorCommand;
}($Command));
export { CreateAnomalyMonitorCommand };
//# sourceMappingURL=CreateAnomalyMonitorCommand.js.map