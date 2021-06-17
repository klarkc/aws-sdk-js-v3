import { __extends } from "tslib";
import { CreateWorldExportJobRequest, CreateWorldExportJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateWorldExportJobCommand, serializeAws_restJson1CreateWorldExportJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a world export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateWorldExportJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateWorldExportJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateWorldExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorldExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateWorldExportJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWorldExportJobCommand = /** @class */ (function (_super) {
    __extends(CreateWorldExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateWorldExportJobCommand(input) {
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
    CreateWorldExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "CreateWorldExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateWorldExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateWorldExportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateWorldExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateWorldExportJobCommand(input, context);
    };
    CreateWorldExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateWorldExportJobCommand(output, context);
    };
    return CreateWorldExportJobCommand;
}($Command));
export { CreateWorldExportJobCommand };
//# sourceMappingURL=CreateWorldExportJobCommand.js.map