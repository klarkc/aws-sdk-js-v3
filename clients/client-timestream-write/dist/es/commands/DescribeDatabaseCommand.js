import { __extends } from "tslib";
import { DescribeDatabaseRequest, DescribeDatabaseResponse } from "../models/models_0";
import { deserializeAws_json1_0DescribeDatabaseCommand, serializeAws_json1_0DescribeDatabaseCommand, } from "../protocols/Aws_json1_0";
import { getEndpointDiscoveryRequiredPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the database, including the database name, time that the database was created,
 *          and the total number of tables found within the database.
 *          Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, DescribeDatabaseCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, DescribeDatabaseCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new DescribeDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDatabaseCommandInput} for command's `input` shape.
 * @see {@link DescribeDatabaseCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDatabaseCommand = /** @class */ (function (_super) {
    __extends(DescribeDatabaseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDatabaseCommand(input) {
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
    DescribeDatabaseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointDiscoveryRequiredPlugin(configuration, { clientStack: clientStack, options: options }));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TimestreamWriteClient";
        var commandName = "DescribeDatabaseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDatabaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDatabaseResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDatabaseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeDatabaseCommand(input, context);
    };
    DescribeDatabaseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeDatabaseCommand(output, context);
    };
    return DescribeDatabaseCommand;
}($Command));
export { DescribeDatabaseCommand };
//# sourceMappingURL=DescribeDatabaseCommand.js.map