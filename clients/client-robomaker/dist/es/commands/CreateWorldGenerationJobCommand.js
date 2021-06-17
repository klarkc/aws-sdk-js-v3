import { __extends } from "tslib";
import { CreateWorldGenerationJobRequest, CreateWorldGenerationJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateWorldGenerationJobCommand, serializeAws_restJson1CreateWorldGenerationJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates worlds using the specified template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateWorldGenerationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateWorldGenerationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateWorldGenerationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorldGenerationJobCommandInput} for command's `input` shape.
 * @see {@link CreateWorldGenerationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWorldGenerationJobCommand = /** @class */ (function (_super) {
    __extends(CreateWorldGenerationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateWorldGenerationJobCommand(input) {
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
    CreateWorldGenerationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "CreateWorldGenerationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateWorldGenerationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateWorldGenerationJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateWorldGenerationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateWorldGenerationJobCommand(input, context);
    };
    CreateWorldGenerationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateWorldGenerationJobCommand(output, context);
    };
    return CreateWorldGenerationJobCommand;
}($Command));
export { CreateWorldGenerationJobCommand };
//# sourceMappingURL=CreateWorldGenerationJobCommand.js.map