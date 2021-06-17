import { __extends } from "tslib";
import { RollbackApplicationRequest, RollbackApplicationResponse } from "../models/models_0";
import { deserializeAws_json1_1RollbackApplicationCommand, serializeAws_json1_1RollbackApplicationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Reverts the application to the previous running version. You can
 *             roll back an application if you suspect it is stuck in a transient status. </p>
 *         <p>You can roll back an application only if it is in the <code>UPDATING</code>
 *             or <code>AUTOSCALING</code> status.</p>
 *         <p>When you rollback an application, it loads state data from the last successful snapshot.
 *         If the application has no snapshots, Kinesis Data Analytics rejects the rollback request.</p>
 *         <p>This action is not supported for Kinesis Data Analytics for SQL applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, RollbackApplicationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, RollbackApplicationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new RollbackApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RollbackApplicationCommandInput} for command's `input` shape.
 * @see {@link RollbackApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RollbackApplicationCommand = /** @class */ (function (_super) {
    __extends(RollbackApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RollbackApplicationCommand(input) {
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
    RollbackApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "RollbackApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RollbackApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RollbackApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RollbackApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RollbackApplicationCommand(input, context);
    };
    RollbackApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RollbackApplicationCommand(output, context);
    };
    return RollbackApplicationCommand;
}($Command));
export { RollbackApplicationCommand };
//# sourceMappingURL=RollbackApplicationCommand.js.map