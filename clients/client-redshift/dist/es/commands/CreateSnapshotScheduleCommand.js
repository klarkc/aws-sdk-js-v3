import { __extends } from "tslib";
import { CreateSnapshotScheduleMessage, SnapshotSchedule } from "../models/models_0";
import { deserializeAws_queryCreateSnapshotScheduleCommand, serializeAws_queryCreateSnapshotScheduleCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateSnapshotScheduleCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateSnapshotScheduleCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CreateSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSnapshotScheduleCommand = /** @class */ (function (_super) {
    __extends(CreateSnapshotScheduleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSnapshotScheduleCommand(input) {
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
    CreateSnapshotScheduleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "CreateSnapshotScheduleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSnapshotScheduleMessage.filterSensitiveLog,
            outputFilterSensitiveLog: SnapshotSchedule.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSnapshotScheduleCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateSnapshotScheduleCommand(input, context);
    };
    CreateSnapshotScheduleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateSnapshotScheduleCommand(output, context);
    };
    return CreateSnapshotScheduleCommand;
}($Command));
export { CreateSnapshotScheduleCommand };
//# sourceMappingURL=CreateSnapshotScheduleCommand.js.map