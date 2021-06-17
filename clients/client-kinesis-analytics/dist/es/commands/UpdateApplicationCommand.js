import { __extends } from "tslib";
import { UpdateApplicationRequest, UpdateApplicationResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateApplicationCommand, serializeAws_json1_1UpdateApplicationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Updates an existing Amazon Kinesis Analytics application. Using this API,
 *             you can update application code, input configuration, and
 *             output configuration. </p>
 *         <p>Note that Amazon Kinesis Analytics updates the <code>CurrentApplicationVersionId</code>
 *             each time you update your application. </p>
 *         <p>This operation requires permission for the
 *             <code>kinesisanalytics:UpdateApplication</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, UpdateApplicationCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, UpdateApplicationCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * const client = new KinesisAnalyticsClient(config);
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApplicationCommand = /** @class */ (function (_super) {
    __extends(UpdateApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateApplicationCommand(input) {
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
    UpdateApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsClient";
        var commandName = "UpdateApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateApplicationCommand(input, context);
    };
    UpdateApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateApplicationCommand(output, context);
    };
    return UpdateApplicationCommand;
}($Command));
export { UpdateApplicationCommand };
//# sourceMappingURL=UpdateApplicationCommand.js.map