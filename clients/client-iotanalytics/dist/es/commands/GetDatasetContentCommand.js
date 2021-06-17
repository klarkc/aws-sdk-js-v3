import { __extends } from "tslib";
import { GetDatasetContentRequest, GetDatasetContentResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDatasetContentCommand, serializeAws_restJson1GetDatasetContentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the contents of a data set as presigned URIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, GetDatasetContentCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, GetDatasetContentCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new GetDatasetContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDatasetContentCommandInput} for command's `input` shape.
 * @see {@link GetDatasetContentCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDatasetContentCommand = /** @class */ (function (_super) {
    __extends(GetDatasetContentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDatasetContentCommand(input) {
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
    GetDatasetContentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "GetDatasetContentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDatasetContentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDatasetContentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDatasetContentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDatasetContentCommand(input, context);
    };
    GetDatasetContentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDatasetContentCommand(output, context);
    };
    return GetDatasetContentCommand;
}($Command));
export { GetDatasetContentCommand };
//# sourceMappingURL=GetDatasetContentCommand.js.map