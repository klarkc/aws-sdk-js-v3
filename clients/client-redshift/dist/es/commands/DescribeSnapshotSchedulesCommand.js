import { __extends } from "tslib";
import { DescribeSnapshotSchedulesMessage, DescribeSnapshotSchedulesOutputMessage } from "../models/models_1";
import { deserializeAws_queryDescribeSnapshotSchedulesCommand, serializeAws_queryDescribeSnapshotSchedulesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of snapshot schedules. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeSnapshotSchedulesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeSnapshotSchedulesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeSnapshotSchedulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSnapshotSchedulesCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotSchedulesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSnapshotSchedulesCommand = /** @class */ (function (_super) {
    __extends(DescribeSnapshotSchedulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSnapshotSchedulesCommand(input) {
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
    DescribeSnapshotSchedulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeSnapshotSchedulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSnapshotSchedulesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSnapshotSchedulesOutputMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSnapshotSchedulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeSnapshotSchedulesCommand(input, context);
    };
    DescribeSnapshotSchedulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeSnapshotSchedulesCommand(output, context);
    };
    return DescribeSnapshotSchedulesCommand;
}($Command));
export { DescribeSnapshotSchedulesCommand };
//# sourceMappingURL=DescribeSnapshotSchedulesCommand.js.map