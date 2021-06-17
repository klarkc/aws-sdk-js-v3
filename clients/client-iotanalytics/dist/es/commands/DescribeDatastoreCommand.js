import { __extends } from "tslib";
import { DescribeDatastoreRequest, DescribeDatastoreResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeDatastoreCommand, serializeAws_restJson1DescribeDatastoreCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DescribeDatastoreCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, DescribeDatastoreCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new DescribeDatastoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDatastoreCommandInput} for command's `input` shape.
 * @see {@link DescribeDatastoreCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDatastoreCommand = /** @class */ (function (_super) {
    __extends(DescribeDatastoreCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDatastoreCommand(input) {
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
    DescribeDatastoreCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "DescribeDatastoreCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDatastoreRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDatastoreResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDatastoreCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDatastoreCommand(input, context);
    };
    DescribeDatastoreCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDatastoreCommand(output, context);
    };
    return DescribeDatastoreCommand;
}($Command));
export { DescribeDatastoreCommand };
//# sourceMappingURL=DescribeDatastoreCommand.js.map