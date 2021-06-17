import { __extends } from "tslib";
import { CreateDatasetContentRequest, CreateDatasetContentResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDatasetContentCommand, serializeAws_restJson1CreateDatasetContentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates the content of a data set by applying a <code>queryAction</code> (a SQL query) or
 *       a <code>containerAction</code> (executing a containerized application).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, CreateDatasetContentCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, CreateDatasetContentCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new CreateDatasetContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetContentCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetContentCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDatasetContentCommand = /** @class */ (function (_super) {
    __extends(CreateDatasetContentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDatasetContentCommand(input) {
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
    CreateDatasetContentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "CreateDatasetContentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDatasetContentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDatasetContentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDatasetContentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDatasetContentCommand(input, context);
    };
    CreateDatasetContentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDatasetContentCommand(output, context);
    };
    return CreateDatasetContentCommand;
}($Command));
export { CreateDatasetContentCommand };
//# sourceMappingURL=CreateDatasetContentCommand.js.map