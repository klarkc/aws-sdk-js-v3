import { __extends } from "tslib";
import { DeleteApplicationOutputRequest, DeleteApplicationOutputResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteApplicationOutputCommand, serializeAws_json1_1DeleteApplicationOutputCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination.</p>
 *         <p>This operation requires permissions to perform the
 *             <code>kinesisanalytics:DeleteApplicationOutput</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, DeleteApplicationOutputCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, DeleteApplicationOutputCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * const client = new KinesisAnalyticsClient(config);
 * const command = new DeleteApplicationOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationOutputCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationOutputCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApplicationOutputCommand = /** @class */ (function (_super) {
    __extends(DeleteApplicationOutputCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteApplicationOutputCommand(input) {
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
    DeleteApplicationOutputCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsClient";
        var commandName = "DeleteApplicationOutputCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteApplicationOutputRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteApplicationOutputResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteApplicationOutputCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteApplicationOutputCommand(input, context);
    };
    DeleteApplicationOutputCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteApplicationOutputCommand(output, context);
    };
    return DeleteApplicationOutputCommand;
}($Command));
export { DeleteApplicationOutputCommand };
//# sourceMappingURL=DeleteApplicationOutputCommand.js.map