import { __extends } from "tslib";
import { CreateExportJobRequest, CreateExportJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateExportJobCommand, serializeAws_restJson1CreateExportJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an export job for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateExportJobCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateExportJobCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateExportJobCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateExportJobCommand = /** @class */ (function (_super) {
    __extends(CreateExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateExportJobCommand(input) {
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
    CreateExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "CreateExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateExportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateExportJobCommand(input, context);
    };
    CreateExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateExportJobCommand(output, context);
    };
    return CreateExportJobCommand;
}($Command));
export { CreateExportJobCommand };
//# sourceMappingURL=CreateExportJobCommand.js.map