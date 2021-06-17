import { __extends } from "tslib";
import { CreateSoftwareUpdateJobRequest, CreateSoftwareUpdateJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateSoftwareUpdateJobCommand, serializeAws_restJson1CreateSoftwareUpdateJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateSoftwareUpdateJobCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateSoftwareUpdateJobCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateSoftwareUpdateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSoftwareUpdateJobCommandInput} for command's `input` shape.
 * @see {@link CreateSoftwareUpdateJobCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSoftwareUpdateJobCommand = /** @class */ (function (_super) {
    __extends(CreateSoftwareUpdateJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSoftwareUpdateJobCommand(input) {
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
    CreateSoftwareUpdateJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "CreateSoftwareUpdateJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSoftwareUpdateJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSoftwareUpdateJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSoftwareUpdateJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSoftwareUpdateJobCommand(input, context);
    };
    CreateSoftwareUpdateJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSoftwareUpdateJobCommand(output, context);
    };
    return CreateSoftwareUpdateJobCommand;
}($Command));
export { CreateSoftwareUpdateJobCommand };
//# sourceMappingURL=CreateSoftwareUpdateJobCommand.js.map