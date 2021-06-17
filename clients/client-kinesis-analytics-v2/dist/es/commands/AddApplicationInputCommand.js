import { __extends } from "tslib";
import { AddApplicationInputRequest, AddApplicationInputResponse } from "../models/models_0";
import { deserializeAws_json1_1AddApplicationInputCommand, serializeAws_json1_1AddApplicationInputCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Adds a streaming source to your SQL-based Kinesis Data Analytics application.
 *     </p>
 *          <p>You can add a streaming source when you create an application, or you can use this
 *       operation to add a streaming source after you create an application. For more information, see
 *         <a>CreateApplication</a>.</p>
 *          <p>Any configuration update, including adding a streaming source using this operation,
 *       results in a new version of the application. You can use the <a>DescribeApplication</a> operation
 *       to find the current application version.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationInputCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationInputCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new AddApplicationInputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddApplicationInputCommandInput} for command's `input` shape.
 * @see {@link AddApplicationInputCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddApplicationInputCommand = /** @class */ (function (_super) {
    __extends(AddApplicationInputCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddApplicationInputCommand(input) {
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
    AddApplicationInputCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "AddApplicationInputCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddApplicationInputRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddApplicationInputResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddApplicationInputCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddApplicationInputCommand(input, context);
    };
    AddApplicationInputCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddApplicationInputCommand(output, context);
    };
    return AddApplicationInputCommand;
}($Command));
export { AddApplicationInputCommand };
//# sourceMappingURL=AddApplicationInputCommand.js.map