import { __extends } from "tslib";
import { GetExportSnapshotRecordsRequest, GetExportSnapshotRecordsResult } from "../models/models_0";
import { deserializeAws_json1_1GetExportSnapshotRecordsCommand, serializeAws_json1_1GetExportSnapshotRecordsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the export snapshot record created as a result of the <code>export snapshot</code>
 *       operation.</p>
 *          <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related
 *       resources with the <code>create cloud formation stack</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetExportSnapshotRecordsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetExportSnapshotRecordsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetExportSnapshotRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExportSnapshotRecordsCommandInput} for command's `input` shape.
 * @see {@link GetExportSnapshotRecordsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetExportSnapshotRecordsCommand = /** @class */ (function (_super) {
    __extends(GetExportSnapshotRecordsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetExportSnapshotRecordsCommand(input) {
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
    GetExportSnapshotRecordsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetExportSnapshotRecordsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetExportSnapshotRecordsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetExportSnapshotRecordsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetExportSnapshotRecordsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetExportSnapshotRecordsCommand(input, context);
    };
    GetExportSnapshotRecordsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetExportSnapshotRecordsCommand(output, context);
    };
    return GetExportSnapshotRecordsCommand;
}($Command));
export { GetExportSnapshotRecordsCommand };
//# sourceMappingURL=GetExportSnapshotRecordsCommand.js.map