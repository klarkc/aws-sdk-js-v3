import { __extends } from "tslib";
import { CreateDatasetRequest, CreateDatasetResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDatasetCommand, serializeAws_restJson1CreateDatasetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a dataset. A dataset stores data retrieved from a data store by applying a
 *         <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a
 *       containerized application). This operation creates the skeleton of a dataset. The dataset can
 *       be populated manually by calling <code>CreateDatasetContent</code> or automatically according
 *       to a trigger you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, CreateDatasetCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, CreateDatasetCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new CreateDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDatasetCommand = /** @class */ (function (_super) {
    __extends(CreateDatasetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDatasetCommand(input) {
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
    CreateDatasetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "CreateDatasetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDatasetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDatasetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDatasetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDatasetCommand(input, context);
    };
    CreateDatasetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDatasetCommand(output, context);
    };
    return CreateDatasetCommand;
}($Command));
export { CreateDatasetCommand };
//# sourceMappingURL=CreateDatasetCommand.js.map