import { __extends } from "tslib";
import { UpdateTableRequest, UpdateTableResponse } from "../models/models_0";
import { deserializeAws_json1_0UpdateTableCommand, serializeAws_json1_0UpdateTableCommand, } from "../protocols/Aws_json1_0";
import { getEndpointDiscoveryRequiredPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the retention duration of the memory store and magnetic store for your Timestream table.
 *          Note that the change in retention duration takes effect immediately.
 *          For example, if the retention period of the memory store was initially set to 2 hours and then changed to 24 hours,
 *          the memory store will be capable of holding 24 hours of data, but will
 *          be populated with 24 hours of data 22 hours after this change was made.
 *          Timestream does not retrieve data from the magnetic store to populate the memory store. </p>
 *          <p>Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, UpdateTableCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, UpdateTableCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new UpdateTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTableCommandInput} for command's `input` shape.
 * @see {@link UpdateTableCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTableCommand = /** @class */ (function (_super) {
    __extends(UpdateTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTableCommand(input) {
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
    UpdateTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointDiscoveryRequiredPlugin(configuration, { clientStack: clientStack, options: options }));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TimestreamWriteClient";
        var commandName = "UpdateTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTableResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateTableCommand(input, context);
    };
    UpdateTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateTableCommand(output, context);
    };
    return UpdateTableCommand;
}($Command));
export { UpdateTableCommand };
//# sourceMappingURL=UpdateTableCommand.js.map