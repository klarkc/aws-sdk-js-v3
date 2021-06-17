import { __extends } from "tslib";
import { CreateTaskRequest, CreateTaskResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateTaskCommand, serializeAws_json1_1CreateTaskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a task.</p>
 *          <p>A task includes a source location and a destination location, and a configuration
 *       that specifies how data is transferred. A task always transfers data from the source
 *       location to the destination location. The configuration specifies options such as
 *       task scheduling, bandwidth limits, etc. A task is the complete definition of a data
 *       transfer.</p>
 *          <p>When you create a task that transfers data between AWS services in different AWS Regions,
 *       one of the two locations that you specify must reside in the Region where DataSync is being
 *       used. The other location must be specified in a different Region.</p>
 *          <p>You can transfer data between commercial AWS Regions except for China, or between AWS
 *       GovCloud (US-East and US-West) Regions.</p>
 *
 *          <important>
 *             <p>When you use DataSync to copy files or objects between AWS Regions,
 *       you pay for data transfer between Regions. This is billed as data transfer OUT
 *       from your source Region to your destination Region. For more information,
 *       see <a href="http://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer">Data Transfer pricing</a>.
 *     </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateTaskCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateTaskCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTaskCommandInput} for command's `input` shape.
 * @see {@link CreateTaskCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTaskCommand = /** @class */ (function (_super) {
    __extends(CreateTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTaskCommand(input) {
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
    CreateTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "CreateTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateTaskCommand(input, context);
    };
    CreateTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateTaskCommand(output, context);
    };
    return CreateTaskCommand;
}($Command));
export { CreateTaskCommand };
//# sourceMappingURL=CreateTaskCommand.js.map